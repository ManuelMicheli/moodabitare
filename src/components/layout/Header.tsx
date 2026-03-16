"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let threshold = 50;
    const hero = document.querySelector("section");
    if (hero) threshold = hero.offsetHeight - 80;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > threshold);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveMenu(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  // Close on scroll
  useEffect(() => {
    if (!activeMenu) return;
    const close = () => setActiveMenu(null);
    window.addEventListener("scroll", close, { passive: true, once: true });
    return () => window.removeEventListener("scroll", close);
  }, [activeMenu]);

  const enterMenu = useCallback((label: string) => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    if (activeMenu === label) return;
    if (openTimerRef.current) clearTimeout(openTimerRef.current);

    // If already showing a different menu, switch immediately
    if (activeMenu) {
      setActiveMenu(label);
      return;
    }
    openTimerRef.current = setTimeout(() => setActiveMenu(label), 100);
  }, [activeMenu]);

  const leaveMenu = useCallback(() => {
    if (openTimerRef.current) {
      clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
    closeTimerRef.current = setTimeout(() => setActiveMenu(null), 180);
  }, []);

  // Desktop nav without "Contatti" (shown as CTA pill)
  const desktopItems = NAV_ITEMS.filter(i => i.label !== "Contatti");

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "bg-white/95 backdrop-blur-md" : "bg-transparent"
        )}
      >
        <div className="flex h-20 items-center justify-between px-6 sm:px-10 lg:px-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex-shrink-0">
            <Image
              src="/logo/logo-mood-abitare-transparent-opt.png"
              alt="Mood Abitare — La tua casa a 360 gradi"
              width={200}
              height={50}
              priority
              className={cn(
                "h-10 w-auto sm:h-11 lg:h-12 transition-all duration-300",
                !isScrolled && "brightness-0 invert"
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0">
            {desktopItems.map((item) => {
              const hasSubmenu = item.hasMegaMenu || item.hasDropdown;
              const isActive = hasSubmenu && activeMenu === item.label;

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => hasSubmenu && enterMenu(item.label)}
                  onMouseLeave={() => hasSubmenu && leaveMenu()}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "text-label flex items-center gap-1 px-5 py-2 transition-colors duration-300",
                      isScrolled
                        ? "text-black-deep/70 hover:text-black-deep"
                        : "text-white/70 hover:text-white",
                      isActive && (isScrolled ? "text-black-deep" : "text-white")
                    )}
                  >
                    {item.label}
                    {hasSubmenu && (
                      <svg
                        className={cn(
                          "w-3 h-3 transition-transform duration-300 opacity-50",
                          isActive && "rotate-180 opacity-100"
                        )}
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <path
                          d="M3 4.5L6 7.5L9 4.5"
                          stroke="currentColor"
                          strokeWidth="1.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </Link>

                  {/* Azienda — compact dropdown */}
                  <AnimatePresence>
                    {item.hasDropdown && item.children && isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 pt-3 z-40"
                      >
                        <div className="w-64 bg-black-deep/[0.97] backdrop-blur-xl rounded-lg shadow-2xl border border-white/[0.06] overflow-hidden py-2">
                          {item.children.map((child, i) => (
                            <motion.div
                              key={child.href}
                              initial={{ opacity: 0, x: -4 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.03, duration: 0.2 }}
                            >
                              <Link
                                href={child.href}
                                onClick={() => setActiveMenu(null)}
                                className="group flex items-center gap-3 px-5 py-2.5 hover:bg-white/[0.05] transition-all duration-200"
                              >
                                <span className="h-[1.5px] w-0 group-hover:w-3 bg-white/50 transition-all duration-200" />
                                <span className="font-card-title text-sm text-white/65 group-hover:text-white transition-colors duration-200">
                                  {child.label}
                                </span>
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Prodotti — mega menu */}
                  <AnimatePresence>
                    {item.hasMegaMenu && isActive && (
                      <MegaMenu onNavigate={() => setActiveMenu(null)} />
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-6">
            <Link
              href="/contatti"
              className={cn(
                "text-label hidden lg:inline-flex items-center px-5 py-2 rounded-full border transition-all duration-300",
                isScrolled
                  ? "border-black-deep/15 text-black-deep hover:bg-black-deep hover:text-white"
                  : "border-white/20 text-white hover:bg-white hover:text-black-deep"
              )}
            >
              Contatti
            </Link>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="relative z-10 flex h-11 w-11 items-center justify-center lg:hidden"
              aria-label="Menu"
            >
              <div className="flex flex-col gap-1.5">
                <span className={cn(
                  "block h-[1px] w-6 transition-all duration-300",
                  isScrolled ? "bg-black-deep" : "bg-white",
                  isMobileOpen && "translate-y-[7px] rotate-45"
                )} />
                <span className={cn(
                  "block h-[1px] w-6 transition-all duration-300",
                  isScrolled ? "bg-black-deep" : "bg-white",
                  isMobileOpen && "opacity-0"
                )} />
                <span className={cn(
                  "block h-[1px] w-6 transition-all duration-300",
                  isScrolled ? "bg-black-deep" : "bg-white",
                  isMobileOpen && "-translate-y-[7px] -rotate-45"
                )} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Subtle backdrop when menu is open */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-black/15"
            onClick={() => setActiveMenu(null)}
          />
        )}
      </AnimatePresence>

      <MobileNav isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
