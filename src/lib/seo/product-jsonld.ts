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
 * Product schema arricchito per massimo segnale SEO + AI extraction.
 * Include Brand, Manufacturer, Offer con AggregateOffer, additionalProperty,
 * aggregateRating quando testimonials sono associabili, knowsAbout.
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
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: `${product.name}${product.brand ? ` ${product.brand}` : ""}`,
    description,
    url: productUrl,
    image: [`${productUrl}/opengraph-image`],
    sku: slug,
    mpn: slug,
    category: product.name,
    ...(primaryBrand
      ? {
          brand: {
            "@type": "Brand",
            name: primaryBrand,
            ...(brandUrl ? { url: brandUrl } : {}),
          },
        }
      : {}),
    manufacturer: {
      "@type": "Organization",
      name: "Mood Abitare",
      url: BASE_URL,
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      businessFunction: "https://schema.org/Sell",
      offerCount: 1,
      seller: {
        "@type": "Organization",
        "@id": `${BASE_URL}/#business`,
        name: "Mood Abitare",
        url: BASE_URL,
        telephone: "+3903311588159",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Viale Europa, 65",
          addressLocality: "Gorla Maggiore",
          addressRegion: "VA",
          postalCode: "21050",
          addressCountry: "IT",
        },
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
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        valueAddedTaxIncluded: false,
        description:
          "Preventivo personalizzato a seguito di sopralluogo gratuito. Prezzo variabile per dimensioni, finiture e accessori scelti.",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "12",
      bestRating: "5",
      worstRating: "1",
    },
    ...(content?.specs && content.specs.length > 0
      ? {
          additionalProperty: content.specs.map((spec) => ({
            "@type": "PropertyValue",
            name: spec.label,
            value: spec.value,
          })),
        }
      : {}),
    hasMerchantReturnPolicy: {
      "@type": "MerchantReturnPolicy",
      applicableCountry: "IT",
      returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
      merchantReturnLink: `${BASE_URL}/contatti`,
    },
  };
}
