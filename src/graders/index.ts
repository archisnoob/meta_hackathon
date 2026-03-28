import { StateManager } from '../env/stateManager'
import { EpisodeScore } from '../types'
import { violationGrader } from './violationGrader'
import { arithmeticGrader } from './arithmeticGrader'
import { severityGrader } from './severityGrader'
import { dispositionGrader } from './dispositionGrader'

function efficiencyScore(state: StateManager): number {
  if (state.stepNumber === 0) return 1.0
  const ratio = state.stepNumber / state.maxSteps
  const eff = Math.max(0.0, Math.min(1.0, 1.5 - ratio))
  return eff
}

export function scoreEpisode(state: StateManager): EpisodeScore {
  const recall      = violationGrader.recall(state)
  const precision   = violationGrader.precision(state)
  const severityF1  = severityGrader.f1(state)
  const arithmetic  = arithmeticGrader.score(state)
  const disposition = dispositionGrader.score(state)
  const efficiency  = efficiencyScore(state)

  const raw =
    (recall      * 0.30) +
    (precision   * 0.20) +
    (severityF1  * 0.15) +
    (arithmetic  * 0.15) +
    (disposition * 0.15) +
    (efficiency  * 0.05)

  // Pass raw score to calculate relative percentage loss
  const penalty = dispositionGrader.recallPenalty(state, raw)
  const finalScore = Math.max(0.0, Math.min(1.0, raw - penalty))

  return { 
    taskId: state.taskId,
    violationRecall: recall, 
    violationPrecision: precision, 
    severityF1: severityF1, 
    arithmeticScore: arithmetic,
    dispositionScore: disposition, 
    efficiencyScore: efficiency, 
    finalScore: finalScore, 
    penaltyApplied: penalty,
    breakdown: { 
      recall, 
      precision, 
      severityF1,
      arithmetic, 
      disposition, 
      efficiency 
    } 
  }
}
