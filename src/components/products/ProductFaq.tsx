"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { FaqItem } from "@/lib/seo/faq-data";

type Props = {
  faqs: FaqItem[];
  title?: string;
  eyebrow?: string;
};

/**
 * Sezione FAQ visibile in pagina per categorie prodotto.
 * Contenuto doppio segnale: visibile in DOM + JSON-LD FAQPage generato a parte.
 */
export function ProductFaq({ faqs, title = "Domande frequenti", eyebrow = "FAQ" }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-14 sm:py-20 lg:py-32 px-6 sm:px-10 lg:px-20 bg-cream">
      <div className="max-w-4xl mx-auto">
        <p className="text-label text-black-deep/60 mb-6">{eyebrow}</p>
        <h2 className="font-display font-medium leading-[1.05] tracking-[-0.02em] text-black-deep text-3xl sm:text-4xl lg:text-5xl mb-12 sm:mb-16">
          {title}
        </h2>

        <ul className="divide-y divide-black-deep/10 border-t border-black-deep/10">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <li key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="w-full flex items-start justify-between gap-6 py-6 sm:py-7 text-left group"
                  aria-expanded={open}
                >
                  <h3 className="font-ui text-base sm:text-lg lg:text-xl font-medium text-black-deep leading-snug flex-1">
                    {faq.question}
                  </h3>
                  <span
                    className={`flex-shrink-0 mt-1 w-6 h-6 rounded-full border border-black-deep/40 flex items-center justify-center transition-all duration-300 ${
                      open ? "bg-bordeaux border-bordeaux rotate-45" : "group-hover:border-bordeaux"
                    }`}
                    aria-hidden
                  >
                    <span
                      className={`block w-3 h-px transition-colors ${
                        open ? "bg-white" : "bg-black-deep"
                      }`}
                    />
                    <span
                      className={`block w-px h-3 -ml-1.5 transition-colors ${
                        open ? "bg-white" : "bg-black-deep"
                      }`}
                    />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-body text-base sm:text-lg text-black-deep/80 leading-relaxed pb-6 sm:pb-7 max-w-3xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
