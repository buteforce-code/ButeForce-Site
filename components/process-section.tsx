'use client'

import { useEffect, useRef, useState } from 'react'
import { PROCESS_STEPS } from '@/lib/data'

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const colors = {
    border: 'rgb(var(--color-surface-border))',
    off: 'rgb(var(--color-surface-off))',
    ink: 'rgb(var(--color-ink))',
    yellow: 'rgb(var(--color-yellow))',
    yellowDim: 'rgb(var(--color-yellow-dim))',
  }

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    stepRefs.current.forEach((el, i) => {
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveStep(i)
        },
        { threshold: 0.5, rootMargin: '-20% 0px -20% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  // Geometric illustrations per step — SVG-based, brand-consistent
  const illustrations = [
    // 01 Understand — magnifying glass / search lines
    <svg key="understand" viewBox="0 0 200 200" fill="none" className="w-full h-full">
      <circle cx="90" cy="90" r="50" stroke={colors.border} strokeWidth="1.5"/>
      <circle cx="90" cy="90" r="35" stroke={colors.border} strokeWidth="1"/>
      <line x1="130" y1="130" x2="165" y2="165" stroke={colors.yellow} strokeWidth="3" strokeLinecap="round"/>
      <line x1="70" y1="90" x2="110" y2="90" stroke={colors.ink} strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="90" y1="70" x2="90" y2="110" stroke={colors.ink} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="90" cy="90" r="4" fill={colors.yellow}/>
    </svg>,
    // 02 Architect — grid / nodes
    <svg key="architect" viewBox="0 0 200 200" fill="none" className="w-full h-full">
      {[40,100,160].map(x => [40,100,160].map(y => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r="5" fill={x === 100 && y === 100 ? colors.yellow : colors.border} stroke={colors.border} strokeWidth="1"/>
      )))}
      <line x1="40" y1="40" x2="100" y2="100" stroke={colors.border} strokeWidth="1" strokeDasharray="4 3"/>
      <line x1="160" y1="40" x2="100" y2="100" stroke={colors.border} strokeWidth="1" strokeDasharray="4 3"/>
      <line x1="100" y1="100" x2="40" y2="160" stroke={colors.yellow} strokeWidth="1.5"/>
      <line x1="100" y1="100" x2="160" y2="160" stroke={colors.yellow} strokeWidth="1.5"/>
      <line x1="100" y1="100" x2="100" y2="40" stroke={colors.ink} strokeWidth="1.5"/>
    </svg>,
    // 03 Build — layered blocks
    <svg key="build" viewBox="0 0 200 200" fill="none" className="w-full h-full">
      <rect x="50" y="130" width="100" height="30" rx="2" fill={colors.off} stroke={colors.border} strokeWidth="1"/>
      <rect x="55" y="105" width="90" height="28" rx="2" fill={colors.off} stroke={colors.border} strokeWidth="1"/>
      <rect x="60" y="80" width="80" height="28" rx="2" fill={colors.off} stroke={colors.border} strokeWidth="1"/>
      <rect x="65" y="55" width="70" height="28" rx="2" fill={colors.yellow} stroke={colors.yellowDim} strokeWidth="1"/>
      <line x1="100" y1="30" x2="100" y2="52" stroke={colors.ink} strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="100" cy="26" r="4" fill={colors.ink}/>
    </svg>,
    // 04 Ship — arrow / launch
    <svg key="ship" viewBox="0 0 200 200" fill="none" className="w-full h-full">
      <path d="M40 160 L100 40 L160 160" stroke={colors.border} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M65 120 L135 120" stroke={colors.border} strokeWidth="1" strokeDasharray="4 3"/>
      <circle cx="100" cy="40" r="6" fill={colors.yellow} stroke={colors.yellowDim} strokeWidth="1.5"/>
      <path d="M100 70 L100 140" stroke={colors.ink} strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M85 125 L100 140 L115 125" stroke={colors.ink} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
  ]

  return (
    <section ref={sectionRef} className="py-24 md:py-32 bg-surface">
      <div className="max-w-site mx-auto px-6 lg:px-10">

        <div className="mb-16">
          <p className="section-label mb-4">How We Build</p>
          <h2 className="text-display-lg font-display font-extrabold text-ink">
            The process
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left — sticky illustration + step indicator */}
          <div className="hidden lg:block">
            <div className="sticky top-32">

              {/* Illustration */}
              <div className="w-56 h-56 mb-10 transition-all duration-500">
                {illustrations[activeStep]}
              </div>

              {/* Step progress */}
              <div className="flex flex-col gap-3">
                {PROCESS_STEPS.map((step, i) => (
                  <div
                    key={step.num}
                    className={`flex items-center gap-4 transition-all duration-300 cursor-pointer`}
                    onClick={() => {
                      stepRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
                    }}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                      i === activeStep
                        ? 'border-yellow bg-yellow'
                        : i < activeStep
                        ? 'border-ink bg-ink'
                        : 'border-surface-border bg-transparent'
                    }`}>
                      {i < activeStep && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <span className={`font-mono text-xs tracking-widest uppercase transition-colors duration-300 ${
                      i === activeStep ? 'text-ink' : 'text-ink-faint'
                    }`}>
                      {step.num} / {step.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — scrolling steps */}
          <div className="flex flex-col gap-0">
            {PROCESS_STEPS.map((step, i) => (
              <div
                key={step.num}
                ref={el => { stepRefs.current[i] = el }}
                className={`py-12 border-b border-surface-border last:border-0 transition-all duration-500 ${
                  i === activeStep ? 'opacity-100' : 'opacity-30'
                }`}
              >
                {/* Mobile illustration */}
                <div className="lg:hidden w-20 h-20 mb-6">
                  {illustrations[i]}
                </div>

                <p className="font-mono text-xs tracking-widest uppercase text-yellow-dim mb-4">
                  {step.num}
                </p>

                <h3 className="font-display font-bold text-display-sm text-ink mb-4">
                  {step.title}
                </h3>

                <p className="font-body text-ink-muted leading-relaxed mb-4">
                  {step.description}
                </p>

                <p className="font-body text-sm text-ink-faint leading-relaxed">
                  {step.detail}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
