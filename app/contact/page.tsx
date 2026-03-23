import type { Metadata } from 'next'
import Nav from '@/components/nav'
import Footer from '@/components/footer'
import ContactForm from './contact-form'

export const metadata: Metadata = {
  title: 'Start a Project',
  description:
    'Tell us what you want to automate. We respond within 24 hours.',
  alternates: { canonical: 'https://buteforce.com/contact' },
}

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="pt-32 pb-24 min-h-screen bg-surface">
        <div className="max-w-site mx-auto px-6 lg:px-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left — context */}
            <div>
              <p className="section-label mb-6">Start a project</p>
              <h1 className="text-display-lg font-display font-bold text-ink mb-6 heading-relaxed max-w-[13ch]">
                Tell us the problem.
                <br />
                <span className="text-ink-faint">We'll handle the rest.</span>
              </h1>

              <p className="font-body text-ink-muted leading-relaxed mb-10 max-w-md">
                No sales call. No 20-question form. Just tell us what process is costing you the most
                time or money right now, and we'll come back with a direct answer.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow" />
                  <p className="font-mono text-xs tracking-wide uppercase text-ink-muted">
                    Response within 24 hours
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow" />
                  <p className="font-mono text-xs tracking-wide uppercase text-ink-muted">
                    No commitment required
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow" />
                  <p className="font-mono text-xs tracking-wide uppercase text-ink-muted">
                    Direct answer, not a deck
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-surface-border">
                <p className="font-mono text-[10px] tracking-widest uppercase text-ink-faint mb-2">
                  Or email directly
                </p>
                <a
                  href="mailto:admin@buteforce.com"
                  className="font-body text-ink hover:text-yellow-dim transition-colors underline underline-offset-4 decoration-surface-border hover:decoration-yellow"
                >
                  admin@buteforce.com
                </a>
              </div>
            </div>

            {/* Right — form */}
            <ContactForm />

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

