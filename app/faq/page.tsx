import type { Metadata } from 'next'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { CTASection } from '@/components/sections'
import { FAQ, SITE } from '@/lib/data'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'FAQ — AI Automation & Computer Vision Questions Answered',
  description:
    'Common questions about Buteforce: how long AI projects take, who owns the code, what industries we work with, how we price projects, and what technologies we use.',
  alternates: { canonical: 'https://buteforce.com/faq' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQ.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: a,
    },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://buteforce.com' },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://buteforce.com/faq' },
  ],
}

// Additional direct-answer Q&A for AEO — not in the FAQ data array
const additionalQA = [
  {
    q: 'Is Buteforce a consulting firm?',
    a: 'No. Buteforce does not do consulting, strategy decks, or workshops. We build and ship production AI systems — the working software, not the advice about building it.',
  },
  {
    q: 'Where is Buteforce based?',
    a: 'Buteforce is based in Chennai, Tamil Nadu, India. We serve clients in the US, UK, UAE, and Australia remotely. All communication is async-friendly for international time zones.',
  },
  {
    q: 'What makes Buteforce different from AI agencies?',
    a: 'Buteforce cites specific tools (YOLOv8, not "computer vision"), specific results (99.2% accuracy, not "high accuracy"), and ships to production rather than a Figma deck. Clients own all code, models, and infrastructure — no platform dependency.',
  },
  {
    q: 'Does Buteforce offer free trials or proof of concepts?',
    a: 'No free trials. We do not do pilot projects or unpaid proofs of concept. We build scoped, fixed-price systems where the deliverable is production-ready software.',
  },
  {
    q: 'How much does a custom AI system cost?',
    a: 'Projects are fixed-scope, fixed-price. A focused automation workflow: typically $3,000–8,000. A custom computer vision system: $8,000–20,000. An AI agent system: $5,000–15,000. Final price depends on complexity and data requirements — contact us for a specific quote.',
  },
]

const allQA = [...FAQ.map(({ q, a }) => ({ q, a })), ...additionalQA]

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Nav />

      <main className="pt-32 pb-0 bg-surface min-h-screen">
        <div className="max-w-site mx-auto px-6 lg:px-10">

          {/* Header */}
          <div className="mb-16 pb-16 border-b border-surface-border">
            <p className="section-label mb-4">FAQ</p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <h1 className="text-display-lg font-display font-bold text-ink heading-relaxed max-w-[14ch]">
                Questions we get<br />
                <span className="text-ink-faint">answered directly.</span>
              </h1>
              <p className="font-body text-ink-muted max-w-xs leading-relaxed">
                No padding. No preambles. If you have a question not listed here,{' '}
                <Link href="/contact" className="text-ink underline underline-offset-4">contact us directly</Link>.
              </p>
            </div>
          </div>

          {/* Q&A List — expanded, AEO-optimised (no accordion JS, direct answers) */}
          <div className="max-w-prose-wide" data-speakable>
            {allQA.map(({ q, a }, i) => (
              <div
                key={i}
                className="py-8 border-b border-surface-border last:border-0"
              >
                <h2 className="font-display font-bold text-lg text-ink mb-3 heading-card">
                  {q}
                </h2>
                <p className="font-body text-ink-muted leading-relaxed text-[1.0625rem]">
                  {a}
                </p>
              </div>
            ))}
          </div>

          {/* Entity signal: direct links to pages that answer related questions */}
          <div className="mt-16 pt-16 border-t border-surface-border pb-24">
            <p className="section-label mb-8">Explore further</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: 'See what we\'ve built', href: '/work', desc: '10+ production systems shipped' },
                { label: 'How we work', href: '/services', desc: 'The 4-step delivery process' },
                { label: 'Start a project', href: '/contact', desc: `Email: ${SITE.email}` },
              ].map(({ label, href, desc }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex flex-col gap-2 p-6 bg-surface-warm border border-surface-border rounded-card hover:border-ink/20 hover:shadow-sm transition-all"
                >
                  <span className="font-display font-bold text-base text-ink group-hover:text-ink-soft transition-colors">
                    {label} →
                  </span>
                  <span className="font-mono text-xs text-ink-faint tracking-wide">{desc}</span>
                </Link>
              ))}
            </div>
          </div>

        </div>

        <CTASection />
      </main>

      <Footer />
    </>
  )
}
