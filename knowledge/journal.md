# Journal: Promptotyping Explainer

Arbeitstagbuch zur Entwicklung der Scrollytelling-Website.

---

## 2025-12-07: Phasenmodell-Korrektur

### Kritische Klarstellung: Wo entstehen .md-Files?

Problem: Die bisherige Dokumentation war inkonsistent. Manche Stellen suggerierten, dass .md-Files (DATA.md, CONTEXT.md) bereits in Phase 1 (Preparation) entstehen.

Korrektur: Alle .md-Files entstehen ausschließlich in Phase 3 (Destillation):
- Preparation: Rohdateien (.doc, .xml, PDFs) – keine .md
- Exploration: Keine formalen Artefakte
- Destillation: DATA.md, REQUIREMENTS.md, CONTEXT.md
- Implementation: Prototype(n) + Vault-Updates

Beispiel-Workflow:
1. Phase 1: .doc mit Editionstext + 3 Kontextdokumente sammeln
2. Phase 2: Python-Script analysiert Struktur des .doc
3. Phase 3: Aus der Analyse → DATA.md; Kontext → CONTEXT.md; Anforderungen → REQUIREMENTS.md
4. Phase 4: .md-Files an LLM → Prototype

### Aktualisierte Dateien

- paper/00-index.md: Phasen-Tabelle korrigiert
- paper/03-methodology.md: Phase 3 enthält jetzt alle .md-Files, Phase 4 nur Prototypes + Vault-Updates
- journal.md: Tabelle aktualisiert
- knowledge.md: War bereits korrekt

### Terminologie-Änderung

- README.md → CONTEXT.md (konsistentere Benennung)
- INSTRUCTIONS.md entfernt (war redundant, Implementierungsdetails fließen als Vault-Updates in bestehende Docs)

---

## 2025-12-06: Projektstart und Grundstruktur

### Ausgangslage

Drei Wissensdokumente existierten bereits:
- knowledge.md mit Inhalt, Visual System und Scroll-Logic
- requirements.md mit User Stories und Constraints (von mir angelegt)
- implementation.md mit Tech-Stack-Planung

Problem: Redundanzen zwischen den Dokumenten. Die Scroll-Logic war in knowledge.md und implementation.md unterschiedlich beschrieben. Prompts waren paraphrasiert statt original.

### Entscheidung: Dokumentstruktur konsolidiert

Neue Zuständigkeiten definiert:
- knowledge.md = Single Source of Truth für Inhalt und Animationen
- requirements.md = Zielgruppen, User Stories, Constraints
- implementation.md = nur technische Details, verweist auf knowledge.md

PLAN.md gelöscht (war redundant).

### Tech-Stack-Entscheidung

Ursprünglicher Plan: React 18 + Framer Motion.

Geändert zu: Svelte 5 + GSAP ScrollTrigger.

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
- Phase.svelte – Wrapper mit ScrollTrigger-Pinning
- ProgressIndicator.svelte – Navigation rechts
- IntroScene.svelte – Titel, Frage, Phasen-Icons
- Phase1Scene.svelte – Dokument-Icons fliegen zur Mitte
- DocumentIcon.svelte – SVG-Komponente für Dateitypen

Erster Fehler: Svelte 5 Slot-Syntax hatte sich geändert. slot="default" ist nicht mehr erlaubt neben let:progress. Fix: let:progress direkt auf dem Parent-Element.

### Stand Ende des Tages

IntroScene und Phase1Scene funktionieren. Scroll-Progress wird korrekt berechnet. Animationen laufen flüssig.

---

## 2025-12-06: Alle Szenen implementiert

### Neue Komponenten

Phase2Scene.svelte – Exploration:
- Chat-Dialog zwischen User und Claude
- ChatBubble-Komponente mit Typing-Animation
- Drei Fragen nacheinander eingeblendet
- EntityIcons (Briefumschläge) die sich verbinden

Phase3Scene.svelte – Destillation:
- Drei-Spalten-Layout: Rohmaterial | Vault | Ideen
- Partikel fließen von links/rechts zum Vault
- Dokumente erscheinen nacheinander: data.md, user-story.md, context.md
- VaultIcon mit Pulsieren-Animation

Phase4Scene.svelte – Implementation:
- Echte Prompts aus CorrespExplorer-Entwicklung
- BrowserFrame zeigt Interface-Evolution
- Vier Zustände: skeleton → wireframe → error → network
- ConnectionLine zwischen Chat und Browser

### Element-Komponenten

- ChatBubble.svelte – Sprechblasen mit User/Claude-Styling
- EntityIcon.svelte – Briefumschlag-Symbol für Korrespondenz
- VaultIcon.svelte – Ordner mit Pulsieren und Dokument-Liste
- BrowserFrame.svelte – Interface-Mockup mit vier Zuständen
- ConnectionLine.svelte – SVG-Linie zwischen Elementen

### Build-Status

Build erfolgreich. Alle 139 Module kompiliert.
- CSS: 17.98 kB (gzip: 3.74 kB)
- JS: 175.71 kB (gzip: 67.08 kB)

### Offene Punkte

- Testen der vollständigen Scroll-Experience im Browser
- Feintuning der Timing-Parameter
- Reduced-Motion-Fallback vervollständigen

---

## 2025-12-06: Akademischer Fließtext und Scroll-Optimierung

### Scroll-Smoothness verbessert

Problem: Scrollen fühlte sich nicht flüssig an.

Analyse ergab drei Ursachen:
1. scrub: true (1:1 Mapping) ohne Interpolation
2. Inline-Styles ohne CSS-Transitions
3. Keine GPU-Layer auf Kind-Elementen

Lösung:
- Phase.svelte: scrub: 0.5 statt scrub: true
- Phase.svelte: preventOverlaps: true hinzugefügt
- app.css: CSS-Transitions (0.15s ease-out) für alle Szenen-Kinder
- app.css: GPU-Compositing mit transform: translateZ(0) und backface-visibility: hidden

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

## 2025-12-06: UI-Verbesserungen und Performance

### Progress-Indikator erweitert

Neue Features:
- Vertikale Verbindungslinie zwischen den Punkten
- Linie füllt sich mit Terracotta je nach Fortschritt
- Abgeschlossene Phasen zeigen Häkchen-Icon
- Aktiver Punkt hat subtilen Glow-Effekt (box-shadow)
- Mobile: Horizontale Linie am unteren Rand

Story-Bezug: Visualisiert den kontinuierlichen Flow des Promptotyping-Prozesses.

### Hintergrund-Gradient je nach Phase

Subtiler radialer Gradient, der die "Temperatur" der Phasen vermittelt:
- Intro/Phase 1: Neutral (Slate, sehr dezent)
- Phase 2: Kühl/analytisch (Slate-Tint links)
- Phase 3: Aufwärmend (leichter Terracotta-Tint)
- Phase 4: Heiß (stärkerer Terracotta-Tint rechts)
- Outro: Abgeklungene Wärme

Story-Bezug: knowledge.md definiert "Slate = Kaltes Gegebene, Terracotta = Hitze des Prozesses".

### Scroll-Performance optimiert

Änderungen:
- scrub: 1.2 statt scrub: 0.5 (längere Interpolation, smoothere Animation)
- invalidateOnRefresh: true für korrekte Berechnung bei Resize
- contain: layout style paint auf .phase (Browser kann Bereiche isolieren)
- isolation: isolate auf Scene-Containern
- Entfernt: will-change auf allen Kindern (verbrauchte zu viel GPU-Speicher)
- Entfernt: CSS-Transitions, die mit GSAP scrub konfligierten

---

## 2025-12-06: Finale Scroll-Kalibrierung

### Problem: Phasen werden übersprungen

Console-Logging ergab: Bei schnellem Scrollen springt Progress von 0% auf 90%+. Phasen werden nicht sauber durchlaufen.

### Analyse

1. scrub: 1.2 war noch zu aggressiv für schnelles Scroll-Input
2. fastScrollEnd: true ließ GSAP bei schnellem Scrollen direkt ans Ende springen
3. onLeave/onLeaveBack Callbacks ohne Funktion (nur Debug-Logs)

### Lösung (iterativ)

Erste Iteration:
- scrub: 2 – längere Interpolationszeit
- fastScrollEnd: false – verhindert abrupte Sprünge

Zweite Iteration (nach User-Feedback "besser aber nicht perfekt"):
- scrub: 1.5 – Kompromiss zwischen Reaktivität und Smoothness
- ease: 'power2.out' – natürlichere Verzögerungskurve
- will-change: opacity auf Szenen-Containern – GPU-Hint für Opacity-Animationen

### Aktuelle ScrollTrigger-Konfiguration

```javascript
ScrollTrigger.create({
  scrub: 1.5,
  anticipatePin: 1,
  fastScrollEnd: false,
  preventOverlaps: true,
  invalidateOnRefresh: true,
  ease: 'power2.out',
});
```

---

## 2025-12-06: UX-Verbesserungen und Glossar-Integration

### Neue Komponenten

PhaseHeader.svelte – Fixierter Header:
- Zeigt aktuelle Phase und Namen
- Fortschrittsbalken unterhalb
- Verschwindet bei 0% und 100% Progress

GlossaryTerm.svelte – Interaktive Tooltips:
- Hover/Click zeigt Definition, Tags und Quelle
- 20+ AI/LLM-Begriffe aus glossar_de.md
- Farbcodierte Tags (prompting, ai-engineering, etc.)

glossary.js – Datenbasis:
- Begriffe: Context Engineering, LLM, Sycophancy, Token, etc.
- Integriert in IntroScene, Phase3Scene, Phase4Scene

### ProgressIndicator erweitert

- Sub-Phasen mit Mini-Fortschrittsbalken
- Dauer-Hints (●, ●●, ●●●) für relative Phasenlänge

### Rückschleifen-Button (US-04)

- Toggle-Button erscheint nach Success-State in Phase 4
- Animierte SVG-Linien zeigen Feedback-Loops
- Terracotta: Kontext erweitern, Slate: Daten ergänzen
- Erklärungstext: "Der Prozess ist nicht linear"

### Kontinuierlicher Hintergrund-Gradient

- Farbe ändert sich basierend auf globalProgress
- Temperatur-Metapher: Slate (kalt) → Terracotta (heiß) → Abkühlung
- Position wandert von links (30%) nach rechts (70%)
- Intensität steigt von 4% auf 16%
- Farbinterpolation mit lerp()-Funktion

---

## 2025-12-06: Code-Refactoring

### Neue Utility-Komponenten

SceneHeader.svelte (blocks/):
- Extrahiert aus 5x dupliziertem Header-Code
- Props: number, title, metaphor, opacity

AcademicBlock.svelte (blocks/):
- Extrahiert aus 4x dupliziertem Text-Block-Code
- Props: opacity, maxWidth
- Globale Styles für p, code, strong, .highlight

progressAnimations.js (utils/):
- fadeIn(progress, start, end) – Opacity 0→1
- fadeOut(progress, start, end, min) – Opacity 1→min
- lerp(progress, start, end, from, to) – Wert-Interpolation
- inRange(progress, start, end) – Boolean-Check
- countVisible(progress, start, duration, total) – Sichtbare Elemente
- ease(t, type) – Easing-Funktionen

### CSS Design System erweitert

Neue Variablen in app.css:
```css
--color-code-keyword: #7c3aed;
--color-code-function: #2563eb;
--color-code-string: #16a34a;
--color-code-bg: #f5f5f5;
```

BrowserFrame.svelte nutzt nun CSS-Variablen statt Hardcodes.

### Refactoring-Ergebnisse

- Phase1Scene.svelte: 232 → 174 (-25%)
- Phase2Scene.svelte: 415 → 377 (-9%)
- Phase3Scene.svelte: 310 → 256 (-17%)
- Phase4Scene.svelte: 549 → 520 (-5%)

Ungenutzter CSS-Selector .academic-text strong in Phase4Scene entfernt.

---

## 2025-12-06: URL-Navigation und Scroll-Kalibrierung

### URL-basierte Deep-Links

Neue Features in scroll.js:
- scrollToHash() – Navigiert zu URL-Hash beim Laden
- updateHash() – Aktualisiert URL während Scrollen (replaceState)
- phaseBoundaries.steps[] – Sub-Step-IDs für jede Phase

URL-Format: #phase1-workspace, #intro-system142, #phase4-loops

### Scroll-Länge erhöht

Problem: Sub-Steps wechselten zu schnell (20-30vh pro Step).

Lösung: ~60vh pro Sub-Step für ca. ein volles Scroll-Wheel.

Vorher: 720vh total
Nachher: 1620vh total

Phase-Höhen werden jetzt dynamisch aus phaseBoundaries berechnet (Phase.svelte).

### ProgressIndicator mit klickbaren Sub-Steps

- Sub-Step-Dots sind jetzt Buttons
- Klick setzt window.location.hash → löst Navigation aus
- Hover zeigt Step-Namen als Title-Attribut

### GlossaryTerm: Panel bleibt offen

Geändert: Panel schließt nicht mehr bei Mouse-Leave.
Schließt nur bei: X-Button klicken, Term erneut klicken, 2s Scrolling.

### Console-Logging für Debug

updateHash() loggt Step-Übergänge:
```
📍 Promptotyping [2/5] → system142 | progress: 25%
📍 Vorbereitung [3/5] → sammeln | progress: 49%
```

---

## Offene Fragen

- [x] Partikel-Animation in Phase 3: Wie viele Elemente sind performant? -> 5 funktioniert
- [x] Phase 4 Browser-Frame: Echtes Code-Snippet oder stilisiert? -> Stilisiert
- [x] Rückschleifen-Visualisierung: Button oder automatisch? -> Ersetzt durch Vault-Update-Konzept
- [x] Scroll-Geschwindigkeit: Wie viel vh pro Sub-Step? -> 60vh (ein Scroll-Wheel)
- [ ] Mobile: Horizontal-Scroll oder vereinfachte Animationen?
- [ ] Placeholder-Steps durch echte Inhalte ersetzen

---

## 2025-12-07: Narrativ-Überarbeitung und Phasenmodell-Konsolidierung

### Narrativ-Änderungen

Basierend auf User-Feedback wurden folgende konzeptionelle Änderungen vorgenommen:

1. "Produktive Kränkung" entfernt
Das persönliche Narrativ wurde durch ein sachliches Problem-Statement ersetzt:
"Forschungswissen bleibt oft in Dokumenten gefangen. Die Herausforderung: Wie kommuniziert man Domänenwissen so an ein LLM, dass es passende Werkzeuge generiert?"

2. Vibe Coding: Komplementär statt gegensätzlich
Promptotyping ist kein Gegenentwurf zu Vibe Coding, sondern ein strukturierter Context-Engineering-Prozess MIT Vibe-Coding-Elementen. Die intuitive, explorative Arbeitsweise wird beibehalten.

3. Rückschleifen → Vault-Updates
Das Konzept "Rückschleifen" wurde ersetzt durch "Vault-Updates": Jede Iteration generiert neues Wissen, das in den Vault zurückfließt. Die .md-Dateien wachsen mit jeder Iteration.

4. Prompting-Strategien statt Beispiel-Prompts
Keine festen Prompt-Templates, sondern Meta-Ansätze:
- Orientierung geben
- Verständnis prüfen
- Qualität einfordern
- Entscheidungen treffen
- Reflexion erzwingen
- Validierung durch Tests

### Phasenmodell konsolidiert

Das sechsphasige Modell aus dem Paper wurde auf vier Hauptphasen gemappt:
- Preparation: Rohmaterial sammeln – Rohdateien (.doc, .xml, PDFs)
- Exploration: Analyse & Experimente – (keine - epistemische Spielwiese)
- Destillation: Wissen destillieren – DATA.md, REQUIREMENTS.md, CONTEXT.md
- Implementation: Iterativ prototypen – Prototype(n) + Vault-Updates

Kern-Insight: Jede Implementation-Iteration produziert einen neuen Prototype mit potentiellem Vault-Update.

### Dateien aktualisiert

- knowledge.md: Neues Narrativ, Phasenbeschreibungen
- WEBSITE-OUTLINE.md: Vault-Update statt Rückschleife in Phase 4
- paper/00-index.md: Vierphasiges Modell-Diagramm
- paper/03-methodology.md: Phasen-Struktur neu gruppiert
- paper/04-scholar-centered-design.md: Vault-Update Terminologie
- requirements.md: US-04 umformuliert (Vault-Updates verstehen)
- implementation.md: Entscheidungstabelle aktualisiert
- scroll.js: Step-Labels und IDs aktualisiert
- App.svelte: Step-IDs korrigiert (phase4-vault-update statt phase4-rueckschleifen)

### Scroll-Snap-Architektur

Die GSAP-Pinning-basierte Animation wurde durch CSS scroll-snap ersetzt:
- Jeder Step ist eine 100vh-Section mit scroll-snap-align: start
- IntersectionObserver erkennt aktive Steps
- Flüssigeres Scrolling, bessere Performance

### Learnings

Terminologie ist wichtig: "Rückschleifen" suggeriert Fehlerkorrektur. "Vault-Update" betont den Wissenszuwachs - jede Iteration macht den Vault besser, nicht nur den Code.

Vibe Coding ist kein Feind: Die Abgrenzung war zu stark. Promptotyping strukturiert Vibe Coding für Forschungskontexte, ersetzt es nicht.
