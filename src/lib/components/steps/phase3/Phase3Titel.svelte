<script>
  import { fade, fly } from 'svelte/transition';
  import GlossaryTerm from '../../GlossaryTerm.svelte';
</script>

<div class="phase3-titel">
  <header class="scene-header" in:fly={{ y: -20, duration: 500 }}>
    <span class="phase-number">Phase 3</span>
    <h2>Destillation</h2>
    <p class="subtitle">Vom Rohmaterial zum Vault</p>
  </header>

  <div class="text-card" in:fade={{ delay: 200, duration: 400 }}>
    <p class="lead">
      Die Erkenntnisse aus der Exploration werden nun zu strukturierten, LLM-optimierten
      Dokumenten <strong>destilliert</strong>. Das Kernprinzip heißt <strong>Context Compression</strong>:
      maximale Information mit minimalen Tokens. Je präziser und dichter der Kontext formuliert ist,
      desto besser die LLM-Performance.
    </p>

    <p>
      Der Grund: <GlossaryTerm id="context-rot">Context Rot</GlossaryTerm> ist real. Hong et al. (2025)
      zeigen, dass LLM-Leistung mit wachsender Kontextlänge degradiert – mehr Tokens führen
      nicht automatisch zu besseren Ergebnissen. Das widerspricht der intuitiven Annahme,
      dass mehr Information besser ist. Gezielte Verdichtung erhöht die Modellaufmerksamkeit
      auf wesentliche Aspekte. Das ist das <strong>Compression-als-Amplification-Paradox</strong>:
      Weniger kann mehr sein.
    </p>
  </div>

  <div class="vault-preview" in:fly={{ y: 20, duration: 400, delay: 400 }}>
    <div class="vault-icon">
      <svg viewBox="0 0 64 64" width="80" height="80">
        <rect x="8" y="16" width="48" height="40" rx="4" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M8 28 L56 28" stroke="currentColor" stroke-width="2"/>
        <circle cx="32" cy="38" r="6" fill="none" stroke="currentColor" stroke-width="2"/>
        <path d="M32 32 L32 20" stroke="currentColor" stroke-width="2"/>
        <rect x="24" y="8" width="16" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="2"/>
      </svg>
    </div>
    <p class="vault-label" in:fade={{ delay: 600, duration: 400 }}>Der Promptotyping Vault</p>
  </div>

  <div class="context-rot-box" in:fade={{ delay: 700, duration: 400 }}>
    <h4>Context Rot vermeiden</h4>
    <p>
      Unstrukturierter Text wirkt als Rauschen, das LLMs von relevanten Instruktionen ablenkt.
      Daher: kurze, prägnante Sätze statt langer Absätze. Klare Überschriften und Markierungen.
      Strukturierte Listen statt Fließtext. Explizite Aussagen statt impliziter Annahmen.
    </p>
  </div>
</div>

<style>
  .phase3-titel {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-lg);
    text-align: center;
  }

  .scene-header {
    text-align: center;
  }

  .phase-number {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-terracotta);
    font-weight: 600;
  }

  h2 {
    color: var(--color-black);
    margin: var(--space-xs) 0;
  }

  .subtitle {
    color: var(--color-slate);
    margin: 0;
  }

  .lead {
    font-size: clamp(0.9rem, 1.6vw, 1rem);
    color: var(--color-black);
    line-height: 1.7;
    text-align: left;
    margin: 0;
  }

  .lead strong {
    color: var(--color-terracotta);
  }

  .vault-preview {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
  }

  .vault-icon {
    color: var(--color-slate);
    padding: var(--space-md);
    background: rgba(255, 255, 255, 0.8);
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }

  .vault-label {
    font-size: 0.9rem;
    color: var(--color-slate);
    font-weight: 500;
    margin: 0;
  }

  .context-rot-box {
    max-width: 650px;
    background: rgba(191, 91, 62, 0.06);
    padding: var(--space-md) var(--space-lg);
    border-radius: 8px;
    border-left: 3px solid var(--color-terracotta);
    text-align: left;
  }

  .context-rot-box h4 {
    font-size: 0.85rem;
    color: var(--color-terracotta);
    margin: 0 0 var(--space-sm) 0;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .context-rot-box p {
    font-size: 0.85rem;
    color: var(--color-black);
    line-height: 1.6;
    margin: 0;
  }
</style>
