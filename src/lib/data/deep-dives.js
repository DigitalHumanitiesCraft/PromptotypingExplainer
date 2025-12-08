/**
 * Deep Dive Inhalte für optionale Vertiefungen
 * Diese können über das DeepDivePanel "nach links" abzweigend angezeigt werden
 */

export const deepDives = {
  'system-1-42': {
    id: 'system-1-42',
    title: 'System 1.42 – Wie LLMs funktionieren',
    content: `
      <h3>Warum "System 1.42"?</h3>
      <p>
        Der Begriff spielt auf Daniel Kahnemans Dual-Process-Theorie an: <strong>System 1</strong> (schnell, intuitiv)
        vs. <strong>System 2</strong> (langsam, analytisch). LLMs passen in keine der beiden Kategorien –
        sie sind etwas Neues: <em>halluzinierende Reasoner</em>.
      </p>
      <p>
        "1.42" symbolisiert die grundlegende <strong>Ungewissheit</strong> über diese Technologie.
        Wer mit LLMs arbeitet, muss verstehen, was sie sind – und was nicht.
      </p>

      <h3>Technische Grundlagen</h3>
      <table>
        <thead>
          <tr><th>Konzept</th><th>Erklärung</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Token</strong></td>
            <td>Atomare Einheiten der Textverarbeitung. Ein Wort, Wortfragment oder Zeichen.</td>
          </tr>
          <tr>
            <td><strong>Embedding</strong></td>
            <td>Mathematische Vektoren in hochdimensionalen Räumen. "Katze" und "Hund" liegen näher als "Katze" und "Stein".</td>
          </tr>
          <tr>
            <td><strong>Context Window</strong></td>
            <td>Das "Arbeitsgedächtnis" – moderne Modelle verarbeiten bis zu 200.000 Token gleichzeitig.</td>
          </tr>
          <tr>
            <td><strong>Attention</strong></td>
            <td>Der Mechanismus, der bestimmt, welche Token für andere relevant sind.</td>
          </tr>
        </tbody>
      </table>

      <h3>Next-Token-Prediction</h3>
      <p>
        Die Kernfunktion aller LLMs: Das Modell berechnet die <strong>Wahrscheinlichkeit des nächsten Tokens</strong>
        basierend auf allen vorherigen Token. Das ist alles. Keine "Intelligenz", keine "Absicht" –
        nur statistische Mustererkennung auf massiver Skala.
      </p>

      <h3>Training in drei Phasen</h3>
      <ol>
        <li><strong>Pre-Training:</strong> Selbstüberwachtes Lernen aus Billionen Token Internet-Text</li>
        <li><strong>Supervised Fine-Tuning:</strong> Spezialisierung durch Instruktion-Antwort-Paare</li>
        <li><strong>RLHF:</strong> Optimierung anhand menschlicher Präferenzen (Reinforcement Learning from Human Feedback)</li>
      </ol>

      <h3>Emergenz – oder Illusion?</h3>
      <p>
        Große Modelle zeigen plötzliche Fähigkeitssprünge bei kritischer Größe – sogenannte <em>emergente Eigenschaften</em>.
        Ob dies echter Emergenz entspricht oder überzeugender Simulation, bleibt wissenschaftlich offen.
      </p>

      <h3>Konsequenzen für die Praxis</h3>
      <ul>
        <li>LLMs <strong>können nicht validieren</strong>, ob ihre Antworten korrekt sind</li>
        <li><strong>Halluzinationen sind architekturisch unvermeidbar</strong>, nicht behebbar</li>
        <li><strong>Externe Verifikation</strong> durch Domänenexpert:innen ist notwendig</li>
        <li>Sie funktionieren <strong>anders als menschliches Denken</strong>, auch wenn Ergebnisse ähnlich wirken</li>
      </ul>

      <div class="reference">
        <strong>Fazit:</strong> Promptotyping basiert auf diesem Verständnis: LLMs als mächtige Werkzeuge nutzen,
        aber mit kritischem Expertenblick validieren.<br><br>
        <strong>Quelle:</strong> Pollin, C. (2025): <em>System 1.42 – Wie Frontier-LLMs funktionieren</em>. DHCraft Blog.
      </div>
    `
  },

  'scholar-centered-design': {
    id: 'scholar-centered-design',
    title: 'Scholar-Centered Design',
    content: `
      <h3>User-Centered Design (UCD) Requirements Engineering</h3>
      <p>
        UCD Requirements Engineering bezeichnet die systematische Erhebung, Dokumentation und
        Verwaltung von Anforderungen, bei der die <strong>Bedürfnisse, Fähigkeiten und
        Einschränkungen der zukünftigen Nutzer</strong> im Mittelpunkt stehen. Das Kernziel ist
        die Maximierung von Usability und User Experience. Das Leitprinzip ist die Anpassung
        der Technologie an den Menschen.
      </p>

      <h3>Scholar-Centered Design (SCD)</h3>
      <p>
        Scholar-Centered Design ist eine spezialisierte Weiterentwicklung des UCD für den
        <strong>wissenschaftlichen Kontext</strong>. Es adressiert die spezifischen Arbeitsweisen
        von Forschenden in den Digital Humanities und verwandten Feldern. Das Kernziel ist die
        Unterstützung komplexer hermeneutischer Prozesse und Erkenntnisgewinnung. Das Leitprinzip
        ist die Unterstützung von Komplexität statt reiner Vereinfachung sowie Transparenz
        der Datenherkunft.
      </p>

      <h3>Wo UCD und SCD sich unterscheiden</h3>
      <p>
        UCD reduziert kognitive Last und versteckt Komplexität. SCD macht Komplexität navigierbar,
        ohne sie zu verstecken. UCD akzeptiert Platzhalter im Prototyp. SCD braucht echte
        Forschungsdaten, weil wissenschaftliche Arbeit inhaltsgetrieben ist. UCD misst Effizienz
        und Zufriedenheit. SCD fragt, ob das Tool zu neuen Erkenntnissen führt.
      </p>

      <h3>Der hermeneutische Zirkel als Iterationsmodell</h3>
      <p>
        In der wissenschaftlichen Praxis verändert oft das erste Sichten von Ergebnissen die
        Fragestellung selbst. Der Forscher erkennt neue Muster in den Daten und muss die
        Anforderungen anpassen. Dies ist nicht Fehlerbehebung, sondern <strong>Teil des
        Erkenntnisgewinns</strong>.
      </p>
      <p>
        Der hermeneutische Zirkel beschreibt dieses Wechselspiel zwischen dem Verstehen von Teilen
        und dem Verstehen des Ganzen. Promptotyping integriert diesen Zirkel durch die
        Rückflussschleife von der Implementation zurück zur Dokumentation.
      </p>

      <div class="reference">
        <strong>Referenzen:</strong><br>
        Pollin, C. (2025): <em>Modelling, Operationalising and Exploring Historical Information. Using Historical Financial Sources as an Example</em>. Dissertation, Universität Graz.
        <a href="http://unipub.uni-graz.at/obvugrhs/12127700" target="_blank">Link</a><br>
        Kemman, M. (2021): <em>Trading Zones of Digital History</em>. De Gruyter.<br>
        Pohl, K. & Rupp, C. (2015): <em>Basiswissen Requirements Engineering</em>. dpunkt.<br>
        Warwick, C. (2012): <em>Studying Users in Digital Humanities</em>. In C. Warwick, M. Terras & J. Nyhan (Eds.), Digital Humanities in Practice. Facet Publishing.
      </div>
    `
  },

  'knowledge-acquisition': {
    id: 'knowledge-acquisition',
    title: 'Knowledge Acquisition Methoden',
    content: `
      <h3>Methoden der Wissenserhebung</h3>
      <p>
        Die systematische Erhebung von Domänenwissen ist essentiell für die CONTEXT-Phase.
        Folgende Methoden haben sich bewährt:
      </p>

      <h3>Deep Dives (Workshops)</h3>
      <p>
        Intensive Arbeitssitzungen mit Domänenexpert:innen, in denen Forschungsfragen,
        Datenstrukturen und Analysemethoden gemeinsam erarbeitet werden.
      </p>
      <ul>
        <li>Dauer: 2-4 Stunden</li>
        <li>Teilnehmende: 2-5 Expert:innen</li>
        <li>Output: Annotierte Datenbeispiele, erste User Stories</li>
      </ul>

      <h3>Expert Interviews</h3>
      <p>
        Strukturierte Interviews zur Erhebung von implizitem Wissen (Tacit Knowledge).
      </p>
      <ul>
        <li>Halbstrukturierte Leitfäden</li>
        <li>Think-Aloud-Protokolle</li>
        <li>Kontextuelle Befragung am Arbeitsplatz</li>
      </ul>

      <h3>Personas</h3>
      <p>
        Fiktive, aber datenbasierte Repräsentationen typischer Nutzer:innen.
      </p>
      <ul>
        <li><strong>Sozialhistoriker:in:</strong> Arbeitet mit Archivquellen, sucht nach Netzwerken</li>
        <li><strong>Wirtschaftshistoriker:in:</strong> Analysiert Handelsdaten, erstellt Visualisierungen</li>
        <li><strong>Literaturwissenschaftler:in:</strong> Vergleicht Textversionen, annotiert</li>
      </ul>

      <h3>User Stories & Epics</h3>
      <p>
        Formalisierte Anforderungen aus Nutzerperspektive:
      </p>
      <code style="display: block; padding: 1rem; margin: 1rem 0; background: rgba(96, 125, 139, 0.1);">
        Als [Rolle] will ich [Funktion],<br>
        um [Nutzen] zu erreichen.
      </code>
      <p>
        <strong>Beispiel:</strong> "Als Historikerin will ich Korrespondenznetzwerke visualisieren,
        um Kommunikationsmuster in Exilgemeinschaften zu rekonstruieren."
      </p>

      <div class="reference">
        <strong>Referenzen:</strong><br>
        Beyer, H. & Holtzblatt, K. (1998): <em>Contextual Design</em>. Morgan Kaufmann.<br>
        Schneider, K. & Liskin, O. (2016): <em>Personas for Requirements Engineering</em>. INRIA.
      </div>
    `
  },

  'context-engineering': {
    id: 'context-engineering',
    title: 'Context Engineering für LLMs',
    content: `
      <h3>Was ist Context Engineering?</h3>
      <p>
        Context Engineering beschreibt die systematische Gestaltung und Optimierung des Kontexts,
        der einem Large Language Model zur Verfügung gestellt wird.
      </p>

      <h3>Die drei Komponenten</h3>
      <ul>
        <li>
          <strong>Context Creation:</strong> Formalisierung impliziten Domänenwissens
          in maschinenlesbare Strukturen
        </li>
        <li>
          <strong>Context Compression:</strong> Verdichtung auf relevante Information.
          Das "Compression-als-Amplification" Paradox: Weniger Tokens → bessere Modellaufmerksamkeit
        </li>
        <li>
          <strong>Context Orchestration:</strong> Strategische Steuerung über multiple
          Iterationen mit dynamischer Anpassung
        </li>
      </ul>

      <h3>Context Rot vermeiden</h3>
      <p>
        Je mehr Tokens im Context Window, desto schlechter die Modellleistung
        (Hong et al., 2025). Destillation bedeutet: <strong>maximale Information mit minimalen Tokens</strong>.
      </p>

      <h3>Die drei Kerndokumente</h3>
      <table>
        <thead>
          <tr>
            <th>Dokument</th>
            <th>Inhalt</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>data.md</code></td>
            <td>Struktur und Semantik der Forschungsdaten</td>
          </tr>
          <tr>
            <td><code>user-story.md</code></td>
            <td>Anforderungen aus Forschungsperspektive</td>
          </tr>
          <tr>
            <td><code>context.md</code></td>
            <td>Relevantes Domänenwissen</td>
          </tr>
        </tbody>
      </table>

      <div class="reference">
        <strong>Referenzen:</strong><br>
        Hong, K. et al. (2025): <em>Context rot: How increasing input tokens impacts LLM performance</em>.<br>
        Mei et al. (2025): <em>Context Engineering</em>.
      </div>
    `
  },

  'critical-expert': {
    id: 'critical-expert',
    title: 'Critical Expert in the Loop',
    content: `
      <h3>Kritisch-epistemische Reflexion</h3>
      <p>
        Weder der <strong>Human-in-the-Loop</strong> noch der <strong>Expert-in-the-Loop</strong>-Ansatz
        sind ausreichend. Erforderlich ist eine kritisch-epistemische Reflexion: der
        <strong>Critical Expert in the Loop</strong>.
      </p>
      <p>
        Der Critical Expert vereint kritisch-epistemische <em>und</em> kritisch-technische Reflexion.
        Er weiß, welche Fragen zu stellen sind und wann einzugreifen ist.
      </p>

      <h3>Die doppelte Reflexionsschleife</h3>
      <p>
        Da LLMs ihre eigenen Ausgaben nicht verstehen, aber zur nachträglichen Verifikation
        fähig sind, erfordert der Critical Expert eine <strong>doppelte Reflexionsschleife</strong>:
      </p>
      <ul>
        <li><strong>Menschliche Prüfung:</strong> Domänenwissen, fachliche Angemessenheit</li>
        <li><strong>Maschinelle Selbstkritik:</strong> "Critical Questioning" oder "Poking" – das LLM explizit auffordern, die eigene Lösung zu hinterfragen</li>
      </ul>

      <h3>Das Sycophancy-Problem</h3>
      <p>
        LLMs neigen zur unkritischen Zustimmung (<strong>Yes-Man-Problem</strong>). Da sie
        auf Nutzerzufriedenheit trainiert wurden, belohnt das Training Gefälligkeit statt Wahrheit.
        Der Critical Expert muss aktiv gegensteuern:
      </p>
      <ul>
        <li>Annahmen explizit hinterfragen</li>
        <li>Alternative Interpretationen einfordern</li>
        <li>Epistemische Zweifel artikulieren</li>
      </ul>

      <h3>Konfabulationen erkennen</h3>
      <p>
        LLMs generieren manchmal plausible, aber falsche Outputs. Die Erkennung erfordert:
      </p>
      <ul>
        <li><strong>Domänenwissen:</strong> Nur wer das Fach kennt, erkennt Fehler</li>
        <li><strong>Methodische Erfahrung:</strong> Plausibilitätsprüfungen</li>
        <li><strong>Quellenvalidierung:</strong> Behauptungen nachprüfen</li>
      </ul>

      <h3>Keine Demokratisierung des Programmierens</h3>
      <p>
        Promptotyping ist <em>keine</em> Demokratisierung des Programmierens. Man muss wissen,
        wie Programmierung und Softwareentwicklung funktionieren – und, noch wichtiger,
        <strong>was man wirklich als Workflow, Modell oder Tool haben möchte</strong>.
        Aber ein LLM kann genau dabei helfen.
      </p>

      <h3>Beispiel: REALonline Projekt</h3>
      <p>
        Der Historiker korrigierte die technische Annahme, Objekte nach modernen Kategorien
        zu strukturieren. Seine Intervention:
      </p>
      <ul>
        <li>Historische Begriffe aus <code>nomenclature_original</code> verwenden</li>
        <li>Organisation nach Gebäuden/Räumen statt Objekttypen</li>
        <li>Räumliche Organisation als primärer Bedeutungsträger für soziale Hierarchien</li>
      </ul>

      <div class="reference">
        <strong>Referenzen:</strong><br>
        Pollin, C. (2025): <em>Promptotyping mit Claude Sonnet 4. Vibe-Coding erfordert den Critical-Expert-in-the-Loop</em>. DHCraft Blog.
        <a href="https://dhcraft.org/excellence/blog/Critical-Vibing-Claude-4/" target="_blank">Link</a><br>
        Malmqvist, L. (2024): <em>Sycophancy in Large Language Models</em>.<br>
        Anthropic (2024): <em>Character Training</em>.
      </div>
    `
  },

  'limitations': {
    id: 'limitations',
    title: 'Grenzen, Skalierung & Overhead',
    content: `
      <h3>Methodische Ehrlichkeit</h3>
      <p>
        Promptotyping ist kein Allheilmittel. Wie jede Methode hat sie einen Sweet Spot und klare Grenzen.
        Diese transparent zu machen, ist Teil des wissenschaftlichen Anspruchs.
      </p>

      <h3>1. Der Skalierungs-Schwellenwert</h3>
      <p>
        Die Methode glänzt bei fokussierten Tools und Prototypen (<strong>Sweet Spot: 1-20 Core-Files</strong>).
        Bei großen Systemen (&gt;50 Markdown-Dateien im Vault) kippt die Effizienz:
      </p>
      <ul>
        <li><strong>Koordinationsaufwand:</strong> Die Synchronisation zwischen Code und Dokumentation wird exponentiell aufwendiger.</li>
        <li><strong>Context-Limit:</strong> Auch Frontier-LLMs verlieren bei zu vielen Referenzdateien den Fokus ("Lost in the Middle").</li>
      </ul>

      <h3>2. Der "Disziplin-Overhead"</h3>
      <p>
        Der größte Feind des Promptotyping ist die menschliche Bequemlichkeit.
        Es ist verlockend, nur noch im Chat zu "fixen", ohne den Vault nachzuziehen.
      </p>
      <ul>
        <li><strong>Gefahr:</strong> Der Vault veraltet und entkoppelt sich vom tatsächlichen System (Context Rot).</li>
        <li><strong>Lösung:</strong> Der Mensch agiert nicht als Schreiber, sondern als Kurator.
        Lassen Sie das LLM die Zusammenfassung für <code>DATA.md</code> schreiben, aber <em>prüfen</em> Sie sie penibel vor dem Commit.</li>
      </ul>

      <h3>3. Die Wartungslücke</h3>
      <p>
        Ein Prototyp ist kein Produktionssystem. Promptotyping optimiert auf <em>Erkenntnisgewinn</em>,
        nicht auf langfristige Wartbarkeit oder Security-Compliance.
      </p>
      <ul>
        <li>Prototypen sind <strong>Wegwerf-Code</strong> mit Absicht</li>
        <li>Für Produktionssysteme: Traditionelle Software-Engineering-Prozesse</li>
        <li>Der Wert liegt im <em>Wissen</em>, nicht im Code</li>
      </ul>

      <h3>4. Kompetenzvoraussetzungen</h3>
      <p>
        Promptotyping erfordert eine seltene Kombination:
      </p>
      <ul>
        <li><strong>Domänenwissen:</strong> Um Konfabulationen zu erkennen</li>
        <li><strong>Technisches Grundverständnis:</strong> Um LLM-Output zu validieren</li>
        <li><strong>Methodische Reflexion:</strong> Um epistemische Risiken zu erkennen</li>
      </ul>

      <div class="reference">
        <strong>Fazit:</strong> Promptotyping ist ein Werkzeug für <em>informierte</em> Nutzung,
        nicht für blinde Delegation an KI.
      </div>
    `
  },

  'co-intelligence': {
    id: 'co-intelligence',
    title: 'Co-Intelligence: Mensch-KI-Partnerschaft',
    content: `
      <h3>Jenseits der Arbeitsteilung</h3>
      <p>
        Ethan Mollicks Konzept der <strong>Co-Intelligence</strong> (2024) beschreibt das Verhältnis
        zwischen Mensch und KI nicht als bloße Delegation, sondern als <em>epistemische Partnerschaft</em>.
      </p>

      <h3>Zwei Modi der Zusammenarbeit</h3>
      <table>
        <thead>
          <tr><th>Modus</th><th>Charakteristik</th><th>Beispiel</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Centaur-Arbeit</strong></td>
            <td>Klare Aufgabenteilung. Mensch entscheidet strategisch, KI führt operativ aus. Schnittstellen sind definiert.</td>
            <td>Mensch schreibt Anforderungen, LLM generiert Code</td>
          </tr>
          <tr>
            <td><strong>Cyborg-Arbeit</strong></td>
            <td>Enge kognitive Verschränkung. Mensch und Maschine entwickeln gemeinsam Lösungen. Die Grenze verschwimmt.</td>
            <td>Iterativer Dialog, bei dem beide Seiten die Lösung formen</td>
          </tr>
        </tbody>
      </table>

      <h3>Promptotyping als Cyborg-Arbeit</h3>
      <p>
        Die Methode operiert primär im <strong>Cyborg-Modus</strong>: Der iterative Dialog in Phase 4
        ist keine sequentielle Auftragsabarbeitung, sondern ein gemeinsamer Erkenntnisprozess.
      </p>
      <ul>
        <li>Der Mensch bringt Domänenwissen und kritische Validierung ein</li>
        <li>Das LLM bringt Mustererkennung und Codegenerierung ein</li>
        <li>Das Ergebnis entsteht <em>zwischen</em> beiden – nicht durch Addition, sondern durch Verschränkung</li>
      </ul>

      <h3>Das Sycophancy-Problem</h3>
      <p>
        Enge Verschränkung birgt Risiken: LLMs neigen zur unkritischen Bestätigung von Nutzerannahmen
        (<strong>Sycophancy</strong>). Das Training auf Nutzerzufriedenheit belohnt Gefälligkeit statt Wahrheit.
      </p>
      <p>
        <strong>Gegenmaßnahmen:</strong>
      </p>
      <ul>
        <li>Explizites Hinterfragen eigener Annahmen</li>
        <li>Alternative Interpretationen einfordern</li>
        <li>Character Training (Anthropic, 2024): Epistemische Tugenden statt bloßer Gefälligkeit</li>
      </ul>

      <div class="reference">
        <strong>Quelle:</strong> Mollick, E. (2024): <em>Co-Intelligence: Living and Working with AI</em>. Portfolio.
      </div>
    `
  },

  // === CASE STUDY DEEP DIVES ===

  'case-correspexplorer': {
    id: 'case-correspexplorer',
    title: 'Case Study: CorrespExplorer',
    content: `
      <h3>Explorationstool für Briefkorrespondenzen</h3>
      <p>
        Interaktives Visualisierungstool für Korrespondenznetzwerke basierend auf dem
        <strong>CMIF-Metadatenstandard</strong> (Correspondence Metadata Interchange Format).
      </p>

      <h3>Datengrundlage</h3>
      <ul>
        <li><strong>Format:</strong> CMIF/XML – standardisiertes Austauschformat für Briefmetadaten</li>
        <li><strong>Umfang:</strong> Variabel je nach Quelldatensatz</li>
        <li><strong>Semantik:</strong> Personen, Orte, Datierungen, Briefbeziehungen</li>
      </ul>

      <h3>Visualisierungen</h3>
      <ul>
        <li><strong>Netzwerkgraph:</strong> Korrespondenzbeziehungen als interaktives Netzwerk</li>
        <li><strong>Zeitachse:</strong> Chronologische Verteilung der Korrespondenz</li>
        <li><strong>Kartenansicht:</strong> Geographische Visualisierung von Absende- und Empfangsorten</li>
      </ul>

      <h3>Promptotyping-Prozess</h3>
      <p>
        Das Projekt diente als Basis-Case Study für die Entwicklung der Promptotyping-Methodik.
        Es demonstriert, wie ein standardisiertes Metadatenformat (CMIF) direkt in ein
        interaktives Explorationstool überführt werden kann.
      </p>

      <div class="reference">
        <strong>Links:</strong><br>
        <a href="https://dhcraft.org/CorrespExplorer" target="_blank">Live Demo</a><br>
        <a href="https://github.com/DigitalHumanitiesCraft/CorrespExplorer" target="_blank">GitHub Repository</a>
      </div>
    `
  },

  'case-lucina': {
    id: 'case-lucina',
    title: 'Case Study: Lucina Edition',
    content: `
      <h3>Digitale Edition neulateinischer Gedichte</h3>
      <p>
        Wissenschaftliche digitale Edition von Madrid BN Mss. 6028 mit neulateinischen Gedichten
        aus dem Jahr 1474. <strong>TEI P5-konforme</strong> Edition mit Text-Bild-Synchronisation.
      </p>

      <h3>Datengrundlage</h3>
      <ul>
        <li><strong>Format:</strong> TEI/XML – Text Encoding Initiative Standard</li>
        <li><strong>Umfang:</strong> 128 Gedichte, 2.224 Verse</li>
        <li><strong>Ursprung:</strong> .docx und .pdf als Datenursprung, konvertiert zu TEI</li>
      </ul>

      <h3>Features</h3>
      <ul>
        <li><strong>Text-Bild-Synchronisation:</strong> Faksimile-Ansicht mit Transkription</li>
        <li><strong>Prosopographische Datenbank:</strong> Identifikation historischer Personen und Orte</li>
        <li><strong>Metrische Analyse:</strong> Elegische Distichen, Sapphische Strophen, Hendekasyllaben</li>
        <li><strong>Kritischer Apparat:</strong> Fußnoten und Varianten</li>
      </ul>

      <h3>Promptotyping-Prozess</h3>
      <table>
        <thead><tr><th>Aspekt</th><th>Details</th></tr></thead>
        <tbody>
          <tr><td><strong>Iterationen</strong></td><td>5 Promptotyping Iterationen (edition-2 bis edition-5)</td></tr>
          <tr><td><strong>Zeitaufwand</strong></td><td>~25 Stunden</td></tr>
          <tr><td><strong>LLMs</strong></td><td>Claude Opus 4.1, Gemini 2.5 Pro, GPT-5</td></tr>
          <tr><td><strong>Besonderheit</strong></td><td>Multi-LLM-Workflow mit LLM as a Judge</td></tr>
        </tbody>
      </table>
      <p>
        Metrische Analyse ohne Expertenwissen umgesetzt auf Basis einer Deep Research Ausarbeitung.
        2 Meetings mit Domänenexpertin und Einarbeitung von Expertinnen-Feedback.
      </p>

      <div class="reference">
        <strong>Links:</strong><br>
        <a href="https://chpollin.github.io/diged-neolat/edition-5/web/" target="_blank">Live Demo (Edition 5)</a><br>
        <a href="https://github.com/chpollin/diged-neolat" target="_blank">GitHub Repository</a><br>
        <a href="https://youtu.be/0DtX0pLv4TA" target="_blank">Video: TEI-Edition aus Word in 60 Minuten</a>
      </div>
    `
  },

  'case-kriminalmuseum': {
    id: 'case-kriminalmuseum',
    title: 'Case Study: Kriminalmuseum',
    content: `
      <h3>Digitales Archiv der kriminalistischen Sammlung</h3>
      <p>
        Sammlungsexplorer für das Hans Gross Kriminalmuseum Graz mit historischen Fallakten
        und Beweisobjekten aus der Frühzeit der wissenschaftlichen Kriminologie.
      </p>

      <h3>Datengrundlage</h3>
      <ul>
        <li><strong>Format:</strong> TEI + LIDO/XML</li>
        <li><strong>Umfang:</strong> 3.892 Objekte (1.657 Karteikarten + 2.235 Objekte)</li>
        <li><strong>Semantik:</strong> TEI-kodierte Fallkarten + LIDO-kodierte Objektmetadaten</li>
      </ul>

      <h3>Interface-Paradigmen</h3>
      <ul>
        <li><strong>Traditionelle Suche:</strong> Facettierte Suche und Filterung</li>
        <li><strong>Räumliche Exploration:</strong> Canvas-basierte 2D-Visualisierung</li>
        <li><strong>Layout-Algorithmen:</strong> Verschiedene Anordnungsoptionen für intuitive Navigation</li>
        <li><strong>Spatial Search:</strong> QuadTree-Optimierung für performante Exploration</li>
      </ul>

      <h3>Promptotyping-Prozess</h3>
      <table>
        <thead><tr><th>Aspekt</th><th>Details</th></tr></thead>
        <tbody>
          <tr><td><strong>Iterationen</strong></td><td>2 Promptotyping Iterationen im Abstand von 2 Monaten</td></tr>
          <tr><td><strong>Zeitaufwand</strong></td><td>~10 Stunden (8h + 2h)</td></tr>
          <tr><td><strong>LLMs</strong></td><td>Claude Opus 4.0 (ohne Claude Code), Claude Sonnet 4.5 (Claude Code)</td></tr>
          <tr><td><strong>Besonderheit</strong></td><td>Mehr Vibe Coding als Promptotyping; experimentelle Interfaces</td></tr>
        </tbody>
      </table>

      <div class="reference">
        <strong>Links:</strong><br>
        <a href="https://chpollin.github.io/km/index.html" target="_blank">Live Demo</a><br>
        <a href="https://github.com/chpollin/km" target="_blank">GitHub Repository</a>
      </div>
    `
  },

  'case-cvma': {
    id: 'case-cvma',
    title: 'Case Study: CVMA Glasmalerei',
    content: `
      <h3>Annotations-Tool für mittelalterliche Glasmalerei</h3>
      <p>
        Wissenschaftliches Annotations-Tool für Glasfenster-Artefakte aus dem
        <strong>Corpus Vitrearum Medii Aevi</strong> (CVMA) mit Integration des NFDI4Culture Knowledge Graph.
      </p>

      <h3>Datengrundlage</h3>
      <ul>
        <li><strong>Format:</strong> JSON-LD/SPARQL</li>
        <li><strong>Quelle:</strong> CVMA Datensatz via NFDI4Culture Knowledge Graph</li>
        <li><strong>Umfang:</strong> 29MB CVMA Datensatz</li>
        <li><strong>Semantik:</strong> Kontrolliertes Vokabular für ikonographische Subjekte</li>
      </ul>

      <h3>Features</h3>
      <ul>
        <li><strong>Multi-Kriterien-Filterung:</strong> Periode, Geographie, Ikonographie, Elementtypen</li>
        <li><strong>6 Annotationskategorien:</strong> Wissenschaftliche Klassifikation</li>
        <li><strong>Export/Import:</strong> Für wissenschaftliche Auswertungen</li>
        <li><strong>SPARQL-Integration:</strong> Direkte Abfragen aus dem Knowledge Graph</li>
      </ul>

      <h3>Promptotyping-Prozess</h3>
      <table>
        <thead><tr><th>Aspekt</th><th>Details</th></tr></thead>
        <tbody>
          <tr><td><strong>Iterationen</strong></td><td>2 Promptotyping Iterationen (version-1, version-2)</td></tr>
          <tr><td><strong>Zeitaufwand</strong></td><td>~8 Stunden</td></tr>
          <tr><td><strong>LLMs</strong></td><td>Claude Opus 4.1 (Chat + Claude Code)</td></tr>
          <tr><td><strong>Besonderheit</strong></td><td>Claude performte exzellent mit SPARQL-Queries</td></tr>
        </tbody>
      </table>
      <p>
        <strong>Co-Intelligence Beispiel:</strong> Iterative SPARQL-Query-Verfeinerung basierend auf
        Claude's Output demonstriert Ethan Mollicks Co-Intelligence Konzept.
      </p>

      <div class="reference">
        <strong>Links:</strong><br>
        <a href="https://chpollin.github.io/stained-glass-metadata-annotation-tool/docs/version-2/" target="_blank">Live Demo</a><br>
        <a href="https://github.com/chpollin/stained-glass-metadata-annotation-tool" target="_blank">GitHub Repository</a><br>
        <a href="https://docs.google.com/presentation/d/1wjVx-yLqZXBjw1me-Ap1q6agE_Vj0Te_5CFN3PmW0kk/edit?usp=sharing" target="_blank">Slides</a>
      </div>
    `
  },

  'case-aldersbach': {
    id: 'case-aldersbach',
    title: 'Case Study: Aldersbach',
    content: `
      <h3>Dashboard für historische Finanztransaktionen</h3>
      <p>
        Interaktives Web-Dashboard zur Exploration historischer Finanztransaktionen der
        <strong>Zisterzienserabtei Aldersbach</strong> aus dem Jahr 1557.
      </p>

      <h3>Datengrundlage</h3>
      <ul>
        <li><strong>Format:</strong> RDF/XML + Bookkeeping-Ontologie</li>
        <li><strong>Umfang:</strong> 1000+ Transaktionen, 2.3MB primärer Datensatz</li>
        <li><strong>Semantik:</strong> Mittelalterliche Finanztransaktionen, Personen, Orte</li>
      </ul>

      <h3>Features</h3>
      <ul>
        <li><strong>Multi-Währungssystem:</strong> Florin (f), Schilling (s), Denarius (d), Groschen (gr)</li>
        <li><strong>Historische Konversion:</strong> Approximative Währungsumrechnung</li>
        <li><strong>NER-Extraktion:</strong> Personen und Orte aus mittelhochdeutschen Texten</li>
        <li><strong>Kategorisierung:</strong> Einnahmen/Ausgaben mit Fokus auf Getreidehandel</li>
        <li><strong>Pagination:</strong> Performance-Optimierung (50 Transaktionen pro Seite)</li>
      </ul>

      <h3>Promptotyping-Prozess</h3>
      <table>
        <thead><tr><th>Aspekt</th><th>Details</th></tr></thead>
        <tbody>
          <tr><td><strong>Iterationen</strong></td><td>1 Promptotyping Iteration</td></tr>
          <tr><td><strong>Zeitaufwand</strong></td><td>~8 Stunden</td></tr>
          <tr><td><strong>LLMs</strong></td><td>Claude Opus 4.0 (Chat + Implementation)</td></tr>
          <tr><td><strong>Architektur</strong></td><td>Frontend-only mit Vanilla JavaScript</td></tr>
        </tbody>
      </table>
      <p>
        <strong>Besonderheit:</strong> Umfassende Dokumentationsstruktur mit FIXES.md für
        systematische Fehlerkorrektur und testing-strategy.md für Test-driven Development.
      </p>

      <div class="reference">
        <strong>Links:</strong><br>
        <a href="https://chpollin.github.io/depcha-aldersbach" target="_blank">Live Demo</a><br>
        <a href="https://github.com/chpollin/depcha-aldersbach" target="_blank">GitHub Repository</a>
      </div>
    `
  },

  'llm-retrieval': {
    id: 'llm-retrieval',
    title: 'LLMs als Retrieval-Systeme',
    content: `
      <h3>Warum "Reasoning" in Anführungszeichen?</h3>
      <p>
        Der Begriff "Reasoning" suggeriert logisches Denken und analytische Problemlösung.
        Führende KI-Forscher betonen jedoch, dass LLMs fundamental anders arbeiten als
        menschliches Denken. Sie <strong>rufen ab, was sie trainiert haben</strong> –
        in approximativer, nicht exakter Form.
      </p>

      <h3>François Chollet (Google DeepMind)</h3>
      <blockquote style="border-left: 3px solid var(--color-terracotta); padding-left: 1rem; margin: 1rem 0; font-style: italic;">
        "It is my professional opinion that LLMs are not reasoning engines, and that
        chain-of-thought does not change this picture."
      </blockquote>
      <p>
        Chollet charakterisiert LLMs als <strong>"vector programs"</strong>, die Lösungen
        interpolieren. Auch Chain-of-Thought produziert nur Folgen von
        abgerufenen Mustern, keine genuine Analyse.
      </p>

      <h3>Sepp Hochreiter (LSTM-Erfinder)</h3>
      <blockquote style="border-left: 3px solid var(--color-terracotta); padding-left: 1rem; margin: 1rem 0; font-style: italic;">
        "Alles, was eine Datenbanktechnologie kann, das kann ein LLM auch, denn es ist eine Datenbank."
      </blockquote>
      <p>
        Hochreiter sieht LLMs als <strong>approximative Datenbanken</strong>, bei denen
        Wissen eingebrannt ist. Die Stärke liegt im Retrieval aus riesigen Korpora,
        nicht im Schlussfolgern.
      </p>

      <h3>Subbarao Kambhampati (Arizona State University)</h3>
      <blockquote style="border-left: 3px solid var(--color-terracotta); padding-left: 1rem; margin: 1rem 0; font-style: italic;">
        "What LLMs do is approximate retrieval – not reasoning. [...] LLMs are
        universal approximate knowledge retrievers."
      </blockquote>
      <p>
        Kambhampati betont den Unterschied zwischen tatsächlichem Schlussfolgern und
        dem, was LLMs tun: Sie liefern eine <strong>approximierte Version von etwas
        bereits Gelerntem</strong>.
      </p>

      <h3>Der Latent Space als Abrufraum</h3>
      <p>
        LLMs "denken" nicht in Wörtern, sondern in Koordinaten eines hochdimensionalen
        <strong>Latent Space</strong>. Dieser abstrakte Vektorraum enthält das während des
        Trainings komprimierte Weltwissen. Semantisch ähnliche Konzepte liegen räumlich
        nahe beieinander.
      </p>
      <p>
        Wenn ein LLM "antwortet", navigiert es durch diesen Raum und interpoliert zwischen
        gelernten Mustern. Es führt <strong>Vektorarithmetik mit Bedeutungen</strong> durch,
        nicht logisches Schließen. Das erklärt sowohl die beeindruckenden Analogiefähigkeiten
        als auch die systematischen Fehler bei neuartigen Problemen.
      </p>

      <h3>Konsequenzen für Promptotyping</h3>
      <ul>
        <li><strong>Vault als Retrieval-Grundlage:</strong> Je präziser die Dokumente, desto besser der Abruf</li>
        <li><strong>Gezielte Auswahl:</strong> Nicht alles mitgeben, sondern relevante Teile selektieren</li>
        <li><strong>Expert Validation:</strong> Approximative Antworten erfordern kritische Prüfung</li>
        <li><strong>Iteration:</strong> Schrittweises Verfeinern des Kontexts für besseren Abruf</li>
      </ul>

      <div class="reference">
        <strong>Referenzen:</strong><br>
        Chollet, F. (2024): <em>On Chain of Thought and LLM Reasoning</em>. X/Twitter.<br>
        Hochreiter, S. (2024): <em>Interview zur KI-Forschung</em>.<br>
        Kambhampati, S. (2024): <em>Can LLMs Really Reason?</em>. Lecture Series.<br>
        Liu, Z. et al. (2023): <em>Physics of Language Models: Part 1, Context-Free Grammar</em>. arXiv.
      </div>
    `
  },

  'vibe-coding-critique': {
    id: 'vibe-coding-critique',
    title: 'Vibe Coding – Kritik und Kontext',
    content: `
      <p>
        Andrej Karpathy prägte den Begriff im Februar 2025. Er beschreibt Code-Generierung durch
        natürlichsprachliche Anweisungen, bei der Entwickler den Output akzeptieren, ohne den
        generierten Code zu prüfen.
      </p>

      <blockquote style="border-left: 3px solid var(--color-terracotta); padding-left: 1rem; margin: 1rem 0; font-style: italic;">
        "There's a new kind of coding I call 'vibe coding', where you fully give in to the vibes,
        embrace exponentials, and forget that the code even exists."
        <br><small>– Andrej Karpathy, Februar 2025</small>
      </blockquote>

      <p>
        Jürgen Geuter (tante, 2025) argumentiert, dass Vibe Coding fundamentale Aspekte der
        Softwareentwicklung ignoriert. Anforderungsanalyse setzt voraus, dass Verständnis erst
        durch die Arbeit am Code entsteht. Architekturentscheidungen erfordern Domänenwissen.
        Und Vibe Coding nimmt den Raum für Kompetenzentwicklung. Output ohne Verständnis
        verhindert Lernen.
      </p>

      <p>
        Vibe Coding funktioniert für schnelle Prototypen, bekannte Domains wie CRUD-Apps und
        explorative Phasen, in denen Ideen getestet werden. Es scheitert bei Forschungswerkzeugen
        mit domänenspezifischen Anforderungen, bei langlebigen Systemen, in denen technische
        Schulden akkumulieren, und bei sicherheitskritischen Anwendungen, in denen unverstandener
        Code riskant ist.
      </p>

      <p>
        Promptotyping gibt Vibe Coding Struktur. Die intuitive, explorative Arbeitsweise bleibt
        erhalten, ergänzt durch systematische Dokumentation im Vault, kritische fachliche Prüfung
        durch den Critical Expert in the Loop und explizites Domänenwissen durch Context Engineering.
      </p>

      <div class="reference">
        <strong>Referenzen:</strong><br>
        Karpathy, A. [@karpathy]. (2025, 2. Februar). <em>There's a new kind of coding I call "vibe coding"</em> [Tweet]. X.
        <a href="https://x.com/karpathy/status/1886192184808149383" target="_blank">Link</a><br>
        tante (2025). <em>On "Vibe Coding"</em>. Smashing Frames Blog.
        <a href="https://tante.cc/2025/05/23/on-vibe-coding/" target="_blank">Link</a><br>
        Pollin, C. (2025). <em>Haters gonna hate: Warum die Kritik an Vibe Coding berechtigt ist</em>. DHCraft Blog.
        <a href="https://dhcraft.org/excellence/blog/Vibe-Coding/" target="_blank">Link</a>
      </div>
    `
  },

  'case-szd': {
    id: 'case-szd',
    title: 'Case Study: SZD Annotation',
    content: `
      <h3>Der Ursprung: Critical Vibing</h3>
      <p>
        Dieses Projekt markiert den <strong>Beginn der Promptotyping-Methodik</strong>.
        In nur 2 Stunden entstand ein funktionsfähiges Timeline-Annotationstool für
        <strong>Stefan Zweig Digital</strong> – ein Experiment, das zeigte, was möglich ist.
      </p>

      <h3>Critical Expert in the Loop</h3>
      <p>
        Der Blogpost dokumentiert die zentrale Erkenntnis: Weder Human-in-the-Loop noch
        Expert-in-the-Loop reichen aus. Erforderlich ist ein <strong>Critical-Expert-in-the-Loop</strong>,
        der sowohl kritisch-epistemische als auch kritisch-technische Reflexion vereint.
      </p>
      <blockquote style="border-left: 3px solid var(--color-terracotta); padding-left: 1rem; margin: 1rem 0; font-style: italic;">
        "Als Critical-Expert-and-Developer-in-the-Loop praktizierte ich eine Art strukturiertes
        Vibe Coding als experimentelle Form des Promptotyping. Ich wusste genau, welche Fragen
        zu stellen und wann einzugreifen war."
      </blockquote>

      <h3>Datengrundlage</h3>
      <ul>
        <li><strong>Format:</strong> XML/GAMS (Geisteswissenschaftliches Asset Management System)</li>
        <li><strong>Quelle:</strong> Korrespondenzdaten aus Stefan Zweig Digital</li>
        <li><strong>Semantik:</strong> Titel, Datum, Ersteller, Mitwirkende</li>
      </ul>

      <h3>Features</h3>
      <ul>
        <li><strong>Timeline-Visualisierung:</strong> Chronologische Darstellung der Korrespondenzen</li>
        <li><strong>Annotation:</strong> Forschungsstatus, Tags und Notizen</li>
        <li><strong>LocalStorage:</strong> Browserbasierte Datenhaltung</li>
        <li><strong>Export/Import:</strong> JSON für individuelle Forschungsarbeit</li>
      </ul>

      <h3>Promptotyping-Prozess</h3>
      <table>
        <thead><tr><th>Aspekt</th><th>Details</th></tr></thead>
        <tbody>
          <tr><td><strong>Iterationen</strong></td><td>1 Promptotyping Iteration (experimentell)</td></tr>
          <tr><td><strong>Zeitaufwand</strong></td><td>~2 Stunden</td></tr>
          <tr><td><strong>LLMs</strong></td><td>Claude 4 Sonnet</td></tr>
          <tr><td><strong>Ansatz</strong></td><td>"Critical Vibing" – strukturiertes Vibe Coding</td></tr>
        </tbody>
      </table>

      <h3>Warum kein "echtes" Promptotyping?</h3>
      <p>
        Keine separaten Promptotyping Documents (DATA.md, REQUIREMENTS.md) erstellt.
        Stattdessen: Ein strukturierter Prompt mit XML-Beispieldaten und ein Screenshot
        der Original-Website als Design-Referenz.
      </p>
      <p>
        <strong>Erkenntnis:</strong> Präzises technisches Grundverständnis (Begriffe wie "fetchen",
        "Single Page Application") lenkt das LLM effektiv in die richtige Richtung.
        Solche begrifflichen Nuancen bestimmen die Architektur der generierten Lösung.
      </p>

      <div class="reference">
        <strong>Links:</strong><br>
        <a href="https://dhcraft.org/excellence/promptotyping/szd-annotation-timeline/" target="_blank">Live Demo</a><br>
        <a href="https://github.com/DigitalHumanitiesCraft/excellence/tree/main/promptotyping/szd-annotation-timeline" target="_blank">GitHub Repository</a><br>
        <a href="https://dhcraft.org/excellence/blog/Critical-Vibing-Claude-4/" target="_blank"><strong>Blogartikel: Critical Vibing mit Claude 4</strong></a>
      </div>
    `
  }
};

export default deepDives;
