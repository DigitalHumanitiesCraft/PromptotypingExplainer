import{a as kt,E as yt,B as wt,b as xt,e as lt,u as q,T as zt,w as ot,i as Dt,q as dt,n as Se,s as _t,c as Pt,d as Et,r as Lt,S as St,f as Mt,g as $e,h as Ce,j,k as w,l as oe,m,p as O,o as Ue,t as N,v as de,x as i,y as r,z as Pe,A as n,C as A,D as Ee,F as R,G as $,H as J,I as pe,J as $t,K as ye,L as Ve,M as se,N as M,O as ge,P as re,Q as qe,R as Me,$ as Ct,U as Ne,V as At,W as Z,X as It}from"./legacy-C0Jhm6HA.js";import{o as Ke,c as ct,a as Ye}from"./case-studies-B6ddyGcR.js";import{i as Y}from"./if-BeITjswG.js";import{s as Le}from"./style-CVi7sZUO.js";import{h as Ft}from"./html-Rx8xiX3v.js";import{g as Tt}from"./glossary-CgJV2LYV.js";import{g as et}from"./bibliography-BOtz8mmB.js";const qt=()=>performance.now(),he={tick:s=>requestAnimationFrame(s),now:()=>qt(),tasks:new Set};function ut(){const s=he.now();he.tasks.forEach(e=>{e.c(s)||(he.tasks.delete(e),e.f())}),he.tasks.size!==0&&he.tick(ut)}function Vt(s){let e;return he.tasks.size===0&&he.tick(ut),{promise:new Promise(t=>{he.tasks.add(e={c:s,f:t})}),abort(){he.tasks.delete(e)}}}function Te(s,e){ot(()=>{s.dispatchEvent(new CustomEvent(e))})}function Kt(s){if(s==="float")return"cssFloat";if(s==="offset")return"cssOffset";if(s.startsWith("--"))return s;const e=s.split("-");return e.length===1?e[0]:e[0]+e.slice(1).map(t=>t[0].toUpperCase()+t.slice(1)).join("")}function tt(s){const e={},t=s.split(";");for(const a of t){const[o,d]=a.split(":");if(!o||d===void 0)break;const l=Kt(o.trim());e[l]=d.trim()}return e}const Rt=s=>s;function b(s,e,t,a){var o=(s&Pt)!==0,d=(s&Et)!==0,l=o&&d,u=(s&zt)!==0,h=l?"both":o?"in":"out",g,v=e.inert,p=e.style.overflow,c,f;function x(){return ot(()=>g??=t()(e,a?.()??{},{direction:h}))}var k={is_global:u,in(){if(e.inert=v,!o){f?.abort(),f?.reset?.();return}d||c?.abort(),Te(e,"introstart"),c=Ge(e,x(),f,1,()=>{Te(e,"introend"),c?.abort(),c=g=void 0,e.style.overflow=p})},out(_){if(!d){_?.(),g=void 0;return}e.inert=!0,Te(e,"outrostart"),f=Ge(e,x(),c,0,()=>{Te(e,"outroend"),_?.()})},stop:()=>{c?.abort(),f?.abort()}},z=kt;if((z.nodes.t??=[]).push(k),o&&_t){var D=u;if(!D){for(var E=z.parent;E&&(E.f&yt)!==0;)for(;(E=E.parent)&&(E.f&wt)===0;);D=!E||(E.f&xt)!==0}D&&lt(()=>{q(()=>k.in())})}}function Ge(s,e,t,a,o){var d=a===1;if(Dt(e)){var l,u=!1;return dt(()=>{if(!u){var z=e({direction:d?"in":"out"});l=Ge(s,z,t,a,o)}}),{abort:()=>{u=!0,l?.abort()},deactivate:()=>l.deactivate(),reset:()=>l.reset(),t:()=>l.t()}}if(t?.deactivate(),!e?.duration)return o(),{abort:Se,deactivate:Se,reset:Se,t:()=>a};const{delay:h=0,css:g,tick:v,easing:p=Rt}=e;var c=[];if(d&&t===void 0&&(v&&v(0,1),g)){var f=tt(g(0,1));c.push(f,f)}var x=()=>1-a,k=s.animate(c,{duration:h,fill:"forwards"});return k.onfinish=()=>{k.cancel();var z=t?.t()??1-a;t?.abort();var D=a-z,E=e.duration*Math.abs(D),_=[];if(E>0){var I=!1;if(g)for(var C=Math.ceil(E/16.666666666666668),T=0;T<=C;T+=1){var B=z+D*p(T/C),W=tt(g(B,1-B));_.push(W),I||=W.overflow==="hidden"}I&&(s.style.overflow="hidden"),x=()=>{var V=k.currentTime;return z+D*p(V/E)},v&&Vt(()=>{if(k.playState!=="running")return!1;var V=x();return v(V,1-V),!0})}k=s.animate(_,{duration:E,fill:"forwards"}),k.onfinish=()=>{x=()=>a,v?.(a,1-a),o()}},{abort:()=>{k&&(k.cancel(),k.effect=null,k.onfinish=Se)},deactivate:()=>{o=Se},reset:()=>{a===0&&v?.(1,0)},t:()=>x()}}function nt(s,e){return s===e||s?.[St]===e}function He(s={},e,t,a){return lt(()=>{var o,d;return Lt(()=>{o=d,d=[],q(()=>{s!==t(...d)&&(e(s,...d),o&&nt(t(...o),s)&&e(null,...o))})}),()=>{dt(()=>{d&&nt(t(...d),s)&&e(null,...d)})}}),s}function Bt(s){return function(...e){var t=e[0];return t.stopPropagation(),s?.apply(this,e)}}function Wt(s,e){var t=s.$$events?.[e.type],a=Mt(t)?t.slice():t==null?[]:[t];for(var o of a)o.call(this,e)}const fe=Ce(0),we=Ce(0),ne=[{id:"intro",label:"Promptotyping",number:null,subtitle:"Einführung",steps:[{id:"definition",label:"Definition"},{id:"vibecoding",label:"Vibe Coding"},{id:"strangeminds",label:"Strange New Minds"},{id:"kernprinzip",label:"Kernprinzip"},{id:"methodik",label:"Methodik"},{id:"phasen",label:"Phasen"}]},{id:"phase1",label:"Preparation",number:1,subtitle:"Materialsammlung",steps:[{id:"titel",label:"Übersicht"},{id:"rohdaten",label:"Rohdaten"},{id:"sammlung",label:"Sammlung"}]},{id:"phase2",label:"Exploration",number:2,subtitle:"Daten-Kontext-Relationen",steps:[{id:"exploration",label:"Exploration"}]},{id:"phase3",label:"Destillation",number:3,subtitle:"Vault (.md Files)",steps:[{id:"titel",label:"Übersicht"},{id:"dokumente",label:".md Dokumente"},{id:"vault",label:"Vault"}]},{id:"phase4",label:"Implementation",number:4,subtitle:"Prototype + Vault-Update",steps:[{id:"titel",label:"Übersicht"},{id:"iteration",label:"Iteration"},{id:"vault-update",label:"Vault-Update"}]},{id:"outro",label:"Praxis",number:null,subtitle:"Case Studies & Reflexion",steps:[{id:"beispiele",label:"Beispiele"},{id:"diskussion",label:"Diskussion"},{id:"zusammenfassung",label:"Zusammenfassung"}]}],jt=ne.reduce((s,e)=>s+e.steps.length,0),Ot=$e([fe,we],([s,e])=>{let t=0;for(let a=0;a<s;a++)t+=ne[a].steps.length;return t+e}),Nt=$e(Ot,s=>s/(jt-1));$e([fe,we],([s,e])=>{const t=ne[s];return!t||t.steps.length<=1?0:e/(t.steps.length-1)});$e(fe,s=>ne[s]||ne[0]);$e([fe,we],([s,e])=>{const t=ne[s];return t?t.steps[e]||t.steps[0]:null});ne.map((s,e)=>({id:s.id,label:s.label,steps:s.steps.map(t=>t.id)}));const st=Ce(!1);function Gt(){if(typeof window<"u"){const s=window.matchMedia("(prefers-reduced-motion: reduce)");st.set(s.matches),s.addEventListener("change",e=>{st.set(e.matches)})}}function it(s){if(typeof window>"u")return;const e=document.getElementById(s);e&&e.scrollIntoView({behavior:"smooth"})}function Oe(){if(typeof window>"u")return;const s=window.location.hash.slice(1);if(!s)return;const e=document.getElementById(s);if(e){setTimeout(()=>{e.scrollIntoView({behavior:"smooth"})},100);return}const t=s.split("-"),a=t[0],o=t.slice(1).join("-"),d=ne.findIndex(h=>h.id===a);if(d===-1)return;const l=ne[d];let u=a;o?l.steps.some(g=>g.id===o)&&(u=`${a}-${o}`):u=`${a}-${l.steps[0].id}`,setTimeout(()=>{const h=document.getElementById(u);h&&h.scrollIntoView({behavior:"smooth"})},100)}let rt="";function Ht(s,e){if(typeof window>"u")return;const t=ne[s];if(!t)return;const a=t.steps[e],o=a?`${t.id}-${a.id}`:t.id;o!==rt&&(rt=o,history.replaceState(null,"",`#${o}`))}const Ut={"system-1-42":{id:"system-1-42",title:"System 1.42 – Wie LLMs funktionieren",content:`
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
    `}},Ze=Ce(null),Xe=Ce(!1);function xe(s){const e=Ut[s];e?(Ze.set(e),Xe.set(!0),document.body.style.overflow="hidden"):console.warn(`Deep Dive not found: ${s}`)}function Zt(){Xe.set(!1),setTimeout(()=>{Ze.set(null)},300),document.body.style.overflow=""}var Xt=$t('<svg class="check-icon svelte-baj8t4" viewBox="0 0 12 12" fill="none"><path d="M2 6L5 9L10 3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>'),Qt=w('<span class="phase-number svelte-baj8t4"> </span>'),Jt=w('<button><span class="step-dot-marker svelte-baj8t4"></span> <span class="step-label svelte-baj8t4"> </span></button>'),Yt=w('<div class="sub-steps svelte-baj8t4"></div>'),en=w('<li class="phase-item svelte-baj8t4"><button><span class="dot svelte-baj8t4"><!></span> <span class="label-container svelte-baj8t4"><span class="label svelte-baj8t4"> </span> <!></span></button> <!></li>'),tn=w('<nav class="progress-indicator svelte-baj8t4" aria-label="Phasen-Navigation"><ul class="svelte-baj8t4"></ul></nav>');function nn(s,e){N(e,!1);const t=()=>pe(fe,"$currentPhase",o),a=()=>pe(we,"$currentStep",o),[o,d]=Ue();function l(p){const c=ne[p],f=`${c.id}-${c.steps[0].id}`;it(f)}function u(p,c){const f=ne[p],x=f.steps[c],k=`${f.id}-${x.id}`;it(k)}function h(p,c){(p.key==="Enter"||p.key===" ")&&(p.preventDefault(),l(c))}j();var g=tn(),v=i(g);oe(v,5,()=>ne,de,(p,c,f)=>{const x=Pe(()=>t()===f),k=Pe(()=>t()>f);var z=en(),D=i(z);let E;var _=i(D),I=i(_);{var C=L=>{var X=Xt();m(L,X)};Y(I,L=>{r(k)&&L(C)})}var T=n(_,2),B=i(T),W=i(B),V=n(B,2);{var ie=L=>{var X=Qt(),K=i(X);A(()=>$(K,`Phase ${r(c).number??""}`)),m(L,X)};Y(V,L=>{r(c).number&&L(ie)})}var ae=n(D,2);{var ue=L=>{var X=Yt();oe(X,5,()=>r(c).steps,de,(K,le,ce)=>{const ve=Pe(()=>a()===ce),ze=Pe(()=>a()>ce);var G=Jt();let ee;var De=n(i(G),2),_e=i(De);A(()=>{ee=Ee(G,1,"step-dot svelte-baj8t4",null,ee,{active:r(ve),completed:r(ze)}),R(G,"aria-label",`Zu ${r(le).label??""} springen`),$(_e,r(le).label)}),J("click",G,()=>u(f,ce)),m(K,G)}),m(L,X)};Y(ae,L=>{r(x)&&L(ue)})}A(()=>{E=Ee(D,1,"progress-dot svelte-baj8t4",null,E,{active:r(x),completed:r(k)}),R(D,"aria-label",`Zu ${r(c).label??""} springen`),R(D,"aria-current",r(x)?"step":void 0),$(W,r(c).label)}),J("click",D,()=>l(f)),J("keydown",D,L=>h(L,f)),m(p,z)}),m(s,g),O(),d()}var sn=w('<span class="phase-number svelte-1yliotu"> </span>'),rn=w('<span class="phase-tag svelte-1yliotu"> </span>'),an=w('<span class="step-separator svelte-1yliotu">—</span> <span class="current-step svelte-1yliotu"> </span>',1),ln=w('<header class="phase-header svelte-1yliotu"><div class="header-content svelte-1yliotu"><div class="phase-badge svelte-1yliotu"><!></div> <div class="title-group svelte-1yliotu"><h2 class="phase-title svelte-1yliotu"> </h2> <!></div> <nav class="header-nav svelte-1yliotu"><a href="/PromptotypingExplainer/about.html" class="nav-link svelte-1yliotu">About</a> <a href="/PromptotypingExplainer/vault.html" class="nav-link svelte-1yliotu">Vault</a> <a href="/PromptotypingExplainer/glossar.html" class="nav-link svelte-1yliotu">Glossar</a> <a href="/PromptotypingExplainer/bibliographie.html" class="nav-link svelte-1yliotu">Bibliographie</a></nav></div></header>');function on(s,e){N(e,!1);const t=()=>pe(fe,"$currentPhase",o),a=()=>pe(we,"$currentStep",o),[o,d]=Ue(),l=se(),u=se();ye(()=>t(),()=>{M(l,ne[t()]||ne[0])}),ye(()=>(r(l),a()),()=>{M(u,r(l).steps[a()]||r(l).steps[0])}),Ve(),j();var h=ln(),g=i(h),v=i(g),p=i(v);{var c=_=>{var I=sn(),C=i(I);A(()=>$(C,`Phase ${r(l),q(()=>r(l).number)??""}`)),m(_,I)},f=_=>{var I=rn(),C=i(I);A(()=>$(C,(r(l),q(()=>r(l).subtitle)))),m(_,I)};Y(p,_=>{r(l),q(()=>r(l).number)?_(c):_(f,!1)})}var x=n(v,2),k=i(x),z=i(k),D=n(k,2);{var E=_=>{var I=an(),C=n(ge(I),2),T=i(C);A(()=>$(T,(r(u),q(()=>r(u).label)))),m(_,I)};Y(D,_=>{r(u)&&_(E)})}A(()=>$(z,(r(l),q(()=>r(l).label)))),m(s,h),O(),d()}var dn=w('<section class="step svelte-zv7veq"><div class="step-content svelte-zv7veq"><!></div></section>');function U(s,e){N(e,!1);let t=re(e,"id",8),a=re(e,"phaseIndex",8),o=re(e,"stepIndex",8),d=se();Ke(()=>{const g=new IntersectionObserver(v=>{v.forEach(p=>{p.isIntersecting&&p.intersectionRatio>.5&&(we.set(o()),fe.set(a()))})},{threshold:.5,rootMargin:"-10% 0px -10% 0px"});return g.observe(r(d)),()=>g.disconnect()}),j();var l=dn(),u=i(l),h=i(u);qe(h,e,"default",{},null),He(l,g=>M(d,g),()=>r(d)),A(()=>{R(l,"id",t()),R(l,"data-phase",a()),R(l,"data-step",o())}),m(s,l),O()}const cn=s=>s;function vt(s){const e=s-1;return e*e*e+1}function at(s){const e=typeof s=="string"&&s.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[s,"px"]}function P(s,{delay:e=0,duration:t=400,easing:a=cn}={}){const o=+getComputedStyle(s).opacity;return{delay:e,duration:t,easing:a,css:d=>`opacity: ${d*o}`}}function F(s,{delay:e=0,duration:t=400,easing:a=vt,x:o=0,y:d=0,opacity:l=0}={}){const u=getComputedStyle(s),h=+u.opacity,g=u.transform==="none"?"":u.transform,v=h*(1-l),[p,c]=at(o),[f,x]=at(d);return{delay:e,duration:t,easing:a,css:(k,z)=>`
			transform: ${g} translate(${(1-k)*p}${c}, ${(1-k)*f}${x});
			opacity: ${h-v*z}`}}function Qe(s,{delay:e=0,duration:t=400,easing:a=vt,start:o=0,opacity:d=0}={}){const l=getComputedStyle(s),u=+l.opacity,h=l.transform==="none"?"":l.transform,g=1-o,v=u*(1-d);return{delay:e,duration:t,easing:a,css:(p,c)=>`
			transform: ${h} scale(${1-g*c});
			opacity: ${u-v*c}
		`}}var un=w('<div class="deep-dive-overlay svelte-tewam" role="dialog" aria-modal="true" aria-labelledby="deep-dive-title" tabindex="-1"><div class="deep-dive-panel svelte-tewam"><header class="panel-header svelte-tewam"><div class="header-indicator svelte-tewam"><span class="branch-icon svelte-tewam">←</span> <span class="branch-label svelte-tewam">Deep Dive</span></div> <h2 id="deep-dive-title" class="svelte-tewam"> </h2> <button class="close-button svelte-tewam" aria-label="Schließen">×</button></header> <div class="panel-content svelte-tewam"><!></div> <footer class="panel-footer svelte-tewam"><button class="back-button svelte-tewam">→ Zurück zum Hauptpfad</button></footer></div></div>');function vn(s,e){N(e,!1);let t=re(e,"isOpen",8,!1),a=re(e,"title",8,""),o=re(e,"content",8,null);const d=ct();function l(){d("close")}function u(c){c.key==="Escape"&&l()}function h(c){c.target===c.currentTarget&&l()}j();var g=Me();J("keydown",Ct,u);var v=ge(g);{var p=c=>{var f=un(),x=i(f),k=i(x),z=n(i(k),2),D=i(z),E=n(z,2),_=n(k,2),I=i(_);{var C=V=>{var ie=Me(),ae=ge(ie);Ft(ae,o),m(V,ie)},T=V=>{var ie=Me(),ae=ge(ie);qe(ae,e,"default",{},null),m(V,ie)};Y(I,V=>{o()?V(C):V(T,!1)})}var B=n(_,2),W=i(B);A(()=>$(D,a())),J("click",E,l),J("click",W,l),b(3,x,()=>F,()=>({x:-300,duration:300})),b(3,f,()=>P,()=>({duration:200})),J("click",f,h),m(c,f)};Y(v,c=>{t()&&c(p)})}m(s,g),O()}var pn=w('<div class="lock-progress svelte-l7i3p6"></div>'),hn=w('<button class="lock-indicator svelte-l7i3p6" title="Klicken zum Schließen"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></button>'),gn=w('<span class="popover-en svelte-l7i3p6"> </span>'),mn=w('<span class="tag svelte-l7i3p6"> </span>'),fn=w('<a class="popover-source svelte-l7i3p6"> </a>'),bn=w('<div role="tooltip"><div class="caret svelte-l7i3p6"></div> <!> <!> <div class="popover-header svelte-l7i3p6"><span class="popover-term svelte-l7i3p6"> </span> <!></div> <p class="popover-definition svelte-l7i3p6"> </p> <div class="popover-footer svelte-l7i3p6"><div class="popover-tags svelte-l7i3p6"></div> <!></div></div>'),kn=w('<span role="button" tabindex="0"><!></span><!>',1);function Q(s,e){N(e,!1);const t=se(),a=se();let o=re(e,"id",8),d=re(e,"inline",8,!0),l=se(!1),u=se(!1),h=se(!1),g=se(),v=se(),p,c,f=se({top:0,left:0,placement:"above"});const x=800;async function k(){if(await At(),!r(g))return;const L=r(g).getBoundingClientRect(),X=200,K=8;let le,ce,ve="above";L.top>X+K?(le=L.top-K,ve="above"):(le=L.bottom+K,ve="below"),ce=L.left+L.width/2,M(f,{top:le,left:ce,placement:ve})}function z(){r(u)||(p=setTimeout(()=>{M(l,!0),M(h,!0),k(),c=setTimeout(()=>{M(u,!0),M(h,!1)},x)},200))}function D(){clearTimeout(p),clearTimeout(c),r(u)||(M(l,!1),M(h,!1))}function E(L){L.preventDefault(),L.stopPropagation(),clearTimeout(p),clearTimeout(c),r(u)?(M(u,!1),M(l,!1),M(h,!1)):(M(l,!0),M(u,!0),M(h,!1),k())}function _(){clearTimeout(p),clearTimeout(c)}function I(){r(u)||(M(l,!1),M(h,!1))}function C(L){r(l)&&r(g)&&!r(g).contains(L.target)&&r(v)&&!r(v).contains(L.target)&&(M(l,!1),M(u,!1),M(h,!1))}function T(){r(l)&&!r(u)&&(M(l,!1),M(h,!1),clearTimeout(c))}function B(L){L.key==="Escape"&&r(l)&&(M(l,!1),M(u,!1),M(h,!1))}Ke(()=>(document.addEventListener("click",C),window.addEventListener("scroll",T,{passive:!0}),window.addEventListener("keydown",B),window.addEventListener("resize",k),()=>{document.removeEventListener("click",C),window.removeEventListener("scroll",T),window.removeEventListener("keydown",B),window.removeEventListener("resize",k),clearTimeout(p),clearTimeout(c)}));const W={prompting:"#3B82F6","ai-engineering":"#8B5CF6",fundamentals:"#607D8B",architecture:"#059669",safety:"#DC2626",training:"#D97706",agents:"#EC4899",evaluation:"#6366F1",methodology:"#14B8A6",theory:"#8B5CF6"};ye(()=>Ne(o()),()=>{M(t,Tt[o()])}),ye(()=>(r(t),et),()=>{M(a,r(t)?.source?et(r(t).source):null)}),Ve(),j();var V=Me(),ie=ge(V);{var ae=L=>{var X=kn(),K=ge(X);let le;var ce=i(K);qe(ce,e,"default",{},G=>{var ee=Z();A(()=>$(ee,(r(t),q(()=>r(t).term)))),m(G,ee)}),He(K,G=>M(g,G),()=>r(g));var ve=n(K);{var ze=G=>{var ee=bn();let De;var _e=n(i(ee),2);{var y=H=>{var te=pn();m(H,te)};Y(_e,H=>{r(h)&&H(y)})}var S=n(_e,2);{var be=H=>{var te=hn();J("click",te,E),m(H,te)};Y(S,H=>{r(u)&&H(be)})}var Ae=n(S,2),Ie=i(Ae),Re=i(Ie),Be=n(Ie,2);{var We=H=>{var te=gn(),ke=i(te);A(()=>$(ke,`(${r(t),q(()=>r(t).en)??""})`)),m(H,te)};Y(Be,H=>{r(t),q(()=>r(t).en&&r(t).en!==r(t).term&&!r(t).term.includes(r(t).en))&&H(We)})}var Fe=n(Ae,2),gt=i(Fe),mt=n(Fe,2),Je=i(mt);oe(Je,5,()=>(r(t),q(()=>r(t).tags)),de,(H,te)=>{var ke=mn(),je=i(ke);A(()=>{Le(ke,`background-color: ${r(te),q(()=>W[r(te)]||"#607D8B")??""}`),$(je,r(te))}),m(H,ke)});var ft=n(Je,2);{var bt=H=>{var te=fn(),ke=i(te);A(()=>{R(te,"href",`bibliographie.html#bibliographie-${r(a),q(()=>r(a)?.id||"")??""}`),$(ke,(r(t),q(()=>r(t).source)))}),J("click",te,Bt(function(je){Wt.call(this,e,je)})),m(H,te)};Y(ft,H=>{r(t),q(()=>r(t).source)&&H(bt)})}He(ee,H=>M(v,H),()=>r(v)),A(()=>{R(ee,"id",`tooltip-${o()??""}`),De=Ee(ee,1,"glossary-popover svelte-l7i3p6",null,De,{above:r(f).placement==="above",below:r(f).placement==="below",locked:r(u),locking:r(h)}),Le(ee,`top: ${r(f),q(()=>r(f).top)??""}px; left: ${r(f),q(()=>r(f).left)??""}px;`),$(Re,(r(t),q(()=>r(t).term))),$(gt,(r(t),q(()=>r(t).definition)))}),J("mouseenter",ee,_),J("mouseleave",ee,I),m(G,ee)};Y(ve,G=>{r(l)&&G(ze)})}A(()=>{le=Ee(K,1,"glossary-term svelte-l7i3p6",null,le,{inline:d(),active:r(l),locked:r(u)}),R(K,"aria-describedby",r(l)?`tooltip-${o()}`:void 0),R(K,"aria-expanded",r(l))}),J("click",K,E),J("mouseenter",K,z),J("mouseleave",K,D),J("keydown",K,G=>G.key==="Enter"&&E(G)),m(L,X)},ue=L=>{var X=Me(),K=ge(X);qe(K,e,"default",{},null),m(L,X)};Y(ie,L=>{r(t)?L(ae):L(ue,!1)})}m(s,V),O()}const yn="/PromptotypingExplainer/assets/promptotyping-logo-ey7SXXm7.png";var wn=w(`<div class="intro-definition svelte-10mg3y6"><div class="title-block svelte-10mg3y6"><img alt="Promptotyping Logo" class="logo svelte-10mg3y6"/> <h1 class="promptotyping-title svelte-10mg3y6">Promptotyping</h1></div> <div class="research-blog-block svelte-10mg3y6"><p class="svelte-10mg3y6"><span class="promptotyping">Promptotyping</span> ist eine strukturierte Methode zur forschungsdatengetriebenen
      Entwicklung von Prototypen für Forschungstools, Workflows und Modelle mittels Frontier-<!>. Das vierphasige Prozessmodell formalisiert, wie Domänenwissen für die LLM-gestützte Iteration aufbereitet und validiert wird.</p> <p class="svelte-10mg3y6">Der Name verbindet <!> (die Eingabe an ein LLM) mit <!> (iterative Entwicklung von Funktionsmustern).
      Die Methode ist nicht abgeschlossen, sondern entwickelt sich mit den Möglichkeiten der Frontier-LLMs weiter.</p></div></div>`);function xn(s){var e=wn(),t=i(e),a=i(t),o=n(t,2),d=i(o),l=n(i(d),2);Q(l,{id:"llm",children:(v,p)=>{var c=Z("LLMs");m(v,c)},$$slots:{default:!0}});var u=n(d,2),h=n(i(u));Q(h,{id:"prompt",children:(v,p)=>{var c=Z("Prompt");m(v,c)},$$slots:{default:!0}});var g=n(h,2);Q(g,{id:"prototyping",children:(v,p)=>{var c=Z("Prototyping");m(v,c)},$$slots:{default:!0}}),A(()=>R(a,"src",yn)),m(s,e)}var zn=w('<button><span class="trigger-icon svelte-wjh6ga">←</span> <span class="trigger-label svelte-wjh6ga"> </span> <span class="trigger-hint svelte-wjh6ga">Deep Dive</span></button>');function me(s,e){N(e,!1);let t=re(e,"label",8,"Mehr erfahren"),a=re(e,"deepDiveId",8,""),o=re(e,"variant",8,"inline");const d=ct();function l(){d("open",{id:a()})}j();var u=zn(),h=n(i(u),2),g=i(h);A(()=>{Ee(u,1,`deep-dive-trigger ${o()??""}`,"svelte-wjh6ga"),R(u,"aria-label",`Deep Dive öffnen: ${t()??""}`),$(g,t())}),J("click",u,l),m(s,u),O()}const Dn="/PromptotypingExplainer/assets/vibecoding-Byxduydx.png";var _n=w(`<div class="intro-vibecoding svelte-6bdbz1"><h2 class="svelte-6bdbz1">Frontier-LLMs und Vibe Coding</h2> <div class="research-blog-block svelte-6bdbz1"><p class="svelte-6bdbz1"><!> haben ihre Fähigkeiten in Coding und <!> deutlich verbessert. Modelle wie Claude Opus 4.5, GPT-5.1-Codex und Gemini 3 Pro erreichen auf Benchmarks
      wie SWE-bench Verified (Jimenez et al., 2024), τ2-bench und Terminal-bench 2.0 (Laude Institute, 2025)
      hohe Werte für autonome Code-Generierung und Werkzeugnutzung. Mollick (2025) beschreibt diese Entwicklung
      pointiert: Vor drei Jahren beeindruckte es, dass eine Maschine ein Gedicht über Otter schreiben konnte.
      Heute diskutiert er statistische Methodik mit einem Agenten, der seine eigene Forschungsumgebung gebaut hat.
      Diese Benchmarks messen jedoch isolierte, wohldefinierte Aufgaben.</p> <p class="svelte-6bdbz1">Andrej Karpathy prägte den Begriff <!> (Karpathy, 2025).
      Das Phänomen beschreibt Code-Generierung durch natürlichsprachliche Anweisungen, bei der Entwickler den Output
      akzeptieren, ohne den generierten Code vollständig zu prüfen. Für Prototypen und Experimente kann das produktiv
      sein. Ohne Struktur führt es jedoch zu technischen Schulden und Abhängigkeit statt Verständnis.</p> <figure class="vibecoding-figure svelte-6bdbz1"><img alt="Andrej Karpathy Tweet über Vibe Coding" class="vibecoding-image svelte-6bdbz1"/> <figcaption class="svelte-6bdbz1">Andrej Karpathy prägt den Begriff "Vibe Coding" (Februar 2025)</figcaption></figure> <div class="deep-dive-triggers svelte-6bdbz1"><!></div></div></div>`);function Pn(s,e){N(e,!1);function t(x){xe(x.detail.id)}j();var a=_n(),o=n(i(a),2),d=i(o),l=i(d);Q(l,{id:"frontier-model",children:(x,k)=>{var z=Z("Frontier-LLMs");m(x,z)},$$slots:{default:!0}});var u=n(l,2);Q(u,{id:"tool-use",children:(x,k)=>{var z=Z("Tool Use");m(x,z)},$$slots:{default:!0}});var h=n(d,2),g=n(i(h));Q(g,{id:"vibe-coding",children:(x,k)=>{var z=Z('"Vibe Coding"');m(x,z)},$$slots:{default:!0}});var v=n(h,2),p=i(v),c=n(v,2),f=i(c);me(f,{label:"Vibe Coding Kritik",deepDiveId:"vibe-coding-critique",$$events:{open:t}}),A(()=>R(p,"src",Dn)),m(s,a),O()}var En=w(`<div class="intro-strange-minds svelte-5cly7e"><h2 class="svelte-5cly7e">Strange New Minds</h2> <div class="research-blog-block svelte-5cly7e"><p class="svelte-5cly7e"><!> basieren auf der Transformer-Architektur, deren
      Attention-Mechanismus Beziehungen zwischen <!> über große Distanzen
      modelliert. Summerfield (2025) nennt sie "Strange New Minds" und verweist damit auf ihren unklaren Status
      zwischen Werkzeug und Intelligenz.</p> <p class="svelte-5cly7e">Die Charakterisierung <!> beschreibt LLM-Verhalten
      zwischen intuitiver Musterassoziation und systematischer Problemlösung. Die Bezeichnung verbindet Kahnemans
      Unterscheidung zwischen schnellem und langsamem Denken mit Douglas Adams' Metapher einer präzisen Antwort
      ohne Kenntnis der eigentlichen Frage. Sie fungiert als Arbeitshypothese, nicht als empirischer Befund.</p> <p class="svelte-5cly7e">Mollicks Konzept der Co-Intelligence (2024) bietet einen Rahmen für die Mensch-KI-Kollaboration. Die <strong class="svelte-5cly7e">"Jagged Frontier"</strong> beschreibt dabei die ungleichmäßige Fähigkeitsgrenze von LLMs, bei der
      scheinbar gleichwertige Aufgaben auf verschiedenen Seiten der Grenze liegen können (Mollick, 2023). Bei der <strong class="svelte-5cly7e">Centaur-Arbeit</strong> treffen Menschen strategische Entscheidungen, während KI operative Aufgaben
      übernimmt. Bei der <strong class="svelte-5cly7e">Cyborg-Arbeit</strong> entwickeln Mensch und Maschine in iterativen Schleifen
      gemeinsam Lösungen.</p> <p class="svelte-5cly7e">Diese enge Verschränkung wirft das Problem der <!> auf.
      LLMs tendieren zur unkritischen Bestätigung von Nutzerannahmen, weil RLHF Antworten belohnt, die Nutzer als
      hilfreich bewerten (Malmqvist, 2024). Anthropics Character Training adressiert dies durch die Verankerung
      epistemischer Tugenden wie Neugier und intellektuelle Ehrlichkeit. Für Forschungskontexte reicht das nicht.
      Der <!> muss Sycophancy aktiv
      erkennen und korrigieren.</p> <div class="deep-dive-triggers svelte-5cly7e"><!></div></div></div>`);function Ln(s,e){N(e,!1);function t(k){xe(k.detail.id)}j();var a=En(),o=n(i(a),2),d=i(o),l=i(d);Q(l,{id:"frontier-model",children:(k,z)=>{var D=Z("Frontier-LLMs");m(k,D)},$$slots:{default:!0}});var u=n(l,2);Q(u,{id:"token",children:(k,z)=>{var D=Z("Tokens");m(k,D)},$$slots:{default:!0}});var h=n(d,2),g=n(i(h));Q(g,{id:"system-142",children:(k,z)=>{var D=Z('"System 1.42"');m(k,D)},$$slots:{default:!0}});var v=n(h,4),p=n(i(v));Q(p,{id:"sycophancy",children:(k,z)=>{var D=Z("Sycophancy");m(k,D)},$$slots:{default:!0}});var c=n(p,2);Q(c,{id:"critical-expert",children:(k,z)=>{var D=Z("Critical Expert in the Loop");m(k,D)},$$slots:{default:!0}});var f=n(v,2),x=i(f);me(x,{label:"System 1.42: Wie (Frontier-)LLMs 'tatsächlich' funktionieren",deepDiveId:"system-1-42",$$events:{open:t}}),m(s,a),O()}var Sn=w(`<div class="intro-kernprinzip svelte-jio7ez"><h2 class="svelte-jio7ez">Das Kernprinzip</h2> <div class="research-blog-block svelte-jio7ez"><p class="core-question svelte-jio7ez"><strong class="svelte-jio7ez">Wie kommuniziert man Domänenwissen so an ein LLM, dass es passende Werkzeuge generiert?</strong></p> <p class="svelte-jio7ez">Nicht das Coden selbst ist die Kernkompetenz, sondern das Wissen darüber, was guter Code für
      Forschungszwecke ist: Modellierung, Formalisierung, Domänenwissen und kritische Validierung.</p> <p class="svelte-jio7ez">Die unklare epistemologische Natur von <!> erfordert abgestufte
      Validierungsstrategien. Für komplexe Aufgaben wie die Entwicklung von Forschungswerkzeugen sind
      strukturierte Workflows, explizite Dokumentation und kontinuierliche Expertenvalidierung nötig.</p> <p class="svelte-jio7ez">Mollick beobachtet, dass sich die Rolle des Menschen verschiebt: vom Korrigieren von KI-Fehlern zum Steuern
      von KI-Arbeit (Mollick, 2025). Der <!> geht einen Schritt weiter. Der Mensch prüft nicht nur, ob das Ergebnis korrekt ist, sondern ob es fachlich
      angemessen ist. Er erkennt <!>, prüft auf <!> und bringt das Domänenwissen ein, das LLMs
      strukturell fehlt. LLMs liefern oft sehr gute Ergebnisse und können gleichzeitig nie Verlässlichkeit garantieren.
      Diese Spannung ist nicht auflösbar, nur durch fachliche Prüfung handhabbar.</p> <p class="svelte-jio7ez"><span class="promptotyping svelte-jio7ez">Promptotyping</span> ist ein Weg, diese Anforderungen methodisch umzusetzen.
      Die Methode verbindet <!> mit
      Scholar-Centered Design.</p></div></div>`);function Mn(s){var e=Sn(),t=n(i(e),2),a=n(i(t),4),o=n(i(a));Q(o,{id:"llm",children:(p,c)=>{var f=Z("LLMs");m(p,f)},$$slots:{default:!0}});var d=n(a,2),l=n(i(d));Q(l,{id:"critical-expert",children:(p,c)=>{var f=Z('"Critical Expert in the Loop"');m(p,f)},$$slots:{default:!0}});var u=n(l,2);Q(u,{id:"sycophancy",children:(p,c)=>{var f=Z("Sycophancy");m(p,f)},$$slots:{default:!0}});var h=n(u,2);Q(h,{id:"halluzinationen",children:(p,c)=>{var f=Z("Konfabulationen");m(p,f)},$$slots:{default:!0}});var g=n(d,2),v=n(i(g),2);Q(v,{id:"context-engineering",children:(p,c)=>{var f=Z("Context Engineering");m(p,f)},$$slots:{default:!0}}),m(s,e)}var $n=w(`<div class="intro-methodik svelte-p6qtke"><div class="content svelte-p6qtke"><h3 class="svelte-p6qtke">Critical Expert in the Loop</h3> <div class="explanation svelte-p6qtke"><p class="svelte-p6qtke">Der Critical Expert in the Loop ist nicht passiver Empfänger, sondern <strong class="svelte-p6qtke">kritischer Validator</strong>.
        Domänenexpert:innen bringen ihr Fachwissen kontinuierlich in den Dialog ein. LLMs können technisch
        korrekte, aber fachlich inadäquate Lösungen produzieren. Nur Expert:innen erkennen, ob eine
        Visualisierung historisch sinnvoll ist oder ob Kategorisierungen dem Forschungsgegenstand
        gerecht werden.</p> <p class="svelte-p6qtke">Der Critical-Expert-Ansatz operationalisiert Schöns <strong class="svelte-p6qtke">Reflective Practice</strong> für die
        KI-gestützte Forschung: <em class="svelte-p6qtke">Reflection-in-action</em> bedeutet kritische Prüfung während des
        LLM-Dialogs; <em class="svelte-p6qtke">Reflection-on-action</em> ist die nachträgliche Analyse und Dokumentation
        im Journal. Polanyis Konzept des <strong class="svelte-p6qtke">impliziten Wissens</strong> ("We can know more than we
        can tell") ist zentral: Der Prozess der Explizierung taciten Wissens in formale Strukturen
        bildet einen Kernaspekt der Methodik.</p></div> <div class="strategies-block svelte-p6qtke"><h4 class="svelte-p6qtke">Strategien gegen Sycophancy</h4> <div class="strategy-list svelte-p6qtke"><div class="strategy-item svelte-p6qtke"><span class="strategy-name svelte-p6qtke">Critical Questioning</span> <span class="strategy-desc svelte-p6qtke">Explizites Auffordern zur Kritik: "Was sind Schwächen in diesem Ansatz?" "Welche Fehler könnten in meinen Annahmen stecken?"</span></div> <div class="strategy-item svelte-p6qtke"><span class="strategy-name svelte-p6qtke">Alternative Exploration</span> <span class="strategy-desc svelte-p6qtke">Einfordern von Alternativen: Verschiedene Ansätze generieren lassen, gegenteilige Standpunkte erfragen</span></div> <div class="strategy-item svelte-p6qtke"><span class="strategy-name svelte-p6qtke">Assumption Surfacing</span> <span class="strategy-desc svelte-p6qtke">Explizitmachen von Annahmen: Implizite Annahmen im Code oder Voraussetzungen bewusst machen</span></div></div></div> <div class="example-block svelte-p6qtke"><h4 class="svelte-p6qtke">Beispiel: REALonline-Projekt</h4> <p class="svelte-p6qtke">Der Historiker korrigierte die technische Annahme, Objekte nach modernen funktionalen Kategorien
        (Möbel, Textilien, Gefäße) zu strukturieren. Die historisch adäquate Lösung: Objekte werden
        über Räume und Gebäude organisiert, mit historischen Begriffen aus dem Originalvokabular. <strong class="svelte-p6qtke">Räumliche Organisation war im Mittelalter primärer Bedeutungsträger für soziale Hierarchien.</strong> Diese Korrektur transformierte das Datenmodell von einer anachronistischen zu einer
        historisch adäquaten Repräsentation.</p></div> <div class="vibe-coding-note svelte-p6qtke"><strong class="svelte-p6qtke">Verhältnis zu Vibe Coding</strong> <p class="svelte-p6qtke">Promptotyping ist kein Gegenentwurf zu Vibe Coding, sondern gibt ihm Struktur für
        Forschungskontexte. Die intuitive, explorative Arbeitsweise bleibt erhalten, ergänzt
        durch systematische Dokumentation, die <!> verhindert und die Informationsdichte maximiert.</p></div> <div class="deep-dive-triggers svelte-p6qtke"><!> <!></div></div></div>`);function Cn(s,e){N(e,!1);function t(p){xe(p.detail.id)}j();var a=$n(),o=i(a),d=n(i(o),8),l=n(i(d),2),u=n(i(l));Q(u,{id:"context-rot",children:(p,c)=>{var f=Z("Context Rot");m(p,f)},$$slots:{default:!0}});var h=n(d,2),g=i(h);me(g,{label:"Critical Expert",deepDiveId:"critical-expert",$$events:{open:t}});var v=n(g,2);me(v,{label:"Scholar-Centered Design",deepDiveId:"scholar-centered-design",$$events:{open:t}}),m(s,a),O()}const An="/PromptotypingExplainer/assets/promptotyping-overview-AcSHP9K_.png";var In=w('<div class="phase-item svelte-hawgxw"><div class="phase-number svelte-hawgxw"> </div> <div class="phase-info svelte-hawgxw"><span class="phase-label svelte-hawgxw"> </span> <span class="phase-subtitle svelte-hawgxw"> </span></div></div>'),Fn=w(`<div class="intro-phasen svelte-hawgxw"><h3 class="svelte-hawgxw">Das vierphasige Prozessmodell</h3> <div class="explanation-block svelte-hawgxw"><p class="svelte-hawgxw">Das Phasenmodell strukturiert den Entwicklungsprozess von der ersten Materialsammlung bis zum
      funktionalen Prototyp. Es basiert auf dem <strong class="svelte-hawgxw">Design Science Research Framework</strong> (Hevner et al., 2004)
      und integriert etablierte Methoden des Requirements Engineering mit den spezifischen Anforderungen
      wissenschaftlicher Softwareentwicklung.</p> <p class="svelte-hawgxw">Ein zentrales Merkmal: Die strukturierten <strong class="svelte-hawgxw">.md-Dokumente entstehen erst in Phase 3</strong> (Destillation),
      nicht am Projektanfang. Die ersten beiden Phasen sammeln und analysieren Rohmaterial, bevor es
      zu LLM-optimiertem Kontext verdichtet wird. Jede Phase produziert spezifische Artefakte und
      fungiert als Kontrollpunkt zur Risikoreduktion.</p></div> <div class="side-by-side svelte-hawgxw"><div class="content-side svelte-hawgxw"><div class="phase-list svelte-hawgxw"></div></div> <div class="visual-side svelte-hawgxw"><figure class="svelte-hawgxw"><img alt="Promptotyping Workflow: Vorbereitung, Exploration, Destillation, Implementation" class="svelte-hawgxw"/></figure></div></div> <div class="process-flow svelte-hawgxw"><p class="svelte-hawgxw">Der Prozess ist <strong class="svelte-hawgxw">iterativ</strong>: Jede Implementation-Iteration kann Updates an den
      Vault-Dokumenten auslösen. Neues Wissen fließt zurück in die .md-Dateien, verbessert den Kontext
      für die nächste Iteration und führt so zu immer präziseren Prototypen.</p></div></div>`);function Tn(s,e){N(e,!1);const t=ne.filter(v=>v.number!==null);j();var a=Fn(),o=n(i(a),4),d=i(o),l=i(d);oe(l,5,()=>t,de,(v,p)=>{var c=In(),f=i(c),x=i(f),k=n(f,2),z=i(k),D=i(z),E=n(z,2),_=i(E);A(()=>{$(x,r(p).number),$(D,r(p).label),$(_,r(p).subtitle)}),m(v,c)});var u=n(d,2),h=i(u),g=i(h);A(()=>R(g,"src",An)),m(s,a),O()}var qn=w(`<div class="phase1-titel svelte-k7vkqd"><header class="scene-header svelte-k7vkqd"><span class="phase-number svelte-k7vkqd">Phase 1</span> <h2 class="svelte-k7vkqd">Vorbereitung</h2> <p class="subtitle svelte-k7vkqd">Materialsammlung</p></header> <div class="content svelte-k7vkqd"><p class="svelte-k7vkqd">Die Vorbereitungsphase hat ein klares Ziel: <strong class="svelte-k7vkqd">alle relevanten Rohmaterialien zusammentragen</strong>,
      bevor technische Entscheidungen getroffen werden. Diese Sammlung umfasst Forschungsdaten in
      verschiedenen Formaten, Dokumentation zu Standards und Datenmodellen, erste Forschungsfragen
      und implizites Domänenwissen aus Expertengesprächen.</p> <p class="svelte-k7vkqd">Diese Phase verhindert ein häufiges Problem in der Softwareentwicklung für Forschung: die
      unkritische Übernahme technischer Lösungen, die am tatsächlichen Forschungsbedarf vorbeigehen.
      Die Materialsammlung zwingt zur präzisen Artikulation der Projektziele, bevor überhaupt
      ein LLM-Dialog beginnt.</p> <div class="example-block svelte-k7vkqd"><h4 class="svelte-k7vkqd">Beispiel: CorrespExplorer</h4> <p class="svelte-k7vkqd">Im CorrespExplorer-Projekt wurden in dieser Phase gesammelt: CMIF-XML-Dateien aus correspSearch,
        die TEI-Correspondence-SIG-Dokumentation, Editionsrichtlinien der beteiligten Projekte, und
        Notizen aus Gesprächen mit Briefeditor:innen über ihre Arbeitsabläufe und Forschungsfragen.</p></div></div> <div class="deep-dive-row svelte-k7vkqd"><!></div></div>`);function Vn(s,e){N(e,!1);function t(h){xe(h.detail.id)}j();var a=qn(),o=i(a),d=n(o,2),l=n(d,2),u=i(l);me(u,{label:"Context Engineering",deepDiveId:"context-engineering",$$events:{open:t}}),b(1,o,()=>F,()=>({y:-20,duration:500})),b(1,d,()=>P,()=>({delay:200,duration:400})),b(1,l,()=>P,()=>({delay:400,duration:400})),b(1,a,()=>P,()=>({duration:400})),m(s,a),O()}var Kn=w('<div class="document-icon svelte-119o94q" role="img"><svg viewBox="0 0 40 52" fill="none" xmlns="http://www.w3.org/2000/svg" class="svelte-119o94q"><path d="M2 4C2 2.89543 2.89543 2 4 2H26L38 14V48C38 49.1046 37.1046 50 36 50H4C2.89543 50 2 49.1046 2 48V4Z" fill="white" stroke-width="2"></path><path d="M26 2V12C26 13.1046 26.8954 14 28 14H38" stroke-width="2"></path><text x="20" y="36" text-anchor="middle" font-size="10" font-weight="600" font-family="var(--font-mono)"> </text></svg></div>');function pt(s,e){N(e,!1);const t=se();let a=re(e,"type",8,"xml"),o=re(e,"size",8,48);const d={xml:{color:"#607D8B",symbol:"</>"},pdf:{color:"#E53935",symbol:"PDF"},csv:{color:"#4CAF50",symbol:"|||"},notes:{color:"#FF9800",symbol:"≡"},md:{color:"#1A1A1A",symbol:"MD"}};ye(()=>Ne(a()),()=>{M(t,d[a()]||d.xml)}),Ve(),j();var l=Kn(),u=i(l),h=i(u),g=n(h),v=n(g),p=i(v);A(c=>{Le(l,`width: ${o()??""}px; height: ${o()*1.3}px;`),R(l,"aria-label",`${c??""} Dokument`),R(h,"stroke",(r(t),q(()=>r(t).color))),R(g,"stroke",(r(t),q(()=>r(t).color))),R(v,"fill",(r(t),q(()=>r(t).color))),$(p,(r(t),q(()=>r(t).symbol)))},[()=>(Ne(a()),q(()=>a().toUpperCase()))]),m(s,l),O()}const ht=[{id:"intro",title:"Promptotyping",subtitle:"Vom Wissen zum Werkzeug",question:"Wie wird aus Forschungsdaten ein funktionales Interface?"},{id:"phase1",number:1,title:"Vorbereitung",subtitle:"Materialsammlung",description:"Sammlung aller relevanten Materialien.",artifacts:[{type:"xml",label:"TEI/XML"},{type:"pdf",label:"Spezifikation"},{type:"csv",label:"Rohdaten"},{type:"notes",label:"Notizen"}]},{id:"phase2",number:2,title:"Exploration",subtitle:"Daten-Kontext-Relationen",description:"Systematische Sondierung der Schnittstelle zwischen Rohdaten und Forschungskontext. Validierung der Machbarkeit."},{id:"phase3",number:3,title:"Destillation",subtitle:"Wissenskomprimierung",description:"Überführung in kompakte Markdown-Dokumente.",documents:[{name:"data.md",purpose:"Struktur und Semantik der Forschungsdaten"},{name:"user-story.md",purpose:"Anforderungen aus Forschungsperspektive"},{name:"context.md",purpose:"Relevantes Domänenwissen"}],closingText:"Destilliertes Wissen. Bereit für das LLM."},{id:"phase4",number:4,title:"Iterative Implementation",subtitle:"Iterative Entwicklung",description:"Der eigentliche Promptotyping-Dialog beginnt.",closingText:"Vom Wissen zum Werkzeug."}];var Rn=w('<div class="material-item svelte-17gbft8"><div class="icon-container svelte-17gbft8"><!></div> <span class="label svelte-17gbft8"> </span></div>'),Bn=w(`<div class="phase1-rohdaten svelte-17gbft8"><h3 class="svelte-17gbft8">Rohmaterialien sammeln</h3> <div class="explanation-block svelte-17gbft8"><p class="svelte-17gbft8">Die Rohmaterialien bilden die Wissensbasis für alle folgenden Phasen. In dieser Phase werden
      alle relevanten Quellen zusammengetragen, ohne sie bereits zu strukturieren oder zu destillieren.
      Die Vollständigkeit dieser Sammlung bestimmt die Qualität des späteren Vault.</p> <p class="svelte-17gbft8">Typische Materialien umfassen <strong class="svelte-17gbft8">Forschungsdaten</strong> in verschiedenen Formaten (XML, CSV, JSON), <strong class="svelte-17gbft8">Dokumentation</strong> zu Standards, Schemata und Editionsrichtlinien,
      sowie <strong class="svelte-17gbft8">Kontextmaterial</strong> wie Papers, Notizen aus Expertengesprächen und Workshop-Protokolle.
      Im CorrespExplorer-Projekt etwa wurden CMIF-XML-Dateien, die correspSearch-Dokumentation und
      projektspezifische Editionsrichtlinien gesammelt.</p></div> <div class="materials-cloud svelte-17gbft8"></div> <div class="material-types svelte-17gbft8"><div class="type-item svelte-17gbft8"><span class="type-label svelte-17gbft8">TEI/XML</span> <span class="type-desc svelte-17gbft8">Strukturierte Forschungsdaten mit Markup für Editionen, Korrespondenzen, Annotationen</span></div> <div class="type-item svelte-17gbft8"><span class="type-label svelte-17gbft8">PDF</span> <span class="type-desc svelte-17gbft8">Spezifikationen, Standards, Dokumentationen und wissenschaftliche Publikationen</span></div> <div class="type-item svelte-17gbft8"><span class="type-label svelte-17gbft8">CSV</span> <span class="type-desc svelte-17gbft8">Tabellarische Daten für quantitative Analysen, Metadaten, Konkordanzen</span></div> <div class="type-item svelte-17gbft8"><span class="type-label svelte-17gbft8">Notizen</span> <span class="type-desc svelte-17gbft8">Implizites Domänenwissen aus Expertengesprächen, Workshops und Feldnotizen</span></div></div></div>`);function Wn(s,e){N(e,!1);const t=ht[1].artifacts,a=[{x:-140,y:-70,delay:0},{x:130,y:-50,delay:100},{x:-110,y:70,delay:200},{x:150,y:60,delay:300}];j();var o=Bn(),d=i(o),l=n(d,2),u=n(l,2);oe(u,5,()=>t,de,(g,v,p)=>{var c=Rn(),f=i(c),x=i(f);pt(x,{get type(){return r(v).type}});var k=n(f,2),z=i(k);A(()=>{Le(c,`--offset-x: ${a[p].x??""}px; --offset-y: ${a[p].y??""}px;`),$(z,r(v).label)}),b(1,k,()=>P,()=>({delay:500+a[p].delay})),b(1,c,()=>F,()=>({x:a[p].x>0?100:-100,y:-30,duration:500,delay:300+a[p].delay})),m(g,c)});var h=n(u,2);b(1,d,()=>P,()=>({duration:400})),b(1,l,()=>P,()=>({delay:150,duration:400})),b(1,h,()=>P,()=>({delay:600,duration:400})),m(s,o),O()}var jn=w('<div class="icon-stacked svelte-6tqdd3"><!> <span class="label svelte-6tqdd3"> </span></div>'),On=w(`<div class="phase1-sammlung svelte-6tqdd3"><h3 class="svelte-6tqdd3">Materialsammlung abgeschlossen</h3> <div class="explanation-block svelte-6tqdd3"><p class="svelte-6tqdd3">Mit dem Abschluss der Materialsammlung ist die Basis für alle weiteren Phasen gelegt.
      Die gesammelten Materialien werden in dieser Phase <strong class="svelte-6tqdd3">noch nicht strukturiert oder destilliert</strong> –
      das geschieht erst in Phase 3 (Destillation). Hier geht es um Vollständigkeit.</p> <p class="svelte-6tqdd3">Fehlende Materialien führen später zu Lücken im Vault und damit zu unpräzisen LLM-Outputs.
      Bevor die explorative Analyse beginnt, sollten alle relevanten Datenquellen, Dokumentationen
      und Kontextinformationen vorliegen. Der Grundsatz: Lieber zu viel sammeln als zu wenig –
      Irrelevantes kann später ausgeschlossen werden.</p></div> <div class="workspace svelte-6tqdd3"><div class="workspace-area svelte-6tqdd3"></div></div> <div class="quality-criteria svelte-6tqdd3"><h4 class="svelte-6tqdd3">Bereitschaftskriterien für Phase 2</h4> <ul class="svelte-6tqdd3"><li class="svelte-6tqdd3"><strong class="svelte-6tqdd3">Datenquellen:</strong> Alle verfügbaren Forschungsdaten identifiziert und zugänglich</li> <li class="svelte-6tqdd3"><strong class="svelte-6tqdd3">Dokumentation:</strong> Standards, Schemata und Richtlinien gesammelt</li> <li class="svelte-6tqdd3"><strong class="svelte-6tqdd3">Kontextwissen:</strong> Expertengespräche geführt, Notizen erstellt</li> <li class="svelte-6tqdd3"><strong class="svelte-6tqdd3">Forschungsfragen:</strong> Erste Fragestellungen formuliert (können sich noch ändern)</li></ul></div></div>`);function Nn(s,e){N(e,!1);const t=ht[1].artifacts,a=[{x:-22,y:-18,rotate:-6},{x:28,y:-10,rotate:9},{x:-18,y:14,rotate:-4},{x:24,y:22,rotate:6}];j();var o=On(),d=i(o),l=n(d,2),u=n(l,2),h=i(u);oe(h,5,()=>t,de,(v,p,c)=>{var f=jn(),x=i(f);pt(x,{get type(){return r(p).type}});var k=n(x,2),z=i(k);A(()=>{Le(f,`transform: translate(${a[c].x??""}px, ${a[c].y??""}px) rotate(${a[c].rotate??""}deg);`),$(z,r(p).label)}),b(1,k,()=>P,()=>({delay:550+c*60})),b(1,f,()=>F,()=>({y:-40,duration:400,delay:200+c*80})),m(v,f)});var g=n(u,2);b(1,d,()=>P,()=>({duration:400})),b(1,l,()=>P,()=>({delay:150,duration:400})),b(1,u,()=>Qe,()=>({duration:400,start:.9})),b(1,g,()=>P,()=>({delay:600,duration:400})),m(s,o),O()}const Gn="/PromptotypingExplainer/assets/exploration-CciyC_CV.png";var Hn=w(`<div class="phase2-exploration svelte-pwk459"><header class="scene-header svelte-pwk459"><span class="phase-number svelte-pwk459">Phase 2</span> <h2 class="svelte-pwk459">Exploration</h2> <p class="subtitle svelte-pwk459">Daten-Kontext-Relationen</p></header> <div class="content-block svelte-pwk459"><p class="lead svelte-pwk459">Die Explorationsphase ist eine systematische Sondierung der Schnittstelle zwischen Rohdaten
      und Forschungskontext. Die zentrale Frage: <strong class="svelte-pwk459">Lässt sich die abstrakte Forschungsfrage
      konkret auf diese Datenstruktur abbilden?</strong> Diese Phase produziert bewusst keine formalen
      Dokumente – das Ergebnis ist Wissen, nicht Artefakte.</p> <p class="svelte-pwk459">Das Wissen umfasst: Datenqualität und ihre Grenzen, technische Machbarkeit von Visualisierungen,
      und die Validität potentieller User Stories. Dieses destillierte Wissen ist zwingende
      Voraussetzung für die Präzision in Phase 3. Wichtig: <strong class="svelte-pwk459">Sackgassen sind positive Erkenntnisse,
      keine Fehler.</strong> Zu verstehen, was die Daten nicht hergeben, ist genauso wertvoll wie
      zu wissen, was möglich ist.</p> <div class="key-point svelte-pwk459"><span class="key-label svelte-pwk459">Ziel</span> <p class="svelte-pwk459"><strong class="svelte-pwk459">Validierung der Machbarkeit</strong>: Geben die Daten das her, was der Forschungskontext verlangt?</p></div> <div class="user-story-box svelte-pwk459"><div class="box-label svelte-pwk459">User Story Format</div> <p class="svelte-pwk459">User Stories folgen dem Format: <em class="svelte-pwk459">"Als [Rolle] will ich [Funktion], um [Nutzen] zu erreichen."</em></p> <p class="example svelte-pwk459">Beispiel: "Als Historikerin will ich Korrespondenznetzwerke nach Zeitraum filtern,
        um Kommunikationsmuster in Exilgemeinschaften zu rekonstruieren."</p> <p class="validation svelte-pwk459">Die Exploration prüft: Können wir diese Story mit den vorhandenen Daten realisieren?
        Welche Felder tragen die Filterlogik? Sind die Relationen vollständig genug?</p></div> <div class="example-box svelte-pwk459"><div class="example-label svelte-pwk459">Typische Explorationsfragen</div> <p class="example-text svelte-pwk459">"Lässt sich diese Netzwerkanalyse mit den vorhandenen Relationen umsetzen?"<br/><br/> "Welche Felder in der XML-Struktur tragen die gewünschte Filterlogik?"<br/><br/> "Sind die Datumsangaben konsistent genug für eine Timeline-Visualisierung?"</p></div></div> <figure class="exploration-visual svelte-pwk459"><img alt="Sondierung der Daten-Kontext-Schnittstelle" class="svelte-pwk459"/></figure></div>`);function Un(s){var e=Hn(),t=i(e),a=n(t,2),o=n(a,2),d=i(o);A(()=>R(d,"src",Gn)),b(1,t,()=>F,()=>({y:-20,duration:500})),b(1,a,()=>P,()=>({delay:200,duration:400})),b(1,o,()=>F,()=>({y:30,duration:500,delay:400})),b(1,e,()=>P,()=>({duration:400})),m(s,e)}var Zn=w(`<div class="phase3-titel svelte-btytv1"><header class="scene-header svelte-btytv1"><span class="phase-number svelte-btytv1">Phase 3</span> <h2 class="svelte-btytv1">Destillation</h2> <p class="subtitle svelte-btytv1">Vom Rohmaterial zum Vault</p></header> <div class="content-block svelte-btytv1"><p class="lead svelte-btytv1">Die Erkenntnisse aus der Exploration werden nun zu strukturierten, LLM-optimierten
      Dokumenten <strong class="svelte-btytv1">destilliert</strong>. Das Kernprinzip heißt <strong class="svelte-btytv1">Context Compression</strong>:
      maximale Information mit minimalen Tokens. Je präziser und dichter der Kontext formuliert ist,
      desto besser die LLM-Performance.</p> <p class="svelte-btytv1">Der Grund: <!> ist real. Hong et al. (2025)
      zeigen, dass LLM-Leistung mit wachsender Kontextlänge degradiert – mehr Tokens führen
      nicht automatisch zu besseren Ergebnissen. Das widerspricht der intuitiven Annahme,
      dass mehr Information besser ist. Gezielte Verdichtung erhöht die Modellaufmerksamkeit
      auf wesentliche Aspekte. Das ist das <strong class="svelte-btytv1">Compression-als-Amplification-Paradox</strong>:
      Weniger kann mehr sein.</p></div> <div class="vault-preview svelte-btytv1"><div class="vault-icon svelte-btytv1"><svg viewBox="0 0 64 64" width="80" height="80"><rect x="8" y="16" width="48" height="40" rx="4" fill="none" stroke="currentColor" stroke-width="2"></rect><path d="M8 28 L56 28" stroke="currentColor" stroke-width="2"></path><circle cx="32" cy="38" r="6" fill="none" stroke="currentColor" stroke-width="2"></circle><path d="M32 32 L32 20" stroke="currentColor" stroke-width="2"></path><rect x="24" y="8" width="16" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="2"></rect></svg></div> <p class="vault-label svelte-btytv1">Der Promptotyping Vault</p></div> <div class="context-rot-box svelte-btytv1"><h4 class="svelte-btytv1">Context Rot vermeiden</h4> <p class="svelte-btytv1">Unstrukturierter Text wirkt als Rauschen, das LLMs von relevanten Instruktionen ablenkt.
      Daher: kurze, prägnante Sätze statt langer Absätze. Klare Überschriften und Markierungen.
      Strukturierte Listen statt Fließtext. Explizite Aussagen statt impliziter Annahmen.</p></div></div>`);function Xn(s){var e=Zn(),t=i(e),a=n(t,2),o=n(i(a),2),d=n(i(o));Q(d,{id:"context-rot",children:(g,v)=>{var p=Z("Context Rot");m(g,p)},$$slots:{default:!0}});var l=n(a,2),u=n(i(l),2),h=n(l,2);b(1,t,()=>F,()=>({y:-20,duration:500})),b(1,a,()=>P,()=>({delay:200,duration:400})),b(1,u,()=>P,()=>({delay:600,duration:400})),b(1,l,()=>F,()=>({y:20,duration:400,delay:400})),b(1,h,()=>P,()=>({delay:700,duration:400})),m(s,e)}var Qn=w(`<div class="phase3-dokumente svelte-1ipbydp"><h3 class="svelte-1ipbydp">Die Vault-Dokumente</h3> <div class="intro-text svelte-1ipbydp"><p class="svelte-1ipbydp">Der Vault besteht aus strukturierten Markdown-Dokumenten, die das Wissen LLM-optimiert
      aufbereiten. Die drei Kerndokumente bilden den Ausgangspunkt, können aber je nach Domäne
      erweitert werden (SCHEMA.md, VALIDATION.md, API-NOTES.md etc.). Das Prinzip der <strong class="svelte-1ipbydp">Context Compression</strong> gilt für alle: maximale Information bei minimaler Token-Anzahl.</p></div> <div class="documents-grid svelte-1ipbydp"><div class="document svelte-1ipbydp"><div class="doc-icon data svelte-1ipbydp"><span class="doc-ext svelte-1ipbydp">.md</span></div> <div class="doc-content svelte-1ipbydp"><h4 class="svelte-1ipbydp">DATA.md</h4> <p class="doc-question svelte-1ipbydp">Was haben wir?</p> <ul class="doc-details svelte-1ipbydp"><li class="svelte-1ipbydp">Schema und Felddefinitionen</li> <li class="svelte-1ipbydp">Datentypen und Kardinalitäten</li> <li class="svelte-1ipbydp">Beziehungen und referentielle Integrität</li> <li class="svelte-1ipbydp">Qualitätsprobleme und Limitationen</li></ul></div></div> <div class="document svelte-1ipbydp"><div class="doc-icon requirements svelte-1ipbydp"><span class="doc-ext svelte-1ipbydp">.md</span></div> <div class="doc-content svelte-1ipbydp"><h4 class="svelte-1ipbydp">REQUIREMENTS.md</h4> <p class="doc-question svelte-1ipbydp">Was wollen wir?</p> <ul class="doc-details svelte-1ipbydp"><li class="svelte-1ipbydp">User Stories als testbare Sätze</li> <li class="svelte-1ipbydp">MoSCoW-Priorisierung (MUSS/SOLL/KANN)</li> <li class="svelte-1ipbydp">Interface-Spezifikationen</li> <li class="svelte-1ipbydp">Akzeptanzkriterien</li></ul></div></div> <div class="document svelte-1ipbydp"><div class="doc-icon context svelte-1ipbydp"><span class="doc-ext svelte-1ipbydp">.md</span></div> <div class="doc-content svelte-1ipbydp"><h4 class="svelte-1ipbydp">CONTEXT.md</h4> <p class="doc-question svelte-1ipbydp">Was wissen wir?</p> <ul class="doc-details svelte-1ipbydp"><li class="svelte-1ipbydp">Forschungsmethodologie und -fragen</li> <li class="svelte-1ipbydp">Domänenkonzepte und Terminologie</li> <li class="svelte-1ipbydp">Historischer/kultureller Kontext</li> <li class="svelte-1ipbydp">Interpretationsrichtlinien</li></ul></div></div></div> <div class="testable-box svelte-1ipbydp"><h4 class="svelte-1ipbydp">Testbare Formulierung</h4> <div class="example-row svelte-1ipbydp"><div class="example correct svelte-1ipbydp"><span class="label svelte-1ipbydp">Korrekt</span> <p class="svelte-1ipbydp">"Das System muss Korrespondenzen nach Datum filterbar darstellen."</p></div> <div class="example incorrect svelte-1ipbydp"><span class="label svelte-1ipbydp">Falsch</span> <p class="svelte-1ipbydp">"Das System soll benutzerfreundlich sein."</p> <span class="reason svelte-1ipbydp">Zu vage, nicht testbar</span></div></div></div></div>`);function Jn(s){var e=Qn(),t=i(e),a=n(t,2),o=n(a,2),d=i(o),l=n(d,2),u=n(l,2),h=n(o,2);b(1,t,()=>P,()=>({duration:400})),b(1,a,()=>P,()=>({delay:150,duration:400})),b(1,d,()=>F,()=>({y:30,duration:500,delay:300})),b(1,l,()=>F,()=>({y:30,duration:500,delay:450})),b(1,u,()=>F,()=>({y:30,duration:500,delay:600})),b(1,h,()=>P,()=>({delay:750,duration:400})),m(s,e)}var Yn=w(`<div class="phase3-vault svelte-1don6ot"><h3 class="svelte-1don6ot">Der <span class="promptotyping svelte-1don6ot">Promptotyping</span> Vault</h3> <div class="explanation-block svelte-1don6ot"><p class="svelte-1don6ot">Der Vault fungiert als <strong class="svelte-1don6ot">Boundary Object</strong> (Star & Griesemer, 1989) – ein Artefakt,
      das zwischen verschiedenen sozialen Welten vermittelt: zwischen technischer Implementation und
      fachlicher Anforderung, zwischen Entwickler:in und Domänenexpert:in, zwischen Mensch und LLM.
      Er ist strukturiert genug für maschinelle Verarbeitung und gleichzeitig verständlich für
      menschliche Leser:innen.</p> <p class="svelte-1don6ot">Die Dokumentstruktur ist <strong class="svelte-1don6ot">flexibel und erweiterbar</strong>. Die drei Kerndokumente
      (DATA.md, REQUIREMENTS.md, CONTEXT.md) bilden den Ausgangspunkt. Je nach Domäne können
      weitere Dokumente ergänzt werden: SCHEMA.md für komplexe Datenmodelle, VALIDATION.md für
      Qualitätskriterien, API-NOTES.md für Schnittstellendokumentation.</p></div> <div class="vault-visual svelte-1don6ot"><div class="source-flow svelte-1don6ot"><div class="source-item svelte-1don6ot"><span class="source-label svelte-1don6ot">Datenstrukturen</span> <div class="arrow svelte-1don6ot">→</div></div> <div class="source-item svelte-1don6ot"><span class="source-label svelte-1don6ot">Erkenntnisse</span> <div class="arrow svelte-1don6ot">→</div></div> <div class="source-item svelte-1don6ot"><span class="source-label svelte-1don6ot">Anforderungen</span> <div class="arrow svelte-1don6ot">→</div></div></div> <div class="vault-center svelte-1don6ot"><div class="vault-box svelte-1don6ot"><div class="vault-header svelte-1don6ot">VAULT</div> <div class="vault-files svelte-1don6ot"><div class="file-item svelte-1don6ot"><span class="file svelte-1don6ot">DATA.md</span> <span class="file-desc svelte-1don6ot">Was haben wir?</span></div> <div class="file-item svelte-1don6ot"><span class="file svelte-1don6ot">REQUIREMENTS.md</span> <span class="file-desc svelte-1don6ot">Was wollen wir?</span></div> <div class="file-item svelte-1don6ot"><span class="file svelte-1don6ot">CONTEXT.md</span> <span class="file-desc svelte-1don6ot">Was wissen wir?</span></div></div></div></div> <div class="llm-flow svelte-1don6ot"><div class="arrow large svelte-1don6ot">→</div> <div class="llm-target svelte-1don6ot"><span class="llm-label svelte-1don6ot">Phase 4</span> <span class="llm-sublabel svelte-1don6ot">Implementation</span></div></div></div> <div class="download-section svelte-1don6ot"><p class="download-intro svelte-1don6ot">Starte dein eigenes Projekt:</p> <div class="download-buttons svelte-1don6ot"><a download="" class="download-btn primary svelte-1don6ot"><span class="btn-icon svelte-1don6ot">&#8595;</span> Vault-Template</a> <a href="https://github.com/DigitalHumanitiesCraft/PromptotypingExplainer/tree/main/knowledge" target="_blank" rel="noopener" class="download-btn secondary svelte-1don6ot"><span class="btn-icon svelte-1don6ot">&#8599;</span> Echtes Beispiel auf GitHub</a></div></div></div>`);function es(s,e){N(e,!1);const t="/PromptotypingExplainer/downloads";j();var a=Yn(),o=i(a),d=n(o,2),l=n(d,2),u=i(l),h=n(u,2),g=n(h,2),v=n(l,2),p=n(i(v),2),c=i(p);A(()=>R(c,"href",`${t}/VAULT-TEMPLATE-README.md`)),b(1,o,()=>P,()=>({duration:400})),b(1,d,()=>P,()=>({delay:150,duration:400})),b(1,u,()=>P,()=>({delay:300,duration:400})),b(1,h,()=>Qe,()=>({duration:500,delay:500})),b(1,g,()=>P,()=>({delay:700,duration:400})),b(1,v,()=>P,()=>({delay:1e3,duration:400})),m(s,a),O()}var ts=w(`<div class="phase4-titel svelte-1jfm6fv"><header class="scene-header svelte-1jfm6fv"><span class="phase-number svelte-1jfm6fv">Phase 4</span> <h2 class="svelte-1jfm6fv">Implementation</h2> <p class="subtitle svelte-1jfm6fv">Iterative Entwicklung</p></header> <div class="content-block svelte-1jfm6fv"><p class="svelte-1jfm6fv">Mit der Übergabe des Vault an das LLM beginnt die <strong class="svelte-1jfm6fv">Cyborg-Arbeit</strong>. Im Unterschied
      zur Centaur-Arbeit (klare Aufgabenteilung) bedeutet Cyborg-Arbeit enge kognitive Verschränkung:
      Mensch und Maschine entwickeln in iterativen Dialogschleifen gemeinsam Lösungen. Die Grenze
      zwischen menschlichem und maschinellem Beitrag verschwimmt bewusst.</p> <p class="svelte-1jfm6fv">Jede Iteration folgt demselben Muster: Der Vault (oder eine gezielte Auswahl relevanter Dokumente)
      wird dem LLM als Kontext mitgegeben. Das LLM generiert einen Prototype, der Critical Expert
      validiert das Ergebnis, und neues Wissen fließt zurück in den Vault. Dieser Zyklus wiederholt
      sich bis zur gewünschten Qualität.</p> <div class="cycle-preview svelte-1jfm6fv"><div class="cycle-step svelte-1jfm6fv"><span class="cycle-icon svelte-1jfm6fv">1</span> <span class="cycle-label svelte-1jfm6fv">Prompt + Vault</span></div> <div class="cycle-arrow svelte-1jfm6fv">→</div> <div class="cycle-step svelte-1jfm6fv"><span class="cycle-icon svelte-1jfm6fv">2</span> <span class="cycle-label svelte-1jfm6fv">LLM generiert</span></div> <div class="cycle-arrow svelte-1jfm6fv">→</div> <div class="cycle-step svelte-1jfm6fv"><span class="cycle-icon svelte-1jfm6fv">3</span> <span class="cycle-label svelte-1jfm6fv">Expert validiert</span></div></div></div> <div class="output-box svelte-1jfm6fv"><h4 class="svelte-1jfm6fv">Typischer Output</h4> <p class="svelte-1jfm6fv">Single HTML File mit inline CSS/JS, keine externen Dependencies außer CDN-verfügbare Bibliotheken,
      kommentierter Code an kritischen Stellen für spätere Wartung und Anpassung.</p></div></div>`);function ns(s){var e=ts(),t=i(e),a=n(t,2),o=n(i(a),4),d=n(a,2);b(1,t,()=>F,()=>({y:-20,duration:500})),b(1,o,()=>F,()=>({y:20,duration:400,delay:400})),b(1,a,()=>P,()=>({delay:200,duration:400})),b(1,d,()=>P,()=>({delay:500,duration:400})),m(s,e)}var ss=w('<span class="pattern-label svelte-1hq5by1"> </span>'),is=w('<div><!> <div class="bubble svelte-1hq5by1"><p class="svelte-1hq5by1"> </p></div></div>'),rs=w('<div class="typing-indicator svelte-1hq5by1"><span class="typing-dot svelte-1hq5by1"></span> <span class="typing-dot svelte-1hq5by1"></span> <span class="typing-dot svelte-1hq5by1"></span></div>'),as=w('<div class="animated-chat svelte-1hq5by1"><div class="chat-header svelte-1hq5by1"><div class="chat-dots svelte-1hq5by1"><span class="dot svelte-1hq5by1"></span> <span class="dot svelte-1hq5by1"></span> <span class="dot svelte-1hq5by1"></span></div> <span class="chat-title svelte-1hq5by1">Promptotyping Session</span></div> <div class="chat-messages svelte-1hq5by1"><!> <!></div></div>');function ls(s,e){N(e,!1);const t=[{type:"human",pattern:"Context setzen",text:"Lies knowledge.md und requirements.md. Was sind die Story-Gaps im Frontend?"},{type:"llm",pattern:"Reasoning",text:"Ich analysiere die Vault-Dokumente... Drei Gaps: 1) Phase 4 abstrakt, 2) Beispieldaten fehlen, 3) Komponenten ungenutzt."},{type:"human",pattern:"Plan anfordern",text:"Erstelle einen Plan! Wie lösen wir Gap 1?"},{type:"llm",pattern:"Plan",text:"Plan: AnimatedChat-Komponente erstellen → echte Prompts zeigen → Typing-Indicator für Authentizität."},{type:"human",pattern:"Implementieren",text:"Setze den Plan um. Teste ob es kompiliert."},{type:"llm",pattern:"Test",text:"Komponente erstellt. Build erfolgreich. Aber: Beispiel zu generisch für Promptotyping."},{type:"human",pattern:"Feedback",text:"Nimm unseren eigenen Prozess als Meta-Beispiel – das ist authentischer!"},{type:"llm",pattern:"Dokumentation",text:'Chat aktualisiert. Ergänze journal.md: "Meta-Beispiel zeigt echten Workflow".'}];let a=se([]),o=0;Ke(()=>{const v=()=>{if(o<t.length){M(a,[...r(a),t[o]]),o++;const p=t[o-1].type==="human"?2e3:2500;setTimeout(v,p)}else setTimeout(()=>{M(a,[]),o=0,setTimeout(v,1e3)},4e3)};return setTimeout(v,800),()=>{}}),j();var d=as(),l=n(i(d),2),u=i(l);oe(u,1,()=>r(a),de,(v,p)=>{var c=is(),f=i(c);{var x=E=>{var _=ss(),I=i(_);A(()=>$(I,r(p).pattern)),m(E,_)};Y(f,E=>{r(p).pattern&&E(x)})}var k=n(f,2),z=i(k),D=i(z);A(()=>{Ee(c,1,`message ${r(p).type??""}`,"svelte-1hq5by1"),$(D,r(p).text)}),b(1,c,()=>F,()=>({y:20,duration:400})),m(v,c)});var h=n(u,2);{var g=v=>{var p=rs();b(1,p,()=>P,()=>({duration:200})),m(v,p)};Y(h,v=>{r(a).length<t.length&&v(g)})}m(s,d),O()}var os=w(`<div class="phase4-iteration svelte-5lsmoa"><h3 class="svelte-5lsmoa">Der Iterationszyklus</h3> <div class="intro-text svelte-5lsmoa"><p class="svelte-5lsmoa">Der Iterationszyklus ist das Herzstück der Implementation. Er folgt einem klaren Muster: <strong class="svelte-5lsmoa">Context → Reasoning → Plan → Implementation → Test → Feedback → Dokumentation</strong>.
      Entscheidend ist das Verständnis dessen, was im "Reasoning"-Schritt tatsächlich passiert.</p></div> <div class="iteration-grid svelte-5lsmoa"><figure class="chat-side svelte-5lsmoa"><!> <figcaption class="svelte-5lsmoa">Der Reasoning-Zyklus: Fragen, Planen, Implementieren, Dokumentieren</figcaption></figure> <div class="text-card explainer-side svelte-5lsmoa"><p>Der Zyklus beginnt mit dem <strong>Kontext</strong>: Der gesamte Vault oder eine gezielte Auswahl
        relevanter Dokumente wird dem LLM mitgegeben. Im <strong>"Reasoning"</strong> ruft das LLM
        passende Muster aus seinem Training ab und interpoliert eine Lösung. Es analysiert nicht,
        es retrievet approximativ – ein fundamentaler Unterschied zu menschlichem Denken.</p> <p>Der generierte <strong>Plan</strong> wird implementiert und direkt <strong>getestet</strong>.
        Fehler werden sofort sichtbar. Kritisches <strong>Feedback</strong> durch den Critical Expert
        gibt die Richtung für die nächste Iteration vor. Dieser Test-Feedback-Loop ist entscheidend:
        LLMs haben keine intrinsische Qualitätskontrolle, das Urteil muss extern kommen.</p> <p>Am Ende jedes Zyklus steht die <strong>Dokumentation</strong>: Neues Wissen fließt sofort
        zurück in den Vault. Der Kontext wächst – und der nächste Zyklus startet mit besserem
        Retrieval-Material. Dieser Feedback-Loop ist das, was Promptotyping von einmaligen
        Prompt-Versuchen unterscheidet.</p> <div class="prompting-strategies svelte-5lsmoa"><h4 class="svelte-5lsmoa">Prompting-Strategien</h4> <ul class="svelte-5lsmoa"><li class="svelte-5lsmoa"><strong class="svelte-5lsmoa">Chain-of-Thought (CoT):</strong> "Erkläre Schritt für Schritt, wie du vorgehst..."</li> <li class="svelte-5lsmoa"><strong class="svelte-5lsmoa">Few-Shot Learning:</strong> Konkrete Beispiele im Prompt mitgeben</li> <li class="svelte-5lsmoa"><strong class="svelte-5lsmoa">Role Prompting:</strong> "Als erfahrener DH-Entwickler..."</li> <li class="svelte-5lsmoa"><strong class="svelte-5lsmoa">Constraint Setting:</strong> "Verwende nur vanilla JS, keine externen Dependencies"</li></ul></div> <div class="deep-dive-trigger-wrapper svelte-5lsmoa"><!></div></div></div></div>`);function ds(s,e){N(e,!1);function t(c){xe(c.detail.id)}j();var a=os(),o=i(a),d=n(o,2),l=n(d,2),u=i(l),h=i(u);ls(h,{});var g=n(u,2),v=n(i(g),8),p=i(v);me(p,{label:"LLMs als Retrieval-Systeme",deepDiveId:"llm-retrieval",$$events:{open:t}}),b(1,o,()=>P,()=>({duration:400})),b(1,d,()=>P,()=>({delay:150,duration:400})),b(1,u,()=>F,()=>({x:-30,duration:500,delay:300})),b(1,g,()=>F,()=>({x:30,duration:500,delay:400})),m(s,a),O()}var cs=w(`<div class="phase4-vault-update svelte-1dkyo20"><h3 class="svelte-1dkyo20">Vault-Update</h3> <div class="intro-text svelte-1dkyo20"><p class="svelte-1dkyo20">Der Vault ist kein statisches Dokument, sondern ein <strong class="svelte-1dkyo20">lebendiger Wissensspeicher</strong>.
      Mit jeder Iteration fließt neues Wissen zurück: Erkannte Datenlücken, präzisierte Anforderungen,
      und Einsichten aus der Implementierung. Dieser kontinuierliche Update-Prozess unterscheidet
      Promptotyping von einmaligen Prompt-Versuchen.</p></div> <div class="update-visual svelte-1dkyo20"><div class="update-source svelte-1dkyo20"><div class="source-header svelte-1dkyo20">Prototype zeigt...</div> <div class="source-items svelte-1dkyo20"><div class="source-item svelte-1dkyo20">Fehlende Datenfelder</div> <div class="source-item svelte-1dkyo20">Unklare Anforderungen</div> <div class="source-item svelte-1dkyo20">Neue Erkenntnisse</div></div></div> <div class="update-arrow svelte-1dkyo20"><svg viewBox="0 0 60 40" width="60" height="40" class="svelte-1dkyo20"><path d="M5 20 L45 20" stroke="var(--color-terracotta)" stroke-width="2" stroke-dasharray="4 3"></path><polygon points="45,15 55,20 45,25" fill="var(--color-terracotta)"></polygon></svg> <span class="arrow-label svelte-1dkyo20">Update</span></div> <div class="update-target svelte-1dkyo20"><div class="target-header svelte-1dkyo20">Vault</div> <div class="target-items svelte-1dkyo20"><div class="target-item svelte-1dkyo20"><span class="file-name svelte-1dkyo20">DATA.md</span> <span class="update-type svelte-1dkyo20">+ Felder</span></div> <div class="target-item svelte-1dkyo20"><span class="file-name svelte-1dkyo20">REQUIREMENTS.md</span> <span class="update-type svelte-1dkyo20">+ Klarheit</span></div> <div class="target-item svelte-1dkyo20"><span class="file-name svelte-1dkyo20">CONTEXT.md</span> <span class="update-type svelte-1dkyo20">+ Wissen</span></div></div></div></div> <div class="update-triggers svelte-1dkyo20"><h4 class="svelte-1dkyo20">Wann wird der Vault aktualisiert?</h4> <ul class="svelte-1dkyo20"><li class="svelte-1dkyo20"><strong class="svelte-1dkyo20">Fehlende Datenfelder:</strong> Der Prototype zeigt, dass ein benötigtes Feld nicht dokumentiert ist</li> <li class="svelte-1dkyo20"><strong class="svelte-1dkyo20">Unklare Anforderungen:</strong> Eine User Story war zu vage für die Implementierung</li> <li class="svelte-1dkyo20"><strong class="svelte-1dkyo20">Neue Erkenntnisse:</strong> Die Exploration im Code deckt bisher unbekannte Zusammenhänge auf</li> <li class="svelte-1dkyo20"><strong class="svelte-1dkyo20">Geänderte Prioritäten:</strong> Das Feedback verschiebt die MoSCoW-Gewichtung</li></ul></div> <div class="loop-indicator svelte-1dkyo20"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" class="svelte-1dkyo20"><path d="M17 1l4 4-4 4"></path><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><path d="M7 23l-4-4 4-4"></path><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg> <span>Verbesserter Vault → besserer Prototype → nächste Iteration</span></div></div>`);function us(s){var e=cs(),t=i(e),a=n(t,2),o=n(a,2),d=i(o),l=n(d,2),u=n(l,2),h=n(i(u),2),g=i(h),v=n(g,2),p=n(v,2),c=n(o,2),f=n(c,2);b(1,t,()=>P,()=>({duration:400})),b(1,a,()=>P,()=>({delay:150,duration:400})),b(1,d,()=>F,()=>({x:-30,duration:500,delay:300})),b(1,l,()=>P,()=>({delay:500,duration:400})),b(1,g,()=>P,()=>({delay:600})),b(1,v,()=>P,()=>({delay:700})),b(1,p,()=>P,()=>({delay:800})),b(1,u,()=>F,()=>({x:30,duration:500,delay:400})),b(1,c,()=>P,()=>({delay:900,duration:400})),b(1,f,()=>P,()=>({delay:1e3,duration:400})),m(s,e)}var vs=w('<span class="blog-badge svelte-1es890x">Blog</span>'),ps=w('<a target="_blank" rel="noopener" class="example-card svelte-1es890x"><div class="card-thumbnail svelte-1es890x"><img loading="lazy" class="svelte-1es890x"/> <span class="type-badge svelte-1es890x"> </span> <span class="date-badge svelte-1es890x"> </span> <!></div> <div class="card-content svelte-1es890x"><h3 class="svelte-1es890x"> </h3> <p class="abstract svelte-1es890x"> </p> <span class="data-format svelte-1es890x"> </span></div></a>'),hs=w(`<div class="outro-beispiele svelte-1es890x"><header class="scene-header svelte-1es890x"><span class="section-label svelte-1es890x">Praxis</span> <h2 class="svelte-1es890x">Case Studies</h2></header> <div class="intro-text svelte-1es890x"><p class="svelte-1es890x">Die folgenden Fallstudien dokumentieren die Anwendung von Promptotyping in verschiedenen
      DH-Kontexten. Jedes Projekt wurde mit einem LLM als Entwicklungspartner umgesetzt und
      demonstriert unterschiedliche Aspekte der Methodik: von der Netzwerkvisualisierung über
      Bildanalyse bis zur Annotationsunterstützung. Die Projekte sind als Open Source verfügbar
      und können als Ausgangspunkt für eigene Entwicklungen dienen.</p></div> <div class="examples-grid svelte-1es890x"></div> <div class="deep-dive-triggers svelte-1es890x"></div></div>`);function gs(s,e){N(e,!1);const t={correspexplorer:"case-correspexplorer",lucina:"case-lucina",kriminalmuseum:"case-kriminalmuseum","cvma-glasmalerei":"case-cvma",aldersbach:"case-aldersbach","szd-annotation":"case-szd"};function a(g){xe(g.detail.id)}j();var o=hs(),d=i(o),l=n(d,2),u=n(l,2);oe(u,5,()=>Ye,de,(g,v,p)=>{var c=ps(),f=i(c),x=i(f),k=n(x,2),z=i(k),D=n(k,2),E=i(D),_=n(D,2);{var I=ue=>{var L=vs();m(ue,L)};Y(_,ue=>{r(v).hasBlog&&ue(I)})}var C=n(f,2),T=i(C),B=i(T),W=n(T,2),V=i(W),ie=n(W,2),ae=i(ie);A(()=>{R(c,"href",r(v).link),R(x,"src",r(v).thumbnail),R(x,"alt",`${r(v).name??""} Screenshot`),$(z,r(v).type),$(E,r(v).date),$(B,r(v).name),$(V,r(v).abstract),$(ae,r(v).dataFormat)}),b(1,c,()=>F,()=>({y:30,duration:400,delay:200+p*100})),m(g,c)});var h=n(u,2);oe(h,5,()=>Ye,de,(g,v)=>{me(g,{get label(){return r(v).name},get deepDiveId(){return t[r(v).id]},$$events:{open:a}})}),b(1,d,()=>F,()=>({y:-20,duration:500})),b(1,l,()=>F,()=>({y:20,duration:400,delay:100})),b(1,h,()=>F,()=>({y:20,duration:400,delay:800})),m(s,o),O()}var ms=w('<li class="svelte-1f85qzn"><strong class="svelte-1f85qzn"> </strong> </li>'),fs=w('<li class="svelte-1f85qzn"><strong class="svelte-1f85qzn"> </strong> </li>'),bs=w('<div class="gap-item svelte-1f85qzn"><span class="gap-label svelte-1f85qzn"> </span> <span class="gap-text svelte-1f85qzn"> </span></div>'),ks=w(`<div class="outro-diskussion svelte-1f85qzn"><header class="scene-header svelte-1f85qzn"><span class="section-label svelte-1f85qzn">Reflexion</span> <h2 class="svelte-1f85qzn">Sollten wir LLMs in der Forschung einsetzen?</h2></header> <div class="intro-text svelte-1f85qzn"><p class="svelte-1f85qzn">Der Einsatz von LLMs in der Forschung ist keine rein technische, sondern eine <strong class="svelte-1f85qzn">epistemisch-politische Entscheidung</strong>. Die Frage lautet nicht nur "Können wir?",
      sondern auch "Sollten wir?" und "Unter welchen Bedingungen?". Diese Reflexion ist integraler
      Bestandteil einer verantwortungsvollen Promptotyping-Praxis.</p></div> <div class="discussion-grid svelte-1f85qzn"><div class="column contra svelte-1f85qzn"><div class="column-header svelte-1f85qzn"><span class="column-icon svelte-1f85qzn">?</span> <h3 class="svelte-1f85qzn">Kritische Einwände</h3></div> <ul class="points-list svelte-1f85qzn"></ul></div> <div class="column pro svelte-1f85qzn"><div class="column-header svelte-1f85qzn"><span class="column-icon svelte-1f85qzn">!</span> <h3 class="svelte-1f85qzn">Pragmatische Argumente</h3></div> <ul class="points-list svelte-1f85qzn"></ul></div></div> <div class="research-gaps svelte-1f85qzn"><h4 class="svelte-1f85qzn">Offene Forschungsfragen</h4> <div class="gaps-grid svelte-1f85qzn"></div></div> <div class="deep-dive-trigger svelte-1f85qzn"><!></div></div>`);function ys(s,e){N(e,!1);function t(E){xe(E.detail.id)}const a=[{title:"Proprietäre Systeme",text:"Abhängigkeit von intransparenten Systemen ohne Einblick in Trainingsdaten oder Modellverhalten."},{title:"Forschungsintegrität",text:"Black-Box-Charakter erschwert Reproduzierbarkeit und Zitierbarkeit."},{title:"Zugangshürden",text:"Kosten (~200$/Monat) schaffen neue Ungleichheiten. Open-Source-Alternativen erfordern erhebliche Infrastruktur."},{title:"Ökologische Kosten",text:"Hoher Energieverbrauch für Training und Inferenz bleibt methodisch unreflektiert."}],o=[{title:"Beschleunigung",text:"Projekte, die Monate dauern würden, werden in Tagen umsetzbar."},{title:"Neue Experimente",text:"Ermöglicht Prototypen und Analysen, die sonst nicht realisierbar wären."},{title:"Epistemische Praxis",text:"Vibe Coding als neue Form des explorativen Programmierens? (offene Forschungsfrage)"},{title:"Technologische Realität",text:"Multi-Agenten-Systeme zeigen, wohin die Entwicklung geht. Nicht-Auseinandersetzung ist keine Lösung."}],d=[{label:"Evaluierung",text:"Bisher existieren nur einzelne Fallbeispiele. Systematische Bewertungskriterien fehlen – am ehesten über Vibe Checks und Reviews (vgl. RIDE)."},{label:"Generalisierbarkeit",text:"Übertragbarkeit auf externe Teams und andere Disziplinen unbewiesen."},{label:"Skills Atrophy",text:"Die Gefahr des Verlernens von Coding-Skills ist real: Wer nur noch mit LLM-Unterstützung programmiert, verliert möglicherweise die Fähigkeit zur eigenständigen Problemlösung."},{label:"Kosten-Nutzen",text:"Zeitaufwand für Dokumentation vs. Effizienzgewinn ist offen."},{label:"Epistemische Gerechtigkeit",text:"Zugang zu LLM-Tools ist ungleich verteilt. Die Kosten (~200$/Monat für Premium-Modelle) schaffen neue Ungleichheiten in der Forschungslandschaft."}];j();var l=ks(),u=i(l),h=n(u,2),g=n(h,2),v=i(g),p=n(i(v),2);oe(p,5,()=>a,de,(E,_,I)=>{var C=ms(),T=i(C),B=i(T),W=n(T);A(()=>{$(B,`${r(_).title??""}:`),$(W,` ${r(_).text??""}`)}),b(1,C,()=>P,()=>({delay:300+I*100})),m(E,C)});var c=n(v,2),f=n(i(c),2);oe(f,5,()=>o,de,(E,_,I)=>{var C=fs(),T=i(C),B=i(T),W=n(T);A(()=>{$(B,`${r(_).title??""}:`),$(W,` ${r(_).text??""}`)}),b(1,C,()=>P,()=>({delay:300+I*100})),m(E,C)});var x=n(g,2),k=n(i(x),2);oe(k,5,()=>d,de,(E,_,I)=>{var C=bs(),T=i(C),B=i(T),W=n(T,2),V=i(W);A(()=>{$(B,r(_).label),$(V,r(_).text)}),b(1,C,()=>P,()=>({delay:700+I*80})),m(E,C)});var z=n(x,2),D=i(z);me(D,{label:"Grenzen & Limitationen im Detail",deepDiveId:"limitations",variant:"block",$$events:{open:t}}),b(1,u,()=>F,()=>({y:-20,duration:500})),b(1,h,()=>F,()=>({y:20,duration:400,delay:100})),b(1,v,()=>F,()=>({x:-30,duration:500,delay:200})),b(1,c,()=>F,()=>({x:30,duration:500,delay:200})),b(1,x,()=>F,()=>({y:20,duration:500,delay:600})),b(1,z,()=>P,()=>({delay:900})),m(s,l),O()}var ws=w(`<div class="outro-zusammenfassung svelte-pz9g48"><h3 class="svelte-pz9g48">Zusammenfassung</h3> <div class="text-card svelte-pz9g48"><p class="svelte-pz9g48"><span class="promptotyping">Promptotyping</span> strukturiert die Zusammenarbeit zwischen Forscher:innen und LLMs
      durch einen vierphasigen Prozess: Materialsammlung, explorative Analyse, Wissensdestillation
      im <span class="promptotyping">Promptotyping</span> Vault, und iterative Implementation.</p> <p class="svelte-pz9g48">Der <span class="promptotyping">Promptotyping</span> Vault ist ein flexibler Wissensspeicher aus <strong class="svelte-pz9g48">Promptotyping Documents</strong>.
      Die Kerndokumente DATA.md, REQUIREMENTS.md und CONTEXT.md bilden den Ausgangspunkt, können aber je nach Domäne erweitert werden.
      Sie machen implizites Domänenwissen für LLMs nutzbar und wachsen mit jeder Iteration.</p> <p class="svelte-pz9g48"><strong class="svelte-pz9g48">Critical Expert in the Loop</strong>: Domänenexpert:innen bleiben unverzichtbar.
      Sie validieren Outputs, erkennen Halluzinationen und steuern die fachliche Qualität.</p></div> <div class="three-levels svelte-pz9g48"><h4 class="svelte-pz9g48">Drei Ebenen der Methodik</h4> <div class="levels-grid svelte-pz9g48"><div class="level-item svelte-pz9g48"><span class="level-label svelte-pz9g48">Technisch</span> <p class="svelte-pz9g48">Vault-Dokumente, Context Engineering, iterative Prototypen</p></div> <div class="level-item svelte-pz9g48"><span class="level-label svelte-pz9g48">Methodisch</span> <p class="svelte-pz9g48">Phasenmodell, Critical Expert, Cyborg-Kollaboration</p></div> <div class="level-item svelte-pz9g48"><span class="level-label svelte-pz9g48">Epistemisch</span> <p class="svelte-pz9g48">Validierung, Sycophancy-Bewusstsein, Grenzen der Automation</p></div></div></div> <div class="savepoint-box svelte-pz9g48"><h4 class="svelte-pz9g48">Der Vault als Savepoint</h4> <p class="svelte-pz9g48">Der Vault funktioniert wie ein Savepoint in einem Computerspiel: Der akkumulierte Wissensstand
      bleibt erhalten, auch wenn die Entwicklung unterbrochen wird. Neue Teammitglieder können den
      Vault lesen und den Projektstand verstehen. Bei Modellwechseln oder nach längeren Pausen
      ermöglicht der Vault einen nahtlosen Wiedereinstieg.</p></div> <div class="cta svelte-pz9g48"><div class="cta-links svelte-pz9g48"><a href="https://github.com/DigitalHumanitiesCraft/CorrespExplorer" target="_blank" rel="noopener" class="cta-btn svelte-pz9g48">GitHub Repository</a> <a href="https://dhcraft.org/CorrespExplorer" target="_blank" rel="noopener" class="cta-btn cta-btn-secondary svelte-pz9g48">Live Demo</a></div></div></div>`);function xs(s){var e=ws(),t=i(e),a=n(t,2),o=n(a,2),d=n(o,2),l=n(d,2);b(1,t,()=>P,()=>({duration:400})),b(1,a,()=>F,()=>({y:20,duration:500,delay:200})),b(1,o,()=>F,()=>({y:20,duration:500,delay:400})),b(1,d,()=>F,()=>({y:20,duration:500,delay:500})),b(1,l,()=>Qe,()=>({duration:400,delay:600})),m(s,e)}var zs=w('<div class="scroll-indicator svelte-1n46o8q" aria-hidden="true"><div class="scroll-arrow svelte-1n46o8q"></div> <span class="scroll-text svelte-1n46o8q">Scroll</span></div>'),Ds=w('<div class="background-layer svelte-1n46o8q"></div> <!> <main class="scroll-container svelte-1n46o8q"><!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!> <!></main> <!>',1);function _s(s,e){N(e,!1);const t=()=>pe(fe,"$currentPhase",u),a=()=>pe(we,"$currentStep",u),o=()=>pe(Nt,"$globalProgress",u),d=()=>pe(Xe,"$isDeepDiveOpen",u),l=()=>pe(Ze,"$currentDeepDive",u),[u,h]=Ue(),g=se();Ke(()=>(Gt(),setTimeout(()=>{Oe()},300),window.addEventListener("hashchange",Oe),()=>window.removeEventListener("hashchange",Oe)));let v=se(!0);function p(y){y.target.scrollTop>100&&M(v,!1)}function c(y,S,be){return y+(S-y)*be}ye(()=>(t(),a()),()=>{typeof window<"u"&&Ht(t(),a())}),ye(()=>o(),()=>{M(g,(()=>{const y=o();let S;y<.2?S=0:y<.5?S=(y-.2)/.3:y<.85?S=1:S=1-(y-.85)/.15*.3;const be=Math.round(c(96,191,S)),Ae=Math.round(c(125,91,S)),Ie=Math.round(c(139,62,S)),Re=.04+y*.12,Be=30+y*40,We=50-Math.sin(y*Math.PI)*20,Fe=70-y*20;return`radial-gradient(ellipse at ${Be}% ${We}%, rgba(${be}, ${Ae}, ${Ie}, ${Re}) 0%, rgba(232, 232, 232, 1) ${Fe}%)`})())}),Ve(),j();var f=Ds(),x=ge(f),k=n(x,2);on(k,{});var z=n(k,2),D=i(z);nn(D,{});var E=n(D,2);U(E,{id:"intro-definition",phaseIndex:0,stepIndex:0,children:(y,S)=>{xn(y)},$$slots:{default:!0}});var _=n(E,2);U(_,{id:"intro-vibecoding",phaseIndex:0,stepIndex:1,children:(y,S)=>{Pn(y,{})},$$slots:{default:!0}});var I=n(_,2);U(I,{id:"intro-strangeminds",phaseIndex:0,stepIndex:2,children:(y,S)=>{Ln(y,{})},$$slots:{default:!0}});var C=n(I,2);U(C,{id:"intro-kernprinzip",phaseIndex:0,stepIndex:3,children:(y,S)=>{Mn(y)},$$slots:{default:!0}});var T=n(C,2);U(T,{id:"intro-methodik",phaseIndex:0,stepIndex:4,children:(y,S)=>{Cn(y,{})},$$slots:{default:!0}});var B=n(T,2);U(B,{id:"intro-phasen",phaseIndex:0,stepIndex:5,children:(y,S)=>{Tn(y,{})},$$slots:{default:!0}});var W=n(B,2);U(W,{id:"phase1-titel",phaseIndex:1,stepIndex:0,children:(y,S)=>{Vn(y,{})},$$slots:{default:!0}});var V=n(W,2);U(V,{id:"phase1-rohdaten",phaseIndex:1,stepIndex:1,children:(y,S)=>{Wn(y,{})},$$slots:{default:!0}});var ie=n(V,2);U(ie,{id:"phase1-sammlung",phaseIndex:1,stepIndex:2,children:(y,S)=>{Nn(y,{})},$$slots:{default:!0}});var ae=n(ie,2);U(ae,{id:"phase2-exploration",phaseIndex:2,stepIndex:0,children:(y,S)=>{Un(y)},$$slots:{default:!0}});var ue=n(ae,2);U(ue,{id:"phase3-titel",phaseIndex:3,stepIndex:0,children:(y,S)=>{Xn(y)},$$slots:{default:!0}});var L=n(ue,2);U(L,{id:"phase3-dokumente",phaseIndex:3,stepIndex:1,children:(y,S)=>{Jn(y)},$$slots:{default:!0}});var X=n(L,2);U(X,{id:"phase3-vault",phaseIndex:3,stepIndex:2,children:(y,S)=>{es(y,{})},$$slots:{default:!0}});var K=n(X,2);U(K,{id:"phase4-titel",phaseIndex:4,stepIndex:0,children:(y,S)=>{ns(y)},$$slots:{default:!0}});var le=n(K,2);U(le,{id:"phase4-iteration",phaseIndex:4,stepIndex:1,children:(y,S)=>{ds(y,{})},$$slots:{default:!0}});var ce=n(le,2);U(ce,{id:"phase4-vault-update",phaseIndex:4,stepIndex:2,children:(y,S)=>{us(y)},$$slots:{default:!0}});var ve=n(ce,2);U(ve,{id:"outro-beispiele",phaseIndex:5,stepIndex:0,children:(y,S)=>{gs(y,{})},$$slots:{default:!0}});var ze=n(ve,2);U(ze,{id:"outro-diskussion",phaseIndex:5,stepIndex:1,children:(y,S)=>{ys(y,{})},$$slots:{default:!0}});var G=n(ze,2);U(G,{id:"outro-zusammenfassung",phaseIndex:5,stepIndex:2,children:(y,S)=>{xs(y)},$$slots:{default:!0}});var ee=n(G,2);{var De=y=>{var S=zs();m(y,S)};Y(ee,y=>{r(v)&&y(De)})}var _e=n(z,2);{let y=Pe(()=>(l(),q(()=>l()?.title||""))),S=Pe(()=>(l(),q(()=>l()?.content||"")));vn(_e,{get isOpen(){return d()},get title(){return r(y)},get content(){return r(S)},$$events:{close(...be){Zt?.apply(this,be)}}})}A(()=>Le(x,`background: ${r(g)??""};`)),J("scroll",z,p),m(s,f),O(),h()}It(_s,{target:document.getElementById("app")});
