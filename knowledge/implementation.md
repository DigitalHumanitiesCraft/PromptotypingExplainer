# Implementation: Promptotyping Explainer

Status: Implementiert und live unter dhcraft.org/PromptotypingExplainer

Weitere Dokumente im Vault:
- knowledge.md – Single Source of Truth für Inhalt, Visual System, Scroll-Logic
- requirements.md – Zielgruppen, User Stories, technische Constraints

---

## Tech Stack

Das Projekt nutzt Svelte 5 als Framework, da es zu Vanilla JS kompiliert und kleine Bundles ohne Runtime-Overhead erzeugt. Vite dient als Build-Tool für schnelle Entwicklung und einfaches GitHub Pages Setup. Scroll-Detection erfolgt über die native IntersectionObserver API – leichtgewichtig und performant ohne externe Dependencies. Styling nutzt CSS Variables und Svelte Scoped Styles als native Lösung ohne Extra-Setup. Die Fonts Inter und JetBrains Mono sind self-hosted für Performance und Privacy. Das Deployment läuft automatisch über GitHub Pages via Actions bei Push auf main.

---

## Dateistruktur

```
src/
├── main.js                       # Entry Point (Svelte Mount)
├── app.css                       # Design System (Slate/Terracotta)
├── App.svelte                    # Root Component, Dynamic Background
└── lib/
    ├── components/
    │   ├── Step.svelte           # IntersectionObserver-Wrapper
    │   ├── ProgressIndicator.svelte  # Navigation mit Sub-Steps
    │   ├── PhaseHeader.svelte    # Fixed Header + About/Glossar/Biblio Nav
    │   ├── GlossaryTerm.svelte   # Interaktive Tooltips
    │   ├── DeepDivePanel.svelte  # Modal für Vertiefungen
    │   ├── About.svelte          # Methodenfokussierte About-Seite
    │   ├── Glossary.svelte       # Alphabetische Glossar-Übersicht
    │   ├── Bibliography.svelte   # APA-Bibliographie
    │   ├── steps/                # 18 Step-Komponenten
    │   │   ├── intro/            # 4 Steps (inkl. Strange New Minds)
    │   │   ├── phase1/           # 3 Steps
    │   │   ├── phase2/           # 3 Steps
    │   │   ├── phase3/           # 3 Steps
    │   │   ├── phase4/           # 3 Steps
    │   │   └── outro/            # 2 Steps
    │   ├── elements/             # SVG-basierte UI-Elemente
    │   └── blocks/               # Wiederverwendbare Content-Blöcke
    ├── data/
    │   ├── phases.js             # Phasen + Steps Definition
    │   ├── glossary.js           # 20+ Begriffe
    │   ├── bibliography.js       # Bibliographie-Einträge (APA)
    │   ├── deep-dives.js         # Deep Dive HTML-Inhalte (System 1.42, Scholar-Centered, Limitations)
    │   └── prompts.js            # Chat-Dialoge
    └── stores/
        ├── scroll.js             # Phase/Step/Progress State
        └── deepDive.js           # Deep Dive Modal State
```

---

## Komponenten-Architektur

### Step.svelte
Container für jeden einzelnen Step. Nutzt IntersectionObserver (threshold: 0.5) um zu erkennen, wann ein Step im Viewport ist. Aktualisiert die globalen Stores currentPhase und currentStep.

### ProgressIndicator.svelte
Zeigt die Navigation rechts (Desktop) bzw. unten (Mobile). Für jede Phase ein Dot mit Label, für die aktive Phase zusätzlich Sub-Step-Dots mit Labels. Klick navigiert via scrollToStep() zur entsprechenden Position.

### PhaseHeader.svelte
Fixed Header oben. Zeigt aktuelle Phase und aktuellen Step. Reagiert reaktiv auf Store-Änderungen.

### GlossaryTerm.svelte
Inline-Term mit ?-Indicator. Bei Hover/Click öffnet sich ein Panel rechts (Desktop) oder unten (Mobile) mit Definition, Tags und Quelle. SVG-Verbindungslinie vom Term zum Panel.

### DeepDivePanel.svelte
Modal für Vertiefungen. Slide-in von links, dunkler Overlay mit Blur. Schließbar via Escape, Backdrop-Click oder Button. Inhalte kommen aus deep-dives.js als HTML.

### Element-Komponenten
DocumentIcon (type: xml, pdf, csv, md, notes), EntityIcon (person, place, time, relation), VaultIcon (mit Dokument-Liste), ChatBubble (human, llm, error), BrowserFrame (empty, skeleton, wireframe, interface), DeepDiveTrigger (Button zum Öffnen).

---

## Scroll-Store

Der scroll.js Store exportiert:
- currentPhase (writable, 0-5)
- currentStep (writable, 0-3)
- globalProgress (derived, 0-1)
- globalStepIndex (derived, 0-17)
- stepStructure (Array mit Phasen und Steps)
- scrollToStep(stepId) – Navigation zu einem Step
- updateHash() – URL-Synchronisation

URL-Format: #intro-definition, #phase1-rohdaten etc.

---

## Daten-Module

phases.js definiert stepStructure mit 6 Phasen (intro, phase1-4, outro), jeweils mit id, label und steps-Array. Jeder Step hat id und label.

glossary.js enthält 20+ AI/LLM-Begriffe mit term, en (englisch), definition, tags und source.

deep-dives.js enthält HTML-Strings für Vertiefungen: system-1-42 (LLM-Grundlagen), scholar-centered-design, knowledge-acquisition, limitations.

bibliography.js enthält Bibliographie-Einträge mit APA-Format (authors, year, title, source, url). Inkl. Summerfield 2025 ("Strange New Minds"), Pollin 2025 (System 1.42).

prompts.js enthält Chat-Dialoge für Phase 4 mit type (human/llm/error) und text.

---

## CSS Design System

Farben: Slate (#607D8B) für kaltes Gegebenes, Terracotta (#BF5B3E) für Prozesshitze.

Typografie: Inter (Sans), JetBrains Mono (Mono).

Spacing: --space-xs bis --space-xl.

Animationen: --duration-fast/normal/slow, --ease-out, --ease-in-out.

Bei prefers-reduced-motion werden Animationen minimiert.

---

## Build-Konfiguration

vite.config.js: svelte Plugin, base: /PromptotypingExplainer/, outDir: docs.

package.json: dev, build, preview Scripts. Dependencies: Svelte (Runtime), marked (Markdown-Rendering für About).

GitHub Actions: Bei Push auf main wird gebaut und nach docs/ deployed.

---

## Entscheidungen

- IntersectionObserver statt GSAP: Leichtgewichtiger, keine externe Dependency, native Browser-API.
- Step-basiert statt Scene-basiert: Modularer, einfacher zu erweitern, klare 1:1-Zuordnung Step↔Komponente.
- Deep Dives als separate Inhalte: Ermöglicht Vertiefung ohne den Hauptfluss zu unterbrechen.
- Keine Verbindungslinie im ProgressIndicator: Sub-Steps zeigen Fortschritt klarer.
- Self-hosted Fonts: Performance und DSGVO.

---

## Journal

Siehe [journal.md](journal.md) für vollständiges Arbeitstagbuch.

Letzte Updates:
- 2025-12-07 Abend: About-Seite, System 1.42 Deep Dive, "Strange New Minds" im Intro, UI-Fixes
- 2025-12-07: GSAP entfernt, Step-Architektur, ProgressIndicator redesign
- 2025-12-06: Svelte + GSAP Setup, alle Szenen implementiert
