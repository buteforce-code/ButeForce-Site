'use client'

import { useEffect, useRef, useState } from 'react'
import { PAIN_LINES } from '@/lib/data'

export default function PainSection() {
  const [activeIndex, setActiveIndex] = useState(-1)
  const lineRefs = useRef<(HTMLSpanElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    lineRefs.current.forEach((el, i) => {
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveIndex(i)
          }
        },
        { threshold: 0.6, rootMargin: '-10% 0px -10% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <section className="py-24 md:py-36 bg-surface-warm">
      <div className="max-w-site mx-auto px-6 lg:px-10">

        {/* Section label */}
        <p className="section-label mb-16">The Problem</p>

        {/* Pain lines — each fades in as you scroll to it */}
        <div className="flex flex-col gap-6 md:gap-8">
          {PAIN_LINES.map((line, i) => (
            <span
              key={i}
              ref={el => { lineRefs.current[i] = el }}
              className={`block font-display font-bold text-2xl md:text-4xl lg:text-5xl leading-tight transition-all duration-700 cursor-default select-none ${
                i <= activeIndex
                  ? 'text-ink'
                  : 'text-ink/15'
              }`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {line}
            </span>
          ))}
        </div>

        {/* The pivot — after they feel seen */}
        <div
          className={`mt-16 flex flex-col md:flex-row md:items-end gap-6 transition-all duration-700 ${
            activeIndex >= PAIN_LINES.length - 1 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex-1">
            <p className="font-body text-lg text-ink-muted max-w-lg leading-relaxed">
              These aren't new problems. They're just unsolved ones.
              We build the systems that solve them — permanently.
            </p>
          </div>
          <div className="h-px flex-1 bg-surface-border hidden md:block" />
          <p className="font-mono text-xs tracking-widest uppercase text-ink-faint">
            Not advice. Systems.
          </p>
        </div>

      </div>
    </section>
  )
}
