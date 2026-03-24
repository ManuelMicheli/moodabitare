import type { Metadata } from "next";
import Script from "next/script";
import { buildBreadcrumbJsonLd } from "@/lib/seo/breadcrumb-jsonld";
import { FAQ_PROGETTAZIONE, buildFaqJsonLd } from "@/lib/seo/faq-data";
import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";
import { ClipReveal } from "@/components/animations/ClipReveal";
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
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbJsonLd([
              { name: "Progettazione e Design", url: "https://www.moschianosrl.it/progettazione-design" },
            ])
          ),
        }}
      />
      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqJsonLd(FAQ_PROGETTAZIONE)),
        }}
      />
      {/* Hero */}
      <section className="relative min-h-[50vh] sm:min-h-[70vh] flex items-end bg-black-deep text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/90 via-transparent to-transparent" />
        <div className="relative z-10 w-full pb-14 lg:pb-28 px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-white/80 mb-6">
              Progettazione e Design
            </p>
          </FadeInView>
          <ClipReveal direction="up" delay={0.15} duration={0.9}>
            <h1 className="font-page-title max-w-5xl">
              <AccentText>Le tue idee prendono forma</AccentText>
            </h1>
          </ClipReveal>
          <FadeInView delay={0.4}>
            <p className="mt-8 text-body text-white/80 max-w-xl">
              Ogni casa racconta una storia unica. Il nostro metodo parte
              dall&apos;ascolto per comprendere come vivi i tuoi spazi, le tue
              abitudini, aspettative e necessit&agrave; pratiche.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Filosofia */}
      <section className="py-28 lg:py-44 bg-cream relative overflow-hidden">
        {/* Decorative background element */}
        <div
          className="absolute top-1/2 -right-20 -translate-y-1/2 select-none pointer-events-none opacity-[0.025]"
          aria-hidden="true"
        >
          <span
            className="font-display font-bold text-black-deep leading-none block"
            style={{ fontSize: "clamp(12rem, 20vw, 30rem)" }}
          >
            &amp;
          </span>
        </div>

        <div className="px-6 sm:px-10 lg:px-20 relative z-10">
          <FadeInView>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
              {/* Left — title block */}
              <div className="lg:col-span-5">
                <p className="text-label text-black-deep/60 mb-6">
                  La nostra filosofia
                </p>
                <h2 className="font-section-title text-black-deep">
                  <AccentText>
                    Sensibilit&agrave; estetica e competenza tecnica
                  </AccentText>
                </h2>

                {/* Highlights */}
                <div className="mt-10 grid grid-cols-2 gap-6">
                  {[
                    { value: "300", unit: "mq", label: "di showroom" },
                    { value: "30+", unit: "", label: "anni di esperienza" },
                  ].map((item) => (
                    <div key={item.label}>
                      <span
                        className="font-display font-bold text-black-deep leading-none"
                        style={{ fontSize: "clamp(1.5rem, 1rem + 2vw, 2.5rem)" }}
                      >
                        {item.value}
                        {item.unit && (
                          <span className="text-[0.6em] text-black-deep/60 ml-1">
                            {item.unit}
                          </span>
                        )}
                      </span>
                      <p className="text-label text-black-deep/60 mt-2 text-[0.75rem]">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — text with decorative border */}
              <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
                <div className="border-l-2 border-black-deep/8 pl-8 lg:pl-12 space-y-6">
                  <p className="text-body text-black-deep leading-relaxed">
                    Le nostre designer sono professioniste esperte che uniscono
                    sensibilit&agrave; estetica a solida competenza tecnica. Il
                    metodo parte dall&apos;ascolto per comprendere come il cliente
                    vive i propri spazi, le abitudini, le aspettative e le
                    necessit&agrave; pratiche.
                  </p>
                  <p className="text-body text-black-deep leading-relaxed">
                    Il cliente pu&ograve; inoltre contare sul supporto di un
                    architetto, che aiuter&agrave; non solo a scegliere i prodotti
                    pi&ugrave; adatti, ma anche a dare forma alle idee con
                    l&apos;ausilio di render 3D.
                  </p>
                </div>

              </div>
            </div>
          </FadeInView>
        </div>
      </section>

      {/* Servizi di progettazione — Hover Fill */}
      <HoverFillSection services={designServices} />

      {/* CTA */}
      <section className="py-28 lg:py-44 bg-black-deep relative overflow-hidden">
        {/* Decorative background */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[10%] select-none pointer-events-none"
          aria-hidden="true"
        >
          <span
            className="font-display font-bold text-white/[0.02] leading-none block whitespace-nowrap"
            style={{ fontSize: "clamp(8rem, 15vw, 20rem)" }}
          >
            Mood Abitare
          </span>
        </div>

        <div className="px-6 sm:px-10 lg:px-20 relative z-10">
          <FadeInView>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-label text-cream/80 mb-6">
                Inizia il tuo progetto
              </p>
              <h2 className="font-section-title text-cream max-w-3xl mx-auto">
                <AccentText>Raccontaci la tua visione</AccentText>
              </h2>
              <p className="mt-8 text-body text-cream/80 max-w-lg mx-auto">
                Vieni a trovarci nello showroom di 300&thinsp;mq a Gorla
                Maggiore per un primo incontro senza impegno. Ti guideremo
                passo dopo passo, dall&apos;idea alla realizzazione.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/contatti"
                  className="text-button inline-block bg-cream text-black-deep px-10 py-4 btn-press hover:bg-cream/90 transition-colors"
                >
                  Prenota un incontro
                </Link>
                <Link
                  href="tel:03311120048"
                  className="text-button inline-block text-cream/50 px-6 py-4 border border-cream/10 hover:border-cream/25 btn-press transition-colors"
                >
                  0331.1120048
                </Link>
              </div>

              {/* Trust signals */}
              <div className="mt-16 pt-10 border-t border-cream/8 flex flex-wrap justify-center gap-x-10 gap-y-4">
                {[
                  "Consulenza gratuita",
                  "Preventivo in 48h",
                  "Posa certificata",
                ].map((item) => (
                  <span
                    key={item}
                    className="text-[0.75rem] font-ui tracking-wider uppercase text-cream/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
