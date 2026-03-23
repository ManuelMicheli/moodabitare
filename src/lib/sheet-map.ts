import type { ProductDetail } from "./product-details";
import { aluminumDetails, interiorDoorDetails, securityDoorDetails } from "./product-details";
import { windowDetails } from "./window-details";
import { portoncinoDetails, persianeDetails, frangisoleDetails, tapparelleDetails } from "./details/serramenti-details";
import { korusAlluminioLegnoDetails } from "./details/alluminio-legno-details";
import { grateDetails, persianeBlinDateDetails, allarmeDetails } from "./details/sicurezza-details";
import { zanzariereDetails, tendeTecnicheDetails, scaleDetails } from "./details/comfort-details";
import { pergoleDetails, tendeSoleDetails, vetratePanoramicheDetails, gazebiDetails, piscineDetails, rivestimentoPiscineDetails, arredoGiardinoDetails } from "./details/outdoor-details";
import { cucineDetails, arredoBagnoDetails, sanitariDetails, rubinetteriaDetails, ceramicheDetails, parquetDetails } from "./details/casa-arredo-details";
import { climatizzatoriDetails, pompeCaloreDetails, caldaiaDetails, fotovoltaicoDetails, impiantiElettriciDetails, impiantiIdrauliciDetails } from "./details/riscaldamento-details";
import { infissiLegnoDetails } from "./details/infissi-legno-details";

/**
 * Mappa centralizzata slug → Record<string, ProductDetail>
 * Usata da page.tsx per decidere se mostrare GalleryWithSheet o HorizontalGallery.
 */
export const sheetMap: Record<string, Record<string, ProductDetail>> = {
  /* ── Serramenti ─────────────────────────── */
  "infissi-pvc": windowDetails,
  "infissi-alluminio": aluminumDetails,
  "infissi-alluminio-legno": korusAlluminioLegnoDetails,
  "infissi-legno": infissiLegnoDetails,
  "portoncini": portoncinoDetails,
  "persiane": persianeDetails,
  "frangisole": frangisoleDetails,
  "tapparelle": tapparelleDetails,

  /* ── Porte ──────────────────────────────── */
  "porte-interne": interiorDoorDetails,
  "porte-blindate": securityDoorDetails,

  /* ── Sicurezza ──────────────────────────── */
  "grate-sicurezza": grateDetails,
  "persiane-blindate": persianeBlinDateDetails,
  "allarme-videosorveglianza": allarmeDetails,

  /* ── Comfort & Complementi ──────────────── */
  "zanzariere": zanzariereDetails,
  "tende-tecniche": tendeTecnicheDetails,
  "scale-ringhiere": scaleDetails,

  /* ── Outdoor ────────────────────────────── */
  "pergole": pergoleDetails,
  "tende-da-sole": tendeSoleDetails,
  "vetrate-panoramiche": vetratePanoramicheDetails,
  "gazebi-strutture-legno": gazebiDetails,
  "piscine": piscineDetails,
  "rivestimento-piscine": rivestimentoPiscineDetails,
  "arredo-giardino": arredoGiardinoDetails,

  /* ── Casa & Arredo ──────────────────────── */
  "cucine-su-misura": cucineDetails,
  "arredo-bagno": arredoBagnoDetails,
  "sanitari": sanitariDetails,
  "rubinetteria": rubinetteriaDetails,
  "ceramiche": ceramicheDetails,
  "parquet": parquetDetails,

  /* ── Riscaldamento ──────────────────────── */
  "climatizzatori": climatizzatoriDetails,
  "pompe-di-calore": pompeCaloreDetails,
  "caldaia": caldaiaDetails,
  "impianti-fotovoltaici": fotovoltaicoDetails,
  "impianti-elettrici": impiantiElettriciDetails,
  "impianti-idraulici": impiantiIdrauliciDetails,
};
