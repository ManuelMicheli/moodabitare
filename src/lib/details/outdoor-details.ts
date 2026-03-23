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
  ...Object.fromEntries(Object.entries(persitDetails).map(([k, v]) => [`Persit — ${k}`, v])),
};

/* ── TENDE DA SOLE — Tendarredo ──────────────────────────────── */

export const tendeSoleDetails: Record<string, ProductDetail> = {
  ...Object.fromEntries(Object.entries(tendarredoTendeDetails).map(([k, v]) => [`Tendarredo — ${k}`, v])),
};

/* ── VETRATE PANORAMICHE — MC Slide ──────────────────────────── */

export const vetratePanoramicheDetails: Record<string, ProductDetail> = {
  ...Object.fromEntries(Object.entries(mcSlideDetails).map(([k, v]) => [`MC Slide — ${k}`, v])),
};

/* ── GAZEBI E STRUTTURE IN LEGNO ───────────────────────────────── */

export const gazebiDetails: Record<string, ProductDetail> = {
  "Gazebo Autoportante": {
    name: "Gazebo Autoportante",
    brand: "Mood Abitare",
    segment: "Classic",
    description:
      "Gazebo in legno lamellare autoportante con struttura a 4 o 6 pilastri e copertura a falde. Legno trattato in autoclave classe 3/4 per resistenza totale agli agenti atmosferici, insetti e funghi. Copertura disponibile in tegole, policarbonato o telo impermeabile con grondaia integrata.",
    highlight: "Autoportante in lamellare — trattamento autoclave classe 3/4",
    specs: [
      { label: "Struttura", value: "Legno lamellare GL24h certificato" },
      { label: "Trattamento", value: "Autoclave classe 3/4, impregnante a sali di rame" },
      { label: "Pilastri", value: "Sezione 12×12 cm o 14×14 cm" },
      { label: "Copertura", value: "Tegole canadesi, policarbonato o telo PVC" },
      { label: "Dimensioni", value: "Da 3×3 m a 6×8 m, completamente su misura" },
      { label: "Ancoraggio", value: "Staffe in acciaio zincato su plinti o pavimento" },
    ],
    colors: "Naturale, noce chiaro, noce scuro, grigio, bianco, miele, castagno",
    features: ["Autoportante", "Su misura", "Copertura a falde", "Grondaia integrata"],
  },
  "Carport in Legno": {
    name: "Carport in Legno",
    brand: "Mood Abitare",
    segment: "Design",
    description:
      "Tettoia per auto in legno lamellare con design moderno a falda singola o doppia. Struttura dimensionata per carichi neve e vento secondo normativa NTC 2018. Disponibile per 1, 2 o 3 posti auto con possibilità di chiusura laterale parziale o totale.",
    highlight: "Calcolato NTC 2018 — fino a 3 posti auto, chiusura laterale opzionale",
    specs: [
      { label: "Struttura", value: "Legno lamellare GL24h, travi principali e arcarecci" },
      { label: "Trattamento", value: "Autoclave + impregnante + finitura UV" },
      { label: "Dimensioni", value: "1 posto: 3×5 m / 2 posti: 6×5 m / 3 posti: 9×5 m" },
      { label: "Altezza utile", value: "Da 2,20 m a 3,00 m" },
      { label: "Copertura", value: "Policarbonato alveolare, lamiera, tegole" },
      { label: "Normativa", value: "Calcolo strutturale NTC 2018" },
    ],
    colors: "Naturale, noce, grigio antracite, bianco, castagno, personalizzato RAL",
    features: ["Falda singola o doppia", "Calcolo strutturale", "Chiusura laterale", "Grondaia integrata"],
  },
  "Pergolato Addossato": {
    name: "Pergolato Addossato",
    brand: "Mood Abitare",
    segment: "Classic",
    description:
      "Pergolato in legno lamellare addossato alla parete con travi a vista e copertura in policarbonato o telo retrattile. Soluzione ideale per proteggere terrazzi, ingressi e aree pranzo all'aperto. Fissaggio a muro con piastre in acciaio inox e tasselli chimici.",
    highlight: "Addossato a parete — travi a vista, copertura retrattile opzionale",
    specs: [
      { label: "Struttura", value: "Legno lamellare con fissaggio a muro" },
      { label: "Trattamento", value: "Autoclave classe 3 + verniciatura all'acqua" },
      { label: "Pilastri", value: "Sezione 12×12 cm con basi regolabili" },
      { label: "Copertura", value: "Policarbonato, telo PVC retrattile, canne" },
      { label: "Sporgenza max", value: "Fino a 5,00 m dalla parete" },
      { label: "Fissaggio", value: "Piastre inox + tasselli chimici certificati" },
    ],
    colors: "Naturale, noce chiaro, noce scuro, grigio, bianco, miele",
    features: ["Addossato a muro", "Travi a vista", "Telo retrattile opzionale", "Su misura"],
  },
  "Dehor Commerciale": {
    name: "Dehor Commerciale",
    brand: "Mood Abitare",
    segment: "Premium",
    description:
      "Struttura in legno lamellare per dehors di ristoranti, bar e attività commerciali. Progettazione completa con pratiche SCIA/permesso di costruire, calcolo strutturale e rendering 3D. Possibilità di chiusura con vetrate scorrevoli e impianto di riscaldamento integrato.",
    highlight: "Chiavi in mano — pratiche comunali, calcolo strutturale, rendering 3D",
    specs: [
      { label: "Struttura", value: "Legno lamellare GL24h o GL28h" },
      { label: "Chiusure", value: "Vetrate scorrevoli, teli avvolgibili, pannelli" },
      { label: "Pratiche", value: "SCIA, permesso di costruire, relazione strutturale" },
      { label: "Impianti", value: "Riscaldamento, illuminazione LED, prese elettriche" },
      { label: "Pavimentazione", value: "Pedana in legno o composito WPC" },
      { label: "Progettazione", value: "Render 3D fotorealistico incluso" },
    ],
    colors: "Tutte le finiture legno + laccato RAL per coordinamento brand",
    features: ["Chiavi in mano", "Vetrate scorrevoli", "Riscaldamento integrato", "Pratiche incluse"],
  },
};

/* ── PISCINE INTERRATE E FUORI TERRA ───────────────────────────── */

export const piscineDetails: Record<string, ProductDetail> = {
  "Interrata in Cemento Armato": {
    name: "Piscina Interrata in Cemento Armato",
    brand: "Mood Abitare",
    segment: "Premium",
    description:
      "Piscina interrata in cemento armato gettato in opera con impermeabilizzazione multistrato e rivestimento in PVC armato, mosaico o pietra naturale. Progettazione completamente su misura con rendering 3D, scavo, struttura, impianto di filtrazione e accessori. La soluzione più duratura e personalizzabile.",
    highlight: "Cemento armato su misura — la soluzione più duratura e personalizzabile",
    specs: [
      { label: "Struttura", value: "Cemento armato C25/30 con rete elettrosaldata" },
      { label: "Impermeabilizzazione", value: "Guaina bituminosa + membrana PVC" },
      { label: "Rivestimento", value: "PVC armato 1,5 mm, mosaico, pietra ricostruita" },
      { label: "Filtrazione", value: "A sabbia con pompa a velocità variabile" },
      { label: "Profondità", value: "Da 1,20 m a 2,50 m, fondo piano o degradante" },
      { label: "Garanzia struttura", value: "10 anni sulla struttura in c.a." },
    ],
    colors: "Azzurro, sabbia, grigio, bianco, verde acqua, mosaico personalizzato",
    features: ["Su misura", "Render 3D", "Fondo degradante", "Scala romana opzionale"],
  },
  "Interrata Prefabbricata": {
    name: "Piscina Interrata Prefabbricata",
    brand: "Mood Abitare",
    segment: "Design",
    description:
      "Piscina interrata con pannelli modulari in acciaio zincato e rivestimento in liner PVC armato. Installazione rapida in 10-15 giorni lavorativi con costi contenuti rispetto al cemento armato. Forme rettangolari, ovali o a fagiolo con profondità uniforme o variabile.",
    highlight: "Installazione rapida 10-15 giorni — pannelli modulari in acciaio zincato",
    specs: [
      { label: "Struttura", value: "Pannelli in acciaio zincato a caldo" },
      { label: "Rivestimento", value: "Liner PVC armato 0,75 mm (75/100)" },
      { label: "Dimensioni", value: "Da 4×8 m a 5×12 m, forme personalizzabili" },
      { label: "Profondità", value: "Da 1,20 m a 1,80 m uniforme o variabile" },
      { label: "Filtrazione", value: "Gruppo filtrante a sabbia completo" },
      { label: "Tempistica", value: "10-15 giorni lavorativi dall'inizio scavo" },
    ],
    colors: "Liner: azzurro, sabbia, grigio perla, verde Caraibi, mosaico stampato",
    features: ["Pannelli modulari", "Installazione rapida", "Costo contenuto", "Forme personalizzabili"],
  },
  "Fuori Terra": {
    name: "Piscina Fuori Terra",
    brand: "Mood Abitare",
    segment: "Comfort",
    description:
      "Piscina fuori terra in acciaio con rivestimento esterno in legno composito WPC o pannelli effetto pietra. Nessuno scavo necessario, installazione in 3-5 giorni su superficie piana. Struttura rinforzata con montanti verticali e traversi orizzontali per massima stabilità.",
    highlight: "Nessuno scavo — installazione in 3-5 giorni, rivestimento in legno WPC",
    specs: [
      { label: "Struttura", value: "Acciaio zincato con montanti rinforzati" },
      { label: "Rivestimento esterno", value: "WPC effetto legno o pannelli effetto pietra" },
      { label: "Liner", value: "PVC 0,60 mm con profilo agganciato (hung liner)" },
      { label: "Dimensioni", value: "Da 3×5 m a 4×8 m, rotonda o ovale disponibile" },
      { label: "Profondità", value: "1,20 m o 1,32 m" },
      { label: "Filtrazione", value: "Gruppo filtrante a sabbia o a cartuccia" },
    ],
    colors: "Esterno: legno naturale, grafite, pietra grigia / Liner: azzurro, sabbia",
    features: ["Nessuno scavo", "Installazione rapida", "WPC effetto legno", "Smontabile"],
  },
  "Piscina con Copertura Automatica": {
    name: "Piscina con Copertura Automatica",
    brand: "Mood Abitare",
    segment: "Top di gamma",
    description:
      "Sistema di copertura automatica a tapparella o a barre integrato nella struttura della piscina. La copertura si avvolge automaticamente in un vano dedicato, garantendo sicurezza (norma NF P90-308), riduzione dell'evaporazione e mantenimento della temperatura dell'acqua.",
    highlight: "Copertura automatica integrata — sicurezza NF P90-308, risparmio energetico",
    specs: [
      { label: "Tipologia", value: "Tapparella a doghe in PVC o policarbonato" },
      { label: "Motorizzazione", value: "Sommersa o fuori acqua, telecomando incluso" },
      { label: "Sicurezza", value: "Conforme NF P90-308 (anti-annegamento)" },
      { label: "Risparmio", value: "Riduce evaporazione dell'80% e consumo chimico" },
      { label: "Portata", value: "Sostiene il peso di un bambino" },
      { label: "Integrazione", value: "Vano avvolgimento incassato nel bordo vasca" },
    ],
    colors: "Doghe: bianco, azzurro, grigio, solare (trasparente), bicolore",
    features: ["Motorizzata", "Telecomando", "Sicurezza anti-annegamento", "Risparmio energetico"],
  },
};

/* ── RIVESTIMENTO PISCINE ESISTENTI ────────────────────────────── */

export const rivestimentoPiscineDetails: Record<string, ProductDetail> = {
  "Rivestimento in PVC Armato": {
    name: "Rivestimento in PVC Armato",
    brand: "Mood Abitare",
    segment: "Design",
    description:
      "Sostituzione del rivestimento esistente con membrana in PVC armato da 1,5 mm saldata a caldo in opera. Il PVC armato è la soluzione più diffusa per rinnovare piscine grazie alla rapidità di posa, impermeabilizzazione integrata e ampia scelta di colori e fantasie.",
    highlight: "PVC armato 1,5 mm saldato a caldo — impermeabilizzazione integrata",
    specs: [
      { label: "Materiale", value: "PVC armato (rinforzato in poliestere) 1,5 mm" },
      { label: "Saldatura", value: "A caldo con aria calda, giunti sovrapposti 5 cm" },
      { label: "Impermeabilizzazione", value: "Integrata nella membrana stessa" },
      { label: "Resistenza UV", value: "Stabilizzato UV, garanzia colore 10 anni" },
      { label: "Tempistica", value: "5-8 giorni lavorativi" },
      { label: "Garanzia", value: "10 anni sulla tenuta della saldatura" },
    ],
    colors: "Azzurro, sabbia, grigio perla, bianco, verde Caraibi, mosaico stampato, pietra",
    features: ["Saldatura a caldo", "Impermeabilizzazione integrata", "Anti-UV", "Antiscivolo opzionale"],
  },
  "Rivestimento in Mosaico": {
    name: "Rivestimento in Mosaico",
    brand: "Mood Abitare",
    segment: "Premium",
    description:
      "Rivestimento in mosaico vetroso o ceramico posato su rete per un risultato estetico di altissimo livello. Ogni tessera riflette la luce creando giochi cromatici unici. Richiede rasatura del fondo esistente e impermeabilizzazione con malta cementizia bicomponente prima della posa.",
    highlight: "Mosaico vetroso — giochi di luce unici, estetica senza compromessi",
    specs: [
      { label: "Materiale", value: "Mosaico vetroso o ceramico su rete 30×30 cm" },
      { label: "Tessere", value: "2,5×2,5 cm o 5×5 cm, spessore 4-6 mm" },
      { label: "Impermeabilizzazione", value: "Malta cementizia bicomponente sotto mosaico" },
      { label: "Fugatura", value: "Epossidica bicomponente antimuffe" },
      { label: "Tempistica", value: "10-15 giorni lavorativi" },
      { label: "Garanzia", value: "Garanzia su impermeabilizzazione e posa" },
    ],
    colors: "Monocolore, sfumati, degradé, disegni personalizzati, bordi decorativi",
    features: ["Mosaico vetroso", "Fugatura epossidica", "Disegni personalizzati", "Bordi decorativi"],
  },
  "Rivestimento in Pietra Ricostruita": {
    name: "Rivestimento in Pietra Ricostruita",
    brand: "Mood Abitare",
    segment: "Design",
    description:
      "Rivestimento in pietra ricostruita antiscivolo per bordi e pareti della piscina. Effetto naturale con la praticità di un materiale calibrato e di facile posa. Ideale per piscine con stile rustico o naturale, disponibile in diverse texture e colorazioni.",
    highlight: "Effetto pietra naturale — antiscivolo certificato, posa semplificata",
    specs: [
      { label: "Materiale", value: "Pietra ricostruita in cemento alleggerito" },
      { label: "Superficie", value: "Antiscivolo certificato R11/R12" },
      { label: "Spessore", value: "Da 2 a 4 cm" },
      { label: "Bordo piscina", value: "Pezzi speciali per bordo, angolo e scala" },
      { label: "Resistenza", value: "Gelo-disgelo, cloro, raggi UV" },
      { label: "Tempistica", value: "7-10 giorni lavorativi" },
    ],
    colors: "Travertino, arenaria, ardesia, quarzite, pietra di Trani, personalizzato",
    features: ["Antiscivolo R11", "Resistente al cloro", "Gelo-disgelo", "Pezzi speciali bordo"],
  },
};

/* ── ARREDO GIARDINO ───────────────────────────────────────────── */

export const arredoGiardinoDetails: Record<string, ProductDetail> = {
  "Set Pranzo da Esterno": {
    name: "Set Pranzo da Esterno",
    brand: "Mood Abitare",
    segment: "Design",
    description:
      "Set tavolo e sedie per pranzo all'aperto in alluminio verniciato, teak massello o rattan sintetico intrecciato a mano. Strutture trattate anti-UV e anti-intemperie per resistere a sole, pioggia e gelo senza manutenzione. Tavoli allungabili da 6 a 12 posti disponibili.",
    highlight: "Anti-UV e anti-intemperie — zero manutenzione, tavoli allungabili fino a 12 posti",
    specs: [
      { label: "Materiali struttura", value: "Alluminio verniciato, teak FSC, acciaio inox" },
      { label: "Piano tavolo", value: "HPL, ceramica, teak, vetro temperato" },
      { label: "Trattamento", value: "Verniciatura a polvere anti-UV, teak oliato" },
      { label: "Dimensioni tavolo", value: "Da 90×90 cm a 200×100 cm, allungabili" },
      { label: "Sedute", value: "Impilabili, pieghevoli o fisse con braccioli" },
      { label: "Garanzia", value: "3 anni su struttura, 2 anni su tessuti" },
    ],
    colors: "Antracite, bianco, tortora, bronzo, teak naturale, grigio chiaro",
    features: ["Tavolo allungabile", "Sedie impilabili", "Anti-UV", "Zero manutenzione"],
  },
  "Divani e Lounge da Giardino": {
    name: "Divani e Lounge da Giardino",
    brand: "Mood Abitare",
    segment: "Premium",
    description:
      "Divani modulari e set lounge per giardino in alluminio e tessuto olefinico idrorepellente. Cuscini in schiuma Quick Dry che non trattiene l'acqua e asciuga in poche ore. Configurazioni modulari componibili per creare l'area relax perfetta.",
    highlight: "Cuscini Quick Dry — modulari componibili, tessuto idrorepellente",
    specs: [
      { label: "Struttura", value: "Alluminio verniciato a polvere o rattan sintetico PE" },
      { label: "Imbottitura", value: "Schiuma Quick Dry a cellule aperte" },
      { label: "Tessuto", value: "Olefinico idrorepellente, anti-UV, antimacchia" },
      { label: "Configurazioni", value: "Angolare, lineare, isola, pouf singoli" },
      { label: "Accessori", value: "Tavolino integrato, cuscini decorativi, telo copri-set" },
      { label: "Garanzia", value: "3 anni su struttura, 2 anni su tessuti" },
    ],
    colors: "Struttura: antracite, bianco, bronzo / Tessuti: grigio, tortora, écru, verde salvia",
    features: ["Modulare", "Quick Dry", "Idrorepellente", "Anti-UV"],
  },
  "Barbecue e Cucine Outdoor": {
    name: "Barbecue e Cucine Outdoor",
    brand: "Mood Abitare",
    segment: "Premium",
    description:
      "Barbecue a gas, carbonella e pellet con piani di lavoro in acciaio inox e strutture in muratura o acciaio. Cucine outdoor complete con lavello, piano cottura, forno e frigorifero integrato. Progettazione su misura per creare l'angolo cottura esterno perfetto.",
    highlight: "Cucine outdoor complete — progettazione su misura, acciaio inox",
    specs: [
      { label: "Tipologie", value: "Gas, carbonella, pellet, forno a legna, misto" },
      { label: "Piano di lavoro", value: "Acciaio inox AISI 304, granito, pietra lavica" },
      { label: "Struttura", value: "Muratura rivestita, acciaio verniciato, legno" },
      { label: "Accessori", value: "Lavello, frigorifero, cassetti, cappa aspirante" },
      { label: "Allacci", value: "Gas metano/GPL, acqua, scarico, elettricità" },
      { label: "Progettazione", value: "Su misura con render 3D" },
    ],
    colors: "Acciaio inox, antracite, pietra naturale, legno, personalizzato",
    features: ["Su misura", "Acciaio inox AISI 304", "Forno integrato", "Render 3D"],
  },
  "Complementi e Illuminazione": {
    name: "Complementi e Illuminazione",
    brand: "Mood Abitare",
    segment: "Comfort",
    description:
      "Complementi d'arredo per esterni: fioriere, fontane decorative, illuminazione LED a incasso e da giardino, docce solari e accessori coordinati. Tutti i prodotti sono selezionati per resistenza agli agenti atmosferici e design coordinabile con l'arredo principale.",
    highlight: "Illuminazione LED, docce solari, fioriere — tutto coordinato e resistente",
    specs: [
      { label: "Illuminazione", value: "LED da incasso, paletti, applique, segnapasso" },
      { label: "Protezione", value: "IP65 o superiore per uso esterno" },
      { label: "Alimentazione", value: "230V, 12V bassa tensione, solare" },
      { label: "Fioriere", value: "Acciaio corten, cemento alleggerito, rattan" },
      { label: "Docce", value: "Solari in acciaio inox, acqua calda senza allacci" },
      { label: "Garanzia", value: "2 anni su tutti i prodotti" },
    ],
    colors: "Variabile per prodotto: antracite, corten, bianco, acciaio naturale",
    features: ["IP65", "Solare", "Corten", "Coordinabile"],
  },
};

