'use client'

import { useEffect, useRef } from 'react'

/**
 * First-party engagement beacon for blog posts.
 *
 * Sends three things the content engine cannot get anywhere else:
 *   view    the post was opened
 *   scroll  25 / 50 / 75 / 100% milestones — did anyone actually read it?
 *   cta     a call-to-action was clicked
 *
 * GA4 already reports pageviews and a session-level engagement rate, so this is
 * not duplicating it. What GA4 will not answer is "did readers of *this* post
 * reach the CTA?", and that is the signal the learning layer needs to tell a
 * post that attracts traffic from a post that converts it. Both exist on this
 * blog today and they are not the same posts.
 *
 * Privacy: no cookies, no fingerprinting, no third-party requests. The session
 * id is a random value held in sessionStorage for this tab only, and the server
 * stores a salted hash of it rather than the value — enough to count unique
 * readers, not enough to identify one. Ignores requests when the reader has Do
 * Not Track set.
 *
 * Failure policy: every send is best-effort and silent. Telemetry must never
 * produce a visible error on a reader's screen or block rendering.
 */

const ENDPOINT = process.env.NEXT_PUBLIC_ANALYTICS_URL || ''
const MILESTONES = [25, 50, 75, 100] as const

function sessionId(): string {
  try {
    const KEY = 'bf_sid'
    let id = sessionStorage.getItem(KEY)
    if (!id) {
      id = crypto.randomUUID()
      sessionStorage.setItem(KEY, id)
    }
    return id
  } catch {
    // Private browsing can throw on sessionStorage. A per-load id still counts
    // the view; it just cannot be linked to the rest of the session.
    return 'anon'
  }
}

function send(payload: Record<string, unknown>): void {
  if (!ENDPOINT) return
  const body = JSON.stringify(payload)
  try {
    // sendBeacon survives the page being closed, which is exactly when the
    // 100%-scroll event fires. fetch would be cancelled by the unload.
    if (navigator.sendBeacon) {
      navigator.sendBeacon(ENDPOINT, new Blob([body], { type: 'application/json' }))
      return
    }
    void fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
    }).catch(() => {})
  } catch {
    /* telemetry must never surface to the reader */
  }
}

export default function BlogAnalytics({ slug }: { slug: string }) {
  const fired = useRef<Set<number>>(new Set())
  const sent = useRef(false)

  useEffect(() => {
    if (!slug || !ENDPOINT) return
    if (navigator.doNotTrack === '1') return
    // React 18 StrictMode mounts effects twice in development; without this the
    // local view count is silently double what actually happened.
    if (sent.current) return
    sent.current = true

    const sid = sessionId()
    const base = { slug, path: window.location.pathname, session: sid }

    send({ ...base, event: 'view', referrer: document.referrer || null })

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        ticking = false
        const doc = document.documentElement
        const reach = doc.scrollTop + window.innerHeight
        const total = doc.scrollHeight
        if (total <= window.innerHeight) return
        const pct = (reach / total) * 100
        for (const m of MILESTONES) {
          if (pct >= m && !fired.current.has(m)) {
            fired.current.add(m)
            send({ ...base, event: 'scroll', scrollDepth: m })
          }
        }
      })
    }

    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>('[data-cta]')
      if (!el) return
      send({ ...base, event: 'cta', label: el.dataset.cta?.slice(0, 60) || 'unknown' })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('click', onClick, true)
    onScroll() // a short post may already be fully visible on load

    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('click', onClick, true)
    }
  }, [slug])

  return null
}
