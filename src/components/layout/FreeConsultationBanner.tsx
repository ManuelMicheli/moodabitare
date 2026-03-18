import Link from "next/link";
import { cn } from "@/lib/utils";

interface FreeConsultationBannerProps {
  isScrolled?: boolean;
}

export function FreeConsultationBanner({ isScrolled }: FreeConsultationBannerProps) {
  return (
    <div className={cn(
      "relative overflow-hidden transition-all duration-500",
      isScrolled
        ? "bg-white border-b border-black/5"
        : "bg-transparent border-b border-white/[0.08]"
    )}>
      {/* Subtle animated top accent line */}
      <div className={cn(
        "absolute top-0 left-0 right-0 h-px transition-opacity duration-500",
        isScrolled
          ? "bg-gradient-to-r from-transparent via-bordeaux/30 to-transparent"
          : "bg-gradient-to-r from-transparent via-white/20 to-transparent"
      )} />

      <div className="flex items-center justify-center gap-3 sm:gap-5 px-6 py-2 sm:py-2.5">
        {/* Decorative dash */}
        <span className={cn(
          "hidden sm:block w-6 h-px flex-shrink-0 transition-colors duration-500",
          isScrolled ? "bg-bordeaux/25" : "bg-white/25"
        )} />

        <p className={cn(
          "font-display text-[0.8rem] sm:text-[0.95rem] lg:text-[1.05rem] tracking-wide text-center leading-snug transition-colors duration-500",
          isScrolled ? "text-black-deep" : "text-white/70"
        )}>
          Sopralluoghi, preventivi e consulenze{" "}
          <span className={cn(
            "inline-flex items-center font-bold uppercase tracking-[0.15em] mx-0.5 px-2 py-0.5 rounded-sm transition-all duration-500",
            isScrolled
              ? "text-bordeaux bg-bordeaux/[0.07]"
              : "text-white bg-white/[0.1]"
          )}>
            gratuite
          </span>
        </p>

        {/* Decorative dash */}
        <span className={cn(
          "hidden sm:block w-6 h-px flex-shrink-0 transition-colors duration-500",
          isScrolled ? "bg-bordeaux/25" : "bg-white/25"
        )} />

        <Link
          href="/contatti"
          className={cn(
            "hidden md:inline-flex items-center gap-1.5 text-[0.65rem] font-ui font-semibold uppercase tracking-[0.12em] px-3.5 py-1.5 rounded-full border transition-all duration-300 flex-shrink-0",
            isScrolled
              ? "border-bordeaux/20 text-bordeaux/70 hover:bg-bordeaux hover:text-white hover:border-bordeaux"
              : "border-white/20 text-white/70 hover:bg-white hover:text-black-deep hover:border-white"
          )}
        >
          Contattaci
          <svg
            className="w-3 h-3"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              d="M3 8h10M9 4l4 4-4 4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
