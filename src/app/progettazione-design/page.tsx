import type { Metadata } from "next";
import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";
import { AccentText } from "@/components/ui/AccentText";
import { HoverFillSection } from "@/components/progettazione-design/HoverFillSection";

export const metadata: Metadata = {
  title: "Progettazione e Design — Consulenza Interni e Serramenti",
  description:
    "Servizio di progettazione e design Mood Abitare: consulenza su misura per serramenti, cucine, arredo bagno e interni. Showroom di 300mq a Gorla Maggiore. Dalla visione alla realizzazione.",
  keywords: [
    "progettazione interni Varese",
    "consulenza arredo casa",
    "interior design Varese",
    "progettazione cucina su misura",
    "consulenza serramenti gratuita",
    "showroom arredamento Varese",
  ],
  alternates: {
    canonical: "https://www.moschianosrl.it/progettazione-design",
  },
  openGraph: {
    title: "Progettazione e Design — Mood Abitare",
    description:
      "Consulenza personalizzata per serramenti e interni. Showroom di 300mq a Gorla Maggiore (VA).",
    url: "https://www.moschianosrl.it/progettazione-design",
  },
};

const designServices = [
  {
    number: "01",
    title: "CONSULENZA SU MISURA",
    description:
      "Ascoltiamo le tue esigenze, analizziamo gli spazi e proponiamo soluzioni che uniscono estetica e funzionalit\u00e0.",
  },
  {
    number: "02",
    title: "PROGETTAZIONE A 360\u00b0",
    description:
      "Dai serramenti agli interni: un unico team per serramenti, cucine su misura, arredo bagno e ristrutturazioni complete.",
  },
  {
    number: "03",
    title: "ESPERIENZA IN SHOWROOM",
    description:
      "Nel nostro showroom di 300 mq a Gorla Maggiore puoi toccare con mano materiali, confrontare finiture e colori dal vivo.",
  },
  {
    number: "04",
    title: "RENDER 3D E VISUALIZZAZIONE",
    description:
      "Il nostro architetto d\u00e0 forma alle tue idee con render fotorealistici, cos\u00ec puoi vedere il risultato prima dell\u2019installazione.",
  },
  {
    number: "05",
    title: "CONSEGNA CHIAVI IN MANO",
    description:
      "Un unico referente dalla progettazione allo smaltimento: ci occupiamo di tutto noi, con posa certificata.",
  },
];

export default function ProgettazioneDesign() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end bg-black-deep text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/90 via-transparent to-transparent" />
        <div className="relative z-10 w-full pb-14 lg:pb-28 px-6 sm:px-10 lg:px-20">
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

      {/* Servizi di progettazione — Hover Fill */}
      <HoverFillSection services={designServices} />

      {/* CTA */}
      <section className="py-16 lg:py-36 bg-white">
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
