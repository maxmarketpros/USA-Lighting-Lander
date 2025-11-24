"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function ThankYouConversionTracker() {
  useEffect(() => {
    if (typeof window === "undefined" || typeof window.gtag !== "function") {
      return
    }

    window.gtag("event", "conversion", {
      send_to: "AW-10993740389/_IPXCKTSksYbEOXUnPoo",
      value: 1.0,
      currency: "USD",
    })
  }, [])

  return null
}
