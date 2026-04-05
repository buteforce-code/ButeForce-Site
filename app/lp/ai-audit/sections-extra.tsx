'use client'

import { useState } from 'react'
import { BlurText, FadeContent, TiltCard, StaggerContainer } from '@/components/animations'
import { CAPABILITIES_DATA, TECH_PILLS, CASE_STUDIES, COMPARISONS, PROCESS_STEPS, FAQ_DATA } from './content'

export function LpCapabilities() {
  const [openDom, setOpenDom] = useState<string | null>(null)
  
  return (
    <section id="capabilities" className="py-28 md:py-36 bg-surface border-t border-surface-border">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <FadeContent className="mb-12">
          <p className="section-label mb-4">/ What we build</p>
          <BlurText
            text="The full stack. All of it."
            as="h2"
            className="text-display-md font-display font-bold text-ink heading-relaxed mb-6 max-w-[20ch]"
            delay={70}
          />
          <p className="font-body text-ink-muted leading-relaxed max-w-2xl text-base">
            Every AI problem falls into a category. Here is every category we build in — the specific capabilities, the technologies we use, and the outcomes we've shipped. Click any domain to expand it.
          </p>
        </FadeContent>

        <div className="flex flex-col gap-px bg-surface-border mb-16 rounded-2xl overflow-hidden">
          {CAPABILITIES_DATA.map((dom) => {
            const isOpen = openDom === dom.id
            return (
              <div key={dom.id} className="bg-surface-warm relative group">
                <button 
                  onClick={() => setOpenDom(isOpen ? null : dom.id)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-4 border-l-4 border-transparent hover:bg-surface transition-colors focus:outline-none"
                  style={{ borderLeftColor: isOpen ? 'var(--color-yellow-dim)' : undefined }}
                  aria-expanded={isOpen}
                >
                  <div>
                    <h3 className="font-display font-bold text-xl text-ink leading-snug group-hover:text-yellow-dim transition-colors">{dom.title}</h3>
                    <p className="font-mono text-[10px] tracking-widest uppercase text-ink-faint mt-2">{dom.sub}</p>
                  </div>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full border border-surface-border flex items-center justify-center text-ink-muted transition-transform duration-300 ${isOpen ? 'rotate-45 text-yellow-dim border-yellow-dim' : ''}`} aria-hidden>
                    +
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-surface-border border-t border-surface-border">
                    {dom.items.map((item, i) => (
                      <div key={i} className="bg-surface p-6 md:p-8 flex flex-col">
                        <h4 className="font-display font-bold text-base text-ink mb-2">{item.name}</h4>
                        <p className="font-body text-sm text-ink-muted leading-relaxed mb-6 flex-1">{item.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map(tag => (
                            <span key={tag} className="font-mono text-[9px] tracking-wide uppercase px-2.5 py-1 border border-surface-border rounded-full text-ink-faint bg-surface-warm">{tag}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
        
        <FadeContent delay={0.2}>
          <p className="font-mono text-[10px] tracking-widest uppercase text-ink-faint mb-6">Every technology we work with</p>
          <div className="flex flex-wrap gap-2">
            {TECH_PILLS.map((pill) => (
              <span 
                key={pill.name} 
                className={`font-mono text-[10px] tracking-widest uppercase px-3.5 py-1.5 border rounded-full transition-colors duration-200 cursor-default
                  ${pill.isHigh ? 'border-surface-border text-ink bg-white/5 hover:border-yellow-dim hover:text-yellow-dim' : 'border-surface-border/50 text-ink-faint hover:border-yellow-dim hover:text-yellow-dim'}`}
              >
                {pill.name}
              </span>
            ))}
          </div>
        </FadeContent>
      </div>
    </section>
  )
}

export function LpCaseStudies() {
  return (
    <section className="py-24 md:py-32 bg-surface border-t border-surface-border">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <FadeContent className="mb-12">
          <p className="section-label mb-4">/ What we've shipped</p>
          <BlurText
            text="Real systems. Specific results."
            as="h2"
            className="text-display-md font-display font-bold text-ink heading-relaxed max-w-[20ch]"
            delay={70}
          />
        </FadeContent>

        <StaggerContainer className="flex flex-col bg-surface-warm border border-surface-border rounded-2xl overflow-hidden divide-y divide-surface-border" staggerDelay={0.15}>
          {CASE_STUDIES.map((c, i) => (
            <div key={i} className="p-8 lg:p-12 hover:bg-surface/40 transition-colors duration-300">
              <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start">
                <div className="flex-1 w-full">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-ink-faint mb-4">{c.meta}</p>
                  <h3 className="font-display font-bold text-2xl text-ink leading-snug mb-4">{c.title}</h3>
                  <p className="font-body text-sm text-ink-muted leading-relaxed mb-6 max-w-2xl">{c.problem}</p>
                  <div className="flex flex-wrap gap-2">
                    {c.stack.map(tag => (
                      <span key={tag} className="font-mono text-[9px] tracking-wide uppercase px-3 py-1.5 border border-surface-border rounded-full text-ink-faint bg-surface opacity-80">{tag}</span>
                    ))}
                  </div>
                </div>
                
                <div className="w-full lg:w-[340px] flex flex-col gap-3 flex-shrink-0">
                  {c.results.map((r, ri) => (
                    <div key={ri} className="bg-surface px-6 py-4 border border-surface-border rounded-lg flex items-center gap-5">
                      <span className="font-display font-bold text-xl text-yellow-dim w-16 flex-shrink-0 text-center">{r.num}</span>
                      <span className="w-px h-8 bg-surface-border flex-shrink-0"></span>
                      <span className="font-body text-xs text-ink-muted leading-relaxed">{r.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
          
          <div className="bg-surface-warm/50 hover:bg-surface/80 transition-colors group">
            <a href="/work" className="block w-full text-center py-7 font-mono text-[10px] tracking-widest uppercase text-ink-faint group-hover:text-yellow-dim transition-colors">
              View all 10 case studies <span aria-hidden>→</span>
            </a>
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}

export function LpCompare() {
  return (
    <section className="py-24 md:py-32 bg-surface border-t border-surface-border">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <FadeContent className="mb-12">
          <p className="section-label mb-4">/ The honest comparison</p>
          <BlurText
            text="Why it matters who builds it."
            as="h2"
            className="text-display-md font-display font-bold text-ink heading-relaxed max-w-[20ch]"
            delay={70}
          />
        </FadeContent>

        <FadeContent delay={0.2} className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr>
                <th className="font-mono text-[10px] tracking-widest uppercase text-ink-faint pb-6 border-b border-surface-border w-[40%]">The Question</th>
                <th className="font-mono text-[10px] tracking-widest uppercase text-yellow-dim pb-6 border-b border-surface-border w-[30%]">Buteforce</th>
                <th className="font-mono text-[10px] tracking-widest uppercase text-ink-faint pb-6 border-b border-surface-border w-[30%]">Others</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISONS.map((row, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors group">
                  <td className="py-6 border-b border-surface-border/50 font-body text-sm text-ink-muted pr-4">{row.q}</td>
                  <td className="py-6 border-b border-surface-border/50 font-body font-medium text-sm text-ink pr-4 group-hover:text-yellow-dim transition-colors">
                    <span className="text-yellow-dim mr-2 opacity-80 select-none">✓</span> {row.us}
                  </td>
                  <td className="py-6 border-b border-surface-border/50 font-body text-sm text-ink-faint">
                    <span className="text-ink-faint opacity-50 mr-2 select-none">–</span> {row.them}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </FadeContent>
      </div>
    </section>
  )
}

export function LpProcess() {
  return (
    <section className="py-24 md:py-32 bg-surface text-ink border-t border-surface-border">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <FadeContent className="mb-12">
          <p className="section-label mb-4">/ How it works</p>
          <BlurText
            text="No surprises. No disappearing acts."
            as="h2"
            className="text-display-md font-display font-bold text-ink heading-relaxed max-w-[20ch]"
            delay={70}
          />
        </FadeContent>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-surface-border rounded-2xl overflow-hidden" staggerDelay={0.15}>
          {PROCESS_STEPS.map((step) => (
            <div key={step.n} className="bg-surface-warm p-8 lg:p-10 flex flex-col items-start hover:bg-surface transition-colors duration-300">
              <span className="font-mono text-3xl font-light text-ink-faint mb-6 select-none">{step.n}</span>
              <h3 className="font-display font-bold text-lg text-ink mb-3">{step.t}</h3>
              <p className="font-body text-sm text-ink-muted leading-relaxed">{step.b}</p>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

export function LpFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  return (
    <section className="py-24 md:py-32 bg-surface border-t border-surface-border">
      <div className="max-w-site mx-auto px-6 lg:px-10 max-w-4xl">
        <FadeContent className="mb-12 text-center md:text-left">
          <p className="section-label mb-4">/ What people ask</p>
          <BlurText
            text="The real questions."
            as="h2"
            className="text-display-md font-display font-bold text-ink heading-relaxed mb-6"
            delay={70}
          />
        </FadeContent>

        <div className="flex flex-col">
          {FAQ_DATA.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i} className="border-b border-surface-border last:border-0 group">
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full text-left py-6 flex justify-between items-center gap-6 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-lg text-ink group-hover:text-yellow-dim transition-colors">
                    {faq.q}
                  </span>
                  <span className={`w-8 h-8 rounded-full border border-surface-border flex items-center justify-center flex-shrink-0 text-ink text-sm transition-transform duration-300 ${isOpen ? 'rotate-45 text-yellow-dim border-yellow-dim' : ''}`}>
                    +
                  </span>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-400 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
                >
                  <p className="font-body text-sm text-ink-muted leading-relaxed pr-8">
                    {faq.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
