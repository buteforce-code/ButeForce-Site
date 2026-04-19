'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { BlurText, FadeContent } from '@/components/animations'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  return (
    <section className="relative min-h-screen flex flex-col justify-end pb-20 pt-32 overflow-hidden bg-black">

      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        muted
        loop
        autoPlay
        playsInline
        preload="auto"
        poster="/videos/hero/hero-poster.jpg"
        src="/videos/hero-optimized.mp4"
        aria-hidden
      />

      {/* Dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80 pointer-events-none" />

      {/* Single yellow glow accent — top right */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none opacity-50 mix-blend-screen"
        style={{
          background: 'radial-gradient(ellipse at 80% 20%, rgba(255,252,1,0.15) 0%, transparent 60%)',
        }}
        aria-hidden
      />

      <div className="relative max-w-site mx-auto px-6 lg:px-10 w-full z-10">

        {/* Section label */}
        <FadeContent delay={0}>
          <p className="font-mono text-sm tracking-widest uppercase text-yellow mb-6 opacity-90">/ Buteforce</p>
        </FadeContent>

        {/* The headline */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-[4.5rem] font-display font-bold text-white leading-[1.1] tracking-tight mb-8 max-w-5xl">
          <BlurText text="The work your team keeps doing by hand" delay={40} duration={600} className="inline" />
          <br className="hidden lg:block" />
          <BlurText text="is the work we keep hearing about" delay={40} duration={600} className="inline" />
          <span className="text-yellow">.</span>
        </h1>

        {/* Sub */}
        <FadeContent delay={0.4} yOffset={20}>
          <div className="flex flex-col gap-5 mb-12">
            <p className="font-body text-lg md:text-xl text-white/90 drop-shadow-sm max-w-2xl leading-relaxed">
              We build the AI systems that take it off their plate —
              custom, production-ready, and faster than you'd expect.
            </p>
            <p className="font-mono text-[11px] md:text-xs tracking-wide uppercase text-neutral-200 drop-shadow-sm">
              No consultants. No pilot projects. Working systems.
            </p>
          </div>
        </FadeContent>

        {/* CTAs */}
        <FadeContent delay={0.6} yOffset={20}>
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <Link href="/work" className="btn-primary border-none shadow-lg px-8 transition-transform duration-200 hover:scale-105 active:scale-95">
              See what we've built →
            </Link>
            <Link href="/contact" className="px-6 py-3 rounded-md font-medium transition-colors text-white hover:text-yellow flex items-center gap-2">
              Tell us your problem
            </Link>
          </div>
        </FadeContent>

        {/* Proof strip */}
        <FadeContent delay={0.8} yOffset={30}>
          <div className="p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all hover:bg-white/10">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-30 pointer-events-none" />
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10 w-full">
              {[
                { v: '10+',  l: 'Production systems shipped' },
                { v: '99.2%', l: 'Vision accuracy' },
                { v: '<1s',  l: 'Document processing' },
                { v: '80%',  l: 'Average time saved' },
              ].map(({ v, l }) => (
                <div key={l} className="flex flex-col">
                  <div 
                    className="font-display font-bold text-4xl md:text-5xl tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20 mb-2"
                    style={{ filter: "drop-shadow(0px 4px 12px rgba(255, 255, 255, 0.15))" }}
                  >
                    {v}
                  </div>
                  <div className="font-mono text-[11px] tracking-wider uppercase text-neutral-400">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeContent>
      </div>
    </section>
  )
}


