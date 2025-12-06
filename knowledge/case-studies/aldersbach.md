# Use Case: Aldersbach Monastery Financial Dashboard

## Kontext

Interaktives Web-Dashboard zur Exploration historischer Finanztransaktionen der Zisterzienserabtei Aldersbach aus dem Jahr 1557. Verarbeitung von RDF/XML-Dateien mit mittelalterlichen Finanzdaten. Multi-Währungssystem mit historisch akkurater Konversion zwischen Florin, Schilling, Denarius und Groschen. Extraktion von Personen und Orten aus mittelhochdeutschen Transaktionsbeschreibungen.

- Stand: 1. Promptotyping Iteration
- Zeitinvestition: 8 h
- Umfang: 1000+ Transaktionen, 2.3MB primärer Datensatz
- Repository: github.com/chpollin/depcha-aldersbach
- Demo: chpollin.github.io/depcha-aldersbach

## LLMs und Tools

- Claude Opus 4.0 (Claude Chat) für Konzeption
- Claude Opus 4.0 für Implementation

## Notizen zum Prozess

- Umfassende Dokumentationsstruktur mit spezialisierten Markdown-Dokumenten
- Iterative Fehlerkorrektur dokumentiert in FIXES.md
- Test-driven Development mit dedicated testing-strategy.md
- Performance-Optimierung mit Pagination (50 Transaktionen pro Seite)

## Promptotyping Documents

- data.md - RDF/XML Schema-Dokumentation
- architecture.md - System-Architektur
- user-stories.md - Anforderungen
- testing-strategy.md - Test-Ansatz
- FIXES.md - Bugfix-Dokumentation
