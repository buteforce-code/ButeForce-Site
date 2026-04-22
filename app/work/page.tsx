import type { Metadata } from 'next'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import WorkGrid from './work-grid'
import { FadeContent } from '@/components/animations'
import { CASE_STUDIES } from '@/lib/data'

const workSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Our Work — 10 Production AI Systems',
  description: 'Computer vision, AI agents, automation workflows, and document AI — 10 real systems built and shipped.',
  url: 'https://buteforce.com/work',
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: CASE_STUDIES.length,
    itemListElement: CASE_STUDIES.map((study, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: study.title,
      description: study.description,
      url: `https://buteforce.com/work/${study.slug}`,
    })),
  },
}

export const metadata: Metadata = {
  title: 'Our Work — 10 Production AI Systems',
  description:
    'Computer vision, AI agents, automation workflows, and document AI — 10 real systems we built and shipped.',
  alternates: { canonical: 'https://buteforce.com/work' },
}

export default function WorkPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(workSchema) }}
      />
      <Nav />
      <main className="pt-32 pb-24 bg-surface min-h-screen">
        <div className="max-w-site mx-auto px-6 lg:px-10">

          <FadeContent delay={0.1}>
            <div className="mb-16">
              <p className="section-label mb-4">Our Work</p>
              <h1 className="text-display-lg font-display font-bold text-ink mb-6 heading-relaxed max-w-[12ch]">
                10 systems built
                <br />
                <span className="text-ink-faint">and shipped.</span>
              </h1>
              <p className="font-body text-ink-muted max-w-lg leading-relaxed">
                Every project here is in production. Real clients, real metrics, real code.
              </p>
            </div>
          </FadeContent>

          <WorkGrid />

        </div>
      </main>
      <Footer />
    </>
  )
}

