import OpenAI from 'openai'

// Fallback to fetch API provided by node 20
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY })
const BASE_URL = process.env.ENV_URL ?? 'http://localhost:7860'
const SEED = parseInt(process.env.BASELINE_SEED ?? '42')

const SYSTEM_PROMPT = `
You are a food product compliance auditor AI. You receive batch inspection
data for packaged food products and must:

1. Choose which packets to inspect and at what depth (label/formulation/regulatory)
2. Flag violations using exact violation codes from the provided schema
3. Use exact corrective action strings from the provided schema
4. Make a final batch disposition: PASS, HOLD, or QUARANTINE_SUBSET

You must respond with valid JSON matching the Action schema exactly.
Available violation codes and corrective actions will be provided.
Budget is limited — be strategic about inspection depth choices.

Action schema:
{
  "inspectPackets": [{ "packetId": string, "depth": "label"|"formulation"|"regulatory" }],
  "flagViolations": [{
    "violationCode": string,
    "packetId": string,
    "lotNumber": string,
    "severity": "critical"|"serious"|"minor",
    "description": string,
    "correctiveAction": string,
    "affectsEntireBatch": boolean
  }],
  "batchDisposition": "PASS"|"HOLD"|"QUARANTINE_SUBSET",
  "quarantineLotIds": ["LOT-A"], 
  "confidence": 0.95,
  "summary": "Everything is good"
}
`

async function runTask(taskId: string): Promise<number> {
  const obs = await fetch(`${BASE_URL}/api/reset`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ taskId, seed: SEED }),
  }).then(r => r.json())

  const messages: OpenAI.ChatCompletionMessageParam[] = [
    { role: 'system', content: SYSTEM_PROMPT },
  ]

  let done = false
  let currentObs = obs

  while (!done) {
    const userMsg = JSON.stringify({
      observation: currentObs,
      instruction: currentObs.stepsRemaining === 1
        ? 'This is your final step. You MUST include a batchDisposition.'
        : 'Inspect packets and/or flag violations. Use budget wisely.',
    })

    messages.push({ role: 'user', content: userMsg })

    const response = await client.chat.completions.create({
      model: 'gpt-4o',
      messages,
      response_format: { type: 'json_object' },
      seed: SEED,
    })

    const actionJson = response.choices[0].message.content!
    messages.push({ role: 'assistant', content: actionJson })

    const stepResult = await fetch(`${BASE_URL}/api/step`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: actionJson,
    }).then(r => r.json())

    currentObs = stepResult.observation
    done = stepResult.done
  }

  const score = await fetch(`${BASE_URL}/api/grader`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: '{}',
  }).then(r => r.json())

  return score.finalScore
}

async function main() {
  console.log(`Running baseline with seed=${SEED}`)
  const results: Record<string, number> = {}

  for (const taskId of ['task_easy', 'task_medium', 'task_hard']) {
    try {
       results[taskId] = await runTask(taskId)
       console.log(`${taskId}: ${results[taskId]?.toFixed(3) || 0}`)
    } catch(e) {
       console.error(`Failed ${taskId}:`, e)
       results[taskId] = 0
    }
  }

  const average = Object.values(results).reduce((a, b) => a + b, 0) / 3
  console.log(`average: ${average.toFixed(3)}`)
  console.log(JSON.stringify({ ...results, average, seed: SEED }, null, 2))
}

if (require.main === module) {
  main().catch(console.error)
}
