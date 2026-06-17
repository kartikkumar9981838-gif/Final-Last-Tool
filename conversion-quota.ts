'use client'

// Conversion quota management
const QUOTA_KEY = 'xmlorph_conversion_quota'
const FREE_LIMIT = 10

interface QuotaData {
  conversions: number
  isPro: boolean
  lastReset?: number
}

export function getQuotaData(): QuotaData {
  if (typeof window === 'undefined') {
    return { conversions: 0, isPro: false }
  }

  try {
    const stored = localStorage.getItem(QUOTA_KEY)
    if (stored) {
      return JSON.parse(stored)
    }
  } catch (e) {
    console.error('[v0] Failed to parse quota data', e)
  }

  return { conversions: 0, isPro: false }
}

export function saveQuotaData(data: QuotaData): void {
  if (typeof window === 'undefined') return

  try {
    localStorage.setItem(QUOTA_KEY, JSON.stringify(data))
  } catch (e) {
    console.error('[v0] Failed to save quota data', e)
  }
}

export function canConvert(): boolean {
  const quota = getQuotaData()
  
  // Pro users have unlimited conversions
  if (quota.isPro) return true
  
  // Free users have 10 lifetime conversions
  return quota.conversions < FREE_LIMIT
}

export function getConversionsRemaining(): number {
  const quota = getQuotaData()
  
  if (quota.isPro) return -1 // Unlimited
  return Math.max(0, FREE_LIMIT - quota.conversions)
}

export function recordConversion(): void {
  const quota = getQuotaData()
  if (!quota.isPro) {
    quota.conversions += 1
    saveQuotaData(quota)
  }
}

export function upgradeToPro(): void {
  const quota = getQuotaData()
  quota.isPro = true
  saveQuotaData(quota)
}
