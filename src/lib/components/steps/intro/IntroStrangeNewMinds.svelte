<script>
  import GlossaryTerm from '../../GlossaryTerm.svelte';
  import DeepDiveTrigger from '../../elements/DeepDiveTrigger.svelte';
  import { openDeepDive } from '../../../stores/deepDive.js';

  function handleDeepDive(event) {
    openDeepDive(event.detail.id);
  }
</script>

<div class="intro-strange-minds">
  <h2>Strange New Minds</h2>

  <div class="research-blog-block">
    <p>
      <GlossaryTerm id="llm">LLMs</GlossaryTerm> sind "Strange New Minds" (Summerfield, 2025). Weder reine Werkzeuge
      noch echte Intelligenz. Moderne Large Language Models basieren auf der Transformer-Architektur, deren
      Attention-Mechanismus Beziehungen zwischen <GlossaryTerm id="token">Tokens</GlossaryTerm> über große Distanzen
      modelliert. Lindsey et al. (2025) zeigen, dass LLMs während der Textgenerierung simultan multiple abstrakte
      Repräsentationen aktivieren und kombinieren.
    </p>

    <p>
      Die heuristische Charakterisierung <GlossaryTerm id="system-142">"System 1.42"</GlossaryTerm> beschreibt
      LLM-Verhalten, das Eigenschaften zwischen intuitiver Musterassoziation (Kahnemans System 1) und systematischer
      Problemlösung (System 2) zeigt. Die ".42" verweist auf Douglas Adams' Metapher in Per Anhalter durch die
      Galaxis: eine präzise Antwort ohne Kenntnis der eigentlichen Frage. Diese Charakterisierung ist eine
      Arbeitshypothese, keine validierte Theorie.
    </p>

    <p>
      Mollicks Konzept der "Co-Intelligence" (2024) bietet einen Rahmen für die Mensch-KI-Kollaboration.
      <strong>Centaur-Arbeit</strong> bedeutet klare Aufgabenteilung: Menschen treffen strategische Entscheidungen,
      KI übernimmt operative Aufgaben. <strong>Cyborg-Arbeit</strong> bedeutet enge kognitive Verschränkung:
      Mensch und Maschine entwickeln in iterativen Schleifen gemeinsam Lösungen.
    </p>

    <p>
      Ein strukturelles Problem dabei ist <GlossaryTerm id="sycophancy">Sycophancy</GlossaryTerm>: die Tendenz von
      LLMs zur unkritischen Bestätigung von Nutzerannahmen. RLHF belohnt Antworten, die Nutzer als hilfreich bewerten;
      Kritik wird seltener positiv bewertet (Malmqvist, 2024). Anthropics Character Training adressiert dies durch
      epistemische Tugenden wie Neugier, intellektuelle Ehrlichkeit und kritische Reflexion.
    </p>

    <div class="deep-dive-triggers">
      <DeepDiveTrigger
        label="System 1.42: Wie (Frontier-)LLMs 'tatsächlich' funktionieren"
        deepDiveId="system-1-42"
        on:open={handleDeepDive}
      />
    </div>
  </div>
</div>

<style>
  .intro-strange-minds {
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

  .research-blog-block p:last-child {
    margin-bottom: 0;
  }

  .research-blog-block strong {
    color: var(--color-terracotta);
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
