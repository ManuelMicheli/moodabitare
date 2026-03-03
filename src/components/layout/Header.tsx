"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { NAV_ITEMS } from "@/lib/constants";
import { MegaMenu } from "./MegaMenu";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(false);

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
              alt="Mood Abitare"
              width={200}
              height={50}
              priority
              className={cn(
                "h-10 w-auto lg:h-12 transition-all duration-300",
                !isScrolled && "brightness-0 invert"
              )}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.href}
                onMouseEnter={() => item.hasMegaMenu && setActiveMegaMenu(true)}
                onMouseLeave={() => item.hasMegaMenu && setActiveMegaMenu(false)}
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
                {item.hasMegaMenu && activeMegaMenu && <MegaMenu />}
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
              className="relative z-10 flex h-10 w-10 items-center justify-center lg:hidden"
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
