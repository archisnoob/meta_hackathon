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
    description: 'Missing/invalid mandatory license or registration number (e.g. FSSAI, FDA)',
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
  'VC-LABEL-004': {
    code: 'VC-LABEL-004',
    description: 'Expiry date missing or in an incorrect format',
    defaultSeverity: 'minor',
    applicableDepths: ['label'],
    applicableMarkets: ['IN', 'US', 'EU'],
    regulationRef: 'General Shelf Life / Expiry Guidelines',
  },
  'VC-LABEL-005': {
    code: 'VC-LABEL-005',
    description: 'Mandatory language translation absent on label (e.g., Spanish for specific US markets)',
    defaultSeverity: 'serious',
    applicableDepths: ['label'],
    applicableMarkets: ['US', 'EU'],
    regulationRef: 'FDA 21 CFR 101.15 / EU 1169/2011 Art 15',
  },
  'VC-LABEL-006': {
    code: 'VC-LABEL-006',
    description: 'Missing allergen emphasis (e.g., bold formatting) in ingredient list',
    defaultSeverity: 'serious',
    applicableDepths: ['label'],
    applicableMarkets: ['EU'],
    regulationRef: 'EU Reg 1169/2011 Art 21',
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
  'VC-FORM-004': {
    code: 'VC-FORM-004',
    description: 'Substance/additive concentration exceeds any safe or legal threshold',
    defaultSeverity: 'critical',
    applicableDepths: ['formulation', 'regulatory'],
    applicableMarkets: ['IN', 'US', 'EU'],
    regulationRef: 'Substance-specific toxicity threshold guidelines',
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
}
