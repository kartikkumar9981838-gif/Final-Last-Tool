'use client'

import Navbar from '@/components/navbar'
import Hero from '@/components/hero'
import HowItWorks from '@/components/how-it-works'
import Features from '@/components/features'
import SupportedFormats from '@/components/supported-formats'
import Pricing from '@/components/pricing'
import FAQ from '@/components/faq'
import CTABanner from '@/components/cta-banner'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="w-full bg-black">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <SupportedFormats />
      <Pricing />
      <FAQ />
      <CTABanner />
      <Footer />
    </main>
  )
}
