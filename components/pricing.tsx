'use client'

import React from 'react'
import { Check } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        '10 Conversions Lifetime',
        'All Format Support',
        'Blogger v2 Compatible',
        'Standard Conversion Speed',
      ],
      cta: 'Get Started Free',
      variant: 'secondary',
    },
    {
      name: 'Pro',
      price: '$10',
      period: 'one-time',
      description: 'Unlimited conversions forever',
      features: [
        'Unlimited Conversions',
        'Priority Processing',
        'Faster Deep Conversion',
        'Priority Support',
        '3x Conversion Speed',
      ],
      cta: 'Upgrade to Pro',
      variant: 'primary',
      popular: true,
    },
  ]

  return (
    <section className="section-spacing bg-black border-t border-[#1a1a1a]">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#7c3aed] text-sm font-semibold mb-2">PRICING</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Always Free. Forever.
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg p-8 relative transition-all duration-300 ${
                plan.popular
                  ? 'bg-[#0a0a0a] border-2 border-[#7c3aed] md:scale-105'
                  : 'bg-[#0a0a0a] border border-[#1a1a1a] hover:border-[#7c3aed]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#7c3aed] text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
              <p className="text-[#888888] text-sm mb-4">{plan.description}</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-[#888888] text-sm">/{plan.period}</span>
              </div>

              <button
                className={`w-full py-2 rounded-lg font-semibold mb-6 transition-colors text-sm ${
                  plan.variant === 'primary'
                    ? 'bg-[#7c3aed] text-white hover:bg-[#6d28d9]'
                    : 'bg-transparent border border-[#1a1a1a] text-white hover:border-[#7c3aed]'
                }`}
              >
                {plan.cta}
              </button>

              <div className="space-y-3">
                {plan.features.map((feature, fIndex) => (
                  <div key={fIndex} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-[#7c3aed] flex-shrink-0" />
                    <span className="text-[#888888] text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
