import Link from 'next/link'
import { NAV_LINKS, SITE } from '@/lib/data'
import BrandLogo from '@/components/brand-logo'

export default function Footer() {
  return (
    <footer className="bg-ink text-white/40 border-t border-white/5">
      <div className="max-w-site mx-auto px-6 lg:px-10 py-16">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-flex items-center" aria-label="Buteforce home">
              <BrandLogo theme="light" className="h-7" />
            </Link>
            <p className="font-body text-sm text-white/30 mt-3 leading-relaxed max-w-[200px]">
              AI automation and computer vision for businesses built to grow.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-[10px] tracking-widest uppercase text-white/20 mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="font-mono text-[10px] tracking-widest uppercase text-white/20 mb-4">
              Services
            </p>
            <ul className="flex flex-col gap-3">
              {['AI Automation', 'Computer Vision', 'AI Agents', 'Document AI'].map(s => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="font-body text-sm text-white/40 hover:text-white transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-mono text-[10px] tracking-widest uppercase text-white/20 mb-4">
              Contact
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-body text-sm text-white/40 hover:text-white transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={SITE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-white/40 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={SITE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-white/40 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="font-mono text-[10px] tracking-widest uppercase text-white/20">
            © {new Date().getFullYear()} Buteforce. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/legal/privacy" className="font-mono text-[10px] tracking-wide uppercase text-white/20 hover:text-white/40 transition-colors">
              Privacy
            </Link>
            <Link href="/legal/terms" className="font-mono text-[10px] tracking-wide uppercase text-white/20 hover:text-white/40 transition-colors">
              Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
