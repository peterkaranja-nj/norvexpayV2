import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import ScrollReveal from '@/components/shared/ScrollReveal'
import ContactForm from '@/components/contact/ContactForm'
import { Mail, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact — NorvexPay',
  description: 'Get in touch with the NorvexPay team. Tell us about your business and we\'ll help you find the right payment infrastructure to power your growth.',
  openGraph: {
    title: 'Contact — NorvexPay',
    description: 'Get in touch with the NorvexPay team.',
    type: 'website',
  },
}

const contactDetails = [
  { icon: Mail,   label: 'Email',        value: 'support@norvexpay.com',                       color: '#3B82F6', bg: 'rgba(59,130,246,0.1)',  border: 'rgba(59,130,246,0.25)' },
  { icon: Phone,  label: 'Sales',        value: '+1 (662) 574-6179',                            color: '#22C55E', bg: 'rgba(34,197,94,0.1)',   border: 'rgba(34,197,94,0.25)'  },
  { icon: MapPin, label: 'Headquarters', value: '12 Old Bond Street, Mayfair, London W1S 4PW',  color: '#A855F7', bg: 'rgba(168,85,247,0.1)', border: 'rgba(168,85,247,0.25)' },
]

export default function Contact() {
  return (
    <>
      <Navbar />
      <main style={{ background: 'var(--bg-primary)', paddingTop: '72px' }}>

        {/* Hero — server-rendered for SEO */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[400px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at top right, rgba(232,160,32,0.14) 0%, transparent 70%)' }} />
          <div className="absolute top-0 left-0 w-[400px] h-[350px] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at top left, rgba(59,130,246,0.1) 0%, transparent 70%)' }} />
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-2xl mx-auto text-center">
              <ScrollReveal direction="left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
                  style={{ background: 'var(--accent-dim)', border: '1px solid var(--border-bright)', color: 'var(--accent)' }}>
                  <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: 'var(--accent)' }} />
                  Get started
                </div>
              </ScrollReveal>
              <ScrollReveal direction="left" delay={0.18}>
                <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight"
                  style={{ color: 'var(--text)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
                  Let&apos;s build something<br />
                  <span style={{ fontFamily: 'Instrument Serif, serif', fontWeight: 400, fontStyle: 'italic', color: 'var(--accent)' }}>
                    great together.
                  </span>
                </h1>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.36}>
                <p className="text-lg" style={{ color: 'var(--muted)', fontWeight: 300, lineHeight: 1.75 }}>
                  Tell us about your business and we&apos;ll help you find the right payment infrastructure to power your growth.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Form + Sidebar */}
        <section className="pb-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-[60fr_40fr] gap-12 items-start">

              {/* Contact form — client component */}
              <ScrollReveal direction="left">
                <div
                  className="rounded-2xl p-8 relative overflow-hidden"
                  style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)' }}
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: 'linear-gradient(90deg, #3B82F6, #E8A020, #22C55E, #A855F7)' }} />
                  <ContactForm />
                </div>
              </ScrollReveal>

              {/* Sidebar — fully static */}
              <ScrollReveal direction="right" delay={0.2}>
                <div className="rounded-2xl p-6 relative overflow-hidden" style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)' }}>
                  <div className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: 'linear-gradient(90deg, #3B82F6, #22C55E, #A855F7)' }} />
                  <h3 className="font-bold mb-4" style={{ color: 'var(--text)' }}>Other ways to reach us</h3>
                  <div className="space-y-4">
                    {contactDetails.map(({ icon: Icon, label, value, color, bg, border }) => (
                      <div key={label} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: bg, border: `1px solid ${border}` }}>
                          <Icon size={14} style={{ color, flexShrink: 0 }} />
                        </div>
                        <div>
                          <div className="text-xs" style={{ color: 'var(--muted)' }}>{label}</div>
                          <div className="text-sm font-medium" style={{ color: 'var(--text)' }}>{value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
