import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ── BRAND PALETTE ─────────────────────────
        white: 'rgb(255 255 255 / <alpha-value>)',
        yellow: {
          DEFAULT: 'rgb(var(--color-yellow) / <alpha-value>)',
          dim:     'rgb(var(--color-yellow-dim) / <alpha-value>)',
          subtle:  'rgb(var(--color-yellow-subtle) / <alpha-value>)',
        },
        ink: {
          DEFAULT: 'rgb(var(--color-ink) / <alpha-value>)',
          soft:    'rgb(var(--color-ink-soft) / <alpha-value>)',
          muted:   'rgb(var(--color-ink-muted) / <alpha-value>)',
          faint:   'rgb(var(--color-ink-faint) / <alpha-value>)',
        },
        surface: {
          DEFAULT: 'rgb(var(--color-surface) / <alpha-value>)',
          warm:    'rgb(var(--color-surface-warm) / <alpha-value>)',
          off:     'rgb(var(--color-surface-off) / <alpha-value>)',
          border:  'rgb(var(--color-surface-border) / <alpha-value>)',
          dark:    'rgb(var(--color-surface-dark) / <alpha-value>)',
        },
      },
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        body:    ['var(--font-outfit)', 'sans-serif'],
        mono:    ['var(--font-dm-mono)', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(64px, 8vw, 100px)', { lineHeight: '0.97', letterSpacing: '-0.032em' }],
        'display-lg': ['clamp(44px, 5.5vw, 72px)',  { lineHeight: '1.03',  letterSpacing: '-0.028em' }],
        'display-md': ['clamp(28px, 3.5vw, 48px)',  { lineHeight: '1.12',  letterSpacing: '-0.022em' }],
        'display-sm': ['clamp(22px, 2.5vw, 30px)',  { lineHeight: '1.22',  letterSpacing: '-0.018em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '100': '25rem',
        '120': '30rem',
      },
      maxWidth: {
        'site': '1200px',
        'prose-wide': '780px',
      },
      borderRadius: {
        'card': '12px',
        'btn': '6px',
      },
      animation: {
        'marquee':  'marquee 30s linear infinite',
        'marquee2': 'marquee2 30s linear infinite',
        'fade-up':  'fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marquee2: {
          '0%':   { transform: 'translateX(50%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
