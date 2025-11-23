"use client"
import { SportJournalLogo } from "./sport-journal-logo"

export function SportJournalHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-journal-border bg-black/20 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 md:h-20 items-center justify-center relative">
          <SportJournalLogo />
        </div>
      </div>
    </header>
  )
}
