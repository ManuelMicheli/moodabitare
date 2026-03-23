// src/lib/seo/product-jsonld.ts

import type { ProductCategory } from "@/lib/constants";

type ProductContent = {
  tagline: string;
  description: string;
  specs: Array<{ label: string; value: string }>;
  benefits: string[];
};

export function buildProductJsonLd(
  product: ProductCategory,
  content: ProductContent | undefined,
  slug: string,
) {
  const baseUrl = "https://www.moschianosrl.it";

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.name}${product.brand ? ` ${product.brand}` : ""}`,
    description:
      content?.description ??
      `${product.name} disponibile da Mood Abitare.`,
    ...(product.brand
      ? {
          brand: {
            "@type": "Brand",
            name: product.brand.split(" / ")[0],
          },
        }
      : {}),
    url: `${baseUrl}/prodotti/${slug}`,
    image: `${baseUrl}/prodotti/${slug}/opengraph-image`,
    category: product.name,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "EUR",
      seller: {
        "@type": "Organization",
        name: "Mood Abitare",
        url: baseUrl,
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
    },
    ...(content?.specs
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
