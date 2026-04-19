'use client'

import Image from 'next/image'
import { FadeContent } from '@/components/animations'

// Placeholder logos - the user will replace these with real assets
const LOGOS = [
  { name: 'Company 1', url: '/images/logos/placeholder-1.svg' },
  { name: 'Company 2', url: '/images/logos/placeholder-2.svg' },
  { name: 'Company 3', url: '/images/logos/placeholder-3.svg' },
  { name: 'Company 4', url: '/images/logos/placeholder-4.svg' },
  { name: 'Company 5', url: '/images/logos/placeholder-5.svg' },
]

export default function LogoProofSection() {
  return (
    <section className="py-12 border-b border-surface-border bg-black/50">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <FadeContent delay={0.1}>
          <p className="text-center font-mono text-[10px] tracking-widest uppercase text-white/40 mb-8">
            Trusted by teams building real systems
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {LOGOS.map((logo, i) => (
              <div key={i} className="relative h-8 w-24 md:h-10 md:w-32 flex items-center justify-center">
                {/* Fallback text until real SVGs are added */}
                <span className="font-display font-medium text-white/60 text-sm md:text-base">
                  {logo.name}
                </span>
                {/* 
                <Image
                  src={logo.url}
                  alt={logo.name}
                  fill
                  className="object-contain"
                />
                */}
              </div>
            ))}
          </div>
        </FadeContent>
      </div>
    </section>
  )
}
