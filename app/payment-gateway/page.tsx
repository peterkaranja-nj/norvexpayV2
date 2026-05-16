import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import TrustStripe from '@/components/landing/TrustStripe'
import ScrollReveal from '@/components/shared/ScrollReveal'
import GatewayClient from '@/components/gateway/GatewayClient'
import { ArrowRight, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Payment Gateway — NorvexPay',
  description: 'Smart routing, 3DS2 authentication, network tokenisation, and real time analytics combined into one gateway built to maximise your acceptance rate.',
  openGraph: {
    title: 'Payment Gateway — NorvexPay',
    description: 'One gateway built to maximise your payment acceptance rate.',
    type: 'website',
  },
}

export default function PaymentGateway() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg-primary)', paddingTop: '72px' }}>

        {/* Hero — server-rendered for SEO */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '560px', height: '560px', background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 65%)', filter: 'blur(60px)' }} />
            <div style={{ position: 'absolute', bottom: '0', left: '-80px', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(232,160,32,0.1) 0%, transparent 65%)', filter: 'blur(60px)' }} />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
                  style={{ background: 'var(--accent-dim)', border: '1px solid var(--border-bright)', color: 'var(--accent)' }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
                  Payment Gateway
                </div>
                <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-6"
                  style={{ color: 'var(--text)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  The gateway that routes every payment to its{' '}
                  <span style={{ fontFamily: 'Instrument Serif, serif', fontWeight: 400, fontStyle: 'italic', color: 'var(--accent)' }}>
                    best outcome.
                  </span>
                </h1>
                <p className="text-lg mb-8" style={{ color: 'var(--muted)', fontWeight: 300, lineHeight: 1.75 }}>
                  Smart routing, 3DS2 authentication, network tokenisation, and real time analytics combined into one gateway built to maximise your acceptance rate.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                    style={{ background: 'var(--accent)', color: '#000' }}>
                    Get started <ArrowRight size={15} />
                  </Link>
                  <Link href="/products"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm border transition-all hover:scale-105"
                    style={{ border: '1px solid var(--border)', color: 'var(--text)' }}>
                    All products <ChevronRight size={15} />
                  </Link>
                </div>
              </ScrollReveal>

              {/* Live transaction flow card */}
              <ScrollReveal direction="right" delay={0.2}>
                <div className="rounded-2xl p-6" style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)' }}>
                  <p className="text-xs font-mono mb-4" style={{ color: 'var(--muted)' }}>// Live transaction flow</p>
                  {[
                    { label: 'Customer initiates payment', status: 'done',    ms: null },
                    { label: 'Fraud & risk screening',     status: 'done',    ms: '12ms' },
                    { label: 'Smart acquirer selection',   status: 'done',    ms: '8ms' },
                    { label: '3DS2 authentication',        status: 'done',    ms: '24ms' },
                    { label: 'Authorisation sent',         status: 'active',  ms: '—' },
                    { label: 'Settlement',                 status: 'pending', ms: '—' },
                  ].map(({ label, status, ms }) => (
                    <div key={label} className="flex items-center gap-3 py-2.5 border-b last:border-b-0" style={{ borderColor: 'var(--border)' }}>
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${status === 'active' ? 'animate-pulse' : ''}`}
                        style={{ background: status === 'done' ? 'var(--success)' : status === 'active' ? 'var(--accent)' : 'var(--border)' }} />
                      <span className="text-xs flex-1" style={{ color: status === 'pending' ? 'var(--muted)' : 'var(--text)' }}>{label}</span>
                      {ms && <span className="text-xs font-mono" style={{ color: status === 'done' ? 'var(--success)' : 'var(--muted)' }}>{ms}</span>}
                    </div>
                  ))}
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs" style={{ color: 'var(--muted)' }}>Total so far</span>
                    <span className="text-sm font-bold font-mono" style={{ color: 'var(--accent)' }}>44ms</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Interactive sections: How it works, Features, Code */}
        <GatewayClient />

        {/* Payment methods */}
        <TrustStripe />

        {/* CTA */}
        <section className="py-14" style={{ background: 'var(--bg-primary)' }}>
          <ScrollReveal direction="up" className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-black mb-4" style={{ color: 'var(--text)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Start accepting payments{' '}
              <span style={{ fontFamily: 'Instrument Serif, serif', fontWeight: 400, fontStyle: 'italic', color: 'var(--accent)' }}>today.</span>
            </h2>
            <p className="text-base mb-8" style={{ color: 'var(--muted)', fontWeight: 300 }}>
              No setup fees. Sandbox access immediately. Speak to our team for enterprise pricing.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all hover:scale-105"
              style={{ background: 'var(--accent)', color: '#000', boxShadow: '0 0 24px rgba(232,160,32,0.3)' }}>
              Get started <ArrowRight size={15} />
            </Link>
          </ScrollReveal>
        </section>

      </main>
      <Footer />
    </>
  )
}
