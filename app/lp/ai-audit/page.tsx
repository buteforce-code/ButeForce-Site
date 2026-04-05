import type { Metadata } from 'next'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import {
  LpHero,
  LpCostSection,
  LpAuditGives,
  LpTwoPaths,
  LpPrimaryCtaBlock,
} from './sections'
import {
  LpCapabilities,
  LpCaseStudies,
  LpCompare,
  LpProcess,
  LpFAQ,
} from './sections-extra'

export const metadata: Metadata = {
  title: 'Free AI Audit — Buteforce | Custom AI Systems Built for Production',
  description:
    'In 30 minutes, we map exactly which parts of your business AI can automate right now. Computer vision, AI agents, RAG pipelines, document AI — we build all of it. Specific tools. Real timelines.',
  alternates: { canonical: 'https://buteforce.com/lp/ai-audit' },
  keywords: 'hire AI engineers, AI automation agency, custom AI development, computer vision agency, n8n automation, LangChain development, RAG pipeline, AI agent development, OCR automation, production AI systems',
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    title: 'Free AI Audit — Buteforce',
    description: '30 minutes. We map exactly which parts of your business AI can automate right now. No slide decks. Specific tools, real timelines.',
    url: 'https://buteforce.com/lp/ai-audit',
    siteName: 'Buteforce',
  }
}

const landingPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Buteforce',
  description: 'Custom AI automation, computer vision, AI agents, RAG pipelines, and document AI systems — production-grade, not prototypes.',
  url: 'https://buteforce.com',
  email: 'admin@buteforce.com',
  offers: {
    '@type': 'Offer',
    name: 'Free AI Audit',
    description: '30-minute session mapping exactly which parts of your business AI can automate right now. Specific tools, real timelines, no commitment.',
    price: '0',
    priceCurrency: 'USD',
  },
  serviceType: [
    'AI Automation & Workflow Orchestration',
    'Computer Vision Systems',
    'AI Agent Development',
    'RAG Pipeline Development',
    'Document AI & OCR',
    'Machine Learning Engineering',
    'MLOps',
    'LLM Integration',
    'n8n Automation',
    'Custom Model Training',
  ],
  knowsAbout: [
    'PyTorch', 'TensorFlow', 'YOLOv8', 'YOLOv5', 'Hugging Face',
    'LangChain', 'LangGraph', 'Claude API', 'OpenAI', 'Mistral',
    'n8n', 'Trigger.dev', 'Supabase', 'PostgreSQL',
    'RAG', 'Vector Databases', 'Pinecone', 'Weaviate',
    'Google Cloud Vision', 'PaddleOCR', 'Tesseract',
    'MLflow', 'Docker', 'Kubernetes', 'FastAPI',
    'Computer Vision', 'Object Detection', 'OCR', 'NLP',
    'Agentic AI', 'Multi-agent Systems', 'Google ADK',
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a free AI audit from Buteforce?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 30-minute session where we map exactly which parts of your business AI can automate right now. You get specific workflows ranked by impact, exact tools and integrations for your stack, real time and cost estimates, and an honest fit assessment — whether or not you work with us.',
      },
    },
    {
      '@type': 'Question',
      name: 'What AI technologies does Buteforce work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Buteforce works across the full AI stack: PyTorch and TensorFlow for model training, YOLOv8 and custom YOLO architectures for computer vision, LangChain and LangGraph for agentic AI, Claude API and OpenAI for LLM integration, n8n and Trigger.dev for workflow orchestration, RAG pipelines with vector databases (Pinecone, Weaviate, pgvector), Mistral and Hugging Face for open-source models, PaddleOCR and Google Cloud Vision for document AI, MLflow and Docker for MLOps, and FastAPI for production API layers.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does Buteforce take to build a custom AI system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A focused automation workflow ships in 2–3 weeks. A custom-trained computer vision system takes 4–6 weeks. A full RAG pipeline or multi-agent system typically takes 3–5 weeks. We give you a specific date after one conversation about your problem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who owns the code and models after the project?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You own everything. All code, trained models, vector stores, and infrastructure belong to you. No platform lock-in, no ongoing fees to Buteforce.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Buteforce integrate AI into existing systems?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We have integrated with Salesforce, HubSpot, SAP, various ERPs, Gmail, Google Workspace, Telegram, WhatsApp Business, Shopify, and most systems with an API or webhook. If your system can receive data, we can send it.',
      },
    },
  ],
}

export default function LpAuditPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(landingPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Nav />
      <main>
        <LpHero />
        <LpCostSection />
        <LpAuditGives />
        <LpCapabilities />
        <LpCaseStudies />
        <LpCompare />
        <LpProcess />
        <LpFAQ />
        <LpTwoPaths />
        <LpPrimaryCtaBlock />
      </main>
      <Footer />
    </>
  )
}
