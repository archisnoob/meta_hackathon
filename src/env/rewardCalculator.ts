import { ProductCategory } from '../types'

export class RewardCalculator {
  calculate(params: {
    violationResult: { correct: number; falsePositives: number; severityMatches: number; newCriticals: any[] },
    budgetResult: { spent: number },
    cascadeResult: { triggered: boolean; newChecks: string[] },
    taskId: string,
    productCategory: ProductCategory
  }): number {
    let reward = 0
    
    // Partial rewards (shaped reward)
    reward += params.violationResult.correct * 0.1
    reward += params.violationResult.severityMatches * 0.05
    reward -= params.violationResult.falsePositives * 0.1
    
    if (params.cascadeResult.triggered) {
      reward += 0.05
    }
    
    // Small penalty for spending budget
    reward -= params.budgetResult.spent * 0.01

    if (isNaN(reward) || !isFinite(reward)) {
      return 0.0
    }
    
    return Number(reward.toFixed(3))
  }
}
