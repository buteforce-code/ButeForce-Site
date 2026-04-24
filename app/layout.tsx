import type { Metadata, Viewport } from 'next'
import { Syne, Outfit, DM_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'

import './globals.css'

const themeScript = `
  (() => {
    try {
      const storageKey = 'buteforce-theme'
      const storedTheme = window.localStorage.getItem(storageKey)
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      const theme = storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : systemTheme
      const root = document.documentElement
      root.classList.toggle('dark', theme === 'dark')
      root.style.colorScheme = theme
    } catch {}
  })()
`

// ── FONTS ──────────────────────────────────────────────────
const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-outfit',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

// ── METADATA ───────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://buteforce.com'),
  title: {
    default: 'Buteforce — AI Automation & Computer Vision',
    template: '%s | Buteforce',
  },
  description:
    'We build AI automation systems, computer vision pipelines, and intelligent agents for businesses that are done doing things manually. Real systems. Real results.',
  authors: [{ name: 'Buteforce', url: 'https://buteforce.com' }],
  creator: 'Buteforce',
  publisher: 'Buteforce',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://buteforce.com',
    siteName: 'Buteforce',
    title: 'Buteforce — AI Automation & Computer Vision',
    description:
      'We build AI automation systems, computer vision pipelines, and intelligent agents. Real systems, shipped fast.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Buteforce — AI Automation & Computer Vision',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Buteforce — AI Automation & Computer Vision',
    description: 'We build AI automation systems, computer vision, and intelligent agents.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/buteforce-mark.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/buteforce-mark.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/buteforce-mark.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

// ── JSON-LD SCHEMAS ────────────────────────────────────────
const organizationSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'ProfessionalService'],
      '@id': 'https://buteforce.com/#org',
      name: 'Buteforce',
      alternateName: 'Buteforce AI',
      url: 'https://buteforce.com',
      slogan: 'Precision AI Systems',
      logo: {
        '@type': 'ImageObject',
        url: 'https://buteforce.com/buteforce-wordmark.svg',
        width: 200,
        height: 40,
      },
      email: 'admin@buteforce.com',
      description:
        'Buteforce builds production-grade AI automation systems and computer vision pipelines for businesses. No consulting. No pilot projects. Working systems shipped in 2–8 weeks.',
      foundingDate: '2023',
      areaServed: ['US', 'GB', 'AU', 'AE', 'Worldwide'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN',
      },
      founder: {
        '@type': 'Person',
        '@id': 'https://buteforce.com/#founder',
        name: 'Dhyaneshwaran',
        alternateName: 'Dhyankarthik',
        jobTitle: 'Founder & AI Architect',
        url: 'https://www.linkedin.com/in/dhyankarthik/',
        sameAs: [
          'https://www.linkedin.com/in/dhyankarthik/',
          'https://www.upwork.com/freelancers/~010243837662b0c0c1',
        ],
        worksFor: { '@id': 'https://buteforce.com/#org' },
        knowsAbout: [
          'AI Automation', 'Computer Vision', 'Machine Learning',
          'YOLOv8', 'PyTorch', 'n8n', 'Claude API', 'Google ADK',
          'Mistral 7B', 'PaddleOCR', 'Document AI', 'AI Agents',
        ],
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI Systems Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://buteforce.com/services#ai-automation',
              name: 'AI Workflow Automation',
              description: 'End-to-end automation pipelines using n8n, Python, and Claude API. Eliminates manual operations. Proven: 80% average time saved.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://buteforce.com/services#computer-vision',
              name: 'Computer Vision Systems',
              description: 'Custom YOLOv8 models for manufacturing QC, sports analytics, and visual inspection. Proven: 99.2% accuracy at 120 items/min.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://buteforce.com/services#ai-agents',
              name: 'AI Agents',
              description: 'Autonomous multi-agent systems with human-in-the-loop oversight. Built on Claude API and Google ADK. Proven: 70% of tasks handled autonomously.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              '@id': 'https://buteforce.com/services#document-ai',
              name: 'Document AI & OCR',
              description: 'Sub-second document extraction pipelines for invoices, contracts, and forms using Mistral 7B and Google Cloud Vision.',
            },
          },
        ],
      },
      sameAs: [
        'https://linkedin.com/company/buteforce',
        'https://github.com/buteforce',
      ],
      knowsAbout: [
        'AI Automation', 'Computer Vision', 'Machine Learning',
        'n8n Workflow Automation', 'Document AI', 'OCR', 'AI Agents',
        'YOLOv8', 'PyTorch', 'Claude API', 'Google ADK', 'Mistral 7B',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://buteforce.com/#website',
      url: 'https://buteforce.com',
      name: 'Buteforce',
      publisher: { '@id': 'https://buteforce.com/#org' },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: 'https://buteforce.com/blog?q={search_term_string}' },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${syne.variable} ${outfit.variable} ${dmMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PZN4P56H');`,
          }}
        />
        {/* End Google Tag Manager */}
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-T3LTVKY35T"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-T3LTVKY35T');
            `,
          }}
        />
      </head>
      <body suppressHydrationWarning className="bg-surface text-ink font-body antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PZN4P56H"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {children}
        <Analytics />
      </body>
    </html>
  )
}
