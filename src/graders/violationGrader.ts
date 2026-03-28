import { StateManager } from '../env/stateManager'

export function getCorrectMatches(state: StateManager) {
  let correctMatches = 0
  const matchedGT = new Set<string>() 
  
  for (const flag of state.agentFlags) {
    for (let i = 0; i < state.groundTruth.violations.length; i++) {
        if (matchedGT.has(i.toString())) continue
        const gt = state.groundTruth.violations[i]
        
        if (gt.violationCode === flag.violationCode) {
            if (gt.affectsEntireBatch === true || flag.affectsEntireBatch === true) {
               correctMatches++
               matchedGT.add(i.toString())
               break
            } else if (gt.packetId === flag.packetId) {
               correctMatches++
               matchedGT.add(i.toString())
               break
            }
        }
    }
  }
  return { correctMatches, totalGT: state.groundTruth.violations.length, totalFlagged: state.agentFlags.length }
}

export const violationGrader = {
  recall(state: StateManager): number {
    const r = getCorrectMatches(state)
    if (r.totalGT === 0) return 1.0
    return r.correctMatches / r.totalGT
  },
  precision(state: StateManager): number {
    const r = getCorrectMatches(state)
    if (r.totalFlagged === 0) return r.totalGT === 0 ? 1.0 : 0.0
    return r.correctMatches / r.totalFlagged
  }
}
