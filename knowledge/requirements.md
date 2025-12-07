# Requirements: Promptotyping Explainer

> Für Details zu den vier Phasen und der Scroll-Logic siehe [knowledge.md](knowledge.md).

---

## Zielgruppen

### Primär: DH-Studierende und Workshop-Teilnehmer:innen
Lernen Promptotyping als Methode kennen. Brauchen verständliche Erklärungen ohne zu viel Vorwissen. Wollen verstehen, was sie selbst tun müssten.

### Sekundär: DH-Lehrende und Workshop-Leiter:innen
Nutzen die Seite zur Vermittlung in Lehrveranstaltungen. Brauchen eine Ressource, auf die sie verweisen können. Wollen die Methode demonstrieren, nicht nur beschreiben.

### Tertiär: DH-Community und Interessierte
Stoßen über Social Media, Konferenzen oder Publikationen auf die Seite. Wollen schnell verstehen, worum es geht. Entscheiden in 30 Sekunden, ob sie weiterlesen.

---

## Die vier Phasen (Kurzreferenz)

| Phase | Name | Beschreibung |
|-------|------|--------------|
| 1 | Vorbereitung | Materialsammlung (TEI, XML, Notizen) |
| 2 | Exploration | Datenanalyse, Entitäten identifizieren |
| 3 | Destillation | Wissenskomprimierung in Markdown-Dokumente |
| 4 | Implementation | Iterative Entwicklung mit LLM, Validierung, Vault-Updates |

Ausführliche Beschreibung: [knowledge.md#die-vier-phasen](knowledge.md#die-vier-phasen)

---

## User Stories

### Grundfunktionen

**US-01: Lineares Durchscrollen**
Als Besucher:in will ich durch die Seite scrollen und dabei die vier Phasen von Promptotyping nacheinander erleben, um den Prozess intuitiv zu verstehen.

Akzeptanzkriterien:
- Scroll-Progress ist flüssig, keine Ruckler
- Jede Phase ist klar abgegrenzt
- Animationen unterstützen das Verständnis, lenken nicht ab
- Gesamtdauer des Durchscrollens: 2-4 Minuten bei normalem Tempo

**US-02: Orientierung behalten**
Als Besucher:in will ich jederzeit wissen, in welcher Phase ich mich befinde, um den Überblick zu behalten.

Akzeptanzkriterien:
- Progress-Indikator ist permanent sichtbar
- Aktuelle Phase ist hervorgehoben
- Phasen-Titel erscheinen bei Eintritt in neue Phase

**US-03: Navigation zwischen Phasen**
Als Besucher:in will ich direkt zu einer bestimmten Phase springen können, um gezielt nachzuschlagen.

Akzeptanzkriterien:
- Progress-Indikator-Punkte sind klickbar
- Smooth-Scroll zur gewählten Phase
- Animationen der übersprungenen Phasen werden nicht abgespielt

**US-04: Vault-Updates verstehen**
Als Besucher:in will ich verstehen, dass jede Iteration neues Wissen generiert, das in den Vault zurückfließt.

Akzeptanzkriterien:
- Vault-Update-Visualisierung zeigt den Wissensrückfluss
- Erklärung, wann Vault-Updates nötig sind
- Visuelle Darstellung des iterativen Wissenswachstums

### Vertiefung

**US-05: Konkrete Beispiele sehen**
Als Besucher:in will ich echte Beispiele von Promptotyping-Projekten sehen, um zu verstehen, was am Ende herauskommt.

Akzeptanzkriterien:
- Link zu CorrespExplorer ist vorhanden
- Screenshot oder Embed des fertigen Interfaces
- Kontext: welche Daten, welche Zeit, welches Ergebnis

**US-06: Prompts nachvollziehen**
Als Besucher:in will ich echte Prompts aus einem Projekt sehen, um zu verstehen, wie der Dialog mit dem LLM aussieht.

Akzeptanzkriterien:
- Mindestens 3-4 Prompts werden gezeigt
- Prompts sind lesbar (nicht nur stilisiert)
- Kontext zu jedem Prompt: was war das Ziel?

**US-07: Methode mitnehmen**
Als Besucher:in will ich eine Zusammenfassung oder Ressource mitnehmen können, um später selbst Promptotyping auszuprobieren.

Akzeptanzkriterien:
- Link zu weiterführenden Ressourcen am Ende
- Optional: Download der Vault-Struktur als Template
- Kontaktmöglichkeit für Fragen

### Lehrkontext

**US-08: In Präsentation einbetten**
Als Lehrende:r will ich die Seite in einem Vortrag zeigen können, um live durch den Prozess zu scrollen.

Akzeptanzkriterien:
- Seite funktioniert im Vollbild-Modus
- Keine störenden UI-Elemente (Cookie-Banner etc.)
- Scroll-Geschwindigkeit ist manuell kontrollierbar

**US-09: Teilen und Verlinken**
Als Lehrende:r will ich die Seite einfach teilen können, um Studierenden eine Ressource zu geben.

Akzeptanzkriterien:
- Kurze, merkbare URL
- Open Graph Tags für Social Media Preview
- Seite lädt schnell (unter 3 Sekunden)

---

## Technische Constraints

### Hosting: GitHub Pages

- Statische Seite, kein Backend
- Build-Output muss in `/docs` oder separatem Branch liegen
- Keine serverseitigen Funktionen
- Custom Domain möglich, aber nicht erforderlich

### Browser-Support

- Modern Browsers: Chrome, Firefox, Safari, Edge (letzte 2 Versionen)
- Kein IE11-Support
- Mobile Browser: Safari iOS, Chrome Android

### Performance

- First Contentful Paint: unter 1.5 Sekunden
- Largest Contentful Paint: unter 2.5 Sekunden
- Cumulative Layout Shift: unter 0.1
- Total Bundle Size: unter 500KB (gzipped)

### Barrierefreiheit

- WCAG 2.1 Level AA
- Animationen respektieren `prefers-reduced-motion`
- Keyboard-Navigation vollständig möglich
- Screen-Reader-kompatibel (ARIA-Labels)
- Farbkontrast mindestens 4.5:1

### Responsive Breakpoints

- Mobile: unter 768px (einspaltiges Layout, vereinfachte Animationen)
- Tablet: 768-1023px (angepasstes Layout)
- Desktop: ab 1024px (volles Layout und Animationen)

---

## Nicht-Anforderungen (Out of Scope)

- Keine Benutzerkonten oder Login
- Keine Datenbank oder persistente Speicherung
- Keine Mehrsprachigkeit (nur Deutsch in v1)
- Keine CMS-Integration
- Kein Analytics-Tracking (oder nur privacy-friendly, z.B. Plausible)
- Keine Kommentar-Funktion

---

## Beantwortete Fragen

- URL: dhcraft.org/PromptotypingExplainer ✓
- Englische Version: Nicht in v1, optional für v2
- Phase 4 Code: AnimatedChat zeigt echten Reasoning-Zyklus als Meta-Beispiel
- Obsidian: Abstrahiert als "Vault" (ohne Obsidian-Branding)
