# Promptotyping Vault Template

Dieses Template enthält die Grundstruktur für einen Promptotyping Vault.

## Struktur

```
vault/
├── DATA.md          # Struktur und Semantik deiner Forschungsdaten
├── REQUIREMENTS.md  # User Stories und Anforderungen
├── CONTEXT.md       # Relevantes Domänenwissen
└── JOURNAL.md       # Arbeitstagbuch (optional)
```

## Verwendung

1. **DATA.md**: Beschreibe deine Datenstruktur
   - Welche Felder/Attribute gibt es?
   - Welche Beziehungen zwischen Entitäten?
   - Beispieldaten (anonymisiert)

2. **REQUIREMENTS.md**: Definiere Anforderungen
   - User Stories im Format: "Als [Rolle] will ich [Funktion], um [Nutzen]"
   - Technische Constraints
   - Must-haves vs. Nice-to-haves

3. **CONTEXT.md**: Dokumentiere Domänenwissen
   - Fachbegriffe und Definitionen
   - Methodische Hintergründe
   - Relevante Standards/Formate

4. **JOURNAL.md**: Halte Entscheidungen fest
   - Architekturentscheidungen
   - Learnings aus Iterationen
   - Offene Fragen

## Tipps

- **Komprimiere**: Weniger Tokens = bessere LLM-Performance
- **Strukturiere**: Nutze Markdown-Überschriften und Listen
- **Aktualisiere**: Halte den Vault synchron mit dem Code
- **Validiere**: Prüfe LLM-Outputs kritisch

## Mehr erfahren

- [Promptotyping Explainer](https://dhcraft.org/PromptotypingExplainer)
- [GitHub Repository](https://github.com/DigitalHumanitiesCraft/PromptotypingExplainer)

---
Erstellt mit Promptotyping | DHCraft 2025
