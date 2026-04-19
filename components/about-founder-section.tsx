'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FOUNDER } from '@/lib/data'
import { FadeContent } from '@/components/animations'

export default function AboutFounderSection() {
  return (
    <section className="py-24 md:py-36 bg-black border-y border-surface-border relative overflow-hidden" id="about">
      {/* Background glow */}
      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none opacity-20 mix-blend-screen"
        style={{
          background: 'radial-gradient(ellipse at 20% 80%, rgba(255,252,1,0.2) 0%, transparent 60%)',
        }}
        aria-hidden
      />

      <div className="relative max-w-site mx-auto px-6 lg:px-10 z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Photo Column */}
          <div className="md:col-span-5 lg:col-span-4 relative flex justify-center md:justify-end">
            <FadeContent delay={0.1}>
              <div className="relative w-64 h-64 md:w-full md:max-w-sm aspect-square rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src={FOUNDER.image}
                  alt={FOUNDER.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 384px"
                />
              </div>
            </FadeContent>
          </div>

          {/* Text Column */}
          <div className="md:col-span-7 lg:col-span-8">
            <FadeContent delay={0.2} yOffset={20}>
              <p className="font-mono text-xs tracking-widest uppercase text-yellow mb-4">
                / Who builds your systems
              </p>
              <h2 className="text-display-lg font-display font-bold text-white mb-6">
                Hi, I'm Dhyaneshwaran.
              </h2>
            </FadeContent>

            <FadeContent delay={0.3} yOffset={20}>
              <p className="font-body text-lg text-white/80 leading-relaxed mb-8 max-w-2xl">
                {FOUNDER.bio}
              </p>
            </FadeContent>

            <FadeContent delay={0.4} yOffset={20}>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex flex-col">
                  <span className="font-mono text-[10px] tracking-wide uppercase text-white/40 mb-1">Company HQ</span>
                  <span className="font-body text-sm font-medium text-white">{FOUNDER.location}</span>
                </div>
                
                <div className="h-8 w-px bg-white/10" />

                <div className="flex flex-col">
                  <span className="font-mono text-[10px] tracking-wide uppercase text-white/40 mb-1">Founder</span>
                  <div className="flex items-center gap-3">
                    <a 
                      href={FOUNDER.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-body text-sm font-medium text-yellow hover:text-white transition-colors underline underline-offset-4"
                    >
                      LinkedIn
                    </a>
                    <a 
                      href={FOUNDER.upwork} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-body text-sm font-medium text-yellow hover:text-white transition-colors underline underline-offset-4"
                    >
                      Upwork
                    </a>
                  </div>
                </div>
              </div>
            </FadeContent>
          </div>

        </div>
      </div>
    </section>
  )
}
