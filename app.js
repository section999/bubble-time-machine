/* ════════════════════════════════════════════════
   Bubble Time Machine — Application Logic
   SPA: year switcher, entry point selector,
   content area, chain sidebar
   ════════════════════════════════════════════════ */

/* ── State ── */
const state = {
  year:         "1988",
  entryPoint:   null,
  sectionIndex: 0,
};

const YEARS = ["1985", "1986", "1987", "1988", "1989", "1990", "1991"];

/* ════════════════════ BOOT ════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
  buildYearSelector();
  buildEntryGrid();
  renderHero();
  setYear("1988");

  // Section navigation
  document.getElementById("prevSection").addEventListener("click", () => {
    if (state.sectionIndex > 0) { state.sectionIndex--; renderSection(); }
  });
  document.getElementById("nextSection").addEventListener("click", () => {
    const sections = ENTRY_SECTIONS[state.entryPoint] || [];
    if (state.sectionIndex < sections.length - 1) { state.sectionIndex++; renderSection(); }
  });

  // Keyboard section navigation
  document.addEventListener("keydown", e => {
    if (document.getElementById("contentArea").hidden) return;
    if (document.activeElement.tagName === "INPUT") return;
    if (e.key === "ArrowLeft") {
      if (state.sectionIndex > 0) { state.sectionIndex--; renderSection(); }
    } else if (e.key === "ArrowRight") {
      const sections = ENTRY_SECTIONS[state.entryPoint] || [];
      if (state.sectionIndex < sections.length - 1) { state.sectionIndex++; renderSection(); }
    }
  });

  // Dashboard
  document.getElementById("dashboardBtn").addEventListener("click", openDashboard);
  document.getElementById("dashboardClose").addEventListener("click", closeDashboard);
  document.getElementById("dashboardOverlay").addEventListener("click", closeDashboard);
  document.getElementById("saveNameBtn").addEventListener("click", saveDashboardName);
  document.getElementById("exportBtn").addEventListener("click", exportProgress);
  document.getElementById("importBtn").addEventListener("click", () => document.getElementById("importFile").click());
  document.getElementById("importFile").addEventListener("change", handleImportFile);
  document.getElementById("resetBtn").addEventListener("click", resetProgress);

  // Restore saved name
  const saved = loadSave();
  if (saved.name) document.getElementById("userName").value = saved.name;
});

/* ════════════════════ YEAR SELECTOR ════════════════════ */

function buildYearSelector() {
  const container = document.getElementById("yearSelector");
  container.innerHTML = "";
  YEARS.forEach(y => {
    const node = document.createElement("button");
    node.className = "timeline-node";
    node.dataset.year = y;
    node.setAttribute("aria-label", y);
    node.innerHTML = `
      <div class="timeline-dot"></div>
      <span class="timeline-label">${y}</span>
    `;
    node.addEventListener("click", () => setYear(y));
    container.appendChild(node);
  });
}

function setYear(year) {
  state.year = year;

  // Update active node
  document.querySelectorAll(".timeline-node").forEach(node => {
    node.classList.toggle("active", node.dataset.year === year);
  });

  renderHero();

  if (state.entryPoint) {
    renderSection();
  }
}

/* ════════════════════ HERO ════════════════════ */

function renderHero() {
  const data = CONTENT[state.year];
  if (!data) return;

  animateText("heroYear", state.year);
  animateText("heroMood", data.heroMood);
  animateText("heroSub",  data.heroSub);
}

function animateText(id, newText) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.opacity = "0";
  el.style.transform = "translateY(6px)";
  setTimeout(() => {
    el.textContent = newText;
    el.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  }, 120);
}

/* ════════════════════ ENTRY GRID ════════════════════ */

function buildEntryGrid() {
  const container = document.getElementById("entryGrid");
  container.innerHTML = "";

  ENTRY_POINTS.forEach(ep => {
    const card = document.createElement("div");
    card.className = "entry-card";
    card.setAttribute("role", "listitem");
    card.setAttribute("tabindex", "0");
    card.dataset.id = ep.id;

    card.innerHTML = `
      <div class="entry-card-icon" aria-hidden="true">${ep.icon}</div>
      <div class="entry-card-title">${ep.title}</div>
      <div class="entry-card-sub">${ep.sub}</div>
    `;

    card.addEventListener("click",   () => selectEntryPoint(ep.id));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectEntryPoint(ep.id);
      }
    });

    container.appendChild(card);
  });
}

function selectEntryPoint(id) {
  state.entryPoint = id;
  state.sectionIndex = 0;

  document.querySelectorAll(".entry-card").forEach(card => {
    card.classList.toggle("active", card.dataset.id === id);
  });

  renderSection();
  showContentArea();
}

/* ════════════════════ CONTENT AREA ════════════════════ */

function showContentArea() {
  const area  = document.getElementById("contentArea");
  area.hidden = false;
  area.removeAttribute("aria-hidden");
  area.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderSection() {
  const sections = ENTRY_SECTIONS[state.entryPoint];
  if (!sections) return;

  const s = sections[state.sectionIndex];
  if (!s) return;

  const titleEl = document.getElementById("contentTitle");
  const textEl  = document.getElementById("sectionText");

  // Fade out
  titleEl.style.opacity = "0";
  textEl.style.opacity  = "0";

  setTimeout(() => {
    titleEl.textContent = s.title;
    textEl.textContent  = s.body;
    titleEl.style.opacity = "1";
    textEl.style.opacity  = "1";
  }, 140);

  // Counter
  document.getElementById("sectionCounter").textContent =
    `${state.sectionIndex + 1} / ${sections.length}`;

  // Arrow states
  document.getElementById("prevSection").disabled = state.sectionIndex === 0;
  document.getElementById("nextSection").disabled = state.sectionIndex === sections.length - 1;

  // Reading progress bar
  const pct = ((state.sectionIndex + 1) / sections.length) * 100;
  document.getElementById("readingProgressFill").style.width = `${pct}%`;

  // Breadcrumb
  const ep = ENTRY_POINTS.find(e => e.id === state.entryPoint);
  if (ep) {
    document.getElementById("contentBreadcrumb").textContent =
      `${ep.icon}  ${ep.title}  ·  ${state.year}`;
  }

  updateChain(s.chainActive || []);
  trackSection();
}

/* ════════════════════ PROGRESS TRACKING ════════════════════ */

const STORAGE_KEY = "BTM_SAVE";

function loadSave() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
  catch { return {}; }
}

function writeSave(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function trackSection() {
  if (!state.entryPoint) return;
  const save = loadSave();
  if (!save.progress) save.progress = {};
  const prev = save.progress[state.entryPoint] || 0;
  const reached = state.sectionIndex + 1;
  if (reached > prev) {
    save.progress[state.entryPoint] = reached;
    writeSave(save);
  }
}

/* ════════════════════ DASHBOARD ════════════════════ */

function openDashboard() {
  document.getElementById("dashboardPanel").classList.add("is-open");
  document.getElementById("dashboardOverlay").classList.add("is-open");
  renderProgressList();
}

function closeDashboard() {
  document.getElementById("dashboardPanel").classList.remove("is-open");
  document.getElementById("dashboardOverlay").classList.remove("is-open");
}

function renderProgressList() {
  const progress = (loadSave().progress) || {};
  const list = document.getElementById("progressList");
  const total = 20;
  list.innerHTML = "";
  ENTRY_POINTS.forEach(ep => {
    const reached = progress[ep.id] || 0;
    const pct = Math.round((reached / total) * 100);
    const item = document.createElement("div");
    item.className = "progress-item";
    item.innerHTML = `
      <div class="progress-item-header">
        <span class="progress-item-name">${ep.icon} ${ep.title}</span>
        <span class="progress-item-count">${reached} / ${total}</span>
      </div>
      <div class="progress-bar-track">
        <div class="progress-bar-fill" style="width:${pct}%"></div>
      </div>
    `;
    list.appendChild(item);
  });
}

function saveDashboardName() {
  const name = document.getElementById("userName").value.trim();
  if (!name) return;
  const save = loadSave();
  save.name = name;
  writeSave(save);
}

function exportProgress() {
  const data = JSON.stringify(loadSave(), null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href     = url;
  a.download = "btm-progress.json";
  a.click();
  URL.revokeObjectURL(url);
}

function handleImportFile(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      writeSave(data);
      if (data.name) document.getElementById("userName").value = data.name;
      renderProgressList();
    } catch {
      alert("Invalid progress file.");
    }
  };
  reader.readAsText(file);
  e.target.value = "";
}

function resetProgress() {
  if (!confirm("Reset all progress? This cannot be undone.")) return;
  localStorage.removeItem(STORAGE_KEY);
  document.getElementById("userName").value = "";
  renderProgressList();
}

/* ════════════════════ CAUSAL CHAIN ════════════════════ */

function updateChain(activeNodes) {
  document.querySelectorAll(".chain-node").forEach(node => {
    const isActive = activeNodes.includes(node.dataset.node);
    node.classList.toggle("chain-node--active", isActive);
  });
}

