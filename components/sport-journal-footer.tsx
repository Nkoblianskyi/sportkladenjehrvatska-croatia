"use client"

import Link from "next/link"
import Image from "next/image"

export function SportJournalFooter() {
  return (
    <footer className="bg-gradient-to-br from-journal-navy to-journal-navy/90 relative z-20">
      <div className="w-full h-1 bg-gradient-to-r from-yellow-400 via-journal-terracotta to-journal-green" />

      <div className="container mx-auto px-4 py-16 md:py-20">
        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="font-serif text-2xl font-bold text-white mb-4">
              SportKlađenje<span className="text-yellow-400">Hrvatska</span>
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Stručni sportski portal s najnovijim analizama, recenzijama i informacijama o sportskom klađenju u
              Hrvatskoj. Profesionalni pristup sportskom novinarstvu.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-journal-red rounded border border-journal-red/50">
              <span className="text-white font-bold text-2xl">18+</span>
            </div>
          </div>

          {/* Navigation section */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-white mb-4 border-b border-white/20 pb-2">Navigacija</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-sm text-white/80 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-yellow-400 rounded-full" />
                  Početna stranica
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-sm text-white/80 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-yellow-400 rounded-full" />O nama
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-white/80 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-yellow-400 rounded-full" />
                  Politika privatnosti
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-sm text-white/80 hover:text-yellow-400 transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-yellow-400 rounded-full" />
                  Politika kolačića
                </Link>
              </li>
            </ul>
          </div>

          {/* Responsible gambling section */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-white mb-4 border-b border-white/20 pb-2">
              Odgovorno klađenje
            </h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Klađenje je zabava za odrasle. Igrajte odgovorno i budite svjesni rizika. Kockajte se samo sredstvima koja
              možete priuštiti izgubiti.
            </p>
          </div>
        </div>

        {/* Support organizations */}
        <div className="border-t border-white/20 pt-10 pb-10">
          <h4 className="font-serif text-lg font-bold text-white mb-6 text-center">
            Organizacije za pomoć kod ovisnosti o kockanju
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            <Link
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <div className="relative w-[100px] h-[40px] md:w-[120px] md:h-[48px] p-3 rounded bg-white hover:bg-white/90 shadow-lg">
                <Image src="/gamecare-new.svg" alt="GamCare" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <div className="relative w-[100px] h-[40px] md:w-[120px] md:h-[48px] p-3 rounded bg-white hover:bg-white/90 shadow-lg">
                <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.hupis.hr/klok"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <div className="relative w-[100px] h-[40px] md:w-[120px] md:h-[48px] p-3 rounded bg-white hover:bg-white/90 shadow-lg">
                <Image src="/hupis.png" alt="Hupis" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.gamstop.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <div className="relative w-[100px] h-[40px] md:w-[120px] md:h-[48px] p-3 rounded bg-white hover:bg-white/90 shadow-lg">
                <Image src="/gamstop.svg" alt="GamStop" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.pbsvi.hr/strucni-programi-i-klub/kocka-terapijsko-rehabilitacijski-program-za-ovisnost-o-kockanju/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-110"
            >
              <div className="relative w-[100px] h-[40px] md:w-[120px] md:h-[48px] p-3 rounded bg-white hover:bg-white/90 shadow-lg">
                <Image src="/pbsvi.svg" alt="PBSVI" fill className="object-contain" />
              </div>
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/20 pt-8">
          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-xs text-white/70 leading-relaxed text-center">
              <strong className="text-white">Odricanje od odgovornosti:</strong> SportKlađenje Hrvatska
              (sportkladenjehrvatska.com) pruža informativni sportski sadržaj i recenzije platformi za klađenje. Ne
              pružamo usluge klađenja niti primamo opklade. Svi bonusi i uvjeti podliježu promjenama. Uvijek provjerite
              aktualne uvjete na službenim stranicama operatora prije registracije.
            </p>
            <p className="text-xs text-white/70 text-center">
              Klađenje može biti štetno i izazvati ovisnost. Igrajte odgovorno.{" "}
              <span className="font-bold text-journal-red">18+</span>
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <p className="text-xs text-white/60 text-center">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-yellow-400">sportkladenjehrvatska.com</span> — Sva prava pridržana
          </p>
        </div>
      </div>
    </footer>
  )
}
