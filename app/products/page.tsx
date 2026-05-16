import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import ScrollReveal from '@/components/shared/ScrollReveal'
import ProductsClient from '@/components/products/ProductsClient'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Products — NorvexPay',
  description: 'Six modular payment products, one unified API. Global acceptance, instant payouts, FX management, AI fraud protection, compliance, and a developer platform.',
  openGraph: {
    title: 'Products — NorvexPay',
    description: 'Six modular payment products, one unified API.',
    type: 'website',
  },
}

export default function Products() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg-primary)', paddingTop: '72px' }}>

        {/* Page header — server-rendered for SEO */}
        <section className="pt-14 pb-2 sm:pt-16 sm:pb-4" style={{ background: 'var(--bg-primary)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="mb-12 text-center">
              <ScrollReveal direction="left">
                <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>What we offer</p>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={0.18}>
                <h1 className="text-3xl lg:text-4xl font-black mb-4" style={{ color: 'var(--text)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Six products. One{' '}
                  <span style={{ fontFamily: 'Instrument Serif, serif', fontWeight: 400, fontStyle: 'italic', color: 'var(--accent)' }}>unified API.</span>
                </h1>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.36}>
                <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--muted)', fontWeight: 300 }}>
                  Every product is modular. Use one, use all. They&apos;re designed to work together seamlessly.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Interactive product grid + use cases */}
        <ProductsClient />

        {/* CTA */}
        <section className="py-14" style={{ background: 'var(--bg-primary)' }}>
          <ScrollReveal direction="up" className="max-w-3xl mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-3xl font-black mb-4" style={{ color: 'var(--text)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Ready to see it in{' '}
              <span style={{ fontFamily: 'Instrument Serif, serif', fontWeight: 400, fontStyle: 'italic', color: 'var(--accent)' }}>action?</span>
            </h2>
            <p className="text-base mb-8" style={{ color: 'var(--muted)', fontWeight: 300 }}>
              Get a personalised walkthrough from our team. No commitment, no sales pressure.
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm transition-all hover:scale-105"
              style={{ background: 'var(--accent)', color: '#000', boxShadow: '0 0 24px rgba(232,160,32,0.3)' }}>
              Book a demo <ArrowRight size={15} />
            </Link>
          </ScrollReveal>
        </section>

      </main>
      <Footer />
    </>
  )
}
