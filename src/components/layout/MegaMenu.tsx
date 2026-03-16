"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MACRO_CATEGORIES } from "@/lib/constants";

export function MegaMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
      className="fixed top-20 lg:top-24 left-0 right-0 z-40"
    >
      {/* Gold accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-bordeaux/40 to-transparent" />

      <div className="bg-black-deep/[0.97] backdrop-blur-xl">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-20 py-14">
          <div className={`grid gap-16`} style={{ gridTemplateColumns: `repeat(${MACRO_CATEGORIES.length}, 1fr)` }}>
            {MACRO_CATEGORIES.map((category, catIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + catIndex * 0.06, duration: 0.4 }}
              >
                {/* Category header */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-label text-white/40">
                    {String(catIndex + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-label text-white/90">
                    {category.label}
                  </h3>
                  <div className="flex-1 h-px bg-white/6" />
                </div>

                {/* Products */}
                <ul className="space-y-1">
                  {category.products.map((product, i) => (
                    <motion.li
                      key={product.slug}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + catIndex * 0.06 + i * 0.03, duration: 0.3 }}
                    >
                      <Link
                        href={`/prodotti/${product.slug}`}
                        className="group flex items-center gap-4 py-2.5 -mx-3 px-3 rounded-sm hover:bg-white/[0.04] transition-all duration-300"
                      >
                        <span className="h-[2px] w-0 group-hover:w-4 bg-white transition-all duration-300" />
                        <div>
                          <span className="font-card-title text-white/80 group-hover:text-white transition-colors duration-300">
                            {product.name}
                          </span>
                          <span className="block text-label text-white/25 group-hover:text-white/50 transition-colors duration-300 mt-0.5">
                            {product.brand}
                          </span>
                        </div>
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
            transition={{ delay: 0.4 }}
            className="mt-12 pt-6 border-t border-white/5 flex items-center justify-between"
          >
            <p className="text-label text-white/20">
              17 categorie di prodotto — showroom 300 mq a Gorla Maggiore
            </p>
            <Link
              href="/prodotti"
              className="text-label group flex items-center gap-3 text-white/40 hover:text-white transition-colors duration-300"
            >
              Vedi tutti i prodotti
              <span className="h-px w-6 group-hover:w-10 bg-current transition-all duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
