'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Twitter, Linkedin, Instagram, Facebook, Mail, MapPin, Phone } from 'lucide-react'

const navLinks = [
  { label: 'Products', href: '/products' },
  { label: 'Payment Gateway', href: '/payment-gateway' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const legalLinks = ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'AML Policy']

const socials = [
  { Icon: Twitter,   href: 'https://twitter.com/norvexpayltd',         label: 'X' },
  { Icon: Linkedin,  href: 'https://linkedin.com/company/norvexpayltd', label: 'LinkedIn' },
  { Icon: Instagram, href: 'https://instagram.com/norvexpayltd',        label: 'Instagram' },
  { Icon: Facebook,  href: 'https://facebook.com/norvexpayltd',         label: 'Facebook' },
]

const colHeader = 'text-xs font-semibold uppercase tracking-wider mb-5'
const colHeaderStyle = { color: 'var(--muted)' }

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false)
  const [email, setEmail] = useState('')

  const handleSubscribe = () => {
    if (email) {
      setSubscribed(true)
      setTimeout(() => setSubscribed(false), 3000)
      setEmail('')
    }
  }

  return (
    <footer className="relative" style={{ background: 'var(--bg-primary)', borderTop: '1px solid var(--border)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1.5fr_2fr] gap-10 lg:gap-6">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center mb-4" style={{ color: 'var(--text)' }}>
              <Image
                src="/norvex-logo.png"
                alt="NorvexPay"
                height={34}
                width={136}
                style={{ objectFit: 'contain', objectPosition: 'left' }}
              />
            </Link>
            <p className="text-sm mb-5" style={{ color: 'var(--muted)', lineHeight: 1.75 }}>
              Global payment infrastructure for businesses operating across borders.
            </p>
            <div className="flex gap-2 flex-wrap">
              {socials.map(({ Icon, href, label }) => (
                <Link key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                  style={{ background: 'var(--bg-raised)', color: 'var(--muted)' }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.color = 'var(--accent)'
                    el.style.background = 'var(--accent-dim)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.color = 'var(--muted)'
                    el.style.background = 'var(--bg-raised)'
                  }}>
                  <Icon size={14} />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className={colHeader} style={colHeaderStyle}>Navigation</h4>
            {navLinks.map(({ label, href }) => (
              <Link key={label} href={href}
                className="block text-sm py-1.5 transition-colors"
                style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
                {label}
              </Link>
            ))}
          </div>

          {/* Legal */}
          <div>
            <h4 className={colHeader} style={colHeaderStyle}>Legal</h4>
            {legalLinks.map(label => (
              <Link key={label} href="#"
                className="block text-sm py-1.5 transition-colors"
                style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
                {label}
              </Link>
            ))}
          </div>

          {/* Location */}
          <div>
            <h4 className={colHeader} style={colHeaderStyle}>Location</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: 'rgba(168,85,247,0.12)', border: '1px solid rgba(168,85,247,0.25)' }}>
                  <MapPin size={11} style={{ color: '#A855F7' }} />
                </div>
                <address className="text-xs not-italic leading-relaxed" style={{ color: 'var(--muted)' }}>
                  Norvex Pay Ltd<br />
                  12 Old Bond Street<br />
                  Mayfair, London<br />
                  W1S 4PW
                </address>
              </div>
              <a href="mailto:support@norvexpay.com"
                className="flex items-center gap-2.5 text-xs transition-colors"
                style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#3B82F6')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
                <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.25)' }}>
                  <Mail size={11} style={{ color: '#3B82F6' }} />
                </div>
                support@norvexpay.com
              </a>
              <a href="tel:+16625746179"
                className="flex items-center gap-2.5 text-xs transition-colors"
                style={{ color: 'var(--muted)' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#22C55E')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--muted)')}>
                <div className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(34,197,94,0.12)', border: '1px solid rgba(34,197,94,0.25)' }}>
                  <Phone size={11} style={{ color: '#22C55E' }} />
                </div>
                +1 (662) 574-6179
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className={colHeader} style={colHeaderStyle}>Stay in the loop</h4>
            <p className="text-xs mb-4 -mt-3" style={{ color: 'var(--muted)' }}>Product updates, fintech insights, no spam.</p>
            <div className="flex gap-2 mb-2">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="flex-1 px-3 py-2 rounded-lg text-sm outline-none min-w-0"
                style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)', color: 'var(--text)' }}
                onFocus={e => (e.target.style.borderColor = 'var(--accent)')}
                onBlur={e => (e.target.style.borderColor = 'var(--border)')}
              />
              <button
                onClick={handleSubscribe}
                className="px-3 py-2 rounded-lg text-sm font-medium flex-shrink-0 transition-all"
                style={{ background: subscribed ? 'var(--success)' : 'var(--accent)', color: '#000' }}
              >
                {subscribed ? '✓' : 'Subscribe'}
              </button>
            </div>
            {subscribed && <p className="text-xs mt-2" style={{ color: 'var(--success)' }}>✓ Subscribed!</p>}
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6" style={{ borderTop: '1px solid var(--border)' }}>
          <span className="text-xs" style={{ color: 'var(--muted)' }}>
            © 2026 Norvex Pay Ltd. Registered in England & Wales.
          </span>
        </div>
      </div>
    </footer>
  )
}
