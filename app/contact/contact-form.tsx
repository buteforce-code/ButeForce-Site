'use client'

import { useState } from 'react'

const BUDGETS = [
  'Under $5,000',
  '$5,000 – $15,000',
  '$15,000 – $50,000',
  '$50,000+',
  'Not sure yet',
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

interface FormFields {
  name: string
  company: string
  email: string
  problem: string
  budget: string
}

type FieldErrors = Partial<Record<keyof FormFields, string>>

function validate(form: FormFields): FieldErrors {
  const errors: FieldErrors = {}
  if (!form.name.trim()) errors.name = 'Name is required'
  if (!form.email.trim()) {
    errors.email = 'Email is required'
  } else if (!EMAIL_RE.test(form.email.trim())) {
    errors.email = 'Enter a valid email address'
  }
  if (!form.problem.trim()) errors.problem = 'Please describe what you want to automate'
  return errors
}

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState<FormFields>({
    name: '', company: '', email: '', problem: '', budget: '',
  })
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})

  const set = (k: keyof FormFields) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm(f => ({ ...f, [k]: e.target.value }))
      if (fieldErrors[k]) setFieldErrors(fe => ({ ...fe, [k]: undefined }))
    }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errors = validate(form)
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }

    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  const inputClass = `
    w-full font-body text-base text-ink bg-surface-warm border rounded-btn
    px-4 py-3 outline-none transition-all duration-150
    placeholder:text-ink-faint/50
    focus:bg-surface focus:ring-2 focus:ring-yellow/20
  `
  const inputOk = `border-surface-border focus:border-ink/30`
  const inputErr = `border-red-400 focus:border-red-400 focus:ring-red-100/30`

  if (status === 'success') {
    return (
      <div className="flex flex-col items-start justify-center py-12">
        <div className="w-12 h-12 rounded-full bg-yellow flex items-center justify-center mb-6">
          <svg className="w-5 h-5 text-ink" fill="none" viewBox="0 0 20 20">
            <path d="M4 10l4.5 4.5L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h3 className="font-display font-bold text-2xl text-ink mb-3">We got it.</h3>
        <p className="font-body text-ink-muted leading-relaxed max-w-sm">
          We'll come back to you within 24 hours with a direct answer — not a brochure.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={submit} noValidate className="flex flex-col gap-5">

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="font-mono text-[10px] tracking-widest uppercase text-ink-faint block mb-1.5">
            Name
          </label>
          <input
            type="text"
            placeholder="Your name"
            className={`${inputClass} ${fieldErrors.name ? inputErr : inputOk}`}
            value={form.name}
            onChange={set('name')}
          />
          {fieldErrors.name && (
            <p className="font-mono text-[10px] text-red-500 mt-1.5">{fieldErrors.name}</p>
          )}
        </div>
        <div>
          <label className="font-mono text-[10px] tracking-widest uppercase text-ink-faint block mb-1.5">
            Company
          </label>
          <input
            type="text"
            placeholder="Company name"
            className={`${inputClass} ${inputOk}`}
            value={form.company}
            onChange={set('company')}
          />
        </div>
      </div>

      <div>
        <label className="font-mono text-[10px] tracking-widest uppercase text-ink-faint block mb-1.5">
          Email
        </label>
        <input
          type="email"
          placeholder="you@company.com"
          className={`${inputClass} ${fieldErrors.email ? inputErr : inputOk}`}
          value={form.email}
          onChange={set('email')}
        />
        {fieldErrors.email && (
          <p className="font-mono text-[10px] text-red-500 mt-1.5">{fieldErrors.email}</p>
        )}
      </div>

      <div>
        <label className="font-mono text-[10px] tracking-widest uppercase text-ink-faint block mb-1.5">
          What do you want to automate?
        </label>
        <textarea
          rows={5}
          placeholder="Describe the process that's costing you the most time or money right now. Be specific — it helps us give you a useful answer."
          className={`${inputClass} ${fieldErrors.problem ? inputErr : inputOk} resize-none`}
          value={form.problem}
          onChange={set('problem')}
        />
        {fieldErrors.problem && (
          <p className="font-mono text-[10px] text-red-500 mt-1.5">{fieldErrors.problem}</p>
        )}
      </div>

      <div>
        <label className="font-mono text-[10px] tracking-widest uppercase text-ink-faint block mb-1.5">
          Budget range
        </label>
        <select
          className={`${inputClass} ${inputOk}`}
          value={form.budget}
          onChange={set('budget')}
        >
          <option value="" disabled>Select a range</option>
          {BUDGETS.map(b => (
            <option key={b} value={b}>{b}</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <span className="w-4 h-4 border-2 border-ink/30 border-t-ink rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          'Send →'
        )}
      </button>

      {status === 'error' && (
        <p className="font-mono text-xs text-red-500 tracking-wide">
          Something went wrong. Email us directly at admin@buteforce.com
        </p>
      )}
    </form>
  )
}
