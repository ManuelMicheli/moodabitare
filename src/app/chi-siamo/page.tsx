import type { Metadata } from "next";
import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import { AccentText } from "@/components/ui/AccentText";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Chi Siamo",
  description:
    "Mood Abitare by Moschiano Solution: oltre 30 anni di esperienza in serramenti, porte e ristrutturazioni nella provincia di Varese. Showroom di 300mq a Gorla Maggiore.",
};

/* ── Data ─────────────────────────────────────────────────────────── */

const timeline = [
  {
    year: "1990",
    title: "Tutto inizia qui",
    description:
      "Un piccolo laboratorio e un sogno grande: aiutare le persone a vivere meglio nella propria casa. Nasce Moschiano Solution, con la promessa di offrire qualità artigianale e attenzione autentica per ogni cliente.",
  },
  {
    year: "2000",
    title: "La casa, a 360 gradi",
    description:
      "Ci rendiamo conto che i nostri clienti cercano un punto di riferimento unico per tutta la casa. Così allarghiamo lo sguardo: porte, arredo, superfici. Una scelta naturale, nata dall'ascolto di chi si fida di noi.",
  },
  {
    year: "2010",
    title: "Un luogo per incontrarci",
    description:
      "Apriamo il nostro showroom di 300 mq a Gorla Maggiore: non un semplice negozio, ma uno spazio pensato per farti sentire a casa ancor prima di cominciare. Qui puoi vedere, toccare e immaginare insieme a noi.",
  },
  {
    year: "2020",
    title: "Una fiducia che cresce",
    description:
      "Oknoplast ci sceglie come unico Premium Partner per la provincia di Varese. Un riconoscimento che ci riempie di orgoglio e che conferma ciò in cui crediamo: lavorare bene, con i migliori, per offrire il massimo a chi ci sceglie.",
  },
  {
    year: "Oggi",
    title: "Mood Abitare",
    description:
      "Siamo qui per te, con lo stesso entusiasmo di sempre e l'esperienza di oltre trent'anni. 14 brand selezionati, un team dedicato e un unico obiettivo: che la tua casa diventi esattamente il posto in cui ami stare.",
  },
];

/* ── Page ──────────────────────────────────────────────────────────── */

export default function ChiSiamo() {
  return (
    <main>
      {/* ─── Hero ──────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-end bg-black-deep text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-black-deep via-black-soft/80 to-black-deep" />
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep via-transparent to-transparent" />

        <div className="relative z-10 w-full pb-16 lg:pb-24 px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-white/30 mb-6">
              Chi siamo
            </p>
          </FadeInView>

          <FadeInView delay={0.15}>
            <h1
              className="font-display font-bold uppercase leading-[0.9] tracking-[-0.03em] max-w-4xl"
              style={{ fontSize: "clamp(2rem, 1.2rem + 5vw, 5.5rem)" }}
            >
              <AccentText>Benvenuti a casa vostra</AccentText>
            </h1>
          </FadeInView>
        </div>
      </section>

      {/* ─── Intro emozionale ──────────────────────────────────────── */}
      <section className="py-24 lg:py-36 px-6 sm:px-10 lg:px-20">
        <div className="max-w-3xl">
          <FadeInView>
            <p
              className="font-display font-medium leading-[1.25] tracking-[-0.015em] text-black-deep"
              style={{ fontSize: "clamp(1.25rem, 1rem + 1.5vw, 2.25rem)" }}
            >
              <AccentText>
                Sappiamo cosa significa desiderare una casa che ti assomigli
                davvero. Uno spazio dove ogni dettaglio — dalla luce che filtra
                dalle finestre al calore dei materiali — racconta chi sei e come
                ami vivere.
              </AccentText>
            </p>
          </FadeInView>

          <FadeInView delay={0.15}>
            <p className="mt-8 text-body text-black-deep/40 leading-relaxed max-w-xl">
              È con questa sensibilità che lavoriamo da oltre trent'anni.
              Siamo una famiglia di professionisti che ha scelto di dedicarsi
              interamente al mondo della casa, con la stessa passione del primo
              giorno e l'esperienza che solo il tempo può dare. Ci piace
              ascoltare, capire le tue esigenze e accompagnarti passo dopo passo
              verso la soluzione giusta — quella che fa sentire bene te e chi
              vive con te.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* ─── Percorso di crescita ──────────────────────────────────── */}
      <section className="py-28 lg:py-44 bg-black-deep text-white">
        <div className="px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-white/20 mb-5 text-center">
              Il nostro percorso
            </p>
            <h2 className="font-section-title mb-20 lg:mb-28 text-center">
              <AccentText>Il nostro cammino, insieme a voi</AccentText>
            </h2>
          </FadeInView>

          <StaggerContainer className="space-y-0" staggerDelay={0.12}>
            {timeline.map((item, i) => (
              <StaggerItem key={item.year}>
                <div className="group relative grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-0 border-t border-white/6 last:border-b last:border-white/6">
                  {/* Left — year large + title */}
                  <div className="py-10 lg:py-14 lg:pr-16 flex items-baseline gap-5 lg:gap-7">
                    <span
                      className="font-display font-bold leading-none text-white/6 group-hover:text-gold/15 transition-colors duration-700 flex-shrink-0"
                      style={{ fontSize: "clamp(2.5rem, 2rem + 2vw, 4.5rem)" }}
                    >
                      {item.year}
                    </span>
                    <div>
                      <p className="text-label text-white/12 group-hover:text-gold/25 transition-colors duration-700 mb-2">
                        Capitolo {String(i + 1).padStart(2, "0")}
                      </p>
                      <h3
                        className="font-display font-medium leading-[1.05] tracking-[-0.02em] text-white"
                        style={{ fontSize: "clamp(1.25rem, 1rem + 1vw, 1.75rem)" }}
                      >
                        <AccentText>{item.title}</AccentText>
                      </h3>
                    </div>
                  </div>

                  {/* Right — description */}
                  <div className="pb-10 lg:py-14 lg:pl-16 lg:border-l lg:border-white/6 flex items-center">
                    <p className="text-caption text-white/28 max-w-sm leading-[1.65] group-hover:text-white/42 transition-colors duration-700">
                      {item.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── CTA ───────────────────────────────────────────────────── */}
      <section className="py-24 lg:py-36 bg-white">
        <div className="px-6 sm:px-10 lg:px-20 max-w-3xl mx-auto text-center">
          <FadeInView>
            <p className="text-label text-black-deep/25 mb-6">
              Il prossimo passo
            </p>
            <h2
              className="font-display font-bold uppercase leading-[0.9] tracking-[-0.02em] text-black-deep"
              style={{ fontSize: "clamp(1.5rem, 1rem + 2.5vw, 3.5rem)" }}
            >
              <AccentText>Ci piacerebbe conoscerti</AccentText>
            </h2>
            <p className="mt-6 text-body text-black-deep/35 max-w-md mx-auto">
              Passa a trovarci in showroom per un caffè e una chiacchierata
              senza impegno, oppure scrivici. Saremo felici di ascoltare la tua
              idea e aiutarti a realizzarla.
            </p>
          </FadeInView>

          <FadeInView delay={0.15}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contatti"
                className="text-button inline-block bg-black-deep text-white px-10 py-4 hover:bg-black-soft transition-colors"
              >
                Contattaci
              </Link>
              <Link
                href={`tel:${CONTACT_INFO.phoneHref}`}
                className="text-button inline-block border border-black-deep/15 text-black-deep px-10 py-4 hover:border-black-deep/40 transition-colors"
              >
                {CONTACT_INFO.phone}
              </Link>
            </div>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
