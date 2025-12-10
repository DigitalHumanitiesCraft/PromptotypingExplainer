<script>
  import DeepDiveTrigger from '../../elements/DeepDiveTrigger.svelte';
</script>

<div class="intro-scholar-centered">
  <h2>Scholar-Centered Design</h2>

  <div class="text-card">
    <p>
      <strong>User-Centered Design (UCD)</strong> bezeichnet die systematische Erhebung, Dokumentation
      und Verwaltung von Anforderungen, bei der die Bedürfnisse, Fähigkeiten und Einschränkungen der
      zukünftigen Nutzer im Mittelpunkt stehen. Das Kernziel ist die Maximierung von Usability und
      User Experience. Das Leitprinzip ist die Anpassung der Technologie an den Menschen.
    </p>

    <p>
      <strong>Scholar-Centered Design (SCD)</strong> ist eine spezialisierte Weiterentwicklung des UCD
      für den wissenschaftlichen Kontext. Es adressiert die spezifischen Arbeitsweisen von Forschenden
      in den Digital Humanities und verwandten Feldern. Das Kernziel ist die Unterstützung komplexer
      hermeneutischer Prozesse und Erkenntnisgewinnung. Das Leitprinzip ist die Unterstützung von
      Komplexität statt reiner Vereinfachung sowie Transparenz der Datenherkunft.
    </p>

    <p>
      UCD reduziert kognitive Last und versteckt Komplexität. SCD macht Komplexität navigierbar,
      ohne sie zu verstecken. UCD akzeptiert Platzhalter im Prototyp. SCD braucht echte
      Forschungsdaten, weil wissenschaftliche Arbeit inhaltsgetrieben ist. UCD misst Effizienz
      und Zufriedenheit. SCD fragt, ob das Tool zu neuen Erkenntnissen führt.
    </p>

    <h3>Knowledge Acquisition und User Stories</h3>

    <p>
      Wie kommt man zu einem Interface, das Forschungsfragen unterstützt? Durch Knowledge Acquisition
      in Workshops mit Domänenexperten. Daraus entstehen Personas und User Stories als Anforderungen
      an das System.
    </p>

    <div class="table-container">
      <table class="user-stories-table">
        <thead>
          <tr>
            <th>As a ...</th>
            <th>I want to ...</th>
            <th>So that I can ...</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>social historian</td>
            <td>view transaction networks between individuals and organisations in Norton (businesses, churches, schools, and civic institutions)</td>
            <td>identify the key economic relationships in the community</td>
          </tr>
          <tr>
            <td>social historian</td>
            <td>filter networks by personal relationships (gender, marriage, family ties)</td>
            <td>find how family connections shaped business patterns</td>
          </tr>
          <tr>
            <td>social historian</td>
            <td>filter networks by institutional relationships (affiliations, partnerships, roles)</td>
            <td>discover how organisational ties influenced economic exchange</td>
          </tr>
          <tr>
            <td>social historian</td>
            <td>see network changes between 1828-1859</td>
            <td>track how community business relationships developed over time</td>
          </tr>
          <tr>
            <td>social historian</td>
            <td>compare business activities between different community groups</td>
            <td>map economic cooperation and division in Norton</td>
          </tr>
          <tr>
            <td>social historian</td>
            <td>view how men and women participated differently in credit and trade networks</td>
            <td>reveal gender patterns in Norton's economic life</td>
          </tr>
        </tbody>
      </table>
      <p class="table-caption">User Stories für eine Sozialhistorikerin, die mit historischen Finanzdaten arbeitet</p>
    </div>

    <p>
      Diese User Stories zeigen den Unterschied zu generischem UCD. Es geht nicht um "der Nutzer
      will Daten filtern", sondern um spezifische Forschungsfragen mit fachlichem Erkenntnisziel.
      Die Visualisierungen sollen unterschiedliche Perspektiven auf die Daten und unterschiedliche
      Forschungsinteressen abbilden (Pollin, 2025).
    </p>

    <div class="deep-dive-triggers">
      <DeepDiveTrigger
        label="Scholar-Centered Design"
        deepDiveId="scholar-centered-design"
      />
    </div>
  </div>
</div>

<style>
  .intro-scholar-centered {
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

  h3 {
    font-size: clamp(1.1rem, 2vw, 1.25rem);
    color: var(--color-black);
    margin: var(--space-md) 0 var(--space-sm) 0;
  }

  .table-container {
    margin: var(--space-lg) 0;
    overflow-x: auto;
  }

  .user-stories-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
    background: var(--color-cream);
    border-radius: 6px;
    overflow: hidden;
  }

  .user-stories-table th,
  .user-stories-table td {
    padding: var(--space-sm) var(--space-md);
    text-align: left;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  .user-stories-table th {
    background: var(--color-slate);
    color: white;
    font-weight: 600;
    font-size: 0.85rem;
  }

  .user-stories-table td:first-child {
    font-style: italic;
    color: var(--color-slate);
    white-space: nowrap;
  }

  .user-stories-table tr:last-child td {
    border-bottom: none;
  }

  .user-stories-table tr:hover {
    background: rgba(191, 91, 62, 0.05);
  }

  .table-caption {
    font-size: 0.85rem;
    color: var(--color-slate);
    text-align: center;
    margin-top: var(--space-sm);
    font-style: italic;
  }
</style>
