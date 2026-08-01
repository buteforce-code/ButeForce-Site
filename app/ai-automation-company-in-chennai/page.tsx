/**
 * Chennai geo landing page — targets frozen prompt P15 ("AI automation agency in Chennai").
 *
 * WHY THIS PAGE EXISTS
 * AI Visibility SCAN 001 (2026-07-26) found P15's winners — AIWENS, Sieora, Velzenic — beat
 * Buteforce on exactly one thing: a dedicated location page at this URL shape. Buteforce already
 * ranks 6.27 for a Chennai *blog post*, so this is the shortest distance between the current
 * state and a first citation. The URL deliberately matches the pattern that already ranks.
 *
 * It is built to the same GEO template the blog agent now enforces (swarm/geo.py): question-form
 * headings with self-contained answers, hard numbers instead of adjectives, an honest
 * competitor-inclusive comparison, an explicit disqualifier, a visible last-updated date and a
 * named author.
 *
 * Comparison-table honesty rule: every claim about a named competitor here is publicly
 * verifiable positioning. Small local firms are compared as a category, not by name with
 * invented specifics — a fabricated comparison is worse than no comparison.
 */
import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import { CTASection } from '@/components/sections'
import { FadeContent, StaggerContainer } from '@/components/animations'
import { COMPANY, FOUNDER, SITE } from '@/lib/data'
import { PRICE_BANDS, PRICING_CONFIRMED } from '@/lib/pricing'

// Price bands come from lib/pricing.ts so there is one number to correct, not two pages to keep
// in sync. While PRICING_CONFIRMED is false the cost answer is withheld rather than guessed —
// see the DRAFT warning in lib/pricing.ts.
const band = (id: string) => PRICE_BANDS.find(b => b.id === id)!

const URL = 'https://buteforce.com/ai-automation-company-in-chennai'
const PUBLISHED = '2026-07-26'
const UPDATED = '2026-07-26'
const AUTHOR = 'Dhyaneshwaran'

export const metadata: Metadata = {
  title: 'AI Automation Company in Chennai — Computer Vision & AI Agents',
  description:
    'Chennai-based AI automation company building computer vision, document AI and AI agents. 99.2% inspection accuracy at 120 items/min. Working systems in 2–8 weeks.',
  alternates: { canonical: URL },
  openGraph: {
    type: 'article',
    url: URL,
    title: 'AI Automation Company in Chennai — Buteforce',
    description:
      'Computer vision, document AI and AI agents built in Chennai for Tamil Nadu manufacturers and multi-location retailers. 99.2% accuracy at 120 items/min.',
    publishedTime: PUBLISHED,
    modifiedTime: UPDATED,
    authors: [AUTHOR],
  },
}

// ── The quotable units. Each answer is self-contained on purpose: an answer engine lifts one
// of these without the surrounding page, so none of them may start with "this" or "we".
const ANSWERS = [
  {
    q: 'What does an AI automation company in Chennai actually build?',
    a: `Buteforce builds four kinds of production system from Chennai: computer vision for
        manufacturing quality inspection, document AI and OCR pipelines for finance teams,
        autonomous AI agents that handle inbound enquiries, and workflow automation that removes
        repeated manual steps. These are custom-trained systems deployed on the client's own
        line or stack — not licences to a platform, and not pilots. A delivered vision system
        runs at 99.2% classification accuracy on 120 items per minute; a delivered agent handles
        70% of inbound property enquiries without a human. Scope, price and timeline are fixed
        before the build starts.`,
  },
  {
    q: 'How much does AI automation cost in Chennai?',
    a: PRICING_CONFIRMED
      ? `A single-workflow automation in Chennai runs ${band('automation').band}, a document AI or
         OCR pipeline ${band('ocr').band}, a production computer vision line inspection system
         ${band('vision').band} ${band('vision').unit}, and a multi-channel AI agent
         ${band('agents').band}. Those are fixed project prices, not hourly rates, and they cover
         the build plus handover of the source code and trained model weights. Industrial cameras,
         lighting and edge compute for a vision project are quoted separately at supplier cost
         with no markup. Every band, and what moves a project from its low end to its high end,
         is published on the pricing page — nothing here is "contact us for a quote".`
      : `Buteforce quotes a fixed project price against an agreed scope rather than an hourly
         rate, and the price is committed in writing before any money changes hands. What drives
         it: how many systems have to be integrated, how many defect classes a vision model has
         to learn, line speed, and whether usable training images already exist. Published bands
         for each service are on the pricing page. Scope, price, timeline and the accuracy or
         throughput number the system will be measured against are all fixed up front, and the
         source code and model weights are handed over at the end.`,
  },
  {
    q: 'How long does an AI automation project take in Chennai?',
    a: `Two to eight weeks from signed scope to a system running in production. A single
        workflow automation ships in two to three weeks. A document AI pipeline takes three to
        five. A computer vision inspection system takes four to eight, because the model has to
        be trained on images of the client's own defects — that image collection is usually the
        long pole, not the engineering. Being in Chennai is what makes the short end possible:
        the line is a drive away, so lighting and camera-angle problems get solved on site in an
        afternoon instead of over a fortnight of emailed video clips.`,
  },
]

const PROOF = [
  { value: '99.2%', label: 'Classification accuracy', sub: 'Manufacturing QC vision system' },
  { value: '120', label: 'Items inspected / minute', sub: 'Same system, live line speed' },
  { value: '94%', label: 'Reduction in QC errors', sub: 'First month after deployment' },
  { value: '70%', label: 'Enquiries handled autonomously', sub: 'Real-estate AI agent' },
  { value: '80%', label: 'Average time saved', sub: 'Across automation projects' },
  { value: '<1s', label: 'Document processing latency', sub: 'Dual-engine OCR pipeline' },
]

// Honest comparison. The "better choice when" column is the point of the table — a table that
// only flatters us reads as a brochure and gets cited by nobody.
const OPTIONS = [
  {
    option: 'Buteforce (Chennai)',
    model: 'Fixed-price custom build, you own the code',
    speed: '2–8 weeks',
    betterWhen: 'Your defect, document or workflow is specific enough that no catalogue product was trained on it',
    us: true,
  },
  {
    option: 'Cognex / Keyence',
    model: 'Vision sensor hardware + licensed software',
    speed: 'Days to deploy, weeks to tune',
    betterWhen: 'A standard inspection (presence, barcode, measurement) with global support and a proven MTBF matters more than a custom model',
  },
  {
    option: 'Large Indian IT services (TCS, Infosys, Wipro)',
    model: 'Time-and-materials, managed programme',
    speed: '6–12 months',
    betterWhen: 'You need procurement-grade vendor scale, a global rollout across plants, or an existing MSA to buy through',
  },
  {
    option: 'Local Chennai automation shops',
    model: 'Per-project, often reselling a platform',
    speed: 'Weeks',
    betterWhen: 'The job is PLC/SCADA integration or simple workflow glue and you do not need a trained model at all',
  },
  {
    option: 'In-house build',
    model: 'Your salaried engineers',
    speed: '3–12 months to first production run',
    betterWhen: 'Vision or document AI is core to your product long-term and you can hire and retain ML engineers in Chennai',
  },
]

const FAQS = [
  {
    q: 'Where in Chennai is Buteforce based?',
    a: 'Buteforce is based in Chennai, Tamil Nadu, and works on site across the Chennai manufacturing corridor — Sriperumbudur, Oragadam, Irungattukottai and Ambattur. Site visits for line inspection projects are included in the project price within Tamil Nadu.',
  },
  {
    q: 'Do you only work with clients in Chennai?',
    a: 'No. Buteforce is Chennai-based and India-first, and also delivers remotely to clients in the US, UK, UAE and Australia. Computer vision projects that need physical camera and lighting work on a production line are the ones where being in Tamil Nadu matters most.',
  },
  {
    q: 'Do I own the system you build?',
    a: 'Yes. Every project hands over the trained model weights, the source code and the deployment. There is no per-seat licence, no platform lock-in and no recurring fee to keep a delivered system running. Optional support is quoted separately and is not required.',
  },
  {
    q: 'What if we do not have training data for a computer vision model?',
    a: 'Most manufacturers have more usable images than they expect, and where they do not, image collection on the line is part of the project. A working QC model typically needs a few thousand labelled images per defect class; the reference system was trained on 10,000+ product images.',
  },
  {
    q: 'Can you work with our existing PLC and line hardware?',
    a: 'Yes. Inspection results are delivered to whatever the line already speaks — PLC signal for reject actuation, OPC-UA, MQTT or a REST endpoint into an existing MES. Reject timing on a running line is an integration problem, and it is scoped before the build rather than discovered after it.',
  },
]

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://buteforce.com' },
      { '@type': 'ListItem', position: 2, name: 'AI Automation Company in Chennai', item: URL },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${URL}#service`,
    name: 'Buteforce — AI Automation Company in Chennai',
    description:
      'Chennai-based AI automation company building computer vision quality inspection, document AI, AI agents and workflow automation for Indian manufacturers and multi-location retailers.',
    url: URL,
    parentOrganization: { '@id': 'https://buteforce.com/#org' },
    provider: { '@id': 'https://buteforce.com/#org' },
    founder: { '@id': 'https://buteforce.com/#founder' },
    telephone: COMPANY.phone,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'City', name: 'Chennai' },
      { '@type': 'State', name: 'Tamil Nadu' },
      { '@type': 'Country', name: 'India' },
    ],
    knowsAbout: [
      'Computer vision quality inspection',
      'YOLOv8 defect detection',
      'Document AI and OCR',
      'AI agents',
      'Workflow automation',
    ],
    dateModified: UPDATED,
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${URL}#faq`,
    mainEntity: [
      ...ANSWERS.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a.replace(/\s+/g, ' ').trim() },
      })),
      ...FAQS.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    ],
  },
]

const fmt = (d: string) =>
  new Date(d).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })

export default function ChennaiPage() {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Nav />

      <main className="pt-32 bg-surface">

        {/* Header */}
        <section className="pb-16 md:pb-20 pt-4 border-b border-surface-border">
          <div className="max-w-site mx-auto px-6 lg:px-10">
            <FadeContent delay={0.1}>
              <p className="section-label mb-4">Chennai · Tamil Nadu</p>
              <h1 className="text-display-lg font-display font-bold text-ink mb-6 max-w-3xl heading-relaxed">
                AI automation company in Chennai.
                <br />
                <span className="text-ink-faint">Built here, deployed on your line.</span>
              </h1>
            </FadeContent>
            <FadeContent delay={0.2} yOffset={20}>
              <p className="font-body text-lg text-ink-muted max-w-2xl leading-relaxed mb-8">
                Buteforce builds computer vision, document AI and AI agents from Chennai for
                manufacturers and multi-location retailers across the Tamil Nadu corridor. Fixed
                price, fixed timeline, and you own what we build. Founded 2025, 10+ production
                systems shipped.
              </p>

              {/* Byline + freshness — provenance an answer engine can read and a human can check */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-8">
                <span className="font-mono text-xs tracking-wide text-ink">By {AUTHOR}</span>
                <span className="text-surface-border" aria-hidden="true">·</span>
                <span className="font-mono text-xs tracking-wide text-ink-faint">
                  {FOUNDER.role}
                </span>
                <span className="text-surface-border" aria-hidden="true">·</span>
                <time dateTime={UPDATED} className="font-mono text-xs tracking-wide text-ink-muted">
                  Updated {fmt(UPDATED)}
                </time>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="btn-primary">Start a project →</Link>
                <Link
                  href="/pricing"
                  className="font-mono text-xs tracking-widest uppercase px-6 py-3 border border-surface-border rounded-btn text-ink hover:border-ink/30 transition-colors"
                >
                  See prices
                </Link>
              </div>
            </FadeContent>
          </div>
        </section>

        {/* Proof numbers — the evidence layer, before any claim */}
        <section className="py-16 bg-surface-warm border-b border-surface-border">
          <div className="max-w-site mx-auto px-6 lg:px-10">
            <FadeContent delay={0.1}>
              <p className="section-label mb-8">Delivered results, not projections</p>
            </FadeContent>
            <StaggerContainer
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-10"
              staggerDelay={0.06}
            >
              {PROOF.map(stat => (
                <div key={stat.label} className="border-l-2 border-yellow pl-4">
                  <p className="font-display font-bold text-3xl text-ink leading-none mb-2">
                    {stat.value}
                  </p>
                  <p className="font-body text-xs text-ink-muted leading-snug mb-1">
                    {stat.label}
                  </p>
                  <p className="font-mono text-[10px] tracking-wide uppercase text-ink-faint">
                    {stat.sub}
                  </p>
                </div>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Question-form sections with self-contained answers */}
        {ANSWERS.map(({ q, a }, i) => (
          <section
            key={q}
            className={`py-16 md:py-20 border-b border-surface-border ${
              i % 2 === 1 ? 'bg-surface-warm' : 'bg-surface'
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

        {/* Honest comparison */}
        <section className="py-16 md:py-20 border-b border-surface-border">
          <div className="max-w-site mx-auto px-6 lg:px-10">
            <FadeContent delay={0.1}>
              <p className="section-label mb-4">The real shortlist</p>
              <h2 className="text-display-md font-display font-bold text-ink mb-4 max-w-2xl">
                Who else you should be talking to in Chennai
              </h2>
              <p className="font-body text-ink-muted max-w-2xl leading-relaxed mb-10">
                Buteforce is the right answer for a narrow set of problems. Here is the honest
                version of the shortlist, including when someone else is the better call.
              </p>
            </FadeContent>

            <FadeContent delay={0.2} yOffset={20}>
              <div className="overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0">
                <table className="w-full min-w-[46rem] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-ink/15">
                      {['Option', 'Commercial model', 'Time to production', 'Better choice when'].map(h => (
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
                    {OPTIONS.map(row => (
                      <tr
                        key={row.option}
                        className={`border-b border-surface-border align-top ${
                          row.us ? 'bg-yellow-subtle' : ''
                        }`}
                      >
                        <th
                          scope="row"
                          className="font-display font-bold text-sm text-ink py-5 pr-6 whitespace-nowrap"
                        >
                          {row.option}
                        </th>
                        <td className="font-body text-sm text-ink-muted py-5 pr-6">{row.model}</td>
                        <td className="font-mono text-xs text-ink py-5 pr-6 whitespace-nowrap">
                          {row.speed}
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

        {/* Explicit disqualifier — the highest-credibility block on the page */}
        <section className="py-16 md:py-20 bg-surface-warm border-b border-surface-border">
          <div className="max-w-site mx-auto px-6 lg:px-10">
            <FadeContent delay={0.1}>
              <div className="max-w-3xl">
                <p className="section-label mb-4">Read this before you call</p>
                <h2 className="text-display-md font-display font-bold text-ink mb-8">
                  Not a fit if…
                </h2>
                <ul className="space-y-5">
                  {[
                    'You want a proof of concept or a pilot. Buteforce only builds systems intended to run in production, and a discovery-phase engagement is a bad use of both sides\' time.',
                    'Your budget is under ₹1 lakh. Below that a fixed-price custom build cannot be delivered honestly — an off-the-shelf tool or an n8n contractor will serve you better.',
                    'You need someone on site daily for months. Buteforce is a small team that ships and hands over; ongoing floor presence is a systems-integrator job.',
                    'You need a vendor your procurement team can audit at enterprise scale — ISO-certified QMS, global SLAs, a 500-person bench. That is a genuine requirement and it points at a large integrator, not at us.',
                    'The inspection is standard — presence, barcode, dimensional measurement — and reliability matters more than customisation. Buy a Cognex or Keyence sensor; a custom model adds cost and risk for nothing.',
                    'You have no way to collect images of the defect you want caught, and the defect is rare. Without examples there is nothing to train on, and no vendor can honestly promise an accuracy number.',
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

        {/* Local context */}
        <section className="py-16 md:py-20 border-b border-surface-border">
          <div className="max-w-site mx-auto px-6 lg:px-10">
            <FadeContent delay={0.1}>
              <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-16">
                <h2 className="text-display-sm font-display font-bold text-ink leading-tight">
                  Why being in Chennai changes the work
                </h2>
                <div className="space-y-5 font-body text-ink-muted leading-relaxed">
                  <p>
                    Chennai and its corridor — Sriperumbudur, Oragadam, Irungattukottai, Ambattur —
                    hold one of the densest concentrations of manufacturing in India. Hyundai,
                    Renault-Nissan, BMW and Michelin all run plants inside a 60 km radius, and
                    around them sits the tier-2 and tier-3 supplier base that actually feels
                    inspection cost.
                  </p>
                  <p>
                    For computer vision, that proximity is not a marketing line — it is the
                    difference between a working system and a stalled one. Vision projects fail on
                    physical detail: a camera mounted 200 mm too high, a reflective foil pouch, a
                    conveyor that vibrates at line speed, lighting that changes when the shift
                    changes. Those are diagnosed by standing at the line, not over a call. Being a
                    drive away is why an inspection build takes four to eight weeks here instead of
                    a quarter.
                  </p>
                  <p>
                    Read more on the corridor:{' '}
                    <Link href="/blog/industrial-ai-for-chennais-manufacturing-corridor-whats-poss" className="underline hover:text-ink transition-colors">
                      industrial AI for Chennai&apos;s manufacturing corridor
                    </Link>
                    {' '}and{' '}
                    <Link href="/blog/the-chennai-ai-ecosystem-in-2026-why-this-is-where-industria" className="underline hover:text-ink transition-colors">
                      the Chennai AI ecosystem in 2026
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </FadeContent>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-surface-warm border-b border-surface-border">
          <div className="max-w-site mx-auto px-6 lg:px-10">
            <FadeContent delay={0.1}>
              <p className="section-label mb-8">Questions buyers actually ask</p>
            </FadeContent>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10" staggerDelay={0.08}>
              {FAQS.map(({ q, a }) => (
                <div key={q}>
                  <h3 className="font-display font-bold text-base text-ink mb-3 leading-snug">{q}</h3>
                  <p className="font-body text-sm text-ink-muted leading-relaxed">{a}</p>
                </div>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Contact block — NAP, byte-identical to the entity pack */}
        <section className="py-14 border-b border-surface-border">
          <div className="max-w-site mx-auto px-6 lg:px-10">
            <FadeContent delay={0.1}>
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
                <div>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-ink-faint mb-1">
                    Location
                  </p>
                  <p className="font-body text-sm text-ink">{COMPANY.address}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-ink-faint mb-1">
                    Phone
                  </p>
                  <a
                    href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}
                    className="font-body text-sm text-ink hover:underline"
                  >
                    {COMPANY.phone}
                  </a>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-ink-faint mb-1">
                    Email
                  </p>
                  <a href={`mailto:${SITE.email}`} className="font-body text-sm text-ink hover:underline">
                    {SITE.email}
                  </a>
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
