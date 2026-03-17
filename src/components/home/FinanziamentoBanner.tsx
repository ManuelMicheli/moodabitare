"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ClipReveal } from "@/components/animations/ClipReveal";
import { MagneticButton } from "@/components/animations/MagneticButton";

export function FinanziamentoBanner() {
  return (
    <section className="bg-black-deep overflow-hidden">
      <Link
        href="/finanziamento"
        className="group block px-6 sm:px-10 lg:px-20 py-10 lg:py-14 transition-colors hover:bg-black-soft"
      >
        <ClipReveal direction="right" duration={0.9}>
          <div className="flex items-center justify-between gap-8">
            {/* Left content */}
            <div className="flex items-center gap-6 sm:gap-10 lg:gap-16 min-w-0">
              {/* Big percentage — with counter entrance */}
              <motion.span
                className="font-display font-bold text-cream leading-none shrink-0"
                style={{ fontSize: "clamp(3rem, 2rem + 4vw, 5.5rem)" }}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                50%
              </motion.span>

              {/* Separator — draws in */}
              <motion.div
                className="hidden sm:block w-px h-14 bg-cream/15 shrink-0"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ transformOrigin: "top" }}
              />

              {/* Text */}
              <motion.div
                className="min-w-0"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <p
                  className="font-display font-bold text-cream leading-tight"
                  style={{
                    fontSize: "clamp(1rem, 0.85rem + 0.7vw, 1.4rem)",
                  }}
                >
                  Detrazioni fiscali per la sostituzione dei serramenti
                </p>
                <p className="font-ui text-cream/35 text-[0.8rem] sm:text-[0.85rem] mt-1.5">
                  Cumulabile con finanziamento a tasso zero &mdash; TAN 0% |
                  TAEG 0%
                </p>
              </motion.div>
            </div>

            {/* Arrow CTA */}
            <div className="flex items-center gap-4 shrink-0">
              <span className="hidden md:block text-button text-cream/40 group-hover:text-cream/70 transition-colors text-[0.9rem]">
                Scopri
              </span>
              <MagneticButton as="span" strength={0.5}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-cream/15 group-hover:border-cream/40 transition-all duration-300">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="text-cream/50 group-hover:text-cream transition-all duration-300 group-hover:translate-x-0.5"
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
              </MagneticButton>
            </div>
          </div>
        </ClipReveal>
      </Link>
    </section>
  );
}
