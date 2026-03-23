'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function Hero() {
  const gridRef = useRef<HTMLCanvasElement>(null)

  // Subtle animated dot grid — geometric, not flashy
  useEffect(() => {
    const canvas = gridRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      canvas.width  = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    let frame = 0
    let raf: number

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const ink = getComputedStyle(document.documentElement)
        .getPropertyValue('--color-ink')
        .trim()
        .replace(/\s+/g, ', ')
      const spacing = 40
      const cols = Math.ceil(canvas.width  / spacing)
      const rows = Math.ceil(canvas.height / spacing)

      for (let c = 0; c <= cols; c++) {
        for (let r = 0; r <= rows; r++) {
          const x = c * spacing
          const y = r * spacing
          // gentle pulse based on distance from center + time
          const dx = x - canvas.width  / 2
          const dy = y - canvas.height / 2
          const dist = Math.sqrt(dx * dx + dy * dy)
          const pulse = Math.sin(dist / 80 - frame / 60) * 0.5 + 0.5
          const alpha = 0.04 + pulse * 0.06
          ctx.fillStyle = `rgba(${ink},${alpha})`
          ctx.beginPath()
          ctx.arc(x, y, 1.2, 0, Math.PI * 2)
          ctx.fill()
        }
      }
      frame++
      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 pt-32 overflow-hidden bg-surface">

      {/* Animated dot grid background */}
      <canvas
        ref={gridRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden
      />

      {/* Single yellow glow accent — top right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 80% 20%, rgba(255,252,1,0.12) 0%, transparent 60%)',
        }}
        aria-hidden
      />

      <div className="relative max-w-site mx-auto px-6 lg:px-10 w-full">

        {/* Section label */}
        <p className="section-label mb-8">AI Automation & Computer Vision</p>

        {/* The headline — two lines, psychologically crafted */}
        <h1 className="text-display-xl font-display font-extrabold text-ink leading-none mb-8 max-w-5xl">
          We turn AI
          <br />
          <span className="relative inline-block">
            into operations
            {/* Yellow underline accent */}
            <span
              className="absolute bottom-0 left-0 right-0 h-[4px] bg-yellow"
              style={{ bottom: '4px' }}
              aria-hidden
            />
          </span>
          <span className="text-yellow">.</span>
        </h1>

        {/* Sub — what we actually do, no fluff */}
        <p className="font-body text-lg md:text-xl text-ink-muted max-w-xl leading-relaxed mb-12">
          Custom automation systems, computer vision pipelines, and intelligent agents —
          built for businesses that are done doing things manually.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-20">
          <Link href="/work" className="btn-primary">
            See our work →
          </Link>
          <Link href="/contact" className="btn-ghost">
            Start a project
          </Link>
        </div>

        {/* Proof strip — one line, just numbers */}
        <div className="pt-10 border-t border-surface-border grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { v: '10+',  l: 'Production systems shipped' },
            { v: '99.2%', l: 'Vision accuracy' },
            { v: '<1s',  l: 'Document processing' },
            { v: '80%',  l: 'Average time saved' },
          ].map(({ v, l }) => (
            <div key={l}>
              <div className="font-display font-extrabold text-3xl md:text-4xl text-ink tracking-tight">
                {v}
              </div>
              <div className="font-mono text-[11px] tracking-wider uppercase text-ink-faint mt-1">
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
