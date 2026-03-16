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
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const handleClose = () => {
    setExpandedMenu(null);
    setExpandedCategory(null);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40"
            onClick={handleClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed right-0 top-0 bottom-0 z-40 w-full max-w-[min(24rem,100vw)] bg-white overflow-y-auto"
            style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
          >
            <div className="pt-28 px-8 pb-10">
              <nav className="space-y-0">
                {NAV_ITEMS.map((item) => (
                  <div key={item.href} className="border-b border-black/5">
                    {item.hasMegaMenu ? (
                      <>
                        <button
                          onClick={() => setExpandedMenu(expandedMenu === "products" ? null : "products")}
                          className="text-label flex w-full items-center justify-between py-5 text-black-deep"
                        >
                          {item.label}
                          <svg
                            className={cn("h-4 w-4 text-black-deep/30 transition-transform", expandedMenu === "products" && "rotate-180")}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        <AnimatePresence>
                          {expandedMenu === "products" && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="pb-5 space-y-1">
                                {MACRO_CATEGORIES.map((cat) => (
                                  <div key={cat.id}>
                                    {/* Category header — tappable accordion */}
                                    <button
                                      onClick={() => setExpandedCategory(expandedCategory === cat.id ? null : cat.id)}
                                      className={cn(
                                        "flex w-full items-center justify-between py-2.5 pl-4 pr-2 rounded-md transition-colors duration-200",
                                        expandedCategory === cat.id
                                          ? "bg-black-deep/[0.03]"
                                          : "hover:bg-black-deep/[0.02]"
                                      )}
                                    >
                                      <span className={cn(
                                        "text-label text-[0.7rem] transition-colors duration-200",
                                        expandedCategory === cat.id
                                          ? "text-bordeaux"
                                          : "text-black-deep/40"
                                      )}>
                                        {cat.label}
                                      </span>
                                      <div className="flex items-center gap-2">
                                        <span className="text-[0.6rem] text-black-deep/20 font-[var(--font-ui)]">
                                          {cat.products.length}
                                        </span>
                                        <svg
                                          className={cn(
                                            "h-3 w-3 text-black-deep/20 transition-transform duration-200",
                                            expandedCategory === cat.id && "rotate-180"
                                          )}
                                          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                                        >
                                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                        </svg>
                                      </div>
                                    </button>

                                    {/* Products — nested accordion */}
                                    <AnimatePresence>
                                      {expandedCategory === cat.id && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{ height: "auto", opacity: 1 }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ duration: 0.2 }}
                                          className="overflow-hidden"
                                        >
                                          <ul className="pl-6 py-1.5 space-y-0.5">
                                            {cat.products.map((product) => (
                                              <li key={product.slug}>
                                                <Link
                                                  href={`/prodotti/${product.slug}`}
                                                  onClick={handleClose}
                                                  className="group flex items-center justify-between py-2 px-2 -mx-2 rounded hover:bg-black-deep/[0.03] transition-colors duration-200"
                                                >
                                                  <span className="font-card-title text-[0.85rem] text-black-deep/75 group-hover:text-black-deep transition-colors duration-200">
                                                    {product.name}
                                                  </span>
                                                  <span className="text-[0.6rem] uppercase tracking-wider text-black-deep/20 group-hover:text-bordeaux/50 transition-colors duration-200">
                                                    {product.brand}
                                                  </span>
                                                </Link>
                                              </li>
                                            ))}
                                          </ul>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                ))}

                                {/* All products link */}
                                <Link
                                  href="/prodotti"
                                  onClick={handleClose}
                                  className="flex items-center gap-2 pl-4 py-2.5 mt-1 text-label text-[0.65rem] text-bordeaux/60 hover:text-bordeaux transition-colors duration-200"
                                >
                                  Tutti i prodotti
                                  <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </Link>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : item.hasDropdown && item.children ? (
                      <>
                        <button
                          onClick={() => setExpandedMenu(expandedMenu === item.label ? null : item.label)}
                          className="text-label flex w-full items-center justify-between py-5 text-black-deep"
                        >
                          {item.label}
                          <svg
                            className={cn("h-4 w-4 text-black-deep/30 transition-transform", expandedMenu === item.label && "rotate-180")}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        <AnimatePresence>
                          {expandedMenu === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-4 pb-5 space-y-1">
                                {item.children.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    onClick={handleClose}
                                    className="block py-2 text-caption text-black-deep/60 hover:text-black-deep"
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link href={item.href} onClick={handleClose} className="text-label block py-5 text-black-deep">
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-10">
                <Link
                  href="/contatti"
                  onClick={handleClose}
                  className="text-button block w-full py-4 text-center bg-black-deep text-white"
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
