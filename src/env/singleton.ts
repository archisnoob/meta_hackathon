import { PackComplianceEnv } from './environment'

const globalForEnv = globalThis as unknown as {
  env: PackComplianceEnv | undefined
}

export const env = globalForEnv.env ?? new PackComplianceEnv()

if (process.env.NODE_ENV !== 'production') {
  globalForEnv.env = env
}
