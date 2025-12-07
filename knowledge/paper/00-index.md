# Promptotyping: Methodik und Praxis LLM-gestützter Werkzeugentwicklung

> **Pollin, C. & Steiner, C. (2025). Digital Humanities Craft.**

---

## Abstract

Dieses Paper stellt *Promptotyping* als strukturierte Methodik für die LLM-gestützte Entwicklung von Forschungsworkflows und -werkzeugen in den Digital Humanities vor. Es adressiert die Spannbreite zwischen informellem, promptbasiertem Prototyping und ausgeprägter Technologieskepsis. Auf Basis von sieben Fallstudien über fünf Monate und Workshops mit 24 Teilnehmenden präsentieren wir ein praxisbasiertes Framework, das:

1. Das Mapping von Forschungsdaten auf funktionale Interfaces durch iterative Mensch-LLM-Kollaboration ermöglicht
2. Ein vierphasiges Prozessmodell (Vorbereitung → Exploration → Destillation → Implementation) beschreibt
3. Einen Critical-Expert-in-the-Loop-Ansatz zur Qualitätssicherung durch Domänenwissen etabliert

---

## Dokumentenstruktur

| Kapitel | Datei | Inhalt |
|---------|-------|--------|
| 1 | [01-introduction.md](01-introduction.md) | Einleitung, epistemologische Herausforderung, Forschungsfragen |
| 2 | [02-theoretical-foundation.md](02-theoretical-foundation.md) | Theoretische Grundlagen, Co-Intelligence, wissenstheoretische Verankerung |
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

### System 1.42 (optionales Konzept)

Eine heuristische Charakterisierung von LLMs als Systeme zwischen Kahnemans System 1 (intuitiv) und System 2 (analytisch). Dieses Konzept dient der Orientierung, ist aber keine validierte Theorie. Die praktische Wirksamkeit von Promptotyping resultiert primär aus der strukturierten Vorgehensweise, nicht aus dieser theoretischen Rahmung.

Vertiefung: [System 1.42: Wie (Frontier-)LLMs "tatsächlich" funktionieren](https://dhcraft.org/excellence/blog/System1-42/) (Pollin, 2025)

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
