import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free AI Audit for Founders — Buteforce',
  description:
    "In 30 minutes, we'll map exactly which parts of your business AI can automate right now — specific tools, real timelines, no slide decks.",
  robots: { index: false, follow: false },
}

export default function LpLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
