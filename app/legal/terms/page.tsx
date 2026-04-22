import type { Metadata } from 'next'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Terms of Service',
  robots: { index: false, follow: false },
}

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-surface pt-32 pb-24">
        <div className="max-w-2xl mx-auto px-6 lg:px-10">
          <p className="font-mono text-[10px] tracking-widest uppercase text-ink-faint mb-4">Legal</p>
          <h1 className="font-display font-bold text-4xl text-ink mb-10">Terms of Service</h1>

          <div className="prose prose-neutral dark:prose-invert font-body text-ink-muted leading-relaxed space-y-8">

            <section>
              <h2 className="font-display font-bold text-xl text-ink mb-3">Services</h2>
              <p>Buteforce provides custom AI automation systems, computer vision pipelines, AI agents, and document AI solutions. All work is scoped, priced, and delivered under a separate project agreement signed before work begins.</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-ink mb-3">Website use</h2>
              <p>This website is provided for informational purposes. You may not copy, reproduce, or redistribute any content from buteforce.com without written permission.</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-ink mb-3">Intellectual property</h2>
              <p>All intellectual property rights in systems delivered under a client agreement transfer to the client upon full payment, as specified in that agreement. Buteforce retains the right to reference delivered work as a portfolio case study unless a separate NDA prohibits this.</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-ink mb-3">Limitation of liability</h2>
              <p>Buteforce is not liable for indirect, incidental, or consequential damages arising from the use of any delivered system. Liability is limited to the total fees paid for the relevant project.</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-ink mb-3">Governing law</h2>
              <p>These terms are governed by the laws of India. Any disputes will be resolved in the courts of Chennai, Tamil Nadu.</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-ink mb-3">Contact</h2>
              <p>Buteforce · Chennai, Tamil Nadu, India · <a href="mailto:admin@buteforce.com" className="text-ink underline">admin@buteforce.com</a></p>
            </section>

            <p className="font-mono text-[10px] text-ink-faint">Last updated: April 2026</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
