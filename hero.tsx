'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Upload, CheckCircle2 } from 'lucide-react'
import { canConvert, recordConversion, getConversionsRemaining } from '@/lib/conversion-quota'

export default function Hero() {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const [output, setOutput] = useState<string>('')
  const [error, setError] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [copied, setCopied] = useState(false)
  const [quotaError, setQuotaError] = useState('')
  const [remaining, setRemaining] = useState(10)
  
  useEffect(() => {
    setRemaining(getConversionsRemaining())
  }, [])

  const handleFileSelect = (selectedFile: File) => {
    setError('')
    setQuotaError('')
    
    // Check quota
    if (!canConvert()) {
      setQuotaError('Free plan limit reached. Upgrade to Pro for unlimited conversions.')
      return
    }
    
    if (selectedFile.size > 2 * 1024 * 1024) {
      setError('File too large. Maximum 2MB.')
      return
    }

    const validTypes = ['.html', '.css', '.xml', '.json', '.zip']
    const fileName = selectedFile.name.toLowerCase()
    const hasValidType = validTypes.some(type => fileName.endsWith(type))

    if (!hasValidType) {
      setError('Invalid file format. Supported: HTML, CSS, XML, JSON, ZIP')
      return
    }

    setFile(selectedFile)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.currentTarget.classList.add('border-[#7c3aed]', 'bg-[#7c3aed]/5')
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.currentTarget.classList.remove('border-[#7c3aed]', 'bg-[#7c3aed]/5')
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.currentTarget.classList.remove('border-[#7c3aed]', 'bg-[#7c3aed]/5')
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile) handleFileSelect(droppedFile)
  }

  const handleConvert = async () => {
    if (!file) return

    setLoading(true)
    setError('')
    setOutput('')

    try {
      const text = await file.text()
      const response = await fetch('/api/convert', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fileContent: text,
          fileName: file.name,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Conversion failed')
      }

      recordConversion()
      const newRemaining = getConversionsRemaining()
      setRemaining(newRemaining)
      setOutput(data.xml)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleDownload = () => {
    if (!output) return
    const blob = new Blob([output], { type: 'application/xml' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${file?.name.split('.')[0]}-blogger.xml`
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleCopy = async () => {
    await navigator.clipboard.writeText(output)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="pt-32 pb-16 sm:pt-40 sm:pb-24 bg-black">
      <div className="section-container max-w-3xl">
        {/* Hero Content */}
        <div className="mb-12 sm:mb-16 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-slide-in-up">
            Convert Any Theme to{' '}
            <span className="bg-gradient-to-r from-[#7c3aed] to-[#06b6d4] bg-clip-text text-transparent">
              Blogger XML
            </span>
          </h1>
          <p className="text-base sm:text-lg text-[#888888] leading-relaxed max-w-2xl mx-auto animate-slide-in-up" style={{ animationDelay: '0.1s' }}>
            Drop your HTML theme. Get clean, valid Blogger XML in seconds. No errors. No manual work. Just upload, convert, and publish.
          </p>
        </div>

        {/* Upload Area */}
        <div className="space-y-6 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
          {/* File Upload */}
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className="border-2 border-dashed border-[#1a1a1a] rounded-xl p-8 sm:p-12 text-center cursor-pointer transition-all duration-200 hover:border-[#7c3aed] hover:bg-[#7c3aed]/5"
            onClick={() => fileInputRef.current?.click()}
          >
            <Upload className="w-10 h-10 text-[#7c3aed] mx-auto mb-4" />
            <p className="text-white font-semibold mb-2">
              {file ? file.name : 'Drop your theme file here'}
            </p>
            <p className="text-sm text-[#666666]">or click to browse</p>
            <p className="text-xs text-[#555555] mt-3">Supports HTML, CSS, XML, JSON, ZIP (max 2MB)</p>
            <input
              ref={fileInputRef}
              type="file"
              accept=".html,.css,.xml,.json,.zip"
              onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
              className="hidden"
            />
          </div>

          {/* Quota Warning */}
          {remaining > 0 && remaining <= 3 && !output && (
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-4 text-orange-400 text-sm">
              You have {remaining} conversion{remaining !== 1 ? 's' : ''} remaining on the free plan. Upgrade to Pro for unlimited conversions.
            </div>
          )}

          {/* Quota Error */}
          {quotaError && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-400 text-sm">
              {quotaError}
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Convert Button */}
          {file && !output && (
            <button
              onClick={handleConvert}
              disabled={loading}
              className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              {loading ? 'Converting...' : 'Convert to Blogger XML'}
            </button>
          )}

          {/* Output Section */}
          {output && (
            <div className="space-y-4">
              <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-[#06b6d4]" />
                  <p className="text-white font-semibold">Conversion Complete</p>
                </div>
                <div className="bg-black rounded p-4 max-h-40 overflow-auto mb-4">
                  <pre className="text-xs text-[#888888] font-mono whitespace-pre-wrap break-words">
                    {output.substring(0, 500)}
                    {output.length > 500 && '...'}
                  </pre>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleDownload}
                  className="flex-1 bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold py-2 rounded-lg transition-colors text-sm"
                >
                  Download XML
                </button>
                <button
                  onClick={handleCopy}
                  className="flex-1 border border-[#1a1a1a] hover:border-[#7c3aed] text-white font-semibold py-2 rounded-lg transition-colors text-sm"
                >
                  {copied ? 'Copied!' : 'Copy XML'}
                </button>
              </div>
              <button
                onClick={() => {
                  setFile(null)
                  setOutput('')
                }}
                className="w-full text-[#888888] hover:text-white text-sm transition-colors py-2"
              >
                Convert Another File
              </button>
            </div>
          )}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 sm:mt-20 pt-12 border-t border-[#1a1a1a] animate-slide-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            {[
              { icon: 'lock', label: '100% Secure', desc: 'Your files are safe' },
              { icon: 'zap', label: 'Lightning Fast', desc: 'Convert in seconds' },
              { icon: 'check', label: 'Error Free', desc: 'Valid Blogger XML' },
              { icon: 'star', label: '50K+ Users', desc: 'Trusted creators' },
            ].map((item, i) => (
              <div key={i} className="text-center sm:text-left">
                <div className="mb-2">
                  {item.icon === 'lock' && (
                    <svg className="w-5 h-5 text-[#7c3aed] mx-auto sm:mx-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm6-10V7a3 3 0 00-3-3H9a3 3 0 00-3 3v4h12V7z" />
                    </svg>
                  )}
                  {item.icon === 'zap' && (
                    <svg className="w-5 h-5 text-[#7c3aed] mx-auto sm:mx-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  )}
                  {item.icon === 'check' && (
                    <svg className="w-5 h-5 text-[#7c3aed] mx-auto sm:mx-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {item.icon === 'star' && (
                    <svg className="w-5 h-5 text-[#7c3aed] mx-auto sm:mx-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  )}
                </div>
                <p className="text-white text-sm font-semibold">{item.label}</p>
                <p className="text-[#666666] text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
