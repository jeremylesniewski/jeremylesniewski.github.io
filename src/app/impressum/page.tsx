import React from 'react';

export const metadata = {
  title: 'Impressum - Jeremy Lesniewski',
  description: 'Legal impressum and company information',
};

export default function ImpressumPage() {
  return (
    <main className="overflow-hidden">
      <section className="section-padding border-t border-neutral-800 pt-32">
        <div className="container-max max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-12">Impressum</h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Angaben gemäß § 5 TMG</h2>
              <div className="text-neutral-400 space-y-2 leading-relaxed">
                <p>
                  <strong>Jeremy Lesniewski</strong>
                </p>
                <p>Berlin</p>
                <p>Germany</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Kontakt</h2>
              <div className="text-neutral-400 space-y-2 leading-relaxed">
                <p>Email: jeremylesniewski@icloud.com</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Haftung für Inhalte</h2>
              <p className="text-neutral-400 leading-relaxed">
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die
                Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch
                keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG
                für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Haftung für Links</h2>
              <p className="text-neutral-400 leading-relaxed">
                Unsere Website enthält Links zu externen Websites Dritter, auf deren
                Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
                Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
                Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
                verantwortlich.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Urheberrecht</h2>
              <p className="text-neutral-400 leading-relaxed">
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
                Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als
                solche gekennzeichnet. Die Vervielfältigung, Bearbeitung, Verbreitung und
                jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
                der schriftlichen Zustimmung des Autors oder Urhebers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Datenschutz</h2>
              <p className="text-neutral-400 leading-relaxed">
                Informationen zum Datenschutz finden Sie in unserer{' '}
                <a href="/privacy" className="hover:text-white">
                  Datenschutzerklärung
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
