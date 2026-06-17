'use client'

import Navbar from '@/components/navbar'
import Hero from '@/components/sections/hero'
import HowItWorks from '@/components/sections/how-it-works'
import Features from '@/components/sections/features'
import SupportedFormats from '@/components/sections/supported-formats'
import Pricing from '@/components/sections/pricing'
import FAQ from '@/components/sections/faq'
import CTABanner from '@/components/sections/cta-banner'
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
