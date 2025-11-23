"use client"

import { bettingSites } from "@/types"
import { SportJournalHero } from "@/components/sport-journal-hero"
import { SportJournalRatingList } from "@/components/sport-journal-rating-list"
import { SportJournalTopOffersModal } from "@/components/sport-journal-top-offers-modal"
import { SportJournalOurChoice } from "@/components/sport-journal-our-choice"
import { SportJournalResponsibleGambling } from "@/components/sport-journal-responsible-gambling"
import { SportJournalSportsNews } from "@/components/sport-journal-sports-news"
import { SportJournalFAQ } from "@/components/sport-journal-faq"
import Image from "next/image"

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SportKlađenje Hrvatska",
  url: "https://sportkladenjehrvatska.com",
  description: "Stručni sportski portal s analizama i recenzijama platformi za sportsko klađenje u Hrvatskoj",
  inLanguage: "hr",
  publisher: {
    "@type": "Organization",
    name: "SportKlađenje Hrvatska",
    url: "https://sportkladenjehrvatska.com",
  },
}

export default function Home() {
  return (
    <>
      <div className="fixed inset-0 -z-10">
        <Image
          src="/croatian-athletes-celebration.jpg"
          alt="Croatia sport"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      {/* </CHANGE> */}

      <div className="min-h-screen relative">
        <main className="relative z-10 mx-auto">
          <SportJournalHero />
          <SportJournalRatingList sites={bettingSites} />
          <SportJournalResponsibleGambling />
          <SportJournalSportsNews />
          <SportJournalFAQ />
          <SportJournalOurChoice sites={bettingSites} />
        </main>
        <SportJournalTopOffersModal sites={bettingSites} />
      </div>
    </>
  )
}
