'use client'

import { useState } from 'react'
import { COMPARISON_ROWS, TECH_STACK, FAQ, TESTIMONIALS } from '@/lib/data'
import Link from 'next/link'
import BrandLogo from '@/components/brand-logo'
import { FadeContent, StaggerContainer } from '@/components/animations'

// ── COMPARISON TABLE ──────────────────────────────────────
export function ComparisonSection() {
  return (
    <section className="py-24 md:py-32 bg-surface-warm">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <FadeContent delay={0.1}>
          <div className="mb-16">
            <p className="section-label mb-4">The Difference</p>
            <h2 className="text-display-lg font-display font-bold text-ink">
              Why it matters who builds it
            </h2>
          </div>
        </FadeContent>

        <FadeContent delay={0.2} yOffset={20}>
          <div className="overflow-x-auto">
          <table className="w-full min-w-[560px]">
            <thead>
              <tr>
                <th className="pb-4 pr-4 text-left w-1/2">
                  <div className="flex items-center gap-2">
                    <BrandLogo className="h-5 md:h-6" />
                    <div className="w-2 h-2 rounded-full bg-yellow" />
                  </div>
                </th>
                <th className="pb-4 pl-4 text-left w-1/2">
                  <span className="font-mono text-xs tracking-widest uppercase text-ink-faint">
                    Other agencies
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row, i) => (
                <tr key={i} className="border-t border-surface-border group">
                  <td className="py-4 pr-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-yellow/20 border border-yellow/40 flex items-center justify-center flex-shrink-0">
                        <svg className="w-2.5 h-2.5 text-yellow-dim" fill="none" viewBox="0 0 10 10">
                          <path d="M2 5l2.5 2.5L8 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <span className="font-body text-sm text-ink leading-snug">{row.us}</span>
                    </div>
                  </td>
                  <td className="py-4 pl-4 border-l border-surface-border">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 w-4 h-4 rounded-full bg-ink/5 border border-ink/10 flex items-center justify-center flex-shrink-0">
                        <svg className="w-2.5 h-2.5 text-ink-faint" fill="none" viewBox="0 0 10 10">
                          <path d="M2.5 7.5l5-5M7.5 7.5l-5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <span className="font-body text-sm text-ink-faint leading-snug">{row.them}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </FadeContent>
      </div>
    </section>
  )
}

// ── TECH STACK ────────────────────────────────────────────
export function TechStackSection() {
  return (
    <section className="py-20 bg-surface border-y border-surface-border">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <FadeContent delay={0.1}>
          <p className="section-label mb-10">Technologies</p>
        </FadeContent>

        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4" staggerDelay={0.05}>
          {TECH_STACK.map(tech => (
              <FadeContent
                key={tech.num}
                className="flex flex-col items-center gap-2 p-4 rounded-card border border-surface-border hover:border-ink/15 hover:bg-surface-warm transition-all duration-200 group"
              >
              <span className="font-mono text-[10px] tracking-widest uppercase text-ink-faint group-hover:text-ink-muted transition-colors">
                {tech.num}
              </span>
              <span className="font-body text-sm text-ink-soft font-medium text-center">
                {tech.name}
              </span>
            </FadeContent>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

// ── TESTIMONIALS ──────────────────────────────────────────
export function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-surface-warm">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <FadeContent delay={0.1}>
          <p className="section-label mb-16">What clients say</p>
        </FadeContent>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6" staggerDelay={0.1}>
          {TESTIMONIALS.map((t, i) => (
            <FadeContent
              key={i}
              className="bg-surface border border-surface-border rounded-card p-8 flex flex-col gap-6 hover:shadow-sm hover:border-ink/10 transition-all duration-200"
            >
              {/* Quote mark */}
              <div className="font-display text-4xl text-yellow leading-none select-none">"</div>

              {/* Quote */}
              <p className="font-body text-ink-soft leading-relaxed flex-1">
                {t.quote}
              </p>

              {/* Attribution */}
              <div className="flex items-center gap-3 pt-4 border-t border-surface-border">
                <div className="w-9 h-9 rounded-full bg-ink flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-xs text-white">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-body text-sm font-medium text-ink">{t.name}</p>
                  <p className="font-mono text-[10px] tracking-wide uppercase text-ink-faint">{t.company}</p>
                </div>
              </div>
            </FadeContent>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

// ── FAQ ───────────────────────────────────────────────────
export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <div className="max-w-prose-wide mx-auto">
          <FadeContent delay={0.1}>
            <p className="section-label mb-4">FAQ</p>
            <h2 className="text-display-lg font-display font-bold text-ink mb-12">
              Questions we get
            </h2>
          </FadeContent>

          <StaggerContainer className="flex flex-col" staggerDelay={0.05}>
            {FAQ.map((item, i) => (
              <FadeContent key={i} className="border-t border-surface-border last:border-b">
                <button
                  className="w-full text-left py-5 flex items-start justify-between gap-6 group"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className={`font-body font-medium leading-snug transition-colors ${open === i ? 'text-ink' : 'text-ink-soft group-hover:text-ink'}`}>
                    {item.q}
                  </span>
                  <span className={`font-mono text-ink-faint flex-shrink-0 transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>

                <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-60 pb-5' : 'max-h-0'}`}>
                  <p className="font-body text-ink-muted leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </FadeContent>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}

// ── DARK CTA SECTION ──────────────────────────────────────
export function CTASection() {
  return (
    <section className="bg-black py-24 md:py-36 border-t border-surface-border">
      <div className="max-w-site mx-auto px-6 lg:px-10 text-center">

        <FadeContent delay={0.1}>
          <p className="font-mono text-xs tracking-widest uppercase text-white/30 mb-8">
            Ready to start?
          </p>
        </FadeContent>

        <FadeContent delay={0.2}>
          <h2 className="text-display-lg font-display font-bold text-white mb-6 leading-tight">
            Done doing it manually?
          </h2>
        </FadeContent>

        <FadeContent delay={0.3}>
          <p className="font-body text-lg text-white/50 max-w-lg mx-auto leading-relaxed mb-12">
            Tell us the one process that costs your team the most time.
            We'll tell you exactly how we'd automate it.
          </p>
        </FadeContent>

        <FadeContent delay={0.4} yOffset={20}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-primary">
            Start a project →
          </Link>
          <a
            href="mailto:admin@buteforce.com"
            className="font-mono text-xs tracking-widest uppercase text-white/40 hover:text-white transition-colors"
          >
            admin@buteforce.com
          </a>
          </div>
        </FadeContent>
      </div>
    </section>
  )
}

