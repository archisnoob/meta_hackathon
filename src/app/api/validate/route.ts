import { NextResponse } from 'next/server'
import { env } from '../../../env/singleton'

export async function GET() {
  try {
    const validationResults = env.selfValidate()
    const allPassed = Object.values(validationResults).every(v => v.valid)
    return NextResponse.json({
      passed: allPassed,
      results: validationResults
    }, { status: 200 })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
