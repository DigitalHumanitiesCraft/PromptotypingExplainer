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

## Offene Fragen

- [ ] Partikel-Animation in Phase 3: Wie viele Elemente sind performant?
- [ ] Phase 4 Browser-Frame: Echtes Code-Snippet oder stilisiert?
- [ ] Rückschleifen-Visualisierung: Button oder automatisch?
- [ ] Mobile: Horizontal-Scroll oder vereinfachte Animationen?

---

## Learnings

**Svelte 5 Breaking Changes**: Die Slot-API hat sich geändert. Dokumentation sorgfältig lesen bei neuen Major-Versionen.

**GSAP ScrollTrigger Pinning**: Funktioniert gut, aber die `end`-Berechnung muss zur tatsächlichen Scroll-Länge passen. Bei 600vh Gesamtlänge müssen die einzelnen Phasen korrekt aufaddiert werden.

**Promptotyping in der Praxis**: Dieses Projekt ist selbst ein Beispiel für Promptotyping. Der Knowledge-Vault mit den drei Dokumenten ist die destillierte Wissensbasis, aus der die Implementation entsteht.
