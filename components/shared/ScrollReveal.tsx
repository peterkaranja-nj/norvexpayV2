'use client'
import { useEffect, useRef, ReactNode } from 'react'

type Direction = 'left' | 'right' | 'up'

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className,
}: {
  children: ReactNode
  direction?: Direction
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.opacity = '1'
      el.style.transform = 'none'
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.transitionDelay = `${delay}s`
          el.style.opacity = '1'
          el.style.transform = 'none'
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const tx = direction === 'left' ? '-64px' : direction === 'right' ? '64px' : '0px'
  const ty = direction === 'up' ? '32px' : '0px'

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: `translateX(${tx}) translateY(${ty})`,
        transition: 'opacity 2.8s cubic-bezier(0.16,1,0.3,1), transform 2.8s cubic-bezier(0.16,1,0.3,1)',
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  )
}
