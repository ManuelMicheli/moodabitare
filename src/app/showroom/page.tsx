import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";
import { AccentText } from "@/components/ui/AccentText";
import { CurtainHero } from "@/components/animations/CurtainHero";
import { CONTACT_INFO, R2_CDN } from "@/lib/constants";


export const metadata: Metadata = {
  title: "Showroom — 300mq di Esposizione a Gorla Maggiore (Varese)",
  description:
    "Showroom Mood Abitare: 300mq di esposizione a Gorla Maggiore (VA). Serramenti Oknoplast, porte, cucine, arredo bagno e outdoor da toccare con mano. Ingresso libero.",
  keywords: [
    "showroom serramenti Varese",
    "showroom Gorla Maggiore",
    "esposizione finestre Oknoplast",
    "showroom infissi provincia Varese",
    "showroom arredo casa Varese",
    "showroom cucine Gorla Maggiore",
    "showroom porte blindate Varese",
    "esposizione serramenti alto milanese",
    "showroom 300mq Varese",
    "Mood Abitare showroom",
  ],
  alternates: {
    canonical: "https://www.moodabitare.it/showroom",
  },
  openGraph: {
    title: "Showroom Mood Abitare — 300mq a Gorla Maggiore (Varese)",
    description:
      "Visita il nostro showroom di 300mq: serramenti Oknoplast, porte, cucine e arredo da toccare con mano. Ingresso libero, consulenti qualificati.",
    url: "https://www.moodabitare.it/showroom",
    type: "website",
    locale: "it_IT",
    siteName: "Mood Abitare",
  },
  twitter: {
    card: "summary_large_image",
    title: "Showroom Mood Abitare — 300mq a Gorla Maggiore",
    description: "Serramenti Oknoplast, porte, cucine e arredo da toccare con mano.",
  },
};

export default function ShowroomPage() {
  return (
    <main>
      {/* ─── Hero — video 75% + testo ─────────────────────────────── */}
      <CurtainHero>
        <section className="relative min-h-svh sm:min-h-[70vh] lg:min-h-[75vh] flex items-end bg-black-deep text-white overflow-hidden">
          <div className="absolute inset-0 bg-black-deep" />
          <div className="absolute inset-0 bg-black-deep/15" />
          <div className="absolute inset-0 bg-gradient-to-t from-black-deep/50 via-black-deep/10 to-transparent" />

          <div className="relative z-10 w-full pb-10 sm:pb-12 lg:pb-20 px-6 sm:px-10 lg:px-20 text-left">
            <FadeInView delay={0.3}>
              <p className="text-label text-white/80 mb-3 sm:mb-4 text-[0.65rem] sm:text-[0.75rem]">Il nostro spazio</p>
              <h1 className="font-page-title text-white text-[1rem] sm:text-[clamp(1.5rem,1rem+3vw,4.5rem)]">
                Showroom Mood Abitare
              </h1>
              <p className="mt-3 sm:mt-4 font-display text-white/90 text-[0.75rem] sm:text-base lg:text-lg max-w-2xl">
                300 mq di esposizione a Gorla Maggiore — serramenti, porte, cucine, arredo e soluzioni per tutta la casa da toccare con mano.
              </p>
              <Link
                href="/contatti"
                className="mt-6 sm:mt-8 text-button inline-block bg-white text-black-deep px-6 py-3 sm:px-8 sm:py-4 btn-press hover:bg-white/85 transition-colors"
              >
                Vieni a trovarci
              </Link>
            </FadeInView>
          </div>
        </section>
      </CurtainHero>


      {/* ─── Gallery showroom ─────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-28 bg-cream">
        <div className="px-4 sm:px-10 lg:px-16">
          <FadeInView>
            <h2 className="font-section-title text-black-deep text-center mb-10 sm:mb-14 lg:mb-20">
              <AccentText>Esplora lo showroom</AccentText>
            </h2>
          </FadeInView>

          <div className="space-y-6 sm:space-y-8 lg:space-y-10">

            {/* ── Riga 1 — grande + media + piccola ↘ ── */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-8 sm:items-end">
              <FadeInView delay={0} className="w-full sm:w-[45%]">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image src="/moodabitarereal/cucina-showroom.webp" alt="Cucina moderna nello showroom" fill className="object-cover" sizes="(max-width: 640px) 100vw, 43vw" />
                </div>
              </FadeInView>
              <FadeInView delay={0.15} className="w-full sm:w-[33%]">
                <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                  <Image src="/moodabitarereal/showroom-interno.webp" alt="Interno showroom Mood Abitare" fill className="object-cover" sizes="(max-width: 640px) 100vw, 31vw" />
                </div>
              </FadeInView>
              <FadeInView delay={0.3} className="w-full sm:w-[33%]">
                <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                  <video
                    src={`${R2_CDN}/videos/showroom-card-720.mp4`}
                    poster="/moodabitarereal/showroom-esterno-hq.jpg"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </FadeInView>
            </div>

            {/* ── Riga 2 — piccola + media + grande ↗ ── */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-8 sm:items-start">
              <FadeInView delay={0.3} className="hidden sm:block sm:flex-1 self-end">
                <div className="aspect-[1/1] rounded-sm bg-warm-gray" />
              </FadeInView>
              <FadeInView delay={0.1} className="w-full sm:w-[33%]">
                <div className="relative aspect-[1/1] rounded-sm overflow-hidden">
                  <Image src="/images/wm-26.webp" alt="Showroom Mood Abitare — dettaglio esposizione" fill className="object-cover" sizes="(max-width: 640px) 100vw, 31vw" />
                </div>
              </FadeInView>
              <FadeInView delay={0} className="w-full sm:w-[46%]">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image src="/images/wm-25.webp" alt="Showroom Mood Abitare — ambiente espositivo" fill className="object-cover" sizes="(max-width: 640px) 100vw, 44vw" />
                </div>
              </FadeInView>
            </div>

            {/* ── Riga 3 — grande + media + piccola ↘ ── */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-10 sm:items-end">
              <FadeInView delay={0} className="w-full sm:w-[37%]">
                <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                  <Image src="/showroom/wm-29.png" alt="Showroom Mood Abitare — esposizione" fill className="object-cover" sizes="(max-width: 640px) 100vw, 35vw" />
                </div>
              </FadeInView>
              <FadeInView delay={0.2} className="w-full sm:w-[35%]">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image src="/showroom/wm-32.png" alt="Showroom Mood Abitare — vista showroom" fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
                </div>
              </FadeInView>
              <FadeInView delay={0.35} className="hidden sm:block sm:flex-1 self-start">
                <div className="aspect-[3/4] rounded-sm bg-warm-gray" />
              </FadeInView>
            </div>

            {/* ── Riga 4 — piccola + media + grande ↗ ── */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-8 sm:items-start">
              <FadeInView delay={0.3} className="hidden sm:block sm:flex-1 self-end">
                <div className="aspect-[4/3] rounded-sm bg-warm-gray" />
              </FadeInView>
              <FadeInView delay={0.25} className="hidden sm:block sm:flex-1 self-end">
                <div className="aspect-[4/3] rounded-sm bg-warm-gray" />
              </FadeInView>
              <FadeInView delay={0.2} className="hidden sm:block sm:flex-1 self-end">
                <div className="aspect-[4/3] rounded-sm bg-warm-gray" />
              </FadeInView>
              <FadeInView delay={0.1} className="w-full sm:w-[34%]">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image src="/showroom/wm-34.png" alt="Showroom Mood Abitare — esposizione" fill className="object-cover" sizes="(max-width: 640px) 100vw, 32vw" />
                </div>
              </FadeInView>
              <FadeInView delay={0} className="w-full sm:w-[44%]">
                <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                  <Image src="/showroom/wm-33.png" alt="Showroom Mood Abitare — spazio espositivo" fill className="object-cover" sizes="(max-width: 640px) 100vw, 42vw" />
                </div>
              </FadeInView>
            </div>

            {/* ── Riga 5 — grande + media + piccola ↘ ── */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-10 sm:items-end">
              <FadeInView delay={0} className="w-full sm:w-[45%]">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image src="/showroom/wm-35.png" alt="Showroom Mood Abitare — dettaglio" fill className="object-cover" sizes="(max-width: 640px) 100vw, 43vw" />
                </div>
              </FadeInView>
              <FadeInView delay={0.15} className="w-full sm:w-[32%]">
                <div className="relative aspect-[1/1] rounded-sm overflow-hidden">
                  <Image src="/showroom/wm-28.png" alt="Showroom Mood Abitare — dettaglio esposizione" fill className="object-cover" sizes="(max-width: 640px) 100vw, 30vw" />
                </div>
              </FadeInView>
              <FadeInView delay={0.3} className="hidden sm:block sm:flex-1 self-start">
                <div className="aspect-[1/1] rounded-sm bg-warm-gray" />
              </FadeInView>
            </div>

            {/* ── Riga 6 — piccola + centro + piccola ── */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 lg:gap-8 sm:items-center sm:justify-center">
              <FadeInView delay={0.2} className="hidden sm:block sm:flex-1 self-start">
                <div className="aspect-[3/4] rounded-sm bg-warm-gray" />
              </FadeInView>
              <FadeInView delay={0} className="w-full sm:flex-1">
                <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                  <Image src="/showroom/wm-30.png" alt="Showroom Mood Abitare — esposizione" fill className="object-cover" sizes="(max-width: 640px) 100vw, 33vw" />
                </div>
              </FadeInView>
              <FadeInView delay={0.2} className="hidden sm:block sm:flex-1 self-end">
                <div className="aspect-[3/4] rounded-sm bg-warm-gray" />
              </FadeInView>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Info e orari ─────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="px-6 sm:px-10 lg:px-20 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">
            <div>
              <FadeInView>
                <h2 className="font-section-title text-black-deep mb-8">
                  <AccentText>Dove siamo</AccentText>
                </h2>
                <div className="space-y-4 font-display text-black-deep">
                  <p>Viale Europa, 65<br />21050 Gorla Maggiore (VA)</p>
                  <p>
                    Tel: <a href={`tel:${CONTACT_INFO.phoneHref}`} className="text-bordeaux hover:underline">{CONTACT_INFO.phone}</a>
                    <br />
                    WhatsApp: <a href={CONTACT_INFO.whatsappHref} className="text-bordeaux hover:underline">{CONTACT_INFO.whatsapp}</a>
                  </p>
                </div>
              </FadeInView>
            </div>
            <div>
              <FadeInView delay={0.1}>
                <h2 className="font-section-title text-black-deep mb-8">
                  <AccentText>Orari di apertura</AccentText>
                </h2>
                <div className="space-y-2 font-display text-black-deep">
                  <p>Lunedì — Venerdì: 9:30 – 12:30 / 14:00 – 17:00</p>
                  <p>Sabato: 9:30 – 12:30</p>
                  <p>Domenica: Chiuso</p>
                </div>
              </FadeInView>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-16 lg:py-24 bg-cream">
        <div className="px-6 sm:px-10 lg:px-20 max-w-3xl mx-auto text-center">
          <FadeInView>
            <h2 className="font-page-title text-black-deep">
              <AccentText>Vieni a trovarci</AccentText>
            </h2>
            <p className="mt-6 text-body text-black-deep max-w-md mx-auto">
              Prenota una visita in showroom — ti accoglieremo con un caffè e una consulenza personalizzata, senza impegno.
            </p>
          </FadeInView>
          <FadeInView delay={0.15}>
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
              <Link
                href="/contatti"
                className="text-button block sm:inline-block text-center bg-black-deep text-white px-10 py-4 btn-press hover:bg-black-soft transition-colors"
              >
                Prenota una visita
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
