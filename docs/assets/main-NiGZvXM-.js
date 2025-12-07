import{a as ot,E as dt,B as vt,b as ct,e as et,u as T,T as pt,w as tt,i as ut,q as nt,n as De,s as ht,c as gt,d as mt,r as ft,S as bt,f as kt,g as $e,h as Ee,j as B,k as y,l as se,m as b,p as N,o as Be,t as O,v as ie,x as r,y as l,z as ye,A as a,C,D as xe,F as K,G as S,H as X,I as ve,J as yt,K as fe,L as Se,M as te,N as j,O as ue,P as ne,Q as Le,R as _e,$ as xt,U as Ke,V as wt,W as Ce,X as zt}from"./legacy-D0-deDzZ.js";import{o as Ae,c as st}from"./index-client-D01PO9rU.js";import{i as Q}from"./if-DirpKKF7.js";import{s as we}from"./style-Bj5zVdjk.js";import{h as Dt}from"./html-uHvxtRup.js";import{g as _t}from"./glossary-4O5miyo7.js";import{g as Ue}from"./bibliography-Bor_VxGP.js";const $t=()=>performance.now(),ce={tick:n=>requestAnimationFrame(n),now:()=>$t(),tasks:new Set};function it(){const n=ce.now();ce.tasks.forEach(e=>{e.c(n)||(ce.tasks.delete(e),e.f())}),ce.tasks.size!==0&&ce.tick(it)}function Et(n){let e;return ce.tasks.size===0&&ce.tick(it),{promise:new Promise(t=>{ce.tasks.add(e={c:n,f:t})}),abort(){ce.tasks.delete(e)}}}function Ie(n,e){tt(()=>{n.dispatchEvent(new CustomEvent(e))})}function Pt(n){if(n==="float")return"cssFloat";if(n==="offset")return"cssOffset";if(n.startsWith("--"))return n;const e=n.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function Ge(n){const e={},t=n.split(";");for(const s of t){const[o,d]=s.split(":");if(!o||d===void 0)break;const i=Pt(o.trim());e[i]=d.trim()}return e}const Mt=n=>n;function g(n,e,t,s){var o=(n&gt)!==0,d=(n&mt)!==0,i=o&&d,v=(n&pt)!==0,m=i?"both":o?"in":"out",h,c=e.inert,u=e.style.overflow,p,k;function z(){return tt(()=>h??=t()(e,s?.()??{},{direction:m}))}var x={is_global:v,in(){if(e.inert=c,!o){k?.abort(),k?.reset?.();return}d||p?.abort(),Ie(e,"introstart"),p=Re(e,z(),k,1,()=>{Ie(e,"introend"),p?.abort(),p=h=void 0,e.style.overflow=u})},out(_){if(!d){_?.(),h=void 0;return}e.inert=!0,Ie(e,"outrostart"),k=Re(e,z(),p,0,()=>{Ie(e,"outroend"),_?.()})},stop:()=>{p?.abort(),k?.abort()}},L=ot;if((L.nodes.t??=[]).push(x),o&&ht){var $=v;if(!$){for(var D=L.parent;D&&(D.f&dt)!==0;)for(;(D=D.parent)&&(D.f&vt)===0;);$=!D||(D.f&ct)!==0}$&&et(()=>{T(()=>x.in())})}}function Re(n,e,t,s,o){var d=s===1;if(ut(e)){var i,v=!1;return nt(()=>{if(!v){var L=e({direction:d?"in":"out"});i=Re(n,L,t,s,o)}}),{abort:()=>{v=!0,i?.abort()},deactivate:()=>i.deactivate(),reset:()=>i.reset(),t:()=>i.t()}}if(t?.deactivate(),!e?.duration)return o(),{abort:De,deactivate:De,reset:De,t:()=>s};const{delay:m=0,css:h,tick:c,easing:u=Mt}=e;var p=[];if(d&&t===void 0&&(c&&c(0,1),h)){var k=Ge(h(0,1));p.push(k,k)}var z=()=>1-s,x=n.animate(p,{duration:m,fill:"forwards"});return x.onfinish=()=>{x.cancel();var L=t?.t()??1-s;t?.abort();var $=s-L,D=e.duration*Math.abs($),_=[];if(D>0){var P=!1;if(h)for(var A=Math.ceil(D/16.666666666666668),V=0;V<=A;V+=1){var E=L+$*u(V/A),R=Ge(h(E,1-E));_.push(R),P||=R.overflow==="hidden"}P&&(n.style.overflow="hidden"),z=()=>{var I=x.currentTime;return L+$*u(I/D)},c&&Et(()=>{if(x.playState!=="running")return!1;var I=z();return c(I,1-I),!0})}x=n.animate(_,{duration:D,fill:"forwards"}),x.onfinish=()=>{z=()=>s,c?.(s,1-s),o()}},{abort:()=>{x&&(x.cancel(),x.effect=null,x.onfinish=De)},deactivate:()=>{o=De},reset:()=>{s===0&&c?.(1,0)},t:()=>z()}}function Ze(n,e){return n===e||n?.[bt]===e}function je(n={},e,t,s){return et(()=>{var o,d;return ft(()=>{o=d,d=[],T(()=>{n!==t(...d)&&(e(n,...d),o&&Ze(t(...o),n)&&e(null,...o))})}),()=>{nt(()=>{d&&Ze(t(...d),n)&&e(null,...d)})}}),n}function It(n){return function(...e){var t=e[0];return t.stopPropagation(),n?.apply(this,e)}}function Lt(n,e){var t=n.$$events?.[e.type],s=kt(t)?t.slice():t==null?[]:[t];for(var o of s)o.call(this,e)}const he=Ee(0),be=Ee(0),Z=[{id:"intro",label:"Promptotyping",number:null,subtitle:"Einführung",steps:[{id:"definition",label:"Definition"},{id:"kernprinzip",label:"Kernprinzip"},{id:"methodik",label:"Methodik"},{id:"phasen",label:"Phasen"}]},{id:"phase1",label:"Preparation",number:1,subtitle:"Materialsammlung",steps:[{id:"titel",label:"Übersicht"},{id:"rohdaten",label:"Rohdaten"},{id:"sammlung",label:"Sammlung"}]},{id:"phase2",label:"Exploration",number:2,subtitle:"Epistemische Spielwiese",steps:[{id:"exploration",label:"Exploration"}]},{id:"phase3",label:"Destillation",number:3,subtitle:"Vault (.md Files)",steps:[{id:"titel",label:"Übersicht"},{id:"dokumente",label:".md Dokumente"},{id:"vault",label:"Vault"}]},{id:"phase4",label:"Implementation",number:4,subtitle:"Prototype + Vault-Update",steps:[{id:"titel",label:"Übersicht"},{id:"iteration",label:"Iteration"},{id:"vault-update",label:"Vault-Update"}]},{id:"outro",label:"Praxis",number:null,subtitle:"Case Studies & Reflexion",steps:[{id:"beispiele",label:"Beispiele"},{id:"diskussion",label:"Diskussion"},{id:"zusammenfassung",label:"Zusammenfassung"}]}],Ct=Z.reduce((n,e)=>n+e.steps.length,0),St=$e([he,be],([n,e])=>{let t=0;for(let s=0;s<n;s++)t+=Z[s].steps.length;return t+e}),At=$e(St,n=>n/(Ct-1));$e([he,be],([n,e])=>{const t=Z[n];return!t||t.steps.length<=1?0:e/(t.steps.length-1)});$e(he,n=>Z[n]||Z[0]);$e([he,be],([n,e])=>{const t=Z[n];return t?t.steps[e]||t.steps[0]:null});Z.map((n,e)=>({id:n.id,label:n.label,steps:n.steps.map(t=>t.id)}));const Xe=Ee(!1);function Tt(){if(typeof window<"u"){const n=window.matchMedia("(prefers-reduced-motion: reduce)");Xe.set(n.matches),n.addEventListener("change",e=>{Xe.set(e.matches)})}}function Qe(n){if(typeof window>"u")return;const e=document.getElementById(n);e&&e.scrollIntoView({behavior:"smooth"})}function Ve(){if(typeof window>"u")return;const n=window.location.hash.slice(1);if(!n)return;const e=document.getElementById(n);if(e){setTimeout(()=>{e.scrollIntoView({behavior:"smooth"})},100);return}const t=n.split("-"),s=t[0],o=t.slice(1).join("-"),d=Z.findIndex(m=>m.id===s);if(d===-1)return;const i=Z[d];let v=s;o?i.steps.some(h=>h.id===o)&&(v=`${s}-${o}`):v=`${s}-${i.steps[0].id}`,setTimeout(()=>{const m=document.getElementById(v);m&&m.scrollIntoView({behavior:"smooth"})},100)}let Je="";function qt(n,e){if(typeof window>"u")return;const t=Z[n];if(!t)return;const s=t.steps[e],o=s?`${t.id}-${s.id}`:t.id;o!==Je&&(Je=o,history.replaceState(null,"",`#${o}`))}const Ft={"system-1-42":{id:"system-1-42",title:"System 1.42 – Wie LLMs funktionieren",content:`
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
    `},"scholar-centered-design":{id:"scholar-centered-design",title:"Scholar-Centered Design & Requirements Engineering",content:`
      <h3>User-Centered Design (UCD) Requirements Engineering</h3>
      <p>
        UCD Requirements Engineering bezeichnet die systematische Erhebung, Dokumentation und
        Verwaltung von Anforderungen, bei der die <strong>Bedürfnisse, Fähigkeiten und
        Einschränkungen der zukünftigen Nutzer</strong> im Mittelpunkt stehen.
      </p>
      <ul>
        <li><strong>Kernziel:</strong> Maximierung von Usability und User Experience (UX)</li>
        <li><strong>Leitprinzip:</strong> Anpassung der Technologie an den Menschen</li>
      </ul>

      <h3>Scholar-Centered Design (SCD)</h3>
      <p>
        Scholar-Centered Design ist eine spezialisierte Weiterentwicklung des UCD für den
        <strong>wissenschaftlichen Kontext</strong> (Digital Humanities, Data Science). Es adressiert
        die spezifischen Arbeitsweisen von Forschenden.
      </p>
      <ul>
        <li><strong>Kernziel:</strong> Unterstützung komplexer hermeneutischer Prozesse und Erkenntnisgewinnung</li>
        <li><strong>Leitprinzip:</strong> Unterstützung von Komplexität statt reiner Vereinfachung. Transparenz der Datenherkunft (Provenienz)</li>
      </ul>

      <h3>Synthese im Phasenmodell</h3>
      <table>
        <thead>
          <tr>
            <th>Phase</th>
            <th>UCD-Perspektive</th>
            <th>SCD-Perspektive</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Analyse</strong></td>
            <td>Personas, User Stories</td>
            <td>Forschungsmethodik analysieren</td>
          </tr>
          <tr>
            <td><strong>Design</strong></td>
            <td>Kognitive Last reduzieren</td>
            <td>Exploration ermöglichen</td>
          </tr>
          <tr>
            <td><strong>Prototyping</strong></td>
            <td>Low/High-Fidelity</td>
            <td>Echte Forschungsdaten</td>
          </tr>
          <tr>
            <td><strong>Evaluation</strong></td>
            <td>Usability-Tests (ISO 9241)</td>
            <td>Wissenschaftliche Utility</td>
          </tr>
        </tbody>
      </table>

      <h3>Der hermeneutische Zirkel</h3>
      <p>
        In der Wissenschaft verändert oft das erste Sichten von Ergebnissen die Fragestellung selbst.
        Der Forscher erkennt neue Muster und muss die Anforderungen ändern. Dies ist nicht
        Fehlerbehebung, sondern <strong>Teil des Erkenntnisgewinns</strong>.
      </p>

      <div class="reference">
        <strong>Referenzen:</strong><br>
        Warwick, C. (2012): <em>Studying Users in Digital Humanities</em>. Facet Publishing.<br>
        Kemman, M. (2021): <em>Trading Zones of Digital History</em>. De Gruyter.<br>
        Pohl, K. & Rupp, C. (2015): <em>Basiswissen Requirements Engineering</em>. dpunkt.
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
        Context Engineering beschreibt die systematische Gestaltung und Optimierung des Kontexts,
        der einem Large Language Model zur Verfügung gestellt wird.
      </p>

      <h3>Die drei Komponenten</h3>
      <ul>
        <li>
          <strong>Context Creation:</strong> Formalisierung impliziten Domänenwissens
          in maschinenlesbare Strukturen
        </li>
        <li>
          <strong>Context Compression:</strong> Verdichtung auf relevante Information.
          Das "Compression-als-Amplification" Paradox: Weniger Tokens → bessere Modellaufmerksamkeit
        </li>
        <li>
          <strong>Context Orchestration:</strong> Strategische Steuerung über multiple
          Iterationen mit dynamischer Anpassung
        </li>
      </ul>

      <h3>Context Rot vermeiden</h3>
      <p>
        Je mehr Tokens im Context Window, desto schlechter die Modellleistung
        (Hong et al., 2025). Destillation bedeutet: <strong>maximale Information mit minimalen Tokens</strong>.
      </p>

      <h3>Die drei Kerndokumente</h3>
      <table>
        <thead>
          <tr>
            <th>Dokument</th>
            <th>Inhalt</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><code>data.md</code></td>
            <td>Struktur und Semantik der Forschungsdaten</td>
          </tr>
          <tr>
            <td><code>user-story.md</code></td>
            <td>Anforderungen aus Forschungsperspektive</td>
          </tr>
          <tr>
            <td><code>context.md</code></td>
            <td>Relevantes Domänenwissen</td>
          </tr>
        </tbody>
      </table>

      <div class="reference">
        <strong>Referenzen:</strong><br>
        Hong, K. et al. (2025): <em>Context rot: How increasing input tokens impacts LLM performance</em>.<br>
        Mei et al. (2025): <em>Context Engineering</em>.
      </div>
    `},"critical-expert":{id:"critical-expert",title:"Critical Expert in the Loop",content:`
      <h3>Die Rolle des Critical Expert</h3>
      <p>
        Der Mensch ist nicht passiver Empfänger, sondern <strong>kritischer Validator</strong>.
        Domänenexpert:innen bringen ihr Fachwissen kontinuierlich in den Dialog ein.
      </p>

      <h3>Sycophancy erkennen</h3>
      <p>
        LLMs neigen zur unkritischen Bestätigung von Nutzerannahmen (Sycophancy).
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
    `}},Ne=Ee(null),Oe=Ee(!1);function Pe(n){const e=Ft[n];e?(Ne.set(e),Oe.set(!0),document.body.style.overflow="hidden"):console.warn(`Deep Dive not found: ${n}`)}function Vt(){Oe.set(!1),setTimeout(()=>{Ne.set(null)},300),document.body.style.overflow=""}var Kt=yt('<svg class="check-icon svelte-baj8t4" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),Rt=y('<span class="phase-number svelte-baj8t4"> </span>'),jt=y('<button><span class="step-dot-marker svelte-baj8t4"></span> <span class="step-label svelte-baj8t4"> </span></button>'),Wt=y('<div class="sub-steps svelte-baj8t4"></div>'),Bt=y('<li class="phase-item svelte-baj8t4"><button><span class="dot svelte-baj8t4"><!></span> <span class="label-container svelte-baj8t4"><span class="label svelte-baj8t4"> </span> <!></span></button> <!></li>'),Nt=y('<nav class="progress-indicator svelte-baj8t4" aria-label="Phasen-Navigation"><ul class="svelte-baj8t4"></ul></nav>');function Ot(n,e){O(e,!1);const t=()=>ve(he,"$currentPhase",o),s=()=>ve(be,"$currentStep",o),[o,d]=Be();function i(u){const p=Z[u],k=`${p.id}-${p.steps[0].id}`;Qe(k)}function v(u,p){const k=Z[u],z=k.steps[p],x=`${k.id}-${z.id}`;Qe(x)}function m(u,p){(u.key==="Enter"||u.key===" ")&&(u.preventDefault(),i(p))}B();var h=Nt(),c=r(h);se(c,5,()=>Z,ie,(u,p,k)=>{const z=ye(()=>t()===k),x=ye(()=>t()>k);var L=Bt(),$=r(L);let D;var _=r($),P=r(_);{var A=W=>{var F=Kt();b(W,F)};Q(P,W=>{l(x)&&W(A)})}var V=a(_,2),E=r(V),R=r(E),I=a(E,2);{var H=W=>{var F=Rt(),G=r(F);C(()=>S(G,`Phase ${l(p).number??""}`)),b(W,F)};Q(I,W=>{l(p).number&&W(H)})}var J=a($,2);{var re=W=>{var F=Wt();se(F,5,()=>l(p).steps,ie,(G,pe,le)=>{const ge=ye(()=>s()===le),ze=ye(()=>s()>le);var oe=jt();let ke;var f=a(r(oe),2),M=r(f);C(()=>{ke=xe(oe,1,"step-dot svelte-baj8t4",null,ke,{active:l(ge),completed:l(ze)}),K(oe,"aria-label",`Zu ${l(pe).label??""} springen`),S(M,l(pe).label)}),X("click",oe,()=>v(k,le)),b(G,oe)}),b(W,F)};Q(J,W=>{l(z)&&W(re)})}C(()=>{D=xe($,1,"progress-dot svelte-baj8t4",null,D,{active:l(z),completed:l(x)}),K($,"aria-label",`Zu ${l(p).label??""} springen`),K($,"aria-current",l(z)?"step":void 0),S(R,l(p).label)}),X("click",$,()=>i(k)),X("keydown",$,W=>m(W,k)),b(u,L)}),b(n,h),N(),d()}var Ht=y('<span class="phase-number svelte-1yliotu"> </span>'),Ut=y('<span class="phase-tag svelte-1yliotu"> </span>'),Gt=y('<span class="step-separator svelte-1yliotu">—</span> <span class="current-step svelte-1yliotu"> </span>',1),Zt=y('<header class="phase-header svelte-1yliotu"><div class="header-content svelte-1yliotu"><div class="phase-badge svelte-1yliotu"><!></div> <div class="title-group svelte-1yliotu"><h2 class="phase-title svelte-1yliotu"> </h2> <!></div> <nav class="header-nav svelte-1yliotu"><a href="/PromptotypingExplainer/about.html" class="nav-link svelte-1yliotu">About</a> <a href="/PromptotypingExplainer/vault.html" class="nav-link svelte-1yliotu">Vault</a> <a href="/PromptotypingExplainer/glossar.html" class="nav-link svelte-1yliotu">Glossar</a> <a href="/PromptotypingExplainer/bibliographie.html" class="nav-link svelte-1yliotu">Bibliographie</a></nav></div></header>');function Xt(n,e){O(e,!1);const t=()=>ve(he,"$currentPhase",o),s=()=>ve(be,"$currentStep",o),[o,d]=Be(),i=te(),v=te();fe(()=>t(),()=>{j(i,Z[t()]||Z[0])}),fe(()=>(l(i),s()),()=>{j(v,l(i).steps[s()]||l(i).steps[0])}),Se(),B();var m=Zt(),h=r(m),c=r(h),u=r(c);{var p=_=>{var P=Ht(),A=r(P);C(()=>S(A,`Phase ${l(i),T(()=>l(i).number)??""}`)),b(_,P)},k=_=>{var P=Ut(),A=r(P);C(()=>S(A,(l(i),T(()=>l(i).subtitle)))),b(_,P)};Q(u,_=>{l(i),T(()=>l(i).number)?_(p):_(k,!1)})}var z=a(c,2),x=r(z),L=r(x),$=a(x,2);{var D=_=>{var P=Gt(),A=a(ue(P),2),V=r(A);C(()=>S(V,(l(v),T(()=>l(v).label)))),b(_,P)};Q($,_=>{l(v)&&_(D)})}C(()=>S(L,(l(i),T(()=>l(i).label)))),b(n,m),N(),d()}var Qt=y('<section class="step svelte-zv7veq"><div class="step-content svelte-zv7veq"><!></div></section>');function U(n,e){O(e,!1);let t=ne(e,"id",8),s=ne(e,"phaseIndex",8),o=ne(e,"stepIndex",8),d=te();Ae(()=>{const h=new IntersectionObserver(c=>{c.forEach(u=>{u.isIntersecting&&u.intersectionRatio>.5&&(be.set(o()),he.set(s()))})},{threshold:.5,rootMargin:"-10% 0px -10% 0px"});return h.observe(l(d)),()=>h.disconnect()}),B();var i=Qt(),v=r(i),m=r(v);Le(m,e,"default",{},null),je(i,h=>j(d,h),()=>l(d)),C(()=>{K(i,"id",t()),K(i,"data-phase",s()),K(i,"data-step",o())}),b(n,i),N()}const Jt=n=>n;function rt(n){const e=n-1;return e*e*e+1}function Ye(n){const e=typeof n=="string"&&n.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[n,"px"]}function w(n,{delay:e=0,duration:t=400,easing:s=Jt}={}){const o=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:s,css:d=>`opacity: ${d*o}`}}function q(n,{delay:e=0,duration:t=400,easing:s=rt,x:o=0,y:d=0,opacity:i=0}={}){const v=getComputedStyle(n),m=+v.opacity,h=v.transform==="none"?"":v.transform,c=m*(1-i),[u,p]=Ye(o),[k,z]=Ye(d);return{delay:e,duration:t,easing:s,css:(x,L)=>`
			transform: ${h} translate(${(1-x)*u}${p}, ${(1-x)*k}${z});
			opacity: ${m-c*L}`}}function He(n,{delay:e=0,duration:t=400,easing:s=rt,start:o=0,opacity:d=0}={}){const i=getComputedStyle(n),v=+i.opacity,m=i.transform==="none"?"":i.transform,h=1-o,c=v*(1-d);return{delay:e,duration:t,easing:s,css:(u,p)=>`
			transform: ${m} scale(${1-h*p});
			opacity: ${v-c*p}
		`}}var Yt=y('<div class="deep-dive-overlay svelte-tewam" role="dialog" aria-modal="true" aria-labelledby="deep-dive-title" tabindex="-1"><div class="deep-dive-panel svelte-tewam"><header class="panel-header svelte-tewam"><div class="header-indicator svelte-tewam"><span class="branch-icon svelte-tewam">←</span> <span class="branch-label svelte-tewam">Deep Dive</span></div> <h2 id="deep-dive-title" class="svelte-tewam"> </h2> <button class="close-button svelte-tewam" aria-label="Schließen">×</button></header> <div class="panel-content svelte-tewam"><!></div> <footer class="panel-footer svelte-tewam"><button class="back-button svelte-tewam">→ Zurück zum Hauptpfad</button></footer></div></div>');function en(n,e){O(e,!1);let t=ne(e,"isOpen",8,!1),s=ne(e,"title",8,""),o=ne(e,"content",8,null);const d=st();function i(){d("close")}function v(p){p.key==="Escape"&&i()}function m(p){p.target===p.currentTarget&&i()}B();var h=_e();X("keydown",xt,v);var c=ue(h);{var u=p=>{var k=Yt(),z=r(k),x=r(z),L=a(r(x),2),$=r(L),D=a(L,2),_=a(x,2),P=r(_);{var A=I=>{var H=_e(),J=ue(H);Dt(J,o),b(I,H)},V=I=>{var H=_e(),J=ue(H);Le(J,e,"default",{},null),b(I,H)};Q(P,I=>{o()?I(A):I(V,!1)})}var E=a(_,2),R=r(E);C(()=>S($,s())),X("click",D,i),X("click",R,i),g(3,z,()=>q,()=>({x:-300,duration:300})),g(3,k,()=>w,()=>({duration:200})),X("click",k,m),b(p,k)};Q(c,p=>{t()&&p(u)})}b(n,h),N()}var tn=y('<span class="popover-en svelte-l7i3p6"> </span>'),nn=y('<span class="tag svelte-l7i3p6"> </span>'),sn=y('<a class="popover-source svelte-l7i3p6"> </a>'),rn=y('<div role="tooltip"><div class="caret svelte-l7i3p6"></div> <div class="popover-header svelte-l7i3p6"><span class="popover-term svelte-l7i3p6"> </span> <!></div> <p class="popover-definition svelte-l7i3p6"> </p> <div class="popover-footer svelte-l7i3p6"><div class="popover-tags svelte-l7i3p6"></div> <!></div></div>'),an=y('<span role="button" tabindex="0"><!></span> <!>',1);function We(n,e){O(e,!1);const t=te(),s=te();let o=ne(e,"id",8),d=ne(e,"inline",8,!0),i=te(!1),v=te(),m=te(),h,c=te({top:0,left:0,placement:"above"});async function u(){if(await wt(),!l(v))return;const E=l(v).getBoundingClientRect(),R=200,I=8;let H,J,re="above";E.top>R+I?(H=E.top-I,re="above"):(H=E.bottom+I,re="below"),J=E.left+E.width/2,j(c,{top:H,left:J,placement:re})}function p(){h=setTimeout(()=>{j(i,!0),u()},300)}function k(){clearTimeout(h),j(i,!1)}function z(E){E.preventDefault(),E.stopPropagation(),clearTimeout(h),j(i,!l(i)),l(i)&&u()}function x(E){l(i)&&l(v)&&!l(v).contains(E.target)&&l(m)&&!l(m).contains(E.target)&&j(i,!1)}function L(){l(i)&&j(i,!1)}function $(E){E.key==="Escape"&&l(i)&&j(i,!1)}Ae(()=>(document.addEventListener("click",x),window.addEventListener("scroll",L,{passive:!0}),window.addEventListener("keydown",$),window.addEventListener("resize",u),()=>{document.removeEventListener("click",x),window.removeEventListener("scroll",L),window.removeEventListener("keydown",$),window.removeEventListener("resize",u),clearTimeout(h)}));const D={prompting:"#3B82F6","ai-engineering":"#8B5CF6",fundamentals:"#607D8B",architecture:"#059669",safety:"#DC2626",training:"#D97706",agents:"#EC4899",evaluation:"#6366F1",methodology:"#14B8A6",theory:"#8B5CF6"};fe(()=>Ke(o()),()=>{j(t,_t[o()])}),fe(()=>(l(t),Ue),()=>{j(s,l(t)?.source?Ue(l(t).source):null)}),Se(),B();var _=_e(),P=ue(_);{var A=E=>{var R=an(),I=ue(R);let H;var J=r(I);Le(J,e,"default",{},F=>{var G=Ce();C(()=>S(G,(l(t),T(()=>l(t).term)))),b(F,G)}),je(I,F=>j(v,F),()=>l(v));var re=a(I,2);{var W=F=>{var G=rn();let pe;var le=a(r(G),2),ge=r(le),ze=r(ge),oe=a(ge,2);{var ke=Y=>{var ee=tn(),de=r(ee);C(()=>S(de,`(${l(t),T(()=>l(t).en)??""})`)),b(Y,ee)};Q(oe,Y=>{l(t),T(()=>l(t).en&&l(t).en!==l(t).term)&&Y(ke)})}var f=a(le,2),M=r(f),me=a(f,2),Me=r(me);se(Me,5,()=>(l(t),T(()=>l(t).tags)),ie,(Y,ee)=>{var de=nn(),Fe=r(de);C(()=>{we(de,`background-color: ${l(ee),T(()=>D[l(ee)]||"#607D8B")??""}`),S(Fe,l(ee))}),b(Y,de)});var Te=a(Me,2);{var qe=Y=>{var ee=sn(),de=r(ee);C(()=>{K(ee,"href",`#bibliographie-${l(s),T(()=>l(s)?.id||"")??""}`),S(de,(l(t),T(()=>l(t).source)))}),X("click",ee,It(function(Fe){Lt.call(this,e,Fe)})),b(Y,ee)};Q(Te,Y=>{l(t),T(()=>l(t).source)&&Y(qe)})}je(G,Y=>j(m,Y),()=>l(m)),C(()=>{K(G,"id",`tooltip-${o()??""}`),pe=xe(G,1,"glossary-popover svelte-l7i3p6",null,pe,{above:l(c).placement==="above",below:l(c).placement==="below"}),we(G,`top: ${l(c),T(()=>l(c).top)??""}px; left: ${l(c),T(()=>l(c).left)??""}px;`),S(ze,(l(t),T(()=>l(t).term))),S(M,(l(t),T(()=>l(t).definition)))}),b(F,G)};Q(re,F=>{l(i)&&F(W)})}C(()=>{H=xe(I,1,"glossary-term svelte-l7i3p6",null,H,{inline:d(),active:l(i)}),K(I,"aria-describedby",l(i)?`tooltip-${o()}`:void 0),K(I,"aria-expanded",l(i))}),X("click",I,z),X("mouseenter",I,p),X("mouseleave",I,k),X("keydown",I,F=>F.key==="Enter"&&z(F)),b(E,R)},V=E=>{var R=_e(),I=ue(R);Le(I,e,"default",{},null),b(E,R)};Q(P,E=>{l(t)?E(A):E(V,!1)})}b(n,_),N()}const ln="/PromptotypingExplainer/assets/promptotyping-logo-ey7SXXm7.png";var on=y(`<div class="intro-definition svelte-10mg3y6"><div class="title-block svelte-10mg3y6"><img alt="Promptotyping Logo" class="logo svelte-10mg3y6"/> <h1 class="promptotyping-title svelte-10mg3y6">Promptotyping</h1> <p class="subtitle svelte-10mg3y6">Context Engineering: Vom Wissen zum Werkzeug</p></div> <div class="definition-block svelte-10mg3y6"><p class="definition svelte-10mg3y6"><span class="promptotyping">Promptotyping</span> ist eine Methode zur systematischen Entwicklung funktionaler
      Prototypen durch strukturierte Interaktion mit <!>.
      Sie kombiniert die Intuition des "Vibe Codings" mit einem systematischen Framework zur
      Wissensaufbereitung, ein <!>-Prozess,
      der domänenspezifisches Wissen für LLMs optimal strukturiert.</p> <p class="etymology svelte-10mg3y6">Der Name setzt sich zusammen aus <em class="svelte-10mg3y6">Prompt</em> (die Eingabe an ein LLM) und <em class="svelte-10mg3y6">Prototyping</em> (iterative Entwicklung von Funktionsmustern).</p> <p class="context-addendum svelte-10mg3y6">Obwohl die Methodik ihren Ursprung in den Digital Humanities hat, sind ihre Mechanismen
      universell auf datenintensive Forschungsprozesse übertragbar, darunter statistische Analysen,
      Datenvisualisierung und explorative Analysen in verschiedensten Disziplinen.</p></div></div>`);function dn(n){var e=on(),t=r(e),s=r(t),o=a(t,2),d=r(o),i=a(r(d),2);We(i,{id:"llm",children:(m,h)=>{var c=Ce("Large Language Models");b(m,c)},$$slots:{default:!0}});var v=a(i,2);We(v,{id:"context-engineering",children:(m,h)=>{var c=Ce("Context Engineering");b(m,c)},$$slots:{default:!0}}),C(()=>K(s,"src",ln)),b(n,e)}var vn=y('<button><span class="trigger-icon svelte-wjh6ga">←</span> <span class="trigger-label svelte-wjh6ga"> </span> <span class="trigger-hint svelte-wjh6ga">Deep Dive</span></button>');function ae(n,e){O(e,!1);let t=ne(e,"label",8,"Mehr erfahren"),s=ne(e,"deepDiveId",8,""),o=ne(e,"variant",8,"inline");const d=st();function i(){d("open",{id:s()})}B();var v=vn(),m=a(r(v),2),h=r(m);C(()=>{xe(v,1,`deep-dive-trigger ${o()??""}`,"svelte-wjh6ga"),K(v,"aria-label",`Deep Dive öffnen: ${t()??""}`),S(h,t())}),X("click",v,i),b(n,v),N()}var cn=y(`<div class="intro-kernprinzip svelte-jio7ez"><div class="content svelte-jio7ez"><h3 class="svelte-jio7ez">Co-Intelligence & "Strange New Minds"</h3> <div class="main-layout svelte-jio7ez"><div class="text-card svelte-jio7ez"><p class="svelte-jio7ez">LLMs sind <em class="svelte-jio7ez">"Strange New Minds"</em> (Summerfield, 2025), weder reine Werkzeuge
          noch echte Intelligenz. Sie sind statistische Mustermaschinen, die überzeugende
          Outputs produzieren, ohne deren Wahrheit validieren zu können. Diese "halluzinierenden
          Reasoner" erfordern externe Verifikation durch Domänenexpert:innen.</p> <p class="svelte-jio7ez"><span class="promptotyping svelte-jio7ez">Promptotyping</span> nutzt das Konzept der <strong class="svelte-jio7ez">Co-Intelligence</strong> nach Ethan Mollick (2024)
          für die produktive Zusammenarbeit zwischen menschlicher Expertise und KI-Fähigkeiten.
          Dabei wechseln wir zwischen zwei Modi. <strong class="svelte-jio7ez">Centaur-Arbeit</strong> mit klarer Aufgabenteilung
          eignet sich für strukturierte Phasen wie die Dokumenterstellung. <strong class="svelte-jio7ez">Cyborg-Arbeit</strong> mit fließender Zusammenarbeit auf Satzebene ist charakteristisch für explorative Phasen
          und kreative Iteration.</p> <p class="learn-more svelte-jio7ez">Mehr über die theoretischen Grundlagen von LLMs in der <a href="https://chpollin.github.io/llmdh/" target="_blank" rel="noopener noreferrer" class="svelte-jio7ez">LLM Summer School for DH</a>.</p></div></div> <div class="deep-dive-triggers svelte-jio7ez"><!> <!></div></div></div>`);function pn(n,e){O(e,!1);function t(m){Pe(m.detail.id)}B();var s=cn(),o=r(s),d=a(r(o),4),i=r(d);ae(i,{label:"Co-Intelligence",deepDiveId:"co-intelligence",$$events:{open:t}});var v=a(i,2);ae(v,{label:"System 1.42 – LLM-Grundlagen",deepDiveId:"system-1-42",$$events:{open:t}}),b(n,s),N()}var un=y(`<div class="intro-methodik svelte-p6qtke"><div class="content svelte-p6qtke"><h3 class="svelte-p6qtke">Critical Expert in the Loop</h3> <div class="explanation svelte-p6qtke"><p class="svelte-p6qtke">Ein zentrales Prinzip von Promptotyping: <strong class="svelte-p6qtke">Domänenexpert:innen bleiben unverzichtbar</strong>.
        LLMs können technisch korrekte, aber fachlich inadäquate Lösungen produzieren. Nur Expert:innen
        erkennen, ob eine Visualisierung historisch sinnvoll ist oder ob Kategorisierungen dem
        Forschungsgegenstand gerecht werden.</p> <p class="vibe-coding-note svelte-p6qtke"><strong class="svelte-p6qtke">Verhältnis zu Vibe Coding</strong> Promptotyping ist kein Gegenentwurf zu Vibe Coding,
        sondern gibt ihm Struktur für Forschungskontexte. Die intuitive, explorative Arbeitsweise
        bleibt erhalten, ergänzt durch systematische Dokumentation, die <!> verhindert und die Informationsdichte maximiert.</p></div> <div class="method-cards svelte-p6qtke"><div class="method-card svelte-p6qtke"><div class="card-icon svelte-p6qtke"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="svelte-p6qtke"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14,2 14,8 20,8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg></div> <h4 class="svelte-p6qtke">Vault-Dokumentation</h4> <p class="svelte-p6qtke">DATA.md, REQUIREMENTS.md, CONTEXT.md – strukturiertes Wissen als LLM-Input</p></div> <div class="method-card svelte-p6qtke"><div class="card-icon svelte-p6qtke"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="svelte-p6qtke"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg></div> <h4 class="svelte-p6qtke">Iterative Updates</h4> <p class="svelte-p6qtke">Der Vault wächst mit jeder Iteration – neues Wissen fließt zurück</p></div> <div class="method-card svelte-p6qtke"><div class="card-icon svelte-p6qtke"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="svelte-p6qtke"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div> <h4 class="svelte-p6qtke">Expert Validation</h4> <p class="svelte-p6qtke">Domänenexpert:innen validieren jeden Output kritisch</p></div></div> <div class="deep-dive-triggers svelte-p6qtke"><!> <!> <!> <!></div></div></div>`);function hn(n,e){O(e,!1);function t(k){Pe(k.detail.id)}B();var s=un(),o=r(s),d=a(r(o),2),i=a(r(d),2),v=a(r(i),2);We(v,{id:"context-rot",children:(k,z)=>{var x=Ce("Context Rot");b(k,x)},$$slots:{default:!0}});var m=a(d,4),h=r(m);ae(h,{label:"Critical Expert",deepDiveId:"critical-expert",$$events:{open:t}});var c=a(h,2);ae(c,{label:"Scholar-Centered Design",deepDiveId:"scholar-centered-design",$$events:{open:t}});var u=a(c,2);ae(u,{label:"Context Engineering",deepDiveId:"context-engineering",$$events:{open:t}});var p=a(u,2);ae(p,{label:"Grenzen & Limitationen",deepDiveId:"limitations",$$events:{open:t}}),b(n,s),N()}const gn="/PromptotypingExplainer/assets/promptotyping-overview-AcSHP9K_.png";var mn=y('<div class="phase-item svelte-hawgxw"><div class="phase-number svelte-hawgxw"> </div> <div class="phase-info svelte-hawgxw"><span class="phase-label svelte-hawgxw"> </span> <span class="phase-subtitle svelte-hawgxw"> </span></div></div>'),fn=y('<div class="intro-phasen svelte-hawgxw"><div class="side-by-side"><div class="content-side"><h3 class="svelte-hawgxw">Die vier Phasen</h3> <div class="phase-list svelte-hawgxw"></div></div> <div class="visual-side"><figure><img alt="Promptotyping Workflow: Vorbereitung, Exploration, Destillation, Implementation"/> <figcaption>Vier Phasen: Von Rohmaterial zu funktionalem Interface</figcaption></figure></div></div></div>');function bn(n,e){O(e,!1);const t=Z.filter(c=>c.number!==null);B();var s=fn(),o=r(s),d=r(o),i=a(r(d),2);se(i,5,()=>t,ie,(c,u)=>{var p=mn(),k=r(p),z=r(k),x=a(k,2),L=r(x),$=r(L),D=a(L,2),_=r(D);C(()=>{S(z,l(u).number),S($,l(u).label),S(_,l(u).subtitle)}),b(c,p)});var v=a(d,2),m=r(v),h=r(m);C(()=>K(h,"src",gn)),b(n,s),N()}var kn=y(`<div class="phase1-titel svelte-k7vkqd"><header class="scene-header svelte-k7vkqd"><span class="phase-number svelte-k7vkqd">Phase 1</span> <h2 class="svelte-k7vkqd">Vorbereitung</h2> <p class="subtitle svelte-k7vkqd">Materialsammlung</p></header> <div class="content svelte-k7vkqd"><p class="svelte-k7vkqd">Die <strong class="svelte-k7vkqd">Preparation</strong>-Phase sammelt alle relevanten Rohmaterialien, darunter
      Forschungsdaten, Dokumentation zu Standards und Modellen,
      Forschungsfragen und Domänenwissen.</p> <p class="highlight svelte-k7vkqd">Diese Phase verhindert die unkritische Übernahme technischer Lösungen
      für wissenschaftliche Probleme und zwingt zur präzisen Artikulation der Projektziele.</p> <div class="deep-dive-row svelte-k7vkqd"><!> <!></div></div></div>`);function yn(n,e){O(e,!1);function t(h){Pe(h.detail.id)}B();var s=kn(),o=r(s),d=a(o,2),i=a(r(d),4),v=r(i);ae(v,{label:"Context Engineering",deepDiveId:"context-engineering",$$events:{open:t}});var m=a(v,2);ae(m,{label:"Critical Expert",deepDiveId:"critical-expert",$$events:{open:t}}),g(1,o,()=>q,()=>({y:-20,duration:500})),g(1,d,()=>w,()=>({delay:200,duration:400})),g(1,s,()=>w,()=>({duration:400})),b(n,s),N()}var xn=y('<div class="document-icon svelte-119o94q" role="img"><svg viewBox="0 0 40 52" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-119o94q"><path d="M2 4C2 2.89543 2.89543 2 4 2H26L38 14V48C38 49.1046 37.1046 50 36 50H4C2.89543 50 2 49.1046 2 48V4Z" fill="white" stroke-width="2"></path><path d="M26 2V12C26 13.1046 26.8954 14 28 14H38" stroke-width="2"></path><text x="20" y="36" text-anchor="middle" font-size="10" font-weight="600" font-family="var(--font-mono)"> </text></svg></div>');function at(n,e){O(e,!1);const t=te();let s=ne(e,"type",8,"xml"),o=ne(e,"size",8,48);const d={xml:{color:"#607D8B",symbol:"</>"},pdf:{color:"#E53935",symbol:"PDF"},csv:{color:"#4CAF50",symbol:"|||"},notes:{color:"#FF9800",symbol:"≡"},md:{color:"#1A1A1A",symbol:"MD"}};fe(()=>Ke(s()),()=>{j(t,d[s()]||d.xml)}),Se(),B();var i=xn(),v=r(i),m=r(v),h=a(m),c=a(h),u=r(c);C(p=>{we(i,`width: ${o()??""}px; height: ${o()*1.3}px;`),K(i,"aria-label",`${p??""} Dokument`),K(m,"stroke",(l(t),T(()=>l(t).color))),K(h,"stroke",(l(t),T(()=>l(t).color))),K(c,"fill",(l(t),T(()=>l(t).color))),S(u,(l(t),T(()=>l(t).symbol)))},[()=>(Ke(s()),T(()=>s().toUpperCase()))]),b(n,i),N()}const lt=[{id:"intro",title:"Promptotyping",subtitle:"Vom Wissen zum Werkzeug",question:"Wie wird aus Forschungsdaten ein funktionales Interface?"},{id:"phase1",number:1,title:"Vorbereitung",subtitle:"Materialsammlung",description:"Sammlung aller relevanten Materialien.",artifacts:[{type:"xml",label:"TEI/XML"},{type:"pdf",label:"Spezifikation"},{type:"csv",label:"Rohdaten"},{type:"notes",label:"Notizen"}]},{id:"phase2",number:2,title:"Exploration",subtitle:"Epistemische Spielwiese",description:"Freies Experimentieren mit dem Rohmaterial. Keine formalen Artefakte – die Erkenntnisse fließen in Phase 3."},{id:"phase3",number:3,title:"Destillation",subtitle:"Wissenskomprimierung",description:"Überführung in kompakte Markdown-Dokumente.",documents:[{name:"data.md",purpose:"Struktur und Semantik der Forschungsdaten"},{name:"user-story.md",purpose:"Anforderungen aus Forschungsperspektive"},{name:"context.md",purpose:"Relevantes Domänenwissen"}],closingText:"Destilliertes Wissen. Bereit für das LLM."},{id:"phase4",number:4,title:"Iterative Implementation",subtitle:"Iterative Entwicklung",description:"Der eigentliche Promptotyping-Dialog beginnt.",closingText:"Vom Wissen zum Werkzeug."}];var wn=y('<div class="material-item svelte-17gbft8"><div class="icon-container svelte-17gbft8"><!></div> <span class="label svelte-17gbft8"> </span></div>'),zn=y('<div class="phase1-rohdaten svelte-17gbft8"><h3 class="svelte-17gbft8">Rohmaterialien sammeln</h3> <p class="description svelte-17gbft8">Forschungsdaten in verschiedenen Formaten bilden die Grundlage</p> <div class="materials-cloud svelte-17gbft8"></div></div>');function Dn(n,e){O(e,!1);const t=lt[1].artifacts,s=[{x:-140,y:-70,delay:0},{x:130,y:-50,delay:100},{x:-110,y:70,delay:200},{x:150,y:60,delay:300}];B();var o=zn(),d=r(o),i=a(d,2),v=a(i,2);se(v,5,()=>t,ie,(m,h,c)=>{var u=wn(),p=r(u),k=r(p);at(k,{get type(){return l(h).type}});var z=a(p,2),x=r(z);C(()=>{we(u,`--offset-x: ${s[c].x??""}px; --offset-y: ${s[c].y??""}px;`),S(x,l(h).label)}),g(1,z,()=>w,()=>({delay:500+s[c].delay})),g(1,u,()=>q,()=>({x:s[c].x>0?100:-100,y:-30,duration:500,delay:300+s[c].delay})),b(m,u)}),g(1,d,()=>w,()=>({duration:400})),g(1,i,()=>w,()=>({delay:150,duration:400})),b(n,o),N()}var _n=y('<div class="icon-stacked svelte-6tqdd3"><!> <span class="label svelte-6tqdd3"> </span></div>'),$n=y('<div class="phase1-sammlung svelte-6tqdd3"><h3 class="svelte-6tqdd3">Materialien gesammelt</h3> <div class="workspace svelte-6tqdd3"><div class="workspace-area svelte-6tqdd3"></div></div> <p class="ready-text svelte-6tqdd3">Alle Materialien bereit für die <strong class="svelte-6tqdd3">Exploration</strong></p></div>');function En(n,e){O(e,!1);const t=lt[1].artifacts,s=[{x:-22,y:-18,rotate:-6},{x:28,y:-10,rotate:9},{x:-18,y:14,rotate:-4},{x:24,y:22,rotate:6}];B();var o=$n(),d=r(o),i=a(d,2),v=r(i);se(v,5,()=>t,ie,(h,c,u)=>{var p=_n(),k=r(p);at(k,{get type(){return l(c).type}});var z=a(k,2),x=r(z);C(()=>{we(p,`transform: translate(${s[u].x??""}px, ${s[u].y??""}px) rotate(${s[u].rotate??""}deg);`),S(x,l(c).label)}),g(1,z,()=>w,()=>({delay:550+u*60})),g(1,p,()=>q,()=>({y:-40,duration:400,delay:200+u*80})),b(h,p)});var m=a(i,2);g(1,d,()=>w,()=>({duration:400})),g(1,i,()=>He,()=>({duration:400,start:.9})),g(1,m,()=>w,()=>({delay:700,duration:400})),b(n,o),N()}const Pn="/PromptotypingExplainer/assets/exploration-CciyC_CV.png";var Mn=y(`<div class="phase2-exploration svelte-pwk459"><header class="scene-header svelte-pwk459"><span class="phase-number svelte-pwk459">Phase 2</span> <h2 class="svelte-pwk459">Exploration</h2> <p class="subtitle svelte-pwk459">Die epistemische Spielwiese</p></header> <div class="content-block svelte-pwk459"><p class="lead svelte-pwk459">Freies Experimentieren mit dem Rohmaterial. LLM-gestützte Analyse der Daten,
      erste Prompt-Versuche, Erkundung der Möglichkeitsräume, <strong class="svelte-pwk459">ohne Dokumentationszwang</strong>.</p> <div class="key-point svelte-pwk459"><span class="key-label svelte-pwk459">Kennzeichen</span> <p class="svelte-pwk459">Diese Phase produziert <strong class="svelte-pwk459">keine formalen Artefakte</strong>. Die Erkenntnisse fließen informell in die Destillation (Phase 3) ein.</p></div> <div class="example-box svelte-pwk459"><div class="example-label svelte-pwk459">Beispiel-Prompts</div> <p class="example-text svelte-pwk459">"Analysiere die Struktur dieser XML-Dateien: Welche Elemente kommen vor?"<br/><br/> "Erkläre mir das Datenmodell, das du in diesen Dokumenten erkennst."<br/><br/> "Welche Entitäten (Personen, Orte, Zeiten) sind in den Daten enthalten?"</p></div></div> <figure class="exploration-visual svelte-pwk459"><img alt="LLM-gestützte Exploration der Rohdaten" class="svelte-pwk459"/> <figcaption class="svelte-pwk459">Verstehen durch Experimentieren – keine Dokumentation, nur Erkenntnis</figcaption></figure> <p class="transition-hint svelte-pwk459">Was hier verstanden wird, wird in Phase 3 <strong class="svelte-pwk459">destilliert</strong></p></div>`);function In(n){var e=Mn(),t=r(e),s=a(t,2),o=a(s,2),d=r(o),i=a(o,2);C(()=>K(d,"src",Pn)),g(1,t,()=>q,()=>({y:-20,duration:500})),g(1,s,()=>w,()=>({delay:200,duration:400})),g(1,o,()=>q,()=>({y:30,duration:500,delay:400})),g(1,i,()=>w,()=>({delay:600,duration:400})),g(1,e,()=>w,()=>({duration:400})),b(n,e)}var Ln=y(`<div class="phase3-titel svelte-btytv1"><header class="scene-header svelte-btytv1"><span class="phase-number svelte-btytv1">Phase 3</span> <h2 class="svelte-btytv1">Destillation</h2> <p class="subtitle svelte-btytv1">Vom Rohmaterial zum Vault</p></header> <div class="content-block svelte-btytv1"><p class="lead svelte-btytv1">Die Erkenntnisse aus der Exploration werden nun <strong class="svelte-btytv1">destilliert</strong>.
      Das Kernprinzip: maximale Information mit minimalen Tokens. Je präziser der Kontext,
      desto besser die LLM-Performance – denn <strong class="svelte-btytv1">Context Rot</strong> ist real.</p> <div class="vault-preview svelte-btytv1"><div class="vault-icon svelte-btytv1"><svg viewBox="0 0 64 64" width="80" height="80"><rect x="8" y="16" width="48" height="40" rx="4" fill="none" stroke="currentColor" stroke-width="2"></rect><path d="M8 28 L56 28" stroke="currentColor" stroke-width="2"></path><circle cx="32" cy="38" r="6" fill="none" stroke="currentColor" stroke-width="2"></circle><path d="M32 32 L32 20" stroke="currentColor" stroke-width="2"></path><rect x="24" y="8" width="16" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="2"></rect></svg></div> <p class="vault-label svelte-btytv1">Der Promptotyping Vault</p></div></div> <p class="insight svelte-btytv1">Hier entstehen die <strong class="svelte-btytv1">.md-Dateien</strong> - optimiert für das LLM</p></div>`);function Cn(n){var e=Ln(),t=r(e),s=a(t,2),o=a(r(s),2),d=r(o),i=a(d,2),v=a(s,2);g(1,t,()=>q,()=>({y:-20,duration:500})),g(1,d,()=>q,()=>({y:20,duration:400,delay:400})),g(1,i,()=>w,()=>({delay:600,duration:400})),g(1,s,()=>w,()=>({delay:200,duration:400})),g(1,v,()=>w,()=>({delay:800,duration:400})),b(n,e)}var Sn=y('<div class="phase3-dokumente svelte-1ipbydp"><h3 class="svelte-1ipbydp">Die Vault-Dokumente</h3> <p class="description svelte-1ipbydp">Drei Kerndokumente verdichten das Wissen für LLMs optimal. Das Prinzip der <strong class="svelte-1ipbydp">Context Compression</strong> bedeutet maximale Information bei minimaler Token-Anzahl.</p> <div class="documents-grid svelte-1ipbydp"><div class="document svelte-1ipbydp"><div class="doc-icon data svelte-1ipbydp"><span class="doc-ext svelte-1ipbydp">.md</span></div> <div class="doc-content svelte-1ipbydp"><h4 class="svelte-1ipbydp">DATA.md</h4> <p class="svelte-1ipbydp">Struktur und Semantik der Forschungsdaten, also Schema, Felder und Beziehungen</p></div></div> <div class="document svelte-1ipbydp"><div class="doc-icon requirements svelte-1ipbydp"><span class="doc-ext svelte-1ipbydp">.md</span></div> <div class="doc-content svelte-1ipbydp"><h4 class="svelte-1ipbydp">REQUIREMENTS.md</h4> <p class="svelte-1ipbydp">Formalisierte Anforderungen mit MUSS / SOLL / KANN Priorisierung</p></div></div> <div class="document svelte-1ipbydp"><div class="doc-icon context svelte-1ipbydp"><span class="doc-ext svelte-1ipbydp">.md</span></div> <div class="doc-content svelte-1ipbydp"><h4 class="svelte-1ipbydp">CONTEXT.md</h4> <p class="svelte-1ipbydp">Domänenwissen, Forschungsfragen und Projektziele</p></div></div></div></div>');function An(n){var e=Sn(),t=r(e),s=a(t,2),o=a(s,2),d=r(o),i=a(d,2),v=a(i,2);g(1,t,()=>w,()=>({duration:400})),g(1,s,()=>w,()=>({delay:150,duration:400})),g(1,d,()=>q,()=>({y:30,duration:500,delay:300})),g(1,i,()=>q,()=>({y:30,duration:500,delay:450})),g(1,v,()=>q,()=>({y:30,duration:500,delay:600})),b(n,e)}var Tn=y(`<div class="phase3-vault svelte-1don6ot"><h3 class="svelte-1don6ot">Der <span class="promptotyping svelte-1don6ot">Promptotyping</span> Vault</h3> <p class="description svelte-1don6ot">Das destillierte Wissen aus Phase 2 wird in drei Markdown-Dateien organisiert –
    optimiert für den LLM-Kontext</p> <div class="vault-visual svelte-1don6ot"><div class="source-flow svelte-1don6ot"><div class="source-item svelte-1don6ot"><span class="source-label svelte-1don6ot">Datenstrukturen</span> <div class="arrow svelte-1don6ot">→</div></div> <div class="source-item svelte-1don6ot"><span class="source-label svelte-1don6ot">Erkenntnisse</span> <div class="arrow svelte-1don6ot">→</div></div> <div class="source-item svelte-1don6ot"><span class="source-label svelte-1don6ot">Anforderungen</span> <div class="arrow svelte-1don6ot">→</div></div></div> <div class="vault-center svelte-1don6ot"><div class="vault-box svelte-1don6ot"><div class="vault-header svelte-1don6ot">VAULT</div> <div class="vault-files svelte-1don6ot"><div class="file-item svelte-1don6ot"><span class="file svelte-1don6ot">DATA.md</span> <span class="file-desc svelte-1don6ot">Was haben wir?</span></div> <div class="file-item svelte-1don6ot"><span class="file svelte-1don6ot">REQUIREMENTS.md</span> <span class="file-desc svelte-1don6ot">Was wollen wir?</span></div> <div class="file-item svelte-1don6ot"><span class="file svelte-1don6ot">CONTEXT.md</span> <span class="file-desc svelte-1don6ot">Was wissen wir?</span></div></div></div></div> <div class="llm-flow svelte-1don6ot"><div class="arrow large svelte-1don6ot">→</div> <div class="llm-target svelte-1don6ot"><span class="llm-label svelte-1don6ot">Phase 4</span> <span class="llm-sublabel svelte-1don6ot">Implementation</span></div></div></div> <p class="conclusion svelte-1don6ot">Das Wissen ist verdichtet und <strong class="svelte-1don6ot">bereit für den LLM-Dialog</strong></p> <div class="download-section svelte-1don6ot"><p class="download-intro svelte-1don6ot">Starte dein eigenes Projekt:</p> <div class="download-buttons svelte-1don6ot"><a download="" class="download-btn primary svelte-1don6ot"><span class="btn-icon svelte-1don6ot">&#8595;</span> Vault-Template</a> <a href="https://github.com/DigitalHumanitiesCraft/PromptotypingExplainer/tree/main/knowledge" target="_blank" rel="noopener" class="download-btn secondary svelte-1don6ot"><span class="btn-icon svelte-1don6ot">&#8599;</span> Echtes Beispiel auf GitHub</a></div></div></div>`);function qn(n,e){O(e,!1);const t="/PromptotypingExplainer/downloads";B();var s=Tn(),o=r(s),d=a(o,2),i=a(d,2),v=r(i),m=a(v,2),h=a(m,2),c=a(i,2),u=a(c,2),p=a(r(u),2),k=r(p);C(()=>K(k,"href",`${t}/VAULT-TEMPLATE-README.md`)),g(1,o,()=>w,()=>({duration:400})),g(1,d,()=>w,()=>({delay:150,duration:400})),g(1,v,()=>w,()=>({delay:300,duration:400})),g(1,m,()=>He,()=>({duration:500,delay:500})),g(1,h,()=>w,()=>({delay:700,duration:400})),g(1,c,()=>w,()=>({delay:900,duration:400})),g(1,u,()=>w,()=>({delay:1e3,duration:400})),b(n,s),N()}var Fn=y(`<div class="phase4-titel svelte-1jfm6fv"><header class="scene-header svelte-1jfm6fv"><span class="phase-number svelte-1jfm6fv">Phase 4</span> <h2 class="svelte-1jfm6fv">Implementation</h2> <p class="subtitle svelte-1jfm6fv">Iterative Entwicklung</p></header> <div class="content-block svelte-1jfm6fv"><p class="lead svelte-1jfm6fv">Der Vault wird dem LLM übergeben und die <strong class="svelte-1jfm6fv">Cyborg-Arbeit</strong> beginnt.
      Mensch und KI entwickeln gemeinsam, validieren iterativ und aktualisieren den Vault mit neuem Wissen.</p> <div class="cycle-preview svelte-1jfm6fv"><div class="cycle-step svelte-1jfm6fv"><span class="cycle-icon svelte-1jfm6fv">1</span> <span class="cycle-label svelte-1jfm6fv">Prompt + Vault</span></div> <div class="cycle-arrow svelte-1jfm6fv">→</div> <div class="cycle-step svelte-1jfm6fv"><span class="cycle-icon svelte-1jfm6fv">2</span> <span class="cycle-label svelte-1jfm6fv">LLM generiert</span></div> <div class="cycle-arrow svelte-1jfm6fv">→</div> <div class="cycle-step svelte-1jfm6fv"><span class="cycle-icon svelte-1jfm6fv">3</span> <span class="cycle-label svelte-1jfm6fv">Expert validiert</span></div></div></div> <p class="insight svelte-1jfm6fv">Jede Iteration = <strong class="svelte-1jfm6fv">neuer Prototype</strong> + potentielles Vault-Update</p></div>`);function Vn(n){var e=Fn(),t=r(e),s=a(t,2),o=a(r(s),2),d=a(s,2);g(1,t,()=>q,()=>({y:-20,duration:500})),g(1,o,()=>q,()=>({y:20,duration:400,delay:400})),g(1,s,()=>w,()=>({delay:200,duration:400})),g(1,d,()=>w,()=>({delay:600,duration:400})),b(n,e)}var Kn=y('<span class="pattern-label svelte-1hq5by1"> </span>'),Rn=y('<div><!> <div class="bubble svelte-1hq5by1"><p class="svelte-1hq5by1"> </p></div></div>'),jn=y('<div class="typing-indicator svelte-1hq5by1"><span class="typing-dot svelte-1hq5by1"></span> <span class="typing-dot svelte-1hq5by1"></span> <span class="typing-dot svelte-1hq5by1"></span></div>'),Wn=y('<div class="animated-chat svelte-1hq5by1"><div class="chat-header svelte-1hq5by1"><div class="chat-dots svelte-1hq5by1"><span class="dot svelte-1hq5by1"></span> <span class="dot svelte-1hq5by1"></span> <span class="dot svelte-1hq5by1"></span></div> <span class="chat-title svelte-1hq5by1">Promptotyping Session</span></div> <div class="chat-messages svelte-1hq5by1"><!> <!></div></div>');function Bn(n,e){O(e,!1);const t=[{type:"human",pattern:"Context setzen",text:"Lies knowledge.md und requirements.md. Was sind die Story-Gaps im Frontend?"},{type:"llm",pattern:"Reasoning",text:"Ich analysiere die Vault-Dokumente... Drei Gaps: 1) Phase 4 abstrakt, 2) Beispieldaten fehlen, 3) Komponenten ungenutzt."},{type:"human",pattern:"Plan anfordern",text:"Erstelle einen Plan! Wie lösen wir Gap 1?"},{type:"llm",pattern:"Plan",text:"Plan: AnimatedChat-Komponente erstellen → echte Prompts zeigen → Typing-Indicator für Authentizität."},{type:"human",pattern:"Implementieren",text:"Setze den Plan um. Teste ob es kompiliert."},{type:"llm",pattern:"Test",text:"Komponente erstellt. Build erfolgreich. Aber: Beispiel zu generisch für Promptotyping."},{type:"human",pattern:"Feedback",text:"Nimm unseren eigenen Prozess als Meta-Beispiel – das ist authentischer!"},{type:"llm",pattern:"Dokumentation",text:'Chat aktualisiert. Ergänze journal.md: "Meta-Beispiel zeigt echten Workflow".'}];let s=te([]),o=0;Ae(()=>{const c=()=>{if(o<t.length){j(s,[...l(s),t[o]]),o++;const u=t[o-1].type==="human"?2e3:2500;setTimeout(c,u)}else setTimeout(()=>{j(s,[]),o=0,setTimeout(c,1e3)},4e3)};return setTimeout(c,800),()=>{}}),B();var d=Wn(),i=a(r(d),2),v=r(i);se(v,1,()=>l(s),ie,(c,u)=>{var p=Rn(),k=r(p);{var z=D=>{var _=Kn(),P=r(_);C(()=>S(P,l(u).pattern)),b(D,_)};Q(k,D=>{l(u).pattern&&D(z)})}var x=a(k,2),L=r(x),$=r(L);C(()=>{xe(p,1,`message ${l(u).type??""}`,"svelte-1hq5by1"),S($,l(u).text)}),g(1,p,()=>q,()=>({y:20,duration:400})),b(c,p)});var m=a(v,2);{var h=c=>{var u=jn();g(1,u,()=>w,()=>({duration:200})),b(c,u)};Q(m,c=>{l(s).length<t.length&&c(h)})}b(n,d),N()}var Nn=y(`<div class="phase4-iteration svelte-5lsmoa"><h3 class="svelte-5lsmoa">Der Iterationszyklus</h3> <p class="description svelte-5lsmoa">Context → Reasoning → Plan → Implementation → Test → Feedback → Dokumentation</p> <div class="iteration-grid svelte-5lsmoa"><figure class="chat-side svelte-5lsmoa"><!> <figcaption class="svelte-5lsmoa">Der Reasoning-Zyklus: Fragen, Planen, Implementieren, Dokumentieren</figcaption></figure> <div class="text-card explainer-side svelte-5lsmoa"><p>Der Zyklus beginnt mit dem <strong>Kontext</strong>: Vault-Dokumente werden dem LLM mitgegeben,
        damit es das Domänenwissen versteht. Im <strong>Reasoning</strong> analysiert das LLM den
        Kontext und identifiziert Probleme, bevor es einen konkreten <strong>Plan</strong> erstellt.</p> <p>Erst dann folgt die <strong>Implementation</strong>. Der generierte Code wird direkt <strong>getestet</strong> – Fehler werden sofort sichtbar. Kritisches <strong>Feedback</strong> gibt die Richtung für die nächste Iteration vor.</p> <p>Am Ende jedes Zyklus steht die <strong>Dokumentation</strong>: Neues Wissen fließt zurück
        in den Vault. Der Kontext wächst – und der nächste Zyklus startet mit besserem Ausgangsmaterial.</p></div></div></div>`);function On(n){var e=Nn(),t=r(e),s=a(t,2),o=a(s,2),d=r(o),i=r(d);Bn(i,{});var v=a(d,2);g(1,t,()=>w,()=>({duration:400})),g(1,s,()=>w,()=>({delay:150,duration:400})),g(1,d,()=>q,()=>({x:-30,duration:500,delay:300})),g(1,v,()=>q,()=>({x:30,duration:500,delay:400})),b(n,e)}var Hn=y('<div class="phase4-vault-update svelte-1dkyo20"><h3 class="svelte-1dkyo20">Vault-Update</h3> <p class="description svelte-1dkyo20">Neues Wissen fließt zurück und der Vault wächst mit jeder Iteration</p> <div class="update-visual svelte-1dkyo20"><div class="update-source svelte-1dkyo20"><div class="source-header svelte-1dkyo20">Prototype zeigt...</div> <div class="source-items svelte-1dkyo20"><div class="source-item svelte-1dkyo20">Fehlende Datenfelder</div> <div class="source-item svelte-1dkyo20">Unklare Anforderungen</div> <div class="source-item svelte-1dkyo20">Neue Erkenntnisse</div></div></div> <div class="update-arrow svelte-1dkyo20"><svg viewBox="0 0 60 40" width="60" height="40" class="svelte-1dkyo20"><path d="M5 20 L45 20" stroke="var(--color-terracotta)" stroke-width="2" stroke-dasharray="4 3"></path><polygon points="45,15 55,20 45,25" fill="var(--color-terracotta)"></polygon></svg> <span class="arrow-label svelte-1dkyo20">Update</span></div> <div class="update-target svelte-1dkyo20"><div class="target-header svelte-1dkyo20">Vault</div> <div class="target-items svelte-1dkyo20"><div class="target-item svelte-1dkyo20"><span class="file-name svelte-1dkyo20">DATA.md</span> <span class="update-type svelte-1dkyo20">+ Felder</span></div> <div class="target-item svelte-1dkyo20"><span class="file-name svelte-1dkyo20">REQUIREMENTS.md</span> <span class="update-type svelte-1dkyo20">+ Klarheit</span></div> <div class="target-item svelte-1dkyo20"><span class="file-name svelte-1dkyo20">CONTEXT.md</span> <span class="update-type svelte-1dkyo20">+ Wissen</span></div></div></div></div> <div class="loop-indicator svelte-1dkyo20"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" class="svelte-1dkyo20"><path d="M17 1l4 4-4 4"></path><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><path d="M7 23l-4-4 4-4"></path><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg> <span>Verbesserter Vault → besserer Prototype → nächste Iteration</span></div> <p class="conclusion svelte-1dkyo20"><strong>Vom Wissen zum Werkzeug</strong></p></div>');function Un(n){var e=Hn(),t=r(e),s=a(t,2),o=a(s,2),d=r(o),i=a(d,2),v=a(i,2),m=a(r(v),2),h=r(m),c=a(h,2),u=a(c,2),p=a(o,2),k=a(p,2);g(1,t,()=>w,()=>({duration:400})),g(1,s,()=>w,()=>({delay:150,duration:400})),g(1,d,()=>q,()=>({x:-30,duration:500,delay:300})),g(1,i,()=>w,()=>({delay:500,duration:400})),g(1,h,()=>w,()=>({delay:600})),g(1,c,()=>w,()=>({delay:700})),g(1,u,()=>w,()=>({delay:800})),g(1,v,()=>q,()=>({x:30,duration:500,delay:400})),g(1,p,()=>w,()=>({delay:900,duration:400})),g(1,k,()=>w,()=>({delay:1e3,duration:400})),b(n,e)}var Gn=y('<a target="_blank" rel="noopener" class="example-card svelte-1es890x"><h3 class="svelte-1es890x"> </h3> <p class="description svelte-1es890x"> </p> <div class="card-footer svelte-1es890x"><span class="link-arrow svelte-1es890x">Demo ansehen →</span></div></a>'),Zn=y('<div class="outro-beispiele svelte-1es890x"><header class="scene-header svelte-1es890x"><span class="section-label svelte-1es890x">Praxis</span> <h2 class="svelte-1es890x">Case Studies</h2> <p class="subtitle svelte-1es890x">Promptotyping in Aktion</p></header> <div class="examples-grid svelte-1es890x"></div></div>');function Xn(n){const e=[{name:"CorrespExplorer",description:"CMIF-Korrespondenzdaten → Netzwerk, Timeline, Karte",link:"https://dhcraft.org/CorrespExplorer"},{name:"Kriminalmuseum",description:"Sammlungsdaten → Dual-Interface Explorer",link:"https://chpollin.github.io/km/collection-explorer.html"},{name:"CVMA Glasmalerei",description:"Glasfenster-Metadaten → Annotations-Viewer",link:"https://chpollin.github.io/stained-glass-metadata-annotation-tool/docs/version-2/"},{name:"Aldersbach",description:"TEI-Klosterrechnungen → Annotations-Tool",link:"https://chpollin.github.io/depcha-aldersbach"}];var t=Zn(),s=r(t),o=a(s,2);se(o,5,()=>e,ie,(d,i,v)=>{var m=Gn(),h=r(m),c=r(h),u=a(h,2),p=r(u);C(()=>{K(m,"href",l(i).link),S(c,l(i).name),S(p,l(i).description)}),g(1,m,()=>q,()=>({y:30,duration:400,delay:200+v*100})),b(d,m)}),g(1,s,()=>q,()=>({y:-20,duration:500})),b(n,t)}var Qn=y('<li class="svelte-1f85qzn"><strong class="svelte-1f85qzn"> </strong> </li>'),Jn=y('<li class="svelte-1f85qzn"><strong class="svelte-1f85qzn"> </strong> </li>'),Yn=y('<div class="gap-item svelte-1f85qzn"><span class="gap-label svelte-1f85qzn"> </span> <span class="gap-text svelte-1f85qzn"> </span></div>'),es=y('<div class="outro-diskussion svelte-1f85qzn"><header class="scene-header svelte-1f85qzn"><span class="section-label svelte-1f85qzn">Reflexion</span> <h2 class="svelte-1f85qzn">Sollten wir LLMs in der Forschung einsetzen?</h2> <p class="subtitle svelte-1f85qzn">Eine offene Diskussion</p></header> <div class="discussion-grid svelte-1f85qzn"><div class="column contra svelte-1f85qzn"><div class="column-header svelte-1f85qzn"><span class="column-icon svelte-1f85qzn">?</span> <h3 class="svelte-1f85qzn">Kritische Einwände</h3></div> <ul class="points-list svelte-1f85qzn"></ul></div> <div class="column pro svelte-1f85qzn"><div class="column-header svelte-1f85qzn"><span class="column-icon svelte-1f85qzn">!</span> <h3 class="svelte-1f85qzn">Pragmatische Argumente</h3></div> <ul class="points-list svelte-1f85qzn"></ul></div></div> <div class="research-gaps svelte-1f85qzn"><h4 class="svelte-1f85qzn">Offene Forschungsfragen</h4> <div class="gaps-grid svelte-1f85qzn"></div></div> <div class="deep-dive-trigger svelte-1f85qzn"><!></div></div>');function ts(n,e){O(e,!1);function t($){Pe($.detail.id)}const s=[{title:"Proprietäre Systeme",text:"Abhängigkeit von intransparenten Systemen ohne Einblick in Trainingsdaten oder Modellverhalten."},{title:"Forschungsintegrität",text:"Black-Box-Charakter erschwert Reproduzierbarkeit und Zitierbarkeit."},{title:"Zugangshürden",text:"Kosten (~200$/Monat) schaffen neue Ungleichheiten. Open-Source-Alternativen erfordern erhebliche Infrastruktur."},{title:"Ökologische Kosten",text:"Hoher Energieverbrauch für Training und Inferenz bleibt methodisch unreflektiert."}],o=[{title:"Beschleunigung",text:"Projekte, die Monate dauern würden, werden in Tagen umsetzbar."},{title:"Neue Experimente",text:"Ermöglicht Prototypen und Analysen, die sonst nicht realisierbar wären."},{title:"Epistemische Praxis",text:"Vibe Coding als neue Form des explorativen Programmierens? (offene Forschungsfrage)"},{title:"Technologische Realität",text:"Multi-Agenten-Systeme zeigen, wohin die Entwicklung geht. Nicht-Auseinandersetzung ist keine Lösung."}],d=[{label:"Empirie",text:"Validierung durch Kontrollgruppen und messbare Metriken fehlt."},{label:"Generalisierbarkeit",text:"Übertragbarkeit auf externe Teams und andere Disziplinen unbewiesen."},{label:"Skills Atrophy",text:"Gefahr des Verlernens von Coding-Skills muss untersucht werden."},{label:"Kosten-Nutzen",text:"Zeitaufwand für Dokumentation vs. Effizienzgewinn ist offen."}];B();var i=es(),v=r(i),m=a(v,2),h=r(m),c=a(r(h),2);se(c,5,()=>s,ie,($,D,_)=>{var P=Qn(),A=r(P),V=r(A),E=a(A);C(()=>{S(V,`${l(D).title??""}:`),S(E,` ${l(D).text??""}`)}),g(1,P,()=>w,()=>({delay:300+_*100})),b($,P)});var u=a(h,2),p=a(r(u),2);se(p,5,()=>o,ie,($,D,_)=>{var P=Jn(),A=r(P),V=r(A),E=a(A);C(()=>{S(V,`${l(D).title??""}:`),S(E,` ${l(D).text??""}`)}),g(1,P,()=>w,()=>({delay:300+_*100})),b($,P)});var k=a(m,2),z=a(r(k),2);se(z,5,()=>d,ie,($,D,_)=>{var P=Yn(),A=r(P),V=r(A),E=a(A,2),R=r(E);C(()=>{S(V,l(D).label),S(R,l(D).text)}),g(1,P,()=>w,()=>({delay:700+_*80})),b($,P)});var x=a(k,2),L=r(x);ae(L,{label:"Grenzen & Limitationen im Detail",deepDiveId:"limitations",variant:"block",$$events:{open:t}}),g(1,v,()=>q,()=>({y:-20,duration:500})),g(1,h,()=>q,()=>({x:-30,duration:500,delay:200})),g(1,u,()=>q,()=>({x:30,duration:500,delay:200})),g(1,k,()=>q,()=>({y:20,duration:500,delay:600})),g(1,x,()=>w,()=>({delay:900})),b(n,i),N()}var ns=y(`<div class="outro-zusammenfassung svelte-pz9g48"><h3 class="svelte-pz9g48">Zusammenfassung</h3> <div class="text-card svelte-pz9g48"><p><span class="promptotyping">Promptotyping</span> strukturiert die Zusammenarbeit zwischen Forscher:innen und LLMs
      durch einen vierphasigen Prozess: Materialsammlung, explorative Analyse, Wissensdestillation
      im <span class="promptotyping">Promptotyping</span> Vault, und iterative Implementation.</p> <p>Der <span class="promptotyping">Promptotyping</span> Vault besteht aus drei <strong>Promptotyping Documents</strong> (DATA.md, REQUIREMENTS.md, CONTEXT.md) – sie machen implizites Domänenwissen für LLMs nutzbar
      und wachsen mit jeder Iteration.</p> <p><strong>Critical Expert in the Loop</strong>: Domänenexpert:innen bleiben unverzichtbar.
      Sie validieren Outputs, erkennen Halluzinationen und steuern die fachliche Qualität.</p></div> <div class="limitations-trigger svelte-pz9g48"><!></div> <div class="cta svelte-pz9g48"><p class="final-text svelte-pz9g48">Vom Wissen zum Werkzeug.</p> <div class="cta-links svelte-pz9g48"><a href="https://github.com/DigitalHumanitiesCraft/CorrespExplorer" target="_blank" rel="noopener" class="cta-btn svelte-pz9g48">GitHub Repository</a> <a href="https://dhcraft.org/CorrespExplorer" target="_blank" rel="noopener" class="cta-btn cta-btn-secondary svelte-pz9g48">Live Demo</a></div></div></div>`);function ss(n,e){O(e,!1);function t(h){Pe(h.detail.id)}B();var s=ns(),o=r(s),d=a(o,2),i=a(d,2),v=r(i);ae(v,{label:"Grenzen & Limitationen",deepDiveId:"limitations",variant:"block",$$events:{open:t}});var m=a(i,2);g(1,o,()=>w,()=>({duration:400})),g(1,d,()=>q,()=>({y:20,duration:500,delay:200})),g(1,i,()=>w,()=>({delay:500,duration:400})),g(1,m,()=>He,()=>({duration:400,delay:600})),b(n,s),N()}var is=y('<div class="scroll-indicator svelte-1n46o8q" aria-hidden="true"><div class="scroll-arrow svelte-1n46o8q"></div> <span class="scroll-text svelte-1n46o8q">Scroll</span></div>'),rs=y('<div class="background-layer svelte-1n46o8q"></div> <!> <main class="scroll-container svelte-1n46o8q"><!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!></main> <!>',1);function as(n,e){O(e,!1);const t=()=>ve(he,"$currentPhase",v),s=()=>ve(be,"$currentStep",v),o=()=>ve(At,"$globalProgress",v),d=()=>ve(Oe,"$isDeepDiveOpen",v),i=()=>ve(Ne,"$currentDeepDive",v),[v,m]=Be(),h=te();Ae(()=>(Tt(),setTimeout(()=>{Ve()},300),window.addEventListener("hashchange",Ve),()=>window.removeEventListener("hashchange",Ve)));let c=te(!0);function u(f){f.target.scrollTop>100&&j(c,!1)}function p(f,M,me){return f+(M-f)*me}fe(()=>(t(),s()),()=>{typeof window<"u"&&qt(t(),s())}),fe(()=>o(),()=>{j(h,(()=>{const f=o();let M;f<.2?M=0:f<.5?M=(f-.2)/.3:f<.85?M=1:M=1-(f-.85)/.15*.3;const me=Math.round(p(96,191,M)),Me=Math.round(p(125,91,M)),Te=Math.round(p(139,62,M)),qe=.04+f*.12,Y=30+f*40,ee=50-Math.sin(f*Math.PI)*20,de=70-f*20;return`radial-gradient(ellipse at ${Y}% ${ee}%, rgba(${me}, ${Me}, ${Te}, ${qe}) 0%, rgba(232, 232, 232, 1) ${de}%)`})())}),Se(),B();var k=rs(),z=ue(k),x=a(z,2);Xt(x,{});var L=a(x,2),$=r(L);Ot($,{});var D=a($,2);U(D,{id:"intro-definition",phaseIndex:0,stepIndex:0,children:(f,M)=>{dn(f)},$$slots:{default:!0}});var _=a(D,2);U(_,{id:"intro-kernprinzip",phaseIndex:0,stepIndex:1,children:(f,M)=>{pn(f,{})},$$slots:{default:!0}});var P=a(_,2);U(P,{id:"intro-methodik",phaseIndex:0,stepIndex:2,children:(f,M)=>{hn(f,{})},$$slots:{default:!0}});var A=a(P,2);U(A,{id:"intro-phasen",phaseIndex:0,stepIndex:3,children:(f,M)=>{bn(f,{})},$$slots:{default:!0}});var V=a(A,2);U(V,{id:"phase1-titel",phaseIndex:1,stepIndex:0,children:(f,M)=>{yn(f,{})},$$slots:{default:!0}});var E=a(V,2);U(E,{id:"phase1-rohdaten",phaseIndex:1,stepIndex:1,children:(f,M)=>{Dn(f,{})},$$slots:{default:!0}});var R=a(E,2);U(R,{id:"phase1-sammlung",phaseIndex:1,stepIndex:2,children:(f,M)=>{En(f,{})},$$slots:{default:!0}});var I=a(R,2);U(I,{id:"phase2-exploration",phaseIndex:2,stepIndex:0,children:(f,M)=>{In(f)},$$slots:{default:!0}});var H=a(I,2);U(H,{id:"phase3-titel",phaseIndex:3,stepIndex:0,children:(f,M)=>{Cn(f)},$$slots:{default:!0}});var J=a(H,2);U(J,{id:"phase3-dokumente",phaseIndex:3,stepIndex:1,children:(f,M)=>{An(f)},$$slots:{default:!0}});var re=a(J,2);U(re,{id:"phase3-vault",phaseIndex:3,stepIndex:2,children:(f,M)=>{qn(f,{})},$$slots:{default:!0}});var W=a(re,2);U(W,{id:"phase4-titel",phaseIndex:4,stepIndex:0,children:(f,M)=>{Vn(f)},$$slots:{default:!0}});var F=a(W,2);U(F,{id:"phase4-iteration",phaseIndex:4,stepIndex:1,children:(f,M)=>{On(f)},$$slots:{default:!0}});var G=a(F,2);U(G,{id:"phase4-vault-update",phaseIndex:4,stepIndex:2,children:(f,M)=>{Un(f)},$$slots:{default:!0}});var pe=a(G,2);U(pe,{id:"outro-beispiele",phaseIndex:5,stepIndex:0,children:(f,M)=>{Xn(f)},$$slots:{default:!0}});var le=a(pe,2);U(le,{id:"outro-diskussion",phaseIndex:5,stepIndex:1,children:(f,M)=>{ts(f,{})},$$slots:{default:!0}});var ge=a(le,2);U(ge,{id:"outro-zusammenfassung",phaseIndex:5,stepIndex:2,children:(f,M)=>{ss(f,{})},$$slots:{default:!0}});var ze=a(ge,2);{var oe=f=>{var M=is();b(f,M)};Q(ze,f=>{l(c)&&f(oe)})}var ke=a(L,2);{let f=ye(()=>(i(),T(()=>i()?.title||""))),M=ye(()=>(i(),T(()=>i()?.content||"")));en(ke,{get isOpen(){return d()},get title(){return l(f)},get content(){return l(M)},$$events:{close(...me){Vt?.apply(this,me)}}})}C(()=>we(z,`background: ${l(h)??""};`)),X("scroll",L,u),b(n,k),N(),m()}zt(as,{target:document.getElementById("app")});
