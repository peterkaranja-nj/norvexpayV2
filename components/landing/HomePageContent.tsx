'use client'
import { useState, useCallback, useEffect } from 'react'
import Preloader from '@/components/shared/Preloader'
import ScrollProgress from '@/components/shared/ScrollProgress'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import HeroSection from '@/components/landing/HeroSection'
import BentoGrid from '@/components/landing/BentoGrid'
import TrustStripe from '@/components/landing/TrustStripe'
import SecuritySection from '@/components/landing/SecuritySection'
import WhyNorvexPay from '@/components/landing/WhyNorvexPay'
import Testimonials from '@/components/landing/Testimonials'
import CTABanner from '@/components/landing/CTABanner'

export default function HomePageContent() {
  const [showPreloader, setShowPreloader] = useState<boolean | null>(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('npv')) {
      setLoaded(true)
      setShowPreloader(false)
    } else {
      setShowPreloader(true)
    }
  }, [])

  const handleComplete = useCallback(() => {
    sessionStorage.setItem('npv', '1')
    setLoaded(true)
    setTimeout(() => setShowPreloader(false), 600)
  }, [])

  if (showPreloader === null) return null

  return (
    <>
      {showPreloader && <Preloader onComplete={handleComplete} />}
      {loaded && (
        <>
          <ScrollProgress />
          <Navbar />
          <main>
            <HeroSection />
            <TrustStripe />
            <BentoGrid />
            <SecuritySection />
            <WhyNorvexPay />
            <Testimonials />
            <CTABanner />
          </main>
          <Footer />
        </>
      )}
    </>
  )
}
