import { Action, Observation, StepResult, EpisodeScore, TaskDefinition, InspectRequest, ViolationFlag } from '../types'
import { StateManager } from './stateManager'
import { ScenarioGenerator } from './scenarioGenerator'
import { RewardCalculator } from './rewardCalculator'
import { BudgetManager } from './budgetManager'
import { taskRegistry } from '../tasks/taskRegistry'
import { scoreEpisode } from '../graders'

export class PackComplianceEnv {
  private state: StateManager
  private generator: ScenarioGenerator
  private rewardCalc: RewardCalculator
  private budgetMgr: BudgetManager

  constructor() {
    this.state = new StateManager()
    this.generator = new ScenarioGenerator()
    this.rewardCalc = new RewardCalculator()
    this.budgetMgr = new BudgetManager()
  }

  reset(taskId: string, seed: number = 42): Observation {
    const task = taskRegistry.get(taskId)
    if (!task) throw new Error(`Unknown task: ${taskId}`)

    const scenario = this.generator.generate(taskId, seed)
    this.state.initialize(task, scenario)
    return this.state.buildObservation()
  }

  private processInspections(requests: InspectRequest[] = []) {
    const inspectedThisStep: { packetId: string, depth: string }[] = []
    
    for (const req of requests) {
      // Prevent multiple inspections of same packet
      if (!this.state.inspectedPackets.some(p => p.packetId === req.packetId)) {
        const full = this.state.allPackets.find(p => p.packetId === req.packetId)
        if (full) {
          this.state.packetDepths[req.packetId] = req.depth
          const masked = JSON.parse(JSON.stringify(full)) // shallow copy, remove nested data
          
          if (req.depth === 'label') {
            delete masked.formulation
            delete masked.regulatory
          } else if (req.depth === 'formulation') {
            delete masked.regulatory
          }
          
          this.state.inspectedPackets.push(masked)
          this.state.uninspectedPacketIds = this.state.uninspectedPacketIds.filter(id => id !== req.packetId)
          inspectedThisStep.push(req)
        }
      }
    }
    return inspectedThisStep
  }

  private processViolations(flags: ViolationFlag[] = []) {
    let correct = 0, falsePositives = 0, severityMatches = 0;
    const newCriticals: { lotNumber: string, isBannedSubstance: boolean, isArithmetic: boolean }[] = [];
    
    for (const flag of flags) {
      let isCorrect = !!this.state.groundTruth.violations.find((gt: any) => {
        if (gt.violationCode === flag.violationCode && (gt.packetId === flag.packetId || gt.affectsEntireBatch || flag.affectsEntireBatch)) {
          if (gt.severity === flag.severity) severityMatches++;
          if (gt.severity === 'critical') {
            newCriticals.push({ lotNumber: flag.lotNumber, isBannedSubstance: (gt.cascadeTriggers || []).includes('BANNED'), isArithmetic: gt.isArithmeticViolation })
          }
          return true;
        }
        return false;
      })
      
      if (isCorrect) correct++;
      else falsePositives++;
      
      this.state.agentFlags.push(flag);
      // Ensure specific string codes exist in the simplified Observation array
      if (!this.state.violationsFlaggedSoFar.includes(flag.violationCode)) {
         this.state.violationsFlaggedSoFar.push(flag.violationCode);
      }
    }
    
    return { correct, falsePositives, severityMatches, newCriticals }
  }

  private processCascades(newCriticals: any[]) {
    // Cascade additions are actually handled during budgetManager.update's risk escalation block.
    // So we just passively return what was triggered.
    return { 
      triggered: newCriticals.length > 0, 
      newChecks: this.state.mandatoryChecksPending 
    }
  }

  step(action: Action): StepResult {
    if (this.state.isDone()) {
      throw new Error('Episode is done. Call reset() to start a new episode.')
    }

    const inspectedThisStep = this.processInspections(action.inspectPackets || [])
    const violationResult = this.processViolations(action.flagViolations || [])
    const budgetResult = this.budgetMgr.update(this.state, inspectedThisStep, violationResult.newCriticals)
    const cascadeResult = this.processCascades(violationResult.newCriticals)

    const reward = this.rewardCalc.calculate({
      violationResult,
      budgetResult,
      cascadeResult,
      taskId: this.state.taskId,
      productCategory: this.state.batchMetadata.productCategory,
    })

    this.state.advanceStep()

    const done = action.batchDisposition !== undefined
      || this.state.stepNumber >= this.state.maxSteps
      || (this.state.budgetRemaining <= 0 && this.state.mandatoryChecksPending.length > 0)

    if (done && action.batchDisposition) {
      this.state.setDisposition(action.batchDisposition, action.quarantineLotIds ?? [])
    }

    const episodeScore = done ? scoreEpisode(this.state) : undefined

    return {
      observation: this.state.buildObservation(),
      reward,
      done,
      info: {
        correctViolationsThisStep:  violationResult.correct,
        falsePositivesThisStep:     violationResult.falsePositives,
        severityMatchesThisStep:    violationResult.severityMatches,
        budgetSpentThisStep:        budgetResult.spent,
        cascadeTriggered:           cascadeResult.triggered,
        newMandatoryChecks:         cascadeResult.newChecks,
        episodeScore:               episodeScore?.finalScore,
      },
    }
  }

  getState() { return this.state.serialize() }

  getEpisodeScore(): EpisodeScore {
    if (!this.state.isDone()) throw new Error('Episode not complete. Submit a batchDisposition first.')
    return scoreEpisode(this.state)
  }

  listTasks(): TaskDefinition[] { return Array.from(taskRegistry.values()) }

  selfValidate(): Record<string, { score: number; valid: boolean }> {
    const results: Record<string, { score: number; valid: boolean }> = {}
    for (const taskId of ['task_easy', 'task_medium', 'task_hard']) {
      try {
        this.reset(taskId, 42)
        while (!this.state.isDone()) {
          this.step({
            inspectPackets: [],
            flagViolations: [],
            batchDisposition: this.state.stepNumber >= this.state.maxSteps - 1 ? 'HOLD' : undefined,
          })
        }
        const score = this.getEpisodeScore()
        results[taskId] = { score: score.finalScore, valid: score.finalScore >= 0.0 && score.finalScore <= 1.0 }
      } catch (e) {
        results[taskId] = { score: -1, valid: false }
      }
    }
    return results
  }
}

let envInstance: PackComplianceEnv | null = null

export function getEnv(): PackComplianceEnv {
  if (!envInstance) envInstance = new PackComplianceEnv()
  return envInstance
}
