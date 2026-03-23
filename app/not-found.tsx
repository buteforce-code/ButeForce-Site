import Link from 'next/link'
import Nav from '@/components/nav'
import Footer from '@/components/footer'

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="min-h-screen bg-surface flex items-center justify-center pt-16">
        <div className="text-center px-6">
          <p className="font-mono text-xs tracking-widest uppercase text-ink-faint mb-6">
            404
          </p>
          <h1 className="font-display font-extrabold text-display-lg text-ink mb-6 leading-tight">
            Wrong turn.
          </h1>
          <p className="font-body text-ink-muted mb-10 max-w-sm mx-auto leading-relaxed">
            This page doesn't exist. The things that do exist are below.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link href="/" className="btn-primary">Back to home →</Link>
            <Link href="/work" className="btn-outline">See our work</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
