# Implementation: Promptotyping Explainer

Status: Implementiert und live unter dhcraft.org/PromptotypingExplainer

Weitere Dokumente im Vault:
- knowledge.md – Single Source of Truth für Inhalt, Visual System, Scroll-Logic
- requirements.md – Zielgruppen, User Stories, technische Constraints

---

## Tech Stack

Das Projekt nutzt Svelte 5 als Framework, da es zu Vanilla JS kompiliert und kleine Bundles ohne Runtime-Overhead erzeugt. Vite dient als Build-Tool für schnelle Entwicklung und einfaches GitHub Pages Setup. Animationen werden mit GSAP und ScrollTrigger realisiert – dem Industrie-Standard für scroll-basierte Animationen mit Pinning-Support. Styling erfolgt über CSS Variables und Svelte Scoped Styles als native Lösung ohne Extra-Setup. Die Fonts Inter und JetBrains Mono sind self-hosted für Performance und Privacy. Das Deployment läuft automatisch über GitHub Pages via Actions bei Push auf main.

---

## Dateistruktur

Die Projektstruktur gliedert sich in mehrere Bereiche. Im src-Ordner befinden sich die Svelte-Komponenten, aufgeteilt in components (Phase.svelte als ScrollTrigger-Wrapper, ProgressIndicator.svelte für Navigation, PhaseHeader.svelte für fixierten Header, GlossaryTerm.svelte für Tooltips), scenes (IntroScene, Phase1-4Scene, OutroScene), elements (DocumentIcon, EntityIcon, VaultIcon, ChatBubble, BrowserFrame) und blocks (SceneHeader, AcademicBlock). Der stores-Ordner enthält scroll.js mit Stores und URL-Navigation. In data liegen phases.js, prompts.js und glossary.js. Utils enthält progressAnimations.js mit fadeIn, lerp und ease-Funktionen. Der knowledge-Ordner enthält alle Vault-Dokumente, docs ist der GitHub Pages Output.

---

## Komponenten-Architektur

Phase.svelte fungiert als Wrapper mit ScrollTrigger-Pinning. Es erhält eine ID und einen Index, berechnet den Scroll-Progress (0-1) und stellt diesen via Slot-Props den Kind-Komponenten zur Verfügung.

ProgressIndicator.svelte zeigt die Navigation rechts. Es rendert für jede Phase einen klickbaren Punkt, der bei Klick via GSAP scrollTo zur entsprechenden Phase navigiert. Sub-Steps werden als Mini-Punkte dargestellt. Eine vertikale Linie verbindet die Punkte und füllt sich mit Terracotta je nach Fortschritt.

Die Element-Komponenten (DocumentIcon, EntityIcon, VaultIcon, ChatBubble, BrowserFrame) sind alle SVG-basiert und via GSAP animierbar. DocumentIcon akzeptiert einen type (xml, pdf, csv, md, notes) und ein Label. EntityIcon unterscheidet zwischen person, place, time und relation. VaultIcon kann pulsieren und zeigt eine Liste von Dokumenten. ChatBubble unterscheidet zwischen human, llm und error. BrowserFrame kennt vier Zustände: empty, skeleton, wireframe und interface.

---

## Scroll-Store

Der scroll.js Store exportiert globalProgress (0-1 über die gesamte Seite), currentPhase (aktiver Phasen-Index) und phaseProgress (derived Store für Progress innerhalb der aktuellen Phase). Die URL wird via replaceState aktualisiert, sodass Deep-Links funktionieren. Das Format ist #phase1-workspace oder #intro-definition.

---

## Daten-Module

phases.js definiert die Phasen-Struktur mit id, title, subtitle und phasenspezifischen Daten (artifacts für Phase 1, entities für Phase 2, documents für Phase 3). prompts.js enthält echte Prompts aus der CorrespExplorer-Entwicklung mit id, type (human/llm/error), text und pattern (Orientierung geben, Verständnis prüfen, etc.). glossary.js definiert 20+ AI/LLM-Begriffe mit Definition, Tags und Quelle.

---

## CSS Design System

Das Design System definiert Farben (Slate für kaltes Gegebenes, Terracotta für Prozesshitze, plus Success, Error, Progress), Typografie (Inter als Sans, JetBrains Mono als Mono), Spacing (xs bis xl) und Animationsparameter (duration-fast/normal/slow, ease-out, ease-in-out). Bei prefers-reduced-motion werden alle Animationen auf 0.01ms gesetzt. Code-Highlighting nutzt eigene Variablen für keyword, function, string und background.

---

## Build-Konfiguration

Die vite.config.js setzt svelte als Plugin, base auf /PromptotypingExplainer/ und outDir auf docs mit emptyOutDir. Die package.json definiert dev, build und preview Scripts. Dependencies sind GSAP (runtime) und Svelte/Vite (dev). Der GitHub Actions Workflow baut bei Push auf main, nutzt Node 22, führt npm ci und npm run build aus, und deployed via upload-pages-artifact und deploy-pages.

---

## Implementierungsreihenfolge

Setup: Vite + Svelte initialisieren, GSAP installieren, CSS Variables übernehmen, Fonts einbinden, GitHub Actions Workflow.

Scroll-Infrastruktur: Scroll-Store, Phase.svelte mit Pinning, ProgressIndicator.svelte.

Szenen: Gemäß knowledge.md Teil 3 – IntroScene, Phase1Scene mit DocumentIcon, Phase2Scene mit EntityIcon und ConnectionLine, Phase3Scene mit VaultIcon, Phase4Scene mit ChatBubble und BrowserFrame.

Polish: Reduced Motion Support, Keyboard Navigation, ARIA Labels, OG-Image, Performance-Check.

---

## Entscheidungen

Styling nutzt Svelte Scoped + CSS Variables als native Lösung ohne Extra-Build. Fonts sind self-hosted für Performance und DSGVO. Phase 3 zeigt 3-5 Partikel für Balance zwischen Effekt und Performance. Code in Phase 4 wird als stilisierte Blöcke dargestellt, keine Syntax-Highlighting-Lib nötig. Vault-Updates werden als Partikel-Animation visualisiert, die den Wissensrückfluss darstellt.

---

## Journal

2024-12-06: Dokumentstruktur konsolidiert. Tech Stack geändert von React zu Svelte + GSAP. implementation.md refactored zu reinen technischen Details. knowledge.md ist Single Source of Truth für Inhalt und Animationen. Echte Prompts aus knowledge.md übernommen.
