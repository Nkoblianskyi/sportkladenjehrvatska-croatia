export default function AboutUsPage() {
  return (
    <div className="bg-journal-paper min-h-screen">
      <div className="container mx-auto px-4 py-12 md:py-16 max-w-4xl">
        <article className="bg-journal-white rounded shadow-sm border border-journal-border p-8 md:p-12">
          <header className="text-center pb-8 border-b border-journal-border mb-8">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-journal-navy mb-4 text-balance">O Nama</h1>
            <p className="text-journal-gray font-medium text-lg">
              Vaš pouzdani izvor za stručne sportske analize i recenzije
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-journal-navy mb-4">Tko Smo Mi</h2>
              <p className="text-journal-text leading-relaxed mb-4">
                SportKlađenje Hrvatska je nezavisni sportski portal posvećen pružanju objektivnih, stručnih analiza i
                recenzija platformi za sportsko klađenje u Hrvatskoj. Naš tim čine iskusni sportski novinari i
                analitičari s višegodišnjim iskustvom u sportskoj industriji.
              </p>
              <p className="text-journal-text leading-relaxed">
                Osnovani s ciljem educiranja korisnika i promicanja odgovornog klađenja, trudimo se pružiti
                najpouzdanije i najaktualnijeiinformacije o svim aspektima sportskog klađenja.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-journal-navy mb-4">Naša Misija</h2>
              <div className="bg-journal-paper border-l-4 border-journal-navy p-6 rounded-r">
                <ul className="space-y-3 text-journal-text">
                  <li className="flex items-start gap-3">
                    <span className="text-journal-navy mt-1 font-bold">•</span>
                    <span>Pružanje transparentnih i objektivnih recenzija platformi za klađenje</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-journal-navy mt-1 font-bold">•</span>
                    <span>Educiranje korisnika o odgovornom klađenju i upravljanju rizicima</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-journal-navy mt-1 font-bold">•</span>
                    <span>Praćenje najnovijih trendova i vijesti iz svijeta sporta</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-journal-navy mt-1 font-bold">•</span>
                    <span>Promicanje sigurnih i licenciranih platformi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-journal-navy mt-1 font-bold">•</span>
                    <span>Stvaranje pouzdane zajednice sportskih entuzijasta</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-journal-navy mb-4">Naše Vrijednosti</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-journal-navy/5 p-6 rounded border border-journal-navy/20">
                  <h3 className="font-bold text-xl text-journal-navy mb-3">Transparentnost</h3>
                  <p className="text-sm text-journal-text">
                    Jasno objavljujemo naše metode ocjenjivanja i affiliate odnose. Vjerujemo u potpunu iskrenost prema
                    našim čitateljima.
                  </p>
                </div>
                <div className="bg-journal-green/5 p-6 rounded border border-journal-green/20">
                  <h3 className="font-bold text-xl text-journal-navy mb-3">Objektivnost</h3>
                  <p className="text-sm text-journal-text">
                    Sve naše recenzije temelje se na detaljnim testiranjima i analizama, bez utjecaja komercijalnih
                    interesa.
                  </p>
                </div>
                <div className="bg-journal-terracotta/5 p-6 rounded border border-journal-terracotta/20">
                  <h3 className="font-bold text-xl text-journal-navy mb-3">Odgovornost</h3>
                  <p className="text-sm text-journal-text">
                    Promičemo isključivo odgovorno klađenje i upozoravamo na rizike povezane s kockanjem.
                  </p>
                </div>
                <div className="bg-journal-gold/5 p-6 rounded border border-journal-gold/20">
                  <h3 className="font-bold text-xl text-journal-navy mb-3">Stručnost</h3>
                  <p className="text-sm text-journal-text">
                    Naš tim posjeduje duboko znanje o sportskoj industriji i konstantno se educira o novim trendovima.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-journal-navy mb-4">Kako Radimo</h2>
              <p className="text-journal-text leading-relaxed mb-6">
                Naš proces recenziranja platformi za klađenje je temeljit i sistematičan. Svaka platforma prolazi kroz
                višefaznu analizu:
              </p>
              <ol className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="font-bold text-journal-navy">1.</span>
                  <div>
                    <strong className="text-journal-charcoal">Inicijalna registracija i testiranje</strong>
                    <p className="text-sm text-journal-text mt-1">
                      Prolazimo kroz cijeli proces registracije i verifikacije kao stvarni korisnici
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-journal-navy">2.</span>
                  <div>
                    <strong className="text-journal-charcoal">Analiza ponude i uvjeta</strong>
                    <p className="text-sm text-journal-text mt-1">
                      Detaljno proučavamo sportsku ponudu, bonuse, koeficijente i uvjete
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-journal-navy">3.</span>
                  <div>
                    <strong className="text-journal-charcoal">Testiranje funkcionalnosti</strong>
                    <p className="text-sm text-journal-text mt-1">
                      Ispitujemo brzinu platforme, mobilnu aplikaciju i korisničku podršku
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-journal-navy">4.</span>
                  <div>
                    <strong className="text-journal-charcoal">Provjera sigurnosti i licenci</strong>
                    <p className="text-sm text-journal-text mt-1">
                      Verificiramo licence, sigurnosne certifikate i metode plaćanja
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="font-bold text-journal-navy">5.</span>
                  <div>
                    <strong className="text-journal-charcoal">Konačna ocjena i recenzija</strong>
                    <p className="text-sm text-journal-text mt-1">
                      Sastavljamo sveobuhvatnu recenziju s objektivnom ocjenom
                    </p>
                  </div>
                </li>
              </ol>
            </section>

            <section className="bg-journal-navy/5 border border-journal-navy/20 p-8 rounded">
              <h2 className="text-2xl font-serif font-bold text-journal-navy mb-4">Kontaktirajte Nas</h2>
              <p className="text-journal-text mb-4">
                Imateпитања, prijedloge ili želite surađivati s nama? Slobodno nas kontaktirajte:
              </p>
              <div className="space-y-2">
                <p className="text-journal-charcoal font-semibold">
                  Email:{" "}
                  <p className="text-journal-navy hover:underline">
                    info@sportkladenjehrvatska.com
                  </p>
                </p>
              </div>
            </section>

            <div className="mt-10 pt-8 border-t border-journal-border text-center">
              <p className="text-sm text-journal-text italic">
                Klađenje može biti štetno i izazvati ovisnost. Igrajte odgovorno.{" "}
                <span className="font-bold text-journal-red">18+</span>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
