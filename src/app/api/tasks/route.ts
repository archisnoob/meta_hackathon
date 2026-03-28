import { NextResponse } from 'next/server'
import { env } from '../../../env/singleton'

export async function GET() {
  try {
    const result = {
      tasks: env.listTasks(),
      actionSchema: { 
        description: 'Action schema for PackComplianceEnv', 
        fields: {
          inspectPackets: 'Array<{ packetId: string, depth: "label"|"formulation"|"regulatory" }>',
          flagViolations: 'Array<ViolationFlag>',
          batchDisposition: 'Optional<PASS|HOLD|QUARANTINE_SUBSET>',
          quarantineLotIds: 'Optional<Array<string>>',
        }
      }
    }
    return NextResponse.json(result, { status: 200 })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
