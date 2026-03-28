export const JURISDICTION_RULES: Record<string, {
  bannedSubstances: string[]
  mandatoryLanguages: string[]
  requiresHalal: boolean
}> = {
  'IN': {
    bannedSubstances: [],
    mandatoryLanguages: ['English', 'Hindi'],
    requiresHalal: false,
  },
  'EU': {
    // E211 in baby food is handled by additive limit 0 or specifically noted here.
    bannedSubstances: [],
    mandatoryLanguages: ['English'],
    requiresHalal: true, // For products containing gelatine as per scenario
  },
  'US': {
    bannedSubstances: ['DMAA', '1,3-dimethylamylamine', 'Cyclamate', 'E952'],
    mandatoryLanguages: ['English', 'Spanish'],
    requiresHalal: false,
  }
}

export const PER_MARKET_RULES = JURISDICTION_RULES;
