import type { Metadata } from "next";
import { FadeInView } from "@/components/animations/FadeInView";
import { HorizontalProjectsScroll } from "@/components/progetti/HorizontalProjectsScroll";

export const metadata: Metadata = {
  title: "Progetti",
  description: "Portfolio dei lavori realizzati da Mood Abitare nella provincia di Varese.",
};

export default function Progetti() {
  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end bg-black-deep text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black-deep/90 via-transparent to-transparent" />
        <div className="relative z-10 w-full pb-20 lg:pb-28 px-6 sm:px-10 lg:px-20">
          <FadeInView>
            <p className="text-label text-white/40 mb-6">
              Portfolio
            </p>
            <h1 className="font-section-title max-w-3xl">
              I nostri progetti
            </h1>
            <p className="mt-8 text-body text-white/35 max-w-xl">
              Scorri per esplorare.
            </p>
          </FadeInView>
        </div>
      </section>

      {/* Horizontal scroll projects */}
      <HorizontalProjectsScroll />

      {/* CTA bottom */}
      <section className="py-32 lg:py-44 bg-cream">
        <div className="px-6 sm:px-10 lg:px-20 text-center">
          <FadeInView>
            <p className="text-label text-black-deep/40 mb-6">
              Vuoi vedere il tuo progetto qui?
            </p>
            <h2 className="font-section-title text-black-deep mb-8">
              Iniziamo insieme
            </h2>
            <a
              href="/contatti"
              className="inline-block text-button bg-black-deep text-white px-10 py-4 hover:bg-gold hover:text-black-deep transition-colors duration-300"
            >
              Contattaci
            </a>
          </FadeInView>
        </div>
      </section>
    </main>
  );
}
