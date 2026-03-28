import { TaskDefinition } from '../types'
import { taskEasy } from './taskEasy'
import { taskMedium } from './taskMedium'
import { taskHard } from './taskHard'

export const taskRegistry = new Map<string, TaskDefinition>()
taskRegistry.set(taskEasy.taskId, taskEasy)
taskRegistry.set(taskMedium.taskId, taskMedium)
taskRegistry.set(taskHard.taskId, taskHard)
