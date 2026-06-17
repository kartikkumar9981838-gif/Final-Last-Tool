'use client'

import React from 'react'
import { Brain, Zap, Folder, Gift, Diamond, Lock } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered',
      description: 'Smart AI understands your theme structure and converts with accuracy.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Convert and download your XML in seconds. No waiting.',
    },
    {
      icon: Folder,
      title: 'All Formats',
      description: 'HTML, CSS, XML, JSON & more. We support all web formats.',
    },
    {
      icon: Gift,
      title: '100% Free',
      description: 'All core features completely free. No hidden charges.',
    },
    {
      icon: Diamond,
      title: 'Preserves Design',
      description: 'Your theme\'s layout, styles, and structure stay perfect.',
    },
    {
      icon: Lock,
      title: 'Secure',
      description: 'Your files are processed safely and never stored.',
    },
  ]

  return (
    <section className="section-spacing bg-black border-t border-[#1a1a1a]">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#7c3aed] text-sm font-semibold mb-2">FEATURES</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Built for Blogger Creators
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-6 hover:border-[#7c3aed] transition-colors duration-300"
              >
                <div className="w-10 h-10 bg-[#7c3aed]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-[#7c3aed]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
