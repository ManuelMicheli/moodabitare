import type { Metadata } from "next";
import { FadeInView } from "@/components/animations/FadeInView";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";

export const metadata: Metadata = {
  title: "Premium Partner Oknoplast",
  description:
    "Mood Abitare è Premium Partner Oknoplast per la provincia di Varese. Scopri i vantaggi di scegliere un partner certificato per i tuoi serramenti.",
};

const benefits = [
  { title: "Qualità certificata", description: "Prodotti con le più alte certificazioni internazionali presso istituti indipendenti europei." },
  { title: "Assistenza dedicata", description: "Un team sempre aggiornato sulle ultime novità in termini di prodotti e tecniche di installazione." },
  { title: "Garanzia estesa", description: "Garanzia completa su prodotti e installazione, con assistenza post-vendita dedicata." },
  { title: "Design innovativo", description: "Soluzioni brevettate e originali con estetica di altissimo livello e prestazioni eccezionali." },
];

const oknoplastFeatures = [
  "Multinazionale specializzata in serramenti PVC e alluminio di design",
  "Fondata a Cracovia nel 1994, simbolo di innovazione in Europa",
  "PVC vergine, riciclabile al 100%",
  "Prestazioni eccezionali di isolamento termico e acustico",
  "Personalizzazione completa: finiture, maniglie, accessori",
  "Numerose certificazioni internazionali",
];

export default function PremiumPartner() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end bg-black-deep text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/90 via-transparent to-transparent" />
        <div className="relative z-10 w-full pb-20 lg:pb-28 px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-white/40 mb-6">
              Premium Partner
            </p>
            <h1 className="font-section-title max-w-4xl">
              Mood Abitare è Premium Partner Oknoplast
            </h1>
            <p className="mt-8 text-body text-white/35 max-w-xl">
              Selezionata da Oknoplast come Premium Partner per la provincia di Varese. Una rete ristretta di operatori in tutta Italia, riconosciuti per l&apos;eccellenza.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* What it means */}
      <section className="py-32 lg:py-44">
        <div className="px-6 sm:px-10 lg:px-20">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
            <FadeInView direction="left">
              <p className="text-label text-black-deep/30 mb-6">
                Il nostro riconoscimento
              </p>
              <h2 className="font-section-title text-black-deep">
                Cosa significa essere Premium Partner
              </h2>
              <div className="mt-10 space-y-5 text-caption text-black-deep/40 max-w-lg">
                <p>
                  La qualifica di Premium Partner Oknoplast è il riconoscimento della qualità del nostro lavoro, della nostra esperienza trentennale e della grande conoscenza dell&apos;area di Varese.
                </p>
                <p>
                  Siamo costantemente aggiornati sulle ultime novità in termini di prodotti e tecniche di installazione, garantendo ai nostri clienti le soluzioni più avanzate del mercato.
                </p>
              </div>
            </FadeInView>

            <FadeInView direction="right">
              <StaggerContainer className="grid grid-cols-1 gap-px bg-black/5 sm:grid-cols-2" staggerDelay={0.08}>
                {benefits.map((benefit, i) => (
                  <StaggerItem key={benefit.title}>
                    <div className="bg-white p-8 lg:p-10 h-full">
                      <span className="text-caption font-medium text-black-deep/15">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-4 font-display text-base font-bold text-black-deep tracking-tight">
                        {benefit.title}
                      </h3>
                      <p className="mt-3 text-caption text-black-deep/35">
                        {benefit.description}
                      </p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* About Oknoplast */}
      <section className="py-32 lg:py-44 bg-black-deep text-white">
        <div className="px-6 sm:px-10 lg:px-20">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">
            <FadeInView direction="left">
              <div className="aspect-[4/3] bg-white/5" />
            </FadeInView>

            <FadeInView direction="right">
              <p className="text-label text-white/30 mb-6">
                Il brand
              </p>
              <h2 className="font-section-title">
                Chi è Oknoplast
              </h2>
              <ul className="mt-10 space-y-4">
                {oknoplastFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-4">
                    <span className="flex-shrink-0 mt-1.5 h-px w-4 bg-white/20" />
                    <span className="text-caption text-white/40">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/prodotti/finestre-pvc-oknoplast"
                className="inline-block mt-12 text-button text-white border-b border-white/20 pb-1 hover:border-white/60 transition-colors"
              >
                Scopri le finestre Oknoplast
              </a>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-44">
        <div className="px-6 sm:px-10 lg:px-20 text-center">
          <FadeInView>
            <h2 className="font-section-title text-black-deep max-w-3xl mx-auto">
              Scegli la qualità Premium Partner
            </h2>
            <p className="mt-8 text-body text-black-deep/35 max-w-md mx-auto">
              Contattaci per scoprire tutti i vantaggi.
            </p>
            <a
              href="/contatti"
              className="inline-block mt-12 text-button bg-black-deep text-white px-8 py-4 hover:bg-black-soft transition-colors"
            >
              Richiedi una consulenza
            </a>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
