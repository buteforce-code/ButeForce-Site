'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '@/lib/data'
import BrandLogo from '@/components/brand-logo'
import ThemeToggle from '@/components/theme-toggle'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface/95 backdrop-blur-md border-b border-surface-border shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-site mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity"
          aria-label="Buteforce home"
        >
          <BrandLogo priority className="h-6 md:h-7" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-mono text-xs tracking-widest uppercase transition-colors duration-150 ${
                  pathname === link.href
                    ? 'text-ink'
                    : 'text-ink-faint hover:text-ink'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Link href="/contact" className="btn-primary text-xs py-2.5 px-5">
            Start a project
            <span aria-hidden>→</span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-ink transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-ink transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-ink transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="bg-surface border-t border-surface-border px-6 py-6 flex flex-col gap-5">
          <ThemeToggle showLabel className="w-fit" />
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-sm tracking-widest uppercase text-ink-muted hover:text-ink"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary text-xs w-fit mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Start a project →
          </Link>
        </div>
      </div>
    </header>
  )
}
