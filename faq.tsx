'use client'

import React, { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  const faqs = [
    {
      q: 'Is the generated XML compatible with Blogger?',
      a: 'Yes, XMLorph generates fully valid Blogger v2 XML that works perfectly with Blogger\'s Theme Editor.',
    },
    {
      q: 'What formats does XMLorph support?',
      a: 'We support HTML, CSS, XML, JSON, and ZIP archive files. Any web theme file format is accepted.',
    },
    {
      q: 'Do you provide API access?',
      a: 'API access is available on the Enterprise plan. Contact sales for custom integrations.',
    },
    {
      q: 'Is there a limit on free conversions?',
      a: 'No limits on the Free plan. Convert unlimited themes, completely free, forever.',
    },
    {
      q: 'How secure is my data?',
      a: 'Files are processed in memory and never stored. All conversions are real-time and files are immediately discarded.',
    },
    {
      q: 'Can I convert large ZIP files?',
      a: 'Yes, XMLorph supports ZIP archives up to 10MB with multiple theme files.',
    },
  ]

  return (
    <section className="section-spacing bg-black border-t border-[#1a1a1a]">
      <div className="section-container max-w-3xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#7c3aed] text-sm font-semibold mb-2">FAQ</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Questions? We've Got Answers
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`bg-[#0a0a0a] border rounded-lg px-6 py-4 cursor-pointer transition-all ${
                openIdx === idx
                  ? 'border-[#7c3aed]'
                  : 'border-[#1a1a1a] hover:border-[#333333]'
              }`}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
            >
              {/* Question */}
              <div className="flex justify-between items-center gap-4">
                <h3 className="font-semibold text-white text-sm sm:text-base">{faq.q}</h3>
                <ChevronDown
                  size={20}
                  className={`text-[#7c3aed] flex-shrink-0 transition-transform duration-300 ${
                    openIdx === idx ? 'rotate-180' : ''
                  }`}
                />
              </div>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIdx === idx ? 'mt-3 pt-3 border-t border-[#1a1a1a]' : ''
                }`}
              >
                <p className="text-[#888888] text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
