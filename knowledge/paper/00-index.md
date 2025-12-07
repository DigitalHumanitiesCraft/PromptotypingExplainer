# Promptotyping: Methodik und Praxis LLM-gestützter Werkzeugentwicklung

> **Pollin, C. & Steiner, C. (2025). Digital Humanities Craft.**

---

## Abstract

Dieses Paper stellt *Promptotyping* als strukturierte Methodik für die LLM-gestützte Entwicklung von Forschungsworkflows und -werkzeugen in den Digital Humanities vor. Es adressiert die Spannbreite zwischen informellem, promptbasiertem Prototyping und ausgeprägter Technologieskepsis. Auf Basis von sieben Fallstudien über fünf Monate und Workshops mit 24 Teilnehmenden präsentieren wir ein praxisbasiertes Framework, das:

1. Eine heuristische Arbeitsdefinition von LLM-Funktionalität bereitstellt („System 1.42")
2. Ein sechsphasiges Prozessmodell (CONTEXT → DATA → EXPLORATION → REQUIREMENTS → IMPLEMENTATION → PROTOTYPE) beschreibt
3. Einen Critical-Expert-in-the-Loop-Ansatz zur Reduktion zustimmungsorientierter Antwortverzerrungen (Sycophancy) etabliert

---

## Dokumentenstruktur

| Kapitel | Datei | Inhalt |
|---------|-------|--------|
| 1 | [01-introduction.md](01-introduction.md) | Einleitung, epistemologische Herausforderung, Forschungsfragen |
| 2 | [02-theoretical-foundation.md](02-theoretical-foundation.md) | System 1.42, Co-Intelligence, wissenstheoretische Verankerung |
| 3 | [03-methodology.md](03-methodology.md) | Das sechsphasige Entwicklungsmodell, Critical Expert in the Loop |
| 4 | [04-scholar-centered-design.md](04-scholar-centered-design.md) | UCD/SCD-Synthese, Knowledge Acquisition Methoden |
| 5 | [05-empirical-evidence.md](05-empirical-evidence.md) | Fallstudien, Workshop-Validierung, Vibe-Check Framework |
| 6 | [06-critical-reflection.md](06-critical-reflection.md) | Blinde Flecken, epistemische Gerechtigkeit, ökonomische Realitäten |
| 7 | [07-references.md](07-references.md) | Vollständiges Literaturverzeichnis |
| A | [appendix-a-templates.md](appendix-a-templates.md) | Journal-Template, Projektstruktur |
| B | [appendix-b-prompts.md](appendix-b-prompts.md) | Beispiel-Prompts für jede Phase |

---

## Kernkonzepte (Schnellreferenz)

### Definition

> **Promptotyping** ist eine Context-Engineering-Methode für die schnelle, forschungsdatengetriebene Erstellung von Prototypen für Forschungstools, Workflows und Modelle mittels Frontier-LLMs.

### Das sechsphasige Modell

```
┌─────────────────────────────────────────────────────────────────┐
│  CONTEXT   →   DATA   →   EXPLORATION   →   REQUIREMENTS       │
│     ↑                                            ↓              │
│     └──────────── Rückschleifen ←───────────────┘              │
│                                                  ↓              │
│                              IMPLEMENTATION  →  PROTOTYPE       │
└─────────────────────────────────────────────────────────────────┘
```

### System 1.42

Charakterisierung von LLMs als Systeme zwischen Kahnemans System 1 (intuitiv) und System 2 (analytisch) – sie generieren oft korrekte Outputs, ohne dass ihre internen Problemformulierungen transparent wären.

### Critical Expert in the Loop

Der Mensch als kritischer Validator, der aktiv Sycophancy und Konfabulationen erkennt und korrigiert. Domänenwissen ist essentiell für die Qualitätssicherung.

---

## Zitierweise

```bibtex
@article{pollin2025promptotyping,
  title={Promptotyping: Methodik und Praxis LLM-gestützter Werkzeugentwicklung in den Digital Humanities},
  author={Pollin, Christopher and Steiner, Christian},
  journal={Digital Humanities Craft},
  year={2025}
}
```

---

## Versionshistorie

| Version | Datum | Änderungen |
|---------|-------|------------|
| 0.1 | 2025-12 | Initiale Strukturierung aus paper-draft.md |

---

*Weiter zu: [01-introduction.md](01-introduction.md)*
