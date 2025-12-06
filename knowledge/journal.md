# Journal: Promptotyping Explainer

Arbeitstagbuch zur Entwicklung der Scrollytelling-Website.

---

## 2024-12-06: Projektstart und Grundstruktur

### Ausgangslage

Drei Wissensdokumente existierten bereits:
- `knowledge.md` mit Inhalt, Visual System und Scroll-Logic
- `requirements.md` mit User Stories und Constraints (von mir angelegt)
- `implementation.md` mit Tech-Stack-Planung

Problem: Redundanzen zwischen den Dokumenten. Die Scroll-Logic war in knowledge.md und implementation.md unterschiedlich beschrieben. Prompts waren paraphrasiert statt original.

### Entscheidung: Dokumentstruktur konsolidiert

Neue Zuständigkeiten definiert:
- `knowledge.md` = Single Source of Truth für Inhalt und Animationen
- `requirements.md` = Zielgruppen, User Stories, Constraints
- `implementation.md` = nur technische Details, verweist auf knowledge.md

PLAN.md gelöscht (war redundant).

### Tech-Stack-Entscheidung

Ursprünglicher Plan: React 18 + Framer Motion.

Geändert zu: **Svelte 5 + GSAP ScrollTrigger**.

Begründung:
- Svelte kompiliert zu Vanilla JS, kleinere Bundles
- GSAP ScrollTrigger ist Industrie-Standard für Scroll-Animationen
- Pinning-Support out of the box
- Kein React-Runtime-Overhead

Alternative "Vanilla JS ohne Build" wurde diskutiert, aber verworfen. Für die gewünschte Animationsqualität ist GSAP notwendig, und mit GitHub Actions ist der Build-Step kein Hindernis.

### Implementation gestartet

Setup:
- Vite + Svelte 5 initialisiert
- GSAP installiert
- GitHub Actions Workflow für automatisches Deployment
- CSS Design System aus knowledge.md übernommen

Komponenten erstellt:
- `Phase.svelte` – Wrapper mit ScrollTrigger-Pinning
- `ProgressIndicator.svelte` – Navigation rechts
- `IntroScene.svelte` – Titel, Frage, Phasen-Icons
- `Phase1Scene.svelte` – Dokument-Icons fliegen zur Mitte
- `DocumentIcon.svelte` – SVG-Komponente für Dateitypen

Erster Fehler: Svelte 5 Slot-Syntax hatte sich geändert. `slot="default"` ist nicht mehr erlaubt neben `let:progress`. Fix: `let:progress` direkt auf dem Parent-Element.

### Stand Ende des Tages

IntroScene und Phase1Scene funktionieren. Scroll-Progress wird korrekt berechnet. Animationen laufen flüssig.

---

## 2024-12-06: Alle Szenen implementiert

### Neue Komponenten

**Phase2Scene.svelte** – Exploration:
- Chat-Dialog zwischen User und Claude
- ChatBubble-Komponente mit Typing-Animation
- Drei Fragen nacheinander eingeblendet
- EntityIcons (Briefumschläge) die sich verbinden

**Phase3Scene.svelte** – Destillation:
- Drei-Spalten-Layout: Rohmaterial | Vault | Ideen
- Partikel fließen von links/rechts zum Vault
- Dokumente erscheinen nacheinander: data.md, user-story.md, context.md
- VaultIcon mit Pulsieren-Animation

**Phase4Scene.svelte** – Implementation:
- Echte Prompts aus CorrespExplorer-Entwicklung
- BrowserFrame zeigt Interface-Evolution
- Vier Zustände: skeleton → wireframe → error → network
- ConnectionLine zwischen Chat und Browser

### Element-Komponenten

- `ChatBubble.svelte` – Sprechblasen mit User/Claude-Styling
- `EntityIcon.svelte` – Briefumschlag-Symbol für Korrespondenz
- `VaultIcon.svelte` – Ordner mit Pulsieren und Dokument-Liste
- `BrowserFrame.svelte` – Interface-Mockup mit vier Zuständen
- `ConnectionLine.svelte` – SVG-Linie zwischen Elementen

### Build-Status

Build erfolgreich. Alle 139 Module kompiliert.
- CSS: 17.98 kB (gzip: 3.74 kB)
- JS: 175.71 kB (gzip: 67.08 kB)

### Offene Punkte

- Testen der vollständigen Scroll-Experience im Browser
- Feintuning der Timing-Parameter
- Reduced-Motion-Fallback vervollständigen

---

## 2024-12-06: Akademischer Fließtext und Scroll-Optimierung

### Scroll-Smoothness verbessert

Problem: Scrollen fühlte sich nicht flüssig an.

Analyse ergab drei Ursachen:
1. `scrub: true` (1:1 Mapping) ohne Interpolation
2. Inline-Styles ohne CSS-Transitions
3. Keine GPU-Layer auf Kind-Elementen

Lösung:
- Phase.svelte: `scrub: 0.5` statt `scrub: true`
- Phase.svelte: `preventOverlaps: true` hinzugefügt
- app.css: CSS-Transitions (0.15s ease-out) für alle Szenen-Kinder
- app.css: GPU-Compositing mit `transform: translateZ(0)` und `backface-visibility: hidden`

### Akademischer Fließtext aus paper-draft.md

Anforderung: Neutraler, sachlicher akademischer Text ohne persönliche Note.

Quelle: paper-draft.md enthält vollständigen Methodenpaper-Entwurf.

Änderungen an allen Szenen:

IntroScene:
- Neuer Untertitel: "Methodik LLM-gestützter Werkzeugentwicklung"
- System 1.42 Konzept erklärt
- Zentrale Herausforderung (Evaluationsverfahren)
- Methodischer Ansatz (sechsphasiges Modell)

Phase1Scene (CONTEXT):
- Akademischer Text über README.md als epistemischen Rahmen
- Verhindert unkritische technische Übernahme

Phase2Scene (DATA + EXPLORATION):
- Zwei Textblöcke: DATA-Phase und EXPLORATION-Phase
- DATA: Strukturen, Inkonsistenzen, Normalisierung
- EXPLORATION: "Epistemische Spielwiese" ohne Overhead

Phase3Scene (REQUIREMENTS):
- REQUIREMENTS.md zur Formalisierung
- MUSS/SOLL/KANN Priorisierung
- Context Compression

Phase4Scene (IMPLEMENTATION + PROTOTYPE):
- IMPLEMENTATION: Epistemisches Protokoll (INSTRUCTIONS.md)
- Critical Expert in the Loop + Sycophancy-Tendenz

OutroScene (Konklusion):
- Akademische Schlussfolgerung
- "Kritisch-reflexive Appropriation"
- Drei Imperative: Epistemische Wachsamkeit, Methodische Transparenz, Kritische Solidarität

### Case Studies integriert

7 Case Studies von docs/Case Studies/ nach knowledge/case-studies/ verschoben:
- correspexplorer.md
- aldersbach.md
- diged-neolat.md
- km.md
- stained-glass.md
- imareal-room-object.md
- szd.md

OutroScene zeigt nun 6 reale Beispiele mit Links zu Demos und GitHub.

CONTEXT-MAP.md um Case-Studies-Tabelle erweitert.

---

## Offene Fragen

- [x] Partikel-Animation in Phase 3: Wie viele Elemente sind performant? -> 5 funktioniert
- [x] Phase 4 Browser-Frame: Echtes Code-Snippet oder stilisiert? -> Stilisiert
- [ ] Rückschleifen-Visualisierung: Button oder automatisch?
- [ ] Mobile: Horizontal-Scroll oder vereinfachte Animationen?

---

## Learnings

**Svelte 5 Breaking Changes**: Die Slot-API hat sich geändert. Dokumentation sorgfältig lesen bei neuen Major-Versionen.

**GSAP ScrollTrigger Pinning**: Funktioniert gut, aber die `end`-Berechnung muss zur tatsächlichen Scroll-Länge passen. Bei 600vh Gesamtlänge müssen die einzelnen Phasen korrekt aufaddiert werden.

**Promptotyping in der Praxis**: Dieses Projekt ist selbst ein Beispiel für Promptotyping. Der Knowledge-Vault mit den drei Dokumenten ist die destillierte Wissensbasis, aus der die Implementation entsteht.
