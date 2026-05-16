'use client'
import ScrollReveal from '@/components/shared/ScrollReveal'

const logos = [
  {
    key: 'visa',
    el: (
      <svg viewBox="0 0 80 26" height="22" aria-label="Visa">
        <text x="2" y="22" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="800" fontStyle="italic" fill="#1A1F71">VISA</text>
      </svg>
    ),
  },
  {
    key: 'mastercard',
    el: (
      <svg viewBox="0 0 64 40" height="28" aria-label="Mastercard">
        <circle cx="22" cy="20" r="18" fill="#EB001B"/>
        <circle cx="42" cy="20" r="18" fill="#F79E1B"/>
        <path d="M32 6.5a18 18 0 0 1 0 27 18 18 0 0 1 0-27z" fill="#FF5F00"/>
        <text x="32" y="52" textAnchor="middle" fontFamily="Arial" fontSize="7" fill="#fff" fontWeight="bold"/>
      </svg>
    ),
  },
  {
    key: 'amex',
    el: (
      <svg viewBox="0 0 96 32" height="26" aria-label="American Express">
        <rect width="96" height="32" rx="4" fill="#2E77BC"/>
        <text x="48" y="12" textAnchor="middle" fontFamily="Arial" fontSize="7.5" fontWeight="800" fill="white" letterSpacing="0.5">AMERICAN</text>
        <text x="48" y="24" textAnchor="middle" fontFamily="Arial" fontSize="7.5" fontWeight="800" fill="white" letterSpacing="0.5">EXPRESS</text>
      </svg>
    ),
  },
  {
    key: 'jcb',
    el: (
      <svg viewBox="0 0 52 36" height="28" aria-label="JCB">
        <rect x="0"  y="0" width="18" height="36" rx="5" fill="#003087"/>
        <rect x="17" y="0" width="18" height="36" rx="5" fill="#CC0000"/>
        <rect x="34" y="0" width="18" height="36" rx="5" fill="#007B40"/>
        <text x="9"  y="23" textAnchor="middle" fontFamily="Arial" fontWeight="900" fontSize="14" fill="white">J</text>
        <text x="26" y="23" textAnchor="middle" fontFamily="Arial" fontWeight="900" fontSize="14" fill="white">C</text>
        <text x="43" y="23" textAnchor="middle" fontFamily="Arial" fontWeight="900" fontSize="14" fill="white">B</text>
      </svg>
    ),
  },
  {
    key: 'fawry',
    el: (
      <svg viewBox="0 0 90 36" height="28" aria-label="Fawry Pay">
        <rect width="90" height="36" rx="6" fill="#FFD100"/>
        <circle cx="18" cy="14" r="9" fill="#0066B2"/>
        <path d="M18 8 a6 6 0 0 1 4 10.5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <polygon points="22,19 26,16 23,23" fill="white"/>
        <text x="30" y="16" fontFamily="Arial" fontSize="11" fontWeight="800" fill="#0066B2">fawry</text>
        <rect x="28" y="22" width="56" height="12" rx="3" fill="#0066B2"/>
        <text x="56" y="32" textAnchor="middle" fontFamily="Arial" fontSize="9" fontWeight="800" fill="white">Pay</text>
      </svg>
    ),
  },
  {
    key: 'mpesa',
    el: (
      <svg viewBox="0 0 80 30" height="24" aria-label="M-Pesa">
        <text x="0" y="22" fontFamily="Arial" fontSize="22" fontWeight="900" fill="#00A550">M-</text>
        <text x="30" y="22" fontFamily="Arial" fontSize="22" fontWeight="900" fill="#E31837">PESA</text>
      </svg>
    ),
  },
  {
    key: 'stripe',
    el: (
      <svg viewBox="0 0 60 26" height="22" aria-label="Stripe">
        <text x="0" y="22" fontFamily="Arial" fontSize="22" fontWeight="800" fill="#635BFF">stripe</text>
      </svg>
    ),
  },
  {
    key: 'paypal',
    el: (
      <svg viewBox="0 0 80 26" height="22" aria-label="PayPal">
        <text x="0" y="21" fontFamily="Arial" fontSize="20" fontWeight="800" fill="#003087">Pay</text>
        <text x="36" y="21" fontFamily="Arial" fontSize="20" fontWeight="800" fill="#009CDE">Pal</text>
      </svg>
    ),
  },
]

export default function TrustStripe() {
  const track = [...logos, ...logos]

  return (
    <div
      className="relative border-y"
      style={{ background: 'var(--bg-primary)', borderColor: 'var(--border)' }}
    >
      <ScrollReveal direction="up" className="text-center pt-6 pb-3 px-6">
        <div className="flex items-center justify-center gap-2 mb-1">
          <span className="w-2 h-2 rounded-full" style={{ background: '#3B82F6' }} />
          <span className="w-2 h-2 rounded-full" style={{ background: '#E8A020' }} />
          <span className="w-2 h-2 rounded-full" style={{ background: '#22C55E' }} />
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: 'var(--accent)' }}>
            Trusted Worldwide
          </p>
          <span className="w-2 h-2 rounded-full" style={{ background: '#A855F7' }} />
          <span className="w-2 h-2 rounded-full" style={{ background: '#06B6D4' }} />
          <span className="w-2 h-2 rounded-full" style={{ background: '#EF4444' }} />
        </div>
        <p className="text-sm" style={{ color: 'var(--muted)', fontWeight: 300 }}>
          Powering payments across the world&apos;s leading networks and platforms
        </p>
      </ScrollReveal>
      <div className="relative overflow-hidden py-5">
      {/* fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, var(--bg-primary), transparent)' }}/>
      <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, var(--bg-primary), transparent)' }}/>

      <div className="flex items-center" style={{ animation: 'marquee 28s linear infinite' }}>
        {track.map(({ key, el }, i) => (
          <div
            key={`${key}-${i}`}
            className="flex items-center justify-center flex-shrink-0 px-10 opacity-60 hover:opacity-100 transition-opacity"
          >
            {el}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      </div>
    </div>
  )
}
