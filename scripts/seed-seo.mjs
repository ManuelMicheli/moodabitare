/**
 * Add SEO title + description to all product categories in Sanity.
 *
 * Usage:
 *   SANITY_TOKEN=<your-token> node scripts/seed-seo.mjs
 */

import { createClient } from "@sanity/client";

const token = process.env.SANITY_TOKEN;
if (!token) {
  console.error("Missing SANITY_TOKEN");
  process.exit(1);
}

const client = createClient({
  projectId: "wgwm1nif",
  dataset: "production",
  apiVersion: "2024-01-01",
  token,
  useCdn: false,
});

const seoData = {
  "infissi-pvc": {
    seoTitle: "Infissi in PVC Oknoplast — Serramenti Varese | Mood Abitare",
    seoDescription: "Infissi in PVC Oknoplast a Gorla Maggiore (Varese): 20 modelli, isolamento termico Uw 0,6 W/m²K, risparmio fino al 40%. Premium Partner con garanzia 10 anni. Preventivo gratuito.",
  },
  "infissi-alluminio": {
    seoTitle: "Infissi in Alluminio Oknoplast — Serramenti Varese | Mood Abitare",
    seoDescription: "Finestre in alluminio a taglio termico Oknoplast a Varese. Profili ultra-sottili, 200+ colori RAL, massima luce naturale. Ideali per grandi vetrate. Preventivo gratuito.",
  },
  "infissi-alluminio-legno": {
    seoTitle: "Infissi Alluminio Legno Korus — Serramenti Varese | Mood Abitare",
    seoDescription: "Serramenti in alluminio e legno Korus a Gorla Maggiore: resistenza esterna e calore interno. Uw fino a 0,80 W/m²K, zero manutenzione. Showroom e preventivo gratuito.",
  },
  "infissi-legno": {
    seoTitle: "Infissi in Legno Pail — Serramenti Artigianali Varese | Mood Abitare",
    seoDescription: "Finestre in legno massello Pail a Varese: produzione artigianale italiana, essenze certificate FSC/PEFC. Personalizzabili in forma, colore ed essenza. Preventivo gratuito.",
  },
  "portoncini": {
    seoTitle: "Portoncini d'Ingresso Oknoplast e Kopen — Varese | Mood Abitare",
    seoDescription: "Portoncini d'ingresso blindati e isolanti a Gorla Maggiore. Oknoplast e Kopen: sicurezza certificata, design moderno e classico, isolamento termico superiore. Preventivo gratuito.",
  },
  "persiane": {
    seoTitle: "Persiane in Alluminio Erreci, Persit e Korus — Varese | Mood Abitare",
    seoDescription: "Persiane in alluminio a Varese: modelli orientabili, scorrevoli e a battente. Erreci, Persit e Korus. Oscuramento, ventilazione e sicurezza. Preventivo gratuito.",
  },
  "frangisole": {
    seoTitle: "Frangisole Lupak — Schermature Solari Varese | Mood Abitare",
    seoDescription: "Frangisole e schermature solari Lupak a Gorla Maggiore (Varese). Controllo solare intelligente per comfort abitativo e risparmio energetico. Preventivo gratuito.",
  },
  "tapparelle": {
    seoTitle: "Tapparelle Pasini — Avvolgibili Varese | Mood Abitare",
    seoDescription: "Tapparelle e avvolgibili Pasini a Varese: isolamento termico, sicurezza antieffrazione e oscuramento totale. Motorizzabili e coibentate. Preventivo gratuito.",
  },
  "porte-interne": {
    seoTitle: "Porte Interne Pail e Door Arreda — Varese | Mood Abitare",
    seoDescription: "Porte interne di design a Gorla Maggiore: Pail e Door Arreda. Scorrevoli, a battente, a filo muro. Legno, vetro e laccate. Showroom 300mq. Preventivo gratuito.",
  },
  "porte-blindate": {
    seoTitle: "Porte Blindate Alias ed Erreci — Sicurezza Varese | Mood Abitare",
    seoDescription: "Porte blindate certificate a Varese: Alias ed Erreci, classe antieffrazione fino a 4. Sicurezza massima con design elegante. Showroom e preventivo gratuito.",
  },
  "grate-sicurezza": {
    seoTitle: "Grate di Sicurezza Erreci — Inferriate Varese | Mood Abitare",
    seoDescription: "Grate e inferriate di sicurezza Erreci a Gorla Maggiore. Protezione certificata per finestre e porte-finestre, fisse o apribili. Preventivo gratuito.",
  },
  "persiane-blindate": {
    seoTitle: "Persiane Blindate Erreci ed Ecomet — Varese | Mood Abitare",
    seoDescription: "Persiane blindate antieffrazione a Varese: Erreci ed Ecomet. Sicurezza certificata con l'estetica della persiana tradizionale. Preventivo gratuito.",
  },
  "allarme-videosorveglianza": {
    seoTitle: "Allarme e Videosorveglianza Inim — Sicurezza Casa Varese | Mood Abitare",
    seoDescription: "Sistemi di allarme e videosorveglianza Inim a Varese. Sensori perimetrali, telecamere HD, controllo da smartphone. Installazione e assistenza. Preventivo gratuito.",
  },
  "zanzariere": {
    seoTitle: "Zanzariere Grifoflex, Bettio e Sharknet — Varese | Mood Abitare",
    seoDescription: "Zanzariere su misura a Gorla Maggiore: Grifoflex, Bettio e Sharknet. Laterali, verticali, plissettate. Protezione insetti senza rinunciare alla luce. Preventivo gratuito.",
  },
  "tende-tecniche": {
    seoTitle: "Tende Tecniche Sharknet e Zanzar Sistem — Varese | Mood Abitare",
    seoDescription: "Tende tecniche a rullo, a pannello e plissettate a Varese. Sharknet e Zanzar Sistem: controllo luce, privacy e design. Showroom e preventivo gratuito.",
  },
  "scale-ringhiere": {
    seoTitle: "Scale e Ringhiere Sinfonia — Design Interni Varese | Mood Abitare",
    seoDescription: "Scale e ringhiere di design Sinfonia a Gorla Maggiore. Legno, ferro, vetro e acciaio per interni ed esterni. Progettazione su misura. Preventivo gratuito.",
  },
  "pergole": {
    seoTitle: "Pergole Bioclimatiche Tendarredo e Persit — Varese | Mood Abitare",
    seoDescription: "Pergole bioclimatiche a Varese: Tendarredo e Persit. Lamelle orientabili, chiusure laterali, illuminazione LED integrata. Vivere l'outdoor tutto l'anno. Preventivo gratuito.",
  },
  "gazebi-strutture-legno": {
    seoTitle: "Gazebi e Strutture in Legno su Misura — Varese | Mood Abitare",
    seoDescription: "Gazebi e strutture in legno su misura a Gorla Maggiore (Varese). Carport, verande, pergolati in legno lamellare. Progettazione e installazione. Preventivo gratuito.",
  },
  "tende-da-sole": {
    seoTitle: "Tende da Sole Tendarredo — Varese | Mood Abitare",
    seoDescription: "Tende da sole a bracci, a caduta e a cappottina a Varese. Tendarredo: tessuti tecnici, motorizzazione e sensori meteo. Showroom e preventivo gratuito.",
  },
  "vetrate-panoramiche": {
    seoTitle: "Vetrate Panoramiche Scorrevoli Mc Slide — Varese | Mood Abitare",
    seoDescription: "Vetrate panoramiche scorrevoli senza profili a Gorla Maggiore. Mc Slide: vista senza confini, apertura totale. Ideali per verande e terrazzi. Preventivo gratuito.",
  },
  "piscine": {
    seoTitle: "Piscine Interrate e Fuori Terra — Varese | Mood Abitare",
    seoDescription: "Piscine interrate e fuori terra a Varese: progettazione, installazione e manutenzione. Soluzioni per ogni giardino e budget. Sopralluogo e preventivo gratuito.",
  },
  "rivestimento-piscine": {
    seoTitle: "Rivestimento Piscine Esistenti — Ristrutturazione Varese | Mood Abitare",
    seoDescription: "Rinnova la tua piscina con rivestimenti moderni a Varese. Liner, PVC armato, mosaico e resina. Ristrutturazione completa o parziale. Preventivo gratuito.",
  },
  "arredo-giardino": {
    seoTitle: "Arredo Giardino di Qualità — Outdoor Varese | Mood Abitare",
    seoDescription: "Arredo giardino a Gorla Maggiore: tavoli, sedie, divani e complementi outdoor. Materiali resistenti e design italiano. Showroom e preventivo gratuito.",
  },
  "cucine-su-misura": {
    seoTitle: "Cucine su Misura Arrex — Cucine Varese | Mood Abitare",
    seoDescription: "Cucine su misura Arrex a Varese: moderne, classiche e in muratura. Progettazione 3D, elettrodomestici integrati. Showroom 300mq. Preventivo gratuito.",
  },
  "arredo-bagno": {
    seoTitle: "Arredo Bagno Merati — Mobili Bagno Varese | Mood Abitare",
    seoDescription: "Arredo bagno Merati a Gorla Maggiore: mobili, specchiere e accessori di design. Soluzioni per bagni grandi e piccoli. Showroom e preventivo gratuito.",
  },
  "sanitari": {
    seoTitle: "Sanitari Sani e Co — Bagno Varese | Mood Abitare",
    seoDescription: "Sanitari Sani e Co a Varese: vasi, bidet, lavabi sospesi e a terra. Design moderno, igiene e comfort. Showroom e preventivo gratuito.",
  },
  "rubinetteria": {
    seoTitle: "Rubinetteria Fiore — Design e Risparmio Idrico Varese | Mood Abitare",
    seoDescription: "Rubinetteria Fiore a Gorla Maggiore: miscelatori bagno e cucina con tecnologia risparmio idrico. Design italiano certificato. Showroom e preventivo gratuito.",
  },
  "ceramiche": {
    seoTitle: "Ceramiche e Rivestimenti Class Tile — Pavimenti Varese | Mood Abitare",
    seoDescription: "Ceramiche e rivestimenti Class Tile a Varese: gres porcellanato, mosaico e grandi formati. Per pavimenti e pareti, interni ed esterni. Showroom e preventivo gratuito.",
  },
  "parquet": {
    seoTitle: "Parquet Ali Parquet — Pavimenti in Legno Varese | Mood Abitare",
    seoDescription: "Parquet e pavimenti in legno Ali Parquet a Gorla Maggiore. Rovere, noce, frassino: prefinito e massello. Posa certificata. Showroom e preventivo gratuito.",
  },
  "climatizzatori": {
    seoTitle: "Climatizzatori Haier e Samsung — Condizionatori Varese | Mood Abitare",
    seoDescription: "Climatizzatori Haier e Samsung a Varese: mono e multi split, pompa di calore, Wi-Fi integrato. Installazione e assistenza. Preventivo gratuito.",
  },
  "pompe-di-calore": {
    seoTitle: "Pompe di Calore Ariston — Riscaldamento Varese | Mood Abitare",
    seoDescription: "Pompe di calore Ariston a Gorla Maggiore: riscaldamento e raffrescamento ecologico. Risparmio fino al 70% rispetto a caldaie tradizionali. Preventivo gratuito.",
  },
  "caldaia": {
    seoTitle: "Caldaie a Condensazione Hermann — Riscaldamento Varese | Mood Abitare",
    seoDescription: "Caldaie a condensazione Hermann a Varese: massimo rendimento, minime emissioni. Installazione, manutenzione e assistenza. Preventivo gratuito.",
  },
  "impianti-fotovoltaici": {
    seoTitle: "Impianti Fotovoltaici — Energia Solare Varese | Mood Abitare",
    seoDescription: "Impianti fotovoltaici a Gorla Maggiore (Varese): pannelli solari, accumulo e gestione energia. Autonomia energetica e detrazioni fiscali. Preventivo gratuito.",
  },
  "impianti-elettrici": {
    seoTitle: "Impianti Elettrici Civili e Industriali — Varese | Mood Abitare",
    seoDescription: "Impianti elettrici a Varese: civili e industriali, domotica, automazione. Certificazione e messa a norma. Progettazione e installazione. Preventivo gratuito.",
  },
  "impianti-idraulici": {
    seoTitle: "Impianti Idraulici — Termoidraulica Varese | Mood Abitare",
    seoDescription: "Impianti idraulici a Gorla Maggiore: riscaldamento a pavimento, sanitari, distribuzione acqua. Ristrutturazione e nuova installazione. Preventivo gratuito.",
  },
};

async function updateSeo() {
  const entries = Object.entries(seoData);
  console.log(`Updating SEO for ${entries.length} product categories...\n`);

  let transaction = client.transaction();
  for (const [slug, seo] of entries) {
    transaction = transaction.patch(`product-cat-${slug}`, (p) =>
      p.set({ seoTitle: seo.seoTitle, seoDescription: seo.seoDescription })
    );
  }

  try {
    await transaction.commit();
    console.log(`Done! Updated SEO for ${entries.length} products.`);
  } catch (err) {
    console.error("Update failed:", err.message);
    process.exit(1);
  }
}

updateSeo();
