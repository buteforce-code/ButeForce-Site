'use client'

import Link from 'next/link'
import { BlurText, FadeContent } from '@/components/animations'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 pt-32 overflow-hidden bg-surface">

      {/* Single soft yellow glow accent — top right (yellow used sparingly per brand) */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-60"
        style={{
          background: 'radial-gradient(ellipse at 80% 20%, rgba(255,252,1,0.18) 0%, transparent 60%)',
        }}
        aria-hidden
      />

      <div className="relative max-w-site mx-auto px-6 lg:px-10 w-full z-10">

        {/* Section label */}
        <FadeContent delay={0}>
          <p className="font-mono text-sm tracking-widest uppercase text-ink-faint mb-6">/ Buteforce</p>
        </FadeContent>

        {/* The headline */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-[4.5rem] font-display font-bold text-ink leading-[1.1] tracking-tight mb-6 max-w-5xl">
          <BlurText text="The work your team keeps doing by hand" delay={40} duration={600} className="inline" />
          <br className="hidden lg:block" />
          <BlurText text="is the work we keep hearing about" delay={40} duration={600} className="inline" />
          <span className="text-yellow">.</span>
        </h1>

        {/* Keyword subheading — carries the primary SEO terms the H1 intentionally omits */}
        <FadeContent delay={0.3}>
          <h2 className="font-display font-semibold text-xl md:text-2xl text-ink-muted leading-snug mb-6 max-w-3xl">
            Industrial AI for India&apos;s manufacturing corridor — computer vision quality control,
            retail analytics, and AI automation, built in Chennai.
          </h2>
        </FadeContent>

        {/* Sub */}
        <FadeContent delay={0.4} yOffset={20}>
          <div className="flex flex-col gap-5 mb-12">
            <p className="font-body text-lg md:text-xl text-ink-muted max-w-2xl leading-relaxed">
              We build the AI systems that take it off their plate —
              custom, production-ready, and faster than you&apos;d expect.
            </p>
            <p className="font-mono text-[11px] md:text-xs tracking-wide uppercase text-ink-faint">
              No consultants. No pilot projects. Working systems.
            </p>
          </div>
        </FadeContent>

        {/* CTAs */}
        <FadeContent delay={0.6} yOffset={20}>
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Link href="/work" className="btn-primary px-8 transition-transform duration-200 hover:scale-105 active:scale-95">
              See what we&apos;ve built →
            </Link>
            <Link href="/contact" className="px-6 py-3 rounded-md font-medium transition-colors text-ink-muted hover:text-ink flex items-center gap-2">
              Tell us your problem
            </Link>
          </div>
        </FadeContent>

        {/* Proof strip */}
        <FadeContent delay={0.8} yOffset={30}>
          <div className="p-6 md:p-8 rounded-2xl bg-white border border-surface-border relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)]">
            <div className="flex flex-col md:flex-row flex-wrap justify-between gap-8 relative z-10 w-full">
              {[
                { v: '10+',  l: 'Production systems shipped' },
                { v: '99.2%', l: 'Vision accuracy' },
                { v: '<1s',  l: 'Document processing' },
                { v: '80%',  l: 'Average time saved' },
              ].map(({ v, l }) => (
                <div key={l} className="flex flex-col flex-1 min-w-[200px]">
                  <div className="font-display font-bold text-4xl md:text-5xl tracking-tight text-ink mb-2">
                    {v}
                  </div>
                  <div className="font-mono text-[11px] tracking-wider uppercase text-ink-faint">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  )
}
