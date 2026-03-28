'use client'

import { useRef } from 'react'
import Link from 'next/link'

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
        <p className="font-mono text-sm tracking-widest uppercase text-yellow mb-6 delay-100 opacity-90">/ Buteforce</p>

        {/* The headline — sized perfectly for visual balance */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-[4.5rem] font-display font-bold text-white leading-[1.1] tracking-tight mb-8 max-w-5xl">
          The work your team keeps doing by hand
          <br className="hidden lg:block" />
          is the work we keep hearing about
          <span className="text-yellow">.</span>
        </h1>

        {/* Sub — what we actually do, no fluff */}
        <div className="flex flex-col gap-5 mb-12">
          <p className="font-body text-lg md:text-xl text-white/90 drop-shadow-sm max-w-2xl leading-relaxed">
            We build the AI systems that take it off their plate —
            custom, production-ready, and faster than you'd expect.
          </p>
          <p className="font-mono text-[11px] md:text-xs tracking-wide uppercase text-neutral-200 drop-shadow-sm">
            No consultants. No pilot projects. Working systems.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <Link href="/work" className="btn-primary border-none shadow-lg px-8">
            See what we've built →
          </Link>
          <Link href="/contact" className="px-6 py-3 rounded-md font-medium transition-colors text-white hover:text-yellow flex items-center gap-2">
            Tell us your problem
          </Link>
        </div>

        {/* Proof strip — Liquid Glassmorphic Update */}
        <div className="p-6 md:p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 relative overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all hover:bg-white/10">
          
          {/* Subtle shine / specular reflection on the glass container itself */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-30 pointer-events-none" />
          
          {[
            { v: '10+',  l: 'Production systems shipped' },
            { v: '99.2%', l: 'Vision accuracy' },
            { v: '<1s',  l: 'Document processing' },
            { v: '80%',  l: 'Average time saved' },
          ].map(({ v, l }) => (
            <div key={l} className="relative z-10">
              {/* Liquid Glass Numbers Effect */}
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
    </section>
  )
}


