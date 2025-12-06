# Vault Rules

Dokumentationsstandards für den Promptotyping Explainer Knowledge Vault.

---

## Formatierung

Nicht verwenden:
- Fettschrift zur Betonung (nur für Überschriften)
- Emojis
- Ausrufezeichen zur Betonung
- Zeitschätzungen in Stunden/Tagen
- Code-Größen-Metriken
- ASCII-Diagramme
- Ausführliche Code-Snippets

Bevorzugt:
- Klare Überschriften mit Markdown-Syntax
- Bullet Points für Listen
- Kompakte, präzise Sprache
- Neutraler Ton ohne Superlative

---

## Struktur

Jedes Dokument hat:
- Titel als H1
- Kurze Zweckbeschreibung
- Horizontale Trennlinien zwischen Sektionen
- Querverweise zu anderen Vault-Dokumenten

Hierarchie durch:
- Einrückung
- Nummerierte Listen für Sequenzen
- Beschreibende Listen für Relationen

---

## Inhalt

Beschreiben:
- Was der Code tut (nicht wie er aussieht)
- Beziehungen zwischen Komponenten
- Datenflüsse und Abhängigkeiten
- Entscheidungen mit Begründungen

Vermeiden:
- Implementierungsdetails die sich häufig ändern
- Redundanz zwischen Dokumenten
- Spekulation über zukünftige Features

---

## Code-Referenzen

Minimal halten:
- API-Signaturen: parseCMIF(source) returns Promise
- Wichtige Konstanten und Konfiguration
- Keine vollständigen Implementierungen

Verweise auf Code:
- Datei und Funktion nennen, nicht zitieren
- Beispiel: Phase.svelte enthält ScrollTrigger-Setup

---

## Sprache

- Deutsch für Fließtext
- Englische Fachbegriffe im Original (ScrollTrigger, Pinning, Scrub)
- Konsistente Terminologie innerhalb des Vaults

---

## Aktualisierung

Wann aktualisieren:
- Architektur-Änderungen
- Neue Komponenten oder Features
- Geänderte Datenflüsse
- Wichtige Entscheidungen

Nicht aktualisieren bei:
- Kleineren Bug-Fixes
- Styling-Anpassungen
- Refactoring ohne API-Änderung

---

## Zielgruppe

Diese Dokumente dienen:
- Claude für Code-Kontext bei Weiterentwicklung
- Entwicklern für Onboarding
- Dokumentation von Design-Entscheidungen

Nicht geeignet als:
- Tutorial für Endnutzer
- Marketing-Material
- Vollständige API-Dokumentation
