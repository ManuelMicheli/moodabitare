"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MACRO_CATEGORIES } from "@/lib/constants";

export function MegaMenu() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="absolute top-full left-1/2 -translate-x-1/2 w-[880px] pt-4"
    >
      <div className="bg-white shadow-2xl border-t border-black/5 p-10">
        <div className="grid grid-cols-4 gap-10">
          {MACRO_CATEGORIES.map((category, catIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: catIndex * 0.04 }}
            >
              <h3 className="text-[10px] font-medium uppercase tracking-[0.25em] text-black-deep/40 mb-5 pb-3 border-b border-black/5">
                {category.label}
              </h3>
              <ul className="space-y-3">
                {category.products.map((product) => (
                  <li key={product.slug}>
                    <Link href={`/prodotti/${product.slug}`} className="group block">
                      <span className="text-[13px] text-black-deep/80 group-hover:text-black-deep transition-colors">
                        {product.name}
                      </span>
                      <span className="block text-[11px] text-black-deep/30">
                        {product.brand}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 pt-5 border-t border-black/5 text-center">
          <Link
            href="/prodotti"
            className="text-[11px] font-medium uppercase tracking-[0.2em] text-black-deep/50 hover:text-black-deep transition-colors"
          >
            Vedi tutti i prodotti →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
