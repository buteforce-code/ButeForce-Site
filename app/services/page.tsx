import type { Metadata } from 'next'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { CTASection } from '@/components/sections'
import { SERVICES, CASE_STUDIES } from '@/lib/data'
import Link from 'next/link'
import Image from 'next/image'
import { FadeContent, StaggerContainer } from '@/components/animations'

export const metadata: Metadata = {
  title: 'Services — AI Automation, Computer Vision & AI Agents',
  description:
    'We build AI automation workflows, computer vision systems, intelligent agents, and document AI pipelines. Custom-built for your specific problem.',
  alternates: { canonical: 'https://buteforce.com/services' },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Buteforce Services',
  itemListElement: SERVICES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    description: s.description,
    url: `https://buteforce.com/services#${s.slug}`,
  })),
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Nav />

      <main className="pt-32 bg-surface">

        {/* Header */}
        <section className="pb-16 md:pb-24 pt-4 border-b border-surface-border">
          <div className="max-w-site mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              
              {/* Left Side: Text */}
              <div>
                <FadeContent delay={0.1}>
                  <p className="section-label mb-4">Services</p>
                  <h1 className="text-display-lg font-display font-bold text-ink mb-6 max-w-2xl heading-relaxed">
                    Four things we do.
                    <br />
                    <span className="text-ink-faint">All of them production-ready.</span>
                  </h1>
                </FadeContent>
                <FadeContent delay={0.2} yOffset={20}>
                  <p className="font-body text-lg text-ink-muted max-w-xl leading-relaxed">
                    We don't do strategy sessions, roadmaps, or workshops.
                    We build systems — and we ship them.
                  </p>
                </FadeContent>
              </div>

              {/* Right Side: Image Container */}
              <FadeContent delay={0.3} yOffset={20} className="w-full">
                <div className="relative w-full aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/services-hero.jpg"
                    alt="AI Particle Structure"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </FadeContent>

            </div>
          </div>
        </section>

        {/* Each service — full section */}
        {SERVICES.map((service, i) => {
          const relatedWork = CASE_STUDIES.filter(c =>
            c.category.toLowerCase().includes(service.id) ||
            (service.id === 'ocr' && c.category === 'Document AI') ||
            (service.id === 'agents' && c.category === 'AI Agents') ||
            (service.id === 'automation' && c.category === 'AI Automation') ||
            (service.id === 'vision' && c.category === 'Computer Vision')
          ).slice(0, 2)

          return (
            <section
              key={service.id}
              id={service.slug}
              className={`py-20 md:py-28 border-b border-surface-border ${
                i % 2 === 1 ? 'bg-surface-warm' : 'bg-surface'
              }`}
            >
              <div className="max-w-site mx-auto px-6 lg:px-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                  {/* Left */}
                  <FadeContent delay={0.1}>
                    <div>
                      <p className="font-mono text-xs tracking-widest uppercase text-yellow-dim mb-4">
                        {service.label}
                      </p>
                      <h2 className="text-display-md font-display font-bold text-ink leading-tight mb-6">
                        {service.title}
                      </h2>
                      <p className="font-body text-ink-muted leading-relaxed mb-8 text-lg">
                        {service.description}
                      </p>

                      {/* Proof metric */}
                      <div className="flex items-center gap-3 mb-8 p-4 bg-yellow-subtle border border-yellow/30 rounded-btn">
                        <div className="w-1.5 h-8 bg-yellow rounded-full flex-shrink-0" />
                        <div>
                          <p className="font-mono text-[10px] tracking-widest uppercase text-yellow-dim mb-0.5">
                            Proven result
                          </p>
                          <p className="font-display font-bold text-ink text-sm">
                            {service.metric}
                          </p>
                        </div>
                      </div>

                      {/* Stack tags */}
                      <div className="flex flex-wrap gap-2">
                        {service.stack.map(tag => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] tracking-wide uppercase px-3 py-1.5 bg-surface-off rounded-full text-ink-faint border border-surface-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </FadeContent>

                  {/* Right — related work */}
                  <FadeContent delay={0.2} yOffset={20}>
                    <div className="flex flex-col gap-4 justify-center">
                      <p className="section-label mb-2">Related work</p>
                      {relatedWork.length > 0 ? (
                        <StaggerContainer className="flex flex-col gap-4" staggerDelay={0.1}>
                          {relatedWork.map(work => (
                              <Link
                                key={work.id}
                                href={`/work/${work.slug}`}
                                className="group flex flex-col w-full h-full gap-4 p-6 bg-surface border border-surface-border rounded-card hover:border-ink/20 hover:shadow-sm transition-all"
                              >
                                <div className="flex items-start justify-between gap-4">
                                  <h4 className="font-display font-bold text-base text-ink leading-snug group-hover:text-ink-soft transition-colors">
                                    {work.title}
                                  </h4>
                                  <span className="font-mono text-ink-faint opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex-shrink-0">
                                    →
                                  </span>
                                </div>
                                <div className="flex gap-4">
                                  {work.stats.slice(0, 2).map((stat, si) => (
                                    <div key={si}>
                                      <span className="font-display font-bold text-lg text-ink">{stat.value}</span>
                                      <span className="font-mono text-[9px] tracking-wide uppercase text-ink-faint ml-1.5">{stat.label}</span>
                                    </div>
                                  ))}
                                </div>
                              </Link>
                          ))}
                        </StaggerContainer>
                      ) : (
                        <div className="p-6 bg-surface border border-surface-border rounded-card">
                          <p className="font-body text-ink-muted text-sm">
                            Project details available on request.
                          </p>
                        </div>
                      )}
                    </div>
                  </FadeContent>

                </div>
              </div>
            </section>
          )
        })}

        {/* How we work — short */}
        <section className="py-20 bg-surface border-b border-surface-border">
          <div className="max-w-site mx-auto px-6 lg:px-10">
            <FadeContent delay={0.1} yOffset={20}>
              <div className="max-w-2xl mx-auto text-center">
                <p className="section-label mb-4">How it works</p>
                <h2 className="text-display-md font-display font-bold text-ink mb-6">
                  No retainers. No hourly rates.
                </h2>
                <p className="font-body text-ink-muted leading-relaxed mb-10">
                  We work on a project basis. Scope is agreed upfront. Price is fixed.
                  Timeline is committed. You get a working system — not a dependency on our ongoing time.
                </p>
                <Link href="/contact" className="btn-primary">
                  Start a project →
                </Link>
              </div>
            </FadeContent>
          </div>
        </section>

        <CTASection />
      </main>

      <Footer />
    </>
  )
}

