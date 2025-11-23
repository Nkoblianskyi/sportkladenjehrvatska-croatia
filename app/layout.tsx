import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"
import { SportJournalHeader } from "@/components/sport-journal-header"
import { SportJournalFooter } from "@/components/sport-journal-footer"
import { SportJournalCookieBanner } from "@/components/sport-journal-cookie-banner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfairDisplay = Playfair_Display({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-playfair-display",
})

export const metadata: Metadata = {
  title: "SportKlađenje Hrvatska - Stručne Analize i Recenzije 2025",
  description:
    "Profesionalni sportski portal s detaljnim analizama, stručnim recenzijama i objektivnim ocjenama platformi za sportsko klađenje u Hrvatskoj.",
  keywords: [
    "sportsko klađenje Hrvatska",
    "kladionice Hrvatska",
    "online klađenje Hrvatska",
    "najbolje kladionice",
    "nogometno klađenje Hrvatska",
    "tenis klađenje",
    "košarka klađenje",
    "bonusi za klađenje",
    "klađenje uživo",
    "legalne kladionice Hrvatska",
    "betting sites Croatia",
    "online sportsko klađenje",
    "Formula 1 klađenje",
    "MMA klađenje",
    "hokej klađenje",
    "pikado klađenje",
    "bilijar klađenje",
    "top kladionice Hrvatska",
    "rang lista kladionica",
    "sigurno klađenje Hrvatska",
    "odgovorno klađenje",
    "najbolje kladionice Hrvatska",
    "sportsko klađenje savjeti",
    "klađenje aplikacije Hrvatska",
    "mobilno klađenje",
    "eSports klađenje",
    "virtualni sportovi klađenje",
    "klađenje na nogometne lige",
    "klađenje na teniske turnire",
    "klađenje na košarkaške utakmice",
    "ekskluzivni bonusi za nove korisnike",
    "promocije kladionica",
    "isplate dobitaka klađenje",
    "korisnička podrška kladionica",
    "zakonski okvir klađenja Hrvatska",
    "porezi na dobitke od klađenja",
    "kladionica",
    "sportska kladionica",
    "online kladionica",
    "klađenje uživo",
    "online klađenje",
    "kladionica uzivo",
    "online casino Hrvatska",
    "najbolji online casino",
    "casino bonusi",
    "casino igre Hrvatska",
    "casino Croatia",
    "online casino games",
    "casino bonuses"
  ],
  authors: [{ name: "SportKlađenje Hrvatska" }],
  creator: "SportKlađenje Hrvatska",
  publisher: "SportKlađenje Hrvatska",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "hr_HR",
    url: "https://sportkladenjehrvatska.com",
    siteName: "SportKlađenje Hrvatska",
    title: "SportKlađenje Hrvatska - Stručne Analize",
    description: "Profesionalni sportski portal s detaljnim analizama i stručnim recenzijama platformi za klađenje.",
    images: [
      {
        url: "https://sportkladenjehrvatska.com/croatian-athletes-celebration.jpg",
        width: 1200,
        height: 630,
        alt: "SportKlađenje Hrvatska",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SportKlađenje Hrvatska - Stručne Analize",
    description: "Profesionalni sportski portal s detaljnim analizama i recenzijama.",
    images: ["https://sportkladenjehrvatska.com/croatian-athletes-celebration.jpg"],
  },
  alternates: {
    canonical: "https://sportkladenjehrvatska.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#F8F9FA" />
        <link rel="canonical" href="https://sportkladenjehrvatska.com" />
      </head>
      <body className={`${inter.variable} ${playfairDisplay.variable} font-sans antialiased`}>
        <SportJournalHeader />
        {children}
        <SportJournalFooter />
        <SportJournalCookieBanner />
      </body>
    </html>
  )
}
