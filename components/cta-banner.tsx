'use client'

import React from 'react'

export default function CTABanner() {
  return (
    <section className="section-spacing bg-black border-t border-[#1a1a1a]">
      <div className="section-container max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Start Converting Today
        </h2>
        <p className="text-[#888888] text-lg mb-8">
          Join thousands of creators who trust XMLorph for their Blogger theme conversions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold rounded-lg transition-colors">
            Convert Now
          </button>
          <button className="px-8 py-3 border border-[#1a1a1a] hover:border-[#7c3aed] text-white font-semibold rounded-lg transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}
