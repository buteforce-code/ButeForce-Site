import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { email } = await req.json()

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email required' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'Buteforce Website <noreply@buteforce.com>',
      to: ['admin@buteforce.com'],
      replyTo: email,
      subject: `🎯 New AI Audit request — ${email}`,
      html: `
        <div style="font-family: monospace; max-width: 560px; padding: 32px; background: #0C0C0C; color: #F5F5F5;">
          <h1 style="font-size: 20px; font-weight: 800; margin: 0 0 8px; color: #FFFC01;">
            New founder requested the AI Audit
          </h1>
          <p style="color: #888; font-size: 12px; margin: 0 0 28px;">
            Via the /lp/ai-audit landing page
          </p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #2A2A2A; color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; width: 100px;">Email</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #2A2A2A;">
                <a href="mailto:${email}" style="color: #FFFC01;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;">Source</td>
              <td style="padding: 10px 0; color: #F5F5F5;">Founder landing page — AI Audit CTA</td>
            </tr>
          </table>

          <div style="margin-top: 28px; padding: 16px; background: #1A1A1A; border-radius: 6px; border-left: 3px solid #FFFC01;">
            <p style="color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 6px;">Next step</p>
            <p style="color: #F5F5F5; margin: 0; font-size: 13px;">Reply to this email within 24h with the free AI Audit framework doc.</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[LP Audit API]', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
