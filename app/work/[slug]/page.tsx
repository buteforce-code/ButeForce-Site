import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { CASE_STUDIES } from '@/lib/data'
import { CTASection } from '@/components/sections'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return CASE_STUDIES.map(c => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const study = CASE_STUDIES.find(c => c.slug === slug)
  if (!study) return {}
  return {
    title: study.title,
    description: study.description,
    alternates: { canonical: `https://buteforce.com/work/${slug}` },
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const study = CASE_STUDIES.find(c => c.slug === slug)
  if (!study) notFound()

  // Adjacent studies
  const idx = CASE_STUDIES.indexOf(study)
  const next = CASE_STUDIES[(idx + 1) % CASE_STUDIES.length]
  const prev = CASE_STUDIES[(idx - 1 + CASE_STUDIES.length) % CASE_STUDIES.length]

  const caseStudySchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: study.title,
    description: study.description,
    author: { '@type': 'Organization', name: 'Buteforce' },
    publisher: { '@type': 'Organization', name: 'Buteforce', url: 'https://buteforce.com' },
    url: `https://buteforce.com/work/${slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />
      <Nav />

      <main className="pt-32 pb-0 bg-surface">

        {/* Hero */}
        <section className="pb-16 border-b border-surface-border">
          <div className="max-w-site mx-auto px-6 lg:px-10">

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-10">
              <Link href="/work" className="font-mono text-xs tracking-widest uppercase text-ink-faint hover:text-ink transition-colors">
                Work
              </Link>
              <span className="text-surface-border">/</span>
              <span className="font-mono text-xs tracking-widest uppercase text-ink-faint">
                {study.category}
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="flex items-center gap-3 mb-6">
                  <span className="font-mono text-xs tracking-widest uppercase text-ink-faint">
                    / {study.year}
                  </span>
                  <span className="font-mono text-[10px] tracking-wide uppercase px-2.5 py-1 bg-surface-warm rounded-full text-ink-faint border border-surface-border">
                    {study.category}
                  </span>
                  {study.liveUrl && (
                    <a
                      href={study.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[10px] tracking-wide uppercase px-2.5 py-1 bg-yellow-subtle rounded-full text-yellow-dim border border-yellow/30 hover:bg-yellow transition-colors hover:text-ink"
                    >
                      Try live →
                    </a>
                  )}
                </div>

                <h1 className="text-display-md font-display font-extrabold text-ink mb-6 heading-relaxed max-w-[18ch]">
                  {study.title}
                </h1>

                <p className="font-body text-lg text-ink-muted leading-relaxed max-w-2xl">
                  {study.description}
                </p>
              </div>

              {/* Stats */}
              <div className="flex flex-row lg:flex-col gap-6 lg:gap-8 lg:border-l lg:border-surface-border lg:pl-10">
                {study.stats.map((stat, i) => (
                  <div key={i}>
                    <div className="font-display font-extrabold text-3xl lg:text-4xl text-ink tracking-tight leading-none mb-1">
                      {stat.value}
                    </div>
                    <div className="font-mono text-[10px] tracking-wide uppercase text-ink-faint">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 border-b border-surface-border">
          <div className="max-w-site mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              <div className="lg:col-span-2 flex flex-col gap-12">

                {/* The challenge */}
                <div>
                  <p className="section-label mb-4">The challenge</p>
                  <p className="font-body text-ink-muted leading-relaxed text-lg">
                    {study.description}
                  </p>
                </div>

                {/* What we built */}
                <div>
                  <p className="section-label mb-4">What we built</p>
                  <p className="font-body text-ink-muted leading-relaxed">
                    A production system designed specifically for this problem — not a template,
                    not a configuration of existing tools. Every architectural decision was made
                    to maximise accuracy, minimise latency, and integrate cleanly with existing
                    workflows.
                  </p>
                </div>

              </div>

              {/* Sidebar — stack */}
              <div>
                <p className="section-label mb-5">Technology stack</p>
                <div className="flex flex-col gap-2">
                  {study.stack.map((tech, i) => (
                    <div
                      key={tech}
                      className="flex items-center gap-3 py-3 border-b border-surface-border last:border-0"
                    >
                      <span className="font-mono text-[10px] tracking-widest text-ink-faint w-5">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-body text-sm text-ink">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Next / Prev */}
        <section className="py-12 bg-surface-warm">
          <div className="max-w-site mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href={`/work/${prev.slug}`}
                className="group flex flex-col gap-2 p-6 bg-surface border border-surface-border rounded-card hover:border-ink/20 hover:shadow-sm transition-all"
              >
                <span className="font-mono text-[10px] tracking-widest uppercase text-ink-faint">
                  ← Previous
                </span>
                <span className="font-display font-bold text-base text-ink heading-card group-hover:text-ink-soft transition-colors">
                  {prev.title}
                </span>
              </Link>
              <Link
                href={`/work/${next.slug}`}
                className="group flex flex-col gap-2 p-6 bg-surface border border-surface-border rounded-card hover:border-ink/20 hover:shadow-sm transition-all text-right"
              >
                <span className="font-mono text-[10px] tracking-widest uppercase text-ink-faint">
                  Next →
                </span>
                <span className="font-display font-bold text-base text-ink heading-card group-hover:text-ink-soft transition-colors">
                  {next.title}
                </span>
              </Link>
            </div>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  )
}
