export default function PrivacyPolicyPage() {
  return (
    <div className="bg-journal-paper min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <article className="bg-journal-white rounded-xl shadow-sm border border-journal-border p-8 md:p-12">
          <header className="text-center pb-8 border-b border-journal-border mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-journal-navy mb-4 text-balance">
              Politika Privatnosti
            </h1>
            <p className="text-journal-gray font-medium">
              Posljednje ažuriranje:{" "}
              {new Date().toLocaleDateString("hr-HR", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-journal-navy mb-4">
                Naša Predanost Privatnosti
              </h2>
              <p className="text-journal-text leading-relaxed mb-4">
                SportKlađenje Hrvatska (sportkladenjehrvatska.com) se obvezuje na zaštitu vaše privatnosti. Ova politika
                detaljno objašnjava kako prikupljamo, koristimo i štitimo vaše osobne podatke tijekom korištenja našeg
                sportskog portala.
              </p>
              <p className="text-journal-text leading-relaxed">
                Naša praksa je u potpunosti usklađena s Općom uredbom o zaštiti podataka (GDPR) i hrvatskim
                zakonodavstvom. Vaša privatnost i sigurnost podataka su naš prioritet.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-journal-navy mb-4">
                Koje Podatke Prikupljamo
              </h2>
              <ul className="space-y-4 text-journal-text">
                <li className="flex items-start gap-3">
                  <span className="text-journal-navy mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-journal-charcoal">Identifikacijski podaci:</strong> Ime, prezime ili
                    pseudonim koji odaberete prilikom registracije ili komentiranja
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-navy mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-journal-charcoal">Kontakt informacije:</strong> Email adresa za komunikaciju
                    i obavijesti o novostima
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-navy mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-journal-charcoal">Tehnički podaci:</strong> IP adresa, tip uređaja,
                    operativni sustav, tip preglednika
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-navy mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-journal-charcoal">Podaci o korištenju:</strong> Stranice koje posjećujete,
                    vrijeme provedeno na portalu, interakcije s članciima i sadržajem
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-navy mt-1 font-bold">•</span>
                  <span>
                    <strong className="text-journal-charcoal">Sportske preferencije:</strong> Omiljeni sportovi, timovi
                    i lige koje pratite
                  </span>
                </li>
              </ul>
            </section>

            <section className="mb-10 bg-journal-navy/5 border-l-4 border-journal-navy p-6 rounded-r">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-journal-navy mb-4">
                Kako Koristimo Vaše Podatke
              </h2>
              <ul className="space-y-3 text-journal-text">
                <li className="flex items-start gap-3">
                  <span className="text-journal-navy mt-1">→</span>
                  <span>Pružanje i održavanje funkcionalnosti sportskog portala</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-navy mt-1">→</span>
                  <span>Personalizacija sportskog sadržaja prema vašim interesima i preferencijama</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-navy mt-1">→</span>
                  <span>Komunikacija o važnim sportskim događajima, ažuriranjima i novostima</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-navy mt-1">→</span>
                  <span>Poboljšanje kvalitete naših sportskih članaka i recenzija</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-navy mt-1">→</span>
                  <span>Zaštita sigurnosti platforme i prevencija zloupotrebe</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-navy mt-1">→</span>
                  <span>Analiza trendova i ponašanja za poboljšanje korisničkog iskustva</span>
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-journal-navy mb-4">
                Sigurnost Vaših Podataka
              </h2>
              <p className="text-journal-text leading-relaxed mb-4">
                Implementirali smo višeslojne tehničke i organizacijske sigurnosne mjere za zaštitu vaših podataka:
              </p>
              <ul className="space-y-2 text-journal-text">
                <li className="flex items-start gap-3">
                  <span className="text-journal-green mt-1">✓</span>
                  <span>SSL/TLS enkripcija za sve prijenose podataka</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-green mt-1">✓</span>
                  <span>Redovite sigurnosne revizije i testiranja sustava</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-green mt-1">✓</span>
                  <span>Strogo ograničen pristup osobnim podacima</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-green mt-1">✓</span>
                  <span>Automatsko praćenje i detekcija sumnjive aktivnosti</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-green mt-1">✓</span>
                  <span>Redovito ažuriranje sigurnosnih protokola</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-green mt-1">✓</span>
                  <span>Sigurnosne sigurnosne kopije podataka</span>
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-journal-navy mb-4">
                Vaša Prava prema GDPR-u
              </h2>
              <p className="text-journal-text leading-relaxed mb-6">
                Prema Općoj uredbi o zaštiti podataka (GDPR), imate sljedeća prava vezana uz vaše osobne podatke:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-journal-paper p-6 rounded-lg border border-journal-border hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-journal-charcoal mb-2">Pravo na pristup</h4>
                  <p className="text-sm text-journal-text">
                    Možete zatražiti kopiju svih osobnih podataka koje čuvamo o vama
                  </p>
                </div>
                <div className="bg-journal-paper p-6 rounded-lg border border-journal-border hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-journal-charcoal mb-2">Pravo na ispravak</h4>
                  <p className="text-sm text-journal-text">Možete ispraviti netočne ili nepotpune osobne podatke</p>
                </div>
                <div className="bg-journal-paper p-6 rounded-lg border border-journal-border hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-journal-charcoal mb-2">Pravo na brisanje</h4>
                  <p className="text-sm text-journal-text">
                    Možete zatražiti brisanje vaših osobnih podataka ("pravo na zaborav")
                  </p>
                </div>
                <div className="bg-journal-paper p-6 rounded-lg border border-journal-border hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-journal-charcoal mb-2">Pravo na prigovor</h4>
                  <p className="text-sm text-journal-text">
                    Možete prigovoriti određenoj obradi vaših osobnih podataka
                  </p>
                </div>
                <div className="bg-journal-paper p-6 rounded-lg border border-journal-border hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-journal-charcoal mb-2">Pravo na prenosivost</h4>
                  <p className="text-sm text-journal-text">
                    Možete zatražiti prijenos podataka drugom pružatelju usluga
                  </p>
                </div>
                <div className="bg-journal-paper p-6 rounded-lg border border-journal-border hover:shadow-md transition-shadow">
                  <h4 className="font-bold text-journal-charcoal mb-2">Pravo na ograničenje</h4>
                  <p className="text-sm text-journal-text">Možete zatražiti ograničenje obrade vaših podataka</p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-journal-navy mb-4">
                Dijeljenje Podataka s Trećim Stranama
              </h2>
              <p className="text-journal-text leading-relaxed mb-4">
                Ne prodajemo vaše osobne podatke trećim stranama. Podatke dijelimo samo u sljedećim situacijama:
              </p>
              <ul className="space-y-2 text-journal-text">
                <li className="flex items-start gap-3">
                  <span className="text-journal-terracotta mt-1">•</span>
                  <span>S pružateljima usluga koji nam pomažu u radu portala (hosting, analitika)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-terracotta mt-1">•</span>
                  <span>Kada je to potrebno po zakonu ili sudskom nalogu</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-journal-terracotta mt-1">•</span>
                  <span>Za zaštitu naših prava, imovine ili sigurnosti korisnika</span>
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-journal-navy mb-4">
                Koliko Dugo Čuvamo Podatke
              </h2>
              <p className="text-journal-text leading-relaxed">
                Vaše osobne podatke čuvamo samo onoliko dugo koliko je potrebno za ispunjenje svrhe zbog koje su
                prikupljeni, ili koliko to zahtijeva zakon. Nakon isteka roka čuvanja, podaci se sigurno brišu ili
                anonimiziraju.
              </p>
            </section>

            <section className="bg-journal-paper border-2 border-journal-navy/20 p-8 rounded-lg">
              <h2 className="text-2xl font-serif font-bold text-journal-navy mb-4">Kontakt i Ostvarivanje Prava</h2>
              <p className="text-journal-text mb-4">Za pitanja o privatnosti, ostvarivanje vaših prava ili pritužbe:</p>
              <p className="text-journal-charcoal font-semibold mb-4">
                <p className="text-journal-navy hover:underline">
                  info@sportkladenjehrvatska.com
                </p>
              </p>
              <p className="text-sm text-journal-text border-t border-journal-border pt-4">
                <strong>Napomena:</strong> Imate pravo podnijeti pritužbu Agenciji za zaštitu osobnih podataka Republike
                Hrvatske (AZOP) ako smatrate da vaša prava nisu poštovana.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  )
}
