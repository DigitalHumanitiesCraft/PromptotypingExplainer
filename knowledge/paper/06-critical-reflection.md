# 6. Kritische Reflexion und Limitationen

*← [Zurück zum Index](00-index.md) | [← Vorheriges Kapitel](05-case-studies.md)*

---

## 6.1 Methodische Limitationen

### Fehlende empirische Validierung

Die zentrale Limitation dieser Arbeit ist das Fehlen empirischer Validierung:

| Was fehlt | Konsequenz |
|-----------|------------|
| Kontrollgruppe | Keine Vergleichbarkeit mit anderen Ansätzen |
| Standardisierte Metriken | Keine quantifizierbaren Aussagen über Effizienz |
| Externe Anwendung | Unbekannt, ob Methode für andere funktioniert |
| Längsschnittdaten | Keine Aussagen über langfristige Wartbarkeit |

> **Ehrliche Einschätzung:** Die berichteten „Erfolge" basieren auf subjektiven Einschätzungen der Autoren. Die Methode könnte trotz oder wegen ihrer Struktur funktionieren – oder überhaupt nicht generalisierbar sein.

### Das System-1.42-Problem

Die theoretische Rahmung als „System 1.42" ist:

- **Nicht empirisch fundiert:** Keine Messung verortet LLMs zwischen System 1 und 2
- **Möglicherweise irreführend:** Anthropomorphe Metaphern können falsches Verständnis suggerieren
- **Potentiell überflüssig:** Die Methode funktioniert möglicherweise unabhängig von dieser Rahmung

Die Charakterisierung dient als **heuristisches Denkwerkzeug**, nicht als wissenschaftliche Aussage über LLM-Kognition.

### Selbstreferentialität

Ein Zirkularitätsproblem: Diese Methodik wurde selbst mit Frontier-LLMs entwickelt. Die Reflexion über LLM-gestützte Entwicklung erfolgt LLM-gestützt. Dies schränkt die kritische Distanz ein.

---

## 6.2 Epistemische Gerechtigkeit

### Zugangsbarrieren

Promptotyping setzt voraus:

| Barriere | Betroffene |
|----------|------------|
| **Sprachliche Dominanz** | Englisch dominiert; andere Sprachen unterrepräsentiert |
| **Technische Anforderungen** | Stabile Internetverbindung, leistungsfähige Hardware |
| **Finanzielle Hürden** | API-Kosten für intensive Nutzung |
| **Digitale Kompetenz** | Vertrautheit mit Markdown, Git, Kommandozeile |

> Diese strukturellen Ausschlüsse reproduzieren bestehende Ungleichheiten im akademischen System.

### Privilegierung westlich-akademischer Wissensformen

Frontier-LLMs wurden primär auf:
- Englischsprachigen Texten trainiert
- Westlichen akademischen Konventionen
- Digitalisierten, verschriftlichten Wissensbeständen

**Marginalisiert werden:**
- Nicht-westliche epistemische Traditionen
- Indigene Wissenssysteme
- Orale und performative Wissensformen
- Sprachen des Globalen Südens

> **Warnung:** Ohne gezielte Maßnahmen zur epistemischen Inklusion droht Promptotyping, bestehende Ungleichheiten zu verstärken statt abzubauen.

### Referenz

- Fricker, M. (2007): *Epistemic Injustice: Power and the Ethics of Knowing*. Oxford University Press.
- Medina, J. (2013): *The Epistemology of Resistance*. Oxford University Press.

---

## 6.3 Ökonomische Realitäten

### Direkte Kosten

| Kostenfaktor | Beschreibung |
|--------------|--------------|
| API-Nutzung | Intensive Iteration kann erhebliche Kosten verursachen |
| Zeitaufwand | Dokumentation erfordert Zeit, die alternativ genutzt werden könnte |
| Infrastruktur | Entwicklungsumgebung, Hosting |

### Lock-in-Risiken

Die Abhängigkeit von kommerziellen Frontier-LLM-Anbietern schafft:

- **Vendor Lock-in:** Wechsel zu anderen Anbietern erfordert Anpassung
- **Preisrisiko:** Kostensteigerungen nicht kontrollierbar
- **Verfügbarkeitsrisiko:** Dienste können eingestellt oder verändert werden
- **Datenschutzrisiko:** Forschungsdaten fließen zu kommerziellen Anbietern

### Open-Source-Alternativen

Stand 2025 erreichen Open-Source-Modelle nicht die Leistungsfähigkeit von Frontier-LLMs für komplexe Entwicklungsaufgaben. Dies könnte sich ändern, stellt aber aktuell eine Einschränkung dar.

### Digitale Spaltung

Die Kosten verschärfen die Kluft zwischen:
- Ressourcenstarken Institutionen (Globaler Norden, finanzierte Projekte)
- Unterfinanzierten Forschungseinrichtungen (Globaler Süden, prekäre Stellen)

---

## 6.4 Pädagogische Herausforderungen

### Curriculare Integration

Für die Lehre fehlen:
- Spezifische Lehrpläne für Promptotyping
- Abgestimmte Kursmaterialien
- Klärung der Vorkenntnisse
- Balance zwischen Theorie und Praxis

### Das Paradox der Expertise

Der Critical-Expert-in-the-Loop-Ansatz erfordert Expertise, die erst durch Ausbildung erworben wird. Das erzeugt ein Paradox: Um LLM-Outputs zu validieren, braucht man Fachwissen. Fachwissen erwirbt man durch Ausbildung. Ausbildung könnte durch LLMs verändert werden. Die Frage bleibt: Wer bildet die zukünftigen Critical Experts aus?

### Skills Atrophy

> **Risiko:** Die systematische Delegation von Aufgaben an LLMs könnte die Fähigkeiten untergraben, die für die effektive Überwachung von LLM-Outputs erforderlich sind.

Betroffene Fähigkeiten:
- Eigenständiges Programmieren
- Kritisches Denken unter Zeitdruck
- Debugging ohne LLM-Unterstützung
- Tiefes Verständnis von Algorithmen

---

## 6.5 Ethische Fragen

### Hybride Autorschaft

Wenn Mensch und LLM gemeinsam Artefakte erstellen:

| Frage | Ungelöst |
|-------|----------|
| Wer ist Autor:in? | Rechtlich und akademisch unklar |
| Wer trägt Verantwortung für Fehler? | Haftungsfragen unbeantwortet |
| Wie wird Beitrag dokumentiert? | Keine etablierten Standards |
| Ist das Ergebnis zitierfähig? | Abhängig von Disziplin und Publikationsort |

### Transparenzanforderungen

Mögliche Standards:
- **KI-Contribution Statements:** Explizite Dokumentation des LLM-Einsatzes
- **Prompt-Protokolle:** Veröffentlichung der verwendeten Prompts
- **Versionierung:** Angabe des verwendeten Modells und Zeitpunkts

### Bias-Reproduktion

LLMs können systematische Verzerrungen reproduzieren:
- Geschlechterstereotype in generierten Beispielen
- Kulturelle Voreingenommenheiten
- Historische Ungenauigkeiten durch Trainingsdatenverzerrung

**Gegenmaßnahmen:**
- Diversifizierte Review-Prozesse
- Bewusst inklusive Prompt-Gestaltung
- Kritische Prüfung auf versteckte Annahmen

---

## 6.6 Epistemische Schulden

### Definition

> **Epistemische Schuld** bezeichnet den Verlust von Prozesswissen, wenn der Weg zum Ergebnis nicht verstanden oder dokumentiert wird.

### Manifestationen

| Art | Beschreibung |
|-----|--------------|
| **Blackbox-Entscheidungen** | LLM trifft Entscheidungen, die nicht nachvollzogen werden |
| **Prozessamnesie** | Warum bestimmte Lösungen gewählt wurden, ist unklar |
| **Interpretative Verarmung** | Maschinelle Durchschnittsantworten ersetzen kreative Exploration |
| **Debugging-Unfähigkeit** | Fehler können nicht ohne LLM analysiert werden |

### Gegenmaßnahmen in Promptotyping

Die Dokumentationsphasen (besonders IMPLEMENTATION und JOURNAL) adressieren epistemische Schuld, können sie aber nicht vollständig eliminieren:

- ✅ Entscheidungen werden dokumentiert
- ✅ Transformationen werden expliziert
- ❌ Interne LLM-Prozesse bleiben opak
- ❌ Nicht dokumentierte Experimente gehen verloren

---

## 6.7 Ökologische Bedenken

### Energieverbrauch

Frontier-LLMs verbrauchen erhebliche Rechenressourcen:
- Training: Millionen von GPU-Stunden
- Inferenz: Jede Anfrage verbraucht Energie
- Skalierung: Wachsende Nutzung erhöht Gesamtverbrauch

### Nachhaltigkeit

Promptotyping als Methode reflektiert diesen Aspekt bisher nicht systematisch:
- Keine Metriken für „notwendige" vs. „verschwenderische" Anfragen
- Keine Richtlinien für ressourcenschonende Prompts
- Keine Diskussion von Alternativen für einfache Aufgaben

---

## 6.8 Was wir nicht wissen

### Offene empirische Fragen

1. **Funktioniert die Methode für andere?**
   - Keine externe Anwendung dokumentiert
   - Unbekannte Lernkurve

2. **Ist der Aufwand gerechtfertigt?**
   - Keine Kosten-Nutzen-Analyse
   - Keine Vergleichsdaten

3. **Skaliert die Methode?**
   - Lucina-Beispiel deutet auf Grenzen hin
   - Keine systematische Untersuchung

4. **Wie stabil sind die Ergebnisse?**
   - Keine Reproduzierbarkeitstest mit aktualisierten Modellen
   - Modelle ändern sich kontinuierlich

### Offene theoretische Fragen

1. **Ist System 1.42 ein nützliches Konzept?**
   - Oder nur eine eingängige Metapher?

2. **Was genau macht den „Critical Expert" kritisch?**
   - Welche Kompetenzen sind essentiell?
   - Wie werden sie erworben?

3. **Wo verläuft die Grenze zur Delegation?**
   - Ab wann ist LLM-Nutzung „zu viel"?
   - Gibt es Aufgaben, die Menschen vorbehalten bleiben sollten?

---

## Kernaussagen dieses Kapitels

1. **Keine empirische Validierung:** Die Methode ist ein Vorschlag, kein bewiesener Ansatz
2. **Zugangsbarrieren:** Sprachliche, finanzielle, technische Hürden schließen aus
3. **Lock-in-Risiken:** Abhängigkeit von kommerziellen Anbietern
4. **Expertise-Paradox:** Wer bildet die zukünftigen Critical Experts aus?
5. **Epistemische Schulden:** Dokumentation reduziert, eliminiert sie aber nicht
6. **Viele offene Fragen:** Empirische und theoretische Arbeit steht aus

---

*Weiter zu: [07-references.md](07-references.md)*
