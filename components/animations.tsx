'use client'

import { motion, useInView, useScroll, useTransform, useSpring, type Variants } from 'framer-motion'
import { useRef, useEffect, useState, type ReactNode } from 'react'

// ─────────────────────────────────────────────────────────────
// BLUR TEXT — React Bits style. Words animate in with blur+fade
// Usage: <BlurText text="Your headline" className="..." delay={0} />
// ─────────────────────────────────────────────────────────────
interface BlurTextProps {
  text: string
  className?: string
  delay?: number        // ms delay between each word
  duration?: number     // ms per word animation
  once?: boolean        // only animate once
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span'
}

export function BlurText({
  text,
  className = '',
  delay = 80,
  duration = 600,
  once = true,
  as: Tag = 'span',
}: BlurTextProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref as React.RefObject<Element>, { once, margin: '-10% 0px' })
  const words = text.split(' ')

  const wordVariants: Variants = {
    hidden: { opacity: 0, filter: 'blur(12px)', y: 8 },
    visible: (i: number) => ({
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration: duration / 1000,
        delay: (i * delay) / 1000,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  }

  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={className} aria-label={text}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={wordVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="inline-block mr-[0.25em] last:mr-0"
          aria-hidden
        >
          {word}
        </motion.span>
      ))}
    </Tag>
  )
}

// ─────────────────────────────────────────────────────────────
// FADE CONTENT — Fades + slides in from below on scroll
// Usage: <FadeContent><YourContent /></FadeContent>
// ─────────────────────────────────────────────────────────────
interface FadeContentProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  yOffset?: number
  once?: boolean
}

export function FadeContent({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  yOffset = 20,
  once = true,
}: FadeContentProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-8% 0px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────
// STAGGER CONTAINER — Staggered children animations
// Usage: <StaggerContainer><div>item</div><div>item</div></StaggerContainer>
// ─────────────────────────────────────────────────────────────
interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
}

export function StaggerContainer({
  children,
  className = '',
  staggerDelay = 0.1,
  once = true,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-5% 0px' })

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
    },
  }

  // Clone children and inject variants
  const items = Array.isArray(children) ? children : [children]

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      {items.map((child, i) => (
        <motion.div key={i} variants={itemVariants} className="w-full h-full">
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────
// MAGNETIC BUTTON — Cursor-following magnetic hover effect
// Usage: <MagneticButton><button>CTA</button></MagneticButton>
// ─────────────────────────────────────────────────────────────
interface MagneticButtonProps {
  children: ReactNode
  className?: string
  strength?: number   // 0–1, how strong the magnetic pull is
}

export function MagneticButton({
  children,
  className = '',
  strength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const springConfig = { stiffness: 200, damping: 18, mass: 0.8 }
  const x = useSpring(0, springConfig)
  const y = useSpring(0, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    x.set((e.clientX - cx) * strength)
    y.set((e.clientY - cy) * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={`inline-block ${className}`}
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────
// TILT CARD — 3D tilt effect on hover
// Usage: <TiltCard className="..."><YourCard /></TiltCard>
// ─────────────────────────────────────────────────────────────
interface TiltCardProps {
  children: ReactNode
  className?: string
  maxTilt?: number   // degrees
}

export function TiltCard({ children, className = '', maxTilt = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useSpring(0, { stiffness: 200, damping: 20 })
  const rotateY = useSpring(0, { stiffness: 200, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    rotateY.set(dx * maxTilt)
    rotateX.set(-dy * maxTilt)
  }

  const handleMouseLeave = () => {
    rotateX.set(0)
    rotateY.set(0)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ scale: { duration: 0.2 } }}
    >
      {children}
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────
// SCROLL PROGRESS BAR — Thin yellow line at top of page
// ─────────────────────────────────────────────────────────────
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-yellow origin-left z-[9999] pointer-events-none"
      style={{ scaleX }}
    />
  )
}

// ─────────────────────────────────────────────────────────────
// COUNT UP — Animates a number counting up when in view
// Usage: <CountUp to={94} suffix="%" />
// ─────────────────────────────────────────────────────────────
interface CountUpProps {
  to: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function CountUp({ to, suffix = '', prefix = '', duration = 2, className = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease out cubic
      setValue(Math.round(eased * to))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [isInView, to, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{value}{suffix}
    </span>
  )
}
