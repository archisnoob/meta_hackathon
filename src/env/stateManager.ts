import { 
  Observation, BatchMetadata, Packet, GroundTruth, 
  TaskDefinition, BatchDisposition, InspectionDepth 
} from '../types'
import { Scenario } from '../data/scenarios/easy'

export class StateManager {
  taskId: string = ''
  stepNumber: number = 0
  maxSteps: number = 0
  batchMetadata!: BatchMetadata
  allPackets: Packet[] = []
  groundTruth!: GroundTruth
  
  inspectedPackets: Packet[] = []
  uninspectedPacketIds: string[] = []
  violationsFlaggedSoFar: string[] = []
  agentFlags: import('../types').ViolationFlag[] = []
  
  budgetRemaining: number = 0
  mandatoryChecksPending: string[] = []
  riskLevel: 'low' | 'elevated' | 'high' | 'critical' = 'low'
  applicableRegulations: string[] = []
  hint?: string
  
  packetDepths: Record<string, InspectionDepth> = {}
  disposed: boolean = false
  disposition?: BatchDisposition
  quarantineLots: string[] = []
  criticalsByLot: Set<string> = new Set()

  initialize(task: TaskDefinition, scenario: Scenario) {
    this.taskId = task.taskId
    this.stepNumber = 0
    this.maxSteps = task.maxSteps
    this.batchMetadata = scenario.batchMetadata
    
    this.allPackets = JSON.parse(JSON.stringify(scenario.allPackets))
    this.groundTruth = JSON.parse(JSON.stringify(scenario.groundTruth))
    
    this.uninspectedPacketIds = this.allPackets.map(p => p.packetId)
    this.inspectedPackets = []
    this.violationsFlaggedSoFar = []
    this.agentFlags = []
    
    this.budgetRemaining = task.initialBudget
    this.mandatoryChecksPending = []
    this.riskLevel = 'low'
    
    const m = task.destinationMarket
    this.applicableRegulations = m === 'IN' ? ['FSSAI'] : m === 'EU' ? ['CODEX', 'EU Reg 1169/2011'] : ['FDA 21 CFR']
    this.hint = task.difficulty === 'easy' ? 'Check for missing FSSAI license and net weight issues on LOT-A.' : undefined
    
    this.packetDepths = {}
    this.disposed = false
    this.disposition = undefined
    this.quarantineLots = []
    this.criticalsByLot = new Set()
  }

  buildObservation(): Observation {
    return {
      taskId: this.taskId,
      taskDescription: `Evaluate batch compliance for ${this.batchMetadata.productName}`,
      stepNumber: this.stepNumber,
      maxSteps: this.maxSteps,
      batchMetadata: this.batchMetadata,
      inspectedPackets: this.inspectedPackets,
      uninspectedPacketIds: this.uninspectedPacketIds,
      violationsFlaggedSoFar: this.violationsFlaggedSoFar,
      budgetRemaining: this.budgetRemaining,
      mandatoryChecksPending: this.mandatoryChecksPending,
      stepsRemaining: this.maxSteps - this.stepNumber,
      riskLevel: this.riskLevel,
      applicableRegulations: this.applicableRegulations,
      hint: this.hint
    }
  }

  advanceStep() {
    this.stepNumber++
  }

  isDone() {
    return this.disposed || this.stepNumber >= this.maxSteps || (this.budgetRemaining <= 0)
  }

  setDisposition(disp: BatchDisposition, quarantineLots: string[]) {
    this.disposed = true
    this.disposition = disp
    this.quarantineLots = quarantineLots
  }

  serialize() {
    return {
      taskId: this.taskId,
      stepNumber: this.stepNumber,
      maxSteps: this.maxSteps,
      isDone: this.isDone(),
      budgetRemaining: this.budgetRemaining,
      riskLevel: this.riskLevel,
      disposed: this.disposed,
      disposition: this.disposition,
    }
  }
}
