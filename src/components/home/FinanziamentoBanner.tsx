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
          <div className="flex flex-col items-center justify-center gap-4 text-center">
            {/* Big percentage */}
            <motion.span
              className="font-display font-bold text-cream leading-none"
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

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
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

            {/* Arrow CTA */}
            <MagneticButton as="span" strength={0.5}>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-cream/15 group-hover:border-cream/40 transition-all duration-300 mt-2">
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
        </ClipReveal>
      </Link>
    </section>
  );
}
