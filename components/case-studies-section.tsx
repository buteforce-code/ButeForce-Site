'use client'

import Link from 'next/link'
import { CASE_STUDIES } from '@/lib/data'
import { FadeContent, StaggerContainer } from '@/components/animations'

export default function CaseStudiesSection() {
  const featured = CASE_STUDIES.filter(c => c.featured)

  return (
    <section className="py-24 md:py-32 bg-surface-warm">
      <div className="max-w-site mx-auto px-6 lg:px-10">

        <FadeContent delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <p className="section-label mb-4">Case Studies</p>
              <h2 className="text-display-lg font-display font-bold text-ink">
                What we've built
              </h2>
            </div>
            <Link href="/work" className="btn-ghost whitespace-nowrap">
              All 10 projects →
            </Link>
          </div>
        </FadeContent>

        <StaggerContainer className="flex flex-col gap-4" staggerDelay={0.15}>
          {featured.map((study, i) => (
            <Link
              key={study.id}
              href={`/work/${study.slug}`}
              className="block w-full h-full group bg-surface border border-surface-border rounded-card overflow-hidden hover:border-ink/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">

                  {/* Left — content */}
                  <div className="flex-1">
                    {/* Top row */}
                    <div className="flex items-center gap-4 mb-5">
                      <span className="font-mono text-xs tracking-widest uppercase text-ink-faint">
                        / {study.year}
                      </span>
                      <span className="font-mono text-[10px] tracking-wide uppercase px-2.5 py-1 bg-surface-warm rounded-full text-ink-faint border border-surface-border">
                        {study.category}
                      </span>
                      {study.liveUrl && (
                        <span className="font-mono text-[10px] tracking-wide uppercase px-2.5 py-1 bg-yellow-subtle rounded-full text-yellow-dim border border-yellow/30">
                          Live demo
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-display font-bold text-xl md:text-2xl text-ink heading-card mb-4 max-w-xl group-hover:text-ink transition-colors">
                      {study.title}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-ink-muted leading-relaxed max-w-lg">
                      {study.description}
                    </p>

                    {/* Stack tags */}
                    <div className="flex flex-wrap gap-2 mt-5">
                      {study.stack.map(tag => (
                        <span key={tag} className="font-mono text-[10px] tracking-wide uppercase px-2.5 py-1 bg-surface-warm rounded-full text-ink-faint border border-surface-border">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right — stats */}
                  <div className="flex md:flex-col gap-6 md:gap-4 md:min-w-[180px] md:border-l md:border-surface-border md:pl-8">
                    {study.stats.map((stat, si) => (
                      <div key={si}>
                        <div className="font-display font-bold text-2xl md:text-3xl text-ink tracking-tight leading-none">
                          {stat.value}
                        </div>
                        <div className="font-mono text-[10px] tracking-wide uppercase text-ink-faint mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}

                    {/* Live demo CTA */}
                    {study.liveUrl && (
                      <div
                        className="mt-2"
                        onClick={(e) => {
                          e.preventDefault()
                          window.open(study.liveUrl, '_blank')
                        }}
                      >
                        <span className="font-mono text-xs tracking-wide text-yellow-dim underline underline-offset-4 hover:text-ink transition-colors">
                          Try it live →
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom progress bar — yellow, animates on hover */}
              <div className="h-[2px] bg-surface-border overflow-hidden">
                <div className="h-full bg-yellow w-0 group-hover:w-full transition-all duration-500 ease-out" />
              </div>
            </Link>
          ))}
        </StaggerContainer>

      </div>
    </section>
  )
}

