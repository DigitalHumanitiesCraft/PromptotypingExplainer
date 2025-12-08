# 3. Die Promptotyping-Methode

*← [Zurück zum Index](00-index.md) | [← Vorheriges Kapitel](02-theoretical-foundation.md)*

---

## 3.1 Definition und konzeptuelle Architektur

### Definition

> Promptotyping ist ein dreiebenes Framework für die methodisch strukturierte KI-gestützte Entwicklung digitaler Forschungswerkzeuge. Es integriert technisches Prompt Engineering, methodisches Requirements Engineering und epistemische Reflexion systematisch.

### Context Engineering: Eine Arbeitsdefinition

> Context Engineering bezeichnet die systematische Gestaltung, Verdichtung und Orchestrierung von Kontextinformationen, die einem Frontier-LLM zur Verfügung gestellt werden, um dessen Outputs auf spezifische Aufgaben, Domänen und Qualitätsanforderungen auszurichten.

Der Begriff geht auf Mei et al. (2025) zurück und grenzt sich vom engeren Prompt Engineering ab: Während Prompt Engineering die Formulierung einzelner Anfragen optimiert, umfasst Context Engineering die strategische Strukturierung des gesamten Informationsraums über multiple Interaktionen hinweg.

Drei Kernoperationen:
- Creation: Explizierung impliziten Wissens in maschinenlesbare Formate
- Compression: Verdichtung auf relevante Information unter Vermeidung von Context Rot
- Orchestration: Dynamische Steuerung des Kontextflusses über Iterationen

> Context Rot (Hong et al., 2025): Die Beobachtung, dass LLM-Leistung mit wachsender Kontextlänge degradiert. Mehr Tokens führen nicht zu besseren Ergebnissen – gezielte Verdichtung erhöht die Modellaufmerksamkeit auf wesentliche Aspekte.

---

### Die drei Ebenen von Promptotyping

#### Ebene 1: Technisch (Context Engineering)

- Context Creation: Systematische Erstellung relevanter Kontextinformationen durch Formalisierung impliziten Domänenwissens und Strukturierung von Anforderungen
- Context Compression: Gezielte Verdichtung auf relevante Information. Das Compression-als-Amplification-Paradox führt zu erhöhter Modellaufmerksamkeit auf wesentliche Aspekte
- Context Orchestration: Strategische Steuerung über multiple Iterationen mit dynamischer Anpassung basierend auf Zwischenergebnissen

#### Ebene 2: Methodisch (Requirements Engineering)

Promptotyping funktioniert als iterativer Requirements Engineering Ansatz, der etablierte Prinzipien des Scholar-Centred Design nutzt (vgl. [Kapitel 4](04-scholar-centered-design.md)).

> Es transformiert vage Forschungsfragen durch kontinuierliche Expert-in-the-Loop Validierung in funktionsfähige, auf epistemologische Bedürfnisse abgestimmte Prototypen.

#### Ebene 3: Epistemisch (Kritisch-reflexive Praxis)

Promptotyping etabliert eine kritisch-reflexive Praxis der Ko-Konstruktion von Wissen zwischen menschlicher Expertise und maschineller Verarbeitung.

> Jeder Prompt wird als epistemische Intervention verstanden, die nicht nur Informationen abruft, sondern aktiv die Generierung neuer Zusammenhänge anregt.

---

## 3.2 Das Phasenmodell

Promptotyping strukturiert sich in vier Hauptphasen, die jeweils spezifische Artefakte produzieren:

Der Prozess beginnt mit der Preparation: Rohdateien (.doc, .xml, PDFs) werden gesammelt. Es folgt die Exploration, in der analysiert und experimentiert wird – ohne formale Dokumentation (keine Artefakte). Die Destillation verdichtet das Wissen zu DATA.md, REQUIREMENTS.md und CONTEXT.md – hier entstehen die .md-Files. Die Implementation nutzt diese Dokumente für iterative LLM-Dialoge. Jede Iteration produziert einen neuen Prototype. Neues Wissen fließt als Vault-Update zurück in die .md-Dateien der Destillation-Phase.

---

### Phase 1: PREPARATION

Artefakte: Rohdateien (keine .md Dokumente)

Ziel: Sammlung aller relevanten Materialien als Input für die späteren Phasen.

Typische Rohmaterialien:
- Forschungsdaten (.doc, .xml, .csv, PDFs)
- Dokumentation (Editionsrichtlinien, Schemata, Standards)
- Kontextmaterial (Papers, Notizen, Expertengespräche)

Funktion:
Diese Phase schafft die Materialbasis. Die Rohdateien werden noch nicht strukturiert oder destilliert - das passiert in Phase 3.

Beispiel aus der Praxis:
Im CorrespExplorer-Projekt: CMIF-XML-Dateien + correspSearch-Dokumentation + Editionsrichtlinien wurden gesammelt.

---

### Phase 2: EXPLORATION

Artefakt: Keines (bewusst undokumentiert)

Ziel: Systematische Sondierung der Schnittstelle zwischen Rohdaten und Forschungskontext. Validierung der Machbarkeit: Geben die Daten das her, was der Kontext verlangt?

Funktion:
Diese Phase prüft, ob sich abstrakte Forschungsfragen konkret auf die vorhandene Datenstruktur abbilden lassen. Hier werden Brücken identifiziert: Mental entstehen bereits die ersten User Stories (z.B. „Als Historiker will ich X filtern..."), indem getestet wird, ob das technische Substrat diese Story überhaupt tragen kann.

Charakteristika:
- Prüfung der Daten-Kontext-Relationen
- Identifikation tragfähiger User Stories
- Erkennung von Sackgassen als positive Erkenntnisse
- Kein formaler Dokumentationszwang

> Wichtig: Das Ergebnis ist Wissen über Datenqualität und User-Story-Validität. Dieses destillierte Wissen ist die zwingende Voraussetzung für die Präzision der Phase 3 (Destillation).

---

### Phase 3: DESTILLATION

Artefakte (der Promptotyping Vault):
- `DATA.md` – Aus der Analyse des Rohmaterials destillierte Datenstruktur
- `REQUIREMENTS.md` – Formalisierte Anforderungen mit Priorisierung
- `CONTEXT.md` – Domänenwissen, Forschungsfragen, Projektziele

Ziel: Das Rohmaterial aus Phase 1 und die Erkenntnisse aus Phase 2 werden zu strukturierten .md-Dokumenten verdichtet. Diese Dokumente bilden den "Vault" – das destillierte Wissen, das in Phase 4 an das LLM übergeben wird.

Typischer Workflow:
1. Datenanalyse → DATA.md: Ein Script (ggf. LLM-generiert) analysiert die Struktur der Rohdaten und extrahiert Schema, Felder, Beziehungen
2. Kontextaufbereitung → CONTEXT.md: Domänenwissen, Forschungsfragen und Projektziele werden explizit dokumentiert
3. Anforderungsformalisierung → REQUIREMENTS.md: Vage Ideen werden zu testbaren Spezifikationen

Priorisierungsschema (für REQUIREMENTS.md):
- MUSS: Kritische Features ohne die das System keinen Wert hat
- SOLL: Wichtige Features die den Wert signifikant steigern
- KANN: Nice-to-have Features für zukünftige Iterationen

Formulierungsprinzip:
Jede Anforderung als testbaren Satz formulieren. Korrekt wäre: "Das System muss Korrespondenzen nach Datum filterbar darstellen." Falsch wäre: "Das System soll benutzerfreundlich sein" – zu vage, nicht testbar.

Warum .md-Files erst hier?
Die Destillation ist der kritische Übergang von unstrukturiertem Rohmaterial zu LLM-optimiertem Kontext. Die .md-Dateien sind speziell darauf ausgelegt, maximale Information bei minimaler Token-Anzahl zu liefern (siehe: Context Rot).

---

### Phase 4: IMPLEMENTATION

Artefakte: Prototype(n) + Vault-Updates

Diese Phase ist iterativ: Jede Iteration produziert einen neuen Prototype und kann Updates an den bestehenden Vault-Dokumenten (DATA.md, REQUIREMENTS.md, CONTEXT.md) auslösen.

#### Der Iterationszyklus

Der Zyklus verläuft vom Vault über den Prompt zum LLM, das einen Prototype generiert. Dieser wird validiert, und neues Wissen fließt als Vault-Update zurück – dann beginnt der Zyklus erneut.

1. Prompt mit Vault-Kontext: Die .md-Dateien aus Phase 3 werden dem LLM übergeben
2. Prototype-Generierung: LLM erzeugt lauffähigen Code
3. Validierung durch Expert: Critical Expert prüft gegen REQUIREMENTS.md
4. Vault-Update: Neues Wissen fließt zurück in die .md-Dateien
5. Nächste Iteration: Verbesserter Vault → besserer Prototype

#### PROTOTYPE → Lauffähiger Code

Charakteristika:
- Der generierte Code ist nicht Endpunkt, sondern Ausgangspunkt für weitere Iteration
- Jede Iteration = neuer Prototype + potentielles Vault-Update
- Validierung gegen REQUIREMENTS.md

Typisches Output:
- Single HTML File mit inline CSS/JS
- Keine externen Dependencies außer CDN-verfügbare
- Kommentierter Code an kritischen Stellen

#### Dokumentation von Transformationen

Während der Implementation werden Datentransformationen, Algorithmen und interpretativen Entscheidungen dokumentiert – entweder als Erweiterung der bestehenden Vault-Dokumente oder als Kommentare im Code. Diese Dokumentation fungiert als epistemisches Protokoll, das spätere Nachvollziehbarkeit und Kritik ermöglicht.

---

## 3.3 Iteratives Vault-Update

### Wann sind Vault-Updates nötig?

- Fehlende Datenfelder → DATA.md: Benötigte Information nicht in Datenstruktur dokumentiert
- Unklare Anforderungen → REQUIREMENTS.md: Spezifikation lässt mehrere Interpretationen zu
- Neue Erkenntnisse → CONTEXT.md: Prototyp offenbart neue Forschungsfragen
- Inkonsistente Daten → DATA.md: Normalisierung erfordert Neubewertung

Jede Promptotyping-Iteration generiert neues Wissen: über die Daten, den Kontext, die Anforderungen. Dieses Wissen fließt zurück in den Vault. Die .md-Dateien werden aktualisiert, erweitert, präzisiert. So wächst das destillierte Wissen mit jeder Iteration.

### Erkennung

> Die Erkennung notwendiger Vault-Updates erfordert Fachwissen. Der Mensch muss erkennen, wann ein LLM-Output zeigt, dass Kontext fehlt oder falsch verstanden wurde. Dieses Urteil erfordert Domänenwissen und methodische Erfahrung.

---

## 3.4 Critical Expert in the Loop

### Definition

> Der Critical Expert in the Loop ist nicht passiver Empfänger, sondern kritischer Validator. Domänenexpert:innen bringen ihr Fachwissen kontinuierlich in den Dialog ein.

### Operationalisierung

Der Critical-Expert-Ansatz operationalisiert Schöns Reflective Practice für die KI-gestützte Forschung:

Strategien gegen Sycophancy:

1. Critical Questioning: Explizites Auffordern zur Kritik – etwa durch Fragen nach Schwächen im Ansatz oder möglichen Fehlern in Annahmen.

2. Alternative Exploration: Einfordern von Alternativen – verschiedene Ansätze für ein Problem generieren lassen, gegenteilige Standpunkte erfragen.

3. Assumption Surfacing: Explizitmachen von Annahmen – implizite Annahmen im Code oder Voraussetzungen bewusst machen.

### Beispiel: REALonline-Projekt

Der Historiker korrigierte die technische Annahme, Objekte nach modernen Kategorien zu strukturieren.

Die technische Annahme war falsch: Objekte sollten nach funktionalen Kategorien wie Möbel, Textilien, Gefäße gruppiert werden. Die historische Korrektur: Objekte werden über Räume und Gebäude organisiert, mit historischen Begriffen aus nomenclature_original. Begründung: Räumliche Organisation war im Mittelalter primärer Bedeutungsträger für soziale Hierarchien.

> Diese Korrektur war mehr als technische Anpassung. Sie transformierte das Datenmodell von einer anachronistischen zu einer historisch adäquaten Repräsentation.

---

## 3.5 Das Journal als reflexives Instrument

### Funktion

Das Promptotyping Journal ist das Arbeitstagebuch des Projekts. Es dokumentiert Sessions mit Aufgaben und Erkenntnissen – nicht als bürokratischer Overhead, sondern als Gedächtnis des Entwicklungsprozesses.

### Struktur eines Journal-Eintrags

Ein Journal-Eintrag enthält Datum und Session-Nummer, gefolgt von Tasks (bearbeitet und abgeschlossen), Learnings (was funktioniert hat, was nicht, Überraschungen), Nächste Schritte und einen Savepoint mit Git-Commit-Hash.

### Skalierung für größere Projekte

- Klein (1-2 Tage): Ein JOURNAL.md
- Mittel (Wochen): JOURNAL.md mit Phasen-Abschnitten
- Groß (Monate): Separate Journals: JOURNAL-CONTEXT.md, JOURNAL-DATA.md, etc.

### Verdichtung

Bei längeren Projekten kann das Journal destilliert werden:
- Alte Sessions zusammenfassen
- Nur relevante Learnings behalten
- Redundanzen entfernen

> Prinzip: Das Journal wächst mit dem Projekt und wird bei Bedarf verdichtet – wie die anderen Dokumente auch.

---

## 3.6 Praktische Implementierung

### Empfohlenes Setup

- IDE: VS Code mit Markdown-Extensions
- Versionskontrolle: Git mit Commits nach jedem Savepoint
- Preprocessing: Python für komplexe Datenstrukturen
- LLM-Zugang: API für Reproduzierbarkeit, kostenlos für Einstieg

### Projektstruktur (Ausgangspunkt)

Ein typisches Projekt enthält die Vault-Dokumente (CONTEXT.md, DATA.md, REQUIREMENTS.md, JOURNAL.md) auf oberster Ebene. Der data-Ordner enthält Rohdaten aus Phase 1, exploration experimentelle Prototypen aus Phase 2, und prototype die iterativen Prototypen aus Phase 4. Git für Versionskontrolle ist essentiell.

Hinweis: Die .md-Dateien entstehen in Phase 3 (Destillation), nicht am Projektanfang. Rohdaten werden zuerst gesammelt (Phase 1), analysiert (Phase 2), und erst dann zu strukturierten Dokumenten verdichtet (Phase 3).

Flexibilität: Die Dokumentstruktur ist vollständig anpassbar. Je nach Daten und Kontext können beliebige Dokumente ergänzt werden (SCHEMA.md, VALIDATION.md, API-NOTES.md) – was immer das Projekt erfordert. Die genannten Dateien sind ein Ausgangspunkt, keine starre Vorgabe.

---

## 3.7 Prompting-Strategien

Promptotyping verwendet keine festgelegten Prompt-Templates, sondern Meta-Strategien, die situativ angewendet werden. Diese Strategien operationalisieren die Interaktion mit dem Frontier-LLM über alle Phasen hinweg.

### Übersicht der Strategien

- Reasoning: Möglichkeitsraum öffnen – Token-Generierung zur Exploration von Optionen
- LLM-Validierung: Qualitätsprüfung – LLM zur Bewertung eigener Outputs nutzen
- Expert-in-the-Loop: Richtungskorrektur – Menschliche Intervention bei Abweichungen
- LLM-as-Judge: Unabhängige Bewertung – Zweites Frontier-LLM mit eigenem Kontext
- Context Distillation: Wissensakkumulation – Vault-Dokumentation nachziehen und kuratieren
- Plan Generation: Strukturierte Umsetzung – Pläne erzeugen und kritisch begleiten

---

### Reasoning (Explorative Token-Generierung)

Frontier-LLMs nutzen Token-Generierung als "Denkprozess". Das Anfordern von explizitem Reasoning öffnet den Möglichkeitsraum – etwa durch Aufforderungen, laut nachzudenken oder mehrere Lösungswege mit Vor- und Nachteilen zu generieren. Zweck: Vermeidung vorschneller Festlegung auf eine Lösung.

---

### LLM-Validierung

Das LLM wird zur Prüfung seiner eigenen Outputs eingesetzt – durch Aufforderungen zur Fehlerprüfung, Edge-Case-Analyse oder Vollständigkeitsprüfung. Limitation: LLMs können eigene systematische Fehler nicht zuverlässig erkennen.

---

### Expert-in-the-Loop Korrektur

Der menschliche Experte greift aktiv ein, um das LLM in die richtige Richtung zu lenken – durch Korrektur falscher Annahmen oder Vorgabe domänenspezifischer Kategorisierungen. Voraussetzung: Domänenwissen, um falsche Annahmen überhaupt zu erkennen.

---

### LLM-as-Judge

Ein zweites Frontier-LLM mit eigenem Kontext bewertet die Outputs des ersten:

Setup:
1. LLM A generiert Lösung
2. LLM B erhält Aufgabenbeschreibung + Lösung (ohne Kontext von A)
3. LLM B bewertet Qualität, Vollständigkeit, Korrektheit

Vorteil: Unabhängige Perspektive, reduziert Bestätigungsfehler.

Anmerkung zu Modellstärken: Verschiedene Frontier-LLMs haben unterschiedliche Stärken. Große Kontextfenster, Videoverarbeitung, oder spezifische Reasoning-Fähigkeiten können die Wahl des Judge-Modells beeinflussen. Die genauen Stärken ändern sich mit jeder Modellgeneration.

---

### Context Distillation

Systematische Verdichtung und Kuratierung des Kontexts über Iterationen:

1. Nachziehen: Erkenntnisse aus der aktuellen Sitzung in Vault-Dokumente übertragen
2. Kuratieren: Veraltetes entfernen, Wichtiges hervorheben
3. Komprimieren: Redundanzen eliminieren, auf Wesentliches fokussieren

Zweck: Vermeidung von Context Rot, Erhalt des akkumulierten Wissens.

---

### Plan Generation

Komplexe Aufgaben werden in explizite Pläne zerlegt – durch Aufforderungen zu Schritt-für-Schritt-Plänen und Analyse von Abhängigkeiten. Kritisches Begleiten: Pläne nicht blind übernehmen, jeden Schritt auf Plausibilität prüfen, bei Abweichungen anpassen.

---

### Kombination der Strategien

In der Praxis werden Strategien kombiniert: Reasoning generiert Optionen, LLM-Validierung bewertet sie, Expert-in-the-Loop korrigiert falsche Annahmen, Plan Generation strukturiert die gewählte Option, Context Distillation dokumentiert die Entscheidung. Diese Sequenz wiederholt sich iterativ über alle Phasen.

---

## 3.8 Savepoints und Baselines

Promptotyping adaptiert Konzepte aus dem Requirements Engineering für die strukturierte Versionierung des Entwicklungsprozesses.

### Begrifflichkeiten

- Baseline (Configuration Management, ISO/IEC 12207): Eingefrorener, validierter Dokumentstand
- Increment (Iterative Entwicklung): Funktionsfähige Vorstufe des Endprodukts
- Gate (Stage-Gate, Cooper): Validierungspunkt vor Phasenübergang

### Savepoint = Baseline + Increment + Gate

Ein Savepoint markiert einen verifizierten Zustand, auf den bei Problemen zurückgegangen werden kann. Der Ablauf: Artefakt erstellen, Gate-Validierung durch Critical Expert, Git-Commit als Baseline, dann weiter zur nächsten Phase. Bei Fehlern: Rollback zur letzten Baseline.

### Übergangskriterien pro Phase

- CONTEXT → DATA: Projektziele und Constraints dokumentiert
- DATA → EXPLORATION: Datenstrukturen analysiert und spezifiziert
- EXPLORATION → REQUIREMENTS: Technische Machbarkeit geklärt
- REQUIREMENTS → IMPLEMENTATION: Anforderungen priorisiert und testbar
- IMPLEMENTATION → PROTOTYPE: Transformationslogik dokumentiert

### Praktische Umsetzung

1. Artefakt fertigstellen – Dokument der aktuellen Phase abschließen
2. CEIL-Review – Expertenvalidierung durchführen
3. Git-Commit – Baseline einfrieren mit aussagekräftiger Message
4. Journal-Eintrag – Savepoint dokumentieren

> Rollback-Prinzip: Bei Problemen in späteren Phasen kann auf den letzten funktionierenden Savepoint zurückgegangen werden. Die Dokumentation ermöglicht das Nachvollziehen, welche Entscheidungen zur Abweichung geführt haben.

---

## Kernaussagen dieses Kapitels

1. Promptotyping integriert drei Ebenen: technisch, methodisch, epistemisch
2. Das vierphasige Modell (Preparation → Exploration → Destillation → Implementation) strukturiert den Entwicklungsprozess
3. Jede Implementation-Iteration produziert einen neuen Prototype mit potentiellem Vault-Update
4. Vault-Updates sind erwarteter Teil des Prozesses, nicht Fehler
5. Der Critical Expert in the Loop ist essentiell für Qualitätssicherung
6. Das Journal institutionalisiert Reflexion und Nachvollziehbarkeit
7. Dokumentation ist nicht Overhead, sondern Teil der Methode
8. Prompting-Strategien sind Meta-Ansätze, keine festen Templates
9. Savepoints ermöglichen strukturierte Versionierung und Rollback

---

*Weiter zu: [04-scholar-centered-design.md](04-scholar-centered-design.md)*
