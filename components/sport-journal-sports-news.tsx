export function SportJournalSportsNews() {
  return (
    <section className="py-16 px-4 bg-journal-white border-t border-journal-border">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-journal-navy mb-3">
            Sportske Vijesti i Analiza
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-journal-navy to-journal-terracotta"></div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="mb-8 bg-journal-paper p-6 rounded-lg border border-journal-border">
            <h3 className="text-2xl font-serif font-bold text-journal-navy mb-4 pb-2 border-b border-journal-border">
              Zašto su Sportske Vijesti Važne za Klađenje?
            </h3>
            <p className="text-journal-text leading-relaxed mb-4">
              Uspješno sportsko klađenje zahtijeva više od pukog sreće. Praćenje sportskih vijesti, analiza forme
              momčadi, informacije o ozljedama igrača i taktičke promjene mogu značajno utjecati na ishod utakmica.
              Informirani kladioci imaju veće šanse za donošenje pametnih odluka.
            </p>
            <p className="text-journal-text leading-relaxed">
              Naš portal prati najvažnije sportske događaje u Hrvatskoj i svijetu, pružajući vam ključne informacije
              koje mogu pomoći u vašim odlukama o klađenju.
            </p>
          </div>

          <div className="bg-journal-navy text-journal-white p-8 rounded-lg shadow-md">
            <h4 className="text-xl font-bold mb-4">Ostanite Informirani</h4>
            <p className="leading-relaxed mb-4">
              Redovito praćenje sportskih vijesti, statistike i analize može značajno poboljšati vaše rezultate u
              klađenju. Koristite pouzdane izvore informacija i nemojte se oslanjati samo na osjećaj ili navijačku
              pristranost.
            </p>
            <p className="text-sm opacity-90">
              Zapamtite: Informirani kladilac je uspješniji kladilac. Uložite vrijeme u istraživanje prije nego što
              postavite ulog.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
