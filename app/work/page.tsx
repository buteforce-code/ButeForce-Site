import type { Metadata } from 'next'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import WorkGrid from './work-grid'

export const metadata: Metadata = {
  title: 'Our Work — 10 Production AI Systems',
  description:
    'Computer vision, AI agents, automation workflows, and document AI — 10 real systems we built and shipped.',
  alternates: { canonical: 'https://buteforce.com/work' },
}

export default function WorkPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 bg-surface min-h-screen">
        <div className="max-w-site mx-auto px-6 lg:px-10">

          <div className="mb-16">
            <p className="section-label mb-4">Our Work</p>
            <h1 className="text-display-lg font-display font-extrabold text-ink mb-6 heading-relaxed max-w-[12ch]">
              10 systems built
              <br />
              <span className="text-ink-faint">and shipped.</span>
            </h1>
            <p className="font-body text-ink-muted max-w-lg leading-relaxed">
              Every project here is in production. Real clients, real metrics, real code.
            </p>
          </div>

          <WorkGrid />

        </div>
      </main>
      <Footer />
    </>
  )
}
