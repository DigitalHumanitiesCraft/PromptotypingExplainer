# Use Case: CorrespExplorer

## Kontext

Visualisierung von CMIF-Korrespondenzdaten (Correspondence Metadata Interchange Format) mit vier interaktiven Views: Netzwerk, Timeline, Karte und Korrespondenten-Liste. Integration von 85+ externen CMIF-Quellen ermöglicht Exploration von Briefnetzwerken des 18. und 19. Jahrhunderts. Frontend-only Architektur mit Vanilla JavaScript.

- Stand: Produktionsreif
- Zeitinvestition: 2 Nachmittage
- Umfang: 11.576 Briefe
- Repository: github.com/DigitalHumanitiesCraft/CorrespExplorer
- Demo: dhcraft.org/CorrespExplorer

## LLMs und Tools

- Claude Opus 4.0 (Claude Code)

## Notizen zum Prozess

- Erster vollständiger Promptotyping-Durchlauf mit dokumentiertem Knowledge Vault
- 12 Knowledge-Dokumente im Vault (CONTEXT-MAP als Einstiegspunkt)
- 27 User Stories implementiert
- 74+ Tests nach Real Data Only Prinzip
- Iterative Verfeinerung von CMIF-Parsing und Visualisierung

## Promptotyping Documents

- CONTEXT-MAP.md - Vault-Navigation
- architecture.md - System-Architektur
- user-stories.md - 27 Features
- testing.md - Test-Strategie
- journal.md - 27 Entwicklungsphasen
