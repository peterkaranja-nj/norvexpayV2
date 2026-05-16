'use client'
import { useState } from 'react'
import Link from 'next/link'
import ScrollReveal from '@/components/shared/ScrollReveal'
import {
  Globe, Zap, TrendingUp, Shield, Code, Lock,
  ArrowRight, Check,
  CreditCard, Building2, Smartphone, RefreshCw, BarChart3,
} from 'lucide-react'

const products = [
  {
    icon: Globe,
    name: 'Global Payment Acceptance',
    tagline: 'Accept payments everywhere',
    desc: 'Collect payments from customers in 180+ countries with a single API. Cards, bank transfers, mobile money and 50+ local payment methods all under one integration.',
    features: ['180+ countries supported', 'All major card networks', '50+ local payment methods', 'Dynamic currency conversion'],
    color: '#3B82F6',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.2)',
  },
  {
    icon: Zap,
    name: 'Instant Payouts',
    tagline: 'Send money in seconds',
    desc: 'Disburse funds to suppliers, contractors, or customers globally with real time settlement. Batch payouts, automatic FX conversion, and compliance built in.',
    features: ['Real-time settlement', '100+ payout destinations', 'Bulk payouts via API', 'Automatic FX conversion'],
    color: '#E8A020',
    bg: 'rgba(232,160,32,0.08)',
    border: 'rgba(232,160,32,0.25)',
  },
  {
    icon: TrendingUp,
    name: 'FX & Treasury',
    tagline: 'Multi-currency made simple',
    desc: 'Hold, convert, and move money across 30+ currencies at interbank rates. Virtual accounts in every major currency for frictionless cross border operations.',
    features: ['30+ currencies', 'Interbank-rate FX', 'Virtual multi-currency accounts', 'Rate lock & hedging'],
    color: '#22C55E',
    bg: 'rgba(34,197,94,0.08)',
    border: 'rgba(34,197,94,0.2)',
  },
  {
    icon: Shield,
    name: 'AI Fraud Shield',
    tagline: 'Stop fraud before it happens',
    desc: 'Our ML risk engine analyzes thousands of signals per transaction in real time, blocking fraud with a 0.3% false positive rate so legitimate customers never notice.',
    features: ['Sub-100ms decisioning', '0.3% false positive rate', 'Custom rule builder', 'Chargeback management'],
    color: '#EF4444',
    bg: 'rgba(239,68,68,0.08)',
    border: 'rgba(239,68,68,0.2)',
  },
  {
    icon: Lock,
    name: 'Compliance Engine',
    tagline: 'Compliant across every market',
    desc: 'PCI-DSS Level 1, KYC/AML screening, sanctions checks, and local regulatory frameworks managed for you so you can expand into new markets without legal headaches.',
    features: ['PCI-DSS Level 1 certified', 'KYC & AML screening', 'Sanctions & PEP checks', 'Audit-ready reporting'],
    color: '#A855F7',
    bg: 'rgba(168,85,247,0.08)',
    border: 'rgba(168,85,247,0.2)',
  },
  {
    icon: Code,
    name: 'Developer Platform',
    tagline: 'Built API first',
    desc: 'A RESTful API with predictable versioning, idempotency keys, and real time webhooks. SDKs for Node.js, Python, Go, PHP, and Ruby. Full sandbox included.',
    features: ['RESTful API + webhooks', 'Node · Python · Go · PHP SDKs', 'Full sandbox environment', 'OpenAPI spec & Postman collection'],
    color: '#06B6D4',
    bg: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.2)',
  },
]

const useCases = [
  { icon: Building2,  title: 'Fintech & Neobanks',  desc: 'Launch embedded payment products with the compliance and infrastructure of an established institution.' },
  { icon: Globe,      title: 'Marketplaces',         desc: 'Split payments, manage multiple sellers, and pay out to global merchants with a single integration.' },
  { icon: CreditCard, title: 'E-Commerce',           desc: 'Maximize authorization rates with smart routing and offer every payment method your customers prefer.' },
  { icon: RefreshCw,  title: 'Recurring & SaaS',     desc: 'Flexible subscription billing, automatic retries, and dunning management built in from day one.' },
  { icon: Smartphone, title: 'Mobile Apps',          desc: 'Native SDKs for iOS and Android with built-in 3DS2 and biometric payment flows.' },
  { icon: BarChart3,  title: 'Enterprise Treasury',  desc: 'Multi-entity FX management, virtual accounts, and consolidated reporting across all your markets.' },
]

export default function ProductsClient() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <>
      {/* Products grid */}
      <section className="pb-16 sm:pb-20" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {products.map(({ icon: Icon, name, tagline, desc, features, color, bg, border }, index) => (
              <ScrollReveal key={name} direction="up" delay={Math.min(index * 0.09, 0.36)}>
                <div
                  className="rounded-2xl p-6 transition-all duration-300 cursor-default h-full"
                  style={{
                    background: hovered === name ? bg : 'var(--bg-raised)',
                    border: `1px solid ${hovered === name ? border : 'var(--border)'}`,
                    transform: hovered === name ? 'translateY(-4px)' : 'translateY(0)',
                    boxShadow: hovered === name ? `0 16px 40px rgba(0,0,0,0.08), 0 0 0 1px ${border}` : 'none',
                  }}
                  onMouseEnter={() => setHovered(name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className="h-0.5 rounded-full mb-5" style={{ background: color, opacity: hovered === name ? 1 : 0.4 }} />
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: bg, border: `1px solid ${border}` }}>
                    <Icon size={20} style={{ color }} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color }}>{tagline}</p>
                  <h3 className="text-lg font-bold mb-3" style={{ color: 'var(--text)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>{name}</h3>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: 'var(--muted)', lineHeight: 1.7 }}>{desc}</p>
                  <ul className="space-y-2">
                    {features.map(f => (
                      <li key={f} className="flex items-center gap-2 text-xs" style={{ color: 'var(--muted)' }}>
                        <Check size={12} style={{ color, flexShrink: 0 }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact"
                    className="inline-flex items-center gap-1.5 mt-6 text-xs font-semibold transition-all"
                    style={{ color }}>
                    Learn more <ArrowRight size={12} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-16" style={{ background: 'var(--bg-surface)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal direction="up" className="mb-12 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>Use cases</p>
            <h2 className="text-3xl font-black" style={{ color: 'var(--text)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Built for every{' '}
              <span style={{ fontFamily: 'Instrument Serif, serif', fontWeight: 400, fontStyle: 'italic', color: 'var(--accent)' }}>type of business.</span>
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map(({ icon: Icon, title, desc }, index) => (
              <ScrollReveal key={title} direction="up" delay={Math.min(index * 0.09, 0.36)}>
                <div
                  className="flex items-start gap-4 p-5 rounded-2xl transition-all duration-200"
                  style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)' }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'var(--border-bright)'
                    el.style.background = 'var(--bg-float)'
                    el.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'var(--border)'
                    el.style.background = 'var(--bg-raised)'
                    el.style.transform = 'translateY(0)'
                  }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--accent-dim)', border: '1px solid var(--border-bright)' }}>
                    <Icon size={18} style={{ color: 'var(--accent)' }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm mb-1" style={{ color: 'var(--text)' }}>{title}</h3>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--muted)', lineHeight: 1.65 }}>{desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
