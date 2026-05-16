'use client'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import ScrollReveal from '@/components/shared/ScrollReveal'

const WorldMap = dynamic(() => import('./WorldMap'), { ssr: false })

function FXTicker() {
  const [pairs, setPairs] = useState([
    { pair: 'USD/EUR', rate: 0.9214, up: true },
    { pair: 'GBP/KES', rate: 165.40, up: false },
    { pair: 'USD/NGN', rate: 1580, up: true },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setPairs(prev => prev.map(p => {
        const change = (Math.random() - 0.5) * 0.02
        return { ...p, rate: +(p.rate * (1 + change)).toFixed(p.rate > 100 ? 1 : 4), up: change > 0 }
      }))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-3">
      {pairs.map(p => (
        <div key={p.pair} className="flex items-center justify-between">
          <span className="font-mono text-xs font-semibold" style={{ color: 'var(--text)' }}>{p.pair}</span>
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm" style={{ color: 'var(--text)' }}>{p.rate.toLocaleString()}</span>
            <span className="text-xs" style={{ color: p.up ? 'var(--success)' : 'var(--danger)' }}>
              {p.up ? '↑' : '↓'}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

function FraudGauge() {
  const [score, setScore] = useState(0)
  const [phase, setPhase] = useState<'rising' | 'dropping'>('rising')

  useEffect(() => {
    const cycle = () => {
      setPhase('rising')
      let s = 0
      const up = setInterval(() => {
        s += 3
        setScore(s)
        if (s >= 87) {
          clearInterval(up)
          setTimeout(() => {
            setPhase('dropping')
            let d = 87
            const down = setInterval(() => {
              d -= 5
              setScore(d)
              if (d <= 12) { clearInterval(down); setTimeout(cycle, 2000) }
            }, 50)
          }, 1000)
        }
      }, 40)
    }
    cycle()
  }, [])

  const danger = score > 50
  const radius = 40
  const circumference = 2 * Math.PI * radius
  const arc = circumference * (score / 100)

  return (
    <div className="flex flex-col items-center gap-3">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={radius} fill="none" stroke="var(--bg-float)" strokeWidth="8" />
        <circle cx="50" cy="50" r={radius} fill="none"
          stroke={danger ? 'var(--danger)' : 'var(--success)'}
          strokeWidth="8"
          strokeDasharray={`${arc} ${circumference - arc}`}
          strokeDashoffset={circumference / 4}
          strokeLinecap="round"
          style={{ transition: 'stroke-dasharray 0.1s, stroke 0.5s' }}
        />
        <text x="50" y="46" textAnchor="middle" fontSize="18" fontWeight="bold"
          fill={danger ? 'var(--danger)' : 'var(--success)'} fontFamily="JetBrains Mono">{score}</text>
        <text x="50" y="62" textAnchor="middle" fontSize="9" fill="var(--muted)" fontFamily="Plus Jakarta Sans">Risk Score</text>
      </svg>
      <div className="text-xs font-mono" style={{ color: 'var(--muted)' }}>
        {phase === 'rising' ? '⚠ Analyzing threat...' : '✓ Rule fired. Safe.'}
      </div>
    </div>
  )
}


export default function BentoGrid() {
  return (
    <section className="py-10 sm:py-16" style={{ background: 'var(--bg-surface)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="mb-10 sm:mb-12">
          <ScrollReveal direction="left">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>Infrastructure</p>
          </ScrollReveal>
          <ScrollReveal direction="left" delay={0.18}>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-black leading-tight mb-4" style={{ color: 'var(--text)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Every building block your<br />
              <span className="italic font-serif" style={{ fontFamily: 'Instrument Serif, serif', fontWeight: 400, color: 'var(--accent)' }}>
                financial product needs
              </span>
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="right" delay={0.36}>
            <p className="text-base sm:text-lg max-w-xl" style={{ color: 'var(--muted)', fontWeight: 300 }}>
              Modular infrastructure that lets you build, launch, and scale without limits.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-12 gap-3 sm:gap-4">
          {/* Map card — blue */}
          <ScrollReveal direction="left" className="col-span-12 lg:col-span-8 lg:row-span-2">
            <div className="bento-card overflow-hidden h-full">
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, #3B82F6, #06B6D4)' }} />
              <h3 className="text-sm font-semibold mb-3" style={{ color: '#3B82F6' }}>Global Payment Coverage</h3>
              <div style={{ margin: '0 -24px -24px', width: 'calc(100% + 48px)' }}>
                <WorldMap />
              </div>
            </div>
          </ScrollReveal>
          {/* Fraud card — red */}
          <ScrollReveal direction="right" delay={0.15} className="col-span-12 sm:col-span-6 lg:col-span-4">
            <div className="bento-card overflow-hidden h-full">
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, #EF4444, #F97316)' }} />
              <h3 className="text-sm font-semibold mb-4" style={{ color: '#EF4444' }}>AI Fraud Detection</h3>
              <FraudGauge />
            </div>
          </ScrollReveal>
          {/* FX card — green */}
          <ScrollReveal direction="right" delay={0.3} className="col-span-12 sm:col-span-6 lg:col-span-4">
            <div className="bento-card overflow-hidden h-full">
              <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg, #22C55E, #10B981)' }} />
              <h3 className="text-sm font-semibold mb-4" style={{ color: '#22C55E' }}>Multi Currency FX</h3>
              <FXTicker />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
