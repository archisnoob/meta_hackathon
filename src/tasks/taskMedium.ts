import { TaskDefinition } from '../types'

export const taskMedium: TaskDefinition = {
  taskId: 'task_medium',
  name: 'Baby food batch — formulation and arithmetic audit',
  difficulty: 'medium',
  maxSteps: 12,
  initialBudget: 30,
  budgetPerCriticalFind: 5,
  mandatoryDeepDiveThreshold: 2,
  productCategory: 'baby_food',
  destinationMarket: 'EU',
  description: 'Inspect baby food compliance for EU market.',
  actionSchema: { }
}
