import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type Props = {
  items: BreadcrumbItem[];
  className?: string;
};

/**
 * Breadcrumb visibile per UX + rinforzo segnale SEO.
 * Il JSON-LD BreadcrumbList viene comunque emesso a parte nelle pagine.
 * Inizia sempre con "Home"; ultimo item è la pagina corrente (senza link).
 */
export function Breadcrumb({ items, className = "" }: Props) {
  const trail: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...items];
  const last = trail.length - 1;

  return (
    <nav
      aria-label="breadcrumb"
      className={`font-ui text-xs sm:text-sm text-black-deep/60 ${className}`}
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {trail.map((item, i) => {
          const isLast = i === last;
          return (
            <li key={`${item.label}-${i}`} className="flex items-center gap-x-2">
              {!isLast && item.href ? (
                <Link
                  href={item.href}
                  className="hover:text-bordeaux transition-colors duration-200 uppercase tracking-wide"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className="uppercase tracking-wide text-black-deep/90"
                >
                  {item.label}
                </span>
              )}
              {!isLast && (
                <span aria-hidden className="text-black-deep/25">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
