import{a as xt,E as zt,B as Dt,b as Pt,e as vt,u as V,T as _t,w as ht,i as Et,q as pt,n as Ce,s as Mt,c as St,d as Lt,r as Ct,S as At,f as It,g as Ie,h as $e,j as ce,k as y,l as pe,m as p,p as oe,o as tt,t as de,v as ge,x as s,y as r,z as Se,A as t,C as I,D as _e,F as T,G as A,H as X,I as ve,J as gt,K as be,L as Oe,M as re,N as C,O as ke,P as ee,Q as We,R as Ae,$ as $t,U as Be,V as Tt,W as N,X as Ft}from"./legacy-DWVdwokI.js";import{o as Ue,c as Vt,a as Kt,l as Rt,b as it}from"./case-studies-C90CW8cX.js";import{i as Q}from"./if-DCw_w9hf.js";import{s as Ne}from"./style-DJg-Gm8U.js";import{h as qt}from"./html-C0ix7bGn.js";import{g as jt}from"./glossary-DHyA3jB1.js";import{g as rt}from"./bibliography-BC9Y6H7_.js";const Bt=()=>performance.now(),fe={tick:i=>requestAnimationFrame(i),now:()=>Bt(),tasks:new Set};function mt(){const i=fe.now();fe.tasks.forEach(e=>{e.c(i)||(fe.tasks.delete(e),e.f())}),fe.tasks.size!==0&&fe.tick(mt)}function Wt(i){let e;return fe.tasks.size===0&&fe.tick(mt),{promise:new Promise(n=>{fe.tasks.add(e={c:i,f:n})}),abort(){fe.tasks.delete(e)}}}function je(i,e){ht(()=>{i.dispatchEvent(new CustomEvent(e))})}function Nt(i){if(i==="float")return"cssFloat";if(i==="offset")return"cssOffset";if(i.startsWith("--"))return i;const e=i.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(n=>n[0].toUpperCase()+n.slice(1)).join("")}function at(i){const e={},n=i.split(";");for(const a of n){const[o,d]=a.split(":");if(!o||d===void 0)break;const l=Nt(o.trim());e[l]=d.trim()}return e}const Ot=i=>i;function f(i,e,n,a){var o=(i&St)!==0,d=(i&Lt)!==0,l=o&&d,c=(i&_t)!==0,u=l?"both":o?"in":"out",m,h=e.inert,g=e.style.overflow,v,k;function x(){return ht(()=>m??=n()(e,a?.()??{},{direction:u}))}var z={is_global:c,in(){if(e.inert=h,!o){k?.abort(),k?.reset?.();return}d||v?.abort(),je(e,"introstart"),v=Je(e,x(),k,1,()=>{je(e,"introend"),v?.abort(),v=m=void 0,e.style.overflow=g})},out(w){if(!d){w?.(),m=void 0;return}e.inert=!0,je(e,"outrostart"),k=Je(e,x(),v,0,()=>{je(e,"outroend"),w?.()})},stop:()=>{v?.abort(),k?.abort()}},S=xt;if((S.nodes.t??=[]).push(z),o&&Mt){var E=c;if(!E){for(var P=S.parent;P&&(P.f&zt)!==0;)for(;(P=P.parent)&&(P.f&Dt)===0;);E=!P||(P.f&Pt)!==0}E&&vt(()=>{V(()=>z.in())})}}function Je(i,e,n,a,o){var d=a===1;if(Et(e)){var l,c=!1;return pt(()=>{if(!c){var S=e({direction:d?"in":"out"});l=Je(i,S,n,a,o)}}),{abort:()=>{c=!0,l?.abort()},deactivate:()=>l.deactivate(),reset:()=>l.reset(),t:()=>l.t()}}if(n?.deactivate(),!e?.duration)return o(),{abort:Ce,deactivate:Ce,reset:Ce,t:()=>a};const{delay:u=0,css:m,tick:h,easing:g=Ot}=e;var v=[];if(d&&n===void 0&&(h&&h(0,1),m)){var k=at(m(0,1));v.push(k,k)}var x=()=>1-a,z=i.animate(v,{duration:u,fill:"forwards"});return z.onfinish=()=>{z.cancel();var S=n?.t()??1-a;n?.abort();var E=a-S,P=e.duration*Math.abs(E),w=[];if(P>0){var L=!1;if(m)for(var F=Math.ceil(P/16.666666666666668),K=0;K<=F;K+=1){var G=S+E*g(K/F),te=at(m(G,1-G));w.push(te),L||=te.overflow==="hidden"}L&&(i.style.overflow="hidden"),x=()=>{var q=z.currentTime;return S+E*g(q/P)},h&&Wt(()=>{if(z.playState!=="running")return!1;var q=x();return h(q,1-q),!0})}z=i.animate(w,{duration:P,fill:"forwards"}),z.onfinish=()=>{x=()=>a,h?.(a,1-a),o()}},{abort:()=>{z&&(z.cancel(),z.effect=null,z.onfinish=Ce)},deactivate:()=>{o=Ce},reset:()=>{a===0&&h?.(1,0)},t:()=>x()}}function lt(i,e){return i===e||i?.[At]===e}function Ye(i={},e,n,a){return vt(()=>{var o,d;return Ct(()=>{o=d,d=[],V(()=>{i!==n(...d)&&(e(i,...d),o&&lt(n(...o),i)&&e(null,...o))})}),()=>{pt(()=>{d&&lt(n(...d),i)&&e(null,...d)})}}),i}function Ut(i){return function(...e){var n=e[0];return n.stopPropagation(),i?.apply(this,e)}}function Gt(i,e){var n=i.$$events?.[e.type],a=It(n)?n.slice():n==null?[]:[n];for(var o of a)o.call(this,e)}const ye=$e(0),Ee=$e(0),J=[{id:"intro",label:"Promptotyping",number:null,subtitle:"Einführung",steps:[{id:"definition",label:"Definition"},{id:"vibecoding",label:"Vibe Coding"},{id:"strangeminds",label:"Strange New Minds"},{id:"kernprinzip",label:"Kernprinzip"},{id:"methodik",label:"Critical Expert"},{id:"scholar-centered",label:"Scholar-Centered"},{id:"phasen",label:"Phasen"}]},{id:"phase1",label:"Preparation",number:1,subtitle:"Materialsammlung",steps:[{id:"titel",label:"Übersicht"},{id:"datenqualitaet",label:"Gute Daten"},{id:"sammlung",label:"Sammlung"}]},{id:"phase2",label:"Exploration",number:2,subtitle:"Daten-Kontext-Relationen",steps:[{id:"exploration",label:"Exploration"}]},{id:"phase3",label:"Destillation",number:3,subtitle:"Vault (.md Files)",steps:[{id:"titel",label:"Übersicht"},{id:"dokumente",label:".md Dokumente"},{id:"vault",label:"Vault"}]},{id:"phase4",label:"Implementation",number:4,subtitle:"Prototype + Vault-Update",steps:[{id:"titel",label:"Übersicht"},{id:"iteration",label:"Iteration"},{id:"journal",label:"Journal"},{id:"versionierung",label:"Versionierung"},{id:"vault-update",label:"Vault-Update"}]},{id:"outro",label:"Praxis",number:null,subtitle:"Case Studies & Reflexion",steps:[{id:"beispiele",label:"Beispiele"},{id:"diskussion",label:"Diskussion"},{id:"zusammenfassung",label:"Zusammenfassung"}]}],et=J.reduce((i,e)=>i+e.steps.length,0),ft=Ie([ye,Ee],([i,e])=>{let n=0;for(let a=0;a<i;a++)n+=J[a].steps.length;return n+e}),Ht=Ie(ft,i=>i/(et-1));Ie([ye,Ee],([i,e])=>{const n=J[i];return!n||n.steps.length<=1?0:e/(n.steps.length-1)});Ie(ye,i=>J[i]||J[0]);Ie([ye,Ee],([i,e])=>{const n=J[i];return n?n.steps[e]||n.steps[0]:null});J.map((i,e)=>({id:i.id,label:i.label,steps:i.steps.map(n=>n.id)}));const ot=$e(!1);function Zt(){if(typeof window<"u"){const i=window.matchMedia("(prefers-reduced-motion: reduce)");ot.set(i.matches),i.addEventListener("change",e=>{ot.set(e.matches)})}}function dt(i){if(typeof window>"u")return;const e=document.getElementById(i);e&&e.scrollIntoView({behavior:"smooth"})}function Qe(){if(typeof window>"u")return;const i=window.location.hash.slice(1);if(!i)return;const e=document.getElementById(i);if(e){setTimeout(()=>{e.scrollIntoView({behavior:"smooth"})},100);return}const n=i.split("-"),a=n[0],o=n.slice(1).join("-"),d=J.findIndex(u=>u.id===a);if(d===-1)return;const l=J[d];let c=a;o?l.steps.some(m=>m.id===o)&&(c=`${a}-${o}`):c=`${a}-${l.steps[0].id}`,setTimeout(()=>{const u=document.getElementById(c);u&&u.scrollIntoView({behavior:"smooth"})},100)}let ct="";function Xt(i,e){if(typeof window>"u")return;const n=J[i];if(!n)return;const a=n.steps[e],o=a?`${n.id}-${a.id}`:n.id;o!==ct&&(ct=o,history.replaceState(null,"",`#${o}`))}const Qt={"system-1-42":{id:"system-1-42",title:"System 1.42 – Wie LLMs funktionieren",content:`
      <h3>Warum "System 1.42"?</h3>
      <p>
        Der Begriff spielt auf Daniel Kahnemans Dual-Process-Theorie an: <strong>System 1</strong> (schnell, intuitiv)
        vs. <strong>System 2</strong> (langsam, analytisch). LLMs passen in keine der beiden Kategorien –
        sie sind etwas Neues: <em>halluzinierende Reasoner</em>.
      </p>
      <p>
        "1.42" symbolisiert die grundlegende <strong>Ungewissheit</strong> über diese Technologie.
        Wer mit LLMs arbeitet, muss verstehen, was sie sind – und was nicht.
      </p>

      <h3>Technische Grundlagen</h3>
      <table>
        <thead>
          <tr><th>Konzept</th><th>Erklärung</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Token</strong></td>
            <td>Atomare Einheiten der Textverarbeitung. Ein Wort, Wortfragment oder Zeichen.</td>
          </tr>
          <tr>
            <td><strong>Embedding</strong></td>
            <td>Mathematische Vektoren in hochdimensionalen Räumen. "Katze" und "Hund" liegen näher als "Katze" und "Stein".</td>
          </tr>
          <tr>
            <td><strong>Context Window</strong></td>
            <td>Das "Arbeitsgedächtnis" – moderne Modelle verarbeiten bis zu 200.000 Token gleichzeitig.</td>
          </tr>
          <tr>
            <td><strong>Attention</strong></td>
            <td>Der Mechanismus, der bestimmt, welche Token für andere relevant sind.</td>
          </tr>
        </tbody>
      </table>

      <h3>Next-Token-Prediction</h3>
      <p>
        Die Kernfunktion aller LLMs: Das Modell berechnet die <strong>Wahrscheinlichkeit des nächsten Tokens</strong>
        basierend auf allen vorherigen Token. Das ist alles. Keine "Intelligenz", keine "Absicht" –
        nur statistische Mustererkennung auf massiver Skala.
      </p>

      <h3>Training in drei Phasen</h3>
      <ol>
        <li><strong>Pre-Training:</strong> Selbstüberwachtes Lernen aus Billionen Token Internet-Text</li>
        <li><strong>Supervised Fine-Tuning:</strong> Spezialisierung durch Instruktion-Antwort-Paare</li>
        <li><strong>RLHF:</strong> Optimierung anhand menschlicher Präferenzen (Reinforcement Learning from Human Feedback)</li>
      </ol>

      <h3>Emergenz – oder Illusion?</h3>
      <p>
        Große Modelle zeigen plötzliche Fähigkeitssprünge bei kritischer Größe – sogenannte <em>emergente Eigenschaften</em>.
        Ob dies echter Emergenz entspricht oder überzeugender Simulation, bleibt wissenschaftlich offen.
      </p>

      <h3>Konsequenzen für die Praxis</h3>
      <ul>
        <li>LLMs <strong>können nicht validieren</strong>, ob ihre Antworten korrekt sind</li>
        <li><strong>Halluzinationen sind architekturisch unvermeidbar</strong>, nicht behebbar</li>
        <li><strong>Externe Verifikation</strong> durch Domänenexpert:innen ist notwendig</li>
        <li>Sie funktionieren <strong>anders als menschliches Denken</strong>, auch wenn Ergebnisse ähnlich wirken</li>
      </ul>

      <div class="reference">
        <strong>Fazit:</strong> Promptotyping basiert auf diesem Verständnis: LLMs als mächtige Werkzeuge nutzen,
        aber mit kritischem Expertenblick validieren.<br><br>
        <strong>Quelle:</strong> Pollin, C. (2025): <em>System 1.42 – Wie Frontier-LLMs funktionieren</em>. DHCraft Blog.
      </div>
    `},"scholar-centered-design":{id:"scholar-centered-design",title:"Scholar-Centered Design",content:`
      <h3>User-Centered Design (UCD) Requirements Engineering</h3>
      <p>
        UCD Requirements Engineering bezeichnet die systematische Erhebung, Dokumentation und
        Verwaltung von Anforderungen, bei der die <strong>Bedürfnisse, Fähigkeiten und
        Einschränkungen der zukünftigen Nutzer</strong> im Mittelpunkt stehen. Das Kernziel ist
        die Maximierung von Usability und User Experience. Das Leitprinzip ist die Anpassung
        der Technologie an den Menschen.
      </p>

      <h3>Scholar-Centered Design (SCD)</h3>
      <p>
        Scholar-Centered Design ist eine spezialisierte Weiterentwicklung des UCD für den
        <strong>wissenschaftlichen Kontext</strong>. Es adressiert die spezifischen Arbeitsweisen
        von Forschenden in den Digital Humanities und verwandten Feldern. Das Kernziel ist die
        Unterstützung komplexer hermeneutischer Prozesse und Erkenntnisgewinnung. Das Leitprinzip
        ist die Unterstützung von Komplexität statt reiner Vereinfachung sowie Transparenz
        der Datenherkunft.
      </p>

      <h3>Wo UCD und SCD sich unterscheiden</h3>
      <p>
        UCD reduziert kognitive Last und versteckt Komplexität. SCD macht Komplexität navigierbar,
        ohne sie zu verstecken. UCD akzeptiert Platzhalter im Prototyp. SCD braucht echte
        Forschungsdaten, weil wissenschaftliche Arbeit inhaltsgetrieben ist. UCD misst Effizienz
        und Zufriedenheit. SCD fragt, ob das Tool zu neuen Erkenntnissen führt.
      </p>

      <h3>Der hermeneutische Zirkel als Iterationsmodell</h3>
      <p>
        In der wissenschaftlichen Praxis verändert oft das erste Sichten von Ergebnissen die
        Fragestellung selbst. Der Forscher erkennt neue Muster in den Daten und muss die
        Anforderungen anpassen. Dies ist nicht Fehlerbehebung, sondern <strong>Teil des
        Erkenntnisgewinns</strong>.
      </p>
      <p>
        Der hermeneutische Zirkel beschreibt dieses Wechselspiel zwischen dem Verstehen von Teilen
        und dem Verstehen des Ganzen. Promptotyping integriert diesen Zirkel durch die
        Rückflussschleife von der Implementation zurück zur Dokumentation.
      </p>

      <div class="reference">
        <strong>Referenzen:</strong><br>
        Pollin, C. (2025): <em>Modelling, Operationalising and Exploring Historical Information. Using Historical Financial Sources as an Example</em>. Dissertation, Universität Graz.
        <a href="http://unipub.uni-graz.at/obvugrhs/12127700" target="_blank">Link</a><br>
        Kemman, M. (2021): <em>Trading Zones of Digital History</em>. De Gruyter.<br>
        Pohl, K. & Rupp, C. (2015): <em>Basiswissen Requirements Engineering</em>. dpunkt.<br>
        Warwick, C. (2012): <em>Studying Users in Digital Humanities</em>. In C. Warwick, M. Terras & J. Nyhan (Eds.), Digital Humanities in Practice. Facet Publishing.
      </div>
    `},"knowledge-acquisition":{id:"knowledge-acquisition",title:"Knowledge Acquisition Methoden",content:`
      <h3>Methoden der Wissenserhebung</h3>
      <p>
        Die systematische Erhebung von Domänenwissen ist essentiell für die CONTEXT-Phase.
        Folgende Methoden haben sich bewährt:
      </p>

      <h3>Deep Dives (Workshops)</h3>
      <p>
        Intensive Arbeitssitzungen mit Domänenexpert:innen, in denen Forschungsfragen,
        Datenstrukturen und Analysemethoden gemeinsam erarbeitet werden.
      </p>
      <ul>
        <li>Dauer: 2-4 Stunden</li>
        <li>Teilnehmende: 2-5 Expert:innen</li>
        <li>Output: Annotierte Datenbeispiele, erste User Stories</li>
      </ul>

      <h3>Expert Interviews</h3>
      <p>
        Strukturierte Interviews zur Erhebung von implizitem Wissen (Tacit Knowledge).
      </p>
      <ul>
        <li>Halbstrukturierte Leitfäden</li>
        <li>Think-Aloud-Protokolle</li>
        <li>Kontextuelle Befragung am Arbeitsplatz</li>
      </ul>

      <h3>Personas</h3>
      <p>
        Fiktive, aber datenbasierte Repräsentationen typischer Nutzer:innen.
      </p>
      <ul>
        <li><strong>Sozialhistoriker:in:</strong> Arbeitet mit Archivquellen, sucht nach Netzwerken</li>
        <li><strong>Wirtschaftshistoriker:in:</strong> Analysiert Handelsdaten, erstellt Visualisierungen</li>
        <li><strong>Literaturwissenschaftler:in:</strong> Vergleicht Textversionen, annotiert</li>
      </ul>

      <h3>User Stories & Epics</h3>
      <p>
        Formalisierte Anforderungen aus Nutzerperspektive:
      </p>
      <code style="display: block; padding: 1rem; margin: 1rem 0; background: rgba(96, 125, 139, 0.1);">
        Als [Rolle] will ich [Funktion],<br>
        um [Nutzen] zu erreichen.
      </code>
      <p>
        <strong>Beispiel:</strong> "Als Historikerin will ich Korrespondenznetzwerke visualisieren,
        um Kommunikationsmuster in Exilgemeinschaften zu rekonstruieren."
      </p>

      <div class="reference">
        <strong>Referenzen:</strong><br>
        Beyer, H. & Holtzblatt, K. (1998): <em>Contextual Design</em>. Morgan Kaufmann.<br>
        Schneider, K. & Liskin, O. (2016): <em>Personas for Requirements Engineering</em>. INRIA.
      </div>
    `},"context-engineering":{id:"context-engineering",title:"Context Engineering für LLMs",content:`
      <h3>Was ist Context Engineering?</h3>
      <p>
        Context Engineering ist eine formale Disziplin, die über einfaches Prompt Design hinausgeht.
        Sie umfasst die <strong>systematische Optimierung der Informationspakete</strong>, die einem
        LLM zur Inferenzzeit bereitgestellt werden (Mei et al., 2025).
      </p>
      <p>
        Der Begriff markiert einen Paradigmenwechsel. Prompt Engineering behandelte Kontext als
        statischen Textstring. Context Engineering versteht Kontext als <strong>dynamisches,
        strukturiertes, multimodales Informationssystem</strong>.
      </p>

      <h3>Die Taxonomie nach Mei et al. (2025)</h3>
      <p>
        Die Survey analysiert über 1400 Papers und etabliert eine zweigliedrige Taxonomie.
      </p>

      <h4>Foundational Components</h4>
      <p>
        <strong>Context Retrieval and Generation</strong> umfasst die systematische Beschaffung und
        Konstruktion relevanter Information. Dazu gehören Prompting-Strategien (Zero-Shot, Few-Shot,
        Chain-of-Thought), Reasoning-Frameworks (Tree-of-Thoughts, Graph-of-Thoughts) und
        Self-Refinement-Mechanismen.
      </p>
      <p>
        <strong>Context Processing</strong> behandelt die Transformation und Aufbereitung von Kontext.
        Techniken wie FlashAttention optimieren die Verarbeitung langer Kontexte durch effiziente
        GPU-Speichernutzung.
      </p>
      <p>
        <strong>Context Management</strong> organisiert Information innerhalb begrenzter Context Windows.
        Hier greifen Kompressionsstrategien, Priorisierung und dynamische Kontextauswahl.
      </p>

      <h4>System Implementations</h4>
      <p>Die Komponenten integrieren sich zu komplexen Systemen:</p>
      <ul>
        <li><strong>Retrieval-Augmented Generation (RAG):</strong> Holt relevante Dokumente zur Laufzeit aus externen Wissensbasen</li>
        <li><strong>Memory Systems:</strong> Speichern Konversationshistorie und Nutzerprofile über Sessions hinweg</li>
        <li><strong>Tool-Integrated Reasoning:</strong> Verbindet LLMs mit externen Werkzeugen und APIs. MCP (Model Context Protocol) standardisiert diese Integration</li>
        <li><strong>Multi-Agent Systems:</strong> Koordinieren multiple LLM-Instanzen für komplexe Aufgaben</li>
      </ul>

      <h3>Das Problem der Context Degradation</h3>
      <p>
        LLMs zeigen ein fundamentales Skalierungsproblem. Die Self-Attention-Berechnung wächst
        <strong>quadratisch</strong> mit der Kontextlänge. 128K Tokens erfordern 122-mal mehr
        Rechenleistung als 4K Tokens.
      </p>
      <p>
        Mehr Kontext bedeutet nicht automatisch bessere Ergebnisse. Hong et al. (2025) dokumentieren
        <strong>"Context Rot"</strong>, bei dem die Modellleistung mit wachsender Kontextlänge
        degradiert. Gezielte Verdichtung kann die Modellaufmerksamkeit auf wesentliche Aspekte erhöhen.
      </p>

      <h3>Promptotyping als Context-Engineering-Methode</h3>
      <p>
        Promptotyping implementiert Context Engineering durch <strong>manuelle Wissensverdichtung</strong>
        für einen spezifischen Anwendungsfall: die forschungsdatengetriebene Prototypentwicklung.
      </p>
      <table>
        <thead>
          <tr>
            <th>Context Engineering (allgemein)</th>
            <th>Promptotyping (spezifisch)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>RAG, Memory, Tool Use, Multi-Agent</td>
            <td>Manuelle Vault-Dokumente</td>
          </tr>
          <tr>
            <td>Dynamische Kontextgenerierung</td>
            <td>Statische, kuratierte Dokumente</td>
          </tr>
          <tr>
            <td>Automatisierte Retrieval-Pipelines</td>
            <td>Expert-kuratierte Verdichtung</td>
          </tr>
          <tr>
            <td>Skaliert auf Millionen Dokumente</td>
            <td>Skaliert auf Projektgröße</td>
          </tr>
        </tbody>
      </table>
      <p>
        Der Promptotyping Vault (DATA.md, REQUIREMENTS.md, CONTEXT.md) ist eine Form von
        <strong>Context Creation</strong> und <strong>Context Compression</strong>. Die iterative
        Entwicklung mit Vault-Updates entspricht dem Self-Refinement-Paradigma.
      </p>

      <div class="reference">
        <strong>Referenzen:</strong><br>
        Mei, L., Yao, J., Ge, Y., et al. (2025): <em>A Survey of Context Engineering for Large Language Models</em>. arXiv preprint arXiv:2507.13334.
        <a href="https://doi.org/10.48550/arXiv.2507.13334" target="_blank">DOI</a><br>
        Hong, K. et al. (2025): <em>Context Rot in Long-Context Language Models</em>. arXiv preprint.
      </div>
    `},"critical-expert":{id:"critical-expert",title:"Critical Expert in the Loop",content:`
      <h3>Kritisch-epistemische Reflexion</h3>
      <p>
        Weder der <strong>Human-in-the-Loop</strong> noch der <strong>Expert-in-the-Loop</strong>-Ansatz
        sind ausreichend. Erforderlich ist eine kritisch-epistemische Reflexion: der
        <strong>Critical Expert in the Loop</strong>.
      </p>
      <p>
        Der Critical Expert vereint kritisch-epistemische <em>und</em> kritisch-technische Reflexion.
        Er weiß, welche Fragen zu stellen sind und wann einzugreifen ist.
      </p>

      <h3>Die doppelte Reflexionsschleife</h3>
      <p>
        Da LLMs ihre eigenen Ausgaben nicht verstehen, aber zur nachträglichen Verifikation
        fähig sind, erfordert der Critical Expert eine <strong>doppelte Reflexionsschleife</strong>:
      </p>
      <ul>
        <li><strong>Menschliche Prüfung:</strong> Domänenwissen, fachliche Angemessenheit</li>
        <li><strong>Maschinelle Selbstkritik:</strong> "Critical Questioning" oder "Poking" – das LLM explizit auffordern, die eigene Lösung zu hinterfragen</li>
      </ul>

      <h3>Das Sycophancy-Problem</h3>
      <p>
        LLMs neigen zur unkritischen Zustimmung (<strong>Yes-Man-Problem</strong>). Da sie
        auf Nutzerzufriedenheit trainiert wurden, belohnt das Training Gefälligkeit statt Wahrheit.
        Der Critical Expert muss aktiv gegensteuern:
      </p>
      <ul>
        <li>Annahmen explizit hinterfragen</li>
        <li>Alternative Interpretationen einfordern</li>
        <li>Epistemische Zweifel artikulieren</li>
      </ul>

      <h3>Konfabulationen erkennen</h3>
      <p>
        LLMs generieren manchmal plausible, aber falsche Outputs. Die Erkennung erfordert:
      </p>
      <ul>
        <li><strong>Domänenwissen:</strong> Nur wer das Fach kennt, erkennt Fehler</li>
        <li><strong>Methodische Erfahrung:</strong> Plausibilitätsprüfungen</li>
        <li><strong>Quellenvalidierung:</strong> Behauptungen nachprüfen</li>
      </ul>

      <h3>Keine Demokratisierung des Programmierens</h3>
      <p>
        Promptotyping ist <em>keine</em> Demokratisierung des Programmierens. Man muss wissen,
        wie Programmierung und Softwareentwicklung funktionieren – und, noch wichtiger,
        <strong>was man wirklich als Workflow, Modell oder Tool haben möchte</strong>.
        Aber ein LLM kann genau dabei helfen.
      </p>

      <h3>Beispiel: REALonline Projekt</h3>
      <p>
        Der Historiker korrigierte die technische Annahme, Objekte nach modernen Kategorien
        zu strukturieren. Seine Intervention:
      </p>
      <ul>
        <li>Historische Begriffe aus <code>nomenclature_original</code> verwenden</li>
        <li>Organisation nach Gebäuden/Räumen statt Objekttypen</li>
        <li>Räumliche Organisation als primärer Bedeutungsträger für soziale Hierarchien</li>
      </ul>

      <div class="reference">
        <strong>Referenzen:</strong><br>
        Pollin, C. (2025): <em>Promptotyping mit Claude Sonnet 4. Vibe-Coding erfordert den Critical-Expert-in-the-Loop</em>. DHCraft Blog.
        <a href="https://dhcraft.org/excellence/blog/Critical-Vibing-Claude-4/" target="_blank">Link</a><br>
        Malmqvist, L. (2024): <em>Sycophancy in Large Language Models</em>.<br>
        Anthropic (2024): <em>Character Training</em>.
      </div>
    `},limitations:{id:"limitations",title:"Grenzen, Skalierung & Overhead",content:`
      <h3>Methodische Ehrlichkeit</h3>
      <p>
        Promptotyping ist kein Allheilmittel. Wie jede Methode hat sie einen Sweet Spot und klare Grenzen.
        Diese transparent zu machen, ist Teil des wissenschaftlichen Anspruchs.
      </p>

      <h3>1. Der Skalierungs-Schwellenwert</h3>
      <p>
        Die Methode glänzt bei fokussierten Tools und Prototypen (<strong>Sweet Spot: 1-20 Core-Files</strong>).
        Bei großen Systemen (&gt;50 Markdown-Dateien im Vault) kippt die Effizienz:
      </p>
      <ul>
        <li><strong>Koordinationsaufwand:</strong> Die Synchronisation zwischen Code und Dokumentation wird exponentiell aufwendiger.</li>
        <li><strong>Context-Limit:</strong> Auch Frontier-LLMs verlieren bei zu vielen Referenzdateien den Fokus ("Lost in the Middle").</li>
      </ul>

      <h3>2. Der "Disziplin-Overhead"</h3>
      <p>
        Der größte Feind des Promptotyping ist die menschliche Bequemlichkeit.
        Es ist verlockend, nur noch im Chat zu "fixen", ohne den Vault nachzuziehen.
      </p>
      <ul>
        <li><strong>Gefahr:</strong> Der Vault veraltet und entkoppelt sich vom tatsächlichen System (Context Rot).</li>
        <li><strong>Lösung:</strong> Der Mensch agiert nicht als Schreiber, sondern als Kurator.
        Lassen Sie das LLM die Zusammenfassung für <code>DATA.md</code> schreiben, aber <em>prüfen</em> Sie sie penibel vor dem Commit.</li>
      </ul>

      <h3>3. Die Wartungslücke</h3>
      <p>
        Ein Prototyp ist kein Produktionssystem. Promptotyping optimiert auf <em>Erkenntnisgewinn</em>,
        nicht auf langfristige Wartbarkeit oder Security-Compliance.
      </p>
      <ul>
        <li>Prototypen sind <strong>Wegwerf-Code</strong> mit Absicht</li>
        <li>Für Produktionssysteme: Traditionelle Software-Engineering-Prozesse</li>
        <li>Der Wert liegt im <em>Wissen</em>, nicht im Code</li>
      </ul>

      <h3>4. Kompetenzvoraussetzungen</h3>
      <p>
        Promptotyping erfordert eine seltene Kombination:
      </p>
      <ul>
        <li><strong>Domänenwissen:</strong> Um Konfabulationen zu erkennen</li>
        <li><strong>Technisches Grundverständnis:</strong> Um LLM-Output zu validieren</li>
        <li><strong>Methodische Reflexion:</strong> Um epistemische Risiken zu erkennen</li>
      </ul>

      <div class="reference">
        <strong>Fazit:</strong> Promptotyping ist ein Werkzeug für <em>informierte</em> Nutzung,
        nicht für blinde Delegation an KI.
      </div>
    `},"co-intelligence":{id:"co-intelligence",title:"Co-Intelligence: Mensch-KI-Partnerschaft",content:`
      <h3>Jenseits der Arbeitsteilung</h3>
      <p>
        Ethan Mollicks Konzept der <strong>Co-Intelligence</strong> (2024) beschreibt das Verhältnis
        zwischen Mensch und KI nicht als bloße Delegation, sondern als <em>epistemische Partnerschaft</em>.
      </p>

      <h3>Zwei Modi der Zusammenarbeit</h3>
      <table>
        <thead>
          <tr><th>Modus</th><th>Charakteristik</th><th>Beispiel</th></tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Centaur-Arbeit</strong></td>
            <td>Klare Aufgabenteilung. Mensch entscheidet strategisch, KI führt operativ aus. Schnittstellen sind definiert.</td>
            <td>Mensch schreibt Anforderungen, LLM generiert Code</td>
          </tr>
          <tr>
            <td><strong>Cyborg-Arbeit</strong></td>
            <td>Enge kognitive Verschränkung. Mensch und Maschine entwickeln gemeinsam Lösungen. Die Grenze verschwimmt.</td>
            <td>Iterativer Dialog, bei dem beide Seiten die Lösung formen</td>
          </tr>
        </tbody>
      </table>

      <h3>Promptotyping als Cyborg-Arbeit</h3>
      <p>
        Die Methode operiert primär im <strong>Cyborg-Modus</strong>: Der iterative Dialog in Phase 4
        ist keine sequentielle Auftragsabarbeitung, sondern ein gemeinsamer Erkenntnisprozess.
      </p>
      <ul>
        <li>Der Mensch bringt Domänenwissen und kritische Validierung ein</li>
        <li>Das LLM bringt Mustererkennung und Codegenerierung ein</li>
        <li>Das Ergebnis entsteht <em>zwischen</em> beiden – nicht durch Addition, sondern durch Verschränkung</li>
      </ul>

      <h3>Das Sycophancy-Problem</h3>
      <p>
        Enge Verschränkung birgt Risiken: LLMs neigen zur unkritischen Bestätigung von Nutzerannahmen
        (<strong>Sycophancy</strong>). Das Training auf Nutzerzufriedenheit belohnt Gefälligkeit statt Wahrheit.
      </p>
      <p>
        <strong>Gegenmaßnahmen:</strong>
      </p>
      <ul>
        <li>Explizites Hinterfragen eigener Annahmen</li>
        <li>Alternative Interpretationen einfordern</li>
        <li>Character Training (Anthropic, 2024): Epistemische Tugenden statt bloßer Gefälligkeit</li>
      </ul>

      <div class="reference">
        <strong>Quelle:</strong> Mollick, E. (2024): <em>Co-Intelligence: Living and Working with AI</em>. Portfolio.
      </div>
    `},"case-correspexplorer":{id:"case-correspexplorer",title:"Case Study: CorrespExplorer",content:`
      <h3>Explorationstool für Briefkorrespondenzen</h3>
      <p>
        Interaktives Visualisierungstool für Korrespondenznetzwerke basierend auf dem
        <strong>CMIF-Metadatenstandard</strong> (Correspondence Metadata Interchange Format).
      </p>

      <h3>Datengrundlage</h3>
      <ul>
        <li><strong>Format:</strong> CMIF/XML – standardisiertes Austauschformat für Briefmetadaten</li>
        <li><strong>Umfang:</strong> Variabel je nach Quelldatensatz</li>
        <li><strong>Semantik:</strong> Personen, Orte, Datierungen, Briefbeziehungen</li>
      </ul>

      <h3>Visualisierungen</h3>
      <ul>
        <li><strong>Netzwerkgraph:</strong> Korrespondenzbeziehungen als interaktives Netzwerk</li>
        <li><strong>Zeitachse:</strong> Chronologische Verteilung der Korrespondenz</li>
        <li><strong>Kartenansicht:</strong> Geographische Visualisierung von Absende- und Empfangsorten</li>
      </ul>

      <h3>Promptotyping-Prozess</h3>
      <p>
        Das Projekt diente als Basis-Case Study für die Entwicklung der Promptotyping-Methodik.
        Es demonstriert, wie ein standardisiertes Metadatenformat (CMIF) direkt in ein
        interaktives Explorationstool überführt werden kann.
      </p>

      <div class="reference">
        <strong>Links:</strong><br>
        <a href="https://dhcraft.org/CorrespExplorer" target="_blank">Live Demo</a><br>
        <a href="https://github.com/DigitalHumanitiesCraft/CorrespExplorer" target="_blank">GitHub Repository</a>
      </div>
    `},"case-lucina":{id:"case-lucina",title:"Case Study: Lucina Edition",content:`
      <h3>Digitale Edition neulateinischer Gedichte</h3>
      <p>
        Wissenschaftliche digitale Edition von Madrid BN Mss. 6028 mit neulateinischen Gedichten
        aus dem Jahr 1474. <strong>TEI P5-konforme</strong> Edition mit Text-Bild-Synchronisation.
      </p>

      <h3>Datengrundlage</h3>
      <ul>
        <li><strong>Format:</strong> TEI/XML – Text Encoding Initiative Standard</li>
        <li><strong>Umfang:</strong> 128 Gedichte, 2.224 Verse</li>
        <li><strong>Ursprung:</strong> .docx und .pdf als Datenursprung, konvertiert zu TEI</li>
      </ul>

      <h3>Features</h3>
      <ul>
        <li><strong>Text-Bild-Synchronisation:</strong> Faksimile-Ansicht mit Transkription</li>
        <li><strong>Prosopographische Datenbank:</strong> Identifikation historischer Personen und Orte</li>
        <li><strong>Metrische Analyse:</strong> Elegische Distichen, Sapphische Strophen, Hendekasyllaben</li>
        <li><strong>Kritischer Apparat:</strong> Fußnoten und Varianten</li>
      </ul>

      <h3>Promptotyping-Prozess</h3>
      <table>
        <thead><tr><th>Aspekt</th><th>Details</th></tr></thead>
        <tbody>
          <tr><td><strong>Iterationen</strong></td><td>5 Promptotyping Iterationen (edition-2 bis edition-5)</td></tr>
          <tr><td><strong>Zeitaufwand</strong></td><td>~25 Stunden</td></tr>
          <tr><td><strong>LLMs</strong></td><td>Claude Opus 4.1, Gemini 2.5 Pro, GPT-5</td></tr>
          <tr><td><strong>Besonderheit</strong></td><td>Multi-LLM-Workflow mit LLM as a Judge</td></tr>
        </tbody>
      </table>
      <p>
        Metrische Analyse ohne Expertenwissen umgesetzt auf Basis einer Deep Research Ausarbeitung.
        2 Meetings mit Domänenexpertin und Einarbeitung von Expertinnen-Feedback.
      </p>

      <div class="reference">
        <strong>Links:</strong><br>
        <a href="https://chpollin.github.io/diged-neolat/edition-5/web/" target="_blank">Live Demo (Edition 5)</a><br>
        <a href="https://github.com/chpollin/diged-neolat" target="_blank">GitHub Repository</a><br>
        <a href="https://youtu.be/0DtX0pLv4TA" target="_blank">Video: TEI-Edition aus Word in 60 Minuten</a>
      </div>
    `},"case-kriminalmuseum":{id:"case-kriminalmuseum",title:"Case Study: Kriminalmuseum",content:`
      <h3>Digitales Archiv der kriminalistischen Sammlung</h3>
      <p>
        Sammlungsexplorer für das Hans Gross Kriminalmuseum Graz mit historischen Fallakten
        und Beweisobjekten aus der Frühzeit der wissenschaftlichen Kriminologie.
      </p>

      <h3>Datengrundlage</h3>
      <ul>
        <li><strong>Format:</strong> TEI + LIDO/XML</li>
        <li><strong>Umfang:</strong> 3.892 Objekte (1.657 Karteikarten + 2.235 Objekte)</li>
        <li><strong>Semantik:</strong> TEI-kodierte Fallkarten + LIDO-kodierte Objektmetadaten</li>
      </ul>

      <h3>Interface-Paradigmen</h3>
      <ul>
        <li><strong>Traditionelle Suche:</strong> Facettierte Suche und Filterung</li>
        <li><strong>Räumliche Exploration:</strong> Canvas-basierte 2D-Visualisierung</li>
        <li><strong>Layout-Algorithmen:</strong> Verschiedene Anordnungsoptionen für intuitive Navigation</li>
        <li><strong>Spatial Search:</strong> QuadTree-Optimierung für performante Exploration</li>
      </ul>

      <h3>Promptotyping-Prozess</h3>
      <table>
        <thead><tr><th>Aspekt</th><th>Details</th></tr></thead>
        <tbody>
          <tr><td><strong>Iterationen</strong></td><td>2 Promptotyping Iterationen im Abstand von 2 Monaten</td></tr>
          <tr><td><strong>Zeitaufwand</strong></td><td>~10 Stunden (8h + 2h)</td></tr>
          <tr><td><strong>LLMs</strong></td><td>Claude Opus 4.0 (ohne Claude Code), Claude Sonnet 4.5 (Claude Code)</td></tr>
          <tr><td><strong>Besonderheit</strong></td><td>Mehr Vibe Coding als Promptotyping; experimentelle Interfaces</td></tr>
        </tbody>
      </table>

      <div class="reference">
        <strong>Links:</strong><br>
        <a href="https://chpollin.github.io/km/index.html" target="_blank">Live Demo</a><br>
        <a href="https://github.com/chpollin/km" target="_blank">GitHub Repository</a>
      </div>
    `},"case-cvma":{id:"case-cvma",title:"Case Study: CVMA Glasmalerei",content:`
      <h3>Annotations-Tool für mittelalterliche Glasmalerei</h3>
      <p>
        Wissenschaftliches Annotations-Tool für Glasfenster-Artefakte aus dem
        <strong>Corpus Vitrearum Medii Aevi</strong> (CVMA) mit Integration des NFDI4Culture Knowledge Graph.
      </p>

      <h3>Datengrundlage</h3>
      <ul>
        <li><strong>Format:</strong> JSON-LD/SPARQL</li>
        <li><strong>Quelle:</strong> CVMA Datensatz via NFDI4Culture Knowledge Graph</li>
        <li><strong>Umfang:</strong> 29MB CVMA Datensatz</li>
        <li><strong>Semantik:</strong> Kontrolliertes Vokabular für ikonographische Subjekte</li>
      </ul>

      <h3>Features</h3>
      <ul>
        <li><strong>Multi-Kriterien-Filterung:</strong> Periode, Geographie, Ikonographie, Elementtypen</li>
        <li><strong>6 Annotationskategorien:</strong> Wissenschaftliche Klassifikation</li>
        <li><strong>Export/Import:</strong> Für wissenschaftliche Auswertungen</li>
        <li><strong>SPARQL-Integration:</strong> Direkte Abfragen aus dem Knowledge Graph</li>
      </ul>

      <h3>Promptotyping-Prozess</h3>
      <table>
        <thead><tr><th>Aspekt</th><th>Details</th></tr></thead>
        <tbody>
          <tr><td><strong>Iterationen</strong></td><td>2 Promptotyping Iterationen (version-1, version-2)</td></tr>
          <tr><td><strong>Zeitaufwand</strong></td><td>~8 Stunden</td></tr>
          <tr><td><strong>LLMs</strong></td><td>Claude Opus 4.1 (Chat + Claude Code)</td></tr>
          <tr><td><strong>Besonderheit</strong></td><td>Claude performte exzellent mit SPARQL-Queries</td></tr>
        </tbody>
      </table>
      <p>
        <strong>Co-Intelligence Beispiel:</strong> Iterative SPARQL-Query-Verfeinerung basierend auf
        Claude's Output demonstriert Ethan Mollicks Co-Intelligence Konzept.
      </p>

      <div class="reference">
        <strong>Links:</strong><br>
        <a href="https://chpollin.github.io/stained-glass-metadata-annotation-tool/docs/version-2/" target="_blank">Live Demo</a><br>
        <a href="https://github.com/chpollin/stained-glass-metadata-annotation-tool" target="_blank">GitHub Repository</a><br>
        <a href="https://docs.google.com/presentation/d/1wjVx-yLqZXBjw1me-Ap1q6agE_Vj0Te_5CFN3PmW0kk/edit?usp=sharing" target="_blank">Slides</a>
      </div>
    `},"case-aldersbach":{id:"case-aldersbach",title:"Case Study: Aldersbach",content:`
      <h3>Dashboard für historische Finanztransaktionen</h3>
      <p>
        Interaktives Web-Dashboard zur Exploration historischer Finanztransaktionen der
        <strong>Zisterzienserabtei Aldersbach</strong> aus dem Jahr 1557.
      </p>

      <h3>Datengrundlage</h3>
      <ul>
        <li><strong>Format:</strong> RDF/XML + Bookkeeping-Ontologie</li>
        <li><strong>Umfang:</strong> 1000+ Transaktionen, 2.3MB primärer Datensatz</li>
        <li><strong>Semantik:</strong> Mittelalterliche Finanztransaktionen, Personen, Orte</li>
      </ul>

      <h3>Features</h3>
      <ul>
        <li><strong>Multi-Währungssystem:</strong> Florin (f), Schilling (s), Denarius (d), Groschen (gr)</li>
        <li><strong>Historische Konversion:</strong> Approximative Währungsumrechnung</li>
        <li><strong>NER-Extraktion:</strong> Personen und Orte aus mittelhochdeutschen Texten</li>
        <li><strong>Kategorisierung:</strong> Einnahmen/Ausgaben mit Fokus auf Getreidehandel</li>
        <li><strong>Pagination:</strong> Performance-Optimierung (50 Transaktionen pro Seite)</li>
      </ul>

      <h3>Promptotyping-Prozess</h3>
      <table>
        <thead><tr><th>Aspekt</th><th>Details</th></tr></thead>
        <tbody>
          <tr><td><strong>Iterationen</strong></td><td>1 Promptotyping Iteration</td></tr>
          <tr><td><strong>Zeitaufwand</strong></td><td>~8 Stunden</td></tr>
          <tr><td><strong>LLMs</strong></td><td>Claude Opus 4.0 (Chat + Implementation)</td></tr>
          <tr><td><strong>Architektur</strong></td><td>Frontend-only mit Vanilla JavaScript</td></tr>
        </tbody>
      </table>
      <p>
        <strong>Besonderheit:</strong> Umfassende Dokumentationsstruktur mit FIXES.md für
        systematische Fehlerkorrektur und testing-strategy.md für Test-driven Development.
      </p>

      <div class="reference">
        <strong>Links:</strong><br>
        <a href="https://chpollin.github.io/depcha-aldersbach" target="_blank">Live Demo</a><br>
        <a href="https://github.com/chpollin/depcha-aldersbach" target="_blank">GitHub Repository</a>
      </div>
    `},"llm-retrieval":{id:"llm-retrieval",title:"LLMs als Retrieval-Systeme",content:`
      <h3>Warum "Reasoning" in Anführungszeichen?</h3>
      <p>
        Der Begriff "Reasoning" suggeriert logisches Denken und analytische Problemlösung.
        Führende KI-Forscher betonen jedoch, dass LLMs fundamental anders arbeiten als
        menschliches Denken. Sie <strong>rufen ab, was sie trainiert haben</strong> –
        in approximativer, nicht exakter Form.
      </p>

      <h3>François Chollet (Google DeepMind)</h3>
      <blockquote style="border-left: 3px solid var(--color-terracotta); padding-left: 1rem; margin: 1rem 0; font-style: italic;">
        "It is my professional opinion that LLMs are not reasoning engines, and that
        chain-of-thought does not change this picture."
      </blockquote>
      <p>
        Chollet charakterisiert LLMs als <strong>"vector programs"</strong>, die Lösungen
        interpolieren. Auch Chain-of-Thought produziert nur Folgen von
        abgerufenen Mustern, keine genuine Analyse.
      </p>

      <h3>Sepp Hochreiter (LSTM-Erfinder)</h3>
      <blockquote style="border-left: 3px solid var(--color-terracotta); padding-left: 1rem; margin: 1rem 0; font-style: italic;">
        "Alles, was eine Datenbanktechnologie kann, das kann ein LLM auch, denn es ist eine Datenbank."
      </blockquote>
      <p>
        Hochreiter sieht LLMs als <strong>approximative Datenbanken</strong>, bei denen
        Wissen eingebrannt ist. Die Stärke liegt im Retrieval aus riesigen Korpora,
        nicht im Schlussfolgern.
      </p>

      <h3>Subbarao Kambhampati (Arizona State University)</h3>
      <blockquote style="border-left: 3px solid var(--color-terracotta); padding-left: 1rem; margin: 1rem 0; font-style: italic;">
        "What LLMs do is approximate retrieval – not reasoning. [...] LLMs are
        universal approximate knowledge retrievers."
      </blockquote>
      <p>
        Kambhampati betont den Unterschied zwischen tatsächlichem Schlussfolgern und
        dem, was LLMs tun: Sie liefern eine <strong>approximierte Version von etwas
        bereits Gelerntem</strong>.
      </p>

      <h3>Der Latent Space als Abrufraum</h3>
      <p>
        LLMs "denken" nicht in Wörtern, sondern in Koordinaten eines hochdimensionalen
        <strong>Latent Space</strong>. Dieser abstrakte Vektorraum enthält das während des
        Trainings komprimierte Weltwissen. Semantisch ähnliche Konzepte liegen räumlich
        nahe beieinander.
      </p>
      <p>
        Wenn ein LLM "antwortet", navigiert es durch diesen Raum und interpoliert zwischen
        gelernten Mustern. Es führt <strong>Vektorarithmetik mit Bedeutungen</strong> durch,
        nicht logisches Schließen. Das erklärt sowohl die beeindruckenden Analogiefähigkeiten
        als auch die systematischen Fehler bei neuartigen Problemen.
      </p>

      <h3>Konsequenzen für Promptotyping</h3>
      <ul>
        <li><strong>Vault als Retrieval-Grundlage:</strong> Je präziser die Dokumente, desto besser der Abruf</li>
        <li><strong>Gezielte Auswahl:</strong> Nicht alles mitgeben, sondern relevante Teile selektieren</li>
        <li><strong>Expert Validation:</strong> Approximative Antworten erfordern kritische Prüfung</li>
        <li><strong>Iteration:</strong> Schrittweises Verfeinern des Kontexts für besseren Abruf</li>
      </ul>

      <div class="reference">
        <strong>Referenzen:</strong><br>
        Chollet, F. (2024): <em>On Chain of Thought and LLM Reasoning</em>. X/Twitter.<br>
        Hochreiter, S. (2024): <em>Interview zur KI-Forschung</em>.<br>
        Kambhampati, S. (2024): <em>Can LLMs Really Reason?</em>. Lecture Series.<br>
        Liu, Z. et al. (2023): <em>Physics of Language Models: Part 1, Context-Free Grammar</em>. arXiv.
      </div>
    `},"vibe-coding-critique":{id:"vibe-coding-critique",title:"Vibe Coding – Kritik und Kontext",content:`
      <p>
        Andrej Karpathy prägte den Begriff im Februar 2025. Er beschreibt Code-Generierung durch
        natürlichsprachliche Anweisungen, bei der Entwickler den Output akzeptieren, ohne den
        generierten Code zu prüfen.
      </p>

      <blockquote style="border-left: 3px solid var(--color-terracotta); padding-left: 1rem; margin: 1rem 0; font-style: italic;">
        "There's a new kind of coding I call 'vibe coding', where you fully give in to the vibes,
        embrace exponentials, and forget that the code even exists."
        <br><small>– Andrej Karpathy, Februar 2025</small>
      </blockquote>

      <p>
        Jürgen Geuter (tante, 2025) argumentiert, dass Vibe Coding fundamentale Aspekte der
        Softwareentwicklung ignoriert. Anforderungsanalyse setzt voraus, dass Verständnis erst
        durch die Arbeit am Code entsteht. Architekturentscheidungen erfordern Domänenwissen.
        Und Vibe Coding nimmt den Raum für Kompetenzentwicklung. Output ohne Verständnis
        verhindert Lernen.
      </p>

      <p>
        Vibe Coding funktioniert für schnelle Prototypen, bekannte Domains wie CRUD-Apps und
        explorative Phasen, in denen Ideen getestet werden. Es scheitert bei Forschungswerkzeugen
        mit domänenspezifischen Anforderungen, bei langlebigen Systemen, in denen technische
        Schulden akkumulieren, und bei sicherheitskritischen Anwendungen, in denen unverstandener
        Code riskant ist.
      </p>

      <p>
        Promptotyping gibt Vibe Coding Struktur. Die intuitive, explorative Arbeitsweise bleibt
        erhalten, ergänzt durch systematische Dokumentation im Vault, kritische fachliche Prüfung
        durch den Critical Expert in the Loop und explizites Domänenwissen durch Context Engineering.
      </p>

      <div class="reference">
        <strong>Referenzen:</strong><br>
        Karpathy, A. [@karpathy]. (2025, 2. Februar). <em>There's a new kind of coding I call "vibe coding"</em> [Tweet]. X.
        <a href="https://x.com/karpathy/status/1886192184808149383" target="_blank">Link</a><br>
        tante (2025). <em>On "Vibe Coding"</em>. Smashing Frames Blog.
        <a href="https://tante.cc/2025/05/23/on-vibe-coding/" target="_blank">Link</a><br>
        Pollin, C. (2025). <em>Haters gonna hate: Warum die Kritik an Vibe Coding berechtigt ist</em>. DHCraft Blog.
        <a href="https://dhcraft.org/excellence/blog/Vibe-Coding/" target="_blank">Link</a>
      </div>
    `},"case-szd":{id:"case-szd",title:"Case Study: SZD Annotation",content:`
      <h3>Der Ursprung: Critical Vibing</h3>
      <p>
        Dieses Projekt markiert den <strong>Beginn der Promptotyping-Methodik</strong>.
        In nur 2 Stunden entstand ein funktionsfähiges Timeline-Annotationstool für
        <strong>Stefan Zweig Digital</strong> – ein Experiment, das zeigte, was möglich ist.
      </p>

      <h3>Critical Expert in the Loop</h3>
      <p>
        Der Blogpost dokumentiert die zentrale Erkenntnis: Weder Human-in-the-Loop noch
        Expert-in-the-Loop reichen aus. Erforderlich ist ein <strong>Critical-Expert-in-the-Loop</strong>,
        der sowohl kritisch-epistemische als auch kritisch-technische Reflexion vereint.
      </p>
      <blockquote style="border-left: 3px solid var(--color-terracotta); padding-left: 1rem; margin: 1rem 0; font-style: italic;">
        "Als Critical-Expert-and-Developer-in-the-Loop praktizierte ich eine Art strukturiertes
        Vibe Coding als experimentelle Form des Promptotyping. Ich wusste genau, welche Fragen
        zu stellen und wann einzugreifen war."
      </blockquote>

      <h3>Datengrundlage</h3>
      <ul>
        <li><strong>Format:</strong> XML/GAMS (Geisteswissenschaftliches Asset Management System)</li>
        <li><strong>Quelle:</strong> Korrespondenzdaten aus Stefan Zweig Digital</li>
        <li><strong>Semantik:</strong> Titel, Datum, Ersteller, Mitwirkende</li>
      </ul>

      <h3>Features</h3>
      <ul>
        <li><strong>Timeline-Visualisierung:</strong> Chronologische Darstellung der Korrespondenzen</li>
        <li><strong>Annotation:</strong> Forschungsstatus, Tags und Notizen</li>
        <li><strong>LocalStorage:</strong> Browserbasierte Datenhaltung</li>
        <li><strong>Export/Import:</strong> JSON für individuelle Forschungsarbeit</li>
      </ul>

      <h3>Promptotyping-Prozess</h3>
      <table>
        <thead><tr><th>Aspekt</th><th>Details</th></tr></thead>
        <tbody>
          <tr><td><strong>Iterationen</strong></td><td>1 Promptotyping Iteration (experimentell)</td></tr>
          <tr><td><strong>Zeitaufwand</strong></td><td>~2 Stunden</td></tr>
          <tr><td><strong>LLMs</strong></td><td>Claude 4 Sonnet</td></tr>
          <tr><td><strong>Ansatz</strong></td><td>"Critical Vibing" – strukturiertes Vibe Coding</td></tr>
        </tbody>
      </table>

      <h3>Warum kein "echtes" Promptotyping?</h3>
      <p>
        Keine separaten Promptotyping Documents (DATA.md, REQUIREMENTS.md) erstellt.
        Stattdessen: Ein strukturierter Prompt mit XML-Beispieldaten und ein Screenshot
        der Original-Website als Design-Referenz.
      </p>
      <p>
        <strong>Erkenntnis:</strong> Präzises technisches Grundverständnis (Begriffe wie "fetchen",
        "Single Page Application") lenkt das LLM effektiv in die richtige Richtung.
        Solche begrifflichen Nuancen bestimmen die Architektur der generierten Lösung.
      </p>

      <div class="reference">
        <strong>Links:</strong><br>
        <a href="https://dhcraft.org/excellence/promptotyping/szd-annotation-timeline/" target="_blank">Live Demo</a><br>
        <a href="https://github.com/DigitalHumanitiesCraft/excellence/tree/main/promptotyping/szd-annotation-timeline" target="_blank">GitHub Repository</a><br>
        <a href="https://dhcraft.org/excellence/blog/Critical-Vibing-Claude-4/" target="_blank"><strong>Blogartikel: Critical Vibing mit Claude 4</strong></a>
      </div>
    `}},nt=$e(null),st=$e(!1);function Jt(i){const e=Qt[i];e?(nt.set(e),st.set(!0),document.body.style.overflow="hidden"):console.warn(`Deep Dive not found: ${i}`)}function Yt(){st.set(!1),setTimeout(()=>{nt.set(null)},300),document.body.style.overflow=""}var en=gt('<svg class="check-icon svelte-baj8t4" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),tn=y('<span class="phase-number svelte-baj8t4"> </span>'),nn=y('<button><span class="step-dot-marker svelte-baj8t4"></span> <span class="step-label svelte-baj8t4"> </span></button>'),sn=y('<div class="sub-steps svelte-baj8t4"></div>'),rn=y('<li class="phase-item svelte-baj8t4"><button><span class="dot svelte-baj8t4"><!></span> <span class="label-container svelte-baj8t4"><span class="label svelte-baj8t4"> </span> <!></span></button> <!></li>'),an=y('<nav class="progress-indicator svelte-baj8t4" aria-label="Phasen-Navigation"><ul class="svelte-baj8t4"></ul></nav>');function ln(i,e){de(e,!1);const n=()=>ve(ye,"$currentPhase",o),a=()=>ve(Ee,"$currentStep",o),[o,d]=tt();function l(g){const v=J[g],k=`${v.id}-${v.steps[0].id}`;dt(k)}function c(g,v){const k=J[g],x=k.steps[v],z=`${k.id}-${x.id}`;dt(z)}function u(g,v){(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),l(v))}ce();var m=an(),h=s(m);pe(h,5,()=>J,ge,(g,v,k)=>{const x=Se(()=>n()===k),z=Se(()=>n()>k);var S=rn(),E=s(S);let P;var w=s(E),L=s(w);{var F=M=>{var W=en();p(M,W)};Q(L,M=>{r(z)&&M(F)})}var K=t(w,2),G=s(K),te=s(G),q=t(G,2);{var O=M=>{var W=tn(),R=s(W);I(()=>A(R,`Phase ${r(v).number??""}`)),p(M,W)};Q(q,M=>{r(v).number&&M(O)})}var ie=t(E,2);{var ne=M=>{var W=sn();pe(W,5,()=>r(v).steps,ge,(R,se,ae)=>{const ue=Se(()=>a()===ae),Me=Se(()=>a()>ae);var H=nn();let Y;var xe=t(s(H),2),ze=s(xe);I(()=>{Y=_e(H,1,"step-dot svelte-baj8t4",null,Y,{active:r(ue),completed:r(Me)}),T(H,"aria-label",`Zu ${r(se).label??""} springen`),A(ze,r(se).label)}),X("click",H,()=>c(k,ae)),p(R,H)}),p(M,W)};Q(ie,M=>{r(x)&&M(ne)})}I(()=>{P=_e(E,1,"progress-dot svelte-baj8t4",null,P,{active:r(x),completed:r(z)}),T(E,"aria-label",`Zu ${r(v).label??""} springen`),T(E,"aria-current",r(x)?"step":void 0),A(te,r(v).label)}),X("click",E,()=>l(k)),X("keydown",E,M=>u(M,k)),p(g,S)}),p(i,m),oe(),d()}var on=y('<span class="phase-number svelte-1yliotu"> </span>'),dn=y('<span class="phase-tag svelte-1yliotu"> </span>'),cn=y('<span class="step-separator svelte-1yliotu">—</span> <span class="current-step svelte-1yliotu"> </span>',1),un=y('<header class="phase-header svelte-1yliotu"><div class="header-content svelte-1yliotu"><div class="phase-badge svelte-1yliotu"><!></div> <div class="title-group svelte-1yliotu"><h2 class="phase-title svelte-1yliotu"> </h2> <!></div> <nav class="header-nav svelte-1yliotu"><a href="/PromptotypingExplainer/about.html" class="nav-link svelte-1yliotu">About</a> <a href="/PromptotypingExplainer/vault.html" class="nav-link svelte-1yliotu">Vault</a> <a href="/PromptotypingExplainer/glossar.html" class="nav-link svelte-1yliotu">Glossar</a> <a href="/PromptotypingExplainer/bibliographie.html" class="nav-link svelte-1yliotu">Bibliographie</a></nav></div></header>');function vn(i,e){de(e,!1);const n=()=>ve(ye,"$currentPhase",o),a=()=>ve(Ee,"$currentStep",o),[o,d]=tt(),l=re(),c=re();be(()=>n(),()=>{C(l,J[n()]||J[0])}),be(()=>(r(l),a()),()=>{C(c,r(l).steps[a()]||r(l).steps[0])}),Oe(),ce();var u=un(),m=s(u),h=s(m),g=s(h);{var v=w=>{var L=on(),F=s(L);I(()=>A(F,`Phase ${r(l),V(()=>r(l).number)??""}`)),p(w,L)},k=w=>{var L=dn(),F=s(L);I(()=>A(F,(r(l),V(()=>r(l).subtitle)))),p(w,L)};Q(g,w=>{r(l),V(()=>r(l).number)?w(v):w(k,!1)})}var x=t(h,2),z=s(x),S=s(z),E=t(z,2);{var P=w=>{var L=cn(),F=t(ke(L),2),K=s(F);I(()=>A(K,(r(c),V(()=>r(c).label)))),p(w,L)};Q(E,w=>{r(c)&&w(P)})}I(()=>A(S,(r(l),V(()=>r(l).label)))),p(i,u),oe(),d()}var hn=y('<section class="step svelte-zv7veq"><div class="step-content svelte-zv7veq"><!></div></section>');function B(i,e){de(e,!1);let n=ee(e,"id",8),a=ee(e,"phaseIndex",8),o=ee(e,"stepIndex",8),d=re();Ue(()=>{const m=new IntersectionObserver(h=>{h.forEach(g=>{g.isIntersecting&&g.intersectionRatio>.5&&(Ee.set(o()),ye.set(a()))})},{threshold:.5,rootMargin:"-10% 0px -10% 0px"});return m.observe(r(d)),()=>m.disconnect()}),ce();var l=hn(),c=s(l),u=s(c);We(u,e,"default",{},null),Ye(l,m=>C(d,m),()=>r(d)),I(()=>{T(l,"id",n()),T(l,"data-phase",a()),T(l,"data-step",o())}),p(i,l),oe()}const pn=i=>i;function bt(i){const e=i-1;return e*e*e+1}function ut(i){const e=typeof i=="string"&&i.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[i,"px"]}function _(i,{delay:e=0,duration:n=400,easing:a=pn}={}){const o=+getComputedStyle(i).opacity;return{delay:e,duration:n,easing:a,css:d=>`opacity: ${d*o}`}}function $(i,{delay:e=0,duration:n=400,easing:a=bt,x:o=0,y:d=0,opacity:l=0}={}){const c=getComputedStyle(i),u=+c.opacity,m=c.transform==="none"?"":c.transform,h=u*(1-l),[g,v]=ut(o),[k,x]=ut(d);return{delay:e,duration:n,easing:a,css:(z,S)=>`
			transform: ${m} translate(${(1-z)*g}${v}, ${(1-z)*k}${x});
			opacity: ${u-h*S}`}}function kt(i,{delay:e=0,duration:n=400,easing:a=bt,start:o=0,opacity:d=0}={}){const l=getComputedStyle(i),c=+l.opacity,u=l.transform==="none"?"":l.transform,m=1-o,h=c*(1-d);return{delay:e,duration:n,easing:a,css:(g,v)=>`
			transform: ${u} scale(${1-m*v});
			opacity: ${c-h*v}
		`}}var gn=y('<div class="deep-dive-overlay svelte-tewam" role="dialog" aria-modal="true" aria-labelledby="deep-dive-title" tabindex="-1"><div class="deep-dive-panel svelte-tewam"><header class="panel-header svelte-tewam"><div class="header-indicator svelte-tewam"><span class="branch-icon svelte-tewam">←</span> <span class="branch-label svelte-tewam">Deep Dive</span></div> <h2 id="deep-dive-title" class="svelte-tewam"> </h2> <button class="close-button svelte-tewam" aria-label="Schließen">×</button></header> <div class="panel-content svelte-tewam"><!></div> <footer class="panel-footer svelte-tewam"><button class="back-button svelte-tewam">→ Zurück zum Hauptpfad</button></footer></div></div>');function mn(i,e){de(e,!1);let n=ee(e,"isOpen",8,!1),a=ee(e,"title",8,""),o=ee(e,"content",8,null);const d=Vt();function l(){d("close")}function c(v){v.key==="Escape"&&l()}function u(v){v.target===v.currentTarget&&l()}ce();var m=Ae();X("keydown",$t,c);var h=ke(m);{var g=v=>{var k=gn(),x=s(k),z=s(x),S=t(s(z),2),E=s(S),P=t(S,2),w=t(z,2),L=s(w);{var F=q=>{var O=Ae(),ie=ke(O);qt(ie,o),p(q,O)},K=q=>{var O=Ae(),ie=ke(O);We(ie,e,"default",{},null),p(q,O)};Q(L,q=>{o()?q(F):q(K,!1)})}var G=t(w,2),te=s(G);I(()=>A(E,a())),X("click",P,l),X("click",te,l),f(3,x,()=>$,()=>({x:-300,duration:300})),f(3,k,()=>_,()=>({duration:200})),X("click",k,u),p(v,k)};Q(h,v=>{n()&&v(g)})}p(i,m),oe()}var fn=y('<div class="lock-progress svelte-l7i3p6"></div>'),bn=y('<button class="lock-indicator svelte-l7i3p6" title="Klicken zum Schließen"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></button>'),kn=y('<span class="popover-en svelte-l7i3p6"> </span>'),yn=y('<span class="tag svelte-l7i3p6"> </span>'),wn=y('<span class="popover-source svelte-l7i3p6"> </span>'),xn=y('<a class="popover-link svelte-l7i3p6" target="_blank" rel="noopener noreferrer"> </a>'),zn=y('<div role="tooltip"><div class="caret svelte-l7i3p6"></div> <!> <!> <div class="popover-header svelte-l7i3p6"><span class="popover-term svelte-l7i3p6"> </span> <!></div> <p class="popover-definition svelte-l7i3p6"> </p> <div class="popover-footer svelte-l7i3p6"><div class="popover-tags svelte-l7i3p6"></div> <div class="popover-meta svelte-l7i3p6"><!> <!></div></div></div>'),Dn=y('<span role="button" tabindex="0"><!></span><!>',1);function U(i,e){de(e,!1);const n=re(),a=re();let o=ee(e,"id",8),d=ee(e,"inline",8,!0),l=re(!1),c=re(!1),u=re(!1),m=re(),h=re(),g,v,k=re({top:0,left:0,placement:"above"});const x=800;async function z(){if(await Tt(),!r(m))return;const M=r(m).getBoundingClientRect(),W=200,R=8;let se,ae,ue="above";M.top>W+R?(se=M.top-R,ue="above"):(se=M.bottom+R,ue="below"),ae=M.left+M.width/2,C(k,{top:se,left:ae,placement:ue})}function S(){r(c)||(g=setTimeout(()=>{C(l,!0),C(u,!0),z(),v=setTimeout(()=>{C(c,!0),C(u,!1)},x)},200))}function E(){clearTimeout(g),clearTimeout(v),r(c)||(C(l,!1),C(u,!1))}function P(M){M.preventDefault(),M.stopPropagation(),clearTimeout(g),clearTimeout(v),r(c)?(C(c,!1),C(l,!1),C(u,!1)):(C(l,!0),C(c,!0),C(u,!1),z())}function w(){clearTimeout(g),clearTimeout(v)}function L(){r(c)||(C(l,!1),C(u,!1))}function F(M){r(l)&&r(m)&&!r(m).contains(M.target)&&r(h)&&!r(h).contains(M.target)&&(C(l,!1),C(c,!1),C(u,!1))}function K(){r(l)&&!r(c)&&(C(l,!1),C(u,!1),clearTimeout(v))}function G(M){M.key==="Escape"&&r(l)&&(C(l,!1),C(c,!1),C(u,!1))}Ue(()=>(document.addEventListener("click",F),window.addEventListener("scroll",K,{passive:!0}),window.addEventListener("keydown",G),window.addEventListener("resize",z),()=>{document.removeEventListener("click",F),window.removeEventListener("scroll",K),window.removeEventListener("keydown",G),window.removeEventListener("resize",z),clearTimeout(g),clearTimeout(v)}));const te={prompting:"#3B82F6","ai-engineering":"#8B5CF6",fundamentals:"#607D8B",architecture:"#059669",safety:"#DC2626",training:"#D97706",agents:"#EC4899",evaluation:"#6366F1",methodology:"#14B8A6",theory:"#8B5CF6"};be(()=>Be(o()),()=>{C(n,jt[o()])}),be(()=>(r(n),rt),()=>{C(a,r(n)?.source?rt(r(n).source):null)}),Oe(),ce();var q=Ae(),O=ke(q);{var ie=M=>{var W=Dn(),R=ke(W);let se;var ae=s(R);We(ae,e,"default",{},H=>{var Y=N();I(()=>A(Y,(r(n),V(()=>r(n).term)))),p(H,Y)}),Ye(R,H=>C(m,H),()=>r(m));var ue=t(R);{var Me=H=>{var Y=zn();let xe;var ze=t(s(Y),2);{var Te=j=>{var Z=fn();p(j,Z)};Q(ze,j=>{r(u)&&j(Te)})}var Le=t(ze,2);{var Fe=j=>{var Z=bn();X("click",Z,P),p(j,Z)};Q(Le,j=>{r(c)&&j(Fe)})}var Ve=t(Le,2),Ke=s(Ve),Ge=s(Ke),b=t(Ke,2);{var D=j=>{var Z=kn(),me=s(Z);I(()=>A(me,`(${r(n),V(()=>r(n).en)??""})`)),p(j,Z)};Q(b,j=>{r(n),V(()=>r(n).en&&r(n).en!==r(n).term&&!r(n).term.includes(r(n).en))&&j(D)})}var le=t(Ve,2),De=s(le),Pe=t(le,2),Re=s(Pe);pe(Re,5,()=>(r(n),V(()=>r(n).tags)),ge,(j,Z)=>{var me=yn(),Xe=s(me);I(()=>{Ne(me,`background-color: ${r(Z),V(()=>te[r(Z)]||"#607D8B")??""}`),A(Xe,r(Z))}),p(j,me)});var He=t(Re,2),qe=s(He);{var Ze=j=>{var Z=wn(),me=s(Z);I(()=>A(me,(r(n),V(()=>r(n).source)))),p(j,Z)};Q(qe,j=>{r(n),V(()=>r(n).source)&&j(Ze)})}var yt=t(qe,2);{var wt=j=>{var Z=xn(),me=s(Z);I(()=>{T(Z,"href",(r(n),V(()=>r(n).link))),A(me,`${r(n),V(()=>r(n).linkLabel||"Mehr")??""} →`)}),X("click",Z,Ut(function(Xe){Gt.call(this,e,Xe)})),p(j,Z)};Q(yt,j=>{r(n),V(()=>r(n).link)&&j(wt)})}Ye(Y,j=>C(h,j),()=>r(h)),I(()=>{T(Y,"id",`tooltip-${o()??""}`),xe=_e(Y,1,"glossary-popover svelte-l7i3p6",null,xe,{above:r(k).placement==="above",below:r(k).placement==="below",locked:r(c),locking:r(u)}),Ne(Y,`top: ${r(k),V(()=>r(k).top)??""}px; left: ${r(k),V(()=>r(k).left)??""}px;`),A(Ge,(r(n),V(()=>r(n).term))),A(De,(r(n),V(()=>r(n).definition)))}),X("mouseenter",Y,w),X("mouseleave",Y,L),p(H,Y)};Q(ue,H=>{r(l)&&H(Me)})}I(()=>{se=_e(R,1,"glossary-term svelte-l7i3p6",null,se,{inline:d(),active:r(l),locked:r(c)}),T(R,"aria-describedby",r(l)?`tooltip-${o()}`:void 0),T(R,"aria-expanded",r(l))}),X("click",R,P),X("mouseenter",R,S),X("mouseleave",R,E),X("keydown",R,H=>H.key==="Enter"&&P(H)),p(M,W)},ne=M=>{var W=Ae(),R=ke(W);We(R,e,"default",{},null),p(M,W)};Q(O,M=>{r(n)?M(ie):M(ne,!1)})}p(i,q),oe()}const Pn="/PromptotypingExplainer/assets/promptotyping-logo-ey7SXXm7.png";var _n=y(`<div class="intro-definition svelte-10mg3y6"><div class="title-block svelte-10mg3y6"><img alt="Promptotyping Logo" class="logo svelte-10mg3y6"/> <h1 class="promptotyping-title svelte-10mg3y6">Promptotyping</h1></div> <div class="research-blog-block svelte-10mg3y6"><p class="svelte-10mg3y6"><span class="promptotyping">Promptotyping</span> ist eine strukturierte Methode zur forschungsdatengetriebenen
      Entwicklung von Prototypen für Forschungstools, Workflows und Modelle mittels Frontier-<!>. Das vierphasige Prozessmodell formalisiert, wie Domänenwissen für die LLM-gestützte Iteration aufbereitet und validiert wird.</p> <p class="svelte-10mg3y6">Der Name verbindet <!> (die Eingabe an ein LLM) mit <!> (iterative Entwicklung von Funktionsmustern).
      Die Methode ist nicht abgeschlossen, sondern entwickelt sich mit den Möglichkeiten der Frontier-LLMs weiter.</p></div></div>`);function En(i){var e=_n(),n=s(e),a=s(n),o=t(n,2),d=s(o),l=t(s(d),2);U(l,{id:"llm",children:(h,g)=>{var v=N("LLMs");p(h,v)},$$slots:{default:!0}});var c=t(d,2),u=t(s(c));U(u,{id:"prompt",children:(h,g)=>{var v=N("Prompt");p(h,v)},$$slots:{default:!0}});var m=t(u,2);U(m,{id:"prototyping",children:(h,g)=>{var v=N("Prototyping");p(h,v)},$$slots:{default:!0}}),I(()=>T(a,"src",Pn)),p(i,e)}var Mn=gt('<svg stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path></path></svg>');function he(i,e){de(e,!1);const n=re();let a=ee(e,"name",8,"github"),o=ee(e,"size",8,16),d=ee(e,"color",8,"currentColor");const l={github:{viewBox:"0 0 24 24",path:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"},"external-link":{viewBox:"0 0 24 24",path:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3",stroke:!0},"arrow-left":{viewBox:"0 0 24 24",path:"M19 12H5M12 19l-7-7 7-7",stroke:!0},"arrow-right":{viewBox:"0 0 24 24",path:"M5 12h14M12 5l7 7-7 7",stroke:!0},"book-open":{viewBox:"0 0 24 24",path:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",stroke:!0},"file-text":{viewBox:"0 0 24 24",path:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8",stroke:!0},info:{viewBox:"0 0 24 24",path:"M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zM12 16v-4M12 8h.01",stroke:!0},lock:{viewBox:"0 0 24 24",path:"M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2zM7 11V7a5 5 0 0 1 10 0v4",stroke:!0}};be(()=>Be(a()),()=>{C(n,l[a()]||l.github)}),Oe();var c=Mn(),u=s(c);I(()=>{T(c,"width",o()),T(c,"height",o()),T(c,"viewBox",(r(n),V(()=>r(n).viewBox))),T(c,"fill",(r(n),Be(d()),V(()=>r(n).stroke?"none":d()))),T(c,"stroke",(r(n),Be(d()),V(()=>r(n).stroke?d():"none"))),T(c,"stroke-width",(r(n),V(()=>r(n).stroke?2:0))),_e(c,0,`icon icon-${a()??""}`,"svelte-1imnhpv"),T(u,"d",(r(n),V(()=>r(n).path)))}),p(i,c),oe()}var Sn=y('<button><span class="trigger-icon svelte-wjh6ga"><!></span> <span class="trigger-label svelte-wjh6ga"> </span> <span class="trigger-hint svelte-wjh6ga">Deep Dive</span></button>');function we(i,e){de(e,!1);let n=ee(e,"label",8,"Mehr erfahren"),a=ee(e,"deepDiveId",8,""),o=ee(e,"variant",8,"inline");function d(){Jt(a())}ce();var l=Sn(),c=s(l),u=s(c);he(u,{name:"arrow-left",size:16});var m=t(c,2),h=s(m);I(()=>{_e(l,1,`deep-dive-trigger ${o()??""}`,"svelte-wjh6ga"),T(l,"aria-label",`Deep Dive öffnen: ${n()??""}`),A(h,n())}),X("click",l,d),p(i,l),oe()}const Ln="/PromptotypingExplainer/assets/vibecoding-Byxduydx.png";var Cn=y(`<div class="intro-vibecoding svelte-6bdbz1"><h2 class="svelte-6bdbz1">Frontier-LLMs und Vibe Coding</h2> <div class="research-blog-block"><p><!> haben ihre Fähigkeiten in Coding und <!> deutlich verbessert. Modelle wie Claude Opus 4.5, GPT-5.1-Codex und Gemini 3 Pro erreichen auf Benchmarks
      wie SWE-bench Verified (Jimenez et al., 2024), τ2-bench und Terminal-bench 2.0 (Laude Institute, 2025)
      hohe Werte für autonome Code-Generierung und Werkzeugnutzung. Mollick (2025) beschreibt diese Entwicklung
      pointiert: Vor drei Jahren beeindruckte es, dass eine Maschine ein Gedicht über Otter schreiben konnte.
      Heute diskutiert er statistische Methodik mit einem Agenten, der seine eigene Forschungsumgebung gebaut hat.
      Diese Benchmarks messen jedoch isolierte, wohldefinierte Aufgaben.</p> <p>Andrej Karpathy prägte den Begriff <!> (Karpathy, 2025).
      Das Phänomen beschreibt Code-Generierung durch natürlichsprachliche Anweisungen, bei der Entwickler den Output
      akzeptieren, ohne den generierten Code vollständig zu prüfen. Für Prototypen und Experimente kann das produktiv
      sein. Ohne Struktur führt es jedoch zu technischen Schulden und Abhängigkeit statt Verständnis.</p> <figure class="vibecoding-figure svelte-6bdbz1"><img alt="Andrej Karpathy Tweet über Vibe Coding" class="vibecoding-image svelte-6bdbz1"/> <figcaption class="svelte-6bdbz1">Andrej Karpathy prägt den Begriff "Vibe Coding" (Februar 2025)</figcaption></figure> <div class="deep-dive-triggers"><!></div></div></div>`);function An(i){var e=Cn(),n=t(s(e),2),a=s(n),o=s(a);U(o,{id:"frontier-model",children:(v,k)=>{var x=N("Frontier-LLMs");p(v,x)},$$slots:{default:!0}});var d=t(o,2);U(d,{id:"tool-use",children:(v,k)=>{var x=N("Tool Use");p(v,x)},$$slots:{default:!0}});var l=t(a,2),c=t(s(l));U(c,{id:"vibe-coding",children:(v,k)=>{var x=N('"Vibe Coding"');p(v,x)},$$slots:{default:!0}});var u=t(l,2),m=s(u),h=t(u,2),g=s(h);we(g,{label:"Vibe Coding Kritik",deepDiveId:"vibe-coding-critique"}),I(()=>T(m,"src",Ln)),p(i,e)}var In=y(`<div class="intro-strange-minds svelte-5cly7e"><h2 class="svelte-5cly7e">Strange New Minds</h2> <div class="research-blog-block"><p><!> basieren auf der Transformer-Architektur, deren
      Attention-Mechanismus Beziehungen zwischen <!> über große Distanzen
      modelliert. Summerfield (2025) nennt sie "Strange New Minds" und verweist damit auf ihren unklaren Status
      zwischen Werkzeug und Intelligenz.</p> <p>Die Charakterisierung <!> beschreibt LLM-Verhalten
      zwischen intuitiver Musterassoziation und systematischer Problemlösung. Die Bezeichnung verbindet Kahnemans
      Unterscheidung zwischen schnellem und langsamem Denken mit Douglas Adams' Metapher einer präzisen Antwort
      ohne Kenntnis der eigentlichen Frage. Sie fungiert als Arbeitshypothese, nicht als empirischer Befund.</p> <p>Mollicks Konzept der Co-Intelligence (2024) bietet einen Rahmen für die Mensch-KI-Kollaboration. Die <strong>"Jagged Frontier"</strong> beschreibt dabei die ungleichmäßige Fähigkeitsgrenze von LLMs, bei der
      scheinbar gleichwertige Aufgaben auf verschiedenen Seiten der Grenze liegen können (Mollick, 2023). Bei der <strong>Centaur-Arbeit</strong> treffen Menschen strategische Entscheidungen, während KI operative Aufgaben
      übernimmt. Bei der <strong>Cyborg-Arbeit</strong> entwickeln Mensch und Maschine in iterativen Schleifen
      gemeinsam Lösungen.</p> <div class="deep-dive-triggers"><!></div></div></div>`);function $n(i){var e=In(),n=t(s(e),2),a=s(n),o=s(a);U(o,{id:"frontier-model",children:(h,g)=>{var v=N("Frontier-LLMs");p(h,v)},$$slots:{default:!0}});var d=t(o,2);U(d,{id:"token",children:(h,g)=>{var v=N("Tokens");p(h,v)},$$slots:{default:!0}});var l=t(a,2),c=t(s(l));U(c,{id:"system-142",children:(h,g)=>{var v=N('"System 1.42"');p(h,v)},$$slots:{default:!0}});var u=t(l,4),m=s(u);we(m,{label:"System 1.42: Wie (Frontier-)LLMs 'tatsächlich' funktionieren",deepDiveId:"system-1-42"}),p(i,e)}const Tn="/PromptotypingExplainer/assets/promptotyping-overview-AcSHP9K_.png";var Fn=y(`<div class="intro-kernprinzip svelte-jio7ez"><h2 class="svelte-jio7ez">Das Kernprinzip</h2> <div class="research-blog-block svelte-jio7ez"><p class="core-question svelte-jio7ez"><strong class="svelte-jio7ez">Wie strukturiert man Forschungsdaten, explizites und implizites Domänenwissen so, dass ein LLM fachlich angemessene Forschungsartefakte erzeugt?</strong></p> <p class="svelte-jio7ez">Nicht das Coden selbst ist die Kernkompetenz, sondern das Wissen darüber, was guter Code für
      Forschungszwecke ist. Modellierung, Formalisierung, Domänenwissen und kritische Validierung sind
      die eigentlichen Anforderungen. <span class="promptotyping svelte-jio7ez">Promptotyping</span> ist eine Methode,
      diese Anforderungen systematisch umzusetzen.</p> <p class="svelte-jio7ez">Der Prozess des <span class="promptotyping svelte-jio7ez">Promptotyping</span> verläuft in vier Phasen. In der <strong>Preparation</strong> werden zwei Arten von Material gesammelt. Erstens die zu verarbeitenden
      Daten in strukturierter oder semi-strukturierter Form wie XML, CSV, Excel oder Textdateien. Zweitens
      das Kontextwissen, also Literatur, Dokumentationen, implizites Wissen der Forschenden sowie der
      Forschungskontext mit Forschungsdesign und Forschungsfragen.</p> <p class="svelte-jio7ez">Die <strong>Exploration</strong> prüft, ob sich Forschungsfragen auf die Datenstruktur abbilden lassen.
      Die <strong>Distillation</strong> verdichtet das gesammelte Material zu strukturierten Dokumenten
      (DATA.md, REQUIREMENTS.md, CONTEXT.md). Die <strong>Implementation</strong> nutzt diese Dokumente
      für iterative Arbeit mit dem <!> und der Codeerzeugung, wobei
      neues Wissen zurück in die Dokumentation fließt.</p> <p class="svelte-jio7ez">Der <!> begleitet diesen Prozess. Er prüft nicht nur, ob ein Ergebnis korrekt
      ist, sondern ob es fachlich angemessen ist. LLMs liefern oft sehr gute Ergebnisse und können gleichzeitig
      nie Verlässlichkeit garantieren. Diese Spannung ist nicht auflösbar, nur durch fachliche Prüfung handhabbar.</p> <figure class="overview-diagram svelte-jio7ez"><img alt="Promptotyping Workflow: Preparation → Exploration → Distillation → Implementation" class="svelte-jio7ez"/></figure></div></div>`);function Vn(i){var e=Fn(),n=t(s(e),2),a=t(s(n),6),o=t(s(a),7);U(o,{id:"llm",children:(m,h)=>{var g=N("LLM");p(m,g)},$$slots:{default:!0}});var d=t(a,2),l=t(s(d));U(l,{id:"critical-expert",children:(m,h)=>{var g=N("Critical Expert in the Loop");p(m,g)},$$slots:{default:!0}});var c=t(d,2),u=s(c);I(()=>T(u,"src",Tn)),p(i,e)}var Kn=y(`<div class="intro-methodik svelte-p6qtke"><h2 class="svelte-p6qtke">Critical Expert in the Loop</h2> <div class="research-blog-block"><p>Der Critical Expert in the Loop ist nicht passiver Empfänger, sondern <strong>kritischer Validator</strong>.
      Domänenexpert:innen bringen ihr Fachwissen kontinuierlich in den Dialog ein. LLMs können technisch
      korrekte, aber fachlich inadäquate Lösungen produzieren. Nur Expert:innen erkennen, ob eine
      Visualisierung historisch sinnvoll ist oder ob Kategorisierungen dem Forschungsgegenstand
      gerecht werden.</p> <p>Die Validierung findet auf zwei Ebenen statt. <strong>Während des LLM-Dialogs</strong> prüft der Expert
      jeden Output auf fachliche Angemessenheit und korrigiert falsche Annahmen sofort. <strong>Nach der
      Session</strong> dokumentiert er Erkenntnisse und Entscheidungen im Journal, um den Prozess
      nachvollziehbar zu machen.</p> <p>Drei Strategien adressieren das Problem der <strong><!></strong>.
      Critical Questioning fordert das LLM explizit zur Kritik auf ("Was sind Schwächen in diesem Ansatz?").
      Alternative Exploration verlangt verschiedene Ansätze und gegenteilige Standpunkte.
      Assumption Surfacing macht implizite Annahmen im Code bewusst.</p> <div class="deep-dive-triggers"><!></div></div></div>`);function Rn(i){var e=Kn(),n=t(s(e),2),a=t(s(n),4),o=t(s(a)),d=s(o);U(d,{id:"sycophancy",children:(u,m)=>{var h=N("Sycophancy");p(u,h)},$$slots:{default:!0}});var l=t(a,2),c=s(l);we(c,{label:"Critical Expert",deepDiveId:"critical-expert"}),p(i,e)}var qn=y(`<div class="intro-scholar-centered svelte-1c8hyih"><h2 class="svelte-1c8hyih">Scholar-Centered Design</h2> <div class="research-blog-block"><p><strong>User-Centered Design (UCD)</strong> bezeichnet die systematische Erhebung, Dokumentation
      und Verwaltung von Anforderungen, bei der die Bedürfnisse, Fähigkeiten und Einschränkungen der
      zukünftigen Nutzer im Mittelpunkt stehen. Das Kernziel ist die Maximierung von Usability und
      User Experience. Das Leitprinzip ist die Anpassung der Technologie an den Menschen.</p> <p><strong>Scholar-Centered Design (SCD)</strong> ist eine spezialisierte Weiterentwicklung des UCD
      für den wissenschaftlichen Kontext. Es adressiert die spezifischen Arbeitsweisen von Forschenden
      in den Digital Humanities und verwandten Feldern. Das Kernziel ist die Unterstützung komplexer
      hermeneutischer Prozesse und Erkenntnisgewinnung. Das Leitprinzip ist die Unterstützung von
      Komplexität statt reiner Vereinfachung sowie Transparenz der Datenherkunft.</p> <p>UCD reduziert kognitive Last und versteckt Komplexität. SCD macht Komplexität navigierbar,
      ohne sie zu verstecken. UCD akzeptiert Platzhalter im Prototyp. SCD braucht echte
      Forschungsdaten, weil wissenschaftliche Arbeit inhaltsgetrieben ist. UCD misst Effizienz
      und Zufriedenheit. SCD fragt, ob das Tool zu neuen Erkenntnissen führt.</p> <h3 class="svelte-1c8hyih">Knowledge Acquisition und User Stories</h3> <p>Wie kommt man zu einem Interface, das Forschungsfragen unterstützt? Durch Knowledge Acquisition
      in Workshops mit Domänenexperten. Daraus entstehen Personas und User Stories als Anforderungen
      an das System.</p> <div class="table-container svelte-1c8hyih"><table class="user-stories-table svelte-1c8hyih"><thead><tr class="svelte-1c8hyih"><th class="svelte-1c8hyih">As a ...</th><th class="svelte-1c8hyih">I want to ...</th><th class="svelte-1c8hyih">So that I can ...</th></tr></thead><tbody><tr class="svelte-1c8hyih"><td class="svelte-1c8hyih">social historian</td><td class="svelte-1c8hyih">view transaction networks between individuals and organisations in Norton (businesses, churches, schools, and civic institutions)</td><td class="svelte-1c8hyih">identify the key economic relationships in the community</td></tr><tr class="svelte-1c8hyih"><td class="svelte-1c8hyih">social historian</td><td class="svelte-1c8hyih">filter networks by personal relationships (gender, marriage, family ties)</td><td class="svelte-1c8hyih">find how family connections shaped business patterns</td></tr><tr class="svelte-1c8hyih"><td class="svelte-1c8hyih">social historian</td><td class="svelte-1c8hyih">filter networks by institutional relationships (affiliations, partnerships, roles)</td><td class="svelte-1c8hyih">discover how organisational ties influenced economic exchange</td></tr><tr class="svelte-1c8hyih"><td class="svelte-1c8hyih">social historian</td><td class="svelte-1c8hyih">see network changes between 1828-1859</td><td class="svelte-1c8hyih">track how community business relationships developed over time</td></tr><tr class="svelte-1c8hyih"><td class="svelte-1c8hyih">social historian</td><td class="svelte-1c8hyih">compare business activities between different community groups</td><td class="svelte-1c8hyih">map economic cooperation and division in Norton</td></tr><tr class="svelte-1c8hyih"><td class="svelte-1c8hyih">social historian</td><td class="svelte-1c8hyih">view how men and women participated differently in credit and trade networks</td><td class="svelte-1c8hyih">reveal gender patterns in Norton's economic life</td></tr></tbody></table> <p class="table-caption svelte-1c8hyih">User Stories für eine Sozialhistorikerin, die mit historischen Finanzdaten arbeitet</p></div> <p>Diese User Stories zeigen den Unterschied zu generischem UCD. Es geht nicht um "der Nutzer
      will Daten filtern", sondern um spezifische Forschungsfragen mit fachlichem Erkenntnisziel.
      Die Visualisierungen sollen unterschiedliche Perspektiven auf die Daten und unterschiedliche
      Forschungsinteressen abbilden (Pollin, 2025).</p> <div class="deep-dive-triggers"><!></div></div></div>`);function jn(i){var e=qn(),n=t(s(e),2),a=t(s(n),14),o=s(a);we(o,{label:"Scholar-Centered Design",deepDiveId:"scholar-centered-design"}),p(i,e)}var Bn=y('<div class="phase-item svelte-hawgxw"><span class="phase-number svelte-hawgxw"> </span> <div class="phase-text svelte-hawgxw"><span class="phase-label svelte-hawgxw"> </span> <span class="phase-subtitle svelte-hawgxw"> </span></div></div>'),Wn=y(`<div class="intro-phasen svelte-hawgxw"><h2 class="svelte-hawgxw">Das vierphasige Prozessmodell</h2> <div class="content-grid svelte-hawgxw"><div class="text-column svelte-hawgxw"><p class="svelte-hawgxw">Das Phasenmodell strukturiert den Entwicklungsprozess von der ersten Materialsammlung bis zum
        funktionalen Prototyp. Es basiert auf dem <strong class="svelte-hawgxw">Design Science Research Framework</strong> (Hevner et al., 2004) und integriert etablierte Methoden des Requirements Engineering mit
        den spezifischen Anforderungen wissenschaftlicher Softwareentwicklung.</p> <p class="svelte-hawgxw">Ein zentrales Merkmal ist, dass die strukturierten <strong class="svelte-hawgxw">.md-Dokumente erst in Phase 3</strong> (Destillation) entstehen, nicht am Projektanfang. Die ersten beiden Phasen sammeln und analysieren
        Rohmaterial, bevor es zu LLM-optimiertem Kontext verdichtet wird.</p> <p class="svelte-hawgxw">Der Prozess ist <strong class="svelte-hawgxw">iterativ</strong>. Jede Implementation-Iteration kann Updates an den
        Vault-Dokumenten auslösen. Neues Wissen fließt zurück in die .md-Dateien und führt so zu
        immer präziseren Prototypen.</p></div> <div class="phases-column svelte-hawgxw"></div></div></div>`);function Nn(i,e){de(e,!1);const n=J.filter(l=>l.number!==null);ce();var a=Wn(),o=t(s(a),2),d=t(s(o),2);pe(d,5,()=>n,ge,(l,c)=>{var u=Bn(),m=s(u),h=s(m),g=t(m,2),v=s(g),k=s(v),x=t(v,2),z=s(x);I(()=>{A(h,r(c).number),A(k,r(c).label),A(z,r(c).subtitle)}),p(l,u)}),p(i,a),oe()}var On=y(`<div class="phase1-titel svelte-k7vkqd"><header class="scene-header svelte-k7vkqd"><span class="phase-number svelte-k7vkqd">Phase 1</span> <h2 class="svelte-k7vkqd">Preparation</h2> <p class="subtitle svelte-k7vkqd">Materialsammlung</p></header> <div class="content svelte-k7vkqd"><p class="svelte-k7vkqd">In der Preparation-Phase werden <strong class="svelte-k7vkqd">alle relevanten Rohmaterialien zusammengetragen</strong>,
      bevor technische Entscheidungen getroffen werden. Diese Sammlung umfasst Forschungsdaten in
      verschiedenen Formaten, Dokumentation zu Standards und Datenmodellen, erste Forschungsfragen
      und implizites Domänenwissen aus Expertengesprächen.</p> <p class="svelte-k7vkqd">Die Materialsammlung zwingt zur präzisen Artikulation der Projektziele, bevor ein LLM-Dialog
      beginnt. Das verhindert die unkritische Übernahme technischer Lösungen, die am tatsächlichen
      Forschungsbedarf vorbeigehen.</p> <div class="examples-grid svelte-k7vkqd"><div class="example-block svelte-k7vkqd"><h4 class="svelte-k7vkqd">Beispiel <!></h4> <img alt="CorrespExplorer Interface" class="example-image svelte-k7vkqd"/> <p class="svelte-k7vkqd">Im CorrespExplorer-Projekt wurde das <!> des
          Hugo Schuchardt Archivs organisiert, der <!>-Standard
          studiert und Erfahrungen aus einer Dissertation zu explorativen Tools für historische
          Rechnungen (Ontologie-basiert) eingebracht. Die Daten lagen bereits strukturiert vor.</p> <p class="example-links svelte-k7vkqd"><a href="https://dhcraft.org/CorrespExplorer" target="_blank" rel="noopener" class="link-demo svelte-k7vkqd"><!> Demo</a> <a href="https://github.com/DHCraft/CorrespExplorer" target="_blank" rel="noopener" class="link-repo svelte-k7vkqd"><!> Repo</a></p></div> <div class="example-block svelte-k7vkqd"><h4 class="svelte-k7vkqd">Beispiel Lucina Edition</h4> <img alt="Lucina Edition Interface" class="example-image svelte-k7vkqd"/> <p class="svelte-k7vkqd">Im Lucina-Projekt war die Ausgangslage anders. Das Material bestand aus Word-Dokumenten und
          PDFs einer neulateinischen Handschrift (Madrid BN Mss. 6028, 1474). Dazu kamen wissenschaftliche
          Papers als Kontextwissen und Gespräche mit der Domänenexpertin. Aus diesen unstrukturierten
          Quellen entstand über fünf Promptotyping-Iterationen eine TEI P5-konforme digitale Edition
          mit 128 Gedichten.</p> <p class="example-links svelte-k7vkqd"><a href="https://chpollin.github.io/diged-neolat/edition-5/web/" target="_blank" rel="noopener" class="link-demo svelte-k7vkqd"><!> Demo</a> <a href="https://github.com/chpollin/diged-neolat" target="_blank" rel="noopener" class="link-repo svelte-k7vkqd"><!> Repo</a></p></div></div></div> <div class="deep-dive-row"><!></div></div>`);function Un(i){var e=On(),n=s(e),a=t(n,2),o=t(s(a),4),d=s(o),l=s(d),c=t(s(l));U(c,{id:"correspexplorer",children:(O,ie)=>{var ne=N("CorrespExplorer");p(O,ne)},$$slots:{default:!0}});var u=t(l,2),m=t(u,2),h=t(s(m));U(h,{id:"cmif",children:(O,ie)=>{var ne=N("CMIF");p(O,ne)},$$slots:{default:!0}});var g=t(h,2);U(g,{id:"cmif",children:(O,ie)=>{var ne=N("CMIF");p(O,ne)},$$slots:{default:!0}});var v=t(m,2),k=s(v),x=s(k);he(x,{name:"external-link",size:12});var z=t(k,2),S=s(z);he(S,{name:"github",size:12});var E=t(d,2),P=t(s(E),2),w=t(P,4),L=s(w),F=s(L);he(F,{name:"external-link",size:12});var K=t(L,2),G=s(K);he(G,{name:"github",size:12});var te=t(a,2),q=s(te);we(q,{label:"Context Engineering",deepDiveId:"context-engineering"}),I(()=>{T(u,"src",Kt),T(P,"src",Rt)}),f(1,n,()=>$,()=>({y:-20,duration:500})),f(1,a,()=>_,()=>({delay:200,duration:400})),f(1,te,()=>_,()=>({delay:400,duration:400})),f(1,e,()=>_,()=>({duration:400})),p(i,e)}var Gn=y(`<div class="phase1-datenqualitaet svelte-rtu9kj"><header class="scene-header svelte-rtu9kj"><span class="phase-number svelte-rtu9kj">Phase 1</span> <h2 class="svelte-rtu9kj">Mit den "guten" Forschungsdaten geht es besser</h2></header> <div class="content svelte-rtu9kj"><p class="lead svelte-rtu9kj">Promptotyping funktioniert am besten mit Daten, die <strong class="svelte-rtu9kj">zwei Anforderungen</strong> erfüllen.</p> <div class="criteria-grid svelte-rtu9kj"><div class="criterion svelte-rtu9kj"><h3 class="svelte-rtu9kj">Syntax & Tokens</h3> <p class="svelte-rtu9kj">Das LLM muss die Datenstruktur erkennen können. <strong class="svelte-rtu9kj">Tokeneffizienz</strong> ist
          entscheidend. Markdown und JSON sind ideal, XML benötigt durch seine Syntax deutlich
          mehr Tokens. <strong class="svelte-rtu9kj">CSV statt Excel</strong> (Excel ist intern ein großes XML-Dokument), <strong class="svelte-rtu9kj">LaTeX statt PDF</strong> (besonders bei Formeln, PDF ist grundsätzlich ein
          schlechtes Format für LLMs). Für den programmatischen Output eignen sich dann XML, RDF,
          CSV oder andere algorithmisch verarbeitbare Formate.</p></div> <div class="criterion svelte-rtu9kj"><h3 class="svelte-rtu9kj">Semantik & Kontext</h3> <p class="svelte-rtu9kj">Ohne Schema-Beschreibung oder README rät das LLM. Dokumentierte Standards wie <!>, <!> oder LIDO liefern nicht nur Struktur, sondern auch <strong class="svelte-rtu9kj">Bedeutung</strong>. Das LLM
          versteht dann nicht nur <em class="svelte-rtu9kj">dass</em> ein Feld existiert, sondern <em class="svelte-rtu9kj">was</em> es bedeutet.
          Alternativ kann man sich <strong class="svelte-rtu9kj">Pseudo-Semantik in Markdown</strong> erzeugen lassen,
          etwa eine Ontologie in eigener Notation statt OWL/RDF.</p></div></div> <div class="implications svelte-rtu9kj"><p class="svelte-rtu9kj">Wenn die Ausgangsdaten diese Kriterien nicht erfüllen, verschiebt sich die Arbeit.
        Statt Interface-Entwicklung wird <strong class="svelte-rtu9kj">Datenaufbereitung und Modellierung zum Hauptproblem</strong>.
        Das kann sinnvoll sein. Im Lucina-Projekt entstanden aus Word-Dokumenten und PDFs
        TEI-konforme Forschungsdaten. Promptotyping eignet sich auch für diese Datenaufbereitung.</p> <p class="fair-note svelte-rtu9kj"><!>-konforme Daten (Wilkinson et al., 2016)
        erfüllen diese Kriterien typischerweise. <em class="svelte-rtu9kj">Findable</em> bedeutet Auffindbarkeit, <em class="svelte-rtu9kj">Accessible</em> bedeutet
        Zugänglichkeit. <em class="svelte-rtu9kj">Interoperable</em> bedeutet dokumentierte Standards. <em class="svelte-rtu9kj">Reusable</em> setzt Struktur voraus. Wer mit FAIR-Daten startet, hat die Voraussetzungen für Promptotyping
        bereits erfüllt.</p></div></div></div>`);function Hn(i){var e=Gn(),n=s(e),a=t(n,2),o=t(s(a),2),d=t(s(o),2),l=t(s(d),2),c=t(s(l));U(c,{id:"tei",children:(v,k)=>{var x=N("TEI");p(v,x)},$$slots:{default:!0}});var u=t(c,2);U(u,{id:"cmif",children:(v,k)=>{var x=N("CMIF");p(v,x)},$$slots:{default:!0}});var m=t(o,2),h=t(s(m),2),g=s(h);U(g,{id:"fair",children:(v,k)=>{var x=N("FAIR");p(v,x)},$$slots:{default:!0}}),f(1,n,()=>$,()=>({y:-20,duration:500})),f(1,a,()=>_,()=>({delay:200,duration:400})),f(1,e,()=>_,()=>({duration:400})),p(i,e)}var Zn=y(`<div class="phase1-sammlung svelte-6tqdd3"><h3 class="svelte-6tqdd3">Materialsammlung abgeschlossen</h3> <div class="explanation-block svelte-6tqdd3"><p class="svelte-6tqdd3">Mit dem Abschluss der Materialsammlung ist die Basis für alle weiteren Phasen gelegt.
      Die gesammelten Materialien werden in dieser Phase <strong class="svelte-6tqdd3">noch nicht strukturiert oder destilliert</strong> –
      das geschieht erst in Phase 3 (Destillation). Hier geht es um Vollständigkeit.</p> <p class="svelte-6tqdd3">Fehlende Materialien führen später zu Lücken im Vault und damit zu unpräzisen LLM-Outputs.
      Bevor die explorative Analyse beginnt, sollten alle relevanten Datenquellen, Dokumentationen
      und Kontextinformationen vorliegen. Der Grundsatz: Lieber zu viel sammeln als zu wenig –
      Irrelevantes kann später ausgeschlossen werden.</p></div> <div class="quality-criteria svelte-6tqdd3"><h4 class="svelte-6tqdd3">Bereitschaftskriterien für Phase 2</h4> <ul class="svelte-6tqdd3"><li class="svelte-6tqdd3"><strong class="svelte-6tqdd3">Datenquellen:</strong> Alle verfügbaren Forschungsdaten identifiziert und zugänglich</li> <li class="svelte-6tqdd3"><strong class="svelte-6tqdd3">Dokumentation:</strong> Standards, Schemata und Richtlinien gesammelt</li> <li class="svelte-6tqdd3"><strong class="svelte-6tqdd3">Kontextwissen:</strong> Expertengespräche geführt, Notizen erstellt</li> <li class="svelte-6tqdd3"><strong class="svelte-6tqdd3">Forschungsfragen:</strong> Erste Fragestellungen formuliert (können sich noch ändern)</li></ul></div></div>`);function Xn(i){var e=Zn(),n=s(e),a=t(n,2),o=t(a,2);f(1,n,()=>_,()=>({duration:400})),f(1,a,()=>_,()=>({delay:150,duration:400})),f(1,o,()=>_,()=>({delay:300,duration:400})),p(i,e)}const Qn="/PromptotypingExplainer/assets/exploration-CciyC_CV.png";var Jn=y(`<div class="phase2-exploration svelte-pwk459"><header class="scene-header svelte-pwk459"><span class="phase-number svelte-pwk459">Phase 2</span> <h2 class="svelte-pwk459">Exploration</h2> <p class="subtitle svelte-pwk459">Daten-Kontext-Relationen</p></header> <div class="content-block svelte-pwk459"><p class="lead svelte-pwk459">Die Explorationsphase ist eine systematische Sondierung der Schnittstelle zwischen Rohdaten
      und Forschungskontext. Die zentrale Frage: <strong class="svelte-pwk459">Lässt sich die abstrakte Forschungsfrage
      konkret auf diese Datenstruktur abbilden?</strong> Diese Phase produziert bewusst keine formalen
      Dokumente – das Ergebnis ist Wissen, nicht Artefakte.</p> <p class="svelte-pwk459">Das Wissen umfasst: Datenqualität und ihre Grenzen, technische Machbarkeit von Visualisierungen,
      und die Validität potentieller User Stories. Dieses destillierte Wissen ist zwingende
      Voraussetzung für die Präzision in Phase 3. Wichtig: <strong class="svelte-pwk459">Sackgassen sind positive Erkenntnisse,
      keine Fehler.</strong> Zu verstehen, was die Daten nicht hergeben, ist genauso wertvoll wie
      zu wissen, was möglich ist.</p> <div class="key-point svelte-pwk459"><span class="key-label svelte-pwk459">Ziel</span> <p class="svelte-pwk459"><strong class="svelte-pwk459">Validierung der Machbarkeit</strong>: Geben die Daten das her, was der Forschungskontext verlangt?</p></div> <div class="user-story-box svelte-pwk459"><div class="box-label svelte-pwk459">User Story Format</div> <p class="svelte-pwk459">User Stories folgen dem Format: <em class="svelte-pwk459">"Als [Rolle] will ich [Funktion], um [Nutzen] zu erreichen."</em></p> <p class="example svelte-pwk459">Beispiel: "Als Historikerin will ich Korrespondenznetzwerke nach Zeitraum filtern,
        um Kommunikationsmuster in Exilgemeinschaften zu rekonstruieren."</p> <p class="validation svelte-pwk459">Die Exploration prüft: Können wir diese Story mit den vorhandenen Daten realisieren?
        Welche Felder tragen die Filterlogik? Sind die Relationen vollständig genug?</p></div> <div class="example-box svelte-pwk459"><div class="example-label svelte-pwk459">Typische Explorationsfragen</div> <p class="example-text svelte-pwk459">"Lässt sich diese Netzwerkanalyse mit den vorhandenen Relationen umsetzen?"<br/><br/> "Welche Felder in der XML-Struktur tragen die gewünschte Filterlogik?"<br/><br/> "Sind die Datumsangaben konsistent genug für eine Timeline-Visualisierung?"</p></div></div> <figure class="exploration-visual svelte-pwk459"><img alt="Sondierung der Daten-Kontext-Schnittstelle" class="svelte-pwk459"/></figure></div>`);function Yn(i){var e=Jn(),n=s(e),a=t(n,2),o=t(a,2),d=s(o);I(()=>T(d,"src",Qn)),f(1,n,()=>$,()=>({y:-20,duration:500})),f(1,a,()=>_,()=>({delay:200,duration:400})),f(1,o,()=>$,()=>({y:30,duration:500,delay:400})),f(1,e,()=>_,()=>({duration:400})),p(i,e)}var es=y(`<div class="phase3-titel svelte-btytv1"><header class="scene-header svelte-btytv1"><span class="phase-number svelte-btytv1">Phase 3</span> <h2 class="svelte-btytv1">Destillation</h2> <p class="subtitle svelte-btytv1">Vom Rohmaterial zum Vault</p></header> <div class="content-block svelte-btytv1"><p class="lead svelte-btytv1">Die Erkenntnisse aus der Exploration werden nun zu strukturierten, LLM-optimierten
      Dokumenten <strong class="svelte-btytv1">destilliert</strong>. Das Kernprinzip heißt <strong class="svelte-btytv1">Context Compression</strong>:
      maximale Information mit minimalen Tokens. Je präziser und dichter der Kontext formuliert ist,
      desto besser die LLM-Performance.</p> <p class="svelte-btytv1">Der Grund: <!> ist real. Hong et al. (2025)
      zeigen, dass LLM-Leistung mit wachsender Kontextlänge degradiert – mehr Tokens führen
      nicht automatisch zu besseren Ergebnissen. Das widerspricht der intuitiven Annahme,
      dass mehr Information besser ist. Gezielte Verdichtung erhöht die Modellaufmerksamkeit
      auf wesentliche Aspekte. Das ist das <strong class="svelte-btytv1">Compression-als-Amplification-Paradox</strong>:
      Weniger kann mehr sein.</p></div> <div class="vault-preview svelte-btytv1"><div class="vault-icon svelte-btytv1"><svg viewBox="0 0 64 64" width="80" height="80"><rect x="8" y="16" width="48" height="40" rx="4" fill="none" stroke="currentColor" stroke-width="2"></rect><path d="M8 28 L56 28" stroke="currentColor" stroke-width="2"></path><circle cx="32" cy="38" r="6" fill="none" stroke="currentColor" stroke-width="2"></circle><path d="M32 32 L32 20" stroke="currentColor" stroke-width="2"></path><rect x="24" y="8" width="16" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="2"></rect></svg></div> <p class="vault-label svelte-btytv1">Der Promptotyping Vault</p></div> <div class="context-rot-box svelte-btytv1"><h4 class="svelte-btytv1">Context Rot vermeiden</h4> <p class="svelte-btytv1">Unstrukturierter Text wirkt als Rauschen, das LLMs von relevanten Instruktionen ablenkt.
      Daher: kurze, prägnante Sätze statt langer Absätze. Klare Überschriften und Markierungen.
      Strukturierte Listen statt Fließtext. Explizite Aussagen statt impliziter Annahmen.</p></div></div>`);function ts(i){var e=es(),n=s(e),a=t(n,2),o=t(s(a),2),d=t(s(o));U(d,{id:"context-rot",children:(m,h)=>{var g=N("Context Rot");p(m,g)},$$slots:{default:!0}});var l=t(a,2),c=t(s(l),2),u=t(l,2);f(1,n,()=>$,()=>({y:-20,duration:500})),f(1,a,()=>_,()=>({delay:200,duration:400})),f(1,c,()=>_,()=>({delay:600,duration:400})),f(1,l,()=>$,()=>({y:20,duration:400,delay:400})),f(1,u,()=>_,()=>({delay:700,duration:400})),p(i,e)}var ns=y(`<div class="phase3-dokumente svelte-1ipbydp"><h3 class="svelte-1ipbydp">Die Vault-Dokumente</h3> <div class="intro-text svelte-1ipbydp"><p class="svelte-1ipbydp">Der Vault besteht aus strukturierten Markdown-Dokumenten, die das Wissen LLM-optimiert
      aufbereiten. Die drei Kerndokumente bilden den Ausgangspunkt, können aber je nach Domäne
      erweitert werden (SCHEMA.md, VALIDATION.md, API-NOTES.md etc.). Das Prinzip der <strong class="svelte-1ipbydp">Context Compression</strong> gilt für alle: maximale Information bei minimaler Token-Anzahl.</p></div> <div class="documents-grid svelte-1ipbydp"><div class="document svelte-1ipbydp"><div class="doc-icon data svelte-1ipbydp"><span class="doc-ext svelte-1ipbydp">.md</span></div> <div class="doc-content svelte-1ipbydp"><h4 class="svelte-1ipbydp">DATA.md</h4> <p class="doc-question svelte-1ipbydp">Was haben wir?</p> <ul class="doc-details svelte-1ipbydp"><li class="svelte-1ipbydp">Schema und Felddefinitionen</li> <li class="svelte-1ipbydp">Datentypen und Kardinalitäten</li> <li class="svelte-1ipbydp">Beziehungen und referentielle Integrität</li> <li class="svelte-1ipbydp">Qualitätsprobleme und Limitationen</li></ul></div></div> <div class="document svelte-1ipbydp"><div class="doc-icon requirements svelte-1ipbydp"><span class="doc-ext svelte-1ipbydp">.md</span></div> <div class="doc-content svelte-1ipbydp"><h4 class="svelte-1ipbydp">REQUIREMENTS.md</h4> <p class="doc-question svelte-1ipbydp">Was wollen wir?</p> <ul class="doc-details svelte-1ipbydp"><li class="svelte-1ipbydp">User Stories als testbare Sätze</li> <li class="svelte-1ipbydp">MoSCoW-Priorisierung (MUSS/SOLL/KANN)</li> <li class="svelte-1ipbydp">Interface-Spezifikationen</li> <li class="svelte-1ipbydp">Akzeptanzkriterien</li></ul></div></div> <div class="document svelte-1ipbydp"><div class="doc-icon context svelte-1ipbydp"><span class="doc-ext svelte-1ipbydp">.md</span></div> <div class="doc-content svelte-1ipbydp"><h4 class="svelte-1ipbydp">CONTEXT.md</h4> <p class="doc-question svelte-1ipbydp">Was wissen wir?</p> <ul class="doc-details svelte-1ipbydp"><li class="svelte-1ipbydp">Forschungsmethodologie und -fragen</li> <li class="svelte-1ipbydp">Domänenkonzepte und Terminologie</li> <li class="svelte-1ipbydp">Historischer/kultureller Kontext</li> <li class="svelte-1ipbydp">Interpretationsrichtlinien</li></ul></div></div></div> <div class="testable-box svelte-1ipbydp"><h4 class="svelte-1ipbydp">Testbare Formulierung</h4> <div class="example-row svelte-1ipbydp"><div class="example correct svelte-1ipbydp"><span class="label svelte-1ipbydp">Korrekt</span> <p class="svelte-1ipbydp">"Das System muss Korrespondenzen nach Datum filterbar darstellen."</p></div> <div class="example incorrect svelte-1ipbydp"><span class="label svelte-1ipbydp">Falsch</span> <p class="svelte-1ipbydp">"Das System soll benutzerfreundlich sein."</p> <span class="reason svelte-1ipbydp">Zu vage, nicht testbar</span></div></div></div></div>`);function ss(i){var e=ns(),n=s(e),a=t(n,2),o=t(a,2),d=s(o),l=t(d,2),c=t(l,2),u=t(o,2);f(1,n,()=>_,()=>({duration:400})),f(1,a,()=>_,()=>({delay:150,duration:400})),f(1,d,()=>$,()=>({y:30,duration:500,delay:300})),f(1,l,()=>$,()=>({y:30,duration:500,delay:450})),f(1,c,()=>$,()=>({y:30,duration:500,delay:600})),f(1,u,()=>_,()=>({delay:750,duration:400})),p(i,e)}var is=y(`<div class="phase3-vault svelte-1don6ot"><h3 class="svelte-1don6ot">Der <span class="promptotyping svelte-1don6ot">Promptotyping</span> Vault</h3> <div class="explanation-block svelte-1don6ot"><p class="svelte-1don6ot">Der Vault fungiert als <strong class="svelte-1don6ot">Boundary Object</strong> (Star & Griesemer, 1989) – ein Artefakt,
      das zwischen verschiedenen sozialen Welten vermittelt: zwischen technischer Implementation und
      fachlicher Anforderung, zwischen Entwickler:in und Domänenexpert:in, zwischen Mensch und LLM.
      Er ist strukturiert genug für maschinelle Verarbeitung und gleichzeitig verständlich für
      menschliche Leser:innen.</p> <p class="svelte-1don6ot">Die Dokumentstruktur ist <strong class="svelte-1don6ot">flexibel und erweiterbar</strong>. Die drei Kerndokumente
      (DATA.md, REQUIREMENTS.md, CONTEXT.md) bilden den Ausgangspunkt. Je nach Domäne können
      weitere Dokumente ergänzt werden: SCHEMA.md für komplexe Datenmodelle, VALIDATION.md für
      Qualitätskriterien, API-NOTES.md für Schnittstellendokumentation.</p></div> <div class="vault-visual svelte-1don6ot"><div class="source-flow svelte-1don6ot"><div class="source-item svelte-1don6ot"><span class="source-label svelte-1don6ot">Datenstrukturen</span> <div class="arrow svelte-1don6ot">→</div></div> <div class="source-item svelte-1don6ot"><span class="source-label svelte-1don6ot">Erkenntnisse</span> <div class="arrow svelte-1don6ot">→</div></div> <div class="source-item svelte-1don6ot"><span class="source-label svelte-1don6ot">Anforderungen</span> <div class="arrow svelte-1don6ot">→</div></div></div> <div class="vault-center svelte-1don6ot"><div class="vault-box svelte-1don6ot"><div class="vault-header svelte-1don6ot">VAULT</div> <div class="vault-files svelte-1don6ot"><div class="file-item svelte-1don6ot"><span class="file svelte-1don6ot">DATA.md</span> <span class="file-desc svelte-1don6ot">Was haben wir?</span></div> <div class="file-item svelte-1don6ot"><span class="file svelte-1don6ot">REQUIREMENTS.md</span> <span class="file-desc svelte-1don6ot">Was wollen wir?</span></div> <div class="file-item svelte-1don6ot"><span class="file svelte-1don6ot">CONTEXT.md</span> <span class="file-desc svelte-1don6ot">Was wissen wir?</span></div></div></div></div> <div class="llm-flow svelte-1don6ot"><div class="arrow large svelte-1don6ot">→</div> <div class="llm-target svelte-1don6ot"><span class="llm-label svelte-1don6ot">Phase 4</span> <span class="llm-sublabel svelte-1don6ot">Implementation</span></div></div></div> <div class="download-section svelte-1don6ot"><p class="download-intro svelte-1don6ot">Starte dein eigenes Projekt:</p> <div class="download-buttons svelte-1don6ot"><a download="" class="download-btn primary svelte-1don6ot"><span class="btn-icon svelte-1don6ot">&#8595;</span> Vault-Template</a> <a href="https://github.com/DigitalHumanitiesCraft/PromptotypingExplainer/tree/main/knowledge" target="_blank" rel="noopener" class="download-btn secondary svelte-1don6ot"><span class="btn-icon svelte-1don6ot">&#8599;</span> Echtes Beispiel auf GitHub</a></div></div></div>`);function rs(i,e){de(e,!1);const n="/PromptotypingExplainer/downloads";ce();var a=is(),o=s(a),d=t(o,2),l=t(d,2),c=s(l),u=t(c,2),m=t(u,2),h=t(l,2),g=t(s(h),2),v=s(g);I(()=>T(v,"href",`${n}/VAULT-TEMPLATE-README.md`)),f(1,o,()=>_,()=>({duration:400})),f(1,d,()=>_,()=>({delay:150,duration:400})),f(1,c,()=>_,()=>({delay:300,duration:400})),f(1,u,()=>kt,()=>({duration:500,delay:500})),f(1,m,()=>_,()=>({delay:700,duration:400})),f(1,h,()=>_,()=>({delay:1e3,duration:400})),p(i,a),oe()}var as=y(`<div class="phase4-titel svelte-1jfm6fv"><header class="scene-header svelte-1jfm6fv"><span class="phase-number svelte-1jfm6fv">Phase 4</span> <h2 class="svelte-1jfm6fv">Implementation</h2> <p class="subtitle svelte-1jfm6fv">Iterative Entwicklung</p></header> <div class="content-block svelte-1jfm6fv"><p class="svelte-1jfm6fv">Mit der Übergabe des Vault an das LLM beginnt die <strong class="svelte-1jfm6fv">Cyborg-Arbeit</strong>. Im Unterschied
      zur Centaur-Arbeit (klare Aufgabenteilung) bedeutet Cyborg-Arbeit enge kognitive Verschränkung:
      Mensch und Maschine entwickeln in iterativen Dialogschleifen gemeinsam Lösungen. Die Grenze
      zwischen menschlichem und maschinellem Beitrag verschwimmt bewusst.</p> <p class="svelte-1jfm6fv">Jede Iteration folgt demselben Muster: Der Vault (oder eine gezielte Auswahl relevanter Dokumente)
      wird dem LLM als Kontext mitgegeben. Das LLM generiert einen Prototype, der Critical Expert
      validiert das Ergebnis, und neues Wissen fließt zurück in den Vault. Dieser Zyklus wiederholt
      sich bis zur gewünschten Qualität.</p> <div class="cycle-preview svelte-1jfm6fv"><div class="cycle-step svelte-1jfm6fv"><span class="cycle-icon svelte-1jfm6fv">1</span> <span class="cycle-label svelte-1jfm6fv">Prompt + Vault</span></div> <div class="cycle-arrow svelte-1jfm6fv">→</div> <div class="cycle-step svelte-1jfm6fv"><span class="cycle-icon svelte-1jfm6fv">2</span> <span class="cycle-label svelte-1jfm6fv">LLM generiert</span></div> <div class="cycle-arrow svelte-1jfm6fv">→</div> <div class="cycle-step svelte-1jfm6fv"><span class="cycle-icon svelte-1jfm6fv">3</span> <span class="cycle-label svelte-1jfm6fv">Expert validiert</span></div></div></div> <div class="output-box svelte-1jfm6fv"><h4 class="svelte-1jfm6fv">Typischer Output</h4> <p class="svelte-1jfm6fv">Single HTML File mit inline CSS/JS, keine externen Dependencies außer CDN-verfügbare Bibliotheken,
      kommentierter Code an kritischen Stellen für spätere Wartung und Anpassung.</p></div></div>`);function ls(i){var e=as(),n=s(e),a=t(n,2),o=t(s(a),4),d=t(a,2);f(1,n,()=>$,()=>({y:-20,duration:500})),f(1,o,()=>$,()=>({y:20,duration:400,delay:400})),f(1,a,()=>_,()=>({delay:200,duration:400})),f(1,d,()=>_,()=>({delay:500,duration:400})),p(i,e)}var os=y('<span class="pattern-label svelte-1hq5by1"> </span>'),ds=y('<div><!> <div class="bubble svelte-1hq5by1"><p class="svelte-1hq5by1"> </p></div></div>'),cs=y('<div class="typing-indicator svelte-1hq5by1"><span class="typing-dot svelte-1hq5by1"></span> <span class="typing-dot svelte-1hq5by1"></span> <span class="typing-dot svelte-1hq5by1"></span></div>'),us=y('<div class="animated-chat svelte-1hq5by1"><div class="chat-header svelte-1hq5by1"><div class="chat-dots svelte-1hq5by1"><span class="dot svelte-1hq5by1"></span> <span class="dot svelte-1hq5by1"></span> <span class="dot svelte-1hq5by1"></span></div> <span class="chat-title svelte-1hq5by1">Promptotyping Session</span></div> <div class="chat-messages svelte-1hq5by1"><!> <!></div></div>');function vs(i,e){de(e,!1);const n=[{type:"human",pattern:"Context setzen",text:"Lies knowledge.md und requirements.md. Was sind die Story-Gaps im Frontend?"},{type:"llm",pattern:"Reasoning",text:"Ich analysiere die Vault-Dokumente... Drei Gaps: 1) Phase 4 abstrakt, 2) Beispieldaten fehlen, 3) Komponenten ungenutzt."},{type:"human",pattern:"Plan anfordern",text:"Erstelle einen Plan! Wie lösen wir Gap 1?"},{type:"llm",pattern:"Plan",text:"Plan: AnimatedChat-Komponente erstellen → echte Prompts zeigen → Typing-Indicator für Authentizität."},{type:"human",pattern:"Implementieren",text:"Setze den Plan um. Teste ob es kompiliert."},{type:"llm",pattern:"Test",text:"Komponente erstellt. Build erfolgreich. Aber: Beispiel zu generisch für Promptotyping."},{type:"human",pattern:"Feedback",text:"Nimm unseren eigenen Prozess als Meta-Beispiel – das ist authentischer!"},{type:"llm",pattern:"Dokumentation",text:'Chat aktualisiert. Ergänze journal.md: "Meta-Beispiel zeigt echten Workflow".'}];let a=re([]),o=0;Ue(()=>{const h=()=>{if(o<n.length){C(a,[...r(a),n[o]]),o++;const g=n[o-1].type==="human"?2e3:2500;setTimeout(h,g)}else setTimeout(()=>{C(a,[]),o=0,setTimeout(h,1e3)},4e3)};return setTimeout(h,800),()=>{}}),ce();var d=us(),l=t(s(d),2),c=s(l);pe(c,1,()=>r(a),ge,(h,g)=>{var v=ds(),k=s(v);{var x=P=>{var w=os(),L=s(w);I(()=>A(L,r(g).pattern)),p(P,w)};Q(k,P=>{r(g).pattern&&P(x)})}var z=t(k,2),S=s(z),E=s(S);I(()=>{_e(v,1,`message ${r(g).type??""}`,"svelte-1hq5by1"),A(E,r(g).text)}),f(1,v,()=>$,()=>({y:20,duration:400})),p(h,v)});var u=t(c,2);{var m=h=>{var g=cs();f(1,g,()=>_,()=>({duration:200})),p(h,g)};Q(u,h=>{r(a).length<n.length&&h(m)})}p(i,d),oe()}var hs=y(`<div class="phase4-iteration svelte-5lsmoa"><h3 class="svelte-5lsmoa">Der Iterationszyklus</h3> <div class="intro-text svelte-5lsmoa"><p class="svelte-5lsmoa">Der Iterationszyklus ist das Herzstück der Implementation. Er folgt einem klaren Muster: <strong class="svelte-5lsmoa">Context → Reasoning → Plan → Implementation → Test → Feedback → Dokumentation</strong>.
      Entscheidend ist das Verständnis dessen, was im "Reasoning"-Schritt tatsächlich passiert.</p></div> <div class="iteration-grid svelte-5lsmoa"><figure class="chat-side svelte-5lsmoa"><!> <figcaption class="svelte-5lsmoa">Der Reasoning-Zyklus: Fragen, Planen, Implementieren, Dokumentieren</figcaption></figure> <div class="text-card explainer-side svelte-5lsmoa"><p>Der Zyklus beginnt mit dem <strong>Kontext</strong>: Der gesamte Vault oder eine gezielte Auswahl
        relevanter Dokumente wird dem LLM mitgegeben. Im <strong>"Reasoning"</strong> ruft das LLM
        passende Muster aus seinem Training ab und interpoliert eine Lösung. Es analysiert nicht,
        es retrievet approximativ – ein fundamentaler Unterschied zu menschlichem Denken.</p> <p>Der generierte <strong>Plan</strong> wird implementiert und direkt <strong>getestet</strong>.
        Fehler werden sofort sichtbar. Kritisches <strong>Feedback</strong> durch den Critical Expert
        gibt die Richtung für die nächste Iteration vor. Dieser Test-Feedback-Loop ist entscheidend:
        LLMs haben keine intrinsische Qualitätskontrolle, das Urteil muss extern kommen.</p> <p>Am Ende jedes Zyklus steht die <strong>Dokumentation</strong>: Neues Wissen fließt sofort
        zurück in den Vault. Der Kontext wächst – und der nächste Zyklus startet mit besserem
        Retrieval-Material. Dieser Feedback-Loop ist das, was Promptotyping von einmaligen
        Prompt-Versuchen unterscheidet.</p> <p>Diese enge Verschränkung wirft das Problem der <!> auf.
        LLMs tendieren zur unkritischen Bestätigung von Nutzerannahmen, weil RLHF Antworten belohnt, die
        Nutzer als hilfreich bewerten. Anthropics Character Training adressiert dies durch die Verankerung
        epistemischer Tugenden wie Neugier und intellektuelle Ehrlichkeit. Für Forschungskontexte reicht
        das nicht. Der Critical Expert in the Loop muss Sycophancy aktiv erkennen und korrigieren.</p> <div class="prompting-strategies svelte-5lsmoa"><h4 class="svelte-5lsmoa">Prompting-Strategien</h4> <ul class="svelte-5lsmoa"><li class="svelte-5lsmoa"><strong class="svelte-5lsmoa">Chain-of-Thought (CoT):</strong> "Erkläre Schritt für Schritt, wie du vorgehst..."</li> <li class="svelte-5lsmoa"><strong class="svelte-5lsmoa">Few-Shot Learning:</strong> Konkrete Beispiele im Prompt mitgeben</li> <li class="svelte-5lsmoa"><strong class="svelte-5lsmoa">Role Prompting:</strong> "Als erfahrener DH-Entwickler..."</li> <li class="svelte-5lsmoa"><strong class="svelte-5lsmoa">Constraint Setting:</strong> "Verwende nur vanilla JS, keine externen Dependencies"</li></ul></div> <div class="deep-dive-trigger-wrapper svelte-5lsmoa"><!></div></div></div></div>`);function ps(i){var e=hs(),n=s(e),a=t(n,2),o=t(a,2),d=s(o),l=s(d);vs(l,{});var c=t(d,2),u=t(s(c),6),m=t(s(u));U(m,{id:"sycophancy",children:(v,k)=>{var x=N("Sycophancy");p(v,x)},$$slots:{default:!0}});var h=t(u,4),g=s(h);we(g,{label:"LLMs als Retrieval-Systeme",deepDiveId:"llm-retrieval"}),f(1,n,()=>_,()=>({duration:400})),f(1,a,()=>_,()=>({delay:150,duration:400})),f(1,d,()=>$,()=>({x:-30,duration:500,delay:300})),f(1,c,()=>$,()=>({x:30,duration:500,delay:400})),p(i,e)}var gs=y('<div class="code-preview svelte-1nf6k2z"><div class="file-header svelte-1nf6k2z"><div class="file-icon svelte-1nf6k2z"><svg viewBox="0 0 16 16" fill="currentColor" width="14" height="14"><path d="M2 1.75C2 .784 2.784 0 3.75 0h6.586c.464 0 .909.184 1.237.513l2.914 2.914c.329.328.513.773.513 1.237v9.586A1.75 1.75 0 0 1 13.25 16h-9.5A1.75 1.75 0 0 1 2 14.25Zm1.75-.25a.25.25 0 0 0-.25.25v12.5c0 .138.112.25.25.25h9.5a.25.25 0 0 0 .25-.25V6h-2.75A1.75 1.75 0 0 1 9 4.25V1.5Zm6.75.062V4.25c0 .138.112.25.25.25h2.688l-.011-.013-2.914-2.914-.013-.011Z"></path></svg></div> <span class="file-name svelte-1nf6k2z"> </span></div> <div class="code-content svelte-1nf6k2z"><pre class="svelte-1nf6k2z"><code class="svelte-1nf6k2z"> </code></pre></div></div>');function ms(i,e){let n=ee(e,"filename",8,"file.md"),a=ee(e,"content",8,""),o=ee(e,"maxHeight",8,"320px");var d=gs(),l=s(d),c=t(s(l),2),u=s(c),m=t(l,2),h=s(m),g=s(h),v=s(g);I(()=>{A(u,n()),Ne(m,`max-height: ${o()??""}`),A(v,a())}),p(i,d)}var fs=y(`<div class="phase4-journal svelte-1a6td76"><div class="header-group svelte-1a6td76"><span class="label svelte-1a6td76">Prozessdokumentation</span> <h3 class="svelte-1a6td76">Reflection-on-Action</h3></div> <div class="content-grid svelte-1a6td76"><div class="text-card svelte-1a6td76"><p class="svelte-1a6td76">Das Journal dient der systematischen Dokumentation des Entwicklungsprozesses.
        Es hält Entscheidungen, verworfene Ansätze und methodische Korrekturen fest,
        die im finalen Code nicht mehr explizit sichtbar sind.</p> <p class="svelte-1a6td76">Diese Form der <em class="svelte-1a6td76">Reflection-on-Action</em> (nach Schön) gewährleistet die
        wissenschaftliche Nachvollziehbarkeit. Sie transformiert den flüchtigen Dialog
        mit dem LLM in eine dauerhafte, prüfbare Aufzeichnung.</p> <p class="meta-note svelte-1a6td76">Das rechts dargestellte Dokument ist das unveränderte Arbeitstagebuch dieses
        Projekts und zeigt den realen Verlauf der Implementierung.</p></div> <figure class="journal-preview svelte-1a6td76"><!> <figcaption class="svelte-1a6td76"><a href="https://github.com/DHCraft/PromptotypingExplainer/blob/main/knowledge/journal.md" target="_blank" rel="noopener noreferrer" class="svelte-1a6td76">→ Vollständiges Journal auf GitHub</a></figcaption></figure></div></div>`);function bs(i){var e=fs(),n=s(e),a=t(n,2),o=s(a),d=t(o,2),l=s(d);ms(l,{filename:"JOURNAL.md",content:`# Arbeitsjournal

## 2024-12-06 – Session 1: Projektstart

### Ziel
Grundstruktur der Scrollytelling-Website.

### Entscheidungen
- Framework: Svelte 5 (Compiler-Approach)
- Build: Vite für schnelles HMR
- Styling: Vanilla CSS + Custom Properties

### Verworfene Ansätze
- React: Zu viel Boilerplate
- Tailwind: Overhead für diesen Use Case

### Offene Fragen
- Wie granular sollen Steps sein?

---

## 2024-12-07 – Session 2: Step-System

### Umgesetzt
- IntersectionObserver für Step-Trigger
- Svelte Stores für globalen State
- URL Hash Navigation

### Erkenntnisse
- threshold: 0.5 besser als 0.3
- scroll-snap-type: proximity`}),f(1,n,()=>_,()=>({duration:400})),f(1,o,()=>$,()=>({x:-30,duration:500,delay:200})),f(1,d,()=>$,()=>({x:30,duration:500,delay:300})),p(i,e)}var ks=y(`<div class="phase4-versionierung svelte-5twe4b"><div class="header-group svelte-5twe4b"><span class="label svelte-5twe4b">Versionierung</span> <h3 class="svelte-5twe4b">Validierte Projektstände</h3></div> <div class="content-grid svelte-5twe4b"><div class="text-card svelte-5twe4b"><p class="svelte-5twe4b">Im Promptotyping-Prozess definiert jeder Git-Commit einen methodischen <strong class="svelte-5twe4b">Savepoint</strong>. Ein solcher Punkt markiert einen durch
        Fachexpertise validierten Status Quo ("Baseline").</p> <p class="svelte-5twe4b">Die Versionierung ermöglicht risikofreie Iterationen: Führt ein Prompt
        zu halluzinierten oder fehlerhaften Ergebnissen, erlaubt der Savepoint
        ein sofortiges Zurücksetzen auf den letzten validen Stand.</p> <p class="svelte-5twe4b">Die Commit-Historie fungiert somit als technischer Beleg des methodischen
        Fortschritts.</p></div> <div class="commit-example svelte-5twe4b"><div class="commit-card svelte-5twe4b"><div class="commit-header svelte-5twe4b"><span class="commit-icon svelte-5twe4b"><svg viewBox="0 0 16 16" fill="currentColor" width="16" height="16"><path d="M11.93 8.5a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 0 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 0 1 0 1.5Zm-1.43-.75a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"></path></svg></span> <span class="commit-label svelte-5twe4b">Commit Message</span></div> <div class="commit-title svelte-5twe4b"><span class="commit-type svelte-5twe4b">feat:</span> Implement visualization based on updated DATA.md</div> <div class="commit-body svelte-5twe4b"><p class="svelte-5twe4b">Reflects new entity relationship defined in session 3.</p> <p class="svelte-5twe4b">Validated against Requirement US-04.</p></div> <div class="commit-meta svelte-5twe4b"><span class="commit-hash svelte-5twe4b">#a3f7b2c</span> <span class="commit-date svelte-5twe4b">2024-12-07</span></div></div> <div class="savepoint-diagram svelte-5twe4b"><div class="timeline svelte-5twe4b"><div class="timeline-point validated svelte-5twe4b"><span class="point svelte-5twe4b"></span> <span class="label svelte-5twe4b">Baseline</span></div> <div class="timeline-line svelte-5twe4b"></div> <div class="timeline-point current svelte-5twe4b"><span class="point svelte-5twe4b"></span> <span class="label svelte-5twe4b">Iteration</span></div> <div class="timeline-line dashed svelte-5twe4b"></div> <div class="timeline-point future svelte-5twe4b"><span class="point svelte-5twe4b"></span> <span class="label svelte-5twe4b">Nächster Savepoint</span></div></div> <div class="rollback-arrow svelte-5twe4b"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="svelte-5twe4b"><path d="M9 14l-4-4 4-4"></path><path d="M5 10h11a4 4 0 1 1 0 8h-1"></path></svg> <span class="svelte-5twe4b">Rollback bei Fehlern</span></div></div></div></div></div>`);function ys(i){var e=ks(),n=s(e),a=t(n,2),o=s(a),d=t(o,2);f(1,n,()=>_,()=>({duration:400})),f(1,o,()=>$,()=>({x:-30,duration:500,delay:200})),f(1,d,()=>$,()=>({x:30,duration:500,delay:300})),p(i,e)}var ws=y(`<div class="phase4-vault-update svelte-1dkyo20"><h3 class="svelte-1dkyo20">Vault-Update</h3> <div class="intro-text svelte-1dkyo20"><p class="svelte-1dkyo20">Der Vault ist kein statisches Dokument, sondern ein <strong class="svelte-1dkyo20">lebendiger Wissensspeicher</strong>.
      Mit jeder Iteration fließt neues Wissen zurück: Erkannte Datenlücken, präzisierte Anforderungen,
      und Einsichten aus der Implementierung. Dieser kontinuierliche Update-Prozess unterscheidet
      Promptotyping von einmaligen Prompt-Versuchen.</p></div> <div class="update-visual svelte-1dkyo20"><div class="update-source svelte-1dkyo20"><div class="source-header svelte-1dkyo20">Prototype zeigt...</div> <div class="source-items svelte-1dkyo20"><div class="source-item svelte-1dkyo20">Fehlende Datenfelder</div> <div class="source-item svelte-1dkyo20">Unklare Anforderungen</div> <div class="source-item svelte-1dkyo20">Neue Erkenntnisse</div></div></div> <div class="update-arrow svelte-1dkyo20"><svg viewBox="0 0 60 40" width="60" height="40" class="svelte-1dkyo20"><path d="M5 20 L45 20" stroke="var(--color-terracotta)" stroke-width="2" stroke-dasharray="4 3"></path><polygon points="45,15 55,20 45,25" fill="var(--color-terracotta)"></polygon></svg> <span class="arrow-label svelte-1dkyo20">Update</span></div> <div class="update-target svelte-1dkyo20"><div class="target-header svelte-1dkyo20">Vault</div> <div class="target-items svelte-1dkyo20"><div class="target-item svelte-1dkyo20"><span class="file-name svelte-1dkyo20">DATA.md</span> <span class="update-type svelte-1dkyo20">+ Felder</span></div> <div class="target-item svelte-1dkyo20"><span class="file-name svelte-1dkyo20">REQUIREMENTS.md</span> <span class="update-type svelte-1dkyo20">+ Klarheit</span></div> <div class="target-item svelte-1dkyo20"><span class="file-name svelte-1dkyo20">CONTEXT.md</span> <span class="update-type svelte-1dkyo20">+ Wissen</span></div></div></div></div> <div class="update-triggers svelte-1dkyo20"><h4 class="svelte-1dkyo20">Wann wird der Vault aktualisiert?</h4> <ul class="svelte-1dkyo20"><li class="svelte-1dkyo20"><strong class="svelte-1dkyo20">Fehlende Datenfelder:</strong> Der Prototype zeigt, dass ein benötigtes Feld nicht dokumentiert ist</li> <li class="svelte-1dkyo20"><strong class="svelte-1dkyo20">Unklare Anforderungen:</strong> Eine User Story war zu vage für die Implementierung</li> <li class="svelte-1dkyo20"><strong class="svelte-1dkyo20">Neue Erkenntnisse:</strong> Die Exploration im Code deckt bisher unbekannte Zusammenhänge auf</li> <li class="svelte-1dkyo20"><strong class="svelte-1dkyo20">Geänderte Prioritäten:</strong> Das Feedback verschiebt die MoSCoW-Gewichtung</li></ul></div> <div class="loop-indicator svelte-1dkyo20"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" class="svelte-1dkyo20"><path d="M17 1l4 4-4 4"></path><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><path d="M7 23l-4-4 4-4"></path><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg> <span>Verbesserter Vault → besserer Prototype → nächste Iteration</span></div></div>`);function xs(i){var e=ws(),n=s(e),a=t(n,2),o=t(a,2),d=s(o),l=t(d,2),c=t(l,2),u=t(s(c),2),m=s(u),h=t(m,2),g=t(h,2),v=t(o,2),k=t(v,2);f(1,n,()=>_,()=>({duration:400})),f(1,a,()=>_,()=>({delay:150,duration:400})),f(1,d,()=>$,()=>({x:-30,duration:500,delay:300})),f(1,l,()=>_,()=>({delay:500,duration:400})),f(1,m,()=>_,()=>({delay:600})),f(1,h,()=>_,()=>({delay:700})),f(1,g,()=>_,()=>({delay:800})),f(1,c,()=>$,()=>({x:30,duration:500,delay:400})),f(1,v,()=>_,()=>({delay:900,duration:400})),f(1,k,()=>_,()=>({delay:1e3,duration:400})),p(i,e)}var zs=y('<span class="blog-badge svelte-1es890x">Blog</span>'),Ds=y('<div class="example-card svelte-1es890x"><div class="card-thumbnail svelte-1es890x"><img loading="lazy" class="svelte-1es890x"/> <span class="type-badge svelte-1es890x"> </span> <span class="date-badge svelte-1es890x"> </span> <!></div> <div class="card-content svelte-1es890x"><h3 class="svelte-1es890x"> </h3> <p class="abstract svelte-1es890x"> </p> <div class="card-footer svelte-1es890x"><span class="data-format svelte-1es890x"> </span> <div class="card-links svelte-1es890x"><a target="_blank" rel="noopener" class="link-demo svelte-1es890x"><!> Demo</a> <a target="_blank" rel="noopener" class="link-repo svelte-1es890x"><!> Repo</a></div></div></div></div>'),Ps=y(`<div class="outro-beispiele svelte-1es890x"><header class="scene-header svelte-1es890x"><span class="section-label svelte-1es890x">Praxis</span> <h2 class="svelte-1es890x">Case Studies</h2></header> <div class="intro-text svelte-1es890x"><p class="svelte-1es890x">Die folgenden Fallstudien dokumentieren die Anwendung von Promptotyping in verschiedenen
      DH-Kontexten. Jedes Projekt wurde mit einem LLM als Entwicklungspartner umgesetzt und
      demonstriert unterschiedliche Aspekte der Methodik: von der Netzwerkvisualisierung über
      Bildanalyse bis zur Annotationsunterstützung. Die Projekte sind als Open Source verfügbar
      und können als Ausgangspunkt für eigene Entwicklungen dienen.</p></div> <div class="examples-grid svelte-1es890x"></div> <div class="deep-dive-triggers svelte-1es890x"></div></div>`);function _s(i){const e={correspexplorer:"case-correspexplorer",lucina:"case-lucina",kriminalmuseum:"case-kriminalmuseum","cvma-glasmalerei":"case-cvma",aldersbach:"case-aldersbach","szd-annotation":"case-szd"};var n=Ps(),a=s(n),o=t(a,2),d=t(o,2);pe(d,5,()=>it,ge,(c,u,m)=>{var h=Ds(),g=s(h),v=s(g),k=t(v,2),x=s(k),z=t(k,2),S=s(z),E=t(z,2);{var P=se=>{var ae=zs();p(se,ae)};Q(E,se=>{r(u).hasBlog&&se(P)})}var w=t(g,2),L=s(w),F=s(L),K=t(L,2),G=s(K),te=t(K,2),q=s(te),O=s(q),ie=t(q,2),ne=s(ie),M=s(ne);he(M,{name:"external-link",size:12});var W=t(ne,2),R=s(W);he(R,{name:"github",size:12}),I(()=>{T(v,"src",r(u).thumbnail),T(v,"alt",`${r(u).name??""} Screenshot`),A(x,r(u).type),A(S,r(u).date),A(F,r(u).name),A(G,r(u).abstract),A(O,r(u).dataFormat),T(ne,"href",r(u).link),T(W,"href",r(u).github)}),f(1,h,()=>$,()=>({y:30,duration:400,delay:200+m*100})),p(c,h)});var l=t(d,2);pe(l,5,()=>it,ge,(c,u)=>{we(c,{get label(){return r(u).name},get deepDiveId(){return e[r(u).id]}})}),f(1,a,()=>$,()=>({y:-20,duration:500})),f(1,o,()=>$,()=>({y:20,duration:400,delay:100})),f(1,l,()=>$,()=>({y:20,duration:400,delay:800})),p(i,n)}var Es=y('<li class="svelte-1f85qzn"><strong class="svelte-1f85qzn"> </strong> </li>'),Ms=y('<li class="svelte-1f85qzn"><strong class="svelte-1f85qzn"> </strong> </li>'),Ss=y('<div class="gap-item svelte-1f85qzn"><span class="gap-label svelte-1f85qzn"> </span> <span class="gap-text svelte-1f85qzn"> </span></div>'),Ls=y(`<div class="outro-diskussion svelte-1f85qzn"><header class="scene-header svelte-1f85qzn"><span class="section-label svelte-1f85qzn">Reflexion</span> <h2 class="svelte-1f85qzn">Sollten wir LLMs in der Forschung einsetzen?</h2></header> <div class="intro-text svelte-1f85qzn"><p class="svelte-1f85qzn">Der Einsatz von LLMs in der Forschung ist keine rein technische, sondern eine <strong class="svelte-1f85qzn">epistemisch-politische Entscheidung</strong>. Die Frage lautet nicht nur "Können wir?",
      sondern auch "Sollten wir?" und "Unter welchen Bedingungen?". Diese Reflexion ist integraler
      Bestandteil einer verantwortungsvollen Promptotyping-Praxis.</p></div> <div class="discussion-grid svelte-1f85qzn"><div class="column contra svelte-1f85qzn"><div class="column-header svelte-1f85qzn"><span class="column-icon svelte-1f85qzn">?</span> <h3 class="svelte-1f85qzn">Kritische Einwände</h3></div> <ul class="points-list svelte-1f85qzn"></ul></div> <div class="column pro svelte-1f85qzn"><div class="column-header svelte-1f85qzn"><span class="column-icon svelte-1f85qzn">!</span> <h3 class="svelte-1f85qzn">Pragmatische Argumente</h3></div> <ul class="points-list svelte-1f85qzn"></ul></div></div> <div class="research-gaps svelte-1f85qzn"><h4 class="svelte-1f85qzn">Offene Forschungsfragen</h4> <div class="gaps-grid svelte-1f85qzn"></div></div> <div class="deep-dive-trigger svelte-1f85qzn"><!></div></div>`);function Cs(i){const e=[{title:"Proprietäre Systeme",text:"Abhängigkeit von intransparenten Systemen ohne Einblick in Trainingsdaten oder Modellverhalten."},{title:"Forschungsintegrität",text:"Black-Box-Charakter erschwert Reproduzierbarkeit und Zitierbarkeit."},{title:"Zugangshürden",text:"Kosten (~200$/Monat) schaffen neue Ungleichheiten. Open-Source-Alternativen erfordern erhebliche Infrastruktur."},{title:"Ökologische Kosten",text:"Hoher Energieverbrauch für Training und Inferenz bleibt methodisch unreflektiert."}],n=[{title:"Beschleunigung",text:"Projekte, die Monate dauern würden, werden in Tagen umsetzbar."},{title:"Neue Experimente",text:"Ermöglicht Prototypen und Analysen, die sonst nicht realisierbar wären."},{title:"Epistemische Praxis",text:"Vibe Coding als neue Form des explorativen Programmierens? (offene Forschungsfrage)"},{title:"Technologische Realität",text:"Multi-Agenten-Systeme zeigen, wohin die Entwicklung geht. Nicht-Auseinandersetzung ist keine Lösung."}],a=[{label:"Evaluierung",text:"Bisher existieren nur einzelne Fallbeispiele. Systematische Bewertungskriterien fehlen – am ehesten über Vibe Checks und Reviews (vgl. RIDE)."},{label:"Generalisierbarkeit",text:"Übertragbarkeit auf externe Teams und andere Disziplinen unbewiesen."},{label:"Skills Atrophy",text:"Die Gefahr des Verlernens von Coding-Skills ist real: Wer nur noch mit LLM-Unterstützung programmiert, verliert möglicherweise die Fähigkeit zur eigenständigen Problemlösung."},{label:"Kosten-Nutzen",text:"Zeitaufwand für Dokumentation vs. Effizienzgewinn ist offen."},{label:"Epistemische Gerechtigkeit",text:"Zugang zu LLM-Tools ist ungleich verteilt. Die Kosten (~200$/Monat für Premium-Modelle) schaffen neue Ungleichheiten in der Forschungslandschaft."}];var o=Ls(),d=s(o),l=t(d,2),c=t(l,2),u=s(c),m=t(s(u),2);pe(m,5,()=>e,ge,(S,E,P)=>{var w=Es(),L=s(w),F=s(L),K=t(L);I(()=>{A(F,`${r(E).title??""}:`),A(K,` ${r(E).text??""}`)}),f(1,w,()=>_,()=>({delay:300+P*100})),p(S,w)});var h=t(u,2),g=t(s(h),2);pe(g,5,()=>n,ge,(S,E,P)=>{var w=Ms(),L=s(w),F=s(L),K=t(L);I(()=>{A(F,`${r(E).title??""}:`),A(K,` ${r(E).text??""}`)}),f(1,w,()=>_,()=>({delay:300+P*100})),p(S,w)});var v=t(c,2),k=t(s(v),2);pe(k,5,()=>a,ge,(S,E,P)=>{var w=Ss(),L=s(w),F=s(L),K=t(L,2),G=s(K);I(()=>{A(F,r(E).label),A(G,r(E).text)}),f(1,w,()=>_,()=>({delay:700+P*80})),p(S,w)});var x=t(v,2),z=s(x);we(z,{label:"Grenzen & Limitationen im Detail",deepDiveId:"limitations",variant:"block"}),f(1,d,()=>$,()=>({y:-20,duration:500})),f(1,l,()=>$,()=>({y:20,duration:400,delay:100})),f(1,u,()=>$,()=>({x:-30,duration:500,delay:200})),f(1,h,()=>$,()=>({x:30,duration:500,delay:200})),f(1,v,()=>$,()=>({y:20,duration:500,delay:600})),f(1,x,()=>_,()=>({delay:900})),p(i,o)}var As=y(`<div class="outro-zusammenfassung svelte-pz9g48"><h3 class="svelte-pz9g48">Zusammenfassung</h3> <div class="text-card svelte-pz9g48"><p class="svelte-pz9g48"><span class="promptotyping">Promptotyping</span> strukturiert die Zusammenarbeit zwischen Forscher:innen und LLMs
      durch einen vierphasigen Prozess: Materialsammlung, explorative Analyse, Wissensdestillation
      im <span class="promptotyping">Promptotyping</span> Vault, und iterative Implementation.</p> <p class="svelte-pz9g48">Der <span class="promptotyping">Promptotyping</span> Vault ist ein flexibler Wissensspeicher aus <strong class="svelte-pz9g48">Promptotyping Documents</strong>.
      Die Kerndokumente DATA.md, REQUIREMENTS.md und CONTEXT.md bilden den Ausgangspunkt, können aber je nach Domäne erweitert werden.
      Sie machen implizites Domänenwissen für LLMs nutzbar und wachsen mit jeder Iteration.</p> <p class="svelte-pz9g48"><strong class="svelte-pz9g48">Critical Expert in the Loop</strong>: Domänenexpert:innen bleiben unverzichtbar.
      Sie validieren Outputs, erkennen Halluzinationen und steuern die fachliche Qualität.</p></div> <div class="three-levels svelte-pz9g48"><h4 class="svelte-pz9g48">Drei Ebenen der Methodik</h4> <div class="levels-grid svelte-pz9g48"><div class="level-item svelte-pz9g48"><span class="level-label svelte-pz9g48">Technisch</span> <p class="svelte-pz9g48">Vault-Dokumente, Context Engineering, iterative Prototypen</p></div> <div class="level-item svelte-pz9g48"><span class="level-label svelte-pz9g48">Methodisch</span> <p class="svelte-pz9g48">Phasenmodell, Critical Expert, Cyborg-Kollaboration</p></div> <div class="level-item svelte-pz9g48"><span class="level-label svelte-pz9g48">Epistemisch</span> <p class="svelte-pz9g48">Validierung, Sycophancy-Bewusstsein, Grenzen der Automation</p></div></div></div> <div class="savepoint-box svelte-pz9g48"><h4 class="svelte-pz9g48">Der Vault als Savepoint</h4> <p class="svelte-pz9g48">Der Vault funktioniert wie ein Savepoint in einem Computerspiel: Der akkumulierte Wissensstand
      bleibt erhalten, auch wenn die Entwicklung unterbrochen wird. Neue Teammitglieder können den
      Vault lesen und den Projektstand verstehen. Bei Modellwechseln oder nach längeren Pausen
      ermöglicht der Vault einen nahtlosen Wiedereinstieg.</p></div> <div class="cta svelte-pz9g48"><div class="cta-section svelte-pz9g48"><h4 class="svelte-pz9g48">Selbst ausprobieren</h4> <button class="cta-btn cta-btn-download svelte-pz9g48"><!> Vault-Template herunterladen</button> <p class="cta-hint svelte-pz9g48">Enthält DATA.md, REQUIREMENTS.md, CONTEXT.md und JOURNAL.md</p></div> <div class="cta-section svelte-pz9g48"><h4 class="svelte-pz9g48">Beispielprojekt ansehen</h4> <div class="cta-links svelte-pz9g48"><a href="https://github.com/DigitalHumanitiesCraft/CorrespExplorer" target="_blank" rel="noopener" class="cta-btn svelte-pz9g48"><!> GitHub Repository</a> <a href="https://dhcraft.org/CorrespExplorer" target="_blank" rel="noopener" class="cta-btn cta-btn-secondary svelte-pz9g48"><!> Live Demo</a></div></div></div></div>`);function Is(i,e){de(e,!1);const n="/PromptotypingExplainer/";function a(){const w=document.createElement("a");w.href=`${n}downloads/vault-template.zip`,w.download="promptotyping-vault-template.zip",document.body.appendChild(w),w.click(),document.body.removeChild(w)}ce();var o=As(),d=s(o),l=t(d,2),c=t(l,2),u=t(c,2),m=t(u,2),h=s(m),g=t(s(h),2),v=s(g);he(v,{name:"file-text",size:18});var k=t(h,2),x=t(s(k),2),z=s(x),S=s(z);he(S,{name:"github",size:18});var E=t(z,2),P=s(E);he(P,{name:"external-link",size:18}),f(1,d,()=>_,()=>({duration:400})),f(1,l,()=>$,()=>({y:20,duration:500,delay:200})),f(1,c,()=>$,()=>({y:20,duration:500,delay:400})),f(1,u,()=>$,()=>({y:20,duration:500,delay:500})),X("click",g,a),f(1,m,()=>kt,()=>({duration:400,delay:600})),p(i,o),oe()}var $s=y('<button class="scroll-nav-button svelte-1n46o8q" aria-label="Zum nächsten Abschnitt scrollen"><div class="scroll-arrow svelte-1n46o8q"></div></button>'),Ts=y('<div class="background-layer svelte-1n46o8q"></div> <!> <main class="scroll-container svelte-1n46o8q"><!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!></main> <!>',1);function Fs(i,e){de(e,!1);const n=()=>ve(ye,"$currentPhase",u),a=()=>ve(Ee,"$currentStep",u),o=()=>ve(ft,"$globalStepIndex",u),d=()=>ve(Ht,"$globalProgress",u),l=()=>ve(st,"$isDeepDiveOpen",u),c=()=>ve(nt,"$currentDeepDive",u),[u,m]=tt(),h=re(),g=re();Ue(()=>(Zt(),setTimeout(()=>{Qe()},300),window.addEventListener("hashchange",Qe),()=>window.removeEventListener("hashchange",Qe)));function v(b){}function k(){const b=o();let D=0;for(let le=0;le<J.length;le++){const De=J[le];for(let Pe=0;Pe<De.steps.length;Pe++){if(D===b+1)return`${De.id}-${De.steps[Pe].id}`;D++}}return null}function x(){const b=k();if(b){const D=document.getElementById(b);D&&D.scrollIntoView({behavior:"smooth"})}}function z(b,D,le){return b+(D-b)*le}be(()=>(n(),a()),()=>{typeof window<"u"&&Xt(n(),a())}),be(()=>(o(),et),()=>{C(h,o()>=et-1)}),be(()=>d(),()=>{C(g,(()=>{const b=d();let D;b<.2?D=0:b<.5?D=(b-.2)/.3:b<.85?D=1:D=1-(b-.85)/.15*.3;const le=Math.round(z(96,191,D)),De=Math.round(z(125,91,D)),Pe=Math.round(z(139,62,D)),Re=.04+b*.12,He=30+b*40,qe=50-Math.sin(b*Math.PI)*20,Ze=70-b*20;return`radial-gradient(ellipse at ${He}% ${qe}%, rgba(${le}, ${De}, ${Pe}, ${Re}) 0%, rgba(232, 232, 232, 1) ${Ze}%)`})())}),Oe(),ce();var S=Ts(),E=ke(S),P=t(E,2);vn(P,{});var w=t(P,2),L=s(w);ln(L,{});var F=t(L,2);B(F,{id:"intro-definition",phaseIndex:0,stepIndex:0,children:(b,D)=>{En(b)},$$slots:{default:!0}});var K=t(F,2);B(K,{id:"intro-vibecoding",phaseIndex:0,stepIndex:1,children:(b,D)=>{An(b)},$$slots:{default:!0}});var G=t(K,2);B(G,{id:"intro-strangeminds",phaseIndex:0,stepIndex:2,children:(b,D)=>{$n(b)},$$slots:{default:!0}});var te=t(G,2);B(te,{id:"intro-kernprinzip",phaseIndex:0,stepIndex:3,children:(b,D)=>{Vn(b)},$$slots:{default:!0}});var q=t(te,2);B(q,{id:"intro-methodik",phaseIndex:0,stepIndex:4,children:(b,D)=>{Rn(b)},$$slots:{default:!0}});var O=t(q,2);B(O,{id:"intro-scholar-centered",phaseIndex:0,stepIndex:5,children:(b,D)=>{jn(b)},$$slots:{default:!0}});var ie=t(O,2);B(ie,{id:"intro-phasen",phaseIndex:0,stepIndex:6,children:(b,D)=>{Nn(b,{})},$$slots:{default:!0}});var ne=t(ie,2);B(ne,{id:"phase1-titel",phaseIndex:1,stepIndex:0,children:(b,D)=>{Un(b)},$$slots:{default:!0}});var M=t(ne,2);B(M,{id:"phase1-datenqualitaet",phaseIndex:1,stepIndex:1,children:(b,D)=>{Hn(b)},$$slots:{default:!0}});var W=t(M,2);B(W,{id:"phase1-sammlung",phaseIndex:1,stepIndex:2,children:(b,D)=>{Xn(b)},$$slots:{default:!0}});var R=t(W,2);B(R,{id:"phase2-exploration",phaseIndex:2,stepIndex:0,children:(b,D)=>{Yn(b)},$$slots:{default:!0}});var se=t(R,2);B(se,{id:"phase3-titel",phaseIndex:3,stepIndex:0,children:(b,D)=>{ts(b)},$$slots:{default:!0}});var ae=t(se,2);B(ae,{id:"phase3-dokumente",phaseIndex:3,stepIndex:1,children:(b,D)=>{ss(b)},$$slots:{default:!0}});var ue=t(ae,2);B(ue,{id:"phase3-vault",phaseIndex:3,stepIndex:2,children:(b,D)=>{rs(b,{})},$$slots:{default:!0}});var Me=t(ue,2);B(Me,{id:"phase4-titel",phaseIndex:4,stepIndex:0,children:(b,D)=>{ls(b)},$$slots:{default:!0}});var H=t(Me,2);B(H,{id:"phase4-iteration",phaseIndex:4,stepIndex:1,children:(b,D)=>{ps(b)},$$slots:{default:!0}});var Y=t(H,2);B(Y,{id:"phase4-journal",phaseIndex:4,stepIndex:2,children:(b,D)=>{bs(b)},$$slots:{default:!0}});var xe=t(Y,2);B(xe,{id:"phase4-versionierung",phaseIndex:4,stepIndex:3,children:(b,D)=>{ys(b)},$$slots:{default:!0}});var ze=t(xe,2);B(ze,{id:"phase4-vault-update",phaseIndex:4,stepIndex:4,children:(b,D)=>{xs(b)},$$slots:{default:!0}});var Te=t(ze,2);B(Te,{id:"outro-beispiele",phaseIndex:5,stepIndex:0,children:(b,D)=>{_s(b)},$$slots:{default:!0}});var Le=t(Te,2);B(Le,{id:"outro-diskussion",phaseIndex:5,stepIndex:1,children:(b,D)=>{Cs(b)},$$slots:{default:!0}});var Fe=t(Le,2);B(Fe,{id:"outro-zusammenfassung",phaseIndex:5,stepIndex:2,children:(b,D)=>{Is(b,{})},$$slots:{default:!0}});var Ve=t(Fe,2);{var Ke=b=>{var D=$s();X("click",D,x),p(b,D)};Q(Ve,b=>{r(h)||b(Ke)})}var Ge=t(w,2);{let b=Se(()=>(c(),V(()=>c()?.title||""))),D=Se(()=>(c(),V(()=>c()?.content||"")));mn(Ge,{get isOpen(){return l()},get title(){return r(b)},get content(){return r(D)},$$events:{close(...le){Yt?.apply(this,le)}}})}I(()=>Ne(E,`background: ${r(g)??""};`)),X("scroll",w,v),p(i,S),oe(),m()}Ft(Fs,{target:document.getElementById("app")});
