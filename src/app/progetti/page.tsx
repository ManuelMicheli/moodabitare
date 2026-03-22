import type { Metadata } from "next";
import { FadeInView } from "@/components/animations/FadeInView";
import { AccentText } from "@/components/ui/AccentText";
import { HorizontalProjectsScroll } from "@/components/progetti/HorizontalProjectsScroll";

export const metadata: Metadata = {
  title: "Progetti — Lavori Realizzati",
  description:
    "Portfolio dei lavori realizzati da Mood Abitare: serramenti, ristrutturazioni e arredo casa nella provincia di Varese. Scopri i nostri progetti completati.",
  alternates: {
    canonical: "https://www.moschianosrl.it/progetti",
  },
  openGraph: {
    title: "Progetti — Mood Abitare",
    description: "Portfolio lavori realizzati: serramenti, ristrutturazioni e arredo casa a Varese.",
    url: "https://www.moschianosrl.it/progetti",
  },
};

export default function Progetti() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end bg-black-deep text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/90 via-transparent to-transparent" />
        <div className="relative z-10 w-full pb-14 lg:pb-28 px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-white/80 mb-6">
              Portfolio
            </p>
            <h1 className="font-page-title max-w-5xl">
              <AccentText>I nostri progetti</AccentText>
            </h1>
            <p className="mt-8 text-body text-white/80 max-w-xl">
              Scorri per esplorare.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Horizontal scroll projects */}
      <HorizontalProjectsScroll />

      {/* CTA bottom */}
      <section className="py-20 lg:py-44 bg-cream">
        <div className="px-6 sm:px-10 lg:px-20 text-center">
          <FadeInView>
            <p className="text-label text-black-deep/60 mb-6">
              Vuoi vedere il tuo progetto qui?
            </p>
            <h2 className="font-section-title text-black-deep mb-8">
              Iniziamo insieme
            </h2>
            <a
              href="/contatti"
              className="inline-block text-button bg-black-deep text-white px-10 py-4 hover:bg-bordeaux hover:text-black-deep transition-colors duration-300"
            >
              Contattaci
            </a>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
