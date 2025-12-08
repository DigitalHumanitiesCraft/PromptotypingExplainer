# 1. Einleitung

## 1.1 Problemstellung

Frontier-LLMs haben ihre Fähigkeiten in Coding und Tool Use deutlich verbessert. Modelle wie Claude Opus 4.5, GPT-5.1-Codex und Gemini 3 Pro erreichen auf Benchmarks wie SWE-bench Verified (Jimenez et al., 2024), τ2-bench und Terminal-bench 2.0 (Laude Institute, 2025) hohe Werte für autonome Code-Generierung und Werkzeugnutzung. Mollick (2025) beschreibt diese Entwicklung pointiert: Vor drei Jahren beeindruckte es, dass eine Maschine ein Gedicht über Otter schreiben konnte. Heute diskutiert er statistische Methodik mit einem Agenten, der seine eigene Forschungsumgebung gebaut hat. Diese Benchmarks messen jedoch isolierte, wohldefinierte Aufgaben.

Andrej Karpathy prägte den Begriff "Vibe Coding" (Karpathy, 2025). Das Phänomen beschreibt Code-Generierung durch natürlichsprachliche Anweisungen, bei der Entwickler den Output akzeptieren, ohne den generierten Code vollständig zu prüfen. Für Prototypen und Experimente kann das produktiv sein. Ohne Struktur führt es jedoch zu technischen Schulden und Abhängigkeit statt Verständnis. tante (2025) argumentiert, dass Vibe Coding fundamentale Aspekte der Softwareentwicklung ignoriert: Anforderungsanalyse, Architektur und Domänenverständnis entstehen erst durch die Arbeit am Code selbst.

Die Kernfrage lautet: **Wie kommuniziert man Domänenwissen so an ein LLM, dass es passende Werkzeuge generiert?** Nicht das Coden selbst ist die Kernkompetenz, sondern das Wissen darüber, was guter Code für Forschungszwecke ist: Modellierung, Formalisierung, Domänenwissen und kritische Validierung.

## 1.2 Forschungsfragen

Diese Untersuchung adressiert drei praktische Fragenkomplexe. Erstens: Wie strukturiert man Forschungswissen für LLM-Dialoge, welche Dokumentformate funktionieren, wie viel Kontext ist optimal und wann ist Verdichtung nötig? Zweitens: Wie validiert man LLM-generierte Outputs, woran erkennt man Sycophancy, wie prüft man auf Konfabulationen und welche Rolle spielt Domänenwissen? Drittens: Wie iteriert man effektiv, wann braucht der Vault ein Update, wie dokumentiert man den Prozess und wie vermeidet man Context Rot?

## 1.3 Promptotyping als Lösungsansatz

Promptotyping ist eine Context-Engineering-Methode für die schnelle, forschungsdatengetriebene Erstellung von Prototypen für Forschungstools, Workflows und Modelle mittels Frontier-LLMs – eine strukturierte Arbeitstechnik, die Context- und Requirements Engineering in einem vierphasigen Prozessmodell (Preparation, Exploration, Destillation, Implementation) synthetisiert. Es dient dazu, intuitiven Ansätzen wie dem Vibe Coding die für Forschungskontexte notwendige Strenge zu verleihen, ist jedoch explizit als exploratives Framework zu verstehen.

Mollick beobachtet, dass sich die Rolle des Menschen verschiebt: vom Korrigieren von KI-Fehlern zum Steuern von KI-Arbeit (Mollick, 2025). Der "Critical Expert in the Loop" geht einen Schritt weiter. Der Mensch prüft nicht nur, ob das Ergebnis korrekt ist, sondern ob es fachlich angemessen ist. Er erkennt Sycophancy, prüft auf Konfabulationen und bringt das Domänenwissen ein, das LLMs strukturell fehlt.

**LLMs liefern oft sehr gute Ergebnisse und können gleichzeitig nie Verlässlichkeit garantieren. Diese Spannung ist nicht auflösbar, nur durch fachliche Prüfung handhabbar.**