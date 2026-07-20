import { FaqSection } from '@/components/cursedcompanions/faq-section';
import {
  MobileWikiNav,
  QuickWikiLinks,
  WikiRouteSidebar,
} from '@/components/cursedcompanions/wiki-navigation';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getHomeContent,
  getLocalizedFeaturedGuides,
  getLocalizedGameFacts,
  getLocalizedSiteDescription,
} from '@/data/cursedcompanions/localized';
import { siteFacts } from '@/data/cursedcompanions/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  Gamepad2,
  MessageCircle,
  Mic2,
  RadioTower,
  ShieldCheck,
  Skull,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

const quickRouteGroups = [
  {
    title: 'Start talking safely',
    icon: Mic2,
    body: 'First run, live words, mic detection, and codes.',
    links: [
      ['Beginner', '/guides/beginner-guide'],
      ['Words', '/guides/words-list-spells'],
      ['Mic fix', '/guides/microphone-not-working'],
      ['Codes', '/codes'],
    ],
  },
  {
    title: 'Survive the dungeon',
    icon: Skull,
    body: 'Monster counters, Act III, Jester, and revives.',
    links: [
      ['Monsters', '/monsters'],
      ['Act III', '/guides/act-3-monsters-jester'],
      ['Respawn', '/guides/respawn-revive'],
    ],
  },
  {
    title: 'Choose a mode',
    icon: Gamepad2,
    body: 'Acts, Challenge, Endless, Traitor, and party size.',
    links: [
      ['All modes', '/modes'],
      ['Endless', '/guides/endless-mode'],
      ['Traitor', '/guides/traitor-mode'],
      ['Max players', '/how-many-players'],
    ],
  },
  {
    title: 'Official routes',
    icon: ShieldCheck,
    body: 'Version, Steam, platform status, and community.',
    links: [
      ['Version 1.0', '/release-date'],
      ['Download', '/download'],
      ['Platforms', '/platforms'],
      ['Discord', '/discord'],
    ],
  },
] as const;

const startJourney = [
  {
    title: 'Test captions',
    href: '/guides/microphone-not-working',
    body: 'Confirm speech recognition and proximity chat separately.',
  },
  {
    title: 'Read every curse',
    href: '/guides/words-list-spells',
    body: 'Build replacement callouts from the live Spell Book.',
  },
  {
    title: 'Assign one reader',
    href: '/guides/beginner-guide',
    body: 'One clear spell voice beats four people shouting.',
  },
  {
    title: 'Check the threat',
    href: '/monsters',
    body: 'Know what reacts to voice, sight, doors, or water.',
  },
  {
    title: 'Return before greed wins',
    href: '/guides/beginner-guide',
    body: 'Bank the quota and keep the route home readable.',
  },
] as const;

const homeTrailer = {
  title: 'Cursed Companions official version 1.0 trailer',
  embedUrl: 'https://www.youtube-nocookie.com/embed/K5XnfqoBXfU?rel=0&hl=en',
  watchUrl: 'https://www.youtube.com/watch?v=K5XnfqoBXfU',
  thumbnailUrl: 'https://i.ytimg.com/vi/K5XnfqoBXfU/hq720.jpg',
};

export function CursedCompanionsHomePage({ locale }: { locale?: Locale }) {
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
        author: { '@type': 'Organization', name: siteFacts.creator },
        publisher: { '@type': 'Organization', name: siteFacts.publisher },
        applicationCategory: 'Game',
        genre: [
          'Co-op horror',
          'Comedy',
          'Voice control',
          'Dungeon crawler',
          'Social deduction',
        ],
        gamePlatform: ['Windows', 'Steam'],
        numberOfPlayers: '1-16',
        datePublished: '2026-07-09',
        url: siteFacts.officialSteamUrl,
        sameAs: [
          siteFacts.officialWebsiteUrl,
          siteFacts.officialSteamUrl,
          siteFacts.officialCommunityUrl,
          siteFacts.officialDiscordUrl,
          siteFacts.officialTwitterUrl,
          siteFacts.officialInstagramUrl,
          siteFacts.officialTikTokUrl,
        ],
      },
      {
        '@type': 'VideoObject',
        name: homeTrailer.title,
        thumbnailUrl: homeTrailer.thumbnailUrl,
        embedUrl: homeTrailer.embedUrl,
        uploadDate: '2026-06-25',
      },
    ],
  };

  return (
    <div className="bg-[#061313] text-[#F7F2DF]">
      <JsonLd data={jsonLd} />
      <section className="relative overflow-hidden border-[#28484A] border-b">
        <div className="absolute inset-0 opacity-25">
          <Image
            src={siteFacts.officialHeroImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#061313_0%,rgba(6,19,19,0.94)_45%,rgba(6,19,19,0.68)_100%)]" />
        </div>
        <Container className="relative px-4 py-8 lg:py-10">
          <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.78fr)]">
            <div className="min-w-0">
              <Badge className="bg-[#7CFF6B] text-[#08170E]">
                {content.badge}
              </Badge>
              <h1 className="mt-4 max-w-4xl font-display text-4xl font-black leading-tight md:text-6xl">
                {content.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#C4D7CF] md:text-lg">
                {content.intro}
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="h-auto bg-[#FF3D78] px-4 py-3 text-white hover:bg-[#D989FF]"
                >
                  <LocaleLink href="/guides/beginner-guide">
                    {content.primaryCta}
                    <ArrowRight className="size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-auto border-[#7CFF6B] bg-[#081B1B]/80 px-4 py-3 text-[#F7F2DF] hover:bg-[#7CFF6B] hover:text-[#08170E]"
                >
                  <LocaleLink href="/monsters">
                    {content.secondaryCta}
                  </LocaleLink>
                </Button>
              </div>
              <QuickWikiLinks
                className="mt-5"
                links={[
                  ['Steam', siteFacts.officialSteamUrl],
                  ['Words', '/guides/words-list-spells'],
                  ['Mic Fix', '/guides/microphone-not-working'],
                  ['Act III', '/guides/act-3-monsters-jester'],
                  ['Codes', '/codes'],
                  ['Discord', '/discord'],
                ]}
              />
              <p className="mt-4 text-sm leading-6 text-[#C4D7CF]">
                {content.scopeNote}
              </p>
              <div className="mt-5 lg:hidden">
                <MobileWikiNav currentPath="/" locale={locale} />
              </div>
            </div>

            <div className="relative aspect-video min-w-0 overflow-hidden rounded-lg border border-[#365F61] bg-black shadow-2xl shadow-black/40">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={homeTrailer.embedUrl}
                title={homeTrailer.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-8 lg:py-10">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_264px]">
          <main className="min-w-0 space-y-8">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {quickRouteGroups.map((group) => {
                const Icon = group.icon;
                return (
                  <div
                    key={group.title}
                    className="rounded-lg border border-[#28484A] bg-[#0C2222] p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-[#7CFF6B] text-[#08170E]">
                        <Icon className="size-5" />
                      </span>
                      <div className="min-w-0">
                        <h2 className="font-display text-lg font-bold">
                          {group.title}
                        </h2>
                        <p className="text-xs leading-5 text-[#AFC8C0]">
                          {group.body}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.links.map(([label, href]) => (
                        <LocaleLink
                          key={href}
                          href={href}
                          className="rounded-md border border-[#365F61] bg-[#061313] px-2.5 py-1.5 text-sm text-[#F7F2DF] transition hover:border-[#D989FF] hover:text-[#D989FF]"
                        >
                          {label}
                        </LocaleLink>
                      ))}
                    </div>
                  </div>
                );
              })}
            </section>

            <section className="rounded-lg border border-[#28484A] bg-[#0C2222] p-5 md:p-6">
              <div className="flex items-start gap-3">
                <RadioTower className="mt-1 size-5 shrink-0 text-[#7CFF6B]" />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D989FF]">
                    {content.siteShapeEyebrow}
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    {content.siteShapeTitle}
                  </h2>
                  <p className="mt-3 max-w-4xl text-sm leading-7 text-[#C4D7CF]">
                    {content.siteShapeBody}
                  </p>
                </div>
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-5">
              {startJourney.map((item, index) => (
                <LocaleLink
                  key={`${item.href}-${index}`}
                  href={item.href}
                  className="group rounded-lg border border-[#28484A] bg-[#0C2222] p-4 transition hover:border-[#FF3D78] hover:bg-[#102C2C]"
                >
                  <span className="inline-flex size-7 items-center justify-center rounded-md bg-[#FF3D78] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <h2 className="mt-3 font-display text-lg font-bold">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-[#AFC8C0]">
                    {item.body}
                  </p>
                </LocaleLink>
              ))}
            </section>

            <section className="rounded-lg border border-[#28484A] bg-[#0C2222] p-5 md:p-6">
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D989FF]">
                    {content.coreGuidesEyebrow}
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    {content.coreGuidesTitle}
                  </h2>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#365F61] bg-[#061313] text-[#F7F2DF] hover:border-[#7CFF6B] hover:bg-[#102C2C]"
                >
                  <LocaleLink href="/guides">
                    {content.allGuidesButton}
                  </LocaleLink>
                </Button>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {featuredGuides.map((guide) => (
                  <LocaleLink
                    key={guide.slug}
                    href={guide.path}
                    className="group overflow-hidden rounded-lg border border-[#28484A] bg-[#061313] transition hover:border-[#D989FF]"
                  >
                    <div className="relative aspect-video">
                      <Image
                        src={guide.coverImageUrl}
                        alt={`${guide.title} cover`}
                        fill
                        sizes="(min-width: 1280px) 300px, (min-width: 768px) 50vw, 100vw"
                        className="object-cover transition duration-300 group-hover:scale-[1.02]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061313]/70 to-transparent" />
                    </div>
                    <div className="p-4">
                      <Badge className="bg-[#7CFF6B] text-[#08170E]">
                        {guide.category}
                      </Badge>
                      <h3 className="mt-3 font-display text-xl font-bold">
                        {guide.title}
                      </h3>
                      <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#AFC8C0]">
                        {guide.summary}
                      </p>
                    </div>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <div className="rounded-lg border border-[#28484A] bg-[#0C2222] p-5">
                <div className="flex items-center gap-3">
                  <Sparkles className="size-5 shrink-0 text-[#D989FF]" />
                  <h2 className="font-display text-2xl font-bold">
                    {content.currentFactsTitle}
                  </h2>
                </div>
                <div className="mt-4 grid gap-3 md:grid-cols-2">
                  {gameFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="rounded-md border border-[#28484A] bg-[#061313] p-3"
                    >
                      <p className="text-sm font-semibold text-[#7CFF6B]">
                        {fact.label}
                      </p>
                      <p className="mt-1 text-sm leading-6 text-[#AFC8C0]">
                        {fact.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#28484A] bg-[#0C2222] p-5">
                <div className="flex items-center gap-3">
                  <BookOpen className="size-5 shrink-0 text-[#FF3D78]" />
                  <h2 className="font-display text-2xl font-bold">
                    {content.findPageTitle}
                  </h2>
                </div>
                <div className="mt-4 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                  {content.coreRouteItems.map((item) => (
                    <LocaleLink
                      key={`${item.keyword}-${item.route}`}
                      href={item.route}
                      className="min-w-0 rounded-md border border-[#28484A] bg-[#061313] p-3 text-sm transition hover:border-[#D989FF]"
                    >
                      <span className="block min-w-0 break-words font-semibold text-[#F7F2DF]">
                        {item.keyword}
                      </span>
                      <span className="mt-1 block text-xs leading-5 text-[#AFC8C0]">
                        {item.label}
                      </span>
                    </LocaleLink>
                  ))}
                </div>
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-[#28484A] bg-[#0C2222] p-5">
                <UsersRound className="size-5 text-[#7CFF6B]" />
                <h2 className="mt-3 font-display text-2xl font-bold">
                  8-player co-op, 16-player betrayal
                </h2>
                <p className="mt-2 text-sm leading-7 text-[#AFC8C0]">
                  Normal modes support up to eight players. Traitor Mode doubles
                  the lobby and turns voice evidence into the real challenge.
                </p>
                <LocaleLink
                  href="/how-many-players"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#D989FF]"
                >
                  Compare party sizes <ArrowRight className="size-4" />
                </LocaleLink>
              </div>
              <div className="rounded-lg border border-[#28484A] bg-[#0C2222] p-5">
                <MessageCircle className="size-5 text-[#FF3D78]" />
                <h2 className="mt-3 font-display text-2xl font-bold">
                  Find a group or report a broken run
                </h2>
                <p className="mt-2 text-sm leading-7 text-[#AFC8C0]">
                  The official Discord is the best place for teammates, language
                  feedback, bug reports, codes, cosmetics, and current patches.
                </p>
                <LocaleLink
                  href="/discord"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#7CFF6B]"
                >
                  Open official links <ArrowRight className="size-4" />
                </LocaleLink>
              </div>
            </section>

            <FaqSection
              items={content.faq}
              title="Cursed Companions Wiki FAQ"
            />

            <section className="rounded-lg border border-[#FF3D78]/60 bg-[#26121D] p-5 md:p-6">
              <h2 className="font-display text-2xl font-bold">
                Enter version 1.0 with a plan
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-7 text-[#D8C7CE]">
                Read the live curse words, assign one clear speaker, check doors
                with the Spell Torch, bank treasure early, and keep a revive
                route ready before Act III turns the room into noise.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-[#7CFF6B] text-[#08170E] hover:bg-[#D989FF]"
                >
                  <LocaleLink href="/guides/beginner-guide">
                    Start the route
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#D989FF] bg-transparent text-[#F7F2DF] hover:bg-[#D989FF] hover:text-[#08170E]"
                >
                  <a
                    href={siteFacts.officialSteamUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open Steam
                  </a>
                </Button>
              </div>
            </section>
          </main>

          <WikiRouteSidebar currentPath="/" locale={locale} />
        </div>
      </Container>
    </div>
  );
}
