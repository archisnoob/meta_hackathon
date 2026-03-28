import { StateManager } from './stateManager'
import { DEPTH_COST, InspectRequest, Packet } from '../types'

export class BudgetManager {
  update(
    state: StateManager,
    inspectedThisStep: { packetId: string; depth: string }[],
    newCriticals: { lotNumber: string; isBannedSubstance: boolean; isArithmetic: boolean }[]
  ) {
    let spent = 0

    // Deduct budget for inspections
    for (const req of inspectedThisStep) {
      const cost = DEPTH_COST[req.depth as keyof typeof DEPTH_COST] || 0
      spent += cost
    }
    state.budgetRemaining -= spent

    // Handle risk escalation mapping according to rules:
    // First critical found -> elevated + 5 budget -> same lot formulated
    // Second critical found -> high + 10 budget -> all lots
    // Banned substance found -> critical + 15 budget -> all regulatory
    
    for (const crit of newCriticals) {
      if (crit.isBannedSubstance && !crit.isArithmetic && state.riskLevel !== 'critical') {
        state.riskLevel = 'critical'
        state.budgetRemaining += 15
        if (!state.mandatoryChecksPending.includes('ALL_REGULATORY')) {
           state.mandatoryChecksPending.push('ALL_REGULATORY')
        }
      } else if (!state.criticalsByLot.has(crit.lotNumber)) {
        state.criticalsByLot.add(crit.lotNumber)
        if (state.criticalsByLot.size === 1 && state.riskLevel === 'low') {
          state.riskLevel = 'elevated'
          state.budgetRemaining += 5
          if (!state.mandatoryChecksPending.includes(`LOT_${crit.lotNumber}_FORMULATION`)) {
            state.mandatoryChecksPending.push(`LOT_${crit.lotNumber}_FORMULATION`)
          }
        } else if (state.criticalsByLot.size === 2 && state.riskLevel !== 'critical' && state.riskLevel !== 'high') {
          state.riskLevel = 'high'
          state.budgetRemaining += 10
          if (!state.mandatoryChecksPending.includes('ALL_LOTS_FORMULATION')) {
            state.mandatoryChecksPending.push('ALL_LOTS_FORMULATION')
          }
        }
      }
    }

    if (state.budgetRemaining < 0) {
      state.budgetRemaining = 0
    }

    return { spent }
  }
}
