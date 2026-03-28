'use client'

import { PAIN_LINES } from '@/lib/data'
import { StaggerContainer, FadeContent } from '@/components/animations'

export default function PainSection() {

  return (
    <section className="py-24 md:py-36 bg-surface-warm">
      <div className="max-w-site mx-auto px-6 lg:px-10">

        {/* Section label */}
        <FadeContent delay={0.1}>
          <p className="section-label mb-16">The Problem</p>
        </FadeContent>

        {/* Pain lines */}
        <StaggerContainer className="flex flex-col gap-6 md:gap-8" staggerDelay={0.15}>
          {PAIN_LINES.map((line, i) => (
            <FadeContent key={i} yOffset={20}>
              <span className="block font-display font-bold text-2xl md:text-4xl lg:text-5xl leading-tight text-ink cursor-default select-none">
                {line}
              </span>
            </FadeContent>
          ))}
        </StaggerContainer>

        {/* The pivot */}
        <FadeContent delay={0.4} yOffset={20}>
          <div className="mt-16 flex flex-col md:flex-row md:items-end gap-6">
            <div className="flex-1">
            <p className="font-body text-lg text-ink-muted max-w-lg leading-relaxed">
              These aren't new problems. They're just unsolved ones.
              We build the systems that solve them — permanently.
            </p>
          </div>
          <div className="h-px flex-1 bg-surface-border hidden md:block" />
          <p className="font-mono text-xs tracking-widest uppercase text-ink-faint">
            Not advice. Systems.
          </p>
        </div>
        </FadeContent>
      </div>
    </section>
  )
}
