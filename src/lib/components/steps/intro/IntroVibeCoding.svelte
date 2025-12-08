<script>
  import GlossaryTerm from '../../GlossaryTerm.svelte';
  import DeepDiveTrigger from '../../elements/DeepDiveTrigger.svelte';
  import { openDeepDive } from '../../../stores/deepDive.js';
  import vibecodingImage from '../../../../assets/images/vibecoding.png';

  function handleDeepDive(event) {
    openDeepDive(event.detail.id);
  }
</script>

<div class="intro-vibecoding">
  <h2>Frontier-LLMs und Vibe Coding</h2>

  <div class="research-blog-block">
    <p>
      <GlossaryTerm id="frontier-model">Frontier-LLMs</GlossaryTerm> haben ihre Fähigkeiten in Coding und <GlossaryTerm id="tool-use">Tool Use</GlossaryTerm> deutlich verbessert. Modelle wie Claude Opus 4.5, GPT-5.1-Codex und Gemini 3 Pro erreichen auf Benchmarks
      wie SWE-bench Verified (Jimenez et al., 2024), τ2-bench und Terminal-bench 2.0 (Laude Institute, 2025)
      hohe Werte für autonome Code-Generierung und Werkzeugnutzung. Mollick (2025) beschreibt diese Entwicklung
      pointiert: Vor drei Jahren beeindruckte es, dass eine Maschine ein Gedicht über Otter schreiben konnte.
      Heute diskutiert er statistische Methodik mit einem Agenten, der seine eigene Forschungsumgebung gebaut hat.
      Diese Benchmarks messen jedoch isolierte, wohldefinierte Aufgaben.
    </p>

    <p>
      Andrej Karpathy prägte den Begriff <GlossaryTerm id="vibe-coding">"Vibe Coding"</GlossaryTerm> (Karpathy, 2025).
      Das Phänomen beschreibt Code-Generierung durch natürlichsprachliche Anweisungen, bei der Entwickler den Output
      akzeptieren, ohne den generierten Code vollständig zu prüfen. Für Prototypen und Experimente kann das produktiv
      sein. Ohne Struktur führt es jedoch zu technischen Schulden und Abhängigkeit statt Verständnis.
    </p>

    <figure class="vibecoding-figure">
      <img src={vibecodingImage} alt="Andrej Karpathy Tweet über Vibe Coding" class="vibecoding-image" />
      <figcaption>Andrej Karpathy prägt den Begriff "Vibe Coding" (Februar 2025)</figcaption>
    </figure>

    <div class="deep-dive-triggers">
      <DeepDiveTrigger
        label="Vibe Coding Kritik"
        deepDiveId="vibe-coding-critique"
        on:open={handleDeepDive}
      />
    </div>
  </div>
</div>

<style>
  .intro-vibecoding {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-lg);
  }

  h2 {
    margin: 0;
    font-size: clamp(1.5rem, 4vw, 2rem);
    color: var(--color-terracotta);
    text-align: center;
  }

  .research-blog-block {
    max-width: 750px;
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .research-blog-block p {
    font-size: clamp(0.95rem, 1.6vw, 1rem);
    color: var(--color-black);
    line-height: 1.7;
    text-align: left;
    margin: 0 0 var(--space-md) 0;
  }

  .vibecoding-figure {
    margin: var(--space-md) 0;
    text-align: center;
  }

  .vibecoding-image {
    max-width: 100%;
    width: 500px;
    border-radius: 8px;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }

  .vibecoding-figure figcaption {
    font-size: 0.8rem;
    color: var(--color-slate);
    margin-top: var(--space-xs);
    font-style: italic;
  }

  .deep-dive-triggers {
    display: flex;
    gap: var(--space-md);
    flex-wrap: wrap;
    justify-content: center;
    margin-top: var(--space-md);
    padding-top: var(--space-md);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
</style>
