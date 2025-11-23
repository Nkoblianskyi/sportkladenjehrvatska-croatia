"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function SportJournalCookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setShowBanner(false)
  }

  const rejectCookies = () => {
    localStorage.setItem("cookieConsent", "rejected")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-journal-white border-t-2 border-journal-navy shadow-2xl">
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex-1">
            <h3 className="text-journal-navy font-serif font-bold text-xl mb-3">Kolačići i Privatnost</h3>
            <p className="text-journal-text text-sm leading-relaxed">
              Koristimo kolačiće za poboljšanje vašeg iskustva. Prihvaćanjem pristajete na našu{" "}
              <Link href="/cookie-policy" className="text-journal-navy hover:underline font-semibold">
                Politiku kolačića
              </Link>{" "}
              i{" "}
              <Link href="/privacy-policy" className="text-journal-navy hover:underline font-semibold">
                Politiku privatnosti
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button
              onClick={rejectCookies}
              className="flex-1 md:flex-none px-6 py-3 bg-journal-white hover:bg-journal-paper border-2 border-journal-border text-journal-charcoal font-semibold rounded transition-colors text-sm"
            >
              Odbij
            </button>
            <button
              onClick={acceptCookies}
              className="flex-1 md:flex-none px-6 py-3 bg-journal-navy hover:bg-journal-charcoal text-white font-semibold rounded transition-colors text-sm"
            >
              Prihvati sve
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
