# PackCompliance-Env — Complete Antigravity Build Prompt
# TypeScript + Next.js Implementation

> This is your single source of truth. Read every word before writing
> any code. Every decision is final and scored against the judging rubric.
> Projected score: 93–96 / 100.

---

## 0. WHAT YOU ARE BUILDING

PackCompliance-Env is a pre-distribution batch compliance environment for
packaged food products, built as an OpenEnv-compliant API using TypeScript
and Next.js API routes.

An AI agent acts as a quality auditor. It:
1. Receives a batch of 50–200 food packets to inspect
2. Chooses which packets to inspect and at what depth (3 levels)
3. Detects ingredient violations across FSSAI / FDA / EU CODEX
4. Makes a binding batch verdict: PASS / HOLD / QUARANTINE_SUBSET

This is NOT a restaurant inspector. NOT a single-item checker.
One episode = one batch. The agent samples strategically.
Every early critical finding FORCES more packets to be checked.
This risk-adaptive mechanic is the novel RL contribution.

---

## 1. TECH STACK — EXACT VERSIONS

```
Runtime:        Node.js 20 LTS
Framework:      Next.js 14 (App Router)
Language:       TypeScript 5.3 (strict mode)
Validation:     Zod 3.22
HTTP Client:    Native fetch (Node 20 built-in)
AI Baseline:    openai 4.x npm package
Testing:        Jest + ts-jest
Container:      Docker (node:20-alpine)
Deploy:         Hugging Face Spaces (Docker SDK)
Port:           7860
```

**package.json scripts — required:**
```json
{
  "scripts": {
    "dev": "next dev -p 7860",
    "build": "next build",
    "start": "next start -p 7860",
    "test": "jest",
    "baseline": "npx ts-node baseline/run_baseline.ts"
  }
}
```

---

## 2. COMPLETE PROJECT STRUCTURE

```
packcompliance-env/
│
├── README.md
├── openenv.yaml
├── Dockerfile
├── package.json
├── tsconfig.json
├── next.config.js
├── jest.config.ts
│
├── src/
│   ├── types/
│   │   └── index.ts               ← ALL TypeScript types + Zod schemas
│   │
│   ├── env/
│   │   ├── environment.ts         ← PackComplianceEnv class (singleton)
│   │   ├── stateManager.ts        ← episode state
│   │   ├── scenarioGenerator.ts   ← loads + seeds scenarios
│   │   ├── rewardCalculator.ts    ← step-level reward
│   │   └── budgetManager.ts       ← risk-adaptive sampling logic
│   │
│   ├── tasks/
│   │   ├── taskRegistry.ts        ← maps taskId → task config
│   │   ├── taskEasy.ts
│   │   ├── taskMedium.ts
│   │   └── taskHard.ts
│   │
│   ├── graders/
│   │   ├── violationGrader.ts     ← precision + recall
│   │   ├── arithmeticGrader.ts    ← nutrition sum validation
│   │   ├── severityGrader.ts      ← enum comparison
│   │   └── dispositionGrader.ts   ← PASS/HOLD/QUARANTINE scoring
│   │
│   ├── data/
│   │   ├── violationCodes.ts      ← typed violation DB (not JSON)
│   │   ├── additiveDatabase.ts    ← additive rules per jurisdiction
│   │   ├── jurisdictionRules.ts   ← per-market banned substance lists
│   │   ├── correctiveActions.ts   ← closed enum of valid fixes
│   │   └── scenarios/
│   │       ├── easy.ts
│   │       ├── medium.ts
│   │       └── hard.ts
│   │
│   └── app/
│       └── api/
│           ├── reset/
│           │   └── route.ts
│           ├── step/
│           │   └── route.ts
│           ├── state/
│           │   └── route.ts
│           ├── tasks/
│           │   └── route.ts
│           ├── grader/
│           │   └── route.ts
│           ├── baseline/
│           │   └── route.ts
│           ├── validate/
│           │   └── route.ts
│           └── health/
│               └── route.ts
│
├── baseline/
│   ├── run_baseline.ts
│   └── prompts.ts
│
└── tests/
    ├── environment.test.ts
    ├── graders.test.ts
    ├── models.test.ts
    └── determinism.test.ts
```

---

## 3. ALL TYPESCRIPT TYPES (src/types/index.ts)

Write this file completely before touching anything else.
Every other file imports from here. No type defined anywhere else.

```typescript
import { z } from 'zod'

// ─── Enumerations ─────────────────────────────────────────────────────────────

export const ProductCategory = z.enum(['snack', 'baby_food', 'supplement'])
export type ProductCategory = z.infer<typeof ProductCategory>

export const DestinationMarket = z.enum(['IN', 'US', 'EU'])
export type DestinationMarket = z.infer<typeof DestinationMarket>

export const InspectionDepth = z.enum(['label', 'formulation', 'regulatory'])
export type InspectionDepth = z.infer<typeof InspectionDepth>

// Budget cost per depth level — IMMUTABLE
export const DEPTH_COST: Record<InspectionDepth, number> = {
  label:       1,
  formulation: 2,
  regulatory:  3,
}

export const ViolationSeverity = z.enum(['critical', 'serious', 'minor'])
export type ViolationSeverity = z.infer<typeof ViolationSeverity>

export const BatchDisposition = z.enum([
  'PASS',
  'HOLD',
  'QUARANTINE_SUBSET',
])
export type BatchDisposition = z.infer<typeof BatchDisposition>

// ─── Packet Data (what agent sees per sampled packet) ─────────────────────────

export const AdditiveEntry = z.object({
  additiveCode:              z.string(),   // "E211" / "INS 211"
  name:                      z.string(),   // "Sodium Benzoate"
  declaredConcentrationMgKg: z.number(),
  legalLimitMgKg:            z.number(),   // in destination market
  isPermittedInMarket:       z.boolean(),
})
export type AdditiveEntry = z.infer<typeof AdditiveEntry>

export const NutritionPanel = z.object({
  per100g: z.object({
    energyKcal:        z.number(),
    proteinG:          z.number(),
    totalFatG:         z.number(),
    saturatedFatG:     z.number(),
    carbohydratesG:    z.number(),
    sugarsG:           z.number(),
    dietaryFibreG:     z.number(),
    sodiumMg:          z.number(),
    moistureG:         z.number(),
  }),
  // Sum of protein + totalFat + carbohydrates + dietaryFibre + moisture
  // MUST equal 100 ± 0.5g. If not → arithmetic violation.
  declaredTotalG: z.number(),
})
export type NutritionPanel = z.infer<typeof NutritionPanel>

export const LabelData = z.object({
  productName:           z.string(),
  manufacturerName:      z.string(),
  countryOfOrigin:       z.string(),
  batchCode:             z.string(),
  lotNumber:             z.string(),
  manufacturingDate:     z.string(),   // ISO date
  expiryDate:            z.string(),   // ISO date
  netWeightG:            z.number(),
  ingredientList:        z.array(z.string()),
  allergenDeclaration:   z.array(z.string()),
  mayContainAdvisory:    z.array(z.string()),
  fssaiLicenseNumber:    z.string().optional(),
  fdaRegistrationNumber: z.string().optional(),
  hasNutritionLabel:     z.boolean(),
  languageCompliant:     z.boolean(),   // required languages for market
  hasQRCode:             z.boolean(),
})
export type LabelData = z.infer<typeof LabelData>

export const FormulationData = z.object({
  additives:               z.array(AdditiveEntry),
  preservativeCombinations: z.array(z.object({
    additive1Code: z.string(),
    additive2Code: z.string(),
    combinedLimitMgKg: z.number(),
    declaredCombinedMgKg: z.number(),
    exceedsLimit: z.boolean(),
  })),
  nutritionPanel:   NutritionPanel,
  coloringAgents:   z.array(AdditiveEntry),
  artificialFlavors: z.array(z.string()),
  productionLineId: z.string(),
  sharedLineProducts: z.array(z.string()), // other products on same line
})
export type FormulationData = z.infer<typeof FormulationData>

export const RegulatoryData = z.object({
  destinationMarket:       DestinationMarket,
  bannedSubstancesFound:   z.array(z.object({
    substanceName: z.string(),
    declaredAs:    z.string(),   // what manufacturer called it
    bannedUnder:   z.string(),   // regulation reference
    legalInOrigin: z.boolean(),  // legal in country of manufacture
  })),
  labelingRequirementsPass: z.boolean(),
  halalCertRequired:        z.boolean(),
  halalCertPresent:         z.boolean(),
  organicClaimVerified:     z.boolean().optional(),
  jurisdictionConflicts:    z.array(z.object({
    substance:      z.string(),
    statusInOrigin: z.string(),
    statusInDest:   z.string(),
  })),
})
export type RegulatoryData = z.infer<typeof RegulatoryData>

// ─── Packet (one unit in the batch) ──────────────────────────────────────────

export const Packet = z.object({
  packetId:    z.string(),
  lotNumber:   z.string(),
  labelData:   LabelData,
  // Only present if agent chose depth >= 'formulation'
  formulation: FormulationData.optional(),
  // Only present if agent chose depth === 'regulatory'
  regulatory:  RegulatoryData.optional(),
})
export type Packet = z.infer<typeof Packet>

// ─── Batch (the episode unit) ─────────────────────────────────────────────────

export const BatchMetadata = z.object({
  batchId:            z.string(),
  productName:        z.string(),
  productCategory:    ProductCategory,
  destinationMarket:  DestinationMarket,
  totalPacketCount:   z.number(),
  lotNumbers:         z.array(z.string()),
  manufacturingPlant: z.string(),
  dispatchDate:       z.string(),
  recallValueUSD:     z.number(),  // economic stake of this batch
})
export type BatchMetadata = z.infer<typeof BatchMetadata>

// ─── Observation (Environment → Agent) ───────────────────────────────────────

export const Observation = z.object({
  taskId:               z.string(),
  taskDescription:      z.string(),
  stepNumber:           z.number(),
  maxSteps:             z.number(),
  batchMetadata:        BatchMetadata,
  // Packets the agent has already inspected this episode
  inspectedPackets:     z.array(Packet),
  // IDs of packets not yet inspected (agent sees IDs only, not data)
  uninspectedPacketIds: z.array(z.string()),
  violationsFlaggedSoFar: z.array(z.string()),  // violation codes
  budgetRemaining:      z.number(),
  mandatoryChecksPending: z.array(z.string()),  // triggered by cascade
  stepsRemaining:       z.number(),
  riskLevel:            z.enum(['low', 'elevated', 'high', 'critical']),
  applicableRegulations: z.array(z.string()),
  hint:                 z.string().optional(),  // easy mode only
})
export type Observation = z.infer<typeof Observation>

// ─── Action (Agent → Environment) ────────────────────────────────────────────

export const ViolationFlag = z.object({
  violationCode:    z.string(),     // exact code from violationCodes.ts
  packetId:         z.string(),
  lotNumber:        z.string(),
  severity:         ViolationSeverity,
  description:      z.string(),
  correctiveAction: z.string(),     // exact enum value from correctiveActions.ts
  affectsEntireBatch: z.boolean(),
})
export type ViolationFlag = z.infer<typeof ViolationFlag>

export const InspectRequest = z.object({
  packetId:        z.string(),
  depth:           InspectionDepth,
})
export type InspectRequest = z.infer<typeof InspectRequest>

export const Action = z.object({
  // Packets to inspect this step (costs budget per depth)
  inspectPackets:     z.array(InspectRequest).default([]),
  // Violations being flagged this step
  flagViolations:     z.array(ViolationFlag).default([]),
  // Final batch verdict — only set when ready to end episode
  batchDisposition:   BatchDisposition.optional(),
  // If QUARANTINE_SUBSET, specify which lots
  quarantineLotIds:   z.array(z.string()).optional(),
  // Agent's confidence in its verdict
  confidence:         z.number().min(0).max(1).optional(),
  // Narrative for the compliance report
  summary:            z.string().optional(),
})
export type Action = z.infer<typeof Action>

// ─── Step Result (Environment → Agent, returned by /step) ────────────────────

export const StepResult = z.object({
  observation: Observation,
  reward:      z.number(),  // partial reward this step
  done:        z.boolean(),
  info: z.object({
    correctViolationsThisStep:  z.number(),
    falsePositivesThisStep:     z.number(),
    severityMatchesThisStep:    z.number(),
    budgetSpentThisStep:        z.number(),
    cascadeTriggered:           z.boolean(),
    newMandatoryChecks:         z.array(z.string()),
    episodeScore:               z.number().optional(), // only when done=true
  }),
})
export type StepResult = z.infer<typeof StepResult>

// ─── Episode Score (returned by /grader) ─────────────────────────────────────

export const EpisodeScore = z.object({
  taskId:               z.string(),
  violationRecall:      z.number(),  // weight: 0.30
  violationPrecision:   z.number(),  // weight: 0.20
  severityF1:           z.number(),  // weight: 0.15
  arithmeticScore:      z.number(),  // weight: 0.15
  dispositionScore:     z.number(),  // weight: 0.15
  efficiencyScore:      z.number(),  // weight: 0.05
  finalScore:           z.number(),  // 0.0 – 1.0
  penaltyApplied:       z.number(),  // category-weighted false-pass penalty
  breakdown:            z.record(z.string(), z.number()),
})
export type EpisodeScore = z.infer<typeof EpisodeScore>

// ─── Internal: Ground Truth (NEVER sent to agent) ────────────────────────────

export interface GroundTruth {
  violations: Array<{
    violationCode:      string
    packetId:           string
    lotNumber:          string
    severity:           ViolationSeverity
    correctActions:     string[]   // closed enum, all valid corrective actions
    affectsEntireBatch: boolean
    isArithmeticViolation: boolean
    cascadeTriggers:    string[]   // violation codes this one unlocks
  }>
  correctDisposition:   BatchDisposition
  correctQuarantineLots: string[]
  recallLiabilityUSD:   number
}

// ─── Task Definition ──────────────────────────────────────────────────────────

export interface TaskDefinition {
  taskId:          string
  name:            string
  difficulty:      'easy' | 'medium' | 'hard'
  maxSteps:        number
  initialBudget:   number
  budgetPerCriticalFind: number  // budget ADDED when critical found
  mandatoryDeepDiveThreshold: number  // n criticals before all-deep forced
  productCategory: ProductCategory
  destinationMarket: DestinationMarket
  description:     string
  actionSchema:    Record<string, string>
}
```

---

## 4. THE CORE ENVIRONMENT CLASS (src/env/environment.ts)

This is the heart of the system. Every API route calls this class.

```typescript
import { Action, Observation, StepResult, EpisodeScore, TaskDefinition } from '../types'
import { StateManager } from './stateManager'
import { ScenarioGenerator } from './scenarioGenerator'
import { RewardCalculator } from './rewardCalculator'
import { BudgetManager } from './budgetManager'
import { taskRegistry } from '../tasks/taskRegistry'
import { scoreEpisode } from '../graders'

// Singleton — one environment instance per server process
// Next.js API routes share this via module-level singleton pattern

class PackComplianceEnv {
  private state: StateManager
  private generator: ScenarioGenerator
  private rewardCalc: RewardCalculator
  private budgetMgr: BudgetManager

  constructor() {
    this.state = new StateManager()
    this.generator = new ScenarioGenerator()
    this.rewardCalc = new RewardCalculator()
    this.budgetMgr = new BudgetManager()
  }

  reset(taskId: string, seed: number = 42): Observation {
    const task = taskRegistry.get(taskId)
    if (!task) throw new Error(`Unknown task: ${taskId}`)

    const scenario = this.generator.generate(taskId, seed)
    this.state.initialize(task, scenario)
    return this.state.buildObservation()
  }

  step(action: Action): StepResult {
    if (this.state.isDone()) {
      throw new Error('Episode is done. Call reset() to start a new episode.')
    }

    // 1. Process inspection requests — reveal packet data at requested depth
    const inspectedThisStep = this.processInspections(action.inspectPackets)

    // 2. Process violation flags — compare against ground truth
    const violationResult = this.processViolations(action.flagViolations)

    // 3. Update budget (costs from inspections + risk-adaptive adjustments)
    const budgetResult = this.budgetMgr.update(
      this.state,
      inspectedThisStep,
      violationResult.newCriticals
    )

    // 4. Handle cascade triggers from new violations
    const cascadeResult = this.processCascades(violationResult.newCriticals)

    // 5. Calculate step reward
    const reward = this.rewardCalc.calculate({
      violationResult,
      budgetResult,
      cascadeResult,
      taskId: this.state.taskId,
      productCategory: this.state.batchMetadata.productCategory,
    })

    // 6. Advance step counter
    this.state.advanceStep()

    // 7. Check if episode ends
    const done = action.batchDisposition !== undefined
      || this.state.stepNumber >= this.state.maxSteps
      || this.state.budgetRemaining <= 0

    if (done && action.batchDisposition) {
      this.state.setDisposition(
        action.batchDisposition,
        action.quarantineLotIds ?? []
      )
    }

    const episodeScore = done ? scoreEpisode(this.state) : undefined

    return {
      observation: this.state.buildObservation(),
      reward,
      done,
      info: {
        correctViolationsThisStep:  violationResult.correct,
        falsePositivesThisStep:     violationResult.falsePositives,
        severityMatchesThisStep:    violationResult.severityMatches,
        budgetSpentThisStep:        budgetResult.spent,
        cascadeTriggered:           cascadeResult.triggered,
        newMandatoryChecks:         cascadeResult.newChecks,
        episodeScore:               episodeScore?.finalScore,
      },
    }
  }

  getState() {
    return this.state.serialize()
  }

  getEpisodeScore(): EpisodeScore {
    if (!this.state.isDone()) {
      throw new Error('Episode not complete. Submit a batchDisposition first.')
    }
    return scoreEpisode(this.state)
  }

  listTasks(): TaskDefinition[] {
    return Array.from(taskRegistry.values())
  }

  // Used by /validate endpoint — runs all 3 tasks with seed=42
  // Returns true only if all scores are in [0.0, 1.0]
  selfValidate(): Record<string, { score: number; valid: boolean }> {
    const results: Record<string, { score: number; valid: boolean }> = {}
    for (const taskId of ['task_easy', 'task_medium', 'task_hard']) {
      try {
        this.reset(taskId, 42)
        // Run a null baseline — submit empty action to fill steps
        while (!this.state.isDone()) {
          this.step({
            inspectPackets: [],
            flagViolations: [],
            batchDisposition: this.state.stepNumber >= this.state.maxSteps - 1
              ? 'HOLD' : undefined,
          })
        }
        const score = this.getEpisodeScore()
        results[taskId] = {
          score: score.finalScore,
          valid: score.finalScore >= 0.0 && score.finalScore <= 1.0,
        }
      } catch (e) {
        results[taskId] = { score: -1, valid: false }
      }
    }
    return results
  }
}

// Module-level singleton
let envInstance: PackComplianceEnv | null = null

export function getEnv(): PackComplianceEnv {
  if (!envInstance) envInstance = new PackComplianceEnv()
  return envInstance
}
```

---

## 5. BUDGET MANAGER (src/env/budgetManager.ts)

This is the novel mechanic. Implement it exactly.

```typescript
// Risk-adaptive sampling rules:
//
// Initial budget per task:
//   easy:   20 units
//   medium: 30 units
//   hard:   45 units
//
// Budget COSTS per inspection depth:
//   label:        1 unit
//   formulation:  2 units
//   regulatory:   3 units
//
// Risk escalation — AUTOMATIC, triggered by critical findings:
//   First critical violation found:
//     → riskLevel upgrades from 'low' → 'elevated'
//     → 5 additional budget units granted
//     → All subsequent uninspected packets in same lot MUST be
//       inspected at minimum 'formulation' depth before verdict
//
//   Second critical violation found (different lot):
//     → riskLevel upgrades to 'high'
//     → 10 additional budget units granted
//     → mandatoryChecksPending populated with all lot IDs
//
//   Banned substance found (any critical with isArithmeticViolation=false
//   AND regulatory.bannedSubstancesFound.length > 0):
//     → riskLevel immediately → 'critical'
//     → 15 additional budget units granted
//     → ALL uninspected packets must now be checked at 'regulatory' depth
//     → dispositionOptions restricted: PASS is no longer valid
//
// Budget cannot go below 0.
// If budget reaches 0 and mandatory checks are pending → episode ends,
// agent receives heavy penalty on dispositionScore.
```

---

## 6. THE THREE TASKS

### 6.1 Task Easy (src/tasks/taskEasy.ts)

```
taskId:           task_easy
name:             Single snack batch — label compliance check
difficulty:       easy
productCategory:  snack
destinationMarket: IN (FSSAI)
maxSteps:         8
initialBudget:    20
totalPackets:     50
violations:       3 (all label-level, obvious)
groundTruth:
  V001 — Missing FSSAI license number on label        MINOR
  V002 — Net weight declared 200g, actual 185g        SERIOUS
  V003 — Artificial colour (Sunset Yellow) used,
          not declared in ingredient list             CRITICAL
correctDisposition: HOLD
cascade:          V003 triggers mandatory check of
                  may-contain advisory label
hint:             Provided in observation
expectedScore:    GPT-4o baseline ~0.72
```

### 6.2 Task Medium (src/tasks/taskMedium.ts)

```
taskId:           task_medium
name:             Baby food batch — formulation + arithmetic audit
difficulty:       medium
productCategory:  baby_food
destinationMarket: EU (CODEX + EU Reg 1169/2011)
maxSteps:         12
initialBudget:    30
totalPackets:     120
violations:       7
groundTruth:
  V001 — Sodium Benzoate (E211) present — banned in
          baby food under EU law                      CRITICAL
  V002 — Nutrition arithmetic: declared total 102.3g
          (fat+protein+carbs+fibre+moisture)
          exceeds 100g ± 0.5g tolerance               SERIOUS
  V003 — Preservative combination: E211 + E202
          combined 850mg/kg, limit 600mg/kg            CRITICAL
  V004 — Allergen (peanut) on shared line,
          no may-contain advisory                     CRITICAL
  V005 — Missing allergen bold formatting per
          EU Reg 1169/2011 Art 21                     SERIOUS
  V006 — Expiry date format DD/MM/YY instead of
          required DD/MM/YYYY                         MINOR
  V007 — Halal certification required for EU
          market (product contains gelatine),
          certificate not present                     SERIOUS
correctDisposition: QUARANTINE_SUBSET
correctQuarantineLots: ["LOT-A", "LOT-B"]
          (LOT-C has no formulation violations)
cascade:  V001 triggers mandatory regulatory depth
          on all remaining packets
          V004 triggers mandatory may-contain check
expectedScore: GPT-4o baseline ~0.51
```

### 6.3 Task Hard (src/tasks/taskHard.ts)

```
taskId:           task_hard
name:             Supplement crisis — mislabeling + cross-jurisdiction
difficulty:       hard
productCategory:  supplement
destinationMarket: US (FDA 21 CFR)
maxSteps:         15
initialBudget:    45
totalPackets:     200 (3 sub-lots: LOT-X 80 packets,
                        LOT-Y 60 packets, LOT-Z 60 packets)
violations:       14 across 3 lots + 6 deliberate red herrings

groundTruth — LOT-X (source of crisis):
  V001 — DMAA (1,3-dimethylamylamine) declared as
          "Geranium Extract" — banned by FDA, legal
          in India (origin). DELIBERATE MISLABELING.  CRITICAL
  V002 — DMAA concentration 150mg/serving exceeds
          any conceivable safe threshold             CRITICAL
  V003 — Nutrition arithmetic violation: total 101.8g  SERIOUS
  V004 — FDA registration number format invalid       MINOR
  V005 — Shared production line with peanut product,
          no cross-contamination advisory on label   CRITICAL

groundTruth — LOT-Y:
  V006 — Same DMAA mislabeling as LOT-X              CRITICAL
  V007 — Artificial sweetener Cyclamate (E952)
          banned in USA, declared as "natural
          flavor blend"                              CRITICAL
  V008 — Label language: Spanish translation absent
          (required for US market >10% Hispanic
          consumer base regulation)                 SERIOUS

groundTruth — LOT-Z (clean lot — PASS):
  V009 — Expiry date missing from 3 packets
          in this lot                               MINOR
  (No critical violations in LOT-Z)

Red herrings (agent should NOT flag these):
  RH1 — Vitamin C concentration slightly above
         RDA — legal in supplements
  RH2 — Font size 7.8pt — minimum is 6pt, compliant
  RH3 — Geranium Extract listed — legal as-is
         without mislabeling context
  (3 more in LOT-Y and LOT-Z)

correctDisposition: QUARANTINE_SUBSET
correctQuarantineLots: ["LOT-X", "LOT-Y"]
         (LOT-Z released — only minor violations)

supplyChainChallenge:
  Agent must identify that LOT-X and LOT-Y share
  a common supplier (visible in productionLineId)
  and that the mislabeling is systematic, not random.
  Bonus score for flagging "systematic mislabeling"
  in summary field.

expectedScore: GPT-4o baseline ~0.28
```

---

## 7. THE FOUR GRADERS (src/graders/)

All graders are 100% deterministic. No LLM. No fuzzy matching. Pure math.

### 7.1 Violation Grader

```typescript
// violationGrader.ts
// Input: agent's flaggedViolations[], ground truth violations[]
// Output: { recall, precision }
//
// Matching rule: violationCode must be exact string match
// AND packetId must match (or affectsEntireBatch=true)
//
// recall    = correctly_found / total_ground_truth
// precision = correctly_found / total_flagged
//
// Do NOT use fuzzy matching. Do NOT use semantic similarity.
// violationCode "V001" ≠ "v001" ≠ "V-001"
```

### 7.2 Arithmetic Grader

```typescript
// arithmeticGrader.ts
// For each packet the agent inspected at formulation depth:
//   compute: sum = protein + totalFat + carbohydrates
//                 + dietaryFibre + moistureG
//   if |sum - 100| > 0.5 → arithmetic violation exists
//   if agent flagged it → +1 correct
//   if agent missed it  → -1 recall hit
//   if agent flagged it as something else → false positive
//
// score = correct_arithmetic_flags / total_arithmetic_violations_in_inspected
// Returns 1.0 if no arithmetic violations exist in inspected packets
```

### 7.3 Severity Grader

```typescript
// severityGrader.ts
// For each violation the agent correctly identified:
//   groundTruth.severity === agent.severity → full credit 1.0
//   off by one level                        → partial credit 0.5
//   off by two levels (critical vs minor)   → no credit 0.0
//
// Severity order: critical > serious > minor
// score = average across all correctly found violations
```

### 7.4 Disposition Grader

```typescript
// dispositionGrader.ts
// This grader has ASYMMETRIC penalties based on product category
//
// Base disposition scoring:
//   Correct PASS:               1.0
//   Correct HOLD:               1.0
//   Correct QUARANTINE_SUBSET
//     + correct lot IDs:        1.0
//   Correct QUARANTINE_SUBSET
//     + wrong lot IDs:          0.4
//   False HOLD
//     (should have been PASS):  0.6 (conservative = forgivable)
//   False PASS
//     (should have been HOLD):  category-weighted penalty below
//
// Category-weighted false PASS penalty:
//   snack:      base score × 0.4  (lose 60%)
//   baby_food:  base score × 0.1  (lose 90%)
//   supplement: base score × 0.2  (lose 80%)
//
// Additional: recallLiabilityMultiplier
//   If false PASS on batch with recallValueUSD > $500,000
//   → additional 0.1 subtracted from final episode score
//   (clamped at 0.0 minimum)
```

### 7.5 Final Episode Scoring Formula

```typescript
// src/graders/index.ts
export function scoreEpisode(state: StateManager): EpisodeScore {
  const recall      = violationGrader.recall(state)      // weight: 0.30
  const precision   = violationGrader.precision(state)   // weight: 0.20
  const severityF1  = severityGrader.f1(state)           // weight: 0.15
  const arithmetic  = arithmeticGrader.score(state)      // weight: 0.15
  const disposition = dispositionGrader.score(state)     // weight: 0.15
  const efficiency  = efficiencyScore(state)             // weight: 0.05

  const raw =
    recall      * 0.30 +
    precision   * 0.20 +
    severityF1  * 0.15 +
    arithmetic  * 0.15 +
    disposition * 0.15 +
    efficiency  * 0.05

  // Apply recall liability multiplier if applicable
  const penalty = dispositionGrader.recallPenalty(state)
  const finalScore = Math.max(0.0, Math.min(1.0, raw - penalty))

  return { recall, precision, severityF1, arithmetic,
           disposition, efficiency, finalScore, penalty,
           breakdown: { recall, precision, severityF1,
                        arithmetic, disposition, efficiency } }
}

function efficiencyScore(state: StateManager): number {
  // Reward for finishing in fewer steps than max
  // 1.0 if done in ≤ 50% of maxSteps
  // 0.5 if done in exactly maxSteps
  // Linear interpolation between
  const ratio = state.stepNumber / state.maxSteps
  return Math.max(0, Math.min(1, 1.5 - ratio))
}
```

---

## 8. ALL API ROUTES (Next.js App Router)

### Pattern for every route:

```typescript
// src/app/api/[endpoint]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { getEnv } from '@/env/environment'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const env = getEnv()
    const result = env.someMethod(body)
    return NextResponse.json(result, { status: 200 })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
```

### Required routes and their signatures:

```
POST /api/reset
  Body:    { taskId: string, seed?: number }
  Returns: Observation

POST /api/step
  Body:    Action
  Returns: StepResult

GET  /api/state
  Returns: serialized state object

GET  /api/tasks
  Returns: {
    tasks: TaskDefinition[],
    actionSchema: { description, fields: Record<string, string> }
  }

POST /api/grader
  Body:    {} (uses current episode state)
  Returns: EpisodeScore

POST /api/baseline
  Body:    { seed?: number }
  Returns: {
    task_easy:   number,
    task_medium: number,
    task_hard:   number,
    average:     number,
    seed:        number
  }

GET  /api/validate
  Returns: {
    passed: boolean,
    results: Record<taskId, { score: number, valid: boolean }>
  }

GET  /api/health
  Returns: { status: "ok", version: "1.0.0", timestamp: string }
```

### CRITICAL: Next.js singleton pattern for API routes

Because Next.js API routes can be cold-started per request in production,
but HF Spaces runs as a persistent container, use this pattern:

```typescript
// src/env/singleton.ts
import { PackComplianceEnv } from './environment'

const globalForEnv = globalThis as unknown as {
  env: PackComplianceEnv | undefined
}

export const env = globalForEnv.env ?? new PackComplianceEnv()

if (process.env.NODE_ENV !== 'production') {
  globalForEnv.env = env
}
```

---

## 9. THE DATA FILES

### 9.1 Violation Codes (src/data/violationCodes.ts)

Define as TypeScript const, not JSON. Type safety throughout.

```typescript
export interface ViolationCodeEntry {
  code:             string
  description:      string
  defaultSeverity:  'critical' | 'serious' | 'minor'
  applicableDepths: Array<'label' | 'formulation' | 'regulatory'>
  applicableMarkets: Array<'IN' | 'US' | 'EU'>
  regulationRef:    string
}

export const VIOLATION_CODES: Record<string, ViolationCodeEntry> = {
  'VC-LABEL-001': {
    code: 'VC-LABEL-001',
    description: 'Missing mandatory license/registration number',
    defaultSeverity: 'minor',
    applicableDepths: ['label'],
    applicableMarkets: ['IN', 'US', 'EU'],
    regulationRef: 'FSSAI Reg 2.1.1 / FDA 21 CFR 101.5 / EU 1169/2011 Art 9',
  },
  'VC-LABEL-002': {
    code: 'VC-LABEL-002',
    description: 'Declared net weight does not match actual weight',
    defaultSeverity: 'serious',
    applicableDepths: ['label'],
    applicableMarkets: ['IN', 'US', 'EU'],
    regulationRef: 'FSSAI Schedule IV / FDA 21 CFR 101.105 / EU 1169/2011 Art 23',
  },
  'VC-LABEL-003': {
    code: 'VC-LABEL-003',
    description: 'Undeclared colour additive in ingredient list',
    defaultSeverity: 'critical',
    applicableDepths: ['label', 'formulation'],
    applicableMarkets: ['IN', 'US', 'EU'],
    regulationRef: 'FSSAI A07 / FDA 21 CFR 73 / EU 94/36/EC',
  },
  'VC-FORM-001': {
    code: 'VC-FORM-001',
    description: 'Nutrition arithmetic: declared totals do not sum to 100g ± 0.5',
    defaultSeverity: 'serious',
    applicableDepths: ['formulation'],
    applicableMarkets: ['IN', 'US', 'EU'],
    regulationRef: 'FSSAI 2.2.1 / FDA 21 CFR 101.9 / EU 1169/2011 Annex XV',
  },
  'VC-FORM-002': {
    code: 'VC-FORM-002',
    description: 'Preservative combination exceeds combined legal limit',
    defaultSeverity: 'critical',
    applicableDepths: ['formulation'],
    applicableMarkets: ['IN', 'US', 'EU'],
    regulationRef: 'FSSAI A11 / FDA 21 CFR 184 / EU 1333/2008',
  },
  'VC-FORM-003': {
    code: 'VC-FORM-003',
    description: 'Banned additive in product category for destination market',
    defaultSeverity: 'critical',
    applicableDepths: ['formulation', 'regulatory'],
    applicableMarkets: ['IN', 'US', 'EU'],
    regulationRef: 'Market-specific — see jurisdictionRules.ts',
  },
  'VC-REG-001': {
    code: 'VC-REG-001',
    description: 'Banned substance declared under alternative name (mislabeling)',
    defaultSeverity: 'critical',
    applicableDepths: ['regulatory'],
    applicableMarkets: ['IN', 'US', 'EU'],
    regulationRef: 'FDA 21 CFR 101.18 / EU 1169/2011 Art 7',
  },
  'VC-REG-002': {
    code: 'VC-REG-002',
    description: 'Cross-jurisdiction conflict: legal in origin, banned in destination',
    defaultSeverity: 'critical',
    applicableDepths: ['regulatory'],
    applicableMarkets: ['US', 'EU'],
    regulationRef: 'FDA import alert / EU Border Inspection Post rules',
  },
  'VC-REG-003': {
    code: 'VC-REG-003',
    description: 'Allergen cross-contamination not declared (shared production line)',
    defaultSeverity: 'critical',
    applicableDepths: ['formulation', 'regulatory'],
    applicableMarkets: ['IN', 'US', 'EU'],
    regulationRef: 'FSSAI 2.4.5 / FDA FALCPA / EU 1169/2011 Annex II',
  },
  'VC-REG-004': {
    code: 'VC-REG-004',
    description: 'Required halal/kosher certification absent for market',
    defaultSeverity: 'serious',
    applicableDepths: ['regulatory'],
    applicableMarkets: ['EU'],
    regulationRef: 'EU Halal Certification requirements',
  },
  // Add more as needed for your scenarios
}
```

### 9.2 Corrective Actions (src/data/correctiveActions.ts)

CLOSED ENUM. Every valid corrective action is listed here.
Graders compare agent's correctiveAction against this list — exact match only.

```typescript
export const CORRECTIVE_ACTIONS: Record<string, string[]> = {
  'VC-LABEL-001': [
    'PRINT_UPDATED_LABEL_WITH_LICENSE',
    'APPLY_STICKER_WITH_LICENSE_NUMBER',
    'RECALL_FOR_RELABELING',
  ],
  'VC-LABEL-002': [
    'RECALL_UNDERWEIGHT_PACKETS',
    'REWEIGH_AND_RELABEL_ENTIRE_LOT',
    'QUARANTINE_LOT_FOR_REPACKAGING',
  ],
  'VC-LABEL-003': [
    'HOLD_BATCH_PENDING_RELABELING',
    'RECALL_AND_RELABEL',
    'DESTROY_BATCH_IF_COLOUR_BANNED',
  ],
  'VC-FORM-001': [
    'CORRECT_NUTRITION_DECLARATION',
    'HOLD_FOR_LAB_REANALYSIS',
    'RELABEL_WITH_CORRECTED_NUTRITION',
  ],
  'VC-FORM-002': [
    'REFORMULATE_PRESERVATIVE_LEVELS',
    'HOLD_BATCH_PENDING_REFORMULATION',
    'DESTROY_BATCH_EXCEEDING_LIMITS',
  ],
  'VC-FORM-003': [
    'REDIRECT_BATCH_TO_PERMITTED_MARKET',
    'DESTROY_BATCH',
    'HOLD_PENDING_REGULATORY_WAIVER',
  ],
  'VC-REG-001': [
    'HOLD_ENTIRE_BATCH',
    'NOTIFY_REGULATORY_AUTHORITY',
    'INITIATE_CRIMINAL_REFERRAL',
  ],
  'VC-REG-002': [
    'REDIRECT_TO_PERMITTED_MARKET',
    'DESTROY_BATCH',
    'HOLD_PENDING_IMPORT_WAIVER',
  ],
  'VC-REG-003': [
    'ADD_MAY_CONTAIN_ADVISORY',
    'SEGREGATE_PRODUCTION_LINE',
    'RECALL_FOR_ALLERGEN_RELABELING',
  ],
  'VC-REG-004': [
    'OBTAIN_CERTIFICATION_BEFORE_RELEASE',
    'REDIRECT_TO_NON_CERTIFICATION_MARKET',
    'HOLD_PENDING_CERTIFICATION',
  ],
}
```

---

## 10. SCENARIO DATA FORMAT

Each scenario file exports an array of seeded scenarios.
Seed 42 is always the one used for baseline + validation.

```typescript
// src/data/scenarios/easy.ts
import { BatchMetadata, Packet, GroundTruth } from '../../types'

export interface Scenario {
  seed:          number
  batchMetadata: BatchMetadata
  allPackets:    Packet[]      // all 50 packets, full data
  groundTruth:   GroundTruth  // NEVER sent to agent
}

// ScenarioGenerator reveals only label data initially.
// formulation and regulatory fields are stripped from Packet
// until agent requests them via InspectRequest.
// This stripping happens in StateManager.buildObservation()
```

---

## 11. BASELINE INFERENCE SCRIPT (baseline/run_baseline.ts)

```typescript
import OpenAI from 'openai'
import fetch from 'node-fetch'

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
  "batchDisposition": "PASS"|"HOLD"|"QUARANTINE_SUBSET" (only on final step),
  "quarantineLotIds": string[] (only with QUARANTINE_SUBSET),
  "confidence": number,
  "summary": string
}
`

async function runTask(taskId: string): Promise<number> {
  // 1. Reset
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
    results[taskId] = await runTask(taskId)
    console.log(`${taskId}: ${results[taskId].toFixed(3)}`)
  }

  const average = Object.values(results).reduce((a, b) => a + b, 0) / 3
  console.log(`average: ${average.toFixed(3)}`)
  console.log(JSON.stringify({ ...results, average, seed: SEED }, null, 2))
}

main().catch(console.error)
```

---

## 12. DOCKERFILE

```dockerfile
FROM node:20-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=7860

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

EXPOSE 7860

CMD ["node", "server.js"]
```

**next.config.js — required for standalone output:**

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
}

module.exports = nextConfig
```

---

## 13. OPENENV.YAML

```yaml
name: PackCompliance-Env
version: "1.0.0"
description: >
  Pre-distribution batch compliance environment for packaged food products.
  Agent inspects ingredient data across FSSAI/FDA/EU frameworks using
  risk-adaptive sampling and makes binding batch disposition decisions.
author: your-username
license: MIT
tags:
  - food-safety
  - batch-compliance
  - regulatory
  - ingredient-inspection
  - supply-chain

tasks:
  - id: task_easy
    name: "Single snack batch — label compliance"
    difficulty: easy
    max_steps: 8
    min_score: 0.0
    max_score: 1.0

  - id: task_medium
    name: "Baby food batch — formulation and arithmetic audit"
    difficulty: medium
    max_steps: 12
    min_score: 0.0
    max_score: 1.0

  - id: task_hard
    name: "Supplement crisis — mislabeling and cross-jurisdiction"
    difficulty: hard
    max_steps: 15
    min_score: 0.0
    max_score: 1.0

endpoints:
  reset:    POST /api/reset
  step:     POST /api/step
  state:    GET  /api/state
  tasks:    GET  /api/tasks
  grader:   POST /api/grader
  baseline: POST /api/baseline
  validate: GET  /api/validate
  health:   GET  /api/health

observation_space:
  type: structured
  format: json
  schema: src/types/index.ts::Observation

action_space:
  type: structured
  format: json
  schema: src/types/index.ts::Action

reward:
  type: float
  range: [0.0, 1.0]
  shaped: true
  sparse: false
  asymmetric_penalties: true
```

---

## 14. TSCONFIG.JSON

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## 15. REQUIREMENTS.TXT → package.json dependencies

```json
{
  "dependencies": {
    "next": "14.1.0",
    "react": "^18",
    "react-dom": "^18",
    "zod": "^3.22.4",
    "openai": "^4.28.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "typescript": "^5.3.3",
    "jest": "^29.7.0",
    "ts-jest": "^29.1.2",
    "@types/jest": "^29.5.12",
    "ts-node": "^10.9.2"
  }
}
```

---

## 16. TESTS — WHAT MUST PASS

### test_determinism (most critical for hackathon)

```typescript
// tests/determinism.test.ts
// Run this before submitting. All must pass.

test('reset with seed=42 produces identical observation twice', () => {
  const env = new PackComplianceEnv()
  const obs1 = env.reset('task_easy', 42)
  env.reset('task_easy', 42)
  const obs2 = env.reset('task_easy', 42)
  expect(JSON.stringify(obs1)).toBe(JSON.stringify(obs2))
})

test('all task graders return score in [0.0, 1.0]', () => {
  const env = new PackComplianceEnv()
  for (const taskId of ['task_easy', 'task_medium', 'task_hard']) {
    env.reset(taskId, 42)
    // exhaust episode with null actions
    while (!env.getState().isDone) {
      env.step({ inspectPackets: [], flagViolations: [] })
    }
    const score = env.getEpisodeScore()
    expect(score.finalScore).toBeGreaterThanOrEqual(0.0)
    expect(score.finalScore).toBeLessThanOrEqual(1.0)
  }
})

test('graders are deterministic — same actions same score', () => {
  const env1 = new PackComplianceEnv()
  const env2 = new PackComplianceEnv()
  // run identical sequence on both
  // scores must be exactly equal
})
```

---

## 17. HF SPACE SETUP

1. Create new Space at huggingface.co/spaces
2. SDK: Docker
3. Add tag: `openenv`
4. Push code — HF will build from Dockerfile automatically
5. Space URL format: `https://your-username-packcompliance-env.hf.space`
6. Required env vars in HF Space settings:
   - `OPENAI_API_KEY` — for baseline script
   - `NODE_ENV=production`

### Pre-submission validation commands:

```bash
# 1. Health check
curl https://your-space-url.hf.space/api/health

# 2. Reset
curl -X POST https://your-space-url.hf.space/api/reset \
  -H "Content-Type: application/json" \
  -d '{"taskId": "task_easy", "seed": 42}'

# 3. Validate all graders
curl https://your-space-url.hf.space/api/validate

# 4. Run baseline
curl -X POST https://your-space-url.hf.space/api/baseline \
  -H "Content-Type: application/json" \
  -d '{"seed": 42}'
```

All four must return 200 OK with valid JSON before submitting.

---

## 18. PRE-SUBMISSION CHECKLIST

Run through this in order. Do not submit until all pass.

```
[ ] npm run build  — completes with zero errors
[ ] npm test       — all tests pass
[ ] docker build -t packcompliance-env .   — builds cleanly
[ ] docker run -p 7860:7860 packcompliance-env
[ ] curl localhost:7860/api/health  → { "status": "ok" }
[ ] curl -X POST localhost:7860/api/reset ... → valid Observation JSON
[ ] curl localhost:7860/api/validate
    → { "passed": true, "results": { all valid: true } }
[ ] curl -X POST localhost:7860/api/baseline
    → scores all in [0.0, 1.0]
[ ] HF Space deploys and shows green
[ ] HF Space /api/health returns 200
[ ] openenv validate --url https://your-space-url.hf.space
    → PASSED
[ ] baseline script runs without error and prints 3 scores
[ ] Re-run baseline with same seed → identical scores
```

---

## 19. CRITICAL RULES — NEVER VIOLATE THESE

1. **Graders use zero NLP.** Every match is exact string comparison.
   `violationCode`, `correctiveAction` — exact match or no credit.
   This is what makes graders deterministic and hackathon-valid.

2. **Ground truth is never in Observation.** StateManager.buildObservation()
   must strip all ground truth before returning. The agent can never see
   the answer key. Audit every field before shipping.

3. **Singleton pattern for Next.js.** The environment state must persist
   across API route calls. Use globalThis pattern (Section 8).
   Without this, reset() and step() will use different instances.

4. **seed=42 is sacred.** Every determinism guarantee rests on seed=42
   producing the same scenario every time. Use a seeded PRNG (e.g.
   mulberry32 or seedrandom npm package), not Math.random().

5. **Budget cannot go negative.** Clamp at 0. If agent tries to inspect
   more than budget allows, reject the over-budget inspections and
   return them in info.rejectedInspections.

6. **False PASS on baby_food is catastrophic.** The 0.1 multiplier on
   disposition score means a false PASS on baby food caps the entire
   episode score at roughly 0.15. This is intentional.

7. **TypeScript strict mode.** No `any`. No `!` non-null assertions on
   data from outside the system. Use Zod `.parse()` at every API boundary.

8. **One episode per env instance at a time.** The singleton holds one
   active episode. If reset() is called mid-episode, the old episode is
   abandoned. This is correct behavior.

---

## 20. BUILD ORDER

Build in this exact sequence. Do not skip ahead.

```
Step 1:  Write src/types/index.ts completely
         → verify: tsc --noEmit passes with zero errors

Step 2:  Write src/data/ (all 4 data files)
         → verify: import and log VIOLATION_CODES works

Step 3:  Write src/env/stateManager.ts
         → verify: can initialize and serialize state

Step 4:  Write src/env/scenarioGenerator.ts
         → verify: generate('task_easy', 42) returns valid Scenario

Step 5:  Write src/env/budgetManager.ts
         → verify: risk escalation triggers correctly

Step 6:  Write src/graders/ (all 4 graders)
         → verify: unit tests pass for each grader independently

Step 7:  Write src/env/rewardCalculator.ts
         → verify: returns float, no NaN, no Infinity

Step 8:  Write src/env/environment.ts
         → verify: reset() → step() → getEpisodeScore() full cycle works

Step 9:  Write src/tasks/ (all 3 tasks + registry)
         → verify: taskRegistry.get() returns typed TaskDefinition

Step 10: Write src/app/api/ (all 8 routes)
         → verify: npm run dev, hit each route with curl

Step 11: Write baseline/run_baseline.ts
         → verify: runs end-to-end, prints 3 scores

Step 12: Write tests/
         → verify: npm test — all pass

Step 13: Write Dockerfile + openenv.yaml + README.md
         → verify: docker build + docker run + health check

Step 14: Deploy to HF Space
         → verify: all 4 pre-submission commands return 200

Step 15: Run openenv validate against HF Space URL
         → verify: PASSED
```

---

## 21. EXPECTED BASELINE SCORES

These are your reference targets using GPT-4o with seed=42.
If your baseline produces wildly different scores, a grader is broken.

```
task_easy:   0.72 ± 0.05
task_medium: 0.51 ± 0.05
task_hard:   0.28 ± 0.05
average:     0.50 ± 0.05
```

---

## 22. JUDGING RUBRIC ALIGNMENT

| Criterion       | Weight | What delivers it in this build |
|-----------------|--------|-------------------------------|
| Real-world utility | 30% | Batch-scale QC, multi-jurisdiction, baby food stakes, recall cost |
| Task & grader quality | 25% | Arithmetic grader, closed-enum actions, hard crisis scenario |
| Environment design | 20% | Risk-adaptive budget, cascade triggers, asymmetric disposition penalty |
| Code quality | 15% | TypeScript strict, Zod validation, deterministic seed, /validate endpoint |
| Creativity | 10% | Risk-budget tradeoff mechanic, cross-jurisdiction mislabeling as hard task |

---

End of Antigravity Prompt.