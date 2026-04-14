// @ts-check
/**
 * Generates public/llms-full.txt — a long-form, machine-readable dossier
 * of Mood Abitare aggregated from source-of-truth TS modules.
 *
 * Usage: `node --experimental-strip-types scripts/generate-llms-full.mjs`
 * (Node 22.6+ supports TS import natively via strip-types.)
 */

import { writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");

const asUrl = (p) => pathToFileURL(resolve(ROOT, p)).href;

const constants = await import(asUrl("src/lib/constants.ts"));
const productContentMod = await import(asUrl("src/lib/product-content.ts"));
const faqMod = await import(asUrl("src/lib/seo/faq-data.ts"));

let productFaqMod = { PRODUCT_FAQS: {} };
try {
  productFaqMod = await import(asUrl("src/lib/seo/product-faq-data.ts"));
} catch {
  // optional — fine se non esiste
}

const {
  SITE_CONFIG,
  CONTACT_INFO,
  OPENING_HOURS,
  MACRO_CATEGORIES,
  BRAND_PARTNERS,
  VALUE_PROPOSITIONS,
  SERVICES,
} = constants;
const { productContent } = productContentMod;
const {
  FAQ_FINANZIAMENTO = [],
  FAQ_SERVIZI = [],
  FAQ_CONTATTI = [],
  FAQ_PROGETTAZIONE = [],
  FAQ_RISTRUTTURAZIONE = [],
} = faqMod;
const PRODUCT_FAQS = productFaqMod.PRODUCT_FAQS ?? {};

const BASE_URL = SITE_CONFIG.url;

const renderFaqList = (faqs) => {
  if (!faqs || faqs.length === 0) return "";
  let out = "";
  for (const f of faqs) out += `**${f.question}**\n\n${f.answer}\n\n`;
  return out;
};

const renderProduct = (category, product) => {
  const content = productContent[product.slug];
  const url = `${BASE_URL}/prodotti/${product.slug}`;
  let out = `\n### ${product.name}${product.brand ? ` — ${product.brand}` : ""}\n\n`;
  out += `URL: ${url}  \nCategoria: ${category.label}\n\n`;
  if (!content) return out;
  out += `*${content.tagline}*\n\n${content.description}\n\n`;
  if (content.specs?.length) {
    out += `**Specifiche tecniche:**\n\n| Parametro | Valore |\n|---|---|\n`;
    for (const s of content.specs) out += `| ${s.label} | ${s.value} |\n`;
    out += `\n`;
  }
  if (content.benefits?.length) {
    out += `**Vantaggi principali:**\n\n`;
    for (const b of content.benefits) out += `- ${b}\n`;
    out += `\n`;
  }
  if (PRODUCT_FAQS[product.slug]?.length) {
    out += `**Domande frequenti:**\n\n`;
    for (const f of PRODUCT_FAQS[product.slug]) {
      out += `*${f.question}*  \n${f.answer}\n\n`;
    }
  }
  return out;
};

let output = "";

output += `# Mood Abitare — Dossier completo\n\n`;
output += `> Showroom premium di 300 m² a Gorla Maggiore (Varese) specializzato in serramenti, porte, ristrutturazioni chiavi in mano e arredo casa. Premium Partner Oknoplast dal 2010. Oltre 30 anni di esperienza. 29 brand partner europei.\n\n`;

output += `## Identità azienda\n\n`;
output += `- Nome commerciale: ${SITE_CONFIG.name}\n`;
output += `- Ragione sociale: Moschiano Srl\n`;
output += `- Partita IVA: ${CONTACT_INFO.piva}\n`;
output += `- Codice SDI: ${CONTACT_INFO.sdi}\n`;
output += `- Tagline: ${SITE_CONFIG.tagline}\n`;
output += `- Descrizione: ${SITE_CONFIG.description}\n`;
output += `- Sito web: ${BASE_URL}\n\n`;

output += `## Contatti e sede\n\n`;
output += `- Indirizzo: ${CONTACT_INFO.fullAddress}\n`;
output += `- Telefono: ${CONTACT_INFO.phone}\n`;
output += `- WhatsApp: ${CONTACT_INFO.whatsapp}\n`;
output += `- Email generale: ${CONTACT_INFO.email}\n`;
output += `- Email commerciale: ${CONTACT_INFO.emailCommerciale}\n`;
output += `- Email amministrazione: ${CONTACT_INFO.emailAmministrazione}\n`;
output += `- Coordinate GPS: ${CONTACT_INFO.coordinates.lat}, ${CONTACT_INFO.coordinates.lng}\n`;
output += `- Mappa: ${CONTACT_INFO.googleMapsUrl}\n\n`;

output += `## Orari di apertura\n\n`;
output += `- ${OPENING_HOURS.weekdays.label}: ${OPENING_HOURS.weekdays.morning} e ${OPENING_HOURS.weekdays.afternoon}\n`;
output += `- ${OPENING_HOURS.saturday.label}: ${OPENING_HOURS.saturday.morning}\n`;
output += `- Domenica: chiuso\n\n`;

output += `## Area servita\n\nProvincia di Varese, alto milanese, aree limitrofe lombarde. Raggio operativo di circa 50 km da Gorla Maggiore, inclusi i comuni di: Varese, Busto Arsizio, Gallarate, Saronno, Legnano, Castellanza, Tradate, Cassano Magnago, Fagnano Olona, Solbiate Olona, Olgiate Olona, Marnate, Gorla Minore, Gorla Maggiore, Samarate, Somma Lombardo, Arsago Seprio, Casorate Sempione, Vergiate, Sesto Calende e altri.\n\n`;

output += `## Numeri chiave\n\n`;
for (const v of VALUE_PROPOSITIONS) output += `- ${v.number}${v.suffix}: ${v.label}\n`;
output += `\n`;

output += `## Brand partner (${BRAND_PARTNERS.length})\n\n`;
for (const b of BRAND_PARTNERS) output += `- ${b.name}: ${b.category}\n`;
output += `\n`;

output += `## Servizi offerti\n\n`;
for (const s of SERVICES) output += `### ${s.title}\n\n${s.description}\n\n`;

output += `## Catalogo prodotti completo\n\n`;
output += `Mood Abitare copre 7 macro-categorie con 36 categorie di prodotto.\n`;
for (const cat of MACRO_CATEGORIES) {
  output += `\n## ${cat.label}\n`;
  for (const p of cat.products) output += renderProduct(cat, p);
}

output += `\n## FAQ — Finanziamento\n\n${renderFaqList(FAQ_FINANZIAMENTO)}`;
output += `\n## FAQ — Servizi\n\n${renderFaqList(FAQ_SERVIZI)}`;
output += `\n## FAQ — Ristrutturazioni\n\n${renderFaqList(FAQ_RISTRUTTURAZIONE)}`;
output += `\n## FAQ — Progettazione\n\n${renderFaqList(FAQ_PROGETTAZIONE)}`;
output += `\n## FAQ — Contatti e showroom\n\n${renderFaqList(FAQ_CONTATTI)}`;

output += `\n---\n\nQuesto dossier è generato automaticamente dai file sorgente del sito.\nUltimo aggiornamento: ${new Date().toISOString().slice(0, 10)}.\n`;

await writeFile(resolve(ROOT, "public/llms-full.txt"), output, "utf8");
console.log(`Generated public/llms-full.txt (${output.length.toLocaleString()} chars)`);
