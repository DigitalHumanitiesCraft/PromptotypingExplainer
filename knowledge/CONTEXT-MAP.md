# Knowledge Vault Context Map

Einstiegspunkt für die Navigation im Promptotyping Explainer Vault.

---

## Dokumente im Vault

| Datei | Zweck | Wann lesen |
|-------|-------|------------|
| CONTEXT-MAP.md | Einstiegspunkt, Vault-Übersicht | Zuerst |
| VAULT-RULES.md | Dokumentationsstandards | Bei Änderungen am Vault |
| WEBSITE-OUTLINE.md | Scrollytelling-Struktur | Für Website-Entwicklung |
| knowledge.md | Inhalt, Visual System, Scroll-Logic | Für Content und Animationen |
| requirements.md | Zielgruppen, User Stories, Constraints | Für Anforderungen |
| implementation.md | Tech Stack, Komponenten-Architektur | Für technische Details |
| journal.md | Arbeitstagbuch, Entscheidungen | Für Kontext und Historie |

## Akademische Dokumentation (paper/)

Detaillierte Methodenbeschreibung mit wissenschaftlichen Quellen:

| Kapitel | Inhalt |
|---------|--------|
| 00-index.md | Abstract, Navigation |
| 01-introduction.md | Frontier-LLM, Forschungsfragen |
| 02-theoretical-foundation.md | Theoretische Grundlagen, Co-Intelligence |
| 03-methodology.md | 6-Phasen-Modell (Artefakte), Prompting-Strategien, Savepoints |
| 04-scholar-centered-design.md | UCD/SCD-Synthese |
| 05-case-studies.md | 7 Praxisberichte mit Demo-Links |
| 06-critical-reflection.md | Limitationen, blinde Flecken |
| 07-references.md | Literaturverzeichnis |

## Case Studies

Dokumentation realer Promptotyping-Projekte in case-studies/:

| Projekt | Daten | Zeit | Dokumente |
|---------|-------|------|-----------|
| correspexplorer.md | CMIF-Korrespondenzen | 2 Nachmittage | 12 Vault-Docs |
| diged-neolat.md | Neulateinische Gedichte | 25h | Multi-Iteration |
| km.md | Kriminalmuseum TEI/LIDO | 10h | 3 Docs |
| stained-glass.md | CVMA Knowledge Graph | 8h | 4 Docs |
| aldersbach.md | RDF/XML Finanzdaten | 8h | 6 Docs |
| imareal-room-object.md | REALonline Inventare | 5h | 6 Docs |
| szd.md | Stefan Zweig GAMS | 2h | Experimentell |

---

## Dokumentbeziehungen

### Phasenmodelle

| Kontext | Phasen | Beschreibt |
|---------|--------|------------|
| Website (knowledge.md) | 4 Phasen | Workflow (Aktivitäten) |
| Paper (03-methodology.md) | 6 Phasen | Artefakte (Dokumente) |

Die 4 Workflow-Phasen: Preparation → Exploration → Destillation → Implementation

Die 6 Artefakt-Phasen: CONTEXT → DATA → EXPLORATION → REQUIREMENTS → IMPLEMENTATION → PROTOTYPE

knowledge.md ist Single Source of Truth für:
- Inhalt der vier Workflow-Phasen (TEIL 1)
- Visual System: Farben, Typografie, Icons (TEIL 2)
- Scroll-Logic: Animation Timings pro Phase (TEIL 3)

requirements.md definiert:
- Zielgruppen und deren Bedürfnisse
- User Stories mit Akzeptanzkriterien
- Technische Constraints (Performance, Accessibility)

implementation.md spezifiziert:
- Tech Stack (Svelte 5, GSAP, Vite)
- Komponenten-Architektur
- Dateistruktur und Build-Konfiguration

journal.md dokumentiert:
- Chronologische Entwicklung
- Entscheidungen mit Begründungen
- Learnings und offene Fragen

---

## Navigations-Pfade

Für Claude bei Code-Änderungen:
1. knowledge.md (Animationen, Timings)
2. implementation.md (Komponenten-Struktur)
3. journal.md (bisherige Entscheidungen)

Für neue Features:
1. requirements.md (User Stories prüfen)
2. knowledge.md (Inhalt und Visual System)
3. implementation.md (technische Umsetzung)

Für Debugging:
1. journal.md (bekannte Probleme)
2. implementation.md (Architektur verstehen)
3. knowledge.md (erwartetes Verhalten)

---

## Projekt-Kontext

Promptotyping Explainer ist eine Scrollytelling-Website, die die Promptotyping-Methode erklärt. Die Website selbst wurde mit Promptotyping entwickelt und dient als Beispiel für die Methode.

Ziel: DH-Studierende und Lehrende verstehen in 2-4 Minuten Scroll-Zeit, wie Promptotyping funktioniert.

Live: https://dhcraft.org/PromptotypingExplainer

---

## Vault-Compliance

Alle Dokumente folgen den Regeln in VAULT-RULES.md:
- Keine Emojis, keine Fettschrift zur Betonung
- Kompakte, präzise Sprache
- Relationen statt ASCII-Diagramme
- Technische Begriffe im Original
