import type { MetadataRoute } from "next";
import { ALL_PRODUCTS } from "@/lib/constants";

/**
 * Dynamic sitemap.
 * - Priority differenziate per macro-categoria e importanza commerciale.
 * - changeFrequency realistica (home weekly, prodotti monthly, privacy yearly).
 * - Include guide cornerstone content hub.
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

const GUIDE_SLUGS = [
  "detrazioni-fiscali-serramenti-2026",
  "come-scegliere-infissi-pvc-alluminio-legno",
  "ristrutturazione-casa-chiavi-in-mano-tempi-costi",
  "porte-blindate-classe-sicurezza",
  "pompe-di-calore-vs-caldaia-condensazione",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.moodabitare.it";
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/prodotti`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/chi-siamo`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/showroom`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/contatti`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${baseUrl}/servizi-ristrutturazione`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/progettazione-design`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/premium-partner`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${baseUrl}/finanziamento`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/servizi`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/guide`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
  ];

  const productPages: MetadataRoute.Sitemap = ALL_PRODUCTS.map((product) => ({
    url: `${baseUrl}/prodotti/${product.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: HERO_PRODUCTS.has(product.slug) ? 0.9 : 0.75,
  }));

  const guidePages: MetadataRoute.Sitemap = GUIDE_SLUGS.map((slug) => ({
    url: `${baseUrl}/guide/${slug}`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...productPages, ...guidePages];
}
