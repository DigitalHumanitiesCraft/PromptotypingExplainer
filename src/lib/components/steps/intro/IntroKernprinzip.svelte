<script>
  import DeepDiveTrigger from '../../elements/DeepDiveTrigger.svelte';
  import GlossaryTerm from '../../GlossaryTerm.svelte';
  import { openDeepDive } from '../../../stores/deepDive.js';

  function handleDeepDive(event) {
    openDeepDive(event.detail.id);
  }
</script>

<div class="intro-kernprinzip">
  <div class="content">
    <h3>Theoretische Grundlagen: LLMs als kognitive Partner</h3>

    <div class="text-card">
      <p>
        LLMs sind <strong>"Strange New Minds"</strong> (Summerfield, 2025): weder reine Werkzeuge
        noch echte Intelligenz. Moderne Large Language Models basieren auf der Transformer-Architektur,
        deren Attention-Mechanismus Beziehungen zwischen Tokens über große Distanzen modelliert.
        Lindsey et al. (2025) zeigen, dass LLMs während der Textgenerierung simultan multiple abstrakte
        Repräsentationen aktivieren und kombinieren – semantische, syntaktische und kontextuelle Ebenen,
        die über lokale Übergangswahrscheinlichkeiten hinausgehen.
      </p>

      <p>
        Die heuristische Charakterisierung <strong>System 1.42</strong> beschreibt LLM-Verhalten,
        das Eigenschaften zwischen intuitiver Musterassoziation (Kahnemans System 1) und systematischer
        Problemlösung (System 2) zeigt. LLMs generieren oft korrekte Outputs, ohne dass ihre internen
        Problemformulierungen transparent wären. Die ".42" verweist auf Douglas Adams' Metapher:
        eine präzise Antwort ohne Kenntnis der eigentlichen Frage. Diese Charakterisierung ist eine
        <em>heuristische Arbeitshypothese, keine validierte Theorie</em>.
      </p>
    </div>

    <div class="two-column">
      <div class="concept-card">
        <h4>Co-Intelligence (Mollick, 2024)</h4>
        <p>
          Das Konzept der Co-Intelligence bietet einen Rahmen für die Mensch-KI-Kollaboration.
          <strong>Centaur-Arbeit</strong> bedeutet klare Aufgabenteilung: Menschen treffen strategische
          Entscheidungen, KI übernimmt operative Aufgaben. <strong>Cyborg-Arbeit</strong> bedeutet enge
          kognitive Verschränkung: Mensch und Maschine entwickeln in iterativen Dialogschleifen
          gemeinsam Lösungen, die Grenze zwischen den Beiträgen verschwimmt.
        </p>
      </div>

      <div class="concept-card warning">
        <h4>Das Sycophancy-Problem</h4>
        <p>
          <GlossaryTerm id="sycophancy">Sycophancy</GlossaryTerm> bezeichnet die strukturelle Tendenz
          von LLMs zur unkritischen Bestätigung von Nutzerannahmen. Ursache: RLHF belohnt Antworten,
          die Nutzer als hilfreich bewerten; Kritik wird seltener positiv bewertet (Malmqvist, 2024).
          Anthropics Character Training adressiert dies durch epistemische Tugenden: Neugier,
          intellektuelle Ehrlichkeit, kritische Reflexion.
        </p>
      </div>
    </div>

    <div class="implication-block">
      <p>
        Diese unklare epistemologische Natur von LLMs erfordert <strong>abgestufte Validierungsstrategien</strong>.
        Für komplexe Aufgaben wie die Entwicklung von Forschungswerkzeugen sind strukturierte
        Multi-Agent-Workflows, explizite Dokumentation und kontinuierliche Expertenvalidierung nötig.
        Das ist der Kern des <span class="promptotyping">Promptotyping</span>-Ansatzes.
      </p>
      <p class="learn-more">
        Mehr über die theoretischen Grundlagen von LLMs in der
        <a href="https://chpollin.github.io/llmdh/" target="_blank" rel="noopener noreferrer">
          LLM Summer School for DH
        </a>.
      </p>
    </div>

    <div class="deep-dive-triggers">
      <DeepDiveTrigger
        label="Co-Intelligence"
        deepDiveId="co-intelligence"
        on:open={handleDeepDive}
      />
      <DeepDiveTrigger
        label="System 1.42"
        deepDiveId="system-1-42"
        on:open={handleDeepDive}
      />
    </div>
  </div>
</div>

<style>
  .intro-kernprinzip {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-lg);
    max-width: 950px;
  }

  h3 {
    font-size: clamp(1.25rem, 2.5vw, 1.5rem);
    color: var(--color-black);
    margin: 0;
    text-align: center;
  }

  .text-card {
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    max-width: 800px;
  }

  .text-card p {
    font-size: clamp(0.9rem, 1.5vw, 0.95rem);
    color: var(--color-black);
    line-height: 1.7;
    text-align: justify;
    margin: 0;
  }

  .text-card p + p {
    margin-top: var(--space-md);
  }

  .text-card strong {
    color: var(--color-terracotta);
  }

  .text-card em {
    font-style: italic;
    color: var(--color-slate);
  }

  .two-column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-md);
    width: 100%;
    max-width: 900px;
  }

  .concept-card {
    background: white;
    padding: var(--space-md);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
    border-left: 3px solid var(--color-slate);
  }

  .concept-card.warning {
    border-left-color: var(--color-terracotta);
    background: rgba(191, 91, 62, 0.03);
  }

  .concept-card h4 {
    font-size: 0.9rem;
    color: var(--color-black);
    margin: 0 0 var(--space-sm) 0;
  }

  .concept-card p {
    font-size: 0.85rem;
    color: var(--color-slate);
    line-height: 1.6;
    margin: 0;
    text-align: justify;
  }

  .concept-card strong {
    color: var(--color-terracotta);
  }

  .implication-block {
    max-width: 800px;
    background: rgba(96, 125, 139, 0.06);
    padding: var(--space-md) var(--space-lg);
    border-radius: 8px;
  }

  .implication-block p {
    font-size: clamp(0.85rem, 1.4vw, 0.9rem);
    color: var(--color-black);
    line-height: 1.6;
    margin: 0;
    text-align: justify;
  }

  .implication-block strong {
    color: var(--color-terracotta);
  }

  .promptotyping {
    font-family: var(--font-mono);
    font-weight: 700;
    color: var(--color-terracotta);
    letter-spacing: 0.02em;
  }

  .implication-block .learn-more {
    font-size: 0.85rem;
    padding-top: var(--space-sm);
    border-top: 1px solid rgba(96, 125, 139, 0.15);
    margin-top: var(--space-md);
    color: var(--color-slate);
  }

  .implication-block .learn-more a {
    color: var(--color-terracotta);
    font-weight: 600;
    text-decoration: none;
  }

  .implication-block .learn-more a:hover {
    text-decoration: underline;
  }

  .deep-dive-triggers {
    display: flex;
    gap: var(--space-md);
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 767px) {
    .two-column {
      grid-template-columns: 1fr;
    }
  }
</style>
