# **Promptotyping: Methodik und Praxis LLM-gestützter Workflow- und Werkzeugentwicklung in den Digital Humanities. Ein Praxisbericht.**

## Christopher Pollin. Digital Humanities Craft Christian Steiner. Digital Humanities Craft

## **Abstract**

Dieses Paper stellt *Promptotyping* als strukturierte Methodik für die LLM-gestützte Entwicklung von Forschungsworkflows und \-werkzeugen in den Digital Humanities vor. Es adressiert die Spannbreite zwischen informellem, promptbasiertem Prototyping und ausgeprägter Technologieskepsis. Auf Basis von sieben Fallstudien über fünf Monate und Workshops mit 24 Teilnehmenden präsentieren wir ein praxisbasiertes Framework, das (1) eine heuristische Arbeitsdefinition von LLM-Funktionalität bereitstellt („System 1.42“ als Zwischenbereich aus musterbasierter Assoziation und schrittweiser Problemlösung) und (2) ein sechsphasiges Prozessmodell (CONTEXT, DATA, EXPLORATION, REQUIREMENTS, IMPLEMENTATION, PROTOTYPE) mit systematischer Dokumentation, Sicherungsständen und Entwicklungsjournal beschreibt. Ein Critical-Expert-in-the-Loop-Ansatz zielt auf die Reduktion zustimmungsorientierter Antwortverzerrungen (Sycophancy); ein qualitatives Bewertungsraster ergänzt quantitative Metriken um die Bewertung epistemischer Haltungen. Die Fallstudien und Workshops zeigen Hinweise darauf, dass Promptotyping Transparenz, Reproduzierbarkeit und methodische Stringenz fördert und die Einbindung domänenspezifischer Expertise strukturiert. Gleichzeitig werden vier wiederkehrende Spannungsfelder sichtbar: (a) epistemische Gerechtigkeit (z. B. Sprachdominanz, Marginalisierung von Wissensformen), (b) Kosten und potenzielle Anbieterbindung (Lock-in-Risiko), (c) curriculare und institutionelle Anforderungen der Lehre sowie (d) Autorschafts- und Verantwortungsfragen in hybriden Prozessen. Wir verstehen Promptotyping als praxisbasierten, weiterzuentwickelnden Arbeitsmodus mit klar benannten Stärken und Limitationen für die verantwortliche Integration generativer KI in geisteswissenschaftliche Entwicklungsprozesse.

## **1\. Einleitung**

### 1.1 Die epistemologische Herausforderung generativer KI

Die gegenwärtige Entwicklung von Large Language Models markiert einen Wendepunkt in der computergestützten Wissensproduktion. Mit dem Übergang zu Reasoning Models und Agentic Systems seit Ende 2024 manifestiert sich eine qualitative Transformation, die weit über inkrementelle Verbesserungen hinausgeht. Diese Frontier-Modelle, primär kommerzielle und geschlossene Systeme wie Claude, GPT-4o oder Gemini, demonstrieren durch Test-Time-Compute Strategien und erweiterte Tool Integration Fähigkeiten, die fundamentale Fragen zur Natur maschineller Intelligenz aufwerfen.

Die technische Evolution dieser Systeme folgt einem dreiphasigen Trainingsprozess. Im Pre-training lernen sie durch autoregressives Vorhersagen von Tokens auf gigantischen Textkorpora statistische Regularitäten und implizites Weltwissen. Das supervised fine-tuning formt sie zu hilfreichen Assistenzsystemen, während Reinforcement Learning from Human Feedback die Qualität und Struktur ihrer Antworten optimiert. Das Resultat sind verdichtete semantische Repräsentationssysteme, deren interne Strukturen weit über oberflächliche Token-Fortsetzung hinausgehen.

Diese Systeme operieren in einem epistemologischen Zwischenraum, den wir als "System 1.42" charakterisieren. Die Bezeichnung, angelehnt an Kahnemans Unterscheidung zwischen schnellem und langsamem Denken sowie Douglas Adams' epistemologischem Kommentar über die Antwort "42" ohne Kenntnis der eigentlichen Frage, erfasst präzise die paradoxe Natur moderner LLMs. Sie generieren oft korrekte und nützliche Outputs, ohne dass ihre internen Problemformulierungen transparent oder vollständig verstanden wären. System 1.42 bezeichnet somit LLM-Verhalten, das Charakteristika zwischen intuitiver Musterassoziation und systematischer Problemlösung zeigt, ohne vollständige Eigenschaften beider Systeme zu erreichen.

### 1.2 Das Produktivitätsparadox und seine Implikationen

Die praktische Nutzung dieser Systeme offenbart ein bemerkenswertes Paradox. Während frühe Studien zu GitHub Copilot Produktivitätssteigerungen von durchschnittlich 55 Prozent dokumentierten, zeigt die Untersuchung von Becker et al. (2025) bei erfahrenen Entwicklern eine Verlangsamung um 19 Prozent, obwohl diese Zeitersparnisse zwischen 20 und 39 Prozent erwarteten. Diese Diskrepanz verweist auf die fundamentale Komplexität und Kontextabhängigkeit der Mensch-KI-Interaktion.

Das Phänomen des "Vibe Coding", von Andrej Karpathy geprägt und von tante (2024) kritisch analysiert, exemplifiziert diese Ambivalenz. Es beschreibt die intuitive Generierung von Code durch vage natürlichsprachliche Prompts, wobei Verstehen durch "Vibes", Befähigung durch Abhängigkeit und nachhaltige Lösungen durch technische Schulden ersetzt werden. Karpathys Warnung, sich regelmäßig ehrlich zu fragen, ob man wirklich noch versteht, was gerade passiert, gewinnt für wissenschaftliche Kontexte existenzielle Bedeutung.

Dingemanse (2024) artikuliert fundamentale epistemologische Bedenken. Generative KI basiert auf Wahrscheinlichkeitsvorhersagen, nicht auf genuinem Verstehen. Ein unkritischer Einsatz könnte zentrale wissenschaftliche Prinzipien wie Autorschaft, methodische Nachvollziehbarkeit und intellektuelle Unabhängigkeit untergraben. Die von KI generierten "durchschnittlichen Darstellungen" stehen zudem im Widerspruch zu innovativem Denken und dem Konzept der Slow Science.

### 1.3 Forschungsfragen und methodischer Ansatz

Vor diesem Hintergrund adressiert diese Untersuchung drei zentrale Forschungsfragen:

Erstens, wie können wir Evaluationsverfahren entwickeln, die sowohl die aufgaben-, daten- und promptabhängige Varianz von LLM-Leistungen als auch qualitative Maßstäbe epistemischer Belastbarkeit abbilden und dabei in DH-Projekten realistisch durchführbar sind?

Zweitens, welche Formen der Mensch-KI-Kooperation stärken geisteswissenschaftliche Expertise und kritische Reflexion, statt sie zu untergraben, und auf welche technisch möglichen Praktiken sollten wir bewusst verzichten?

Drittens, welche methodischen, technischen und organisatorischen Strategien sichern gleichzeitig fachliche Unabhängigkeit, soziale und ökologische Nachhaltigkeit sowie langfristige Nachvollziehbarkeit in LLM-gestützten Workflows?

Promptotyping präsentiert sich als experimenteller Ansatz zur systematischen Exploration dieser Fragen. Es erhebt nicht den Anspruch einer fertigen Lösung, sondern versteht sich als methodischer Beitrag zur kritischen Auseinandersetzung mit generativer KI in den Digital Humanities, der kontinuierliche Weiterentwicklung und Reflexion explizit einfordert.

## **2\. Theoretische Fundierung**

### 2.1 LLMs als verdichtete semantische Repräsentationssysteme

Moderne Large Language Models basieren auf der Transformer-Architektur, deren Attention-Mechanismus Beziehungen zwischen Tokens über große Distanzen modelliert. Lindsey et al. (2025) zeigen, dass LLMs während der Textgenerierung simultan multiple abstrakte Repräsentationen aktivieren und kombinieren. Diese Repräsentationen umfassen semantische, syntaktische und kontextuelle Relationen, die über lokale Übergangswahrscheinlichkeiten hinausgehen.

Die Bezeichnung "System 1.42" verbindet Kahnemans (2011) Unterscheidung zwischen schnellem und langsamem Denken mit Douglas Adams' Metapher der Antwort ohne Kenntnis der Frage. Sie charakterisiert LLMs als Systeme, die zwischen intuitiver Musterassoziation und systematischer Problemlösung operieren. Diese Charakterisierung ist jedoch nicht empirisch validiert. Shanahan (2024) warnt explizit vor anthropomorphen Übertragungen auf maschinelle Systeme. Weder existieren Messungen, die LLMs präzise zwischen System 1 und 2 verorten würden, noch ist gesichert, dass Kahnemans humankognitive Kategorien auf maschinelle Prozesse übertragbar sind. System 1.42 fungiert daher als heuristische Arbeitshypothese, deren praktischer Nutzen sich möglicherweise eher aus der strukturierten Methodik als aus der theoretischen Metapher ergibt.

Die unklare epistemologische Natur von LLMs erfordert abgestufte Validierungsstrategien. Einfache Aufgaben wie E-Mails benötigen einzelne Prompts. Komplexere Projekte erfordern iterative Validierung. Forschungsvorhaben verlangen strukturierte Multi-Agent-Workflows mit expliziter Dokumentation.

Diese Abstufung folgt Flyvbjergs (2021) Komplexitätsprinzipien: Unknown Unknowns multiplizieren sich mit jedem Iterationsschritt. Die Fehlerwahrscheinlichkeit steigt exponentiell mit der Projektdauer. Nur 8,5% aller Großprojekte erreichen ihre ursprünglichen Ziele aufgrund unterschätzter Emergenzeffekte.

Promptotyping adressiert diese Herausforderungen durch eine sechsphasige Struktur mit Zwischenvalidierung. Jede Phase fungiert als Kontrollpunkt zur Risikoreduktion. Die Dokumentationsanforderungen skalieren mit der Projektkomplexität. Diese systematische Dekomposition reduziert die Wahrscheinlichkeit kaskadierender Fehler in komplexen Entwicklungsprozessen.

### Kritische Reflexion zur epistemischen Fundierung

Die hier vorgeschlagene System 1.42 Charakterisierung unterliegt einer epistemischen Limitation, die transparent gemacht werden muss. Sie überträgt etablierte Konzepte (Kahneman, Adams) auf LLMs ohne empirische Validierung dieser Analogie. Während solche Metaphern als heuristische Denkwerkzeuge produktiv sein können, besteht die Gefahr der epistemischen Überdehnung – wenn interpretative Frameworks mit empirischen Erkenntnissen verwechselt werden.

Die Charakterisierung bleibt notwendigerweise spekulativ: Weder existieren Messungen, die LLMs präzise zwischen System 1 und 2 verorten würden, noch ist gesichert, dass Kahnemans humankognitive Kategorien auf maschinelle Prozesse übertragbar sind. System 1.42 fungiert daher als pragmatische Arbeitshypothese, nicht als validierte Theorie. Diese epistemische Bescheidenheit ist essentiell: Promptotyping mag trotz, nicht wegen dieser metaphorischen Fundierung funktionieren. Die praktische Wirksamkeit der Methode könnte primär aus ihrer strukturierten Vorgehensweise resultieren, während die theoretische Rahmung primär orientierende Funktion hat.

### 2.2 Co-Intelligence und epistemische Partnerschaft

Mollicks (2024) Konzept der Co-Intelligence bietet einen produktiven theoretischen Rahmen für die Mensch-KI-Kollaboration. Seine Unterscheidung zwischen Centaur- und Cyborg-Arbeit charakterisiert zwei Modi der Zusammenarbeit. Centaur-Arbeit folgt einer klaren Aufgabenteilung, bei der Menschen strategische Entscheidungen treffen und KI operative Aufgaben übernimmt. Der Cyborg-Ansatz hingegen betont die enge kognitive Verschränkung, bei der Mensch und Maschine in iterativen Dialogschleifen gemeinsam Lösungen entwickeln.

Diese enge Verschränkung wirft jedoch das Problem der Sycophancy auf, die strukturelle Tendenz von LLMs zur unkritischen Bestätigung von Nutzerannahmen. Malmqvist (2024) dokumentiert, wie diese Bestätigungstendenz aus der systematischen Optimierung auf Nutzerzufriedenheit während des Trainings resultiert. OpenAI (2022-2023) zeigte empirisch, wie auf Präferenzen optimierte Modelle selbst offensichtlich falsche Prämissen bestätigen.

Anthropics (2024) Character Training bietet einen konstruktiven Lösungsansatz. Statt bloßer Gefälligkeit werden epistemische Tugenden wie Neugier, intellektuelle Ehrlichkeit und kritische Reflexion als Kerncharakteristika etabliert. Diese modellseitige Verankerung epistemischer Eigenschaften muss jedoch durch methodische Ansätze ergänzt werden, die menschliche Expertise systematisch integrieren.

### 2.3 Wissenstheoretische und methodologische Verankerung

Die theoretische Fundierung von Promptotyping integriert multiple wissenstheoretische Positionen. Michael Polanyis Konzept des impliziten Wissens erweist sich als besonders relevant für das Verständnis der Transformation von Expertise in maschinenlesbare Prompts. Der Prozess der Explizierung taciten Wissens in formale Strukturen bildet einen Kernaspekt der Methodik.

Donald Schöns Konzept der Reflective Practice strukturiert den Entwicklungsprozess systematisch. Seine Unterscheidung zwischen reflection-in-action und reflection-on-action manifestiert sich in der kontinuierlichen kritischen Reflexion während der KI-Interaktion sowie der nachträglichen Analyse und Dokumentation. Dies wird theoretisch durch das "Let's Verify Step by Step" Paradigma gestützt, welches zeigt, dass LLMs stärker in der Verifikation bestehender Aussagen als in der initialen Generierung korrekter Inhalte sind.

Das Design Science Research Framework nach Hevner et al. (2004) bildet die methodologische Basis für die rigorose Artefaktentwicklung. Der strukturierte Zyklus aus Problemidentifikation, Artefaktentwicklung, Demonstration und Evaluation findet unmittelbare Entsprechung im Promptotyping-Prozess. Für KI-gestützte Artefakte erweitert sich das Framework um drei zusätzliche Qualitätsdimensionen: epistemische Transparenz, Reproduzierbarkeit und ethische Vertretbarkeit.

Das SECI-Modell von Nonaka und Takeuchi (1995) informiert das Wissensmanagement in Promptotyping. Die Wissensspirale aus Sozialisation, Externalisierung, Kombination und Internalisierung findet ihre Entsprechung im iterativen Workflow. Die standardisierten Dokumentationsformate fungieren dabei als Boundary Objects im Sinne von Star und Griesemer (1989), die zwischen technischer Implementation und fachlicher Anforderung vermitteln.

## **3\. Die Promptotyping-Methode**

### 3.1 Definition und konzeptuelle Architektur

Promptotyping ist ein dreiebenes Framework für die methodisch strukturierte KI-gestützte Entwicklung digitaler Forschungswerkzeuge. Es integriert technisches Prompt Engineering, methodisches Requirements Engineering und epistemische Reflexion systematisch.

Technisch operiert es als strukturiertes Context Management Framework mit drei synergistischen Komponenten. Context Creation umfasst die systematische Erstellung relevanter Kontextinformationen durch Formalisierung impliziten Domänenwissens und Strukturierung von Anforderungen. Context Compression bezeichnet die gezielte Verdichtung auf relevante Information, wobei das Compression-als-Amplification Paradox zu erhöhter Modellaufmerksamkeit auf wesentliche Aspekte führt. Context Orchestration ermöglicht die strategische Steuerung über multiple Iterationen mit dynamischer Anpassung basierend auf Zwischenergebnissen.

Methodisch funktioniert Promptotyping als iterativer Requirements Engineering Ansatz, der etablierte Prinzipien des Scholar-Centred Design nutzt. Es transformiert vage Forschungsfragen durch kontinuierliche Expert-in-the-Loop Validierung in funktionsfähige, auf epistemologische Bedürfnisse abgestimmte Prototypen.

Epistemisch etabliert es eine kritisch-reflexive Praxis der Ko-Konstruktion von Wissen zwischen menschlicher Expertise und maschineller Verarbeitung. Jeder Prompt wird als epistemische Intervention verstanden, die nicht nur Informationen abruft, sondern aktiv die Generierung neuer Zusammenhänge anregt.

### 3.2 Das sechsphasige Entwicklungsmodell

Phase 1 CONTEXT etabliert durch README.md den epistemischen Rahmen. Forschungsfragen, theoretische Vorannahmen und methodische Constraints werden expliziert. Diese Phase verhindert die unkritische Übernahme technischer Lösungen für wissenschaftliche Probleme und zwingt zur präzisen Artikulation der Projektziele.

Phase 2 DATA analysiert in DATA.md Strukturen, Inkonsistenzen und implizite Annahmen der zugrundeliegenden Daten. Die dokumentierte Normalisierung, wie im REALonline Projekt, wo JSON Felder inkonsistent als String oder Array auftraten, verhindert nicht nur technische Fehler, sondern offenbart auch interpretative Entscheidungen, die für die wissenschaftliche Nachvollziehbarkeit essentiell sind.

Phase 3 EXPLORATION erlaubt als bewusst undokumentierte Phase kreatives Experimentieren ohne vorzeitige Festlegung. Diese "epistemische Spielwiese" ermöglicht das Entdecken unerwarteter Möglichkeiten und Grenzen, ohne den Overhead formaler Dokumentation.

Phase 4 REQUIREMENTS formalisiert in REQUIREMENTS.md vage Forschungsideen in testbare Spezifikationen. Die Unterscheidung zwischen MUSS, SOLL und KANN Anforderungen zwingt zur Priorisierung und macht Trade-offs zwischen technischer Machbarkeit und wissenschaftlichem Anspruch explizit.

Phase 5 IMPLEMENTATION dokumentiert in INSTRUCTIONS.md alle Datentransformationen, Algorithmen und interpretativen Entscheidungen. Sie fungiert als epistemisches Protokoll, das spätere Nachvollziehbarkeit und Kritik ermöglicht. Diese Phase erwies sich in unseren Projekten als kritisch für die Fehlervermeidung.

Phase 6 PROTOTYPE generiert Code basierend auf den dokumentierten Spezifikationen. Der generierte Code ist nicht Endpunkt, sondern Ausgangspunkt für weitere Iteration und kritische Reflexion.

### 3.2.1 Iterative Prompt-Verfeinerung in der Praxis

Die iterative Entwicklung von Prompts folgt einem erkennbaren Muster, wie dieses Beispiel aus dem CVMA-Projekt illustriert:In drei Iterationen wurde ein funktionaler Entwicklungsprozess realisiert: Zunächst lieferte der generische Prompt Erstelle eine Timeline für XMLDaten lediglich unspezifischen Beispielcode. In der zweiten Iteration führte der präzisierte Prompt zur Extraktion spezifischer Metadaten aus SPARQL-XML-Dateien des Stefan Zweig Archivs zu einem funktionalen Parser, allerdings ohne Visualisierung. Erst die dritte Iteration mit Fokus auf eine interaktive Timeline-Visualisierung mittels D3.js – inklusive Dekaden-Gruppierung, Zoom und Filter –resultierte in einer vollständigen und funktional überzeugenden Lösung.

### 3.3 Critical Expert in the Loop

Die Rolle der Domänenexperten als Critical Expert in the Loop operationalisiert Schöns Reflective Practice für die KI-gestützte Forschung. Sie fungieren nicht als passive Validierende, sondern als aktive Ko-Konstrukteure, die ihr Fachwissen kontinuierlich in den Dialog einbringen.

Diese Transformation adressiert direkt die Sycophancy Problematik. Durch strukturierte Prompting Strategien wie Critical Questioning wird die Tendenz von LLMs zur unkritischen Bestätigung systematisch herausgefordert. Experten werden explizit aufgefordert, Annahmen zu hinterfragen, alternative Interpretationen vorzuschlagen und epistemische Zweifel zu artikulieren.

Im REALonline Projekt korrigierte der Historiker die technische Annahme, Objekte nach modernen Kategorien zu strukturieren. Seine Intervention, historische Begriffe aus der nomenclature\_original zu verwenden und die Hierarchie nach Gebäuden statt Objekttypen zu organisieren, transformierte nicht nur die technische Implementation, sondern auch das epistemische Verständnis der Daten als Ausdruck sozialer Strukturen im mittelalterlichen Haushalt.

### 3.4 Das Journal als reflexives Instrument

Das Promptotyping Journal dokumentiert nicht nur Entscheidungen, sondern auch Zweifel, Überraschungen und Lernprozesse. Es fungiert als Laborbuch der digitalen Geisteswissenschaften und institutionalisiert kontinuierliche Reflexion.

Ein typischer Journal-Eintrag erfasst epistemische Entscheidungen explizit. Die Wahl einer räumlichen über eine kategoriale Ordnung im REALonline Projekt wurde nicht als technische, sondern als interpretative Entscheidung dokumentiert. Alternative Modellierungen wurden erwogen: kategoriale Ordnung würde Objekttypen priorisieren, chronologische Ordnung würde zeitliche Entwicklung betonen, akteurszentrierte Ordnung würde Besitzverhältnisse fokussieren. Die Begründung des Historikers, dass räumliche Organisation primärer Bedeutungsträger für soziale Hierarchien war, bleibt nachvollziehbar dokumentiert.

### 3.5 Praktische Implementierung und Tool-Setup

Für die erfolgreiche Anwendung von Promptotyping empfehlen wir folgendes Setup:

**Entwicklungsumgebung:** VS Code mit Markdown-Extensions für strukturierte Dokumentation, Git für Versionskontrolle mit Commits nach jedem validierten Savepoint, Python für Datenvorverarbeitung bei komplexen Datenstrukturen.

**LLM-Zugang:** Kostenlose Zugänge sind für Workshops und erste Experimente ausreichend. Für komplexe Projekte empfiehlt sich API-Zugang zur besseren Kontrolle und Reproduzierbarkeit. Die Modellauswahl sollte basierend auf dem Aufgabentyp erfolgen (siehe Abschnitt 4.2 für empirische Erkenntnisse).

**Dokumentationsstruktur:** Eine standardisierte Verzeichnisstruktur unterstützt Navigation und Wartbarkeit. Alle Dokumente sollten in Markdown verfasst und versioniert werden. Das Journal sollte kontinuierlich während der Entwicklung gepflegt werden, nicht nachträglich.

## **4\. Empirische Evidenz und kritische Evaluation**

### 4.1 Fallstudien als epistemische Experimente

Die sieben durchgeführten Projekte über fünf Monate fungierten als epistemische Experimente mit unterschiedlichen Erkenntniszielen und demonstrierten die Bandbreite der Methode.

Stefan Zweig Digital mit zwei Stunden Entwicklung ohne Dokumentation demonstrierte die Grenzen des reinen Vibe Coding. Die Timeline-Visualisierung funktionierte initial, war aber nach zwei Wochen selbst für den Entwickler nicht mehr nachvollziehbar. Dieses Negativbeispiel unterstreicht die Notwendigkeit systematischer Dokumentation.

REALonline Rauminventare mit fünf Stunden und sechs Dokumenten visualisierte mittelalterliche Objektverteilungen in österreichischen Adelshäusern von 1432 bis 1602\. Die strukturierte Dokumentation ermöglichte erfolgreiche Iteration nach Expertenintervention. Der Historiker korrigierte technische Annahmen über Objekthierarchien und präferierte historische Begriffe statt moderner Kategorien.

CVMA Glasfenster mit acht Stunden und fünf Dokumenten exemplifizierte erfolgreiche Co-Intelligence beim Corpus Vitrearum Medii Aevi. SPARQL-Queries für den NFDI4Culture Knowledge Graph entstanden in drei Iterationsschleifen zwischen menschlicher Validierung und LLM-Optimierung. Die 29MB JSON-LD Verarbeitung erforderte Python-Preprocessing.

Aldersbach Kloster mit acht Stunden und sieben Dokumenten integrierte heterogene Quelltypen in ein Annotationstool. Die systematische DATA Phase half bei der Normalisierung inkonsistenter Datenformate aus verschiedenen Archivbeständen.

Kriminalmuseum mit zehn Stunden und nur drei Dokumenten entwickelte ein digitales Archiv der Hans Gross Sammlung mit 3.892 Objekten. Das funktionale Dual-Interface mit traditioneller Suche und Canvas Explorer litt unter fehlender IMPLEMENTATION.md, was spätere Anpassungen erheblich erschwerte.

Lucina Edition mit 25 Stunden und über elf Dokumenten entwickelte eine TEI-konforme digitale Edition des Madrid BN Mss. 6028 mit 128 neulateinischen Gedichten. Fünf dokumentierte Iterationen führten von der Basis-Konversion zur vollständigen Edition mit Prosopographie und metrischer Analyse. Die hohe Dokumentenanzahl machte Koordination zunehmend komplex.

REALonline Iteration 2 mit acht Stunden und sieben Dokumenten validierte die verbesserte Methode. Mit vollständigem Dokumentsatz und aktivem JOURNAL.md entstand eine robustere Architektur mit besserer Treemap Visualisierung.

### 4.1.1 Projektübersicht und Verfügbarkeit

Die folgende Tabelle fasst die empirische Basis unserer Untersuchung zusammen:

| Projekt | Zeit | Dokumente | Ergebnis | Erkenntnisse | Verfügbarkeit |
| :---- | :---- | :---- | :---- | :---- | :---- |
| Stefan Zweig Digital | 2h | 0 | Timeline-Tool | Ohne Struktur schwer wartbar | [Demo](https://dhcraft.org/excellence/promptotyping/szd-annotation-timeline/) |
| REALonline v1 | 5h | 6 | Interaktive Visualisierung | Expertenvalidierung kritisch | [Demo](https://chpollin.github.io/imareal-room-object/) |
| Aldersbach Kloster | 8h | 7 | Annotationstool | DATA-Phase zentral für heterogene Quellen | \- |
| CVMA Glasfenster | 8h | 5 | Viewer mit Metadaten | Co-Intelligence Pattern erfolgreich | [Demo](https://chpollin.github.io/stained-glass-metadata-annotation-tool/) |
| Kriminalmuseum | 10h | 3 | Dual-Interface | Minimaldokumentation problematisch | [Demo](https://chpollin.github.io/km/) |
| Lucina Edition | 25h | 11+ | Digitale Edition (5 Versionen) | Koordination wird komplex | [Demo](https://chpollin.github.io/diged-neolat/) |
| REALonline v2 | 8h | 7 | Verbesserte Architektur | JOURNAL.md wertvoll | siehe v1 |

Vollständige Repositories und Dokumentation unter github.com/chpollin/. Alle Prototypen sind als Open Source verfügbar und demonstrieren die praktische Anwendbarkeit der Methode.

## **4.2 Detailstudie: REALonline Rauminventare**

Das REALonline-Projekt illustriert exemplarisch die Wechselwirkung zwischen technischer Implementation und fachlicher Expertise. Die Aufgabe bestand darin, Rauminventare österreichischer Adelssitze (1432-1602) zu visualisieren, um soziale Hierarchien durch Objektverteilung analysierbar zu machen.

**Kritische Intervention und epistemische Transformation**

Der entscheidende Moment ereignete sich in der REQUIREMENTS-Phase. Der beteiligte Historiker korrigierte die technische Annahme, Objekte nach modernen funktionalen Kategorien zu strukturieren. Seine Intervention:

- Präferenz für historische Begriffe aus nomenclature\_original statt moderner Kategorien  
- Organisation nach Gebäuden/Räumen statt nach Objekttypen  
- Begründung: Räumliche Organisation war im Mittelalter primärer Bedeutungsträger für soziale Hierarchien

Diese Korrektur war mehr als technische Anpassung. Sie transformierte das Datenmodell von einer anachronistischen zu einer historisch adäquaten Repräsentation. Die resultierende Treemap-Visualisierung zeigte nicht mehr moderne Kategorien, sondern die mittelalterliche Perspektive auf materielle Kultur.

**Technische Herausforderungen und Lösungen**

Die JSON-Datenstruktur aus Neo4j wies Inkonsistenzen auf: Felder erschienen mal als String, mal als Array. Diese in der DATA-Phase dokumentierte Problematik informierte die spätere Normalisierung. Der Treemap-Algorithmus produzierte initial unleserlich schmale Bereiche für kleine Kategorien. Die Lösung – Aggregation unter "Weitere" – balancierte Lesbarkeit und Informationsgehalt.

**Zeitaufwand und Phasenverteilung**

- CONTEXT (30 Min): Forschungsfrage klären  
- DATA (60 Min): Struktur analysieren, Inkonsistenzen dokumentieren  
- EXPLORATION (120 Min): Entdeckung multipler Inventare, Neukonzeption  
- REQUIREMENTS (45 Min): Priorisierung mit Historiker  
- IMPLEMENTATION (45 Min): Normalisierung dokumentieren  
- PROTOTYPE (90 Min): Vier Iterationen bis zur finalen Version

Die systematische Dokumentation ermöglichte es, in Version 2 gezielt Verbesserungen vorzunehmen, ohne den gesamten Erkenntnisprozess wiederholen zu müssen.

### 4.3 Modellspezifische Charakteristika

Die Beobachtung modellspezifischer Stärken wirft fundamentale Fragen zur Objektivität KI-gestützter Forschung auf. Claude zeigt konsistente Vorteile bei XML und Web-Entwicklung, was strukturierte Datenmodelle bevorzugt. GPT-4o demonstriert Stärken bei komplexem Reasoning, neigt aber zu elaborierten Lösungswegen auch bei einfachen Problemen. Gemini punktet durch große Kontextfenster, was holistischere Betrachtung komplexer Datenstrukturen ermöglicht. Open-Source Modelle unter 70 Milliarden Parametern erreichen diese Komplexitätsgrenzen erheblich früher.

Diese Charakteristika sind nicht neutral. Sie prägen die Art möglicher Erkenntnisse und beeinflussen die methodischen Entscheidungen. Die Wahl des Modells wird somit zur epistemischen Entscheidung mit weitreichenden Konsequenzen für die Forschungsergebnisse.

### 4.4 Das Vibe-Check Framework

Ergänzend zu quantitativen Metriken entwickelten wir das Vibe-Check Framework als qualitative Evaluationsmethode. Es reflektiert systematisch die epistemischen und kommunikativen Praktiken der Forschenden, nicht primär die technische Leistung der Modelle.

Das Framework macht implizite Annahmen, epistemische Zielsetzungen und kommunikative Haltungen sichtbar. Forschende evaluieren, ob ihre Prompts nach Offenheit oder Gewissheit fragen, neutral oder bewertend wirken, argumentativ oder affirmativ gestaltet sind. Diese Reflexion erfolgt durch standardisierte Reflexionsfragen, Bewertungsraster und kollektive Promptkritik.

Ein konkretes Beispiel verdeutlicht die Anwendung. Eine Historikerin analysiert Briefe aus dem Stefan Zweig Archiv mit der hermeneutischen Forschungsfrage nach emotionalen Untertönen der Exilerfahrung. Sie vergleicht drei Modelle entlang der Achsen "Historische Genauigkeit versus Kreative Interpretation" und "Emotionale Tiefe versus Analytische Distanz". Die bewusste Wahl von Claude für seine Balance aus emotionaler Sensitivität und historischer Präzision wird explizit dokumentiert und begründet.

### 4.5 Workshop-Validierung

Die Workshops mit 24 Teilnehmenden ohne Programmiererfahrung zeigten ambivalente Ergebnisse. Die Erfolgsquote von 83 Prozent (20 von 24 Teilnehmenden) bei der Erstellung funktionaler Prototypen demonstriert die Zugänglichkeit der Methode. Gleichzeitig offenbarten sich typische Herausforderungen.

Teilnehmende tendierten zum Überspringen kritischer Phasen, besonders der IMPLEMENTATION Phase. Sie überforderten LLMs mit zu viel Kontext gleichzeitig und vernachlässigten die Savepoint Validierung. Die Gefahr des "Cargo-Cult Programming", also funktionierender Code ohne Verständnis, wurde evident.

Erfolgreiche Strategien umfassten explizite Referenzierung vorheriger Dokumente in Prompts, regelmäßige Zwischenvalidierung an Phasenübergängen und Git-Commits nach jedem validierten Savepoint. Die konsequente Nutzung der Journal-Vorlage sicherte Konsistenz und Nachvollziehbarkeit.

## **5\. Kritische Reflexion und blinde Flecken**  **Todo:** **\`\`\`** **Problems**

Having explored various perspectives on what LLMs might be, we now need to discuss the associated problems. I want to start with something that might seem philosophical, even speculative.

We have already heard from David Chalmers about how understanding can be defined, and whether LLMs can truly understand. They only fulfil some aspects of it. Chalmer has also formulated the hard and easy problems of consciousness. The easy problems involve analyzing cognitive functions that can be measured. You can analyze neurons firing in the brain, for example. The “hard problem”, on the other hand, is the question of subjective experience. What is it like to be someone? How does it feel to be Christopher? This is what Thomas Nagel famously explored in “What Is It Like to Be a Bat?”[^1] We simply don't know, and maybe can't know, what subjective experience is like for another being. 

## **The Hard Problem of Consciousness and LLMs**

You might be wondering why we’re discussing consciousness in a practical workshop about LLMs. The question of whether LLMs can be conscious is not just philosophical speculation, but an active area of research with real implications. As David Chalmers puts it, if we hadn’t prepared for it, discovering consciousness in an AI system would be a “moral catastrophe”. Moreover, it is a fundamental problem of LLMs that they do not have a world model and are unable to verify their output. So, we should at least be thinking about this.

Current LLMs are almost certainly not conscious. “Almost” because we can never be completely sure. Their transformer architecture lacks key features associated with consciousness, such as persistent internal states, a world model and embodied experience. However, due to the fundamental explanatory gap between physical processes and subjective experience, we cannot definitively prove or disprove machine consciousness. This is the 'hard problem' identified by Chalmers. Furthermore, if consciousness does emerge, it may be entirely different to the human experience.

Major tech labs are taking this issue so seriously that they are funding research programmes. Anthropic's Model Welfare programme is investigating whether AI systems might deserve moral consideration. Claude Opus can already use the 'stop conversation' button if the conversation is heading in the wrong direction. We should pay attention when researchers like Chalmers and neuroscientist Michael Graziano suggest that AI systems could develop aspects of consciousness within the next decade, even if current models clearly lack it.

I’m using Chalmers’ hard problem framework not in the strict philosophical sense, but as a metaphor to help us think about the challenges of LLMs. Just as consciousness has 'easy problems' (functionally explicable processes) and 'hard problems' (subjective experiences that resist explanation), LLMs present us with two categories of challenge. The 'easy problems' are actionable, complex challenges that we can work on using current methods. The 'hard problems' are fundamental contradictions that require permanent adaptation rather than solutions. The following issues are open to discussion. None are fully developed.

## ***(Currently) Hard Problems*** **of Frontier-LLMs**

### **Alignment Problem**

How do we ensure that a language model acts as we intend in all situations? In other words, how do we prevent it from deviating from our goals? This concerns both obvious malfunctions and subtle deviations that only become visible in complex situations.

### **The Duck Problem**

"If it looks like a duck, swims like a duck, and quacks like a duck, then it probably *is* a duck". How do we ensure that a model doesn't just pretend to understand something, but actually understands it? This applies to explanations, content production and all other outputs. Especially when the results are convincing, it becomes increasingly difficult to distinguish real understanding from the illusion of understanding. And this illusion is continuously getting better.

### **Epistemic Asymmetry**

We use a tool without really knowing how it works internally. We know the mathematical mechanisms, but nobody can really explain why the model generated this specific answer. This is particularly problematic in research, where we depend on comprehensibility and reproducibility.

### **The "There-is-no-true-Responsible-Frontier-AI-Usage" Problem**

The development and training of large models consumes huge resources and cannot be implemented ethically, socially or ecologically sustainably on many levels. It is an illusion to believe that one can use Frontier LLMs truly responsibly. At the same time, a necessity of usage emerges. Many are directly or indirectly forced to use these models. This follows from the next problem. 

### **System Coercion Problem**

Not only is there a global arms race for AI technology between states and corporations (sorry for the militaristic terms, but I think it is actually a real arms race), but there is also enormous pressure on individuals. There is also enormous pressure on individuals. Employees, researchers, freelancers, students and teachers must use AI to remain competitive and informed. I am not at all happy about this, but I really think it is already happening. Companies must deploy AI technology to avoid being displaced from the market. Students must use AI to keep up. As the models become ever more powerful, everyone must adapt or risk being left behind.

### **"4th-Injury-to-Humanity" Problem**

As AI continues to take over and surpass more and more human abilities, we must fundamentally rethink what this means for our understanding of humanity, creativity, intelligence, and the value of human work. This is similar to Freud's three 'narcissistic injuries' to humanity: First, Copernicus showed that we are not at the centre of the universe. Then Darwin showed that we are not separate from animals. Finally, Freud showed that we are not in control of our own minds. Now, AI is performing knowledge-based tasks more effectively\!

## ***“Easy” Problems*** **of Frontier-LLMs** 

### **Skills Atrophy Problem**

The progressive erosion of human cognitive and practical capabilities through the systematic delegation of tasks to AI systems, particularly those involving programming, writing and analytical thinking, creates a dependency cycle that undermines the very skills required for the effective supervision of AI outputs. How can we educate programmers and encourage critical thinking if these tasks can be offloaded?

### **Needs-an-Expert-in-the-Loop Problem**

The paradox is that AI systems designed to make expertise more accessible require expert validation in order to be used safely. For example, a student using ChatGPT for physics needs a physicist to verify the answer. Similarly, a patient seeking medical advice needs a doctor to confirm that it is safe. This undermines the promise of making expert knowledge universally accessible, since those who need AI assistance the most are often least able to assess its reliability. The sycophancy of models is also so strong that it is essential to be the critical expert when working with LLMs.

### **Evaluation and Benchmark Problem**

The fundamental difficulty lies in assessing what LLMs can and cannot actually do in real-world conditions. These models behave differently with slight variations in prompts (known as 'prompt brittleness'), perform inconsistently across use cases and exhibit unpredictable emerging or disappearing capabilities. Traditional benchmarks fail to capture this complexity. They test narrow scenarios, yet models are used for everything from creative writing to medical diagnosis. A model that excels in standardised tests may perform poorly in practical tasks, and vice versa. We lack evaluation frameworks that reflect the messy, contextual and highly variable nature of actual model deployment. This creates a dangerous situation where we deploy models without truly understanding their capabilities, reliability or limitations.

### **Communication and Knowledge Gap Problem**

People simply don't know how powerful — and how limited — these models are. There is a fundamental lack of knowledge about the capabilities of LLMs, coupled with poor communication between the people who develop these systems and the people who use or regulate them. This results in both over-hyping and dismissive scepticism. Some believe that AI will solve all problems, while others dismiss it as 'just autocomplete'. The result is that policymakers regulate what they don't understand, educators ban or embrace tools without knowing their limitations, and the public makes decisions based on misconceptions. This broken communication prevents informed decision-making at every level of society.

### **Attribution Problem**

It is necessary to maintain clear provenance for human versus machine contributions in collaborative work. As AI integration becomes more seamless, it becomes both technically challenging and ethically crucial to distinguish original human insight from AI-generated content for reasons of academic integrity, legal liability and creative ownership.

### **Integration Problem**

The difficulty lies in actually implementing LLMs within institutions and ensuring they are effective. Organisations get stuck in endless pilot projects and experiments that never reach a larger scale. The real barriers are mundane yet crippling. These include high costs for enterprise licences, a lack of internal AI knowledge, IT departments being overwhelmed with security concerns and a lack of time for proper implementation. Leadership doesn't understand what they're buying, middle management fears being replaced, and frontline workers lack training. Meanwhile, institutions are under pressure to 'adopt AI' without clear strategies, resulting in a pattern of half-implemented solutions that consume resources without providing value. Universities purchase ChatGPT licences but fail to provide faculty training. Hospitals pilot AI diagnostics that nobody trusts enough to use. Companies announce 'AI transformation' while employees secretly use free consumer tools because the official systems are ineffective.

### **Compute and Money Problem**

The fundamental inequality is created by access to computing power. AI capabilities increase in direct proportion to computational resources. More computing power means better models, faster responses and more experiments. Those who can afford substantial computing power (large technology companies, wealthy institutions and wealthy nations) are continuously pulling ahead, while others are left with outdated models or rate-limited free tiers. This isn't just about money, but also about the physical infrastructure of intelligence.

## **Are there more Problems?** 

## 

## These hard and easy problems are not fully developed. What other problems exist?

## 

* ## The Terminology Problem: ChatGPT ≠ AI ≠ GPT ≠ Machine Learning ≠ LLM ≠ …

* ## The Anthropomorphism Problem: “Reasoning” — “Thinking” — “Character” — “Hallucination” — “Knows” — “Decides” — … 

* ## Addiction to AI?

* ## Cybersecurity?

* ## …     \`\`\`

### 5.1 Epistemische Gerechtigkeit

Die Frage nach epistemischer Gerechtigkeit, verstanden im Sinne Frickers (2007) als faire Verteilung epistemischer Anerkennung und erweitert durch Medina (2013) und Dotson (2011) als aktive Teilhabe an kollektiver Wissensproduktion, wurde bislang unzureichend adressiert.

Zugangsbarrieren manifestieren sich durch sprachliche Dominanz des Englischen, technische Anforderungen wie leistungsfähige Hardware und stabile Internetverbindung sowie finanzielle Hürden durch API-Kosten. Diese strukturellen Ausschlüsse reproduzieren bestehende Ungleichheiten.

Westlich-akademische Wissensformen werden systematisch privilegiert, während alternative epistemische Traditionen, etwa indigene oder nicht-textuelle Wissenssysteme, marginalisiert werden. Die ungleiche Repräsentation des Globalen Südens in Trainingsdaten verstärkt diese Tendenzen. Ohne gezielte Maßnahmen zur epistemischen Inklusion droht Promptotyping selbst zu einer Praxis epistemischer Ausschlüsse zu werden.

### 5.2 Ökonomische Realitäten

Die ökonomischen Implikationen von Promptotyping erfordern transparente Diskussion. Direkte Kosten durch intensive API-Nutzung können substantiell sein, besonders bei komplexen Projekten mit vielen Iterationen. Die Abhängigkeit von kommerziellen Anbietern wie OpenAI, Google oder Anthropic schafft potenzielle Lock-in Effekte. Adäquate Open-Source Alternativen fehlen derzeit für komplexe Anwendungen.

Diese ökonomischen Barrieren verschärfen die digitale Spaltung zwischen ressourcenstarken Institutionen des Globalen Nordens und unterfinanzierten Forschungseinrichtungen. Die Verschiebung von Forschungsgeldern zu Tech-Konzernen wirft Fragen nach wissenschaftlicher Autonomie und nachhaltiger Forschungsinfrastruktur auf.

### 5.3 Pädagogische Integration

Die Integration in die akademische Lehre weist signifikante Defizite auf. Curricular fehlen spezifische Lehrpläne und Kursmaterialien. Unklar bleibt, welche Vorkenntnisse notwendig sind und wie die Balance zwischen theoretischen Grundlagen und praktischer Anwendung gestaltet werden soll.

Die zentrale Rolle des Critical Expert in the Loop erfordert neue Ausbildungskonzepte. Wie werden zukünftige Experten ausgebildet, bewertet und zertifiziert? Institutionelle Barrieren durch konservative Fachkulturen und rechtliche Unsicherheiten bei Prüfungsleistungen erschweren methodische Innovation zusätzlich.

### 5.4 Ethische und epistemische Verantwortung

Die hybride Ko-Autorschaft von Mensch und LLM wirft fundamentale Fragen nach Transparenz und epistemischer Verantwortung auf. Neue Standards wie "KI-Contribution Statements" werden notwendig. Das Risiko struktureller Bias-Reproduktion erfordert diversifizierte Review-Prozesse und bewusst inklusive Prompt-Gestaltung.

Die geteilte Agency zwischen menschlichen und maschinellen Akteuren erzeugt Verantwortungsdiffusion. Etablierte Haftungsmodelle werden untergraben. Neue Governance-Strukturen müssen entwickelt werden, um klare Verantwortlichkeiten festzulegen.

Neben technischer Schuld identifizieren wir "epistemische Schuld": Verlust des Prozesswissens, wenn der Weg zum Ergebnis nicht verstanden wird; Blackbox-Entscheidungen, die im Modell verborgen bleiben; interpretative Verarmung, wenn maschinelle Durchschnittsantworten Kreativität ersetzen. Die IMPLEMENTATION Phase adressiert diese Schuld teilweise, kann sie aber nicht vollständig eliminieren.

### 5.5 Praktische Herausforderungen der Implementation

Über die theoretischen Limitationen hinaus zeigten sich in der Praxis konkrete Herausforderungen. Browser-Performance degradiert bei mehr als 3000 Datenpunkten signifikant, besonders bei komplexen Visualisierungen. Die Koordination bei mehr als zehn Dokumenten wird zunehmend unübersichtlich und fehleranfällig. Versionsverwaltung bei multiplen Iterationen erfordert diszipliniertes Vorgehen. Die Balance zwischen Dokumentationsaufwand und Entwicklungsgeschwindigkeit bleibt eine kontinuierliche Herausforderung.

## **6\. Zukunftsperspektiven**

### 6.1 Von Single-Agent zu Multi-Agent Systemen

Die technologische Entwicklung deutet auf eine Evolution von Single-Agent zu Multi-Agent Systemen. Spezialisierte KI-Agenten werden nicht isoliert arbeiten, sondern strategisch kooperieren, kommunizieren und ihre Ergebnisse gegenseitig validieren.

Diese Entwicklung eröffnet neue epistemologische Möglichkeiten. Während einzelne Agenten zu Bestätigungsfehlern neigen, können Multi-Agent Systeme durch gezielte kritische Interaktion diese Fehlerquellen reduzieren. Gleichzeitig verschärft sich das Erfordernis rigoroser epistemischer Steuerung.

Langfristig könnten Multi-Agent Systeme, wie empirische Prognosen nahelegen, eine radikale Umstrukturierung ganzer Forschungsprozesse ermöglichen. Dies erfordert jedoch nicht nur technologische Innovation, sondern einen methodologischen Paradigmenwechsel, bei dem Promptotyping eine zentrale Rolle einnehmen könnte.

### 6.2 Institutionelle Transformation

Die Integration von Promptotyping in institutionelle Kontexte erfordert fundamentale Anpassungen. Neue Evaluationskriterien für KI-gestützte Forschung müssen entwickelt werden. Transparenzstandards für KI-Nutzung sind zu etablieren. Die Reproduzierbarkeit bei sich ändernden Modellen muss gesichert werden.

Diese Transformation betrifft auch die akademische Kultur. Die Akzeptanz hybrider Mensch-KI-Autorschaft, die Entwicklung neuer Publikationsformate und die Anpassung von Begutachtungsprozessen werden notwendig. Forschungsförderung muss die spezifischen Anforderungen KI-gestützter Projekte berücksichtigen.

## **7\. Konklusion**

Promptotyping markiert einen signifikanten Fortschritt in der methodisch kontrollierten Integration generativer KI in die geisteswissenschaftliche Forschung. Die Methode überwindet die Dichotomie zwischen unkritischer Technikbegeisterung und reflexhafter Technologieablehnung durch einen dritten Weg: die kritisch-reflexive Appropriation von KI-Technologien unter Beibehaltung wissenschaftlicher Standards.

Die theoretische Innovation liegt in der Konzeptualisierung von LLMs als System 1.42, die deren epistemologische Ambiguität präzise erfasst. Die methodische Operationalisierung durch das sechsphasige Entwicklungsmodell mit Critical Expert in the Loop etabliert praktikable Workflows. Die empirische Validierung demonstriert sowohl transformatives Potenzial als auch fundamentale Limitationen.

Drei Imperative kristallisieren sich heraus. Epistemische Wachsamkeit erfordert, dass jede LLM-Nutzung ihre erkenntnistheoretischen Implikationen reflektiert. Methodische Transparenz verlangt nachvollziehbare Dokumentation von Prozessen und Entscheidungen. Kritische Solidarität bedeutet, dass die Community Erfahrungen teilt und Standards entwickelt.

Die identifizierten blinden Flecken, insbesondere Fragen epistemischer Gerechtigkeit und ökonomischer Nachhaltigkeit, erfordern dringende Aufmerksamkeit. Die Gefahr einer digitalen Spaltung zwischen ressourcenstarken Institutionen und marginalisierten Forschungsgemeinschaften ist real und muss proaktiv adressiert werden.

Promptotyping versteht sich als evolvierende kritische Praxis, nicht als abgeschlossene Methodik. Es bietet einen gangbaren Weg für die verantwortungsvolle Integration generativer KI in die geisteswissenschaftliche Forschung. Dieser Weg ersetzt menschliche Expertise nicht, sondern augmentiert sie; opfert Transparenz nicht, sondern fordert sie ein; gibt wissenschaftliche Rigorosität nicht auf, sondern definiert sie neu.

Die Zukunft der KI-gestützten Entwicklung in den Digital Humanities wird davon abhängen, ob es gelingt, die identifizierten Herausforderungen konstruktiv zu adressieren. Dies erfordert nicht nur technische Innovation, sondern institutionellen Wandel, kulturelle Offenheit und ethische Verantwortung. Nur durch die Integration all dieser Dimensionen kann Promptotyping sein Potenzial als transformative Kraft für die Digital Humanities entfalten, ohne dabei die epistemischen und ethischen Grundlagen wissenschaftlicher Forschung zu untergraben.

Die offenen Fragen bleiben bestehen. Stärken oder untergraben wir geisteswissenschaftliche Expertise? Demokratisieren wir Forschung oder schaffen neue Abhängigkeiten? Wie wahren wir Erkenntnisautonomie in proprietären Systemen? Diese Fragen können nicht durch eine Methode beantwortet werden. Sie erfordern kontinuierlichen kritischen Dialog, zu dem Promptotyping einen strukturierten, theoretisch fundierten und empirisch erprobten Beitrag leistet.

## **Anhänge**

### Anhang A: Promptotyping Journal-Template

Das folgende Template hat sich in unserer Praxis als essentiell für die systematische Dokumentation erwiesen:

\# Promptotyping Journal: \[Projektname\]

\*\*Ziel:\*\* \[Was wird gebaut\]  

\*\*Ausgangslage:\*\* \[Vorhandene Dateien, Daten, Wissen\]  

\*\*Start:\*\* \[Datum\]  

\*\*Team:\*\* \[Beteiligte Personen und Rollen\]

\---

\#\# \[Datum\] \- \[Phase\] \- \[Sitzung Nr.\]

\#\#\# Kontext

\[Beschreibung der Ausgangssituation und Zielsetzung dieser Sitzung\]

\#\#\# Vorgehen

\*\*Modell:\*\* \[Verwendetes LLM und Begründung der Wahl\]  

\*\*Input:\*\* \[Bereitgestellte Dokumente/Kontext\]  

\*\*Werkzeuge:\*\* \[Verwendete Tools, IDEs, Libraries\]

\#\#\# Hauptaktivität

\*\*Verwendeter Prompt:\*\*

\[Prompt-Text\]

\*\*Generierter Output:\*\*

\[Zusammenfassung oder Verweis auf generierte Datei\]

\#\#\# Validierung

\*\*Validator:\*\* \[Name und Rolle\]  

\*\*Methode:\*\* \[Technische Prüfung / Fachliche Prüfung / LLM-as-Judge\]  

\*\*Entscheidung:\*\* \[Akzeptiert / Modifiziert / Verworfen\]  

\*\*Begründung:\*\* \[Detaillierte fachliche oder technische Einschätzung\]

\#\#\# Probleme & Lösungen

\[Aufgetretene Schwierigkeiten und wie sie gelöst wurden\]

\#\#\# Erkenntnisse

\- \[Muster oder Heuristik, die sich bewährt hat\]

\- \[Was beim nächsten Mal anders gemacht werden sollte\]

\- \[Überraschende Entdeckungen\]

\#\#\# Nächste Schritte

\[Geplante Aktivitäten für die nächste Sitzung\]

\#\#\# Savepoint

☐ Phase abgeschlossen  

☐ Dokumente erstellt: \[Liste\]  

☐ Expertenvalidierung erfolgt  

☐ Git-Commit: \[Hash oder Tag\]

### Anhang B: Beispiel-Prompts für jede Phase

Diese erprobten Prompt-Patterns demonstrieren die praktische Operationalisierung der Methode:

#### B.1 CONTEXT-Phase

Erstelle eine README.md für ein Tool zur \[Zweck\]. 

Kontext:

\- Zielgruppe: \[Spezifische Nutzergruppe mit Kenntnisstand\]

\- Hauptziel: \[Was soll erreicht werden\]

\- Anwendungsfall: \[Konkretes Szenario\]

\- Technische Constraints: \[z.B. Browser-only, keine Server\]

\- Fachliche Constraints: \[z.B. historische Korrektheit\]

Die README sollte enthalten:

1\. Projekttitel und Kurzbeschreibung

2\. Zielgruppe und Voraussetzungen

3\. Hauptfunktionalitäten (als User Stories)

4\. Technische Rahmenbedingungen

5\. Glossar wichtiger Fachbegriffe

#### B.2 DATA-Phase

Analysiere die angehängte Datendatei/Struktur und erstelle eine DATA.md mit:

1\. Datenformat und Struktur (Schema)

2\. Identifizierte Datentypen pro Feld

3\. Inkonsistenzen oder Anomalien

4\. Fehlende oder optionale Felder

5\. Beziehungen zwischen Datenelementen

6\. Statistische Übersicht (Anzahl Einträge, Wertebereiche)

7\. Empfohlene Normalisierungen

8\. Beispiel-Datensätze (min. 3 repräsentative)

Markiere besonders kritische Datentransformationen, die später 

in IMPLEMENTATION dokumentiert werden müssen.

#### B.3 REQUIREMENTS-Phase

Basierend auf README.md und den Erkenntnissen aus EXPLORATION, 

erstelle eine REQUIREMENTS.md mit:

\#\# Funktionale Anforderungen (nach Priorität)

\- MUSS: \[Kritische Features\]

\- SOLL: \[Wichtige Features\]

\- KANN: \[Nice-to-have Features\]

\#\# Nicht-funktionale Anforderungen

\- Performance: \[z.B. Ladezeiten, Responsiveness\]

\- Kompatibilität: \[Browser, Geräte\]

\- Usability: \[z.B. ohne Einarbeitung nutzbar\]

\- Accessibility: \[WCAG-Standards\]

\#\# Explizite Ausschlüsse

\[Was das System NICHT können muss\]

Formuliere jede Anforderung als testbaren Satz.

#### B.4 IMPLEMENTATION-Phase

Erstelle INSTRUCTIONS.md basierend auf REQUIREMENTS.md und DATA.md.

Dokumentiere für jede Anforderung:

\#\# Feature: \[Name\]

\#\#\# Datentransformation

\- Input: \[Rohdatenformat\]

\- Transformationsschritte: \[Präzise Algorithmen\]

\- Output: \[Zielformat\]

\- Edge Cases: \[Sonderfälle und deren Behandlung\]

\#\#\# Validierungen

\- \[Welche Prüfungen vor Verarbeitung\]

\- \[Fehlerbehandlung\]

\#\#\# UI/UX-Spezifikation

\- \[Interaktionsmuster\]

\- \[Visuelles Verhalten\]

\- \[Responsive Design Breakpoints\]

\#\#\# Code-Struktur

\- \[Empfohlene Komponenten/Module\]

\- \[State Management Ansatz\]

\- \[Wichtige Funktionen mit Signaturen\]

WICHTIG: Dokumentiere ALLE Stellen, wo Datentypen 

variieren können (Array vs. Einzelwert etc.)

#### B.5 PROTOTYPE-Phase

Generiere eine vollständige, lauffähige Implementierung basierend auf:

\- INSTRUCTIONS.md (primäre Spezifikation)

\- REQUIREMENTS.md (für Prioritäten)

\- DATA.md (für Datenstrukturen)

Technische Vorgaben:

\- Single HTML File mit inline CSS/JS

\- Keine externen Dependencies außer CDN-verfügbare

\- Responsive Design (Mobile-first)

\- Kommentierter Code an kritischen Stellen

Der Code muss:

1\. Alle MUSS-Anforderungen erfüllen

2\. Die dokumentierten Datentransformationen implementieren

3\. Robuste Fehlerbehandlung haben

4\. Die spezifizierten Validierungen durchführen

Beginne mit einem funktionsfähigen Minimal-Prototyp und erweitere 

schrittweise.

### Anhang C: Empfohlene Projektstruktur

Die standardisierte Verzeichnisstruktur unterstützt Navigation und Wartbarkeit:

project/

├── README.md           \# CONTEXT \- Projektziele und Rahmen

├── DATA.md            \# Datenspezifikation und Struktur

├── REQUIREMENTS.md    \# Formale Anforderungen

├── INSTRUCTIONS.md    \# Implementierungsanweisungen

├── JOURNAL.md         \# Fortlaufendes Entwicklungsprotokoll

├── data/              \# Rohdaten

│   └── sample.json    \# Beispieldaten

├── exploration/       \# Experimentelle Prototypen

│   └── test-01.html  \# Erste Versuche

├── prototype/         \# Finaler Code

│   └── index.html    \# Lauffähige Implementierung

└── .git/             \# Versionskontrolle

## **Literatur**

Anthropic. (2024). Constitutional AI and Character Training. Technical Report. Anthropic.

Becker, J., Rush, N., Barnes, E., & Rein, D. (2025). Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity. Preprint, arXiv.

Boehm, B. (1988). A Spiral Model of Software Development and Enhancement. Computer, 21(5), 61-72.

Chen, M., et al. (2021). Evaluating Large Language Models Trained on Code. arXiv:2107.03374.

Dingemanse, M. (2024). Generative AI and Research Integrity. OSF Preprint.

Dotson, K. (2011). Tracking Epistemic Violence, Tracking Practices of Silencing. Hypatia, 26(2), 236-257.

Drucker, J. (2009). SpecLab: Digital Aesthetics and Projects in Speculative Computing. University of Chicago Press.

Fricker, M. (2007). Epistemic Injustice: Power and the Ethics of Knowing. Oxford University Press.

Hevner, A. R., March, S. T., Park, J., & Ram, S. (2004). Design Science in Information Systems Research. MIS Quarterly, 28(1), 75-105.

Kahneman, D. (2011). Thinking, Fast and Slow. Farrar, Straus and Giroux.

Karpathy, A. (2025). Vibe Coding. Blog Post, 3\. Februar 2025\. [https://karpathy.ai/blog/vibe-coding](https://karpathy.ai/blog/vibe-coding)

Lindsey, J., et al. (2025). On the Biology of a Large Language Model. Transformer Circuits.

Malmqvist, L. (2024). Sycophancy in Large Language Models: Causes and Mitigations. Preprint, arXiv.

Medina, J. (2013). The Epistemology of Resistance. Oxford University Press.

Mollick, E. (2024). Co-Intelligence: Living and Working with AI.

Nonaka, I., & Takeuchi, H. (1995). The Knowledge-Creating Company. Oxford University Press.

OpenAI. (2022-2023). Technical Reports on Model Alignment. OpenAI.

Peng, S., et al. (2023). The Impact of AI on Developer Productivity: Evidence from GitHub Copilot. Microsoft Research.

Polanyi, M. (1966). The Tacit Dimension. University of Chicago Press.

Ramsay, S. (2011). Reading Machines: Toward an Algorithmic Criticism. University of Illinois Press.

Schön, D. A. (1983). The Reflective Practitioner: How Professionals Think in Action. Basic Books.

Star, S. L., & Griesemer, J. R. (1989). Institutional Ecology, 'Translations' and Boundary Objects. Social Studies of Science, 19(3), 387-420.

tante. (2024). On "Vibe Coding". Smashing Frames. [https://smashingframes.com/vibe-coding](https://smashingframes.com/vibe-coding)

Zhou, Y., et al. (2023). Large Language Models Are Human-Level Prompt Engineers. arXiv:2211.01910.  


[^1]:  [https://en.wikipedia.org/wiki/What\_Is\_It\_Like\_to\_Be\_a\_Bat%3F](https://en.wikipedia.org/wiki/What_Is_It_Like_to_Be_a_Bat%3F)