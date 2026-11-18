/* =========================================================
   Content — Asheesh Kumar: projects and experience.
   Everything here is taken from the projects' own READMEs and live demos,
   and from the pull requests on GitHub.
   ========================================================= */

const HOME_TITLE = document.title; // set in index.html (SEO title)
const ME = "Asheesh Kumar";
const EMAIL = "asheeshkumarklg712@gmail.com";
const GH = "https://github.com/Asheesh7298/";

// filter: ai = AI / ML, web = Full-Stack, hack = Hackathons (see the buttons in index.html)
const PROJECTS = [
  {
    slug: "voxlore",
    title: "VoxLore — Multilingual Voice RAG",
    kind: "AI Web App",
    filter: ["ai", "web", "hack"],
    badges: ["Hackathon", "Open Source"],
    tags: ["AI / RAG", "Hindi · Marathi · English"],
    summary:
      "A voice question-answering system: speak or type a question in Hindi, Marathi or English and get an answer extracted from retrieved passages (no text generation), searched across 13,020,220 passage vectors held in GPU memory on an NVIDIA A100. Built for the Hacker House Goa 2026 shortlisting.",
    highlights: [
      "13.02M MS MARCO passage vectors (Hindi 4.60M, Marathi 4.27M, English 4.16M), searched with an exact FP16 scan in CuPy",
      "Server latency P50 69 ms and P90 92 ms over 627 evaluation questions",
      "Voice recorded in the browser, transcribed by Sarvam AI, embedded with multilingual-e5-base on ONNX Runtime",
      "Hybrid rerank: dense score + BM25 + word and trigram overlap, with duplicate passages removed",
      "Three guardrails: unsafe input, current-events questions, and a retrieval-confidence gate that says when it isn't sure",
      "No PyTorch and no FAISS: FastAPI on Modal, scaling to zero between sessions",
    ],
    role: "Design & Development",
    stack: "React, TypeScript, FastAPI, Modal (A100), ONNX Runtime, CuPy",
    links: [
      { label: "View Code", href: GH + "Rag-voice" },
      { label: "Live Demo", href: "https://voxlore-asheesh.vercel.app/", primary: true },
    ],
    preview: {
      slides: [
        {
          xl: "assets/voxlore-xl-01.webp",
          sm: "assets/voxlore-sm-01.webp",
          alt: "VoxLore: verified example questions in English, Hindi and Marathi, with a voice and text input",
        },
        {
          xl: "assets/voxlore-xl-02.webp",
          sm: "assets/voxlore-sm-02.webp",
          alt: "VoxLore answering “what county is columbus city in” with Franklin County in 43.9 ms, with 8 context sources",
        },
        {
          xl: "assets/voxlore-xl-03.webp",
          sm: "assets/voxlore-sm-03.webp",
          alt: "VoxLore architecture page: 13.02M passage vectors, 69 ms server latency P50, 34% recall@5",
        },
      ],
    },
    accent: "#7c6cf0",
  },
  {
    slug: "tigergraph-fraud-agent",
    title: "Agentic Fraud Investigation on TigerGraph",
    kind: "AI Agent",
    filter: ["ai", "hack"],
    badges: ["Hackathon", "Open Source"],
    tags: ["AI Agent", "TigerGraph", "Hacker House Goa 2026"],
    summary:
      "An AI agent that investigates card-fraud alerts on a TigerGraph knowledge graph: it decides what kind of fraud each alert is (if any), how far it reaches and what the bank should do next, including when to gather more evidence before deciding. Built for the TigerGraph × Hacker House Goa 2026 challenge on the IEEE-CIS dataset.",
    highlights: [
      "The dataset has no fraud label: verdicts come from evidence, with 5,565 closed investigations as the only ground truth",
      "An investigation state machine: trigger → gather → retrieve → assess → request evidence → re-assess → decide → explain",
      "The LLM reasons and writes; code decides exposure, report filing, approval routes and the action set (rules R1–R10)",
      "A ring_detect GSQL query finds a 28-card fraud ring without being told one exists",
      "Every graph read goes through a TigerGraph MCP server (13 tools), with GraphRAG search over policy and case history",
      "An analyst dashboard over all 20 cases, with before/after views of the evidence the agent asked for",
    ],
    role: "Design & Development",
    stack: "Python, TigerGraph (GSQL), MCP, Gemini, Next.js",
    links: [
      { label: "View Code", href: GH + "tigergraph-fraud-agent" },
      { label: "Live Demo", href: "https://tigergraph-fraud-agent.vercel.app/", primary: true },
    ],
    preview: {
      slides: [
        {
          xl: "assets/fraud-xl-01.webp",
          sm: "assets/fraud-sm-01.webp",
          alt: "TigerGraph fraud investigation landing page: fraud doesn't happen in isolation, with a graph of a transaction, card, customer and prior case",
        },
        {
          xl: "assets/fraud-xl-02.webp",
          sm: "assets/fraud-sm-02.webp",
          alt: "Analyst dashboard: 20 cases from the case pack ready to investigate",
        },
        {
          xl: "assets/fraud-xl-03.webp",
          sm: "assets/fraud-sm-03.webp",
          alt: "Case pack: the 20 exam cases with triggers, model scores, verdicts and filters",
        },
        {
          xl: "assets/fraud-xl-04.webp",
          sm: "assets/fraud-sm-04.webp",
          alt: "Case HHG-001: a bank model alert at risk score 0.61 with the investigation stages",
        },
      ],
    },
    accent: "#8b5cf6",
  },
  {
    slug: "churn-prediction",
    title: "Customer Churn Prediction Dashboard",
    kind: "ML Web App",
    filter: ["ai", "web"],
    badges: ["Personal Project", "Open Source"],
    tags: ["Machine Learning", "FastAPI", "React"],
    summary:
      "An end-to-end machine-learning application that predicts telecom customer churn and turns each prediction into an explanation and a business decision: which customers to target, and what it's worth. Trained on the IBM Telco dataset (7,043 real customers), served by FastAPI + scikit-learn and shown in a React dashboard.",
    highlights: [
      "Three models compared on a held-out test set; Logistic Regression selected at 0.842 ROC-AUC and 0.783 recall",
      "SHAP explanations for every prediction: why this customer is at risk",
      "Retention simulator: counterfactual what-ifs ranked by how much each action lowers churn",
      "Business impact: a threshold slider shows customers flagged, revenue saved and campaign ROI",
      "Batch scoring from CSV, plus tenure cohorts and risk segments from the real labels",
      "A labelled demo mode while the API wakes up, then live data",
    ],
    role: "Full-stack: model, API & dashboard",
    stack: "Python, scikit-learn, SHAP, FastAPI, React (Vite), TypeScript, Docker",
    links: [
      { label: "View Code", href: GH + "customer-churn-detection-project-final" },
      { label: "Live Demo", href: "https://company-churn-detection-project-fin.vercel.app/", primary: true },
    ],
    preview: {
      slides: [
        {
          xl: "assets/churn-xl-01.webp",
          sm: "assets/churn-sm-01.webp",
          alt: "Churn Analytics overview: 84.2% model AUC, high-risk accounts and a retention watchlist",
        },
        {
          xl: "assets/churn-xl-02.webp",
          sm: "assets/churn-sm-02.webp",
          alt: "Business impact: decision threshold, retention offer cost, net benefit and ROI",
        },
        {
          xl: "assets/churn-xl-03.webp",
          sm: "assets/churn-sm-03.webp",
          alt: "Model report: held-out ROC-AUC, accuracy, precision, recall, confusion matrix and ROC curve",
        },
        {
          xl: "assets/churn-xl-04.webp",
          sm: "assets/churn-sm-04.webp",
          alt: "Customer profile: adjust a customer's attributes and see a 72% high-risk churn prediction",
        },
      ],
    },
    accent: "#4f46e5",
  },
  {
    slug: "crop-recommendation",
    title: "AI Crop Recommendation with IoT",
    kind: "ML + IoT",
    filter: ["ai"],
    badges: ["Team Project"],
    tags: ["Machine Learning", "IoT", "FastAPI"],
    summary:
      "A soil-to-harvest decision engine: soil-fertility assessment, crop recommendation with sowing-time guidance, a real-world cultivation cross-check, profitability and fertilizer optimization, and a SHAP explanation for every call. IoT-ready by design: an ESP32 field-sensor node posts to the same endpoint the web app uses.",
    highlights: [
      "Recommends the best of 22 crops; Random Forest selected at 99.59% ± 0.38% 10-fold CV accuracy on the benchmark dataset",
      "Seven models compared, including ELM from the reference papers, XGBoost and SVM",
      "Grounded in Government of India data: district yields (APY), MSP 2024-25 prices and ICAR fertilizer doses",
      "Kharif / Rabi / Zaid-aware sowing-time advice, plus irrigation and crop-rotation suggestions",
      "ESP32 firmware, a device simulator and a live-sensor dashboard mode",
    ],
    role: "Team project",
    stack: "Python, FastAPI, scikit-learn, XGBoost, SHAP, ESP32 (C++)",
    links: [{ label: "View Code", href: GH + "AI-crop-Recommendation", primary: true }],
    mock: "dash",
    accent: "#16a34a",
  },
  {
    slug: "operations-under-pressure",
    title: "Operations Under Pressure",
    kind: "Full-Stack Web App",
    filter: ["web", "hack"],
    badges: ["Challenge", "Open Source"],
    tags: ["Web App", "Node.js", "PostgreSQL"],
    summary:
      "An internal web app for creating, assigning, tracking and resolving operational work items across teams: incidents, customer issues, payments, compliance and tasks. Built for the Newtonite Software Engineering Challenge, with a backend that stays correct under concurrency.",
    highlights: [
      "A server-enforced workflow with a Lead-only approval step and per-team roles (Admin, Lead, Member, Viewer)",
      "Stays correct when two people claim the same item, edit stale data, double-click or retry a request",
      "An append-only activity log of every change",
      "A background worker for notification jobs",
      "One command to run: docker compose up seeds 4 teams, 10 users and 5,000 work items",
      "Raw SQL on PostgreSQL 16 with zod validation, tested with Vitest and Supertest",
    ],
    role: "Design & Development",
    stack: "Node.js 22, TypeScript, Express, PostgreSQL 16, zod, Vitest, Docker",
    links: [{ label: "View Code", href: GH + "newtonite-ops", primary: true }],
    mock: "term",
    term: `<span class="g">$</span> docker compose up --build
<span class="d">─────────────────────────────</span>
  migrate   applied 001_init.sql
  seed      4 teams · 10 users
  seed      5,000 work items
  worker    notifications ready
  <span class="d">web</span>       localhost:3000`,
    accent: "#0ea5e9",
  },
  {
    slug: "forge2-kanban",
    title: "Forge 2 Kanban — Built by Two AI Agents",
    kind: "Web App",
    filter: ["web", "ai", "hack"],
    badges: ["Challenge", "Open Source"],
    tags: ["Web App", "Laravel", "AI Agents"],
    summary:
      "A Trello-style Kanban board, with a Laravel API on SQLite and a React (Vite) frontend, built for the Forge 2 qualifier by a two-agent system orchestrated through Slack: Hermes plans and remembers, OpenClaw writes the code.",
    highlights: [
      "Hermes (the brain) on Gemini 2.5 Flash: planning, memory, skills and cron",
      "OpenClaw (the hands) on Groq gpt-oss-120b, with a local Ollama qwen2.5-coder fallback",
      "Agents coordinated through Slack",
      "Laravel REST API with SQLite migrations and a React + Vite frontend",
    ],
    role: "Design & Development",
    stack: "Laravel, PHP, SQLite, React, Vite, Slack, Gemini, Groq",
    links: [{ label: "View Code", href: GH + "forge2-qualifier", primary: true }],
    mock: "dash",
    accent: "#f97316",
  },
];

const EXPERIENCE = [
  {
    company: "Meshery",
    role: "Open-source contributor",
    where: "CNCF project · remote",
    when: "Nov 2026 — Now",
    metric: ["22", "merged pull requests"],
    points: [
      "mesheryctl: token handling (reject unknown tokens, resolve token locations the way login does, add missing entries to the --config file) and HTTP behaviour (report method-changing redirects, trim trailing slashes from the context endpoint).",
      "Server: delete a MeshSync resource's child rows with it, clone designs and filters as fresh records, import raw .wasm filters from a URL, and accept pagesize=all for organizations on the Local provider.",
      "UI: list every environment in the pickers, show real dates in the Credentials table, read camelCase owner fields in Workspaces, and refresh cached views after visibility, notes and delete changes.",
      "Tests and docs: reset system flags after TestResetCmd so CLI tests don't leak state, and correct stale database and extension-point docs.",
    ],
    chips: ["Go", "React", "CLI", "REST APIs", "Testing", "Docs"],
  },
  {
    company: "PostHog",
    role: "Open-source contributor",
    where: "Remote",
    when: "Jul 2026 — Sep 2026",
    metric: ["3", "merged pull requests"],
    points: [
      "Feature flags: match $feature_interaction events in the enriched analytics query.",
      "Celery: move verify_and_fix_team_metadata_cache_task to the FEATURE_FLAGS_LONG_RUNNING queue.",
      "Search: add Inbox to the list of searchable products.",
      "Also proposed fixes for web-analytics viewport conversions, two-breakdown bar charts and data-warehouse view sources.",
    ],
    chips: ["Python", "Django", "Celery", "TypeScript", "React"],
  },
  {
    company: "e2e",
    role: "Open-source contributor",
    where: "Remote",
    when: "Nov 2026 — Now",
    metric: ["2", "merged, 4 in review"],
    points: [
      "Added a toHaveRole locator matcher to expect.",
      "Fixed the web engine's accessibility tree so the page behind a modal dialog is left out.",
      "In review: Playwright URL globs in waitForURL, route and waitForResponse; case-insensitive ARIA roles and states; test.skip() rules in hooks; keeping the previous HTML report when a run stops early.",
      "Maintain e2e-repros: a minimal, standalone reproduction for each bug I report.",
    ],
    chips: ["TypeScript", "Testing", "ARIA", "Accessibility"],
  },
  {
    company: "Galgotias College of Engineering and Technology",
    role: "B.Tech, Information Technology",
    where: "Greater Noida, IN",
    when: "2023 — 2027",
    metric: ["7th", "semester, final year"],
    points: [
      "Final year (7th semester) of a B.Tech in Information Technology.",
      "Certificates: Supervised Machine Learning (DeepLearning.AI and Stanford, Coursera) and MLOps with Vertex AI: Model Evaluation (Google Cloud).",
      "Before GCET: Intermediate (PCM) and High School at City Public Inter College, Roorkee.",
    ],
    chips: ["C++", "Python", "JavaScript", "DSA", "OOP", "MySQL"],
  },
];

/* =========================================================
   Helpers
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const esc = (s) =>
  s.replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c],
  );

// Real preview images: xl for desktop/tablet, sm for phones (≤640px).
// One image renders statically; several become a slideshow (see initSlideshows).
// Intrinsic widths of images that have smaller -640/-1200 variants (made at build time),
// so the browser can download the size it actually displays.
const IMG_W = {"voxlore-xl-01.webp": 2256, "voxlore-xl-02.webp": 2256, "voxlore-xl-03.webp": 2256, "fraud-xl-01.webp": 2256, "fraud-xl-02.webp": 2256, "fraud-xl-03.webp": 2256, "fraud-xl-04.webp": 2256, "churn-xl-01.webp": 2256, "churn-xl-02.webp": 2256, "churn-xl-03.webp": 2256, "churn-xl-04.webp": 2256, "portrait.webp": 1000};
function srcset(path) {
  const w = IMG_W[path.split("/").pop()];
  if (!w) return "";
  const sizes = [640, 1200].filter((v) => w > v * 1.15).map((v) => `${path.replace(/\.webp$/, `-${v}.webp`)} ${v}w`);
  return [...sizes, `${path} ${w}w`].join(", ");
}
const CARD_SIZES = "(max-width: 900px) 92vw, 520px";
const DETAIL_SIZES = "(max-width: 1240px) 92vw, 1128px";

function previewHTML(p, eager = false) {
  const slides = p.preview.slides || [p.preview];
  const multi = slides.length > 1;
  const pics = slides
    .map(
      (sl, i) => `<picture class="slide${i === 0 ? " is-active" : ""}">
      <source media="(max-width: 640px)" srcset="${sl.sm}" />
      <img src="${sl.xl}" srcset="${srcset(sl.xl)}" sizes="${eager ? DETAIL_SIZES : CARD_SIZES}" alt="${esc(sl.alt)}" ${i === 0 && eager ? 'fetchpriority="high"' : 'loading="lazy"'} />
    </picture>`,
    )
    .join("");
  const bars = multi
    ? `<span class="slide-bars">${slides.map((_, i) => `<span class="bar${i === 0 ? " on" : ""}" data-i="${i}"${eager ? ` role="button" tabindex="0" aria-label="Show screen ${i + 1} of ${slides.length}"` : ""}><i></i></span>`).join("")}</span>`
    : "";
  return `<div class="mock shots${multi ? " slideshow" : ""}">${pics}${bars}</div>`;
}

function mockHTML(p) {
  const style = `style="--accent:${p.accent};--scr:${p.screen || "#fafafa"}"`;
  if (p.mock === "dash") {
    const bars = [40, 62, 48, 80, 56, 92, 70, 85, 60, 98, 74, 88]
      .map((h) => `<i style="height:${h}%"></i>`)
      .join("");
    return `<div class="mock m-dark" ${style}><div class="dash"><div class="side"><i></i><i></i><i></i><i></i><i></i></div><div class="main"><div class="kpis"><b></b><b></b><b></b></div><div class="chart">${bars}</div></div></div></div>`;
  }
  if (p.mock === "term") {
    return `<div class="mock m-dark" ${style}><div class="term"><div class="bar"><i></i><i></i><i></i></div><pre>${p.term}
<span class="g">$</span> <span class="cursor"></span></pre></div></div>`;
  }
  if (p.mock === "alarm") {
    const scr = (inner) =>
      `<div class="phone"><div class="scr">${inner}</div></div>`;
    return `<div class="mock m-dark" ${style}><div class="phones">
      ${scr(`<div class="b w60" style="background:#333"></div><div class="ring"></div><div class="b ac"></div>`)}
      ${scr(`<div class="clock">06:30</div><div class="b w80" style="background:#2a2a2a"></div><div class="b w60" style="background:#2a2a2a"></div><div class="b ac"></div>`)}
      ${scr(`<div class="b w60" style="background:#333"></div><div class="b big"></div><div class="b" style="background:#2a2a2a"></div><div class="b ac"></div>`)}
    </div></div>`;
  }
  const scr = (inner) =>
    `<div class="phone"><div class="scr">${inner}</div></div>`;
  return `<div class="mock m-dark" ${style}><div class="phones">
    ${scr(`<div class="b w60"></div><div class="b big"></div><div class="b"></div><div class="b w80"></div><div class="b ac"></div>`)}
    ${scr(`<div class="b w80"></div><div class="b"></div><div class="b big"></div><div class="b w60"></div><div class="b ac"></div>`)}
    ${scr(`<div class="b w60"></div><div class="b"></div><div class="b w80"></div><div class="b big"></div><div class="b ac"></div>`)}
  </div></div>`;
}

function cardHTML(p) {
  return `<a class="card reveal" href="#/work/${p.slug}" data-filter="${p.filter.join(" ")}">
    <div class="thumb">${p.preview ? previewHTML(p) : mockHTML(p)}<span class="badges">${p.badges.map((b) => `<span class="badge${b === "Real Project" ? " real" : ""}">${esc(b)}</span>`).join("")}</span><span class="open">↗</span></div>
    <h3>${esc(p.title)}</h3>
    <div class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
  </a>`;
}

/* =========================================================
   Render
   ========================================================= */
$("#grid").innerHTML = PROJECTS.map(cardHTML).join("");

$("#xp").innerHTML = EXPERIENCE.map(
  (x, i) => `<li class="xp-row reveal${i === 0 ? " open" : ""}" data-i="${i}">
    <div class="xp-head">
      <span class="xp-co">
        <h3>${esc(x.company)}</h3>${
          x.linkedin
            ? `<a class="xp-li" href="${x.linkedin}" target="_blank" rel="noopener" aria-label="${esc(x.company)} on LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z"/></svg></a>`
            : ""
        }
        <span class="role">${esc(x.role)}</span>
      </span>
      <span class="when">${esc(x.when)}<span class="where">${esc(x.where)}</span></span>
      <!-- Stretched over the whole row (see .xp-toggle::before), so clicking anywhere expands it -->
      <button class="xp-toggle" aria-expanded="${i === 0}" aria-label="Show what I did at ${esc(x.company)}"><span class="ico">+</span></button>
    </div>
    <div class="xp-detail"><div>
      <ul>${x.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      <div class="chips">${x.chips.map((c) => `<span>${esc(c)}</span>`).join("")}</div>
    </div></div>
  </li>`,
).join("");

$("#year").textContent = new Date().getFullYear();

/* =========================================================
   Interactions
   ========================================================= */
// Nav background on scroll
const nav = $("#nav");
const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 40);
addEventListener("scroll", onScroll, { passive: true });
requestAnimationFrame(onScroll); // after layout, so reading scrollY doesn't force a synchronous reflow

// Theme toggle — circular reveal from the button via the View Transitions API
const root = document.documentElement;
const themeBtn = $("#themeToggle");
const themeMeta = document.querySelector('meta[name="theme-color"]');
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)");

/* Slideshows: each progress bar's CSS fill animation is the timer — when it ends, the next
   slide comes in. Pausing the animation (off-screen) therefore pauses the slideshow too. */
const slideIO = new IntersectionObserver(
  (entries) =>
    entries.forEach((en) =>
      en.target.classList.toggle("paused", !en.isIntersecting),
    ),
  { threshold: 0.25 },
);
function showSlide(ss, n) {
  const slides = ss.querySelectorAll(".slide");
  const bars = ss.querySelectorAll(".bar");
  const cur = +ss.dataset.i || 0;
  if (n === cur) return;
  slides.forEach((el, i) => {
    el.classList.toggle("is-active", i === n);
    el.classList.toggle("is-leaving", i === cur);
  });
  bars.forEach((b, i) => {
    b.classList.remove("on");
    b.classList.toggle("done", i < n);
  });
  void bars[n].offsetWidth; // restart the fill animation
  bars[n].classList.add("on");
  ss.dataset.i = n;
}
function initSlideshows(scope) {
  scope.querySelectorAll(".slideshow:not([data-ready])").forEach((ss) => {
    ss.dataset.ready = "";
    ss.dataset.i = 0;
    const count = ss.querySelectorAll(".slide").length;
    if (reduceMotion.matches) ss.classList.add("manual"); // no autoplay; bars still clickable on the project page
    ss.addEventListener("animationend", (e) => {
      if (!e.target.matches(".bar.on > i") || ss.classList.contains("manual"))
        return;
      showSlide(ss, ((+ss.dataset.i || 0) + 1) % count);
    });
    ss.querySelectorAll(".bar[role=button]").forEach((b) => {
      const pick = () => showSlide(ss, +b.dataset.i);
      b.addEventListener("click", pick);
      b.addEventListener(
        "keydown",
        (e) =>
          (e.key === "Enter" || e.key === " ") && (e.preventDefault(), pick()),
      );
    });
    slideIO.observe(ss);
  });
}
initSlideshows(document);

function setTheme(theme) {
  root.dataset.theme = theme;
  const dark = theme === "dark";
  themeBtn.setAttribute("aria-pressed", dark);
  themeBtn.setAttribute(
    "aria-label",
    dark ? "Switch to light theme" : "Switch to dark theme",
  );
  themeMeta.setAttribute("content", dark ? "#0b0b0c" : "#ffffff");
}
let currentTheme = root.dataset.theme === "dark" ? "dark" : "light";
setTheme(currentTheme);

themeBtn.addEventListener("click", () => {
  // Track the target theme immediately so rapid clicks don't read a stale value mid-transition
  const next = (currentTheme = currentTheme === "dark" ? "light" : "dark");
  try {
    localStorage.setItem("theme", next);
  } catch {}

  if (reduceMotion.matches) return setTheme(next);

  if (!document.startViewTransition) {
    // Fallback: crossfade colours
    root.classList.add("theme-fade");
    setTheme(next);
    setTimeout(() => root.classList.remove("theme-fade"), 550);
    return;
  }

  const r = themeBtn.getBoundingClientRect();
  const x = r.left + r.width / 2;
  const y = r.top + r.height / 2;
  const radius = Math.hypot(
    Math.max(x, innerWidth - x),
    Math.max(y, innerHeight - y),
  );

  const vt = document.startViewTransition(() => setTheme(next));
  vt.ready.then(() => {
    root.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${radius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 750,
        easing: "cubic-bezier(.22, 1, .36, 1)",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  });
});

// Follow OS theme changes until the visitor picks one explicitly
matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  let saved = null;
  try {
    saved = localStorage.getItem("theme");
  } catch {}
  if (!saved) setTheme((currentTheme = e.matches ? "dark" : "light"));
});

// Inspector cursor: crosshair + DevTools-style brackets around the hovered interactive element
const insp = $(".insp");
if (matchMedia("(hover: hover) and (pointer: fine)").matches) {
  const cross = $(".insp-cross", insp),
    box = $(".insp-box", insp),
    label = $(".insp-label", insp);
  const TARGETS = "a, button, [role=button], .acc-head, label, select";
  // Innermost wins: a link inside a Beyond Code card (incl. the Publication card's "View" label),
  // a Community card's post links, then the Community card itself (its title link is stretched over it),
  // then any normal interactive element, then a Beyond Code card itself.
  // The "Open to New Opportunities" status pill and the e-book bar opt out entirely.
  const resolve = (el) =>
    el?.closest?.(".pill.status, .promo") ? null :
    el?.closest?.(".b-card .link-arrow, .ebook-cta, .xp-li, .ev-posts a") ||
    el?.closest?.(".xp-head, .ev") ||
    el?.closest?.(TARGETS) ||
    el?.closest?.(".b-card") ||
    null;
  const PAD = 6;
  let target = null,
    raf = 0,
    px = -1,
    py = -1,
    inside = false;

  // What is really under the pointer right now? (used after scroll, view changes, element moves)
  const hitTest = () =>
    inside && px >= 0 ? resolve(document.elementFromPoint(px, py)) : null;
  const setTarget = (el) => {
    if (el === target) return;
    target = el;
    insp.classList.toggle("has-target", !!el);
    if (el && !raf) raf = requestAnimationFrame(place);
  };

  // Keep the brackets glued to the element while it moves (hover lift, scroll, resize),
  // and drop/retarget them the moment the pointer is no longer over it.
  function place() {
    raf = 0;
    if (!target) return;
    let r = target.isConnected ? target.getBoundingClientRect() : null;
    if (!r || px < r.left || px > r.right || py < r.top || py > r.bottom) {
      const next = hitTest();
      setTarget(next);
      if (!next) return;
      r = next.getBoundingClientRect();
    }
    box.style.left = r.left - PAD + "px";
    box.style.top = r.top - PAD + "px";
    box.style.width = r.width + PAD * 2 + "px";
    box.style.height = r.height + PAD * 2 + "px";
    label.textContent = `${Math.round(r.width)} × ${Math.round(r.height)}`;
    const below = r.bottom + PAD + 6 + 18 < innerHeight;
    label.style.left =
      Math.max(
        6,
        Math.min(
          r.right + PAD - label.offsetWidth,
          innerWidth - label.offsetWidth - 6,
        ),
      ) + "px";
    label.style.top =
      (below ? r.bottom + PAD + 6 : r.top - PAD - 6 - label.offsetHeight) +
      "px";
    raf = requestAnimationFrame(place);
  }

  addEventListener(
    "pointermove",
    (e) => {
      if (e.pointerType !== "mouse") return;
      root.classList.add("insp-on"); // hide the native cursor only once a real mouse moves
      px = e.clientX;
      py = e.clientY;
      inside = true;
      cross.style.opacity = 1;
      // use `translate`, not `transform`: the hover `scale` would otherwise scale this offset too
      cross.style.translate = `${px}px ${py}px`;
    },
    { passive: true },
  );
  addEventListener("pointerover", (e) => {
    if (e.pointerType === "mouse") setTarget(resolve(e.target));
  });
  addEventListener("scroll", () => setTarget(hitTest()), { passive: true });
  addEventListener("hashchange", () =>
    requestAnimationFrame(() => setTarget(hitTest())),
  );
  document.documentElement.addEventListener("pointerleave", () => {
    inside = false;
    setTarget(null);
    cross.style.opacity = 0;
  });
  addEventListener("blur", () => {
    inside = false;
    setTarget(null);
    cross.style.opacity = 0;
  });
  addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return;
    insp.classList.add("is-down");
    const ring = document.createElement("span");
    ring.className = "insp-ping";
    document.body.appendChild(ring);
    const at = (s) => `translate(${e.clientX}px, ${e.clientY}px) scale(${s})`;
    ring.animate(
      [
        { transform: at(0.15), opacity: 1 },
        { transform: at(1), opacity: 0 },
      ],
      {
        duration: reduceMotion.matches ? 200 : 520,
        easing: "cubic-bezier(.2,.7,.3,1)",
      },
    ).onfinish = () => ring.remove();
  });
  addEventListener("pointerup", () => insp.classList.remove("is-down"));
  // A real touch on a hybrid device brings the native cursor back
  addEventListener(
    "touchstart",
    () => {
      root.classList.remove("insp-on");
      setTarget(null);
    },
    { passive: true },
  );
}

// Hackathons card: the whole card opens its repo; the links inside stay their own links
document.querySelectorAll(".b-card[data-href]").forEach((card) =>
  card.addEventListener("click", (e) => {
    if (e.target.closest("a") || getSelection().toString()) return; // inner links / text selection win
    window.open(card.dataset.href, "_blank", "noopener");
  }),
);

// Work filters
document.querySelectorAll(".filters button").forEach((btn) =>
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".filters button")
      .forEach((b) => { b.classList.toggle("active", b === btn); b.setAttribute("aria-pressed", b === btn); });
    const f = btn.dataset.filter;
    document.querySelectorAll("#grid .card").forEach((c) => {
      c.classList.toggle(
        "hide",
        f !== "all" && !c.dataset.filter.split(" ").includes(f),
      );
    });
  }),
);

// Experience rows: click to expand, hover shows a floating metric tile
const preview = $("#xpPreview");
document.querySelectorAll(".xp-row").forEach((row) => {
  const btn = $(".xp-toggle", row);
  const head = $(".xp-head", row);
  const x = EXPERIENCE[row.dataset.i];
  btn.addEventListener("click", () => {
    const open = row.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
  head.addEventListener("mouseenter", () => {
    preview.innerHTML = `<div class="tile"><b>${x.metric[0]}</b><small>${esc(x.metric[1])}</small></div>`;
    preview.classList.add("show");
  });
  head.addEventListener("mouseleave", () => preview.classList.remove("show"));
  // Pointing at the LinkedIn icon: hide the metric tile so it doesn't cover the link
  const li = $(".xp-li", row);
  li?.addEventListener("mouseenter", () => preview.classList.remove("show"));
  li?.addEventListener("mouseleave", () => head.matches(":hover") && preview.classList.add("show"));
});
addEventListener(
  "mousemove",
  (e) => {
    preview.style.left = e.clientX + 140 + "px";
    preview.style.top = e.clientY + "px";
  },
  { passive: true },
);

// Reveal on scroll + count-up stats. Elements reveal once they are 15% clear of the bottom edge, so the
// animation plays where it can be seen; siblings that arrive together are staggered.
function countUp(el) {
  const [, end, rest] = el.textContent.match(/^(\d+)(.*)$/) || [];
  if (!end) return;
  const t0 = performance.now(), dur = 1200;
  const tick = (t) => {
    const p = Math.min((t - t0) / dur, 1);
    el.textContent = Math.round(end * (1 - (1 - p) ** 3)) + rest;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}
const io = new IntersectionObserver(
  (entries) =>
    entries
      .filter((en) => en.isIntersecting)
      .forEach(({ target: el }, i) => {
        io.unobserve(el);
        const delay = Math.min(i, 6) * 90;
        el.style.transitionDelay = `${delay}ms`;
        el.classList.add("in");
        if (el.matches(".stats")) el.querySelectorAll("strong").forEach(countUp);
        // drop the stagger once it has played, so hover transitions respond straight away
        setTimeout(() => (el.style.transitionDelay = ""), delay + 1200);
      }),
  { rootMargin: "0px 0px -15% 0px" },
);
const observeReveals = () =>
  document.querySelectorAll(".reveal:not(.in)").forEach((el) =>
    reduceMotion.matches ? el.classList.add("in") : io.observe(el),
  );
observeReveals();

// Ghost title parallax
const ghosts = [...document.querySelectorAll("[data-parallax]")];
let ticking = false;
addEventListener(
  "scroll",
  () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ghosts.forEach((g) => {
        const r = g.parentElement.getBoundingClientRect();
        g.style.transform = `translateX(${(r.top - innerHeight / 2) * -0.15}px)`;
      });
      ticking = false;
    });
  },
  { passive: true },
);

// Copy email
const toast = $("#toast");
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add("show");
  clearTimeout(showToast.t);
  showToast.t = setTimeout(() => toast.classList.remove("show"), 1800);
}
$("#copyEmail").addEventListener("click", async (e) => {
  const email = e.currentTarget.dataset.email;
  try {
    await navigator.clipboard.writeText(email);
    showToast("Email copied ✓");
  } catch {
    showToast(email);
  }
});

/* =========================================================
   Open source: my pull requests to other people's repos, live from the GitHub API.
   Unauthenticated, so each visitor gets 60 requests an hour (search: 10 a minute);
   responses are cached in sessionStorage for 15 minutes.
   ========================================================= */
const GH_USER = "Asheesh7298";
const OSS_HIDE = []; // repos to leave out of the list, as "owner/name"
const OSS_ON_HOME = 5;
const OSS_QUERY = `author:${GH_USER} type:pr -user:${GH_USER} ${OSS_HIDE.map((r) => `-repo:${r}`).join(" ")}`;
const GH_SEARCH = `https://github.com/search?q=${encodeURIComponent(OSS_QUERY)}&type=pullrequests&s=created&o=desc`;

async function gh(path, accept = "application/vnd.github+json") {
  const key = `gh:${accept}:${path}`;
  try {
    const hit = JSON.parse(sessionStorage.getItem(key));
    if (hit && Date.now() - hit.t < 15 * 60e3) return hit.v;
  } catch {}
  const res = await fetch(`https://api.github.com${path}`, { headers: { Accept: accept } });
  if (!res.ok)
    throw new Error(res.status === 403 || res.status === 429 ? "GitHub's rate limit was reached" : `GitHub returned ${res.status}`);
  const v = await res.json();
  try {
    sessionStorage.setItem(key, JSON.stringify({ t: Date.now(), v }));
  } catch {}
  return v;
}

// Works for both search results (pull_request.merged_at) and full pull requests (merged_at)
const prState = (x) =>
  (x.pull_request?.merged_at ?? x.merged_at) ? "merged" : x.state === "closed" ? "closed" : x.draft ? "draft" : "open";
const STATE_LABEL = { merged: "Merged", open: "Open", draft: "Draft", closed: "Closed" };
const MERGE_ICON = `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="6" cy="5" r="2.2"/><circle cx="6" cy="19" r="2.2"/><circle cx="18" cy="12" r="2.2"/><path d="M6 7.2v9.6M6 7.4c0 3 3 4.6 9.8 4.6"/></svg>`;
const stateHTML = (s) =>
  `<span class="pr-state is-${s}">${s === "merged" ? MERGE_ICON : "<i></i>"}${STATE_LABEL[s]}</span>`;
const fmtDate = (iso) => new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
const inline = (s) => esc(s).replace(/`([^`]+)`/g, "<code>$1</code>"); // PR titles use `code` spans

// Tells analytics.js how each GitHub load went ({ type: "loaded" | "error", view, ... }).
// analytics.js starts once the page is idle, so events are also kept in window.ossEvents for it to catch up on.
window.ossEvents = [];
function ossEvent(type, detail) {
  const ev = { type, ...detail };
  window.ossEvents.push(ev);
  dispatchEvent(new CustomEvent("oss", { detail: ev }));
}

let prsPromise = null;
function loadPRs() {
  prsPromise ||= gh(`/search/issues?q=${encodeURIComponent(OSS_QUERY)}&sort=created&order=desc&per_page=100`)
    .then((d) =>
      d.items
        .map((i) => {
          const [owner, name] = i.repository_url.split("/repos/")[1].split("/");
          return { owner, name, repo: `${owner}/${name}`, number: i.number, title: i.title, state: prState(i), created: i.created_at };
        })
        .sort((a, b) => b.created.localeCompare(a.created)), // latest first
    )
    .then((prs) => {
      $("#ossCount").textContent = `[${String(prs.length).padStart(2, "0")}]`;
      // Stats strip: merged PRs and repos contributed to, from the same response (only ever counts up)
      const bump = (key, n) =>
        document.querySelectorAll(`[data-live="${key}"]`).forEach((el) => {
          if (n > parseInt(el.textContent, 10)) el.textContent = n;
        });
      bump("merged", prs.filter((p) => p.state === "merged").length);
      bump("repos", new Set(prs.map((p) => p.repo)).size);
      return prs;
    })
    .catch((err) => {
      prsPromise = null; // let the next view try again
      throw err;
    });
  return prsPromise;
}

// i is the row's index in its list (map's second argument), kept for analytics
const prRowHTML = (p, i) => `<li class="pr-row reveal"><a href="#/open-source/${p.repo}/${p.number}" data-pos="${i + 1}" data-state="${p.state}">
    <span class="pr-repo" title="${esc(p.repo)}">${esc(p.owner)}/<b>${esc(p.name)}</b></span>
    <span class="pr-title">${inline(p.title)} <span class="pr-num">#${p.number}</span></span>
    ${stateHTML(p.state)}
    <time datetime="${p.created}">${fmtDate(p.created)}</time>
    <span class="pr-go" aria-hidden="true">→</span>
  </a></li>`;
const skeletonRows = (n) =>
  `<li class="pr-skel" aria-hidden="true"><span></span><span></span><span></span></li>`.repeat(n);
const ossError = (err, href = GH_SEARCH) =>
  `<li class="pr-empty">Couldn't load this from GitHub right now (${esc(err.message)}).<a class="link-arrow" href="${href}" target="_blank" rel="noopener">See it on GitHub ↗</a></li>`;

// Home section: the latest few. GitHub is only called once the section is near, so visitors
// who never scroll that far don't use up their rate limit.
const ossList = $("#ossList");
function renderOssHome() {
  ossList.innerHTML = skeletonRows(3);
  loadPRs().then(
    (prs) => {
      ossList.innerHTML = prs.length
        ? prs.slice(0, OSS_ON_HOME).map(prRowHTML).join("")
        : `<li class="pr-empty">No pull requests yet.</li>`;
      observeReveals();
      ossEvent("loaded", { view: "home", count: prs.length });
    },
    (err) => {
      ossList.innerHTML = ossError(err);
      ossEvent("error", { view: "home", reason: err.message });
    },
  );
}
new IntersectionObserver(
  (entries, obs) => {
    if (!entries.some((en) => en.isIntersecting)) return;
    obs.disconnect();
    renderOssHome();
  },
  { rootMargin: "800px 0px" },
).observe($("#open-source"));

// #/open-source: every contribution, latest first
function renderOssPage() {
  const body = $("#detailBody");
  const want = location.hash;
  body.innerHTML = `<div class="detail-hero"><div><h1>Open source contributions</h1></div></div><ol class="pr-list">${skeletonRows(5)}</ol>`;
  loadPRs().then(
    (prs) => {
      if (location.hash !== want) return;
      const merged = prs.filter((p) => p.state === "merged").length;
      const repos = [...new Set(prs.map((p) => p.repo))];
      body.innerHTML = `
    <div class="detail-hero">
      <div>
        <div class="tags"><span>Open Source</span><span>Live from GitHub</span></div>
        <h1>Open source contributions<small>/${prs.length} pull requests</small></h1>
        <p>Fixes, features and docs I've contributed to projects I use, latest first. Open one to see why it was needed, how I fixed it and who merged it.</p>
        <div class="detail-actions">
          <a class="btn btn-dark" href="${GH_SEARCH}" target="_blank" rel="noopener">View on GitHub <span class="arrow">↗</span></a>
        </div>
      </div>
      <div class="detail-meta">
        <div><small>Merged</small><span>${merged} of ${prs.length}</span></div>
        <div><small>Repositories</small><span>${repos.map(esc).join(", ") || "None yet"}</span></div>
        ${prs.length ? `<div><small>Latest</small><span>${fmtDate(prs[0].created)}</span></div>` : ""}
      </div>
    </div>
    <ol class="pr-list">${prs.map(prRowHTML).join("") || `<li class="pr-empty">No pull requests yet.</li>`}</ol>`;
      observeReveals();
      ossEvent("loaded", { view: "list", count: prs.length });
    },
    (err) => {
      if (location.hash !== want) return;
      body.innerHTML = `<ol class="pr-list">${ossError(err)}</ol>`;
      ossEvent("error", { view: "list", reason: err.message });
    },
  );
}

// #/open-source/<owner>/<repo>/<number>: one pull request, with the write-up, the outcome and the files
function renderPR(owner, name, n) {
  const body = $("#detailBody");
  const want = location.hash;
  const path = `/repos/${owner}/${name}/pulls/${n}`;
  const onGitHub = `https://github.com/${owner}/${name}/pull/${n}`;
  body.innerHTML = `<div class="detail-hero"><div><div class="tags"><span>${esc(owner)}/${esc(name)}</span></div><h1 class="pr-h1">Pull request #${n}</h1></div></div><ol class="pr-list">${skeletonRows(4)}</ol>`;
  Promise.all([
    gh(path, "application/vnd.github.full+json"), // includes body_html: the description as GitHub renders it
    gh(`${path}/files?per_page=100`),
    loadPRs().catch(() => []),
  ]).then(
    ([d, files, prs]) => {
      if (location.hash !== want) return;
      document.title = `${d.title} · ${ME}`;
      const state = prState(d);
      const commits = `${d.commits} commit${d.commits === 1 ? "" : "s"}`;
      const base = `<code>${esc(d.base.ref)}</code>`;
      const outcome = {
        merged: `${esc(d.merged_by?.login || "A maintainer")} merged ${commits} into ${base} on ${fmtDate(d.merged_at)}`,
        closed: `Closed without merging on ${fmtDate(d.closed_at)}`,
        open: `Wants to merge ${commits} into ${base} · in review`,
        draft: `Draft · ${commits} so far`,
      }[state];
      const others = prs.filter((p) => !(p.repo === `${owner}/${name}` && p.number === n)).slice(0, 3);
      const fileHTML = (f) => {
        const cut = f.filename.lastIndexOf("/") + 1;
        return `<li><span class="pr-file" title="${esc(f.filename)}"><span class="dir">${esc(f.filename.slice(0, cut))}</span><b>${esc(f.filename.slice(cut))}</b></span><span class="pr-diff"><ins>+${f.additions}</ins><del>−${f.deletions}</del></span></li>`;
      };
      body.innerHTML = `
    <div class="detail-hero">
      <div>
        <div class="tags"><span>${esc(d.base.repo.full_name)}</span>${d.labels.map((l) => `<span>${esc(l.name)}</span>`).join("")}</div>
        <h1 class="pr-h1">${inline(d.title)}<small>/#${n}</small></h1>
        <p class="pr-line">${stateHTML(state)}<span>${outcome}</span></p>
        <div class="detail-actions">
          <a class="btn btn-dark" href="${onGitHub}" target="_blank" rel="noopener">View on GitHub <span class="arrow">↗</span></a>
          <a class="btn btn-light" href="${onGitHub}/files" target="_blank" rel="noopener">Files changed <span class="arrow">↗</span></a>
        </div>
      </div>
      <div class="detail-meta">
        <div><small>Opened</small><span>${fmtDate(d.created_at)}</span></div>
        ${state === "merged" ? `<div><small>Merged</small><span>${fmtDate(d.merged_at)}</span></div>` : ""}
        ${d.merged_by ? `<div><small>Merged by</small><span>${esc(d.merged_by.login)}</span></div>` : ""}
        <div><small>Branch</small><span>${esc(d.head.label)} → ${esc(d.base.ref)}</span></div>
      </div>
    </div>
    <div class="pr-stats">
      <div><b>${d.commits}</b><small>Commits</small></div>
      <div><b>${d.changed_files}</b><small>Files</small></div>
      <div><b class="add">+${d.additions}</b><small>Additions</small></div>
      <div><b class="del">−${d.deletions}</b><small>Deletions</small></div>
      <div><b>${d.comments + d.review_comments}</b><small>Comments</small></div>
    </div>
    <div class="pr-grid">
      <section class="pr-card"><h2>The fix</h2><div class="prose">${d.body_html || "<p>No description.</p>"}</div></section>
      <section class="pr-card pr-files"><h2>Files changed <span>${files.length}</span></h2><ul>${files.map(fileHTML).join("")}</ul></section>
    </div>
    ${others.length ? `<div class="detail-more"><h2>More contributions</h2><ol class="pr-list">${others.map(prRowHTML).join("")}</ol></div>` : ""}`;
      body.querySelectorAll(".prose a[href]").forEach((a) => {
        a.target = "_blank";
        a.rel = "noopener";
      });
      observeReveals();
      ossEvent("loaded", { view: "pr", pr: `${owner}/${name}/${n}`, state });
    },
    (err) => {
      if (location.hash !== want) return;
      body.innerHTML = `<ol class="pr-list">${ossError(err, onGitHub)}</ol>`;
      ossEvent("error", { view: "pr", pr: `${owner}/${name}/${n}`, reason: err.message });
    },
  );
}

/* =========================================================
   Detail views (hash routing): #/work/<slug>, #/open-source, #/open-source/<owner>/<repo>/<number>
   ========================================================= */
const detail = $("#detail");
let lastScroll = 0;

function renderDetail(p) {
  // The next two projects in list order (wrapping), so each page suggests different work
  const at = PROJECTS.indexOf(p);
  const others = [1, 2].map((n) => PROJECTS[(at + n) % PROJECTS.length]);
  $("#detailBody").innerHTML = `
    <div class="detail-hero">
      <div>
        <div class="tags">${p.tags.map((t) => `<span>${esc(t)}</span>`).join("")}</div>
        <h1>${esc(p.title)}<small${p.badges.includes("Real Project") ? ' class="real"' : ""}>/${p.badges.map(esc).join(" · ")}</small></h1>
        <p>${esc(p.summary)}</p>
        <div class="detail-actions">
          ${p.links.map((l) => `<a class="btn ${l.primary ? "btn-dark" : "btn-light"}" href="${l.href}" target="_blank" rel="noopener">${esc(l.label)} <span class="arrow">↗</span></a>`).join("")}
          <a class="btn btn-light" href="mailto:${EMAIL}">Contact Me</a>
        </div>
      </div>
      <div class="detail-meta">
        <div><small>Type</small><span>${esc(p.kind)}</span></div>
        <div><small>Role</small><span>${esc(p.role)}</span></div>
        <div><small>Stack</small><span>${esc(p.stack)}</span></div>
      </div>
    </div>
    <div class="detail-shot">${p.preview ? previewHTML(p, true) : mockHTML(p)}</div>
    <div class="detail-note">
      <h2>Highlights</h2>
      <ul>${p.highlights.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>
    </div>
    <div class="detail-more">
      <h2>More work</h2>
      <div class="grid">${others.map(cardHTML).join("")}</div>
    </div>`;
  observeReveals();
  initSlideshows($("#detailBody"));
}

function openView(title, back, render) {
  if (!document.body.classList.contains("viewing")) lastScroll = scrollY;
  $("#backBtn").setAttribute("href", back);
  render();
  document.body.classList.add("viewing");
  detail.hidden = false;
  document.title = `${title} · ${ME}`;
  scrollTo({ top: 0, behavior: "instant" });
}

function route() {
  const m = location.hash.match(/^#\/work\/([\w-]+)/);
  const p = m && PROJECTS.find((x) => x.slug === m[1]);
  const pr = location.hash.match(/^#\/open-source\/([\w.-]+)\/([\w.-]+)\/(\d+)$/);
  if (p) openView(p.title, "#work", () => renderDetail(p));
  else if (pr) openView(`${pr[1]}/${pr[2]} #${pr[3]}`, "#/open-source", () => renderPR(pr[1], pr[2], +pr[3]));
  else if (location.hash === "#/open-source") openView("Open source contributions", "#open-source", renderOssPage);
  else if (document.body.classList.contains("viewing")) {
    document.body.classList.remove("viewing");
    detail.hidden = true;
    document.title = HOME_TITLE;
    const target = location.hash && document.querySelector(location.hash);
    if (target && location.hash !== "#work") target.scrollIntoView();
    else
      scrollTo({
        top: lastScroll || $("#work").offsetTop,
        behavior: "instant",
      });
  }
}
addEventListener("hashchange", route);
route();
