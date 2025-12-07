# Design System: Promptotyping Explainer

Dokumentation der visuellen Sprache und Designprinzipien.

---

## Kernkonzept: Links-Rechts-Transformation

Die zentrale Designmetapher spiegelt den Promptotyping-Prozess selbst wider. Die horizontale Achse visualisiert den Weg von rohem Input zu verdichtetem Output.

### Das Prinzip

```
┌─────────────────────────────────┬────────────────────┐
│                                 │                    │
│   TEXT (Slate)                  │   BILD (Farbig)    │
│   Erklärend, ausführlich        │   Verdichtet       │
│   Weißer Hintergrund            │   Grauer Rahmen    │
│   Blocksatz                     │                    │
│                                 │   Caption          │
│                                 │   (kursiv, klein)  │
└─────────────────────────────────┴────────────────────┘
        INPUT                           OUTPUT
        (diffus)                        (kristallisiert)
```

### Semantik der Richtung

| Links | Rechts |
|-------|--------|
| Slate-Töne, gedämpft | Terracotta-Akzente, intensiv |
| Unstrukturiert, erklärend | Strukturiert, verdichtet |
| Fließtext in Absätzen | Bild mit Kernaussage |
| Menschlicher Input | LLM-transformiertes Ergebnis |
| Rohdaten | Destillat |

### Warum diese Metapher?

Die Leserichtung (links → rechts) entspricht dem Verarbeitungsfluss durch LLMs:

1. **Input** (links): Menschliches Wissen, Kontext, unstrukturierte Gedanken
2. **Transformation** (implizit): Die "Strange New Mind" verarbeitet
3. **Output** (rechts): Verdichtetes Ergebnis, das menschliche Verifikation erfordert

Das Bild rechts ist nicht Dekoration, sondern die visuelle Essenz des Textes links.

---

## Farbpalette

### Primärfarben

| Name | Hex | Verwendung |
|------|-----|------------|
| Slate | #607D8B | Kaltes Gegebene, analytische Elemente |
| Terracotta | #BF5B3E | Hitze des Prozesses, aktive Elemente |

### Semantik

**Slate (Grau-Blau)**
- Rohdaten, Input
- Unverarbeitetes Material
- Fragen, Exploration
- "Das Gegebene"

**Terracotta (Rot-Orange)**
- Verarbeitetes, Output
- Kernaussagen, Highlights
- Aktive Phasen
- "Das Geschaffene"

### Temperatur-Metapher im Scroll-Verlauf

Der Hintergrund-Gradient folgt dem Phasenverlauf:

```
Intro     → Slate (kalt, Ausgangspunkt)
Phase 1-2 → Übergang zu Terracotta (Erwärmung)
Phase 3   → Terracotta-Peak (Hitze der Destillation)
Phase 4   → Abkühlung zurück zu Slate
Outro     → Slate (kalt, Abschluss)
```

---

## Typografie

### Schriftarten

| Typ | Font | Verwendung |
|-----|------|------------|
| Sans | Inter | Fließtext, UI-Elemente |
| Mono | JetBrains Mono | Code, technische Begriffe |

### Hierarchie

- **H1**: Phasen-Titel (groß, zentriert)
- **H2**: Step-Titel (mittel)
- **H3**: Abschnitts-Überschriften
- **Body**: Fließtext in Leseflächen
- **Caption**: Bildunterschriften, Meta-Text

---

## Komponenten-Muster

### Text-Bild-Layout (Hauptmuster)

Das zentrale Layout-Pattern für inhaltliche Steps:

```css
.main-layout {
  display: grid;
  grid-template-columns: 1fr 280px;
  gap: var(--space-xl);
  align-items: start;
}
```

**Textseite (links)**
```css
.text-card {
  background: white;
  padding: var(--space-lg);
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
}

.text-card p {
  color: var(--color-slate);
  line-height: 1.7;
  text-align: justify;
}

.text-card em,
.text-card strong {
  color: var(--color-terracotta);
}
```

**Bildseite (rechts)**
```css
.image-placeholder {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.placeholder-box {
  aspect-ratio: 3 / 4;  /* Hochformat, markant */
  background: rgba(96, 125, 139, 0.08);
  border: 2px dashed rgba(96, 125, 139, 0.3);
  border-radius: 8px;
}

.image-caption {
  font-size: 0.8rem;
  color: var(--color-slate);
  text-align: center;
  font-style: italic;
}
```

### Leseflächen (Text-Cards)

Für reine Text-Steps ohne Bild:

```css
background: white;
padding: var(--space-lg);
border-radius: 8px;
box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
text-align: justify;
max-width: 700px;
```

### Hervorhebungen

Nur zwei Typen für didaktische Klarheit:

**Key Point** (Kernaussagen, Terracotta)
```css
border-left: 3px solid var(--color-terracotta);
background: rgba(191, 91, 62, 0.08);
```

**Example Box** (Beispiele, Slate)
```css
border-left: 3px solid var(--color-slate);
background: rgba(96, 125, 139, 0.08);
```

---

## Responsive Verhalten

### Desktop (ab 768px)
- Text links, Bild rechts (Side-by-Side)
- Bild im Hochformat (3:4)
- Caption unter dem Bild

### Mobile (unter 768px)
- Bild oben, Text unten (gestapelt)
- Bild im Querformat (16:9) als "Teaser"
- Caption unter dem Bild

```css
@media (max-width: 767px) {
  .main-layout {
    grid-template-columns: 1fr;
  }

  .image-placeholder {
    order: -1;  /* Bild zuerst */
  }

  .placeholder-box {
    aspect-ratio: 16 / 9;
  }
}
```

---

## Anwendung auf Steps

### Steps mit Text-Bild-Layout
Ideal für konzeptuelle Erklärungen:
- IntroKernprinzip (Strange New Minds)
- Phase-Übersichten
- Konzept-Einführungen

### Steps mit reinem Text-Layout
Für detaillierte Erklärungen:
- Definitionen
- Methodik-Beschreibungen
- Technische Details

### Steps mit Visualisierungen
Für interaktive Elemente:
- Vault-Viewer
- Chat-Dialoge
- Datei-Browser

---

## Offene Aufgaben

- [ ] Bilder für alle Platzhalter erstellen
- [ ] Text-Bild-Layout auf weitere Steps anwenden
- [ ] Bildunterschriften als Kernaussagen formulieren
