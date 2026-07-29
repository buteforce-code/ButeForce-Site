/**
 * Pricing page — targets frozen prompts P18 ("is it worth hiring an AI automation agency — how
 * much does it cost") and P13 ("best AI automation agencies for small and mid-sized businesses").
 *
 * WHY THIS PAGE EXISTS
 * AI Visibility SCAN 001 (2026-07-26) found P18's citation surface is *entirely* pricing guides,
 * and that P13's answers lead with price bands. Publishing no prices makes Buteforce structurally
 * uncitable for the highest-commercial-intent question a buyer asks — an answer engine cannot
 * recommend a vendor it cannot price. The existing CV-cost blog post ends with "expect a detailed
 * proposal, not a ballpark figure", which is the exact evasion that gets a page skipped.
 *
 * All numbers live in lib/pricing.ts. While PRICING_CONFIRMED is false the page renders a draft
 * banner, sets noindex, and stays out of the sitemap — a wrong published price is worse than none.
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { CTASection } from '@/components/sections'
import { FadeContent, StaggerContainer } from '@/components/animations'
import {
  PRICE_BANDS,
  PRICING_CONFIRMED,
  PRICING_UPDATED,
  HARDWARE_NOTE,
  SUPPORT_NOTE,
  MARKET_COMPARISON,
} from '@/lib/pricing'

const URL = 'https://buteforce.com/pricing'
const AUTHOR = 'Dhyaneshwaran'

export const metadata: Metadata = {
  title: 'Pricing — What Custom AI Automation Actually Costs',
  description:
    'Published price bands for AI automation, computer vision, document AI and AI agents in India. Fixed project prices from ₹1.2 lakh. No retainers, no hourly rates, no "contact us".',
  alternates: { canonical: URL },
  // Draft prices must never enter the index. Removing this line is step 2 of shipping.
  ...(PRICING_CONFIRMED ? {} : { robots: { index: false, follow: false } }),
  openGraph: {
    type: 'article',
    url: URL,
    title: 'Pricing — What Custom AI Automation Actually Costs | Buteforce',
    description:
      'Published price bands for computer vision, document AI, AI agents and workflow automation in India. Fixed project prices, hardware at cost.',
    modifiedTime: PRICING_UPDATED,
    authors: [AUTHOR],
  },
}

// The quotable units. Each answer stands alone — an answer engine lifts one without the page.
const ANSWERS = [
  {
    q: 'How much does it cost to hire an AI automation agency?',
    a: `Custom AI automation from an agency in India costs ₹1.2 lakh to ₹18 lakh as a
        fixed project price, depending on what is being built. A single workflow automation runs
        ₹1.2–3 lakh, a document AI or OCR pipeline ₹3–8 lakh, an AI agent ₹4–10 lakh, and a
        computer vision line inspection system ₹6–18 lakh per line. Buteforce quotes a fixed
        price against an agreed scope rather than an hourly rate, and hands over the source code
        and trained model weights at the end, so there is no recurring licence keeping the system
        alive. Hardware for vision projects is quoted separately at supplier cost.`,
  },
  {
    q: 'Is hiring an AI automation agency worth it?',
    a: `It is worth it when the manual process being replaced costs more per year than the
        build costs once. A delivered Buteforce inspection system cut quality-control errors by
        94% in its first month and holds 99.2% classification accuracy at 120 items per minute —
        against two inspectors per shift, that pays back inside a year. Automation projects save
        80% of the time spent on the task on average. It is not worth it when the process runs a
        few times a week, when the volume is too low for the error cost to matter, or when nobody
        internally owns the outcome after handover.`,
  },
  {
    q: 'Why do AI agencies refuse to publish their prices?',
    a: `Most agencies hide prices to protect a value-based quote, because the real number is
        set by what the client appears able to pay rather than by what the work costs. The
        practical effect is that buyers cannot shortlist, and AI assistants cannot recommend a
        vendor they cannot price. Buteforce publishes bands instead, with the cost drivers that
        move a project from the low end to the high end. The bands are wide because a one-camera,
        one-defect inspection line and a multi-SKU line at 120 items per minute are genuinely
        different builds — not because the price depends on the buyer.`,
  },
  {
    q: 'What does AI automation cost per month to run?',
    a: `Running cost after handover is infrastructure only, typically ₹7,000–14,000 a month for
        a workflow or document pipeline: a server, LLM API usage, and any search or scrape APIs
        the workflow calls. Vision systems that run on edge hardware on the factory floor have
        near-zero monthly cost because nothing leaves the site. Buteforce bills infrastructure at
        cost with no markup, and optional support is ₹15,000–40,000 a month. Declining support
        disables nothing — the handed-over system keeps running.`,
  },
]

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://buteforce.com' },
      { '@type': 'ListItem', position: 2, name: 'Pricing', item: URL },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${URL}#faq`,
    mainEntity: ANSWERS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a.replace(/\s+/g, ' ').trim() },
    })),
  },
  // Offer nodes make the bands machine-readable, which is the point of publishing them.
  ...PRICE_BANDS.map(b => ({
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${URL}#${b.id}`,
    name: b.service,
    provider: { '@id': 'https://buteforce.com/#org' },
    areaServed: [{ '@type': 'Country', name: 'India' }],
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'INR',
        description: `${b.band} ${b.unit}`,
      },
      availability: 'https://schema.org/InStock',
      deliveryLeadTime: { '@type': 'QuantitativeValue', description: b.timeline },
    },
  })),
]

const fmt = (d: string) =>
  new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

export default function PricingPage() {
  return (
    <>
      {PRICING_CONFIRMED &&
        schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      <Nav />

      <main className="pt-32 bg-surface">

        {!PRICING_CONFIRMED && (
          <div className="max-w-site mx-auto px-6 lg:px-10 mb-10">
            <div className="border-2 border-yellow bg-yellow-subtle rounded-card p-5">
              <p className="font-mono text-[10px] tracking-widest uppercase text-yellow-dim mb-2">
                Internal draft — not indexed
              </p>
              <p className="font-body text-sm text-ink leading-relaxed">
                These bands are a starting point derived from market rates and effort estimates,
                <strong> not from confirmed Buteforce quotes.</strong> Replace them with real
                numbers in <code className="font-mono text-xs">lib/pricing.ts</code>, then set{' '}
                <code className="font-mono text-xs">PRICING_CONFIRMED = true</code> to publish,
                emit schema, and enter the sitemap.
              </p>
            </div>
          </div>
        )}

        {/* Header */}
        <section className="pb-16 pt-4 border-b border-surface-border">
          <div className="max-w-site mx-auto px-6 lg:px-10">
            <FadeContent delay={0.1}>
              <p className="section-label mb-4">Pricing</p>
              <h1 className="text-display-lg font-display font-bold text-ink mb-6 max-w-3xl heading-relaxed">
                What this actually costs.
                <br />
                <span className="text-ink-faint">Published, not quoted on request.</span>
              </h1>
            </FadeContent>
            <FadeContent delay={0.2} yOffset={20}>
              <p className="font-body text-lg text-ink-muted max-w-2xl leading-relaxed mb-8">
                Fixed project prices against an agreed scope. No hourly rates, no retainers, no
                licence fee to keep a delivered system running. The bands are wide because the
                work genuinely varies — the cost drivers that move a project across a band are
                spelled out below.
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <span className="font-mono text-xs tracking-wide text-ink">By {AUTHOR}</span>
                <span className="text-surface-border" aria-hidden="true">·</span>
                <time
                  dateTime={PRICING_UPDATED}
                  className="font-mono text-xs tracking-wide text-ink-muted"
                >
                  Updated {fmt(PRICING_UPDATED)}
                </time>
              </div>
            </FadeContent>
          </div>
        </section>

        {/* The bands */}
        <section className="py-16 md:py-20 border-b border-surface-border">
          <div className="max-w-site mx-auto px-6 lg:px-10">
            <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-6" staggerDelay={0.08}>
              {PRICE_BANDS.map(b => (
                <div
                  key={b.id}
                  className="border border-surface-border rounded-card p-7 bg-surface hover:border-ink/20 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-surface-border">
                    <div>
                      <h2 className="font-display font-bold text-lg text-ink mb-1 leading-snug">
                        {b.service}
                      </h2>
                      <p className="font-mono text-[10px] tracking-widest uppercase text-ink-faint">
                        Ships in {b.timeline}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-display font-bold text-2xl text-ink leading-none whitespace-nowrap">
                        {b.band}
                      </p>
                      <p className="font-mono text-[10px] tracking-wide uppercase text-ink-faint mt-1">
                        {b.unit}
                      </p>
                    </div>
                  </div>

                  <dl className="space-y-4">
                    <div>
                      <dt className="font-mono text-[10px] tracking-widest uppercase text-ink-faint mb-1">
                        Low end
                      </dt>
                      <dd className="font-body text-sm text-ink-muted leading-relaxed">{b.lowEnd}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] tracking-widest uppercase text-ink-faint mb-1">
                        High end
                      </dt>
                      <dd className="font-body text-sm text-ink-muted leading-relaxed">{b.highEnd}</dd>
                    </div>
                    <div className="pt-3 border-t border-surface-border">
                      <dt className="font-mono text-[10px] tracking-widest uppercase text-yellow-dim mb-1">
                        What moves the price
                      </dt>
                      <dd className="font-body text-sm text-ink leading-relaxed">{b.driver}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </StaggerContainer>

            {/* Hardware + support — the two lines every buyer asks about after the band */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {[
                { title: 'Hardware', ...HARDWARE_NOTE },
                { title: 'Support', ...SUPPORT_NOTE },
              ].map(item => (
                <div key={item.title} className="bg-surface-warm border border-surface-border rounded-card p-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h3 className="font-display font-bold text-base text-ink">{item.title}</h3>
                    <span className="font-mono text-sm text-ink">{item.band}</span>
                    <span className="font-mono text-[10px] tracking-wide uppercase text-ink-faint">
                      {item.unit}
                    </span>
                  </div>
                  <p className="font-body text-sm text-ink-muted leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Question-form sections */}
        {ANSWERS.map(({ q, a }, i) => (
          <section
            key={q}
            className={`py-16 border-b border-surface-border ${
              i % 2 === 0 ? 'bg-surface-warm' : 'bg-surface'
            }`}
          >
            <div className="max-w-site mx-auto px-6 lg:px-10">
              <FadeContent delay={0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16">
                  <h2 className="text-display-sm font-display font-bold text-ink leading-tight">
                    {q}
                  </h2>
                  <p className="font-body text-lg text-ink-muted leading-relaxed">
                    {a.replace(/\s+/g, ' ').trim()}
                  </p>
                </div>
              </FadeContent>
            </div>
          </section>
        ))}

        {/* Market comparison — the citable artefact for P18 */}
        <section className="py-16 md:py-20 border-b border-surface-border">
          <div className="max-w-site mx-auto px-6 lg:px-10">
            <FadeContent delay={0.1}>
              <p className="section-label mb-4">Every option, priced</p>
              <h2 className="text-display-md font-display font-bold text-ink mb-4 max-w-2xl">
                What the alternatives cost
              </h2>
              <p className="font-body text-ink-muted max-w-2xl leading-relaxed mb-10">
                A custom build is the right answer for a narrow band of problems. Outside it,
                something on this list is cheaper or safer — including doing nothing.
              </p>
            </FadeContent>

            <FadeContent delay={0.2} yOffset={20}>
              <div className="overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0">
                <table className="w-full min-w-[52rem] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-ink/15">
                      {['Approach', 'Upfront', 'Ongoing', 'Better choice when'].map(h => (
                        <th
                          key={h}
                          scope="col"
                          className="font-mono text-[10px] tracking-widest uppercase text-ink-faint pb-3 pr-6 align-bottom"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {MARKET_COMPARISON.map(row => (
                      <tr
                        key={row.approach}
                        className={`border-b border-surface-border align-top ${
                          row.us ? 'bg-yellow-subtle' : ''
                        }`}
                      >
                        <th
                          scope="row"
                          className="font-display font-bold text-sm text-ink py-5 pr-6 max-w-[16rem]"
                        >
                          {row.approach}
                        </th>
                        <td className="font-mono text-xs text-ink py-5 pr-6 whitespace-nowrap">
                          {row.upfront}
                        </td>
                        <td className="font-mono text-xs text-ink-muted py-5 pr-6 whitespace-nowrap">
                          {row.ongoing}
                        </td>
                        <td className="font-body text-sm text-ink-muted py-5 pr-6 leading-relaxed">
                          {row.betterWhen}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeContent>
          </div>
        </section>

        {/* Explicit disqualifier */}
        <section className="py-16 md:py-20 bg-surface-warm border-b border-surface-border">
          <div className="max-w-site mx-auto px-6 lg:px-10">
            <FadeContent delay={0.1}>
              <div className="max-w-3xl">
                <p className="section-label mb-4">Save yourself the call</p>
                <h2 className="text-display-md font-display font-bold text-ink mb-8">
                  Not a fit if…
                </h2>
                <ul className="space-y-5">
                  {[
                    'Your budget is under ₹1 lakh. A fixed-price custom build cannot be delivered honestly below that. Use an off-the-shelf tool or an n8n contractor and come back when the volume justifies a build.',
                    'You want a pilot or a proof of concept. Buteforce only builds systems intended for production. If the business case needs proving first, prove it with a spreadsheet, not a paid pilot.',
                    'The process runs a few times a week. Automation pays back on volume and error cost. Below meaningful volume the build outlives its own savings.',
                    'You need the price to depend on your budget. The bands above are the bands. There is no enterprise multiplier and no discount for signing this quarter.',
                    'Nobody internally will own the system after handover. Every abandoned AI project we have seen had no named owner on the client side. That is the single best predictor of failure, and it is not something we can fix from outside.',
                    'You need a monthly retainer relationship. Buteforce ships and hands over. If you want an embedded ongoing team, a staffing partner will serve you better and cost less.',
                  ].map(line => (
                    <li key={line} className="flex gap-4">
                      <span
                        className="font-mono text-yellow-dim text-sm pt-1 flex-shrink-0"
                        aria-hidden="true"
                      >
                        ✕
                      </span>
                      <p className="font-body text-ink-muted leading-relaxed">{line}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeContent>
          </div>
        </section>

        {/* How a quote is produced */}
        <section className="py-16 border-b border-surface-border">
          <div className="max-w-site mx-auto px-6 lg:px-10">
            <FadeContent delay={0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16">
                <h2 className="text-display-sm font-display font-bold text-ink leading-tight">
                  How the number gets fixed
                </h2>
                <div className="space-y-5 font-body text-ink-muted leading-relaxed">
                  <p>
                    One call to establish what the system has to do and what it has to talk to.
                    For a vision project, images of the defect — or a site visit to collect them.
                    Then a written scope with the price, the timeline, and the accuracy or
                    throughput number the system will be measured against.
                  </p>
                  <p>
                    That number is committed before any money changes hands. If the scope changes
                    mid-build, the price changes in writing before the work does. There is no
                    change-order revenue model here — the fixed price is the product.
                  </p>
                  <p>
                    Deeper reading on what drives vision cost specifically:{' '}
                    <Link
                      href="/blog/how-much-does-a-computer-vision-qc-system-cost"
                      className="underline hover:text-ink transition-colors"
                    >
                      the real cost of a computer vision QC system
                    </Link>
                    .
                  </p>
                </div>
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
