import { NextRequest, NextResponse } from 'next/server'
// In the baseline we run the script using ts-node separately, 
// but if this is an API endpoint we would mock kicking off a job.
// As defined by 'baseline' endpoint spec:
export async function POST(req: NextRequest) {
  try {
    return NextResponse.json({ message: "Baseline run should be invoked via 'npm run baseline'" }, { status: 200 })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
