import Link from "next/link";
import Image from "next/image";
import { CONTACT_INFO, OPENING_HOURS, MACRO_CATEGORIES, NAV_ITEMS } from "@/lib/constants";

const MARQUEE_TEXT = "Mood Abitare — Serramenti — Porte — Ristrutturazioni — Arredo Casa — Premium Partner Oknoplast — ";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="sticky bottom-0 z-0 bg-black-deep text-white">
      {/* Marquee */}
      <div className="border-b border-white/5 py-8 lg:py-10 overflow-hidden">
        <div className="marquee-track"
             style={{ animation: "marquee 40s linear infinite" }}>
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="font-display font-bold uppercase leading-none tracking-[-0.03em] text-white/[0.07] whitespace-nowrap"
              style={{ fontSize: "clamp(2.5rem, 1.5rem + 5vw, 6rem)" }}
            >
              {MARQUEE_TEXT}
            </span>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="py-16 lg:py-20 px-6 sm:px-10 lg:px-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          {/* Column 1: Brand + about */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/logo/logo-mood-abitare-transparent-opt.png"
                alt="Mood Abitare — La tua casa a 360 gradi"
                width={200}
                height={50}
                className="h-9 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-caption text-white/35 leading-relaxed max-w-xs">
              Oltre 30 anni di esperienza in serramenti, porte, ristrutturazioni e arredo casa nella provincia di Varese.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-label text-white/30 mb-5">Navigazione</h3>
            <ul className="space-y-0">
              {NAV_ITEMS.flatMap((item) =>
                item.hasDropdown && item.children
                  ? item.children.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className="block py-2 text-caption text-white/50 hover:text-white transition-colors duration-300">
                          {child.label}
                        </Link>
                      </li>
                    ))
                  : [
                      <li key={item.href}>
                        <Link href={item.href} className="block py-2 text-caption text-white/50 hover:text-white transition-colors duration-300">
                          {item.label}
                        </Link>
                      </li>,
                    ]
              )}
            </ul>
          </div>

          {/* Column 3: Products */}
          <div className="lg:col-span-2">
            <h3 className="text-label text-white/30 mb-5">Prodotti</h3>
            <ul className="space-y-0">
              {MACRO_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link href={`/prodotti?categoria=${cat.id}`} className="block py-2 text-caption text-white/50 hover:text-white transition-colors duration-300">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact + hours */}
          <div className="lg:col-span-4">
            <h3 className="text-label text-white/30 mb-5">Contatti</h3>
            <address className="not-italic space-y-2.5 text-caption text-white/50">
              <p>{CONTACT_INFO.fullAddress}</p>
              <p>
                <a href={CONTACT_INFO.phoneHref} className="hover:text-white transition-colors duration-300">
                  T. {CONTACT_INFO.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors duration-300">
                  {CONTACT_INFO.email}
                </a>
              </p>
            </address>

            <div className="mt-5 pt-5 border-t border-white/5">
              <p className="text-caption text-white/30">
                {OPENING_HOURS.weekdays.label}: {OPENING_HOURS.weekdays.morning} / {OPENING_HOURS.weekdays.afternoon}
              </p>
              <p className="text-caption text-white/30 mt-1">
                {OPENING_HOURS.saturday.label}: {OPENING_HOURS.saturday.morning} / {OPENING_HOURS.saturday.afternoon}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 py-5 px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-caption text-white/20">
            &copy; {currentYear} Mood Abitare. Tutti i diritti riservati. — P.IVA 03940950128
          </p>
          <Link href="/privacy-policy" className="text-caption text-white/20 hover:text-white/40 transition-colors">
            Privacy e Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
