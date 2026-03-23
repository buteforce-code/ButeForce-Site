'use client'

import { useEffect, useState } from 'react'
import clsx from 'clsx'

type Theme = 'light' | 'dark'

type ThemeToggleProps = {
  className?: string
  showLabel?: boolean
}

const STORAGE_KEY = 'buteforce-theme'

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.toggle('dark', theme === 'dark')
  root.style.colorScheme = theme
  window.localStorage.setItem(STORAGE_KEY, theme)
}

export default function ThemeToggle({
  className,
  showLabel = false,
}: ThemeToggleProps) {
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const initialTheme = document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light'
    setTheme(initialTheme)
    setMounted(true)
  }, [])

  const nextTheme = theme === 'dark' ? 'light' : 'dark'

  return (
    <button
      type="button"
      aria-label={`Switch to ${nextTheme} mode`}
      title={`Switch to ${nextTheme} mode`}
      onClick={() => {
        const updatedTheme = nextTheme
        setTheme(updatedTheme)
        applyTheme(updatedTheme)
      }}
      className={clsx(
        'inline-flex items-center justify-center rounded-full border border-surface-border bg-surface text-ink-muted transition-all duration-150 hover:border-ink/20 hover:text-ink active:scale-[0.98]',
        showLabel ? 'gap-2 px-3 py-2' : 'h-10 w-10',
        className
      )}
    >
      <span className="sr-only">{mounted ? `Current theme: ${theme}` : 'Toggle theme'}</span>
      {theme === 'dark' ? (
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden>
          <path d="M10 3V5.5M10 14.5V17M15 10H17M3 10H5.5M14.95 5.05L13.2 6.8M6.8 13.2L5.05 14.95M14.95 14.95L13.2 13.2M6.8 6.8L5.05 5.05" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <circle cx="10" cy="10" r="3.75" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ) : (
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden>
          <path d="M14.5 12.5A6 6 0 0 1 7.5 5.5a6 6 0 1 0 7 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
      {showLabel && (
        <span className="font-mono text-[10px] tracking-widest uppercase">
          {mounted ? `${theme} mode` : 'theme'}
        </span>
      )}
    </button>
  )
}
