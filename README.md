# Promptotyping Explainer

Scrollytelling-Website zur Erklärung der **Promptotyping**-Methodik für LLM-gestützte Werkzeugentwicklung in den Digital Humanities.

**Live Demo:** [dhcraft.org/PromptotypingExplainer](https://dhcraft.org/PromptotypingExplainer)

## Was ist Promptotyping?

> Das Mapping von semantisch reichhaltigen Forschungsdaten und explizitem Forschungskontext auf funktionale Interfaces durch iterative Mensch-LLM-Kollaboration.

Promptotyping ist eine vierphasige Methodik:

1. **Vorbereitung** – Materialsammlung
2. **Exploration** – Datenanalyse
3. **Destillation** – Wissenskomprimierung
4. **Iterative Implementation** – Iterative Entwicklung

## Tech Stack

- **Svelte 5** – Reaktives UI-Framework
- **GSAP ScrollTrigger** – Scroll-basierte Animationen mit Pinning
- **Vite 7** – Build-Tool und Dev-Server

## Features

- **Scroll-gesteuerte Animationen** mit GSAP ScrollTrigger
- **Interaktives Glossar** mit Hover-Tooltips und Verbindungslinien
- **Progress Indicator** mit gepunkteter Fortschrittslinie
- **Responsive Design** (Desktop: Side-Panel, Mobile: Bottom-Sheet)
- **Dynamischer Hintergrund-Gradient** basierend auf Scroll-Position

## Entwicklung

```bash
# Dependencies installieren
npm install

# Dev-Server starten
npm run dev

# Production Build
npm run build
```

## Architektur

```
src/
├── App.svelte                    # Haupt-Layout, Hintergrund-Gradient
├── lib/
│   ├── components/
│   │   ├── Phase.svelte          # ScrollTrigger-Wrapper mit Pinning
│   │   ├── ProgressIndicator.svelte  # Navigations-Dots
│   │   ├── PhaseHeader.svelte    # Fixierter Header mit Fortschritt
│   │   ├── GlossaryTerm.svelte   # Interaktive Glossar-Tooltips
│   │   ├── scenes/               # Pro Phase eine Szene
│   │   │   ├── IntroScene.svelte
│   │   │   ├── Phase1Scene.svelte
│   │   │   ├── Phase2Scene.svelte
│   │   │   ├── Phase3Scene.svelte
│   │   │   ├── Phase4Scene.svelte
│   │   │   └── OutroScene.svelte
│   │   ├── elements/             # Wiederverwendbare UI-Elemente
│   │   │   ├── DocumentIcon.svelte
│   │   │   ├── EntityIcon.svelte
│   │   │   ├── VaultIcon.svelte
│   │   │   ├── ChatBubble.svelte
│   │   │   └── BrowserFrame.svelte
│   │   └── blocks/               # Extrahierte Komponenten
│   │       ├── SceneHeader.svelte
│   │       └── AcademicBlock.svelte
│   ├── data/
│   │   ├── phases.js             # Phasen-Definitionen
│   │   ├── glossary.js           # 20+ AI/LLM-Begriffe
│   │   └── prompts.js            # Chat-Dialoge für Phase 4
│   ├── stores/
│   │   └── scroll.js             # Svelte Stores für Progress/Phase
│   └── utils/
│       └── progressAnimations.js # fadeIn, fadeOut, lerp, etc.
└── app.css                       # Design System (Slate/Terracotta)
```

## Knowledge Vault

Die Wissensbasis für dieses Projekt liegt in `knowledge/`:

| Datei | Inhalt |
|-------|--------|
| `knowledge.md` | Inhalt, Visual System, Scroll-Logic |
| `requirements.md` | Zielgruppen, User Stories, Constraints |
| `implementation.md` | Technische Details |
| `journal.md` | Entwicklungstagebuch |
| `case-studies/` | Reale Promptotyping-Beispiele |

## Design System

- **Slate** (#607D8B) – Kaltes Gegebene, analytische Phasen
- **Terracotta** (#BF5B3E) – Hitze des Prozesses, aktive Phasen
- **Typografie:** Inter (Sans), JetBrains Mono (Code)

## Deployment

GitHub Actions deployed automatisch nach `docs/` für GitHub Pages bei Push auf `main`.

## Lizenz

MIT
