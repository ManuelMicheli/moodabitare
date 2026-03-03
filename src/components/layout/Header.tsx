"use client";

import { useState, useEffect } from "react";
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
  const [activeMegaMenu, setActiveMegaMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector("section");
      const threshold = hero ? hero.offsetHeight - 80 : 50;
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

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled
            ? "bg-white/95 backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <div className="flex h-20 items-center justify-between px-6 sm:px-10 lg:px-20 lg:h-24">
          {/* Logo */}
          <Link href="/" className="relative z-10 flex-shrink-0">
            <Image
              src="/logo/logo-mood-abitare-clean.png"
              alt="Moschiano Srl"
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
            {NAV_ITEMS.map((item) => (
              <div
                key={item.href}
                onMouseEnter={() => {
                  if (item.hasMegaMenu) setActiveMegaMenu(true);
                  if (item.hasDropdown) setActiveDropdown(item.label);
                }}
                onMouseLeave={() => {
                  if (item.hasMegaMenu) setActiveMegaMenu(false);
                  if (item.hasDropdown) setActiveDropdown(null);
                }}
                className="relative"
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-label px-5 py-2 transition-colors duration-300",
                    isScrolled
                      ? "text-black-deep/70 hover:text-black-deep"
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
                <AnimatePresence>
                  {item.hasMegaMenu && activeMegaMenu && <MegaMenu />}
                </AnimatePresence>
                <AnimatePresence>
                  {item.hasDropdown && item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                      className="fixed top-20 lg:top-24 left-0 right-0 z-40"
                    >
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-bordeaux/40 to-transparent" />
                      <div className="bg-black-deep/[0.97] backdrop-blur-xl">
                        <div className="max-w-[1400px] mx-auto px-10 lg:px-20 py-12">
                          <div className="flex flex-col gap-1">
                            {item.children.map((child, i) => (
                              <motion.div
                                key={child.href}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.08 + i * 0.04, duration: 0.3 }}
                              >
                                <Link
                                  href={child.href}
                                  className="group flex items-center gap-4 py-3 -mx-3 px-3 rounded-sm hover:bg-white/[0.04] transition-all duration-300"
                                >
                                  <span className="h-px w-0 group-hover:w-4 bg-bordeaux transition-all duration-300" />
                                  <span className="font-card-title text-white/60 group-hover:text-white transition-colors duration-300">
                                    {child.label}
                                  </span>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-6">
            <Link
              href="/contatti"
              className={cn(
                "text-label hidden lg:inline-flex transition-colors duration-300",
                isScrolled
                  ? "text-black-deep hover:text-black-deep/60"
                  : "text-white hover:text-white/60"
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

      <MobileNav isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
