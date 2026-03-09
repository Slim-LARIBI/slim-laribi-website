import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    console.log('BODY:', body)

    const email = body?.email

    if (!email) {
      console.log('ERROR: missing email')
      return NextResponse.json({ error: 'email required' }, { status: 400 })
    }

        const result = await supabase
          .from('leads')
          .insert([{ email }])

    console.log('SUPABASE RESULT:', JSON.stringify(result, null, 2))

    if (result.error) {
      return NextResponse.json(
        { error: result.error.message, details: result.error },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data: result.data })
  } catch (err) {
    console.error('API CATCH ERROR:', err)
    return NextResponse.json({ error: 'server error' }, { status: 500 })
  }
}