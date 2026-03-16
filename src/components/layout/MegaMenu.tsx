"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MACRO_CATEGORIES } from "@/lib/constants";

interface MegaMenuProps {
  onNavigate?: () => void;
}

export function MegaMenu({ onNavigate }: MegaMenuProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-20 lg:top-24 left-0 right-0 z-40"
    >
      <div className="h-px w-full bg-gradient-to-r from-transparent via-bordeaux/30 to-transparent" />

      <div className="bg-black-deep/[0.97] backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 xl:px-28 py-8">
          <div className="grid grid-cols-3 gap-10 xl:gap-16">
            {MACRO_CATEGORIES.map((category, catIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.04 + catIndex * 0.04, duration: 0.25 }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-label text-white/30 text-[0.65rem]">
                    {String(catIndex + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-label text-white/80 text-[0.7rem]">
                    {category.label}
                  </h3>
                  <div className="flex-1 h-px bg-white/[0.06]" />
                </div>

                {/* Products */}
                <ul className="space-y-0">
                  {category.products.map((product, i) => (
                    <motion.li
                      key={product.slug}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.08 + catIndex * 0.04 + i * 0.02, duration: 0.2 }}
                    >
                      <Link
                        href={`/prodotti/${product.slug}`}
                        onClick={onNavigate}
                        className="group flex items-center gap-3 py-[0.4rem] -mx-2 px-2 rounded-sm hover:bg-white/[0.04] transition-all duration-200"
                      >
                        <span className="h-[1.5px] w-0 group-hover:w-3 bg-white/50 transition-all duration-200" />
                        <span className="font-card-title text-sm text-white/70 group-hover:text-white transition-colors duration-200">
                          {product.name}
                        </span>
                        <span className="text-label text-[0.6rem] text-white/20 group-hover:text-white/40 transition-colors duration-200">
                          {product.brand}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 pt-4 border-t border-white/[0.05] flex items-center justify-between"
          >
            <p className="text-label text-white/15 text-[0.65rem]">
              17 categorie di prodotto
            </p>
            <Link
              href="/prodotti"
              onClick={onNavigate}
              className="text-label text-[0.7rem] group flex items-center gap-2 text-white/35 hover:text-white transition-colors duration-200"
            >
              Tutti i prodotti
              <span className="h-px w-4 group-hover:w-8 bg-current transition-all duration-200" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
