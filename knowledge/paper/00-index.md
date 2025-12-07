# Promptotyping: Methodik und Praxis LLM-gestützter Werkzeugentwicklung

Pollin, C. & Steiner, C. (2025). Digital Humanities Craft.

---

## Abstract

Dieses Paper stellt Promptotyping als strukturierte Methodik für die LLM-gestützte Entwicklung von Forschungsworkflows und -werkzeugen in den Digital Humanities vor. Auf Basis von sieben Fallstudien über fünf Monate und Workshops mit 24 Teilnehmenden präsentieren wir ein praxisbasiertes Framework, das:

1. Das Mapping von Forschungsdaten auf Interfaces von Forschungstools durch iterative Mensch-LLM-Kollaboration ermöglicht
2. Ein vierphasiges Prozessmodell (Vorbereitung → Exploration → Destillation → Implementation) beschreibt
3. Einen Critical-Expert-in-the-Loop-Ansatz zur Qualitätssicherung durch Domänenwissen etabliert

---

## Dokumentenstruktur

- 1: [01-introduction.md](01-introduction.md) – Einleitung, Problemstellung, Forschungsfragen
- 2: [02-theoretical-foundation.md](02-theoretical-foundation.md) – Theoretische Grundlagen, Co-Intelligence
- 3: [03-methodology.md](03-methodology.md) – Das vierphasige Entwicklungsmodell, Critical Expert in the Loop
- 4: [04-scholar-centered-design.md](04-scholar-centered-design.md) – UCD/SCD-Synthese, Knowledge Acquisition Methoden
- 5: [05-empirical-evidence.md](05-empirical-evidence.md) – Fallstudien, Workshop-Validierung
- 6: [06-critical-reflection.md](06-critical-reflection.md) – Blinde Flecken, Limitationen
- 7: [07-references.md](07-references.md) – Vollständiges Literaturverzeichnis
- A: [appendix-a-templates.md](appendix-a-templates.md) – Journal-Template, Projektstruktur
- B: [appendix-b-prompts.md](appendix-b-prompts.md) – Beispiel-Prompts für jede Phase

---

## Kernkonzepte (Schnellreferenz)

### Definition

Promptotyping ist eine Context-Engineering-Methode für die schnelle, forschungsdatengetriebene Erstellung von Prototypen für Forschungstools, Workflows und Modelle mittels Frontier-LLMs.

### Das vierphasige Modell

Der Prozess durchläuft vier Phasen: In der Preparation werden Rohdateien (.doc, .xml, PDFs) gesammelt. Die Exploration analysiert und experimentiert ohne formale Dokumentation. Die Destillation verdichtet das Wissen zu DATA.md, REQUIREMENTS.md und CONTEXT.md – hier entstehen die .md-Files. Die Implementation nutzt diese Dokumente für iterative LLM-Dialoge, wobei jede Iteration einen neuen Prototype produziert. Neues Wissen fließt als Vault-Update zurück in die .md-Dateien.

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

- 0.1 (2025-12): Initiale Strukturierung aus paper-draft.md

---

*Weiter zu: [01-introduction.md](01-introduction.md)*
