import { StateManager } from '../env/stateManager'

export const arithmeticGrader = {
  score(state: StateManager): number {
    let correct = 0
    let totalViolations = 0

    for (const p of state.inspectedPackets) {
      const depth = state.packetDepths[p.packetId]
      if ((depth === 'formulation' || depth === 'regulatory') && p.formulation?.nutritionPanel) {
        const np = p.formulation.nutritionPanel.per100g
        const sum = np.proteinG + np.totalFatG + np.carbohydratesG + np.dietaryFibreG + np.moistureG
        const hasViolation = Math.abs(sum - 100) > 0.5
        
        if (hasViolation) {
          totalViolations++
          const agentFlagged = state.agentFlags.some(f => 
             (f.packetId === p.packetId || f.affectsEntireBatch) && f.violationCode === 'VC-FORM-001'
          )
          if (agentFlagged) correct++
        }
      }
    }

    if (totalViolations === 0) return 1.0
    return correct / totalViolations
  }
}
