# Bubble Time Machine

An interactive educational website exploring Japan's bubble economy era (1985–1991) through music, anime, aesthetics, economics, and daily life.

---

## What is this?

Japan's bubble economy is one of the most culturally rich and economically instructive periods in modern history. This project makes that era accessible — not through dry statistics, but through the cultural phenomena it produced: City Pop, Akira, luxury department stores, the Nikkei at 38,915, and the midnight taxis nobody checked the meter on.

Each of the five entry points contains **20 deep-dive sections** covering historical, cultural, and economic facts — 100 sections in total.

---

## Topics

| Entry Point | What it covers |
|-------------|----------------|
| 🎵 Music | City Pop origins, FM radio, Tatsuro Yamashita, Mariya Takeuchi, the YouTube revival |
| 📺 Anime | The OVA revolution, Akira's ¥1.1B budget, Studio Ghibli's founding, cel animation |
| 🏙️ Aesthetic | DC brands, department store culture, luxury obsession, Harajuku, postmodern architecture |
| 💹 Economy | Plaza Accord, yen appreciation, land prices, Nikkei crash, the Lost Decade |
| 🏠 Daily Life | Salaryman culture, expense accounts, midnight taxis, the housing crisis, memory |

---

## Features

- **Year selector** (1985–1991) — each year has its own hero text capturing the mood
- **Causal chain sidebar** — visualizes how the Plaza Accord led to the Lost Decade
- **Section navigation** — arrow buttons or ← → keyboard shortcuts
- **Reading progress bar** — tracks how far through each topic you are
- **Progress dashboard** — saves your reading progress to localStorage, with export/import for cross-device use

---

## Running locally

No build step required. Just open `index.html` in a browser.

```bash
git clone https://github.com/your-username/bubble-time-machine.git
cd bubble-time-machine
open index.html
```

Or serve it with any static file server:

```bash
npx serve .
```

---

## Tech stack

- Vanilla HTML, CSS, JavaScript — no frameworks
- [Lato](https://fonts.google.com/specimen/Lato) via Google Fonts
- freeCodeCamp design palette
- `localStorage` for progress persistence

---

## File structure

```
index.html        — full SPA structure
style.css         — design system and layout
app.js            — year switcher, section navigation, progress tracking
data/content.js   — all content: CONTENT, ENTRY_POINTS, ENTRY_SECTIONS
```

---

## Support

If you find this useful, consider supporting [freeCodeCamp](https://www.freecodecamp.org/donate/) — the design system this project is built on.

---

## License

Copyright © 2014 [freeCodeCamp.org](https://www.freecodecamp.org)

The content of this repository is bound by the following licenses:

- The computer software is licensed under the [BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause) license.
- The curriculum content is copyright © 2014 [freeCodeCamp.org](https://www.freecodecamp.org)
