# 5. Fallbeispiele aus der Praxis

*← [Zurück zum Index](00-index.md) | [← Vorheriges Kapitel](04-scholar-centered-design.md)*

---

## 5.1 Vorbemerkung: Charakter der Fallbeispiele

> **Wichtiger Hinweis:** Die folgenden Fallbeispiele sind **Praxisberichte**, keine empirisch validierten Studien. Sie illustrieren die Anwendung der Promptotyping-Methode, erlauben aber keine generalisierbaren Aussagen über deren Wirksamkeit.

### Limitationen

- Alle Projekte wurden von den Autoren selbst durchgeführt
- Keine Kontrollgruppe oder Vergleichsbedingung
- Keine standardisierte Messung von Effizienz oder Qualität
- Retrospektive Dokumentation, keine prospektive Studienplanung
- Subjektive Einschätzungen der „Nützlichkeit"

### Erkenntnisanspruch

Die Fallbeispiele dienen dazu:
1. Die Anwendbarkeit der Methode in verschiedenen Kontexten zu **demonstrieren**
2. Typische Herausforderungen und Lösungsansätze zu **beschreiben**
3. Praktische Empfehlungen abzuleiten, die **zur Diskussion** gestellt werden

---

## 5.2 Übersicht der Fallbeispiele

> **Hinweis zu den Demos:** Die Live-Demos dokumentieren die Entwicklung über Zeit und zeigen, wie sich sowohl die Promptotyping-Methode als auch die Frontier-LLMs verbessert haben. Frühere Projekte spiegeln den Stand früherer Modellgenerationen wider.

| Projekt | Kontext | Zeit | Dokumente | Demo |
|---------|---------|------|-----------|------|
| Stefan Zweig Digital | Archiv-Timeline | ~2h | 0 | [Demo](https://dhcraft.org/excellence/promptotyping/szd-annotation-timeline/) |
| REALonline v1 | Mittelalterliche Inventare | ~5h | 6 | [Demo](https://chpollin.github.io/imareal-room-object) |
| Aldersbach | Klosterrechnungen | ~8h | 7 | [Demo](https://chpollin.github.io/depcha-aldersbach) |
| CVMA Glasfenster | Metadaten-Viewer | ~8h | 5 | [Demo](https://chpollin.github.io/stained-glass-metadata-annotation-tool/docs/version-2/) |
| Kriminalmuseum | Dual-Interface | ~10h | 3 | [Demo](https://chpollin.github.io/km/collection-explorer.html) |
| Lucina Edition | Digitale Edition | ~25h | 11+ | [Demo](https://chpollin.github.io/diged-neolat/edition-5/web/) |
| REALonline v2 | Verbesserte Version | ~8h | 7 | [Demo](https://chpollin.github.io/imareal-room-object) |
| CorrespExplorer | Briefkorrespondenzen | ~15h | 5 | [Demo](https://dhcraft.org/CorrespExplorer) |

**Repositories:** Alle Projekte sind Open Source unter [github.com/chpollin](https://github.com/chpollin) und [github.com/DigitalHumanitiesCraft](https://github.com/DigitalHumanitiesCraft) verfügbar.

---

## 5.3 Detaillierte Fallbeschreibungen

### Fallbeispiel 1: Stefan Zweig Digital

**Kontext:**
Entwicklung einer Timeline-Visualisierung für Archivdaten des Stefan Zweig Archivs.

**Links:** [Demo](https://dhcraft.org/excellence/promptotyping/szd-annotation-timeline/) | [Repository](https://github.com/DigitalHumanitiesCraft/excellence)

**Prozess:**
- Keine strukturierte Dokumentation
- Direktes „Vibe Coding" mit Frontier-LLM
- Funktionierender Prototyp nach ca. 2 Stunden

**Beobachtung:**
Dieses frühe Projekt entstand vor der Formalisierung der Promptotyping-Methode. Die schnelle Entwicklung (~2h) demonstriert das Potenzial von LLM-gestütztem Prototyping. Die Erfahrungen aus diesem Projekt flossen in die Entwicklung der strukturierten Vault-Dokumentation ein.

---

### Fallbeispiel 2: REALonline Rauminventare (v1)

**Kontext:**
Visualisierung mittelalterlicher Objektverteilungen in österreichischen Adelshäusern (1432–1602) basierend auf der REALonline-Datenbank.

**Links:** [Demo](https://chpollin.github.io/imareal-room-object) | [Repository](https://github.com/chpollin/imareal-room-object)

**Prozess:**

| Phase | Dauer | Aktivität |
|-------|-------|-----------|
| CONTEXT | 30 min | Forschungsfrage klären mit Historiker |
| DATA | 60 min | JSON-Struktur analysieren, Inkonsistenzen dokumentieren |
| EXPLORATION | 120 min | Entdeckung multipler Inventare, Neukonzeption |
| REQUIREMENTS | 45 min | Priorisierung mit Historiker |
| IMPLEMENTATION | 45 min | Normalisierung dokumentieren |
| PROTOTYPE | 90 min | Vier Iterationen bis finale Version |

**Kritische Intervention:**
Der Historiker korrigierte die technische Annahme, Objekte nach modernen funktionalen Kategorien zu strukturieren. Der ursprüngliche Ansatz gruppierte Objekte nach Kategorien (Möbel, Textilien, Gefäße). Die Korrektur: Objekte werden über Räume und Gebäude organisiert, mit historischen Begriffen aus nomenclature_original.

**Begründung des Historikers:**
> „Räumliche Organisation war im Mittelalter primärer Bedeutungsträger für soziale Hierarchien."

**Beobachtung:**
Diese Korrektur transformierte das Datenmodell von einer anachronistischen zu einer historisch adäquaten Repräsentation. Sie wäre ohne Experteneinbindung nicht erfolgt.

**Technische Herausforderung:**
Die JSON-Datenstruktur aus Neo4j wies Inkonsistenzen auf: Felder erschienen mal als String, mal als Array. Diese in der DATA-Phase dokumentierte Problematik informierte die spätere Normalisierung.

---

### Fallbeispiel 3: Aldersbach Kloster

**Kontext:**
Entwicklung eines Annotationstools für TEI-kodierte Klosterrechnungen des Zisterzienserklosters Aldersbach.

**Links:** [Demo](https://chpollin.github.io/depcha-aldersbach) | [Repository](https://github.com/chpollin/depcha-aldersbach)

**Besonderheit:**
Integration heterogener Quelltypen aus verschiedenen Archivbeständen.

**Beobachtung:**
Die DATA-Phase erwies sich als besonders wertvoll für die Normalisierung inkonsistenter Datenformate. Ohne diese systematische Analyse wären Inkonsistenzen erst spät im Entwicklungsprozess aufgefallen.

---

### Fallbeispiel 4: CVMA Glasfenster

**Kontext:**
Entwicklung eines Metadaten-Viewers für das Corpus Vitrearum Medii Aevi mit SPARQL-Abfragen gegen den NFDI4Culture Knowledge Graph.

**Links:** [Demo](https://chpollin.github.io/stained-glass-metadata-annotation-tool/docs/version-2/) | [Repository](https://github.com/chpollin/stained-glass-metadata-annotation-tool)

**Iterationsmuster:**
Das Projekt durchlief drei dokumentierte Iterationsschleifen:

| Iteration | Prompt (verkürzt) | Ergebnis |
|-----------|-------------------|----------|
| 1 | „Erstelle eine Timeline für XML-Daten" | Generischer Beispielcode |
| 2 | „Extrahiere Metadaten aus SPARQL-XML" | Funktionaler Parser, keine Visualisierung |
| 3 | „Interaktive Timeline mit D3.js, Dekaden-Gruppierung, Zoom, Filter" | Vollständige Lösung |

**Beobachtung:**
Die iterative Verfeinerung der Prompts folgte einem erkennbaren Muster: Von generisch zu spezifisch, von technisch zu funktional.

**Technische Herausforderung:**
Die 29MB JSON-LD-Verarbeitung erforderte Python-Preprocessing, da die direkte Verarbeitung im Browser nicht praktikabel war.

---

### Fallbeispiel 5: Kriminalmuseum

**Kontext:**
Entwicklung eines digitalen Archivs für die Hans Gross Sammlung mit 3.892 Objekten und zwei Interface-Varianten (traditionelle Suche und Canvas Explorer).

**Links:** [Demo](https://chpollin.github.io/km/collection-explorer.html) | [Repository](https://github.com/chpollin/km)

**Prozess:**
Nur drei Dokumente erstellt, IMPLEMENTATION.md fehlte.

**Beobachtung:**
Das funktionale Dual-Interface entstand erfolgreich mit minimaler Dokumentation. Bei späteren Anpassungen zeigte sich der Wert vollständiger Vault-Dokumentation – die Erfahrungen flossen in die Weiterentwicklung der Methode ein.

---

### Fallbeispiel 6: Lucina Edition

**Kontext:**
Entwicklung einer TEI-konformen digitalen Edition des Madrid BN Mss. 6028 mit 128 neulateinischen Gedichten, inklusive Prosopographie und metrischer Analyse.

**Links:** [Demo](https://chpollin.github.io/diged-neolat/edition-5/web/) | [Repository](https://github.com/chpollin/diged-neolat)

**Umfang:**
- Entwicklungszeit: ca. 25 Stunden über mehrere Wochen
- Dokumente: 11+ Markdown-Dateien
- Versionen: 5 dokumentierte Iterationen

**Beobachtung:**
Bei diesem umfangreichsten Projekt wurde die Koordination der vielen Dokumente zunehmend komplex. Die Navigation zwischen REQUIREMENTS.md, mehreren DATA.md-Varianten und INSTRUCTIONS.md erforderte aktive Verwaltung.

**Reflektion:**
Ab einer gewissen Projektkomplexität stößt die einfache Dateistruktur an Grenzen. Hier wäre möglicherweise ein hierarchisches System oder eine Wissensdatenbank sinnvoller.

---

### Fallbeispiel 7: REALonline v2

**Kontext:**
Verbesserte Version der REALonline-Visualisierung nach Anwendung der vollständigen Methodik.

**Links:** [Demo](https://chpollin.github.io/imareal-room-object) | [Repository](https://github.com/chpollin/imareal-room-object)

**Unterschied zu v1:**
- Vollständiger Dokumentsatz von Beginn an
- Aktiv gepflegtes JOURNAL.md

**Beobachtung:**
Das Journal erwies sich als besonders wertvoll für:
1. Nachvollziehbarkeit von Entscheidungen
2. Vermeidung bereits diskutierter Sackgassen
3. Onboarding hypothetischer weiterer Teammitglieder

---

## 5.4 Beobachtete Muster

### Muster 1: Dokumentation korreliert mit Wartbarkeit

| Dokumentationsgrad | Initiale Entwicklung | Spätere Änderungen |
|-------------------|---------------------|-------------------|
| Keine (Stefan Zweig) | Schnell | Sehr aufwendig |
| Minimal (Kriminalmuseum) | Schnell | Aufwendig |
| Vollständig (REALonline v2) | Etwas langsamer | Deutlich einfacher |

> **Vorsicht:** Diese Beobachtung basiert auf subjektiver Einschätzung, nicht auf Messung.

### Muster 2: Expertenwissen ist nicht ersetzbar

In allen Projekten mit Domänenexpert:innen-Einbindung traten Korrekturen auf, die ohne Fachwissen nicht erkannt worden wären:

- REALonline: Historisch adäquate Kategorisierung
- Lucina: Philologische Konventionen
- CVMA: Kunsthistorische Terminologie

### Muster 3: Iterative Prompt-Verfeinerung

Die Prompt-Entwicklung folgte einem wiederkehrenden Muster: von generisch zu spezifisch, dann Korrektur, dann Verfeinerung. Typischerweise waren 3–5 Iterationen nötig, um von einer Idee zu einer funktionalen Lösung zu gelangen.

### Muster 4: Skalierungsgrenzen

Bei wachsender Komplexität (Lucina mit 11+ Dokumenten) stieg der Koordinationsaufwand überproportional.

---

## 5.5 Offene Fragen zur Evaluation

Die Fallbeispiele werfen methodische Fragen auf, die bisher nicht beantwortet werden können:

1. **Effizienz:** Ist der Zeitaufwand für Dokumentation durch spätere Zeitersparnis gerechtfertigt?
2. **Qualität:** Führt die Methode zu „besseren" Prototypen? Wie wäre „besser" zu definieren?
3. **Generaliserbarkeit:** Funktioniert die Methode auch für andere Entwickler:innen und Domänen?
4. **Schwellenwerte:** Ab welcher Projektkomplexität lohnt sich der Methodenaufwand?
5. **Lernkurve:** Wie steil ist die Lernkurve für Erstanwender:innen?

### Vorschläge für zukünftige Evaluation

Für eine empirisch fundierte Evaluation wären folgende Designs denkbar:

| Design | Beschreibung | Herausforderung |
|--------|--------------|-----------------|
| **A/B-Vergleich** | Dieselbe Aufgabe mit/ohne Methode | Kontrolle von Störvariablen |
| **Längsschnitt** | Wartbarkeit über Zeit messen | Lange Laufzeit erforderlich |
| **Multi-Site** | Verschiedene Teams, gleiche Aufgabe | Koordinationsaufwand |
| **Experten-Review** | Qualitative Bewertung der Outputs | Subjektivität der Experten |

---

## Kernaussagen dieses Kapitels

1. Die Fallbeispiele sind **Praxisberichte**, keine empirische Evidenz
2. Dokumentation scheint mit Wartbarkeit zu korrelieren (nicht gemessen)
3. Expertenwissen ist für domänenadäquate Lösungen **nicht ersetzbar**
4. Iterative Prompt-Verfeinerung folgt erkennbaren Mustern
5. Bei hoher Komplexität steigt der Koordinationsaufwand überproportional
6. **Offene Fragen** zur Evaluation erfordern zukünftige methodische Arbeit

---

*Weiter zu: [06-critical-reflection.md](06-critical-reflection.md)*
