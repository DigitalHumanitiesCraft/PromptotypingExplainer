# 1. Einleitung

*← [Zurück zum Index](00-index.md)*

---

## 1.1 Die epistemologische Herausforderung generativer KI

Die gegenwärtige Entwicklung von Large Language Models (LLMs) markiert einen Wendepunkt in der computergestützten Wissensproduktion. Mit dem Übergang zu Reasoning Models und Agentic Systems seit Ende 2024 manifestiert sich eine qualitative Transformation, die weit über inkrementelle Verbesserungen hinausgeht.

### Frontier-LLMs

> **Definition:** Ein **Frontier-LLM** bezeichnet die jeweils leistungsstärksten verfügbaren Sprachmodelle, die auf standardisierten Benchmarks und qualitativen Evaluationen („Vibe Checks") den aktuellen Stand der Technik repräsentieren. Die Bezeichnung ist relativ und verschiebt sich mit der technologischen Entwicklung.

Diese Frontier-LLMs – typischerweise kommerzielle und geschlossene Systeme – demonstrieren durch Test-Time-Compute-Strategien und erweiterte Tool-Integration Fähigkeiten, die fundamentale Fragen zur Natur maschineller Intelligenz aufwerfen.

### Der dreiphasige Trainingsprozess

Die technische Evolution dieser Systeme folgt einem dreiphasigen Trainingsprozess:

| Phase | Beschreibung |
|-------|--------------|
| **Pre-training** | Autoregressives Vorhersagen von Tokens auf gigantischen Textkorpora. Das Modell lernt statistische Regularitäten und implizites Weltwissen. |
| **Supervised Fine-tuning** | Formung zu hilfreichen Assistenzsystemen durch kuratierte Beispieldialoge. |
| **RLHF** | Reinforcement Learning from Human Feedback optimiert Qualität und Struktur der Antworten basierend auf menschlichen Präferenzen. |

Das Resultat sind verdichtete semantische Repräsentationssysteme, deren interne Strukturen weit über oberflächliche Token-Fortsetzung hinausgehen (vgl. Lindsey et al., 2025).

---

## 1.2 Das Produktivitätsparadox

Die praktische Nutzung dieser Systeme offenbart ein bemerkenswertes Paradox:

> Während frühe Studien zu GitHub Copilot Produktivitätssteigerungen von durchschnittlich **55 Prozent** dokumentierten (Peng et al., 2023), zeigt die Untersuchung von Becker et al. (2025) bei erfahrenen Entwicklern eine **Verlangsamung um 19 Prozent**, obwohl diese Zeitersparnisse zwischen 20 und 39 Prozent erwarteten.

Diese Diskrepanz verweist auf die fundamentale Komplexität und Kontextabhängigkeit der Mensch-KI-Interaktion.

### Vibe Coding

Das Phänomen des „Vibe Coding", von Andrej Karpathy geprägt und von tante (2024) kritisch analysiert, exemplifiziert diese Ambivalenz:

**Definition:** Die intuitive Generierung von Code durch vage natürlichsprachliche Prompts, wobei:
- Verstehen durch „Vibes" ersetzt wird
- Befähigung durch Abhängigkeit ersetzt wird
- Nachhaltige Lösungen durch technische Schulden ersetzt werden

> „Sich regelmäßig ehrlich zu fragen, ob man wirklich noch versteht, was gerade passiert"
> — Andrej Karpathy (2025)

Diese Warnung gewinnt für wissenschaftliche Kontexte existenzielle Bedeutung.

### Fundamentale epistemologische Bedenken

Dingemanse (2024) artikuliert fundamentale epistemologische Bedenken:

1. Generative KI basiert auf **Wahrscheinlichkeitsvorhersagen**, nicht auf genuinem Verstehen
2. Unkritischer Einsatz könnte zentrale wissenschaftliche Prinzipien untergraben:
   - Autorschaft
   - Methodische Nachvollziehbarkeit
   - Intellektuelle Unabhängigkeit
3. KI-generierte „durchschnittliche Darstellungen" stehen im Widerspruch zu:
   - Innovativem Denken
   - Dem Konzept der Slow Science

---

## 1.3 Forschungsfragen

Vor diesem Hintergrund adressiert diese Untersuchung drei zentrale Forschungsfragen:

### Forschungsfrage 1: Evaluation

> Wie können wir Evaluationsverfahren entwickeln, die sowohl die aufgaben-, daten- und promptabhängige Varianz von LLM-Leistungen als auch qualitative Maßstäbe epistemischer Belastbarkeit abbilden und dabei in DH-Projekten realistisch durchführbar sind?

### Forschungsfrage 2: Kooperation

> Welche Formen der Mensch-KI-Kooperation stärken geisteswissenschaftliche Expertise und kritische Reflexion, statt sie zu untergraben, und auf welche technisch möglichen Praktiken sollten wir bewusst verzichten?

### Forschungsfrage 3: Nachhaltigkeit

> Welche methodischen, technischen und organisatorischen Strategien sichern gleichzeitig fachliche Unabhängigkeit, soziale und ökologische Nachhaltigkeit sowie langfristige Nachvollziehbarkeit in LLM-gestützten Workflows?

---

## 1.4 Positionierung von Promptotyping

Promptotyping präsentiert sich als **experimenteller Ansatz** zur systematischen Exploration dieser Fragen.

### Was Promptotyping ist

- Ein methodischer Beitrag zur kritischen Auseinandersetzung mit generativer KI in den Digital Humanities
- Eine Praxis, die kontinuierliche Weiterentwicklung und Reflexion explizit einfordert
- Eine Synthese aus technischem Prompt Engineering, methodischem Requirements Engineering und epistemischer Reflexion

### Was Promptotyping nicht ist

- ❌ Eine fertige Lösung
- ❌ Ein Ersatz für menschliche Expertise
- ❌ Eine Garantie für korrekte Ergebnisse

---

## Kernaussagen dieses Kapitels

1. LLMs stellen eine epistemologische Herausforderung dar, die über technische Fragen hinausgeht
2. Das Produktivitätsparadox zeigt, dass naive Nutzung zu Produktivitätsverlust führen kann
3. Vibe Coding als unkritische Praxis birgt Risiken für wissenschaftliche Integrität
4. Drei Forschungsfragen strukturieren die Untersuchung: Evaluation, Kooperation, Nachhaltigkeit
5. Promptotyping versteht sich als experimenteller, evolutiver Ansatz

---

*Weiter zu: [02-theoretical-foundation.md](02-theoretical-foundation.md)*
