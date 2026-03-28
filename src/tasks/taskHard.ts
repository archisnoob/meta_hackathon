import { TaskDefinition } from '../types'

export const taskHard: TaskDefinition = {
  taskId: 'task_hard',
  name: 'Supplement crisis — mislabeling and cross-jurisdiction',
  difficulty: 'hard',
  maxSteps: 15,
  initialBudget: 45,
  budgetPerCriticalFind: 5,
  mandatoryDeepDiveThreshold: 2,
  productCategory: 'supplement',
  destinationMarket: 'US',
  description: 'Inspect supplement compliance for US market including systematic mislabeling.',
  actionSchema: { }
}
