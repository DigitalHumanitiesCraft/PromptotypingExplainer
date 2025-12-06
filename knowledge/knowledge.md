# Knowledge: Promptotyping Explainer

## Zweck dieses Dokuments

Destilliertes Wissen für die Entwicklung einer Scrollytelling-Webseite, die den Promptotyping-Prozess narrativ und visuell vermittelt.

Weitere Dokumente im Vault:
- [CONTEXT-MAP.md](CONTEXT-MAP.md) – Einstiegspunkt, Vault-Navigation
- [VAULT-RULES.md](VAULT-RULES.md) – Dokumentationsstandards
- [requirements.md](requirements.md) – Zielgruppen, User Stories, technische Constraints
- [implementation.md](implementation.md) – Tech Stack, Komponenten-Architektur
- [journal.md](journal.md) – Arbeitstagbuch, Entscheidungen, Learnings

---

# TEIL 1: CONTENT

## Warum Promptotyping entstanden ist

### Der Auslöser

2023 wurde GPT-4 veröffentlicht. Zu diesem Zeitpunkt war eine Dissertation fast abgeschlossen, deren Ziel es war, historische Information in Interfaces zur Exploration und Analyse verfügbar zu machen. Scholar-Centred Design, Requirements Engineering, Dashboard-Prototypen. Monate an Arbeit für jedes Interface.

Dann die Erkenntnis: Was Monate gedauert hat, geht jetzt in Stunden.

### Die produktive Kränkung

Aus dieser Kränkung entstand die Frage: Wenn LLMs Code generieren können, was bleibt dann als Kernkompetenz? Die Antwort: Nicht das Coden selbst, sondern das Wissen darüber, was guter Code für Forschungszwecke ist. Modellierung, Formalisierung, Domänenwissen, kritische Validierung.

Promptotyping ist der Versuch, dieses Wissen systematisch an LLMs zu kommunizieren.

---

## Was ist Promptotyping?

### Definition

Promptotyping ist eine Context-Engineering-Methode für die schnelle, forschungsdatengetriebene Erstellung von Prototypen für Forschungstools, Workflows und Modelle mittels Frontier-LLMs.

### Kernprinzip

Das Mapping von semantisch reichhaltigen Forschungsdaten und explizitem Forschungskontext auf funktionale Interfaces durch iterative Mensch-LLM-Kollaboration.

### Abgrenzung zu Vibe Coding

Promptotyping ist strukturiertes Vibe Coding. Nicht "den Vibes freien Lauf lassen", sondern methodisch dokumentierte Iteration mit destilliertem Kontextwissen.

---

## Die vier Phasen

### Phase 1: Vorbereitung

**Narrativ**
Sammlung aller relevanten Materialien. Forschungsdaten (TEI, XML, RDF, CSV), Dokumentation zu Standards und Modellen, Forschungsfragen und Domänenwissen.

**Metapher**
Mise en place in der Küche. Alle Zutaten bereitstellen, bevor gekocht wird.

**Typische Artefakte**
Rohdateien, Papers, Spezifikationen, Notizen aus Gesprächen mit Domänenexpert:innen.

---

### Phase 2: Exploration

**Narrativ**
Untersuchung der Datenstrukturen. Welche Entitäten gibt es? Welche Relationen? Welche semantischen Elemente können für Visualisierungen genutzt werden? Erste Experimente mit dem LLM.

**Metapher**
Kartierung eines unbekannten Terrains. Man weiß noch nicht, wohin die Reise geht, aber man versteht das Gelände.

**Typische Artefakte**
Annotierte Datenbeispiele, erste Prompt-Versuche, Notizen zu Auffälligkeiten und Möglichkeiten.

---

### Phase 3: Destillation

**Narrativ**
Überführung des gesammelten Wissens in kompakte Markdown-Dokumente. Diese Dokumente sind keine Dokumentation im klassischen Sinn, sondern Denkumgebungen für das LLM.

**Metapher**
Reduktion einer Sauce. Das Wesentliche wird konzentriert, Unnötiges verdampft.

**Kernprinzip: Context Rot vermeiden**
Je mehr Tokens im Context Window, desto schlechter die Modellleistung (Hong et al., 2025). Destillation bedeutet: maximale Information mit minimalen Tokens.

**Die drei Kerndokumente**

data.md beschreibt die Struktur und Semantik der Forschungsdaten. Welche Elemente gibt es? Wie sind sie strukturiert? Welche semantischen Bedeutungen haben sie?

user-story.md enthält die Anforderungen aus Forschungsperspektive. "Als Historikerin will ich sehen, wer mit wem korrespondiert hat, um Netzwerke zu rekonstruieren."

context.md fasst das relevante Domänenwissen zusammen. Was muss das LLM über den Forschungsgegenstand wissen?

---

### Phase 4: Iterative Implementation

**Narrativ**
Der eigentliche Promptotyping-Dialog beginnt. Das LLM erhält die destillierten Dokumente und generiert Code. Der Mensch validiert, gibt Feedback, lässt nachbessern.

**Metapher**
Ping-Pong-Spiel mit steigender Präzision. Jeder Ballwechsel bringt das Ergebnis näher ans Ziel.

**Critical Expert in the Loop**
Der Mensch ist nicht passiver Empfänger, sondern kritischer Validator. Bewusstsein für Sycophancy (LLM stimmt zu statt zu widersprechen) und Konfabulationen (plausible aber falsche Outputs) ist essentiell.

**Rückschleifen**
Wenn die Implementation zeigt, dass etwas fehlt, geht man zurück. Zu Phase 3 (Kontext erweitern) oder Phase 1 (Daten ergänzen). Der Prozess ist nicht linear.

**Woran erkennt man, dass eine Rückschleife nötig ist?**
Das erfordert Fachwissen. Der Mensch muss wissen, wann ein Output falsch, unvollständig oder irreführend ist. Dieses Urteil erfordert Domänenwissen und methodische Erfahrung.

---

## Arbeitsiterationen: Konkrete Prompts

Die folgenden Prompts stammen aus der Entwicklung des CorrespExplorer.

**Iteration 1: Strukturierung**
"Was müssen wir im HSA-Knowledge-Ordner dokumentieren?"

**Iteration 2: Klärung**
"hsa-test.html dient nur zum Testen. Wir wollen die Grundlagen des Herdata-Projekts nutzen, um die vorhandenen Views darzustellen. Außerdem soll es möglich sein, auch andere CMIF.xml-Daten zu importieren. Ist das klar für dich?"

**Iteration 3: Qualität**
"Knowledge-HSA hat eine flache Struktur mit mehreren .md-Dateien. Du brauchst keine Unterordner. Wir brauchen immer destillierte, informative .md-Dateien, die auf dem neuesten Stand sind!"

**Iteration 4: Architektur**
"Lass uns einen zweiten Knowledge-Ordner anlegen, der parallel zum HerData-Knowledge-Ordner existiert."

**Iteration 5: Reflexion**
"Lass uns diesen Zwischenschritt commiten! Was haben wir alles erreicht?"

**Iteration 6: Validierung**
"Schreib einen Test, der prüft, ob die CMIF-Daten korrekt geladen werden und die Anzahl der correspDesc-Elemente mit der Anzeige übereinstimmt."

**Muster**
Orientierung geben, Verständnis prüfen, Qualität einfordern, Entscheidungen treffen, Reflexion erzwingen, Validierung durch Tests.

---

## Beispiele

**CorrespExplorer**
CMIF-Daten → Netzwerk, Timeline, Karte. Entwicklungszeit: 2 Nachmittage.
- GitHub: https://github.com/DigitalHumanitiesCraft/CorrespExplorer
- Live: https://digitalhumanitiescraft.github.io/CorrespExplorer

**DEPCHA Aldersbach**
TEI-Rechnungsbuch → Dashboard. Entwicklungszeit: 3 Stunden.

**Wheaton Network**
Day Book → Force-Directed Graph. Entwicklungszeit: 1-2 Tage (frühe Modellgeneration).

---

# TEIL 2: VISUAL SYSTEM

## Farbpalette

Slate Grey (#607D8B): Daten, Standards, das Gegebene, das Kalte.
Terracotta (#BF5B3E): Menschliche Intervention, Transformation, die Hitze des Prozesses.
Weiß (#FFFFFF): Hintergrund.
Schwarz (#1A1A1A): Linien, Text.
Erfolg-Grün (#4CAF50): Validierung bestanden.
Fehler-Rot (#E53935): Test fehlgeschlagen.
In-Progress-Orange (#FF9800): Arbeit läuft.

## Typografie

Headlines: Sans-Serif, bold, größer. Für Phasen-Titel und zentrale Aussagen.
Body: Sans-Serif, regular. Für erklärende Texte.
Code/Technical: Monospace. Für Prompts, Dateinamen, technische Begriffe.

## Icon-System

**Phase 1 Icons**
XML-Dokument (Winkelklammern-Symbol), PDF (Paper-Symbol), Tabelle (Grid-Symbol), Notizblock (Linien-Symbol).

**Phase 2 Icons**
Person (Silhouette), Ort (Pin), Zeit (Kalender), Relation (verbundene Punkte).

**Phase 3 Icons**
Vault/Ordner (Obsidian-artig mit Graph-Andeutung), Markdown-Datei (.md Badge).

**Phase 4 Icons**
Chat-Bubble Mensch (Terracotta), Chat-Bubble LLM (Slate Grey), Browser-Frame, Check (grün), X (rot), Spinner (orange).

**Allgemeine Icons**
Pfeil (durchgezogen für Hauptfluss), Pfeil (gestrichelt für Rückschleife), Fragezeichen, Info.

## Animationsprinzipien

Ease-Out für einfliegende Elemente (natürliches Abbremsen).
Ease-In-Out für Transformationen (sanfte Übergänge).
Linear für Fortschritts-Animationen (konstante Geschwindigkeit).
Dauer: 300-500ms für UI-Feedback, 800-1200ms für narrative Übergänge.

---

# TEIL 3: SCROLL-LOGIC

## Gesamtstruktur

Sechs Hauptsektionen: Intro, Phase 1, Phase 2, Phase 3, Phase 4, Outro.
Gesamte Scroll-Länge: 1620vh (~60vh pro Sub-Step für ein volles Scroll-Wheel).

**Phase-Boundaries (scroll.js):**
- Intro: 0-300vh (5 steps × 60vh)
- Phase 1 (Vorbereitung): 300-600vh (5 steps × 60vh)
- Phase 2 (Exploration): 600-840vh (4 steps × 60vh)
- Phase 3 (Destillation): 840-1080vh (4 steps × 60vh)
- Phase 4 (Implementation): 1080-1380vh (5 steps × 60vh)
- Outro (Praxis): 1380-1620vh (4 steps × 60vh)

**URL-Navigation:**
Jeder Step hat eine eigene URL: `#intro-definition`, `#phase1-workspace`, `#phase4-loops`, etc.

## Intro (0-100vh)

**0-30vh**: Titel erscheint: "Promptotyping". Untertitel fadet ein: "Vom Wissen zum Werkzeug".

**30-60vh**: Die zentrale Frage erscheint: "Wie wird aus Forschungsdaten ein funktionales Interface?"

**60-100vh**: Vier Phase-Icons erscheinen horizontal, noch ausgegraut. Labels: "Vorbereitung", "Exploration", "Destillation", "Implementation".

## Phase 1: Vorbereitung (100-200vh)

**100-120vh**: Phase-1-Icon wird aktiv (Terracotta). Titel: "Phase 1: Vorbereitung". Metapher-Text: "Mise en place".

**120-150vh**: Leerer Arbeitsbereich erscheint zentral. Icons für Quelltypen erscheinen an den Rändern (XML, PDF, CSV, Notizen).

**150-180vh**: Icons bewegen sich zur Mitte, hinterlassen gestrichelte Spuren.

**180-200vh**: Icons stapeln sich im Arbeitsbereich. Labels erscheinen. Puls-Animation signalisiert "bereit für nächste Phase".

## Phase 2: Exploration (200-320vh)

**200-220vh**: Phase-2-Icon wird aktiv. Titel: "Phase 2: Exploration". Metapher-Text: "Kartierung".

**220-250vh**: Zoom auf XML-Dokument (links). Rechte Seite leer mit Raster.

**250-280vh**: XML "öffnet sich", Farbcodierung erscheint. Terracotta-Elemente werden sichtbar.

**280-300vh**: Aus Terracotta-Elementen lösen sich Entity-Icons (Person, Ort, Zeit). Schweben nach rechts.

**300-320vh**: Entity-Icons verbinden sich zu rudimentärem Netzwerk. Daneben erscheinen blasse Interface-Skizzen (Timeline, Karte). Fragezeichen: "Welche Fragen?"

## Phase 3: Destillation (320-440vh)

**320-340vh**: Phase-3-Icon wird aktiv. Titel: "Phase 3: Destillation". Metapher-Text: "Reduktion".

**340-360vh**: Drei-Spalten-Layout: Links der Stapel aus Phase 1, Mitte leerer Vault, rechts Interface-Skizzen aus Phase 2.

**360-390vh**: Partikel lösen sich vom Stapel, fließen zum Vault. Erstes Dokument erscheint: data.md.

**390-410vh**: Weitere Partikel fließen (auch von rechts). Zweites Dokument: user-story.md.

**410-430vh**: Drittes Dokument: context.md. Vault pulsiert.

**430-440vh**: Stapel und Skizzen verblassen. Vault ist Zentrum. Text: "Destilliertes Wissen. Bereit für das LLM."

## Phase 4: Implementation (440-600vh)

**440-460vh**: Phase-4-Icon wird aktiv. Titel: "Phase 4: Iterative Implementation". Metapher-Text: "Ping-Pong".

**460-480vh**: Layout: Links Vault, rechts zweigeteilter Bereich (Chat oben, Browser unten).

**480-500vh**: Erster Prompt erscheint im Chat (Terracotta). Dokumente "fliegen" vom Vault zum Chat.

**500-520vh**: LLM-Antwort erscheint (Slate Grey). Browser zeigt erste Code-Fragmente.

**520-540vh**: Zweiter Prompt. Browser zeigt Wireframe.

**540-560vh**: Rotes X erscheint. "Test fehlgeschlagen". Fehlermeldung wird Prompt.

**560-580vh**: LLM-Korrektur. Orange Spinner. Browser aktualisiert.

**580-595vh**: Grüner Haken. Fertiges Interface im Browser (Netzwerk-Visualisierung).

**595-600vh**: Zoom-Out. Interface löst sich, wird eigenständig. Text: "Vom Wissen zum Werkzeug."

## Rückschleifen (Optional, Click-Triggered)

Bei Click auf "Rückschleifen anzeigen" in Phase 4:
Gestrichelte Linie vom Interface zum Vault. Label: "Kontext erweitern".
Gestrichelte Linie vom Vault zum Stapel (wieder sichtbar). Label: "Daten ergänzen".

## Progress-Indikator

Vertikale Linie am rechten Rand.
Fünf Punkte für Intro + 4 Phasen.
Aktiver Punkt ist Terracotta, andere Slate Grey.
Punkte sind klickbar für Navigation.

---

## Quellen und Referenzen

Hong, K., Troynikov, A., & Huber, J. (2025). Context rot: How increasing input tokens impacts LLM performance.

CorrespExplorer: https://github.com/DigitalHumanitiesCraft/CorrespExplorer

Pollin, C. (2025). Modelling, Operationalising and Exploring Historical Information.