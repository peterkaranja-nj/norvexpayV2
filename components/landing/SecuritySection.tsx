'use client'
import { useState } from 'react'
import { Lock, Shield, Wifi, Server, HardDrive, FileCheck } from 'lucide-react'
import ScrollReveal from '@/components/shared/ScrollReveal'

const ringLabels = ['Compliance', 'Infrastructure', 'Network', 'Application', 'Data']
const ringDetails: Record<string, string> = {
  Compliance: 'PCI DSS Level 1 · ISO 27001 · SOC 2 Type II · GDPR · FCA',
  Infrastructure: 'Air gapped backups · HSM key storage · Quarterly pen testing',
  Network: 'Zero trust architecture · DDoS protection · WAF',
  Application: 'SAST/DAST scanning · SBOM · Dependency auditing',
  Data: 'AES-256 at rest · TLS 1.3 in transit · Field level encryption',
}

const pillars = [
  { icon: HardDrive, label: 'AES-256 encryption at rest',      color: '#3B82F6' },
  { icon: Wifi,      label: 'TLS 1.3 in transit',              color: '#06B6D4' },
  { icon: Shield,    label: 'Zero trust network architecture',  color: '#A855F7' },
  { icon: Lock,      label: 'HSM key storage',                  color: '#E8A020' },
  { icon: FileCheck, label: 'Quarterly penetration testing',    color: '#22C55E' },
  { icon: Server,    label: 'Air gapped backup infrastructure', color: '#EF4444' },
]

export default function SecuritySection() {
  const [hoveredRing, setHoveredRing] = useState<string | null>(null)

  return (
    <section className="py-14 sm:py-20" style={{ background: 'var(--bg-surface)' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <ScrollReveal direction="left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: 'var(--accent)' }}>Security</p>
            <h2
              className="text-3xl lg:text-5xl font-black mb-4 leading-tight"
              style={{ color: 'var(--text)', fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              Security isn&apos;t a feature.<br />
              <span className="italic" style={{ fontFamily: 'Instrument Serif, serif', fontWeight: 400, color: 'var(--accent)' }}>
                It&apos;s the foundation.
              </span>
            </h2>
            <p className="mb-8" style={{ color: 'var(--muted)', lineHeight: 1.75 }}>
              Every transaction flows through multiple layers of security infrastructure, built to the same standards as the world&apos;s most trusted financial institutions.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {pillars.map(({ icon: Icon, label, color }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 p-3 rounded-xl transition-all duration-200"
                  style={{ background: 'var(--bg-raised)', border: '1px solid var(--border)' }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = color + '60'
                    el.style.background = color + '10'
                    el.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    el.style.borderColor = 'var(--border)'
                    el.style.background = 'var(--bg-raised)'
                    el.style.transform = 'translateY(0)'
                  }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: color + '15', border: `1px solid ${color}30` }}>
                    <Icon size={14} style={{ color }} />
                  </div>
                  <span className="text-xs leading-snug mt-1" style={{ color: 'var(--muted)' }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
          </ScrollReveal>

          {/* Right — Concentric Rings */}
          <ScrollReveal direction="right" delay={0.2}>
          <div className="flex items-center justify-center mt-8 lg:mt-0">
            <div className="relative w-full max-w-[320px] aspect-square">
              {ringLabels.map((label, i) => {
                const size = 60 + i * 48
                const isHovered = hoveredRing === label
                return (
                  <div
                    key={label}
                    className="absolute rounded-full border flex items-center justify-center cursor-pointer transition-all duration-300"
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      top: `calc(50% - ${size / 2}px)`,
                      left: `calc(50% - ${size / 2}px)`,
                      border: `1px solid ${isHovered ? 'var(--accent)' : 'var(--border)'}`,
                      background: isHovered ? 'var(--accent-dim)' : 'transparent',
                      animation: `spinSlow ${8 + i * 4}s linear infinite ${i % 2 === 0 ? '' : 'reverse'}`,
                      animationPlayState: isHovered ? 'paused' : 'running',
                    }}
                    onMouseEnter={() => setHoveredRing(label)}
                    onMouseLeave={() => setHoveredRing(null)}
                  >
                    <span
                      className="absolute text-xs font-medium"
                      style={{
                        color: isHovered ? 'var(--accent)' : 'var(--muted)',
                        top: '4px',
                        animation: `spinSlow ${8 + i * 4}s linear infinite ${i % 2 === 0 ? 'reverse' : ''}`,
                        animationPlayState: isHovered ? 'paused' : 'running',
                      }}
                    >
                      {label}
                    </span>
                  </div>
                )
              })}

              {/* Center */}
              <div
                className="absolute rounded-full flex items-center justify-center"
                style={{
                  width: '60px',
                  height: '60px',
                  top: 'calc(50% - 30px)',
                  left: 'calc(50% - 30px)',
                  background: 'var(--accent-dim)',
                  border: '2px solid var(--border-bright)',
                  boxShadow: '0 0 20px var(--accent-glow), 0 0 40px rgba(232,160,32,0.1)',
                  animation: 'pulseGlow 2s ease-in-out infinite',
                }}
              >
                <Lock size={20} style={{ color: 'var(--accent)' }} />
              </div>

              {/* Tooltip */}
              {hoveredRing && (
                <div
                  className="absolute -bottom-16 left-0 right-0 text-center px-4 py-2 rounded-xl text-xs"
                  style={{
                    background: 'var(--bg-raised)',
                    border: '1px solid var(--border-bright)',
                    color: 'var(--muted)',
                  }}
                >
                  {ringDetails[hoveredRing]}
                </div>
              )}
            </div>
          </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  )
}
