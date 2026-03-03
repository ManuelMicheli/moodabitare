import type { Metadata } from "next";
import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";
import { StaggerContainer, StaggerItem } from "@/components/animations/StaggerContainer";
import { AccentText } from "@/components/ui/AccentText";

export const metadata: Metadata = {
  title: "Progettazione e Design",
  description:
    "Moschiano Srl: servizio di progettazione e design per serramenti e interni. Consulenza personalizzata, showroom di 300mq e percorso completo dalla visione alla realizzazione.",
};

const phases = [
  {
    number: "01",
    title: "Progettazione a 360\u00b0, dai serramenti agli interni",
    description:
      "Esperienza trentennale nel settore dei serramenti con visione completa dell\u2019abitare. Soluzioni complete per serramenti e infissi, cucine su misura funzionali e di design, arredo bagno, coordinamento di ristrutturazioni complete chiavi in mano.",
  },
  {
    number: "02",
    title: "Il valore dello showroom",
    description:
      "Nello showroom a Gorla Maggiore \u00e8 possibile toccare con mano la qualit\u00e0 dei materiali, confrontare colori, texture e finiture dal vivo. Uno staff competente e preparato accompagna in questo percorso di scoperta, aiutando a visualizzare come ogni elemento si integrer\u00e0 nel progetto. Un vero laboratorio di idee.",
  },
  {
    number: "03",
    title: "Un percorso completo",
    description:
      "Supporto completo: dal primo incontro, dove il cliente racconta la sua visione, allo sviluppo del concept, fino alla presentazione del progetto finale e al perfezionamento dei dettagli per la realizzazione finale. Ogni fase \u00e8 seguita personalmente per garantire che il risultato rispetti perfettamente il progetto.",
  },
];

export default function ProgettazioneDesign() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end bg-black-deep text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/90 via-transparent to-transparent" />
        <div className="relative z-10 w-full pb-20 lg:pb-28 px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-white/40 mb-6">
              Progettazione e Design
            </p>
            <h1 className="font-page-title max-w-5xl">
              <AccentText>Le tue idee prendono forma</AccentText>
            </h1>
            <p className="mt-8 text-body text-white/35 max-w-xl">
              Ogni casa racconta una storia unica. Il nostro metodo parte
              dall&apos;ascolto per comprendere come vivi i tuoi spazi, le tue
              abitudini, aspettative e necessit&agrave; pratiche.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Filosofia */}
      <section className="py-28 lg:py-44">
        <div className="px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <p className="text-label text-black-deep/30 mb-6">
                  La nostra filosofia
                </p>
                <h2 className="font-section-title text-black-deep">
                  <AccentText>
                    Sensibilit&agrave; estetica e competenza tecnica
                  </AccentText>
                </h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-body text-black-deep/60 leading-relaxed">
                  Le nostre designer sono professioniste esperte che uniscono
                  sensibilit&agrave; estetica a solida competenza tecnica. Il
                  metodo parte dall&apos;ascolto per comprendere come il cliente
                  vive i propri spazi, le abitudini, le aspettative e le
                  necessit&agrave; pratiche.
                </p>
                <p className="text-body text-black-deep/60 leading-relaxed">
                  Il cliente pu&ograve; inoltre contare sul supporto di un
                  architetto, che aiuter&agrave; non solo a scegliere i prodotti
                  pi&ugrave; adatti, ma anche a dare forma alle idee con
                  l&apos;ausilio di render 3D.
                </p>
              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* 3 Fasi */}
      <section className="py-28 lg:py-44 bg-black-deep text-white">
        <div className="px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-white/20 mb-5">
              Il nostro approccio
            </p>
            <h2 className="font-section-title mb-20 lg:mb-28">
              <AccentText>Tre fasi per il tuo progetto</AccentText>
            </h2>
          </FadeInView>

          <StaggerContainer className="space-y-0" staggerDelay={0.12}>
            {phases.map((phase) => (
              <StaggerItem key={phase.number}>
                <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-6 lg:gap-16 py-12 lg:py-16 border-t border-white/6">
                  <div className="flex items-start gap-6">
                    <span
                      className="font-display font-bold text-white/8 leading-none"
                      style={{
                        fontSize: "clamp(2.5rem, 2rem + 2vw, 4.5rem)",
                      }}
                    >
                      {phase.number}
                    </span>
                    <div className="lg:min-w-[280px]">
                      <h3
                        className="font-display font-medium leading-[1.1] tracking-[-0.02em] text-white"
                        style={{
                          fontSize: "clamp(1.25rem, 1rem + 1vw, 1.75rem)",
                        }}
                      >
                        <AccentText>{phase.title}</AccentText>
                      </h3>
                    </div>
                  </div>
                  <p className="text-caption text-white/35 max-w-lg leading-[1.65]">
                    {phase.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="px-6 sm:px-10 lg:px-20 text-center">
          <FadeInView>
            <h2 className="font-section-title text-black-deep max-w-3xl mx-auto">
              <AccentText>Raccontaci la tua visione</AccentText>
            </h2>
            <p className="mt-8 text-body text-black-deep/35 max-w-md mx-auto">
              Vieni a trovarci nello showroom di Gorla Maggiore per un primo
              incontro senza impegno.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-6">
              <Link
                href="/contatti"
                className="text-button inline-block bg-black-deep text-white px-8 py-4 hover:bg-black-soft transition-colors"
              >
                Prenota un incontro
              </Link>
              <Link
                href="/prodotti"
                className="text-button inline-block text-black-deep border-b border-black-deep/20 pb-1 hover:border-black-deep/60 transition-colors"
              >
                Vedi i prodotti
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
