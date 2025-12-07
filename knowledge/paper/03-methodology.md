# 3. Die Promptotyping-Methode

*← [Zurück zum Index](00-index.md) | [← Vorheriges Kapitel](02-theoretical-foundation.md)*

---

## 3.1 Definition und konzeptuelle Architektur

### Definition

> **Promptotyping** ist ein dreiebenes Framework für die methodisch strukturierte KI-gestützte Entwicklung digitaler Forschungswerkzeuge. Es integriert technisches Prompt Engineering, methodisches Requirements Engineering und epistemische Reflexion systematisch.

### Context Engineering: Eine Arbeitsdefinition

> **Context Engineering** bezeichnet die systematische Gestaltung, Verdichtung und Orchestrierung von Kontextinformationen, die einem Frontier-LLM zur Verfügung gestellt werden, um dessen Outputs auf spezifische Aufgaben, Domänen und Qualitätsanforderungen auszurichten.

Der Begriff geht auf Mei et al. (2025) zurück und grenzt sich vom engeren **Prompt Engineering** ab: Während Prompt Engineering die Formulierung einzelner Anfragen optimiert, umfasst Context Engineering die strategische Strukturierung des gesamten Informationsraums über multiple Interaktionen hinweg.

**Drei Kernoperationen:**

| Operation | Beschreibung |
|-----------|--------------|
| **Creation** | Explizierung impliziten Wissens in maschinenlesbare Formate |
| **Compression** | Verdichtung auf relevante Information unter Vermeidung von *Context Rot* |
| **Orchestration** | Dynamische Steuerung des Kontextflusses über Iterationen |

> **Context Rot** (Hong et al., 2025): Die Beobachtung, dass LLM-Leistung mit wachsender Kontextlänge degradiert. Mehr Tokens führen nicht zu besseren Ergebnissen – gezielte Verdichtung erhöht die Modellaufmerksamkeit auf wesentliche Aspekte.

---

### Die drei Ebenen von Promptotyping

#### Ebene 1: Technisch (Context Engineering)

| Komponente | Beschreibung |
|------------|--------------|
| **Context Creation** | Systematische Erstellung relevanter Kontextinformationen durch Formalisierung impliziten Domänenwissens und Strukturierung von Anforderungen |
| **Context Compression** | Gezielte Verdichtung auf relevante Information. Das *Compression-als-Amplification*-Paradox führt zu erhöhter Modellaufmerksamkeit auf wesentliche Aspekte |
| **Context Orchestration** | Strategische Steuerung über multiple Iterationen mit dynamischer Anpassung basierend auf Zwischenergebnissen |

#### Ebene 2: Methodisch (Requirements Engineering)

Promptotyping funktioniert als iterativer Requirements Engineering Ansatz, der etablierte Prinzipien des Scholar-Centred Design nutzt (vgl. [Kapitel 4](04-scholar-centered-design.md)).

> Es transformiert vage Forschungsfragen durch kontinuierliche Expert-in-the-Loop Validierung in funktionsfähige, auf epistemologische Bedürfnisse abgestimmte Prototypen.

#### Ebene 3: Epistemisch (Kritisch-reflexive Praxis)

Promptotyping etabliert eine kritisch-reflexive Praxis der Ko-Konstruktion von Wissen zwischen menschlicher Expertise und maschineller Verarbeitung.

> Jeder Prompt wird als **epistemische Intervention** verstanden, die nicht nur Informationen abruft, sondern aktiv die Generierung neuer Zusammenhänge anregt.

---

## 3.2 Das sechsphasige Entwicklungsmodell

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│   ┌──────────┐    ┌──────────┐    ┌─────────────┐    ┌──────────────┐  │
│   │  CONTEXT │───▶│   DATA   │───▶│ EXPLORATION │───▶│ REQUIREMENTS │  │
│   │ README.md│    │ DATA.md  │    │   (frei)    │    │REQUIREMENTS.md│  │
│   └──────────┘    └──────────┘    └─────────────┘    └──────────────┘  │
│        ▲                                                     │         │
│        │              ◀─── Rückschleifen ───◀                │         │
│        └─────────────────────────────────────────────────────┘         │
│                                                              │         │
│                                                              ▼         │
│                              ┌────────────────┐    ┌────────────────┐  │
│                              │ IMPLEMENTATION │───▶│   PROTOTYPE    │  │
│                              │INSTRUCTIONS.md │    │   Code/Tool    │  │
│                              └────────────────┘    └────────────────┘  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### Phase 1: CONTEXT

**Artefakt:** `README.md`

**Ziel:** Etablierung des epistemischen Rahmens.

**Inhalt:**
- Forschungsfragen
- Theoretische Vorannahmen
- Methodische Constraints
- Projektziele

**Funktion:**
Diese Phase verhindert die unkritische Übernahme technischer Lösungen für wissenschaftliche Probleme und zwingt zur präzisen Artikulation der Projektziele.

**Typische Fragestellungen:**
- Was ist das wissenschaftliche Ziel?
- Welche Forschungsfrage soll beantwortet werden?
- Welche methodischen Einschränkungen bestehen?
- Wer sind die Zielnutzer:innen?

---

### Phase 2: DATA

**Artefakt:** `DATA.md`

**Ziel:** Analyse und Dokumentation der Datenstrukturen.

**Inhalt:**
- Datenformat und Schema
- Inkonsistenzen und Anomalien
- Semantische Bedeutungen
- Normalisierungsempfehlungen

**Funktion:**
Die dokumentierte Analyse verhindert nicht nur technische Fehler, sondern offenbart auch interpretative Entscheidungen, die für die wissenschaftliche Nachvollziehbarkeit essentiell sind.

**Beispiel aus der Praxis:**
Im REALonline-Projekt traten JSON-Felder inkonsistent als String oder Array auf. Diese in der DATA-Phase dokumentierte Problematik informierte die spätere Normalisierung und machte die Entscheidung nachvollziehbar.

---

### Phase 3: EXPLORATION

**Artefakt:** Keines (bewusst undokumentiert)

**Ziel:** Kreatives Experimentieren ohne vorzeitige Festlegung.

**Funktion:**
Diese „epistemische Spielwiese" ermöglicht das Entdecken unerwarteter Möglichkeiten und Grenzen, ohne den Overhead formaler Dokumentation.

**Charakteristika:**
- Freies Experimentieren mit dem LLM
- Erste Prompt-Versuche
- Erkundung der Möglichkeitsräume
- Kein Dokumentationszwang

> **Wichtig:** Die Ergebnisse dieser Phase fließen in die nachfolgende REQUIREMENTS-Phase ein, werden aber nicht formal dokumentiert.

---

### Phase 4: REQUIREMENTS

**Artefakt:** `REQUIREMENTS.md`

**Ziel:** Formalisierung vager Forschungsideen in testbare Spezifikationen.

**Priorisierungsschema:**

| Priorität | Beschreibung |
|-----------|--------------|
| **MUSS** | Kritische Features ohne die das System keinen Wert hat |
| **SOLL** | Wichtige Features die den Wert signifikant steigern |
| **KANN** | Nice-to-have Features für zukünftige Iterationen |

**Funktion:**
Die Unterscheidung zwingt zur Priorisierung und macht Trade-offs zwischen technischer Machbarkeit und wissenschaftlichem Anspruch explizit.

**Formulierungsprinzip:**
Jede Anforderung als testbaren Satz formulieren.

```
✓ "Das System muss Korrespondenzen nach Datum filterbar darstellen"
✗ "Das System soll benutzerfreundlich sein"
```

---

### Phase 5: IMPLEMENTATION

**Artefakt:** `INSTRUCTIONS.md`

**Ziel:** Dokumentation aller Datentransformationen, Algorithmen und interpretativen Entscheidungen.

**Inhalt pro Feature:**
- Input-Format (Rohdaten)
- Transformationsschritte (präzise Algorithmen)
- Output-Format (Zielstruktur)
- Edge Cases und deren Behandlung
- Validierungen und Fehlerbehandlung

**Funktion:**
Diese Phase fungiert als **epistemisches Protokoll**, das spätere Nachvollziehbarkeit und Kritik ermöglicht.

> **Aus der Praxis:** Diese Phase erwies sich als kritisch für die Fehlervermeidung. Projekte ohne INSTRUCTIONS.md (z.B. Kriminalmuseum mit nur 3 Dokumenten) litten unter erschwerter Wartbarkeit.

---

### Phase 6: PROTOTYPE

**Artefakt:** Lauffähiger Code

**Ziel:** Generierung von Code basierend auf den dokumentierten Spezifikationen.

**Charakteristika:**
- Der generierte Code ist nicht Endpunkt, sondern Ausgangspunkt für weitere Iteration
- Jede Iteration kann Rückschleifen zu früheren Phasen auslösen
- Validierung gegen REQUIREMENTS.md

**Typisches Output:**
- Single HTML File mit inline CSS/JS
- Keine externen Dependencies außer CDN-verfügbare
- Kommentierter Code an kritischen Stellen

---

## 3.3 Rückschleifen und Iteration

### Wann sind Rückschleifen nötig?

| Auslöser | Zielphase | Beschreibung |
|----------|-----------|--------------|
| Fehlende Datenfelder | DATA | Benötigte Information nicht in Datenstruktur vorhanden |
| Unklare Anforderungen | REQUIREMENTS | Spezifikation lässt mehrere Interpretationen zu |
| Neue Erkenntnisse | CONTEXT | Prototyp offenbart neue Forschungsfragen |
| Inkonsistente Daten | DATA | Normalisierung erfordert Neubewertung |

### Erkennung

> Die Erkennung notwendiger Rückschleifen erfordert **Fachwissen**. Der Mensch muss wissen, wann ein Output falsch, unvollständig oder irreführend ist. Dieses Urteil erfordert Domänenwissen und methodische Erfahrung.

---

## 3.4 Critical Expert in the Loop

### Definition

> Der **Critical Expert in the Loop** ist nicht passiver Empfänger, sondern kritischer Validator. Domänenexpert:innen bringen ihr Fachwissen kontinuierlich in den Dialog ein.

### Operationalisierung

Der Critical-Expert-Ansatz operationalisiert Schöns Reflective Practice für die KI-gestützte Forschung:

**Strategien gegen Sycophancy:**

1. **Critical Questioning**: Explizites Auffordern zur Kritik
   ```
   "Welche Schwächen siehst du in diesem Ansatz?"
   "Was könnte an meiner Annahme falsch sein?"
   ```

2. **Alternative Exploration**: Einfordern von Alternativen
   ```
   "Zeige mir drei verschiedene Ansätze für dieses Problem"
   "Was wäre ein gegenteiliger Standpunkt?"
   ```

3. **Assumption Surfacing**: Explizitmachen von Annahmen
   ```
   "Welche impliziten Annahmen macht dieser Code?"
   "Was setze ich hier als gegeben voraus?"
   ```

### Beispiel: REALonline-Projekt

Der Historiker korrigierte die technische Annahme, Objekte nach modernen Kategorien zu strukturieren:

**Technische Annahme (falsch):**
```
Objekte → Kategorien (Möbel, Textilien, Gefäße)
```

**Historische Korrektur:**
```
Objekte → Räume → Gebäude
(mit historischen Begriffen aus nomenclature_original)
```

**Begründung:** Räumliche Organisation war im Mittelalter primärer Bedeutungsträger für soziale Hierarchien.

> Diese Korrektur war mehr als technische Anpassung. Sie transformierte das Datenmodell von einer anachronistischen zu einer historisch adäquaten Repräsentation.

---

## 3.5 Das Journal als reflexives Instrument

### Funktion

Das **Promptotyping Journal** dokumentiert nicht nur Entscheidungen, sondern auch Zweifel, Überraschungen und Lernprozesse. Es fungiert als Laborbuch der digitalen Geisteswissenschaften.

### Struktur eines Journal-Eintrags

```markdown
## [Datum] - [Phase] - [Sitzung Nr.]

### Kontext
[Beschreibung der Ausgangssituation]

### Vorgehen
**Modell:** [Verwendetes LLM]
**Input:** [Bereitgestellte Dokumente]
**Werkzeuge:** [Tools, IDEs, Libraries]

### Hauptaktivität
**Prompt:** [Prompt-Text]
**Output:** [Zusammenfassung oder Verweis]

### Validierung
**Validator:** [Name und Rolle]
**Methode:** [Technisch / Fachlich / LLM-as-Judge]
**Entscheidung:** [Akzeptiert / Modifiziert / Verworfen]
**Begründung:** [Detaillierte Einschätzung]

### Probleme & Lösungen
[Aufgetretene Schwierigkeiten]

### Erkenntnisse
- [Muster die sich bewährt haben]
- [Was beim nächsten Mal anders]

### Savepoint
☐ Phase abgeschlossen
☐ Dokumente erstellt: [Liste]
☐ Expertenvalidierung erfolgt
☐ Git-Commit: [Hash]
```

---

## 3.6 Praktische Implementierung

### Empfohlenes Setup

| Komponente | Empfehlung |
|------------|------------|
| **IDE** | VS Code mit Markdown-Extensions |
| **Versionskontrolle** | Git mit Commits nach jedem Savepoint |
| **Preprocessing** | Python für komplexe Datenstrukturen |
| **LLM-Zugang** | API für Reproduzierbarkeit, kostenlos für Einstieg |

### Standardisierte Projektstruktur

```
project/
├── README.md           # CONTEXT
├── DATA.md             # Datenspezifikation
├── REQUIREMENTS.md     # Anforderungen
├── INSTRUCTIONS.md     # Implementierungsanweisungen
├── JOURNAL.md          # Entwicklungsprotokoll
├── data/               # Rohdaten
│   └── sample.json
├── exploration/        # Experimentelle Prototypen
│   └── test-01.html
├── prototype/          # Finaler Code
│   └── index.html
└── .git/               # Versionskontrolle
```

---

## 3.7 Prompting-Strategien

Promptotyping verwendet keine festgelegten Prompt-Templates, sondern **Meta-Strategien**, die situativ angewendet werden. Diese Strategien operationalisieren die Interaktion mit dem Frontier-LLM über alle Phasen hinweg.

### Übersicht der Strategien

| Strategie | Zweck | Anwendung |
|-----------|-------|-----------|
| **Reasoning** | Möglichkeitsraum öffnen | Token-Generierung zur Exploration von Optionen |
| **LLM-Validierung** | Qualitätsprüfung | LLM zur Bewertung eigener Outputs nutzen |
| **Expert-in-the-Loop** | Richtungskorrektur | Menschliche Intervention bei Abweichungen |
| **LLM-as-Judge** | Unabhängige Bewertung | Zweites Frontier-LLM mit eigenem Kontext |
| **Context Distillation** | Wissensakkumulation | Vault-Dokumentation nachziehen und kuratieren |
| **Plan Generation** | Strukturierte Umsetzung | Pläne erzeugen und kritisch begleiten |

---

### Reasoning (Explorative Token-Generierung)

Frontier-LLMs nutzen Token-Generierung als "Denkprozess". Das Anfordern von explizitem Reasoning öffnet den Möglichkeitsraum:

```
"Denke laut nach: Welche Ansätze gibt es für dieses Problem?"
"Generiere drei unterschiedliche Lösungswege mit Vor- und Nachteilen"
```

**Zweck:** Vermeidung vorschneller Festlegung auf eine Lösung.

---

### LLM-Validierung

Das LLM wird zur Prüfung seiner eigenen Outputs eingesetzt:

```
"Prüfe diesen Code auf Fehler und Inkonsistenzen"
"Welche Edge Cases werden nicht behandelt?"
"Sind die genannten Optionen vollständig?"
```

**Limitation:** LLMs können eigene systematische Fehler nicht zuverlässig erkennen.

---

### Expert-in-the-Loop Korrektur

Der menschliche Experte greift aktiv ein, um das LLM in die richtige Richtung zu "schubsen":

```
"Deine Annahme X ist falsch. Im historischen Kontext gilt Y."
"Ignoriere die moderne Kategorisierung. Verwende stattdessen..."
```

**Voraussetzung:** Domänenwissen, um falsche Annahmen überhaupt zu erkennen.

---

### LLM-as-Judge

Ein zweites Frontier-LLM mit eigenem Kontext bewertet die Outputs des ersten:

**Setup:**
1. LLM A generiert Lösung
2. LLM B erhält Aufgabenbeschreibung + Lösung (ohne Kontext von A)
3. LLM B bewertet Qualität, Vollständigkeit, Korrektheit

**Vorteil:** Unabhängige Perspektive, reduziert Bestätigungsfehler.

---

### Context Distillation

Systematische Verdichtung und Kuratierung des Kontexts über Iterationen:

1. **Nachziehen:** Erkenntnisse aus der aktuellen Sitzung in Vault-Dokumente übertragen
2. **Kuratieren:** Veraltetes entfernen, Wichtiges hervorheben
3. **Komprimieren:** Redundanzen eliminieren, auf Wesentliches fokussieren

**Zweck:** Vermeidung von Context Rot, Erhalt des akkumulierten Wissens.

---

### Plan Generation

Komplexe Aufgaben werden in explizite Pläne zerlegt:

```
"Erstelle einen Schritt-für-Schritt-Plan für die Implementierung"
"Was sind die Abhängigkeiten zwischen den Schritten?"
```

**Kritisches Begleiten:**
- Pläne nicht blind übernehmen
- Jeden Schritt auf Plausibilität prüfen
- Bei Abweichungen Plan anpassen

---

### Kombination der Strategien

In der Praxis werden Strategien kombiniert:

```
1. Reasoning       → Optionen generieren
2. LLM-Validierung → Optionen bewerten lassen
3. Expert-in-the-Loop → Falsche Annahmen korrigieren
4. Plan Generation → Gewählte Option strukturieren
5. Context Distillation → Entscheidung dokumentieren
```

Diese Sequenz wiederholt sich iterativ über alle Phasen.

---

## Kernaussagen dieses Kapitels

1. Promptotyping integriert **drei Ebenen**: technisch, methodisch, epistemisch
2. Das **sechsphasige Modell** strukturiert den Entwicklungsprozess
3. **Rückschleifen** sind erwarteter Teil des Prozesses, nicht Fehler
4. Der **Critical Expert in the Loop** ist essentiell für Qualitätssicherung
5. Das **Journal** institutionalisiert Reflexion und Nachvollziehbarkeit
6. **Dokumentation** ist nicht Overhead, sondern Teil der Methode
7. **Prompting-Strategien** sind Meta-Ansätze, keine festen Templates

---

*Weiter zu: [04-scholar-centered-design.md](04-scholar-centered-design.md)*
