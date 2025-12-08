import{a as dt,E as ct,B as vt,b as pt,e as tt,u as T,T as ut,w as nt,i as ht,q as st,n as _e,s as gt,c as mt,d as ft,r as bt,S as kt,f as yt,g as Ee,h as Le,j as W,k as y,l as ie,m as b,p as O,o as We,t as N,v as re,x as s,y as i,z as ye,A as a,C as $,D as xe,F as V,G as C,H as J,I as de,J as xt,K as fe,L as $e,M as te,N as j,O as pe,P as ne,Q as Ie,R as Pe,$ as wt,U as Re,V as Dt,W as Ce,X as zt}from"./legacy-D0-deDzZ.js";import{o as Ae,c as it,a as He}from"./case-studies-BaB3WxF7.js";import{i as Q}from"./if-DirpKKF7.js";import{s as we}from"./style-Bj5zVdjk.js";import{h as _t}from"./html-uHvxtRup.js";import{g as Pt}from"./glossary-pVbb1nPh.js";import{g as Ue}from"./bibliography-Bor_VxGP.js";const Et=()=>performance.now(),ce={tick:n=>requestAnimationFrame(n),now:()=>Et(),tasks:new Set};function rt(){const n=ce.now();ce.tasks.forEach(e=>{e.c(n)||(ce.tasks.delete(e),e.f())}),ce.tasks.size!==0&&ce.tick(rt)}function Lt(n){let e;return ce.tasks.size===0&&ce.tick(rt),{promise:new Promise(t=>{ce.tasks.add(e={c:n,f:t})}),abort(){ce.tasks.delete(e)}}}function Se(n,e){nt(()=>{n.dispatchEvent(new CustomEvent(e))})}function Mt(n){if(n==="float")return"cssFloat";if(n==="offset")return"cssOffset";if(n.startsWith("--"))return n;const e=n.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function Ze(n){const e={},t=n.split(";");for(const r of t){const[l,d]=r.split(":");if(!l||d===void 0)break;const o=Mt(l.trim());e[o]=d.trim()}return e}const St=n=>n;function g(n,e,t,r){var l=(n&mt)!==0,d=(n&ft)!==0,o=l&&d,c=(n&ut)!==0,m=o?"both":l?"in":"out",v,u=e.inert,p=e.style.overflow,h,k;function w(){return nt(()=>v??=t()(e,r?.()??{},{direction:m}))}var x={is_global:c,in(){if(e.inert=u,!l){k?.abort(),k?.reset?.();return}d||h?.abort(),Se(e,"introstart"),h=Ke(e,w(),k,1,()=>{Se(e,"introend"),h?.abort(),h=v=void 0,e.style.overflow=p})},out(z){if(!d){z?.(),v=void 0;return}e.inert=!0,Se(e,"outrostart"),k=Ke(e,w(),h,0,()=>{Se(e,"outroend"),z?.()})},stop:()=>{h?.abort(),k?.abort()}},M=dt;if((M.nodes.t??=[]).push(x),l&&gt){var E=c;if(!E){for(var D=M.parent;D&&(D.f&ct)!==0;)for(;(D=D.parent)&&(D.f&vt)===0;);E=!D||(D.f&pt)!==0}E&&tt(()=>{T(()=>x.in())})}}function Ke(n,e,t,r,l){var d=r===1;if(ht(e)){var o,c=!1;return st(()=>{if(!c){var M=e({direction:d?"in":"out"});o=Ke(n,M,t,r,l)}}),{abort:()=>{c=!0,o?.abort()},deactivate:()=>o.deactivate(),reset:()=>o.reset(),t:()=>o.t()}}if(t?.deactivate(),!e?.duration)return l(),{abort:_e,deactivate:_e,reset:_e,t:()=>r};const{delay:m=0,css:v,tick:u,easing:p=St}=e;var h=[];if(d&&t===void 0&&(u&&u(0,1),v)){var k=Ze(v(0,1));h.push(k,k)}var w=()=>1-r,x=n.animate(h,{duration:m,fill:"forwards"});return x.onfinish=()=>{x.cancel();var M=t?.t()??1-r;t?.abort();var E=r-M,D=e.duration*Math.abs(E),z=[];if(D>0){var L=!1;if(v)for(var A=Math.ceil(D/16.666666666666668),q=0;q<=A;q+=1){var P=M+E*p(q/A),R=Ze(v(P,1-P));z.push(R),L||=R.overflow==="hidden"}L&&(n.style.overflow="hidden"),w=()=>{var S=x.currentTime;return M+E*p(S/D)},u&&Lt(()=>{if(x.playState!=="running")return!1;var S=w();return u(S,1-S),!0})}x=n.animate(z,{duration:D,fill:"forwards"}),x.onfinish=()=>{w=()=>r,u?.(r,1-r),l()}},{abort:()=>{x&&(x.cancel(),x.effect=null,x.onfinish=_e)},deactivate:()=>{l=_e},reset:()=>{r===0&&u?.(1,0)},t:()=>w()}}function Xe(n,e){return n===e||n?.[kt]===e}function Be(n={},e,t,r){return tt(()=>{var l,d;return bt(()=>{l=d,d=[],T(()=>{n!==t(...d)&&(e(n,...d),l&&Xe(t(...l),n)&&e(null,...l))})}),()=>{st(()=>{d&&Xe(t(...d),n)&&e(null,...d)})}}),n}function It(n){return function(...e){var t=e[0];return t.stopPropagation(),n?.apply(this,e)}}function Ct(n,e){var t=n.$$events?.[e.type],r=yt(t)?t.slice():t==null?[]:[t];for(var l of r)l.call(this,e)}const he=Le(0),be=Le(0),X=[{id:"intro",label:"Promptotyping",number:null,subtitle:"Einführung",steps:[{id:"definition",label:"Definition"},{id:"kernprinzip",label:"Kernprinzip"},{id:"methodik",label:"Methodik"},{id:"phasen",label:"Phasen"}]},{id:"phase1",label:"Preparation",number:1,subtitle:"Materialsammlung",steps:[{id:"titel",label:"Übersicht"},{id:"rohdaten",label:"Rohdaten"},{id:"sammlung",label:"Sammlung"}]},{id:"phase2",label:"Exploration",number:2,subtitle:"Daten-Kontext-Relationen",steps:[{id:"exploration",label:"Exploration"}]},{id:"phase3",label:"Destillation",number:3,subtitle:"Vault (.md Files)",steps:[{id:"titel",label:"Übersicht"},{id:"dokumente",label:".md Dokumente"},{id:"vault",label:"Vault"}]},{id:"phase4",label:"Implementation",number:4,subtitle:"Prototype + Vault-Update",steps:[{id:"titel",label:"Übersicht"},{id:"iteration",label:"Iteration"},{id:"vault-update",label:"Vault-Update"}]},{id:"outro",label:"Praxis",number:null,subtitle:"Case Studies & Reflexion",steps:[{id:"beispiele",label:"Beispiele"},{id:"diskussion",label:"Diskussion"},{id:"zusammenfassung",label:"Zusammenfassung"}]}],$t=X.reduce((n,e)=>n+e.steps.length,0),At=Ee([he,be],([n,e])=>{let t=0;for(let r=0;r<n;r++)t+=X[r].steps.length;return t+e}),Tt=Ee(At,n=>n/($t-1));Ee([he,be],([n,e])=>{const t=X[n];return!t||t.steps.length<=1?0:e/(t.steps.length-1)});Ee(he,n=>X[n]||X[0]);Ee([he,be],([n,e])=>{const t=X[n];return t?t.steps[e]||t.steps[0]:null});X.map((n,e)=>({id:n.id,label:n.label,steps:n.steps.map(t=>t.id)}));const Qe=Le(!1);function Ft(){if(typeof window<"u"){const n=window.matchMedia("(prefers-reduced-motion: reduce)");Qe.set(n.matches),n.addEventListener("change",e=>{Qe.set(e.matches)})}}function Je(n){if(typeof window>"u")return;const e=document.getElementById(n);e&&e.scrollIntoView({behavior:"smooth"})}function Ve(){if(typeof window>"u")return;const n=window.location.hash.slice(1);if(!n)return;const e=document.getElementById(n);if(e){setTimeout(()=>{e.scrollIntoView({behavior:"smooth"})},100);return}const t=n.split("-"),r=t[0],l=t.slice(1).join("-"),d=X.findIndex(m=>m.id===r);if(d===-1)return;const o=X[d];let c=r;l?o.steps.some(v=>v.id===l)&&(c=`${r}-${l}`):c=`${r}-${o.steps[0].id}`,setTimeout(()=>{const m=document.getElementById(c);m&&m.scrollIntoView({behavior:"smooth"})},100)}let Ye="";function qt(n,e){if(typeof window>"u")return;const t=X[n];if(!t)return;const r=t.steps[e],l=r?`${t.id}-${r.id}`:t.id;l!==Ye&&(Ye=l,history.replaceState(null,"",`#${l}`))}const Vt={"system-1-42":{id:"system-1-42",title:"System 1.42 – Wie LLMs funktionieren",content:`
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
        Kambhampati, S. (2024): <em>Can LLMs Really Reason?</em>. Lecture Series.
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
    `}},Oe=Le(null),Ne=Le(!1);function De(n){const e=Vt[n];e?(Oe.set(e),Ne.set(!0),document.body.style.overflow="hidden"):console.warn(`Deep Dive not found: ${n}`)}function Rt(){Ne.set(!1),setTimeout(()=>{Oe.set(null)},300),document.body.style.overflow=""}var Kt=xt('<svg class="check-icon svelte-baj8t4" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),Bt=y('<span class="phase-number svelte-baj8t4"> </span>'),jt=y('<button><span class="step-dot-marker svelte-baj8t4"></span> <span class="step-label svelte-baj8t4"> </span></button>'),Wt=y('<div class="sub-steps svelte-baj8t4"></div>'),Ot=y('<li class="phase-item svelte-baj8t4"><button><span class="dot svelte-baj8t4"><!></span> <span class="label-container svelte-baj8t4"><span class="label svelte-baj8t4"> </span> <!></span></button> <!></li>'),Nt=y('<nav class="progress-indicator svelte-baj8t4" aria-label="Phasen-Navigation"><ul class="svelte-baj8t4"></ul></nav>');function Gt(n,e){N(e,!1);const t=()=>de(he,"$currentPhase",l),r=()=>de(be,"$currentStep",l),[l,d]=We();function o(p){const h=X[p],k=`${h.id}-${h.steps[0].id}`;Je(k)}function c(p,h){const k=X[p],w=k.steps[h],x=`${k.id}-${w.id}`;Je(x)}function m(p,h){(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),o(h))}W();var v=Nt(),u=s(v);ie(u,5,()=>X,re,(p,h,k)=>{const w=ye(()=>t()===k),x=ye(()=>t()>k);var M=Ot(),E=s(M);let D;var z=s(E),L=s(z);{var A=G=>{var K=Kt();b(G,K)};Q(L,G=>{i(x)&&G(A)})}var q=a(z,2),P=s(q),R=s(P),S=a(P,2);{var B=G=>{var K=Bt(),Z=s(K);$(()=>C(Z,`Phase ${i(h).number??""}`)),b(G,K)};Q(S,G=>{i(h).number&&G(B)})}var H=a(E,2);{var se=G=>{var K=Wt();ie(K,5,()=>i(h).steps,re,(Z,ve,ae)=>{const ge=ye(()=>r()===ae),ze=ye(()=>r()>ae);var oe=jt();let ke;var f=a(s(oe),2),I=s(f);$(()=>{ke=xe(oe,1,"step-dot svelte-baj8t4",null,ke,{active:i(ge),completed:i(ze)}),V(oe,"aria-label",`Zu ${i(ve).label??""} springen`),C(I,i(ve).label)}),J("click",oe,()=>c(k,ae)),b(Z,oe)}),b(G,K)};Q(H,G=>{i(w)&&G(se)})}$(()=>{D=xe(E,1,"progress-dot svelte-baj8t4",null,D,{active:i(w),completed:i(x)}),V(E,"aria-label",`Zu ${i(h).label??""} springen`),V(E,"aria-current",i(w)?"step":void 0),C(R,i(h).label)}),J("click",E,()=>o(k)),J("keydown",E,G=>m(G,k)),b(p,M)}),b(n,v),O(),d()}var Ht=y('<span class="phase-number svelte-1yliotu"> </span>'),Ut=y('<span class="phase-tag svelte-1yliotu"> </span>'),Zt=y('<span class="step-separator svelte-1yliotu">—</span> <span class="current-step svelte-1yliotu"> </span>',1),Xt=y('<header class="phase-header svelte-1yliotu"><div class="header-content svelte-1yliotu"><div class="phase-badge svelte-1yliotu"><!></div> <div class="title-group svelte-1yliotu"><h2 class="phase-title svelte-1yliotu"> </h2> <!></div> <nav class="header-nav svelte-1yliotu"><a href="/PromptotypingExplainer/about.html" class="nav-link svelte-1yliotu">About</a> <a href="/PromptotypingExplainer/vault.html" class="nav-link svelte-1yliotu">Vault</a> <a href="/PromptotypingExplainer/glossar.html" class="nav-link svelte-1yliotu">Glossar</a> <a href="/PromptotypingExplainer/bibliographie.html" class="nav-link svelte-1yliotu">Bibliographie</a></nav></div></header>');function Qt(n,e){N(e,!1);const t=()=>de(he,"$currentPhase",l),r=()=>de(be,"$currentStep",l),[l,d]=We(),o=te(),c=te();fe(()=>t(),()=>{j(o,X[t()]||X[0])}),fe(()=>(i(o),r()),()=>{j(c,i(o).steps[r()]||i(o).steps[0])}),$e(),W();var m=Xt(),v=s(m),u=s(v),p=s(u);{var h=z=>{var L=Ht(),A=s(L);$(()=>C(A,`Phase ${i(o),T(()=>i(o).number)??""}`)),b(z,L)},k=z=>{var L=Ut(),A=s(L);$(()=>C(A,(i(o),T(()=>i(o).subtitle)))),b(z,L)};Q(p,z=>{i(o),T(()=>i(o).number)?z(h):z(k,!1)})}var w=a(u,2),x=s(w),M=s(x),E=a(x,2);{var D=z=>{var L=Zt(),A=a(pe(L),2),q=s(A);$(()=>C(q,(i(c),T(()=>i(c).label)))),b(z,L)};Q(E,z=>{i(c)&&z(D)})}$(()=>C(M,(i(o),T(()=>i(o).label)))),b(n,m),O(),d()}var Jt=y('<section class="step svelte-zv7veq"><div class="step-content svelte-zv7veq"><!></div></section>');function U(n,e){N(e,!1);let t=ne(e,"id",8),r=ne(e,"phaseIndex",8),l=ne(e,"stepIndex",8),d=te();Ae(()=>{const v=new IntersectionObserver(u=>{u.forEach(p=>{p.isIntersecting&&p.intersectionRatio>.5&&(be.set(l()),he.set(r()))})},{threshold:.5,rootMargin:"-10% 0px -10% 0px"});return v.observe(i(d)),()=>v.disconnect()}),W();var o=Jt(),c=s(o),m=s(c);Ie(m,e,"default",{},null),Be(o,v=>j(d,v),()=>i(d)),$(()=>{V(o,"id",t()),V(o,"data-phase",r()),V(o,"data-step",l())}),b(n,o),O()}const Yt=n=>n;function at(n){const e=n-1;return e*e*e+1}function et(n){const e=typeof n=="string"&&n.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[n,"px"]}function _(n,{delay:e=0,duration:t=400,easing:r=Yt}={}){const l=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:r,css:d=>`opacity: ${d*l}`}}function F(n,{delay:e=0,duration:t=400,easing:r=at,x:l=0,y:d=0,opacity:o=0}={}){const c=getComputedStyle(n),m=+c.opacity,v=c.transform==="none"?"":c.transform,u=m*(1-o),[p,h]=et(l),[k,w]=et(d);return{delay:e,duration:t,easing:r,css:(x,M)=>`
			transform: ${v} translate(${(1-x)*p}${h}, ${(1-x)*k}${w});
			opacity: ${m-u*M}`}}function Ge(n,{delay:e=0,duration:t=400,easing:r=at,start:l=0,opacity:d=0}={}){const o=getComputedStyle(n),c=+o.opacity,m=o.transform==="none"?"":o.transform,v=1-l,u=c*(1-d);return{delay:e,duration:t,easing:r,css:(p,h)=>`
			transform: ${m} scale(${1-v*h});
			opacity: ${c-u*h}
		`}}var en=y('<div class="deep-dive-overlay svelte-tewam" role="dialog" aria-modal="true" aria-labelledby="deep-dive-title" tabindex="-1"><div class="deep-dive-panel svelte-tewam"><header class="panel-header svelte-tewam"><div class="header-indicator svelte-tewam"><span class="branch-icon svelte-tewam">←</span> <span class="branch-label svelte-tewam">Deep Dive</span></div> <h2 id="deep-dive-title" class="svelte-tewam"> </h2> <button class="close-button svelte-tewam" aria-label="Schließen">×</button></header> <div class="panel-content svelte-tewam"><!></div> <footer class="panel-footer svelte-tewam"><button class="back-button svelte-tewam">→ Zurück zum Hauptpfad</button></footer></div></div>');function tn(n,e){N(e,!1);let t=ne(e,"isOpen",8,!1),r=ne(e,"title",8,""),l=ne(e,"content",8,null);const d=it();function o(){d("close")}function c(h){h.key==="Escape"&&o()}function m(h){h.target===h.currentTarget&&o()}W();var v=Pe();J("keydown",wt,c);var u=pe(v);{var p=h=>{var k=en(),w=s(k),x=s(w),M=a(s(x),2),E=s(M),D=a(M,2),z=a(x,2),L=s(z);{var A=S=>{var B=Pe(),H=pe(B);_t(H,l),b(S,B)},q=S=>{var B=Pe(),H=pe(B);Ie(H,e,"default",{},null),b(S,B)};Q(L,S=>{l()?S(A):S(q,!1)})}var P=a(z,2),R=s(P);$(()=>C(E,r())),J("click",D,o),J("click",R,o),g(3,w,()=>F,()=>({x:-300,duration:300})),g(3,k,()=>_,()=>({duration:200})),J("click",k,m),b(h,k)};Q(u,h=>{t()&&h(p)})}b(n,v),O()}var nn=y('<span class="popover-en svelte-l7i3p6"> </span>'),sn=y('<span class="tag svelte-l7i3p6"> </span>'),rn=y('<a class="popover-source svelte-l7i3p6"> </a>'),an=y('<div role="tooltip"><div class="caret svelte-l7i3p6"></div> <div class="popover-header svelte-l7i3p6"><span class="popover-term svelte-l7i3p6"> </span> <!></div> <p class="popover-definition svelte-l7i3p6"> </p> <div class="popover-footer svelte-l7i3p6"><div class="popover-tags svelte-l7i3p6"></div> <!></div></div>'),on=y('<span role="button" tabindex="0"><!></span> <!>',1);function je(n,e){N(e,!1);const t=te(),r=te();let l=ne(e,"id",8),d=ne(e,"inline",8,!0),o=te(!1),c=te(),m=te(),v,u=te({top:0,left:0,placement:"above"});async function p(){if(await Dt(),!i(c))return;const P=i(c).getBoundingClientRect(),R=200,S=8;let B,H,se="above";P.top>R+S?(B=P.top-S,se="above"):(B=P.bottom+S,se="below"),H=P.left+P.width/2,j(u,{top:B,left:H,placement:se})}function h(){v=setTimeout(()=>{j(o,!0),p()},300)}function k(){clearTimeout(v),j(o,!1)}function w(P){P.preventDefault(),P.stopPropagation(),clearTimeout(v),j(o,!i(o)),i(o)&&p()}function x(P){i(o)&&i(c)&&!i(c).contains(P.target)&&i(m)&&!i(m).contains(P.target)&&j(o,!1)}function M(){i(o)&&j(o,!1)}function E(P){P.key==="Escape"&&i(o)&&j(o,!1)}Ae(()=>(document.addEventListener("click",x),window.addEventListener("scroll",M,{passive:!0}),window.addEventListener("keydown",E),window.addEventListener("resize",p),()=>{document.removeEventListener("click",x),window.removeEventListener("scroll",M),window.removeEventListener("keydown",E),window.removeEventListener("resize",p),clearTimeout(v)}));const D={prompting:"#3B82F6","ai-engineering":"#8B5CF6",fundamentals:"#607D8B",architecture:"#059669",safety:"#DC2626",training:"#D97706",agents:"#EC4899",evaluation:"#6366F1",methodology:"#14B8A6",theory:"#8B5CF6"};fe(()=>Re(l()),()=>{j(t,Pt[l()])}),fe(()=>(i(t),Ue),()=>{j(r,i(t)?.source?Ue(i(t).source):null)}),$e(),W();var z=Pe(),L=pe(z);{var A=P=>{var R=on(),S=pe(R);let B;var H=s(S);Ie(H,e,"default",{},K=>{var Z=Ce();$(()=>C(Z,(i(t),T(()=>i(t).term)))),b(K,Z)}),Be(S,K=>j(c,K),()=>i(c));var se=a(S,2);{var G=K=>{var Z=an();let ve;var ae=a(s(Z),2),ge=s(ae),ze=s(ge),oe=a(ge,2);{var ke=Y=>{var ee=nn(),le=s(ee);$(()=>C(le,`(${i(t),T(()=>i(t).en)??""})`)),b(Y,ee)};Q(oe,Y=>{i(t),T(()=>i(t).en&&i(t).en!==i(t).term)&&Y(ke)})}var f=a(ae,2),I=s(f),me=a(f,2),Me=s(me);ie(Me,5,()=>(i(t),T(()=>i(t).tags)),re,(Y,ee)=>{var le=sn(),qe=s(le);$(()=>{we(le,`background-color: ${i(ee),T(()=>D[i(ee)]||"#607D8B")??""}`),C(qe,i(ee))}),b(Y,le)});var Te=a(Me,2);{var Fe=Y=>{var ee=rn(),le=s(ee);$(()=>{V(ee,"href",`#bibliographie-${i(r),T(()=>i(r)?.id||"")??""}`),C(le,(i(t),T(()=>i(t).source)))}),J("click",ee,It(function(qe){Ct.call(this,e,qe)})),b(Y,ee)};Q(Te,Y=>{i(t),T(()=>i(t).source)&&Y(Fe)})}Be(Z,Y=>j(m,Y),()=>i(m)),$(()=>{V(Z,"id",`tooltip-${l()??""}`),ve=xe(Z,1,"glossary-popover svelte-l7i3p6",null,ve,{above:i(u).placement==="above",below:i(u).placement==="below"}),we(Z,`top: ${i(u),T(()=>i(u).top)??""}px; left: ${i(u),T(()=>i(u).left)??""}px;`),C(ze,(i(t),T(()=>i(t).term))),C(I,(i(t),T(()=>i(t).definition)))}),b(K,Z)};Q(se,K=>{i(o)&&K(G)})}$(()=>{B=xe(S,1,"glossary-term svelte-l7i3p6",null,B,{inline:d(),active:i(o)}),V(S,"aria-describedby",i(o)?`tooltip-${l()}`:void 0),V(S,"aria-expanded",i(o))}),J("click",S,w),J("mouseenter",S,h),J("mouseleave",S,k),J("keydown",S,K=>K.key==="Enter"&&w(K)),b(P,R)},q=P=>{var R=Pe(),S=pe(R);Ie(S,e,"default",{},null),b(P,R)};Q(L,P=>{i(t)?P(A):P(q,!1)})}b(n,z),O()}const ln="/PromptotypingExplainer/assets/promptotyping-logo-ey7SXXm7.png";var dn=y(`<div class="intro-definition svelte-10mg3y6"><div class="title-block svelte-10mg3y6"><img alt="Promptotyping Logo" class="logo svelte-10mg3y6"/> <h1 class="promptotyping-title svelte-10mg3y6">Promptotyping</h1> <p class="subtitle svelte-10mg3y6">Context Engineering: Vom Wissen zum Werkzeug</p></div> <div class="definition-block svelte-10mg3y6"><p class="definition svelte-10mg3y6"><span class="promptotyping">Promptotyping</span> ist eine Methode zur systematischen Entwicklung funktionaler
      Prototypen durch strukturierte Interaktion mit <!>.
      Sie kombiniert die Intuition des "Vibe Codings" mit einem systematischen Framework zur
      Wissensaufbereitung, ein <!>-Prozess,
      der domänenspezifisches Wissen für LLMs optimal strukturiert.</p> <p class="etymology svelte-10mg3y6">Der Name setzt sich zusammen aus <em class="svelte-10mg3y6">Prompt</em> (die Eingabe an ein LLM) und <em class="svelte-10mg3y6">Prototyping</em> (iterative Entwicklung von Funktionsmustern).</p> <p class="context-addendum svelte-10mg3y6">Obwohl die Methodik ihren Ursprung in den Digital Humanities hat, sind ihre Mechanismen
      universell auf datenintensive Forschungsprozesse übertragbar, darunter statistische Analysen,
      Datenvisualisierung und explorative Analysen in verschiedensten Disziplinen.</p></div></div>`);function cn(n){var e=dn(),t=s(e),r=s(t),l=a(t,2),d=s(l),o=a(s(d),2);je(o,{id:"llm",children:(m,v)=>{var u=Ce("Large Language Models");b(m,u)},$$slots:{default:!0}});var c=a(o,2);je(c,{id:"context-engineering",children:(m,v)=>{var u=Ce("Context Engineering");b(m,u)},$$slots:{default:!0}}),$(()=>V(r,"src",ln)),b(n,e)}var vn=y('<button><span class="trigger-icon svelte-wjh6ga">←</span> <span class="trigger-label svelte-wjh6ga"> </span> <span class="trigger-hint svelte-wjh6ga">Deep Dive</span></button>');function ue(n,e){N(e,!1);let t=ne(e,"label",8,"Mehr erfahren"),r=ne(e,"deepDiveId",8,""),l=ne(e,"variant",8,"inline");const d=it();function o(){d("open",{id:r()})}W();var c=vn(),m=a(s(c),2),v=s(m);$(()=>{xe(c,1,`deep-dive-trigger ${l()??""}`,"svelte-wjh6ga"),V(c,"aria-label",`Deep Dive öffnen: ${t()??""}`),C(v,t())}),J("click",c,o),b(n,c),O()}var pn=y(`<div class="intro-kernprinzip svelte-jio7ez"><div class="content svelte-jio7ez"><h3 class="svelte-jio7ez">Co-Intelligence & "Strange New Minds"</h3> <div class="main-layout svelte-jio7ez"><div class="text-card svelte-jio7ez"><p class="svelte-jio7ez">LLMs sind <em class="svelte-jio7ez">"Strange New Minds"</em> (Summerfield, 2025), weder reine Werkzeuge
          noch echte Intelligenz. Sie sind statistische Mustermaschinen, die überzeugende
          Outputs produzieren, ohne deren Wahrheit validieren zu können. Diese "halluzinierenden
          Reasoner" erfordern externe Verifikation durch Domänenexpert:innen.</p> <p class="svelte-jio7ez"><span class="promptotyping svelte-jio7ez">Promptotyping</span> nutzt das Konzept der <strong class="svelte-jio7ez">Co-Intelligence</strong> nach Ethan Mollick (2024)
          für die produktive Zusammenarbeit zwischen menschlicher Expertise und KI-Fähigkeiten.
          Dabei wechseln wir zwischen zwei Modi. <strong class="svelte-jio7ez">Centaur-Arbeit</strong> mit klarer Aufgabenteilung
          eignet sich für strukturierte Phasen wie die Dokumenterstellung. <strong class="svelte-jio7ez">Cyborg-Arbeit</strong> mit fließender Zusammenarbeit auf Satzebene ist charakteristisch für explorative Phasen
          und kreative Iteration.</p> <p class="learn-more svelte-jio7ez">Mehr über die theoretischen Grundlagen von LLMs in der <a href="https://chpollin.github.io/llmdh/" target="_blank" rel="noopener noreferrer" class="svelte-jio7ez">LLM Summer School for DH</a>.</p></div></div> <div class="deep-dive-triggers svelte-jio7ez"><!> <!></div></div></div>`);function un(n,e){N(e,!1);function t(m){De(m.detail.id)}W();var r=pn(),l=s(r),d=a(s(l),4),o=s(d);ue(o,{label:"Co-Intelligence",deepDiveId:"co-intelligence",$$events:{open:t}});var c=a(o,2);ue(c,{label:"System 1.42 – LLM-Grundlagen",deepDiveId:"system-1-42",$$events:{open:t}}),b(n,r),O()}var hn=y(`<div class="intro-methodik svelte-p6qtke"><div class="content svelte-p6qtke"><h3 class="svelte-p6qtke">Critical Expert in the Loop</h3> <div class="explanation svelte-p6qtke"><p class="svelte-p6qtke">Ein zentrales Prinzip von Promptotyping: <strong class="svelte-p6qtke">Domänenexpert:innen bleiben unverzichtbar</strong>.
        LLMs können technisch korrekte, aber fachlich inadäquate Lösungen produzieren. Nur Expert:innen
        erkennen, ob eine Visualisierung historisch sinnvoll ist oder ob Kategorisierungen dem
        Forschungsgegenstand gerecht werden.</p> <p class="vibe-coding-note svelte-p6qtke"><strong class="svelte-p6qtke">Verhältnis zu Vibe Coding</strong> Promptotyping ist kein Gegenentwurf zu Vibe Coding,
        sondern gibt ihm Struktur für Forschungskontexte. Die intuitive, explorative Arbeitsweise
        bleibt erhalten, ergänzt durch systematische Dokumentation, die <!> verhindert und die Informationsdichte maximiert.</p></div> <div class="method-cards svelte-p6qtke"><div class="method-card svelte-p6qtke"><div class="card-icon svelte-p6qtke"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="svelte-p6qtke"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14,2 14,8 20,8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg></div> <h4 class="svelte-p6qtke">Vault-Dokumentation</h4> <p class="svelte-p6qtke">Flexible Markdown-Dokumente, die strukturiertes Wissen als LLM-Input bereitstellen</p></div> <div class="method-card svelte-p6qtke"><div class="card-icon svelte-p6qtke"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="svelte-p6qtke"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg></div> <h4 class="svelte-p6qtke">Iterative Updates</h4> <p class="svelte-p6qtke">Der Vault wächst mit jeder Iteration – neues Wissen fließt zurück</p></div> <div class="method-card svelte-p6qtke"><div class="card-icon svelte-p6qtke"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="svelte-p6qtke"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div> <h4 class="svelte-p6qtke">Expert Validation</h4> <p class="svelte-p6qtke">Domänenexpert:innen validieren jeden Output kritisch</p></div></div> <div class="deep-dive-triggers svelte-p6qtke"><!> <!></div></div></div>`);function gn(n,e){N(e,!1);function t(p){De(p.detail.id)}W();var r=hn(),l=s(r),d=a(s(l),2),o=a(s(d),2),c=a(s(o),2);je(c,{id:"context-rot",children:(p,h)=>{var k=Ce("Context Rot");b(p,k)},$$slots:{default:!0}});var m=a(d,4),v=s(m);ue(v,{label:"Critical Expert",deepDiveId:"critical-expert",$$events:{open:t}});var u=a(v,2);ue(u,{label:"Scholar-Centered Design",deepDiveId:"scholar-centered-design",$$events:{open:t}}),b(n,r),O()}const mn="/PromptotypingExplainer/assets/promptotyping-overview-AcSHP9K_.png";var fn=y('<div class="phase-item svelte-hawgxw"><div class="phase-number svelte-hawgxw"> </div> <div class="phase-info svelte-hawgxw"><span class="phase-label svelte-hawgxw"> </span> <span class="phase-subtitle svelte-hawgxw"> </span></div></div>'),bn=y('<div class="intro-phasen svelte-hawgxw"><div class="side-by-side"><div class="content-side"><h3 class="svelte-hawgxw">Die vier Phasen</h3> <div class="phase-list svelte-hawgxw"></div></div> <div class="visual-side"><figure><img alt="Promptotyping Workflow: Vorbereitung, Exploration, Destillation, Implementation"/> <figcaption>Vier Phasen: Von Rohmaterial zu funktionalem Interface</figcaption></figure></div></div></div>');function kn(n,e){N(e,!1);const t=X.filter(u=>u.number!==null);W();var r=bn(),l=s(r),d=s(l),o=a(s(d),2);ie(o,5,()=>t,re,(u,p)=>{var h=fn(),k=s(h),w=s(k),x=a(k,2),M=s(x),E=s(M),D=a(M,2),z=s(D);$(()=>{C(w,i(p).number),C(E,i(p).label),C(z,i(p).subtitle)}),b(u,h)});var c=a(d,2),m=s(c),v=s(m);$(()=>V(v,"src",mn)),b(n,r),O()}var yn=y(`<div class="phase1-titel svelte-k7vkqd"><header class="scene-header svelte-k7vkqd"><span class="phase-number svelte-k7vkqd">Phase 1</span> <h2 class="svelte-k7vkqd">Vorbereitung</h2> <p class="subtitle svelte-k7vkqd">Materialsammlung</p></header> <div class="content svelte-k7vkqd"><p class="svelte-k7vkqd">Die <strong class="svelte-k7vkqd">Preparation</strong>-Phase sammelt alle relevanten Rohmaterialien, darunter
      Forschungsdaten, Dokumentation zu Standards und Modellen,
      Forschungsfragen und Domänenwissen.</p> <p class="highlight svelte-k7vkqd">Diese Phase verhindert die unkritische Übernahme technischer Lösungen
      für wissenschaftliche Probleme und zwingt zur präzisen Artikulation der Projektziele.</p> <div class="deep-dive-row svelte-k7vkqd"><!></div></div></div>`);function xn(n,e){N(e,!1);function t(m){De(m.detail.id)}W();var r=yn(),l=s(r),d=a(l,2),o=a(s(d),4),c=s(o);ue(c,{label:"Context Engineering",deepDiveId:"context-engineering",$$events:{open:t}}),g(1,l,()=>F,()=>({y:-20,duration:500})),g(1,d,()=>_,()=>({delay:200,duration:400})),g(1,r,()=>_,()=>({duration:400})),b(n,r),O()}var wn=y('<div class="document-icon svelte-119o94q" role="img"><svg viewBox="0 0 40 52" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-119o94q"><path d="M2 4C2 2.89543 2.89543 2 4 2H26L38 14V48C38 49.1046 37.1046 50 36 50H4C2.89543 50 2 49.1046 2 48V4Z" fill="white" stroke-width="2"></path><path d="M26 2V12C26 13.1046 26.8954 14 28 14H38" stroke-width="2"></path><text x="20" y="36" text-anchor="middle" font-size="10" font-weight="600" font-family="var(--font-mono)"> </text></svg></div>');function ot(n,e){N(e,!1);const t=te();let r=ne(e,"type",8,"xml"),l=ne(e,"size",8,48);const d={xml:{color:"#607D8B",symbol:"</>"},pdf:{color:"#E53935",symbol:"PDF"},csv:{color:"#4CAF50",symbol:"|||"},notes:{color:"#FF9800",symbol:"≡"},md:{color:"#1A1A1A",symbol:"MD"}};fe(()=>Re(r()),()=>{j(t,d[r()]||d.xml)}),$e(),W();var o=wn(),c=s(o),m=s(c),v=a(m),u=a(v),p=s(u);$(h=>{we(o,`width: ${l()??""}px; height: ${l()*1.3}px;`),V(o,"aria-label",`${h??""} Dokument`),V(m,"stroke",(i(t),T(()=>i(t).color))),V(v,"stroke",(i(t),T(()=>i(t).color))),V(u,"fill",(i(t),T(()=>i(t).color))),C(p,(i(t),T(()=>i(t).symbol)))},[()=>(Re(r()),T(()=>r().toUpperCase()))]),b(n,o),O()}const lt=[{id:"intro",title:"Promptotyping",subtitle:"Vom Wissen zum Werkzeug",question:"Wie wird aus Forschungsdaten ein funktionales Interface?"},{id:"phase1",number:1,title:"Vorbereitung",subtitle:"Materialsammlung",description:"Sammlung aller relevanten Materialien.",artifacts:[{type:"xml",label:"TEI/XML"},{type:"pdf",label:"Spezifikation"},{type:"csv",label:"Rohdaten"},{type:"notes",label:"Notizen"}]},{id:"phase2",number:2,title:"Exploration",subtitle:"Daten-Kontext-Relationen",description:"Systematische Sondierung der Schnittstelle zwischen Rohdaten und Forschungskontext. Validierung der Machbarkeit."},{id:"phase3",number:3,title:"Destillation",subtitle:"Wissenskomprimierung",description:"Überführung in kompakte Markdown-Dokumente.",documents:[{name:"data.md",purpose:"Struktur und Semantik der Forschungsdaten"},{name:"user-story.md",purpose:"Anforderungen aus Forschungsperspektive"},{name:"context.md",purpose:"Relevantes Domänenwissen"}],closingText:"Destilliertes Wissen. Bereit für das LLM."},{id:"phase4",number:4,title:"Iterative Implementation",subtitle:"Iterative Entwicklung",description:"Der eigentliche Promptotyping-Dialog beginnt.",closingText:"Vom Wissen zum Werkzeug."}];var Dn=y('<div class="material-item svelte-17gbft8"><div class="icon-container svelte-17gbft8"><!></div> <span class="label svelte-17gbft8"> </span></div>'),zn=y('<div class="phase1-rohdaten svelte-17gbft8"><h3 class="svelte-17gbft8">Rohmaterialien sammeln</h3> <p class="description svelte-17gbft8">Forschungsdaten in verschiedenen Formaten bilden die Grundlage</p> <div class="materials-cloud svelte-17gbft8"></div></div>');function _n(n,e){N(e,!1);const t=lt[1].artifacts,r=[{x:-140,y:-70,delay:0},{x:130,y:-50,delay:100},{x:-110,y:70,delay:200},{x:150,y:60,delay:300}];W();var l=zn(),d=s(l),o=a(d,2),c=a(o,2);ie(c,5,()=>t,re,(m,v,u)=>{var p=Dn(),h=s(p),k=s(h);ot(k,{get type(){return i(v).type}});var w=a(h,2),x=s(w);$(()=>{we(p,`--offset-x: ${r[u].x??""}px; --offset-y: ${r[u].y??""}px;`),C(x,i(v).label)}),g(1,w,()=>_,()=>({delay:500+r[u].delay})),g(1,p,()=>F,()=>({x:r[u].x>0?100:-100,y:-30,duration:500,delay:300+r[u].delay})),b(m,p)}),g(1,d,()=>_,()=>({duration:400})),g(1,o,()=>_,()=>({delay:150,duration:400})),b(n,l),O()}var Pn=y('<div class="icon-stacked svelte-6tqdd3"><!> <span class="label svelte-6tqdd3"> </span></div>'),En=y('<div class="phase1-sammlung svelte-6tqdd3"><h3 class="svelte-6tqdd3">Materialien gesammelt</h3> <div class="workspace svelte-6tqdd3"><div class="workspace-area svelte-6tqdd3"></div></div> <p class="ready-text svelte-6tqdd3">Alle Materialien bereit für die <strong class="svelte-6tqdd3">Exploration</strong></p></div>');function Ln(n,e){N(e,!1);const t=lt[1].artifacts,r=[{x:-22,y:-18,rotate:-6},{x:28,y:-10,rotate:9},{x:-18,y:14,rotate:-4},{x:24,y:22,rotate:6}];W();var l=En(),d=s(l),o=a(d,2),c=s(o);ie(c,5,()=>t,re,(v,u,p)=>{var h=Pn(),k=s(h);ot(k,{get type(){return i(u).type}});var w=a(k,2),x=s(w);$(()=>{we(h,`transform: translate(${r[p].x??""}px, ${r[p].y??""}px) rotate(${r[p].rotate??""}deg);`),C(x,i(u).label)}),g(1,w,()=>_,()=>({delay:550+p*60})),g(1,h,()=>F,()=>({y:-40,duration:400,delay:200+p*80})),b(v,h)});var m=a(o,2);g(1,d,()=>_,()=>({duration:400})),g(1,o,()=>Ge,()=>({duration:400,start:.9})),g(1,m,()=>_,()=>({delay:700,duration:400})),b(n,l),O()}const Mn="/PromptotypingExplainer/assets/exploration-CciyC_CV.png";var Sn=y(`<div class="phase2-exploration svelte-pwk459"><header class="scene-header svelte-pwk459"><span class="phase-number svelte-pwk459">Phase 2</span> <h2 class="svelte-pwk459">Exploration</h2> <p class="subtitle svelte-pwk459">Daten-Kontext-Relationen</p></header> <div class="content-block svelte-pwk459"><p class="lead svelte-pwk459">Systematische Sondierung der Schnittstelle zwischen Rohdaten und Forschungskontext.
      Wir prüfen: Lässt sich die abstrakte Forschungsfrage konkret auf diese Datenstruktur abbilden?</p> <div class="key-point svelte-pwk459"><span class="key-label svelte-pwk459">Ziel</span> <p class="svelte-pwk459"><strong class="svelte-pwk459">Validierung der Machbarkeit</strong>: Geben die Daten das her, was der Forschungskontext verlangt? Sackgassen sind hier positive Erkenntnisse, keine Fehler.</p></div> <div class="example-box svelte-pwk459"><div class="example-label svelte-pwk459">Typische Fragen</div> <p class="example-text svelte-pwk459">"Lässt sich diese Netzwerkanalyse mit den vorhandenen Relationen umsetzen?"<br/><br/> "Welche Felder in der XML-Struktur tragen die gewünschte Filterlogik?"<br/><br/> "Können wir 'Als Historiker will ich nach Datum filtern...' mit diesen Daten realisieren?"</p></div></div> <figure class="exploration-visual svelte-pwk459"><img alt="Sondierung der Daten-Kontext-Schnittstelle" class="svelte-pwk459"/> <figcaption class="svelte-pwk459">Brücken identifizieren – mental entstehen hier die ersten User Stories</figcaption></figure> <p class="transition-hint svelte-pwk459">Ergebnis: Wissen über Datenqualität und User-Story-Validität → Voraussetzung für Phase 3</p></div>`);function In(n){var e=Sn(),t=s(e),r=a(t,2),l=a(r,2),d=s(l),o=a(l,2);$(()=>V(d,"src",Mn)),g(1,t,()=>F,()=>({y:-20,duration:500})),g(1,r,()=>_,()=>({delay:200,duration:400})),g(1,l,()=>F,()=>({y:30,duration:500,delay:400})),g(1,o,()=>_,()=>({delay:600,duration:400})),g(1,e,()=>_,()=>({duration:400})),b(n,e)}var Cn=y(`<div class="phase3-titel svelte-btytv1"><header class="scene-header svelte-btytv1"><span class="phase-number svelte-btytv1">Phase 3</span> <h2 class="svelte-btytv1">Destillation</h2> <p class="subtitle svelte-btytv1">Vom Rohmaterial zum Vault</p></header> <div class="content-block svelte-btytv1"><p class="lead svelte-btytv1">Die Erkenntnisse aus der Exploration werden nun <strong class="svelte-btytv1">destilliert</strong>.
      Das Kernprinzip: maximale Information mit minimalen Tokens. Je präziser der Kontext,
      desto besser die LLM-Performance – denn <strong class="svelte-btytv1">Context Rot</strong> ist real.</p> <div class="vault-preview svelte-btytv1"><div class="vault-icon svelte-btytv1"><svg viewBox="0 0 64 64" width="80" height="80"><rect x="8" y="16" width="48" height="40" rx="4" fill="none" stroke="currentColor" stroke-width="2"></rect><path d="M8 28 L56 28" stroke="currentColor" stroke-width="2"></path><circle cx="32" cy="38" r="6" fill="none" stroke="currentColor" stroke-width="2"></circle><path d="M32 32 L32 20" stroke="currentColor" stroke-width="2"></path><rect x="24" y="8" width="16" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="2"></rect></svg></div> <p class="vault-label svelte-btytv1">Der Promptotyping Vault</p></div></div> <p class="insight svelte-btytv1">Hier entstehen die <strong class="svelte-btytv1">.md-Dateien</strong> - optimiert für das LLM</p></div>`);function $n(n){var e=Cn(),t=s(e),r=a(t,2),l=a(s(r),2),d=s(l),o=a(d,2),c=a(r,2);g(1,t,()=>F,()=>({y:-20,duration:500})),g(1,d,()=>F,()=>({y:20,duration:400,delay:400})),g(1,o,()=>_,()=>({delay:600,duration:400})),g(1,r,()=>_,()=>({delay:200,duration:400})),g(1,c,()=>_,()=>({delay:800,duration:400})),b(n,e)}var An=y('<div class="phase3-dokumente svelte-1ipbydp"><h3 class="svelte-1ipbydp">Die Vault-Dokumente</h3> <p class="description svelte-1ipbydp">Drei Kerndokumente verdichten das Wissen für LLMs optimal. Das Prinzip der <strong class="svelte-1ipbydp">Context Compression</strong> bedeutet maximale Information bei minimaler Token-Anzahl.</p> <div class="documents-grid svelte-1ipbydp"><div class="document svelte-1ipbydp"><div class="doc-icon data svelte-1ipbydp"><span class="doc-ext svelte-1ipbydp">.md</span></div> <div class="doc-content svelte-1ipbydp"><h4 class="svelte-1ipbydp">DATA.md</h4> <p class="svelte-1ipbydp">Struktur und Semantik der Forschungsdaten, also Schema, Felder und Beziehungen</p></div></div> <div class="document svelte-1ipbydp"><div class="doc-icon requirements svelte-1ipbydp"><span class="doc-ext svelte-1ipbydp">.md</span></div> <div class="doc-content svelte-1ipbydp"><h4 class="svelte-1ipbydp">REQUIREMENTS.md</h4> <p class="svelte-1ipbydp">Formalisierte Anforderungen mit MUSS / SOLL / KANN Priorisierung</p></div></div> <div class="document svelte-1ipbydp"><div class="doc-icon context svelte-1ipbydp"><span class="doc-ext svelte-1ipbydp">.md</span></div> <div class="doc-content svelte-1ipbydp"><h4 class="svelte-1ipbydp">CONTEXT.md</h4> <p class="svelte-1ipbydp">Domänenwissen, Forschungsfragen und Projektziele</p></div></div></div></div>');function Tn(n){var e=An(),t=s(e),r=a(t,2),l=a(r,2),d=s(l),o=a(d,2),c=a(o,2);g(1,t,()=>_,()=>({duration:400})),g(1,r,()=>_,()=>({delay:150,duration:400})),g(1,d,()=>F,()=>({y:30,duration:500,delay:300})),g(1,o,()=>F,()=>({y:30,duration:500,delay:450})),g(1,c,()=>F,()=>({y:30,duration:500,delay:600})),b(n,e)}var Fn=y(`<div class="phase3-vault svelte-1don6ot"><h3 class="svelte-1don6ot">Der <span class="promptotyping svelte-1don6ot">Promptotyping</span> Vault</h3> <p class="description svelte-1don6ot">Das destillierte Wissen aus Phase 2 wird in drei Markdown-Dateien organisiert –
    optimiert für den LLM-Kontext</p> <div class="vault-visual svelte-1don6ot"><div class="source-flow svelte-1don6ot"><div class="source-item svelte-1don6ot"><span class="source-label svelte-1don6ot">Datenstrukturen</span> <div class="arrow svelte-1don6ot">→</div></div> <div class="source-item svelte-1don6ot"><span class="source-label svelte-1don6ot">Erkenntnisse</span> <div class="arrow svelte-1don6ot">→</div></div> <div class="source-item svelte-1don6ot"><span class="source-label svelte-1don6ot">Anforderungen</span> <div class="arrow svelte-1don6ot">→</div></div></div> <div class="vault-center svelte-1don6ot"><div class="vault-box svelte-1don6ot"><div class="vault-header svelte-1don6ot">VAULT</div> <div class="vault-files svelte-1don6ot"><div class="file-item svelte-1don6ot"><span class="file svelte-1don6ot">DATA.md</span> <span class="file-desc svelte-1don6ot">Was haben wir?</span></div> <div class="file-item svelte-1don6ot"><span class="file svelte-1don6ot">REQUIREMENTS.md</span> <span class="file-desc svelte-1don6ot">Was wollen wir?</span></div> <div class="file-item svelte-1don6ot"><span class="file svelte-1don6ot">CONTEXT.md</span> <span class="file-desc svelte-1don6ot">Was wissen wir?</span></div></div></div></div> <div class="llm-flow svelte-1don6ot"><div class="arrow large svelte-1don6ot">→</div> <div class="llm-target svelte-1don6ot"><span class="llm-label svelte-1don6ot">Phase 4</span> <span class="llm-sublabel svelte-1don6ot">Implementation</span></div></div></div> <p class="conclusion svelte-1don6ot">Das Wissen ist verdichtet und <strong class="svelte-1don6ot">bereit für den LLM-Dialog</strong></p> <div class="download-section svelte-1don6ot"><p class="download-intro svelte-1don6ot">Starte dein eigenes Projekt:</p> <div class="download-buttons svelte-1don6ot"><a download="" class="download-btn primary svelte-1don6ot"><span class="btn-icon svelte-1don6ot">&#8595;</span> Vault-Template</a> <a href="https://github.com/DigitalHumanitiesCraft/PromptotypingExplainer/tree/main/knowledge" target="_blank" rel="noopener" class="download-btn secondary svelte-1don6ot"><span class="btn-icon svelte-1don6ot">&#8599;</span> Echtes Beispiel auf GitHub</a></div></div></div>`);function qn(n,e){N(e,!1);const t="/PromptotypingExplainer/downloads";W();var r=Fn(),l=s(r),d=a(l,2),o=a(d,2),c=s(o),m=a(c,2),v=a(m,2),u=a(o,2),p=a(u,2),h=a(s(p),2),k=s(h);$(()=>V(k,"href",`${t}/VAULT-TEMPLATE-README.md`)),g(1,l,()=>_,()=>({duration:400})),g(1,d,()=>_,()=>({delay:150,duration:400})),g(1,c,()=>_,()=>({delay:300,duration:400})),g(1,m,()=>Ge,()=>({duration:500,delay:500})),g(1,v,()=>_,()=>({delay:700,duration:400})),g(1,u,()=>_,()=>({delay:900,duration:400})),g(1,p,()=>_,()=>({delay:1e3,duration:400})),b(n,r),O()}var Vn=y(`<div class="phase4-titel svelte-1jfm6fv"><header class="scene-header svelte-1jfm6fv"><span class="phase-number svelte-1jfm6fv">Phase 4</span> <h2 class="svelte-1jfm6fv">Implementation</h2> <p class="subtitle svelte-1jfm6fv">Iterative Entwicklung</p></header> <div class="content-block svelte-1jfm6fv"><p class="lead svelte-1jfm6fv">Der Vault oder eine gezielte Auswahl wird dem LLM übergeben und die <strong class="svelte-1jfm6fv">Cyborg-Arbeit</strong> beginnt.
      Mensch und KI entwickeln gemeinsam, validieren iterativ und aktualisieren den Vault sofort mit neuem Wissen.</p> <div class="cycle-preview svelte-1jfm6fv"><div class="cycle-step svelte-1jfm6fv"><span class="cycle-icon svelte-1jfm6fv">1</span> <span class="cycle-label svelte-1jfm6fv">Prompt + Vault</span></div> <div class="cycle-arrow svelte-1jfm6fv">→</div> <div class="cycle-step svelte-1jfm6fv"><span class="cycle-icon svelte-1jfm6fv">2</span> <span class="cycle-label svelte-1jfm6fv">LLM "reasoned"</span></div> <div class="cycle-arrow svelte-1jfm6fv">→</div> <div class="cycle-step svelte-1jfm6fv"><span class="cycle-icon svelte-1jfm6fv">3</span> <span class="cycle-label svelte-1jfm6fv">Expert validiert</span></div></div></div> <p class="insight svelte-1jfm6fv">Jede Iteration = <strong class="svelte-1jfm6fv">neuer Prototype</strong> + potentielles Vault-Update</p></div>`);function Rn(n){var e=Vn(),t=s(e),r=a(t,2),l=a(s(r),2),d=a(r,2);g(1,t,()=>F,()=>({y:-20,duration:500})),g(1,l,()=>F,()=>({y:20,duration:400,delay:400})),g(1,r,()=>_,()=>({delay:200,duration:400})),g(1,d,()=>_,()=>({delay:600,duration:400})),b(n,e)}var Kn=y('<span class="pattern-label svelte-1hq5by1"> </span>'),Bn=y('<div><!> <div class="bubble svelte-1hq5by1"><p class="svelte-1hq5by1"> </p></div></div>'),jn=y('<div class="typing-indicator svelte-1hq5by1"><span class="typing-dot svelte-1hq5by1"></span> <span class="typing-dot svelte-1hq5by1"></span> <span class="typing-dot svelte-1hq5by1"></span></div>'),Wn=y('<div class="animated-chat svelte-1hq5by1"><div class="chat-header svelte-1hq5by1"><div class="chat-dots svelte-1hq5by1"><span class="dot svelte-1hq5by1"></span> <span class="dot svelte-1hq5by1"></span> <span class="dot svelte-1hq5by1"></span></div> <span class="chat-title svelte-1hq5by1">Promptotyping Session</span></div> <div class="chat-messages svelte-1hq5by1"><!> <!></div></div>');function On(n,e){N(e,!1);const t=[{type:"human",pattern:"Context setzen",text:"Lies knowledge.md und requirements.md. Was sind die Story-Gaps im Frontend?"},{type:"llm",pattern:"Reasoning",text:"Ich analysiere die Vault-Dokumente... Drei Gaps: 1) Phase 4 abstrakt, 2) Beispieldaten fehlen, 3) Komponenten ungenutzt."},{type:"human",pattern:"Plan anfordern",text:"Erstelle einen Plan! Wie lösen wir Gap 1?"},{type:"llm",pattern:"Plan",text:"Plan: AnimatedChat-Komponente erstellen → echte Prompts zeigen → Typing-Indicator für Authentizität."},{type:"human",pattern:"Implementieren",text:"Setze den Plan um. Teste ob es kompiliert."},{type:"llm",pattern:"Test",text:"Komponente erstellt. Build erfolgreich. Aber: Beispiel zu generisch für Promptotyping."},{type:"human",pattern:"Feedback",text:"Nimm unseren eigenen Prozess als Meta-Beispiel – das ist authentischer!"},{type:"llm",pattern:"Dokumentation",text:'Chat aktualisiert. Ergänze journal.md: "Meta-Beispiel zeigt echten Workflow".'}];let r=te([]),l=0;Ae(()=>{const u=()=>{if(l<t.length){j(r,[...i(r),t[l]]),l++;const p=t[l-1].type==="human"?2e3:2500;setTimeout(u,p)}else setTimeout(()=>{j(r,[]),l=0,setTimeout(u,1e3)},4e3)};return setTimeout(u,800),()=>{}}),W();var d=Wn(),o=a(s(d),2),c=s(o);ie(c,1,()=>i(r),re,(u,p)=>{var h=Bn(),k=s(h);{var w=D=>{var z=Kn(),L=s(z);$(()=>C(L,i(p).pattern)),b(D,z)};Q(k,D=>{i(p).pattern&&D(w)})}var x=a(k,2),M=s(x),E=s(M);$(()=>{xe(h,1,`message ${i(p).type??""}`,"svelte-1hq5by1"),C(E,i(p).text)}),g(1,h,()=>F,()=>({y:20,duration:400})),b(u,h)});var m=a(c,2);{var v=u=>{var p=jn();g(1,p,()=>_,()=>({duration:200})),b(u,p)};Q(m,u=>{i(r).length<t.length&&u(v)})}b(n,d),O()}var Nn=y(`<div class="phase4-iteration svelte-5lsmoa"><h3 class="svelte-5lsmoa">Der Iterationszyklus</h3> <p class="description svelte-5lsmoa">Context → Reasoning → Plan → Implementation → Test → Feedback → Dokumentation</p> <div class="iteration-grid svelte-5lsmoa"><figure class="chat-side svelte-5lsmoa"><!> <figcaption class="svelte-5lsmoa">Der Reasoning-Zyklus: Fragen, Planen, Implementieren, Dokumentieren</figcaption></figure> <div class="text-card explainer-side svelte-5lsmoa"><p>Der Zyklus beginnt mit dem <strong>Kontext</strong>: Der gesamte Vault oder eine gezielte Auswahl
        relevanter Dokumente wird dem LLM mitgegeben. Im <strong>"Reasoning"</strong> ruft das LLM
        passende Muster aus seinem Training ab und interpoliert eine Lösung. Es analysiert nicht,
        es retrievet approximativ.</p> <p>Der generierte <strong>Plan</strong> wird implementiert und direkt <strong>getestet</strong>.
        Fehler werden sofort sichtbar. Kritisches <strong>Feedback</strong> durch den Critical Expert
        gibt die Richtung für die nächste Iteration vor.</p> <p>Am Ende jedes Zyklus steht die <strong>Dokumentation</strong>: Neues Wissen fließt sofort
        zurück in den Vault. Der Kontext wächst – und der nächste Zyklus startet mit besserem
        Retrieval-Material.</p> <div class="deep-dive-trigger-wrapper svelte-5lsmoa"><!></div></div></div></div>`);function Gn(n,e){N(e,!1);function t(h){De(h.detail.id)}W();var r=Nn(),l=s(r),d=a(l,2),o=a(d,2),c=s(o),m=s(c);On(m,{});var v=a(c,2),u=a(s(v),6),p=s(u);ue(p,{label:"LLMs als Retrieval-Systeme",deepDiveId:"llm-retrieval",$$events:{open:t}}),g(1,l,()=>_,()=>({duration:400})),g(1,d,()=>_,()=>({delay:150,duration:400})),g(1,c,()=>F,()=>({x:-30,duration:500,delay:300})),g(1,v,()=>F,()=>({x:30,duration:500,delay:400})),b(n,r),O()}var Hn=y('<div class="phase4-vault-update svelte-1dkyo20"><h3 class="svelte-1dkyo20">Vault-Update</h3> <p class="description svelte-1dkyo20">Neues Wissen fließt zurück und der Vault wächst mit jeder Iteration</p> <div class="update-visual svelte-1dkyo20"><div class="update-source svelte-1dkyo20"><div class="source-header svelte-1dkyo20">Prototype zeigt...</div> <div class="source-items svelte-1dkyo20"><div class="source-item svelte-1dkyo20">Fehlende Datenfelder</div> <div class="source-item svelte-1dkyo20">Unklare Anforderungen</div> <div class="source-item svelte-1dkyo20">Neue Erkenntnisse</div></div></div> <div class="update-arrow svelte-1dkyo20"><svg viewBox="0 0 60 40" width="60" height="40" class="svelte-1dkyo20"><path d="M5 20 L45 20" stroke="var(--color-terracotta)" stroke-width="2" stroke-dasharray="4 3"></path><polygon points="45,15 55,20 45,25" fill="var(--color-terracotta)"></polygon></svg> <span class="arrow-label svelte-1dkyo20">Update</span></div> <div class="update-target svelte-1dkyo20"><div class="target-header svelte-1dkyo20">Vault</div> <div class="target-items svelte-1dkyo20"><div class="target-item svelte-1dkyo20"><span class="file-name svelte-1dkyo20">DATA.md</span> <span class="update-type svelte-1dkyo20">+ Felder</span></div> <div class="target-item svelte-1dkyo20"><span class="file-name svelte-1dkyo20">REQUIREMENTS.md</span> <span class="update-type svelte-1dkyo20">+ Klarheit</span></div> <div class="target-item svelte-1dkyo20"><span class="file-name svelte-1dkyo20">CONTEXT.md</span> <span class="update-type svelte-1dkyo20">+ Wissen</span></div></div></div></div> <div class="loop-indicator svelte-1dkyo20"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" class="svelte-1dkyo20"><path d="M17 1l4 4-4 4"></path><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><path d="M7 23l-4-4 4-4"></path><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg> <span>Verbesserter Vault → besserer Prototype → nächste Iteration</span></div> <p class="conclusion svelte-1dkyo20"><strong>Vom Wissen zum Werkzeug</strong></p></div>');function Un(n){var e=Hn(),t=s(e),r=a(t,2),l=a(r,2),d=s(l),o=a(d,2),c=a(o,2),m=a(s(c),2),v=s(m),u=a(v,2),p=a(u,2),h=a(l,2),k=a(h,2);g(1,t,()=>_,()=>({duration:400})),g(1,r,()=>_,()=>({delay:150,duration:400})),g(1,d,()=>F,()=>({x:-30,duration:500,delay:300})),g(1,o,()=>_,()=>({delay:500,duration:400})),g(1,v,()=>_,()=>({delay:600})),g(1,u,()=>_,()=>({delay:700})),g(1,p,()=>_,()=>({delay:800})),g(1,c,()=>F,()=>({x:30,duration:500,delay:400})),g(1,h,()=>_,()=>({delay:900,duration:400})),g(1,k,()=>_,()=>({delay:1e3,duration:400})),b(n,e)}var Zn=y('<span class="blog-badge svelte-1es890x">Blog</span>'),Xn=y('<a target="_blank" rel="noopener" class="example-card svelte-1es890x"><div class="card-thumbnail svelte-1es890x"><img loading="lazy" class="svelte-1es890x"/> <span class="type-badge svelte-1es890x"> </span> <span class="date-badge svelte-1es890x"> </span> <!></div> <div class="card-content svelte-1es890x"><h3 class="svelte-1es890x"> </h3> <p class="abstract svelte-1es890x"> </p> <span class="data-format svelte-1es890x"> </span></div></a>'),Qn=y('<div class="outro-beispiele svelte-1es890x"><header class="scene-header svelte-1es890x"><span class="section-label svelte-1es890x">Praxis</span> <h2 class="svelte-1es890x">Case Studies</h2></header> <div class="examples-grid svelte-1es890x"></div> <div class="deep-dive-triggers svelte-1es890x"></div></div>');function Jn(n,e){N(e,!1);const t={correspexplorer:"case-correspexplorer",lucina:"case-lucina",kriminalmuseum:"case-kriminalmuseum","cvma-glasmalerei":"case-cvma",aldersbach:"case-aldersbach","szd-annotation":"case-szd"};function r(m){De(m.detail.id)}W();var l=Qn(),d=s(l),o=a(d,2);ie(o,5,()=>He,re,(m,v,u)=>{var p=Xn(),h=s(p),k=s(h),w=a(k,2),x=s(w),M=a(w,2),E=s(M),D=a(M,2);{var z=H=>{var se=Zn();b(H,se)};Q(D,H=>{i(v).hasBlog&&H(z)})}var L=a(h,2),A=s(L),q=s(A),P=a(A,2),R=s(P),S=a(P,2),B=s(S);$(()=>{V(p,"href",i(v).link),V(k,"src",i(v).thumbnail),V(k,"alt",`${i(v).name??""} Screenshot`),C(x,i(v).type),C(E,i(v).date),C(q,i(v).name),C(R,i(v).abstract),C(B,i(v).dataFormat)}),g(1,p,()=>F,()=>({y:30,duration:400,delay:200+u*100})),b(m,p)});var c=a(o,2);ie(c,5,()=>He,re,(m,v)=>{ue(m,{get label(){return i(v).name},get deepDiveId(){return t[i(v).id]},$$events:{open:r}})}),g(1,d,()=>F,()=>({y:-20,duration:500})),g(1,c,()=>F,()=>({y:20,duration:400,delay:800})),b(n,l),O()}var Yn=y('<li class="svelte-1f85qzn"><strong class="svelte-1f85qzn"> </strong> </li>'),es=y('<li class="svelte-1f85qzn"><strong class="svelte-1f85qzn"> </strong> </li>'),ts=y('<div class="gap-item svelte-1f85qzn"><span class="gap-label svelte-1f85qzn"> </span> <span class="gap-text svelte-1f85qzn"> </span></div>'),ns=y('<div class="outro-diskussion svelte-1f85qzn"><header class="scene-header svelte-1f85qzn"><span class="section-label svelte-1f85qzn">Reflexion</span> <h2 class="svelte-1f85qzn">Sollten wir LLMs in der Forschung einsetzen?</h2> <p class="subtitle svelte-1f85qzn">Eine offene Diskussion</p></header> <div class="discussion-grid svelte-1f85qzn"><div class="column contra svelte-1f85qzn"><div class="column-header svelte-1f85qzn"><span class="column-icon svelte-1f85qzn">?</span> <h3 class="svelte-1f85qzn">Kritische Einwände</h3></div> <ul class="points-list svelte-1f85qzn"></ul></div> <div class="column pro svelte-1f85qzn"><div class="column-header svelte-1f85qzn"><span class="column-icon svelte-1f85qzn">!</span> <h3 class="svelte-1f85qzn">Pragmatische Argumente</h3></div> <ul class="points-list svelte-1f85qzn"></ul></div></div> <div class="research-gaps svelte-1f85qzn"><h4 class="svelte-1f85qzn">Offene Forschungsfragen</h4> <div class="gaps-grid svelte-1f85qzn"></div></div> <div class="deep-dive-trigger svelte-1f85qzn"><!></div></div>');function ss(n,e){N(e,!1);function t(E){De(E.detail.id)}const r=[{title:"Proprietäre Systeme",text:"Abhängigkeit von intransparenten Systemen ohne Einblick in Trainingsdaten oder Modellverhalten."},{title:"Forschungsintegrität",text:"Black-Box-Charakter erschwert Reproduzierbarkeit und Zitierbarkeit."},{title:"Zugangshürden",text:"Kosten (~200$/Monat) schaffen neue Ungleichheiten. Open-Source-Alternativen erfordern erhebliche Infrastruktur."},{title:"Ökologische Kosten",text:"Hoher Energieverbrauch für Training und Inferenz bleibt methodisch unreflektiert."}],l=[{title:"Beschleunigung",text:"Projekte, die Monate dauern würden, werden in Tagen umsetzbar."},{title:"Neue Experimente",text:"Ermöglicht Prototypen und Analysen, die sonst nicht realisierbar wären."},{title:"Epistemische Praxis",text:"Vibe Coding als neue Form des explorativen Programmierens? (offene Forschungsfrage)"},{title:"Technologische Realität",text:"Multi-Agenten-Systeme zeigen, wohin die Entwicklung geht. Nicht-Auseinandersetzung ist keine Lösung."}],d=[{label:"Evaluierung",text:"Bisher existieren nur einzelne Fallbeispiele. Systematische Bewertungskriterien fehlen – am ehesten über Vibe Checks und Reviews (vgl. RIDE)."},{label:"Generalisierbarkeit",text:"Übertragbarkeit auf externe Teams und andere Disziplinen unbewiesen."},{label:"Skills Atrophy",text:"Gefahr des Verlernens von Coding-Skills muss untersucht werden."},{label:"Kosten-Nutzen",text:"Zeitaufwand für Dokumentation vs. Effizienzgewinn ist offen."}];W();var o=ns(),c=s(o),m=a(c,2),v=s(m),u=a(s(v),2);ie(u,5,()=>r,re,(E,D,z)=>{var L=Yn(),A=s(L),q=s(A),P=a(A);$(()=>{C(q,`${i(D).title??""}:`),C(P,` ${i(D).text??""}`)}),g(1,L,()=>_,()=>({delay:300+z*100})),b(E,L)});var p=a(v,2),h=a(s(p),2);ie(h,5,()=>l,re,(E,D,z)=>{var L=es(),A=s(L),q=s(A),P=a(A);$(()=>{C(q,`${i(D).title??""}:`),C(P,` ${i(D).text??""}`)}),g(1,L,()=>_,()=>({delay:300+z*100})),b(E,L)});var k=a(m,2),w=a(s(k),2);ie(w,5,()=>d,re,(E,D,z)=>{var L=ts(),A=s(L),q=s(A),P=a(A,2),R=s(P);$(()=>{C(q,i(D).label),C(R,i(D).text)}),g(1,L,()=>_,()=>({delay:700+z*80})),b(E,L)});var x=a(k,2),M=s(x);ue(M,{label:"Grenzen & Limitationen im Detail",deepDiveId:"limitations",variant:"block",$$events:{open:t}}),g(1,c,()=>F,()=>({y:-20,duration:500})),g(1,v,()=>F,()=>({x:-30,duration:500,delay:200})),g(1,p,()=>F,()=>({x:30,duration:500,delay:200})),g(1,k,()=>F,()=>({y:20,duration:500,delay:600})),g(1,x,()=>_,()=>({delay:900})),b(n,o),O()}var is=y(`<div class="outro-zusammenfassung svelte-pz9g48"><h3 class="svelte-pz9g48">Zusammenfassung</h3> <div class="text-card svelte-pz9g48"><p><span class="promptotyping">Promptotyping</span> strukturiert die Zusammenarbeit zwischen Forscher:innen und LLMs
      durch einen vierphasigen Prozess: Materialsammlung, explorative Analyse, Wissensdestillation
      im <span class="promptotyping">Promptotyping</span> Vault, und iterative Implementation.</p> <p>Der <span class="promptotyping">Promptotyping</span> Vault ist ein flexibler Wissensspeicher aus <strong>Promptotyping Documents</strong>.
      Die Kerndokumente DATA.md, REQUIREMENTS.md und CONTEXT.md bilden den Ausgangspunkt, können aber je nach Domäne erweitert werden.
      Sie machen implizites Domänenwissen für LLMs nutzbar und wachsen mit jeder Iteration.</p> <p><strong>Critical Expert in the Loop</strong>: Domänenexpert:innen bleiben unverzichtbar.
      Sie validieren Outputs, erkennen Halluzinationen und steuern die fachliche Qualität.</p></div> <div class="cta svelte-pz9g48"><p class="final-text svelte-pz9g48">Vom Wissen zum Werkzeug.</p> <div class="cta-links svelte-pz9g48"><a href="https://github.com/DigitalHumanitiesCraft/CorrespExplorer" target="_blank" rel="noopener" class="cta-btn svelte-pz9g48">GitHub Repository</a> <a href="https://dhcraft.org/CorrespExplorer" target="_blank" rel="noopener" class="cta-btn cta-btn-secondary svelte-pz9g48">Live Demo</a></div></div></div>`);function rs(n){var e=is(),t=s(e),r=a(t,2),l=a(r,2);g(1,t,()=>_,()=>({duration:400})),g(1,r,()=>F,()=>({y:20,duration:500,delay:200})),g(1,l,()=>Ge,()=>({duration:400,delay:600})),b(n,e)}var as=y('<div class="scroll-indicator svelte-1n46o8q" aria-hidden="true"><div class="scroll-arrow svelte-1n46o8q"></div> <span class="scroll-text svelte-1n46o8q">Scroll</span></div>'),os=y('<div class="background-layer svelte-1n46o8q"></div> <!> <main class="scroll-container svelte-1n46o8q"><!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!></main> <!>',1);function ls(n,e){N(e,!1);const t=()=>de(he,"$currentPhase",c),r=()=>de(be,"$currentStep",c),l=()=>de(Tt,"$globalProgress",c),d=()=>de(Ne,"$isDeepDiveOpen",c),o=()=>de(Oe,"$currentDeepDive",c),[c,m]=We(),v=te();Ae(()=>(Ft(),setTimeout(()=>{Ve()},300),window.addEventListener("hashchange",Ve),()=>window.removeEventListener("hashchange",Ve)));let u=te(!0);function p(f){f.target.scrollTop>100&&j(u,!1)}function h(f,I,me){return f+(I-f)*me}fe(()=>(t(),r()),()=>{typeof window<"u"&&qt(t(),r())}),fe(()=>l(),()=>{j(v,(()=>{const f=l();let I;f<.2?I=0:f<.5?I=(f-.2)/.3:f<.85?I=1:I=1-(f-.85)/.15*.3;const me=Math.round(h(96,191,I)),Me=Math.round(h(125,91,I)),Te=Math.round(h(139,62,I)),Fe=.04+f*.12,Y=30+f*40,ee=50-Math.sin(f*Math.PI)*20,le=70-f*20;return`radial-gradient(ellipse at ${Y}% ${ee}%, rgba(${me}, ${Me}, ${Te}, ${Fe}) 0%, rgba(232, 232, 232, 1) ${le}%)`})())}),$e(),W();var k=os(),w=pe(k),x=a(w,2);Qt(x,{});var M=a(x,2),E=s(M);Gt(E,{});var D=a(E,2);U(D,{id:"intro-definition",phaseIndex:0,stepIndex:0,children:(f,I)=>{cn(f)},$$slots:{default:!0}});var z=a(D,2);U(z,{id:"intro-kernprinzip",phaseIndex:0,stepIndex:1,children:(f,I)=>{un(f,{})},$$slots:{default:!0}});var L=a(z,2);U(L,{id:"intro-methodik",phaseIndex:0,stepIndex:2,children:(f,I)=>{gn(f,{})},$$slots:{default:!0}});var A=a(L,2);U(A,{id:"intro-phasen",phaseIndex:0,stepIndex:3,children:(f,I)=>{kn(f,{})},$$slots:{default:!0}});var q=a(A,2);U(q,{id:"phase1-titel",phaseIndex:1,stepIndex:0,children:(f,I)=>{xn(f,{})},$$slots:{default:!0}});var P=a(q,2);U(P,{id:"phase1-rohdaten",phaseIndex:1,stepIndex:1,children:(f,I)=>{_n(f,{})},$$slots:{default:!0}});var R=a(P,2);U(R,{id:"phase1-sammlung",phaseIndex:1,stepIndex:2,children:(f,I)=>{Ln(f,{})},$$slots:{default:!0}});var S=a(R,2);U(S,{id:"phase2-exploration",phaseIndex:2,stepIndex:0,children:(f,I)=>{In(f)},$$slots:{default:!0}});var B=a(S,2);U(B,{id:"phase3-titel",phaseIndex:3,stepIndex:0,children:(f,I)=>{$n(f)},$$slots:{default:!0}});var H=a(B,2);U(H,{id:"phase3-dokumente",phaseIndex:3,stepIndex:1,children:(f,I)=>{Tn(f)},$$slots:{default:!0}});var se=a(H,2);U(se,{id:"phase3-vault",phaseIndex:3,stepIndex:2,children:(f,I)=>{qn(f,{})},$$slots:{default:!0}});var G=a(se,2);U(G,{id:"phase4-titel",phaseIndex:4,stepIndex:0,children:(f,I)=>{Rn(f)},$$slots:{default:!0}});var K=a(G,2);U(K,{id:"phase4-iteration",phaseIndex:4,stepIndex:1,children:(f,I)=>{Gn(f,{})},$$slots:{default:!0}});var Z=a(K,2);U(Z,{id:"phase4-vault-update",phaseIndex:4,stepIndex:2,children:(f,I)=>{Un(f)},$$slots:{default:!0}});var ve=a(Z,2);U(ve,{id:"outro-beispiele",phaseIndex:5,stepIndex:0,children:(f,I)=>{Jn(f,{})},$$slots:{default:!0}});var ae=a(ve,2);U(ae,{id:"outro-diskussion",phaseIndex:5,stepIndex:1,children:(f,I)=>{ss(f,{})},$$slots:{default:!0}});var ge=a(ae,2);U(ge,{id:"outro-zusammenfassung",phaseIndex:5,stepIndex:2,children:(f,I)=>{rs(f)},$$slots:{default:!0}});var ze=a(ge,2);{var oe=f=>{var I=as();b(f,I)};Q(ze,f=>{i(u)&&f(oe)})}var ke=a(M,2);{let f=ye(()=>(o(),T(()=>o()?.title||""))),I=ye(()=>(o(),T(()=>o()?.content||"")));tn(ke,{get isOpen(){return d()},get title(){return i(f)},get content(){return i(I)},$$events:{close(...me){Rt?.apply(this,me)}}})}$(()=>we(w,`background: ${i(v)??""};`)),J("scroll",M,p),b(n,k),O(),m()}zt(ls,{target:document.getElementById("app")});
