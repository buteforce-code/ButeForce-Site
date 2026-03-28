'use client'

import Link from 'next/link'
import { SERVICES } from '@/lib/data'

export default function ServicesSection() {
  return (
    <section className="py-24 md:py-32 bg-surface">
      <div className="max-w-site mx-auto px-6 lg:px-10">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="section-label mb-4">Our Services</p>
            <h2 className="text-display-lg font-display font-bold text-ink">
              What we build
            </h2>
          </div>
          <Link href="/services" className="btn-ghost whitespace-nowrap">
            Full details →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SERVICES.map((service, i) => (
            <Link
              key={service.id}
              href={`/services#${service.slug}`}
              className="group relative bg-surface-off shadow-sm border border-surface-border rounded-card p-8 hover:border-ink/20 hover:shadow-md transition-all duration-200 overflow-hidden"
            >
              {/* Left yellow accent bar — appears on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-yellow scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom rounded-l-card" />

              {/* Number */}
              <p className="font-mono text-xs tracking-widest uppercase text-ink-faint mb-6">
                {service.label}
              </p>

              {/* Title */}
              <h3 className="font-display font-bold text-display-sm text-ink mb-3 heading-card">
                {service.title}
              </h3>

              {/* Short description */}
              <p className="font-body text-ink-muted leading-relaxed mb-6">
                {service.short}
              </p>

              {/* Metric */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-6 h-[2px] bg-yellow" />
                <p className="font-mono text-xs tracking-wide text-ink">
                  {service.metric}
                </p>
              </div>

              {/* Stack tags */}
              <div className="flex flex-wrap gap-2">
                {service.stack.map(tag => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-wide uppercase px-2.5 py-1 bg-surface-off rounded-full text-ink-faint border border-surface-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover arrow */}
              <span className="absolute top-7 right-7 font-mono text-ink-faint opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200">
                →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  )
}

