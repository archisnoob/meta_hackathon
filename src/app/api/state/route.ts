import { NextResponse } from 'next/server'
import { env } from '../../../env/singleton'

export async function GET() {
  try {
    const result = env.getState()
    return NextResponse.json(result, { status: 200 })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json({ error: message }, { status: 400 })
  }
}
