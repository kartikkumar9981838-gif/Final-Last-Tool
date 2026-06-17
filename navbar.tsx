'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-[#1a1a1a] z-50">
      <div className="section-container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#7c3aed] to-[#06b6d4] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">X</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-white text-sm">XMLorph</span>
            <span className="text-xs text-[#666666]">Blogger Converter</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#888888] hover:text-white transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 text-sm text-white border border-[#1a1a1a] rounded-lg hover:border-[#7c3aed] transition-colors">
            Sign In
          </button>
          <button className="px-4 py-2 text-sm text-white bg-[#7c3aed] rounded-lg hover:bg-[#6d28d9] transition-colors">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black border-b border-[#1a1a1a]">
          <div className="section-container py-4 flex flex-col gap-4">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-[#888888] hover:text-white transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-3 pt-4 border-t border-[#1a1a1a]">
              <button className="flex-1 px-4 py-2 text-sm text-white border border-[#1a1a1a] rounded-lg hover:border-[#7c3aed] transition-colors">
                Sign In
              </button>
              <button className="flex-1 px-4 py-2 text-sm text-white bg-[#7c3aed] rounded-lg hover:bg-[#6d28d9] transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
