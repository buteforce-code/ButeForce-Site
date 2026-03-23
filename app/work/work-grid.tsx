'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CASE_STUDIES } from '@/lib/data'

const FILTERS = ['All', 'AI Automation', 'Computer Vision', 'AI Agents', 'Document AI']

export default function WorkGrid() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? CASE_STUDIES
    : CASE_STUDIES.filter(c => c.category === active)

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-12">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`font-mono text-xs tracking-widest uppercase px-4 py-2 rounded-full border transition-all duration-150 ${
              active === f
                ? 'bg-ink text-white border-ink'
                : 'bg-transparent text-ink-faint border-surface-border hover:border-ink-faint hover:text-ink-soft'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filtered.map((study, i) => (
          <Link
            key={study.id}
            href={`/work/${study.slug}`}
            className="group bg-surface-warm border border-surface-border rounded-card overflow-hidden hover:border-ink/20 hover:shadow-md transition-all duration-200"
          >
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs tracking-widest uppercase text-ink-faint">
                    / {study.year}
                  </span>
                  <span className="font-mono text-[10px] tracking-wide uppercase px-2.5 py-1 bg-surface rounded-full text-ink-faint border border-surface-border">
                    {study.category}
                  </span>
                </div>
                {study.liveUrl && (
                  <span className="font-mono text-[10px] tracking-wide uppercase px-2.5 py-1 bg-yellow-subtle rounded-full text-yellow-dim border border-yellow/30">
                    Live
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="font-display font-bold text-lg text-ink heading-card mb-4 group-hover:text-ink-soft transition-colors">
                {study.title}
              </h3>

              {/* Stats row */}
              <div className="flex gap-6 mt-auto pt-6 border-t border-surface-border">
                {study.stats.slice(0, 3).map((stat, si) => (
                  <div key={si}>
                    <div className="font-display font-bold text-xl text-ink tracking-tight">
                      {stat.value}
                    </div>
                    <div className="font-mono text-[9px] tracking-wide uppercase text-ink-faint mt-0.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom yellow bar on hover */}
            <div className="h-[2px] bg-surface-border overflow-hidden">
              <div className="h-full bg-yellow w-0 group-hover:w-full transition-all duration-500 ease-out" />
            </div>
          </Link>
        ))}
      </div>

      {/* Count */}
      <p className="font-mono text-xs tracking-widest uppercase text-ink-faint mt-8 text-center">
        {filtered.length} project{filtered.length !== 1 ? 's' : ''}
        {active !== 'All' ? ` in ${active}` : ' total'}
      </p>
    </div>
  )
}

