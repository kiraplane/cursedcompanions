import type { DataSource, GameFact, KeywordMatrixItem } from './types';

export const checkedAt = '2026-06-15';

export const siteFacts = {
  siteName: 'The False Sun',
  domain: 'https://www.thefalsesun.wiki',
  canonicalHost: 'www.thefalsesun.wiki',
  gameName: 'The False Sun',
  creator: 'Oniray',
  officialItchUrl: 'https://oniray.itch.io/the-false-sun',
  supportEmail: 'hello@thefalsesun.wiki',
  officialCoverImage:
    'https://img.itch.zone/aW1nLzI3NTUxNjgxLmpwZw==/original/96%2Fy%2FZ.jpg',
  officialHeroImage:
    'https://img.itch.zone/aW1nLzI3NTY2NDg0LmpwZw==/original/X6dXMg.jpg',
  browserGameUrl: 'https://s.thefalsesun.org/games/the-false-sun/index.html',
  genre: 'Visual novel',
  releaseSnapshot:
    'Released visual novel on itch.io; official page showed Windows, macOS, Linux, Android, and included 1.0 files when checked on 2026-06-15. The play page lets visitors start the game online before reading route spoilers.',
  positioning:
    'A lightweight, spoiler-marked play-online, walkthrough, and all endings guide for players stuck on routes, mini-games, and Ending 20.',
} as const;

export const gameFacts: GameFact[] = [
  {
    label: 'Game type',
    value:
      'Mature visual novel with romance, horror, cozy farm scenes, and route choices.',
  },
  {
    label: 'Known platforms',
    value:
      'Web browser on this site, plus Windows, macOS, Linux, and Android on the official itch.io page.',
  },
  {
    label: 'Main guide topics',
    value:
      'All endings, Ending 20, Silas route, Kyle route, mini-games, and safe download questions.',
  },
  {
    label: 'Content policy',
    value:
      'Spoiler-heavy walkthroughs are allowed; explicit adult material, unsafe APKs, and copied game text are not.',
  },
];

export const contentWarnings = [
  'Mature-audience game',
  'Physical and emotional violence',
  'Disturbing themes',
  'Flashing visual effects',
  'Sudden or loud sound effects',
  'Spoilers on walkthrough pages',
];

export const sources: DataSource[] = [
  {
    type: 'official',
    label: 'Official itch.io page',
    url: siteFacts.officialItchUrl,
    checkedAt,
    confidence: 'high',
    note: 'Used for title, creator, platform list, mature content warnings, genre tags, and download direction.',
  },
  {
    type: 'community',
    label: 'itch.io comment demand',
    url: 'https://oniray.itch.io/the-false-sun#comments',
    checkedAt,
    confidence: 'medium',
    note: 'Recent players asked about Ending 20, all endings, mini-game failures, Mac launch friction, iOS support, and language selection.',
  },
  {
    type: 'youtube',
    label: 'Hello Yinny English all endings video',
    url: 'https://www.youtube.com/watch?v=AoA1yeeLoKQ',
    checkedAt,
    confidence: 'medium',
    note: 'Recent English all-endings video with chaptered ending names; used as a route cross-check, not as transcript material.',
  },
  {
    type: 'youtube',
    label: 'ritsu all endings part 1',
    url: 'https://www.youtube.com/watch?v=phQ-IF0zPGg',
    checkedAt,
    confidence: 'medium',
    note: 'Russian all-endings walkthrough part 1 used only for community cross-checking route families.',
  },
  {
    type: 'transcript',
    label: 'PVpgRF8nC1M all endings transcript',
    url: 'https://sozai.app/transcript/he-just-wanted-love-finale-endings/',
    checkedAt,
    confidence: 'medium',
    note: 'Russian YouTube transcript used only as cross-check material for route order and ending clues.',
  },
  {
    type: 'transcript',
    label: '9iG-Ho_Uas8 walkthrough transcript',
    url: 'https://sozai.app/transcript/nashe-poslednee-leto-vmeste-false-sun-walkthrough/',
    checkedAt,
    confidence: 'medium',
    note: 'Russian YouTube transcript kept as older route cross-check material; current Ending 20 guidance now prioritizes live itch.io tutorial-fail reports.',
  },
];

export const keywordMatrix: KeywordMatrixItem[] = [
  {
    keyword: 'the false sun all endings',
    intent: 'Find every ending and avoid missing gallery slots.',
    route: '/all-endings',
    priority: 'P0',
    status: 'keep',
    evidence:
      'itch comments and YouTube transcripts both focus on all endings.',
    notes:
      'Primary page; label route notes as unofficial until each branch is replay-verified.',
  },
  {
    keyword: 'the false sun ending 20',
    intent: 'Solve the most confusing missing ending.',
    route: '/ending-20',
    priority: 'P0',
    status: 'keep',
    evidence: 'Recent itch comments ask how to get Ending 20.',
    notes:
      'Opening tutorial / farm-task fail branch; include community-verification caveat and retry advice.',
  },
  {
    keyword: 'the false sun itch io',
    intent:
      'Find the official itch.io page, included files, platform status, and safe download path.',
    route: '/itch-io',
    priority: 'P0',
    status: 'keep',
    evidence:
      'GSC 7D showed 4,498 impressions for "the false sun itch io" with 1.2% CTR; official itch page is the safest answer.',
    notes:
      'Use a dedicated bridge page so the homepage and download guide do not have to change title intent.',
  },
  {
    keyword: 'itch io the false sun',
    intent:
      'Reach the creator page while avoiding unrelated search results and unsafe mirrors.',
    route: '/itch-io',
    priority: 'P0',
    status: 'keep',
    evidence: 'GSC 7D showed 302 impressions for "itch io the false sun".',
    notes:
      'Fold this into the same itch.io bridge page rather than creating a second near-duplicate route.',
  },
  {
    keyword: 'the false sun walkthrough',
    intent: 'General route help for stuck players.',
    route: '/guides',
    priority: 'P0',
    status: 'keep',
    evidence: 'SERP contains walkthrough and all-endings videos/transcripts.',
    notes: 'Homepage and guide index should answer this query quickly.',
  },
  {
    keyword: 'the false sun puzzle',
    intent:
      'Find route-state and puzzle-like scene help without replaying from the start.',
    route: '/save-points',
    priority: 'P1',
    status: 'keep',
    evidence:
      'GSC 7D showed puzzle impressions alongside walkthrough and guide queries.',
    notes:
      'Use a save-points page instead of pretending the game has a traditional puzzle database.',
  },
  {
    keyword: 'the false sun save points',
    intent:
      'Plan saves before farm tasks, road/water choices, and late Silas branches.',
    route: '/save-points',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Derived from GSC walkthrough/puzzle behavior and all-endings cleanup needs.',
    notes:
      'Supports the all-endings page without changing its title or description.',
  },
  {
    keyword: 'play the false sun online',
    intent: 'Launch the browser version before reading route spoilers.',
    route: '/play-online',
    priority: 'P0',
    status: 'keep',
    evidence: 'Dedicated browser-play demand is covered by the play page.',
    notes:
      'Use a mature-content launch gate and strong links to endings and download guidance.',
  },
  {
    keyword: 'the false sun silas route',
    intent: 'Route choices centered on Silas.',
    route: '/silas-route',
    priority: 'P1',
    status: 'keep',
    evidence: 'Community reactions and videos focus heavily on Silas outcomes.',
    notes: 'Spoiler-marked route guide, not a character wiki page.',
  },
  {
    keyword: 'the false sun he let you go',
    intent: 'Reach a specific calmer Silas ending branch.',
    route: '/he-let-you-go',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Current English all-endings video chapters include the ending name, and GSC shows Silas/endings demand.',
    notes:
      'Dedicated route page is safer than changing the existing Silas route title.',
  },
  {
    keyword: 'the false sun silas ending',
    intent:
      'Find specific Silas ending outcomes instead of the broad route hub.',
    route: '/he-let-you-go',
    priority: 'P1',
    status: 'keep',
    evidence:
      'GSC 7D showed 264 impressions for "the false sun silas" and related ending queries.',
    notes:
      'Use the broad Silas route for route families and this page for one named ending branch.',
  },
  {
    keyword: 'the false sun kyle route',
    intent: 'Find Kyle-related endings and safer route outcomes.',
    route: '/kyle-route',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Walkthrough transcript and community comments mention Kyle route outcomes.',
    notes: 'Smaller page than Silas, but useful for ending grouping.',
  },
  {
    keyword: 'the false sun mini games',
    intent:
      'Understand farm chores, tutorial mistakes, QR code, and skip questions.',
    route: '/mini-games',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Players mention mini-game difficulty and skip demand in comments.',
    notes:
      'Include safe advice only; do not provide modded clients or APK workarounds.',
  },
  {
    keyword: 'the false sun download android mac',
    intent: 'Find official download and troubleshoot platform availability.',
    route: '/download',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Official itch page lists Android/macOS/Windows/Linux; comments ask platform questions.',
    notes: 'Official itch link first; avoid APK mirrors.',
  },
  {
    keyword: 'the false sun скачать',
    intent:
      'Download The False Sun safely from official files while avoiding APK mirrors.',
    route: '/download',
    priority: 'P0',
    status: 'keep',
    evidence:
      'GSC 7D showed 481 impressions and 167 clicks for the Russian download query, mostly landing on /download.',
    notes:
      'Answer in safe download language; do not create mirror, cracked APK, or unofficial file instructions.',
  },
  {
    keyword: 'the false sun apk',
    intent:
      'Find whether Android is supported without using unsafe third-party APK sites.',
    route: '/download',
    priority: 'P1',
    status: 'keep',
    evidence:
      'GSC 7D showed APK demand and the official itch.io page lists an Android file.',
    notes:
      'Use official Android file guidance and explicitly warn away from mirrors.',
  },
  {
    keyword: 'the false sun language english',
    intent:
      'Switch the game interface from Russian to English after launching or downloading.',
    route: '/download',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Recent itch.io comments ask why the game opens in Russian and answer that the setting can be changed to English.',
    notes:
      'Keep this as a FAQ/support answer rather than a separate page until GSC shows standalone language-query volume.',
  },
  {
    keyword: 'the false sun book fandom',
    intent: 'Different work by R. Scott Bakker.',
    route: '/',
    priority: 'P2',
    status: 'ignore',
    evidence: 'Search results mix with Second Apocalypse wiki and Goodreads.',
    notes:
      'Do not build pages for the book/comic; mention this site covers the Oniray game only.',
  },
];
