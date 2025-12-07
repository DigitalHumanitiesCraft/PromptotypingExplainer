<script>
  import GlossaryTerm from '../../GlossaryTerm.svelte';
  import DeepDiveTrigger from '../../elements/DeepDiveTrigger.svelte';
  import { openDeepDive } from '../../../stores/deepDive.js';

  function handleDeepDive(event) {
    openDeepDive(event.detail.id);
  }
</script>

<div class="intro-methodik">
  <div class="content">
    <h3>Critical Expert in the Loop</h3>

    <div class="explanation">
      <p>
        Ein zentrales Prinzip von Promptotyping: <strong>Domänenexpert:innen bleiben unverzichtbar</strong>.
        LLMs können technisch korrekte, aber fachlich inadäquate Lösungen produzieren. Nur Expert:innen
        erkennen, ob eine Visualisierung historisch sinnvoll ist oder ob Kategorisierungen dem
        Forschungsgegenstand gerecht werden.
      </p>

      <p class="vibe-coding-note">
        <strong>Verhältnis zu Vibe Coding</strong>
        Promptotyping ist kein Gegenentwurf zu Vibe Coding,
        sondern gibt ihm Struktur für Forschungskontexte. Die intuitive, explorative Arbeitsweise
        bleibt erhalten, ergänzt durch systematische Dokumentation, die <GlossaryTerm id="context-rot">Context Rot</GlossaryTerm>
        verhindert und die Informationsdichte maximiert.
      </p>
    </div>

    <div class="method-cards">
      <div class="method-card">
        <div class="card-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14,2 14,8 20,8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
          </svg>
        </div>
        <h4>Vault-Dokumentation</h4>
        <p>DATA.md, REQUIREMENTS.md, CONTEXT.md – strukturiertes Wissen als LLM-Input</p>
      </div>
      <div class="method-card">
        <div class="card-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10"/>
            <path d="M12 6v6l4 2"/>
          </svg>
        </div>
        <h4>Iterative Updates</h4>
        <p>Der Vault wächst mit jeder Iteration – neues Wissen fließt zurück</p>
      </div>
      <div class="method-card">
        <div class="card-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
        <h4>Expert Validation</h4>
        <p>Domänenexpert:innen validieren jeden Output kritisch</p>
      </div>
    </div>

    <div class="deep-dive-triggers">
      <DeepDiveTrigger
        label="Critical Expert"
        deepDiveId="critical-expert"
        on:open={handleDeepDive}
      />
      <DeepDiveTrigger
        label="Scholar-Centered Design"
        deepDiveId="scholar-centered-design"
        on:open={handleDeepDive}
      />
      <DeepDiveTrigger
        label="Context Engineering"
        deepDiveId="context-engineering"
        on:open={handleDeepDive}
      />
      <DeepDiveTrigger
        label="Grenzen & Limitationen"
        deepDiveId="limitations"
        on:open={handleDeepDive}
      />
    </div>
  </div>
</div>

<style>
  .intro-methodik {
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
    max-width: 900px;
  }

  h3 {
    font-size: clamp(1.25rem, 2.5vw, 1.5rem);
    color: var(--color-black);
    margin: 0;
    text-align: center;
  }

  .explanation {
    max-width: 750px;
    background: white;
    padding: var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  }

  .explanation p {
    font-size: clamp(0.95rem, 1.6vw, 1.05rem);
    color: var(--color-black);
    line-height: 1.7;
    text-align: justify;
    margin: 0 0 var(--space-md);
  }

  .explanation p strong {
    color: var(--color-terracotta);
  }

  .vibe-coding-note {
    background: rgba(96, 125, 139, 0.06);
    padding: var(--space-md);
    border-radius: 8px;
    font-size: clamp(0.9rem, 1.4vw, 0.95rem) !important;
    color: var(--color-slate) !important;
    text-align: justify;
  }

  .vibe-coding-note strong {
    color: var(--color-black) !important;
    display: block;
    margin-bottom: var(--space-xs);
  }

  .method-cards {
    display: flex;
    gap: var(--space-lg);
    flex-wrap: wrap;
    justify-content: center;
  }

  .method-card {
    background: var(--color-white);
    border: 1px solid rgba(96, 125, 139, 0.2);
    border-radius: 8px;
    padding: var(--space-lg);
    text-align: center;
    width: 200px;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .method-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }

  .card-icon {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--color-terracotta);
    color: var(--color-white);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto var(--space-md);
  }

  .card-icon svg {
    width: 24px;
    height: 24px;
  }

  .method-card h4 {
    color: var(--color-black);
    margin: 0 0 var(--space-xs);
    font-size: 0.95rem;
  }

  .method-card p {
    color: var(--color-slate);
    margin: 0;
    font-size: 0.85rem;
    line-height: 1.5;
  }

  .deep-dive-triggers {
    display: flex;
    gap: var(--space-md);
    flex-wrap: wrap;
    justify-content: center;
  }

  @media (max-width: 767px) {
    .method-cards {
      flex-direction: column;
      align-items: center;
    }

    .method-card {
      width: 100%;
      max-width: 280px;
    }
  }
</style>
