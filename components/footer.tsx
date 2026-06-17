'use client'

import React, { useState } from 'react'

const IconTwitter = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75-2.25 7-5.75 7-9.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
  </svg>
)

const IconYoutube = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19.54c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33zM9.75 15.02v-6.04l5.75 3.02-5.75 3.02z"/>
  </svg>
)

const IconGithub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.544 2.914 1.186.092-.923.35-1.544.636-1.9-2.22-.252-4.555-1.112-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.447-1.273.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.374.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.136 20.167 22 16.42 22 12c0-5.523-4.477-10-10-10z"/>
  </svg>
)

const IconLinkedin = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.836 0-9.753h3.554v1.381c-.009.015-.021.029-.03.042h.03v-.042c.43-.664 1.195-1.61 2.905-1.61 2.123 0 3.714 1.388 3.714 4.373v5.609zM5.337 8.855c-1.144 0-1.915-.762-1.915-1.715 0-.955.77-1.715 1.968-1.715 1.197 0 1.911.759 1.938 1.715 0 .953-.741 1.715-1.991 1.715zm1.582 11.597H3.635V9.099h3.284v11.353zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
  </svg>
)

const XMLorphIcon = () => (
  <svg width="24" height="24" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="footerPolyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#7c3aed', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <polygon points="10,2 18,18 2,18" fill="none" stroke="url(#footerPolyGradient)" strokeWidth="1.5" />
  </svg>
)

export default function Footer() {
  const [email, setEmail] = useState('')

  const columns = [
    {
      title: 'PRODUCT',
      links: ['Features', 'How It Works', 'Supported Formats', 'Pricing', 'API Documentation'],
    },
    {
      title: 'RESOURCES',
      links: ['Help Center', 'Documentation', 'Blog', 'Changelog', 'System Status'],
    },
    {
      title: 'COMPANY',
      links: ['About Us', 'Contact', 'Privacy Policy', 'Terms of Service', 'Refund Policy'],
    },
  ]

  return (
    <footer className="w-full bg-black border-t border-[#1a1a2e] pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo & Description */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <XMLorphIcon />
              <span className="font-inter font-600 text-white">XMLorph</span>
            </div>
            <p className="font-inter text-sm text-[#8b8ba8] leading-relaxed max-w-[200px] mb-6">
              The most advanced AI-powered tool to convert any theme into clean, valid Blogger XML.
            </p>
            <div className="bg-[rgba(124,58,237,0.1)] border border-[#7c3aed] rounded-full px-3 py-1 inline-block">
              <span className="font-inter text-xs text-[#a855f7]">Powered by Gemini 2.0 Flash</span>
            </div>
          </div>

          {/* Columns 2-4: Links */}
          {columns.map((col, idx) => (
            <div key={idx}>
              <h4 className="font-inter text-xs uppercase tracking-wider text-[#4a4468] mb-4">{col.title}</h4>
              <div className="space-y-2">
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block font-inter text-sm text-[#8b8ba8] hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}

          {/* Social Icons */}
          <div className="flex flex-col gap-4">
            <div>
              <h4 className="font-inter text-xs uppercase tracking-wider text-[#4a4468] mb-4">FOLLOW US</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded border border-[#1e1a3a] flex items-center justify-center text-[#8b8ba8] hover:border-[#7c3aed] hover:text-[#7c3aed] transition-colors">
                  <IconTwitter />
                </a>
                <a href="#" className="w-10 h-10 rounded border border-[#1e1a3a] flex items-center justify-center text-[#8b8ba8] hover:border-[#7c3aed] hover:text-[#7c3aed] transition-colors">
                  <IconYoutube />
                </a>
                <a href="#" className="w-10 h-10 rounded border border-[#1e1a3a] flex items-center justify-center text-[#8b8ba8] hover:border-[#7c3aed] hover:text-[#7c3aed] transition-colors">
                  <IconGithub />
                </a>
                <a href="#" className="w-10 h-10 rounded border border-[#1e1a3a] flex items-center justify-center text-[#8b8ba8] hover:border-[#7c3aed] hover:text-[#7c3aed] transition-colors">
                  <IconLinkedin />
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <p className="font-inter text-xs text-[#8b8ba8] mb-2">Subscribe to our newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-black border border-[#1e1a3a] rounded-l-lg px-3 py-2 font-inter text-xs text-white placeholder-[#4a4468] focus:outline-none focus:border-[#7c3aed]"
                />
                <button className="px-3 py-2 bg-[#7c3aed] rounded-r-lg text-white hover:bg-[#6d28d9] transition-colors">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1e1a3a] pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-inter text-xs text-[#4a4468]">© 2024 XMLorph. All rights reserved.</p>
            <p className="font-inter text-xs text-[#4a4468]">❤ Made with ♥ by XMLorph Team</p>
            <button className="font-inter text-xs text-[#8b8ba8] hover:text-white transition-colors">
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
