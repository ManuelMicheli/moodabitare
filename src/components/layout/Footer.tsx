import Link from "next/link";
import Image from "next/image";
import { CONTACT_INFO, OPENING_HOURS, MACRO_CATEGORIES, NAV_ITEMS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black-deep text-white">
      <div className="py-20 lg:py-28 px-6 sm:px-10 lg:px-20">
        <div className="w-full">
          {/* Top — logo */}
          <div className="mb-16 lg:mb-24">
            <Link href="/">
              <Image
                src="/logo/logo-mood-abitare-clean.png"
                alt="Mood Abitare"
                width={200}
                height={50}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-16">
            {/* Column 1: About */}
            <div>
              <p className="text-caption text-white/40 leading-relaxed">
                Mood Abitare by Moschiano Solution. Oltre 30 anni di esperienza in serramenti, porte, ristrutturazioni e arredo casa nella provincia di Varese.
              </p>
            </div>

            {/* Column 2: Navigation */}
            <div>
              <h3 className="text-label text-white/40 mb-6">
                Navigazione
              </h3>
              <ul className="space-y-3">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="text-caption text-white/50 hover:text-white transition-colors duration-300">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Products */}
            <div>
              <h3 className="text-label text-white/40 mb-6">
                Prodotti
              </h3>
              <ul className="space-y-3">
                {MACRO_CATEGORIES.map((cat) => (
                  <li key={cat.id}>
                    <Link href={`/prodotti?categoria=${cat.id}`} className="text-caption text-white/50 hover:text-white transition-colors duration-300">
                      {cat.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h3 className="text-label text-white/40 mb-6">
                Contatti
              </h3>
              <address className="not-italic space-y-3 text-caption text-white/50">
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

              <div className="mt-6 pt-6 border-t border-white/5">
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
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5 py-6 px-6 sm:px-10 lg:px-20">
        <div className="w-full flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-caption text-white/25">
            &copy; {currentYear} Moschiano Solution. Tutti i diritti riservati.
          </p>
          <Link href="/privacy-policy" className="text-caption text-white/25 hover:text-white/40 transition-colors">
            Privacy & Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
