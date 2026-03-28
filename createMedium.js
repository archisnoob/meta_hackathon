const fs = require('fs');
const path = require('path');

const total = 120
const packets = []
const violations = []
const lots = ['LOT-A', 'LOT-B', 'LOT-C']

for (let i = 1; i <= total; i++) {
  const lot = lots[i % 3]
  let isBadA = lot === 'LOT-A' && i === 3
  let isBadB = lot === 'LOT-B' && i === 2

  const labelData = {
    productName: 'Organic Baby Mash',
    manufacturerName: 'BabyFoods Inc',
    countryOfOrigin: 'EU',
    batchCode: 'BATCH-MED-001',
    lotNumber: lot,
    manufacturingDate: '2026-03-01T00:00:00.000Z',
    expiryDate: isBadA ? '30/09/26' : '30/09/2026', 
    netWeightG: 100,
    ingredientList: isBadB ? ['Apple', 'Gelatine'] : ['Apple'],
    allergenDeclaration: [],
    mayContainAdvisory: [],
    hasNutritionLabel: true,
    languageCompliant: true,
    hasQRCode: true,
  }

  packets.push({
    packetId: 'PKT-MED-' + i,
    lotNumber: lot,
    labelData,
    formulation: {
        additives: isBadA ? [{ additiveCode: 'E211', name: 'Sodium Benzoate', declaredConcentrationMgKg: 500, legalLimitMgKg: 0, isPermittedInMarket: false }] : [],
        preservativeCombinations: isBadA ? [{ additive1Code: 'E211', additive2Code: 'E202', combinedLimitMgKg: 600, declaredCombinedMgKg: 850, exceedsLimit: true }] : [],
        nutritionPanel: {
            per100g: { energyKcal: 400, proteinG: 10, totalFatG: 20, saturatedFatG: 5, carbohydratesG: 60, sugarsG: 5, dietaryFibreG: isBadB ? 7.3 : 5, sodiumMg: 200, moistureG: 5 },
            declaredTotalG: isBadB ? 102.3 : 100 
        },
        coloringAgents: [],
        artificialFlavors: [],
        productionLineId: "LINE-SHARED-PEANUT",
        sharedLineProducts: ["Peanut Butter Mash"] 
    },
    regulatory: {
        destinationMarket: 'EU',
        bannedSubstancesFound: isBadA ? [{ substanceName: 'Sodium Benzoate', declaredAs: 'Sodium Benzoate', bannedUnder: 'EU Baby Food limits', legalInOrigin: true }] : [],
        labelingRequirementsPass: false,
        halalCertRequired: isBadB, 
        halalCertPresent: false, 
        jurisdictionConflicts: []
    }
  })

  if (isBadA) {
    violations.push(
      { violationCode: 'VC-FORM-003', packetId: 'PKT-MED-' + i, lotNumber: lot, severity: 'critical', correctActions: ['DESTROY_BATCH', 'REDIRECT_BATCH_TO_PERMITTED_MARKET', 'HOLD_PENDING_REGULATORY_WAIVER'], affectsEntireBatch: false, isArithmeticViolation: false, cascadeTriggers: ['BANNED'] },
      { violationCode: 'VC-FORM-002', packetId: 'PKT-MED-' + i, lotNumber: lot, severity: 'critical', correctActions: ['DESTROY_BATCH_EXCEEDING_LIMITS', 'REFORMULATE_PRESERVATIVE_LEVELS', 'HOLD_BATCH_PENDING_REFORMULATION'], affectsEntireBatch: false, isArithmeticViolation: false, cascadeTriggers: [] },
      { violationCode: 'VC-LABEL-004', packetId: 'PKT-MED-' + i, lotNumber: lot, severity: 'minor', correctActions: ['REPRINT_EXPIRY_DATES', 'APPLY_CORRECTED_EXPIRY_STICKER', 'RECALL_AND_RELABEL_EXPIRY'], affectsEntireBatch: false, isArithmeticViolation: false, cascadeTriggers: [] } 
    )
  }
  if (isBadB) {
     violations.push(
      { violationCode: 'VC-FORM-001', packetId: 'PKT-MED-' + i, lotNumber: lot, severity: 'serious', correctActions: ['CORRECT_NUTRITION_DECLARATION', 'HOLD_FOR_LAB_REANALYSIS', 'RELABEL_WITH_CORRECTED_NUTRITION'], affectsEntireBatch: false, isArithmeticViolation: true, cascadeTriggers: [] },
      { violationCode: 'VC-REG-003', packetId: 'PKT-MED-' + i, lotNumber: lot, severity: 'critical', correctActions: ['ADD_MAY_CONTAIN_ADVISORY', 'SEGREGATE_PRODUCTION_LINE', 'RECALL_FOR_ALLERGEN_RELABELING'], affectsEntireBatch: true, isArithmeticViolation: false, cascadeTriggers: ['MAY_CONTAIN_CHECK'] },
      { violationCode: 'VC-LABEL-006', packetId: 'PKT-MED-' + i, lotNumber: lot, severity: 'serious', correctActions: ['REPRINT_LABEL_WITH_ALLERGEN_BOLDING', 'APPLY_ALLERGEN_STICKER', 'RECALL_FOR_ALLERGEN_FORMATTING'], affectsEntireBatch: false, isArithmeticViolation: false, cascadeTriggers: [] },
      { violationCode: 'VC-REG-004', packetId: 'PKT-MED-' + i, lotNumber: lot, severity: 'serious', correctActions: ['OBTAIN_CERTIFICATION_BEFORE_RELEASE', 'REDIRECT_TO_NON_CERTIFICATION_MARKET', 'HOLD_PENDING_CERTIFICATION'], affectsEntireBatch: false, isArithmeticViolation: false, cascadeTriggers: [] }
    )
  }
}

const fileContent = "import { Scenario } from './easy'\n\nexport const mediumScenario: Scenario = {\n  seed: 42,\n  batchMetadata: {\n    batchId: 'BATCH-MED-001',\n    productName: 'Organic Baby Mash',\n    productCategory: 'baby_food',\n    destinationMarket: 'EU',\n    totalPacketCount: 120,\n    lotNumbers: ['LOT-A', 'LOT-B', 'LOT-C'],\n    manufacturingPlant: 'Plant-2',\n    dispatchDate: '2026-04-01',\n    recallValueUSD: 85000,\n  },\n  allPackets: " + JSON.stringify(packets, null, 2) + ",\n  groundTruth: {\n    violations: " + JSON.stringify(violations, null, 2) + ",\n    correctDisposition: 'QUARANTINE_SUBSET',\n    correctQuarantineLots: ['LOT-A', 'LOT-B'],\n    recallLiabilityUSD: 85000,\n  }\n}\n";
fs.writeFileSync(path.join(__dirname, 'src/data/scenarios/medium.ts'), fileContent)
