/*
  Transkription: Kopibok for Nord-Odal fattigstyre, 1846–1884
  Nasjonalarkivet, OFA/0418-311/B/Ba/L0001, Doppelseite 1 (Vorsatz + S. 1)

  Koordinaten in Pixeln des Bildes Odal_1.jpg (2181 × 1728).
  box: [x1, y1, x2, y2]

  Editionszeichen im Text:
    [?]        unsichere Lesung des vorangehenden Wortes
    […]        unleserliche Stelle
    [Text?]    unsicher ergänzte Lesung
    ~~Text~~   im Original gestrichen
*/

const PAGE = {
  image: "Odal_1.jpg",
  width: 2181,
  height: 1728,
  title: "Kopibok for Nord-Odal fattigstyre",
  subtitle: "Vorsatz und Seite 1 · 1846",
  signature: "Nasjonalarkivet, Nord-Odal kommune, Fattigstyret, OFA/0418-311/B/Ba/L0001"
};

/* Kurzregesten der Einträge (für die Leseansicht) */
const ENTRIES = [
  { id: "vorsatz", date: "", label: "Vorsatz",
    regest: "Buchbinderetikett und Titel des Kopiebuchs." },
  { id: "e1846-01-27", date: "27. Januar 1846", label: "An das Amt Hedemarken",
    regest: "Übersendung der statistischen Schemata zur Armenversorgung 1841–45 sowie zu Viehbestand und Aussaat 1845. Erklärung: Die Zahl der Armen stieg nach harten Jahren mit Mangel und überhandnehmender Bettelei; die Ausgaben blieben dennoch stabil, weil gute Jahre Arbeitsverdienst brachten und die Einzelbeiträge gesenkt werden konnten." },
  { id: "e1846-07-06", date: "6. Juli 1846", label: "Attest Holterske Legat 1844",
    regest: "Bescheinigung, dass der Anteil Nordre Oudalens an den Renten des Holterske Legats für 1844 an die bedürftigsten Armen zum Kauf von Saatkorn verteilt wurde." },
  { id: "e1846-07-27", date: "27. Juli 1846", label: "Attest Holterske Legat 1845",
    regest: "Bescheinigung über 30 Spd 77 ß aus den Legatsrenten 1845, verteilt gemäß § 21 der Fundats zum Kauf von Saatkorn; im Namen der Kommission gezeichnet von Nørregaard. Randvermerk: an Propst Kynning." },
  { id: "e1846-11-16", date: "16. November 1846", label: "An die Armenverwaltung Strøm",
    regest: "Weiterleitung eines Schreibens auf Ersuchen von Pastor Gude, da die betreffenden Personen in Nordre Oudalen völlig unbekannt sind." },
  { id: "e1846-12-14", date: "14. Dezember 1846", label: "An Lensmann Herstette",
    regest: "Übersendung einer Abschrift gemäß § 40 des Armengesetzes vom 20. September 1845 (Fortsetzung auf der nächsten Seite)." }
];

/* Zeilen bzw. Bildbereiche */
const LINES = [
  /* --- linke Seite (Vorsatz) --- */
  { entry: "vorsatz", box: [115, 60, 290, 165], kind: "label",
    text: "Faaes hos / BOGBINDER / J. C. Hoppe [?] / Christiania" ,
    note: "Gedrucktes Buchbinderetikett" },
  { entry: "vorsatz", box: [380, 650, 600, 775], kind: "title",
    text: "Copiebog." },

  /* --- rechte Seite, Kopf --- */
  { entry: "e1846-01-27", y: 96, margin: "1846.", kind: "head",
    text: "Aaret 1846.", note: "Seitenzahl rechts oben: 1" },

  /* --- 27. Januar 1846 --- */
  { entry: "e1846-01-27", y: 167, margin: "27 Januar",
    text: "Tilskrevet Hedemarkens Amt saalydende: De i Amtscirkulæret af 8de Octbr f.A. begjer-" },
  { entry: "e1846-01-27", y: 204,
    text: "te schematiske Oplysninger, saavel ved Fattigforsørgelsen i Nordre Oudalen i Aa-" },
  { entry: "e1846-01-27", y: 239,
    text: "rene 1841–45 m.m., som over Kreaturholdet og Udsæden i Aaret 1845, giver jeg" },
  { entry: "e1846-01-27", y: 280,
    text: "mig den Ære hermed at indsende. I Sagens Anledning finder jeg mig",
    note: "„indsende“ im Original mit dunklerer Tinte überschrieben" },
  { entry: "e1846-01-27", y: 318,
    text: "dog foranlediget til at gjøre følgende Bemærkninger: At de Fattiges Antal" },
  { entry: "e1846-01-27", y: 358,
    text: "har tiltaget noget i det sidste Qvinqvennium, sammenholdt med det næstfore-" },
  { entry: "e1846-01-27", y: 397,
    text: "gaaende, er formeentlig ene og alene at tilskrive de haarde [?] i forrige" },
  { entry: "e1846-01-27", y: 435,
    text: "Qvinqvennium paa hverandre følgende Aar, der havde Mangel […]" },
  { entry: "e1846-01-27", y: 475,
    text: "saa og et overhaandtagende Tiggerie til Følge. Forsaavidt […], at man" },
  { entry: "e1846-01-27", y: 519,
    text: "[…] fandt Fattigcommissionen det nødvendigt at antage til stadig" },
  { entry: "e1846-01-27", y: 557,
    text: "Forsørgelse Flere, som forhen nøde ingen eller i alt Fald kun partiel Un-" },
  { entry: "e1846-01-27", y: 597,
    text: "derstøttelse; deraf altsaa Tilvæxten i de Fattiges Antal, som især viser sig" },
  { entry: "e1846-01-27", y: 636,
    text: "kjendelig i Tabellens 2det Rubrum, hvori de Fattiges Antal findes an-" },
  { entry: "e1846-01-27", y: 674,
    text: "førte, der nyde Understøttelse udenfor Huset. Tilvæxten har dog ikke" },
  { entry: "e1846-01-27", y: 712,
    text: "bevirket nogen synderlig Forøgelse i Fattigbyrden [?], der har holdt sig" },
  { entry: "e1846-01-27", y: 755,
    text: "omtr. paa samme Standpunkt i begge respective Qvinqvennier; men denne" },
  { entry: "e1846-01-27", y: 796,
    text: "tilsyneladende Anomali lader sig let forklare, naar bemærkes, at det sidste" },
  { entry: "e1846-01-27", y: 835,
    text: "Qvinqvenniums Aaringer alle have faldet gode, altsaa givet god Adgang" },
  { entry: "e1846-01-27", y: 873,
    text: "til Arbeidsfortjeneste; hvoraf igjen følger, at Fattigcommissionen har" },
  { entry: "e1846-01-27", y: 911,
    text: "kunnet nedsætte de forhen ydede Bidrag til de Fattige; medens den dog ikke" },
  { entry: "e1846-01-27", y: 950,
    text: "saae nogen Udvei [?] til at foretage Indskrænkning i de Forsørgedes Tal. –" },

  /* --- 6. Juli 1846 --- */
  { entry: "e1846-07-06", y: 999, margin: "6 Juli",
    text: "[…] Skrivelse af 30 Juni 1846 (se Journal No 4/1846) oversendt [?] […]" },
  { entry: "e1846-07-06", y: 1036,
    text: "følgende Attest: At den Andeel i Renterne af det Holterske Legat, der i Aaret" },
  { entry: "e1846-07-06", y: 1071,
    text: "1844 tilfaldt Nordre Oudalen, er af Fattigcommissionen uddeelt til Præstegjel-" },
  { entry: "e1846-07-06", y: 1107,
    text: "dets mest trængende Fattige til Sædekorns Indkjøb, attesteres herved. –" },

  /* --- 27. Juli 1846 --- */
  { entry: "e1846-07-27", y: 1150, margin: "27 Juli",
    text: "Den i Skrivelse af 22 Juli […] begjerte [?] Attest oversendtes [?] herved […]" },
  { entry: "e1846-07-27", y: 1188,
    text: "Attesten lød saaledes: At 30 Spd 77 ß af det Holterske Legats Renter for Aaret" },
  { entry: "e1846-07-27", y: 1228,
    text: "1845 ere af Nordre Oudals Fattigcommission uddeelte i Overeensstemmelse" },
  { entry: "e1846-07-27", y: 1266,
    text: "med Fundatsens § 21 til Sædekorns Indkjøb, attesteres herved paa Com-" },
  { entry: "e1846-07-27", y: 1304,
    text: "missionens Vegne. – Nørregaard.",
    note: "Randvermerk rechts, andere Tinte: „til Hr Provst Kynning“" },

  /* --- 16. November 1846 --- */
  { entry: "e1846-11-16", y: 1366, margin: "16 Novbr",
    text: "Oversendt Strøms Fattigvæsensbestyrelse den i Journalen under No 6 indførte" },
  { entry: "e1846-11-16", y: 1405,
    text: "Skrivelse af 2den Novbr 1846 med saadan Paategning: „Oversendes herved, ifølge" },
  { entry: "e1846-11-16", y: 1441,
    text: "ovenstaaende Begjering af Pastor Gude, til Strøms ærede Fattigvæsensbestyrel-" },
  { entry: "e1846-11-16", y: 1478,
    text: "se, da Angjeldende ere aldeles ubekjendte Personer i Nordre Oudalens Præste-" },
  { entry: "e1846-11-16", y: 1513,
    text: "gjeld.“ –" },

  /* --- 14. Dezember 1846 --- */
  { entry: "e1846-12-14", y: 1568, margin: "14de Decbr",
    text: "Tilskrevet Lensmand Herstette [?] saalydende: Jeg har den Ære herved ærbødigst, i Henhold til" },
  { entry: "e1846-12-14", y: 1606,
    text: "Lov af 20 Septbr 1845 § 40, at oversende Hr Lensmanden Afskrift af Nordre Oudals",
    note: "Fortsetzung auf der nächsten Seite" }
];

/* Zeilen mit nur y-Wert bekommen die Standardbreite der Textspalte inkl. Datumsrand */
LINES.forEach(l => {
  if (!l.box) l.box = [1030, l.y - 18, 2100, l.y + 19];
});
