<script>
  import GlossaryTerm from '../../GlossaryTerm.svelte';
  import DeepDiveTrigger from '../../elements/DeepDiveTrigger.svelte';
</script>

<div class="intro-strange-minds">
  <h2>Strange New Minds</h2>

  <div class="research-blog-block">
    <p>
      <GlossaryTerm id="frontier-model">Frontier-LLMs</GlossaryTerm> basieren auf der Transformer-Architektur, deren
      Attention-Mechanismus Beziehungen zwischen <GlossaryTerm id="token">Tokens</GlossaryTerm> über große Distanzen
      modelliert. Summerfield (2025) nennt sie "Strange New Minds" und verweist damit auf ihren unklaren Status
      zwischen Werkzeug und Intelligenz.
    </p>

    <p>
      Die Charakterisierung <GlossaryTerm id="system-142">"System 1.42"</GlossaryTerm> beschreibt LLM-Verhalten
      zwischen intuitiver Musterassoziation und systematischer Problemlösung. Die Bezeichnung verbindet Kahnemans
      Unterscheidung zwischen schnellem und langsamem Denken mit Douglas Adams' Metapher einer präzisen Antwort
      ohne Kenntnis der eigentlichen Frage. Sie fungiert als Arbeitshypothese, nicht als empirischer Befund.
    </p>

    <p>
      Mollicks Konzept der Co-Intelligence (2024) bietet einen Rahmen für die Mensch-KI-Kollaboration. Die
      <strong>"Jagged Frontier"</strong> beschreibt dabei die ungleichmäßige Fähigkeitsgrenze von LLMs, bei der
      scheinbar gleichwertige Aufgaben auf verschiedenen Seiten der Grenze liegen können (Mollick, 2023). Bei der
      <strong>Centaur-Arbeit</strong> treffen Menschen strategische Entscheidungen, während KI operative Aufgaben
      übernimmt. Bei der <strong>Cyborg-Arbeit</strong> entwickeln Mensch und Maschine in iterativen Schleifen
      gemeinsam Lösungen.
    </p>

    <div class="deep-dive-triggers">
      <DeepDiveTrigger
        label="System 1.42: Wie (Frontier-)LLMs 'tatsächlich' funktionieren"
        deepDiveId="system-1-42"
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

</style>
