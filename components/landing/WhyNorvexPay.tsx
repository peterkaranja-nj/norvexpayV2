'use client'
import { Zap, Shield, Globe, MessageSquare } from 'lucide-react'
import ScrollReveal from '@/components/shared/ScrollReveal'

const reasons = [
  {
    icon: Zap,
    title: 'Go live in days',
    desc: 'Integrate in hours, not months. Clear documentation and a full sandbox environment mean you ship faster.',
    color: '#3B82F6',
    bg: 'rgba(59,130,246,0.1)',
    border: 'rgba(59,130,246,0.28)',
    glow: 'rgba(59,130,246,0.18)',
  },
  {
    icon: Shield,
    title: 'Built in compliance',
    desc: 'PCI-DSS, SOC 2, and local regulatory frameworks are handled for you so you can focus on building.',
    color: '#A855F7',
    bg: 'rgba(168,85,247,0.1)',
    border: 'rgba(168,85,247,0.28)',
    glow: 'rgba(168,85,247,0.18)',
  },
  {
    icon: Globe,
    title: 'Real borderless payments',
    desc: 'Support for 40+ countries with deep local payment method coverage. One API, every market.',
    color: '#22C55E',
    bg: 'rgba(34,197,94,0.1)',
    border: 'rgba(34,197,94,0.28)',
    glow: 'rgba(34,197,94,0.18)',
  },
  {
    icon: MessageSquare,
    title: 'Dedicated support',
    desc: 'A real team that stays with you from first integration through scale. Not a chatbot, not a ticket queue.',
    color: '#06B6D4',
    bg: 'rgba(6,182,212,0.1)',
    border: 'rgba(6,182,212,0.28)',
    glow: 'rgba(6,182,212,0.18)',
  },
]

export default function WhyNorvexPay() {
  return (
    <section className="py-14 sm:py-20" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-14">
          <ScrollReveal direction="left">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>
              Why NorvexPay
            </p>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.18}>
            <h2 className="text-3xl lg:text-5xl font-black leading-tight mb-4"
              style={{ color: 'var(--text)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Everything you need to<br />
              <span style={{ fontFamily: 'Instrument Serif, serif', fontWeight: 400, fontStyle: 'italic', color: 'var(--accent)' }}>
                move money globally.
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.36}>
            <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--muted)', fontWeight: 300, lineHeight: 1.75 }}>
              Built from the ground up for businesses that can&apos;t afford downtime, delays, or complexity.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {reasons.map(({ icon: Icon, title, desc, color, bg, border, glow }, index) => (
            <ScrollReveal key={title} direction="up" delay={index * 0.14}>
              <div
                className="group relative rounded-2xl p-7 transition-all duration-300 overflow-hidden h-full"
                style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)' }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = border
                  el.style.background = bg
                  el.style.transform = 'translateY(-5px)'
                  el.style.boxShadow = `0 20px 48px rgba(0,0,0,0.08), 0 0 24px ${glow}`
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = 'var(--border)'
                  el.style.background = 'var(--bg-raised)'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                }}
              >
                {/* Top color bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: color }} />

                {/* Icon */}
                <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: bg, border: `1px solid ${border}` }}>
                  <Icon size={20} style={{ color }} />
                </div>

                <h3 className="text-base font-bold mb-2" style={{ color: 'var(--text)' }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)', lineHeight: 1.7 }}>{desc}</p>

                {/* Bottom accent line on hover */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-px transition-all duration-300"
                  style={{ background: `linear-gradient(90deg, transparent, ${color}, transparent)`, opacity: 0 }}
                  ref={el => {
                    if (!el) return
                    const parent = el.parentElement
                    if (!parent) return
                    parent.addEventListener('mouseenter', () => { el.style.opacity = '1' })
                    parent.addEventListener('mouseleave', () => { el.style.opacity = '0' })
                  }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
