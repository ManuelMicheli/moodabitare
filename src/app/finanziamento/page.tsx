import type { Metadata } from "next";
import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";
import { AccentText } from "@/components/ui/AccentText";

export const metadata: Metadata = {
  title: "Finanziamento",
  description:
    "Mood Abitare: finanziamento a tasso zero per serramenti e ristrutturazioni. Anticipo del 50%, il resto a tasso 0 con Agos Ducato. Cumulabile con detrazioni fiscali fino al 50%.",
};

export default function Finanziamento() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end bg-black-deep text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/90 via-transparent to-transparent" />
        <div className="relative z-10 w-full pb-14 lg:pb-28 px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-white/40 mb-6">
              Finanziamento
            </p>
            <h1 className="font-page-title max-w-5xl">
              <AccentText>Tasso zero per i tuoi serramenti</AccentText>
            </h1>
            <p className="mt-8 text-body text-white/35 max-w-xl">
              Rinnova la tua casa senza pensieri grazie al finanziamento a tasso
              zero, cumulabile con le detrazioni fiscali.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Formula */}
      <section className="py-28 lg:py-44">
        <div className="px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
              <div>
                <p className="text-label text-black-deep/30 mb-6">
                  La formula
                </p>
                <h2 className="font-section-title text-black-deep">
                  <AccentText>Anticipo del 50%, il resto a tasso 0</AccentText>
                </h2>
                <p className="mt-8 text-body text-black-deep/50 max-w-md">
                  Il finanziamento prevede un anticipo del 50%, con il restante
                  importo finanziato a tasso 0 (TAN 0% &ndash; TAEG 0%) con una
                  rata annuale.
                </p>
              </div>

              <div className="space-y-8">
                {/* Stats */}
                {[
                  { value: "TAN 0%", label: "Tasso Annuo Nominale" },
                  { value: "TAEG 0%", label: "Tasso Annuo Effettivo Globale" },
                  { value: "50%", label: "Anticipo richiesto" },
                  { value: "10", label: "Rate annuali" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-baseline gap-6 pb-6 border-b border-black/5">
                    <span className="font-display text-[clamp(1.5rem,2vw,2.25rem)] font-bold text-black-deep leading-none min-w-[100px]">
                      {stat.value}
                    </span>
                    <span className="text-caption text-black-deep/40">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Esempio */}
      <section className="py-28 lg:py-44 bg-cream">
        <div className="px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-label text-black-deep/30 mb-6">
                Esempio pratico
              </p>
              <h2 className="font-section-title text-black-deep">
                <AccentText>&euro;2.500 in 10 rate da &euro;250</AccentText>
              </h2>
              <p className="mt-8 text-body text-black-deep/50 max-w-lg mx-auto">
                Importo totale del credito: &euro;2.500. Suddiviso in 10 rate
                annuali da &euro;250. Prima rata a 30 giorni, successive con
                scadenza annuale.
              </p>
              <div className="mt-10 h-px w-16 bg-black-deep/10 mx-auto" />
              <p className="mt-6 text-caption text-black-deep/30">
                Prestito finalizzato Agos One erogato da Agos Ducato S.p.A.,
                soggetto ad approvazione.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Detrazioni */}
      <section className="py-28 lg:py-44">
        <div className="px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <p className="text-label text-black-deep/30 mb-6">
                  Bonus aggiuntivo
                </p>
                <h2 className="font-section-title text-black-deep">
                  <AccentText>
                    Recupera fino al 50% con le detrazioni fiscali
                  </AccentText>
                </h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-body text-black-deep/60 leading-relaxed">
                  Il finanziamento a tasso zero &egrave; cumulabile con le
                  detrazioni fiscali previste per la sostituzione dei
                  serramenti. Questo significa che puoi recuperare fino al 50%
                  del costo totale dell&apos;intervento.
                </p>
                <p className="text-body text-black-deep/60 leading-relaxed">
                  Ci occupiamo noi di tutta la parte burocratica: compilazione
                  della documentazione e presentazione delle pratiche incluse
                  nel servizio.
                </p>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Offerta */}
      <section className="py-16 lg:py-36 bg-black-deep text-white">
        <div className="px-6 sm:px-10 lg:px-20 text-center">
          <FadeInView>
            <p className="text-label text-white/30 mb-6">
              Offerta Anniversario
            </p>
            <h2 className="font-section-title text-white max-w-3xl mx-auto">
              <AccentText>
                Sconto del 40% sulle finestre Koncept Plus Oknoplast
              </AccentText>
            </h2>
            <p className="mt-6 text-body text-white/45 max-w-md mx-auto">
              Cumulabile con detrazioni fiscali fino al 50%. Validit&agrave;
              offerta finanziamento: fino al 30/04/2026.
            </p>
            <div className="mt-10">
              <Link
                href="/contatti"
                className="text-button inline-block bg-white text-black-deep px-8 py-4 hover:bg-white/90 transition-colors"
              >
                Richiedi un preventivo
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
