/* ════════════════════════════════════════════════
   Bubble Time Machine — Anthropic API Client
   Uses fetch() to call claude-sonnet-4-6 directly
   API key is stored in localStorage (set via UI modal)
   ════════════════════════════════════════════════ */

const ANTHROPIC_API_URL = "https://api.anthropic.com/v1/messages";
const MODEL = "claude-sonnet-4-6";

const SYSTEM_PROMPT = `You are the learning guide for Bubble Time Machine, an interactive educational website about Japan's bubble economy era (1985–1991). Your audience is English-speaking fans of Japanese subculture — people who discovered this era through City Pop, anime, aesthetics, or games, and now want to understand *why* this world existed.

Your role is not to lecture. You are a curious, knowledgeable companion who asks the right questions and helps the user connect the dots between culture and economics.

TONE:
- Warm and intellectually curious — like a friend who knows a lot and loves sharing it
- Never condescending, never textbook-stiff
- Short paragraphs. Leave space to breathe
- Contractions are fine

CORE METHOD:
1. Always open with a question or surprising fact, never a wall of information
2. Connect every cultural phenomenon to its economic roots
3. After giving context, pose a question to the user (multiple choice works well)
4. Always end with a thread to pull — somewhere for the user to go next
5. Connect the past to the present: why does this era resonate TODAY?

CAUSE & EFFECT CHAIN (your internal map):
Plaza Accord (1985) → yen appreciates → Bank of Japan cuts rates → cheap money floods market → land and stock prices surge → wealth effect → consumer spending explodes → City Pop, anime boom, luxury fashion, real estate speculation → policy tightening (1989–1990) → asset prices collapse (1991) → The Lost Decade

ENTRY POINT AWARENESS:
- If user entered via Music: start with a song or artist, get to economics gradually
- If user entered via Anime: start with a film or studio, connect to media investment
- If user entered via Aesthetic: start with a visual or brand, connect to consumer spending
- If user entered via Economy: start with numbers, bring in cultural examples
- If user entered via Daily life: start with a scene or feeling, connect to structural forces

LANGUAGE:
Use: "Here's what made this possible...", "Think about it this way...", "This is where it gets interesting.", "The money had to go somewhere."
Avoid: academic phrasing, passive voice, "it should be noted", "in conclusion"

Keep responses concise — 3 to 5 short paragraphs maximum. Always end with either a question for the user or 2–3 suggested threads to explore next.`;

/* ── Key management ── */

function getApiKey() {
  return localStorage.getItem("BTM_ANTHROPIC_KEY") || "";
}

function setApiKey(key) {
  localStorage.setItem("BTM_ANTHROPIC_KEY", key.trim());
}

function hasApiKey() {
  return Boolean(getApiKey());
}

/* ── Build the opening user message for an entry point ── */

function buildInitialPrompt(year, entryPoint) {
  const entryLabel = {
    music:      "Music",
    anime:      "Anime",
    aesthetic:  "Aesthetic / Visual culture",
    economy:    "Economy",
    "daily-life": "Daily life",
  }[entryPoint] || entryPoint;

  return `The user just arrived at the Bubble Time Machine website. The current year selected is ${year}. They entered through the "${entryLabel}" entry point. Send your opening message — start with a hook or surprising question related to their entry point and this year. Do not introduce yourself. Just start with the hook.`;
}

/* ── Core API call ── */

async function callAnthropic(messages) {
  const key = getApiKey();
  if (!key) {
    throw new Error("NO_KEY");
  }

  const response = await fetch(ANTHROPIC_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": key,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 1024,
      system: SYSTEM_PROMPT,
      messages,
    }),
  });

  if (!response.ok) {
    const err = await response.json().catch(() => ({}));
    const msg = err?.error?.message || `HTTP ${response.status}`;
    throw new Error(msg);
  }

  const data = await response.json();
  return data.content[0].text;
}

/* ── Send initial message (entry point selected) ── */

async function sendInitialMessage(year, entryPoint) {
  const userPrompt = buildInitialPrompt(year, entryPoint);
  return callAnthropic([{ role: "user", content: userPrompt }]);
}

/* ── Send follow-up (user replied) ── */

async function sendFollowUp(conversationHistory) {
  // conversationHistory is an array of { role: "user"|"assistant", content: string }
  return callAnthropic(conversationHistory);
}
