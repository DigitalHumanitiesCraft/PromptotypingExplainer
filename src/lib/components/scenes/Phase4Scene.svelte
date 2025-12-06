<script>
  import { phases } from '../../data/phases.js';
  import { prompts } from '../../data/prompts.js';
  import VaultIcon from '../elements/VaultIcon.svelte';
  import ChatBubble from '../elements/ChatBubble.svelte';
  import BrowserFrame from '../elements/BrowserFrame.svelte';
  import GlossaryTerm from '../GlossaryTerm.svelte';
  import SceneHeader from '../blocks/SceneHeader.svelte';
  import { fadeIn, inRange, countVisible } from '../../utils/progressAnimations.js';

  export let progress = 0;

  const phase = phases[4];

  // Animation thresholds
  // 0-0.07: Titel erscheint
  // 0.07-0.18: Akademischer Text IMPLEMENTATION
  // 0.18-0.28: Akademischer Text PROTOTYPE + Critical Expert
  // 0.28-0.35: Layout erscheint
  // 0.35-0.42: Erster Prompt
  // 0.42-0.47: Docs fliegen zum Chat
  // 0.47-0.55: LLM-Antwort, Code
  // 0.55-0.63: Zweiter Prompt, Wireframe
  // 0.63-0.70: Error
  // 0.70-0.77: Fix-Prompt, LLM-Korrektur
  // 0.77-0.85: Spinner, Update
  // 0.85-0.92: Success, Network
  // 0.92-1.0: Closing

  $: titleOpacity = fadeIn(progress, 0, 0.07);
  $: implementationTextOpacity = fadeIn(progress, 0.07, 0.18);
  $: prototypeTextOpacity = fadeIn(progress, 0.18, 0.28);
  $: academicTextVisible = progress < 0.35;
  $: layoutOpacity = fadeIn(progress, 0.28, 0.35);

  // Chat progression (starts at 0.35)
  $: visiblePrompts = countVisible(progress, 0.35, 0.50, prompts.length);

  // Browser states
  $: browserState =
    progress > 0.85 ? 'network' :
    progress > 0.77 ? 'wireframe' :
    progress > 0.63 ? 'error' :
    progress > 0.55 ? 'wireframe' :
    progress > 0.47 ? 'code' :
    'empty';

  $: showSpinner = inRange(progress, 0.77, 0.85);
  $: showSuccess = progress > 0.85;
  $: closingOpacity = fadeIn(progress, 0.92, 1.0);
  $: docsFlying = inRange(progress, 0.42, 0.47);

  // Rückschleifen-Toggle
  let showFeedbackLoops = false;

  function toggleFeedbackLoops() {
    showFeedbackLoops = !showFeedbackLoops;
  }
</script>

<div class="phase4-scene">
  <SceneHeader
    number={4}
    title={phase.title}
    metaphor={phase.metaphor}
    opacity={titleOpacity}
  />

  {#if academicTextVisible}
    <div class="academic-texts">
      <div class="academic-text" style="opacity: {implementationTextOpacity};">
        <h4>IMPLEMENTATION</h4>
        <p>
          Die IMPLEMENTATION-Phase dokumentiert in <code>INSTRUCTIONS.md</code> alle
          Datentransformationen, Algorithmen und interpretativen Entscheidungen.
          Sie fungiert als epistemisches Protokoll für spätere Nachvollziehbarkeit.
        </p>
      </div>
      <div class="academic-text" style="opacity: {prototypeTextOpacity};">
        <h4>Critical Expert in the Loop</h4>
        <p>
          Domänenexperten fungieren als aktive Ko-Konstrukteure, nicht als passive Validierende.
          Durch strukturierte <GlossaryTerm id="prompt-engineering">Prompting-Strategien</GlossaryTerm> wird die
          <GlossaryTerm id="sycophancy">Sycophancy</GlossaryTerm>-Tendenz
          von <GlossaryTerm id="llm">LLMs</GlossaryTerm> zur unkritischen Bestätigung systematisch herausgefordert.
        </p>
      </div>
    </div>
  {/if}

  <div class="implementation-area" style="opacity: {layoutOpacity};">
    <!-- Left: Vault -->
    <div class="vault-section">
      <VaultIcon
        size={100}
        documents={['data.md', 'user-story.md', 'context.md']}
      />
      {#if docsFlying}
        <div class="flying-docs">
          <span class="flying-doc">→</span>
        </div>
      {/if}
    </div>

    <!-- Right: Chat + Browser -->
    <div class="dialog-section">
      <!-- Chat -->
      <div class="chat-area">
        {#each prompts.slice(0, visiblePrompts) as prompt (prompt.id)}
          <ChatBubble
            type={prompt.type}
            text={prompt.text}
            pattern={prompt.pattern}
          />
        {/each}
      </div>

      <!-- Browser -->
      <div class="browser-area">
        <BrowserFrame state={browserState} {showSpinner} />
        {#if showSuccess}
          <div class="success-badge">
            <span class="success-icon">✓</span>
            <span>Tests bestanden</span>
          </div>
        {/if}
      </div>
    </div>
  </div>

  <!-- Feedback Loops Button & Visualization -->
  {#if showSuccess}
    <div class="feedback-section" style="opacity: {closingOpacity > 0 ? 1 : layoutOpacity};">
      <button
        class="feedback-toggle"
        class:active={showFeedbackLoops}
        on:click={toggleFeedbackLoops}
        aria-pressed={showFeedbackLoops}
      >
        <svg class="loop-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M17 1l4 4-4 4" />
          <path d="M3 11V9a4 4 0 0 1 4-4h14" />
          <path d="M7 23l-4-4 4-4" />
          <path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </svg>
        Rückschleifen {showFeedbackLoops ? 'ausblenden' : 'anzeigen'}
      </button>

      {#if showFeedbackLoops}
        <div class="feedback-loops">
          <svg class="loop-lines" viewBox="0 0 400 120" preserveAspectRatio="xMidYMid meet">
            <!-- Loop 1: Interface → Vault (Kontext erweitern) -->
            <path
              d="M 350 30 Q 250 -20 150 30"
              fill="none"
              stroke="var(--color-terracotta)"
              stroke-width="2"
              stroke-dasharray="8 4"
              class="loop-path"
            />
            <polygon
              points="155,25 145,30 155,35"
              fill="var(--color-terracotta)"
              class="loop-arrow"
            />
            <text x="250" y="10" class="loop-label" text-anchor="middle">Kontext erweitern</text>

            <!-- Loop 2: Vault → Stapel (Daten ergänzen) -->
            <path
              d="M 150 50 Q 80 100 30 70"
              fill="none"
              stroke="var(--color-slate)"
              stroke-width="2"
              stroke-dasharray="8 4"
              class="loop-path loop-path-2"
            />
            <polygon
              points="35,75 25,70 35,65"
              fill="var(--color-slate)"
              class="loop-arrow loop-arrow-2"
            />
            <text x="80" y="110" class="loop-label loop-label-slate" text-anchor="middle">Daten ergänzen</text>
          </svg>

          <div class="loop-explanation">
            <p>
              <strong>Der Prozess ist nicht linear.</strong> Wenn die Implementation zeigt,
              dass etwas fehlt, geht man zurück:
            </p>
            <ul>
              <li><span class="terracotta">→</span> Zur Destillation (Kontext erweitern)</li>
              <li><span class="slate">→</span> Zur Vorbereitung (Daten ergänzen)</li>
            </ul>
          </div>
        </div>
      {/if}
    </div>
  {/if}

  <!-- Closing text -->
  <p class="closing-text" style="opacity: {closingOpacity};">
    {phase.closingText}
  </p>
</div>

<style>
  .phase4-scene {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: var(--space-lg);
    padding: var(--space-lg);
    padding-top: var(--space-xl);
  }

  .academic-texts {
    display: flex;
    gap: var(--space-lg);
    max-width: 900px;
    width: 100%;
  }

  .academic-text {
    flex: 1;
    background: rgba(96, 125, 139, 0.05);
    padding: var(--space-md);
    border-radius: 8px;
    border-left: 3px solid var(--color-slate);
  }

  .academic-text h4 {
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-terracotta);
    margin-bottom: var(--space-sm);
  }

  .academic-text p {
    font-size: clamp(0.85rem, 1.4vw, 0.95rem);
    color: var(--color-slate);
    line-height: 1.6;
    margin: 0;
  }

  .academic-text code {
    background: rgba(96, 125, 139, 0.15);
    padding: 0.1em 0.3em;
    border-radius: 3px;
    font-size: 0.9em;
  }

  .implementation-area {
    display: flex;
    gap: var(--space-xl);
    width: 100%;
    max-width: 1000px;
    flex: 1;
    min-height: 0;
  }

  /* Vault section */
  .vault-section {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-md);
    padding-top: var(--space-lg);
  }

  .flying-docs {
    animation: flyRight 0.5s ease-out;
    color: var(--color-terracotta);
    font-size: 1.5rem;
  }

  @keyframes flyRight {
    from {
      opacity: 1;
      transform: translateX(0);
    }
    to {
      opacity: 0;
      transform: translateX(100px);
    }
  }

  /* Dialog section */
  .dialog-section {
    flex: 1;
    display: flex;
    gap: var(--space-lg);
    min-height: 0;
  }

  /* Chat area */
  .chat-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
    overflow-y: auto;
    padding: var(--space-sm);
    background: #fafafa;
    border-radius: 8px;
    max-height: 350px;
  }

  /* Browser area */
  .browser-area {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
  }

  .success-badge {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    padding: var(--space-xs) var(--space-sm);
    background: var(--color-success);
    color: white;
    border-radius: 4px;
    font-size: 0.75rem;
    font-weight: 600;
    animation: fadeIn 0.3s ease-out;
  }

  .success-icon {
    font-weight: bold;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  /* Feedback Loops Section */
  .feedback-section {
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-md);
  }

  .feedback-toggle {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    padding: var(--space-sm) var(--space-md);
    background: transparent;
    border: 2px dashed var(--color-slate);
    border-radius: 8px;
    color: var(--color-slate);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .feedback-toggle:hover {
    border-color: var(--color-terracotta);
    color: var(--color-terracotta);
  }

  .feedback-toggle.active {
    border-color: var(--color-terracotta);
    border-style: solid;
    background: rgba(191, 91, 62, 0.08);
    color: var(--color-terracotta);
  }

  .loop-icon {
    width: 18px;
    height: 18px;
  }

  .feedback-loops {
    width: 100%;
    animation: slideDown 0.3s ease-out;
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .loop-lines {
    width: 100%;
    height: 120px;
  }

  .loop-path {
    animation: dashMove 1.5s linear infinite;
  }

  .loop-path-2 {
    animation-delay: 0.75s;
  }

  @keyframes dashMove {
    to {
      stroke-dashoffset: -24;
    }
  }

  .loop-arrow {
    animation: pulse 1.5s ease-in-out infinite;
  }

  .loop-arrow-2 {
    animation-delay: 0.75s;
  }

  @keyframes pulse {
    0%, 100% { opacity: 0.6; }
    50% { opacity: 1; }
  }

  .loop-label {
    font-size: 11px;
    fill: var(--color-terracotta);
    font-weight: 500;
  }

  .loop-label-slate {
    fill: var(--color-slate);
  }

  .loop-explanation {
    background: rgba(96, 125, 139, 0.05);
    padding: var(--space-md);
    border-radius: 8px;
    border-left: 3px solid var(--color-slate);
  }

  .loop-explanation p {
    font-size: 0.9rem;
    color: var(--color-black);
    margin: 0 0 var(--space-sm) 0;
    line-height: 1.5;
  }

  .loop-explanation strong {
    color: var(--color-terracotta);
  }

  .loop-explanation ul {
    margin: 0;
    padding-left: var(--space-lg);
    font-size: 0.85rem;
    color: var(--color-slate);
  }

  .loop-explanation li {
    margin-bottom: var(--space-xs);
  }

  .loop-explanation .terracotta {
    color: var(--color-terracotta);
    font-weight: 600;
  }

  .loop-explanation .slate {
    color: var(--color-slate);
    font-weight: 600;
  }

  /* Closing text */
  .closing-text {
    font-size: 1.25rem;
    color: var(--color-terracotta);
    font-weight: 600;
    text-align: center;
    margin-top: auto;
    padding-bottom: var(--space-lg);
  }

  @media (max-width: 767px) {
    .academic-texts {
      flex-direction: column;
      gap: var(--space-md);
    }

    .implementation-area {
      flex-direction: column;
    }

    .vault-section {
      padding-top: 0;
    }

    .dialog-section {
      flex-direction: column;
    }

    .chat-area {
      max-height: 200px;
    }
  }
</style>
