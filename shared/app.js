// ---------------- APP ----------------
// Generic explorer engine. The build injects:
//   SHEET    - config: unit, groupLabel, parts, facets
//   P        - entries: {n, p, g, name, d, sw, f:{facetId: value|[values]}, v?, vid?, extra?}
//   EMBED_OK - false in the claude.ai artifact flavor (no external requests)
const state = { q:"", parts:new Set(), f:{} };
SHEET.facets.forEach(f => state.f[f.id] = new Set());
const $ = id => document.getElementById(id);
const esc = s => s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
// escape, then render markdown links: [label](https://...)
const fmt = s => esc(s).replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
  '<a href="$2" target="_blank" rel="noopener">$1</a>');
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");

// Precompute search haystack
P.forEach(x => {
  x._hay = (x.n+" "+x.name+" "+x.g+" "+x.d+" "+x.sw+" "+
    (x.extra ? x.extra.map(e=>e[1]).join(" ") : "")+" "+
    (x.v ? x.v.map(v=>v.t+" "+v.d).join(" ") : "")).toLowerCase();
});

function rangeLabel(facet, vals){
  if(!vals || !vals.length) return null;
  const idx = vals.map(v=>facet.order.indexOf(v)).sort((a,b)=>a-b);
  const first = facet.options[facet.order[idx[0]]], last = facet.options[facet.order[idx[idx.length-1]]];
  return first===last ? first : first+"–"+last;
}

function matches(x){
  if(state.parts.size && !state.parts.has(x.p)) return false;
  for(const facet of SHEET.facets){
    const set = state.f[facet.id];
    if(!set.size) continue;
    const val = x.f[facet.id];
    if(facet.type==="single"){ if(!(val && set.has(val))) return false; }
    else if(!(val && val.some(v=>set.has(v)))) return false;
  }
  if(state.q && !x._hay.includes(state.q)) return false;
  return true;
}

function facetTags(x){
  const rows = { 1:[], 2:[] };
  for(const facet of SHEET.facets){
    const val = x.f[facet.id];
    if(val==null || (Array.isArray(val) && !val.length)) continue;
    const tags = rows[facet.tagRow===2 ? 2 : 1];
    const style = ' style="--tc:var('+facet.color+')"';
    const pre = facet.tagPrefix ? facet.tagPrefix+": " : "";
    if(facet.type==="multi"){
      val.forEach(v=>tags.push('<span class="tag"'+style+'>'+pre+esc(facet.options[v])+'</span>'));
    } else if(facet.type==="range"){
      tags.push('<span class="tag"'+style+'>'+pre+rangeLabel(facet, val)+'</span>');
    } else {
      tags.push('<span class="tag"'+style+'>'+pre+esc(facet.options[val])+'</span>');
    }
  }
  return rows;
}

function cardHTML(x){
  const part = SHEET.parts[x.p-1];
  let body = '';
  if(x.img && EMBED_OK) body += '<img class="cimg" src="'+x.img+'" alt="'+esc(x.name)+' illustration" loading="lazy">';
  body += '<p>'+fmt(x.d)+'</p>';
  body += '<span class="lab">Strengths &amp; weaknesses</span><p style="margin-top:2px">'+fmt(x.sw)+'</p>';
  if(x.v){
    body += '<span class="lab">Variants</span><div class="variants">'+
      x.v.map(v=>'<div class="variant"><b>'+esc(v.t)+'</b><p>'+fmt(v.d)+'</p></div>').join("")+'</div>';
  }
  if(x.vid){
    body += '<span class="lab">Videos</span>';
    if(EMBED_OK){
      body += '<div class="vids">'+x.vid.map(v=>
        '<div class="vid"><button class="vplay" data-vid="'+v.id+'" aria-label="Play video'+(v.t?': '+esc(v.t):'')+'">'+
        '<img src="https://i.ytimg.com/vi/'+v.id+'/hqdefault.jpg" alt="" loading="lazy">'+
        '<span class="vbtn" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18"><path d="M5.5 3.5v11l9-5.5z" fill="currentColor"/></svg></span>'+
        '</button>'+(v.t?'<span class="vt">'+esc(v.t)+'</span>':'')+'</div>').join('')+'</div>';
    } else {
      body += '<p class="ex" style="margin-top:2px">'+x.vid.map(v=>
        '<a href="https://www.youtube.com/watch?v='+v.id+'" target="_blank" rel="noopener">&#9656; '+
        (v.t?esc(v.t):'Watch on YouTube')+'</a>').join(' &nbsp;&middot;&nbsp; ')+'</p>';
    }
  }
  if(x.extra) x.extra.forEach(e=>{
    body += '<span class="lab">'+esc(e[0])+'</span><p class="ex" style="margin-top:2px">'+fmt(e[1])+'</p>';
  });
  const tags = facetTags(x);
  return '<div class="card" id="'+slug(x.name)+'" style="--pc:'+part.color+'" data-n="'+x.n+'">'+
    '<button class="chead" aria-expanded="false">'+
      '<span class="cnum">'+String(x.n).padStart(3,"0")+'</span>'+
      '<span class="cname">'+esc(x.name)+'</span>'+
      '<span class="ctags">'+tags[1].join("")+
      '<svg class="caret" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M3 1.5L7 5L3 8.5" stroke="currentColor" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg></span>'+
      (tags[2].length ? '<span class="ctags2">'+tags[2].join("")+'</span>' : '')+
    '</button><div class="cbody">'+body+'</div></div>';
}

function render(){
  const hits = P.filter(matches);
  const listEl = $("list");
  const [unit, units] = SHEET.unit;
  let html = "", lastKey = "";
  hits.forEach(x=>{
    const part = SHEET.parts[x.p-1];
    const key = x.p+"|"+x.g;
    if(key!==lastKey){
      lastKey = key;
      const count = hits.filter(h=>h.p===x.p && h.g===x.g).length;
      html += '<div class="grouphdr" style="--pc:'+part.color+'">'+
        '<span class="gp">'+SHEET.groupLabel+' '+part.roman+'</span><h2>'+esc(x.g)+'</h2>'+
        '<span class="gc">'+count+' '+(count===1?unit:units)+'</span></div>';
    }
    html += cardHTML(x);
  });
  listEl.innerHTML = html;
  $("empty").hidden = hits.length>0;
  $("resCount").textContent = hits.length+" / "+P.length;
  // part tile counts + pressed state
  SHEET.parts.forEach(part=>{
    const t = document.querySelector('.ptile[data-p="'+part.id+'"]');
    if(!t) return;
    const c = hits.filter(h=>h.p===part.id).length;
    t.querySelector(".pc").textContent = c+" of "+P.filter(h=>h.p===part.id).length;
    t.setAttribute("aria-pressed", state.parts.has(part.id) ? "true" : "false");
  });
}

// ----- build part tiles -----
$("partTiles").innerHTML = SHEET.parts.map(part=>
  '<button class="ptile" data-p="'+part.id+'" style="--pc:'+part.color+'" aria-pressed="false">'+
  '<span class="pn">'+SHEET.groupLabel+' '+part.roman+'</span>'+
  '<span class="pt" style="display:block">'+part.name+'</span>'+
  '<span class="pc"></span></button>').join("");
$("partTiles").addEventListener("click", e=>{
  const t = e.target.closest(".ptile"); if(!t) return;
  const id = +t.dataset.p;
  state.parts.has(id) ? state.parts.delete(id) : state.parts.add(id);
  render();
});

// ----- build facet chips -----
SHEET.facets.forEach(facet=>{
  const el = $("facet-"+facet.id);
  const keys = facet.order || Object.keys(facet.options);
  const labels = facet.chipLabels || facet.options;
  const set = state.f[facet.id];
  el.innerHTML = keys.map(k=>
    '<button class="fchip" data-k="'+k+'" aria-pressed="false">'+labels[k]+'</button>').join(" ");
  el.addEventListener("click", e=>{
    const c = e.target.closest(".fchip"); if(!c) return;
    const k = c.dataset.k;
    set.has(k) ? set.delete(k) : set.add(k);
    c.setAttribute("aria-pressed", set.has(k) ? "true" : "false");
    render();
  });
});

// ----- search -----
let qt;
$("q").addEventListener("input", e=>{
  clearTimeout(qt);
  qt = setTimeout(()=>{ state.q = e.target.value.trim().toLowerCase(); render(); }, 120);
});

// ----- clear -----
$("clearAll").addEventListener("click", ()=>{
  state.q=""; $("q").value="";
  state.parts.clear();
  Object.values(state.f).forEach(s=>s.clear());
  document.querySelectorAll(".fchip[aria-pressed='true']").forEach(c=>c.setAttribute("aria-pressed","false"));
  render();
});

// ----- single-player policy: pause every other video when one plays -----
function pauseOtherVideos(except){
  document.querySelectorAll(".vid iframe").forEach(f=>{
    if(f===except || !f.contentWindow) return;
    try{ f.contentWindow.postMessage(JSON.stringify({event:"command",func:"pauseVideo",args:[]}),"*"); }catch(err){}
  });
}
window.addEventListener("message", e=>{
  if(e.origin!=="https://www.youtube-nocookie.com" && e.origin!=="https://www.youtube.com") return;
  let d; try{ d = JSON.parse(e.data); }catch(err){ return; }
  if(d && d.info && d.info.playerState===1){ // 1 = playing
    const frames = document.querySelectorAll(".vid iframe");
    for(const f of frames){
      if(f.contentWindow===e.source){ pauseOtherVideos(f); break; }
    }
  }
});

// ----- expand / collapse -----
$("list").addEventListener("click", e=>{
  const play = e.target.closest(".vplay");
  if(play){
    const id = play.dataset.vid;
    pauseOtherVideos(null);
    const frame = document.createElement("iframe");
    frame.src = "https://www.youtube-nocookie.com/embed/"+id+"?autoplay=1&enablejsapi=1";
    frame.allow = "autoplay; encrypted-media; picture-in-picture";
    frame.allowFullscreen = true;
    frame.addEventListener("load", ()=>{
      try{ frame.contentWindow.postMessage(JSON.stringify({event:"listening",id:id,channel:"widget"}),"*"); }catch(err){}
    });
    play.replaceWith(frame);
    return;
  }
  const h = e.target.closest(".chead"); if(!h) return;
  const card = h.parentElement;
  const open = card.classList.toggle("open");
  h.setAttribute("aria-expanded", open ? "true" : "false");
  try{
    if(open) history.replaceState(null,"","#"+card.id);
    else if(location.hash==="#"+card.id) history.replaceState(null,"",location.pathname+location.search);
  }catch(err){}
});
$("expandAll").addEventListener("click", ()=>{
  document.querySelectorAll("#list .card").forEach(c=>{c.classList.add("open");c.querySelector(".chead").setAttribute("aria-expanded","true");});
});
$("collapseAll").addEventListener("click", ()=>{
  document.querySelectorAll("#list .card").forEach(c=>{c.classList.remove("open");c.querySelector(".chead").setAttribute("aria-expanded","false");});
});

// ----- theme toggle (website flavor only; the artifact viewer has its own) -----
if(EMBED_OK){
  const nav = document.querySelector("nav.tabs");
  const tb = document.createElement("button");
  tb.className = "themebtn";
  tb.setAttribute("aria-label", "Toggle light/dark theme");
  tb.innerHTML = '<svg class="i-sun" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8"/></svg>'+
    '<svg class="i-moon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"><path d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11z"/></svg>'+
    '<span class="tl-light">Light</span><span class="tl-dark">Dark</span>';
  tb.addEventListener("click", ()=>{
    const next = document.documentElement.getAttribute("data-theme")==="dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try{ localStorage.setItem("theme", next); }catch(e){}
  });
  nav.appendChild(tb);
}

// ----- tabs -----
const tabs = [["tab-explorer","view-explorer"],["tab-guide","view-guide"],["tab-h2h","view-h2h"]]
  .filter(([tid])=>$(tid));
tabs.forEach(([tid,vid])=>{
  $(tid).addEventListener("click", ()=>{
    tabs.forEach(([t2,v2])=>{
      $(t2).setAttribute("aria-selected", t2===tid ? "true" : "false");
      $(v2).classList.toggle("active", v2===vid);
    });
    window.scrollTo({top:0});
  });
});

render();

// ----- deep links: open the entry named in the URL hash -----
try{
  if(location.pathname.endsWith("/index.html"))
    history.replaceState(null,"",location.pathname.slice(0,-10)+location.search+location.hash);
}catch(e){}
function openFromHash(){
  const id = decodeURIComponent(location.hash.slice(1));
  if(!id) return;
  const card = document.getElementById(id);
  if(!card || !card.classList.contains("card")) return;
  card.classList.add("open");
  card.querySelector(".chead").setAttribute("aria-expanded","true");
  card.scrollIntoView({block:"start"});
}
openFromHash();
window.addEventListener("hashchange", openFromHash);
