// src/lib/seo/local-seo.ts

/** Comuni principali serviti nella provincia di Varese (raggio ~30km da Gorla Maggiore) */
export const SERVED_AREAS = [
  "Gorla Maggiore",
  "Gorla Minore",
  "Marnate",
  "Olgiate Olona",
  "Fagnano Olona",
  "Solbiate Olona",
  "Castellanza",
  "Busto Arsizio",
  "Gallarate",
  "Saronno",
  "Legnano",
  "Varese",
  "Tradate",
  "Cairate",
  "Lonate Ceppino",
  "Castiglione Olona",
  "Cardano al Campo",
  "Somma Lombardo",
  "Sesto Calende",
  "Laveno Mombello",
  "Luino",
  "Besozzo",
  "Gavirate",
  "Caronno Pertusella",
  "Uboldo",
  "Gerenzano",
  "Cislago",
  "Rescaldina",
  "Cerro Maggiore",
  "San Vittore Olona",
] as const;

/** Schema.org areaServed completo per LocalBusiness */
export const AREA_SERVED_SCHEMA = {
  "@type": "GeoCircle",
  geoMidpoint: {
    "@type": "GeoCoordinates",
    latitude: 45.6278,
    longitude: 8.8847,
  },
  geoRadius: "50000",
};

/** Profili social per sameAs */
export const SAME_AS_PROFILES = [
  "https://www.instagram.com/moodabitare/",
  "https://www.facebook.com/moschianosrl/",
  "https://www.google.com/maps/place/Viale+Europa,+65,+21050+Gorla+Maggiore+VA",
];
