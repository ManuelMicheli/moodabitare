import Link from "next/link";
import { cn } from "@/lib/utils";

interface FreeConsultationBannerProps {
  isScrolled?: boolean;
}

export function FreeConsultationBanner({ isScrolled }: FreeConsultationBannerProps) {
  return (
    <div className={cn(
      "transition-all duration-500",
      isScrolled
        ? "bg-white border-b border-black/5"
        : "bg-transparent border-b border-white/10"
    )}>
      <div className="flex items-center justify-center gap-4 sm:gap-6 px-6 py-2.5 sm:py-3">
        <p className={cn(
          "font-display font-bold text-[0.9rem] sm:text-[1.05rem] lg:text-[1.15rem] tracking-tight text-center leading-snug transition-colors duration-500",
          isScrolled ? "text-bordeaux" : "text-white"
        )}>
          Sopralluoghi, preventivi e consulenze{" "}
          <span className="uppercase">gratuite</span> e senza impegno
        </p>
        <Link
          href="/contatti"
          className={cn(
            "hidden sm:inline-flex items-center gap-1.5 text-[0.7rem] font-display font-bold uppercase tracking-wide transition-colors flex-shrink-0",
            isScrolled
              ? "text-bordeaux/60 hover:text-bordeaux"
              : "text-white/60 hover:text-white"
          )}
        >
          Contattaci
          <svg
            className="w-3.5 h-3.5"
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
