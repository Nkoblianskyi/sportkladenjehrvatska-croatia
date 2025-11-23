"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import type { BettingSite } from "@/types"

interface TopOffersModalProps {
  sites: BettingSite[]
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

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[90vw] max-w-[480px] p-0 bg-journal-white border-2 border-journal-navy shadow-2xl rounded-lg">
        <div className="relative bg-journal-navy px-6 py-4 border-b-4 border-journal-terracotta rounded-t-lg">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 text-journal-white/70 hover:text-journal-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="text-center">
            <div className="text-xs uppercase tracking-widest text-journal-terracotta font-semibold mb-1">
              Ekskluzivna Preporuka
            </div>
            <h2 className="text-xl font-serif font-bold text-journal-white">Najbolja Ponuda Dana</h2>
          </div>
        </div>

        <div className="bg-journal-white px-6 py-6 rounded-b-lg">
          {topSite && (
            <a
              href={topSite.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full px-6 py-3.5 bg-journal-navy hover:bg-journal-charcoal text-journal-white text-base font-bold rounded-md text-center transition-all shadow-md hover:shadow-lg mb-4"
              onClick={() => setIsOpen(false)}
            >
              Preuzmite Bonus
            </a>
          )}

          <div className="text-center pt-3 border-t border-journal-border">
            <p className="text-[10px] text-journal-gray leading-relaxed">
              +18 | Primjenjuju se Uvjeti i Odredbe | Kockajte se Odgovorno
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
