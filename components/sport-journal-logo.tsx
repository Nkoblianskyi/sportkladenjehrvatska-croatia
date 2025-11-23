"use client"

import Link from "next/link"
import Image from "next/image"

export function SportJournalLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
      <div className="flex items-center gap-2">
      <Image src="/favicon.ico" alt="Sport Journal Logo" width={40} height={40} />
        <div className="flex flex-col">
          <div className="font-serif font-bold text-xl md:text-2xl leading-none">
            <span className="text-red-600">Sport</span>
            <span className="text-white">Klađenje</span>
          </div>
          {/* </CHANGE> */}
          <span className="text-xs text-white/80 uppercase tracking-wider">Hrvatska</span>
        </div>
      </div>
    </Link>
  )
}
