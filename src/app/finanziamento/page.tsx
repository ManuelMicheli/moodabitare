import type { Metadata } from "next";
import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";
import { AccentText } from "@/components/ui/AccentText";

export const metadata: Metadata = {
  title: "Finanziamento a Tasso Zero — Serramenti e Ristrutturazioni",
  description:
    "Finanziamento a tasso zero per serramenti e ristrutturazioni da Mood Abitare. Anticipo 50%, il resto a tasso 0 con Agos Ducato. Cumulabile con detrazioni fiscali fino al 50%. Gorla Maggiore (VA).",
  keywords: [
    "finanziamento serramenti tasso zero",
    "finestre a rate Varese",
    "finanziamento infissi",
    "finanziamento ristrutturazione Varese",
    "detrazioni fiscali 50 serramenti",
    "serramenti tasso zero Agos Ducato",
  ],
  alternates: {
    canonical: "https://www.moschianosrl.it/finanziamento",
  },
  openGraph: {
    title: "Finanziamento a Tasso Zero — Mood Abitare",
    description:
      "Serramenti e ristrutturazioni a tasso zero. Anticipo 50%, cumulabile con detrazioni fiscali 50%.",
    url: "https://www.moschianosrl.it/finanziamento",
  },
};

export default function Finanziamento() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="relative min-h-[80vh] flex items-end bg-black-deep overflow-hidden">
        {/* Large decorative 0% */}
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[10%] select-none pointer-events-none"
          aria-hidden="true"
        >
          <span
            className="font-display font-bold text-white/[0.03] leading-none block"
            style={{ fontSize: "clamp(20rem, 40vw, 55rem)" }}
          >
            0%
          </span>
        </div>

        <div className="relative z-10 w-full pb-16 lg:pb-32 px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-cream/30 mb-6">Finanziamento</p>
            <h1 className="font-page-title text-cream max-w-4xl">
              <AccentText>Tasso zero per i tuoi serramenti</AccentText>
            </h1>
            <p className="mt-8 text-body text-cream/35 max-w-xl">
              Rinnova la tua casa senza pensieri grazie al finanziamento a tasso
              zero, cumulabile con le detrazioni fiscali.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="bg-cream">
        <div className="px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-black-deep/10">
              {[
                { value: "TAN 0%", label: "Tasso Annuo Nominale" },
                { value: "TAEG 0%", label: "Tasso Annuo Effettivo Globale" },
                { value: "50%", label: "Anticipo richiesto" },
                { value: "10", label: "Rate annuali" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`py-10 lg:py-14 ${i > 0 ? "border-l border-black-deep/10" : ""} ${i === 2 ? "border-t lg:border-t-0 border-black-deep/10" : ""} ${i === 3 ? "border-t lg:border-t-0 border-black-deep/10" : ""} pl-5 lg:pl-8`}
                >
                  <span
                    className="font-display font-bold text-black-deep block leading-none"
                    style={{
                      fontSize: "clamp(1.5rem, 1.2rem + 1.5vw, 2.5rem)",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-label text-black-deep/30 mt-3 block text-[0.7rem]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </FadeInView>
        </div>
      </section>

      {/* ── La formula ── */}
      <section className="py-28 lg:py-44 bg-cream">
        <div className="px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
              {/* Left — large number */}
              <div className="lg:col-span-5 flex flex-col justify-center">
                <p className="text-label text-black-deep/25 mb-6">
                  La formula
                </p>
                <h2 className="font-section-title text-black-deep">
                  <AccentText>
                    Anticipo del 50%, il resto a tasso 0
                  </AccentText>
                </h2>
                <p className="mt-8 text-body text-black-deep/45 max-w-md">
                  Il finanziamento prevede un anticipo del 50%, con il restante
                  importo finanziato a tasso 0 (TAN 0% &ndash; TAEG 0%) con una
                  rata annuale.
                </p>
              </div>

              {/* Right — visual breakdown */}
              <div className="lg:col-span-6 lg:col-start-7">
                <div className="border border-black-deep/10 divide-y divide-black-deep/10">
                  {/* 50% you pay */}
                  <div className="p-8 lg:p-10">
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="text-label text-black-deep/30 text-[0.7rem]">
                        Paghi subito
                      </span>
                      <span
                        className="font-display font-bold text-black-deep leading-none"
                        style={{ fontSize: "clamp(2rem, 1.5rem + 2vw, 3.5rem)" }}
                      >
                        50%
                      </span>
                    </div>
                    {/* Visual bar */}
                    <div className="h-1.5 w-full bg-black-deep/5 overflow-hidden">
                      <div className="h-full w-1/2 bg-black-deep" />
                    </div>
                  </div>

                  {/* 50% financed */}
                  <div className="p-8 lg:p-10">
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="text-label text-black-deep/30 text-[0.7rem]">
                        Finanziato a tasso 0
                      </span>
                      <span
                        className="font-display font-bold text-black-deep leading-none"
                        style={{ fontSize: "clamp(2rem, 1.5rem + 2vw, 3.5rem)" }}
                      >
                        50%
                      </span>
                    </div>
                    {/* Visual bar */}
                    <div className="h-1.5 w-full bg-black-deep/5 overflow-hidden">
                      <div className="h-full w-1/2 bg-black-deep/20" />
                    </div>
                    <p className="mt-5 font-ui text-[0.8rem] text-black-deep/35">
                      Suddiviso in 10 rate annuali
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* ── Esempio pratico ── */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <div className="max-w-4xl mx-auto">
              <p className="text-label text-black-deep/25 mb-6 text-center">
                Esempio pratico
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-black-deep/10 border border-black-deep/10">
                {[
                  {
                    value: "\u20AC5.000",
                    label: "Importo lavori",
                    sub: "Costo totale dell\u2019intervento",
                  },
                  {
                    value: "\u20AC2.500",
                    label: "Anticipo 50%",
                    sub: "Versato all\u2019avvio dei lavori",
                  },
                  {
                    value: "\u20AC250",
                    label: "Rata annuale",
                    sub: "Per 10 anni a tasso zero",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white p-8 lg:p-10 text-center"
                  >
                    <span
                      className="font-display font-bold text-black-deep block leading-none"
                      style={{
                        fontSize: "clamp(1.75rem, 1.3rem + 2vw, 3rem)",
                      }}
                    >
                      {item.value}
                    </span>
                    <span className="text-label text-black-deep/40 mt-4 block text-[0.7rem]">
                      {item.label}
                    </span>
                    <p className="mt-2 font-ui text-[0.8rem] text-black-deep/30">
                      {item.sub}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-center font-ui text-[0.75rem] text-black-deep/25">
                Prestito finalizzato Agos One erogato da Agos Ducato S.p.A.,
                soggetto ad approvazione.
              </p>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* ── Detrazioni fiscali ── */}
      <section className="py-28 lg:py-44 bg-cream">
        <div className="px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left — big 50% */}
              <div className="lg:col-span-5 flex flex-col items-start">
                <p className="text-label text-black-deep/25 mb-6">
                  Detrazioni fiscali
                </p>
                <span
                  className="font-display font-bold text-black-deep leading-none block"
                  style={{
                    fontSize: "clamp(5rem, 4rem + 5vw, 12rem)",
                  }}
                  aria-hidden="true"
                >
                  50%
                </span>
                <p className="text-label text-black-deep/30 mt-4">
                  Recupero massimo
                </p>
              </div>

              {/* Right — text */}
              <div className="lg:col-span-6 lg:col-start-7 space-y-6">
                <h2 className="font-section-title text-black-deep">
                  <AccentText>
                    Recupera fino al 50% con le detrazioni fiscali
                  </AccentText>
                </h2>
                <p className="text-body text-black-deep/50 leading-relaxed">
                  Il finanziamento a tasso zero &egrave; cumulabile con le
                  detrazioni fiscali previste per la sostituzione dei serramenti.
                  Questo significa che puoi recuperare fino al 50% del costo
                  totale dell&apos;intervento.
                </p>
                <p className="text-body text-black-deep/50 leading-relaxed">
                  Ci occupiamo noi di tutta la parte burocratica: compilazione
                  della documentazione e presentazione delle pratiche incluse nel
                  servizio.
                </p>

                <div className="pt-4 flex flex-wrap gap-3">
                  {[
                    "Cumulabile con finanziamento",
                    "Pratiche incluse",
                    "Documentazione gestita",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-4 py-1.5 text-[0.7rem] font-ui font-medium tracking-wide uppercase text-black-deep/35 border border-black-deep/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* ── Offerta + CTA ── */}
      <section className="py-24 lg:py-40 bg-black-deep">
        <div className="px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-label text-cream/25 mb-6">
                Offerta Anniversario
              </p>
              <h2 className="font-section-title text-cream">
                <AccentText>
                  Sconto del 40% sulle finestre Koncept Plus Oknoplast
                </AccentText>
              </h2>
              <p className="mt-6 text-body text-cream/35 max-w-md mx-auto">
                Cumulabile con detrazioni fiscali fino al 50%.
                Validit&agrave; offerta finanziamento: fino al 30/04/2026.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contatti"
                  className="text-button inline-block bg-cream text-black-deep px-10 py-4 hover:bg-cream/90 transition-colors"
                >
                  Richiedi un preventivo
                </Link>
                <Link
                  href="tel:03311120048"
                  className="text-button inline-block text-cream/50 px-6 py-4 border border-cream/10 hover:border-cream/25 transition-colors"
                >
                  0331.1120048
                </Link>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
