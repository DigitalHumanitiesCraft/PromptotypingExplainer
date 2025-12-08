# Knowledge: Promptotyping Explainer

## Zweck dieses Dokuments

Destilliertes Wissen für die Entwicklung einer Scrollytelling-Webseite, die den Promptotyping-Prozess narrativ und visuell vermittelt.

Weitere Dokumente im Vault:
- [requirements.md](requirements.md) – Zielgruppen, User Stories, technische Constraints
- [implementation.md](implementation.md) – Tech Stack, Komponenten-Architektur
- [journal.md](journal.md) – Arbeitstagbuch, Entscheidungen, Learnings
- [WEBSITE-OUTLINE.md](WEBSITE-OUTLINE.md) – Scrollytelling-Struktur
- [paper/](paper/) – Akademische Dokumentation der Methodik

---

# TEIL 1: CONTENT

## Warum Promptotyping?

### Das Problem

Forschungswissen bleibt oft in Dokumenten gefangen. PDFs, XML-Dateien, Tabellen, Notizen. Die Übersetzung von Daten in funktionale Werkzeuge ist zeitaufwändig und erfordert technische Expertise, die nicht jeder Forschende mitbringt.

Frontier-LLMs können Code generieren. Aber ohne strukturierten Kontext produzieren sie generische Lösungen, die am Forschungsbedarf vorbeigehen. Die Herausforderung: Wie kommuniziert man Domänenwissen so an ein LLM, dass es passende Werkzeuge generiert?

### Die Antwort

Nicht das Coden selbst ist die Kernkompetenz, sondern das Wissen darüber, was guter Code für Forschungszwecke ist. Modellierung, Formalisierung, Domänenwissen, kritische Validierung.

Promptotyping ist der Versuch, dieses Wissen systematisch an LLMs zu kommunizieren.

---

## Was ist Promptotyping?

### Definition

Promptotyping ist eine Context-Engineering-Methode für die schnelle, forschungsdatengetriebene Erstellung von Prototypen für Forschungstools, Workflows und Modelle mittels Frontier-LLMs.

### Anwendungsbereich

Obwohl die Methodik ihren Ursprung in den Digital Humanities hat, sind ihre Mechanismen – Wissensdestillation und Context Engineering – universell auf datenintensive Forschungsprozesse übertragbar: statistische Analysen in der Psychologie, Datenvisualisierung in den Sozialwissenschaften, explorative Analysen in der Bioinformatik.

### Kernprinzip

Das Mapping von semantisch reichhaltigen Forschungsdaten und explizitem Forschungskontext auf funktionale Interfaces durch iterative Mensch-LLM-Kollaboration.

### Theoretischer Rahmen: Co-Intelligence

Das Verhältnis zwischen Mensch und LLM folgt Ethan Mollicks Konzept der **Co-Intelligence** (2024) – einer epistemischen Partnerschaft mit zwei Modi:

- **Centaur-Arbeit**: Klare Aufgabenteilung. Menschen treffen strategische Entscheidungen, KI übernimmt operative Aufgaben. Schnittstellen sind definiert.
- **Cyborg-Arbeit**: Enge kognitive Verschränkung. Mensch und Maschine entwickeln in iterativen Dialogschleifen gemeinsam Lösungen. Die Grenze zwischen menschlichem und maschinellem Beitrag verschwimmt.

Promptotyping operiert primär im Cyborg-Modus: Der iterative Dialog in Phase 4 ist keine bloße Arbeitsteilung, sondern eine gemeinsame Lösungsentwicklung.

### Verhältnis zu Vibe Coding

Promptotyping ist kein Gegenentwurf zu Vibe Coding, sondern ein strukturierter Context-Engineering-Prozess MIT Vibe-Coding-Elementen. Die intuitive, explorative Arbeitsweise des Vibe Codings wird beibehalten, aber durch systematische Dokumentation und Destillation ergänzt.

Vibe Coding funktioniert. Promptotyping gibt ihm Struktur für Forschungskontexte, indem es LLM-Eigenschaften wie Context Rot und Sycophancy durch Destillation adressiert.

**Das scheinbare Paradoxon**: Die Methode integriert intuitive Steuerung durch natürliche Sprache mit zwingend systematischer Dokumentation. Die Dokumentation ist dabei nicht bürokratische Nachbereitung, sondern notwendiger Input – Context Engineering, das das Modell vor Context Rot schützt und die Informationsdichte maximiert.

---

## Methodische Grundlagen: User-Centered Design & Scholar-Centered Design

Deep Dive: Dieser Abschnitt beschreibt die methodischen Fundamente, auf denen Promptotyping aufbaut.

### Begriffsdefinitionen

User-Centered Design (UCD) Requirements Engineering:
UCD Requirements Engineering bezeichnet die systematische Erhebung, Dokumentation und Verwaltung von Anforderungen, bei der die Bedürfnisse, Fähigkeiten und Einschränkungen der zukünftigen Nutzer im Mittelpunkt stehen. Anders als beim klassischen Requirements Engineering, das oft funktionsgetrieben ist, leitet UCD die Anforderungen aus dem Nutzungskontext ab.
- Kernziel: Maximierung von Usability (Gebrauchstauglichkeit) und User Experience (UX)
- Leitprinzip: Anpassung der Technologie an den Menschen

Scholar-Centered Design (SCD):
Scholar-Centered Design ist eine spezialisierte Weiterentwicklung des UCD für den wissenschaftlichen Kontext (oft Digital Humanities oder Data Science). Es adressiert die spezifischen Arbeitsweisen von Forschenden, die sich signifikant von denen klassischer Endverbraucher unterscheiden.
- Kernziel: Unterstützung komplexer hermeneutischer Prozesse, kritischer Analyse und Erkenntnisgewinnung
- Leitprinzip: Unterstützung von Komplexität und Ambiguität statt reiner Vereinfachung. Transparenz der Datenherkunft (Provenienz) ist wichtiger als effiziente Abarbeitung von Routineaufgaben.

### Synthese im Phasenmodell

Die vier Phasen des Promptotyping integrieren beide Ansätze:

Analyse (CONTEXT):
- UCD: Identifikation der Nutzergruppen (Personas), User Stories. „Welches Problem löst das System?"
- SCD: Analyse der Forschungsmethodik. „Wie beeinflusst das Tool die Interpretation der Daten?"

Design (DATA/REQUIREMENTS):
- UCD: Reduktion kognitiver Belastung. Intuitive Interfaces.
- SCD: Design für Exploration. Mehrere Informationsebenen. Methodische Transparenz.

Prototyping (IMPLEMENTATION):
- UCD: Low- bis High-Fidelity Prototypen für Interaktionsflüsse.
- SCD: Datennahe Prototypen mit echten Forschungsdaten statt Platzhalter.

Evaluation (PROTOTYPE):
- UCD: Usability-Tests (Effizienz, Effektivität, Zufriedenheit nach ISO 9241-11).
- SCD: Validierung wissenschaftlicher Utility. Neue Erkenntnisse? Verzerrungen vermieden?

### Iteration und der hermeneutische Zirkel

Die Rücksprünge im Prozess haben unterschiedliche Auslöser:

Fehlerkorrektur (UCD): Wenn in der Evaluation festgestellt wird, dass ein Nutzer die Navigation nicht versteht, erfolgt ein Rücksprung zum Design.

Hermeneutischer Zirkel (SCD): Das erste Sichten von Ergebnissen verändert oft die Fragestellung selbst. Der Forscher erkennt neue Muster und muss die Anforderungen ändern. Dies ist nicht Fehlerbehebung, sondern Teil des Erkenntnisgewinns.

### Referenzen

User-Centered Design & Requirements Engineering:
- ISO 9241-210:2019: Ergonomics of human-system interaction — Part 210: Human-centred design for interactive systems.
- Pohl, K., & Rupp, C. (2015): Basiswissen Requirements Engineering. dpunkt.verlag.
- Beyer, H., & Holtzblatt, K. (1998): Contextual Design: Defining Customer-Centered Systems. Morgan Kaufmann.

Scholar-Centered Design & Digital Humanities:
- Warwick, C. (2012): Studying Users in Digital Humanities. In: Warwick, C., Terras, M., & Nyhan, J. (Eds.), Digital Humanities in Practice. Facet Publishing.
- Gibbs, F., & Owens, T. (2012): Building Better Digital Humanities Tools.
- Kemman, M. (2021): Trading Zones of Digital History. De Gruyter.

---

## Die vier Phasen

### Phase 1: Preparation

Narrativ:
Sammlung aller relevanten Rohmaterialien. Forschungsdaten (.doc, .xml, PDFs, CSV), Dokumentation zu Standards und Modellen (Editionsrichtlinien, Schemata), Forschungsfragen und Domänenwissen.

Artefakte:
Rohdateien - keine .md Dokumente. Das Rohmaterial ist der Input für die späteren Phasen.

---

### Phase 2: Exploration

Narrativ:
Analyse und Experimentieren mit dem Rohmaterial. Strukturen verstehen, erste LLM-Experimente. Z.B. ein Python-Script schreiben lassen, das die Struktur eines .doc extrahiert und analysiert.

Artefakte:
Keine formalen Dokumente. Das freie Experimentieren ermöglicht das Entdecken unerwarteter Möglichkeiten ohne Dokumentations-Overhead.

---

### Phase 3: Destillation

Narrativ:
HIER entstehen die .md Files. Das explorative Wissen wird in kompakte, formalisierte Dokumente verdichtet. Diese Dokumente sind keine Dokumentation im klassischen Sinn, sondern Denkumgebungen für das LLM.

Kernprinzip - Context Rot vermeiden:
Je mehr Tokens im Context Window, desto schlechter die Modellleistung (Hong et al., 2025). Destillation bedeutet: maximale Information mit minimalen Tokens.

Artefakte (der Promptotyping Vault):
- DATA.md: Aus der Analyse des Rohmaterials destillierte Datenstruktur
- REQUIREMENTS.md: Formalisierte Anforderungen mit MUSS/SOLL/KANN-Priorisierung
- CONTEXT.md: Domänenwissen, Forschungsfragen, Projektziele

---

### Phase 4: Implementation

Narrativ:
Der eigentliche Promptotyping-Dialog beginnt. Das LLM erhält die destillierten .md-Dokumente und generiert Code. Der Mensch validiert, gibt Feedback, lässt nachbessern. Jede Iteration produziert einen neuen Prototype.

Artefakte:
- Prototype(n): Lauffähiger Code (jede Iteration = neuer Prototype)
- Vault-Updates: Die .md Files werden mit neuem Wissen aktualisiert

Critical Expert in the Loop:
Der Mensch ist nicht passiver Empfänger, sondern kritischer Validator. Bewusstsein für Sycophancy (LLM stimmt zu statt zu widersprechen) und Konfabulationen (plausible aber falsche Outputs) ist essentiell.

Iteratives Vault-Update:
Jede Promptotyping-Iteration generiert neues Wissen: über die Daten, den Kontext, die Anforderungen. Dieses Wissen fließt zurück in den Vault. Die .md-Dateien werden aktualisiert, erweitert, präzisiert. So wächst das destillierte Wissen mit jeder Iteration.

Iterationszyklus:
Prompt → LLM-Output → Validierung → Vault-Update → nächster Prompt → neuer Prototype → ...

Woran erkennt man, dass ein Vault-Update nötig ist?
Das erfordert Fachwissen. Der Mensch muss erkennen, wann ein LLM-Output zeigt, dass Kontext fehlt oder falsch verstanden wurde. Dieses Urteil erfordert Domänenwissen und methodische Erfahrung.

---

## Prompting-Strategien

Promptotyping verwendet keine festen Prompt-Templates, sondern Strategien, die je nach Situation operationalisiert werden.

Orientierung geben:
Das LLM wissen lassen, wo wir sind und was das Ziel ist. Kontextdokumente referenzieren. Scope klären.

Verständnis prüfen:
Nachfragen, ob das LLM den Kontext verstanden hat. Zusammenfassungen einfordern.

Qualität einfordern:
Explizit auf Standards hinweisen. Destillierte, aktuelle Dokumentation verlangen.

Entscheidungen treffen:
Architekturentscheidungen aktiv kommunizieren. Das LLM ist Ausführender, nicht Entscheider.

Reflexion erzwingen:
Regelmäßige Stopps einbauen. "Was haben wir erreicht?" fragen. Fortschritt dokumentieren.

Validierung durch Tests:
Testcode generieren lassen. Automatische Prüfung, ob Output den Anforderungen entspricht.

---

## Beispiele

CorrespExplorer:
CMIF-Daten → Netzwerk, Timeline, Karte. Entwicklungszeit: 2 Nachmittage.
- GitHub: https://github.com/DigitalHumanitiesCraft/CorrespExplorer
- Live: https://digitalhumanitiescraft.github.io/CorrespExplorer

DEPCHA Aldersbach:
TEI-Rechnungsbuch → Dashboard. Entwicklungszeit: 3 Stunden.

Wheaton Network:
Day Book → Force-Directed Graph. Entwicklungszeit: 1-2 Tage (frühe Modellgeneration).

---

# TEIL 2: VISUAL SYSTEM

## Farbpalette

- Slate Grey (#607D8B): Daten, Standards, das Gegebene, das Kalte
- Terracotta (#BF5B3E): Menschliche Intervention, Transformation, die Hitze des Prozesses
- Weiß (#FFFFFF): Hintergrund
- Schwarz (#1A1A1A): Linien, Text
- Erfolg-Grün (#4CAF50): Validierung bestanden
- Fehler-Rot (#E53935): Test fehlgeschlagen
- In-Progress-Orange (#FF9800): Arbeit läuft

## Typografie

- Headlines: Sans-Serif, bold, größer. Für Phasen-Titel und zentrale Aussagen.
- Body: Sans-Serif, regular. Für erklärende Texte.
- Code/Technical: Monospace. Für Prompts, Dateinamen, technische Begriffe.

## Icon-System

Phase 1 Icons:
XML-Dokument (Winkelklammern-Symbol), PDF (Paper-Symbol), Tabelle (Grid-Symbol), Notizblock (Linien-Symbol).

Phase 2 Icons:
Person (Silhouette), Ort (Pin), Zeit (Kalender), Relation (verbundene Punkte).

Phase 3 Icons:
Vault/Ordner (Obsidian-artig mit Graph-Andeutung), Markdown-Datei (.md Badge).

Phase 4 Icons:
Chat-Bubble Mensch (Terracotta), Chat-Bubble LLM (Slate Grey), Browser-Frame, Check (grün), X (rot), Spinner (orange).

Allgemeine Icons:
Pfeil (durchgezogen für Hauptfluss), Pfeil (gestrichelt für Vault-Update), Fragezeichen, Info.

## Animationsprinzipien

- Ease-Out für einfliegende Elemente (natürliches Abbremsen)
- Ease-In-Out für Transformationen (sanfte Übergänge)
- Linear für Fortschritts-Animationen (konstante Geschwindigkeit)
- Dauer: 300-500ms für UI-Feedback, 800-1200ms für narrative Übergänge

---

## Theoretische Grundlagen: LLMs verstehen

### "Strange New Minds" (Summerfield, 2025)

LLMs sind weder reine Werkzeuge noch echte Intelligenz – sie sind etwas Neues. Christopher Summerfield beschreibt sie als "Strange New Minds": Systeme, die menschenähnliche Outputs produzieren, aber fundamental anders funktionieren.

Für Promptotyping bedeutet das: Wir müssen verstehen, **wie** LLMs arbeiten, um produktiv mit ihnen zu kollaborieren.

### System 1.42 – Weder System 1 noch System 2

Der Begriff spielt auf Kahnemans Dual-Process-Theorie an. LLMs passen in keine Kategorie:
- **System 1** (schnell, intuitiv) – aber LLMs haben keine Intuition
- **System 2** (langsam, analytisch) – aber LLMs "denken" nicht wirklich

Sie sind "halluzinierende Reasoner": statistische Mustermaschinen, die überzeugende Outputs produzieren, ohne deren Wahrheit validieren zu können.

Konsequenzen für Promptotyping:
- Externe Verifikation durch Domänenexpert:innen ist notwendig
- Halluzinationen sind architekturisch unvermeidbar
- Context Engineering (Destillation) kompensiert LLM-Schwächen

---

## Quellen und Referenzen

Summerfield, C. (2025). Strange New Minds: Understanding Large Language Models. Oxford University Press.

Pollin, C. (2025). System 1.42 – Wie Frontier-LLMs funktionieren. DHCraft Blog. https://dhcraft.org/excellence/blog/System1-42/

Hong, K., Troynikov, A., & Huber, J. (2025). Context rot: How increasing input tokens impacts LLM performance.

CorrespExplorer: https://github.com/DigitalHumanitiesCraft/CorrespExplorer

Pollin, C. (2025). Modelling, Operationalising and Exploring Historical Information.
