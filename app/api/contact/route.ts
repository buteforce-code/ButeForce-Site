import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

async function saveSubmission(data: {
  name: string
  company: string
  email: string
  problem: string
  budget: string
}) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_ANON_KEY
  if (!url || !key) {
    console.warn('[Contact API] Supabase env vars missing — skipping DB save')
    return
  }

  const res = await fetch(`${url}/rest/v1/contact_submissions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: key,
      Authorization: `Bearer ${key}`,
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(data),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`Supabase insert failed: ${res.status} ${text}`)
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name, company, email, problem, budget } = await req.json()

    if (!name?.trim() || !email?.trim() || !problem?.trim()) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    if (!EMAIL_RE.test(email.trim())) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const clean = {
      name: name.trim(),
      company: company?.trim() ?? '',
      email: email.trim().toLowerCase(),
      problem: problem.trim(),
      budget: budget ?? '',
    }

    // Save to DB — must succeed before we report success
    await saveSubmission(clean)

    // Email notification is best-effort — don't let it block a saved lead
    try {
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: 'Buteforce Website <noreply@buteforce.com>',
        to: ['admin@buteforce.com', 'dhyan.vrit@gmail.com'],
        replyTo: clean.email,
        subject: `New project enquiry — ${clean.company || clean.name}`,
        html: `
          <div style="font-family: monospace; max-width: 560px; padding: 32px; background: #0C0C0C; color: #F5F5F5;">
            <h1 style="font-size: 24px; font-weight: 800; margin: 0 0 24px; color: #FFFC01;">
              New project enquiry
            </h1>

            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #2A2A2A; color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; width: 120px;">Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #2A2A2A; color: #F5F5F5;">${clean.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #2A2A2A; color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;">Company</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #2A2A2A; color: #F5F5F5;">${clean.company || '—'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #2A2A2A; color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #2A2A2A;"><a href="mailto:${clean.email}" style="color: #FFFC01;">${clean.email}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #2A2A2A; color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em;">Budget</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #2A2A2A; color: #F5F5F5;">${clean.budget || '—'}</td>
              </tr>
            </table>

            <div style="margin-top: 24px;">
              <p style="color: #888; font-size: 11px; text-transform: uppercase; letter-spacing: 0.08em; margin: 0 0 10px;">The problem</p>
              <p style="color: #F5F5F5; line-height: 1.7; margin: 0; white-space: pre-wrap;">${clean.problem}</p>
            </div>
          </div>
        `,
      })
    } catch (emailErr) {
      console.error('[Contact API] Email notification failed (lead is saved):', emailErr)
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('[Contact API]', err)
    return NextResponse.json({ error: 'Failed to save submission' }, { status: 500 })
  }
}
