# 4. Scholar-Centered Design & Requirements Engineering

*← [Zurück zum Index](00-index.md) | [← Vorheriges Kapitel](03-methodology.md)*

---

## 4.1 Einleitung

Promptotyping baut auf etablierten Methoden des User-Centered Design (UCD) und deren Spezialisierung für wissenschaftliche Kontexte auf: **Scholar-Centered Design (SCD)**. Dieses Kapitel definiert beide Ansätze und zeigt ihre Synthese im Promptotyping-Prozess.

---

## 4.2 User-Centered Design (UCD) Requirements Engineering

### Definition

> **User-Centered Design Requirements Engineering** bezeichnet die systematische Erhebung, Dokumentation und Verwaltung von Anforderungen, bei der die Bedürfnisse, Fähigkeiten und Einschränkungen der zukünftigen Nutzer im Mittelpunkt stehen.

Anders als beim klassischen Requirements Engineering, das oft **funktionsgetrieben** ist, leitet UCD die Anforderungen aus dem **Nutzungskontext** ab.

### Kernziel

Maximierung von **Usability** (Gebrauchstauglichkeit) und **User Experience** (UX).

### Leitprinzip

Anpassung der Technologie an den Menschen – nicht umgekehrt.

### Normative Grundlage

**ISO 9241-210:2019** definiert den internationalen Standard für den Human-Centred Design Prozess:

1. Verstehen und Spezifizieren des Nutzungskontexts
2. Spezifizieren der Nutzeranforderungen
3. Entwickeln von Designlösungen
4. Evaluieren der Designs gegen die Anforderungen

---

## 4.3 Scholar-Centered Design (SCD)

### Definition

> **Scholar-Centered Design** ist eine spezialisierte Weiterentwicklung des UCD für den wissenschaftlichen Kontext. Es adressiert die spezifischen Arbeitsweisen von Forschenden, die sich signifikant von denen klassischer Endverbraucher unterscheiden.

### Kernziel

Unterstützung komplexer **hermeneutischer Prozesse**, kritischer Analyse und Erkenntnisgewinnung.

### Leitprinzip

Unterstützung von **Komplexität und Ambiguität** statt reiner Vereinfachung. Transparenz der Datenherkunft (**Provenienz**) ist wichtiger als effiziente Abarbeitung von Routineaufgaben.

### Unterschiede zum klassischen UCD

| Aspekt | UCD (klassisch) | SCD (wissenschaftlich) |
|--------|-----------------|------------------------|
| **Ziel** | Effizienz, Zufriedenheit | Erkenntnis, Transparenz |
| **Komplexität** | Reduzieren | Navigierbar machen |
| **Daten** | Platzhalter akzeptabel | Echte Forschungsdaten nötig |
| **Fehler** | Vermeiden | Als Erkenntnisquelle nutzen |
| **Iteration** | Fehlerkorrektur | Hermeneutischer Zirkel |
| **Output** | Produkt | Forschungsergebnis |

### Schlüsselreferenzen

- **Warwick, C. (2012):** „Studying Users in Digital Humanities" – Grundlage für Nutzerstudien im wissenschaftlichen Kontext
- **Gibbs, F. & Owens, T. (2012):** „Building Better Digital Humanities Tools" – Abkehr von reiner Usability hin zur wissenschaftlichen Nützlichkeit
- **Kemman, M. (2021):** „Trading Zones of Digital History" – Zusammenarbeit zwischen Entwicklern und Wissenschaftlern

---

## 4.4 Synthese im Promptotyping-Phasenmodell

Die vier Hauptphasen des Promptotyping integrieren beide Ansätze:

### Phase 1: Analyse (CONTEXT)

| UCD-Perspektive | SCD-Perspektive |
|-----------------|-----------------|
| Identifikation der Nutzergruppen (Personas) | Analyse der Forschungsmethodik |
| Erstellung von User Stories | Reflexion epistemischer Vorannahmen |
| „Welches Problem löst das System?" | „Wie beeinflusst das Tool die Interpretation der Daten?" |

### Phase 2: Design (DATA / REQUIREMENTS)

| UCD-Perspektive | SCD-Perspektive |
|-----------------|-----------------|
| Reduktion kognitiver Belastung | Design für Exploration |
| Intuitive Interfaces („Don't make me think") | Mehrere Informationsebenen gleichzeitig |
| Lineare Nutzerführung | Synoptische Darstellung für Vergleiche |
| Verstecken von Komplexität | Methodische Transparenz („keine Black Box") |

### Phase 3: Prototyping (IMPLEMENTATION)

| UCD-Perspektive | SCD-Perspektive |
|-----------------|-----------------|
| Low-Fidelity (Skizzen) bis High-Fidelity Prototypen | „Datennahe" Prototypen |
| Lorem-Ipsum-Platzhalter akzeptabel | Echte Forschungsdaten erforderlich |
| Fokus auf Interaktionsflüsse | Fokus auf wissenschaftliche Nützlichkeit |

> **Warum echte Daten?** Da wissenschaftliche Arbeit stark inhaltsgetrieben ist, versagen Prototypen mit Platzhaltertexten oft. Forschende benötigen echte Daten im Prototyp, um dessen Nützlichkeit zu bewerten.

### Phase 4: Evaluation (PROTOTYPE)

| UCD-Perspektive | SCD-Perspektive |
|-----------------|-----------------|
| Usability-Tests nach ISO 9241-11 | Validierung wissenschaftlicher „Utility" |
| Messung: Effizienz, Effektivität, Zufriedenheit | Frage: Führt das Tool zu neuen Erkenntnissen? |
| Fehler = zu beheben | Frage: Werden Verzerrungen (Biases) vermieden? |

---

## 4.5 Der hermeneutische Zirkel als Iterationsmodell

### Definition

> Der **hermeneutische Zirkel** beschreibt das Wechselspiel zwischen dem Verstehen von Teilen und dem Verstehen des Ganzen. Das Verständnis eines Teils setzt ein Vorverständnis des Ganzen voraus, das sich durch das Verständnis der Teile verändert.

### Anwendung auf Promptotyping

In der wissenschaftlichen Praxis verändert oft das erste Sichten von Ergebnissen (im Prototyp) die Fragestellung selbst:

```
Forschungsfrage (initial)
        ↓
    Prototyp v1
        ↓
    Neue Muster erkannt
        ↓
Forschungsfrage (revidiert)  ← Vault-Update
        ↓
    Prototyp v2
        ↓
       ...
```

### Unterschied zur Fehlerkorrektur

| Fehlerkorrektur (UCD) | Hermeneutischer Zirkel (SCD) |
|-----------------------|-----------------------------|
| Nutzer versteht Navigation nicht | Forscher erkennt neue Muster in Daten |
| → Interface optimieren | → Anforderungen an Datenstruktur ändern |
| Problem beheben | Erkenntnis gewinnen |
| Zurück zum Design | Zurück zur Analyse |

---

## 4.6 Knowledge Acquisition Methoden

### Übersicht

Für die CONTEXT-Phase von Promptotyping sind folgende Methoden der Wissenserhebung relevant:

| Methode | Beschreibung | Output |
|---------|--------------|--------|
| **Deep Dives** | Intensive Workshops mit Domänenexpert:innen | Annotierte Datenbeispiele, erste User Stories |
| **Expert Interviews** | Strukturierte Erhebung impliziten Wissens | Tacit Knowledge expliziert |
| **Literature Review** | Analyse relevanter Forschungsliteratur | Theoretischer Rahmen |
| **Personas** | Fiktive, datenbasierte Nutzerprofile | Zielgruppenbeschreibung |
| **User Stories** | Formalisierte Anforderungen | Testbare Spezifikationen |

### Deep Dives (Workshops)

**Charakteristika:**
- Dauer: 2–4 Stunden
- Teilnehmende: 2–5 Domänenexpert:innen
- Moderiert durch Entwickler:in

**Typische Aktivitäten:**
1. Gemeinsame Datenanalyse
2. Identifikation von Entitäten und Relationen
3. Diskussion von Forschungsfragen
4. Priorisierung von Features

### Expert Interviews

**Techniken:**
- Halbstrukturierte Leitfäden
- Think-Aloud-Protokolle
- Kontextuelle Befragung am Arbeitsplatz (Contextual Inquiry)

**Referenz:** Beyer, H. & Holtzblatt, K. (1998): *Contextual Design*

### Personas für Forschende

**Beispiele:**

| Persona | Charakteristik | Bedürfnis |
|---------|----------------|-----------|
| Sozialhistoriker:in | Arbeitet mit Archivquellen | Netzwerke rekonstruieren |
| Wirtschaftshistoriker:in | Analysiert Handelsdaten | Visualisierungen erstellen |
| Literaturwissenschaftler:in | Vergleicht Textversionen | Annotieren, Synopse |
| Editionswissenschaftler:in | Erstellt kritische Edition | Variantenapparat |

**Referenz:** Schneider, K. & Liskin, O. (2016): *Personas for Requirements Engineering*

### User Stories

**Format:**

```
Als [Rolle]
will ich [Funktion],
um [Nutzen] zu erreichen.
```

**Beispiele:**

```
Als Historikerin
will ich Korrespondenznetzwerke visualisieren,
um Kommunikationsmuster in Exilgemeinschaften zu rekonstruieren.

Als Editionswissenschaftler
will ich Textvarianten synoptisch darstellen,
um Abhängigkeiten zwischen Handschriften zu identifizieren.
```

---

## 4.7 Referenzen

### User-Centered Design & Requirements Engineering

- **ISO 9241-210:2019:** Ergonomics of human-system interaction — Part 210: Human-centred design for interactive systems.
- **Pohl, K. & Rupp, C. (2015):** *Basiswissen Requirements Engineering*. dpunkt.verlag.
- **Beyer, H. & Holtzblatt, K. (1998):** *Contextual Design: Defining Customer-Centered Systems*. Morgan Kaufmann.
- **Schneider, K. & Liskin, O. (2016):** Personas for Requirements Engineering. INRIA.

### Scholar-Centered Design & Digital Humanities

- **Warwick, C. (2012):** Studying Users in Digital Humanities. In: Warwick, C., Terras, M. & Nyhan, J. (Eds.), *Digital Humanities in Practice*. Facet Publishing.
- **Gibbs, F. & Owens, T. (2012):** Building Better Digital Humanities Tools.
- **Kemman, M. (2021):** *Trading Zones of Digital History*. De Gruyter.

---

## Kernaussagen dieses Kapitels

1. **UCD** fokussiert auf Usability und User Experience
2. **SCD** spezialisiert UCD für wissenschaftliche Kontexte mit Fokus auf Erkenntnis
3. Wissenschaftliche Tools müssen **Komplexität navigierbar** machen, nicht verstecken
4. **Echte Daten** sind für Prototypen im wissenschaftlichen Kontext essentiell
5. Der **hermeneutische Zirkel** ist Teil des Erkenntnisprozesses, nicht Fehler
6. **Knowledge Acquisition** erfordert systematische Methoden (Deep Dives, Interviews, Personas)

---

*Weiter zu: [05-case-studies.md](05-case-studies.md)*
