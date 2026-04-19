import type { Metadata } from 'next'
import Nav from '@/components/nav'
import Hero from '@/components/hero'
import LogoProofSection from '@/components/logo-proof-section'
import ServicesSection from '@/components/services-section'
import CaseStudiesSection from '@/components/case-studies-section'
import ProcessSection from '@/components/process-section'
import AboutFounderSection from '@/components/about-founder-section'
import {
  TestimonialsSection,
  CTASection,
} from '@/components/sections'
import Footer from '@/components/footer'
import { FAQ } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Buteforce — Precision AI Systems',
  description:
    'We build AI automation systems, computer vision pipelines, and intelligent agents for businesses that are done doing things manually. 10+ production systems shipped.',
  alternates: { canonical: 'https://buteforce.com' },
  openGraph: {
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Buteforce — Precision AI Systems' }],
  },
}

// JSON-LD for homepage
const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://buteforce.com/#webpage',
    name: 'Buteforce — Precision AI Systems',
    url: 'https://buteforce.com',
    description: 'AI automation and computer vision company building production systems for businesses that are done doing things manually.',
    isPartOf: { '@id': 'https://buteforce.com/#website' },
    about: { '@id': 'https://buteforce.com/#org' },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '[data-speakable]'],
    },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://buteforce.com' },
      ],
    },
  },
  {
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
  },
]

export default function HomePage() {
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

      <main>
        {/* 1. Hero — who we are, what we do, proof numbers */}
        <Hero />

        {/* 1.5 Logos — instant visual proof */}
        <LogoProofSection />

        {/* 2. Services — what we build, kept simple */}
        <ServicesSection />

        {/* 3. Case studies — deep proof of work */}
        <CaseStudiesSection />

        {/* 4. Process — reduce anxiety about "what happens next" */}
        <ProcessSection />

        {/* 5. Testimonials — social proof */}
        <TestimonialsSection />

        {/* 6. Founder Identity — injecting the human element */}
        <AboutFounderSection />

        {/* 7. CTA — the moment of decision */}
        <CTASection />
      </main>

      <Footer />
    </>
  )
}
