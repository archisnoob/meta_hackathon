import { Scenario } from './easy'

export const easyScenario: Scenario = {
  seed: 42,
  batchMetadata: {
    batchId: 'BATCH-EASY-001',
    productName: 'Snacky Puffs',
    productCategory: 'snack',
    destinationMarket: 'IN',
    totalPacketCount: 50,
    lotNumbers: ['LOT-A'],
    manufacturingPlant: 'Plant-1',
    dispatchDate: '2026-04-01',
    recallValueUSD: 15000,
  },
  allPackets: [
  {
    "packetId": "PKT-EASY-1",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 185,
      "ingredientList": [
        "Corn",
        "Salt",
        "Sunset Yellow"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-2",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-3",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-4",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-5",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-6",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-7",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-8",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-9",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-10",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-11",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-12",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-13",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-14",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-15",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-16",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-17",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-18",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-19",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-20",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-21",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-22",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-23",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-24",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-25",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-26",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-27",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-28",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-29",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-30",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-31",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-32",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-33",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-34",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-35",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-36",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-37",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-38",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-39",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-40",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-41",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-42",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-43",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-44",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-45",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-46",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-47",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-48",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-49",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-EASY-50",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Snacky Puffs",
      "manufacturerName": "SnackCo",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-EASY-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2026-09-01T00:00:00.000Z",
      "netWeightG": 200,
      "ingredientList": [
        "Corn",
        "Salt"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fssaiLicenseNumber": "12345678901234",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 5,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 100
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-1",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "IN",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  }
],
  groundTruth: {
    violations: [
  {
    "violationCode": "VC-LABEL-001",
    "packetId": "PKT-EASY-1",
    "lotNumber": "LOT-A",
    "severity": "minor",
    "correctActions": [
      "PRINT_UPDATED_LABEL_WITH_LICENSE",
      "APPLY_STICKER_WITH_LICENSE_NUMBER",
      "RECALL_FOR_RELABELING"
    ],
    "affectsEntireBatch": false,
    "isArithmeticViolation": false,
    "cascadeTriggers": []
  },
  {
    "violationCode": "VC-LABEL-002",
    "packetId": "PKT-EASY-1",
    "lotNumber": "LOT-A",
    "severity": "serious",
    "correctActions": [
      "RECALL_UNDERWEIGHT_PACKETS",
      "REWEIGH_AND_RELABEL_ENTIRE_LOT",
      "QUARANTINE_LOT_FOR_REPACKAGING"
    ],
    "affectsEntireBatch": false,
    "isArithmeticViolation": false,
    "cascadeTriggers": []
  },
  {
    "violationCode": "VC-LABEL-003",
    "packetId": "PKT-EASY-1",
    "lotNumber": "LOT-A",
    "severity": "critical",
    "correctActions": [
      "HOLD_BATCH_PENDING_RELABELING",
      "RECALL_AND_RELABEL",
      "DESTROY_BATCH_IF_COLOUR_BANNED"
    ],
    "affectsEntireBatch": false,
    "isArithmeticViolation": false,
    "cascadeTriggers": [
      "MAY_CONTAIN_CHECK"
    ]
  }
],
    correctDisposition: 'HOLD',
    correctQuarantineLots: [],
    recallLiabilityUSD: 15000,
  }
} 
