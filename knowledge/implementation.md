# Implementation: Promptotyping Explainer

> **Status**: Implementiert und live unter [dhcraft.org/PromptotypingExplainer](https://dhcraft.org/PromptotypingExplainer)

**Weitere Dokumente im Vault:**
- [knowledge.md](knowledge.md) – Single Source of Truth für Inhalt, Visual System, Scroll-Logic
- [requirements.md](requirements.md) – Zielgruppen, User Stories, technische Constraints

---

## Tech Stack

| Komponente | Technologie | Begründung |
|------------|-------------|------------|
| Framework | Svelte 5 | Kompiliert zu Vanilla JS, kleine Bundles, kein Runtime-Overhead |
| Build | Vite | Schnell, einfaches GitHub Pages Setup |
| Animationen | GSAP + ScrollTrigger | Industrie-Standard für scroll-basierte Animationen, Pinning-Support |
| Styling | CSS Variables + Svelte Scoped Styles | Native Svelte-Lösung, kein Extra-Setup |
| Fonts | Inter + JetBrains Mono (self-hosted) | Performance, Privacy |
| Deployment | GitHub Pages via Actions | Automatisch bei Push auf main |

---

## Dateistruktur

```
PromptotypingExplainer/
├── src/
│   ├── lib/
│   │   ├── components/
│   │   │   ├── Phase.svelte              # ScrollTrigger-Wrapper mit dynamischer Höhe
│   │   │   ├── ProgressIndicator.svelte  # Navigation mit Sub-Steps
│   │   │   ├── PhaseHeader.svelte        # Fixierter Header mit Fortschritt
│   │   │   ├── GlossaryTerm.svelte       # Interaktive Tooltips (Side-Panel)
│   │   │   ├── scenes/
│   │   │   │   ├── IntroScene.svelte
│   │   │   │   ├── Phase1Scene.svelte
│   │   │   │   ├── Phase2Scene.svelte
│   │   │   │   ├── Phase3Scene.svelte
│   │   │   │   ├── Phase4Scene.svelte
│   │   │   │   └── OutroScene.svelte
│   │   │   ├── elements/
│   │   │   │   ├── DocumentIcon.svelte
│   │   │   │   ├── EntityIcon.svelte
│   │   │   │   ├── VaultIcon.svelte
│   │   │   │   ├── ChatBubble.svelte
│   │   │   │   └── BrowserFrame.svelte
│   │   │   └── blocks/
│   │   │       ├── SceneHeader.svelte    # Extrahierter Header-Block
│   │   │       └── AcademicBlock.svelte  # Extrahierter Text-Block
│   │   ├── stores/
│   │   │   └── scroll.js                 # Stores + URL-Navigation
│   │   ├── data/
│   │   │   ├── phases.js
│   │   │   ├── prompts.js
│   │   │   └── glossary.js               # 20+ AI/LLM-Begriffe
│   │   └── utils/
│   │       └── progressAnimations.js     # fadeIn, lerp, ease, etc.
│   ├── assets/images/                    # Screenshots für Case Studies
│   ├── app.css
│   ├── App.svelte
│   └── main.js
├── index.html
├── vite.config.js
├── svelte.config.js
├── package.json
├── knowledge/                            # Wissensvault
│   ├── knowledge.md
│   ├── requirements.md
│   ├── implementation.md
│   ├── journal.md
│   ├── glossar_de.md
│   ├── paper-draft.md
│   ├── CONTEXT-MAP.md
│   ├── VAULT-RULES.md
│   └── case-studies/                     # 7 reale Beispiele
└── docs/                                 # GitHub Pages Output
```

---

## Komponenten-Spezifikation

### ProgressIndicator.svelte

```svelte
<script>
  export let currentPhase = 0;
  export let phases = [];

  function scrollToPhase(index) {
    // GSAP scrollTo Plugin
  }
</script>
```

**Verhalten:** Siehe knowledge.md → TEIL 3 → Progress-Indikator

### Phase.svelte

```svelte
<script>
  import { onMount } from 'svelte';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';

  export let id;
  export let index;

  let element;
  let progress = 0;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: element,
      start: 'top top',
      end: 'bottom top',
      pin: true,
      scrub: 1,
      onUpdate: (self) => {
        progress = self.progress;
      }
    });
  });
</script>

<section bind:this={element} {id} class="phase">
  <slot {progress} />
</section>
```

### Element-Komponenten

Alle SVG-basiert, animierbar via GSAP.

**DocumentIcon.svelte**
```svelte
<script>
  export let type = 'xml'; // xml, pdf, csv, md, notes
  export let label = '';
</script>
```

**EntityIcon.svelte**
```svelte
<script>
  export let type = 'person'; // person, place, time, relation
</script>
```

**VaultIcon.svelte**
```svelte
<script>
  export let pulsing = false;
  export let documents = []; // ['data.md', 'user-story.md', 'context.md']
</script>
```

**ChatBubble.svelte**
```svelte
<script>
  export let type = 'human'; // human, llm, error
  export let text = '';
</script>
```

**BrowserFrame.svelte**
```svelte
<script>
  export let state = 'empty'; // empty, code, wireframe, interface
</script>

<div class="browser">
  <div class="browser-chrome">
    <span class="dot red"></span>
    <span class="dot yellow"></span>
    <span class="dot green"></span>
  </div>
  <div class="browser-content">
    <slot />
  </div>
</div>
```

---

## Scroll-Store

```javascript
// src/lib/stores/scroll.js
import { writable, derived } from 'svelte/store';

export const globalProgress = writable(0);
export const currentPhase = writable(0);

// Derived: Progress innerhalb der aktuellen Phase (0-1)
export const phaseProgress = derived(
  [globalProgress, currentPhase],
  ([$global, $phase]) => {
    const phaseStart = $phase / 5;
    const phaseEnd = ($phase + 1) / 5;
    return ($global - phaseStart) / (phaseEnd - phaseStart);
  }
);
```

---

## Daten-Module

### phases.js

```javascript
// Referenziert knowledge.md → TEIL 1 → Die vier Phasen
export const phases = [
  {
    id: 'intro',
    title: 'Promptotyping',
    subtitle: 'Vom Wissen zum Werkzeug',
  },
  {
    id: 'phase1',
    title: 'Vorbereitung',
    subtitle: 'Materialsammlung',
    artifacts: ['XML', 'PDF', 'CSV', 'Notizen'],
  },
  {
    id: 'phase2',
    title: 'Exploration',
    subtitle: 'Datenanalyse',
    entities: ['Person', 'Ort', 'Zeit', 'Relation'],
  },
  {
    id: 'phase3',
    title: 'Destillation',
    subtitle: 'Wissenskomprimierung',
    documents: ['data.md', 'user-story.md', 'context.md'],
  },
  {
    id: 'phase4',
    title: 'Implementation',
    subtitle: 'Iterative Entwicklung',
  },
];
```

### prompts.js

```javascript
// Echte Prompts aus CorrespExplorer-Entwicklung
// Quelle: knowledge.md → Arbeitsiterationen
export const prompts = [
  {
    id: 1,
    type: 'human',
    text: 'Was müssen wir im HSA-Knowledge-Ordner dokumentieren?',
    pattern: 'Orientierung geben',
  },
  {
    id: 2,
    type: 'llm',
    text: 'Für eine klare Struktur empfehle ich drei Kerndokumente...',
  },
  {
    id: 3,
    type: 'human',
    text: 'hsa-test.html dient nur zum Testen. Wir wollen die Grundlagen des Herdata-Projekts nutzen, um die vorhandenen Views darzustellen. Außerdem soll es möglich sein, auch andere CMIF.xml-Daten zu importieren. Ist das klar für dich?',
    pattern: 'Verständnis prüfen',
  },
  {
    id: 4,
    type: 'human',
    text: 'Knowledge-HSA hat eine flache Struktur mit mehreren .md-Dateien. Du brauchst keine Unterordner. Wir brauchen immer destillierte, informative .md-Dateien, die auf dem neuesten Stand sind!',
    pattern: 'Qualität einfordern',
  },
  {
    id: 5,
    type: 'error',
    text: 'TypeError: Cannot read property "correspondents" of undefined',
  },
  {
    id: 6,
    type: 'human',
    text: 'Schreib einen Test, der prüft, ob die CMIF-Daten korrekt geladen werden und die Anzahl der correspDesc-Elemente mit der Anzeige übereinstimmt.',
    pattern: 'Validierung durch Tests',
  },
  {
    id: 7,
    type: 'llm',
    text: 'Der Fehler liegt in der XML-Parsing-Logik. Ich korrigiere den Namespace-Handler...',
  },
];
```

---

## CSS Design Tokens

```css
/* src/app.css */
:root {
  /* Farben – definiert in knowledge.md → TEIL 2 → Farbpalette */
  --color-slate: #607D8B;
  --color-terracotta: #BF5B3E;
  --color-white: #FFFFFF;
  --color-black: #1A1A1A;
  --color-success: #4CAF50;
  --color-error: #E53935;
  --color-progress: #FF9800;

  /* Typografie */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* Spacing */
  --space-xs: 0.25rem;
  --space-sm: 0.5rem;
  --space-md: 1rem;
  --space-lg: 2rem;
  --space-xl: 4rem;

  /* Animation – definiert in knowledge.md → TEIL 2 → Animationsprinzipien */
  --duration-fast: 300ms;
  --duration-normal: 500ms;
  --duration-slow: 800ms;
  --ease-out: cubic-bezier(0.0, 0.0, 0.2, 1);
  --ease-in-out: cubic-bezier(0.4, 0.0, 0.2, 1);
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Build-Konfiguration

### vite.config.js

```javascript
import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],
  base: '/PromptotypingExplainer/',
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
});
```

### package.json

```json
{
  "name": "promptotyping-explainer",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "@sveltejs/vite-plugin-svelte": "^4.0.0",
    "svelte": "^5.0.0",
    "vite": "^6.0.0"
  },
  "dependencies": {
    "gsap": "^3.12.0"
  }
}
```

### .github/workflows/deploy.yml

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '22'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./docs

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

## Implementierungsreihenfolge

### 1. Setup
- [ ] Vite + Svelte initialisieren
- [ ] GSAP installieren
- [ ] CSS Variables aus knowledge.md übernehmen
- [ ] Fonts einbinden
- [ ] GitHub Actions Workflow

### 2. Scroll-Infrastruktur
- [ ] Scroll-Store
- [ ] Phase.svelte mit ScrollTrigger Pinning
- [ ] ProgressIndicator.svelte

### 3. Szenen (gemäß knowledge.md → TEIL 3)
- [ ] IntroScene.svelte
- [ ] Phase1Scene.svelte + DocumentIcon.svelte
- [ ] Phase2Scene.svelte + EntityIcon.svelte + ConnectionLine.svelte
- [ ] Phase3Scene.svelte + VaultIcon.svelte
- [ ] Phase4Scene.svelte + ChatBubble.svelte + BrowserFrame.svelte

### 4. Polish
- [ ] Reduced Motion Support
- [ ] Keyboard Navigation
- [ ] ARIA Labels
- [ ] OG-Image
- [ ] Performance-Check

---

## Entscheidungen

| Frage | Entscheidung | Begründung |
|-------|--------------|------------|
| Styling-Ansatz | Svelte Scoped + CSS Variables | Native, kein Extra-Build |
| Font Loading | Self-hosted | Performance, DSGVO |
| Partikel in Phase 3 | 3-5 Elemente | Performance, Klarheit |
| Code in Phase 4 | Stilisierte Blöcke | Keine Syntax-Highlighting-Lib nötig |
| Vault-Updates | Partikel-Animation | Wissensrückfluss visuell darstellen |

---

## Journal

### 2024-12-06: Dokumentstruktur konsolidiert

- Tech Stack geändert: React → Svelte + GSAP
- implementation.md refactored: nur noch technische Details
- knowledge.md ist Single Source of Truth für Inhalt und Animationen
- Echte Prompts aus knowledge.md übernommen
