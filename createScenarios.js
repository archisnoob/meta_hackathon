"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var path_1 = __importDefault(require("path"));
var easyTotal = 50;
var easyPackets = [];
var easyViolations = [];
for (var i = 1; i <= easyTotal; i++) {
    var isBad = i === 1;
    var labelData = {
        productName: 'Snacky Puffs',
        manufacturerName: 'SnackCo',
        countryOfOrigin: 'IN',
        batchCode: 'BATCH-EASY-001',
        lotNumber: 'LOT-A',
        manufacturingDate: '2026-03-01T00:00:00.000Z',
        expiryDate: '2026-09-01T00:00:00.000Z',
        netWeightG: isBad ? 185 : 200,
        ingredientList: isBad ? ['Corn', 'Salt', 'Sunset Yellow'] : ['Corn', 'Salt'],
        allergenDeclaration: [],
        mayContainAdvisory: [],
        fssaiLicenseNumber: isBad ? undefined : '12345678901234',
        fdaRegistrationNumber: undefined,
        hasNutritionLabel: true,
        languageCompliant: true,
        hasQRCode: true,
    };
    easyPackets.push({
        packetId: "PKT-EASY-".concat(i),
        lotNumber: 'LOT-A',
        labelData: labelData,
        formulation: {
            additives: [],
            preservativeCombinations: [],
            nutritionPanel: {
                per100g: { energyKcal: 400, proteinG: 10, totalFatG: 20, saturatedFatG: 5, carbohydratesG: 60, sugarsG: 5, dietaryFibreG: 5, sodiumMg: 200, moistureG: 5 },
                declaredTotalG: 100
            },
            coloringAgents: [],
            artificialFlavors: [],
            productionLineId: "LINE-1",
            sharedLineProducts: []
        },
        regulatory: {
            destinationMarket: 'IN',
            bannedSubstancesFound: [],
            labelingRequirementsPass: !isBad,
            halalCertRequired: false,
            halalCertPresent: false,
            jurisdictionConflicts: []
        }
    });
    if (isBad) {
        easyViolations.push({ violationCode: 'VC-LABEL-001', packetId: "PKT-EASY-".concat(i), lotNumber: 'LOT-A', severity: 'minor', correctActions: ['PRINT_UPDATED_LABEL_WITH_LICENSE', 'APPLY_STICKER_WITH_LICENSE_NUMBER', 'RECALL_FOR_RELABELING'], affectsEntireBatch: false, isArithmeticViolation: false, cascadeTriggers: [] }, { violationCode: 'VC-LABEL-002', packetId: "PKT-EASY-".concat(i), lotNumber: 'LOT-A', severity: 'serious', correctActions: ['RECALL_UNDERWEIGHT_PACKETS', 'REWEIGH_AND_RELABEL_ENTIRE_LOT', 'QUARANTINE_LOT_FOR_REPACKAGING'], affectsEntireBatch: false, isArithmeticViolation: false, cascadeTriggers: [] }, { violationCode: 'VC-LABEL-003', packetId: "PKT-EASY-".concat(i), lotNumber: 'LOT-A', severity: 'critical', correctActions: ['HOLD_BATCH_PENDING_RELABELING', 'RECALL_AND_RELABEL', 'DESTROY_BATCH_IF_COLOUR_BANNED'], affectsEntireBatch: false, isArithmeticViolation: false, cascadeTriggers: ['MAY_CONTAIN_CHECK'] });
    }
}
var fileContent = "import { Scenario } from './easy'\n\nexport const easyScenario: Scenario = {\n  seed: 42,\n  batchMetadata: {\n    batchId: 'BATCH-EASY-001',\n    productName: 'Snacky Puffs',\n    productCategory: 'snack',\n    destinationMarket: 'IN',\n    totalPacketCount: 50,\n    lotNumbers: ['LOT-A'],\n    manufacturingPlant: 'Plant-1',\n    dispatchDate: '2026-04-01',\n    recallValueUSD: 15000,\n  },\n  allPackets: ".concat(JSON.stringify(easyPackets, null, 2), ",\n  groundTruth: {\n    violations: ").concat(JSON.stringify(easyViolations, null, 2), ",\n    correctDisposition: 'HOLD',\n    correctQuarantineLots: [],\n    recallLiabilityUSD: 15000,\n  }\n} \n");
fs_1.default.writeFileSync(path_1.default.join(__dirname, 'src/data/scenarios/easy.ts'), fileContent);
