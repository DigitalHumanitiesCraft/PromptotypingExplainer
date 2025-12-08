<script>
  import GlossaryTerm from '../../GlossaryTerm.svelte';
  import overviewImg from '../../../../assets/images/promptotyping-overview.png';
</script>

<div class="intro-kernprinzip">
  <h2>Das Kernprinzip</h2>

  <div class="research-blog-block">
    <p class="core-question">
      <strong>Wie strukturiert man Forschungsdaten, explizites und implizites Domänenwissen so, dass ein LLM fachlich angemessene Forschungsartefakte erzeugt?</strong>
    </p>

    <p>
      Nicht das Coden selbst ist die Kernkompetenz, sondern das Wissen darüber, was guter Code für
      Forschungszwecke ist. Modellierung, Formalisierung, Domänenwissen und kritische Validierung sind
      die eigentlichen Anforderungen. <span class="promptotyping">Promptotyping</span> ist eine Methode,
      diese Anforderungen systematisch umzusetzen.
    </p>

    <p>
      Der Prozess des <span class="promptotyping">Promptotyping</span> verläuft in vier Phasen. In der
      <strong>Preparation</strong> werden zwei Arten von Material gesammelt. Erstens die zu verarbeitenden
      Daten in strukturierter oder semi-strukturierter Form wie XML, CSV, Excel oder Textdateien. Zweitens
      das Kontextwissen, also Literatur, Dokumentationen, implizites Wissen der Forschenden sowie der
      Forschungskontext mit Forschungsdesign und Forschungsfragen.
    </p>

    <p>
      Die <strong>Exploration</strong> prüft, ob sich Forschungsfragen auf die Datenstruktur abbilden lassen.
      Die <strong>Distillation</strong> verdichtet das gesammelte Material zu strukturierten Dokumenten
      (DATA.md, REQUIREMENT.md, RESEARCH.md). Die <strong>Implementation</strong> nutzt diese Dokumente
      für iterative Arbeit mit dem <GlossaryTerm id="llm">LLM</GlossaryTerm> und der Codeerzeugung, wobei
      neues Wissen zurück in die Dokumentation fließt.
    </p>

    <p>
      Der <GlossaryTerm id="critical-expert">Critical Expert in the Loop</GlossaryTerm> begleitet diesen Prozess. Er prüft nicht nur, ob ein Ergebnis korrekt
      ist, sondern ob es fachlich angemessen ist. LLMs liefern oft sehr gute Ergebnisse und können gleichzeitig
      nie Verlässlichkeit garantieren. Diese Spannung ist nicht auflösbar, nur durch fachliche Prüfung handhabbar.
    </p>

    <figure class="overview-diagram">
      <img src={overviewImg} alt="Promptotyping Workflow: Preparation → Exploration → Distillation → Implementation" />
    </figure>
  </div>
</div>

<style>
  .intro-kernprinzip {
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

  .core-question {
    font-size: clamp(1.05rem, 1.8vw, 1.15rem) !important;
    text-align: center !important;
    padding: var(--space-md);
    background: rgba(191, 91, 62, 0.06);
    border-radius: 6px;
    border-left: 3px solid var(--color-terracotta);
  }

  .core-question strong {
    color: var(--color-terracotta);
  }

  .promptotyping {
    font-family: var(--font-mono);
    font-weight: 700;
    color: var(--color-terracotta);
    letter-spacing: 0.02em;
  }

  .overview-diagram {
    margin: var(--space-lg) 0 0 0;
    padding: 0;
  }

  .overview-diagram img {
    width: 100%;
    height: auto;
    border-radius: 6px;
  }
</style>
