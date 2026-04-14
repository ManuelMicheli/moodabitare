// src/lib/seo/service-jsonld.ts

const BASE_URL = "https://www.moodabitare.it";

export type ServiceConfig = {
  /** URL path senza il dominio (es. "/servizi-ristrutturazione") */
  path: string;
  /** Nome visibile del servizio */
  name: string;
  /** Categoria Schema.org del servizio (es. "HomeAndConstructionBusiness", "InteriorDesign") */
  serviceType?: string;
  /** Descrizione ricca 150-300 parole */
  description: string;
  /** Pubblico target opzionale (es. "Proprietari di casa in provincia di Varese") */
  audience?: string;
  /** Se fornito viene emesso hasOfferCatalog con gli item */
  offerings?: Array<{ name: string; description?: string }>;
  /** Eventuali prezzi — per default "Preventivo gratuito" */
  priceRange?: string;
};

/**
 * Genera Schema.org Service JSON-LD completo.
 * Include provider (Organization Mood Abitare con @id riferito al LocalBusiness root),
 * areaServed (GeoCircle 50km da Gorla Maggiore), offerings opzionale, priceRange.
 */
export function buildServiceJsonLd(cfg: ServiceConfig) {
  const url = `${BASE_URL}${cfg.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: cfg.name,
    description: cfg.description,
    url,
    serviceType: cfg.serviceType ?? "Home Improvement",
    provider: {
      "@id": `${BASE_URL}/#business`,
      "@type": "HomeAndConstructionBusiness",
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
      description: "Provincia di Varese e alto milanese",
    },
    ...(cfg.audience
      ? {
          audience: {
            "@type": "Audience",
            audienceType: cfg.audience,
          },
        }
      : {}),
    ...(cfg.offerings && cfg.offerings.length > 0
      ? {
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: `${cfg.name} — catalogo servizi`,
            itemListElement: cfg.offerings.map((o) => ({
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: o.name,
                ...(o.description ? { description: o.description } : {}),
              },
            })),
          },
        }
      : {}),
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "EUR",
        description: cfg.priceRange ?? "Sopralluogo e preventivo gratuiti",
      },
      availability: "https://schema.org/InStock",
      areaServed: "Provincia di Varese",
    },
  };
}
