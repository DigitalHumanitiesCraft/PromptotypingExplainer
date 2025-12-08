# Journal: Promptotyping Explainer

Arbeitstagbuch zur Entwicklung der Scrollytelling-Website.

## 2025-12-08 Abend: Intro-Struktur, Mollick 2025, Deep Dives

### Tasks
- Intro-Seiten neu strukturiert (Vibe Coding → Strange New Minds → Kernprinzip)
- Neue Referenzen eingearbeitet (Mollick 2025, Karpathy 2025, tante 2025, Jimenez et al. 2024)
- Deep Dives auf Fließtext umgestellt
- Fundamentale Spannung formuliert

### Ergebnisse
**Intro-Struktur erweitert (4 → 6 Steps):**
1. Definition
2. **Vibe Coding** (NEU): Frontier-LLMs, Benchmarks, Karpathy, tante-Kritik
3. **Strange New Minds** (NEU): Summerfield, Lindsey, System 1.42, Co-Intelligence, Sycophancy
4. Kernprinzip: Mollick-Shift, fundamentale Spannung
5. Methodik
6. Phasen

**Neue Referenzen:**
- Mollick 2025: "Three Years from GPT-3 to Gemini 3" (One Useful Thing)
- Karpathy 2025: Vibe Coding Tweet
- tante 2025: "On Vibe Coding" (Kritik)
- Jimenez et al. 2024: SWE-bench
- Laude Institute 2025: Terminal-bench

**Fundamentale Spannung formuliert:**
> LLMs liefern oft sehr gute Ergebnisse und können gleichzeitig nie Verlässlichkeit garantieren. Diese Spannung ist nicht auflösbar, nur durch fachliche Prüfung handhabbar.

**Deep Dive Vibe Coding:** Auf Fließtext umgestellt (war Bullet-Points). Referenzen mit Links.

**Deep Dive Trigger:** Co-Intelligence entfernt (redundant), System 1.42 mit Blog-Titel.

### Entscheidungen
- Mollick-Shift sachlich statt "Dirigent/Validator" (vermeidet Management-Sprech)
- tante-Kritik als Ergänzung zu Karpathy (differenzierte Sicht)
- Deep Dives in Prosa statt Bullet-Point-Listen (bessere Lesbarkeit)
- Co-Intelligence bleibt im Text, Deep Dive entfernt (nicht genug eigenständiger Inhalt)

### Paper-Updates
- 01-introduction.md: Neue Einleitung mit Benchmarks, Mollick, Karpathy, tante
- 02-theoretical-foundation.md: "Fundamentale Spannung" als Kernproblem
- 07-references.md: Alle neuen Referenzen
- WEBSITE-OUTLINE.md: 19 Steps, Deep Dive Struktur

---

## 2025-12-08: Terminologie, Phase 2 & LLM-Retrieval

### Tasks
- "Epistemische Spielwiese" entfernt
- Phase 2 neu definiert
- Vault-Flexibilität betont
- LLM-Retrieval Deep Dive erstellt
- Latent Space und Context Rot erweitert

### Ergebnisse
**Terminologie bereinigt:** "Epistemische Spielwiese" aus 9 Quelldateien entfernt, ersetzt durch "Datenanalyse".

**Phase 2 verfeinert:**
- Neuer Subtitle: "Daten-Kontext-Relationen"
- Narrativ: Systematische Sondierung der Schnittstelle zwischen Rohdaten und Forschungskontext
- Sackgassen als positive Erkenntnisse geframt
- User-Story-Validierung als Kernfunktion

**Vault als flexibles System:**
- Glossar: Promptotyping Documents "bilden den Ausgangspunkt, können aber je nach Domäne erweitert werden"
- IntroMethodik: "Flexible Markdown-Dokumente"
- OutroZusammenfassung: Erweiterbarkeit explizit genannt

**Neuer Deep Dive "LLMs als Retrieval-Systeme":**
- Chollet: "vector programs", keine Reasoning-Engines
- Hochreiter: LLMs als approximative Datenbanken
- Kambhampati: "approximate retrieval – not reasoning"
- Latent Space als Abrufraum erklärt

**Phase 4 aktualisiert:**
- "Reasoning" in Anführungszeichen (approximatives Retrieval)
- "Gezielte Auswahl" statt nur "Vault übergeben"
- Deep Dive Trigger in Phase4Iteration

**Glossar erweitert:**
- Latent Space hinzugefügt (Liu et al. 2023)
- Context Rot: Rauschen/Aufmerksamkeits-Mechanismus ergänzt

### Entscheidungen
- Chollet/Hochreiter/Kambhampati statt System 1.42 für Retrieval-Erklärung (konkreter, zitierfähig)
- Latent Space als Brücke zwischen Retrieval und Vektorarithmetik
- Phase 2 bleibt artefaktfrei, Output ist Wissen über Datenqualität

### Commits
- `a80c7e7` Remove 'epistemische Spielwiese' terminology
- `a1c9347` Refine Phase 2: Daten-Kontext-Relationen
- `87af87f` Add LLM-Retrieval Deep Dive and update Phase 4
- `cb2359d` Add Latent Space concept and enhance Context Rot definition

---

## 2025-12-07 Nacht: CSS-Refactoring & Untertitel

### Tasks
- CSS-Analyse des gesamten Projekts
- Globale Klassen extrahiert
- Untertitel überarbeitet

### Ergebnisse
**CSS-Refactoring** in app.css:
- `.text-card` global extrahiert (white background, padding, border-radius, box-shadow, p-Styling, strong in terracotta)
- `.promptotyping` global extrahiert (mono font, bold, terracotta, letter-spacing)
- Veraltete Scene-Selektoren entfernt

**Komponenten umgestellt:**
- OutroZusammenfassung: nutzt jetzt globale `.text-card`
- Phase4Iteration: `.explainer-side` nutzt `.text-card`
- IntroDefinition: lokale `.promptotyping` entfernt, unused CSS entfernt

**Untertitel geändert:**
- Alt: "Strukturiertes Context Engineering mit Vibe-Coding-Elementen"
- Neu: "Context Engineering: Vom Wissen zum Werkzeug"

### Entscheidungen
- Nur sichere Refactorings (klare Duplikate)
- Komponenten mit Abweichungen (IntroKernprinzip) nicht umgestellt
- Untertitel schließt narrativen Bogen zum Outro

---

## 2025-12-07 Nacht: AnimatedChat & Reasoning-Zyklus

### Tasks
- AnimatedChat-Komponente für Phase 4 Iteration erstellt
- Meta-Beispiel implementiert (Entstehungsprozess dieser Website)
- Vollständiger Reasoning-Zyklus visualisiert
- Grid-Layout für Chat + Erklärtext

### Ergebnisse
**AnimatedChat.svelte** erstellt mit 8-Message-Loop-Animation. Zeigt den vollständigen Promptotyping-Workflow: Context → Reasoning → Plan → Implementation → Test → Feedback → Dokumentation.

**Meta-Beispiel** statt generischem Beispiel: Die Animation zeigt exakt den Prozess, der diese Komponente selbst erstellt hat. Authentischer als ein erfundenes Szenario.

**Phase4Iteration.svelte** komplett überarbeitet:
- Grid-Layout: AnimatedChat links, Fließtext-Erklärung rechts
- Pattern-Labels für beide Seiten (human=terracotta, llm=slate)
- Typing-Indicator während LLM "denkt"
- Loop-Animation nach Abschluss (kontinuierliche Demo)

**Fließtext statt Listenformat** für rechte Seite: Konsistenz mit anderen Textblöcken (Blocksatz, weißer Hintergrund, strong-Hervorhebungen in Terracotta).

### Entscheidungen
- Meta-Beispiel statt generischem Beispiel für maximale Authentizität
- Fließtext rechts statt Journal-Einträge (Konsistenz mit Design System)
- 8 Messages zeigen vollständigen Zyklus (nicht gekürzt)
- journal.md-Referenz in letzter LLM-Nachricht schließt den Kreis

---

## 2025-12-07 Spät: Vault-Seite, Blog-Texte, UI-Konsolidierung

### Tasks
- Vault-Seite als Meta-Beispiel implementiert
- Alle Texte auf Forschungsblog-Stil umgestellt
- Hervorhebungselemente konsolidiert
- Styling-Konsistenz durchgesetzt

### Ergebnisse
**Vault.svelte** erstellt mit interaktivem Dateibaum des knowledge/-Ordners. Zeigt die eigene Dokumentation als Meta-Beispiel für Promptotyping-Vaults.

**Blog-Text-Stil** angewendet auf alle Komponenten:
- Weiße Hintergründe mit box-shadow für Leseflächen
- Blocksatz (text-align: justify)
- Keine Dashes (–) oder Colons (:) in Texten

**Hervorhebungselemente konsolidiert:**
- `.context-note` → in `.definition-block` integriert
- `.compression-note` → in `.description` integriert
- Verbleibend: `.key-point` (Kernaussagen), `.example-box` (Beispiele)

**Betroffene Komponenten:**
IntroDefinition, IntroKernprinzip, IntroMethodik, Phase1Titel, Phase1Rohdaten, Phase2Struktur, Phase3Titel, Phase3Dokumente, Phase3Vault, Phase4Titel, Phase4Iteration, Phase4VaultUpdate, OutroBeispiele, OutroZusammenfassung

### Entscheidungen
- Nur 2 didaktische Hervorhebungstypen: Accent (terracotta) für Kernaussagen, Example (slate) für Beispiele
- Alle Textblöcke mit einheitlichem weißen "Lesefläche"-Design
- Vault-Seite in Navigation zwischen About und Glossar

---

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
| Exploration | – | – |
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