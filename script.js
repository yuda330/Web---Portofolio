/* ===== Variabel & Base ===== */
:root{
  --bg:#0b0f17; --text:#e9eeff; --muted:#8da0bd;
  --primary:#7c4dff; --secondary:#00d4ff;
  --grad:linear-gradient(135deg,var(--primary),var(--secondary));
  --container:1100px; --radius:16px; --ease:cubic-bezier(.22,.61,.36,1);
}
*{box-sizing:border-box;margin:0;padding:0}
html,body{height:100%}
html{scroll-behavior:smooth}
@media (prefers-reduced-motion: reduce){ html{scroll-behavior:auto} }
body{
  font-family:Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto;
  color:var(--text);
  background:
    radial-gradient(1000px 600px at 80% -10%, rgba(124,77,255,.15), transparent 60%),
    radial-gradient(800px 500px at -10% 10%, rgba(0,212,255,.12), transparent 55%),
    repeating-linear-gradient(0deg, transparent 0 28px, rgba(255,255,255,.03) 28px 29px),
    repeating-linear-gradient(90deg, transparent 0 28px, rgba(255,255,255,.03) 28px 29px),
    var(--bg);
  line-height:1.6;
}
html, body{overflow-x:hidden}
.noscroll{overflow:hidden}
.container{max-width:var(--container); margin-inline:auto; padding:0 20px}
section[id]{scroll-margin-top:80px}

/* ===== Intro ===== */
.intro{position:fixed; inset:0; display:grid; place-items:center; background:#070b12; z-index:100; transition:opacity .6s var(--ease), visibility .6s var(--ease)}
.intro.hidden{opacity:0; visibility:hidden}
.intro__bg{position:absolute; inset:0; background:radial-gradient(900px 420px at 80% 10%, rgba(124,77,255,.16), transparent 60%), radial-gradient(700px 420px at 10% 20%, rgba(0,212,255,.14), transparent 55%), #070b12}
.intro__bg::before,.intro__bg::after{content:""; position:absolute; inset:-10%; background:
  radial-gradient(2px 2px at 10% 20%, rgba(255,255,255,.15) 99%, transparent) repeat,
  radial-gradient(2px 2px at 40% 70%, rgba(255,255,255,.12) 99%, transparent) repeat,
  radial-gradient(2px 2px at 80% 30%, rgba(255,255,255,.1) 99%, transparent) repeat;
  background-size:160px 160px, 200px 200px, 260px 260px; animation:float-particles 18s linear infinite; opacity:.6}
.intro__bg::after{filter:blur(1px); opacity:.4; animation-duration:26s}
@keyframes float-particles{to{transform:translate3d(2%,-2%,0)}}
.intro__inner{text-align:center; padding:24px; position:relative}
.intro__logo{width:108px; height:108px; border-radius:26px; margin:0 auto 14px; background:var(--grad); display:grid; place-items:center; color:#081019; font-weight:900; box-shadow:0 20px 60px rgba(124,77,255,.35); transform:perspective(800px) rotateX(8deg) rotateY(-8deg); animation:tilt 3.6s var(--ease) infinite alternate; position:relative; overflow:hidden}
.intro__logo-text{font-size:36px; letter-spacing:.5px; z-index:1}
.intro__logo-shine{position:absolute; inset:0; transform:translateX(-120%); background:linear-gradient(120deg, transparent 0%, rgba(255,255,255,.35) 35%, transparent 70%); animation:shine 2.8s var(--ease) infinite}
@keyframes shine{0%{transform:translateX(-120%)}60%{transform:translateX(120%)}100%{transform:translateX(120%)}}
@keyframes tilt{0%{transform:perspective(800px) rotateX(8deg) rotateY(-8deg)}100%{transform:perspective(800px) rotateX(-6deg) rotateY(6deg)}}
.intro__title{margin:6px 0 6px; font-size:28px; min-height:1.2em}
.typewriter{--caret:#e9eeff; display:inline-block; white-space:nowrap; overflow:hidden; border-right:2px solid var(--caret); animation:typing 1.8s steps(22,end) .2s both, blink .9s step-end infinite 2s}
@keyframes typing{from{width:0} to{width:22ch}}
@keyframes blink{50%{border-color:transparent}}
.intro__tagline{margin:4px 0 14px; color:var(--muted)}
.intro__actions{display:flex; gap:12px; justify-content:center; flex-wrap:wrap; margin:10px 0 14px}
.intro__progress{width:min(280px,80vw); height:6px; background:rgba(255,255,255,.12); border-radius:999px; margin:6px auto 0; overflow:hidden}
.intro__bar{display:block; height:100%; width:0; background:linear-gradient(90deg,#7c4dff,#00d4ff); border-radius:999px; transition:width .18s linear}
@media (prefers-reduced-motion: reduce){
  .intro__logo,.intro__bg::before,.intro__bg::after,.intro__logo-shine,.typewriter{animation:none !important}
  .typewriter{border-right:0}
}

/* ===== Navbar ===== */
.nav{position:sticky; top:0; padding-top:env(safe-area-inset-top); backdrop-filter: blur(10px); background:rgba(11,15,23,.55); border-bottom:1px solid rgba(255,255,255,.06); z-index:50}
.nav__inner{display:flex; align-items:center; justify-content:space-between; height:64px}
.brand{color:var(--text); text-decoration:none; font-weight:800}
.brand span{background:var(--grad); -webkit-background-clip:text; background-clip:text; color:transparent}
.nav__links{display:flex; gap:20px; align-items:center}
.nav__links a{color:var(--text); text-decoration:none; opacity:.85}
.nav__links a:hover{opacity:1}
.nav__toggle{display:none; background:none; color:var(--text); border:0}
@media (max-width:860px){
  .nav__toggle{display:block}
  .nav__links{position:fixed; inset:64px 0 auto 0; background:#0b0f17; border-bottom:1px solid rgba(255,255,255,.06); padding:16px 20px; display:grid; gap:12px; transform:translateY(-120%); transition:transform .3s var(--ease)}
  .nav__links.open{transform:translateY(0)}
}

/* ===== Buttons ===== */
.btn{display:inline-flex; align-items:center; gap:10px; padding:12px 18px; border-radius:10px; text-decoration:none; cursor:pointer; transition:.25s var(--ease); border:1px solid transparent}
.btn--primary{background:var(--grad); color:#061122; font-weight:700; box-shadow:0 8px 30px rgba(124,77,255,.35)}
.btn--primary:hover{filter:brightness(1.08)}
.btn--ghost{border-color:rgba(255,255,255,.22); color:var(--text); background:transparent}
.btn--ghost:hover{border-color:rgba(255,255,255,.45)}
.btn--sm{padding:8px 12px; font-size:.95rem}

/* ===== Hero ===== */
.hero{padding:90px 0 50px; position:relative; overflow:hidden}
.hero__inner{display:grid; gap:32px; align-items:center; grid-template-columns:1.2fr .9fr}
.grad-text{background:var(--grad); -webkit-background-clip:text; background-clip:text; color:transparent}
.typewriter-hero{--chars:31; --caret:#e9eeff; display:inline-block; white-space:nowrap; overflow:hidden; border-right:3px solid var(--caret); animation:typing-hero 1.8s steps(var(--chars), end) .3s both, blink 1s step-end infinite 2.1s}
@keyframes typing-hero{from{width:0} to{width:calc(var(--chars) * 1ch)}}
.hero__text p{color:var(--muted); margin:14px 0 20px; max-width:60ch}
.hero__cta{display:flex; gap:12px; flex-wrap:wrap}
.hero__img{
  text-align:center;
  display:flex;
  flex-direction:column;
  align-items:center;
}
.hero__img img{
  width:280px;
  height:280px;
  max-width:100%;
  object-fit:cover;
  border-radius:20px;
  border:1px solid rgba(255,255,255,.12);
  box-shadow:0 20px 60px rgba(0,0,0,.4);
  margin-inline:auto;

  /* 🔧 Kontrol Geser Foto Profil (manual offset) */
  transform: translate(var(--foto-x, -25px), var(--foto-y, 40px));
  transition: transform 0.25s ease;
}

/* 🔧 (OPSIONAL) Geser seluruh container foto */
.hero__img {
  transform: translate(var(--foto-wrap-x, 0px), var(--foto-wrap-y, 0px));
  transition: transform 0.25s ease;
}
  /* 🔧 Geser teks caption di bawah foto */
.hero__img figcaption {
  transform: translate(var(--caption-x, -12px), var(--caption-y, 35px));
  transition: transform 0.25s ease;
}

.hero__img figcaption{color:var(--muted); margin-top:8px}
.hero__bg .orb{position:absolute; border-radius:999px; filter:blur(16px); opacity:.7}
.orb--a{width:220px; height:220px; right:8%; top:8%; background:radial-gradient(circle at 30% 30%, #7c4dff, transparent 60%)}
.orb--b{width:180px; height:180px; right:28%; top:50%; background:radial-gradient(circle at 40% 40%, #00d4ff, transparent 60%)}

/* ===== Sections ===== */
.section{padding:72px 0}
.about{
  display:grid;
  grid-template-columns:1.1fr .9fr;
  gap:24px;
}
.checklist{margin-top:8px; padding-left:18px}
.stats{display:grid; grid-template-columns:repeat(3,1fr); gap:16px}
.stat{background:rgba(255,255,255,.06); text-align:center; border-radius:12px; padding:16px; border:1px solid rgba(255,255,255,.1)}
.stat span{font-size:28px; font-weight:800; display:block}

/* ===== Portfolio & Tabs ===== */
.portfolio__title{font-size:clamp(28px,4vw,48px); line-height:1.1; margin:0 0 8px; text-align:center; background:var(--grad); -webkit-background-clip:text; background-clip:text; color:transparent}
.portfolio__desc{color:var(--muted); text-align:center; max-width:70ch; margin:6px auto 22px}
.tabs{display:flex; gap:18px; justify-content:center; flex-wrap:wrap; background:linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.02)); border:1px solid rgba(255,255,255,.08); border-radius:22px; padding:14px; margin:16px auto 20px; max-width:920px; box-shadow:inset 0 0 0 1px rgba(255,255,255,.02)}
.tab{display:flex; align-items:center; gap:10px; padding:12px 20px; border-radius:14px; background:transparent; color:var(--text); border:1px solid transparent; cursor:pointer; font-weight:700; opacity:.9; transition:.25s var(--ease)}
.tab:hover{opacity:1; border-color:rgba(255,255,255,.18)}
.tab.active{background:radial-gradient(200px 80px at 50% 0%, rgba(124,77,255,.35), transparent 60%), linear-gradient(135deg, rgba(124,77,255,.35), rgba(0,212,255,.25)); border-color:rgba(255,255,255,.2); box-shadow:0 10px 30px rgba(0,0,0,.30), inset 0 0 0 1px rgba(255,255,255,.06)}
.tabpanel{display:none}
.tabpanel.active{display:block}
.gallery{display:grid; gap:16px; grid-template-columns:repeat(3, minmax(0,1fr)); margin-top:18px}
.gallery__item{background:#121829; border:1px solid rgba(255,255,255,.08); border-radius:12px; overflow:hidden; transition:transform .18s var(--ease), box-shadow .18s var(--ease)}
.gallery__item:hover{transform:translateY(-4px); box-shadow:0 18px 40px rgba(0,0,0,.35)}
.gallery__item img{width:100%; height:240px; object-fit:cover; display:block}
.gallery__item figcaption{padding:10px 12px; color:var(--muted); font-size:.95rem}

/* Software: transparan + seragam */
.software-grid{list-style:none; padding:0; margin:22px 0 0; display:grid; gap:18px; grid-template-columns:repeat(3, minmax(0,1fr))}
.software__item{text-align:center; padding:14px 8px}
.software__item h4{margin:10px 0 0; font-size:.95rem; letter-spacing:.5px; color:var(--muted)}
.software__logo{width:100%; height:100px; display:grid; place-items:center}
.software__logo img{max-width:140px; max-height:70px; width:auto; height:auto; object-fit:contain; display:block; margin:auto; filter:drop-shadow(0 6px 18px rgba(0,0,0,.25)); transition:transform .25s var(--ease)}
.software__item:hover .software__logo img{transform:translateY(-4px) scale(1.02)}

/* ===== Contact ===== */
.contact-section{background:linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,.01)); border-top:1px solid rgba(255,255,255,.06)}
.contact__subtitle{text-align:center; color:var(--muted); margin-bottom:32px}
.contact__grid{
  display:grid;
  gap:24px;
  grid-template-columns:repeat(2, minmax(0,1fr));
}
.contact__form, .contact__comments{background: rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.08); border-radius:20px; padding:24px 26px; backdrop-filter:blur(10px); position:relative; overflow:hidden; transition: transform .35s var(--ease), box-shadow .35s var(--ease)}
.contact__form:hover, .contact__comments:hover{ transform:translateY(-6px); box-shadow:0 24px 60px rgba(0,0,0,.32) }
.card-head h3{background:var(--grad); -webkit-background-clip:text; background-clip:text; color:transparent; margin:.2rem 0 .4rem 0; font-size:1.6rem}
.card-head p{color:var(--muted); margin:.2rem 0 1rem 0}

/* Floating label */
.input-group{position:relative; margin:16px 0}
.input-group input,.input-group textarea{width:100%; padding:16px 44px 16px 16px; border-radius:12px; border:1px solid rgba(255,255,255,.12); background:rgba(255,255,255,.04); color:var(--text); outline:none; transition:border .25s var(--ease), background .25s var(--ease), box-shadow .25s var(--ease)}
.input-group textarea{resize:vertical}
.input-group label{position:absolute; left:16px; top:50%; transform:translateY(-50%); color:#cbd7ff; opacity:.85; pointer-events:none; transition: all .2s var(--ease); background:transparent; padding:0 .25rem}
.input-group .icon{position:absolute; right:12px; top:50%; transform:translateY(-50%); opacity:.7}
.input-group input:focus,.input-group textarea:focus{border-color:rgba(124,77,255,.6); background:rgba(124,77,255,.08); box-shadow:0 0 0 4px rgba(124,77,255,.12)}
.input-group input:not(:placeholder-shown) + label,
.input-group textarea:not(:placeholder-shown) + label,
.input-group input:focus + label,
.input-group textarea:focus + label{top:0; transform:translateY(-50%) scale(.86); color:#e9eeff; background:rgba(6,17,34,.6)}
.actions{display:flex; gap:12px; flex-wrap:wrap; margin-top:8px}
.form-note{color:var(--muted); font-size:.9rem}
.comment-form{display:grid; gap:8px; margin-bottom:14px}
.comment-form input,.comment-form textarea{background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.12); border-radius:12px; padding:12px 14px; color:var(--text)}
.comment-list{list-style:none; padding:0; margin:0; display:grid; gap:12px}
.comment-item{display:flex; gap:12px; align-items:flex-start}
.avatar{width:36px; height:36px; border-radius:999px; background:var(--grad); display:grid; place-items:center; color:#061122; font-weight:800}
.bubble{background:rgba(255,255,255,.06); border:1px solid rgba(255,255,255,.1); border-radius:12px; padding:10px 12px; max-width:100%}

/* Button ripple */
.btn-wave{position:relative; overflow:hidden}
.btn-wave::after{content:""; position:absolute; left:50%; top:50%; width:0; height:0; border-radius:999px; background:rgba(255,255,255,.35); transform:translate(-50%,-50%); opacity:0; transition: width .5s var(--ease), height .5s var(--ease), opacity .5s var(--ease)}
.btn-wave:active::after{width:220px; height:220px; opacity:.35}

/* Toast */
.toast{position:fixed; left:50%; bottom:26px; transform:translateX(-50%) translateY(20px); background:#0c1421; color:#dfe9ff; border:1px solid rgba(255,255,255,.12); border-radius:12px; padding:10px 14px; opacity:0; pointer-events:none; transition: opacity .35s var(--ease), transform .35s var(--ease); z-index:70}
.toast.show{opacity:1; transform:translateX(-50%) translateY(0)}

/* ===== Reveal ===== */
.reveal{opacity:0; transform:translate3d(0,22px,0); transition:opacity .8s var(--ease), transform .8s var(--ease)}
.reveal[data-reveal="left"]{transform:translate3d(22px,0,0)}
.reveal-visible{opacity:1; transform:translate3d(0,0,0)}

/* ===== Footer ===== */
.footer{border-top:1px solid rgba(255,255,255,.06); padding:24px 0}
.footer__inner{display:flex; align-items:center; justify-content:space-between}
.to-top{color:var(--text); opacity:.7; text-decoration:none}
.to-top:hover{opacity:1}

/* ======= RESPONSIVE ======= */

/* Tablet & HP besar */
@media (max-width: 900px) {
  .hero {
    padding: 72px 0 40px;
  }
  .hero__inner {
    grid-template-columns: 1fr;
    gap: 18px;
    text-align: center;
  }
  .hero__text p {
    margin: 10px auto 16px;
    max-width: 40ch;
  }
  .hero__cta {
    justify-content: center;
  }

  .about {
    grid-template-columns: 1fr;
  }

  .stats {
    grid-template-columns: repeat(3, 1fr);
  }

  .gallery {
    grid-template-columns: repeat(2, 1fr);
  }

  /* contact di HP / tablet */
  .contact__grid {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  /* ❗ HANYA kolom Hubungi yang di-set lebarnya */
  .contact__form {
    max-width: 520px;
    width: 0%;
    margin-inline: auto;
  }
}

/* HP kecil / sedang */
@media (max-width: 640px) {
  .container {
    padding: 0 16px;
  }

  .section {
    padding: 56px 0;
  }

  /* Tabs tetap di dalam layar */
  .tabs {
    max-width: 100%;
    margin: 16px 0 20px;
    padding: 10px;
    overflow-x: auto;
    scrollbar-width: none;
  }
  .tabs::-webkit-scrollbar {
    display: none;
  }
  .tab {
    padding: 10px 16px;
    font-size: .95rem;
  }

  /* Card contact di-center dengan lebar enak dibaca */
  .contact__form,
  .contact__comments{
    max-width: 520px;
    margin-inline:auto;
  }
}

/* HP sangat kecil */
@media (max-width: 560px) {
  .stats {
    grid-template-columns: 1fr 1fr;
  }

  .gallery {
    grid-template-columns: 1fr;
  }

  .software__logo {
    height: 84px;
  }
  .software__logo img {
    max-width: 120px;
    max-height: 60px;
  }

  .footer__inner{
    flex-direction:column;
    gap:8px;
    text-align:center;
  }
}

/* Hero extra kecil & typewriter */
@media (max-width: 520px) {
  .hero__cta {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
  .hero__cta .btn {
    width: 100%;
    justify-content: center;
  }
  .typewriter-hero {
    font-size: clamp(15px, 7vw, 28px);
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid var(--caret);

    /* 🔥 animasi tetap aktif di mobile */
    animation: typing-hero 1.8s steps(var(--chars), end) .3s both,
               blink 1s step-end infinite 2.1s;
  }
}

@media (min-width: 521px) and (max-width: 900px) {
  .typewriter-hero {
    font-size: clamp(26px, 6.2vw, 36px);
  }
}
