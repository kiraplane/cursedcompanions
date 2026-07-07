import Container from '@/components/layout/container';
import { FaqSection } from '@/components/moonlightpeaks/faq-section';
import {
  QuickWikiLinks,
  WikiRouteSidebar,
} from '@/components/moonlightpeaks/wiki-navigation';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getHomeContent,
  getLocalizedFeaturedGuides,
  getLocalizedGameFacts,
  getLocalizedSiteDescription,
} from '@/data/moonlightpeaks/localized';
import { siteFacts } from '@/data/moonlightpeaks/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  Boxes,
  Calculator,
  CalendarClock,
  Database,
  Gamepad2,
  Gift,
  Heart,
  ListChecks,
  Moon,
  ShieldAlert,
  UsersRound,
  Wrench,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

const coreDataTools = [
  {
    title: 'Database hub',
    href: '/database',
    icon: Database,
    meta: 'Characters, families, locations, items',
    body: 'Start from the structured Moonlight Peaks database before opening a narrow page.',
  },
  {
    title: 'Character database',
    href: '/database/characters',
    icon: UsersRound,
    meta: 'Residents and romance context',
    body: 'Browse resident rows with portraits, species, families, birthdays, and roles.',
  },
  {
    title: 'Item database',
    href: '/database/items',
    icon: Boxes,
    meta: 'Crops, tools, animals, resources',
    body: 'Use item rows for checklist planning and early collection routing.',
  },
  {
    title: 'Tools hub',
    href: '/tools',
    icon: Wrench,
    meta: 'Local trackers and planners',
    body: 'Open the full tool set for platform choice, romance notes, item tracking, and crop math.',
  },
  {
    title: 'Item tracker',
    href: '/tools/item-tracker',
    icon: ListChecks,
    meta: 'Browser-local checklist',
    body: 'Mark crops, resources, recipes, tools, and animals without sending data anywhere.',
  },
  {
    title: 'Farming calculator',
    href: '/tools/farming-profit-calculator',
    icon: Calculator,
    meta: 'Manual crop math',
    body: 'Compare seed cost, sell value, days, harvests, and extra cost from your own save.',
  },
] as const;

const quickRouteGroups = [
  {
    title: 'Start',
    icon: BookOpen,
    body: 'Launch, demo, and first-save routing.',
    links: [
      ['Beginner', '/guides/beginner-guide'],
      ['Guides', '/guides'],
      ['Release', '/release-date'],
      ['Demo', '/demo'],
    ],
  },
  {
    title: 'Platforms',
    icon: Gamepad2,
    body: 'Pick where to play before buying.',
    links: [
      ['Platform hub', '/platforms'],
      ['Switch', '/switch'],
      ['Steam Deck', '/steam-deck'],
      ['Download', '/download'],
    ],
  },
  {
    title: 'Relationships',
    icon: Heart,
    body: 'Plan residents, romance, and gifts.',
    links: [
      ['Romance', '/romance'],
      ['Characters', '/characters'],
      ['Character DB', '/database/characters'],
      ['Gifts', '/gifts'],
    ],
  },
  {
    title: 'Farm systems',
    icon: Moon,
    body: 'Use data and tools for routines.',
    links: [
      ['Farming', '/farming'],
      ['Magic', '/magic'],
      ['Nokturna', '/nokturna'],
      ['Cheats safety', '/cheats'],
    ],
  },
] as const;

const beginnerJourney = [
  {
    title: 'Pick your platform',
    href: '/platforms',
    body: 'Choose Steam, Mac, Steam Deck, Switch, Switch 2, or Android first.',
  },
  {
    title: 'Try or skip the demo',
    href: '/demo',
    body: 'Use the demo for controls and comfort, not a permanent save plan.',
  },
  {
    title: 'Start the first week',
    href: '/guides/beginner-guide',
    body: 'Build a nightly rhythm for farming, quests, spells, and residents.',
  },
  {
    title: 'Plan social progress',
    href: '/romance',
    body: 'Meet the families before locking onto a dateable route.',
  },
  {
    title: 'Learn magic chores',
    href: '/magic',
    body: 'Turn spells, potions, and shapeshifting into time savers.',
  },
] as const;

const coreModules = [
  {
    title: 'Platforms and Launch',
    icon: Gamepad2,
    body: 'Use official storefronts and platform-specific dates before deciding where to play.',
    links: [
      ['Release date', '/release-date'],
      ['Platforms', '/platforms'],
      ['Switch', '/switch'],
      ['Steam Deck', '/steam-deck'],
    ],
  },
  {
    title: 'Relationships',
    icon: Heart,
    body: 'Plan dateables, families, gifts, and heart-event habits with database rows and private tools.',
    links: [
      ['Characters', '/characters'],
      ['Character DB', '/database/characters'],
      ['Romance', '/romance'],
      ['Romance Tracker', '/tools/romance-tracker'],
      ['Gifts', '/gifts'],
    ],
  },
  {
    title: 'Farm and Magic',
    icon: Moon,
    body: 'Make the moonlit farm manageable with better energy, storage, spell, and potion decisions.',
    links: [
      ['Farming', '/farming'],
      ['Farming Calculator', '/tools/farming-profit-calculator'],
      ['Magic', '/magic'],
      ['Fishing', '/guides/fishing-guide'],
    ],
  },
  {
    title: 'Safety and Community',
    icon: ShieldAlert,
    body: 'Use safe download paths, community notes, and cheat-risk pages before trusting launch-week links.',
    links: [
      ['Cheats', '/cheats'],
      ['Download', '/download'],
      ['Discord', '/discord'],
      ['Disclaimer', '/disclaimer'],
    ],
  },
] as const;

const homeTrailer = {
  title: 'Moonlight Peaks supernatural gameplay trailer',
  embedUrl: 'https://www.youtube-nocookie.com/embed/Z_rxfOWb54I?rel=0&hl=en',
  watchUrl: 'https://www.youtube.com/watch?v=Z_rxfOWb54I',
  thumbnailUrl: 'https://i.ytimg.com/vi/Z_rxfOWb54I/hq720.jpg',
};

export function MoonlightPeaksHomePage({ locale }: { locale?: Locale }) {
  const content = getHomeContent(locale);
  const featuredGuides = getLocalizedFeaturedGuides(locale);
  const gameFacts = getLocalizedGameFacts(locale);
  const siteDescription = getLocalizedSiteDescription(locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteFacts.domain}/#website`,
        name: siteFacts.siteName,
        url: siteFacts.domain,
        description: siteDescription,
      },
      {
        '@type': 'Organization',
        '@id': `${siteFacts.domain}/#organization`,
        name: siteFacts.siteName,
        url: siteFacts.domain,
        logo: `${siteFacts.domain}/android-chrome-512x512.png`,
      },
      {
        '@type': 'VideoGame',
        name: siteFacts.gameName,
        author: {
          '@type': 'Organization',
          name: siteFacts.creator,
        },
        publisher: {
          '@type': 'Organization',
          name: siteFacts.publisher,
        },
        applicationCategory: 'Game',
        genre: ['Life Sim', 'Farming Sim', 'Romance', 'Supernatural'],
        gamePlatform: [
          'Windows',
          'macOS',
          'Nintendo Switch',
          'Nintendo Switch 2',
          'Android',
        ],
        url: siteFacts.officialSteamUrl,
        sameAs: [
          siteFacts.officialWebsiteUrl,
          siteFacts.officialSteamUrl,
          siteFacts.officialNintendoUrl,
          siteFacts.officialGooglePlayUrl,
        ],
      },
      {
        '@type': 'VideoObject',
        '@id': `${siteFacts.domain}/#official-trailer`,
        name: homeTrailer.title,
        thumbnailUrl: [homeTrailer.thumbnailUrl],
        uploadDate: '2026-06-01',
        url: homeTrailer.watchUrl,
        embedUrl: homeTrailer.embedUrl,
        author: {
          '@type': 'Organization',
          name: 'XSEEDgames',
        },
      },
    ],
  };

  return (
    <div className="bg-[#120719] text-[#F4EAFE]">
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden border-[#4B315F] border-b">
        <Image
          src={homeTrailer.thumbnailUrl}
          alt="Moonlight Peaks supernatural farm gameplay"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#120719]/82" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[#120719]/72" />

        <Container className="relative grid grid-cols-1 items-center gap-8 px-4 py-8 md:py-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:py-12 xl:grid-cols-[minmax(0,1fr)_520px]">
          <div className="min-w-0">
            <Badge className="mb-4 bg-[#5EE6D6] text-[#14091E]">
              {content.badge}
            </Badge>
            <h1 className="max-w-4xl font-display text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
              {content.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#DED2F6] md:text-lg">
              {content.intro}
            </p>
            <div className="mt-6 grid max-w-full grid-cols-1 gap-3 sm:flex sm:flex-wrap">
              <Button
                asChild
                className="h-auto min-w-0 whitespace-normal bg-[#C77DFF] text-left text-[#14091E] leading-5 hover:bg-[#FFB86B]"
              >
                <LocaleLink href="/guides/beginner-guide">
                  <span className="min-w-0 break-words">
                    {content.primaryCta}
                  </span>
                  <ArrowRight className="size-4 shrink-0" />
                </LocaleLink>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-auto min-w-0 whitespace-normal border-white/60 bg-white/10 text-left text-white leading-5 hover:bg-white/20"
              >
                <LocaleLink href="/platforms">
                  <Gamepad2 className="size-4 shrink-0" />
                  {content.secondaryCta}
                </LocaleLink>
              </Button>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-[#DED2F6]/85">
              {content.scopeNote}
            </p>
            <div className="mt-4">
              <QuickWikiLinks locale={locale} />
            </div>
          </div>

          <aside
            aria-label="Moonlight Peaks official gameplay trailer"
            className="min-w-0 overflow-hidden rounded-lg border border-white/15 bg-[#1D102A]/88 shadow-2xl shadow-black/25 backdrop-blur"
          >
            <div className="aspect-video bg-black">
              <iframe
                className="block h-full w-full"
                src={homeTrailer.embedUrl}
                title={homeTrailer.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </aside>
        </Container>
      </section>

      <Container className="px-4 py-12">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_264px]">
          <div className="min-w-0 space-y-12">
            <section>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <Badge className="bg-[#C77DFF] text-[#14091E]">
                    Core database and tools
                  </Badge>
                  <h2 className="mt-4 font-display text-3xl font-black text-white">
                    Open the data and trackers players need most.
                  </h2>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#4B315F] bg-[#1D102A] text-[#F4EAFE] hover:bg-[#2B1838]"
                >
                  <LocaleLink href="/tools">
                    All tools
                    <ArrowRight className="size-4" />
                  </LocaleLink>
                </Button>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
                {coreDataTools.map((item) => {
                  const Icon = item.icon;

                  return (
                    <LocaleLink
                      key={item.href}
                      href={item.href}
                      className="group grid min-h-[132px] grid-cols-[42px_minmax(0,1fr)] gap-3 rounded-lg border border-[#4B315F] bg-[#1D102A] p-4 transition hover:border-[#C77DFF] hover:bg-[#251334]"
                    >
                      <span className="flex size-10 items-center justify-center rounded-md border border-[#4B315F] bg-[#120719] text-[#C77DFF] transition group-hover:border-[#C77DFF]">
                        <Icon className="size-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="flex items-start justify-between gap-3">
                          <span className="font-display text-lg font-bold text-white">
                            {item.title}
                          </span>
                          <ArrowRight className="mt-1 size-4 shrink-0 text-[#C77DFF] transition group-hover:translate-x-1" />
                        </span>
                        <span className="mt-1 block text-[#5EE6D6] text-xs font-semibold uppercase tracking-[0.12em]">
                          {item.meta}
                        </span>
                        <span className="mt-2 line-clamp-2 block text-[#DED2F6] text-sm leading-6">
                          {item.body}
                        </span>
                      </span>
                    </LocaleLink>
                  );
                })}
              </div>
            </section>

            <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C77DFF]">
                      Current game status
                    </p>
                    <h2 className="mt-1 font-display text-xl font-bold text-white">
                      {content.currentFactsTitle}
                    </h2>
                  </div>
                  <LocaleLink
                    href="/download"
                    className="inline-flex items-center gap-1 text-[#DED2F6] text-sm hover:text-[#C77DFF]"
                  >
                    Download <ArrowRight className="size-3.5" />
                  </LocaleLink>
                </div>
                <div className="mt-4 space-y-2">
                  {gameFacts.slice(0, 3).map((fact) => (
                    <div
                      key={fact.label}
                      className="grid grid-cols-[10px_minmax(0,1fr)] gap-3 rounded-md px-2 py-2"
                    >
                      <span className="mt-2 size-2 rounded-full bg-[#5EE6D6]" />
                      <div className="min-w-0">
                        <h3 className="font-semibold text-sm text-white">
                          {fact.label}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-[#DED2F6] text-xs leading-5">
                          {fact.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#5EE6D6]">
                  Start here
                </p>
                <h2 className="mt-1 font-display text-xl font-bold text-white">
                  Your first Moonlight Peaks save
                </h2>
                <div className="mt-4 space-y-2">
                  {beginnerJourney.map((step, index) => (
                    <LocaleLink
                      key={step.href}
                      href={step.href}
                      className="group grid grid-cols-[30px_minmax(0,1fr)_auto] gap-3 rounded-md border border-transparent px-2 py-2 transition hover:border-[#C77DFF]/45 hover:bg-[#2B1838]"
                    >
                      <span className="flex size-7 items-center justify-center rounded-full border border-[#4B315F] bg-[#120719] text-xs font-semibold text-white">
                        {index + 1}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-semibold text-sm text-white group-hover:text-[#C77DFF]">
                          {step.title}
                        </span>
                        <span className="mt-0.5 line-clamp-1 block text-[#DED2F6] text-xs leading-5">
                          {step.body}
                        </span>
                      </span>
                      <ArrowRight className="mt-1 size-4 shrink-0 text-[#C77DFF]" />
                    </LocaleLink>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <Badge className="bg-[#5EE6D6] text-[#14091E]">
                    Quick routes
                  </Badge>
                  <h2 className="mt-4 font-display text-3xl font-black text-white">
                    Choose the Moonlight Peaks page you need next.
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-7 text-[#DED2F6]">
                  Compact route groups keep the homepage scannable while still
                  passing users into the main wiki clusters.
                </p>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
                {quickRouteGroups.map((group) => {
                  const Icon = group.icon;

                  return (
                    <article
                      key={group.title}
                      className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-4"
                    >
                      <div className="flex items-center gap-2">
                        <span className="flex size-8 items-center justify-center rounded-md bg-[#120719] text-[#C77DFF]">
                          <Icon className="size-4" />
                        </span>
                        <h3 className="font-display text-lg font-bold text-white">
                          {group.title}
                        </h3>
                      </div>
                      <p className="mt-2 line-clamp-2 text-[#DED2F6] text-sm leading-6">
                        {group.body}
                      </p>
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        {group.links.map(([label, href]) => (
                          <LocaleLink
                            key={href}
                            href={href}
                            className="min-w-0 rounded-md border border-[#4B315F] bg-[#120719] px-2.5 py-2 text-[#F4EAFE] text-sm leading-5 transition hover:border-[#C77DFF] hover:bg-[#2B1838]"
                          >
                            {label}
                          </LocaleLink>
                        ))}
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>

            <section>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <Badge className="bg-[#5EE6D6] text-[#14091E]">
                    Latest guides
                  </Badge>
                  <h2 className="mt-4 font-display text-3xl font-black text-white">
                    Start with these launch-week decisions
                  </h2>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#4B315F] bg-[#1D102A] text-[#F4EAFE] hover:bg-[#2B1838]"
                >
                  <LocaleLink href="/guides">
                    {content.allGuidesButton}
                    <ArrowRight className="size-4" />
                  </LocaleLink>
                </Button>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-3">
                {featuredGuides.map((guide) => (
                  <LocaleLink
                    key={guide.slug}
                    href={guide.path}
                    className="group overflow-hidden rounded-lg border border-[#4B315F] bg-[#1D102A] transition hover:-translate-y-0.5 hover:border-[#C77DFF] hover:shadow-lg hover:shadow-[#C77DFF]/10"
                  >
                    <div className="relative aspect-video border-[#4B315F] border-b">
                      <Image
                        src={guide.coverImageUrl}
                        alt={`${guide.title} cover`}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-[#C77DFF] text-[#14091E]">
                        {guide.category}
                      </Badge>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-2xl font-bold text-white">
                        {guide.title}
                      </h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#DED2F6]">
                        {guide.summary}
                      </p>
                    </div>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {coreModules.map((module) => {
                const Icon = module.icon;

                return (
                  <article
                    key={module.title}
                    className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-6"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-11 items-center justify-center rounded-md bg-[#120719] text-[#C77DFF]">
                        <Icon className="size-5" />
                      </div>
                      <h2 className="font-display text-2xl font-bold text-white">
                        {module.title}
                      </h2>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[#DED2F6]">
                      {module.body}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {module.links.map(([label, href]) => (
                        <Button
                          key={href}
                          asChild
                          variant="outline"
                          size="sm"
                          className="border-[#4B315F] bg-[#120719] text-[#F4EAFE] hover:border-[#C77DFF] hover:bg-[#2B1838]"
                        >
                          <LocaleLink href={href}>{label}</LocaleLink>
                        </Button>
                      ))}
                    </div>
                  </article>
                );
              })}
            </section>

            <section className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div className="rounded-lg border border-[#4B315F] bg-[#1D102A] p-6">
                <div className="flex items-center gap-3">
                  <CalendarClock className="size-5 text-[#5EE6D6]" />
                  <h2 className="font-display text-2xl font-bold text-white">
                    Player questions covered
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#DED2F6]">
                  If you are choosing a platform, testing the demo, planning a
                  romance route, checking gifts, or searching cheats, use these
                  status pages before trusting stale launch posts.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    ['Release date', '/release-date'],
                    ['Demo', '/demo'],
                    ['Platforms', '/platforms'],
                    ['Romance', '/romance'],
                    ['Cheats', '/cheats'],
                    ['Disclaimer', '/disclaimer'],
                  ].map(([label, href]) => (
                    <Button
                      key={href}
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-[#4B315F] bg-[#120719] text-[#F4EAFE] hover:border-[#5EE6D6] hover:bg-[#2B1838]"
                    >
                      <LocaleLink href={href}>{label}</LocaleLink>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#C77DFF]/55 bg-[#2A1733] p-6">
                <div className="flex items-center gap-3">
                  <Gift className="size-5 text-[#C77DFF]" />
                  <h2 className="font-display text-2xl font-bold text-white">
                    Do not fake the tables
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#F1D9FF]">
                  Gift, fish, crop, and Nokturna databases are useful only after
                  live-game data is verified. This launch hub starts with safe
                  decision guides and expands from stable evidence.
                </p>
                <Button
                  asChild
                  className="mt-5 bg-[#C77DFF] text-[#14091E] hover:bg-[#FFB86B]"
                >
                  <LocaleLink href="/gifts">Read gift strategy</LocaleLink>
                </Button>
              </div>
            </section>

            <FaqSection
              className="border-[#4B315F] bg-[#1D102A]"
              items={content.faq}
            />
          </div>

          <WikiRouteSidebar currentPath="/" locale={locale} />
        </div>
      </Container>
    </div>
  );
}
