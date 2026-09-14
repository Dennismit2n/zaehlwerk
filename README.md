# Zählwerk 📊

**Where does your Claude Code usage actually go?** Pick a folder, and Zählwerk reads the logs Claude Code writes on your own machine — then breaks the numbers down by day, model, project, week and hour.

![Browser](https://img.shields.io/badge/Runs-in%20your%20browser-a3e635) ![No upload](https://img.shields.io/badge/Logs-never%20uploaded-4d7c0f) ![Languages](https://img.shields.io/badge/Languages-14-65a30d) ![Licence](https://img.shields.io/badge/Licence-MIT-6ee7b7)

**→ [dennismit2n.github.io/zaehlwerk](https://dennismit2n.github.io/zaehlwerk/)** · [Deutsche Fassung dieser Datei](README.de.md)

---

## What it does — and what it does not

| | |
|---|---|
| 📊 **Counts what was actually used** | Input, output and newly cached context, added up per day, model, working folder, Git branch, week and hour of day. |
| 🧮 **Counts each reply exactly once** | A single reply appears several times in the logs — once per block it consists of (thinking, text, tool call), and *each* of those lines carries the full accounting. Adding them up naively roughly doubles every figure. Zählwerk de-duplicates by `message.id`. |
| 🔍 **Separates re-read context** | Around 96 % of all counted tokens are conversation that gets counted again with every follow-up question. That number grows with session length, not with your work, so it is shown *beside* the total — never inside it. |
| 🚫 **No percentage of your limit** | Your remaining allowance is not in these files. Zählwerk can only count what has been spent. |
| 🚫 **No cost figure** | The logs contain no prices, and on a subscription Claude Code costs nothing extra. Any amount would be invented. |
| 🚫 **Claude Code only** | What you do on claude.ai in the browser leaves no logs on disk and therefore does not appear here. |

## Getting started

1. Open **[the tool](https://dennismit2n.github.io/zaehlwerk/)**
2. Pick the folder — Windows `%USERPROFILE%\.claude\projects`, otherwise `~/.claude/projects`. It is hidden, so type the path straight into the file dialog's address bar.
3. That's it. Every section has a **?** explaining how to read it.

## Privacy

Your logs are **read, not sent**. There is no server that could receive them: the page is static, and the analysis runs entirely in your browser.

You do not have to take that on trust — it is checkable:

- `grep` over the source for `fetch`, `XMLHttpRequest`, `WebSocket` and `navigator.sendBeacon` finds **zero** hits in `js/app.js` and `js/auswertung.js`
- there are no external scripts, no CDN, no font loaded from elsewhere
- open the developer tools, watch the network tab, drop your folder in: apart from the page itself and the visitor counter, nothing goes out

One thing is worth knowing: these log files contain **every word of every conversation**. Zählwerk reads only the accounting lines and never displays conversation content — but the files are sensitive, and you should know that before handing them to any tool, including this one.

Visitor counting uses **GoatCounter** — anonymous, no cookies, `count.js` served from this repository. That is the one request that does leave, and it carries no information about your files.

## Under the hood

Static page, no build step, no dependencies.

| File | Lines | Purpose |
|---|---:|---|
| `js/auswertung.js` | 321 | the maths — runs in the browser and under Node, so it can be tested against real files |
| `js/app.js` | 499 | reading files, progress, drawing every view |
| `js/i18n.js` | 1177 | 14 languages, 90 keys each, more where the language needs its own plural forms |
| `css/style.css` | 369 | light and dark, one variable set each |
| `index.html` | 282 | structure with `data-i18n` hooks |

Quantities use `Intl.PluralRules`, numbers and percentages `Intl.NumberFormat` — so Russian gets `1 ответ / 2 ответа / 5 ответов` and `1 500`, while English gets `1 reply / 2 replies` and `1,500`.

**The log format is not documented by Anthropic.** If it changes, this tool will show too little or nothing at all. That is the price of reading files nobody promised would stay the same.

## Languages

Deutsch · English · Español · Français · Italiano · Nederlands · Polski · Português · Türkçe · Русский · हिन्दी · 中文 · 日本語 · 한국어

Some translations are machine-generated. Corrections are very welcome — open an issue or a pull request.

## Licence

MIT — see [LICENSE](LICENSE). Use it, read it, fork it, improve it.

---

Zählwerk is a personal tool and is **not affiliated with Anthropic**. "Claude" is a trademark of Anthropic PBC.

Part of the [workshop](https://dennismit2n.github.io/) by Dennis_mit_2n.
