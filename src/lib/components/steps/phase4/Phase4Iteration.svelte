<script>
  import { fade, fly } from 'svelte/transition';
  import AnimatedChat from '../../elements/AnimatedChat.svelte';
  import DeepDiveTrigger from '../../elements/DeepDiveTrigger.svelte';
  import { openDeepDive } from '../../../stores/deepDive.js';

  function handleDeepDive(event) {
    openDeepDive(event.detail.id);
  }
</script>

<div class="phase4-iteration">
  <h3 in:fade={{ duration: 400 }}>Der Iterationszyklus</h3>

  <div class="intro-text" in:fade={{ delay: 150, duration: 400 }}>
    <p>
      Der Iterationszyklus ist das Herzstück der Implementation. Er folgt einem klaren Muster:
      <strong>Context → Reasoning → Plan → Implementation → Test → Feedback → Dokumentation</strong>.
      Entscheidend ist das Verständnis dessen, was im "Reasoning"-Schritt tatsächlich passiert.
    </p>
  </div>

  <div class="iteration-grid">
    <figure class="chat-side" in:fly={{ x: -30, duration: 500, delay: 300 }}>
      <AnimatedChat />
      <figcaption>Der Reasoning-Zyklus: Fragen, Planen, Implementieren, Dokumentieren</figcaption>
    </figure>

    <div class="text-card explainer-side" in:fly={{ x: 30, duration: 500, delay: 400 }}>
      <p>
        Der Zyklus beginnt mit dem <strong>Kontext</strong>: Der gesamte Vault oder eine gezielte Auswahl
        relevanter Dokumente wird dem LLM mitgegeben. Im <strong>"Reasoning"</strong> ruft das LLM
        passende Muster aus seinem Training ab und interpoliert eine Lösung. Es analysiert nicht,
        es retrievet approximativ – ein fundamentaler Unterschied zu menschlichem Denken.
      </p>
      <p>
        Der generierte <strong>Plan</strong> wird implementiert und direkt <strong>getestet</strong>.
        Fehler werden sofort sichtbar. Kritisches <strong>Feedback</strong> durch den Critical Expert
        gibt die Richtung für die nächste Iteration vor. Dieser Test-Feedback-Loop ist entscheidend:
        LLMs haben keine intrinsische Qualitätskontrolle, das Urteil muss extern kommen.
      </p>
      <p>
        Am Ende jedes Zyklus steht die <strong>Dokumentation</strong>: Neues Wissen fließt sofort
        zurück in den Vault. Der Kontext wächst – und der nächste Zyklus startet mit besserem
        Retrieval-Material. Dieser Feedback-Loop ist das, was Promptotyping von einmaligen
        Prompt-Versuchen unterscheidet.
      </p>

      <div class="prompting-strategies">
        <h4>Prompting-Strategien</h4>
        <ul>
          <li><strong>Chain-of-Thought (CoT):</strong> "Erkläre Schritt für Schritt, wie du vorgehst..."</li>
          <li><strong>Few-Shot Learning:</strong> Konkrete Beispiele im Prompt mitgeben</li>
          <li><strong>Role Prompting:</strong> "Als erfahrener DH-Entwickler..."</li>
          <li><strong>Constraint Setting:</strong> "Verwende nur vanilla JS, keine externen Dependencies"</li>
        </ul>
      </div>

      <div class="deep-dive-trigger-wrapper">
        <DeepDiveTrigger
          label="LLMs als Retrieval-Systeme"
          deepDiveId="llm-retrieval"
          on:open={handleDeepDive}
        />
      </div>
    </div>
  </div>
</div>

<style>
  .phase4-iteration {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-lg);
    text-align: center;
  }

  h3 {
    color: var(--color-black);
    font-size: clamp(1.25rem, 3vw, 1.75rem);
    margin: 0;
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
    text-align: justify;
    margin: 0;
  }

  .intro-text strong {
    color: var(--color-terracotta);
    font-family: var(--font-mono);
    font-size: 0.9em;
  }

  .iteration-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-lg);
    width: 100%;
    max-width: 1100px;
    align-items: start;
  }

  .chat-side {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: var(--space-sm);
    margin: 0;
  }

  .chat-side figcaption {
    font-size: 0.85rem;
    color: var(--color-slate);
    font-style: italic;
    text-align: center;
    max-width: 380px;
  }

  .explainer-side {
    max-width: 420px;
  }

  .prompting-strategies {
    margin-top: var(--space-md);
    padding: var(--space-md);
    background: rgba(191, 91, 62, 0.06);
    border-radius: 8px;
    border-left: 3px solid var(--color-terracotta);
  }

  .prompting-strategies h4 {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-terracotta);
    margin: 0 0 var(--space-sm) 0;
  }

  .prompting-strategies ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .prompting-strategies li {
    font-size: 0.8rem;
    color: var(--color-black);
    line-height: 1.5;
    padding: 4px 0;
  }

  .prompting-strategies li strong {
    color: var(--color-terracotta);
  }

  .deep-dive-trigger-wrapper {
    margin-top: var(--space-md);
    display: flex;
    justify-content: flex-start;
  }

  @media (max-width: 900px) {
    .iteration-grid {
      grid-template-columns: 1fr;
      gap: var(--space-md);
    }

    .chat-side {
      align-items: center;
    }

    .explainer-side {
      max-width: 100%;
      margin: 0 auto;
    }

    .deep-dive-trigger-wrapper {
      justify-content: center;
    }
  }
</style>
