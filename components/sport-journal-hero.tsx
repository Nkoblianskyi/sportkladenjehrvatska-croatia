"use client"

import { useState } from "react"
import { SportJournalAdvertiserModal } from "./sport-journal-advertiser-modal"
import Image from "next/image"

export function SportJournalHero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section className="relative overflow-hidden border-b border-journal-border" style={{ minHeight: "280px" }}>
      <div className="container mx-auto sm:max-w-[1200px] relative z-10 px-4 h-full flex items-center py-12 bg-black/20">
        <div className="w-full">
          <div className="flex flex-col items-center justify-center gap-6 text-center">
            {/* Main heading */}
            <div className="max-w-4xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3 leading-tight text-balance drop-shadow-lg">
                <span className="text-red-600">Stručne</span> <span className="text-white">Analize</span>{" "}
                <span className="text-blue-600">Sportskog Klađenja</span>
              </h1>
              <p className="text-base md:text-lg text-white/90 leading-relaxed drop-shadow-md">
                Profesionalne recenzije i objektivne ocjene platformi za sportsko klađenje u Hrvatskoj
              </p>
            </div>

            {/* Trust badges in horizontal row */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              <div className="flex items-center gap-2">
                <Image src="/flag.png" alt="Sport Journal Logo" width={40} height={40} />
                <span className="text-sm text-white font-semibold whitespace-nowrap drop-shadow-md">Licencirano</span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded bg-blue-500/20 flex items-center justify-center border border-blue-400/50">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-sm text-white font-semibold whitespace-nowrap drop-shadow-md">
                  Stručne recenzije
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded bg-red-500/20 flex items-center justify-center border border-red-400/50">
                  <span className="text-red-400 font-bold text-base">18+</span>
                </div>
                <span className="text-sm text-white font-semibold whitespace-nowrap drop-shadow-md">
                  Odgovorno klađenje
                </span>
              </div>
            </div>

            {/* Footer meta info */}
            <div className="flex items-center justify-center gap-4 text-xs text-white/70">
              <button
                onClick={openModal}
                className="hover:text-white transition-colors underline decoration-dotted underline-offset-2 drop-shadow"
              >
                Transparentnost
              </button>
              <span>•</span>
              <span>Siječanj 2025</span>
            </div>
          </div>
        </div>
      </div>

      <SportJournalAdvertiserModal isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
