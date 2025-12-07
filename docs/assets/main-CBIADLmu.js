import{a as vt,E as pt,B as ut,b as ht,e as Ye,u as M,T as gt,w as et,i as mt,q as tt,n as we,s as ft,c as bt,d as kt,r as yt,S as xt,f as st,g as Me,l as wt,h as _t,j as De,k as Ee,m as H,o as w,p as ue,t as b,v as U,x as We,y as G,z as he,A as o,C as l,D as ke,F as r,G as L,H as ze,I as q,J as S,K as Q,L as ae,M as zt,N as ge,O as Le,P as te,Q as B,R as de,U as J,V as Ie,W as _e,$ as Dt,X as qe,Y as Et,Z as Ce,_ as $t}from"./legacy-D165LBq1.js";import{s as ye}from"./style-CqZlFUqC.js";import{i as se}from"./if-tjgBYvDz.js";import{h as Pt}from"./html-DAYXinM3.js";import{g as Mt}from"./glossary-DgCjyAp8.js";import{g as He}from"./bibliography-Bor_VxGP.js";function nt(s){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}const It=()=>performance.now(),le={tick:s=>requestAnimationFrame(s),now:()=>It(),tasks:new Set};function it(){const s=le.now();le.tasks.forEach(e=>{e.c(s)||(le.tasks.delete(e),e.f())}),le.tasks.size!==0&&le.tick(it)}function Ct(s){let e;return le.tasks.size===0&&le.tick(it),{promise:new Promise(t=>{le.tasks.add(e={c:s,f:t})}),abort(){le.tasks.delete(e)}}}function Pe(s,e){et(()=>{s.dispatchEvent(new CustomEvent(e))})}function Lt(s){if(s==="float")return"cssFloat";if(s==="offset")return"cssOffset";if(s.startsWith("--"))return s;const e=s.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function Ue(s){const e={},t=s.split(";");for(const n of t){const[a,d]=n.split(":");if(!a||d===void 0)break;const i=Lt(a.trim());e[i]=d.trim()}return e}const St=s=>s;function p(s,e,t,n){var a=(s&bt)!==0,d=(s&kt)!==0,i=a&&d,c=(s&gt)!==0,h=i?"both":a?"in":"out",v,g=e.inert,m=e.style.overflow,u,k;function _(){return et(()=>v??=t()(e,n?.()??{},{direction:h}))}var y={is_global:c,in(){if(e.inert=g,!a){k?.abort(),k?.reset?.();return}d||u?.abort(),Pe(e,"introstart"),u=je(e,_(),k,1,()=>{Pe(e,"introend"),u?.abort(),u=v=void 0,e.style.overflow=m})},out(P){if(!d){P?.(),v=void 0;return}e.inert=!0,Pe(e,"outrostart"),k=je(e,_(),u,0,()=>{Pe(e,"outroend"),P?.()})},stop:()=>{u?.abort(),k?.abort()}},$=vt;if(($.nodes.t??=[]).push(y),a&&ft){var I=c;if(!I){for(var C=$.parent;C&&(C.f&pt)!==0;)for(;(C=C.parent)&&(C.f&ut)===0;);I=!C||(C.f&ht)!==0}I&&Ye(()=>{M(()=>y.in())})}}function je(s,e,t,n,a){var d=n===1;if(mt(e)){var i,c=!1;return tt(()=>{if(!c){var $=e({direction:d?"in":"out"});i=je(s,$,t,n,a)}}),{abort:()=>{c=!0,i?.abort()},deactivate:()=>i.deactivate(),reset:()=>i.reset(),t:()=>i.t()}}if(t?.deactivate(),!e?.duration)return a(),{abort:we,deactivate:we,reset:we,t:()=>n};const{delay:h=0,css:v,tick:g,easing:m=St}=e;var u=[];if(d&&t===void 0&&(g&&g(0,1),v)){var k=Ue(v(0,1));u.push(k,k)}var _=()=>1-n,y=s.animate(u,{duration:h,fill:"forwards"});return y.onfinish=()=>{y.cancel();var $=t?.t()??1-n;t?.abort();var I=n-$,C=e.duration*Math.abs(I),P=[];if(C>0){var F=!1;if(v)for(var j=Math.ceil(C/16.666666666666668),Z=0;Z<=j;Z+=1){var E=$+I*m(Z/j),R=Ue(v(E,1-E));P.push(R),F||=R.overflow==="hidden"}F&&(s.style.overflow="hidden"),_=()=>{var z=y.currentTime;return $+I*m(z/C)},g&&Ct(()=>{if(y.playState!=="running")return!1;var z=_();return g(z,1-z),!0})}y=s.animate(P,{duration:C,fill:"forwards"}),y.onfinish=()=>{_=()=>n,g?.(n,1-n),a()}},{abort:()=>{y&&(y.cancel(),y.effect=null,y.onfinish=we)},deactivate:()=>{a=we},reset:()=>{n===0&&g?.(1,0)},t:()=>_()}}function Ge(s,e){return s===e||s?.[xt]===e}function Re(s={},e,t,n){return Ye(()=>{var a,d;return yt(()=>{a=d,d=[],M(()=>{s!==t(...d)&&(e(s,...d),a&&Ge(t(...a),s)&&e(null,...a))})}),()=>{tt(()=>{d&&Ge(t(...d),s)&&e(null,...d)})}}),s}function At(s){return function(...e){var t=e[0];return t.stopPropagation(),s?.apply(this,e)}}function Tt(s,e){var t=s.$$events?.[e.type],n=st(t)?t.slice():t==null?[]:[t];for(var a of n)a.call(this,e)}function Be(s){Me===null&&nt(),wt&&Me.l!==null?Vt(Me).m.push(s):_t(()=>{const e=M(s);if(typeof e=="function")return e})}function Ft(s,e,{bubbles:t=!1,cancelable:n=!1}={}){return new CustomEvent(s,{detail:e,bubbles:t,cancelable:n})}function rt(){const s=Me;return s===null&&nt(),(e,t,n)=>{const a=s.s.$$events?.[e];if(a){const d=st(a)?a.slice():[a],i=Ft(e,t,n);for(const c of d)c.call(s.x,i);return!i.defaultPrevented}return!0}}function Vt(s){var e=s.l;return e.u??={a:[],b:[],m:[]}}const ce=Ee(0),me=Ee(0),N=[{id:"intro",label:"Promptotyping",number:null,subtitle:"Einführung",steps:[{id:"definition",label:"Definition"},{id:"kernprinzip",label:"Kernprinzip"},{id:"methodik",label:"Methodik"},{id:"phasen",label:"Phasen"}]},{id:"phase1",label:"Preparation",number:1,subtitle:"Materialsammlung",steps:[{id:"titel",label:"Übersicht"},{id:"rohdaten",label:"Rohdaten"},{id:"sammlung",label:"Sammlung"}]},{id:"phase2",label:"Exploration",number:2,subtitle:"Epistemische Spielwiese",steps:[{id:"exploration",label:"Exploration"}]},{id:"phase3",label:"Destillation",number:3,subtitle:"Vault (.md Files)",steps:[{id:"titel",label:"Übersicht"},{id:"dokumente",label:".md Dokumente"},{id:"vault",label:"Vault"}]},{id:"phase4",label:"Implementation",number:4,subtitle:"Prototype + Vault-Update",steps:[{id:"titel",label:"Übersicht"},{id:"iteration",label:"Iteration"},{id:"vault-update",label:"Vault-Update"}]},{id:"outro",label:"Praxis",number:null,subtitle:"Case Studies",steps:[{id:"beispiele",label:"Beispiele"},{id:"zusammenfassung",label:"Zusammenfassung"}]}],qt=N.reduce((s,e)=>s+e.steps.length,0),jt=De([ce,me],([s,e])=>{let t=0;for(let n=0;n<s;n++)t+=N[n].steps.length;return t+e}),Rt=De(jt,s=>s/(qt-1));De([ce,me],([s,e])=>{const t=N[s];return!t||t.steps.length<=1?0:e/(t.steps.length-1)});De(ce,s=>N[s]||N[0]);De([ce,me],([s,e])=>{const t=N[s];return t?t.steps[e]||t.steps[0]:null});N.map((s,e)=>({id:s.id,label:s.label,steps:s.steps.map(t=>t.id)}));const Ze=Ee(!1);function Kt(){if(typeof window<"u"){const s=window.matchMedia("(prefers-reduced-motion: reduce)");Ze.set(s.matches),s.addEventListener("change",e=>{Ze.set(e.matches)})}}function Xe(s){if(typeof window>"u")return;const e=document.getElementById(s);e&&e.scrollIntoView({behavior:"smooth"})}function Ve(){if(typeof window>"u")return;const s=window.location.hash.slice(1);if(!s)return;const e=document.getElementById(s);if(e){setTimeout(()=>{e.scrollIntoView({behavior:"smooth"})},100);return}const t=s.split("-"),n=t[0],a=t.slice(1).join("-"),d=N.findIndex(h=>h.id===n);if(d===-1)return;const i=N[d];let c=n;a?i.steps.some(v=>v.id===a)&&(c=`${n}-${a}`):c=`${n}-${i.steps[0].id}`,setTimeout(()=>{const h=document.getElementById(c);h&&h.scrollIntoView({behavior:"smooth"})},100)}let Qe="";function Wt(s,e){if(typeof window>"u")return;const t=N[s];if(!t)return;const n=t.steps[e],a=n?`${t.id}-${n.id}`:t.id;a!==Qe&&(Qe=a,history.replaceState(null,"",`#${a}`))}const Bt={"system-1-42":{id:"system-1-42",title:"System 1.42 – Wie LLMs funktionieren",content:`
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
    `}},Ne=Ee(null),Oe=Ee(!1);function Se(s){const e=Bt[s];e?(Ne.set(e),Oe.set(!0),document.body.style.overflow="hidden"):console.warn(`Deep Dive not found: ${s}`)}function Nt(){Oe.set(!1),setTimeout(()=>{Ne.set(null)},300),document.body.style.overflow=""}var Ot=zt('<svg class="check-icon svelte-baj8t4" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),Ht=w('<span class="phase-number svelte-baj8t4"> </span>'),Ut=w('<button><span class="step-dot-marker svelte-baj8t4"></span> <span class="step-label svelte-baj8t4"> </span></button>'),Gt=w('<div class="sub-steps svelte-baj8t4"></div>'),Zt=w('<li class="phase-item svelte-baj8t4"><button><span class="dot svelte-baj8t4"><!></span> <span class="label-container svelte-baj8t4"><span class="label svelte-baj8t4"> </span> <!></span></button> <!></li>'),Xt=w('<nav class="progress-indicator svelte-baj8t4" aria-label="Phasen-Navigation"><ul class="svelte-baj8t4"></ul></nav>');function Qt(s,e){G(e,!1);const t=()=>ae(ce,"$currentPhase",a),n=()=>ae(me,"$currentStep",a),[a,d]=We();function i(m){const u=N[m],k=`${u.id}-${u.steps[0].id}`;Xe(k)}function c(m,u){const k=N[m],_=k.steps[u],y=`${k.id}-${_.id}`;Xe(y)}function h(m,u){(m.key==="Enter"||m.key===" ")&&(m.preventDefault(),i(u))}H();var v=Xt(),g=o(v);ue(g,5,()=>N,he,(m,u,k)=>{const _=ke(()=>t()===k),y=ke(()=>t()>k);var $=Zt(),I=o($);let C;var P=o(I),F=o(P);{var j=V=>{var T=Ot();b(V,T)};se(F,V=>{l(y)&&V(j)})}var Z=r(P,2),E=o(Z),R=o(E),z=r(E,2);{var K=V=>{var T=Ht(),O=o(T);L(()=>S(O,`Phase ${l(u).number??""}`)),b(V,T)};se(z,V=>{l(u).number&&V(K)})}var X=r(I,2);{var ne=V=>{var T=Gt();ue(T,5,()=>l(u).steps,he,(O,ve,f)=>{const D=ke(()=>n()===f),ie=ke(()=>n()>f);var re=Ut();let fe;var be=r(o(re),2),xe=o(be);L(()=>{fe=ze(re,1,"step-dot svelte-baj8t4",null,fe,{active:l(D),completed:l(ie)}),q(re,"aria-label",`Zu ${l(ve).label??""} springen`),S(xe,l(ve).label)}),Q("click",re,()=>c(k,f)),b(O,re)}),b(V,T)};se(X,V=>{l(_)&&V(ne)})}L(()=>{C=ze(I,1,"progress-dot svelte-baj8t4",null,C,{active:l(_),completed:l(y)}),q(I,"aria-label",`Zu ${l(u).label??""} springen`),q(I,"aria-current",l(_)?"step":void 0),S(R,l(u).label)}),Q("click",I,()=>i(k)),Q("keydown",I,V=>h(V,k)),b(m,$)}),b(s,v),U(),d()}var Jt=w('<span class="phase-number svelte-1yliotu"> </span>'),Yt=w('<span class="phase-tag svelte-1yliotu"> </span>'),es=w('<span class="step-separator svelte-1yliotu">—</span> <span class="current-step svelte-1yliotu"> </span>',1),ts=w('<header class="phase-header svelte-1yliotu"><div class="header-content svelte-1yliotu"><div class="phase-badge svelte-1yliotu"><!></div> <div class="title-group svelte-1yliotu"><h2 class="phase-title svelte-1yliotu"> </h2> <!></div> <nav class="header-nav svelte-1yliotu"><a href="/PromptotypingExplainer/about.html" class="nav-link svelte-1yliotu">About</a> <a href="/PromptotypingExplainer/vault.html" class="nav-link svelte-1yliotu">Vault</a> <a href="/PromptotypingExplainer/glossar.html" class="nav-link svelte-1yliotu">Glossar</a> <a href="/PromptotypingExplainer/bibliographie.html" class="nav-link svelte-1yliotu">Bibliographie</a></nav></div></header>');function ss(s,e){G(e,!1);const t=()=>ae(ce,"$currentPhase",a),n=()=>ae(me,"$currentStep",a),[a,d]=We(),i=te(),c=te();ge(()=>t(),()=>{B(i,N[t()]||N[0])}),ge(()=>(l(i),n()),()=>{B(c,l(i).steps[n()]||l(i).steps[0])}),Le(),H();var h=ts(),v=o(h),g=o(v),m=o(g);{var u=P=>{var F=Jt(),j=o(F);L(()=>S(j,`Phase ${l(i),M(()=>l(i).number)??""}`)),b(P,F)},k=P=>{var F=Yt(),j=o(F);L(()=>S(j,(l(i),M(()=>l(i).subtitle)))),b(P,F)};se(m,P=>{l(i),M(()=>l(i).number)?P(u):P(k,!1)})}var _=r(g,2),y=o(_),$=o(y),I=r(y,2);{var C=P=>{var F=es(),j=r(de(F),2),Z=o(j);L(()=>S(Z,(l(c),M(()=>l(c).label)))),b(P,F)};se(I,P=>{l(c)&&P(C)})}L(()=>S($,(l(i),M(()=>l(i).label)))),b(s,h),U(),d()}var ns=w('<section class="step svelte-zv7veq"><div class="step-content svelte-zv7veq"><!></div></section>');function W(s,e){G(e,!1);let t=J(e,"id",8),n=J(e,"phaseIndex",8),a=J(e,"stepIndex",8),d=te();Be(()=>{const v=new IntersectionObserver(g=>{g.forEach(m=>{m.isIntersecting&&m.intersectionRatio>.5&&(me.set(a()),ce.set(n()))})},{threshold:.5,rootMargin:"-10% 0px -10% 0px"});return v.observe(l(d)),()=>v.disconnect()}),H();var i=ns(),c=o(i),h=o(c);Ie(h,e,"default",{},null),Re(i,v=>B(d,v),()=>l(d)),L(()=>{q(i,"id",t()),q(i,"data-phase",n()),q(i,"data-step",a())}),b(s,i),U()}const is=s=>s;function at(s){const e=s-1;return e*e*e+1}function Je(s){const e=typeof s=="string"&&s.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[s,"px"]}function x(s,{delay:e=0,duration:t=400,easing:n=is}={}){const a=+getComputedStyle(s).opacity;return{delay:e,duration:t,easing:n,css:d=>`opacity: ${d*a}`}}function A(s,{delay:e=0,duration:t=400,easing:n=at,x:a=0,y:d=0,opacity:i=0}={}){const c=getComputedStyle(s),h=+c.opacity,v=c.transform==="none"?"":c.transform,g=h*(1-i),[m,u]=Je(a),[k,_]=Je(d);return{delay:e,duration:t,easing:n,css:(y,$)=>`
			transform: ${v} translate(${(1-y)*m}${u}, ${(1-y)*k}${_});
			opacity: ${h-g*$}`}}function Ae(s,{delay:e=0,duration:t=400,easing:n=at,start:a=0,opacity:d=0}={}){const i=getComputedStyle(s),c=+i.opacity,h=i.transform==="none"?"":i.transform,v=1-a,g=c*(1-d);return{delay:e,duration:t,easing:n,css:(m,u)=>`
			transform: ${h} scale(${1-v*u});
			opacity: ${c-g*u}
		`}}var rs=w('<div class="deep-dive-overlay svelte-tewam" role="dialog" aria-modal="true" aria-labelledby="deep-dive-title" tabindex="-1"><div class="deep-dive-panel svelte-tewam"><header class="panel-header svelte-tewam"><div class="header-indicator svelte-tewam"><span class="branch-icon svelte-tewam">←</span> <span class="branch-label svelte-tewam">Deep Dive</span></div> <h2 id="deep-dive-title" class="svelte-tewam"> </h2> <button class="close-button svelte-tewam" aria-label="Schließen">×</button></header> <div class="panel-content svelte-tewam"><!></div> <footer class="panel-footer svelte-tewam"><button class="back-button svelte-tewam">→ Zurück zum Hauptpfad</button></footer></div></div>');function as(s,e){G(e,!1);let t=J(e,"isOpen",8,!1),n=J(e,"title",8,""),a=J(e,"content",8,null);const d=rt();function i(){d("close")}function c(u){u.key==="Escape"&&i()}function h(u){u.target===u.currentTarget&&i()}H();var v=_e();Q("keydown",Dt,c);var g=de(v);{var m=u=>{var k=rs(),_=o(k),y=o(_),$=r(o(y),2),I=o($),C=r($,2),P=r(y,2),F=o(P);{var j=z=>{var K=_e(),X=de(K);Pt(X,a),b(z,K)},Z=z=>{var K=_e(),X=de(K);Ie(X,e,"default",{},null),b(z,K)};se(F,z=>{a()?z(j):z(Z,!1)})}var E=r(P,2),R=o(E);L(()=>S(I,n())),Q("click",C,i),Q("click",R,i),p(3,_,()=>A,()=>({x:-300,duration:300})),p(3,k,()=>x,()=>({duration:200})),Q("click",k,h),b(u,k)};se(g,u=>{t()&&u(m)})}b(s,v),U()}var ls=w('<span class="popover-en svelte-l7i3p6"> </span>'),os=w('<span class="tag svelte-l7i3p6"> </span>'),ds=w('<a class="popover-source svelte-l7i3p6"> </a>'),cs=w('<div role="tooltip"><div class="caret svelte-l7i3p6"></div> <div class="popover-header svelte-l7i3p6"><span class="popover-term svelte-l7i3p6"> </span> <!></div> <p class="popover-definition svelte-l7i3p6"> </p> <div class="popover-footer svelte-l7i3p6"><div class="popover-tags svelte-l7i3p6"></div> <!></div></div>'),vs=w('<span role="button" tabindex="0"><!></span> <!>',1);function Ke(s,e){G(e,!1);const t=te(),n=te();let a=J(e,"id",8),d=J(e,"inline",8,!0),i=te(!1),c=te(),h=te(),v,g=te({top:0,left:0,placement:"above"});async function m(){if(await Et(),!l(c))return;const E=l(c).getBoundingClientRect(),R=200,z=8;let K,X,ne="above";E.top>R+z?(K=E.top-z,ne="above"):(K=E.bottom+z,ne="below"),X=E.left+E.width/2,B(g,{top:K,left:X,placement:ne})}function u(){v=setTimeout(()=>{B(i,!0),m()},300)}function k(){clearTimeout(v),B(i,!1)}function _(E){E.preventDefault(),E.stopPropagation(),clearTimeout(v),B(i,!l(i)),l(i)&&m()}function y(E){l(i)&&l(c)&&!l(c).contains(E.target)&&l(h)&&!l(h).contains(E.target)&&B(i,!1)}function $(){l(i)&&B(i,!1)}function I(E){E.key==="Escape"&&l(i)&&B(i,!1)}Be(()=>(document.addEventListener("click",y),window.addEventListener("scroll",$,{passive:!0}),window.addEventListener("keydown",I),window.addEventListener("resize",m),()=>{document.removeEventListener("click",y),window.removeEventListener("scroll",$),window.removeEventListener("keydown",I),window.removeEventListener("resize",m),clearTimeout(v)}));const C={prompting:"#3B82F6","ai-engineering":"#8B5CF6",fundamentals:"#607D8B",architecture:"#059669",safety:"#DC2626",training:"#D97706",agents:"#EC4899",evaluation:"#6366F1",methodology:"#14B8A6",theory:"#8B5CF6"};ge(()=>qe(a()),()=>{B(t,Mt[a()])}),ge(()=>(l(t),He),()=>{B(n,l(t)?.source?He(l(t).source):null)}),Le(),H();var P=_e(),F=de(P);{var j=E=>{var R=vs(),z=de(R);let K;var X=o(z);Ie(X,e,"default",{},T=>{var O=Ce();L(()=>S(O,(l(t),M(()=>l(t).term)))),b(T,O)}),Re(z,T=>B(c,T),()=>l(c));var ne=r(z,2);{var V=T=>{var O=cs();let ve;var f=r(o(O),2),D=o(f),ie=o(D),re=r(D,2);{var fe=Y=>{var ee=ls(),pe=o(ee);L(()=>S(pe,`(${l(t),M(()=>l(t).en)??""})`)),b(Y,ee)};se(re,Y=>{l(t),M(()=>l(t).en&&l(t).en!==l(t).term)&&Y(fe)})}var be=r(f,2),xe=o(be),Te=r(be,2),$e=o(Te);ue($e,5,()=>(l(t),M(()=>l(t).tags)),he,(Y,ee)=>{var pe=os(),Fe=o(pe);L(()=>{ye(pe,`background-color: ${l(ee),M(()=>C[l(ee)]||"#607D8B")??""}`),S(Fe,l(ee))}),b(Y,pe)});var dt=r($e,2);{var ct=Y=>{var ee=ds(),pe=o(ee);L(()=>{q(ee,"href",`#bibliographie-${l(n),M(()=>l(n)?.id||"")??""}`),S(pe,(l(t),M(()=>l(t).source)))}),Q("click",ee,At(function(Fe){Tt.call(this,e,Fe)})),b(Y,ee)};se(dt,Y=>{l(t),M(()=>l(t).source)&&Y(ct)})}Re(O,Y=>B(h,Y),()=>l(h)),L(()=>{q(O,"id",`tooltip-${a()??""}`),ve=ze(O,1,"glossary-popover svelte-l7i3p6",null,ve,{above:l(g).placement==="above",below:l(g).placement==="below"}),ye(O,`top: ${l(g),M(()=>l(g).top)??""}px; left: ${l(g),M(()=>l(g).left)??""}px;`),S(ie,(l(t),M(()=>l(t).term))),S(xe,(l(t),M(()=>l(t).definition)))}),b(T,O)};se(ne,T=>{l(i)&&T(V)})}L(()=>{K=ze(z,1,"glossary-term svelte-l7i3p6",null,K,{inline:d(),active:l(i)}),q(z,"aria-describedby",l(i)?`tooltip-${a()}`:void 0),q(z,"aria-expanded",l(i))}),Q("click",z,_),Q("mouseenter",z,u),Q("mouseleave",z,k),Q("keydown",z,T=>T.key==="Enter"&&_(T)),b(E,R)},Z=E=>{var R=_e(),z=de(R);Ie(z,e,"default",{},null),b(E,R)};se(F,E=>{l(t)?E(j):E(Z,!1)})}b(s,P),U()}var ps=w(`<div class="intro-definition svelte-10mg3y6"><div class="title-block svelte-10mg3y6"><h1 class="svelte-10mg3y6">Promptotyping</h1> <p class="subtitle svelte-10mg3y6">Strukturiertes Context Engineering mit Vibe-Coding-Elementen</p></div> <div class="definition-block svelte-10mg3y6"><p class="definition svelte-10mg3y6"><strong class="svelte-10mg3y6">Promptotyping</strong> ist eine Methode zur systematischen Entwicklung funktionaler
      Prototypen durch strukturierte Interaktion mit <!>.
      Sie kombiniert die Intuition des "Vibe Codings" mit einem systematischen Framework zur
      Wissensaufbereitung, ein <!>-Prozess,
      der domänenspezifisches Wissen für LLMs optimal strukturiert.</p> <p class="etymology svelte-10mg3y6">Der Name setzt sich zusammen aus <em class="svelte-10mg3y6">Prompt</em> (die Eingabe an ein LLM) und <em class="svelte-10mg3y6">Prototyping</em> (iterative Entwicklung von Funktionsmustern).</p> <p class="context-addendum svelte-10mg3y6">Obwohl die Methodik ihren Ursprung in den Digital Humanities hat, sind ihre Mechanismen
      universell auf datenintensive Forschungsprozesse übertragbar, darunter statistische Analysen,
      Datenvisualisierung und explorative Analysen in verschiedensten Disziplinen.</p></div></div>`);function us(s){var e=ps(),t=r(o(e),2),n=o(t),a=r(o(n),2);Ke(a,{id:"llm",children:(i,c)=>{var h=Ce("Large Language Models");b(i,h)},$$slots:{default:!0}});var d=r(a,2);Ke(d,{id:"context-engineering",children:(i,c)=>{var h=Ce("Context Engineering");b(i,h)},$$slots:{default:!0}}),b(s,e)}var hs=w('<button><span class="trigger-icon svelte-wjh6ga">←</span> <span class="trigger-label svelte-wjh6ga"> </span> <span class="trigger-hint svelte-wjh6ga">Deep Dive</span></button>');function oe(s,e){G(e,!1);let t=J(e,"label",8,"Mehr erfahren"),n=J(e,"deepDiveId",8,""),a=J(e,"variant",8,"inline");const d=rt();function i(){d("open",{id:n()})}H();var c=hs(),h=r(o(c),2),v=o(h);L(()=>{ze(c,1,`deep-dive-trigger ${a()??""}`,"svelte-wjh6ga"),q(c,"aria-label",`Deep Dive öffnen: ${t()??""}`),S(v,t())}),Q("click",c,i),b(s,c),U()}var gs=w(`<div class="intro-kernprinzip svelte-jio7ez"><div class="content svelte-jio7ez"><h3 class="svelte-jio7ez">Strange New Minds</h3> <div class="main-layout svelte-jio7ez"><div class="text-card svelte-jio7ez"><p class="svelte-jio7ez">LLMs sind <em class="svelte-jio7ez">"Strange New Minds"</em> (Summerfield, 2025), weder reine Werkzeuge
          noch echte Intelligenz. Sie sind statistische Mustermaschinen, die überzeugende
          Outputs produzieren, ohne deren Wahrheit validieren zu können. Diese "halluzinierenden
          Reasoner" erfordern externe Verifikation durch Domänenexpert:innen.</p> <p class="svelte-jio7ez">Promptotyping nutzt das Konzept der <strong class="svelte-jio7ez">Co-Intelligence</strong> nach Ethan Mollick (2024)
          für die produktive Zusammenarbeit zwischen menschlicher Expertise und KI-Fähigkeiten.
          Dabei wechseln wir zwischen zwei Modi. <strong class="svelte-jio7ez">Centaur-Arbeit</strong> mit klarer Aufgabenteilung
          eignet sich für strukturierte Phasen wie die Dokumenterstellung. <strong class="svelte-jio7ez">Cyborg-Arbeit</strong> mit fließender Zusammenarbeit auf Satzebene ist charakteristisch für explorative Phasen
          und kreative Iteration.</p></div> <div class="image-placeholder svelte-jio7ez"><div class="placeholder-box svelte-jio7ez"><span class="placeholder-icon svelte-jio7ez">🖼️</span> <span class="placeholder-text svelte-jio7ez">Bild</span></div> <p class="image-caption svelte-jio7ez">Weder Werkzeug noch Geist. LLMs als fremdartige Intelligenz,
          die menschliche Verifikation erfordert.</p></div></div> <div class="deep-dive-triggers svelte-jio7ez"><!> <!> <!></div></div></div>`);function ms(s,e){G(e,!1);function t(v){Se(v.detail.id)}H();var n=gs(),a=o(n),d=r(o(a),4),i=o(d);oe(i,{label:"Co-Intelligence",deepDiveId:"co-intelligence",$$events:{open:t}});var c=r(i,2);oe(c,{label:"System 1.42 – LLM-Grundlagen",deepDiveId:"system-1-42",$$events:{open:t}});var h=r(c,2);oe(h,{label:"Scholar-Centered Design",deepDiveId:"scholar-centered-design",$$events:{open:t}}),b(s,n),U()}var fs=w(`<div class="intro-methodik svelte-p6qtke"><div class="content svelte-p6qtke"><h3 class="svelte-p6qtke">Critical Expert in the Loop</h3> <div class="explanation svelte-p6qtke"><p class="svelte-p6qtke">Ein zentrales Prinzip von Promptotyping: <strong class="svelte-p6qtke">Domänenexpert:innen bleiben unverzichtbar</strong>.
        LLMs können technisch korrekte, aber fachlich inadäquate Lösungen produzieren. Nur Expert:innen
        erkennen, ob eine Visualisierung historisch sinnvoll ist oder ob Kategorisierungen dem
        Forschungsgegenstand gerecht werden.</p> <p class="vibe-coding-note svelte-p6qtke"><strong class="svelte-p6qtke">Verhältnis zu Vibe Coding</strong> Promptotyping ist kein Gegenentwurf zu Vibe Coding,
        sondern gibt ihm Struktur für Forschungskontexte. Die intuitive, explorative Arbeitsweise
        bleibt erhalten, ergänzt durch systematische Dokumentation, die <!> verhindert und die Informationsdichte maximiert.</p></div> <div class="method-cards svelte-p6qtke"><div class="method-card svelte-p6qtke"><div class="card-icon svelte-p6qtke"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="svelte-p6qtke"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14,2 14,8 20,8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg></div> <h4 class="svelte-p6qtke">Vault-Dokumentation</h4> <p class="svelte-p6qtke">DATA.md, REQUIREMENTS.md, CONTEXT.md – strukturiertes Wissen als LLM-Input</p></div> <div class="method-card svelte-p6qtke"><div class="card-icon svelte-p6qtke"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="svelte-p6qtke"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg></div> <h4 class="svelte-p6qtke">Iterative Updates</h4> <p class="svelte-p6qtke">Der Vault wächst mit jeder Iteration – neues Wissen fließt zurück</p></div> <div class="method-card svelte-p6qtke"><div class="card-icon svelte-p6qtke"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="svelte-p6qtke"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div> <h4 class="svelte-p6qtke">Expert Validation</h4> <p class="svelte-p6qtke">Domänenexpert:innen validieren jeden Output kritisch</p></div></div> <div class="deep-dive-triggers svelte-p6qtke"><!> <!> <!></div></div></div>`);function bs(s,e){G(e,!1);function t(u){Se(u.detail.id)}H();var n=fs(),a=o(n),d=r(o(a),2),i=r(o(d),2),c=r(o(i),2);Ke(c,{id:"context-rot",children:(u,k)=>{var _=Ce("Context Rot");b(u,_)},$$slots:{default:!0}});var h=r(d,4),v=o(h);oe(v,{label:"Critical Expert",deepDiveId:"critical-expert",$$events:{open:t}});var g=r(v,2);oe(g,{label:"Context Engineering",deepDiveId:"context-engineering",$$events:{open:t}});var m=r(g,2);oe(m,{label:"Grenzen & Limitationen",deepDiveId:"limitations",$$events:{open:t}}),b(s,n),U()}const ks="/PromptotypingExplainer/assets/promptotyping-overview-AcSHP9K_.png";var ys=w('<div class="phase-icon svelte-hawgxw"><div class="icon-circle svelte-hawgxw"> </div> <span class="icon-label svelte-hawgxw"> </span> <span class="icon-subtitle svelte-hawgxw"> </span></div>'),xs=w('<div class="intro-phasen svelte-hawgxw"><div class="content svelte-hawgxw"><h3 class="svelte-hawgxw">Die vier Phasen</h3> <div class="phase-icons svelte-hawgxw"></div> <div class="overview-image svelte-hawgxw"><img alt="Promptotyping Workflow: Vorbereitung, Exploration, Destillation, Implementation" class="svelte-hawgxw"/></div></div></div>');function ws(s,e){G(e,!1);const t=N.filter(h=>h.number!==null);H();var n=xs(),a=o(n),d=r(o(a),2);ue(d,5,()=>t,he,(h,v)=>{var g=ys(),m=o(g),u=o(m),k=r(m,2),_=o(k),y=r(k,2),$=o(y);L(()=>{S(u,l(v).number),S(_,l(v).label),S($,l(v).subtitle)}),b(h,g)});var i=r(d,2),c=o(i);L(()=>q(c,"src",ks)),b(s,n),U()}var _s=w(`<div class="phase1-titel svelte-k7vkqd"><header class="scene-header svelte-k7vkqd"><span class="phase-number svelte-k7vkqd">Phase 1</span> <h2 class="svelte-k7vkqd">Vorbereitung</h2> <p class="subtitle svelte-k7vkqd">Materialsammlung</p></header> <div class="content svelte-k7vkqd"><p class="svelte-k7vkqd">Die <strong class="svelte-k7vkqd">Preparation</strong>-Phase sammelt alle relevanten Rohmaterialien, darunter
      Forschungsdaten, Dokumentation zu Standards und Modellen,
      Forschungsfragen und Domänenwissen.</p> <p class="highlight svelte-k7vkqd">Diese Phase verhindert die unkritische Übernahme technischer Lösungen
      für wissenschaftliche Probleme und zwingt zur präzisen Artikulation der Projektziele.</p> <div class="deep-dive-row svelte-k7vkqd"><!> <!></div></div></div>`);function zs(s,e){G(e,!1);function t(v){Se(v.detail.id)}H();var n=_s(),a=o(n),d=r(a,2),i=r(o(d),4),c=o(i);oe(c,{label:"Context Engineering",deepDiveId:"context-engineering",$$events:{open:t}});var h=r(c,2);oe(h,{label:"Critical Expert",deepDiveId:"critical-expert",$$events:{open:t}}),p(1,a,()=>A,()=>({y:-20,duration:500})),p(1,d,()=>x,()=>({delay:200,duration:400})),p(1,n,()=>x,()=>({duration:400})),b(s,n),U()}var Ds=w('<div class="document-icon svelte-119o94q" role="img"><svg viewBox="0 0 40 52" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-119o94q"><path d="M2 4C2 2.89543 2.89543 2 4 2H26L38 14V48C38 49.1046 37.1046 50 36 50H4C2.89543 50 2 49.1046 2 48V4Z" fill="white" stroke-width="2"></path><path d="M26 2V12C26 13.1046 26.8954 14 28 14H38" stroke-width="2"></path><text x="20" y="36" text-anchor="middle" font-size="10" font-weight="600" font-family="var(--font-mono)"> </text></svg></div>');function lt(s,e){G(e,!1);const t=te();let n=J(e,"type",8,"xml"),a=J(e,"size",8,48);const d={xml:{color:"#607D8B",symbol:"</>"},pdf:{color:"#E53935",symbol:"PDF"},csv:{color:"#4CAF50",symbol:"|||"},notes:{color:"#FF9800",symbol:"≡"},md:{color:"#1A1A1A",symbol:"MD"}};ge(()=>qe(n()),()=>{B(t,d[n()]||d.xml)}),Le(),H();var i=Ds(),c=o(i),h=o(c),v=r(h),g=r(v),m=o(g);L(u=>{ye(i,`width: ${a()??""}px; height: ${a()*1.3}px;`),q(i,"aria-label",`${u??""} Dokument`),q(h,"stroke",(l(t),M(()=>l(t).color))),q(v,"stroke",(l(t),M(()=>l(t).color))),q(g,"fill",(l(t),M(()=>l(t).color))),S(m,(l(t),M(()=>l(t).symbol)))},[()=>(qe(n()),M(()=>n().toUpperCase()))]),b(s,i),U()}const ot=[{id:"intro",title:"Promptotyping",subtitle:"Vom Wissen zum Werkzeug",question:"Wie wird aus Forschungsdaten ein funktionales Interface?"},{id:"phase1",number:1,title:"Vorbereitung",subtitle:"Materialsammlung",description:"Sammlung aller relevanten Materialien.",artifacts:[{type:"xml",label:"TEI/XML"},{type:"pdf",label:"Spezifikation"},{type:"csv",label:"Rohdaten"},{type:"notes",label:"Notizen"}]},{id:"phase2",number:2,title:"Exploration",subtitle:"Epistemische Spielwiese",description:"Freies Experimentieren mit dem Rohmaterial. Keine formalen Artefakte – die Erkenntnisse fließen in Phase 3."},{id:"phase3",number:3,title:"Destillation",subtitle:"Wissenskomprimierung",description:"Überführung in kompakte Markdown-Dokumente.",documents:[{name:"data.md",purpose:"Struktur und Semantik der Forschungsdaten"},{name:"user-story.md",purpose:"Anforderungen aus Forschungsperspektive"},{name:"context.md",purpose:"Relevantes Domänenwissen"}],closingText:"Destilliertes Wissen. Bereit für das LLM."},{id:"phase4",number:4,title:"Iterative Implementation",subtitle:"Iterative Entwicklung",description:"Der eigentliche Promptotyping-Dialog beginnt.",closingText:"Vom Wissen zum Werkzeug."}];var Es=w('<div class="material-item svelte-17gbft8"><div class="icon-container svelte-17gbft8"><!></div> <span class="label svelte-17gbft8"> </span></div>'),$s=w('<div class="phase1-rohdaten svelte-17gbft8"><h3 class="svelte-17gbft8">Rohmaterialien sammeln</h3> <p class="description svelte-17gbft8">Forschungsdaten in verschiedenen Formaten bilden die Grundlage</p> <div class="materials-cloud svelte-17gbft8"></div></div>');function Ps(s,e){G(e,!1);const t=ot[1].artifacts,n=[{x:-140,y:-70,delay:0},{x:130,y:-50,delay:100},{x:-110,y:70,delay:200},{x:150,y:60,delay:300}];H();var a=$s(),d=o(a),i=r(d,2),c=r(i,2);ue(c,5,()=>t,he,(h,v,g)=>{var m=Es(),u=o(m),k=o(u);lt(k,{get type(){return l(v).type}});var _=r(u,2),y=o(_);L(()=>{ye(m,`--offset-x: ${n[g].x??""}px; --offset-y: ${n[g].y??""}px;`),S(y,l(v).label)}),p(1,_,()=>x,()=>({delay:500+n[g].delay})),p(1,m,()=>A,()=>({x:n[g].x>0?100:-100,y:-30,duration:500,delay:300+n[g].delay})),b(h,m)}),p(1,d,()=>x,()=>({duration:400})),p(1,i,()=>x,()=>({delay:150,duration:400})),b(s,a),U()}var Ms=w('<div class="icon-stacked svelte-6tqdd3"><!> <span class="label svelte-6tqdd3"> </span></div>'),Is=w('<div class="phase1-sammlung svelte-6tqdd3"><h3 class="svelte-6tqdd3">Materialien gesammelt</h3> <div class="workspace svelte-6tqdd3"><div class="workspace-area svelte-6tqdd3"></div></div> <p class="ready-text svelte-6tqdd3">Alle Materialien bereit für die <strong class="svelte-6tqdd3">Exploration</strong></p></div>');function Cs(s,e){G(e,!1);const t=ot[1].artifacts,n=[{x:-22,y:-18,rotate:-6},{x:28,y:-10,rotate:9},{x:-18,y:14,rotate:-4},{x:24,y:22,rotate:6}];H();var a=Is(),d=o(a),i=r(d,2),c=o(i);ue(c,5,()=>t,he,(v,g,m)=>{var u=Ms(),k=o(u);lt(k,{get type(){return l(g).type}});var _=r(k,2),y=o(_);L(()=>{ye(u,`transform: translate(${n[m].x??""}px, ${n[m].y??""}px) rotate(${n[m].rotate??""}deg);`),S(y,l(g).label)}),p(1,_,()=>x,()=>({delay:550+m*60})),p(1,u,()=>A,()=>({y:-40,duration:400,delay:200+m*80})),b(v,u)});var h=r(i,2);p(1,d,()=>x,()=>({duration:400})),p(1,i,()=>Ae,()=>({duration:400,start:.9})),p(1,h,()=>x,()=>({delay:700,duration:400})),b(s,a),U()}const Ls="/PromptotypingExplainer/assets/exploration-CciyC_CV.png";var Ss=w(`<div class="phase2-exploration svelte-pwk459"><header class="scene-header svelte-pwk459"><span class="phase-number svelte-pwk459">Phase 2</span> <h2 class="svelte-pwk459">Exploration</h2> <p class="subtitle svelte-pwk459">Die epistemische Spielwiese</p></header> <div class="content-block svelte-pwk459"><p class="lead svelte-pwk459">Freies Experimentieren mit dem Rohmaterial. LLM-gestützte Analyse der Daten,
      erste Prompt-Versuche, Erkundung der Möglichkeitsräume, <strong class="svelte-pwk459">ohne Dokumentationszwang</strong>.</p> <div class="key-point svelte-pwk459"><span class="key-label svelte-pwk459">Kennzeichen</span> <p class="svelte-pwk459">Diese Phase produziert <strong class="svelte-pwk459">keine formalen Artefakte</strong>. Die Erkenntnisse fließen informell in die Destillation (Phase 3) ein.</p></div> <div class="example-box svelte-pwk459"><div class="example-label svelte-pwk459">Beispiel-Prompts</div> <p class="example-text svelte-pwk459">"Analysiere die Struktur dieser XML-Dateien: Welche Elemente kommen vor?"<br/><br/> "Erkläre mir das Datenmodell, das du in diesen Dokumenten erkennst."<br/><br/> "Welche Entitäten (Personen, Orte, Zeiten) sind in den Daten enthalten?"</p></div></div> <figure class="exploration-visual svelte-pwk459"><img alt="LLM-gestützte Exploration der Rohdaten" class="svelte-pwk459"/> <figcaption class="svelte-pwk459">Verstehen durch Experimentieren – keine Dokumentation, nur Erkenntnis</figcaption></figure> <p class="transition-hint svelte-pwk459">Was hier verstanden wird, wird in Phase 3 <strong class="svelte-pwk459">destilliert</strong></p></div>`);function As(s){var e=Ss(),t=o(e),n=r(t,2),a=r(n,2),d=o(a),i=r(a,2);L(()=>q(d,"src",Ls)),p(1,t,()=>A,()=>({y:-20,duration:500})),p(1,n,()=>x,()=>({delay:200,duration:400})),p(1,a,()=>A,()=>({y:30,duration:500,delay:400})),p(1,i,()=>x,()=>({delay:600,duration:400})),p(1,e,()=>x,()=>({duration:400})),b(s,e)}var Ts=w(`<div class="phase3-titel svelte-btytv1"><header class="scene-header svelte-btytv1"><span class="phase-number svelte-btytv1">Phase 3</span> <h2 class="svelte-btytv1">Destillation</h2> <p class="subtitle svelte-btytv1">Vom Rohmaterial zum Vault</p></header> <div class="content-block svelte-btytv1"><p class="lead svelte-btytv1">Die Erkenntnisse aus der Exploration werden nun <strong class="svelte-btytv1">destilliert</strong>.
      Das Kernprinzip: maximale Information mit minimalen Tokens. Je präziser der Kontext,
      desto besser die LLM-Performance – denn <strong class="svelte-btytv1">Context Rot</strong> ist real.</p> <div class="vault-preview svelte-btytv1"><div class="vault-icon svelte-btytv1"><svg viewBox="0 0 64 64" width="80" height="80"><rect x="8" y="16" width="48" height="40" rx="4" fill="none" stroke="currentColor" stroke-width="2"></rect><path d="M8 28 L56 28" stroke="currentColor" stroke-width="2"></path><circle cx="32" cy="38" r="6" fill="none" stroke="currentColor" stroke-width="2"></circle><path d="M32 32 L32 20" stroke="currentColor" stroke-width="2"></path><rect x="24" y="8" width="16" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="2"></rect></svg></div> <p class="vault-label svelte-btytv1">Der Promptotyping Vault</p></div></div> <p class="insight svelte-btytv1">Hier entstehen die <strong class="svelte-btytv1">.md-Dateien</strong> - optimiert für das LLM</p></div>`);function Fs(s){var e=Ts(),t=o(e),n=r(t,2),a=r(o(n),2),d=o(a),i=r(d,2),c=r(n,2);p(1,t,()=>A,()=>({y:-20,duration:500})),p(1,d,()=>A,()=>({y:20,duration:400,delay:400})),p(1,i,()=>x,()=>({delay:600,duration:400})),p(1,n,()=>x,()=>({delay:200,duration:400})),p(1,c,()=>x,()=>({delay:800,duration:400})),b(s,e)}var Vs=w('<div class="phase3-dokumente svelte-1ipbydp"><h3 class="svelte-1ipbydp">Die Vault-Dokumente</h3> <p class="description svelte-1ipbydp">Drei Kerndokumente verdichten das Wissen für LLMs optimal. Das Prinzip der <strong class="svelte-1ipbydp">Context Compression</strong> bedeutet maximale Information bei minimaler Token-Anzahl.</p> <div class="documents-grid svelte-1ipbydp"><div class="document svelte-1ipbydp"><div class="doc-icon data svelte-1ipbydp"><span class="doc-ext svelte-1ipbydp">.md</span></div> <div class="doc-content svelte-1ipbydp"><h4 class="svelte-1ipbydp">DATA.md</h4> <p class="svelte-1ipbydp">Struktur und Semantik der Forschungsdaten, also Schema, Felder und Beziehungen</p></div></div> <div class="document svelte-1ipbydp"><div class="doc-icon requirements svelte-1ipbydp"><span class="doc-ext svelte-1ipbydp">.md</span></div> <div class="doc-content svelte-1ipbydp"><h4 class="svelte-1ipbydp">REQUIREMENTS.md</h4> <p class="svelte-1ipbydp">Formalisierte Anforderungen mit MUSS / SOLL / KANN Priorisierung</p></div></div> <div class="document svelte-1ipbydp"><div class="doc-icon context svelte-1ipbydp"><span class="doc-ext svelte-1ipbydp">.md</span></div> <div class="doc-content svelte-1ipbydp"><h4 class="svelte-1ipbydp">CONTEXT.md</h4> <p class="svelte-1ipbydp">Domänenwissen, Forschungsfragen und Projektziele</p></div></div></div></div>');function qs(s){var e=Vs(),t=o(e),n=r(t,2),a=r(n,2),d=o(a),i=r(d,2),c=r(i,2);p(1,t,()=>x,()=>({duration:400})),p(1,n,()=>x,()=>({delay:150,duration:400})),p(1,d,()=>A,()=>({y:30,duration:500,delay:300})),p(1,i,()=>A,()=>({y:30,duration:500,delay:450})),p(1,c,()=>A,()=>({y:30,duration:500,delay:600})),b(s,e)}var js=w('<div class="phase3-vault svelte-1don6ot"><h3 class="svelte-1don6ot">Der Vault ist bereit</h3> <p class="description svelte-1don6ot">Destilliertes Wissen, komprimiert und strukturiert für das LLM</p> <div class="vault-visual svelte-1don6ot"><div class="source-flow svelte-1don6ot"><div class="source-item svelte-1don6ot"><span class="source-label svelte-1don6ot">Rohdaten</span> <div class="arrow svelte-1don6ot">→</div></div> <div class="source-item svelte-1don6ot"><span class="source-label svelte-1don6ot">Mapping</span> <div class="arrow svelte-1don6ot">→</div></div> <div class="source-item svelte-1don6ot"><span class="source-label svelte-1don6ot">Fragen</span> <div class="arrow svelte-1don6ot">→</div></div></div> <div class="vault-center svelte-1don6ot"><div class="vault-box svelte-1don6ot"><div class="vault-header svelte-1don6ot">VAULT</div> <div class="vault-files svelte-1don6ot"><span class="file svelte-1don6ot">DATA.md</span> <span class="file svelte-1don6ot">REQUIREMENTS.md</span> <span class="file svelte-1don6ot">CONTEXT.md</span></div></div></div> <div class="llm-flow svelte-1don6ot"><div class="arrow large svelte-1don6ot">→</div> <div class="llm-target svelte-1don6ot"><span class="llm-label svelte-1don6ot">Phase 4</span> <span class="llm-sublabel svelte-1don6ot">Implementation</span></div></div></div> <p class="conclusion svelte-1don6ot">Das Wissen ist verdichtet und <strong class="svelte-1don6ot">bereit für den LLM-Dialog</strong></p></div>');function Rs(s){var e=js(),t=o(e),n=r(t,2),a=r(n,2),d=o(a),i=r(d,2),c=r(i,2),h=r(a,2);p(1,t,()=>x,()=>({duration:400})),p(1,n,()=>x,()=>({delay:150,duration:400})),p(1,d,()=>x,()=>({delay:300,duration:400})),p(1,i,()=>Ae,()=>({duration:500,delay:500})),p(1,c,()=>x,()=>({delay:700,duration:400})),p(1,h,()=>x,()=>({delay:900,duration:400})),b(s,e)}var Ks=w(`<div class="phase4-titel svelte-1jfm6fv"><header class="scene-header svelte-1jfm6fv"><span class="phase-number svelte-1jfm6fv">Phase 4</span> <h2 class="svelte-1jfm6fv">Implementation</h2> <p class="subtitle svelte-1jfm6fv">Iterative Entwicklung</p></header> <div class="content-block svelte-1jfm6fv"><p class="lead svelte-1jfm6fv">Der Vault wird dem LLM übergeben und die <strong class="svelte-1jfm6fv">Cyborg-Arbeit</strong> beginnt.
      Mensch und KI entwickeln gemeinsam, validieren iterativ und aktualisieren den Vault mit neuem Wissen.</p> <div class="cycle-preview svelte-1jfm6fv"><div class="cycle-step svelte-1jfm6fv"><span class="cycle-icon svelte-1jfm6fv">1</span> <span class="cycle-label svelte-1jfm6fv">Prompt + Vault</span></div> <div class="cycle-arrow svelte-1jfm6fv">→</div> <div class="cycle-step svelte-1jfm6fv"><span class="cycle-icon svelte-1jfm6fv">2</span> <span class="cycle-label svelte-1jfm6fv">LLM generiert</span></div> <div class="cycle-arrow svelte-1jfm6fv">→</div> <div class="cycle-step svelte-1jfm6fv"><span class="cycle-icon svelte-1jfm6fv">3</span> <span class="cycle-label svelte-1jfm6fv">Expert validiert</span></div></div></div> <p class="insight svelte-1jfm6fv">Jede Iteration = <strong class="svelte-1jfm6fv">neuer Prototype</strong> + potentielles Vault-Update</p></div>`);function Ws(s){var e=Ks(),t=o(e),n=r(t,2),a=r(o(n),2),d=r(n,2);p(1,t,()=>A,()=>({y:-20,duration:500})),p(1,a,()=>A,()=>({y:20,duration:400,delay:400})),p(1,n,()=>x,()=>({delay:200,duration:400})),p(1,d,()=>x,()=>({delay:600,duration:400})),b(s,e)}var Bs=w('<div class="phase4-iteration svelte-5lsmoa"><h3 class="svelte-5lsmoa">Der Iterationszyklus</h3> <p class="description svelte-5lsmoa">Prompt → LLM → Prototype → Validierung → Wiederholung</p> <div class="iteration-visual svelte-5lsmoa"><div class="iteration-block vault svelte-5lsmoa"><div class="block-icon svelte-5lsmoa"><svg viewBox="0 0 32 32" width="24" height="24"><rect x="4" y="8" width="24" height="20" rx="2" fill="none" stroke="currentColor" stroke-width="2"></rect><path d="M4 14 L28 14" stroke="currentColor" stroke-width="2"></path><circle cx="16" cy="21" r="3" fill="none" stroke="currentColor" stroke-width="2"></circle></svg></div> <span class="block-label svelte-5lsmoa">Vault</span> <span class="block-detail svelte-5lsmoa">.md Files</span></div> <div class="arrow svelte-5lsmoa">→</div> <div class="iteration-block llm svelte-5lsmoa"><div class="block-icon llm-icon svelte-5lsmoa"><span>LLM</span></div> <span class="block-label svelte-5lsmoa">Generierung</span> <span class="block-detail svelte-5lsmoa">Code + UI</span></div> <div class="arrow svelte-5lsmoa">→</div> <div class="iteration-block prototype svelte-5lsmoa"><div class="block-icon svelte-5lsmoa"><svg viewBox="0 0 32 32" width="24" height="24"><rect x="2" y="4" width="28" height="24" rx="2" fill="none" stroke="currentColor" stroke-width="2"></rect><path d="M2 10 L30 10" stroke="currentColor" stroke-width="2"></path><circle cx="6" cy="7" r="1.5" fill="currentColor"></circle><circle cx="11" cy="7" r="1.5" fill="currentColor"></circle></svg></div> <span class="block-label svelte-5lsmoa">Prototype</span> <span class="block-detail svelte-5lsmoa">Lauffähig</span></div></div> <div class="validation-row svelte-5lsmoa"><div class="validation-badge svelte-5lsmoa"><span class="expert-icon svelte-5lsmoa">👤</span> <span>Critical Expert validiert gegen REQUIREMENTS.md</span></div></div> <p class="conclusion svelte-5lsmoa">Der Code ist <strong class="svelte-5lsmoa">Ausgangspunkt</strong>, nicht Endpunkt</p></div>');function Ns(s){var e=Bs(),t=o(e),n=r(t,2),a=r(n,2),d=o(a),i=r(d,2),c=r(i,2),h=r(c,2),v=r(h,2),g=r(a,2),m=r(g,2);p(1,t,()=>x,()=>({duration:400})),p(1,n,()=>x,()=>({delay:150,duration:400})),p(1,d,()=>A,()=>({x:-30,duration:500,delay:300})),p(1,i,()=>x,()=>({delay:400})),p(1,c,()=>Ae,()=>({duration:400,delay:500})),p(1,h,()=>x,()=>({delay:600})),p(1,v,()=>A,()=>({x:30,duration:500,delay:700})),p(1,g,()=>x,()=>({delay:900,duration:400})),p(1,m,()=>x,()=>({delay:1100,duration:400})),b(s,e)}var Os=w('<div class="phase4-vault-update svelte-1dkyo20"><h3 class="svelte-1dkyo20">Vault-Update</h3> <p class="description svelte-1dkyo20">Neues Wissen fließt zurück und der Vault wächst mit jeder Iteration</p> <div class="update-visual svelte-1dkyo20"><div class="update-source svelte-1dkyo20"><div class="source-header svelte-1dkyo20">Prototype zeigt...</div> <div class="source-items svelte-1dkyo20"><div class="source-item svelte-1dkyo20">Fehlende Datenfelder</div> <div class="source-item svelte-1dkyo20">Unklare Anforderungen</div> <div class="source-item svelte-1dkyo20">Neue Erkenntnisse</div></div></div> <div class="update-arrow svelte-1dkyo20"><svg viewBox="0 0 60 40" width="60" height="40" class="svelte-1dkyo20"><path d="M5 20 L45 20" stroke="var(--color-terracotta)" stroke-width="2" stroke-dasharray="4 3"></path><polygon points="45,15 55,20 45,25" fill="var(--color-terracotta)"></polygon></svg> <span class="arrow-label svelte-1dkyo20">Update</span></div> <div class="update-target svelte-1dkyo20"><div class="target-header svelte-1dkyo20">Vault</div> <div class="target-items svelte-1dkyo20"><div class="target-item svelte-1dkyo20"><span class="file-name svelte-1dkyo20">DATA.md</span> <span class="update-type svelte-1dkyo20">+ Felder</span></div> <div class="target-item svelte-1dkyo20"><span class="file-name svelte-1dkyo20">REQUIREMENTS.md</span> <span class="update-type svelte-1dkyo20">+ Klarheit</span></div> <div class="target-item svelte-1dkyo20"><span class="file-name svelte-1dkyo20">CONTEXT.md</span> <span class="update-type svelte-1dkyo20">+ Wissen</span></div></div></div></div> <div class="loop-indicator svelte-1dkyo20"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" class="svelte-1dkyo20"><path d="M17 1l4 4-4 4"></path><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><path d="M7 23l-4-4 4-4"></path><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg> <span>Verbesserter Vault → besserer Prototype → nächste Iteration</span></div> <p class="conclusion svelte-1dkyo20"><strong>Vom Wissen zum Werkzeug</strong></p></div>');function Hs(s){var e=Os(),t=o(e),n=r(t,2),a=r(n,2),d=o(a),i=r(d,2),c=r(i,2),h=r(o(c),2),v=o(h),g=r(v,2),m=r(g,2),u=r(a,2),k=r(u,2);p(1,t,()=>x,()=>({duration:400})),p(1,n,()=>x,()=>({delay:150,duration:400})),p(1,d,()=>A,()=>({x:-30,duration:500,delay:300})),p(1,i,()=>x,()=>({delay:500,duration:400})),p(1,v,()=>x,()=>({delay:600})),p(1,g,()=>x,()=>({delay:700})),p(1,m,()=>x,()=>({delay:800})),p(1,c,()=>A,()=>({x:30,duration:500,delay:400})),p(1,u,()=>x,()=>({delay:900,duration:400})),p(1,k,()=>x,()=>({delay:1e3,duration:400})),b(s,e)}var Us=w('<a target="_blank" rel="noopener" class="example-card svelte-1es890x"><h3 class="svelte-1es890x"> </h3> <p class="description svelte-1es890x"> </p> <div class="card-footer svelte-1es890x"><span class="time svelte-1es890x"><svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" class="svelte-1es890x"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM7 3v5.5l4 2.5.5-.87-3.5-2.13V3H7z"></path></svg> </span> <span class="link-arrow svelte-1es890x">→</span></div></a>'),Gs=w('<div class="outro-beispiele svelte-1es890x"><header class="scene-header svelte-1es890x"><span class="section-label svelte-1es890x">Praxis</span> <h2 class="svelte-1es890x">Case Studies</h2> <p class="subtitle svelte-1es890x">Promptotyping in Aktion</p></header> <div class="examples-grid svelte-1es890x"></div> <p class="insight svelte-1es890x">Von <strong class="svelte-1es890x">2 Stunden</strong> bis <strong class="svelte-1es890x">25 Stunden</strong>, je nach Komplexität</p></div>');function Zs(s){const e=[{name:"CorrespExplorer",description:"CMIF-Korrespondenzdaten → Netzwerk, Timeline, Karte",time:"2 Nachmittage",link:"https://dhcraft.org/CorrespExplorer"},{name:"Lucina Digital Edition",description:"Neulateinische Gedichte → TEI-Edition",time:"25 h",link:"https://chpollin.github.io/diged-neolat/edition-5/web/"},{name:"REALonline Inventare",description:"Mittelalterliche Rauminventare → Dashboard",time:"5 h",link:"https://chpollin.github.io/imareal-room-object/"},{name:"Stefan Zweig Digital",description:"GAMS-Metadaten → Timeline-Tool",time:"2 h",link:"https://dhcraft.org/excellence/promptotyping/szd-annotation-timeline/"}];var t=Gs(),n=o(t),a=r(n,2);ue(a,5,()=>e,he,(i,c,h)=>{var v=Us(),g=o(v),m=o(g),u=r(g,2),k=o(u),_=r(u,2),y=o(_),$=r(o(y));L(()=>{q(v,"href",l(c).link),S(m,l(c).name),S(k,l(c).description),S($,` ${l(c).time??""}`)}),p(1,v,()=>A,()=>({y:30,duration:400,delay:200+h*100})),b(i,v)});var d=r(a,2);p(1,n,()=>A,()=>({y:-20,duration:500})),p(1,d,()=>x,()=>({delay:800,duration:400})),b(s,t)}var Xs=w(`<div class="outro-zusammenfassung svelte-pz9g48"><h3 class="svelte-pz9g48">Promptotyping</h3> <blockquote class="svelte-pz9g48">Das Mapping von semantisch reichhaltigen Forschungsdaten und explizitem
    Forschungskontext auf funktionale Interfaces durch iterative
    Mensch-LLM-Kollaboration.</blockquote> <div class="imperatives svelte-pz9g48"><div class="imperative svelte-pz9g48"><div class="imp-icon svelte-pz9g48">1</div> <h4 class="svelte-pz9g48">Epistemische Wachsamkeit</h4> <p class="svelte-pz9g48">Jede LLM-Nutzung reflektiert ihre Implikationen</p></div> <div class="imperative svelte-pz9g48"><div class="imp-icon svelte-pz9g48">2</div> <h4 class="svelte-pz9g48">Methodische Transparenz</h4> <p class="svelte-pz9g48">Nachvollziehbare Dokumentation aller Entscheidungen</p></div> <div class="imperative svelte-pz9g48"><div class="imp-icon svelte-pz9g48">3</div> <h4 class="svelte-pz9g48">Kritische Solidarität</h4> <p class="svelte-pz9g48">Die Community entwickelt gemeinsam Standards</p></div></div> <div class="limitations-trigger svelte-pz9g48"><!></div> <div class="cta svelte-pz9g48"><p class="final-text svelte-pz9g48">Vom Wissen zum Werkzeug.</p> <a href="https://github.com/DigitalHumanitiesCraft/CorrespExplorer" target="_blank" rel="noopener" class="cta-btn svelte-pz9g48">CorrespExplorer auf GitHub erkunden</a></div></div>`);function Qs(s,e){G(e,!1);function t(k){Se(k.detail.id)}H();var n=Xs(),a=o(n),d=r(a,2),i=r(d,2),c=o(i),h=r(c,2),v=r(h,2),g=r(i,2),m=o(g);oe(m,{label:"Kritische Reflexion: Grenzen der Methode",deepDiveId:"limitations",variant:"block",$$events:{open:t}});var u=r(g,2);p(1,a,()=>x,()=>({duration:400})),p(1,d,()=>A,()=>({y:20,duration:500,delay:200})),p(1,c,()=>A,()=>({y:20,duration:400,delay:400})),p(1,h,()=>A,()=>({y:20,duration:400,delay:500})),p(1,v,()=>A,()=>({y:20,duration:400,delay:600})),p(1,g,()=>x,()=>({delay:700,duration:400})),p(1,u,()=>Ae,()=>({duration:400,delay:800})),b(s,n),U()}var Js=w('<div class="background-layer svelte-1n46o8q"></div> <!> <main class="scroll-container svelte-1n46o8q"><!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!></main> <!>',1);function Ys(s,e){G(e,!1);const t=()=>ae(ce,"$currentPhase",c),n=()=>ae(me,"$currentStep",c),a=()=>ae(Rt,"$globalProgress",c),d=()=>ae(Oe,"$isDeepDiveOpen",c),i=()=>ae(Ne,"$currentDeepDive",c),[c,h]=We(),v=te();Be(()=>(Kt(),setTimeout(()=>{Ve()},300),window.addEventListener("hashchange",Ve),()=>window.removeEventListener("hashchange",Ve)));function g(f,D,ie){return f+(D-f)*ie}ge(()=>(t(),n()),()=>{typeof window<"u"&&Wt(t(),n())}),ge(()=>a(),()=>{B(v,(()=>{const f=a();let D;f<.2?D=0:f<.5?D=(f-.2)/.3:f<.85?D=1:D=1-(f-.85)/.15*.3;const ie=Math.round(g(96,191,D)),re=Math.round(g(125,91,D)),fe=Math.round(g(139,62,D)),be=.04+f*.12,xe=30+f*40,Te=50-Math.sin(f*Math.PI)*20,$e=70-f*20;return`radial-gradient(ellipse at ${xe}% ${Te}%, rgba(${ie}, ${re}, ${fe}, ${be}) 0%, rgba(232, 232, 232, 1) ${$e}%)`})())}),Le(),H();var m=Js(),u=de(m),k=r(u,2);ss(k,{});var _=r(k,2),y=o(_);Qt(y,{});var $=r(y,2);W($,{id:"intro-definition",phaseIndex:0,stepIndex:0,children:(f,D)=>{us(f)},$$slots:{default:!0}});var I=r($,2);W(I,{id:"intro-kernprinzip",phaseIndex:0,stepIndex:1,children:(f,D)=>{ms(f,{})},$$slots:{default:!0}});var C=r(I,2);W(C,{id:"intro-methodik",phaseIndex:0,stepIndex:2,children:(f,D)=>{bs(f,{})},$$slots:{default:!0}});var P=r(C,2);W(P,{id:"intro-phasen",phaseIndex:0,stepIndex:3,children:(f,D)=>{ws(f,{})},$$slots:{default:!0}});var F=r(P,2);W(F,{id:"phase1-titel",phaseIndex:1,stepIndex:0,children:(f,D)=>{zs(f,{})},$$slots:{default:!0}});var j=r(F,2);W(j,{id:"phase1-rohdaten",phaseIndex:1,stepIndex:1,children:(f,D)=>{Ps(f,{})},$$slots:{default:!0}});var Z=r(j,2);W(Z,{id:"phase1-sammlung",phaseIndex:1,stepIndex:2,children:(f,D)=>{Cs(f,{})},$$slots:{default:!0}});var E=r(Z,2);W(E,{id:"phase2-exploration",phaseIndex:2,stepIndex:0,children:(f,D)=>{As(f)},$$slots:{default:!0}});var R=r(E,2);W(R,{id:"phase3-titel",phaseIndex:3,stepIndex:0,children:(f,D)=>{Fs(f)},$$slots:{default:!0}});var z=r(R,2);W(z,{id:"phase3-dokumente",phaseIndex:3,stepIndex:1,children:(f,D)=>{qs(f)},$$slots:{default:!0}});var K=r(z,2);W(K,{id:"phase3-vault",phaseIndex:3,stepIndex:2,children:(f,D)=>{Rs(f)},$$slots:{default:!0}});var X=r(K,2);W(X,{id:"phase4-titel",phaseIndex:4,stepIndex:0,children:(f,D)=>{Ws(f)},$$slots:{default:!0}});var ne=r(X,2);W(ne,{id:"phase4-iteration",phaseIndex:4,stepIndex:1,children:(f,D)=>{Ns(f)},$$slots:{default:!0}});var V=r(ne,2);W(V,{id:"phase4-vault-update",phaseIndex:4,stepIndex:2,children:(f,D)=>{Hs(f)},$$slots:{default:!0}});var T=r(V,2);W(T,{id:"outro-beispiele",phaseIndex:5,stepIndex:0,children:(f,D)=>{Zs(f)},$$slots:{default:!0}});var O=r(T,2);W(O,{id:"outro-zusammenfassung",phaseIndex:5,stepIndex:1,children:(f,D)=>{Qs(f,{})},$$slots:{default:!0}});var ve=r(_,2);{let f=ke(()=>(i(),M(()=>i()?.title||""))),D=ke(()=>(i(),M(()=>i()?.content||"")));as(ve,{get isOpen(){return d()},get title(){return l(f)},get content(){return l(D)},$$events:{close(...ie){Nt?.apply(this,ie)}}})}L(()=>ye(u,`background: ${l(v)??""};`)),b(s,m),U(),h()}$t(Ys,{target:document.getElementById("app")});
