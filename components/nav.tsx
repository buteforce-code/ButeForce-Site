'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NAV_LINKS } from '@/lib/data'
import { motion, AnimatePresence } from 'framer-motion'
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

  const isHome = pathname === '/'
  const useLightHeader = isHome && !scrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? 'bg-surface/50 backdrop-blur-xl border-b border-surface-border/50 shadow-sm'
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
          <BrandLogo priority className="h-6 md:h-7" theme={useLightHeader ? 'light' : 'adaptive'} />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              {link.highlight ? (
                <Link
                  href={link.href}
                  className={`font-mono text-xs tracking-widest uppercase transition-colors duration-150 relative group ${
                    useLightHeader ? 'text-yellow hover:text-yellow/80' : 'text-yellow-dim hover:text-yellow'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-current opacity-40 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className={`font-mono text-xs tracking-widest uppercase transition-colors duration-150 ${
                    pathname === link.href
                      ? (useLightHeader ? 'text-white' : 'text-ink')
                      : (useLightHeader ? 'text-white/70 hover:text-white' : 'text-ink-faint hover:text-ink')
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className={`transition-opacity ${useLightHeader ? 'opacity-0 md:opacity-100 group-hover:opacity-100' : 'opacity-100'}`}>
             <ThemeToggle />
          </div>
          <Link href="/contact" className={`text-xs py-2.5 px-5 transition-colors ${useLightHeader ? 'bg-white text-black hover:bg-white/90 rounded-md font-bold tracking-wide' : 'bg-yellow text-black hover:bg-yellow/90 rounded-md font-bold tracking-wide shadow-sm'}`}>
            Start a project
            <span aria-hidden className="ml-1 opacity-70">→</span>
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 transition-all duration-200 ${useLightHeader ? 'bg-white' : 'bg-ink'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 transition-all duration-200 ${useLightHeader ? 'bg-white' : 'bg-ink'} ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 transition-all duration-200 ${useLightHeader ? 'bg-white' : 'bg-ink'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu - Staggered Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-surface border-t border-surface-border origin-top"
          >
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                    delayChildren: 0.1,
                  },
                },
              }}
              className="px-6 py-6 flex flex-col gap-5"
            >
              <motion.div variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
                <ThemeToggle showLabel className="w-fit" />
              </motion.div>
              {NAV_LINKS.map(link => (
                <motion.div key={link.href} variants={{ hidden: { opacity: 0, y: -10 }, visible: { opacity: 1, y: 0 } }}>
                  <Link
                    href={link.href}
                    className={`font-mono text-sm tracking-widest uppercase ${
                      link.highlight
                        ? 'text-yellow-dim hover:text-yellow'
                        : 'text-ink-muted hover:text-ink'
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } }}>
                <Link
                  href="/contact"
                  className="btn-primary text-xs w-fit mt-2 inline-block transition-transform hover:scale-105 active:scale-95"
                  onClick={() => setMenuOpen(false)}
                >
                  Start a project →
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
