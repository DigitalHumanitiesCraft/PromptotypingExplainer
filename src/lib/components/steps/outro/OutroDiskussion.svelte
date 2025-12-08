<script>
  import { fade, fly } from 'svelte/transition';
  import DeepDiveTrigger from '../../elements/DeepDiveTrigger.svelte';

  const contraPoints = [
    {
      title: 'Proprietäre Systeme',
      text: 'Abhängigkeit von intransparenten Systemen ohne Einblick in Trainingsdaten oder Modellverhalten.'
    },
    {
      title: 'Forschungsintegrität',
      text: 'Black-Box-Charakter erschwert Reproduzierbarkeit und Zitierbarkeit.'
    },
    {
      title: 'Zugangshürden',
      text: 'Kosten (~200$/Monat) schaffen neue Ungleichheiten. Open-Source-Alternativen erfordern erhebliche Infrastruktur.'
    },
    {
      title: 'Ökologische Kosten',
      text: 'Hoher Energieverbrauch für Training und Inferenz bleibt methodisch unreflektiert.'
    }
  ];

  const proPoints = [
    {
      title: 'Beschleunigung',
      text: 'Projekte, die Monate dauern würden, werden in Tagen umsetzbar.'
    },
    {
      title: 'Neue Experimente',
      text: 'Ermöglicht Prototypen und Analysen, die sonst nicht realisierbar wären.'
    },
    {
      title: 'Epistemische Praxis',
      text: 'Vibe Coding als neue Form des explorativen Programmierens? (offene Forschungsfrage)'
    },
    {
      title: 'Technologische Realität',
      text: 'Multi-Agenten-Systeme zeigen, wohin die Entwicklung geht. Nicht-Auseinandersetzung ist keine Lösung.'
    }
  ];

  const researchGaps = [
    { label: 'Evaluierung', text: 'Bisher existieren nur einzelne Fallbeispiele. Systematische Bewertungskriterien fehlen – am ehesten über Vibe Checks und Reviews (vgl. RIDE).' },
    { label: 'Generalisierbarkeit', text: 'Übertragbarkeit auf externe Teams und andere Disziplinen unbewiesen.' },
    { label: 'Skills Atrophy', text: 'Die Gefahr des Verlernens von Coding-Skills ist real: Wer nur noch mit LLM-Unterstützung programmiert, verliert möglicherweise die Fähigkeit zur eigenständigen Problemlösung.' },
    { label: 'Kosten-Nutzen', text: 'Zeitaufwand für Dokumentation vs. Effizienzgewinn ist offen.' },
    { label: 'Epistemische Gerechtigkeit', text: 'Zugang zu LLM-Tools ist ungleich verteilt. Die Kosten (~200$/Monat für Premium-Modelle) schaffen neue Ungleichheiten in der Forschungslandschaft.' }
  ];
</script>

<div class="outro-diskussion">
  <header class="scene-header" in:fly={{ y: -20, duration: 500 }}>
    <span class="section-label">Reflexion</span>
    <h2>Sollten wir LLMs in der Forschung einsetzen?</h2>
  </header>

  <div class="intro-text" in:fly={{ y: 20, duration: 400, delay: 100 }}>
    <p>
      Der Einsatz von LLMs in der Forschung ist keine rein technische, sondern eine
      <strong>epistemisch-politische Entscheidung</strong>. Die Frage lautet nicht nur "Können wir?",
      sondern auch "Sollten wir?" und "Unter welchen Bedingungen?". Diese Reflexion ist integraler
      Bestandteil einer verantwortungsvollen Promptotyping-Praxis.
    </p>
  </div>

  <div class="discussion-grid">
    <!-- Contra Column -->
    <div class="column contra" in:fly={{ x: -30, duration: 500, delay: 200 }}>
      <div class="column-header">
        <span class="column-icon">?</span>
        <h3>Kritische Einwände</h3>
      </div>
      <ul class="points-list">
        {#each contraPoints as point, i}
          <li in:fade={{ delay: 300 + i * 100 }}>
            <strong>{point.title}:</strong> {point.text}
          </li>
        {/each}
      </ul>
    </div>

    <!-- Pro Column -->
    <div class="column pro" in:fly={{ x: 30, duration: 500, delay: 200 }}>
      <div class="column-header">
        <span class="column-icon">!</span>
        <h3>Pragmatische Argumente</h3>
      </div>
      <ul class="points-list">
        {#each proPoints as point, i}
          <li in:fade={{ delay: 300 + i * 100 }}>
            <strong>{point.title}:</strong> {point.text}
          </li>
        {/each}
      </ul>
    </div>
  </div>

  <!-- Research Gaps -->
  <div class="research-gaps" in:fly={{ y: 20, duration: 500, delay: 600 }}>
    <h4>Offene Forschungsfragen</h4>
    <div class="gaps-grid">
      {#each researchGaps as gap, i}
        <div class="gap-item" in:fade={{ delay: 700 + i * 80 }}>
          <span class="gap-label">{gap.label}</span>
          <span class="gap-text">{gap.text}</span>
        </div>
      {/each}
    </div>
  </div>

  <!-- Deep Dive Trigger -->
  <div class="deep-dive-trigger" in:fade={{ delay: 900 }}>
    <DeepDiveTrigger
      label="Grenzen & Limitationen im Detail"
      deepDiveId="limitations"
      variant="block"
    />
  </div>
</div>

<style>
  .outro-diskussion {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-xl);
    max-width: 1000px;
    margin: 0 auto;
    padding: 0 var(--space-md);
  }

  .scene-header {
    text-align: center;
  }

  .section-label {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-terracotta);
    font-weight: 600;
  }

  h2 {
    color: var(--color-black);
    margin: var(--space-xs) 0;
    font-size: clamp(1.25rem, 3vw, 1.75rem);
  }

  .intro-text {
    max-width: 750px;
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .intro-text p {
    font-size: clamp(0.9rem, 1.6vw, 1rem);
    color: var(--color-black);
    line-height: 1.7;
    text-align: left;
    margin: 0;
  }

  .intro-text strong {
    color: var(--color-terracotta);
  }

  /* Discussion Grid */
  .discussion-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-lg);
    width: 100%;
  }

  .column {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 12px;
    padding: var(--space-lg);
    border: 1px solid rgba(0, 0, 0, 0.08);
  }

  .column-header {
    display: flex;
    align-items: center;
    gap: var(--space-sm);
    margin-bottom: var(--space-md);
    padding-bottom: var(--space-sm);
    border-bottom: 2px solid;
  }

  .contra .column-header {
    border-color: var(--color-slate);
  }

  .pro .column-header {
    border-color: var(--color-terracotta);
  }

  .column-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1rem;
  }

  .contra .column-icon {
    background: var(--color-slate);
    color: white;
  }

  .pro .column-icon {
    background: var(--color-terracotta);
    color: white;
  }

  .column h3 {
    font-size: 1rem;
    margin: 0;
    color: var(--color-black);
  }

  .points-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
  }

  .points-list li {
    font-size: 0.85rem;
    line-height: 1.5;
    color: var(--color-black);
    padding-left: var(--space-sm);
    border-left: 2px solid transparent;
    transition: border-color 0.2s;
  }

  .contra .points-list li:hover {
    border-color: var(--color-slate);
  }

  .pro .points-list li:hover {
    border-color: var(--color-terracotta);
  }

  .points-list li strong {
    color: var(--color-black);
    font-weight: 600;
  }

  /* Research Gaps */
  .research-gaps {
    background: rgba(96, 125, 139, 0.08);
    border-radius: 12px;
    padding: var(--space-lg);
    width: 100%;
    border: 1px solid rgba(96, 125, 139, 0.2);
  }

  .research-gaps h4 {
    font-size: 0.9rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-slate);
    margin: 0 0 var(--space-md) 0;
    text-align: center;
  }

  .gaps-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-sm);
  }

  .gap-item {
    display: flex;
    flex-direction: column;
    gap: 2px;
    padding: var(--space-sm);
    background: rgba(255, 255, 255, 0.7);
    border-radius: 8px;
  }

  .gap-label {
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--color-terracotta);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .gap-text {
    font-size: 0.8rem;
    color: var(--color-black);
    line-height: 1.4;
  }

  /* Deep Dive Trigger */
  .deep-dive-trigger {
    max-width: 350px;
    width: 100%;
  }

  /* Responsive */
  @media (max-width: 767px) {
    .discussion-grid {
      grid-template-columns: 1fr;
    }

    .gaps-grid {
      grid-template-columns: 1fr;
    }

    .column {
      padding: var(--space-md);
    }
  }
</style>
