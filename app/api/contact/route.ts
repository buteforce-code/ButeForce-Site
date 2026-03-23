import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { name, company, email, problem, budget } = await req.json()

    if (!name || !email || !problem) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Buteforce Website <noreply@buteforce.com>',
      to: ['admin@buteforce.com'],
      replyTo: email,
      subject: `New project enquiry — ${company || name}`,
      html: `
        <div style="font-family: monospace; max-width: 560px; padding: 32px; background: #0C0C0C; color: #F5F5F5;">
          <h1 style="font-size: 24px; font-weight: 800; margin: 0 0 24px; color: #FFFC01;">
            New project enquiry
          </h1>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #2A2A2A; color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; width: 120px;">Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #2A2A2A; color: #F5F5F5;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #2A2A2A; color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;">Company</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #2A2A2A; color: #F5F5F5;">${company || '—'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #2A2A2A; color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #2A2A2A;"><a href="mailto:${email}" style="color: #FFFC01;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #2A2A2A; color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;">Budget</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #2A2A2A; color: #F5F5F5;">${budget || '—'}</td>
            </tr>
          </table>

          <div style="margin-top: 24px;">
            <p style="color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 10px;">The problem</p>
            <p style="color: #F5F5F5; line-height: 1.7; margin: 0; white-space: pre-wrap;">${problem}</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Contact API]', err)
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
  }
}
