"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MagneticButton } from "@/components/animations/MagneticButton";

const ease = [0.25, 0.1, 0.25, 1] as const;

export function RistrutturazioneBanner() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="relative overflow-hidden">
      <Link href="/servizi-ristrutturazione" className="group block">
        <div className="relative bg-black-deep">
          {/* Background image */}
          <Image
            src="/images/ristrutturazione-hero.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
            quality={90}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black-deep/40" />

          <div className="relative z-10 px-6 sm:px-10 lg:px-20 py-12 sm:py-14 lg:py-16">
            {/* Top — label */}
            <motion.div
              className="flex items-center justify-center gap-3 mb-10 lg:mb-12"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, ease }}
            >
              <div className="h-px w-6 bg-white/40" />
              <span className="font-ui text-[0.65rem] tracking-[0.18em] uppercase text-white">
                Servizio completo
              </span>
              <div className="h-px w-6 bg-white/40" />
            </motion.div>

            {/* Centered headline */}
            <div className="text-center">
              <div className="overflow-hidden">
                <motion.h3
                  className="font-display font-bold text-white leading-[0.93] tracking-[-0.02em]"
                  style={{ fontSize: "clamp(2rem, 1.4rem + 3vw, 3.8rem)" }}
                  initial={{ y: "110%" }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.1, ease }}
                >
                  Ristrutturazione
                </motion.h3>
              </div>
              <div className="overflow-hidden">
                <motion.h3
                  className="font-display font-bold text-bordeaux leading-[0.93] tracking-[-0.02em]"
                  style={{ fontSize: "clamp(2rem, 1.4rem + 3vw, 3.8rem)" }}
                  initial={{ y: "110%" }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.2, ease }}
                >
                  chiavi in mano
                </motion.h3>
              </div>

              {/* Description */}
              <motion.p
                className="font-body text-white/80 leading-relaxed mt-5 max-w-md mx-auto"
                style={{ fontSize: "clamp(0.875rem, 0.8rem + 0.2vw, 1.05rem)" }}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.45, ease }}
              >
                Un unico referente dalla progettazione alla consegna.
                Pratiche, detrazioni e gestione completa del cantiere.
              </motion.p>
            </div>

            {/* Bottom — stats + CTA */}
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mt-10 lg:mt-14"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.55, ease }}
            >
              <div className="flex items-center gap-6">
                {[
                  { value: "30+", label: "anni" },
                  { value: "50%", label: "detrazioni" },
                ].map((s, i) => (
                  <div key={s.label} className="flex items-baseline gap-1.5">
                    <span className="font-display text-base font-bold text-white">
                      {s.value}
                    </span>
                    <span className="font-ui text-[0.6rem] tracking-[0.08em] uppercase text-white/70">
                      {s.label}
                    </span>
                    {i === 0 && <div className="w-px h-3 bg-white/30 ml-4" />}
                  </div>
                ))}
              </div>

              <div className="hidden sm:block w-px h-4 bg-white/30" />

              <MagneticButton as="span" strength={0.3}>
                <span className="inline-flex items-center gap-3 font-ui text-[0.7rem] tracking-[0.1em] uppercase text-white/80 group-hover:text-white transition-colors duration-500">
                  Scopri il servizio
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/30 group-hover:border-white/60 transition-all duration-500">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="text-white/70 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-500"
                    >
                      <path
                        d="M3 8h10M9 4l4 4-4 4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </Link>
    </section>
  );
}
