import type { Metadata } from 'next'
import HomePageContent from '@/components/landing/HomePageContent'

export const metadata: Metadata = {
  title: 'NorvexPay — Global Payment Infrastructure',
  description: 'Accept payments, send payouts, issue cards and protect against fraud through one unified API spanning 40+ countries.',
  openGraph: {
    title: 'NorvexPay — Global Payment Infrastructure',
    description: 'Accept payments, send payouts, issue cards and protect against fraud through one unified API spanning 40+ countries.',
    type: 'website',
  },
}

export default function Home() {
  return <HomePageContent />
}
