import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";
import { AccentText } from "@/components/ui/AccentText";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Showroom — 300mq di Esposizione a Gorla Maggiore",
  description:
    "Visita lo showroom Mood Abitare: 300mq di esposizione a Gorla Maggiore (VA). Serramenti, porte, cucine, arredo bagno, outdoor e molto altro da toccare con mano.",
  alternates: {
    canonical: "https://www.moschianosrl.it/showroom",
  },
  openGraph: {
    title: "Showroom — Mood Abitare",
    description:
      "300mq di esposizione a Gorla Maggiore. Serramenti, porte, cucine e arredo da toccare con mano.",
    url: "https://www.moschianosrl.it/showroom",
  },
};

export default function ShowroomPage() {
  return (
    <main>
      {/* ─── Hero — video 75% + testo ─────────────────────────────── */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] lg:min-h-[75vh] flex items-end bg-black-deep text-white overflow-hidden">
        <video
          src="/videos/0320(8).mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black-deep/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/60 via-black-deep/20 to-transparent" />

        <div className="relative z-10 w-full pb-10 sm:pb-12 lg:pb-20 px-6 sm:px-10 lg:px-20 text-left">
          <FadeInView delay={0.3}>
            <p className="text-label text-white/50 mb-3 sm:mb-4">Il nostro spazio</p>
            <h1 className="font-page-title text-white">
              Showroom Mood Abitare
            </h1>
            <p className="mt-3 sm:mt-4 font-display text-white/70 text-base sm:text-lg max-w-2xl">
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


      {/* ─── Gallery showroom ─────────────────────────────────────── */}
      <section className="py-14 sm:py-20 lg:py-28 bg-cream">
        <div className="px-4 sm:px-10 lg:px-20">
          <FadeInView>
            <h2 className="font-section-title text-black-deep text-center mb-10 sm:mb-14 lg:mb-20">
              <AccentText>Esplora lo showroom</AccentText>
            </h2>
          </FadeInView>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
            <FadeInView delay={0}>
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <Image src="/moodabitarereal/cucina-showroom.png" alt="Cucina moderna nello showroom" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
              </div>
            </FadeInView>
            <FadeInView delay={0.08}>
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <video
                  src="/videos/0320.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </FadeInView>
            <FadeInView delay={0.16}>
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <Image src="/moodabitarereal/showroom-interno.png" alt="Interno showroom Mood Abitare" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
              </div>
            </FadeInView>
            <FadeInView delay={0.08}>
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <Image src="/images/wmremove-transformed (26).png" alt="Showroom Mood Abitare — dettaglio esposizione" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
              </div>
            </FadeInView>
            <FadeInView delay={0.16}>
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <video
                  src="/videos/0320(2).mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </FadeInView>
            <FadeInView delay={0.24}>
              <div className="relative aspect-[3/4] rounded-sm overflow-hidden">
                <Image src="/images/wmremove-transformed (25).png" alt="Showroom Mood Abitare — ambiente espositivo" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 33vw" />
              </div>
            </FadeInView>
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
                <div className="space-y-4 font-display text-black-deep/70">
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
                <div className="space-y-2 font-display text-black-deep/70">
                  <p>Lunedì — Venerdì: 8:30 – 12:30 / 14:30 – 19:00</p>
                  <p>Sabato: 9:00 – 12:30</p>
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
            <p className="mt-6 text-body text-black-deep/35 max-w-md mx-auto">
              Prenota una visita in showroom — ti accoglieremo con un caffè e una consulenza personalizzata, senza impegno.
            </p>
          </FadeInView>
          <FadeInView delay={0.15}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contatti"
                className="text-button inline-block bg-black-deep text-white px-10 py-4 btn-press hover:bg-black-soft transition-colors"
              >
                Prenota una visita
              </Link>
              <Link
                href={`tel:${CONTACT_INFO.phoneHref}`}
                className="text-button inline-block border border-black-deep/15 text-black-deep px-10 py-4 btn-press hover:border-black-deep/40 transition-colors"
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
