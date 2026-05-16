'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const centerLinks = [
  { label: 'Products', href: '/products' },
  { label: 'Payment Gateway', href: '/payment-gateway' },
  { label: 'Blog', href: '/blog' },
]

const allMobileLinks = [
  { label: 'Products', href: '/products' },
  { label: 'Payment Gateway', href: '/payment-gateway' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [backdropReady, setBackdropReady] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    if (mobileOpen) {
      const t = setTimeout(() => setBackdropReady(true), 320)
      return () => clearTimeout(t)
    } else {
      setBackdropReady(false)
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const close = () => setMobileOpen(false)

  const linkStyle = "px-3 py-2 rounded-lg text-sm font-medium transition-colors"

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[999] h-[72px] flex items-center px-4 sm:px-8 lg:px-16 transition-all duration-300"
        style={{
          background: scrolled || mobileOpen ? 'var(--nav-bg-scrolled)' : 'transparent',
          backdropFilter: scrolled || mobileOpen ? 'blur(20px)' : 'none',
          borderBottom: scrolled || mobileOpen ? '1px solid var(--border)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center flex-shrink-0" onClick={close}>
          <Image
            src="/norvex-logo.png"
            alt="NorvexPay"
            height={40}
            width={160}
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>

        {/* Desktop links — start at center, spread to right edge */}
        <div className="hidden lg:flex items-center gap-1 absolute left-1/2">
          {centerLinks.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className={linkStyle}
              style={{ color: 'var(--muted)' }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className={linkStyle}
            style={{ color: 'var(--muted)' }}
            onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
            onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}
          >
            Contact
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden ml-auto p-2 rounded-lg"
          style={{ color: 'var(--text)' }}
          onClick={() => setMobileOpen(v => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <>
          <div
            className="fixed inset-0 z-[997] lg:hidden"
            style={{
              top: '72px',
              background: 'rgba(0,0,0,0.3)',
              backdropFilter: 'blur(4px)',
              pointerEvents: backdropReady ? 'auto' : 'none',
            }}
            onClick={close}
          />
          <div
            className="fixed left-0 right-0 z-[998] lg:hidden"
            style={{
              top: '72px',
              background: 'var(--bg-raised)',
              borderBottom: '1px solid var(--border)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
              animation: 'dropDown 0.22s ease forwards',
            }}
          >
            <div className="divide-y" style={{ borderColor: 'var(--border)' }}>
              {allMobileLinks.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="flex items-center px-6 py-4 text-sm font-medium transition-all"
                  style={{ color: 'var(--text)' }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-float)')}
                  onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  onClick={close}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </>
      )}

      <style>{`
        @keyframes dropDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
