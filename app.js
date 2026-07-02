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

const _animateTimers = {};
let   _renderTimer   = null;

/* ════════════════════ BOOT ════════════════════ */

/* ════════════════════ THEME ════════════════════ */

function initTheme() {
  const btn = document.getElementById("themeToggleBtn");
  const saved = localStorage.getItem("BTM_THEME");
  if (saved === "light") {
    document.documentElement.setAttribute("data-theme", "light");
    btn.innerHTML = "&#9790;";
    btn.setAttribute("aria-label", "Switch to dark mode");
  }
  btn.addEventListener("click", () => {
    const isLight = document.documentElement.getAttribute("data-theme") === "light";
    if (isLight) {
      document.documentElement.removeAttribute("data-theme");
      btn.innerHTML = "&#9728;";
      btn.setAttribute("aria-label", "Switch to light mode");
      localStorage.setItem("BTM_THEME", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      btn.innerHTML = "&#9790;";
      btn.setAttribute("aria-label", "Switch to dark mode");
      localStorage.setItem("BTM_THEME", "light");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  buildYearSelector();
  buildEntryGrid();
  setYear("1988");

  // Section navigation
  document.getElementById("prevSection").addEventListener("click", () => {
    if (state.sectionIndex > 0) { state.sectionIndex--; renderSection(); }
  });
  document.getElementById("nextSection").addEventListener("click", () => {
    const sections = (ENTRY_SECTIONS[state.entryPoint] || {})[state.year] || [];
    if (state.sectionIndex < sections.length - 1) { state.sectionIndex++; renderSection(); }
  });

  // Keyboard section navigation
  document.addEventListener("keydown", e => {
    if (document.getElementById("contentArea").hidden) return;
    if (document.activeElement.tagName === "INPUT") return;
    if (document.getElementById("dashboardPanel").classList.contains("is-open")) return;
    if (e.key === "ArrowLeft") {
      if (state.sectionIndex > 0) { state.sectionIndex--; renderSection(); }
    } else if (e.key === "ArrowRight") {
      const sections = (ENTRY_SECTIONS[state.entryPoint] || {})[state.year] || [];
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
  state.sectionIndex = 0;

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
  clearTimeout(_animateTimers[id]);
  el.style.transition = "none";
  el.style.opacity = "0";
  el.style.transform = "translateY(6px)";
  _animateTimers[id] = setTimeout(() => {
    el.textContent = newText;
    el.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
    setTimeout(() => { el.style.transition = ""; }, 300);
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
  const yearSections = ENTRY_SECTIONS[state.entryPoint];
  if (!yearSections) return;
  const sections = yearSections[state.year];
  if (!sections) return;

  const s = sections[state.sectionIndex];
  if (!s) return;

  const titleEl = document.getElementById("contentTitle");
  const textEl  = document.getElementById("sectionText");

  // Fade out
  titleEl.style.opacity = "0";
  textEl.style.opacity  = "0";

  clearTimeout(_renderTimer);
  _renderTimer = setTimeout(() => {
    titleEl.textContent = s.title;
    textEl.innerHTML = s.body.split('\n\n').map(p => `<p>${p}</p>`).join('');
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

  // Year context bar
  const yearData = CONTENT[state.year];
  const yearContextEl = document.getElementById("yearContext");
  if (yearContextEl && yearData) yearContextEl.textContent = yearData.heroMood;

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
  const key = `${state.entryPoint}_${state.year}`;
  const prev = save.progress[key] || 0;
  const reached = state.sectionIndex + 1;
  if (reached > prev) {
    save.progress[key] = reached;
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
  list.innerHTML = "";
  ENTRY_POINTS.forEach(ep => {
    const yearData = ENTRY_SECTIONS[ep.id];
    const total = Object.values(yearData).reduce((sum, arr) => sum + arr.length, 0);
    const reached = YEARS.reduce((sum, y) => sum + (progress[`${ep.id}_${y}`] || 0), 0);
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

  const btn = document.getElementById("saveNameBtn");
  const original = btn.textContent;
  btn.textContent = "Saved!";
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = original;
    btn.disabled = false;
  }, 1500);
}

function exportProgress() {
  const data = JSON.stringify(loadSave(), null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url  = URL.createObjectURL(blob);
  const a    = document.createElement("a");
  a.href     = url;
  a.download = "btm-progress.json";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 100);
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


