# Use Case: CVMA Stained Glass Annotation Tool

## Kontext

Wissenschaftliches Annotations-Tool für mittelalterliche Glasfenster-Artefakte aus dem Corpus Vitrearum Medii Aevi. Integration des NFDI4Culture Knowledge Graph. Multi-Kriterien-Filterung nach Periode, Geographie, Ikonographie und Elementtypen. Sechs Annotationskategorien mit Export/Import. SPARQL-basierter Datenexport mit iterativer Query-Optimierung.

- Stand: 2. Promptotyping Iteration
- Zeitinvestition: 8 h
- Umfang: CVMA JSON-LD Datensatz (29MB)
- Repository: github.com/chpollin/stained-glass-metadata-annotation-tool
- Demo: chpollin.github.io/stained-glass-metadata-annotation-tool/docs/version-2/

## LLMs und Tools

- Claude Opus 4.1 (Claude Chat) für SPARQL-Queries
- Claude Opus 4.1 (Claude Code) für Implementation

## Notizen zum Prozess

- Zwei Versionen (version-1 und version-2)
- Claude Opus 4.1 exzellent bei SPARQL-Queries
- Iterative Query-Verfeinerung (Ethan Mollicks Co-Intelligence Konzept)
- Python-Scripts für JSON-LD Verarbeitung
- Knowledge Folder für strukturierte Dokumentation

## Promptotyping Documents

- DATA.md - JSON-LD Datenstruktur
- DESIGN.md - Annotations-Interface
- IMPLEMENTATION.md - Technische Details
- REQUIREMENTS.md - Anforderungen
