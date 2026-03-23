import type { ProductDetail } from "../product-details";
import {
  haierDetails,
  samsungDetails,
  aristonDetails,
  hermannDetails,
} from "../brand-product-details";

/* ── CLIMATIZZATORI — Haier / Samsung ────────────────────────── */

export const climatizzatoriDetails: Record<string, ProductDetail> = {
  ...Object.fromEntries(Object.entries(haierDetails).map(([k, v]) => [`Haier — ${k}`, v])),
  ...Object.fromEntries(Object.entries(samsungDetails).map(([k, v]) => [`Samsung — ${k}`, v])),
};

/* ── POMPE DI CALORE — Ariston ───────────────────────────────── */

export const pompeCaloreDetails: Record<string, ProductDetail> = {
  ...Object.fromEntries(Object.entries(aristonDetails).map(([k, v]) => [`Ariston — ${k}`, v])),
};

/* ── CALDAIE — Hermann ───────────────────────────────────────── */

export const caldaiaDetails: Record<string, ProductDetail> = {
  ...Object.fromEntries(Object.entries(hermannDetails).map(([k, v]) => [`Hermann — ${k}`, v])),
};

/* ── IMPIANTI FOTOVOLTAICI ─────────────────────────────────────── */

export const fotovoltaicoDetails: Record<string, ProductDetail> = {
  "Impianto Residenziale 3 kWp": {
    name: "Impianto Residenziale 3 kWp",
    brand: "Mood Abitare",
    segment: "Classic",
    description:
      "Impianto fotovoltaico da 3 kWp ideale per coppie e piccoli nuclei familiari con consumo annuo fino a 3.500 kWh. 8 pannelli monocristallini ad alta efficienza (>21%) con inverter ibrido predisposto per accumulo futuro. Copertura media del 50-60% del fabbisogno elettrico annuo.",
    highlight: "3 kWp con 8 pannelli — copertura 50-60% del fabbisogno, predisposto accumulo",
    specs: [
      { label: "Potenza", value: "3 kWp (8 pannelli da 400 Wp)" },
      { label: "Pannelli", value: "Monocristallino PERC, efficienza >21%" },
      { label: "Inverter", value: "Ibrido monofase con ottimizzatori" },
      { label: "Produzione annua", value: "3.600-4.200 kWh (Nord Italia)" },
      { label: "Garanzia pannelli", value: "25 anni su produzione (>80%)" },
      { label: "Detrazioni", value: "50% in 10 anni + Scambio Sul Posto" },
    ],
    colors: "Pannelli: full black, cornice nera / Inverter: bianco",
    features: ["Monitoraggio app", "Predisposto accumulo", "Ottimizzatori", "Detrazione 50%"],
  },
  "Impianto Residenziale 6 kWp": {
    name: "Impianto Residenziale 6 kWp",
    brand: "Mood Abitare",
    segment: "Design",
    description:
      "Impianto fotovoltaico da 6 kWp per famiglie con consumi medi-alti (5.000-7.000 kWh/anno). 15 pannelli monocristallini con inverter ibrido e predisposizione per accumulo batterie al litio. Ideale anche per abitazioni con pompa di calore o ricarica auto elettrica.",
    highlight: "6 kWp per famiglie — ideale con pompa di calore e ricarica auto elettrica",
    specs: [
      { label: "Potenza", value: "6 kWp (15 pannelli da 400 Wp)" },
      { label: "Pannelli", value: "Monocristallino PERC, efficienza >21,5%" },
      { label: "Inverter", value: "Ibrido trifase con gestione intelligente carichi" },
      { label: "Produzione annua", value: "7.200-8.400 kWh (Nord Italia)" },
      { label: "Superficie tetto", value: "Circa 28 m² orientamento sud" },
      { label: "Detrazioni", value: "50% in 10 anni + Scambio Sul Posto" },
    ],
    colors: "Pannelli: full black, cornice nera / Inverter: bianco o grigio",
    features: ["Monitoraggio app", "Gestione carichi", "Ricarica EV ready", "Trifase"],
  },
  "Impianto con Accumulo Batterie": {
    name: "Impianto con Accumulo Batterie",
    brand: "Mood Abitare",
    segment: "Premium",
    description:
      "Impianto fotovoltaico completo con sistema di accumulo a batterie al litio LFP (litio-ferro-fosfato) per massimizzare l'autoconsumo fino all'80-90%. L'energia prodotta di giorno viene immagazzinata per l'utilizzo serale e notturno, riducendo drasticamente la dipendenza dalla rete.",
    highlight: "Accumulo LFP — autoconsumo fino al 90%, indipendenza dalla rete",
    specs: [
      { label: "Potenza impianto", value: "Da 3 a 10 kWp personalizzabile" },
      { label: "Batteria", value: "Litio-ferro-fosfato (LFP) da 5 a 15 kWh" },
      { label: "Cicli di vita", value: ">6.000 cicli (circa 15 anni)" },
      { label: "Autoconsumo", value: "Fino all'80-90% del fabbisogno" },
      { label: "Backup", value: "Funzione anti-blackout opzionale (EPS)" },
      { label: "Monitoraggio", value: "App con dati produzione, consumo e accumulo" },
    ],
    colors: "Batteria: bianco, grigio / Pannelli: full black",
    features: ["Accumulo LFP", "Anti-blackout EPS", "Monitoraggio real-time", "Espandibile"],
  },
  "Impianto Premium Integrato": {
    name: "Impianto Premium Integrato",
    brand: "Mood Abitare",
    segment: "Top di gamma",
    description:
      "Soluzione integrata fotovoltaico + accumulo + pompa di calore + wallbox per ricarica auto elettrica. Gestione energetica intelligente che ottimizza automaticamente produzione, consumo, accumulo e cessione alla rete. Risparmio totale fino all'80% sulla bolletta energetica.",
    highlight: "Sistema integrato completo — fotovoltaico, accumulo, pompa di calore, wallbox",
    specs: [
      { label: "Fotovoltaico", value: "Da 6 a 15 kWp con ottimizzatori" },
      { label: "Accumulo", value: "Batteria LFP 10-20 kWh espandibile" },
      { label: "Pompa di calore", value: "Aria-acqua per riscaldamento e ACS" },
      { label: "Wallbox", value: "Ricarica auto fino a 22 kW, monofase o trifase" },
      { label: "Gestione", value: "Energy Manager AI per ottimizzazione automatica" },
      { label: "Risparmio", value: "Fino all'80% sulla bolletta energetica totale" },
    ],
    colors: "Pannelli full black, componenti bianco/grigio coordinati",
    features: ["Energy Manager AI", "Wallbox integrata", "Pompa di calore", "Chiavi in mano"],
  },
};

/* ── IMPIANTI ELETTRICI ────────────────────────────────────────── */

export const impiantiElettriciDetails: Record<string, ProductDetail> = {
  "Impianto Civile Nuovo": {
    name: "Impianto Elettrico Civile Nuovo",
    brand: "Mood Abitare",
    segment: "Design",
    description:
      "Progettazione e realizzazione completa dell'impianto elettrico per nuove costruzioni o ristrutturazioni totali. Quadro elettrico certificato con protezioni magnetotermiche e differenziali di ultima generazione. Predisposizione per domotica, ricarica auto elettrica e impianto fotovoltaico.",
    highlight: "Impianto completo a norma CEI 64-8 — predisposto domotica e ricarica EV",
    specs: [
      { label: "Normativa", value: "CEI 64-8, livello 1, 2 o 3" },
      { label: "Quadro elettrico", value: "Magnetotermici + differenziali tipo A/AC" },
      { label: "Cablaggio", value: "Cavi N07V-K in guaine corrugate" },
      { label: "Predisposizioni", value: "Domotica KNX/Zigbee, wallbox, fotovoltaico" },
      { label: "Prese e punti luce", value: "Secondo progetto, serie civili a scelta" },
      { label: "Certificazione", value: "DiCo (Dichiarazione di Conformità)" },
    ],
    colors: "Serie civili: bianco, antracite, argento, titanio, vetro (Vimar, BTicino, Gewiss)",
    features: ["CEI 64-8", "Predisposizione domotica", "Wallbox ready", "DiCo inclusa"],
  },
  "Adeguamento e Messa a Norma": {
    name: "Adeguamento e Messa a Norma",
    brand: "Mood Abitare",
    segment: "Sicurezza",
    description:
      "Adeguamento dell'impianto elettrico esistente alla normativa vigente CEI 64-8 con sostituzione del quadro elettrico, verifica della messa a terra e installazione di protezioni differenziali. Intervento fondamentale per la sicurezza della famiglia e necessario per pratiche catastali e compravendita.",
    highlight: "Messa a norma CEI 64-8 — fondamentale per sicurezza e compravendita",
    specs: [
      { label: "Intervento", value: "Verifica e adeguamento impianto esistente" },
      { label: "Quadro elettrico", value: "Sostituzione con protezioni moderne" },
      { label: "Messa a terra", value: "Verifica e adeguamento dispersore" },
      { label: "Differenziali", value: "Tipo A da 30 mA per protezione persone" },
      { label: "Cavi", value: "Sostituzione tratti non a norma o deteriorati" },
      { label: "Certificazione", value: "DiCo + DiRi (se applicabile)" },
    ],
    colors: "Quadro: plastica bianca o grigia / Serie civili: a scelta del cliente",
    features: ["DiCo inclusa", "Verifica messa a terra", "Differenziali 30 mA", "Perizia inclusa"],
  },
  "Impianto Domotico": {
    name: "Impianto Domotico",
    brand: "Mood Abitare",
    segment: "Premium",
    description:
      "Impianto elettrico con sistema domotico integrato per il controllo intelligente di luci, tapparelle, clima, irrigazione e sicurezza tramite smartphone, assistenti vocali e scenari automatizzati. Protocolli aperti KNX, Zigbee o Wi-Fi per massima compatibilità e aggiornabilità futura.",
    highlight: "Casa intelligente — controllo totale da smartphone e voce, scenari automatici",
    specs: [
      { label: "Protocollo", value: "KNX, Zigbee 3.0, Wi-Fi, Thread/Matter" },
      { label: "Controllo", value: "App, assistenti vocali (Alexa, Google, Siri)" },
      { label: "Automazioni", value: "Luci, tapparelle, clima, irrigazione, sicurezza" },
      { label: "Scenari", value: "Buongiorno, buonanotte, uscita, vacanza, cinema" },
      { label: "Sensori", value: "Presenza, luminosità, temperatura, apertura" },
      { label: "Espandibilità", value: "Aggiungibile nel tempo senza opere murarie" },
    ],
    colors: "Touch panel: bianco, nero, vetro / Comandi: serie civili premium",
    features: ["Controllo vocale", "Scenari automatici", "KNX/Zigbee", "Espandibile"],
  },
  "Ricarica Auto Elettrica": {
    name: "Wallbox — Ricarica Auto Elettrica",
    brand: "Mood Abitare",
    segment: "Design",
    description:
      "Installazione di wallbox per ricarica domestica di auto elettriche e plug-in hybrid. Potenza da 3,7 kW (monofase) a 22 kW (trifase) con gestione intelligente dei carichi per evitare distacchi. Compatibile con tutti i veicoli elettrici, integrabile con impianto fotovoltaico.",
    highlight: "Wallbox da 3,7 a 22 kW — gestione carichi intelligente, solar charging",
    specs: [
      { label: "Potenza", value: "3,7 / 7,4 / 11 / 22 kW selezionabile" },
      { label: "Connettore", value: "Tipo 2 (standard europeo)" },
      { label: "Gestione carichi", value: "Bilanciamento dinamico per evitare distacchi" },
      { label: "Solar charging", value: "Ricarica con surplus fotovoltaico (se presente)" },
      { label: "Connettività", value: "Wi-Fi, Bluetooth, app dedicata" },
      { label: "Protezioni", value: "Differenziale tipo B integrato (DC 6 mA)" },
    ],
    colors: "Bianco, nero, antracite (varia per modello)",
    features: ["Tipo 2", "Solar charging", "App dedicata", "Differenziale DC integrato"],
  },
};

/* ── IMPIANTI IDRAULICI ────────────────────────────────────────── */

export const impiantiIdrauliciDetails: Record<string, ProductDetail> = {
  "Impianto Idraulico Completo": {
    name: "Impianto Idraulico Completo",
    brand: "Mood Abitare",
    segment: "Design",
    description:
      "Progettazione e realizzazione dell'impianto idraulico completo per bagno, cucina e lavanderia. Distribuzione a collettore con tubazioni multistrato per gestione indipendente di ogni utenza. Collaudo in pressione a 10 bar prima della chiusura delle tracce per garanzia totale sull'impianto.",
    highlight: "Distribuzione a collettore — gestione indipendente, collaudo a 10 bar",
    specs: [
      { label: "Distribuzione", value: "A collettore con intercettazione per zona" },
      { label: "Tubazioni", value: "Multistrato PEX-AL-PEX certificato" },
      { label: "Collaudo", value: "Prova in pressione a 10 bar per 24 ore" },
      { label: "Scarichi", value: "PP fonoassorbente o PVC pesante" },
      { label: "Produzione ACS", value: "Predisposizione boiler, pompa di calore, solare" },
      { label: "Certificazione", value: "Dichiarazione di conformità UNI" },
    ],
    colors: "Tubazioni: multistrato bianco-blu / Collettori: ottone o acciaio inox",
    features: ["Collettore", "Multistrato PEX", "Collaudo 10 bar", "DiCo inclusa"],
  },
  "Riscaldamento a Pavimento": {
    name: "Riscaldamento a Pavimento Radiante",
    brand: "Mood Abitare",
    segment: "Premium",
    description:
      "Impianto di riscaldamento a pavimento radiante con pannelli isolanti preformati e tubo in PE-Xc. Distribuzione uniforme del calore dal basso verso l'alto per il massimo comfort con temperature di mandata basse (30-35°C), ideale in abbinamento a pompa di calore e fotovoltaico.",
    highlight: "Calore uniforme dal basso — temperatura mandata 30-35°C, ideale con pompa di calore",
    specs: [
      { label: "Pannello isolante", value: "EPS 200 con bugne preformate, R ≥ 1,25 m²K/W" },
      { label: "Tubo", value: "PE-Xc con barriera ossigeno, Ø 17×2 mm" },
      { label: "Interasse", value: "Da 10 a 20 cm regolabile per zona" },
      { label: "Temperatura mandata", value: "30-35°C (bassa temperatura)" },
      { label: "Massetto", value: "Autolivellante o tradizionale, spessore 5-6 cm" },
      { label: "Regolazione", value: "Termostato per zona con testine elettrotermiche" },
    ],
    colors: "Non visibile (sotto pavimento) — termostati: bianco, nero, touch screen",
    features: ["Bassa temperatura", "Comfort uniforme", "Zonale", "Pompa di calore ready"],
  },
  "Sostituzione Tubazioni": {
    name: "Sostituzione Tubazioni",
    brand: "Mood Abitare",
    segment: "Classic",
    description:
      "Sostituzione delle tubazioni esistenti (piombo, ferro zincato, rame datato) con nuove tubazioni in multistrato PEX-AL-PEX o rame ricotto. Intervento necessario per impianti con più di 30 anni per eliminare rischi sanitari, perdite occulte e incrostazioni calcaree.",
    highlight: "Sostituzione piombo/ferro — elimina rischi sanitari e perdite occulte",
    specs: [
      { label: "Rimozione", value: "Tubazioni in piombo, ferro zincato, rame datato" },
      { label: "Nuove tubazioni", value: "Multistrato PEX-AL-PEX o rame ricotto" },
      { label: "Giunzioni", value: "A pressare (press-fitting) per tenuta garantita" },
      { label: "Collaudo", value: "Prova in pressione 10 bar prima della chiusura" },
      { label: "Addolcitore", value: "Consigliato per protezione dalla calcare" },
      { label: "Certificazione", value: "Dichiarazione di conformità UNI" },
    ],
    colors: "Multistrato: bianco / Rame: naturale",
    features: ["Press-fitting", "Collaudo 10 bar", "DiCo inclusa", "Addolcitore opzionale"],
  },
  "Ricircolo Acqua Calda Sanitaria": {
    name: "Sistema di Ricircolo ACS",
    brand: "Mood Abitare",
    segment: "Comfort",
    description:
      "Installazione di sistema di ricircolo per acqua calda sanitaria istantanea in tutti i punti di erogazione. Elimina l'attesa e lo spreco di acqua fredda all'apertura del rubinetto. Pompa di ricircolo a basso consumo con timer e termostato per funzionamento solo quando serve.",
    highlight: "Acqua calda istantanea ovunque — elimina spreco, pompa a basso consumo",
    specs: [
      { label: "Pompa", value: "Circolatore a rotore bagnato, classe A" },
      { label: "Consumo", value: "5-8 W (meno di una lampadina LED)" },
      { label: "Timer", value: "Programmabile giornaliero/settimanale" },
      { label: "Termostato", value: "Regolabile 35-65°C con anti-legionella" },
      { label: "Risparmio idrico", value: "Fino a 15.000 litri/anno per famiglia" },
      { label: "Installazione", value: "Su impianto esistente, senza opere murarie" },
    ],
    colors: "Pompa: ottone/acciaio / Timer: bianco",
    features: ["Classe A", "Timer programmabile", "Anti-legionella", "Zero opere murarie"],
  },
};
