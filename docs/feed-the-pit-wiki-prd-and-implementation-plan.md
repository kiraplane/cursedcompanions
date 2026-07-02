# Feed The Pit Wiki PRD And Implementation Plan

目标站点：Feed The Pit

目标域名：https://www.feedthepit.wiki

检查日期：2026-07-02

## 1. 结论

Feed The Pit 是一个刚上线的薄数据新游站点，不适合首发就做完整数据库、codes 页或 tier list。首发应该做 14 个高意图英文核心 URL：homepage、play online、guides、cards、monsters、walkthrough、Act 1、ending、achievements、rendering fixes、Steam、download、itch.io、Discord、mobile safety、disclaimer/legal。

需求里同时给了 Steam 官方页和 mooncrustgames itch 页面。调研确认这不是同一个版本：Steam 是 Curious Fox Sox 的 story-driven investigative horror；itch 是 mooncrustgames 的 HTML5 dark incremental。站点必须把两者区分清楚：Steam 作为主攻略对象，`/play-online` 作为已授权自托管 browser companion 页面。

## 2. 主要来源

- Steam store: https://store.steampowered.com/app/3278290/Feed_The_Pit/
- Steam Community: https://steamcommunity.com/app/3278290
- Steam achievements: https://steamcommunity.com/stats/3278290/achievements/
- itch browser build: https://mooncrustgames.itch.io/feed-the-pit
- Curious Fox Sox YouTube: https://www.youtube.com/@CuriousFoxSox
- Official Act 1 trailer: https://www.youtube.com/watch?v=tE6LWsWcoJ4
- Walkthrough/ending source lead: https://www.youtube.com/watch?v=ujGtbuhPpo8
- Ending source lead: https://www.youtube.com/watch?v=MFydx2AjAdg

Serper/DataForSEO key was not present in environment or project `.env`, so long-tail discovery used Google suggest fallback, normal web search, Steam, YouTube, and official pages.

## 3. Keyword Matrix

| Keyword | Intent | Route | Priority | Status | Evidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| Feed The Pit | Head term | `/` | P0 | keep | Steam official result; Google suggest exact term | Homepage as compact wiki hub |
| Feed The Pit wiki | Structured guide hub | `/` | P0 | keep | User requirement; SERP gap | Create wiki-style homepage, not thin landing |
| Feed The Pit guide | General help | `/guides` | P0 | keep | Steam Community/YouTube walkthrough demand | Guide index owns broad intent |
| Feed The Pit play online | Browser play | `/play-online` | P0 | keep | User requirement; itch HTML5 build | Self-host authorized mooncrustgames build |
| Feed The Pit game | What/where to play | `/` | P0 | keep | Google suggest | Homepage and Steam section answer |
| Feed The Pit Steam | Official purchase/release | `/steam` | P0 | keep | Google suggest; Steam page | Include Act 1/future acts/platform |
| Feed The Pit download | Safe install | `/download` | P0 | keep | Google suggest | Steam + authorized browser only |
| Feed The Pit release date | Launch status | `/steam` | P1 | keep | Google suggest; Steam lists Jun 30, 2026 | Fold into Steam page |
| Feed The Pit beginner guide | First run | `/guides/beginner-guide` | P0 | keep | Guide demand + launch videos | Spoiler-light article |
| Feed The Pit cards | Core mechanic | `/cards` | P1 | keep | Steam centers magical card questions | Mechanic guide, no fake database |
| Feed The Pit monsters | Survival | `/monsters` | P1 | keep | Steam says each mission has a new monster | Behavior-reading guide |
| Feed The Pit walkthrough | Route | `/walkthrough` | P1 | keep | Multiple launch-week YouTube walkthroughs | Spoiler-light route |
| Feed The Pit Act 1 | Current content boundary | `/guides/act-1-walkthrough` | P1 | keep | Steam says Act 1 launch, Acts 2/3 later | Standalone guide |
| Feed The Pit ending | Ending/search spoilers | `/guides/ending-guide` | P1 | keep | YouTube ending titles | Spoiler-aware page |
| Feed The Pit achievements | Completion | `/guides/achievements` | P1 | keep | Steam lists 11 achievements | Visible names/descriptions only |
| Feed The Pit black screen | Technical fix | `/guides/rendering-fixes` | P1 | keep | Steam Community rendering thread; Vulkan requirement | Safety/help page |
| Feed The Pit Discord | Community | `/discord` | P1 | keep | Steam Discord link; Curious Fox Sox social snippets | Official-link safety |
| Feed The Pit itch.io | Browser build context | `/itch-io` | P1 | keep | User requirement; itch page | Explain creator/version difference |
| Feed The Pit mobile | Mobile/APK status | `/mobile` | P2 | watch | No official mobile found | Safety page |
| Feed The Pit codes | Redeem codes | none | P2 | ignore | No code system in official sources | Do not publish codes page |
| Feed The Pit tier list | Ranking | none | P2 | watch | No stable data/demand | Cards/monsters first |
| feed the pit duck game | Ambiguous/unrelated | none | P2 | ignore | Google suggest unrelated variants | Avoid off-target traffic |

## 4. Competitor / Reference Benchmark

| Source | Useful pages/signals | What to match | What to improve |
| --- | --- | --- | --- |
| Steam store | Official title, date, Act 1 status, tags, requirements, screenshots | Correct facts and media | Add player decision routes and safe download explanation |
| Steam Community | Walkthrough videos, achievements, rendering issue threads | Current launch questions | Turn scattered discussions into focused guides |
| YouTube launch videos | Walkthrough and ending demand | Use thumbnails/video embeds where useful | Write original guide logic instead of transcript-style pages |
| mooncrustgames itch | Browser game data, screenshots, HTML5 build | Play-online page and screenshots | Make version/creator distinction explicit |
| kingshotguide | Mature guide/video pattern | Video-supported articles with internal links | Avoid template repetition; fit Feed The Pit mechanics |

No mature Feed The Pit wiki competitor was found. This creates a first-mover opportunity, but also means the site should avoid unsupported databases until GSC/search data arrives.

## 5. Implemented Page Set

- `/`
- `/play-online`
- `/guides`
- `/guides/beginner-guide`
- `/cards`
- `/monsters`
- `/walkthrough`
- `/guides/act-1-walkthrough`
- `/guides/ending-guide`
- `/guides/achievements`
- `/guides/rendering-fixes`
- `/steam`
- `/download`
- `/itch-io`
- `/discord`
- `/mobile`
- `/disclaimer`, `/privacy`, `/terms`, `/cookie`

## 6. Implementation Notes

- Renamed project identity from Orb of Creation to Feed The Pit across data, components, route group, metadata, sitemap, manifest, canonical URL, README, and Cloudflare worker config.
- Replaced `src/data/orbofcreation` with `src/data/feedthepit`.
- Replaced `src/components/orbofcreation` with `src/components/feedthepit`.
- Replaced old `/spells`, `/research`, `/rituals` routes with `/cards`, `/monsters`, `/walkthrough`.
- Downloaded Steam screenshots and itch screenshots into `public/feedthepit/`.
- Self-hosted the authorized itch HTML5 build under `public/games/feed-the-pit/`.
- Removed old Orb of Creation Unity build, API routes, public assets, and PRD.
- Updated homepage modules, wiki sidebar, mobile menu, guide cards, related links, sitemap, manifest, nav, footer, and redirect rules.

## 7. Open Operational Tasks

- Create GitHub repo `feedthepit` and push after validation.
- Deploy Cloudflare Worker `feedthepit` and bind `feedthepit.wiki` / `www.feedthepit.wiki` if CLI credentials are available.
- Create GA property if authenticated GA tooling is available.
- Submit sitemap after production URL returns 200.
