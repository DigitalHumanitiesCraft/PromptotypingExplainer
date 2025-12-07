<script>
  import { fade, fly } from 'svelte/transition';
  import AnimatedChat from '../../elements/AnimatedChat.svelte';
</script>

<div class="phase4-iteration">
  <h3 in:fade={{ duration: 400 }}>Der Iterationszyklus</h3>
  <p class="description" in:fade={{ delay: 150, duration: 400 }}>
    Context → Reasoning → Plan → Implementation → Test → Feedback → Dokumentation
  </p>

  <div class="iteration-grid">
    <figure class="chat-side" in:fly={{ x: -30, duration: 500, delay: 300 }}>
      <AnimatedChat />
      <figcaption>Der Reasoning-Zyklus: Fragen, Planen, Implementieren, Dokumentieren</figcaption>
    </figure>

    <div class="text-card explainer-side" in:fly={{ x: 30, duration: 500, delay: 400 }}>
      <p>
        Der Zyklus beginnt mit dem <strong>Kontext</strong>: Vault-Dokumente werden dem LLM mitgegeben,
        damit es das Domänenwissen versteht. Im <strong>Reasoning</strong> analysiert das LLM den
        Kontext und identifiziert Probleme, bevor es einen konkreten <strong>Plan</strong> erstellt.
      </p>
      <p>
        Erst dann folgt die <strong>Implementation</strong>. Der generierte Code wird direkt
        <strong>getestet</strong> – Fehler werden sofort sichtbar. Kritisches <strong>Feedback</strong>
        gibt die Richtung für die nächste Iteration vor.
      </p>
      <p>
        Am Ende jedes Zyklus steht die <strong>Dokumentation</strong>: Neues Wissen fließt zurück
        in den Vault. Der Kontext wächst – und der nächste Zyklus startet mit besserem Ausgangsmaterial.
      </p>
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

  .description {
    color: var(--color-black);
    font-size: clamp(0.85rem, 1.4vw, 0.95rem);
    max-width: 700px;
    margin: 0;
    font-family: var(--font-mono);
    background: white;
    padding: var(--space-sm) var(--space-lg);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
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
  }
</style>
