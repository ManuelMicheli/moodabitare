import type { ProductDetail } from "../product-details";

/* ── INFISSI IN LEGNO — Pail ───────────────────────────────────── */

export const infissiLegnoDetails: Record<string, ProductDetail> = {
  "Pail — Belvedere": {
    name: "Belvedere",
    brand: "Pail",
    segment: "Premium",
    description:
      "Finestra in legno massello lamellare con profilo tondo classico e doppia guarnizione perimetrale. Il sistema di ferramenta a nastro nascosta garantisce estetica pulita e apertura fluida. Vetrocamera basso-emissivo con gas argon per isolamento termico superiore, disponibile anche in versione triplo vetro.",
    highlight: "Profilo tondo classico — legno massello lamellare, Uw fino a 1,0 W/m²K",
    specs: [
      { label: "Materiale", value: "Legno massello lamellare (pino, rovere, mogano)" },
      { label: "Profondità telaio", value: "68 mm (doppio vetro) / 80 mm (triplo vetro)" },
      { label: "Trasmittanza Uw", value: "fino a 1,0 W/m²K (triplo vetro)" },
      { label: "Guarnizioni", value: "2 perimetrali in EPDM" },
      { label: "Vetro", value: "Doppio o triplo, basso-emissivo, gas argon" },
      { label: "Certificazioni", value: "CE, legno FSC/PEFC, marcatura EN 14351-1" },
    ],
    colors: "Bianco, avorio, noce chiaro, noce scuro, rovere naturale, mogano, castagno, tutti i colori RAL",
    features: ["Battente", "Anta-ribalta", "Vasistas", "Profilo tondo classico"],
  },
  "Pail — DolceVita": {
    name: "DolceVita",
    brand: "Pail",
    segment: "Design",
    description:
      "Finestra in legno dal design contemporaneo con profilo squadrato e linee minimali. Anta complanare al telaio per un effetto filomuro dall'interno, con ferramenta a scomparsa totale. Ideale per architetture moderne dove il legno incontra il design pulito.",
    highlight: "Design squadrato contemporaneo — anta complanare, ferramenta a scomparsa",
    specs: [
      { label: "Materiale", value: "Legno massello lamellare selezionato" },
      { label: "Profondità telaio", value: "80 mm" },
      { label: "Trasmittanza Uw", value: "fino a 0,95 W/m²K" },
      { label: "Guarnizioni", value: "3 perimetrali continue" },
      { label: "Ferramenta", value: "A scomparsa totale, cerniere nascoste" },
      { label: "Vetro", value: "Triplo vetro basso-emissivo, canalina warm-edge" },
    ],
    colors: "Laccato opaco tutti i RAL, essenze naturali (rovere, noce, frassino), bicolore interno/esterno",
    features: ["Battente", "Anta-ribalta", "Anta complanare", "Ferramenta nascosta"],
  },
  "Pail — Classica": {
    name: "Classica",
    brand: "Pail",
    segment: "Classic",
    description:
      "Finestra in legno tradizionale con profilo sagomato e gocciolatoio in alluminio integrato. La soluzione più versatile della gamma Pail, perfetta per ristrutturazioni di edifici storici e abitazioni classiche. Trattamento multistrato ad acqua per durata e resistenza alle intemperie.",
    highlight: "Tradizione italiana — profilo sagomato, gocciolatoio in alluminio integrato",
    specs: [
      { label: "Materiale", value: "Legno massello lamellare (pino, abete, rovere)" },
      { label: "Profondità telaio", value: "68 mm" },
      { label: "Trasmittanza Uw", value: "fino a 1,2 W/m²K" },
      { label: "Guarnizioni", value: "2 perimetrali in EPDM" },
      { label: "Gocciolatoio", value: "In alluminio estruso, integrato nel profilo" },
      { label: "Trattamento", value: "Verniciatura ad acqua multistrato ecologica" },
    ],
    colors: "Bianco, avorio, noce chiaro, noce medio, noce scuro, castagno, rovere naturale, laccato RAL",
    features: ["Battente", "Anta-ribalta", "Vasistas", "Arco a tutto sesto", "Oblò"],
  },
  "Pail — Scorrevole Legno": {
    name: "Scorrevole Legno",
    brand: "Pail",
    segment: "Scorrevoli",
    description:
      "Sistema scorrevole in legno massello con binario a scomparsa e soglia ribassata per accessibilità totale. Grandi dimensioni fino a 3 metri di altezza e 6 metri di larghezza per vetrate panoramiche che incorniciano il paesaggio. Movimento fluido con carrelli regolabili in acciaio inox.",
    highlight: "Grandi luci fino a 6 m — soglia ribassata, movimento fluido",
    specs: [
      { label: "Materiale", value: "Legno massello lamellare rinforzato" },
      { label: "Dimensioni max", value: "H 3.000 mm × L 6.000 mm" },
      { label: "Trasmittanza Uw", value: "fino a 1,1 W/m²K" },
      { label: "Soglia", value: "Ribassata 20 mm, accessibilità PMR" },
      { label: "Carrelli", value: "Acciaio inox regolabili, portata 400 kg/anta" },
      { label: "Vetro", value: "Doppio o triplo, stratificato di sicurezza opzionale" },
    ],
    colors: "Tutte le essenze e finiture della gamma Pail, bicolore interno/esterno",
    features: ["Scorrevole alzante", "Scorrevole traslante", "Soglia ribassata", "Grandi dimensioni"],
  },
  "Pail — Persiana Legno": {
    name: "Persiana in Legno",
    brand: "Pail",
    segment: "Classic",
    description:
      "Persiana in legno massello con stecche orientabili o fisse, realizzata artigianalmente con assemblaggio a tenone e mortasa. Trattamento impregnante e verniciatura multistrato per resistenza totale agli agenti atmosferici. Disponibile con cardini a muro o a telaio.",
    highlight: "Artigianato italiano — tenone e mortasa, trattamento multistrato",
    specs: [
      { label: "Materiale", value: "Legno massello (abete, pino, rovere, mogano)" },
      { label: "Stecche", value: "Orientabili o fisse, passo regolare" },
      { label: "Assemblaggio", value: "Tenone e mortasa incollato" },
      { label: "Trattamento", value: "Impregnante + verniciatura ad acqua multistrato" },
      { label: "Ferramenta", value: "Cardini a muro o a telaio, ganci ferma-anta" },
      { label: "Manutenzione", value: "Riverniciabile senza carteggiatura" },
    ],
    colors: "Verde bosco, marrone noce, bianco, avorio, grigio antracite, tutti i colori RAL",
    features: ["Stecche orientabili", "Stecche fisse", "A libro", "Ante a battente"],
  },
};
