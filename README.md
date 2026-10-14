# Kopibok Nord-Odal – digitale Probeseite

Transkription des Kopibok for Nord-Odal fattigstyre (1846–1884),
Nasjonalarkivet, OFA/0418-311/B/Ba/L0001 – Vorsatz und Seite 1.

Beim Überfahren einer Zeile im Digitalisat erscheint die Transkription.
Ein Klick fixiert die Zeile; die Lesefassung rechts ist mit dem Bild verknüpft.

## Dateien

| Datei | Inhalt |
|---|---|
| `index.html` | Seite mit Betrachter, Tooltip und Lesefassung |
| `data.js` | Transkription, Kurzregesten und Zeilenkoordinaten |
| `Odal_1.jpg` | Digitalisat (2181 × 1728 px) |

## Auf GitHub Pages veröffentlichen

1. Auf GitHub ein neues Repository anlegen (z. B. `kopibok-nord-odal`, öffentlich).
2. Die drei Dateien hochladen: *Add file → Upload files*, dann *Commit changes*.
3. *Settings → Pages*: unter *Build and deployment* als Quelle
   *Deploy from a branch* wählen, Branch `main`, Ordner `/ (root)`, *Save*.
4. Nach ein bis zwei Minuten ist die Seite unter
   `https://<dein-benutzername>.github.io/kopibok-nord-odal/` erreichbar.

Lokal funktioniert die Seite auch ohne Server: einfach `index.html` im Browser öffnen.

## Transkription bearbeiten

Alles Inhaltliche steht in `data.js`. Jede Zeile hat die Form:

```js
{ entry: "e1846-01-27", y: 204,
  text: "te schematiske Oplysninger, saavel ved Fattigforsørgelsen i Nordre Oudalen i Aa-" },
```

- `text` – Zeilentext, Editionszeichen: `[?]` unsicher, `[…]` unleserlich,
  `[Wort?]` unsicher ergänzt, `~~Text~~` gestrichen
- `y` – Mitte der Zeile im Bild in Pixeln (Kästchen wird automatisch erzeugt)
- `box: [x1, y1, x2, y2]` – alternativ ein frei gesetztes Rechteck
- `margin` – Randnotiz/Datum, `note` – editorische Anmerkung

Mit „Zeilen anzeigen“ werden alle Bereiche eingeblendet – praktisch, um Koordinaten zu prüfen.

## Weitere Seiten

Für die nächsten Seiten lassen sich die Zeilenkoordinaten aus einem
Transkribus-Export (PAGE-XML) übernehmen; dann wird pro Seite eine eigene
`data`-Datei erzeugt und die Seite um eine Seitennavigation erweitert.
