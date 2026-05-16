'use client'
import { useState } from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/shared/ScrollReveal'
import {
  ArrowRight, Shield, Zap, RefreshCw, Lock, BarChart3,
  CheckCircle, Code2, Webhook,
} from 'lucide-react'

const steps = [
  {
    n: '01',
    title: 'Integrate once',
    desc: 'Drop our SDK into your stack or hit the REST API directly. One integration unlocks every payment method, currency, and market we support.',
    icon: Code2,
  },
  {
    n: '02',
    title: 'We route intelligently',
    desc: 'NorvexPay\'s smart router selects the optimal acquiring path for each transaction in real time, maximising approval rates and minimising processing cost.',
    icon: RefreshCw,
  },
  {
    n: '03',
    title: 'Funds settle fast',
    desc: 'Your customers pay, we verify, and funds settle to your account. Works locally or across borders with full visibility in your dashboard.',
    icon: Zap,
  },
]

const features = [
  {
    icon: RefreshCw,
    title: 'Smart Routing',
    desc: 'Dynamically routes each transaction to the best performing acquirer, increasing approval rates by up to 18% compared to single acquirer setups.',
    color: '#3B82F6',
  },
  {
    icon: Shield,
    title: '3DS2 & Frictionless Auth',
    desc: 'Native 3D Secure 2.0 with risk based authentication. Low risk transactions are approved frictionlessly; high risk ones get stepped up.',
    color: '#E8A020',
  },
  {
    icon: Lock,
    title: 'Network Tokenisation',
    desc: 'Replace card PANs with network tokens from Visa and Mastercard. Higher approval rates, lower fraud, and no reauthentication on card updates.',
    color: '#A855F7',
  },
  {
    icon: RefreshCw,
    title: 'Recurring Billing',
    desc: 'First-class subscription support with MIT flags, automatic retry logic, dunning management, and flexible billing intervals.',
    color: '#22C55E',
  },
  {
    icon: Webhook,
    title: 'Real-Time Webhooks',
    desc: 'Instant event delivery for every payment lifecycle change. Covers authorised, settled, disputed and refunded states. Retries with exponential backoff included.',
    color: '#06B6D4',
  },
  {
    icon: BarChart3,
    title: 'Analytics Dashboard',
    desc: 'Real time acceptance rates, decline reason breakdowns, FX exposure, and chargeback tracking. All in one place and exportable via API.',
    color: '#EF4444',
  },
]

const codeSnippet = `const payment = await norvexpay.payments.create({
  amount: 25000,       // in minor units (250.00 USD)
  currency: 'USD',
  payment_method: 'card',
  customer: {
    email: 'customer@example.com',
    country: 'GB',
  },
  metadata: {
    order_id: 'ord_8a2f91c',
  },
})

// Response
{
  id: 'pay_3xKq92mNv',
  status: 'authorised',
  amount: 25000,
  currency: 'USD',
  authorization_code: 'AX9182',
  settled_at: '2026-05-16T10:04:22Z',
}`

export default function GatewayClient() {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(codeSnippet)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      {/* How it works */}
      <section className="py-16 sm:py-20" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal direction="up" className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>How it works</p>
            <h2 className="text-3xl font-black" style={{ color: 'var(--text)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              From integration to settlement in{' '}
              <span style={{ fontFamily: 'Instrument Serif, serif', fontWeight: 400, fontStyle: 'italic', color: 'var(--accent)' }}>three steps.</span>
            </h2>
          </ScrollReveal>
          <div className="grid lg:grid-cols-3 gap-6 relative">
            <div className="hidden lg:block absolute top-12 left-1/3 right-1/3 h-px" style={{ background: 'linear-gradient(90deg, var(--accent), transparent)' }} />
            <div className="hidden lg:block absolute top-12 left-2/3 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, var(--accent))' }} />
            {steps.map(({ n, title, desc, icon: Icon }, index) => (
              <ScrollReveal key={n} direction="up" delay={index * 0.12}>
                <div className="rounded-2xl p-7 relative" style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)' }}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-3xl font-black font-mono" style={{ color: 'var(--accent)', opacity: 0.3 }}>{n}</span>
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'var(--accent-dim)', border: '1px solid var(--border-bright)' }}>
                      <Icon size={18} style={{ color: 'var(--accent)' }} />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text)' }}>{title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)', lineHeight: 1.7 }}>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16" style={{ background: 'var(--bg-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal direction="up" className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>Gateway features</p>
            <h2 className="text-3xl font-black" style={{ color: 'var(--text)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Everything inside{' '}
              <span style={{ fontFamily: 'Instrument Serif, serif', fontWeight: 400, fontStyle: 'italic', color: 'var(--accent)' }}>the box.</span>
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map(({ icon: Icon, title, desc, color }, index) => (
              <ScrollReveal key={title} direction="up" delay={Math.min(index * 0.09, 0.36)}>
                <div
                  className="p-6 rounded-2xl transition-all duration-200"
                  style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)' }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = color
                    el.style.transform = 'translateY(-4px)'
                    el.style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'var(--border)'
                    el.style.transform = 'translateY(0)'
                    el.style.boxShadow = 'none'
                  }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                    <Icon size={18} style={{ color }} />
                  </div>
                  <h3 className="font-bold text-sm mb-2" style={{ color: 'var(--text)' }}>{title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)', lineHeight: 1.7 }}>{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Code snippet */}
      <section className="py-16" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>Developer-first</p>
              <h2 className="text-3xl font-black mb-4" style={{ color: 'var(--text)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Up and running in{' '}
                <span style={{ fontFamily: 'Instrument Serif, serif', fontWeight: 400, fontStyle: 'italic', color: 'var(--accent)' }}>minutes.</span>
              </h2>
              <p className="text-base mb-6" style={{ color: 'var(--muted)', fontWeight: 300, lineHeight: 1.75 }}>
                A clean RESTful API with predictable responses, idempotency keys, and human readable error messages. SDKs for every major language. Full sandbox environment with test cards included.
              </p>
              <ul className="space-y-3 mb-8">
                {['Node.js · Python · Go · PHP · Ruby SDKs', 'OpenAPI spec & Postman collection', 'Test cards for every decline scenario', 'Webhook simulator in dashboard'].map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm" style={{ color: 'var(--text)' }}>
                    <CheckCircle size={14} style={{ color: 'var(--success)', flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                style={{ background: 'var(--accent)', color: '#000' }}>
                Get API keys <ArrowRight size={15} />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.18}>
              <div className="rounded-2xl overflow-hidden" style={{ background: '#0A0C10', border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="flex items-center justify-between px-5 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F57' }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: '#FEBC2E' }} />
                    <div className="w-3 h-3 rounded-full" style={{ background: '#28C840' }} />
                  </div>
                  <span className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>norvexpay.js</span>
                  <button onClick={copy} className="text-xs px-2.5 py-1 rounded transition-all"
                    style={{ background: 'rgba(255,255,255,0.07)', color: copied ? '#22C55E' : 'rgba(255,255,255,0.4)' }}>
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
                <pre className="p-5 text-xs overflow-x-auto" style={{ fontFamily: 'JetBrains Mono, monospace', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)' }}>
                  <code>{codeSnippet}</code>
                </pre>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}
