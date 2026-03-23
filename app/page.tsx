import type { Metadata } from 'next'
import Nav from '@/components/nav'
import Hero from '@/components/hero'
import PainSection from '@/components/pain-section'
import ServicesSection from '@/components/services-section'
import CaseStudiesSection from '@/components/case-studies-section'
import ProcessSection from '@/components/process-section'
import {
  ComparisonSection,
  TechStackSection,
  TestimonialsSection,
  FAQSection,
  CTASection,
} from '@/components/sections'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Buteforce — AI Automation & Computer Vision',
  description:
    'We build AI automation systems, computer vision pipelines, and intelligent agents for businesses that are done doing things manually. 10+ production systems shipped.',
  alternates: { canonical: 'https://buteforce.com' },
}

// JSON-LD for homepage
const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Buteforce — AI Automation & Computer Vision',
  url: 'https://buteforce.com',
  description: 'AI automation and computer vision company building production systems.',
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://buteforce.com' },
    ],
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <Nav />

      <main>
        {/* 1. Hero — who we are, what we do, proof numbers */}
        <Hero />

        {/* 2. Pain — make them feel understood before selling anything */}
        <PainSection />

        {/* 3. Services — here's how we solve those pains */}
        <ServicesSection />

        {/* 4. Case studies — proof we actually do this */}
        <CaseStudiesSection />

        {/* 5. Process — reduce anxiety about "what happens next" */}
        <ProcessSection />

        {/* 6. Comparison — handle the objection "why not someone else?" */}
        <ComparisonSection />

        {/* 7. Tech stack — credibility through specificity */}
        <TechStackSection />

        {/* 8. Testimonials — social proof */}
        <TestimonialsSection />

        {/* 9. FAQ — remove last remaining hesitations */}
        <FAQSection />

        {/* 10. Dark CTA — the moment of decision */}
        <CTASection />
      </main>

      <Footer />
    </>
  )
}
