# Website Outline: Interaktives Paper

Struktur der Scrollytelling-Website für Promptotyping.

---

## Gesamtstruktur

| Section | Scroll-Bereich | Steps | Inhalt |
|---------|----------------|-------|--------|
| Intro | 0-300vh | 5 | Titel, Frage, Methoden-Übersicht |
| Phase 1: Preparation | 300-600vh | 5 | Materialien sammeln |
| Phase 2: Exploration | 600-840vh | 4 | Daten verstehen |
| Phase 3: Destillation | 840-1080vh | 4 | Wissen verdichten |
| Phase 4: Implementation | 1080-1380vh | 5 | Iterativ bauen |
| Outro | 1380-1620vh | 4 | Zusammenfassung, Ressourcen |

---

## Intro (5 Steps)

1. **Titel**: "Promptotyping" + Untertitel "Vom Wissen zum Werkzeug"
2. **Zentrale Frage**: "Wie wird aus Forschungsdaten ein funktionales Interface?"
3. **4-Phasen-Übersicht**: Icons (ausgegraut), Labels
4. **Workflow-Bild**: Großes Diagramm mit Animation (Preparation → Exploration → Destillation → Implementation)
5. **Definition**: Was ist Promptotyping? Abgrenzung zu Vibe Coding

---

## Phase 1: Preparation (5 Steps)

**Untertitel:** Materialsammlung

1. Titel + Untertitel erscheint
2. Leerer Arbeitsbereich
3. Quellen erscheinen an Rändern (XML, PDF, CSV, Notizen)
4. Quellen bewegen sich zur Mitte
5. Stapel formiert sich → "Bereit für nächste Phase"

**Deep Dive:** Scholar-Centered Design

---

## Phase 2: Exploration (4 Steps)

**Untertitel:** Datenanalyse

1. Titel + Untertitel erscheint
2. Zoom auf Dokument, Farbcodierung zeigt Struktur
3. Entitäten lösen sich (Person, Ort, Zeit, Relation)
4. Erste Interface-Skizzen, Fragezeichen: "Welche Fragen?"

**Deep Dive:** Context Engineering

---

## Phase 3: Destillation (4 Steps)

**Untertitel:** Wissenskomprimierung

1. Titel + Untertitel erscheint
2. Drei-Spalten: Stapel → Vault → Skizzen
3. Partikel fließen, Dokumente entstehen (DATA.md, REQUIREMENTS.md)
4. Vault pulsiert: "Destilliertes Wissen. Bereit für das LLM."

**Deep Dive:** Dokumentenstruktur (flexibel anpassbar)

---

## Phase 4: Implementation (5 Steps)

**Untertitel:** Iterative Entwicklung

1. Titel + Untertitel erscheint
2. Layout: Vault → Chat → Browser
3. Erster Prompt (Terracotta), LLM antwortet (Slate Grey), Code erscheint
4. Fehler (rotes X) → Korrektur → Iteration (orange Spinner)
5. Rückschleife zu Phase 3 (gestrichelter Pfeil)

**Deep Dives:**
- Prompting-Strategien
- Critical Expert in the Loop

---

## Outro (4 Steps)

1. **Zusammenfassung**: 4 Phasen kompakt visualisiert
2. **Praxisbeispiele**: Links zu Live-Demos
3. **Call to Action**: "Starte dein Projekt"
4. **Ressourcen**: Paper (knowledge/paper/), GitHub, Glossar

---

## Deep Dives (Branch Left)

Optionale Vertiefungen, die vom Hauptfluss abzweigen:

| Trigger-Phase | Deep Dive | Inhalt |
|---------------|-----------|--------|
| Phase 1 | Scholar-Centered Design | UCD/SCD-Synthese, akademische Fundierung |
| Phase 2 | Context Engineering | Mei et al., Context Rot, Verdichtung |
| Phase 3 | Dokumentenstruktur | Flexibilität, Skalierung, Beispiele |
| Phase 4 | Prompting-Strategien | Reasoning, LLM-as-Judge, etc. |
| Phase 4 | Critical Expert in the Loop | Sycophancy, Validierung, Korrektur |

---

## Mapping: Website → Paper

| Website-Section | Paper-Kapitel |
|-----------------|---------------|
| Intro | 01-introduction.md |
| Phase 1-4 | 03-methodology.md |
| Deep Dive: SCD | 04-scholar-centered-design.md |
| Deep Dive: Theorie | 02-theoretical-foundation.md |
| Outro/Beispiele | 05-case-studies.md |
| Glossar | glossar_de.md + src/lib/data/glossary.js |

---

## Visual System (Referenz)

Farben:
- Slate Grey (#607D8B): Daten, LLM-Antworten
- Terracotta (#BF5B3E): Menschliche Intervention, Prompts
- Weiß (#FFFFFF): Hintergrund
- Schwarz (#1A1A1A): Text, Linien

Details siehe: knowledge.md → TEIL 2: VISUAL SYSTEM
