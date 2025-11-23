"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import Image from "next/image"
import type { BettingSite } from "@/types"

interface TopOffersModalProps {
  sites: BettingSite[]
}

function StarRating({ rating }: { rating: number }) {
  const normalizedRating = (rating / 10) * 5
  const fullStars = Math.floor(normalizedRating)
  const partialStar = normalizedRating - fullStars

  return (
    <div className="flex items-center gap-0.5">
      {[...Array(5)].map((_, index) => {
        const fillPercentage = index < fullStars ? 100 : index === fullStars ? partialStar * 100 : 0

        return (
          <div key={index} className="relative w-5 h-5">
            <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
            <div className="absolute inset-0 overflow-hidden" style={{ width: `${fillPercentage}%` }}>
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export function SportJournalTopOffersModal({ sites }: TopOffersModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [topSite, setTopSite] = useState<BettingSite | null>(null)

  useEffect(() => {
    if (sites.length > 0) {
      setTopSite(sites[0])
    }
  }, [sites])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  if (!topSite) return null

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[90vw] max-w-[500px] p-0 bg-white border-2 border-journal-navy shadow-2xl rounded-lg">
        <div className="relative bg-gradient-to-r from-journal-navy to-journal-charcoal px-6 py-5 rounded-t-lg">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 text-white/70 hover:text-white transition-colors z-10"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="text-center">
            <div className="inline-block px-3 py-1 bg-yellow-400 text-black text-xs font-bold uppercase tracking-wider rounded mb-2">
              Najbolja Ponuda
            </div>
            <h2 className="text-2xl font-bold text-white">Ekskluzivna Preporuka</h2>
          </div>
        </div>

        <div className="bg-white px-6 py-8 rounded-b-lg">
          {/* Logo */}
          <div className="flex items-center justify-center bg-journal-navy/5 rounded-sm p-6 mb-6 border border-journal-border">
            <div className="relative h-20 w-full max-w-[200px]">
              <Image src={topSite.logo || "/placeholder.svg"} alt={topSite.name} fill className="object-contain" />
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="text-4xl font-bold text-journal-navy">{topSite.rating}</div>
            <div className="flex flex-col items-start">
              <StarRating rating={topSite.rating} />
              <div className="text-xs text-journal-gray mt-1">({topSite.reviews.toLocaleString()} recenzija)</div>
            </div>
          </div>

          {/* Bonus */}
          <div className="text-center mb-6">
            <div className="text-sm text-journal-gray mb-1">Bonus Dobrodošlice</div>
            <div className="text-2xl font-bold text-journal-terracotta">{topSite.bonus}</div>
            {topSite.dopBonus && (
              <div className="text-base text-journal-navy font-semibold mt-1">{topSite.dopBonus}</div>
            )}
          </div>

          {/* CTA Button */}
          <a
            href={topSite.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full px-6 py-4 bg-journal-terracotta hover:bg-journal-terracotta/90 text-white text-lg font-bold rounded-md text-center transition-all shadow-lg hover:shadow-xl mb-4"
            onClick={() => setIsOpen(false)}
          >
            Preuzmite Bonus Sada
          </a>

          {/* Terms */}
          <div className="text-center pt-4 border-t border-journal-border">
            <p className="text-xs text-journal-gray leading-relaxed">{topSite.terms}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
