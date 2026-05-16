'use client'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Lock, Globe, Tag } from 'lucide-react'

const transactions = [
  { flag: '🇳🇬', city: 'Lagos', card: '•••• 4821', amount: '$2,400.00', currency: 'USD' },
  { flag: '🇬🇧', city: 'London', card: '•••• 7293', amount: '£1,850.00', currency: 'GBP' },
  { flag: '🇺🇸', city: 'New York', card: '•••• 5571', amount: '$890.00', currency: 'USD' },
  { flag: '🇩🇪', city: 'Berlin', card: '•••• 3394', amount: '€1,200.00', currency: 'EUR' },
  { flag: '🇯🇵', city: 'Tokyo', card: '•••• 8823', amount: '¥145,000', currency: 'JPY' },
  { flag: '🇿🇦', city: 'Cape Town', card: '•••• 2210', amount: 'R18,500', currency: 'ZAR' },
  { flag: '🇸🇬', city: 'Singapore', card: '•••• 9943', amount: 'S$3,200', currency: 'SGD' },
  { flag: '🇦🇪', city: 'Dubai', card: '•••• 6617', amount: 'AED 8,400', currency: 'AED' },
  { flag: '🇧🇷', city: 'São Paulo', card: '•••• 1134', amount: 'R$4,750', currency: 'BRL' },
  { flag: '🇰🇪', city: 'Nairobi', card: '•••• 7782', amount: 'KES 58,000', currency: 'KES' },
  { flag: '🇨🇦', city: 'Toronto', card: '•••• 4419', amount: 'C$1,990', currency: 'CAD' },
  { flag: '🇫🇷', city: 'Paris', card: '•••• 3387', amount: '€950.00', currency: 'EUR' },
  { flag: '🇦🇺', city: 'Sydney', card: '•••• 2256', amount: 'A$2,100', currency: 'AUD' },
  { flag: '🇮🇳', city: 'Mumbai', card: '•••• 8891', amount: '₹84,000', currency: 'INR' },
  { flag: '🇲🇽', city: 'Mexico City', card: '•••• 5543', amount: 'MX$9,200', currency: 'MXN' },
]


export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [feed, setFeed] = useState(transactions.slice(0, 8))
  const [processed, setProcessed] = useState(2100000)
  const [txCount, setTxCount] = useState(14302)
  const [typed, setTyped] = useState('')
  const fullText = 'The infrastructure layer for modern finance'

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i <= fullText.length) { setTyped(fullText.slice(0, i)); i++ }
      else clearInterval(timer)
    }, 40)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const next = transactions[Math.floor(Math.random() * transactions.length)]
      setFeed(prev => [next, ...prev.slice(0, 7)])
      setProcessed(p => p + Math.floor(Math.random() * 5000 + 1000))
      setTxCount(c => c + Math.floor(Math.random() * 3 + 1))
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let raf: number
    let visible = true

    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)

    const PARTICLE_COLORS = ['rgba(232,160,32,0.7)', 'rgba(59,130,246,0.6)', 'rgba(34,197,94,0.55)', 'rgba(168,85,247,0.55)', 'rgba(6,182,212,0.55)']
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 2 + 1,
      color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
    }))

    const draw = () => {
      if (!visible) { raf = requestAnimationFrame(draw); return }
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width; if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height; if (p.y > canvas.height) p.y = 0
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color; ctx.fill()
        particles.forEach(p2 => {
          const dx = p.x - p2.x, dy = p.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(232,160,32,${0.15 * (1 - dist / 120)})`; ctx.lineWidth = 0.5; ctx.stroke()
          }
        })
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    const onVis = () => { visible = !document.hidden }
    document.addEventListener('visibilitychange', onVis)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); document.removeEventListener('visibilitychange', onVis) }
  }, [])

  const formatProcessed = (n: number) => n >= 1000000 ? `$${(n / 1000000).toFixed(1)}M` : `$${(n / 1000).toFixed(0)}K`

  return (
    <section className="relative min-h-screen flex flex-col" style={{ background: 'var(--bg-primary)' }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ opacity: 0.6 }} />
      {/* Multi-color ambient glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,160,32,0.15) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute top-1/3 right-1/3 w-72 h-72 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-1/4 right-1/6 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-1/3 left-1/4 w-56 h-56 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="relative flex-1 flex items-center pt-[72px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full grid lg:grid-cols-[58fr_42fr] gap-8 lg:gap-12 items-center py-10 sm:py-14 lg:py-16">
          {/* Left */}
          <div>
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono mb-8"
              style={{ background: 'var(--accent-dim)', border: '1px solid var(--border-bright)', color: 'var(--accent)', animation: 'slideInLeft 2.4s cubic-bezier(0.16,1,0.3,1) 0s both' }}
            >
              <span className="text-xs opacity-60">▸</span>
              {typed}
              <span className="animate-pulse">|</span>
            </div>

            {/* Headline */}
            <h1
              className="text-3xl lg:text-5xl font-black leading-tight tracking-tight mb-6"
              style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', animation: 'slideInLeft 2.4s cubic-bezier(0.16,1,0.3,1) 0.15s both' }}
            >
              <span style={{ color: 'var(--text)' }}>A modern global payments infrastructure platform </span>
              <span
                style={{
                  fontFamily: 'Instrument Serif, serif',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: 'var(--accent)',
                }}
              >
                built for businesses operating across borders.
              </span>
            </h1>

            {/* Subline */}
            <p
              className="text-base mb-8 max-w-xl"
              style={{
                color: 'var(--muted)',
                lineHeight: 1.75,
                fontWeight: 300,
                animation: 'slideInLeft 2.4s cubic-bezier(0.16,1,0.3,1) 0.32s both',
              }}
            >
              Accept payments, send payouts, issue cards, and protect against fraud, all from one unified API spanning 40+ countries.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 mb-10"
              style={{ animation: 'slideInLeft 2.4s cubic-bezier(0.16,1,0.3,1) 0.5s both' }}
            >
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                style={{ background: 'var(--accent)', color: '#000', minWidth: '180px', textAlign: 'center' }}
              >
                Get started Today
              </Link>
              <Link
                href="/products"
                className="px-8 py-4 rounded-xl font-semibold text-sm transition-all border"
                style={{ border: '1px solid var(--border)', color: 'var(--text)' }}
              >
                Explore products
              </Link>
            </div>

            {/* Trust signals */}
            <div
              className="flex flex-wrap gap-5"
              style={{ animation: 'slideInLeft 2.4s cubic-bezier(0.16,1,0.3,1) 0.68s both' }}
            >
              {[
                { Icon: Lock,  text: 'Bank grade encryption', color: '#A855F7' },
                { Icon: Globe, text: '40+ countries',         color: '#22C55E' },
                { Icon: Tag,   text: 'Zero setup fees',       color: '#3B82F6' },
              ].map(({ Icon, text, color }) => (
                <div key={text} className="flex items-center gap-1.5 text-xs font-medium" style={{ color: 'var(--muted)' }}>
                  <Icon size={13} style={{ color }} /> {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — Live Feed */}
          <div className="relative" style={{ animation: 'slideInRight 2.4s cubic-bezier(0.16,1,0.3,1) 0.22s both' }}>
            <div
              className="relative rounded-2xl overflow-hidden scanlines"
              style={{ background: 'var(--bg-raised)', border: '1px solid var(--border-bright)', boxShadow: '0 0 40px rgba(232,160,32,0.15), 0 20px 60px rgba(0,0,0,0.5)' }}
            >
              <div className="flex items-center justify-between px-4 py-3 border-b" style={{ borderColor: 'var(--border)' }}>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
                  <div className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
                  <span className="text-xs font-mono ml-2" style={{ color: 'var(--muted)' }}>NorvexPay Live · Transaction Monitor</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="status-dot" />
                  <span className="text-xs font-mono" style={{ color: 'var(--success)' }}>Live</span>
                </div>
              </div>

              <div className="overflow-hidden" style={{ height: 'clamp(220px, 40vw, 320px)' }}>
                <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
                  {feed.map((tx, i) => (
                    <div
                      key={`${i}-${tx.city}`}
                      className="flex items-center justify-between px-4 py-2.5 text-sm"
                      style={{ animation: i === 0 ? 'slideUpFade 0.4s ease forwards' : 'none' }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-base">{tx.flag}</span>
                        <div>
                          <div className="font-medium text-xs" style={{ color: 'var(--text)' }}>{tx.city}</div>
                          <div className="font-mono text-xs" style={{ color: 'var(--muted)' }}>{tx.card}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-semibold" style={{ color: 'var(--text)' }}>{tx.amount}</span>
                        <span className="text-xs px-1.5 py-0.5 rounded font-mono" style={{ background: 'rgba(34,197,94,0.12)', color: 'var(--success)' }}>✓</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex border-t" style={{ borderColor: 'var(--border)' }}>
                {[
                  { value: formatProcessed(processed), label: 'processed last hour' },
                  { value: txCount.toLocaleString(), label: 'transactions today' },
                  { value: '99.97%', label: 'uptime' },
                ].map((m, i) => (
                  <div key={i} className="flex-1 px-3 py-3 text-center border-r last:border-r-0" style={{ borderColor: 'var(--border)' }}>
                    <div className="font-mono text-sm font-bold" style={{ color: 'var(--accent)' }}>{m.value}</div>
                    <div className="text-xs mt-0.5" style={{ color: 'var(--muted)' }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-56px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(56px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideUpFade {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}
