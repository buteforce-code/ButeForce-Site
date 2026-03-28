import type { Metadata } from 'next'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import {
  LpHero,
  LpCostSection,
  LpAuditGives,
  LpProofStrip,
  LpTwoPaths,
  LpPrimaryCtaBlock,
} from './sections'

export const metadata: Metadata = {
  title: 'Free AI Audit for Founders — Buteforce',
  description:
    "In 30 minutes, we'll map exactly which parts of your business AI can automate right now — specific tools, real timelines, no slide decks.",
  alternates: { canonical: 'https://buteforce.com/lp/ai-audit' },
  robots: { index: false, follow: false },
}

const landingPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Free AI Audit for Scaling Founders',
  url: 'https://buteforce.com/lp/ai-audit',
  description:
    'Book a free 30-minute AI audit with Buteforce. Walk away with an exact map of which processes in your company AI can automate right now.',
}

export default function LpAuditPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(landingPageSchema) }}
      />
      <Nav />
      <main>
        <LpHero />
        <LpCostSection />
        <LpAuditGives />
        <LpProofStrip />
        <LpTwoPaths />
        <LpPrimaryCtaBlock />
      </main>
      <Footer />
    </>
  )
}
