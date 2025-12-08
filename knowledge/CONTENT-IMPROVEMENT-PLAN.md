# Content-Improvement-Plan: Frontend-Texte

## Analyse-Ergebnis

Vergleich der aktuellen Frontend-Texte mit dem Wissen im `knowledge/paper/`-Ordner zeigt signifikante Lücken. Viele Komponenten haben nur kurze Schlagworte statt sachlicher, erklärender Blog-Texte.

---

## Bewertungskriterien

Für jeden Schritt:
- **Textdichte**: Ausreichend erklärender Fließtext (wie Forschungsblog)?
- **Sachlichkeit**: Klare Erklärung des Konzepts?
- **Knowledge-Abdeckung**: Nutzt das Paper-Wissen vollständig?
- **Referenzen**: Werden Quellen genannt?

---

## Detaillierte Analyse pro Schritt

### INTRO

#### 1. IntroDefinition.svelte ✅ Akzeptabel
**Ist-Zustand:** Hat Definition, Etymologie, Kontext-Hinweis
**Fehlt:**
- Explizite Erwähnung der **drei Forschungsfragen** aus 01-introduction.md
- Bezug zur **Problemstellung** (generische LLM-Outputs ohne strukturierten Kontext)
- Zitat Karpathy zum Vibe Coding und dessen Ambivalenz

**Verbesserung:**
> Ergänze einen Absatz zur Problemstellung: "Die Kernfrage lautet: Wie kommuniziert man Domänenwissen so an ein LLM, dass es passende Werkzeuge generiert? Nicht das Coden selbst ist die Kernkompetenz, sondern das Wissen darüber, was guter Code für Forschungszwecke ist."

---

#### 2. IntroKernprinzip.svelte ⚠️ Verbesserungsbedarf
**Ist-Zustand:** Kurze Erwähnung von Strange New Minds, Co-Intelligence, Centaur/Cyborg
**Fehlt:**
- **System 1.42** wird nur im Deep Dive erwähnt, nicht erklärt
- **Sycophancy-Problem** komplett fehlend im Haupttext
- **Epistemische Einschränkung** (heuristisch, nicht validiert)
- Evidenz für tiefe Repräsentationen (Lindsey et al., 2025)

**Verbesserung:**
> Ergänze: "Das Konzept 'System 1.42' beschreibt heuristisch LLM-Verhalten zwischen intuitiver Musterassoziation und systematischer Problemlösung. LLMs generieren oft korrekte Outputs, ohne dass ihre internen Problemformulierungen transparent wären. WICHTIG: Dies ist eine Arbeitshypothese, keine validierte Theorie."

> Ergänze Sycophancy: "Ein strukturelles Problem ist die Sycophancy – die Tendenz von LLMs zur unkritischen Bestätigung von Nutzerannahmen. Anthropics Character Training adressiert dies durch epistemische Tugenden wie Neugier, intellektuelle Ehrlichkeit und kritische Reflexion."

---

#### 3. IntroMethodik.svelte ⚠️ Verbesserungsbedarf
**Ist-Zustand:** Critical Expert in the Loop erwähnt, drei Karten, Vibe Coding Note
**Fehlt:**
- **Operationalisierung** des Critical Expert (Strategien gegen Sycophancy)
- **Konkrete Beispiele** (wie das REALonline-Projekt aus 03-methodology.md)
- **Reflective Practice** nach Schön (reflection-in-action / reflection-on-action)
- Explizite Nennung von **Polanyis implizitem Wissen**

**Verbesserung:**
> Ergänze Operationalisierung: "Der Critical-Expert-Ansatz nutzt drei Strategien: (1) Critical Questioning – explizites Auffordern zur Kritik, (2) Alternative Exploration – Einfordern verschiedener Ansätze, (3) Assumption Surfacing – Explizitmachen impliziter Annahmen."

> Ergänze Beispiel: "Im REALonline-Projekt korrigierte der Historiker die technische Annahme, Objekte nach modernen Kategorien zu strukturieren. Die historische Korrektur: Räumliche Organisation war im Mittelalter primärer Bedeutungsträger für soziale Hierarchien."

---

#### 4. IntroPhasen.svelte ❌ Stark verbesserungsbedürftig
**Ist-Zustand:** NUR visuelle Liste der 4 Phasen, KEIN erklärender Text
**Fehlt:**
- **Jeglicher Fließtext** der das Phasenmodell erklärt
- Erklärung warum dieses Modell (Design Science Research Bezug)
- Zusammenhang der Phasen
- Erwähnung dass .md-Files erst in Phase 3 entstehen

**Verbesserung:**
> Ergänze kompletten Absatz: "Das vierphasige Modell strukturiert den Entwicklungsprozess: In der Preparation werden Rohdateien gesammelt. Die Exploration analysiert und experimentiert ohne formale Dokumentation – Sackgassen sind positive Erkenntnisse. Die Destillation verdichtet das Wissen zu DATA.md, REQUIREMENTS.md und CONTEXT.md – erst hier entstehen die .md-Files. Die Implementation nutzt diese Dokumente für iterative LLM-Dialoge, wobei jede Iteration einen neuen Prototype produziert und neues Wissen als Vault-Update zurückfließt."

---

### PHASE 1: VORBEREITUNG

#### 5. Phase1Titel.svelte ✅ Akzeptabel
**Ist-Zustand:** Kurzer erklärender Text vorhanden
**Fehlt:**
- Konkrete Beispiele für Rohmaterialien
- Bezug zum CorrespExplorer-Projekt als Beispiel

**Verbesserung:**
> Ergänze: "Typische Rohmaterialien umfassen Forschungsdaten (.doc, .xml, .csv, PDFs), Dokumentation (Editionsrichtlinien, Schemata, Standards) und Kontextmaterial (Papers, Notizen, Expertengespräche). Im CorrespExplorer-Projekt wurden CMIF-XML-Dateien, correspSearch-Dokumentation und Editionsrichtlinien gesammelt."

---

#### 6. Phase1Rohdaten.svelte ❌ Stark verbesserungsbedürftig
**Ist-Zustand:** NUR animierte Icons, KEIN Text
**Fehlt:**
- **Kompletter erklärender Absatz**
- Was bedeuten diese Materialtypen?
- Warum diese Kategorien?

**Verbesserung:**
> Ergänze kompletten Text: "Die Rohmaterialien bilden die Wissensbasis für alle folgenden Phasen. TEI/XML-Dateien enthalten strukturierte Forschungsdaten. PDFs liefern Spezifikationen, Standards und Dokumentationen. CSV-Dateien bieten tabellarische Daten für quantitative Analysen. Notizen erfassen implizites Domänenwissen aus Expertengesprächen und Workshops."

---

#### 7. Phase1Sammlung.svelte ❌ Stark verbesserungsbedürftig
**Ist-Zustand:** NUR "Alle Materialien bereit für die Exploration"
**Fehlt:**
- Erklärung WAS bereit ist
- Übergang zur nächsten Phase
- Qualitätskriterien für "Bereitschaft"

**Verbesserung:**
> Ergänze: "Die gesammelten Materialien werden noch nicht strukturiert oder destilliert – das passiert erst in Phase 3. Wichtig ist Vollständigkeit: Alle relevanten Datenquellen, Dokumentationen und Kontextinformationen müssen vorliegen, bevor die explorative Analyse beginnt. Fehlende Materialien führen zu Lücken im späteren Vault."

---

### PHASE 2: EXPLORATION

#### 8. Phase2Struktur.svelte ✅ Gut
**Ist-Zustand:** Erklärender Text, Ziel, Beispielfragen
**Fehlt:**
- Explizite Erwähnung dass **KEINE Artefakte** produziert werden (bewusst undokumentiert)
- Erklärung des "Brücken identifizieren" Konzepts
- User Story Format erklären

**Verbesserung:**
> Ergänze: "Phase 2 produziert bewusst keine formalen Dokumente. Das Ergebnis ist Wissen – über Datenqualität, technische Machbarkeit und die Validität potentieller User Stories. Dieses destillierte Wissen ist zwingende Voraussetzung für die Präzision der Phase 3."

> Ergänze User Story Format: "User Stories folgen dem Format: 'Als [Rolle] will ich [Funktion], um [Nutzen] zu erreichen.' Beispiel: 'Als Historikerin will ich Korrespondenznetzwerke visualisieren, um Kommunikationsmuster in Exilgemeinschaften zu rekonstruieren.'"

---

### PHASE 3: DESTILLATION

#### 9. Phase3Titel.svelte ⚠️ Verbesserungsbedarf
**Ist-Zustand:** Context Compression und Context Rot erwähnt
**Fehlt:**
- Definition von **Context Rot** (Hong et al., 2025)
- Erklärung WARUM Verdichtung wichtig ist
- Compression-als-Amplification-Paradox

**Verbesserung:**
> Ergänze Definition: "Context Rot (Hong et al., 2025) beschreibt die Beobachtung, dass LLM-Leistung mit wachsender Kontextlänge degradiert. Mehr Tokens führen nicht zu besseren Ergebnissen – gezielte Verdichtung erhöht die Modellaufmerksamkeit auf wesentliche Aspekte. Das ist das Compression-als-Amplification-Paradox."

---

#### 10. Phase3Dokumente.svelte ⚠️ Verbesserungsbedarf
**Ist-Zustand:** Drei Dokumente gelistet mit Kurzbeschreibung
**Fehlt:**
- **Detaillierte Erklärung** was jedes Dokument enthält
- **MoSCoW-Schema** erklären (MUSS/SOLL/KANN)
- **Testbare Formulierung** als Prinzip
- **Flexibilität** erwähnen (anpassbare Struktur)

**Verbesserung:**
> DATA.md ergänzen: "Schema und Felddefinitionen, Datentypen und Kardinalitäten, Beziehungen und referentielle Integrität, Qualitätsprobleme und Limitationen."

> REQUIREMENTS.md ergänzen: "Jede Anforderung wird als testbarer Satz formuliert. Korrekt: 'Das System muss Korrespondenzen nach Datum filterbar darstellen.' Falsch: 'Das System soll benutzerfreundlich sein' – zu vage, nicht testbar. Priorisierung: MUSS (kritisch), SOLL (wichtig), KANN (nice-to-have)."

> CONTEXT.md ergänzen: "Forschungsmethodologie, Domänenkonzepte und Terminologie, historischer/kultureller Kontext, Interpretationsrichtlinien der Expert:innen."

---

#### 11. Phase3Vault.svelte ⚠️ Verbesserungsbedarf
**Ist-Zustand:** Datenfluss-Diagramm, Download-Links
**Fehlt:**
- Text der den Vault als **Boundary Object** erklärt (Star & Griesemer)
- Erklärung der **Vermittlungsfunktion** zwischen Entwickler:in und Expert:in
- Erwähnung der **Flexibilität** (weitere Dokumente möglich)

**Verbesserung:**
> Ergänze: "Der Vault fungiert als Boundary Object – ein Artefakt, das zwischen verschiedenen sozialen Welten vermittelt: zwischen technischer Implementation und fachlicher Anforderung, zwischen Entwickler:in und Domänenexpert:in, zwischen Mensch und LLM. Die Dokumentstruktur ist anpassbar: Je nach Domäne können weitere Dokumente ergänzt werden (SCHEMA.md, VALIDATION.md, API-NOTES.md)."

---

### PHASE 4: IMPLEMENTATION

#### 12. Phase4Titel.svelte ✅ Akzeptabel
**Ist-Zustand:** Cyborg-Arbeit erwähnt, Dreischritt visualisiert
**Fehlt:**
- Erklärung warum "Cyborg-Arbeit" hier beginnt (Unterschied zu Centaur)
- Output-Charakteristika (Single HTML File etc.)

**Verbesserung:**
> Ergänze: "Cyborg-Arbeit bedeutet enge kognitive Verschränkung: Mensch und Maschine entwickeln in iterativen Dialogschleifen gemeinsam Lösungen. Die Grenze zwischen menschlichem und maschinellem Beitrag verschwimmt. Typischer Output: Single HTML File mit inline CSS/JS, keine externen Dependencies außer CDN-verfügbare, kommentierter Code an kritischen Stellen."

---

#### 13. Phase4Iteration.svelte ⚠️ Verbesserungsbedarf
**Ist-Zustand:** 7-Schritte-Zyklus, Chat-Animation, erklärender Text
**Fehlt:**
- Explizite Erklärung dass LLM **nicht reasoned sondern retrievet**
- **Prompting-Strategien** Übersicht (nur Deep Dive erwähnt)
- **LLM-as-Judge** Konzept erwähnen

**Verbesserung:**
> Ergänze zum Reasoning: "WICHTIG: LLMs reasonen nicht im menschlichen Sinn. Sie retrieven approximativ aus ihrem Training und interpolieren Lösungen. Der Vault dient als Retrieval-Basis – bessere Dokumentation führt zu besseren Approximationen."

> Ergänze Strategien-Hinweis: "Promptotyping nutzt mehrere Meta-Strategien: Reasoning (Möglichkeitsraum öffnen), LLM-Validierung (Qualitätsprüfung), Expert-in-the-Loop (Richtungskorrektur), LLM-as-Judge (zweites Modell bewertet), Context Distillation (Wissensakkumulation), Plan Generation (strukturierte Umsetzung)."

---

#### 14. Phase4VaultUpdate.svelte ✅ Gut
**Ist-Zustand:** Feedback-Loop visualisiert, drei Update-Typen
**Fehlt:**
- Wann genau Updates nötig sind (Trigger-Kriterien)
- Rolle des Journals

**Verbesserung:**
> Ergänze Trigger: "Vault-Updates werden nötig wenn: fehlende Datenfelder im Prototype sichtbar werden (→ DATA.md), Anforderungen mehrere Interpretationen zulassen (→ REQUIREMENTS.md), der Prototyp neue Forschungsfragen offenbart (→ CONTEXT.md), oder inkonsistente Daten Neubewertung erfordern (→ DATA.md)."

---

### OUTRO

#### 15. OutroBeispiele.svelte ✅ Akzeptabel (visuell)
**Ist-Zustand:** 6 Case Studies als Cards
**Fehlt:**
- **Einleitender Absatz** der die Fallstudien kontextualisiert
- Erwähnung der **Workshop-Validierung** (24 Teilnehmende)

**Verbesserung:**
> Ergänze Einleitung: "Die Methodik wurde über sieben Fallstudien in fünf Monaten entwickelt und in Workshops mit 24 Teilnehmenden validiert. Die folgenden Projekte zeigen die praktische Anwendung von Promptotyping in verschiedenen Digital-Humanities-Kontexten."

---

#### 16. OutroDiskussion.svelte ✅ Gut
**Ist-Zustand:** Pro/Contra, Forschungslücken
**Fehlt:**
- **Epistemische Gerechtigkeit** (Fricker, Medina) – Zugangsbarrieren, Sprachliche Dominanz
- **Skills Atrophy** detaillierter (welche Fähigkeiten?)
- **Hybride Autorschaft** Frage

**Verbesserung:**
> Ergänze zu Zugangshürden: "Epistemische Ungerechtigkeit: Englisch dominiert; andere Sprachen unterrepräsentiert. Promptotyping setzt digitale Kompetenz (Markdown, Git) voraus und kann ohne gezielte Maßnahmen bestehende Ungleichheiten verstärken."

> Ergänze zu Skills Atrophy: "Betroffene Fähigkeiten bei systematischer Delegation: eigenständiges Programmieren, kritisches Denken unter Zeitdruck, Debugging ohne LLM, tiefes Algorithmenverständnis."

---

#### 17. OutroZusammenfassung.svelte ⚠️ Verbesserungsbedarf
**Ist-Zustand:** Kurze Zusammenfassung, CTAs
**Fehlt:**
- **Drei Ebenen von Promptotyping** (technisch, methodisch, epistemisch)
- **Savepoint-Konzept** erwähnen
- **Kernaussagen** des Papers zusammenfassen

**Verbesserung:**
> Ergänze Ebenen: "Promptotyping integriert drei Ebenen: TECHNISCH (Context Engineering – Creation, Compression, Orchestration), METHODISCH (Requirements Engineering mit Scholar-Centered Design), EPISTEMISCH (kritisch-reflexive Praxis der Ko-Konstruktion)."

> Ergänze Kernaussagen: "Zentrale Einsichten: (1) Vault-Updates sind erwarteter Teil des Prozesses, nicht Fehler. (2) Dokumentation ist nicht Overhead, sondern Teil der Methode. (3) Savepoints ermöglichen strukturierte Versionierung und Rollback bei Problemen."

---

## Priorisierte Verbesserungsliste

### KRITISCH (❌ Kaum Text vorhanden)
1. **IntroPhasen.svelte** – Braucht kompletten erklärenden Absatz
2. **Phase1Rohdaten.svelte** – Braucht kompletten erklärenden Absatz
3. **Phase1Sammlung.svelte** – Braucht erklärenden Absatz

### HOCH (⚠️ Text vorhanden aber unvollständig)
4. **IntroKernprinzip.svelte** – System 1.42, Sycophancy ergänzen
5. **IntroMethodik.svelte** – Operationalisierung, Beispiele ergänzen
6. **Phase3Titel.svelte** – Context Rot Definition ergänzen
7. **Phase3Dokumente.svelte** – Detaillierte Dokumentbeschreibungen
8. **Phase3Vault.svelte** – Boundary Object Konzept
9. **Phase4Iteration.svelte** – Retrieval-Erklärung, Strategien
10. **OutroZusammenfassung.svelte** – Drei Ebenen, Kernaussagen

### MITTEL (✅ Gut, aber erweiterbar)
11. **IntroDefinition.svelte** – Problemstellung ergänzen
12. **Phase1Titel.svelte** – Konkrete Beispiele
13. **Phase2Struktur.svelte** – User Story Format, Artefakte-Hinweis
14. **Phase4Titel.svelte** – Cyborg-Erklärung, Output-Typen
15. **Phase4VaultUpdate.svelte** – Update-Trigger
16. **OutroBeispiele.svelte** – Einleitender Absatz
17. **OutroDiskussion.svelte** – Epistemische Gerechtigkeit

---

## Nächste Schritte

1. **Kritische Komponenten zuerst**: IntroPhasen, Phase1Rohdaten, Phase1Sammlung
2. **Dann hohe Priorität**: Kernprinzip, Methodik, Phase3-Komponenten
3. **Schließlich Feinschliff**: Restliche Komponenten

Für jede Komponente:
- Sachlichen, erklärenden Fließtext hinzufügen
- Mindestens 2-3 Absätze pro Schritt
- Referenzen wo sinnvoll (Mollick, Hong, Summerfield etc.)
- Konsistente Terminologie verwenden

---

## Textmuster (Stil-Vorlage)

Jeder Schritt sollte diesem Muster folgen:

```
1. ERKLÄRUNG: Was ist das Konzept? (1-2 Sätze Definition)
2. WARUM: Warum ist das wichtig/relevant? (1-2 Sätze)
3. WIE: Wie funktioniert es konkret? (2-3 Sätze)
4. BEISPIEL: Ein konkretes Beispiel (optional, wo passend)
5. REFERENZ: Quelle/Autor wenn relevant (optional)
```

Beispiel für guten Stil (aus 03-methodology.md):
> "Der Critical Expert in the Loop ist nicht passiver Empfänger, sondern kritischer Validator. Domänenexpert:innen bringen ihr Fachwissen kontinuierlich in den Dialog ein. Der Critical-Expert-Ansatz operationalisiert Schöns Reflective Practice für die KI-gestützte Forschung."
