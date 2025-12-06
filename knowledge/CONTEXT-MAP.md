# Knowledge Vault Context Map

Einstiegspunkt für die Navigation im Promptotyping Explainer Vault.

---

## Dokumente im Vault

| Datei | Zweck | Wann lesen |
|-------|-------|------------|
| CONTEXT-MAP.md | Einstiegspunkt, Vault-Übersicht | Zuerst |
| VAULT-RULES.md | Dokumentationsstandards | Bei Änderungen am Vault |
| knowledge.md | Inhalt, Visual System, Scroll-Logic | Für Content und Animationen |
| requirements.md | Zielgruppen, User Stories, Constraints | Für Anforderungen |
| implementation.md | Tech Stack, Komponenten-Architektur | Für technische Details |
| journal.md | Arbeitstagbuch, Entscheidungen | Für Kontext und Historie |

---

## Dokumentbeziehungen

knowledge.md ist Single Source of Truth für:
- Inhalt der vier Phasen (TEIL 1)
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
