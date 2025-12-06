# Promptotyping Explainer

Scrollytelling-Website zur Erklärung der **Promptotyping**-Methodik für LLM-gestützte Werkzeugentwicklung in den Digital Humanities.

**Live Demo:** [dhcraft.org/PromptotypingExplainer](https://dhcraft.org/PromptotypingExplainer)

## Was ist Promptotyping?

> Das Mapping von semantisch reichhaltigen Forschungsdaten und explizitem Forschungskontext auf funktionale Interfaces durch iterative Mensch-LLM-Kollaboration.

Promptotyping ist eine sechsphasige Methodik:
1. **CONTEXT** – Epistemischer Rahmen in README.md
2. **DATA** – Strukturanalyse der Forschungsdaten
3. **EXPLORATION** – Iterative LLM-Dialoge
4. **REQUIREMENTS** – Formalisierung in REQUIREMENTS.md
5. **IMPLEMENTATION** – Epistemisches Protokoll
6. **PROTOTYPE** – Funktionales Interface

## Tech Stack

- **Svelte 5** – Reaktives UI-Framework
- **GSAP ScrollTrigger** – Scroll-basierte Animationen mit Pinning
- **Vite** – Build-Tool und Dev-Server

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
├── App.svelte              # Haupt-Layout, Phasen-Orchestrierung
├── lib/
│   ├── components/
│   │   ├── Phase.svelte           # ScrollTrigger-Wrapper mit Pinning
│   │   ├── ProgressIndicator.svelte
│   │   ├── scenes/                # Pro Phase eine Szene
│   │   │   ├── IntroScene.svelte
│   │   │   ├── Phase1Scene.svelte
│   │   │   ├── Phase2Scene.svelte
│   │   │   ├── Phase3Scene.svelte
│   │   │   ├── Phase4Scene.svelte
│   │   │   └── OutroScene.svelte
│   │   └── elements/              # Wiederverwendbare UI-Elemente
│   └── stores/
│       └── scroll.js              # Svelte Stores für Progress/Phase
└── app.css                        # Design System (Slate/Terracotta)
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
