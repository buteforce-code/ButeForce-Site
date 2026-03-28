'use client'

import { useState, useRef } from 'react'
import { BlurText, FadeContent, StaggerContainer, MagneticButton, TiltCard, ScrollProgressBar } from '@/components/animations'

const CALENDLY_URL = 'https://calendly.com/buteforce/30min'

// ─────────────────────────────────────────────────────────────
// HERO
// ─────────────────────────────────────────────────────────────
export function LpHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-24 bg-surface overflow-hidden">
      <ScrollProgressBar />

      {/* Subtle yellow radial glow */}
      <div
        className="absolute top-0 right-0 w-[700px] h-[700px] pointer-events-none opacity-20"
        style={{ background: 'radial-gradient(ellipse at 80% 10%, rgba(255,252,1,0.4) 0%, transparent 60%)' }}
        aria-hidden
      />

      {/* Fine grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgb(var(--color-ink) / 0.03) 1px, transparent 1px), linear-gradient(to right, rgb(var(--color-ink) / 0.03) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}
        aria-hidden
      />

      <div className="relative max-w-site mx-auto px-6 lg:px-10 w-full z-10">

        <FadeContent delay={0} duration={0.4}>
          <p className="section-label mb-8">/ For founders scaling past chaos</p>
        </FadeContent>

        <BlurText
          text="You know your company should be using AI by now."
          as="h1"
          className="text-display-lg lg:text-display-xl font-display font-bold text-ink heading-relaxed mb-8 max-w-[18ch]"
          delay={60}
          duration={700}
        />

        <FadeContent delay={0.5} yOffset={16}>
          <p className="font-display text-display-sm font-semibold text-ink-faint mb-10 max-w-[32ch] leading-snug tracking-tight">
            You're just not sure where to start — or who to trust with it.
          </p>
        </FadeContent>

        <FadeContent delay={0.7} yOffset={16}>
          <p className="font-body text-lg text-ink-muted max-w-lg mb-14 leading-relaxed">
            In <span className="text-ink font-medium">30 minutes</span>, we'll map exactly which parts of your
            business AI can automate right now. Specific tools. Real timelines. No slide decks.
          </p>
        </FadeContent>

        <FadeContent delay={0.9} yOffset={12}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="lp-hero-book-cta"
              className="btn-primary inline-flex items-center gap-2 transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              Book free 30-min session
              <span aria-hidden>→</span>
            </a>
            <a
              href="#audit-email"
              className="font-mono text-xs tracking-widest uppercase text-ink-faint hover:text-ink transition-colors duration-200 flex items-center gap-1.5"
            >
              Not ready to call? Get the guide ↓
            </a>
          </div>
        </FadeContent>

        <FadeContent delay={1.1} yOffset={8}>
          <div className="flex flex-wrap items-center gap-6 mt-10">
            {['No commitment', 'No sales pitch', "We'll say no if we're not the right fit"].map((t) => (
              <span key={t} className="flex items-center gap-2 font-mono text-[11px] tracking-wide uppercase text-ink-faint">
                <span className="w-1 h-1 rounded-full bg-yellow-dim flex-shrink-0" aria-hidden />
                {t}
              </span>
            ))}
          </div>
        </FadeContent>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// THE COST OF DOING NOTHING
// ─────────────────────────────────────────────────────────────
const COSTS = [
  {
    num: '01',
    headline: "Your competitors who've moved have a compounding advantage",
    body: "They're closing deals faster, operating with leaner teams, and reinvesting the savings. Every month without AI in your ops is a month of that gap widening.",
    stat: '6–12 months',
    statLabel: 'Average time lost before founders act',
  },
  {
    num: '02',
    headline: 'Every manual process compounds in cost as you scale',
    body: "What takes your team 4 hours today takes 8 hours when you double in size. Hiring to handle manual work doesn't scale — it just gets more expensive.",
    stat: '3–5 hrs/week',
    statLabel: 'Per employee lost to automatable tasks',
  },
  {
    num: '03',
    headline: 'The longer you wait, the harder implementation gets',
    body: "AI systems trained on your own data outperform generic ones. The earlier you start, the better your system gets — and the harder it becomes for late movers to catch up.",
    stat: '80%+',
    statLabel: 'Time saved once systems are running',
  },
]

export function LpCostSection() {
  return (
    <section className="py-28 md:py-36 bg-surface-warm border-t border-surface-border">
      <div className="max-w-site mx-auto px-6 lg:px-10">

        <FadeContent className="mb-16 md:mb-20">
          <p className="section-label mb-4">/ The cost of doing nothing</p>
          <BlurText
            text="We'll get to AI eventually is an expensive sentence."
            as="h2"
            className="text-display-md font-display font-bold text-ink heading-relaxed max-w-[22ch]"
            delay={70}
          />
        </FadeContent>

        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-surface-border rounded-2xl overflow-hidden" staggerDelay={0.12}>
          {COSTS.map((c) => (
            <TiltCard key={c.num} className="bg-surface-warm p-8 lg:p-10 flex flex-col gap-6 group hover:bg-surface transition-colors duration-300 w-full h-full" maxTilt={4}>
              <span className="font-mono text-[10px] tracking-widest uppercase text-ink-faint">{c.num}</span>
              <h3 className="font-display font-bold text-lg text-ink leading-snug">{c.headline}</h3>
              <p className="font-body text-sm text-ink-muted leading-relaxed flex-1">{c.body}</p>
              <div className="pt-6 border-t border-surface-border">
                <p className="font-display font-bold text-3xl text-ink mb-1">{c.stat}</p>
                <p className="font-mono text-[10px] tracking-widest uppercase text-ink-faint">{c.statLabel}</p>
              </div>
            </TiltCard>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// WHAT THE AUDIT GIVES YOU
// ─────────────────────────────────────────────────────────────
const AUDIT_ITEMS = [
  {
    label: '01',
    title: 'Exact processes to automate first',
    body: "Not 'explore AI possibilities' — specific workflows in your company that can be automated right now, ranked by impact and ease.",
  },
  {
    label: '02',
    title: 'The right tools for your stack',
    body: "Not just 'use ChatGPT.' We'll name the exact models, platforms, and integrations that fit your existing systems.",
  },
  {
    label: '03',
    title: 'Real time and cost estimates',
    body: "A specific range — not 'it depends.' We build fast and price fairly. You'll know exactly what to expect before any commitment.",
  },
  {
    label: '04',
    title: 'An honest fit assessment',
    body: "If we're not the right team for your project, we'll tell you directly. We'd rather lose a call than take a project we can't deliver well.",
  },
]

export function LpAuditGives() {
  return (
    <section className="py-28 md:py-36 bg-surface border-t border-surface-border">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <div className="lg:sticky lg:top-28">
            <FadeContent>
              <p className="section-label mb-5">/ What you get in 30 minutes</p>
              <BlurText
                text="A complete picture. No strings attached."
                as="h2"
                className="text-display-md font-display font-bold text-ink heading-relaxed mb-6 max-w-[18ch]"
                delay={70}
              />
              <p className="font-body text-ink-muted leading-relaxed max-w-md text-base">
                This isn't a discovery call where we try to understand your business so we can pitch to you.
                You walk away with something concrete — whether you work with us or not.
              </p>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="lp-audit-gives-cta"
                className="btn-primary inline-flex items-center gap-2 transition-transform duration-200 hover:scale-105 active:scale-95 mt-10"
              >
                Book your 30 minutes →
              </a>
            </FadeContent>
          </div>

          <StaggerContainer className="flex flex-col gap-0" staggerDelay={0.1}>
            {AUDIT_ITEMS.map((item, i) => (
              <div
                key={item.label}
                className={`py-8 flex gap-6 group ${i !== AUDIT_ITEMS.length - 1 ? 'border-b border-surface-border' : ''}`}
              >
                <span className="font-mono text-[10px] tracking-widest uppercase text-yellow-dim mt-0.5 flex-shrink-0 w-5">{item.label}</span>
                <div>
                  <h3 className="font-display font-bold text-ink mb-2 leading-snug group-hover:text-yellow-dim transition-colors duration-200">{item.title}</h3>
                  <p className="font-body text-sm text-ink-muted leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// PROOF STRIP
// ─────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote: "They shipped a working computer vision system in three weeks. Our quality control errors dropped by 94% in the first month. I didn't think it would be this fast.",
    name: 'Operations Director',
    company: 'Manufacturing Client',
    initials: 'OD',
  },
  {
    quote: 'The OCR pipeline handles documents I thought were impossible to automate — handwritten forms, photos of receipts, tables with merged cells. Sub-second. Every time.',
    name: 'Head of Finance Ops',
    company: 'Financial Services Client',
    initials: 'HF',
  },
  {
    quote: 'Our AI agent handles 70% of property inquiries now. The sales team only speaks to people who are ready to view. Lead quality went up, response time went to zero.',
    name: 'Director',
    company: 'Real Estate Agency',
    initials: 'D',
  },
]

export function LpProofStrip() {
  return (
    <section className="py-24 md:py-32 bg-surface-warm border-t border-surface-border">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <FadeContent className="mb-12">
          <p className="section-label">/ What clients said after their first month</p>
        </FadeContent>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.15}>
          {TESTIMONIALS.map((t, i) => (
            <TiltCard key={i} className="bg-surface border border-surface-border rounded-card p-8 flex flex-col gap-5 w-full h-full" maxTilt={5}>
              <span className="font-display text-3xl text-yellow-dim leading-none select-none">"</span>
              <p className="font-body text-sm text-ink-muted leading-relaxed flex-1 italic">{t.quote}</p>
              <div className="flex items-center gap-3 pt-5 border-t border-surface-border">
                <div className="w-8 h-8 rounded-full bg-ink flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-[10px] text-surface">{t.initials}</span>
                </div>
                <div>
                  <p className="font-body text-xs font-medium text-ink">{t.name}</p>
                  <p className="font-mono text-[9px] tracking-wide uppercase text-ink-faint">{t.company}</p>
                </div>
              </div>
            </TiltCard>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// TWO PATHS
// ─────────────────────────────────────────────────────────────
export function LpTwoPaths() {
  return (
    <section className="py-28 md:py-36 bg-surface border-t border-surface-border">
      <div className="max-w-site mx-auto px-6 lg:px-10">

        <FadeContent className="mb-16">
          <p className="section-label mb-4">/ Two ways in</p>
          <BlurText
            text="Pick the step that feels right."
            as="h2"
            className="text-display-md font-display font-bold text-ink heading-relaxed max-w-[20ch]"
            delay={70}
          />
        </FadeContent>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6" staggerDelay={0.15}>
          {/* Path A — Book the call */}
          <div className="bg-surface-warm border border-surface-border w-full h-full rounded-2xl p-10 lg:p-12 flex flex-col gap-6 relative overflow-hidden group hover:border-yellow-dim transition-all duration-300">
            <div
              className="absolute top-0 right-0 w-64 h-64 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 80% 10%, rgba(255,252,1,0.15) 0%, transparent 60%)' }}
              aria-hidden
            />
            <span className="font-mono text-[10px] tracking-widest uppercase text-yellow-dim">Option A</span>
            <h3 className="font-display font-bold text-xl text-ink">Book the 30-minute call</h3>
            <p className="font-body text-sm text-ink-muted leading-relaxed flex-1">
              We talk. You describe what your team does every day. We identify the highest-leverage
              automation opportunities and tell you exactly what we'd build — and whether it's worth it.
              You leave with a clear picture and zero obligation.
            </p>
            <ul className="flex flex-col gap-2.5">
              {['Specific automation recommendations', 'Real cost and timeline estimate', 'Honest fit assessment'].map((item) => (
                <li key={item} className="flex items-center gap-2.5 font-mono text-[11px] tracking-wide uppercase text-ink-muted">
                  <span className="w-1 h-1 rounded-full bg-yellow-dim flex-shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="lp-two-paths-book-cta"
              className="btn-primary mt-2 inline-flex items-center gap-2 w-fit transition-transform duration-200 hover:scale-105 active:scale-95"
            >
              Book the session →
            </a>
          </div>

          {/* Path B — Email first */}
          <div className="bg-surface-warm border border-surface-border w-full h-full rounded-2xl p-10 lg:p-12 flex flex-col gap-6">
            <span className="font-mono text-[10px] tracking-widest uppercase text-ink-faint">Option B</span>
            <h3 className="font-display font-bold text-xl text-ink">Get the AI Audit framework first</h3>
            <p className="font-body text-sm text-ink-muted leading-relaxed flex-1">
              Not ready to jump on a call? Drop your email. We'll send you the exact framework
              we use to audit a business — the same one we'd work through together on the call.
            </p>
            <ul className="flex flex-col gap-2.5">
              {['The audit framework as a PDF', 'A worked example for a startup', 'Follow-up Q&A by email if you want it'].map((item) => (
                <li key={item} className="flex items-center gap-2.5 font-mono text-[11px] tracking-wide uppercase text-ink-muted">
                  <span className="w-1 h-1 rounded-full bg-surface-border flex-shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <EmailForm />
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}

// ─────────────────────────────────────────────────────────────
// EMAIL FORM
// ─────────────────────────────────────────────────────────────
function EmailForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || status === 'loading') return
    setStatus('loading')
    try {
      const res = await fetch('/api/lp-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  if (status === 'success') {
    return (
      <div className="py-4 flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-yellow-dim flex-shrink-0" />
        <p className="font-mono text-xs tracking-wide uppercase text-ink-muted">Sent. Check your inbox within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 mt-2" id="audit-email">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@company.com"
        required
        aria-label="Your work email"
        className="flex-1 font-body text-sm px-4 py-3 rounded-btn outline-none transition-all duration-200 focus:ring-1 focus:ring-yellow-dim/40 placeholder:text-ink-faint bg-surface border border-surface-border text-ink focus:border-yellow-dim"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="font-mono text-[11px] tracking-widest uppercase px-5 py-3 rounded-btn flex-shrink-0 bg-yellow text-black hover:bg-yellow-dim active:scale-[0.98] transition-all duration-150 disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending…' : 'Send me the guide'}
      </button>
      {status === 'error' && (
        <p className="text-red-500 font-mono text-[10px] tracking-wide uppercase mt-1">
          Something went wrong. Email admin@buteforce.com directly.
        </p>
      )}
    </form>
  )
}

// ─────────────────────────────────────────────────────────────
// PRIMARY CTA BLOCK
// ─────────────────────────────────────────────────────────────
export function LpPrimaryCtaBlock() {
  return (
    <section
      id="book"
      className="py-32 md:py-40 relative overflow-hidden"
      style={{ backgroundColor: 'rgb(var(--color-surface-dark))' }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,252,1,0.08) 0%, transparent 55%)' }}
        aria-hidden
      />

      <div className="relative max-w-site mx-auto px-6 lg:px-10 text-center">

        <FadeContent>
          <p className="font-mono text-xs tracking-widest uppercase text-white/20 mb-8">/ The last step</p>
        </FadeContent>

        <BlurText
          text="30 minutes from now, you'll know exactly what to do."
          as="h2"
          className="text-display-lg font-display font-bold text-white heading-relaxed mb-6 max-w-[20ch] mx-auto"
          delay={65}
        />

        <FadeContent delay={0.5}>
          <p className="font-body text-lg text-white/45 max-w-md mx-auto leading-relaxed mb-14">
            Pick a time that works. Show up. Walk away with a clear, specific answer.
          </p>
        </FadeContent>

        <FadeContent delay={0.7}>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="lp-final-book-cta"
            className="inline-flex items-center gap-3 bg-yellow text-black font-display font-bold text-base tracking-wide uppercase px-10 py-5 rounded-btn transition-all duration-200 hover:bg-yellow-dim hover:scale-105 active:scale-95 shadow-[0_0_60px_rgba(255,252,1,0.2)] mb-10"
          >
            Book the free 30-min session
            <span aria-hidden>→</span>
          </a>
        </FadeContent>

        <FadeContent delay={0.85}>
          <div className="flex items-center gap-4 max-w-xs mx-auto mb-10">
            <div className="flex-1 h-px bg-white/10" />
            <span className="font-mono text-[10px] tracking-widest uppercase text-white/20">or</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <div className="max-w-md mx-auto text-left">
            <p className="font-mono text-[11px] tracking-widest uppercase text-white/30 mb-3">
              Not ready? Get the free audit framework
            </p>
            <EmailFormDark />
          </div>
        </FadeContent>

        <FadeContent delay={1} className="mt-16">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { stat: '10+', label: 'Production systems shipped' },
              { stat: '99.2%', label: 'Vision accuracy on live lines' },
              { stat: '80%', label: 'Average time saved — first month' },
            ].map(({ stat, label }) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <span className="font-display font-bold text-2xl text-white">{stat}</span>
                <span className="font-mono text-[10px] tracking-widest uppercase text-white/30 text-center">{label}</span>
              </div>
            ))}
          </div>
        </FadeContent>

      </div>
    </section>
  )
}

function EmailFormDark() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || status === 'loading') return
    setStatus('loading')
    try {
      const res = await fetch('/api/lp-audit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 3000)
    }
  }

  if (status === 'success') {
    return (
      <div className="py-4 flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-yellow flex-shrink-0" />
        <p className="font-mono text-xs tracking-wide uppercase text-white/40">Sent. Check your inbox within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@company.com"
        required
        aria-label="Your work email"
        className="flex-1 font-body text-sm px-4 py-3 rounded-btn outline-none bg-white/8 border border-white/10 text-white placeholder:text-white/20 focus:ring-1 focus:ring-yellow/30 focus:border-yellow/30 transition-all duration-200"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="font-mono text-[11px] tracking-widest uppercase px-5 py-3 rounded-btn flex-shrink-0 bg-yellow/10 text-yellow border border-yellow/20 hover:bg-yellow hover:text-black transition-all duration-150 active:scale-[0.98] disabled:opacity-50"
      >
        {status === 'loading' ? 'Sending…' : 'Send me the guide'}
      </button>
      {status === 'error' && (
        <p className="text-red-400 font-mono text-[10px] tracking-wide uppercase mt-1">Something went wrong.</p>
      )}
    </form>
  )
}
