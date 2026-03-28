import { Scenario, easyScenario } from '../data/scenarios/easy'
import { mediumScenario } from '../data/scenarios/medium'
import { hardScenario } from '../data/scenarios/hard'

export class ScenarioGenerator {
  generate(taskId: string, seed: number): Scenario {
    switch (taskId) {
      case 'task_easy': return easyScenario
      case 'task_medium': return mediumScenario
      case 'task_hard': return hardScenario
      default: throw new Error(`Unknown taskId: ${taskId}`)
    }
  }
}
