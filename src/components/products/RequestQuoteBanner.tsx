import Link from "next/link";

export function RequestQuoteBanner({ productName }: { productName: string }) {
  return (
    <div className="w-full lg:w-auto lg:flex-none lg:max-w-2xl bg-black-deep rounded-sm py-4 sm:py-4 lg:py-5 px-5 sm:px-6 flex items-center justify-between gap-4 sm:gap-6 min-w-0">
      <p className="font-ui text-xs sm:text-xs lg:text-sm text-white/70 leading-tight uppercase tracking-wide">
        Per saperne di più su <span className="text-white/90 lg:text-white">{productName}</span>
      </p>
      <div className="flex items-center gap-3 flex-shrink-0">
        <Link
          href="/contatti"
          className="text-button text-xs bg-white text-black-deep px-4 py-2 sm:px-4 sm:py-2 hover:bg-cream transition-colors whitespace-nowrap"
        >
          Richiedi preventivo
        </Link>
        <a
          href="https://wa.me/393517278053"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-1 text-button text-xs text-white/50 hover:text-white transition-colors whitespace-nowrap"
        >
          WhatsApp
          <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </a>
      </div>
    </div>
  );
}
