import { BRAND_URLS } from "@/lib/constants";

/**
 * Renders brand names as external links.
 * Accepts a brand string like "Oknoplast / Kopen" or "Alias / Erreci".
 */
export function BrandLinks({ brands }: { brands: string }) {
  const names = brands.split(/\s*[/·]\s*/).map((s) => s.trim()).filter(Boolean);
  if (names.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-2.5 lg:gap-4">
      {names.map((name) => {
        const url = BRAND_URLS[name];
        const content = (
          <>
            {name}
            <svg className="w-3 h-3 lg:w-4 lg:h-4 opacity-40 group-hover:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </>
        );
        return url ? (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-1.5 lg:gap-2 font-ui text-xs sm:text-sm lg:text-base tracking-[0.06em] text-black-deep/50 hover:text-black-deep transition-all border border-black-deep/15 hover:border-black-deep/40 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 lg:px-7 lg:py-3"
          >
            {content}
          </a>
        ) : (
          <span
            key={name}
            className="inline-flex items-center gap-1.5 lg:gap-2 font-ui text-xs sm:text-sm lg:text-base tracking-[0.06em] text-black-deep/40 border border-black-deep/10 rounded-full px-4 py-1.5 sm:px-5 sm:py-2 lg:px-7 lg:py-3"
          >
            {name}
          </span>
        );
      })}
    </div>
  );
}
