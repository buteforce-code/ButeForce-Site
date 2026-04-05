import type { Metadata, Viewport } from 'next'
import { Syne, Outfit, DM_Mono } from 'next/font/google'
import Script from 'next/script'
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
  keywords: [
    'AI automation',
    'computer vision',
    'AI agents',
    'n8n automation',
    'document AI',
    'OCR automation',
    'business automation',
    'machine learning solutions',
  ],
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
  alternates: {
    canonical: 'https://buteforce.com',
  },
}

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
}

// ── JSON-LD ORGANIZATION SCHEMA ────────────────────────────
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Buteforce',
  url: 'https://buteforce.com',
  logo: 'https://buteforce.com/buteforce-wordmark.svg',
  email: 'admin@buteforce.com',
  description:
    'AI automation and computer vision company building production-grade systems for businesses.',
  sameAs: [
    'https://linkedin.com/company/buteforce',
    'https://github.com/buteforce',
  ],
  knowsAbout: [
    'AI Automation',
    'Computer Vision',
    'Machine Learning',
    'n8n Workflow Automation',
    'Document AI',
    'OCR',
    'AI Agents',
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
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-T3LTVKY35T`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
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
        {children}
      </body>
    </html>
  )
}
