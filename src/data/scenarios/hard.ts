import { Scenario } from './easy'

export const hardScenario: Scenario = {
  seed: 42,
  batchMetadata: {
    batchId: 'BATCH-HARD-001',
    productName: 'MaxPump Pre-Workout',
    productCategory: 'supplement',
    destinationMarket: 'US',
    totalPacketCount: 200,
    lotNumbers: ['LOT-X', 'LOT-Y', 'LOT-Z'],
    manufacturingPlant: 'Plant-3',
    dispatchDate: '2026-04-01',
    recallValueUSD: 520000,
  },
  allPackets: [
  {
    "packetId": "PKT-HARD-1",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Geranium Extract",
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "INVALID-123",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [
        {
          "additiveCode": "DMAA",
          "name": "1,3-dimethylamylamine",
          "declaredConcentrationMgKg": 15000,
          "legalLimitMgKg": 0,
          "isPermittedInMarket": false
        }
      ],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 6.8,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 101.8
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [
        {
          "substanceName": "DMAA",
          "declaredAs": "Geranium Extract",
          "bannedUnder": "FDA 21 CFR",
          "legalInOrigin": true
        }
      ],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-2",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Geranium Extract",
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "INVALID-123",
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [
        {
          "additiveCode": "DMAA",
          "name": "1,3-dimethylamylamine",
          "declaredConcentrationMgKg": 15000,
          "legalLimitMgKg": 0,
          "isPermittedInMarket": false
        }
      ],
      "preservativeCombinations": [],
      "nutritionPanel": {
        "per100g": {
          "energyKcal": 400,
          "proteinG": 10,
          "totalFatG": 20,
          "saturatedFatG": 5,
          "carbohydratesG": 60,
          "sugarsG": 5,
          "dietaryFibreG": 6.8,
          "sodiumMg": 200,
          "moistureG": 5
        },
        "declaredTotalG": 101.8
      },
      "coloringAgents": [],
      "artificialFlavors": [],
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [
        {
          "substanceName": "DMAA",
          "declaredAs": "Geranium Extract",
          "bannedUnder": "FDA 21 CFR",
          "legalInOrigin": true
        }
      ],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-3",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-4",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-5",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-6",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-7",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-8",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-9",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-10",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-11",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-12",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-13",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-14",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-15",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-16",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-17",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-18",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-19",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-20",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-21",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-22",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-23",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-24",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-25",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-26",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-27",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-28",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-29",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-30",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-31",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-32",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-33",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-34",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-35",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-36",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-37",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-38",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-39",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-40",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-41",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-42",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-43",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-44",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-45",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-46",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-47",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-48",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-49",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-50",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-51",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-52",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-53",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-54",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-55",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-56",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-57",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-58",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-59",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-60",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-61",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-62",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-63",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-64",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-65",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-66",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-67",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-68",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-69",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-70",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-71",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-72",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-73",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-74",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-75",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-76",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-77",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-78",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-79",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-80",
    "lotNumber": "LOT-X",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-X",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Bar"
      ]
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-81",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Geranium Extract",
        "natural flavor blend"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
      "hasNutritionLabel": true,
      "languageCompliant": false,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [
        {
          "additiveCode": "E952",
          "name": "Cyclamate",
          "declaredConcentrationMgKg": 500,
          "legalLimitMgKg": 0,
          "isPermittedInMarket": false
        }
      ],
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
      "artificialFlavors": [
        "Cyclamate (E952)"
      ],
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [
        {
          "substanceName": "DMAA",
          "declaredAs": "Geranium Extract",
          "bannedUnder": "FDA 21 CFR",
          "legalInOrigin": true
        },
        {
          "substanceName": "Cyclamate",
          "declaredAs": "natural flavor blend",
          "bannedUnder": "FDA",
          "legalInOrigin": false
        }
      ],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-82",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Geranium Extract",
        "natural flavor blend"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
      "hasNutritionLabel": true,
      "languageCompliant": false,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [
        {
          "additiveCode": "E952",
          "name": "Cyclamate",
          "declaredConcentrationMgKg": 500,
          "legalLimitMgKg": 0,
          "isPermittedInMarket": false
        }
      ],
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
      "artificialFlavors": [
        "Cyclamate (E952)"
      ],
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [
        {
          "substanceName": "DMAA",
          "declaredAs": "Geranium Extract",
          "bannedUnder": "FDA 21 CFR",
          "legalInOrigin": true
        },
        {
          "substanceName": "Cyclamate",
          "declaredAs": "natural flavor blend",
          "bannedUnder": "FDA",
          "legalInOrigin": false
        }
      ],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-83",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-84",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-85",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-86",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-87",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-88",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-89",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-90",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-91",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-92",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-93",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-94",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-95",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-96",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-97",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-98",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-99",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-100",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-101",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-102",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-103",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-104",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-105",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-106",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-107",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-108",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-109",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-110",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-111",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-112",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-113",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-114",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-115",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-116",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-117",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-118",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-119",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-120",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-121",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-122",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-123",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-124",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-125",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-126",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-127",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-128",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-129",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-130",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-131",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-132",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-133",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-134",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-135",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-136",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-137",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-138",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-139",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-140",
    "lotNumber": "LOT-Y",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Y",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-141",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-142",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-143",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-144",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-145",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-146",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-147",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-148",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-149",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-150",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-151",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-152",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-153",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-154",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-155",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-156",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-157",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-158",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-159",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-160",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-161",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-162",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-163",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-164",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-165",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-166",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-167",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-168",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-169",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-170",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-171",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-172",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-173",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-174",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-175",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-176",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-177",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-178",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-179",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-180",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-181",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-182",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-183",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-184",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-185",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-186",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-187",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-188",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-189",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-190",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-191",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-192",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-193",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-194",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-195",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-196",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-197",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-198",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-199",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": true,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-HARD-200",
    "lotNumber": "LOT-Z",
    "labelData": {
      "productName": "MaxPump Pre-Workout",
      "manufacturerName": "Supplements USA",
      "countryOfOrigin": "IN",
      "batchCode": "BATCH-HARD-001",
      "lotNumber": "LOT-Z",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "2028-03-01T00:00:00.000Z",
      "netWeightG": 500,
      "ingredientList": [
        "Vitamin C"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "fdaRegistrationNumber": "FDA-VALID-999",
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": []
    },
    "regulatory": {
      "destinationMarket": "US",
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
    "violationCode": "VC-REG-001",
    "packetId": "PKT-HARD-1",
    "lotNumber": "LOT-X",
    "severity": "critical",
    "correctActions": [
      "HOLD_ENTIRE_BATCH",
      "NOTIFY_REGULATORY_AUTHORITY",
      "INITIATE_CRIMINAL_REFERRAL"
    ],
    "affectsEntireBatch": false,
    "isArithmeticViolation": false,
    "cascadeTriggers": [
      "BANNED"
    ]
  },
  {
    "violationCode": "VC-FORM-004",
    "packetId": "PKT-HARD-1",
    "lotNumber": "LOT-X",
    "severity": "critical",
    "correctActions": [
      "DESTROY_DANGEROUS_BATCH",
      "NOTIFY_REGULATORY_AUTHORITY_IMMEDIATELY",
      "QUARANTINE_AND_REFORMULATE"
    ],
    "affectsEntireBatch": false,
    "isArithmeticViolation": false,
    "cascadeTriggers": []
  },
  {
    "violationCode": "VC-FORM-001",
    "packetId": "PKT-HARD-1",
    "lotNumber": "LOT-X",
    "severity": "serious",
    "correctActions": [
      "CORRECT_NUTRITION_DECLARATION",
      "HOLD_FOR_LAB_REANALYSIS",
      "RELABEL_WITH_CORRECTED_NUTRITION"
    ],
    "affectsEntireBatch": false,
    "isArithmeticViolation": true,
    "cascadeTriggers": []
  },
  {
    "violationCode": "VC-LABEL-001",
    "packetId": "PKT-HARD-1",
    "lotNumber": "LOT-X",
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
    "violationCode": "VC-REG-003",
    "packetId": "PKT-HARD-1",
    "lotNumber": "LOT-X",
    "severity": "critical",
    "correctActions": [
      "ADD_MAY_CONTAIN_ADVISORY",
      "SEGREGATE_PRODUCTION_LINE",
      "RECALL_FOR_ALLERGEN_RELABELING"
    ],
    "affectsEntireBatch": false,
    "isArithmeticViolation": false,
    "cascadeTriggers": [
      "MAY_CONTAIN_CHECK"
    ]
  },
  {
    "violationCode": "VC-REG-001",
    "packetId": "PKT-HARD-2",
    "lotNumber": "LOT-X",
    "severity": "critical",
    "correctActions": [
      "HOLD_ENTIRE_BATCH",
      "NOTIFY_REGULATORY_AUTHORITY",
      "INITIATE_CRIMINAL_REFERRAL"
    ],
    "affectsEntireBatch": false,
    "isArithmeticViolation": false,
    "cascadeTriggers": [
      "BANNED"
    ]
  },
  {
    "violationCode": "VC-FORM-004",
    "packetId": "PKT-HARD-2",
    "lotNumber": "LOT-X",
    "severity": "critical",
    "correctActions": [
      "DESTROY_DANGEROUS_BATCH",
      "NOTIFY_REGULATORY_AUTHORITY_IMMEDIATELY",
      "QUARANTINE_AND_REFORMULATE"
    ],
    "affectsEntireBatch": false,
    "isArithmeticViolation": false,
    "cascadeTriggers": []
  },
  {
    "violationCode": "VC-FORM-001",
    "packetId": "PKT-HARD-2",
    "lotNumber": "LOT-X",
    "severity": "serious",
    "correctActions": [
      "CORRECT_NUTRITION_DECLARATION",
      "HOLD_FOR_LAB_REANALYSIS",
      "RELABEL_WITH_CORRECTED_NUTRITION"
    ],
    "affectsEntireBatch": false,
    "isArithmeticViolation": true,
    "cascadeTriggers": []
  },
  {
    "violationCode": "VC-LABEL-001",
    "packetId": "PKT-HARD-2",
    "lotNumber": "LOT-X",
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
    "violationCode": "VC-REG-003",
    "packetId": "PKT-HARD-2",
    "lotNumber": "LOT-X",
    "severity": "critical",
    "correctActions": [
      "ADD_MAY_CONTAIN_ADVISORY",
      "SEGREGATE_PRODUCTION_LINE",
      "RECALL_FOR_ALLERGEN_RELABELING"
    ],
    "affectsEntireBatch": false,
    "isArithmeticViolation": false,
    "cascadeTriggers": [
      "MAY_CONTAIN_CHECK"
    ]
  },
  {
    "violationCode": "VC-REG-001",
    "packetId": "PKT-HARD-81",
    "lotNumber": "LOT-Y",
    "severity": "critical",
    "correctActions": [
      "HOLD_ENTIRE_BATCH",
      "NOTIFY_REGULATORY_AUTHORITY",
      "INITIATE_CRIMINAL_REFERRAL"
    ],
    "affectsEntireBatch": false,
    "isArithmeticViolation": false,
    "cascadeTriggers": [
      "BANNED"
    ]
  },
  {
    "violationCode": "VC-FORM-003",
    "packetId": "PKT-HARD-81",
    "lotNumber": "LOT-Y",
    "severity": "critical",
    "correctActions": [
      "DESTROY_BATCH",
      "REDIRECT_BATCH_TO_PERMITTED_MARKET",
      "HOLD_PENDING_REGULATORY_WAIVER"
    ],
    "affectsEntireBatch": false,
    "isArithmeticViolation": false,
    "cascadeTriggers": [
      "BANNED"
    ]
  },
  {
    "violationCode": "VC-LABEL-005",
    "packetId": "PKT-HARD-81",
    "lotNumber": "LOT-Y",
    "severity": "serious",
    "correctActions": [
      "APPLY_TRANSLATED_LABEL",
      "RECALL_FOR_TRANSLATION_COMPLIANCE",
      "REDIRECT_TO_APPROPRIATE_LANGUAGE_MARKET"
    ],
    "affectsEntireBatch": false,
    "isArithmeticViolation": false,
    "cascadeTriggers": []
  },
  {
    "violationCode": "VC-REG-001",
    "packetId": "PKT-HARD-82",
    "lotNumber": "LOT-Y",
    "severity": "critical",
    "correctActions": [
      "HOLD_ENTIRE_BATCH",
      "NOTIFY_REGULATORY_AUTHORITY",
      "INITIATE_CRIMINAL_REFERRAL"
    ],
    "affectsEntireBatch": false,
    "isArithmeticViolation": false,
    "cascadeTriggers": [
      "BANNED"
    ]
  },
  {
    "violationCode": "VC-FORM-003",
    "packetId": "PKT-HARD-82",
    "lotNumber": "LOT-Y",
    "severity": "critical",
    "correctActions": [
      "DESTROY_BATCH",
      "REDIRECT_BATCH_TO_PERMITTED_MARKET",
      "HOLD_PENDING_REGULATORY_WAIVER"
    ],
    "affectsEntireBatch": false,
    "isArithmeticViolation": false,
    "cascadeTriggers": [
      "BANNED"
    ]
  },
  {
    "violationCode": "VC-LABEL-005",
    "packetId": "PKT-HARD-82",
    "lotNumber": "LOT-Y",
    "severity": "serious",
    "correctActions": [
      "APPLY_TRANSLATED_LABEL",
      "RECALL_FOR_TRANSLATION_COMPLIANCE",
      "REDIRECT_TO_APPROPRIATE_LANGUAGE_MARKET"
    ],
    "affectsEntireBatch": false,
    "isArithmeticViolation": false,
    "cascadeTriggers": []
  },
  {
    "violationCode": "VC-LABEL-004",
    "packetId": "PKT-HARD-141",
    "lotNumber": "LOT-Z",
    "severity": "minor",
    "correctActions": [
      "REPRINT_EXPIRY_DATES",
      "APPLY_CORRECTED_EXPIRY_STICKER",
      "RECALL_AND_RELABEL_EXPIRY"
    ],
    "affectsEntireBatch": false,
    "isArithmeticViolation": false,
    "cascadeTriggers": []
  },
  {
    "violationCode": "VC-LABEL-004",
    "packetId": "PKT-HARD-142",
    "lotNumber": "LOT-Z",
    "severity": "minor",
    "correctActions": [
      "REPRINT_EXPIRY_DATES",
      "APPLY_CORRECTED_EXPIRY_STICKER",
      "RECALL_AND_RELABEL_EXPIRY"
    ],
    "affectsEntireBatch": false,
    "isArithmeticViolation": false,
    "cascadeTriggers": []
  },
  {
    "violationCode": "VC-LABEL-004",
    "packetId": "PKT-HARD-143",
    "lotNumber": "LOT-Z",
    "severity": "minor",
    "correctActions": [
      "REPRINT_EXPIRY_DATES",
      "APPLY_CORRECTED_EXPIRY_STICKER",
      "RECALL_AND_RELABEL_EXPIRY"
    ],
    "affectsEntireBatch": false,
    "isArithmeticViolation": false,
    "cascadeTriggers": []
  }
],
    correctDisposition: 'QUARANTINE_SUBSET',
    correctQuarantineLots: ['LOT-X', 'LOT-Y'],
    recallLiabilityUSD: 520000,
  }
}
