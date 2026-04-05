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
  openGraph: {
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Buteforce — AI Automation & Computer Vision' }],
  },
}

// JSON-LD for homepage — WebPage + FAQPage (rich result + AI extraction)
const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://buteforce.com/#webpage',
    name: 'Buteforce — AI Automation & Computer Vision',
    url: 'https://buteforce.com',
    description: 'AI automation and computer vision company building production systems.',
    isPartOf: { '@id': 'https://buteforce.com/#website' },
    about: { '@id': 'https://buteforce.com/#org' },
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
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What types of businesses do you work with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We work with businesses of 5 to 500 people across manufacturing, logistics, real estate, finance, healthcare, and professional services. If you have a manual process that costs time or money every day, we can probably automate it.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does a typical project take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Depends on scope. A focused automation workflow can be live in 2–3 weeks. A custom-trained computer vision system typically takes 4–6 weeks from data collection to production deployment. We\'ll give you a specific timeline after understanding your project.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to provide training data for computer vision?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sometimes yes, sometimes we help collect it. For manufacturing QC, we typically need 500–5,000 labelled images of your specific products. We\'ll tell you exactly what\'s needed upfront.',
        },
      },
      {
        '@type': 'Question',
        name: 'Who owns the code and models after the project?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You do. 100%. All code, trained models, and infrastructure belong to you. We don\'t use a proprietary platform — we build on open standards.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you work with our existing systems?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We\'ve integrated with Salesforce, HubSpot, SAP, various ERPs, Gmail, Google Workspace, custom databases, and most things with an API. If it has an API or webhook, we can connect to it.',
        },
      },
    ],
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
