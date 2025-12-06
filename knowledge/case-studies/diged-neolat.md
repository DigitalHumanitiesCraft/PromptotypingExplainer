# Use Case: Lucina Digital Edition (diged-neolat)

## Kontext

Madrid BN Mss. 6028 mit neulateinischen Gedichten aus 1474 als wissenschaftliche digitale Edition. TEI P5-konforme Edition mit Text-Bild-Synchronisation. Prosopographische Datenbank identifiziert historische Personen und Orte. Multi-LLM-Ansatz für prosopographische Extraktion und metrische Analyse.

- Stand: 5. Promptotyping Iteration
- Zeitinvestition: 25 h
- Umfang: 128 Gedichte, 2.224 Verse
- Repository: github.com/chpollin/diged-neolat
- Demo: chpollin.github.io/diged-neolat/edition-5/web/

## LLMs und Tools

- Claude Opus 4.1 mit und ohne Claude Code
- Gemini 2.5 Pro (großer Context)
- GPT-5 (Korrekturen)

## Notizen zum Prozess

- Mehrere Promptotyping Iterationen (edition-2 bis edition-5)
- 2 Meetings mit Domänenexpertin
- Multi-LLM-Workflow und LLM as a Judge
- Metrische Analyse ohne Expertenwissen auf Basis Deep Research
- TEI-Validierung in Oxygen Editor

## Promptotyping Documents

- editorial-guidelines-tei-mapping.md - TEI-Mapping
- promptotyping-journal.md - Prozess-Dokumentation
- data.md - mehrere pro Iteration
- requirements.md - mehrere pro Iteration
- DESIGN.md - UI-Spezifikation
