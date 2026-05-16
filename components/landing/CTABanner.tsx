'use client'
import Link from 'next/link'
import ScrollReveal from '@/components/shared/ScrollReveal'

export default function CTABanner() {
  return (
    <section className="py-10 sm:py-14" style={{ background: 'var(--bg-primary)' }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <div
          className="relative rounded-3xl px-8 py-12 lg:px-14 lg:py-14 overflow-hidden text-center"
          style={{
            background: 'linear-gradient(135deg, #1A1200 0%, #0D1117 40%, #0A0F1E 100%)',
            border: '1px solid rgba(232,160,32,0.2)',
            boxShadow: '0 0 80px rgba(232,160,32,0.1), 0 32px 64px rgba(0,0,0,0.4)',
          }}
        >
          {/* Gold glow — top right */}
          <div className="absolute top-0 right-0 w-80 h-80 pointer-events-none"
            style={{ background: 'radial-gradient(circle at top right, rgba(232,160,32,0.28) 0%, transparent 65%)' }} />

          {/* Blue glow — top left */}
          <div className="absolute top-0 left-0 w-72 h-72 pointer-events-none"
            style={{ background: 'radial-gradient(circle at top left, rgba(59,130,246,0.18) 0%, transparent 65%)' }} />

          {/* Green glow — bottom left */}
          <div className="absolute bottom-0 left-1/4 w-64 h-64 pointer-events-none"
            style={{ background: 'radial-gradient(circle at bottom, rgba(34,197,94,0.12) 0%, transparent 65%)' }} />

          {/* Purple glow — bottom right */}
          <div className="absolute bottom-0 right-1/4 w-64 h-64 pointer-events-none"
            style={{ background: 'radial-gradient(circle at bottom right, rgba(168,85,247,0.1) 0%, transparent 65%)' }} />

          {/* Top shimmer line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-px w-3/4 pointer-events-none"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(232,160,32,0.7), transparent)' }} />

          {/* Subtle grid */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          <ScrollReveal direction="up">
          <div className="relative">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-semibold uppercase tracking-widest"
              style={{ background: 'rgba(232,160,32,0.12)', border: '1px solid rgba(232,160,32,0.3)', color: '#E8A020' }}>
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#E8A020' }} />
              Start building today
            </div>

            <h2 className="text-3xl lg:text-4xl font-black mb-4 leading-tight"
              style={{ color: '#F0F2F8', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
              Ready to power your<br />
              <span style={{ fontFamily: 'Instrument Serif, serif', fontWeight: 400, fontStyle: 'italic', color: '#E8A020' }}>
                payment infrastructure?
              </span>
            </h2>

            <p className="text-base mb-8 max-w-xl mx-auto" style={{ color: 'rgba(240,242,248,0.55)', fontWeight: 300 }}>
              Join 210+ businesses building with NorvexPay. No setup fees. Go live in days.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                style={{ background: '#E8A020', color: '#000', minWidth: '180px', textAlign: 'center', boxShadow: '0 0 24px rgba(232,160,32,0.4)' }}
              >
                Get started today
              </Link>
              <Link
                href="/products"
                className="px-8 py-3.5 rounded-xl font-semibold text-sm transition-all hover:scale-105"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(240,242,248,0.8)', minWidth: '150px', textAlign: 'center' }}
              >
                Explore products
              </Link>
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
