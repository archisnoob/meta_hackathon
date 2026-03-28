import { PackComplianceEnv } from '../src/env/environment'

describe('Determinism and Env Tests', () => {
  test('reset with seed=42 produces identical observation twice', () => {
    const env = new PackComplianceEnv()
    const obs1 = env.reset('task_easy', 42)
    const obs2 = env.reset('task_easy', 42)
    
    // Have to stringify to compare full objects thoroughly
    expect(JSON.stringify(obs1)).toBe(JSON.stringify(obs2))
  })

  test('all task graders return score in [0.0, 1.0]', () => {
    const env = new PackComplianceEnv()
    for (const taskId of ['task_easy', 'task_medium', 'task_hard']) {
      env.reset(taskId, 42)
      while (!env.getState().isDone) {
        const state = env.getState()
        const isFinal = state.stepNumber >= state.maxSteps - 1;
        env.step({ inspectPackets: [], flagViolations: [], batchDisposition: isFinal ? 'HOLD' : undefined })
      }
      const score = env.getEpisodeScore()
      expect(score.finalScore).toBeGreaterThanOrEqual(0.0)
      expect(score.finalScore).toBeLessThanOrEqual(1.0)
    }
  })

  test('graders are deterministic — same actions same score', () => {
    const env1 = new PackComplianceEnv()
    const env2 = new PackComplianceEnv()
    
    env1.reset('task_easy', 42)
    env2.reset('task_easy', 42)
    
    const action = { 
        inspectPackets: [], 
        flagViolations: [], 
        batchDisposition: 'PASS' as const
    }
    
    env1.step(action)
    env2.step(action)
    
    const score1 = env1.getEpisodeScore()
    const score2 = env2.getEpisodeScore()
    
    expect(score1.finalScore).toBe(score2.finalScore)
  })
})
