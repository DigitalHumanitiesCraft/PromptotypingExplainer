import{a as vt,E as pt,B as ut,b as ht,e as Ye,u as L,T as gt,w as et,i as mt,q as tt,n as De,s as ft,c as bt,d as kt,r as yt,S as xt,f as nt,g as Me,l as wt,h as Dt,j as ze,k as $e,m as O,o as x,p as ce,t as b,v as H,x as We,y as U,z as ve,A as o,C as a,D as ke,F as l,G as C,H as ye,I as F,J as S,K as Q,L as ae,M as _t,N as ge,O as Ce,P as ee,Q as j,R as de,U as Y,V as Ie,W as _e,$ as zt,X as Ve,Y as $t,Z as Le,_ as Et}from"./legacy-BZ7emSFR.js";import{s as xe}from"./style-Dx0Y3Reo.js";import{i as J}from"./if-Da4sbcRA.js";import{h as Pt}from"./html-CKdVyEZ3.js";import{g as Mt}from"./glossary-DgCjyAp8.js";import{g as He}from"./bibliography-Bor_VxGP.js";function st(n){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const It=()=>performance.now(),le={tick:n=>requestAnimationFrame(n),now:()=>It(),tasks:new Set};function it(){const n=le.now();le.tasks.forEach(e=>{e.c(n)||(le.tasks.delete(e),e.f())}),le.tasks.size!==0&&le.tick(it)}function Lt(n){let e;return le.tasks.size===0&&le.tick(it),{promise:new Promise(t=>{le.tasks.add(e={c:n,f:t})}),abort(){le.tasks.delete(e)}}}function Pe(n,e){et(()=>{n.dispatchEvent(new CustomEvent(e))})}function Ct(n){if(n==="float")return"cssFloat";if(n==="offset")return"cssOffset";if(n.startsWith("--"))return n;const e=n.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function Ue(n){const e={},t=n.split(";");for(const s of t){const[r,d]=s.split(":");if(!r||d===void 0)break;const i=Ct(r.trim());e[i]=d.trim()}return e}const St=n=>n;function m(n,e,t,s){var r=(n&bt)!==0,d=(n&kt)!==0,i=r&&d,c=(n&gt)!==0,u=i?"both":r?"in":"out",h,v=e.inert,g=e.style.overflow,p,k;function w(){return et(()=>h??=t()(e,s?.()??{},{direction:u}))}var y={is_global:c,in(){if(e.inert=v,!r){k?.abort(),k?.reset?.();return}d||p?.abort(),Pe(e,"introstart"),p=je(e,w(),k,1,()=>{Pe(e,"introend"),p?.abort(),p=h=void 0,e.style.overflow=g})},out($){if(!d){$?.(),h=void 0;return}e.inert=!0,Pe(e,"outrostart"),k=je(e,w(),p,0,()=>{Pe(e,"outroend"),$?.()})},stop:()=>{p?.abort(),k?.abort()}},P=vt;if((P.nodes.t??=[]).push(y),r&&ft){var I=c;if(!I){for(var M=P.parent;M&&(M.f&pt)!==0;)for(;(M=M.parent)&&(M.f&ut)===0;);I=!M||(M.f&ht)!==0}I&&Ye(()=>{L(()=>y.in())})}}function je(n,e,t,s,r){var d=s===1;if(mt(e)){var i,c=!1;return tt(()=>{if(!c){var P=e({direction:d?"in":"out"});i=je(n,P,t,s,r)}}),{abort:()=>{c=!0,i?.abort()},deactivate:()=>i.deactivate(),reset:()=>i.reset(),t:()=>i.t()}}if(t?.deactivate(),!e?.duration)return r(),{abort:De,deactivate:De,reset:De,t:()=>s};const{delay:u=0,css:h,tick:v,easing:g=St}=e;var p=[];if(d&&t===void 0&&(v&&v(0,1),h)){var k=Ue(h(0,1));p.push(k,k)}var w=()=>1-s,y=n.animate(p,{duration:u,fill:"forwards"});return y.onfinish=()=>{y.cancel();var P=t?.t()??1-s;t?.abort();var I=s-P,M=e.duration*Math.abs(I),$=[];if(M>0){var A=!1;if(h)for(var K=Math.ceil(M/16.666666666666668),Z=0;Z<=K;Z+=1){var E=P+I*g(Z/K),R=Ue(h(E,1-E));$.push(R),A||=R.overflow==="hidden"}A&&(n.style.overflow="hidden"),w=()=>{var _=y.currentTime;return P+I*g(_/M)},v&&Lt(()=>{if(y.playState!=="running")return!1;var _=w();return v(_,1-_),!0})}y=n.animate($,{duration:M,fill:"forwards"}),y.onfinish=()=>{w=()=>s,v?.(s,1-s),r()}},{abort:()=>{y&&(y.cancel(),y.effect=null,y.onfinish=De)},deactivate:()=>{r=De},reset:()=>{s===0&&v?.(1,0)},t:()=>w()}}function Ge(n,e){return n===e||n?.[xt]===e}function Ke(n={},e,t,s){return Ye(()=>{var r,d;return yt(()=>{r=d,d=[],L(()=>{n!==t(...d)&&(e(n,...d),r&&Ge(t(...r),n)&&e(null,...r))})}),()=>{tt(()=>{d&&Ge(t(...d),n)&&e(null,...d)})}}),n}function At(n){return function(...e){var t=e[0];return t.stopPropagation(),n?.apply(this,e)}}function Tt(n,e){var t=n.$$events?.[e.type],s=nt(t)?t.slice():t==null?[]:[t];for(var r of s)r.call(this,e)}function Se(n){Me===null&&st(),wt&&Me.l!==null?Ft(Me).m.push(n):Dt(()=>{const e=L(n);if(typeof e=="function")return e})}function qt(n,e,{bubbles:t=!1,cancelable:s=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:s})}function rt(){const n=Me;return n===null&&st(),(e,t,s)=>{const r=n.s.$$events?.[e];if(r){const d=nt(r)?r.slice():[r],i=qt(e,t,s);for(const c of d)c.call(n.x,i);return!i.defaultPrevented}return!0}}function Ft(n){var e=n.l;return e.u??={a:[],b:[],m:[]}}const pe=$e(0),me=$e(0),N=[{id:"intro",label:"Promptotyping",number:null,subtitle:"Einführung",steps:[{id:"definition",label:"Definition"},{id:"kernprinzip",label:"Kernprinzip"},{id:"methodik",label:"Methodik"},{id:"phasen",label:"Phasen"}]},{id:"phase1",label:"Preparation",number:1,subtitle:"Materialsammlung",steps:[{id:"titel",label:"Übersicht"},{id:"rohdaten",label:"Rohdaten"},{id:"sammlung",label:"Sammlung"}]},{id:"phase2",label:"Exploration",number:2,subtitle:"Epistemische Spielwiese",steps:[{id:"exploration",label:"Exploration"}]},{id:"phase3",label:"Destillation",number:3,subtitle:"Vault (.md Files)",steps:[{id:"titel",label:"Übersicht"},{id:"dokumente",label:".md Dokumente"},{id:"vault",label:"Vault"}]},{id:"phase4",label:"Implementation",number:4,subtitle:"Prototype + Vault-Update",steps:[{id:"titel",label:"Übersicht"},{id:"iteration",label:"Iteration"},{id:"vault-update",label:"Vault-Update"}]},{id:"outro",label:"Praxis",number:null,subtitle:"Case Studies",steps:[{id:"beispiele",label:"Beispiele"},{id:"zusammenfassung",label:"Zusammenfassung"}]}],Vt=N.reduce((n,e)=>n+e.steps.length,0),jt=ze([pe,me],([n,e])=>{let t=0;for(let s=0;s<n;s++)t+=N[s].steps.length;return t+e}),Kt=ze(jt,n=>n/(Vt-1));ze([pe,me],([n,e])=>{const t=N[n];return!t||t.steps.length<=1?0:e/(t.steps.length-1)});ze(pe,n=>N[n]||N[0]);ze([pe,me],([n,e])=>{const t=N[n];return t?t.steps[e]||t.steps[0]:null});N.map((n,e)=>({id:n.id,label:n.label,steps:n.steps.map(t=>t.id)}));const Ze=$e(!1);function Rt(){if(typeof window<"u"){const n=window.matchMedia("(prefers-reduced-motion: reduce)");Ze.set(n.matches),n.addEventListener("change",e=>{Ze.set(e.matches)})}}function Xe(n){if(typeof window>"u")return;const e=document.getElementById(n);e&&e.scrollIntoView({behavior:"smooth"})}function Fe(){if(typeof window>"u")return;const n=window.location.hash.slice(1);if(!n)return;const e=document.getElementById(n);if(e){setTimeout(()=>{e.scrollIntoView({behavior:"smooth"})},100);return}const t=n.split("-"),s=t[0],r=t.slice(1).join("-"),d=N.findIndex(u=>u.id===s);if(d===-1)return;const i=N[d];let c=s;r?i.steps.some(h=>h.id===r)&&(c=`${s}-${r}`):c=`${s}-${i.steps[0].id}`,setTimeout(()=>{const u=document.getElementById(c);u&&u.scrollIntoView({behavior:"smooth"})},100)}let Qe="";function Wt(n,e){if(typeof window>"u")return;const t=N[n];if(!t)return;const s=t.steps[e],r=s?`${t.id}-${s.id}`:t.id;r!==Qe&&(Qe=r,history.replaceState(null,"",`#${r}`))}const Bt={"system-1-42":{id:"system-1-42",title:"System 1.42 – Wie LLMs funktionieren",content:`
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
    `}},Be=$e(null),Ne=$e(!1);function Ae(n){const e=Bt[n];e?(Be.set(e),Ne.set(!0),document.body.style.overflow="hidden"):console.warn(`Deep Dive not found: ${n}`)}function Nt(){Ne.set(!1),setTimeout(()=>{Be.set(null)},300),document.body.style.overflow=""}var Ot=_t('<svg class="check-icon svelte-baj8t4" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),Ht=x('<span class="phase-number svelte-baj8t4"> </span>'),Ut=x('<button><span class="step-dot-marker svelte-baj8t4"></span> <span class="step-label svelte-baj8t4"> </span></button>'),Gt=x('<div class="sub-steps svelte-baj8t4"></div>'),Zt=x('<li class="phase-item svelte-baj8t4"><button><span class="dot svelte-baj8t4"><!></span> <span class="label-container svelte-baj8t4"><span class="label svelte-baj8t4"> </span> <!></span></button> <!></li>'),Xt=x('<nav class="progress-indicator svelte-baj8t4" aria-label="Phasen-Navigation"><ul class="svelte-baj8t4"></ul></nav>');function Qt(n,e){U(e,!1);const t=()=>ae(pe,"$currentPhase",r),s=()=>ae(me,"$currentStep",r),[r,d]=We();function i(g){const p=N[g],k=`${p.id}-${p.steps[0].id}`;Xe(k)}function c(g,p){const k=N[g],w=k.steps[p],y=`${k.id}-${w.id}`;Xe(y)}function u(g,p){(g.key==="Enter"||g.key===" ")&&(g.preventDefault(),i(p))}O();var h=Xt(),v=o(h);ce(v,5,()=>N,ve,(g,p,k)=>{const w=ke(()=>t()===k),y=ke(()=>t()>k);var P=Zt(),I=o(P);let M;var $=o(I),A=o($);{var K=V=>{var T=Ot();b(V,T)};J(A,V=>{a(y)&&V(K)})}var Z=l($,2),E=o(Z),R=o(E),_=l(E,2);{var W=V=>{var T=Ht(),G=o(T);C(()=>S(G,`Phase ${a(p).number??""}`)),b(V,T)};J(_,V=>{a(p).number&&V(W)})}var X=l(I,2);{var se=V=>{var T=Gt();ce(T,5,()=>a(p).steps,ve,(G,ue,f)=>{const z=ke(()=>s()===f),ie=ke(()=>s()>f);var re=Ut();let fe;var be=l(o(re),2),we=o(be);C(()=>{fe=ye(re,1,"step-dot svelte-baj8t4",null,fe,{active:a(z),completed:a(ie)}),F(re,"aria-label",`Zu ${a(ue).label??""} springen`),S(we,a(ue).label)}),Q("click",re,()=>c(k,f)),b(G,re)}),b(V,T)};J(X,V=>{a(w)&&V(se)})}C(()=>{M=ye(I,1,"progress-dot svelte-baj8t4",null,M,{active:a(w),completed:a(y)}),F(I,"aria-label",`Zu ${a(p).label??""} springen`),F(I,"aria-current",a(w)?"step":void 0),S(R,a(p).label)}),Q("click",I,()=>i(k)),Q("keydown",I,V=>u(V,k)),b(g,P)}),b(n,h),H(),d()}var Jt=x('<span class="phase-number svelte-1yliotu"> </span>'),Yt=x('<span class="phase-tag svelte-1yliotu"> </span>'),en=x('<span class="step-separator svelte-1yliotu">—</span> <span class="current-step svelte-1yliotu"> </span>',1),tn=x('<header class="phase-header svelte-1yliotu"><div class="header-content svelte-1yliotu"><div class="phase-badge svelte-1yliotu"><!></div> <div class="title-group svelte-1yliotu"><h2 class="phase-title svelte-1yliotu"> </h2> <!></div> <nav class="header-nav svelte-1yliotu"><a href="/PromptotypingExplainer/about.html" class="nav-link svelte-1yliotu">About</a> <a href="/PromptotypingExplainer/vault.html" class="nav-link svelte-1yliotu">Vault</a> <a href="/PromptotypingExplainer/glossar.html" class="nav-link svelte-1yliotu">Glossar</a> <a href="/PromptotypingExplainer/bibliographie.html" class="nav-link svelte-1yliotu">Bibliographie</a></nav></div></header>');function nn(n,e){U(e,!1);const t=()=>ae(pe,"$currentPhase",r),s=()=>ae(me,"$currentStep",r),[r,d]=We(),i=ee(),c=ee();ge(()=>t(),()=>{j(i,N[t()]||N[0])}),ge(()=>(a(i),s()),()=>{j(c,a(i).steps[s()]||a(i).steps[0])}),Ce(),O();var u=tn(),h=o(u),v=o(h),g=o(v);{var p=$=>{var A=Jt(),K=o(A);C(()=>S(K,`Phase ${a(i),L(()=>a(i).number)??""}`)),b($,A)},k=$=>{var A=Yt(),K=o(A);C(()=>S(K,(a(i),L(()=>a(i).subtitle)))),b($,A)};J(g,$=>{a(i),L(()=>a(i).number)?$(p):$(k,!1)})}var w=l(v,2),y=o(w),P=o(y),I=l(y,2);{var M=$=>{var A=en(),K=l(de(A),2),Z=o(K);C(()=>S(Z,(a(c),L(()=>a(c).label)))),b($,A)};J(I,$=>{a(c)&&$(M)})}C(()=>S(P,(a(i),L(()=>a(i).label)))),b(n,u),H(),d()}var sn=x('<section class="step svelte-zv7veq"><div class="step-content svelte-zv7veq"><!></div></section>');function B(n,e){U(e,!1);let t=Y(e,"id",8),s=Y(e,"phaseIndex",8),r=Y(e,"stepIndex",8),d=ee();Se(()=>{const h=new IntersectionObserver(v=>{v.forEach(g=>{g.isIntersecting&&g.intersectionRatio>.5&&(me.set(r()),pe.set(s()))})},{threshold:.5,rootMargin:"-10% 0px -10% 0px"});return h.observe(a(d)),()=>h.disconnect()}),O();var i=sn(),c=o(i),u=o(c);Ie(u,e,"default",{},null),Ke(i,h=>j(d,h),()=>a(d)),C(()=>{F(i,"id",t()),F(i,"data-phase",s()),F(i,"data-step",r())}),b(n,i),H()}const rn=n=>n;function at(n){const e=n-1;return e*e*e+1}function Je(n){const e=typeof n=="string"&&n.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[n,"px"]}function D(n,{delay:e=0,duration:t=400,easing:s=rn}={}){const r=+getComputedStyle(n).opacity;return{delay:e,duration:t,easing:s,css:d=>`opacity: ${d*r}`}}function q(n,{delay:e=0,duration:t=400,easing:s=at,x:r=0,y:d=0,opacity:i=0}={}){const c=getComputedStyle(n),u=+c.opacity,h=c.transform==="none"?"":c.transform,v=u*(1-i),[g,p]=Je(r),[k,w]=Je(d);return{delay:e,duration:t,easing:s,css:(y,P)=>`
			transform: ${h} translate(${(1-y)*g}${p}, ${(1-y)*k}${w});
			opacity: ${u-v*P}`}}function Oe(n,{delay:e=0,duration:t=400,easing:s=at,start:r=0,opacity:d=0}={}){const i=getComputedStyle(n),c=+i.opacity,u=i.transform==="none"?"":i.transform,h=1-r,v=c*(1-d);return{delay:e,duration:t,easing:s,css:(g,p)=>`
			transform: ${u} scale(${1-h*p});
			opacity: ${c-v*p}
		`}}var an=x('<div class="deep-dive-overlay svelte-tewam" role="dialog" aria-modal="true" aria-labelledby="deep-dive-title" tabindex="-1"><div class="deep-dive-panel svelte-tewam"><header class="panel-header svelte-tewam"><div class="header-indicator svelte-tewam"><span class="branch-icon svelte-tewam">←</span> <span class="branch-label svelte-tewam">Deep Dive</span></div> <h2 id="deep-dive-title" class="svelte-tewam"> </h2> <button class="close-button svelte-tewam" aria-label="Schließen">×</button></header> <div class="panel-content svelte-tewam"><!></div> <footer class="panel-footer svelte-tewam"><button class="back-button svelte-tewam">→ Zurück zum Hauptpfad</button></footer></div></div>');function ln(n,e){U(e,!1);let t=Y(e,"isOpen",8,!1),s=Y(e,"title",8,""),r=Y(e,"content",8,null);const d=rt();function i(){d("close")}function c(p){p.key==="Escape"&&i()}function u(p){p.target===p.currentTarget&&i()}O();var h=_e();Q("keydown",zt,c);var v=de(h);{var g=p=>{var k=an(),w=o(k),y=o(w),P=l(o(y),2),I=o(P),M=l(P,2),$=l(y,2),A=o($);{var K=_=>{var W=_e(),X=de(W);Pt(X,r),b(_,W)},Z=_=>{var W=_e(),X=de(W);Ie(X,e,"default",{},null),b(_,W)};J(A,_=>{r()?_(K):_(Z,!1)})}var E=l($,2),R=o(E);C(()=>S(I,s())),Q("click",M,i),Q("click",R,i),m(3,w,()=>q,()=>({x:-300,duration:300})),m(3,k,()=>D,()=>({duration:200})),Q("click",k,u),b(p,k)};J(v,p=>{t()&&p(g)})}b(n,h),H()}var on=x('<span class="popover-en svelte-l7i3p6"> </span>'),dn=x('<span class="tag svelte-l7i3p6"> </span>'),cn=x('<a class="popover-source svelte-l7i3p6"> </a>'),vn=x('<div role="tooltip"><div class="caret svelte-l7i3p6"></div> <div class="popover-header svelte-l7i3p6"><span class="popover-term svelte-l7i3p6"> </span> <!></div> <p class="popover-definition svelte-l7i3p6"> </p> <div class="popover-footer svelte-l7i3p6"><div class="popover-tags svelte-l7i3p6"></div> <!></div></div>'),pn=x('<span role="button" tabindex="0"><!></span> <!>',1);function Re(n,e){U(e,!1);const t=ee(),s=ee();let r=Y(e,"id",8),d=Y(e,"inline",8,!0),i=ee(!1),c=ee(),u=ee(),h,v=ee({top:0,left:0,placement:"above"});async function g(){if(await $t(),!a(c))return;const E=a(c).getBoundingClientRect(),R=200,_=8;let W,X,se="above";E.top>R+_?(W=E.top-_,se="above"):(W=E.bottom+_,se="below"),X=E.left+E.width/2,j(v,{top:W,left:X,placement:se})}function p(){h=setTimeout(()=>{j(i,!0),g()},300)}function k(){clearTimeout(h),j(i,!1)}function w(E){E.preventDefault(),E.stopPropagation(),clearTimeout(h),j(i,!a(i)),a(i)&&g()}function y(E){a(i)&&a(c)&&!a(c).contains(E.target)&&a(u)&&!a(u).contains(E.target)&&j(i,!1)}function P(){a(i)&&j(i,!1)}function I(E){E.key==="Escape"&&a(i)&&j(i,!1)}Se(()=>(document.addEventListener("click",y),window.addEventListener("scroll",P,{passive:!0}),window.addEventListener("keydown",I),window.addEventListener("resize",g),()=>{document.removeEventListener("click",y),window.removeEventListener("scroll",P),window.removeEventListener("keydown",I),window.removeEventListener("resize",g),clearTimeout(h)}));const M={prompting:"#3B82F6","ai-engineering":"#8B5CF6",fundamentals:"#607D8B",architecture:"#059669",safety:"#DC2626",training:"#D97706",agents:"#EC4899",evaluation:"#6366F1",methodology:"#14B8A6",theory:"#8B5CF6"};ge(()=>Ve(r()),()=>{j(t,Mt[r()])}),ge(()=>(a(t),He),()=>{j(s,a(t)?.source?He(a(t).source):null)}),Ce(),O();var $=_e(),A=de($);{var K=E=>{var R=pn(),_=de(R);let W;var X=o(_);Ie(X,e,"default",{},T=>{var G=Le();C(()=>S(G,(a(t),L(()=>a(t).term)))),b(T,G)}),Ke(_,T=>j(c,T),()=>a(c));var se=l(_,2);{var V=T=>{var G=vn();let ue;var f=l(o(G),2),z=o(f),ie=o(z),re=l(z,2);{var fe=te=>{var ne=on(),he=o(ne);C(()=>S(he,`(${a(t),L(()=>a(t).en)??""})`)),b(te,ne)};J(re,te=>{a(t),L(()=>a(t).en&&a(t).en!==a(t).term)&&te(fe)})}var be=l(f,2),we=o(be),Te=l(be,2),Ee=o(Te);ce(Ee,5,()=>(a(t),L(()=>a(t).tags)),ve,(te,ne)=>{var he=dn(),qe=o(he);C(()=>{xe(he,`background-color: ${a(ne),L(()=>M[a(ne)]||"#607D8B")??""}`),S(qe,a(ne))}),b(te,he)});var dt=l(Ee,2);{var ct=te=>{var ne=cn(),he=o(ne);C(()=>{F(ne,"href",`#bibliographie-${a(s),L(()=>a(s)?.id||"")??""}`),S(he,(a(t),L(()=>a(t).source)))}),Q("click",ne,At(function(qe){Tt.call(this,e,qe)})),b(te,ne)};J(dt,te=>{a(t),L(()=>a(t).source)&&te(ct)})}Ke(G,te=>j(u,te),()=>a(u)),C(()=>{F(G,"id",`tooltip-${r()??""}`),ue=ye(G,1,"glossary-popover svelte-l7i3p6",null,ue,{above:a(v).placement==="above",below:a(v).placement==="below"}),xe(G,`top: ${a(v),L(()=>a(v).top)??""}px; left: ${a(v),L(()=>a(v).left)??""}px;`),S(ie,(a(t),L(()=>a(t).term))),S(we,(a(t),L(()=>a(t).definition)))}),b(T,G)};J(se,T=>{a(i)&&T(V)})}C(()=>{W=ye(_,1,"glossary-term svelte-l7i3p6",null,W,{inline:d(),active:a(i)}),F(_,"aria-describedby",a(i)?`tooltip-${r()}`:void 0),F(_,"aria-expanded",a(i))}),Q("click",_,w),Q("mouseenter",_,p),Q("mouseleave",_,k),Q("keydown",_,T=>T.key==="Enter"&&w(T)),b(E,R)},Z=E=>{var R=_e(),_=de(R);Ie(_,e,"default",{},null),b(E,R)};J(A,E=>{a(t)?E(K):E(Z,!1)})}b(n,$),H()}const un="/PromptotypingExplainer/assets/promptotyping-logo-ey7SXXm7.png";var hn=x(`<div class="intro-definition svelte-10mg3y6"><div class="title-block svelte-10mg3y6"><img alt="Promptotyping Logo" class="logo svelte-10mg3y6"/> <h1 class="promptotyping-title svelte-10mg3y6">Promptotyping</h1> <p class="subtitle svelte-10mg3y6">Strukturiertes Context Engineering mit Vibe-Coding-Elementen</p></div> <div class="definition-block svelte-10mg3y6"><p class="definition svelte-10mg3y6"><span class="promptotyping">Promptotyping</span> ist eine Methode zur systematischen Entwicklung funktionaler
      Prototypen durch strukturierte Interaktion mit <!>.
      Sie kombiniert die Intuition des "Vibe Codings" mit einem systematischen Framework zur
      Wissensaufbereitung, ein <!>-Prozess,
      der domänenspezifisches Wissen für LLMs optimal strukturiert.</p> <p class="etymology svelte-10mg3y6">Der Name setzt sich zusammen aus <em class="svelte-10mg3y6">Prompt</em> (die Eingabe an ein LLM) und <em class="svelte-10mg3y6">Prototyping</em> (iterative Entwicklung von Funktionsmustern).</p> <p class="context-addendum svelte-10mg3y6">Obwohl die Methodik ihren Ursprung in den Digital Humanities hat, sind ihre Mechanismen
      universell auf datenintensive Forschungsprozesse übertragbar, darunter statistische Analysen,
      Datenvisualisierung und explorative Analysen in verschiedensten Disziplinen.</p></div></div>`);function gn(n){var e=hn(),t=o(e),s=o(t),r=l(t,2),d=o(r),i=l(o(d),2);Re(i,{id:"llm",children:(u,h)=>{var v=Le("Large Language Models");b(u,v)},$$slots:{default:!0}});var c=l(i,2);Re(c,{id:"context-engineering",children:(u,h)=>{var v=Le("Context Engineering");b(u,v)},$$slots:{default:!0}}),C(()=>F(s,"src",un)),b(n,e)}var mn=x('<button><span class="trigger-icon svelte-wjh6ga">←</span> <span class="trigger-label svelte-wjh6ga"> </span> <span class="trigger-hint svelte-wjh6ga">Deep Dive</span></button>');function oe(n,e){U(e,!1);let t=Y(e,"label",8,"Mehr erfahren"),s=Y(e,"deepDiveId",8,""),r=Y(e,"variant",8,"inline");const d=rt();function i(){d("open",{id:s()})}O();var c=mn(),u=l(o(c),2),h=o(u);C(()=>{ye(c,1,`deep-dive-trigger ${r()??""}`,"svelte-wjh6ga"),F(c,"aria-label",`Deep Dive öffnen: ${t()??""}`),S(h,t())}),Q("click",c,i),b(n,c),H()}var fn=x(`<div class="intro-kernprinzip svelte-jio7ez"><div class="content svelte-jio7ez"><h3 class="svelte-jio7ez">Co-Intelligence & "Strange New Minds"</h3> <div class="main-layout svelte-jio7ez"><div class="text-card svelte-jio7ez"><p class="svelte-jio7ez">LLMs sind <em class="svelte-jio7ez">"Strange New Minds"</em> (Summerfield, 2025), weder reine Werkzeuge
          noch echte Intelligenz. Sie sind statistische Mustermaschinen, die überzeugende
          Outputs produzieren, ohne deren Wahrheit validieren zu können. Diese "halluzinierenden
          Reasoner" erfordern externe Verifikation durch Domänenexpert:innen.</p> <p class="svelte-jio7ez"><span class="promptotyping svelte-jio7ez">Promptotyping</span> nutzt das Konzept der <strong class="svelte-jio7ez">Co-Intelligence</strong> nach Ethan Mollick (2024)
          für die produktive Zusammenarbeit zwischen menschlicher Expertise und KI-Fähigkeiten.
          Dabei wechseln wir zwischen zwei Modi. <strong class="svelte-jio7ez">Centaur-Arbeit</strong> mit klarer Aufgabenteilung
          eignet sich für strukturierte Phasen wie die Dokumenterstellung. <strong class="svelte-jio7ez">Cyborg-Arbeit</strong> mit fließender Zusammenarbeit auf Satzebene ist charakteristisch für explorative Phasen
          und kreative Iteration.</p> <p class="learn-more svelte-jio7ez">Mehr über die theoretischen Grundlagen von LLMs in der <a href="https://chpollin.github.io/llmdh/" target="_blank" rel="noopener noreferrer" class="svelte-jio7ez">LLM Summer School for DH</a>.</p></div></div> <div class="deep-dive-triggers svelte-jio7ez"><!> <!></div></div></div>`);function bn(n,e){U(e,!1);function t(u){Ae(u.detail.id)}O();var s=fn(),r=o(s),d=l(o(r),4),i=o(d);oe(i,{label:"Co-Intelligence",deepDiveId:"co-intelligence",$$events:{open:t}});var c=l(i,2);oe(c,{label:"System 1.42 – LLM-Grundlagen",deepDiveId:"system-1-42",$$events:{open:t}}),b(n,s),H()}var kn=x(`<div class="intro-methodik svelte-p6qtke"><div class="content svelte-p6qtke"><h3 class="svelte-p6qtke">Critical Expert in the Loop</h3> <div class="explanation svelte-p6qtke"><p class="svelte-p6qtke">Ein zentrales Prinzip von Promptotyping: <strong class="svelte-p6qtke">Domänenexpert:innen bleiben unverzichtbar</strong>.
        LLMs können technisch korrekte, aber fachlich inadäquate Lösungen produzieren. Nur Expert:innen
        erkennen, ob eine Visualisierung historisch sinnvoll ist oder ob Kategorisierungen dem
        Forschungsgegenstand gerecht werden.</p> <p class="vibe-coding-note svelte-p6qtke"><strong class="svelte-p6qtke">Verhältnis zu Vibe Coding</strong> Promptotyping ist kein Gegenentwurf zu Vibe Coding,
        sondern gibt ihm Struktur für Forschungskontexte. Die intuitive, explorative Arbeitsweise
        bleibt erhalten, ergänzt durch systematische Dokumentation, die <!> verhindert und die Informationsdichte maximiert.</p></div> <div class="method-cards svelte-p6qtke"><div class="method-card svelte-p6qtke"><div class="card-icon svelte-p6qtke"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="svelte-p6qtke"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14,2 14,8 20,8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg></div> <h4 class="svelte-p6qtke">Vault-Dokumentation</h4> <p class="svelte-p6qtke">DATA.md, REQUIREMENTS.md, CONTEXT.md – strukturiertes Wissen als LLM-Input</p></div> <div class="method-card svelte-p6qtke"><div class="card-icon svelte-p6qtke"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="svelte-p6qtke"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg></div> <h4 class="svelte-p6qtke">Iterative Updates</h4> <p class="svelte-p6qtke">Der Vault wächst mit jeder Iteration – neues Wissen fließt zurück</p></div> <div class="method-card svelte-p6qtke"><div class="card-icon svelte-p6qtke"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="svelte-p6qtke"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div> <h4 class="svelte-p6qtke">Expert Validation</h4> <p class="svelte-p6qtke">Domänenexpert:innen validieren jeden Output kritisch</p></div></div> <div class="deep-dive-triggers svelte-p6qtke"><!> <!> <!> <!></div></div></div>`);function yn(n,e){U(e,!1);function t(k){Ae(k.detail.id)}O();var s=kn(),r=o(s),d=l(o(r),2),i=l(o(d),2),c=l(o(i),2);Re(c,{id:"context-rot",children:(k,w)=>{var y=Le("Context Rot");b(k,y)},$$slots:{default:!0}});var u=l(d,4),h=o(u);oe(h,{label:"Critical Expert",deepDiveId:"critical-expert",$$events:{open:t}});var v=l(h,2);oe(v,{label:"Scholar-Centered Design",deepDiveId:"scholar-centered-design",$$events:{open:t}});var g=l(v,2);oe(g,{label:"Context Engineering",deepDiveId:"context-engineering",$$events:{open:t}});var p=l(g,2);oe(p,{label:"Grenzen & Limitationen",deepDiveId:"limitations",$$events:{open:t}}),b(n,s),H()}const xn="/PromptotypingExplainer/assets/promptotyping-overview-AcSHP9K_.png";var wn=x('<div class="phase-icon svelte-hawgxw"><div class="icon-circle svelte-hawgxw"> </div> <span class="icon-label svelte-hawgxw"> </span> <span class="icon-subtitle svelte-hawgxw"> </span></div>'),Dn=x('<div class="intro-phasen svelte-hawgxw"><div class="content svelte-hawgxw"><h3 class="svelte-hawgxw">Die vier Phasen</h3> <div class="phase-icons svelte-hawgxw"></div> <div class="overview-image svelte-hawgxw"><img alt="Promptotyping Workflow: Vorbereitung, Exploration, Destillation, Implementation" class="svelte-hawgxw"/></div></div></div>');function _n(n,e){U(e,!1);const t=N.filter(u=>u.number!==null);O();var s=Dn(),r=o(s),d=l(o(r),2);ce(d,5,()=>t,ve,(u,h)=>{var v=wn(),g=o(v),p=o(g),k=l(g,2),w=o(k),y=l(k,2),P=o(y);C(()=>{S(p,a(h).number),S(w,a(h).label),S(P,a(h).subtitle)}),b(u,v)});var i=l(d,2),c=o(i);C(()=>F(c,"src",xn)),b(n,s),H()}var zn=x(`<div class="phase1-titel svelte-k7vkqd"><header class="scene-header svelte-k7vkqd"><span class="phase-number svelte-k7vkqd">Phase 1</span> <h2 class="svelte-k7vkqd">Vorbereitung</h2> <p class="subtitle svelte-k7vkqd">Materialsammlung</p></header> <div class="content svelte-k7vkqd"><p class="svelte-k7vkqd">Die <strong class="svelte-k7vkqd">Preparation</strong>-Phase sammelt alle relevanten Rohmaterialien, darunter
      Forschungsdaten, Dokumentation zu Standards und Modellen,
      Forschungsfragen und Domänenwissen.</p> <p class="highlight svelte-k7vkqd">Diese Phase verhindert die unkritische Übernahme technischer Lösungen
      für wissenschaftliche Probleme und zwingt zur präzisen Artikulation der Projektziele.</p> <div class="deep-dive-row svelte-k7vkqd"><!> <!></div></div></div>`);function $n(n,e){U(e,!1);function t(h){Ae(h.detail.id)}O();var s=zn(),r=o(s),d=l(r,2),i=l(o(d),4),c=o(i);oe(c,{label:"Context Engineering",deepDiveId:"context-engineering",$$events:{open:t}});var u=l(c,2);oe(u,{label:"Critical Expert",deepDiveId:"critical-expert",$$events:{open:t}}),m(1,r,()=>q,()=>({y:-20,duration:500})),m(1,d,()=>D,()=>({delay:200,duration:400})),m(1,s,()=>D,()=>({duration:400})),b(n,s),H()}var En=x('<div class="document-icon svelte-119o94q" role="img"><svg viewBox="0 0 40 52" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-119o94q"><path d="M2 4C2 2.89543 2.89543 2 4 2H26L38 14V48C38 49.1046 37.1046 50 36 50H4C2.89543 50 2 49.1046 2 48V4Z" fill="white" stroke-width="2"></path><path d="M26 2V12C26 13.1046 26.8954 14 28 14H38" stroke-width="2"></path><text x="20" y="36" text-anchor="middle" font-size="10" font-weight="600" font-family="var(--font-mono)"> </text></svg></div>');function lt(n,e){U(e,!1);const t=ee();let s=Y(e,"type",8,"xml"),r=Y(e,"size",8,48);const d={xml:{color:"#607D8B",symbol:"</>"},pdf:{color:"#E53935",symbol:"PDF"},csv:{color:"#4CAF50",symbol:"|||"},notes:{color:"#FF9800",symbol:"≡"},md:{color:"#1A1A1A",symbol:"MD"}};ge(()=>Ve(s()),()=>{j(t,d[s()]||d.xml)}),Ce(),O();var i=En(),c=o(i),u=o(c),h=l(u),v=l(h),g=o(v);C(p=>{xe(i,`width: ${r()??""}px; height: ${r()*1.3}px;`),F(i,"aria-label",`${p??""} Dokument`),F(u,"stroke",(a(t),L(()=>a(t).color))),F(h,"stroke",(a(t),L(()=>a(t).color))),F(v,"fill",(a(t),L(()=>a(t).color))),S(g,(a(t),L(()=>a(t).symbol)))},[()=>(Ve(s()),L(()=>s().toUpperCase()))]),b(n,i),H()}const ot=[{id:"intro",title:"Promptotyping",subtitle:"Vom Wissen zum Werkzeug",question:"Wie wird aus Forschungsdaten ein funktionales Interface?"},{id:"phase1",number:1,title:"Vorbereitung",subtitle:"Materialsammlung",description:"Sammlung aller relevanten Materialien.",artifacts:[{type:"xml",label:"TEI/XML"},{type:"pdf",label:"Spezifikation"},{type:"csv",label:"Rohdaten"},{type:"notes",label:"Notizen"}]},{id:"phase2",number:2,title:"Exploration",subtitle:"Epistemische Spielwiese",description:"Freies Experimentieren mit dem Rohmaterial. Keine formalen Artefakte – die Erkenntnisse fließen in Phase 3."},{id:"phase3",number:3,title:"Destillation",subtitle:"Wissenskomprimierung",description:"Überführung in kompakte Markdown-Dokumente.",documents:[{name:"data.md",purpose:"Struktur und Semantik der Forschungsdaten"},{name:"user-story.md",purpose:"Anforderungen aus Forschungsperspektive"},{name:"context.md",purpose:"Relevantes Domänenwissen"}],closingText:"Destilliertes Wissen. Bereit für das LLM."},{id:"phase4",number:4,title:"Iterative Implementation",subtitle:"Iterative Entwicklung",description:"Der eigentliche Promptotyping-Dialog beginnt.",closingText:"Vom Wissen zum Werkzeug."}];var Pn=x('<div class="material-item svelte-17gbft8"><div class="icon-container svelte-17gbft8"><!></div> <span class="label svelte-17gbft8"> </span></div>'),Mn=x('<div class="phase1-rohdaten svelte-17gbft8"><h3 class="svelte-17gbft8">Rohmaterialien sammeln</h3> <p class="description svelte-17gbft8">Forschungsdaten in verschiedenen Formaten bilden die Grundlage</p> <div class="materials-cloud svelte-17gbft8"></div></div>');function In(n,e){U(e,!1);const t=ot[1].artifacts,s=[{x:-140,y:-70,delay:0},{x:130,y:-50,delay:100},{x:-110,y:70,delay:200},{x:150,y:60,delay:300}];O();var r=Mn(),d=o(r),i=l(d,2),c=l(i,2);ce(c,5,()=>t,ve,(u,h,v)=>{var g=Pn(),p=o(g),k=o(p);lt(k,{get type(){return a(h).type}});var w=l(p,2),y=o(w);C(()=>{xe(g,`--offset-x: ${s[v].x??""}px; --offset-y: ${s[v].y??""}px;`),S(y,a(h).label)}),m(1,w,()=>D,()=>({delay:500+s[v].delay})),m(1,g,()=>q,()=>({x:s[v].x>0?100:-100,y:-30,duration:500,delay:300+s[v].delay})),b(u,g)}),m(1,d,()=>D,()=>({duration:400})),m(1,i,()=>D,()=>({delay:150,duration:400})),b(n,r),H()}var Ln=x('<div class="icon-stacked svelte-6tqdd3"><!> <span class="label svelte-6tqdd3"> </span></div>'),Cn=x('<div class="phase1-sammlung svelte-6tqdd3"><h3 class="svelte-6tqdd3">Materialien gesammelt</h3> <div class="workspace svelte-6tqdd3"><div class="workspace-area svelte-6tqdd3"></div></div> <p class="ready-text svelte-6tqdd3">Alle Materialien bereit für die <strong class="svelte-6tqdd3">Exploration</strong></p></div>');function Sn(n,e){U(e,!1);const t=ot[1].artifacts,s=[{x:-22,y:-18,rotate:-6},{x:28,y:-10,rotate:9},{x:-18,y:14,rotate:-4},{x:24,y:22,rotate:6}];O();var r=Cn(),d=o(r),i=l(d,2),c=o(i);ce(c,5,()=>t,ve,(h,v,g)=>{var p=Ln(),k=o(p);lt(k,{get type(){return a(v).type}});var w=l(k,2),y=o(w);C(()=>{xe(p,`transform: translate(${s[g].x??""}px, ${s[g].y??""}px) rotate(${s[g].rotate??""}deg);`),S(y,a(v).label)}),m(1,w,()=>D,()=>({delay:550+g*60})),m(1,p,()=>q,()=>({y:-40,duration:400,delay:200+g*80})),b(h,p)});var u=l(i,2);m(1,d,()=>D,()=>({duration:400})),m(1,i,()=>Oe,()=>({duration:400,start:.9})),m(1,u,()=>D,()=>({delay:700,duration:400})),b(n,r),H()}const An="/PromptotypingExplainer/assets/exploration-CciyC_CV.png";var Tn=x(`<div class="phase2-exploration svelte-pwk459"><header class="scene-header svelte-pwk459"><span class="phase-number svelte-pwk459">Phase 2</span> <h2 class="svelte-pwk459">Exploration</h2> <p class="subtitle svelte-pwk459">Die epistemische Spielwiese</p></header> <div class="content-block svelte-pwk459"><p class="lead svelte-pwk459">Freies Experimentieren mit dem Rohmaterial. LLM-gestützte Analyse der Daten,
      erste Prompt-Versuche, Erkundung der Möglichkeitsräume, <strong class="svelte-pwk459">ohne Dokumentationszwang</strong>.</p> <div class="key-point svelte-pwk459"><span class="key-label svelte-pwk459">Kennzeichen</span> <p class="svelte-pwk459">Diese Phase produziert <strong class="svelte-pwk459">keine formalen Artefakte</strong>. Die Erkenntnisse fließen informell in die Destillation (Phase 3) ein.</p></div> <div class="example-box svelte-pwk459"><div class="example-label svelte-pwk459">Beispiel-Prompts</div> <p class="example-text svelte-pwk459">"Analysiere die Struktur dieser XML-Dateien: Welche Elemente kommen vor?"<br/><br/> "Erkläre mir das Datenmodell, das du in diesen Dokumenten erkennst."<br/><br/> "Welche Entitäten (Personen, Orte, Zeiten) sind in den Daten enthalten?"</p></div></div> <figure class="exploration-visual svelte-pwk459"><img alt="LLM-gestützte Exploration der Rohdaten" class="svelte-pwk459"/> <figcaption class="svelte-pwk459">Verstehen durch Experimentieren – keine Dokumentation, nur Erkenntnis</figcaption></figure> <p class="transition-hint svelte-pwk459">Was hier verstanden wird, wird in Phase 3 <strong class="svelte-pwk459">destilliert</strong></p></div>`);function qn(n){var e=Tn(),t=o(e),s=l(t,2),r=l(s,2),d=o(r),i=l(r,2);C(()=>F(d,"src",An)),m(1,t,()=>q,()=>({y:-20,duration:500})),m(1,s,()=>D,()=>({delay:200,duration:400})),m(1,r,()=>q,()=>({y:30,duration:500,delay:400})),m(1,i,()=>D,()=>({delay:600,duration:400})),m(1,e,()=>D,()=>({duration:400})),b(n,e)}var Fn=x(`<div class="phase3-titel svelte-btytv1"><header class="scene-header svelte-btytv1"><span class="phase-number svelte-btytv1">Phase 3</span> <h2 class="svelte-btytv1">Destillation</h2> <p class="subtitle svelte-btytv1">Vom Rohmaterial zum Vault</p></header> <div class="content-block svelte-btytv1"><p class="lead svelte-btytv1">Die Erkenntnisse aus der Exploration werden nun <strong class="svelte-btytv1">destilliert</strong>.
      Das Kernprinzip: maximale Information mit minimalen Tokens. Je präziser der Kontext,
      desto besser die LLM-Performance – denn <strong class="svelte-btytv1">Context Rot</strong> ist real.</p> <div class="vault-preview svelte-btytv1"><div class="vault-icon svelte-btytv1"><svg viewBox="0 0 64 64" width="80" height="80"><rect x="8" y="16" width="48" height="40" rx="4" fill="none" stroke="currentColor" stroke-width="2"></rect><path d="M8 28 L56 28" stroke="currentColor" stroke-width="2"></path><circle cx="32" cy="38" r="6" fill="none" stroke="currentColor" stroke-width="2"></circle><path d="M32 32 L32 20" stroke="currentColor" stroke-width="2"></path><rect x="24" y="8" width="16" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="2"></rect></svg></div> <p class="vault-label svelte-btytv1">Der Promptotyping Vault</p></div></div> <p class="insight svelte-btytv1">Hier entstehen die <strong class="svelte-btytv1">.md-Dateien</strong> - optimiert für das LLM</p></div>`);function Vn(n){var e=Fn(),t=o(e),s=l(t,2),r=l(o(s),2),d=o(r),i=l(d,2),c=l(s,2);m(1,t,()=>q,()=>({y:-20,duration:500})),m(1,d,()=>q,()=>({y:20,duration:400,delay:400})),m(1,i,()=>D,()=>({delay:600,duration:400})),m(1,s,()=>D,()=>({delay:200,duration:400})),m(1,c,()=>D,()=>({delay:800,duration:400})),b(n,e)}var jn=x('<div class="phase3-dokumente svelte-1ipbydp"><h3 class="svelte-1ipbydp">Die Vault-Dokumente</h3> <p class="description svelte-1ipbydp">Drei Kerndokumente verdichten das Wissen für LLMs optimal. Das Prinzip der <strong class="svelte-1ipbydp">Context Compression</strong> bedeutet maximale Information bei minimaler Token-Anzahl.</p> <div class="documents-grid svelte-1ipbydp"><div class="document svelte-1ipbydp"><div class="doc-icon data svelte-1ipbydp"><span class="doc-ext svelte-1ipbydp">.md</span></div> <div class="doc-content svelte-1ipbydp"><h4 class="svelte-1ipbydp">DATA.md</h4> <p class="svelte-1ipbydp">Struktur und Semantik der Forschungsdaten, also Schema, Felder und Beziehungen</p></div></div> <div class="document svelte-1ipbydp"><div class="doc-icon requirements svelte-1ipbydp"><span class="doc-ext svelte-1ipbydp">.md</span></div> <div class="doc-content svelte-1ipbydp"><h4 class="svelte-1ipbydp">REQUIREMENTS.md</h4> <p class="svelte-1ipbydp">Formalisierte Anforderungen mit MUSS / SOLL / KANN Priorisierung</p></div></div> <div class="document svelte-1ipbydp"><div class="doc-icon context svelte-1ipbydp"><span class="doc-ext svelte-1ipbydp">.md</span></div> <div class="doc-content svelte-1ipbydp"><h4 class="svelte-1ipbydp">CONTEXT.md</h4> <p class="svelte-1ipbydp">Domänenwissen, Forschungsfragen und Projektziele</p></div></div></div></div>');function Kn(n){var e=jn(),t=o(e),s=l(t,2),r=l(s,2),d=o(r),i=l(d,2),c=l(i,2);m(1,t,()=>D,()=>({duration:400})),m(1,s,()=>D,()=>({delay:150,duration:400})),m(1,d,()=>q,()=>({y:30,duration:500,delay:300})),m(1,i,()=>q,()=>({y:30,duration:500,delay:450})),m(1,c,()=>q,()=>({y:30,duration:500,delay:600})),b(n,e)}var Rn=x(`<div class="phase3-vault svelte-1don6ot"><h3 class="svelte-1don6ot">Der <span class="promptotyping svelte-1don6ot">Promptotyping</span> Vault</h3> <p class="description svelte-1don6ot">Das destillierte Wissen aus Phase 2 wird in drei Markdown-Dateien organisiert –
    optimiert für den LLM-Kontext</p> <div class="vault-visual svelte-1don6ot"><div class="source-flow svelte-1don6ot"><div class="source-item svelte-1don6ot"><span class="source-label svelte-1don6ot">Datenstrukturen</span> <div class="arrow svelte-1don6ot">→</div></div> <div class="source-item svelte-1don6ot"><span class="source-label svelte-1don6ot">Erkenntnisse</span> <div class="arrow svelte-1don6ot">→</div></div> <div class="source-item svelte-1don6ot"><span class="source-label svelte-1don6ot">Anforderungen</span> <div class="arrow svelte-1don6ot">→</div></div></div> <div class="vault-center svelte-1don6ot"><div class="vault-box svelte-1don6ot"><div class="vault-header svelte-1don6ot">VAULT</div> <div class="vault-files svelte-1don6ot"><div class="file-item svelte-1don6ot"><span class="file svelte-1don6ot">DATA.md</span> <span class="file-desc svelte-1don6ot">Was haben wir?</span></div> <div class="file-item svelte-1don6ot"><span class="file svelte-1don6ot">REQUIREMENTS.md</span> <span class="file-desc svelte-1don6ot">Was wollen wir?</span></div> <div class="file-item svelte-1don6ot"><span class="file svelte-1don6ot">CONTEXT.md</span> <span class="file-desc svelte-1don6ot">Was wissen wir?</span></div></div></div></div> <div class="llm-flow svelte-1don6ot"><div class="arrow large svelte-1don6ot">→</div> <div class="llm-target svelte-1don6ot"><span class="llm-label svelte-1don6ot">Phase 4</span> <span class="llm-sublabel svelte-1don6ot">Implementation</span></div></div></div> <p class="conclusion svelte-1don6ot">Das Wissen ist verdichtet und <strong class="svelte-1don6ot">bereit für den LLM-Dialog</strong></p></div>`);function Wn(n){var e=Rn(),t=o(e),s=l(t,2),r=l(s,2),d=o(r),i=l(d,2),c=l(i,2),u=l(r,2);m(1,t,()=>D,()=>({duration:400})),m(1,s,()=>D,()=>({delay:150,duration:400})),m(1,d,()=>D,()=>({delay:300,duration:400})),m(1,i,()=>Oe,()=>({duration:500,delay:500})),m(1,c,()=>D,()=>({delay:700,duration:400})),m(1,u,()=>D,()=>({delay:900,duration:400})),b(n,e)}var Bn=x(`<div class="phase4-titel svelte-1jfm6fv"><header class="scene-header svelte-1jfm6fv"><span class="phase-number svelte-1jfm6fv">Phase 4</span> <h2 class="svelte-1jfm6fv">Implementation</h2> <p class="subtitle svelte-1jfm6fv">Iterative Entwicklung</p></header> <div class="content-block svelte-1jfm6fv"><p class="lead svelte-1jfm6fv">Der Vault wird dem LLM übergeben und die <strong class="svelte-1jfm6fv">Cyborg-Arbeit</strong> beginnt.
      Mensch und KI entwickeln gemeinsam, validieren iterativ und aktualisieren den Vault mit neuem Wissen.</p> <div class="cycle-preview svelte-1jfm6fv"><div class="cycle-step svelte-1jfm6fv"><span class="cycle-icon svelte-1jfm6fv">1</span> <span class="cycle-label svelte-1jfm6fv">Prompt + Vault</span></div> <div class="cycle-arrow svelte-1jfm6fv">→</div> <div class="cycle-step svelte-1jfm6fv"><span class="cycle-icon svelte-1jfm6fv">2</span> <span class="cycle-label svelte-1jfm6fv">LLM generiert</span></div> <div class="cycle-arrow svelte-1jfm6fv">→</div> <div class="cycle-step svelte-1jfm6fv"><span class="cycle-icon svelte-1jfm6fv">3</span> <span class="cycle-label svelte-1jfm6fv">Expert validiert</span></div></div></div> <p class="insight svelte-1jfm6fv">Jede Iteration = <strong class="svelte-1jfm6fv">neuer Prototype</strong> + potentielles Vault-Update</p></div>`);function Nn(n){var e=Bn(),t=o(e),s=l(t,2),r=l(o(s),2),d=l(s,2);m(1,t,()=>q,()=>({y:-20,duration:500})),m(1,r,()=>q,()=>({y:20,duration:400,delay:400})),m(1,s,()=>D,()=>({delay:200,duration:400})),m(1,d,()=>D,()=>({delay:600,duration:400})),b(n,e)}var On=x('<span class="pattern-label svelte-1hq5by1"> </span>'),Hn=x('<div><!> <div class="bubble svelte-1hq5by1"><p class="svelte-1hq5by1"> </p></div></div>'),Un=x('<div class="typing-indicator svelte-1hq5by1"><span class="typing-dot svelte-1hq5by1"></span> <span class="typing-dot svelte-1hq5by1"></span> <span class="typing-dot svelte-1hq5by1"></span></div>'),Gn=x('<div class="animated-chat svelte-1hq5by1"><div class="chat-header svelte-1hq5by1"><div class="chat-dots svelte-1hq5by1"><span class="dot svelte-1hq5by1"></span> <span class="dot svelte-1hq5by1"></span> <span class="dot svelte-1hq5by1"></span></div> <span class="chat-title svelte-1hq5by1">Promptotyping Session</span></div> <div class="chat-messages svelte-1hq5by1"><!> <!></div></div>');function Zn(n,e){U(e,!1);const t=[{type:"human",pattern:"Context setzen",text:"Lies knowledge.md und requirements.md. Was sind die Story-Gaps im Frontend?"},{type:"llm",pattern:"Reasoning",text:"Ich analysiere die Vault-Dokumente... Drei Gaps: 1) Phase 4 abstrakt, 2) Beispieldaten fehlen, 3) Komponenten ungenutzt."},{type:"human",pattern:"Plan anfordern",text:"Erstelle einen Plan! Wie lösen wir Gap 1?"},{type:"llm",pattern:"Plan",text:"Plan: AnimatedChat-Komponente erstellen → echte Prompts zeigen → Typing-Indicator für Authentizität."},{type:"human",pattern:"Implementieren",text:"Setze den Plan um. Teste ob es kompiliert."},{type:"llm",pattern:"Test",text:"Komponente erstellt. Build erfolgreich. Aber: Beispiel zu generisch für Promptotyping."},{type:"human",pattern:"Feedback",text:"Nimm unseren eigenen Prozess als Meta-Beispiel – das ist authentischer!"},{type:"llm",pattern:"Dokumentation",text:'Chat aktualisiert. Ergänze journal.md: "Meta-Beispiel zeigt echten Workflow".'}];let s=ee([]),r=0;Se(()=>{const v=()=>{if(r<t.length){j(s,[...a(s),t[r]]),r++;const g=t[r-1].type==="human"?2e3:2500;setTimeout(v,g)}else setTimeout(()=>{j(s,[]),r=0,setTimeout(v,1e3)},4e3)};return setTimeout(v,800),()=>{}}),O();var d=Gn(),i=l(o(d),2),c=o(i);ce(c,1,()=>a(s),ve,(v,g)=>{var p=Hn(),k=o(p);{var w=M=>{var $=On(),A=o($);C(()=>S(A,a(g).pattern)),b(M,$)};J(k,M=>{a(g).pattern&&M(w)})}var y=l(k,2),P=o(y),I=o(P);C(()=>{ye(p,1,`message ${a(g).type??""}`,"svelte-1hq5by1"),S(I,a(g).text)}),m(1,p,()=>q,()=>({y:20,duration:400})),b(v,p)});var u=l(c,2);{var h=v=>{var g=Un();m(1,g,()=>D,()=>({duration:200})),b(v,g)};J(u,v=>{a(s).length<t.length&&v(h)})}b(n,d),H()}var Xn=x(`<div class="phase4-iteration svelte-5lsmoa"><h3 class="svelte-5lsmoa">Der Iterationszyklus</h3> <p class="description svelte-5lsmoa">Context → Reasoning → Plan → Implementation → Test → Feedback → Dokumentation</p> <div class="iteration-grid svelte-5lsmoa"><div class="chat-side svelte-5lsmoa"><!></div> <div class="text-card explainer-side svelte-5lsmoa"><p>Der Zyklus beginnt mit dem <strong>Kontext</strong>: Vault-Dokumente werden dem LLM mitgegeben,
        damit es das Domänenwissen versteht. Im <strong>Reasoning</strong> analysiert das LLM den
        Kontext und identifiziert Probleme, bevor es einen konkreten <strong>Plan</strong> erstellt.</p> <p>Erst dann folgt die <strong>Implementation</strong>. Der generierte Code wird direkt <strong>getestet</strong> – Fehler werden sofort sichtbar. Kritisches <strong>Feedback</strong> gibt die Richtung für die nächste Iteration vor.</p> <p>Am Ende jedes Zyklus steht die <strong>Dokumentation</strong>: Neues Wissen fließt zurück
        in den Vault. Der Kontext wächst – und der nächste Zyklus startet mit besserem Ausgangsmaterial.</p></div></div></div>`);function Qn(n){var e=Xn(),t=o(e),s=l(t,2),r=l(s,2),d=o(r),i=o(d);Zn(i,{});var c=l(d,2);m(1,t,()=>D,()=>({duration:400})),m(1,s,()=>D,()=>({delay:150,duration:400})),m(1,d,()=>q,()=>({x:-30,duration:500,delay:300})),m(1,c,()=>q,()=>({x:30,duration:500,delay:400})),b(n,e)}var Jn=x('<div class="phase4-vault-update svelte-1dkyo20"><h3 class="svelte-1dkyo20">Vault-Update</h3> <p class="description svelte-1dkyo20">Neues Wissen fließt zurück und der Vault wächst mit jeder Iteration</p> <div class="update-visual svelte-1dkyo20"><div class="update-source svelte-1dkyo20"><div class="source-header svelte-1dkyo20">Prototype zeigt...</div> <div class="source-items svelte-1dkyo20"><div class="source-item svelte-1dkyo20">Fehlende Datenfelder</div> <div class="source-item svelte-1dkyo20">Unklare Anforderungen</div> <div class="source-item svelte-1dkyo20">Neue Erkenntnisse</div></div></div> <div class="update-arrow svelte-1dkyo20"><svg viewBox="0 0 60 40" width="60" height="40" class="svelte-1dkyo20"><path d="M5 20 L45 20" stroke="var(--color-terracotta)" stroke-width="2" stroke-dasharray="4 3"></path><polygon points="45,15 55,20 45,25" fill="var(--color-terracotta)"></polygon></svg> <span class="arrow-label svelte-1dkyo20">Update</span></div> <div class="update-target svelte-1dkyo20"><div class="target-header svelte-1dkyo20">Vault</div> <div class="target-items svelte-1dkyo20"><div class="target-item svelte-1dkyo20"><span class="file-name svelte-1dkyo20">DATA.md</span> <span class="update-type svelte-1dkyo20">+ Felder</span></div> <div class="target-item svelte-1dkyo20"><span class="file-name svelte-1dkyo20">REQUIREMENTS.md</span> <span class="update-type svelte-1dkyo20">+ Klarheit</span></div> <div class="target-item svelte-1dkyo20"><span class="file-name svelte-1dkyo20">CONTEXT.md</span> <span class="update-type svelte-1dkyo20">+ Wissen</span></div></div></div></div> <div class="loop-indicator svelte-1dkyo20"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" class="svelte-1dkyo20"><path d="M17 1l4 4-4 4"></path><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><path d="M7 23l-4-4 4-4"></path><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg> <span>Verbesserter Vault → besserer Prototype → nächste Iteration</span></div> <p class="conclusion svelte-1dkyo20"><strong>Vom Wissen zum Werkzeug</strong></p></div>');function Yn(n){var e=Jn(),t=o(e),s=l(t,2),r=l(s,2),d=o(r),i=l(d,2),c=l(i,2),u=l(o(c),2),h=o(u),v=l(h,2),g=l(v,2),p=l(r,2),k=l(p,2);m(1,t,()=>D,()=>({duration:400})),m(1,s,()=>D,()=>({delay:150,duration:400})),m(1,d,()=>q,()=>({x:-30,duration:500,delay:300})),m(1,i,()=>D,()=>({delay:500,duration:400})),m(1,h,()=>D,()=>({delay:600})),m(1,v,()=>D,()=>({delay:700})),m(1,g,()=>D,()=>({delay:800})),m(1,c,()=>q,()=>({x:30,duration:500,delay:400})),m(1,p,()=>D,()=>({delay:900,duration:400})),m(1,k,()=>D,()=>({delay:1e3,duration:400})),b(n,e)}var es=x('<a target="_blank" rel="noopener" class="example-card svelte-1es890x"><h3 class="svelte-1es890x"> </h3> <p class="description svelte-1es890x"> </p> <div class="card-footer svelte-1es890x"><span class="link-arrow svelte-1es890x">Demo ansehen →</span></div></a>'),ts=x('<div class="outro-beispiele svelte-1es890x"><header class="scene-header svelte-1es890x"><span class="section-label svelte-1es890x">Praxis</span> <h2 class="svelte-1es890x">Case Studies</h2> <p class="subtitle svelte-1es890x">Promptotyping in Aktion</p></header> <div class="examples-grid svelte-1es890x"></div></div>');function ns(n){const e=[{name:"CorrespExplorer",description:"CMIF-Korrespondenzdaten → Netzwerk, Timeline, Karte",link:"https://dhcraft.org/CorrespExplorer"},{name:"Kriminalmuseum",description:"Sammlungsdaten → Dual-Interface Explorer",link:"https://chpollin.github.io/km/collection-explorer.html"},{name:"CVMA Glasmalerei",description:"Glasfenster-Metadaten → Annotations-Viewer",link:"https://chpollin.github.io/stained-glass-metadata-annotation-tool/docs/version-2/"},{name:"Aldersbach",description:"TEI-Klosterrechnungen → Annotations-Tool",link:"https://chpollin.github.io/depcha-aldersbach"}];var t=ts(),s=o(t),r=l(s,2);ce(r,5,()=>e,ve,(d,i,c)=>{var u=es(),h=o(u),v=o(h),g=l(h,2),p=o(g);C(()=>{F(u,"href",a(i).link),S(v,a(i).name),S(p,a(i).description)}),m(1,u,()=>q,()=>({y:30,duration:400,delay:200+c*100})),b(d,u)}),m(1,s,()=>q,()=>({y:-20,duration:500})),b(n,t)}var ss=x(`<div class="outro-zusammenfassung svelte-pz9g48"><h3 class="svelte-pz9g48">Zusammenfassung</h3> <div class="text-card svelte-pz9g48"><p><span class="promptotyping">Promptotyping</span> strukturiert die Zusammenarbeit zwischen Forscher:innen und LLMs
      durch einen vierphasigen Prozess: Materialsammlung, explorative Analyse, Wissensdestillation
      im <span class="promptotyping">Promptotyping</span> Vault, und iterative Implementation.</p> <p>Der <span class="promptotyping">Promptotyping</span> Vault besteht aus drei <strong>Promptotyping Documents</strong> (DATA.md, REQUIREMENTS.md, CONTEXT.md) – sie machen implizites Domänenwissen für LLMs nutzbar
      und wachsen mit jeder Iteration.</p> <p><strong>Critical Expert in the Loop</strong>: Domänenexpert:innen bleiben unverzichtbar.
      Sie validieren Outputs, erkennen Halluzinationen und steuern die fachliche Qualität.</p></div> <div class="limitations-trigger svelte-pz9g48"><!></div> <div class="cta svelte-pz9g48"><p class="final-text svelte-pz9g48">Vom Wissen zum Werkzeug.</p> <div class="cta-links svelte-pz9g48"><a href="https://github.com/DigitalHumanitiesCraft/CorrespExplorer" target="_blank" rel="noopener" class="cta-btn svelte-pz9g48">GitHub Repository</a> <a href="https://dhcraft.org/CorrespExplorer" target="_blank" rel="noopener" class="cta-btn cta-btn-secondary svelte-pz9g48">Live Demo</a></div></div></div>`);function is(n,e){U(e,!1);function t(h){Ae(h.detail.id)}O();var s=ss(),r=o(s),d=l(r,2),i=l(d,2),c=o(i);oe(c,{label:"Grenzen & Limitationen",deepDiveId:"limitations",variant:"block",$$events:{open:t}});var u=l(i,2);m(1,r,()=>D,()=>({duration:400})),m(1,d,()=>q,()=>({y:20,duration:500,delay:200})),m(1,i,()=>D,()=>({delay:500,duration:400})),m(1,u,()=>Oe,()=>({duration:400,delay:600})),b(n,s),H()}var rs=x('<div class="background-layer svelte-1n46o8q"></div> <!> <main class="scroll-container svelte-1n46o8q"><!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!></main> <!>',1);function as(n,e){U(e,!1);const t=()=>ae(pe,"$currentPhase",c),s=()=>ae(me,"$currentStep",c),r=()=>ae(Kt,"$globalProgress",c),d=()=>ae(Ne,"$isDeepDiveOpen",c),i=()=>ae(Be,"$currentDeepDive",c),[c,u]=We(),h=ee();Se(()=>(Rt(),setTimeout(()=>{Fe()},300),window.addEventListener("hashchange",Fe),()=>window.removeEventListener("hashchange",Fe)));function v(f,z,ie){return f+(z-f)*ie}ge(()=>(t(),s()),()=>{typeof window<"u"&&Wt(t(),s())}),ge(()=>r(),()=>{j(h,(()=>{const f=r();let z;f<.2?z=0:f<.5?z=(f-.2)/.3:f<.85?z=1:z=1-(f-.85)/.15*.3;const ie=Math.round(v(96,191,z)),re=Math.round(v(125,91,z)),fe=Math.round(v(139,62,z)),be=.04+f*.12,we=30+f*40,Te=50-Math.sin(f*Math.PI)*20,Ee=70-f*20;return`radial-gradient(ellipse at ${we}% ${Te}%, rgba(${ie}, ${re}, ${fe}, ${be}) 0%, rgba(232, 232, 232, 1) ${Ee}%)`})())}),Ce(),O();var g=rs(),p=de(g),k=l(p,2);nn(k,{});var w=l(k,2),y=o(w);Qt(y,{});var P=l(y,2);B(P,{id:"intro-definition",phaseIndex:0,stepIndex:0,children:(f,z)=>{gn(f)},$$slots:{default:!0}});var I=l(P,2);B(I,{id:"intro-kernprinzip",phaseIndex:0,stepIndex:1,children:(f,z)=>{bn(f,{})},$$slots:{default:!0}});var M=l(I,2);B(M,{id:"intro-methodik",phaseIndex:0,stepIndex:2,children:(f,z)=>{yn(f,{})},$$slots:{default:!0}});var $=l(M,2);B($,{id:"intro-phasen",phaseIndex:0,stepIndex:3,children:(f,z)=>{_n(f,{})},$$slots:{default:!0}});var A=l($,2);B(A,{id:"phase1-titel",phaseIndex:1,stepIndex:0,children:(f,z)=>{$n(f,{})},$$slots:{default:!0}});var K=l(A,2);B(K,{id:"phase1-rohdaten",phaseIndex:1,stepIndex:1,children:(f,z)=>{In(f,{})},$$slots:{default:!0}});var Z=l(K,2);B(Z,{id:"phase1-sammlung",phaseIndex:1,stepIndex:2,children:(f,z)=>{Sn(f,{})},$$slots:{default:!0}});var E=l(Z,2);B(E,{id:"phase2-exploration",phaseIndex:2,stepIndex:0,children:(f,z)=>{qn(f)},$$slots:{default:!0}});var R=l(E,2);B(R,{id:"phase3-titel",phaseIndex:3,stepIndex:0,children:(f,z)=>{Vn(f)},$$slots:{default:!0}});var _=l(R,2);B(_,{id:"phase3-dokumente",phaseIndex:3,stepIndex:1,children:(f,z)=>{Kn(f)},$$slots:{default:!0}});var W=l(_,2);B(W,{id:"phase3-vault",phaseIndex:3,stepIndex:2,children:(f,z)=>{Wn(f)},$$slots:{default:!0}});var X=l(W,2);B(X,{id:"phase4-titel",phaseIndex:4,stepIndex:0,children:(f,z)=>{Nn(f)},$$slots:{default:!0}});var se=l(X,2);B(se,{id:"phase4-iteration",phaseIndex:4,stepIndex:1,children:(f,z)=>{Qn(f)},$$slots:{default:!0}});var V=l(se,2);B(V,{id:"phase4-vault-update",phaseIndex:4,stepIndex:2,children:(f,z)=>{Yn(f)},$$slots:{default:!0}});var T=l(V,2);B(T,{id:"outro-beispiele",phaseIndex:5,stepIndex:0,children:(f,z)=>{ns(f)},$$slots:{default:!0}});var G=l(T,2);B(G,{id:"outro-zusammenfassung",phaseIndex:5,stepIndex:1,children:(f,z)=>{is(f,{})},$$slots:{default:!0}});var ue=l(w,2);{let f=ke(()=>(i(),L(()=>i()?.title||""))),z=ke(()=>(i(),L(()=>i()?.content||"")));ln(ue,{get isOpen(){return d()},get title(){return a(f)},get content(){return a(z)},$$events:{close(...ie){Nt?.apply(this,ie)}}})}C(()=>xe(p,`background: ${a(h)??""};`)),b(n,g),H(),u()}Et(as,{target:document.getElementById("app")});
