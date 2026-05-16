import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import ScrollReveal from '@/components/shared/ScrollReveal'
import BlogClient, { type Post } from '@/components/blog/BlogClient'

export const metadata: Metadata = {
  title: 'Blog — NorvexPay',
  description: 'Product deep dives, fintech analysis, developer guides, and company news from the team building the infrastructure layer for global commerce.',
  openGraph: {
    title: 'Blog — NorvexPay',
    description: 'Insights from the frontier of global payments.',
    type: 'website',
  },
}

const categories = ['All', 'Product Updates', 'Fintech Insights', 'Developer Guides', 'Company']

const posts: Post[] = [
  {
    id: 1,
    title: 'How NorvexPay Achieves 99.99% Uptime Across 40+ Markets',
    excerpt: 'Behind our reliability SLA is a distributed architecture spanning multiple regions, automatic failover, and an on-call engineering team that treats every incident as P0. Here\'s how we do it.',
    category: 'Product Updates',
    categoryColor: '#E8A020',
    date: 'May 12, 2026',
    readTime: '8 min read',
    featured: true,
    gradient: 'linear-gradient(135deg, #1A1200 0%, #2D1F00 100%)',
    accentColor: '#E8A020',
  },
  {
    id: 2,
    title: 'Cross-Border Payments in 2026: What\'s Changed',
    excerpt: 'From SWIFT gpi to instant payment rails across Africa and Southeast Asia. The global payments landscape has shifted dramatically. We break down what matters for your business.',
    category: 'Fintech Insights',
    categoryColor: '#3B82F6',
    date: 'May 8, 2026',
    readTime: '5 min read',
    featured: false,
    gradient: 'linear-gradient(135deg, #0A1628 0%, #0D1F3C 100%)',
    accentColor: '#3B82F6',
  },
  {
    id: 3,
    title: 'Building Your First Payment Integration with the NorvexPay API',
    excerpt: 'A hands-on guide for developers: from API keys and sandbox setup to handling webhooks, retries, and going live. Includes code samples in Node.js, Python, and Go.',
    category: 'Developer Guides',
    categoryColor: '#06B6D4',
    date: 'May 3, 2026',
    readTime: '12 min read',
    featured: false,
    gradient: 'linear-gradient(135deg, #001A1F 0%, #002830 100%)',
    accentColor: '#06B6D4',
  },
  {
    id: 4,
    title: 'The Rise of Mobile Money in Sub-Saharan Africa',
    excerpt: 'M-Pesa, Airtel Money, MTN MoMo. Mobile first payment rails are transforming commerce across Africa. Why global businesses can\'t afford to ignore them.',
    category: 'Fintech Insights',
    categoryColor: '#3B82F6',
    date: 'Apr 28, 2026',
    readTime: '6 min read',
    featured: false,
    gradient: 'linear-gradient(135deg, #0A1628 0%, #0D1F3C 100%)',
    accentColor: '#22C55E',
  },
  {
    id: 5,
    title: 'How We Reduced Payment Fraud by 87% Using Machine Learning',
    excerpt: 'A deep dive into our AI Fraud Shield: the feature engineering, model architecture, and operational processes that cut fraud losses for customers in the first quarter after launch.',
    category: 'Product Updates',
    categoryColor: '#E8A020',
    date: 'Apr 21, 2026',
    readTime: '7 min read',
    featured: false,
    gradient: 'linear-gradient(135deg, #1A0A00 0%, #2A1000 100%)',
    accentColor: '#EF4444',
  },
  {
    id: 6,
    title: 'Multi-Currency Treasury Management for Global SMBs',
    excerpt: 'Holding multiple currencies doesn\'t have to be complicated. A practical guide to managing FX exposure, settlement timing, and interbank-rate conversions at scale.',
    category: 'Fintech Insights',
    categoryColor: '#3B82F6',
    date: 'Apr 14, 2026',
    readTime: '5 min read',
    featured: false,
    gradient: 'linear-gradient(135deg, #001A0A 0%, #002810 100%)',
    accentColor: '#22C55E',
  },
  {
    id: 7,
    title: 'NorvexPay Expands Payment Coverage to 12 New Markets',
    excerpt: 'We\'re live in Bangladesh, Vietnam, Ecuador, and nine more countries, bringing our total coverage to 52 markets. Here\'s what that means for your payment stack.',
    category: 'Company',
    categoryColor: '#A855F7',
    date: 'Apr 7, 2026',
    readTime: '3 min read',
    featured: false,
    gradient: 'linear-gradient(135deg, #0F0A1A 0%, #180F28 100%)',
    accentColor: '#A855F7',
  },
  {
    id: 8,
    title: 'Idempotency Keys: Why They Matter and How to Use Them',
    excerpt: 'Network failures happen. Without idempotency keys, a retry can mean a duplicate charge. This guide explains how NorvexPay handles idempotency and how to implement it correctly.',
    category: 'Developer Guides',
    categoryColor: '#06B6D4',
    date: 'Mar 31, 2026',
    readTime: '9 min read',
    featured: false,
    gradient: 'linear-gradient(135deg, #001A1F 0%, #002830 100%)',
    accentColor: '#06B6D4',
  },
]

export default function Blog() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg-primary)', paddingTop: '72px' }}>

        {/* Hero — server-rendered for SEO */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(232,160,32,0.09) 0%, transparent 65%)', filter: 'blur(60px)' }} />
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
            <ScrollReveal direction="left">
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'var(--accent)' }}>The NorvexPay Journal</p>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.18}>
              <h1 className="text-4xl lg:text-5xl font-black leading-tight mb-4"
                style={{ color: 'var(--text)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                Insights from the frontier of{' '}
                <span style={{ fontFamily: 'Instrument Serif, serif', fontWeight: 400, fontStyle: 'italic', color: 'var(--accent)' }}>
                  global payments.
                </span>
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.36}>
              <p className="text-lg max-w-xl" style={{ color: 'var(--muted)', fontWeight: 300 }}>
                Product deep dives, fintech analysis, developer guides, and company news from the team building the infrastructure layer for global commerce.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Interactive: filter, grid, newsletter */}
        <BlogClient posts={posts} categories={categories} />

      </main>
      <Footer />
    </>
  )
}
