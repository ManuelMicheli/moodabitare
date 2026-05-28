// src/lib/seo/product-jsonld.ts

import type { ProductCategory } from "@/lib/constants";
import { BRAND_URLS } from "@/lib/constants";

type ProductContent = {
  tagline: string;
  description: string;
  specs: Array<{ label: string; value: string }>;
  benefits: string[];
};

const BASE_URL = "https://www.moodabitare.it";

/**
 * Service schema per le pagine prodotto.
 * Mood Abitare è uno showroom su preventivo (fornitura + posa), non e-commerce:
 * niente prezzi fissi né recensioni per-prodotto. Quindi NON usiamo `Product`
 * (Google esige offers/review/aggregateRating → errore critico se assenti).
 * `Service` non ha tale requisito: entità valida per AI/search, zero errori GSC.
 * Brand e specs restano come segnale semantico (Google li ignora senza errori).
 */
export function buildProductJsonLd(
  product: ProductCategory,
  content: ProductContent | undefined,
  slug: string,
) {
  // Il campo `brand` nel constants può contenere più brand separati da " / "
  const primaryBrand = product.brand?.split(" / ")[0]?.trim();
  const brandUrl = primaryBrand ? BRAND_URLS[primaryBrand] : undefined;

  const productUrl = `${BASE_URL}/prodotti/${slug}`;

  const description =
    content?.description ?? `${product.name} disponibile da Mood Abitare, showroom a Gorla Maggiore — provincia di Varese.`;

  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${productUrl}#service`,
    name: `${product.name}${product.brand ? ` ${product.brand}` : ""}`,
    serviceType: product.name,
    description,
    url: productUrl,
    image: [`${productUrl}/opengraph-image`],
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${BASE_URL}/#business`,
      name: "Mood Abitare",
      url: BASE_URL,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 45.6278,
        longitude: 8.8847,
      },
      geoRadius: "50000",
    },
    ...(primaryBrand
      ? {
          brand: {
            "@type": "Brand",
            name: primaryBrand,
            ...(brandUrl ? { url: brandUrl } : {}),
          },
        }
      : {}),
    ...(content?.specs && content.specs.length > 0
      ? {
          additionalProperty: content.specs.map((spec) => ({
            "@type": "PropertyValue",
            name: spec.label,
            value: spec.value,
          })),
        }
      : {}),
  };
}
