const fs = require('fs');
const path = require('path');

const packets = []
const violations = []
let pktId = 1;

for (let i = 1; i <= 80; i++) {
  const isBad = i <= 2; 
  if (isBad) {
      violations.push(
        { violationCode: 'VC-REG-001', packetId: 'PKT-HARD-' + pktId, lotNumber: 'LOT-X', severity: 'critical', correctActions: ['HOLD_ENTIRE_BATCH', 'NOTIFY_REGULATORY_AUTHORITY', 'INITIATE_CRIMINAL_REFERRAL'], affectsEntireBatch: false, isArithmeticViolation: false, cascadeTriggers: ['BANNED'] },
        { violationCode: 'VC-FORM-004', packetId: 'PKT-HARD-' + pktId, lotNumber: 'LOT-X', severity: 'critical', correctActions: ['DESTROY_DANGEROUS_BATCH', 'NOTIFY_REGULATORY_AUTHORITY_IMMEDIATELY', 'QUARANTINE_AND_REFORMULATE'], affectsEntireBatch: false, isArithmeticViolation: false, cascadeTriggers: [] },
        { violationCode: 'VC-FORM-001', packetId: 'PKT-HARD-' + pktId, lotNumber: 'LOT-X', severity: 'serious', correctActions: ['CORRECT_NUTRITION_DECLARATION', 'HOLD_FOR_LAB_REANALYSIS', 'RELABEL_WITH_CORRECTED_NUTRITION'], affectsEntireBatch: false, isArithmeticViolation: true, cascadeTriggers: [] },
        { violationCode: 'VC-LABEL-001', packetId: 'PKT-HARD-' + pktId, lotNumber: 'LOT-X', severity: 'minor', correctActions: ['PRINT_UPDATED_LABEL_WITH_LICENSE', 'APPLY_STICKER_WITH_LICENSE_NUMBER', 'RECALL_FOR_RELABELING'], affectsEntireBatch: false, isArithmeticViolation: false, cascadeTriggers: [] },
        { violationCode: 'VC-REG-003', packetId: 'PKT-HARD-' + pktId, lotNumber: 'LOT-X', severity: 'critical', correctActions: ['ADD_MAY_CONTAIN_ADVISORY', 'SEGREGATE_PRODUCTION_LINE', 'RECALL_FOR_ALLERGEN_RELABELING'], affectsEntireBatch: false, isArithmeticViolation: false, cascadeTriggers: ['MAY_CONTAIN_CHECK'] }
      )
  }
  
  packets.push({
    packetId: 'PKT-HARD-' + pktId,
    lotNumber: 'LOT-X',
    labelData: {
      productName: 'MaxPump Pre-Workout', manufacturerName: 'Supplements USA',
      countryOfOrigin: 'IN', batchCode: 'BATCH-HARD-001', lotNumber: 'LOT-X',
      manufacturingDate: '2026-03-01T00:00:00.000Z', expiryDate: '2028-03-01T00:00:00.000Z',
      netWeightG: 500, ingredientList: isBad ? ['Geranium Extract', 'Vitamin C'] : ['Vitamin C'],
      allergenDeclaration: [], mayContainAdvisory: [],
      fdaRegistrationNumber: isBad ? 'INVALID-123' : 'FDA-VALID-999',
      hasNutritionLabel: true, languageCompliant: true, hasQRCode: true,
    },
    formulation: {
        additives: isBad ? [{ additiveCode: 'DMAA', name: '1,3-dimethylamylamine', declaredConcentrationMgKg: 15000, legalLimitMgKg: 0, isPermittedInMarket: false }] : [],
        preservativeCombinations: [],
        nutritionPanel: {
            per100g: { energyKcal: 400, proteinG: 10, totalFatG: 20, saturatedFatG: 5, carbohydratesG: 60, sugarsG: 5, dietaryFibreG: isBad ? 6.8 : 5, sodiumMg: 200, moistureG: 5 },
            declaredTotalG: isBad ? 101.8 : 100
        },
        coloringAgents: [], artificialFlavors: [], productionLineId: "LINE-SHARED-PEANUT", sharedLineProducts: ["Peanut Bar"]
    },
    regulatory: {
        destinationMarket: 'US',
        bannedSubstancesFound: isBad ? [{ substanceName: 'DMAA', declaredAs: 'Geranium Extract', bannedUnder: 'FDA 21 CFR', legalInOrigin: true }] : [],
        labelingRequirementsPass: !isBad, halalCertRequired: false, halalCertPresent: false, jurisdictionConflicts: []
    }
  })
  pktId++;
}

for (let i = 1; i <= 60; i++) {
  const isBad = i <= 2;
  if (isBad) {
      violations.push(
        { violationCode: 'VC-REG-001', packetId: 'PKT-HARD-' + pktId, lotNumber: 'LOT-Y', severity: 'critical', correctActions: ['HOLD_ENTIRE_BATCH', 'NOTIFY_REGULATORY_AUTHORITY', 'INITIATE_CRIMINAL_REFERRAL'], affectsEntireBatch: false, isArithmeticViolation: false, cascadeTriggers: ['BANNED'] },
        { violationCode: 'VC-FORM-003', packetId: 'PKT-HARD-' + pktId, lotNumber: 'LOT-Y', severity: 'critical', correctActions: ['DESTROY_BATCH', 'REDIRECT_BATCH_TO_PERMITTED_MARKET', 'HOLD_PENDING_REGULATORY_WAIVER'], affectsEntireBatch: false, isArithmeticViolation: false, cascadeTriggers: ['BANNED'] },
        { violationCode: 'VC-LABEL-005', packetId: 'PKT-HARD-' + pktId, lotNumber: 'LOT-Y', severity: 'serious', correctActions: ['APPLY_TRANSLATED_LABEL', 'RECALL_FOR_TRANSLATION_COMPLIANCE', 'REDIRECT_TO_APPROPRIATE_LANGUAGE_MARKET'], affectsEntireBatch: false, isArithmeticViolation: false, cascadeTriggers: [] }
      )
  }
  
  packets.push({
    packetId: 'PKT-HARD-' + pktId, lotNumber: 'LOT-Y',
    labelData: {
      productName: 'MaxPump Pre-Workout', manufacturerName: 'Supplements USA',
      countryOfOrigin: 'IN', batchCode: 'BATCH-HARD-001', lotNumber: 'LOT-Y',
      manufacturingDate: '2026-03-01T00:00:00.000Z', expiryDate: '2028-03-01T00:00:00.000Z',
      netWeightG: 500, ingredientList: isBad ? ['Geranium Extract', 'natural flavor blend'] : ['Vitamin C'],
      allergenDeclaration: [], mayContainAdvisory: [],
      fdaRegistrationNumber: 'FDA-VALID-999',
      hasNutritionLabel: true, languageCompliant: !isBad, hasQRCode: true, 
    },
    formulation: {
        additives: isBad ? [{ additiveCode: 'E952', name: 'Cyclamate', declaredConcentrationMgKg: 500, legalLimitMgKg: 0, isPermittedInMarket: false }] : [],
        preservativeCombinations: [],
        nutritionPanel: { per100g: { energyKcal: 400, proteinG: 10, totalFatG: 20, saturatedFatG: 5, carbohydratesG: 60, sugarsG: 5, dietaryFibreG: 5, sodiumMg: 200, moistureG: 5 }, declaredTotalG: 100 },
        coloringAgents: [], artificialFlavors: isBad ? ['Cyclamate (E952)'] : [], productionLineId: "LINE-SHARED-PEANUT", sharedLineProducts: [] 
    },
    regulatory: {
        destinationMarket: 'US',
        bannedSubstancesFound: isBad ? [{ substanceName: 'DMAA', declaredAs: 'Geranium Extract', bannedUnder: 'FDA 21 CFR', legalInOrigin: true }, { substanceName: 'Cyclamate', declaredAs: 'natural flavor blend', bannedUnder: 'FDA', legalInOrigin: false }] : [],
        labelingRequirementsPass: false, halalCertRequired: false, halalCertPresent: false, jurisdictionConflicts: []
    }
  })
  pktId++;
}

for (let i = 1; i <= 60; i++) {
  const isBad = i <= 3; 
  if (isBad) {
      violations.push(
        { violationCode: 'VC-LABEL-004', packetId: 'PKT-HARD-' + pktId, lotNumber: 'LOT-Z', severity: 'minor', correctActions: ['REPRINT_EXPIRY_DATES', 'APPLY_CORRECTED_EXPIRY_STICKER', 'RECALL_AND_RELABEL_EXPIRY'], affectsEntireBatch: false, isArithmeticViolation: false, cascadeTriggers: [] }
      )
  }
  packets.push({
    packetId: 'PKT-HARD-' + pktId, lotNumber: 'LOT-Z',
    labelData: {
      productName: 'MaxPump Pre-Workout', manufacturerName: 'Supplements USA',
      countryOfOrigin: 'IN', batchCode: 'BATCH-HARD-001', lotNumber: 'LOT-Z',
      manufacturingDate: '2026-03-01T00:00:00.000Z', expiryDate: isBad ? '' : '2028-03-01T00:00:00.000Z',
      netWeightG: 500, ingredientList: ['Vitamin C'],
      allergenDeclaration: [], mayContainAdvisory: [],
       fdaRegistrationNumber: 'FDA-VALID-999',
      hasNutritionLabel: true, languageCompliant: true, hasQRCode: true,
    },
    formulation: {
        additives: [], preservativeCombinations: [],
        nutritionPanel: { per100g: { energyKcal: 400, proteinG: 10, totalFatG: 20, saturatedFatG: 5, carbohydratesG: 60, sugarsG: 5, dietaryFibreG: 5, sodiumMg: 200, moistureG: 5 }, declaredTotalG: 100 },
        coloringAgents: [], artificialFlavors: [], productionLineId: "LINE-SHARED-PEANUT", sharedLineProducts: []
    },
    regulatory: {
        destinationMarket: 'US', bannedSubstancesFound: [],
        labelingRequirementsPass: true, halalCertRequired: false, halalCertPresent: false, jurisdictionConflicts: []
    }
  })
  pktId++;
}

const fileContent = "import { Scenario } from './easy'\n\nexport const hardScenario: Scenario = {\n  seed: 42,\n  batchMetadata: {\n    batchId: 'BATCH-HARD-001',\n    productName: 'MaxPump Pre-Workout',\n    productCategory: 'supplement',\n    destinationMarket: 'US',\n    totalPacketCount: 200,\n    lotNumbers: ['LOT-X', 'LOT-Y', 'LOT-Z'],\n    manufacturingPlant: 'Plant-3',\n    dispatchDate: '2026-04-01',\n    recallValueUSD: 520000,\n  },\n  allPackets: " + JSON.stringify(packets, null, 2) + ",\n  groundTruth: {\n    violations: " + JSON.stringify(violations, null, 2) + ",\n    correctDisposition: 'QUARANTINE_SUBSET',\n    correctQuarantineLots: ['LOT-X', 'LOT-Y'],\n    recallLiabilityUSD: 520000,\n  }\n}\n"

fs.writeFileSync(path.join(__dirname, 'src/data/scenarios/hard.ts'), fileContent)
