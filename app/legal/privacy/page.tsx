import type { Metadata } from 'next'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  robots: { index: false, follow: false },
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-surface pt-32 pb-24">
        <div className="max-w-2xl mx-auto px-6 lg:px-10">
          <p className="font-mono text-[10px] tracking-widest uppercase text-ink-faint mb-4">Legal</p>
          <h1 className="font-display font-bold text-4xl text-ink mb-10">Privacy Policy</h1>

          <div className="prose prose-neutral dark:prose-invert font-body text-ink-muted leading-relaxed space-y-8">

            <section>
              <h2 className="font-display font-bold text-xl text-ink mb-3">What we collect</h2>
              <p>When you submit the contact form on buteforce.com we collect your name, company name, email address, a description of your automation problem, and your budget range. We do not collect any other personal data.</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-ink mb-3">How we use it</h2>
              <p>We use the information you provide solely to respond to your enquiry. We do not sell, rent, or share your data with third parties for marketing purposes.</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-ink mb-3">Storage</h2>
              <p>Submissions are stored in a Supabase database hosted on AWS (ap-south-1). Email notifications are sent via Resend. Both services process data under their respective privacy policies.</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-ink mb-3">Cookies and analytics</h2>
              <p>We use Google Analytics (GA4) and Google Tag Manager to understand how visitors use this site. These services may set cookies. You can opt out via your browser settings or a browser extension such as uBlock Origin.</p>
            </section>

            <section>
              <h2 className="font-display font-bold text-xl text-ink mb-3">Your rights</h2>
              <p>You may request access to, correction of, or deletion of any personal data we hold about you by emailing <a href="mailto:admin@buteforce.com" className="text-ink underline">admin@buteforce.com</a>.</p>
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
