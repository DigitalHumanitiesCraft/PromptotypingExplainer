# Promptotyping Explainer

Scrollytelling-Website zur Erklärung der **Promptotyping**-Methodik für LLM-gestützte Werkzeugentwicklung in den Digital Humanities.

**Live Demo:** [dhcraft.org/PromptotypingExplainer](https://dhcraft.org/PromptotypingExplainer)

## Was ist Promptotyping?

> **Promptotyping** ist eine Context-Engineering-Arbeitstechnik, die das Mapping von semantischen Forschungsdaten und explizitem Forschungskontext auf Forschungsartefakte mittels Frontier-LLMs ermöglicht.

Ein vierphasiges Prozessmodell strukturiert die Arbeit:

1. **Vorbereitung** – Materialsammlung
2. **Exploration** – Datenanalyse
3. **Destillation** – Wissenskomprimierung
4. **Implementation** – Iterative Entwicklung mit Vault-Updates

## Tech Stack

- **Svelte 5** – Reaktives UI-Framework
- **Vite 7** – Build-Tool und Dev-Server
- **IntersectionObserver** – Native Scroll-Detection

## Features

- **Step-basierte Navigation** mit IntersectionObserver
- **Interaktives Glossar** mit kontextsensitiven Popovers
- **Deep Dives** für Vertiefungen (Scholar-Centered Design, Limitations)
- **Progress Indicator** mit Sub-Step-Labels
- **Responsive Design** (Desktop: Side-Panel, Mobile: Bottom-Sheet)
- **Dynamischer Hintergrund-Gradient** basierend auf Scroll-Position
- **Bibliographie** mit APA-Zitaten und verlinkten Quellen
- **About/Vault/Glossar/Bibliographie** Navigation im Header
- **Vault-Seite** zeigt den knowledge/-Ordner als Meta-Beispiel

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
│   │   ├── Step.svelte           # IntersectionObserver-Wrapper
│   │   ├── ProgressIndicator.svelte  # Navigations-Dots mit Sub-Steps
│   │   ├── PhaseHeader.svelte    # Fixierter Header mit Phase/Step
│   │   ├── GlossaryTerm.svelte   # Kontextsensitive Glossar-Popovers
│   │   ├── DeepDivePanel.svelte  # Modal für Vertiefungen
│   │   ├── About.svelte          # About-Seite (Methodik-Fokus)
│   │   ├── Vault.svelte          # Interaktiver Vault-Viewer (Meta-Beispiel)
│   │   ├── Glossary.svelte       # Glossar-Übersicht (alphabetisch)
│   │   ├── Bibliography.svelte   # Bibliographie mit APA-Zitaten
│   │   ├── steps/                # Step-Komponenten pro Phase
│   │   │   ├── intro/            # Definition, Vibe Coding, Strange New Minds, Kernprinzip, Critical Expert, Scholar-Centered, Phasen
│   │   │   ├── phase1/           # Titel, Rohdaten, Sammlung
│   │   │   ├── phase2/           # Exploration
│   │   │   ├── phase3/           # Titel, Dokumente, Vault
│   │   │   ├── phase4/           # Titel, Iteration, Vault-Update
│   │   │   └── outro/            # Beispiele, Diskussion, Zusammenfassung
│   │   ├── elements/             # Wiederverwendbare UI-Elemente
│   │   │   ├── DocumentIcon.svelte
│   │   │   ├── EntityIcon.svelte
│   │   │   ├── VaultIcon.svelte
│   │   │   ├── ChatBubble.svelte
│   │   │   ├── BrowserFrame.svelte
│   │   │   ├── AnimatedChat.svelte   # Loop-Animation des Reasoning-Zyklus
│   │   │   └── DeepDiveTrigger.svelte
│   │   └── blocks/               # Extrahierte Komponenten
│   │       ├── SceneHeader.svelte
│   │       └── AcademicBlock.svelte
│   ├── data/
│   │   ├── phases.js             # Phasen-Definitionen
│   │   ├── glossary.js           # 20+ AI/LLM-Begriffe
│   │   ├── bibliography.js       # Bibliographie-Einträge (APA)
│   │   ├── deep-dives.js         # Deep Dive Inhalte
│   │   ├── vault-structure.js    # Vault-Dateistruktur für Viewer
│   │   └── prompts.js            # Chat-Dialoge für Phase 4
│   └── stores/
│       ├── scroll.js             # Svelte Stores für Progress/Phase/Step
│       └── deepDive.js           # Deep Dive State
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
| `paper/` | Methodenpaper (Kapitel 01-07) |

## Design System

- **Slate** (#607D8B) – Kaltes Gegebene, analytische Phasen
- **Terracotta** (#BF5B3E) – Hitze des Prozesses, aktive Phasen
- **Typografie:** Inter (Sans), JetBrains Mono (Code)

## Deployment

GitHub Actions deployed automatisch nach `docs/` für GitHub Pages bei Push auf `main`.

## Lizenz

MIT
