# Cursed Companions Wiki PRD 与实施计划

更新日期：2026-07-10  
项目：`cursedcompanions`  
网站名：Cursed Companions Wiki  
主域名：`https://www.cursedcompanions.wiki`  
GitHub / Cloudflare Worker：`cursedcompanions`

## 1. 目标与边界

将现有 Esports Manager 2026 模板彻底改造成只服务 Cursed Companions 的英文攻略站。首页承接 `cursed companions` 与 `cursed companions wiki`，并通过信息密集的 hub、分组侧栏和移动 Wiki Menu，把用户送到怪物、禁词/咒语、麦克风修复、模式、codes、复活、玩家人数、平台和 1.0/Act III 页面。

内容必须遵守以下边界：

- 只写 Cursed Companions，不混入其他同名 companion、诅咒系统或模板游戏。
- 不造完整怪物库；只列官方公开并可核验的名字、触发和应对。
- 不做无机制依据的 tier list、角色排名或 reroll 页。
- 不把 YouTube 字幕改写成文章；视频只用于版本、视觉和玩法交叉验证。
- 不提供 APK、crack、key generator、cheat、script、modified client 或危险下载。
- codes 必须区分“官方曾发布”和“本轮已在游戏内实测”。

## 2. 当前游戏事实

- 开发/发行：Crimson Forge Studios。
- Early Access：2025-11-20。
- Version 1.0 / Full Release：2026-07-09。
- 当前官方平台：Windows PC / Steam。
- 普通 Co-op：最多 8 人；Traitor Mode：最多 16 人；Steam 同时列出 Single-player。
- 核心机制：全队语音是共享输入；每人有 forbidden words，任何队友说出都可能造成伤害；正确短语可点火、解除陷阱、治疗或处理怪物。
- 1.0 内容：Act III、Jester、10 个新增 creatures、65 个 dungeon rooms、4 个 outdoor maps、7 件 equipment、15 个 cosmetics、更多 achievements。

## 3. 调研方法与 API 结果

### Serper 平衡发现

2026-07-10 使用工作区 Serper key，仅消耗 2 credits：

1. `cursed companions` autocomplete：1 credit。
2. `cursed companions` related searches / PAA：1 credit。

没有对每个长尾再做 Serper SERP 验证，后续只用普通搜索、官方 Steam/FAQ/公告、YouTube API、Reddit/Steam Community 和人工判断验证高价值词。

有效 autocomplete：

- `cursed companions how many players`
- `cursed companions steam`
- `cursed companions codes`
- `cursed companions monsters`
- `cursed companions redeem codes`
- `cursed companions monsters list`
- `cursed companions ps5`
- `cursed companions words list`
- `cursed companions max players`

有效 related/PAA：

- `Cursed Companions cost`
- `Cursed Companions monsters`
- `Cursed Companions game`
- `Cursed companions codes`
- `Cursed companions wiki`
- `Cursed Companions Discord`
- `Where can I download Cursed Companions?`

### YouTube 决策表

| Video / source | Search intent | Action | Target page | Reason |
| --- | --- | --- | --- | --- |
| Official Version 1.0 trailer `K5XnfqoBXfU` | release / Act III | `expand` | `/`, `/release-date`, `/guides/act-3-monsters-jester` | 官方、版本最新、包含 1.0 视觉 |
| Official latest gameplay `S6VuGgDA6OM` | beginner / how to play | `expand` | `/guides/beginner-guide` | 官方 gameplay 概览，适合新手页 |
| Mr. Fruit `8w_ZSiVpo2c` | communication chaos / modes | `expand` | `/guides/traitor-mode` | 高互动玩家视角，帮助解释语音混乱，但不当事实主来源 |
| Grizzy `WoKeWES4EQI` | forbidden words | `expand` | `/guides/words-list-spells` | 明确匹配禁词搜索意图 |
| YouTube `Cursed Companions Endless Mode guide` | Endless | `watch` | `/guides/endless-mode` | 搜索结果漂移严重，当前用官方公告写 manual-data guide |

## 4. 关键词矩阵

| Keyword | Intent | Route | Priority | Status | Evidence / notes |
| --- | --- | --- | --- | --- | --- |
| cursed companions | head term | `/` | P0 | keep | 用户需求、Steam、官网、Serper |
| cursed companions wiki | wiki hub | `/` | P0 | keep | 用户需求、Serper related |
| cursed companions guide | guide browse | `/guides` | P0 | keep | Web / YouTube guide intent |
| cursed companions beginner guide | first run | `/guides/beginner-guide` | P0 | keep | YouTube API + 正常攻略需求 |
| cursed companions monsters | identify/counter | `/monsters` | P0 | keep | Serper autocomplete/related + 官方资料 |
| cursed companions monsters list | database-like scan | `/monsters` | P0 | keep | Serper autocomplete；做已核验列表，不冒充完整 codex |
| cursed companions words list | voice commands | `/guides/words-list-spells` | P0 | keep | Serper autocomplete + 官方核心机制 |
| cursed companions microphone not working | troubleshooting | `/guides/microphone-not-working` | P0 | keep | 官方 FAQ 与 Steam Community 问题面 |
| cursed companions how many players | lobby size | `/how-many-players` | P0 | keep | Serper autocomplete + Steam |
| cursed companions max players | lobby size | `/how-many-players` | P0 | keep | 同意图 canonical 合并 |
| cursed companions codes | cosmetic code | `/codes` | P0 | keep | Serper + 官方 launch post |
| cursed companions redeem codes | redeem workflow | `/codes` | P0 | keep | Serper + 官方 FAQ |
| cursed companions act 3 | current update | `/guides/act-3-monsters-jester` | P0 | keep | 1.0 正式发布 |
| cursed companions endless mode | mode workflow | `/guides/endless-mode` | P1 | keep | 官方规则、保存与 Soul Potion |
| cursed companions traitor mode | social deduction | `/guides/traitor-mode` | P1 | keep | 官方商店/press kit |
| cursed companions respawn dice | revive workflow | `/guides/respawn-revive` | P1 | keep | 官方 2026-06 更新 |
| cursed companions steam/download | purchase/install | `/download` | P0 | keep | Serper / PAA / 官方 Steam |
| cursed companions discord | community | `/discord` | P1 | keep | Serper + 官方站链接 |
| cursed companions ps5/xbox | platform status | `/platforms` | P1/P2 | watch | 有需求、无官方 console listing；集中回答现状 |
| cursed companions steam deck | compatibility | `/steam-deck` | P1 | keep | 官方 FAQ 有 community workaround，但不官方支持 |
| cursed companions tier list | ranking | `none` | P3 | ignore | 无对应玩法或数据依据 |
| cursed companions apk/crack/cheats | unsafe | `/download` | P3 | ignore | 只给官方 Steam 安全页 |

## 5. 一词一页覆盖

- Head/wiki：homepage 承接，不拆近义页。
- guide/tips：`/guides` + `/guides/beginner-guide`。
- monsters / monsters list：统一 `/monsters`，避免两张重复表。
- words / spells / voice commands：`/guides/words-list-spells`。
- mic / voice detection / curse not triggering：`/guides/microphone-not-working`。
- how many players / max players：统一 `/how-many-players`。
- codes / redeem codes：统一 `/codes`。
- PS5 / Xbox / Mac：统一 `/platforms`，作为 current status，不制造端口承诺。
- Steam / download：统一 `/download`。

## 6. 竞品与产品面判断

当前没有成熟的独立 Cursed Companions wiki/database 可以直接作为页面广度标杆。

| 主要竞品/来源 | 已有数据 | 已有工具 | 已有攻略/入口 | 对本站判断 |
| --- | --- | --- | --- | --- |
| Official website / FAQ | 玩法、语言、mic、redeem、requirements | 无 | FAQ、press kit、社媒 | 事实主来源；本站把 FAQ 转为决策型页面 |
| Steam / announcements | monster、mode、item、release、codes | Achievements / store | News、Community、Guides 入口 | 本站做可索引的稳定 hubs 与一词一页覆盖 |
| SteamDB | 状态、历史、player charts | 动态 charts | store/community links | live 玩家数只做外链，不写死 evergreen 数值 |
| Gamepressure | 基础 game/platform 资料 | 无 | 基础 game profile | 深度不足，不作为事实主来源 |
| YouTube | 实况、语音混乱、官方 gameplay | 无 | 视频搜索与 creator 页面 | 只做 context/embed，不 transcript-spin |

### Must match

- Steam / 官网的准确 1.0、平台、玩家数、模式和语言信息。
- 官方 FAQ 的 mic、caption、reset voice detection、code redeem 和 Dungeon Seed 工作流。
- 官方公告的 Endless、Act III、Jester、Respawn Dice、Plan B 与 monsters。

### Can improve

- 把分散在新闻/FAQ 的信息组织成关键词对应的 landing pages。
- monster 表明确“已公开核验列表”，避免虚假完整库。
- codes 页区分官方曾发布与本轮实测。
- 通过首页、category hubs、sidebar、related next steps 分配内链。

### Needs confirmation later

- 自动抓取完整 monster/item/achievement database。
- live player tracker、interactive map、calculator、完整 spell phrase crawler。

## 7. 首发信息架构

Core hubs：

- `/`
- `/guides`
- `/monsters`
- `/modes`
- `/codes`

Focused guides：

- `/guides/beginner-guide`
- `/guides/words-list-spells`
- `/guides/microphone-not-working`
- `/guides/act-3-monsters-jester`
- `/guides/endless-mode`
- `/guides/traitor-mode`
- `/guides/respawn-revive`
- `/how-many-players`
- `/platforms`
- `/steam-deck`
- `/download`
- `/discord`
- `/release-date`

Legal：

- `/disclaimer`
- `/privacy`
- `/terms`
- `/cookie`

## 8. 设计方向

从官方 1.0 capsule、press-kit logo 与截图提取：

- 背景深海青：`#061313`
- 卡片青黑：`#0C2222`
- 边框：`#28484A`
- 诅咒洋红：`#FF3D78`
- 法术绿：`#7CFF6B`
- 幽灵紫：`#D989FF`
- 主文字：`#F7F2DF`
- 次文字：`#C4D7CF`

首页首屏为紧凑双栏：左侧 H1、核心 CTA、短 quick links；右侧官方 1.0 trailer。首屏下方立即出现 4 个入口 panels。桌面右侧固定分组 sidebar，默认折叠，当前组自动展开；移动端替换为 compact Wiki Menu。

## 9. 数据与实现

数据层：`src/data/cursedcompanions/`

- `types.ts`
- `sources.ts`
- `guides.ts`
- `monsters.ts`
- `modes.ts`
- `codes.ts`
- `localized.ts`

页面层：`src/app/[locale]/(cursedcompanions)/`

- dynamic guide details with Article + BreadcrumbList schema
- guides/monsters/modes hubs with ItemList schema
- homepage with WebSite + Organization + VideoGame + VideoObject schema
- canonical/hreflang through `constructMetadata`
- sitemap/robots/manifest/navigation/footer/redirects

## 10. 发布清单

1. `pnpm lint`
2. `pnpm exec tsc --noEmit`
3. `pnpm next:build`
4. `pnpm build`
5. 本地检查首页、guides、monsters、modes、codes、长标题 guide、sitemap、robots。
6. 创建 GitHub repo `cursedcompanions` 并 push `main`。
7. 部署 Cloudflare Worker `cursedcompanions`，绑定 apex 与 `www`，canonical 使用 `www`。
8. 尝试关联 Cloudflare GitHub automatic builds。
9. 在 GA4 创建 `cursedcompanions.wiki` property 与 `https://www.cursedcompanions.wiki` web stream，回写 measurement ID 和 GA-GTM registry。

## 11. 已知上线风险

- 游戏刚在 2026-07-09 正式发布，post-launch hotfix 会快速改变 bug 与 balance；需要保留 checkedAt。
- `SLAYMYQUEEN` 有官方来源，但当前未重新进游戏测试；前台必须显示 source-checked wording。
- Steam Deck workaround 为社区贡献、官方 FAQ 收录，不等于 Verified/Supported。
- Cloudflare GitHub App、Google OAuth 或账号登录可能触发用户审批边界；其余步骤应自动完成。
