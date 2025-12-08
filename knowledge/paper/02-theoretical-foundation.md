# 2. Theoretische Fundierung

*← [Zurück zum Index](00-index.md) | [← Vorheriges Kapitel](01-introduction.md)*

---

## 2.1 LLMs als verdichtete semantische Repräsentationssysteme

Moderne Large Language Models basieren auf der **Transformer-Architektur**, deren Attention-Mechanismus Beziehungen zwischen Tokens über große Distanzen modelliert.

### Evidenz für tiefe Repräsentationen

Lindsey et al. (2025) zeigen, dass LLMs während der Textgenerierung simultan multiple abstrakte Repräsentationen aktivieren und kombinieren:

| Repräsentationsebene | Beschreibung |
|---------------------|--------------|
| **Semantisch** | Bedeutungsbeziehungen zwischen Konzepten |
| **Syntaktisch** | Grammatische Strukturen und Abhängigkeiten |
| **Kontextuell** | Situationsabhängige Interpretationen |

Diese Repräsentationen gehen über lokale Übergangswahrscheinlichkeiten hinaus.

---

## 2.2 System 1.42: Eine heuristische Charakterisierung

### Herleitung der Bezeichnung

Die Bezeichnung „System 1.42" verbindet zwei Referenzen:

1. **Kahnemans Dualismus (2011)**: Unterscheidung zwischen
   - *System 1*: Schnelles, intuitives, automatisches Denken
   - *System 2*: Langsames, deliberatives, analytisches Denken

2. **Douglas Adams' Metapher**: Die Antwort „42" in *Per Anhalter durch die Galaxis* – eine präzise Antwort ohne Kenntnis der eigentlichen Frage

### Definition

> **System 1.42** bezeichnet LLM-Verhalten, das Charakteristika zwischen intuitiver Musterassoziation und systematischer Problemlösung zeigt, ohne vollständige Eigenschaften beider Systeme zu erreichen.

LLMs generieren oft korrekte und nützliche Outputs, ohne dass ihre internen Problemformulierungen transparent oder vollständig verstanden wären.

### Epistemische Einschränkung

Diese Charakterisierung ist **nicht empirisch validiert**:

- Shanahan (2024) warnt explizit vor anthropomorphen Übertragungen auf maschinelle Systeme
- Es existieren keine Messungen, die LLMs präzise zwischen System 1 und 2 verorten würden
- Unsicher ist, ob Kahnemans humankognitive Kategorien auf maschinelle Prozesse übertragbar sind

> **System 1.42 fungiert als heuristische Arbeitshypothese, nicht als validierte Theorie.** Die praktische Wirksamkeit der Methode könnte primär aus ihrer strukturierten Vorgehensweise resultieren, während die theoretische Rahmung primär orientierende Funktion hat.

---

## 2.3 Abgestufte Validierungsstrategien

Die unklare epistemologische Natur von LLMs erfordert abgestufte Validierungsstrategien:

| Komplexitätsstufe | Beispiel | Validierungsanforderung |
|-------------------|----------|------------------------|
| **Niedrig** | E-Mail formulieren | Einzelner Prompt, minimale Prüfung |
| **Mittel** | Feature implementieren | Iterative Validierung, Code-Review |
| **Hoch** | Forschungswerkzeug entwickeln | Strukturierte Multi-Agent-Workflows, explizite Dokumentation, Expertenvalidierung |

### Komplexitätsprinzipien nach Flyvbjerg (2021)

- **Unknown Unknowns** multiplizieren sich mit jedem Iterationsschritt
- Die **Fehlerwahrscheinlichkeit** steigt exponentiell mit der Projektdauer
- Nur **8,5%** aller Großprojekte erreichen ihre ursprünglichen Ziele aufgrund unterschätzter Emergenzeffekte

Promptotyping adressiert diese Herausforderungen durch eine sechsphasige Struktur mit Zwischenvalidierung. Jede Phase fungiert als Kontrollpunkt zur Risikoreduktion.

---

## 2.4 Co-Intelligence und epistemische Partnerschaft

### Mollicks Konzept (2024, 2025)

Mollicks Konzept der **Co-Intelligence** bietet einen produktiven theoretischen Rahmen für die Mensch-KI-Kollaboration:

#### Centaur-Arbeit

Klare Aufgabenteilung:
- Menschen treffen strategische Entscheidungen
- KI übernimmt operative Aufgaben
- Schnittstellen sind definiert

#### Cyborg-Arbeit

Enge kognitive Verschränkung:
- Mensch und Maschine entwickeln in iterativen Dialogschleifen gemeinsam Lösungen
- Die Grenze zwischen menschlichem und maschinellem Beitrag verschwimmt

### Die fundamentale Spannung

Mollick (2025) beobachtet, dass sich die Rolle des Menschen verschiebt: vom Korrigieren von KI-Fehlern zum Steuern von KI-Arbeit. Dies greift für Forschungskontexte zu kurz. Der Mensch prüft nicht nur, ob die KI-Arbeit richtig ist, sondern ob sie fachlich angemessen ist.

> **LLMs liefern oft sehr gute Ergebnisse und können gleichzeitig nie Verlässlichkeit garantieren. Diese Spannung ist nicht auflösbar, nur durch fachliche Prüfung handhabbar.**

Diese epistemische Asymmetrie – hohe Qualität bei struktureller Unzuverlässigkeit – ist das zentrale Problem, das Promptotyping adressiert.

### Das Problem der Sycophancy

Die enge Verschränkung wirft das Problem der **Sycophancy** auf:

> **Sycophancy** bezeichnet die strukturelle Tendenz von LLMs zur unkritischen Bestätigung von Nutzerannahmen.

#### Ursachen (Malmqvist, 2024)

- Systematische Optimierung auf Nutzerzufriedenheit während des Trainings
- RLHF belohnt Antworten, die Nutzer als hilfreich bewerten
- Kritik oder Widerspruch wird seltener positiv bewertet

#### Empirische Evidenz (OpenAI, 2022–2023)

Auf Präferenzen optimierte Modelle bestätigen selbst offensichtlich falsche Prämissen, wenn der Nutzer diese mit Überzeugung formuliert.

### Lösungsansatz: Character Training (Anthropic, 2024)

Statt bloßer Gefälligkeit werden epistemische Tugenden als Kerncharakteristika etabliert:

- **Neugier**: Aktives Hinterfragen von Annahmen
- **Intellektuelle Ehrlichkeit**: Eingestehen von Unsicherheit
- **Kritische Reflexion**: Prüfung der eigenen Outputs

Diese modellseitige Verankerung muss jedoch durch methodische Ansätze ergänzt werden, die menschliche Expertise systematisch integrieren.

---

## 2.5 Wissenstheoretische Verankerung

Die theoretische Fundierung von Promptotyping integriert multiple wissenstheoretische Positionen:

### Polanyis implizites Wissen (1966)

**Tacit Knowledge** – Wissen, das wir haben, aber nicht vollständig artikulieren können – ist zentral für den Promptotyping-Prozess:

> „We can know more than we can tell."
> — Michael Polanyi

Der Prozess der Explizierung taciten Wissens in formale Strukturen (Prompts, Dokumentation) bildet einen Kernaspekt der Methodik.

### Schöns Reflective Practice (1983)

Schöns Unterscheidung strukturiert den Entwicklungsprozess:

| Modus | Beschreibung | Anwendung in Promptotyping |
|-------|--------------|---------------------------|
| **Reflection-in-action** | Reflexion während der Handlung | Kritische Prüfung während des LLM-Dialogs |
| **Reflection-on-action** | Nachträgliche Analyse | Dokumentation im Journal, Lessons Learned |

### „Let's Verify Step by Step" (OpenAI, 2023)

Dieses Paradigma zeigt, dass LLMs stärker in der **Verifikation** bestehender Aussagen sind als in der **initialen Generierung** korrekter Inhalte. Dies unterstützt den Critical-Expert-in-the-Loop-Ansatz.

### Design Science Research (Hevner et al., 2004)

Das Design Science Research Framework bildet die methodologische Basis. Der Prozess verläuft von der Problemidentifikation über die Artefaktentwicklung zur Demonstration und Evaluation, mit möglicher Iteration zurück zu früheren Phasen.

Für KI-gestützte Artefakte erweitert sich das Framework um drei zusätzliche Qualitätsdimensionen:

1. **Epistemische Transparenz**: Nachvollziehbarkeit der Entscheidungen
2. **Reproduzierbarkeit**: Wiederholbarkeit des Prozesses
3. **Ethische Vertretbarkeit**: Verantwortungsvolle Nutzung

### SECI-Modell (Nonaka & Takeuchi, 1995)

Die Wissensspirale informiert das Wissensmanagement in Promptotyping:

| Phase | Beschreibung | Entsprechung in Promptotyping |
|-------|--------------|------------------------------|
| **Socialization** | Implizit → Implizit | Expert Interviews, Workshops |
| **Externalization** | Implizit → Explizit | Dokumentation in Markdown |
| **Combination** | Explizit → Explizit | Synthese in README, DATA, CONTEXT |
| **Internalization** | Explizit → Implizit | Praxiswissen durch Iteration |

### Boundary Objects (Star & Griesemer, 1989)

Die standardisierten Dokumentationsformate fungieren als **Boundary Objects** – Artefakte, die zwischen verschiedenen sozialen Welten vermitteln:

- Zwischen technischer Implementation und fachlicher Anforderung
- Zwischen Entwickler:in und Domänenexpert:in
- Zwischen Mensch und LLM

---

## Kernaussagen dieses Kapitels

1. **System 1.42** ist eine heuristische Charakterisierung, keine empirisch validierte Theorie
2. LLMs zeigen Eigenschaften zwischen intuitivem und analytischem Denken
3. **Sycophancy** ist ein strukturelles Problem, das methodisch adressiert werden muss
4. **Co-Intelligence** erfordert klare Aufgabenteilung und kritische Reflexion
5. Multiple wissenstheoretische Traditionen (Polanyi, Schön, SECI) informieren die Methodik
6. **Abgestufte Validierung** entspricht der Projektkomplexität

---

*Weiter zu: [03-methodology.md](03-methodology.md)*
