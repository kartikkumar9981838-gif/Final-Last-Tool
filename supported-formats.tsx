'use client'

import React from 'react'

export default function SupportedFormats() {
  const formats = [
    { ext: '.HTML', name: 'HyperText Markup Language', color: '#f97316', desc: 'Web pages & HTML files' },
    { ext: '.CSS', name: 'Cascading Style Sheets', color: '#06b6d4', desc: 'Stylesheets & design' },
    { ext: '.XML', name: 'eXtensible Markup Language', color: '#a855f7', desc: 'XML structures' },
    { ext: '.JSON', name: 'JavaScript Object Notation', color: '#10b981', desc: 'Data & APIs' },
  ]

  return (
    <section className="section-spacing bg-black border-t border-[#1a1a1a]">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#7c3aed] text-sm font-semibold mb-2">FORMATS</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Convert From Any Format
          </h2>
        </div>

        {/* Formats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {formats.map((format, index) => (
            <div
              key={index}
              className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-6 text-center hover:border-[#7c3aed] transition-colors"
            >
              <div className="text-4xl font-bold mb-2" style={{ color: format.color }}>
                {format.ext}
              </div>
              <p className="text-white font-semibold text-sm mb-1">{format.name}</p>
              <p className="text-[#888888] text-xs">{format.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
