"use client";

import Link from "next/link";
import { FadeInView } from "@/components/animations/FadeInView";

export function CTAFinale() {
  return (
    <section className="relative flex items-center justify-center bg-black-deep text-white overflow-hidden">
      <div className="relative z-10 text-center px-6 sm:px-10 lg:px-20 py-16 lg:py-20 w-full">
        <FadeInView>
          <p className="text-label text-white/40 mb-6">
            Inizia il tuo progetto
          </p>
          <h2 className="font-hero text-white">
            Richiedi un preventivo gratuito
          </h2>
          <p className="mt-8 text-body text-white/50 max-w-lg mx-auto">
            Contattaci per una consulenza personalizzata. Sopralluogo gratuito e preventivo senza impegno.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <Link
              href="/contatti"
              className="text-button inline-block bg-white text-black-deep px-8 py-4 hover:bg-white/85 transition-colors"
            >
              Richiedi preventivo
            </Link>
            <a
              href="https://wa.me/3517278053"
              target="_blank"
              rel="noopener noreferrer"
              className="text-button inline-block border border-white/20 text-white px-8 py-4 hover:bg-white hover:text-black-deep transition-all duration-300"
            >
              Scrivici su WhatsApp
            </a>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
