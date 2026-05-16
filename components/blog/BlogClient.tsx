'use client'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Clock, Calendar, ChevronRight } from 'lucide-react'
import ScrollReveal from '@/components/shared/ScrollReveal'

export type Post = {
  id: number
  title: string
  excerpt: string
  category: string
  categoryColor: string
  date: string
  readTime: string
  featured: boolean
  gradient: string
  accentColor: string
}

function CategoryBadge({ label, color }: { label: string; color: string }) {
  return (
    <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold"
      style={{ background: `${color}18`, color, border: `1px solid ${color}30` }}>
      {label}
    </span>
  )
}

export default function BlogClient({ posts, categories }: { posts: Post[]; categories: string[] }) {
  const [active, setActive] = useState('All')
  const [emailSub, setEmailSub] = useState('')
  const [subDone, setSubDone] = useState(false)

  const featured = posts.find(p => p.featured)!
  const filtered = active === 'All' ? posts : posts.filter(p => p.category === active)
  const grid = filtered.filter(p => !p.featured || active !== 'All')

  const handleSub = () => {
    if (emailSub) { setSubDone(true); setEmailSub('') }
  }

  return (
    <>
      {/* Featured post */}
      {active === 'All' && (
        <section className="pb-10" style={{ background: 'var(--bg-primary)' }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <ScrollReveal direction="up">
              <div
                className="relative rounded-3xl p-8 lg:p-12 overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.01]"
                style={{ background: featured.gradient, border: '1px solid rgba(255,255,255,0.08)' }}>
                <div className="absolute top-0 right-0 w-96 h-96 pointer-events-none"
                  style={{ background: `radial-gradient(circle at top right, ${featured.accentColor}25 0%, transparent 65%)` }} />
                <div className="relative grid lg:grid-cols-[1fr_auto] gap-8 items-end">
                  <div>
                    <div className="flex items-center gap-3 mb-5">
                      <CategoryBadge label={featured.category} color={featured.accentColor} />
                      <span className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>Featured</span>
                    </div>
                    <h2 className="text-2xl lg:text-4xl font-black mb-4 leading-snug"
                      style={{ color: '#F0F2F8', fontFamily: 'Plus Jakarta Sans, sans-serif', maxWidth: '640px' }}>
                      {featured.title}
                    </h2>
                    <p className="text-base mb-6 max-w-xl" style={{ color: 'rgba(240,242,248,0.55)', lineHeight: 1.75, fontWeight: 300 }}>
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                        <Calendar size={12} /> {featured.date}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>
                        <Clock size={12} /> {featured.readTime}
                      </div>
                    </div>
                  </div>
                  <Link href="#"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm self-end transition-all hover:scale-105 flex-shrink-0"
                    style={{ background: featured.accentColor, color: '#000' }}>
                    Read article <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Category filter + grid */}
      <section className="py-10 pb-16" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal direction="left" className="flex gap-2 flex-wrap mb-10">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActive(cat)}
                className="px-4 py-2 rounded-xl text-sm font-medium transition-all"
                style={{
                  background: active === cat ? 'var(--accent)' : 'var(--bg-raised)',
                  color: active === cat ? '#000' : 'var(--muted)',
                  border: `1px solid ${active === cat ? 'var(--accent)' : 'var(--border)'}`,
                }}>
                {cat}
              </button>
            ))}
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {grid.map((post, index) => (
              <ScrollReveal key={post.id} direction="up" delay={Math.min(index * 0.09, 0.36)}>
                <article
                  className="rounded-2xl overflow-hidden transition-all duration-300 group cursor-pointer"
                  style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)' }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = post.accentColor + '50'
                    el.style.transform = 'translateY(-4px)'
                    el.style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'var(--border)'
                    el.style.transform = 'translateY(0)'
                    el.style.boxShadow = 'none'
                  }}>
                  <div className="h-1" style={{ background: `linear-gradient(90deg, ${post.accentColor}, ${post.accentColor}40)` }} />
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <CategoryBadge label={post.category} color={post.categoryColor} />
                    </div>
                    <h3 className="font-bold text-base leading-snug mb-3"
                      style={{ color: 'var(--text)', fontFamily: 'Plus Jakarta Sans, sans-serif', lineHeight: 1.4 }}>
                      {post.title}
                    </h3>
                    <p className="text-xs leading-relaxed mb-5" style={{ color: 'var(--muted)', lineHeight: 1.7 }}>
                      {post.excerpt.length > 120 ? post.excerpt.slice(0, 120) + '…' : post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--muted)' }}>
                          <Calendar size={11} /> {post.date}
                        </span>
                        <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--muted)' }}>
                          <Clock size={11} /> {post.readTime}
                        </span>
                      </div>
                      <Link href="#"
                        className="flex items-center gap-1 text-xs font-semibold transition-colors"
                        style={{ color: post.accentColor }}>
                        Read <ChevronRight size={12} />
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-14" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)' }}>
        <ScrollReveal direction="up" className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>Stay in the loop</p>
          <h2 className="text-2xl font-black mb-3" style={{ color: 'var(--text)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
            Get our best thinking{' '}
            <span style={{ fontFamily: 'Instrument Serif, serif', fontWeight: 400, fontStyle: 'italic', color: 'var(--accent)' }}>in your inbox.</span>
          </h2>
          <p className="text-sm mb-7" style={{ color: 'var(--muted)', fontWeight: 300 }}>
            New articles every week. No spam, unsubscribe any time.
          </p>
          {!subDone ? (
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                value={emailSub}
                onChange={e => setEmailSub(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleSub()}
                className="flex-1 px-4 py-3 rounded-xl text-sm outline-none"
                style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)', color: 'var(--text)' }}
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
              <button onClick={handleSub}
                className="px-5 py-3 rounded-xl font-semibold text-sm flex-shrink-0 transition-all hover:scale-105"
                style={{ background: 'var(--accent)', color: '#000' }}>
                Subscribe
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 text-sm font-medium" style={{ color: 'var(--success)' }}>
              ✓ You&apos;re subscribed. Welcome aboard!
            </div>
          )}
        </ScrollReveal>
      </section>
    </>
  )
}
