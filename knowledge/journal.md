# Journal: Promptotyping Explainer

Arbeitstagbuch zur Entwicklung der Scrollytelling-Website.

## 2025-12-07 Abend: About-Seite, System 1.42 Deep Dive, UI-Fixes

### Tasks
- About-Seite mit Header-Navigation implementiert
- System 1.42 Deep Dive für theoretische LLM-Grundlagen erstellt
- "Strange New Minds" (Summerfield) ins Intro-Kernprinzip integriert
- DeepDivePanel Table-Styling für bessere Lesbarkeit korrigiert
- Bibliographie erweitert (Summerfield 2025, Pollin 2025)

### Ergebnisse
**About.svelte** erstellt mit `marked` für Markdown-Rendering. Fokus auf Methodik/Lernwert statt technischer Details (Tech Stack, Features, Lizenz bewusst weggelassen).

**System 1.42 Deep Dive** in deep-dives.js: Erklärt LLM-Grundlagen (Token, Embedding, Context Window, Attention, Next-Token-Prediction, Training-Phasen, Emergenz). Referenziert Pollin 2025 DHCraft Blog.

**IntroKernprinzip.svelte** erweitert: "Strange New Minds" (Summerfield, 2025) als theoretischer Rahmen. Drei Deep Dive Trigger: System 1.42, Scholar-Centered Design, Knowledge Acquisition.

**PhaseHeader.svelte**: Navigation erweitert um About-Link (vor Glossar/Bibliographie).

**DeepDivePanel.svelte**: Table-CSS korrigiert (display: block, overflow-x: auto, table-layout: fixed). Erste Spalte 30% Breite mit min-width 100px.

### Entscheidungen
- About-Inhalt methodenzentriert, nicht technisch (README.md bleibt für Entwickler)
- "Strange New Minds" als konzeptueller Anker für LLM-Verständnis
- System 1.42 als Deep Dive statt Hauptinhalt (optionale Vertiefung)
- `marked` Dependency für flexibles Markdown-Rendering in About

---

## 2025-12-07: Phasenmodell-Korrektur und Narrativ

### Tasks
- Inkonsistenz in Dokumentation identifiziert (wann entstehen .md-Files?)
- Narrativ überarbeitet
- Terminologie konsolidiert

### Ergebnisse
Phasenmodell korrigiert. Alle .md-Files entstehen ausschließlich in Destillation:ja

| Phase | Input | Output |
|-|-|--|
| Preparation | Rohdateien (.doc, .xml, PDF) | – |
| Exploration | – | – (epistemische Spielwiese) |
| Destillation | Analyse-Ergebnisse | DATA.md, REQUIREMENTS.md, CONTEXT.md |
| Implementation | .md-Files | Prototype(n) + Vault-Updates |

Architektur-Pivot: GSAP ScrollTrigger-Pinning → CSS scroll-snap. IntersectionObserver erkennt aktive Steps.

### Entscheidungen
- README.md → CONTEXT.md (konsistentere Benennung)
- INSTRUCTIONS.md entfernt (redundant)
- Sachliches Problem-Statement statt persönlichem Narrativ
- Promptotyping erweitert Vibe Coding (nicht Gegenentwurf)
- "Vault-Updates" statt "Rückschleifen" (betont Wissensakkumulation)
- Prompting-Strategien statt fester Prompt-Templates

## 2025-12-06 Abend: URL-Navigation und Refactoring

### Tasks
- Deep-Links implementiert
- Code-Redundanzen entfernt
- Scroll-Länge kalibriert

### Ergebnisse
URL-basierte Navigation funktioniert (#phase1-workspace, #intro-system142). Hash wird beim Scrollen aktualisiert.

Neue Utility-Komponenten: SceneHeader.svelte, AcademicBlock.svelte, progressAnimations.js. Code-Reduktion 9-25% pro Szene.

Scroll-Länge: 720vh → 1620vh (ca. 60vh pro Sub-Step).

### Entscheidungen
- GlossaryTerm-Panel schließt nur bei expliziter Aktion, nicht bei Mouse-Leave

## 2025-12-06 Nachmittag: UI und Performance

### Tasks
- Progress-Indikator erweitert
- Hintergrund-Gradient implementiert
- Scroll-Performance optimiert

### Ergebnisse
Progress-Indikator zeigt Verbindungslinie, Häkchen für abgeschlossene Phasen, Glow auf aktivem Punkt.

Hintergrund-Gradient folgt Temperatur-Metapher: Slate (kalt) → Terracotta (heiß) → Abkühlung.

ScrollTrigger-Kalibrierung: scrub true → 0.5 → 1.2 → 2 → 1.5. Problem bei schnellem Scrollen blieb bestehen (später durch scroll-snap gelöst).

### Entscheidungen
- will-change entfernt (zu viel GPU-Speicher)
- CSS-Transitions entfernt (Konflikt mit GSAP scrub)

## 2025-12-06 Mittag: Alle Szenen und akademischer Text

### Tasks
- Restliche Szenen implementiert (Phase 2-4, Outro)
- Akademischen Fließtext aus paper-draft.md übernommen
- Case Studies integriert

### Ergebnisse
6 Szenen komplett: IntroScene, Phase1-4Scene, OutroScene.

8 Element-Komponenten: ChatBubble, EntityIcon, VaultIcon, BrowserFrame, ConnectionLine, GlossaryTerm, PhaseHeader, ProgressIndicator.

7 Case Studies integriert: correspexplorer, aldersbach, diged-neolat, km, stained-glass, imareal-room-object, szd.

Glossar mit 20+ AI/LLM-Begriffen.

Build erfolgreich: 175 kB JS, 18 kB CSS.

### Entscheidungen
- Browser-Frame stilisiert statt echtem Code-Snippet
- 5 Partikel in Phase 3 (Performance-Limit)

## 2025-12-06 Morgen: Projektstart

### Tasks
- Dokumentstruktur konsolidiert
- Tech-Stack entschieden
- Basis-Setup

### Ergebnisse
Vite + Svelte 5 + GSAP initialisiert. GitHub Actions Workflow für Deployment. CSS Design System aus knowledge.md übernommen.

Erste Komponenten: Phase.svelte, ProgressIndicator.svelte, IntroScene.svelte, Phase1Scene.svelte, DocumentIcon.svelte.

IntroScene und Phase1Scene funktionieren.

### Entscheidungen
- Single Source of Truth: knowledge.md (Inhalt), requirements.md (Zielgruppen), implementation.md (Technik)
- Svelte 5 + GSAP statt React + Framer Motion (kleinere Bundles, besseres Scroll-Pinning)
- Vanilla JS ohne Build verworfen (GSAP notwendig für Animationsqualität)