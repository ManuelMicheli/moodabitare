"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { NAV_ITEMS, MACRO_CATEGORIES, CONTACT_INFO } from "@/lib/constants";
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
            <div className="pt-28 px-8 pb-32">
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
                                        "text-label font-semibold transition-colors duration-200",
                                        expandedCategory === cat.id
                                          ? "text-bordeaux"
                                          : "text-bordeaux/60"
                                      )}>
                                        {cat.label}
                                      </span>
                                      <div className="flex items-center gap-2">
                                        <span className="text-[0.75rem] text-black-deep/30 font-[var(--font-ui)] bg-warm-gray/50 px-2 py-0.5 rounded-full">
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
                                          <ul className="pl-6 py-1.5">
                                            {cat.products.map((product) => (
                                              <li key={product.slug} className="border-b border-black-deep/5 last:border-b-0">
                                                <Link
                                                  href={`/prodotti/${product.slug}`}
                                                  onClick={handleClose}
                                                  className="group flex items-center justify-between py-3.5 px-2 -mx-2 rounded hover:bg-black-deep/[0.03] transition-colors duration-200"
                                                >
                                                  <div className="flex flex-col gap-0.5">
                                                    <span className="font-card-title text-[0.85rem] text-black-deep/75 group-hover:text-black-deep transition-colors duration-200">
                                                      {product.name}
                                                    </span>
                                                    {product.brand && (
                                                      <span className="text-[0.75rem] uppercase tracking-wider text-black-deep/20 group-hover:text-bordeaux/50 transition-colors duration-200">
                                                        {product.brand}
                                                      </span>
                                                    )}
                                                  </div>
                                                  <span className="text-black-deep/20 group-hover:text-black-deep/50 transition-colors duration-200 ml-2 flex-shrink-0">&rarr;</span>
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
                                  className="flex items-center gap-2 pl-4 py-2.5 mt-1 text-label text-[0.75rem] text-bordeaux/60 hover:text-bordeaux transition-colors duration-200"
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

            </div>

            <div className="sticky bottom-0 left-0 right-0 border-t border-black-deep/10 bg-white px-6 pt-4" style={{ paddingBottom: `calc(1rem + env(safe-area-inset-bottom, 0px))` }}>
              <div className="flex gap-3">
                <Link
                  href="/contatti"
                  onClick={handleClose}
                  className="flex-1 bg-black-deep text-white text-center py-3.5 text-button btn-press"
                >
                  Richiedi preventivo
                </Link>
                <a
                  href={CONTACT_INFO.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-[52px] bg-[#25D366] text-white rounded"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
