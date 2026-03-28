import { TaskDefinition } from '../types'

export const taskEasy: TaskDefinition = {
  taskId: 'task_easy',
  name: 'Single snack batch — label compliance check',
  difficulty: 'easy',
  maxSteps: 8,
  initialBudget: 20,
  budgetPerCriticalFind: 5,
  mandatoryDeepDiveThreshold: 2,
  productCategory: 'snack',
  destinationMarket: 'IN',
  description: 'Inspect label compliance for IN market.',
  actionSchema: { }
}
