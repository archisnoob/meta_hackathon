import { StateManager } from '../env/stateManager'
import { ViolationSeverity } from '../types'

const SEV_SCORE: Record<ViolationSeverity, number> = {
  'critical': 3,
  'serious': 2,
  'minor': 1
}

export const severityGrader = {
  f1(state: StateManager): number {
    let totalScore = 0
    let matchedCount = 0
    const matchedGT = new Set<string>()

    for (const flag of state.agentFlags) {
      for (let i = 0; i < state.groundTruth.violations.length; i++) {
        if (matchedGT.has(i.toString())) continue
        const gt = state.groundTruth.violations[i]

        if (gt.violationCode === flag.violationCode && (gt.packetId === flag.packetId || gt.affectsEntireBatch || flag.affectsEntireBatch)) {
          matchedCount++
          matchedGT.add(i.toString())

          const diff = Math.abs(SEV_SCORE[gt.severity] - SEV_SCORE[flag.severity])
          if (diff === 0) totalScore += 1.0
          else if (diff === 1) totalScore += 0.5
          else if (diff >= 2) totalScore += 0.0

          break
        }
      }
    }

    if (matchedCount === 0) return state.groundTruth.violations.length === 0 ? 1.0 : 0.0
    return totalScore / matchedCount
  }
}
