"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TextRevealByWord } from "@/components/animations/TextRevealByWord";
import { FadeInView } from "@/components/animations/FadeInView";
import { MagneticButton } from "@/components/animations/MagneticButton";
import { DrawLine } from "@/components/animations/DrawLine";

export function CTAFinale() {
  return (
    <section className="relative flex items-center justify-center bg-black-deep text-white overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(122,38,56,0.15), transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(122,38,56,0.1), transparent 60%)",
        }}
      />

      <div className="relative z-10 text-center px-6 sm:px-10 lg:px-20 py-16 lg:py-20 w-full">
        <FadeInView direction="none">
          <p className="text-label text-white/40 mb-6">
            Inizia il tuo progetto
          </p>
        </FadeInView>

        <TextRevealByWord
          as="h2"
          className="font-hero text-white justify-center"
          delay={0.1}
        >
          Richiedi un preventivo gratuito
        </TextRevealByWord>

        <FadeInView delay={0.3}>
          <p className="mt-8 text-body text-white/50 max-w-lg mx-auto">
            Contattaci per una consulenza personalizzata. Sopralluogo gratuito e preventivo senza impegno.
          </p>
        </FadeInView>

        <DrawLine className="mx-auto !w-16 !bg-white/10 mt-10" delay={0.4} />

        <FadeInView delay={0.5}>
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            <MagneticButton>
              <Link
                href="/contatti"
                className="text-button inline-block bg-white text-black-deep px-8 py-4 btn-press hover:bg-white/85 transition-colors"
              >
                Richiedi preventivo
              </Link>
            </MagneticButton>
            <MagneticButton>
              <a
                href="https://wa.me/3517278053"
                target="_blank"
                rel="noopener noreferrer"
                className="text-button inline-block border border-white/20 text-white px-8 py-4 btn-press hover:bg-white hover:text-black-deep transition-all duration-300"
              >
                Scrivici su WhatsApp
              </a>
            </MagneticButton>
          </div>
        </FadeInView>
      </div>
    </section>
  );
}
