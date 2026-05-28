import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";
import { AccentText } from "@/components/ui/AccentText";
import { CurtainHero } from "@/components/animations/CurtainHero";
import { LazyVideo } from "@/components/shared/LazyVideo";
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
          {/* Video background — desktop only; mobile uses poster image for performance */}
          <LazyVideo
            src={`${R2_CDN}/videos/hero-home-1080.mp4`}
            poster="/images/cf8f30fe-4d69-4594-aa12-0d7137fcfeae-opt.jpg"
            eager
            className="absolute inset-0 w-full h-full object-cover hidden sm:block"
          />
          {/* Mobile fallback image — avoids heavy video on cellular */}
          <Image
            src="/images/cf8f30fe-4d69-4594-aa12-0d7137fcfeae-opt.jpg"
            alt="Showroom Mood Abitare"
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover sm:hidden"
          />
          <div className="absolute inset-0 bg-black-deep/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-black-deep/70 via-black-deep/20 to-transparent" />

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


      {/* ─── Masonry columns — aspect naturale, immagini intere ───── */}
      <section className="bg-cream pt-16 sm:pt-24 lg:pt-32 pb-14 sm:pb-20 lg:pb-28">
        <div className="px-2 sm:px-3 lg:px-4 columns-2 sm:columns-3 lg:columns-4 gap-2 sm:gap-3 lg:gap-4">

          {/* 1 — VIDEO 0320(4) */}
          <div className="mb-2 sm:mb-3 lg:mb-4 break-inside-avoid relative aspect-[9/16] overflow-hidden bg-black-deep">
            <LazyVideo src={`${R2_CDN}/videos/0320(4).mp4`} poster="/moodabitarereal/showroom-ingresso.webp" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* 2 — IMG cucina-showroom */}
          <div className="mb-2 sm:mb-3 lg:mb-4 break-inside-avoid">
            <Image src="/moodabitarereal/cucina-showroom.webp" alt="" width={1536} height={2730} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="w-full h-auto block" />
          </div>

          {/* 3 — IMG porte-showroom (landscape) */}
          <div className="mb-2 sm:mb-3 lg:mb-4 break-inside-avoid">
            <Image src="/moodabitarereal/porte-showroom.jpeg" alt="" width={1600} height={1200} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="w-full h-auto block" />
          </div>

          {/* 4 — IMG wm-29 */}
          <div className="mb-2 sm:mb-3 lg:mb-4 break-inside-avoid">
            <Image src="/showroom/wm-29.png" alt="" width={1152} height={2048} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="w-full h-auto block" />
          </div>

          {/* 5 — IMG showroom-interno */}
          <div className="mb-2 sm:mb-3 lg:mb-4 break-inside-avoid">
            <Image src="/moodabitarereal/showroom-interno.webp" alt="" width={1536} height={2730} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="w-full h-auto block" />
          </div>

          {/* 6 — IMG wm-25 */}
          <div className="mb-2 sm:mb-3 lg:mb-4 break-inside-avoid">
            <Image src="/images/wm-25.webp" alt="" width={1536} height={2730} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="w-full h-auto block" />
          </div>

          {/* 7 — IMG porta-scorrevole (square) */}
          <div className="mb-2 sm:mb-3 lg:mb-4 break-inside-avoid">
            <Image src="/moodabitarereal/porta-scorrevole.webp" alt="" width={2048} height={2048} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="w-full h-auto block" />
          </div>

          {/* 8 — VIDEO 0320(5) */}
          <div className="mb-2 sm:mb-3 lg:mb-4 break-inside-avoid relative aspect-[9/16] overflow-hidden bg-black-deep">
            <LazyVideo src={`${R2_CDN}/videos/0320(5).mp4`} poster="/showroom/wm-32.png" className="absolute inset-0 w-full h-full object-cover" />
          </div>

          {/* 9 — IMG dettaglio-cucina */}
          <div className="mb-2 sm:mb-3 lg:mb-4 break-inside-avoid">
            <Image src="/moodabitarereal/dettaglio-cucina.webp" alt="" width={1536} height={2730} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="w-full h-auto block" />
          </div>

          {/* 10 — IMG wm-26 */}
          <div className="mb-2 sm:mb-3 lg:mb-4 break-inside-avoid">
            <Image src="/images/wm-26.webp" alt="" width={1536} height={2730} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="w-full h-auto block" />
          </div>

          {/* 11 — IMG porte-filo-muro */}
          <div className="mb-2 sm:mb-3 lg:mb-4 break-inside-avoid">
            <Image src="/moodabitarereal/porte-filo-muro.webp" alt="" width={3452} height={4320} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="w-full h-auto block" />
          </div>

          {/* 12 — IMG wm-32 */}
          <div className="mb-2 sm:mb-3 lg:mb-4 break-inside-avoid">
            <Image src="/showroom/wm-32.png" alt="" width={1152} height={2048} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="w-full h-auto block" />
          </div>

          {/* 13 — IMG wm-33 */}
          <div className="mb-2 sm:mb-3 lg:mb-4 break-inside-avoid">
            <Image src="/showroom/wm-33.png" alt="" width={1152} height={2048} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="w-full h-auto block" />
          </div>

          {/* 14 — IMG wm-34 */}
          <div className="mb-2 sm:mb-3 lg:mb-4 break-inside-avoid">
            <Image src="/showroom/wm-34.png" alt="" width={1152} height={2048} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="w-full h-auto block" />
          </div>

          {/* 15 — IMG wm-28 */}
          <div className="mb-2 sm:mb-3 lg:mb-4 break-inside-avoid">
            <Image src="/showroom/wm-28.png" alt="" width={1152} height={2048} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="w-full h-auto block" />
          </div>

          {/* 16 — IMG wm-30 */}
          <div className="mb-2 sm:mb-3 lg:mb-4 break-inside-avoid">
            <Image src="/showroom/wm-30.png" alt="" width={1152} height={2048} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="w-full h-auto block" />
          </div>

          {/* 17 — IMG wm-35 */}
          <div className="mb-2 sm:mb-3 lg:mb-4 break-inside-avoid">
            <Image src="/showroom/wm-35.png" alt="" width={1152} height={2048} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="w-full h-auto block" />
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
                  <p>Lunedì — Venerdì: 9:30 – 12:30 / 14:30 – 19:00</p>
                  <p>Sabato: 9:30 – 12:30 / 14:00 – 17:00</p>
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
