"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { NAV_ITEMS, MACRO_CATEGORIES } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40"
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed right-0 top-0 bottom-0 z-40 w-full max-w-sm bg-white overflow-y-auto"
          >
            <div className="pt-28 px-8 pb-10">
              <nav className="space-y-0">
                {NAV_ITEMS.map((item) => (
                  <div key={item.href} className="border-b border-black/5">
                    {item.hasMegaMenu ? (
                      <>
                        <button
                          onClick={() => setExpandedMenu(expandedMenu === item.href ? null : item.href)}
                          className="flex w-full items-center justify-between py-5 text-[13px] font-medium uppercase tracking-[0.15em] text-black-deep"
                        >
                          {item.label}
                          <svg
                            className={cn("h-4 w-4 text-black-deep/30 transition-transform", expandedMenu === item.href && "rotate-180")}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        <AnimatePresence>
                          {expandedMenu === item.href && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pb-5 space-y-5">
                                {MACRO_CATEGORIES.map((cat) => (
                                  <div key={cat.id}>
                                    <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-black-deep/30">
                                      {cat.label}
                                    </span>
                                    <ul className="mt-2 space-y-2">
                                      {cat.products.map((product) => (
                                        <li key={product.slug}>
                                          <Link href={`/prodotti/${product.slug}`} onClick={onClose} className="block text-[13px] text-black-deep/60 hover:text-black-deep">
                                            {product.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link href={item.href} onClick={onClose} className="block py-5 text-[13px] font-medium uppercase tracking-[0.15em] text-black-deep">
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-10">
                <Link
                  href="/contatti"
                  onClick={onClose}
                  className="block w-full py-4 text-center text-[12px] font-medium uppercase tracking-[0.2em] bg-black-deep text-white"
                >
                  Preventivo Gratuito
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
