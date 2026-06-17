'use client'

import React from 'react'
import { Upload, Cpu, Download } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: Upload,
      title: 'Upload Theme',
      description: 'Drop your HTML file or zip archive. We\'ll read and analyze it.',
    },
    {
      number: '02',
      icon: Cpu,
      title: 'AI Conversion',
      description: 'Our AI maps and converts your theme into clean, valid Blogger XML.',
    },
    {
      number: '03',
      icon: Download,
      title: 'Download XML',
      description: 'Get your polished XML file ready to upload to Blogger.',
    },
  ]

  return (
    <section className="section-spacing bg-black border-t border-[#1a1a1a]">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#7c3aed] text-sm font-semibold mb-2">HOW IT WORKS</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Three Simple Steps
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={index}
                className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-8 hover:border-[#7c3aed] transition-all duration-300"
              >
                <div className="text-[#333333] text-6xl font-bold mb-4">{step.number}</div>
                <div className="w-12 h-12 bg-[#7c3aed]/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#7c3aed]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-[#888888] text-sm leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
