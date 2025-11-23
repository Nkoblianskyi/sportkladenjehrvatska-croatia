export function SportJournalFAQ() {
  return (
    <section className="py-16 px-4 bg-journal-paper">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-journal-navy mb-3">
            Često Postavljana Pitanja
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-journal-navy to-journal-terracotta"></div>
        </div>

        <div className="space-y-6">
          <div className="bg-journal-white border border-journal-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-journal-navy mb-3">Je li online klađenje legalno u Hrvatskoj?</h3>
            <p className="text-journal-text leading-relaxed">
              Da, online klađenje je potpuno legalno u Hrvatskoj. Sve kladionice moraju imati licencu Ministarstva
              financija Republike Hrvatske. Preporučujemo klađenje samo kod licenciranih operatera koji su regulirani i
              nadzirati od strane hrvatskih vlasti. Licencirane kladionice jamče sigurnost vaših sredstava i poštene
              uvjete klađenja.
            </p>
          </div>

          <div className="bg-journal-white border border-journal-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-journal-navy mb-3">
              Kako odabrati najbolju kladionicu za sportsko klađenje?
            </h3>
            <p className="text-journal-text leading-relaxed">
              Pri odabiru kladionice, obratite pažnju na nekoliko ključnih faktora: važnost licence i regulacije,
              kvalitetu kvota, širinu ponude sportova i tržišta, kvalitetu korisničke podrške na hrvatskom jeziku,
              brzinu isplate dobitaka, te dostupnost mobilne aplikacije. Također je važno provjeriti bonuse i promocije
              te uvjete klađenja koji ih prate.
            </p>
          </div>

          <div className="bg-journal-white border border-journal-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-journal-navy mb-3">Kako iskoristiti bonus dobrodošlice?</h3>
            <p className="text-journal-text leading-relaxed">
              Bonus dobrodošlice obično zahtijeva registraciju računa i prvi depozit. Pažljivo pročitajte uvjete bonusa,
              posebno zahtjeve za klađenje (wagering requirements) koji određuju koliko puta morate uložiti bonus iznos
              prije nego možete podići dobitak. Većina bonusa ima vremensko ograničenje i minimalne kvote za
              kvalificirajuće oklade.
            </p>
          </div>

          <div className="bg-journal-white border border-journal-border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-journal-navy mb-3">Koje metode plaćanja su dostupne u Hrvatskoj?</h3>
            <p className="text-journal-text leading-relaxed">
              Licencirane kladionice u Hrvatskoj nude različite metode plaćanja: kreditne i debitne kartice (Visa,
              Mastercard), e-novčanike (Skrill, Neteller), bankovne transfere, te lokalne metode plaćanja. Depoziti su
              obično trenutni, dok isplate mogu trajati od nekoliko sati do nekoliko radnih dana, ovisno o odabranoj
              metodi.
            </p>
          </div>

          <div className="bg-gradient-to-r from-journal-navy/10 to-journal-terracotta/10 border-l-4 border-journal-navy p-6 rounded-lg">
            <h3 className="text-xl font-bold text-journal-navy mb-3">Imate dodatna pitanja?</h3>
            <p className="text-journal-text leading-relaxed">
              Ako niste pronašli odgovor na svoje pitanje, kontaktirajte korisničku podršku odabrane kladionice. Sve
              licencirane kladionice u Hrvatskoj nude podršku na hrvatskom jeziku putem live chata, e-maila ili
              telefona. Također možete posjetiti njihove detaljne FAQ sekcije ili centre za pomoć na web stranicama.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
