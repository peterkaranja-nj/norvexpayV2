'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)
  const [phase, setPhase] = useState<'loading' | 'done'>('loading')

  useEffect(() => {
    const start = Date.now()
    const duration = 2000

    const tick = () => {
      const elapsed = Date.now() - start
      const raw = elapsed / duration
      const eased = 1 - Math.pow(1 - Math.min(raw, 1), 3)
      const pct = Math.min(eased * 100, 100)
      setProgress(Math.floor(pct))
      if (pct < 100) {
        requestAnimationFrame(tick)
      } else {
        setPhase('done')
        setTimeout(() => {
          setVisible(false)
          setTimeout(onComplete, 600)
        }, 300)
      }
    }

    requestAnimationFrame(tick)
  }, [onComplete])

  const skip = () => {
    setVisible(false)
    setTimeout(onComplete, 600)
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none"
      style={{
        background: '#FFFFFF',
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'scale(1.03)',
        transition: 'opacity 0.6s ease, transform 0.6s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {/* Content */}
      <div className="relative flex flex-col items-center" style={{ animation: 'fadeUp 0.7s ease 0.1s both' }}>

        {/* Logo container */}
        <div
          className="relative mb-8 flex items-center justify-center"
          style={{ animation: 'logoFloat 3s ease-in-out infinite' }}
        >
          {/* Outer ring */}
          <div
            className="absolute rounded-full"
            style={{
              width: '140px',
              height: '140px',
              border: '1px solid rgba(232,160,32,0.2)',
              animation: 'ringExpand 3s ease-in-out infinite',
            }}
          />
          {/* Inner ring */}
          <div
            className="absolute rounded-full"
            style={{
              width: '110px',
              height: '110px',
              border: '1px solid rgba(232,160,32,0.35)',
            }}
          />
          {/* Logo box */}
          <div
            className="relative flex items-center justify-center rounded-2xl"
            style={{
              width: '88px',
              height: '88px',
              background: '#F9FAFB',
              border: '1px solid rgba(0,0,0,0.08)',
              boxShadow: phase === 'done'
                ? '0 0 40px rgba(232,160,32,0.25), 0 8px 32px rgba(0,0,0,0.08)'
                : '0 4px 24px rgba(0,0,0,0.06)',
              transition: 'box-shadow 0.6s ease',
            }}
          >
            <Image
              src="/norvexpay-logo.png"
              alt="NorvexPay"
              width={56}
              height={56}
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </div>

        {/* Brand */}
        <div
          className="font-bold mb-1"
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            fontSize: '26px',
            letterSpacing: '-0.01em',
            color: '#111111',
            animation: 'fadeUp 0.6s ease 0.3s both',
          }}
        >
          Norvex<span style={{ color: '#E8A020' }}>Pay</span>
        </div>

        {/* Tagline */}
        <div
          className="text-xs uppercase mb-10"
          style={{
            fontFamily: 'Inter, system-ui, sans-serif',
            color: 'rgba(100,116,139,0.7)',
            letterSpacing: '0.12em',
            animation: 'fadeUp 0.6s ease 0.45s both',
          }}
        >
          Global Payment Infrastructure
        </div>

        {/* Progress bar */}
        <div
          className="relative mb-4"
          style={{
            width: '200px',
            animation: 'fadeUp 0.6s ease 0.55s both',
          }}
        >
          <div
            className="w-full rounded-full overflow-hidden"
            style={{ height: '4px', background: 'rgba(0,0,0,0.08)' }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                background: 'linear-gradient(90deg, rgba(232,160,32,0.6) 0%, #E8A020 100%)',
                boxShadow: '0 0 8px rgba(232,160,32,0.5)',
                transition: 'width 0.08s linear',
              }}
            />
          </div>
          <div
            className="absolute right-0 tabular-nums"
            style={{
              top: '8px',
              fontSize: '10px',
              color: 'rgba(100,116,139,0.6)',
            }}
          >
            {progress}%
          </div>
        </div>

        {/* Status text */}
        <div
          className="text-xs"
          style={{
            color: 'rgba(100,116,139,0.5)',
            letterSpacing: '0.05em',
            height: '16px',
          }}
        >
          {phase === 'done' ? '✓ Ready' : 'Loading platform...'}
        </div>
      </div>

      {/* Skip */}
      <button
        onClick={skip}
        className="absolute bottom-8 right-8 text-xs tracking-wider uppercase transition-all"
        style={{
          color: 'rgba(100,116,139,0.4)',
          opacity: progress > 40 ? 1 : 0,
          transition: 'opacity 0.5s, color 0.2s',
          letterSpacing: '0.12em',
        }}
        onMouseEnter={e => (e.currentTarget.style.color = 'rgba(232,160,32,0.8)')}
        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(100,116,139,0.4)')}
      >
        Skip →
      </button>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        @keyframes ringExpand {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.2; transform: scale(1.06); }
        }
      `}</style>
    </div>
  )
}
