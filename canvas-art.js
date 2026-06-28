/* ════════════════════════════════════════════════
   Bubble Time Machine — Generative Year Art
   Canvas-based bubble-era aesthetic, one per year
   ════════════════════════════════════════════════ */

/* ── Public API ── */

function drawYearArt(year, canvas) {
  const ctx = canvas.getContext("2d");
  const W   = canvas.width;
  const H   = canvas.height;
  ctx.clearRect(0, 0, W, H);

  const fn = YEAR_SCENES[year];
  if (fn) fn(ctx, W, H);
}

/* ── Deterministic pseudo-random (no Math.random — same art every draw) ── */

function prng(seed) {
  const s = Math.sin(seed * 127.1 + 311.7) * 43758.5453;
  return s - Math.floor(s);
}

/* ── Shared primitives ── */

function sky(ctx, W, H, stops) {
  const g = ctx.createLinearGradient(0, 0, 0, H);
  stops.forEach(([pos, col]) => g.addColorStop(pos, col));
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, W, H);
}

function stars(ctx, W, H, n, alpha) {
  ctx.save();
  for (let i = 0; i < n; i++) {
    const x    = prng(i)          * W;
    const y    = prng(i + 1000)   * H * 0.58;
    const r    = 0.5 + prng(i + 2000) * 1.5;
    const a    = 0.35 + prng(i + 3000) * 0.65;
    ctx.globalAlpha = a * alpha;
    ctx.fillStyle   = "#ffffff";
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function glow(ctx, x, y, r, hex, alpha) {
  const g = ctx.createRadialGradient(x, y, 0, x, y, r);
  g.addColorStop(0,   hex + "cc");
  g.addColorStop(0.4, hex + "44");
  g.addColorStop(1,   hex + "00");
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle   = g;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function grid(ctx, W, H, horizonY, color, alpha) {
  ctx.save();
  ctx.strokeStyle = color;
  ctx.lineWidth   = 0.8;

  // horizontal lines — perspective spacing
  for (let i = 0; i <= 14; i++) {
    const t = i / 14;
    const y = horizonY + Math.pow(t, 1.7) * (H - horizonY);
    ctx.globalAlpha = alpha * (0.1 + t * 0.65);
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(W, y);
    ctx.stroke();
  }

  // vertical lines — converge to vanishing point
  for (let i = -10; i <= 10; i++) {
    const xB = W / 2 + (i / 10) * W * 0.75;
    ctx.globalAlpha = alpha * 0.35;
    ctx.beginPath();
    ctx.moveTo(W / 2, horizonY);
    ctx.lineTo(xB, H);
    ctx.stroke();
  }
  ctx.restore();
}

function cityline(ctx, W, H, horizonY, fillColor, alpha, seed = 0) {
  ctx.save();
  ctx.globalAlpha = alpha;
  ctx.fillStyle   = fillColor;
  ctx.beginPath();

  const n = 28;
  ctx.moveTo(0, H);
  let cx = 0;
  for (let i = 0; i < n; i++) {
    const bw = (W / n) * (0.6 + prng(seed + i) * 0.9);
    const bh = (H - horizonY) * (0.08 + prng(seed + i + 100) * 0.68);
    ctx.lineTo(cx, horizonY);
    ctx.lineTo(cx, horizonY - bh);
    ctx.lineTo(cx + bw, horizonY - bh);
    ctx.lineTo(cx + bw, horizonY);
    cx += bw;
    if (cx > W) break;
  }
  ctx.lineTo(W, H);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function groundFill(ctx, W, H, horizonY, colorTop, colorBot) {
  const g = ctx.createLinearGradient(0, horizonY, 0, H);
  g.addColorStop(0, colorTop);
  g.addColorStop(1, colorBot);
  ctx.fillStyle = g;
  ctx.fillRect(0, horizonY, W, H - horizonY);
}

function ghostText(ctx, text, x, y, size, color, alpha) {
  ctx.save();
  ctx.font         = `bold ${size}px 'Courier New', monospace`;
  ctx.fillStyle    = color;
  ctx.globalAlpha  = alpha;
  ctx.textAlign    = "center";
  ctx.shadowBlur   = 24;
  ctx.shadowColor  = color;
  ctx.fillText(text, x, y);
  ctx.restore();
}

function neonLine(ctx, pts, color, width, alpha, dashed = false) {
  ctx.save();
  ctx.strokeStyle  = color;
  ctx.lineWidth    = width;
  ctx.globalAlpha  = alpha;
  ctx.shadowBlur   = 14;
  ctx.shadowColor  = color;
  if (dashed) ctx.setLineDash([4, 4]);
  ctx.beginPath();
  pts.forEach(([x, y], i) => i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y));
  ctx.stroke();
  ctx.restore();
}

/* ════════════════════ YEAR SCENES ════════════════════ */

const YEAR_SCENES = {

  /* ── 1985 — PLAZA ACCORD: cool indigo, quiet before the storm ── */
  "1985": (ctx, W, H) => {
    sky(ctx, W, H, [
      [0,    "#03030e"],
      [0.5,  "#090924"],
      [1,    "#0c1030"],
    ]);
    stars(ctx, W, H, 90, 0.55);

    const hy = H * 0.52;

    // Cold blue moon
    glow(ctx, W * 0.74, H * 0.17, 70, "#2255cc", 0.3);
    ctx.save();
    ctx.globalAlpha = 0.65;
    ctx.fillStyle   = "#b8caff";
    ctx.beginPath();
    ctx.arc(W * 0.74, H * 0.17, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // Horizon glow — barely there
    glow(ctx, W * 0.5, hy, W * 0.45, "#2244aa", 0.18);

    cityline(ctx, W, H, hy, "#080d22", 1.0, 0);
    groundFill(ctx, W, H, hy, "#090e28", "#03030e");
    grid(ctx, W, H, hy, "#3355cc", 0.55);

    // Subtle rising graph
    neonLine(ctx,
      [[W*0.05,H*0.49],[W*0.22,H*0.46],[W*0.38,H*0.43],[W*0.52,H*0.40]],
      "#4466ff", 1.8, 0.45);

    ghostText(ctx, "PLAZA ACCORD 1985", W*0.5, H*0.82, W*0.038, "#3355cc", 0.14);
  },

  /* ── 1986 — YEN SURGE: purple/violet, money loosening ── */
  "1986": (ctx, W, H) => {
    sky(ctx, W, H, [
      [0,    "#050412"],
      [0.45, "#100828"],
      [1,    "#170c38"],
    ]);
    stars(ctx, W, H, 110, 0.65);

    const hy = H * 0.50;

    glow(ctx, W * 0.5, hy, W * 0.5, "#6622cc", 0.28);
    glow(ctx, W * 0.5, hy, W * 0.2, "#9944ff", 0.15);

    cityline(ctx, W, H, hy, "#0c0820", 1.0, 10);
    groundFill(ctx, W, H, hy, "#110a28", "#050412");
    grid(ctx, W, H, hy, "#8844ee", 0.6);

    // Yen symbols floating
    [0.22, 0.68].forEach((xf, i) => {
      ghostText(ctx, "¥", W*xf, H*(0.22 + i*0.12), W*0.1, "#aa66ff", 0.10);
    });

    // Rising neon line
    neonLine(ctx,
      [[W*0.05,H*0.47],[W*0.2,H*0.42],[W*0.38,H*0.37],[W*0.58,H*0.32]],
      "#9966ff", 1.8, 0.55);

    ghostText(ctx, "¥ APPRECIATES", W*0.5, H*0.83, W*0.036, "#7744cc", 0.13);
  },

  /* ── 1987 — CHEAP MONEY: magenta, assets starting to surge ── */
  "1987": (ctx, W, H) => {
    sky(ctx, W, H, [
      [0,    "#080415"],
      [0.4,  "#180828"],
      [1,    "#240c38"],
    ]);
    stars(ctx, W, H, 130, 0.75);

    const hy = H * 0.48;

    glow(ctx, W * 0.5, hy, W * 0.55, "#cc2288", 0.32);
    glow(ctx, W * 0.5, hy, W * 0.22, "#ff44aa", 0.2);

    cityline(ctx, W, H, hy, "#130820", 1.0, 20);
    cityline(ctx, W, H, hy + 5, "#0e0618", 0.6, 50);
    groundFill(ctx, W, H, hy, "#1e0a2e", "#080415");
    grid(ctx, W, H, hy, "#ee44aa", 0.65);

    // Rising particles
    ctx.save();
    for (let i = 0; i < 22; i++) {
      const x = prng(i + 500) * W;
      const y = prng(i + 600) * hy * 0.85;
      const r = 1.5 + prng(i + 700) * 3.5;
      ctx.globalAlpha = 0.25 + prng(i + 800) * 0.35;
      ctx.fillStyle   = "#ff66cc";
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // Accelerating line
    neonLine(ctx,
      [[W*0.04,H*0.46],[W*0.18,H*0.40],[W*0.34,H*0.34],[W*0.52,H*0.26]],
      "#ff44aa", 2, 0.6);

    ghostText(ctx, "ASSET PRICES SURGE", W*0.5, H*0.83, W*0.036, "#cc2288", 0.14);
  },

  /* ── 1988 — PEAK BUBBLE: gold, neon city, maximum vibrancy ── */
  "1988": (ctx, W, H) => {
    sky(ctx, W, H, [
      [0,    "#0e0510"],
      [0.4,  "#1e0818"],
      [1,    "#280a10"],
    ]);
    stars(ctx, W, H, 160, 0.9);

    const hy = H * 0.45;

    // Golden horizon
    glow(ctx, W * 0.5, hy, W * 0.65, "#f1be32", 0.42);
    glow(ctx, W * 0.5, hy, W * 0.25, "#ffd060", 0.28);

    cityline(ctx, W, H, hy, "#180510", 1.0, 30);
    cityline(ctx, W, H, hy + 4, "#220a14", 0.75, 60);

    // Building windows — neon dots
    ctx.save();
    const winColors = ["#f1be32", "#ff9944", "#ff6688", "#dbb8ff", "#ffd060"];
    for (let i = 0; i < 50; i++) {
      const x = prng(i + 1100) * W;
      const y = hy - prng(i + 1200) * H * 0.35;
      ctx.fillStyle   = winColors[i % winColors.length];
      ctx.globalAlpha = 0.55 + prng(i + 1300) * 0.35;
      ctx.fillRect(x, y, 2, 3);
    }
    ctx.restore();

    groundFill(ctx, W, H, hy, "#2a1008", "#0e0510");
    grid(ctx, W, H, hy, "#f1be32", 0.78);

    ghostText(ctx, "NIKKEI  30,000", W*0.5, H*0.28, W*0.048, "#f1be32", 0.28);
    ghostText(ctx, "BUBBLE PEAK 1988", W*0.5, H*0.84, W*0.036, "#cc9e28", 0.18);
  },

  /* ── 1989 — THE APEX: red-gold, 38,915, last night of the bubble ── */
  "1989": (ctx, W, H) => {
    sky(ctx, W, H, [
      [0,    "#0e0408"],
      [0.35, "#220808"],
      [1,    "#300a08"],
    ]);
    stars(ctx, W, H, 200, 1.0);

    const hy = H * 0.43;

    // Burning horizon
    glow(ctx, W * 0.5, hy, W * 0.7, "#ff4422", 0.48);
    glow(ctx, W * 0.5, hy, W * 0.32, "#f1be32", 0.38);
    glow(ctx, W * 0.28, H * 0.18, 90, "#ff6644", 0.3);
    glow(ctx, W * 0.72, H * 0.14, 70, "#f1be32", 0.25);

    cityline(ctx, W, H, hy, "#1c0408", 1.0, 40);
    cityline(ctx, W, H, hy + 6, "#240808", 0.7, 70);

    groundFill(ctx, W, H, hy, "#320808", "#0e0408");
    grid(ctx, W, H, hy, "#ff6633", 0.82);

    // Champagne bubbles
    ctx.save();
    for (let i = 0; i < 30; i++) {
      const x = prng(i + 400) * W;
      const y = prng(i + 500) * hy * 0.85;
      const r = 1.5 + prng(i + 600) * 5;
      ctx.strokeStyle = "#ffd060";
      ctx.lineWidth   = 0.8;
      ctx.globalAlpha = 0.3 + prng(i + 700) * 0.3;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.restore();

    ghostText(ctx, "38,915", W*0.5, H*0.27, W*0.062, "#f1be32", 0.35);
    ghostText(ctx, "DEC 29, 1989 — ALL-TIME HIGH", W*0.5, H*0.84, W*0.032, "#cc4422", 0.2);
  },

  /* ── 1990 — COLLAPSE STARTS: fading warmth → cold, falling graph ── */
  "1990": (ctx, W, H) => {
    sky(ctx, W, H, [
      [0,    "#0c0608"],
      [0.4,  "#12080a"],
      [0.7,  "#0c0c1c"],
      [1,    "#080812"],
    ]);
    stars(ctx, W, H, 55, 0.38);

    const hy = H * 0.50;

    // Fading warm glow — the party is ending
    glow(ctx, W * 0.5, hy, W * 0.42, "#882222", 0.18);

    cityline(ctx, W, H, hy, "#0d0a10", 0.9, 50);
    groundFill(ctx, W, H, hy, "#0e0e22", "#080812");
    grid(ctx, W, H, hy, "#3355aa", 0.48);

    // Falling dashed graph
    neonLine(ctx,
      [[W*0.05,H*0.33],[W*0.22,H*0.38],[W*0.40,H*0.44],[W*0.58,H*0.50],[W*0.78,H*0.56]],
      "#4466aa", 2, 0.55, true);

    // Down arrow dot at end
    glow(ctx, W * 0.78, H * 0.56, 22, "#4466aa", 0.35);
    ctx.save();
    ctx.fillStyle   = "#4466aa";
    ctx.globalAlpha = 0.8;
    ctx.beginPath();
    ctx.arc(W * 0.78, H * 0.56, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    ghostText(ctx, "−48%", W*0.75, H*0.42, W*0.058, "#3355aa", 0.2);
    ghostText(ctx, "NIKKEI COLLAPSES  1990", W*0.5, H*0.84, W*0.032, "#334488", 0.15);
  },

  /* ── 1991 — THE LOST DECADE: dark, fragmented, barely alive ── */
  "1991": (ctx, W, H) => {
    sky(ctx, W, H, [
      [0,    "#020206"],
      [0.5,  "#05050e"],
      [1,    "#070712"],
    ]);
    stars(ctx, W, H, 28, 0.22);

    const hy = H * 0.53;

    // Almost extinguished glow
    glow(ctx, W * 0.5, hy, W * 0.32, "#1a2244", 0.14);

    cityline(ctx, W, H, hy, "#07080f", 0.82, 60);
    groundFill(ctx, W, H, hy, "#080810", "#020206");
    grid(ctx, W, H, hy, "#1e2e4a", 0.28);

    // Broken/fragmented line — the structure has collapsed
    neonLine(ctx,
      [[W*0.04,H*0.35],[W*0.28,H*0.42],[W*0.44,H*0.54]],
      "#2a3e5a", 1.5, 0.38, true);
    neonLine(ctx,
      [[W*0.44,H*0.54],[W*0.56,H*0.48],[W*0.74,H*0.58]],
      "#2a3e5a", 1.5, 0.28, true);

    // Scattered fragments (broken windows)
    ctx.save();
    for (let i = 0; i < 12; i++) {
      const x = prng(i + 900) * W;
      const y = hy - prng(i + 1000) * H * 0.3;
      ctx.fillStyle   = "#334466";
      ctx.globalAlpha = 0.12 + prng(i + 1100) * 0.15;
      ctx.fillRect(x, y, 1.5, 2.5);
    }
    ctx.restore();

    ghostText(ctx, "THE LOST DECADE", W*0.5, H*0.31, W*0.044, "#2a3e5a", 0.14);
    ghostText(ctx, "バブル崩壊  1991", W*0.5, H*0.84, W*0.036, "#1e2e4a", 0.13);
  },

};
