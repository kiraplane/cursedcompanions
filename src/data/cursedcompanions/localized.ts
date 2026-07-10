import type { Locale } from 'next-intl';
import { featuredGuides, getGuide, guides } from './guides';
import { gameFacts, keywordMatrix, siteDescription } from './sources';
import type { GameFact, Guide, GuideFaq } from './types';

export interface HomeContent {
  badge: string;
  metadataTitle: string;
  title: string;
  intro: string;
  primaryCta: string;
  secondaryCta: string;
  scopeNote: string;
  siteShapeEyebrow: string;
  siteShapeTitle: string;
  siteShapeBody: string;
  coreGuidesEyebrow: string;
  coreGuidesTitle: string;
  allGuidesButton: string;
  currentFactsTitle: string;
  findPageTitle: string;
  routeLabels: Record<string, string>;
  coreRouteItems: Array<{
    keyword: string;
    route: string;
    label: string;
    intent: string;
  }>;
  faq: GuideFaq[];
}

export interface GuidesIndexContent {
  badge: string;
  title: string;
  intro: string;
  readGuide: string;
  faq: GuideFaq[];
}

export interface GuideArticleUi {
  videoPrefix: string;
  videoSuffix: string;
  officialTitle: string;
  officialBody: string;
  officialLinkLabel: string;
  faqTitle: string;
  categoryLabels: Record<Guide['category'], string>;
  difficultyLabels: Record<Guide['difficulty'], string>;
}

export function getLocalizedGuide(slug: string, _locale?: Locale | string) {
  return getGuide(slug);
}

export function getLocalizedGuides(_locale?: Locale | string) {
  return guides;
}

export function getLocalizedFeaturedGuides(_locale?: Locale | string) {
  return featuredGuides;
}

export function getLocalizedSiteDescription(_locale?: Locale | string) {
  return siteDescription;
}

export function getLocalizedGameFacts(_locale?: Locale | string): GameFact[] {
  return gameFacts;
}

export function getHomeContent(_locale?: Locale | string): HomeContent {
  const coreRouteItems = keywordMatrix
    .filter(
      (item) =>
        (item.status === 'keep' || item.status === 'watch') &&
        item.route !== 'none'
    )
    .slice(0, 24)
    .map((item) => ({
      keyword: item.keyword,
      route: item.route,
      label: routeLabels[item.route] ?? item.route,
      intent: item.intent,
    }));

  return {
    badge: 'Version 1.0 • Act III live',
    metadataTitle: 'Cursed Companions Wiki - Monsters, Words, Codes and Guides',
    title: 'Cursed Companions Wiki',
    intro:
      'Use your voice without wiping the team. Find current monster counters, forbidden-word rules, spells, codes, mode routes, microphone fixes, respawns, and Act III help.',
    primaryCta: 'Start the beginner route',
    secondaryCta: 'Open monster list',
    scopeNote:
      'Checked July 10, 2026 against version 1.0, the official Steam page, developer FAQ, release posts, press kit, YouTube, and live long-tail demand.',
    siteShapeEyebrow: 'Launch route',
    siteShapeTitle:
      'Solve the communication problem before the monster problem',
    siteShapeBody:
      'Cursed Companions turns every microphone into a shared input. This guide hub routes each player job to one focused page: words, mic fixes, monsters, codes, player limits, Endless, Traitor, respawns, Act III, platforms, and safe downloads.',
    coreGuidesEyebrow: 'Latest and essential',
    coreGuidesTitle: 'Choose the guide by what is breaking your run',
    allGuidesButton: 'Browse every guide',
    currentFactsTitle: 'Current game snapshot',
    findPageTitle: 'Every high-intent route',
    routeLabels,
    coreRouteItems,
    faq: [
      {
        question: 'What is Cursed Companions?',
        answer:
          'It is a voice-controlled co-op comedy horror game where spoken phrases can cast spells, trigger monsters, or activate another player’s forbidden word.',
      },
      {
        question: 'How many players does Cursed Companions support?',
        answer:
          'Normal co-op supports up to 8 players and Traitor Mode supports up to 16. Single-player is also listed on Steam.',
      },
      {
        question: 'Is Act III available now?',
        answer:
          'Yes. Version 1.0 and Act III launched on July 9, 2026 with the Jester boss, new monsters, flooded areas, equipment, rooms, maps, cosmetics, and achievements.',
      },
      {
        question: 'Are there Cursed Companions codes?',
        answer:
          'The developer published SLAYMYQUEEN for launch skins. Our codes page labels it source-checked rather than pretending it was re-tested after every patch.',
      },
      {
        question: 'Is this the official game website?',
        answer:
          'This is an independent guide hub. Purchase and current support status should be confirmed through Steam and the Crimson Forge Studios website.',
      },
    ],
  };
}

export function getGuidesIndexContent(
  _locale?: Locale | string
): GuidesIndexContent {
  return {
    badge: `${guides.length} focused guides`,
    title: 'Cursed Companions Guides',
    intro:
      'Start with the first-run route, then open the exact system you need: forbidden words, mic recognition, Act III, Endless, Traitor, respawns, player limits, platforms, Steam Deck, official download, Discord, or full-release status.',
    readGuide: 'Read guide',
    faq: [
      {
        question: 'Which guide should a new team read first?',
        answer:
          'Read the beginner guide, then the words and microphone pages before entering a long run.',
      },
      {
        question: 'Are these guides current for version 1.0?',
        answer:
          'Yes. The launch set was checked on July 10, 2026 and includes Act III, Jester, Respawn Dice, Plan B, and the upgraded Spell Torch.',
      },
      {
        question: 'Why is there no tier list?',
        answer:
          'The game does not expose a supported unit or character ranking system that justifies a template tier list. This site focuses on real player workflows.',
      },
    ],
  };
}

export function getGuideArticleUi(_locale?: Locale | string): GuideArticleUi {
  return {
    videoPrefix: 'Walkthrough cross-check:',
    videoSuffix:
      'used for current visual context while the written route stays original.',
    officialTitle: 'Verify live status with official sources',
    officialBody:
      'Use Steam, the official Cursed Companions website, the developer FAQ, Steam announcements, and the official Discord for current purchase, patch, code, platform, and support status.',
    officialLinkLabel: 'Open Cursed Companions on Steam',
    faqTitle: 'Cursed Companions FAQ',
    categoryLabels: {
      Start: 'Start',
      Voice: 'Voice',
      Monsters: 'Monsters',
      Modes: 'Modes',
      Survival: 'Survival',
      Platform: 'Platform',
      Community: 'Community',
      Safety: 'Safety',
      Update: 'Update',
    },
    difficultyLabels: {
      Beginner: 'Beginner',
      Intermediate: 'Intermediate',
      Advanced: 'Advanced',
      Status: 'Status',
    },
  };
}

export const routeLabels: Record<string, string> = {
  '/': 'Cursed Companions Wiki',
  '/guides': 'All Guides',
  '/guides/beginner-guide': 'Beginner Guide',
  '/guides/words-list-spells': 'Words and Spells',
  '/guides/microphone-not-working': 'Microphone Fixes',
  '/guides/act-3-monsters-jester': 'Act III and Jester',
  '/guides/endless-mode': 'Endless Mode',
  '/guides/traitor-mode': 'Traitor Mode',
  '/guides/respawn-revive': 'Respawn and Revive',
  '/monsters': 'Monster List',
  '/modes': 'Game Modes',
  '/codes': 'Codes',
  '/how-many-players': 'Max Players',
  '/platforms': 'Platforms',
  '/steam-deck': 'Steam Deck',
  '/download': 'Official Download',
  '/discord': 'Discord and Links',
  '/release-date': 'Version 1.0',
  '/disclaimer': 'Disclaimer',
};
