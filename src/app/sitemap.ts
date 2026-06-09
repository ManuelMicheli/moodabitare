import type { MetadataRoute } from "next";
import { ALL_PRODUCTS } from "@/lib/constants";
import { GUIDES } from "@/lib/guide-data";

/**
 * Dynamic sitemap.
 * - Priority differenziate per macro-categoria e importanza commerciale.
 * - changeFrequency realistica (home weekly, prodotti monthly, privacy yearly).
 * - lastModified = data REALE di ultima modifica contenuto, NON `new Date()`.
 *   Date stabili = Google si fida del lastmod e ricrawla in modo efficiente.
 *   Aggiornare la data della pagina qui sotto quando se ne modifica il contenuto.
 */
const HERO_PRODUCTS = new Set([
  "infissi-pvc",
  "infissi-alluminio",
  "porte-blindate",
  "porte-interne",
  "cucine-su-misura",
  "portoncini",
  "pompe-di-calore",
  "impianti-fotovoltaici",
]);

// Data di ultima modifica reale per pagina statica (ISO yyyy-mm-dd).
const PAGE_LASTMOD: Record<string, string> = {
  "/": "2026-05-28",
  "/prodotti": "2026-05-29",
  "/chi-siamo": "2026-05-28",
  "/showroom": "2026-05-28",
  "/contatti": "2026-05-28",
  "/servizi-ristrutturazione": "2026-05-28",
  "/progettazione-design": "2026-05-28",
  "/premium-partner": "2026-05-28",
  "/finanziamento": "2026-05-28",
  "/servizi": "2026-05-28",
  "/guide": "2026-05-28",
};

// Ultima modifica del contenuto prodotti (src/lib/product-content.ts).
const PRODUCTS_LASTMOD = "2026-05-29";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.moodabitare.it";

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: PAGE_LASTMOD["/"], changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/prodotti`, lastModified: PAGE_LASTMOD["/prodotti"], changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/chi-siamo`, lastModified: PAGE_LASTMOD["/chi-siamo"], changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/showroom`, lastModified: PAGE_LASTMOD["/showroom"], changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/contatti`, lastModified: PAGE_LASTMOD["/contatti"], changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/servizi-ristrutturazione`, lastModified: PAGE_LASTMOD["/servizi-ristrutturazione"], changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/progettazione-design`, lastModified: PAGE_LASTMOD["/progettazione-design"], changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/premium-partner`, lastModified: PAGE_LASTMOD["/premium-partner"], changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/finanziamento`, lastModified: PAGE_LASTMOD["/finanziamento"], changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/servizi`, lastModified: PAGE_LASTMOD["/servizi"], changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide`, lastModified: PAGE_LASTMOD["/guide"], changeFrequency: "monthly", priority: 0.8 },
  ];

  const productPages: MetadataRoute.Sitemap = ALL_PRODUCTS.map((product) => ({
    url: `${baseUrl}/prodotti/${product.slug}`,
    lastModified: PRODUCTS_LASTMOD,
    changeFrequency: "monthly" as const,
    priority: HERO_PRODUCTS.has(product.slug) ? 0.9 : 0.75,
  }));

  const guidePages: MetadataRoute.Sitemap = GUIDES.map((guide) => ({
    url: `${baseUrl}/guide/${guide.slug}`,
    lastModified: guide.dateModified,
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...productPages, ...guidePages];
}
