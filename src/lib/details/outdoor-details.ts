import type { ProductDetail } from "../product-details";
import {
  tendarredoPergoleDetails,
  tendarredoTendeDetails,
  persitDetails,
  mcSlideDetails,
} from "../brand-product-details";

/* ── PERGOLE — Tendarredo / Persit ───────────────────────────── */

export const pergoleDetails: Record<string, ProductDetail> = {
  ...Object.fromEntries(Object.entries(tendarredoPergoleDetails).map(([k, v]) => [`Tendarredo — ${k}`, v])),
  ...Object.fromEntries(Object.entries(persitDetails).map(([k, v]) => [`Persit — ${k.replace("Pergola Bioclimatica ", "")}`, v])),
};

/* ── TENDE DA SOLE — Tendarredo ──────────────────────────────── */

export const tendeSoleDetails: Record<string, ProductDetail> = {
  ...Object.fromEntries(Object.entries(tendarredoTendeDetails).map(([k, v]) => [`Tendarredo — ${k}`, v])),
};

/* ── VETRATE PANORAMICHE — Mc Slide ──────────────────────────── */

export const vetratePanoramicheDetails: Record<string, ProductDetail> = {
  ...Object.fromEntries(Object.entries(mcSlideDetails).map(([k, v]) => [`Mc Slide — ${k}`, v])),
};
