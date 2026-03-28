export interface AdditiveRule {
  additiveCode: string
  name: string
  legalLimitMgKg: Record<string, Record<string, number>> // market -> category -> limit
}

export const ADDITIVE_DATABASE: Record<string, AdditiveRule> = {
  'E211': {
    additiveCode: 'E211',
    name: 'Sodium Benzoate',
    legalLimitMgKg: {
      'EU': { 'baby_food': 0, 'snack': 1000, 'supplement': 1000 },
      'IN': { 'baby_food': 0, 'snack': 1000, 'supplement': 1000 },
      'US': { 'baby_food': 0, 'snack': 1000, 'supplement': 1000 },
    }
  },
  'E202': {
    additiveCode: 'E202',
    name: 'Potassium Sorbate',
    legalLimitMgKg: {
      'EU': { 'baby_food': 0, 'snack': 1000, 'supplement': 1000 },
    }
  },
  'SUNSET_YELLOW': {
    additiveCode: 'SUNSET_YELLOW',
    name: 'Sunset Yellow FCF',
    legalLimitMgKg: {
      'IN': { 'baby_food': 0, 'snack': 100, 'supplement': 100 },
    }
  },
  'DMAA': {
    additiveCode: 'DMAA',
    name: '1,3-dimethylamylamine',
    legalLimitMgKg: {
      'IN': { 'supplement': 50 },  // Legal in Origin (IN)
      'US': { 'supplement': 0 },   // Banned in US
    }
  },
  'E952': {
    additiveCode: 'E952',
    name: 'Cyclamate',
    legalLimitMgKg: {
      'US': { 'supplement': 0 },   // Banned in US
      'EU': { 'supplement': 500 }, // Legal elsewhere
    }
  }
}
