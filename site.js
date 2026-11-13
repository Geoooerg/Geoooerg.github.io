const $=s=>document.querySelector(s);
const page=document.body.dataset.page;
const links=[["Home","index.html","home"],["Work","work.html","work"],["Resume","resume.html","resume"],["Contact","contact.html","contact"]];
const here=page==="project"?"work":page;
$("#nav").innerHTML=`<div class="wrap"><nav><a class="logo" href="index.html">${SITE.initials}.</a><ul>${links.map(([t,h,k])=>`<li><a href="${h}"${k===here?' aria-current="page"':""}>${t}</a></li>`).join("")}</ul></nav></div>`;
$("#foot").innerHTML=`<div class="wrap"><footer><span>© ${new Date().getFullYear()} ${SITE.name}</span>${SITE.email?`<a href="mailto:${SITE.email}">${SITE.email}</a>`:""}</footer></div>`;
const byNew=(a,b)=>(b.sort||"").localeCompare(a.sort||"");
const url=p=>`project.html?project=${encodeURIComponent(p.slug)}`;

if(page==="work"){
  let cat="All",order="new";
  const cats=["All",...new Set(PROJECTS.map(p=>p.category))];
  const arrow='<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M4 12L12 4M5 4h7v7"/></svg>';
  $("#timeline").innerHTML=TIMELINE.length
    ?`<ol>${TIMELINE.map(t=>`<li><span class="mono">${t.date||""}</span><span class="rule" aria-hidden="true"></span><span class="mono">${[t.kind,t.org].filter(Boolean).join(" | ")}</span><span class="who">${t.logo?`<img src="${t.logo}" alt="">`:""}<span>${t.title}</span></span></li>`).join("")}</ol>`
    :`<p class="empty">Your timeline will appear here once you add entries to TIMELINE in data.js.</p>`;
  const draw=()=>{
    $("#chips").innerHTML=cats.map(c=>`<button class="chip" aria-pressed="${c===cat}" data-c="${c}">${c}</button>`).join("");
    const l=PROJECTS.filter(p=>cat==="All"||p.category===cat);
    l.sort(order==="new"?byNew:order==="old"?(a,b)=>byNew(b,a):order==="az"?(a,b)=>a.title.localeCompare(b.title):(a,b)=>b.title.localeCompare(a.title));
    $("#list").innerHTML=l.length?l.map((p,i)=>`<li><a class="row" href="${url(p)}"><span class="mono n">${String(i+1).padStart(2,"0")}</span><span class="thumb">${p.image?`<img src="${p.image}" alt="">`:""}</span><span class="rt"><span class="mono">${[p.group,p.date].filter(Boolean).join(" | ")}</span><span class="rtitle">${p.title}</span><span class="rsum">${p.summary||""}</span></span>${arrow}</a></li>`).join(""):`<li class="empty">No projects yet. Add one in data.js and it will show up here.</li>`;
  };
  $("#chips").onclick=e=>{const b=e.target.closest(".chip");if(b){cat=b.dataset.c;draw()}};
  $("#order").onchange=e=>{order=e.target.value;draw()};
  draw();
}

if(page==="project"){
  const p=PROJECTS.find(x=>x.slug===new URLSearchParams(location.search).get("project"));
  if(p){
    document.title=`${p.title} – ${SITE.name}`;
    const gal=(p.gallery||[]).length?`<section class="gallery"><p class="mono">Design files</p>${p.gallery.map(g=>`<figure><img src="${g.src}" alt="${g.caption}"><figcaption class="mono">${g.caption}</figcaption></figure>`).join("")}</section>`:"";
    $("#proj").innerHTML=`<a class="back mono" href="work.html">Back to work</a>
    <p class="mono" style="margin-top:2rem">${[p.category,p.group,p.date].filter(Boolean).join(" | ")}</p>
    <h1>${p.title}</h1>
    <section class="overview"><div><p class="mono">Overview</p><p class="serif q">${p.overview||p.summary||""}</p></div>
    <dl><div><dt class="mono">My role</dt><dd>${p.role||""}</dd></div><div><dt class="mono">Outcome</dt><dd>${p.outcome||""}</dd></div></dl></section>
    ${gal}
    <section><p class="mono">Key notes</p><ol class="notes">${(p.notes||[]).map(n=>`<li><span>${n}</span></li>`).join("")}</ol></section>`;
  }else $("#proj").innerHTML=`<p class="empty">Project not found. <a href="work.html">Back to work</a></p>`;
}

if(page==="contact"&&SITE.email)$("#email").innerHTML=`<a href="mailto:${SITE.email}">${SITE.email}</a>`;
