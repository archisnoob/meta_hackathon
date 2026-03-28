import { StateManager } from '../env/stateManager'

export const dispositionGrader = {
  score(state: StateManager): number {
    const agentDisp = state.disposition
    const gtDisp = state.groundTruth.correctDisposition

    if (agentDisp === gtDisp) {
      if (agentDisp === 'PASS' || agentDisp === 'HOLD') {
        return 1.0
      } else if (agentDisp === 'QUARANTINE_SUBSET') {
        const sortedAgent = [...state.quarantineLots].sort().join(',')
        const sortedGT = [...state.groundTruth.correctQuarantineLots].sort().join(',')
        return sortedAgent === sortedGT ? 1.0 : 0.4
      }
    } else {
      if (agentDisp === 'HOLD' && gtDisp === 'PASS') {
        return 0.6
      }
    }
    return 0.0
  },

  recallPenalty(state: StateManager, rawScore: number = 0.0): number {
    const agentDisp = state.disposition
    const gtDisp = state.groundTruth.correctDisposition
    
    // Only applies on false PASS
    if (agentDisp === 'PASS' && (gtDisp === 'HOLD' || gtDisp === 'QUARANTINE_SUBSET')) {
      const cat = state.batchMetadata.productCategory
      let penalty = 0.0
      
      // Calculate how much to lose from the raw score
      if (cat === 'snack') {
        penalty += rawScore * 0.6  // lose 60%
      } else if (cat === 'baby_food') {
        penalty += rawScore * 0.9  // lose 90%
      } else if (cat === 'supplement') {
        penalty += rawScore * 0.8  // lose 80%
      }

      // Liability multiplier
      if (state.batchMetadata.recallValueUSD > 500000) {
        penalty += 0.1
      }
      
      return penalty
    }
    return 0.0
  }
}
