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
