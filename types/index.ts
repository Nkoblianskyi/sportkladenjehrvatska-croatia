export interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  dopBonus?: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  terms: string
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export const bettingSites: BettingSite[] = [
 {
    id: 1,
    name: "PSK",
    logo: "/psk.webp",
    bonus: "Dvaput Je Dvaput 2x100€",
    dopBonus: "",
    url: "https://www.psk.hr/",
    rating: 9.8,
    stars: 5,
    reviews: 1351,
    badges: ["TREND"],
    terms: "18+ • Odgovorno klađenje • Licencirano • Vrijede T&C",
    isTrending: true,
  },
    {
    id: 2,
    name: "SuperSport",
    logo: "/supersport.png",
    bonus: "Do 100€",
    url: "https://www.supersport.hr/",
    rating: 9.5,
    stars: 5,
    reviews: 1846,
    badges: ["POPULARNO"],
    terms: "18+ • Bezpečna platforma • Provjereno • Igrajte odgovorno",
    isPopular: true,
  },
  {
    id: 3,
    name: "Favbet",
    logo: "/favbet.svg",
    bonus: "Do 300€",
    dopBonus: "+ 30€ Oklade Bez Rizika",
    url: "https://www.favbet.hr/",
    rating: 9.3,
    stars: 5,
    reviews: 1684,
    badges: ["NAJBOLJA OCJENA", "VRHUNSKI IZBOR"],
    terms: "18+ • Odgovorno klađenje • Licencirano • Primjenjuju se T&C",
    isTopRating: true,
    isTopLine: true,
  },

  {
    id: 4,
    name: "Germania Sport",
    logo: "/germania.png",
    bonus: "Cash Out na Klađenju Uživo",
    url: "https://www.germaniasport.hr/",
    rating: 9.1,
    stars: 5,
    reviews: 1374,
    badges: ["POPULARNO", "TREND"],
    terms: "18+ • Sigurna igra • Provjereno • Primjenjuju se uvjeti",
    isPopular: true,
    isTrending: true,
  },


]
