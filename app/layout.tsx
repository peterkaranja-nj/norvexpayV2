import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NorvexPay Global Payment Infrastructure',
  description: 'A modern global payments infrastructure platform built for businesses operating across borders. Accept payments, send payouts, issue cards through one API across 40+ countries.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
