/* ===== Helpers ===== */
const REDUCE = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ===== Intro: selalu tampil tiap refresh ===== */
const intro    = document.getElementById("intro");
const enterBtn = document.getElementById("enterBtn");
const skipBtn  = document.getElementById("skipBtn");
const introBar = document.getElementById("introBar");
const site     = document.getElementById("site");

startIntro();

function startIntro() {
  if (!intro || !site) return;

  site.hidden = true;
  document.body.classList.add("noscroll");

  let progress = 0;
  const totalMs = REDUCE ? 400 : 2800;
  const step    = 100 / Math.max(1, totalMs / 20);
  let timer     = null;

  function tick() {
    progress = Math.min(progress + step, 100);
    introBar.style.width = progress + "%";
    introBar.parentElement.setAttribute(
      "aria-valuenow",
      String(Math.round(progress))
    );
    if (progress >= 100) {
      clearInterval(timer);
      finishIntro();
    }
  }

  if (!REDUCE) {
    timer = setInterval(tick, 20);
  } else {
    introBar.style.width = "100%";
  }

  enterBtn?.addEventListener("click", () => {
    clearInterval(timer);
    introBar.style.width = "100%";
    finishIntro();
  });

  skipBtn?.addEventListener("click", () => {
    clearInterval(timer);
    finishIntro();
  });
}

function finishIntro() {
  if (!intro || !site) return;
  site.hidden = false;
  document.body.classList.remove("noscroll");
  intro.classList.add("hidden");
  setTimeout(() => {
    intro.style.display = "none";
  }, 650);
}

/* ===== Mobile Nav ===== */
const navToggle = document.getElementById("navToggle");
const navLinks  = document.getElementById("navLinks");

navToggle?.addEventListener("click", () => {
  navLinks?.classList.toggle("open");
});

/* ===== Smooth Scroll pakai scrollIntoView ===== */
/*  👉 Ini yang bikin semua link #about, #portfolio, #contact, dll
      scroll halus ke section yang benar. */
(function () {
  document.addEventListener("click", (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;

    const href = a.getAttribute("href");
    if (!href || href === "#") return;

    const target = document.querySelector(href);
    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({
      behavior: REDUCE ? "auto" : "smooth",
      block: "start"
    });

    // tutup nav di mobile setelah klik
    navLinks?.classList.remove("open");
  });
})();

/* ===== Reveal (replayable) ===== */
(function () {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el   = entry.target;
        const once = el.hasAttribute("data-reveal-once");

        if (entry.isIntersecting) {
          el.classList.add("reveal-visible");
          if (once) io.unobserve(el);
        } else if (!once) {
          el.classList.remove("reveal-visible");
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  els.forEach((el) => io.observe(el));
})();

/* ===== Typewriter Hero retrigger ===== */
(function () {
  const el = document.querySelector(".typewriter-hero");
  if (!el || REDUCE) return;

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // reset animasi supaya bisa main lagi tiap muncul
          el.style.animation = "none";
          void el.offsetHeight;
          el.style.animation = null;
        }
      });
    },
    { threshold: 0.75 }
  );

  io.observe(el);
})();

/* ===== Tabs ===== */
(function () {
  const tabs   = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".tabpanel");
  if (!tabs.length || !panels.length) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-target");

      tabs.forEach((t) => t.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));

      tab.classList.add("active");
      if (target) {
        document.querySelector(target)?.classList.add("active");
      }
    });
  });
})();

/* ===== Tahun & WhatsApp ===== */
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const waQuick = document.getElementById("waQuick");
if (waQuick) {
  const phone = "6281286159022"; // format internasional tanpa +
  const msg   = "Halo! Saya lihat portfolio Anda dan ingin menghubungi.";
  waQuick.href   = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  waQuick.target = "_blank";
  waQuick.rel    = "noopener";
}

/* ===== Contact (mailto demo + toast) ===== */
const form     = document.getElementById("formContact");
const toast    = document.getElementById("toast");
const toastMsg = document.getElementById("toastMsg");

form?.addEventListener("submit", (e) => {
  e.preventDefault();

  const name    = document.getElementById("name").value.trim();
  const email   = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  const mailto =
    `mailto:pramudyayuda374@gmail.com` +
    `?subject=Kontak%20Portfolio%20-%20${encodeURIComponent(name)}` +
    `&body=${encodeURIComponent(
      message +
        "\n\n--\nDari: " +
        name +
        " <" +
        email +
        ">"
    )}`;

  window.location.href = mailto;
  showToast("Pesan disiapkan di aplikasi email 📧");
  form.reset();
});

function showToast(msg) {
  if (!toast || !toastMsg) return;
  toastMsg.textContent = msg;
  toast.classList.add("show");
  toast.setAttribute("aria-hidden", "false");

  setTimeout(() => {
    toast.classList.remove("show");
    toast.setAttribute("aria-hidden", "true");
  }, 2600);
}

/* ===== Hero CTA: Hubungi Saya (force scroll ke #contact) ===== */
(function(){
  const btn = document.getElementById("heroContactBtn");
  const target = document.getElementById("contact");
  if (!btn || !target) return;

  const header = document.querySelector(".nav");
  const getOffset = () => (header ? header.offsetHeight : 0) + 8;

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const top = window.scrollY + target.getBoundingClientRect().top - getOffset();
    if (REDUCE){
      window.scrollTo(0, top);
    } else {
      window.scrollTo({ top, behavior: "smooth" });
    }
  });
})();

document.getElementById("toTop")?.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: REDUCE ? "auto" : "smooth",
  });
});
