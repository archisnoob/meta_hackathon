import { Scenario } from './easy'

export const mediumScenario: Scenario = {
  seed: 42,
  batchMetadata: {
    batchId: 'BATCH-MED-001',
    productName: 'Organic Baby Mash',
    productCategory: 'baby_food',
    destinationMarket: 'EU',
    totalPacketCount: 120,
    lotNumbers: ['LOT-A', 'LOT-B', 'LOT-C'],
    manufacturingPlant: 'Plant-2',
    dispatchDate: '2026-04-01',
    recallValueUSD: 85000,
  },
  allPackets: [
  {
    "packetId": "PKT-MED-1",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-2",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-3",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/26",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
      ],
      "allergenDeclaration": [],
      "mayContainAdvisory": [],
      "hasNutritionLabel": true,
      "languageCompliant": true,
      "hasQRCode": true
    },
    "formulation": {
      "additives": [
        {
          "additiveCode": "E211",
          "name": "Sodium Benzoate",
          "declaredConcentrationMgKg": 500,
          "legalLimitMgKg": 0,
          "isPermittedInMarket": false
        }
      ],
      "preservativeCombinations": [
        {
          "additive1Code": "E211",
          "additive2Code": "E202",
          "combinedLimitMgKg": 600,
          "declaredCombinedMgKg": 850,
          "exceedsLimit": true
        }
      ],
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
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [
        {
          "substanceName": "Sodium Benzoate",
          "declaredAs": "Sodium Benzoate",
          "bannedUnder": "EU Baby Food limits",
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
    "packetId": "PKT-MED-4",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-5",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-6",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-7",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-8",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-9",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-10",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-11",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-12",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-13",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-14",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-15",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-16",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-17",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-18",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-19",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-20",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-21",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-22",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-23",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-24",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-25",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-26",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-27",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-28",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-29",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-30",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-31",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-32",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-33",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-34",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-35",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-36",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-37",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-38",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-39",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-40",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-41",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-42",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-43",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-44",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-45",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-46",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-47",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-48",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-49",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-50",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-51",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-52",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-53",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-54",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-55",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-56",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-57",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-58",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-59",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-60",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-61",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-62",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-63",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-64",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-65",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-66",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-67",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-68",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-69",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-70",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-71",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-72",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-73",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-74",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-75",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-76",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-77",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-78",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-79",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-80",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-81",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-82",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-83",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-84",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-85",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-86",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-87",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-88",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-89",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-90",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-91",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-92",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-93",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-94",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-95",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-96",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-97",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-98",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-99",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-100",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-101",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-102",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-103",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-104",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-105",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-106",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-107",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-108",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-109",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-110",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-111",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-112",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-113",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-114",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-115",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-116",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-117",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-118",
    "lotNumber": "LOT-B",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-B",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-119",
    "lotNumber": "LOT-C",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-C",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  },
  {
    "packetId": "PKT-MED-120",
    "lotNumber": "LOT-A",
    "labelData": {
      "productName": "Organic Baby Mash",
      "manufacturerName": "BabyFoods Inc",
      "countryOfOrigin": "EU",
      "batchCode": "BATCH-MED-001",
      "lotNumber": "LOT-A",
      "manufacturingDate": "2026-03-01T00:00:00.000Z",
      "expiryDate": "30/09/2026",
      "netWeightG": 100,
      "ingredientList": [
        "Apple"
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
      "productionLineId": "LINE-SHARED-PEANUT",
      "sharedLineProducts": [
        "Peanut Butter Mash"
      ]
    },
    "regulatory": {
      "destinationMarket": "EU",
      "bannedSubstancesFound": [],
      "labelingRequirementsPass": false,
      "halalCertRequired": false,
      "halalCertPresent": false,
      "jurisdictionConflicts": []
    }
  }
],
  groundTruth: {
    violations: [
  {
    "violationCode": "VC-FORM-003",
    "packetId": "PKT-MED-3",
    "lotNumber": "LOT-A",
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
    "violationCode": "VC-FORM-002",
    "packetId": "PKT-MED-3",
    "lotNumber": "LOT-A",
    "severity": "critical",
    "correctActions": [
      "DESTROY_BATCH_EXCEEDING_LIMITS",
      "REFORMULATE_PRESERVATIVE_LEVELS",
      "HOLD_BATCH_PENDING_REFORMULATION"
    ],
    "affectsEntireBatch": false,
    "isArithmeticViolation": false,
    "cascadeTriggers": []
  },
  {
    "violationCode": "VC-LABEL-004",
    "packetId": "PKT-MED-3",
    "lotNumber": "LOT-A",
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
    correctQuarantineLots: ['LOT-A', 'LOT-B'],
    recallLiabilityUSD: 85000,
  }
}
