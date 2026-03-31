import type { Metadata } from "next";
import Script from "next/script";
import { buildBreadcrumbJsonLd } from "@/lib/seo/breadcrumb-jsonld";
import Image from "next/image";
import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";
import { AccentText } from "@/components/ui/AccentText";
import { IntroEmozionale } from "@/components/chi-siamo/IntroEmozionale";
import { CertificazioniBanner } from "@/components/chi-siamo/CertificazioniBanner";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/StaggerContainer";
import { ClipReveal } from "@/components/animations/ClipReveal";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Chi Siamo — La Nostra Storia",
  description:
    "Mood Abitare: oltre 30 anni di esperienza in serramenti, porte e ristrutturazioni nella provincia di Varese. Showroom di 300mq a Gorla Maggiore. Premium Partner Oknoplast dal 2010.",
  keywords: [
    "Mood Abitare chi siamo",
    "showroom serramenti Varese",
    "showroom Gorla Maggiore",
    "serramenti provincia Varese",
    "Premium Partner Oknoplast Varese",
    "esperienza serramenti 30 anni",
    "rivenditore serramenti Varese",
    "showroom porte e finestre",
  ],
  alternates: {
    canonical: "https://www.moschianosrl.it/chi-siamo",
  },
  openGraph: {
    title: "Chi Siamo — Mood Abitare",
    description:
      "Oltre 30 anni di esperienza. Showroom di 300mq a Gorla Maggiore, Varese. Premium Partner Oknoplast.",
    url: "https://www.moschianosrl.it/chi-siamo",
  },
};

/* ── Data ─────────────────────────────────────────────────────────── */

const timeline = [
  {
    year: "1988",
    title: "Tutto inizia qui",
    description:
      "Nasce Mood Abitare con la missione di aiutare le famiglie della provincia di Varese a vivere meglio nella propria casa. Qualità artigianale e attenzione autentica per ogni cliente, fin dal primo giorno.",
  },
  {
    year: "2000",
    title: "La casa, a 360 gradi",
    description:
      "I clienti cercano un punto di riferimento unico per tutta la casa. Così allarghiamo lo sguardo: porte, arredo, superfici, ristrutturazioni. Una scelta naturale, nata dall'ascolto di chi si fida di noi.",
  },
  {
    year: "2010",
    title: "Un luogo per incontrarci",
    description:
      "Apriamo il nostro showroom di 300 mq a Gorla Maggiore: non un semplice negozio, ma uno spazio pensato per toccare con mano infissi, serramenti, porte e lasciarsi ispirare dalle soluzioni di arredo.",
  },
  {
    year: "2020",
    title: "Una fiducia che cresce",
    description:
      "Oknoplast ci sceglie come Premium Partner per la provincia di Varese. Un riconoscimento riservato a pochi, che conferma ciò in cui crediamo: lavorare bene, con i migliori, per offrire il massimo a chi ci sceglie.",
  },
  {
    year: "Oggi",
    title: "Mood Abitare",
    description:
      "Siamo qui per te, con lo stesso entusiasmo di sempre e l'esperienza di oltre trent'anni. 17 brand selezionati, un team dedicato e servizi completi — inclusi design, progettazione e ristrutturazioni chiavi in mano.",
  },
];

/* ── Page ──────────────────────────────────────────────────────────── */

export default function ChiSiamo() {
  return (
    <main>
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBreadcrumbJsonLd([
              { name: "Chi Siamo", url: "https://www.moschianosrl.it/chi-siamo" },
            ])
          ),
        }}
      />
      {/* ─── Hero ──────────────────────────────────────────────────── */}
      {/* Mobile: immagine + titolo sotto su sfondo crema */}
      <div className="sm:hidden">
        <div className="relative w-full max-h-[80vh] overflow-hidden">
          <Image
            src="/moodabitarereal/showroom-esterno-hq.jpg"
            alt="Showroom Mood Abitare"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
            sizes="100vw"
          />
        </div>
        <div className="bg-cream px-6 py-8 text-center">
          <FadeInView delay={0.3}>
            <h1 className="font-page-title text-black-deep">
              Mood Abitare — Benvenuti a casa vostra
            </h1>
          </FadeInView>
        </div>
      </div>

      {/* Desktop: hero classico con titolo sovrapposto */}
      <section className="hidden sm:block relative bg-black-deep text-white overflow-hidden">
        <div className="relative w-full h-[80vh]">
          <Image
            src="/moodabitarereal/showroom-esterno-hq.jpg"
            alt="Showroom Mood Abitare"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black-deep/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-black-deep/20 via-transparent to-transparent" />

          <div className="absolute inset-0 flex items-start justify-center pt-32 lg:pt-40 px-6 sm:px-10 lg:px-20">
            <FadeInView delay={0.4}>
              <h1 className="font-page-title text-white text-center">
                Mood Abitare — Benvenuti a casa vostra
              </h1>
            </FadeInView>
          </div>
        </div>
      </section>

      {/* ─── Intro emozionale ──────────────────────────────────────── */}
      <IntroEmozionale />

      {/* ─── Percorso di crescita ──────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-cream text-black-deep">
        <div className="px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <h2 className="font-page-title text-black-deep mb-10 lg:mb-20 text-center">
              <AccentText>Il nostro cammino, insieme a voi</AccentText>
            </h2>
          </FadeInView>

          <StaggerContainer className="divide-y divide-black-deep/10" staggerDelay={0.08}>
            {timeline.map((item, i) => (
              <StaggerItem key={item.year}>
                <div className="group py-6 lg:py-8 grid grid-cols-[auto_1fr] lg:grid-cols-[80px_1fr_1fr] gap-x-5 lg:gap-x-10 items-baseline">
                  {/* Year */}
                  <span className="font-display font-bold text-black-deep/15 text-lg lg:text-xl">
                    {item.year}
                  </span>

                  {/* Title */}
                  <h3 className="font-display font-medium text-black-deep text-base lg:text-lg leading-tight">
                    <AccentText>{item.title}</AccentText>
                  </h3>

                  {/* Description — full row on mobile, third col on desktop */}
                  <p className="font-display text-black-deep text-sm leading-relaxed col-start-2 lg:col-start-3 mt-1 lg:mt-0 transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ─── Instagram Banner ─────────────────────────────────────── */}
      <section className="bg-bordeaux">
        <a
          href="https://www.instagram.com/moodabitare/"
          target="_blank"
          rel="noopener noreferrer"
          className="group block py-10 lg:py-14 px-6 sm:px-10 lg:px-20"
        >
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              {/* Instagram icon */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-10 h-10 lg:w-12 lg:h-12 text-white/80 group-hover:text-white transition-colors duration-500"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              <div>
                <p className="font-section-title text-white">
                  Seguici su Instagram
                </p>
                <p className="font-display text-white/80 text-sm mt-1">
                  @moodabitare — Ispirazioni, cantieri e novità dallo showroom
                </p>
              </div>
            </div>
            <span className="font-display font-medium text-white/60 group-hover:text-white group-hover:translate-x-2 transition-all duration-500 text-lg">
              &rarr;
            </span>
          </div>
        </a>
      </section>

      {/* ─── Certificazioni ──────────────────────────────────────── */}
      <CertificazioniBanner />

      {/* ─── CTA ───────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-36 bg-cream">
        <div className="px-6 sm:px-10 lg:px-20 max-w-3xl mx-auto text-center">
          <FadeInView>
            <p className="text-label text-black-deep/60 mb-6">
              Il prossimo passo
            </p>
            <h2 className="font-page-title text-black-deep">
              <AccentText>Ci piacerebbe conoscerti</AccentText>
            </h2>
            <p className="mt-6 text-body text-black-deep max-w-md mx-auto">
              Passa a trovarci in showroom per un caffè e una chiacchierata
              senza impegno, oppure scrivici. Saremo felici di ascoltare la tua
              idea e aiutarti a realizzarla.
            </p>
          </FadeInView>

          <FadeInView delay={0.15}>
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
              <Link
                href="/contatti"
                className="text-button block sm:inline-block text-center bg-black-deep text-white px-10 py-4 btn-press hover:bg-black-soft transition-colors"
              >
                Contattaci
              </Link>
              <Link
                href={`tel:${CONTACT_INFO.phoneHref}`}
                className="text-button block sm:inline-block text-center border border-black-deep/15 text-black-deep px-10 py-4 btn-press hover:border-black-deep/40 transition-colors"
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
