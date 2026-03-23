import type { Metadata } from 'next'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { CTASection } from '@/components/sections'
import Link from 'next/link'
import { SITE } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About Buteforce',
  description:
    'We are Buteforce — an AI automation and computer vision company that builds production systems for businesses that are done doing things manually.',
  alternates: { canonical: 'https://buteforce.com/about' },
}

export default function AboutPage() {
  return (
    <>
      <Nav />

      <main className="pt-32 pb-0 bg-surface">

        {/* Hero */}
        <section className="pb-20 border-b border-surface-border">
          <div className="max-w-site mx-auto px-6 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

              <div>
                <p className="section-label mb-6">About</p>
                <h1 className="text-display-lg font-display font-bold text-ink mb-8 heading-relaxed max-w-[12ch]">
                  We build the thing.
                  <br />
                  <span className="text-ink-faint">Then we ship it.</span>
                </h1>

                <div className="flex flex-col gap-5 font-body text-ink-muted leading-relaxed text-lg max-w-lg">
                  <p>
                    Buteforce is an AI automation and computer vision company.
                    We build production-grade systems for businesses that have
                    real operational problems — not ones looking for a pilot project
                    or a proof of concept.
                  </p>
                  <p>
                    We started because we kept seeing the same gap: businesses knew AI
                    could help them, but the people who understood AI weren't building
                    for business operations. We are. That's the whole reason this exists.
                  </p>
                  <p>
                    Everything we build, we own the quality of. If it doesn't work in
                    production, it doesn't leave our hands.
                  </p>
                </div>
              </div>

              {/* Right — values as a list */}
              <div className="flex flex-col justify-center">
                <p className="section-label mb-6">What we believe</p>
                <div className="flex flex-col gap-0">
                  {[
                    ['Specificity beats scale', 'A system built for your exact problem outperforms a platform built for everyone.'],
                    ['Production over demos', 'A working system in production is the only real proof. Everything else is a slide.'],
                    ['You own it', 'Your code, your models, your infrastructure. We never lock clients into a dependency.'],
                    ['Numbers over adjectives', '99.2% is a claim. "High accuracy" is not.'],
                    ['Fast is not the same as rushed', 'We move quickly because we know what we\'re doing, not because we cut corners.'],
                  ].map(([title, desc]) => (
                    <div key={title} className="py-5 border-b border-surface-border last:border-0">
                      <div className="font-display font-bold text-base text-ink mb-1.5">{title}</div>
                      <div className="font-body text-sm text-ink-muted leading-relaxed">{desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What we've built */}
        <section className="py-20 bg-surface-warm border-b border-surface-border">
          <div className="max-w-site mx-auto px-6 lg:px-10">
            <p className="section-label mb-12">By the numbers</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { v: '10+',  l: 'Production systems shipped' },
                { v: '4',    l: 'Service areas' },
                { v: '99.2%', l: 'Highest accuracy achieved' },
                { v: '< 1s', l: 'Fastest processing time' },
              ].map(({ v, l }) => (
                <div key={l} className="text-center md:text-left">
                  <div className="font-display font-bold text-4xl md:text-5xl text-ink tracking-tight mb-2">
                    {v}
                  </div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-ink-faint">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies we actually use */}
        <section className="py-20 bg-surface border-b border-surface-border">
          <div className="max-w-site mx-auto px-6 lg:px-10">
            <div className="max-w-2xl">
              <p className="section-label mb-4">Technical depth</p>
              <h2 className="text-display-sm font-display font-bold text-ink mb-6">
                We name the tools we use because we know them.
              </h2>
              <p className="font-body text-ink-muted leading-relaxed mb-8">
                Most agencies say they "use AI." We train YOLOv8 models on your production data.
                We fine-tune Mistral 7B for document extraction. We orchestrate multi-agent
                systems with Google ADK. We know the difference between a cached API call and
                a real production pipeline.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  'Claude API', 'YOLOv8', 'PyTorch', 'n8n', 'Google ADK',
                  'Mistral 7B', 'PaddleOCR', 'OpenCV', 'Next.js', 'Supabase',
                  'Trigger.dev', 'PostgreSQL', 'Python', 'Vercel',
                ].map(tech => (
                  <span
                    key={tech}
                    className="font-mono text-[10px] tracking-wide uppercase px-3 py-1.5 bg-surface-warm rounded-full text-ink-faint border border-surface-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="py-16 bg-surface-warm border-b border-surface-border">
          <div className="max-w-site mx-auto px-6 lg:px-10">
            <div className="flex flex-col md:flex-row gap-6">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 bg-surface border border-surface-border rounded-card hover:border-ink/20 hover:shadow-sm transition-all flex-1"
              >
                <div className="w-10 h-10 bg-ink rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-display font-bold text-base text-ink mb-0.5 group-hover:text-ink-soft transition-colors">GitHub</p>
                  <p className="font-mono text-xs text-ink-faint tracking-wide">See what we've built</p>
                </div>
                <span className="ml-auto font-mono text-ink-faint opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>

              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-6 bg-surface border border-surface-border rounded-card hover:border-ink/20 hover:shadow-sm transition-all flex-1"
              >
                <div className="w-10 h-10 bg-[#0A66C2] rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div>
                  <p className="font-display font-bold text-base text-ink mb-0.5 group-hover:text-ink-soft transition-colors">LinkedIn</p>
                  <p className="font-mono text-xs text-ink-faint tracking-wide">Follow our work</p>
                </div>
                <span className="ml-auto font-mono text-ink-faint opacity-0 group-hover:opacity-100 transition-opacity">→</span>
              </a>

              <Link
                href="/contact"
                className="group flex items-center gap-4 p-6 bg-yellow border border-yellow rounded-card hover:bg-yellow-dim transition-all flex-1"
              >
                <div className="w-10 h-10 bg-ink rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-yellow font-mono text-base">→</span>
                </div>
                <div>
                  <p className="font-display font-bold text-base text-ink mb-0.5">Start a project</p>
                  <p className="font-mono text-xs text-ink/60 tracking-wide">admin@buteforce.com</p>
                </div>
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

