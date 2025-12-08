# Website Outline: Scrollytelling-Struktur

Struktur der Scrollytelling-Website für Promptotyping. Synchron mit scroll.js.

---

## Gesamtstruktur (19 Steps)

- Intro (6): Definition, Vibe Coding, Strange New Minds, Kernprinzip, Methodik, Phasen
- Phase 1: Preparation (3): Übersicht, Rohdaten, Sammlung
- Phase 2: Exploration (3): Struktur, Entitäten, Fragen
- Phase 3: Destillation (3): Übersicht, .md-Files, Vault
- Phase 4: Implementation (3): Übersicht, Iteration, Vault-Update
- Outro (2): Beispiele, Zusammenfassung

---

## Intro (6 Steps)

1. **Definition**: Was ist Promptotyping?
2. **Vibe Coding**: Frontier-LLMs, Benchmarks, Karpathy, tante-Kritik
   - Deep Dive: Vibe Coding Kritik
3. **Strange New Minds**: LLMs als kognitive Systeme, Summerfield, Lindsey et al., System 1.42, Co-Intelligence (Centaur/Cyborg), Sycophancy
   - Deep Dive: System 1.42
4. **Kernprinzip**: Rhetorische Frage, Mollick-Shift, fundamentale Spannung (gute Ergebnisse + keine Verlässlichkeit), Critical Expert
5. **Methodik**: Critical Expert in the Loop, Strategien gegen Sycophancy
6. **Phasen**: 4-Phasen-Übersicht mit Diagramm

---

## Phase 1: Preparation (3 Steps)

Untertitel: Materialsammlung
Artefakte: Rohdateien (.doc, .xml, PDFs) – keine .md

1. Übersicht: Titel, was passiert in dieser Phase
2. Rohdaten: Quellen erscheinen (XML, PDF, CSV, Notizen)
3. Sammlung: Stapel formiert sich → "Bereit für Analyse"

Deep Dive: Scholar-Centered Design

---

## Phase 2: Exploration (3 Steps)

Untertitel: Daten-Kontext-Relationen
Artefakte: Keine formalen Dokumente, aber Wissen über Datenqualität und User-Story-Validität

1. Struktur: Zoom auf Dokument, Farbcodierung zeigt Aufbau
2. Relationen: Prüfung der Daten-Kontext-Schnittstelle
3. Validierung: Machbarkeitsprüfung der User Stories

Deep Dive: Context Engineering

---

## Phase 3: Destillation (3 Steps)

Untertitel: Wissenskomprimierung
Artefakte: DATA.md, REQUIREMENTS.md, CONTEXT.md (hier entstehen die .md Files)

1. Übersicht: Drei-Spalten-Layout (Rohdaten → Vault → Prototyp-Skizze)
2. Requirements: Partikel fließen, .md-Dokumente entstehen
3. Vault: Vault pulsiert: "Destilliertes Wissen. Bereit für das LLM."

Deep Dive: Dokumentenstruktur (flexibel anpassbar)

---

## Phase 4: Implementation (3 Steps)

Untertitel: Iterative Entwicklung
Artefakte: Prototype(n) + Vault-Updates

1. Übersicht: Layout Vault → Chat → Browser
2. Iteration: Prompt → LLM → Code → Fehler → Korrektur → neuer Prototype
3. Vault-Update: Neues Wissen fließt zurück in .md-Dateien

Deep Dives:
- Prompting-Strategien
- Critical Expert in the Loop

---

## Outro (2 Steps)

1. Beispiele: Links zu Live-Demos (CorrespExplorer, Aldersbach, etc.)
2. Zusammenfassung: 4 Phasen kompakt, Ressourcen, Call to Action

---

## Deep Dives (Branch Left)

Optionale Vertiefungen, die vom Hauptfluss abzweigen:

### Intro
- Vibe Coding → **Vibe Coding Kritik**: Karpathy, tante, wann es funktioniert/scheitert
- Strange New Minds → **System 1.42**: Kahneman, Douglas Adams, Retrieval statt Reasoning

### Phasen
- Phase 1 → Scholar-Centered Design: UCD/SCD-Synthese, akademische Fundierung
- Phase 2 → Context Engineering: Mei et al., Context Rot, Verdichtung
- Phase 3 → Dokumentenstruktur: Flexibilität, Skalierung, Beispiele
- Phase 4 → Prompting-Strategien: Reasoning, LLM-as-Judge, etc.
- Phase 4 → Critical Expert in the Loop: Sycophancy, Validierung, Korrektur
- Phase 4 → LLM-Retrieval: Chollet, Hochreiter, Kambhampati - LLMs als approximative Datenbanken

---

## Mapping: Website → Paper

- Intro → 01-introduction.md
- Phase 1-4 → 03-methodology.md
- Deep Dive: SCD → 04-scholar-centered-design.md
- Deep Dive: Theorie → 02-theoretical-foundation.md
- Outro/Beispiele → 05-case-studies.md

---

## Visual System (Referenz)

Siehe: knowledge.md → TEIL 2: VISUAL SYSTEM
