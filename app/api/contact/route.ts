import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  subject: z.enum(['consulting', 'formation', 'audit', 'saas', 'autre']),
  message: z.string().min(20),
  budget: z.string().optional(),
})

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const data = contactSchema.parse(body)

    // TODO: Replace with real email sending
    // Options: Resend, SendGrid, Nodemailer, Postmark
    //
    // Example with Resend:
    // import { Resend } from 'resend'
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'noreply@laribislim.com',
    //   to: 'contact@laribislim.com',
    //   subject: `[Contact] ${data.subject} — ${data.name}`,
    //   text: `
    //     Nom: ${data.name}
    //     Email: ${data.email}
    //     Entreprise: ${data.company ?? 'N/A'}
    //     Sujet: ${data.subject}
    //     Budget: ${data.budget ?? 'N/A'}
    //
    //     Message:
    //     ${data.message}
    //   `,
    // })

    // For now, log the submission (development)
    console.log('[Contact form submission]', {
      name: data.name,
      email: data.email,
      company: data.company,
      subject: data.subject,
      budget: data.budget,
      messagePreview: data.message.slice(0, 50) + '...',
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { success: true, message: 'Message reçu. Réponse sous 24h.' },
      { status: 200 }
    )
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, error: 'Données invalides', details: error.errors },
        { status: 400 }
      )
    }

    console.error('[Contact API Error]', error)
    return NextResponse.json(
      { success: false, error: 'Erreur serveur. Réessayez plus tard.' },
      { status: 500 }
    )
  }
}
