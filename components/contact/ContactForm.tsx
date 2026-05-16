'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Check } from 'lucide-react'

const inputStyle = {
  background: 'var(--bg-float)',
  border: '1px solid var(--border)',
  color: 'var(--text)',
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    volume: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
          style={{ background: 'rgba(34,197,94,0.15)', border: '1px solid rgba(34,197,94,0.3)' }}
        >
          <Check size={32} style={{ color: 'var(--success)' }} />
        </div>
        <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text)' }}>Message received!</h3>
        <p className="text-sm mb-8 max-w-xs" style={{ color: 'var(--muted)', lineHeight: 1.75 }}>
          Thanks for reaching out. Our team will be in touch within 24 hours.
        </p>
        <Link href="/" className="text-sm font-medium" style={{ color: 'var(--accent)' }}>
          ← Back to home
        </Link>
      </div>
    )
  }

  return (
    <>
      <h2 className="text-xl font-bold mb-6" style={{ color: 'var(--text)' }}>Tell us about your business</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-medium mb-2" style={{ color: 'var(--muted)' }}>Full name *</label>
            <input
              required
              type="text"
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              placeholder="James Thornton"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
              style={inputStyle}
              onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            />
          </div>
          <div>
            <label className="block text-xs font-medium mb-2" style={{ color: 'var(--muted)' }}>Company *</label>
            <input
              required
              type="text"
              value={form.company}
              onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
              placeholder="Acme Corp"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
              style={inputStyle}
              onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-medium mb-2" style={{ color: 'var(--muted)' }}>Work email *</label>
            <input
              required
              type="email"
              value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              placeholder="james@company.com"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
              style={inputStyle}
              onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            />
          </div>
          <div>
            <label className="block text-xs font-medium mb-2" style={{ color: 'var(--muted)' }}>Phone</label>
            <input
              type="tel"
              value={form.phone}
              onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
              placeholder="+1 (555) 000-0000"
              className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
              style={inputStyle}
              onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium mb-2" style={{ color: 'var(--muted)' }}>Estimated monthly volume</label>
          <select
            value={form.volume}
            onChange={e => setForm(f => ({ ...f, volume: e.target.value }))}
            className="w-full px-4 py-3 rounded-xl text-sm outline-none appearance-none cursor-pointer"
            style={{ ...inputStyle, color: form.volume ? 'var(--text)' : 'var(--muted)' }}
          >
            <option value="">Select volume range</option>
            <option value="under-10k">Under $10,000 / month</option>
            <option value="10k-50k">$10,000 – $50,000 / month</option>
            <option value="50k-250k">$50,000 – $250,000 / month</option>
            <option value="250k-1m">$250,000 – $1M / month</option>
            <option value="over-1m">Over $1M / month</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium mb-2" style={{ color: 'var(--muted)' }}>Tell us about your use case</label>
          <textarea
            rows={4}
            value={form.message}
            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            placeholder="Describe what you're building and how we can help..."
            className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none transition-all"
            style={inputStyle}
            onFocus={e => (e.currentTarget.style.borderColor = 'var(--accent)')}
            onBlur={e => (e.currentTarget.style.borderColor = 'var(--border)')}
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-xl font-semibold text-sm transition-all hover:scale-[1.02]"
          style={{ background: 'var(--accent)', color: '#000' }}
        >
          Send message
        </button>

        <p className="text-xs text-center" style={{ color: 'var(--muted)' }}>
          We typically respond within 24 hours. No spam, ever.
        </p>
      </form>
    </>
  )
}
