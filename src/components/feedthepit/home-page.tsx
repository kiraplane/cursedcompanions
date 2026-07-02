import { FaqSection } from '@/components/feedthepit/faq-section';
import {
  QuickWikiLinks,
  WikiRouteSidebar,
} from '@/components/feedthepit/wiki-navigation';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getHomeContent,
  getLocalizedFeaturedGuides,
  getLocalizedGameFacts,
  getLocalizedSiteDescription,
} from '@/data/feedthepit/localized';
import { siteFacts } from '@/data/feedthepit/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BadgeAlert,
  CalendarClock,
  ExternalLink,
  Gamepad2,
  Map,
  ShieldAlert,
  Skull,
  Trophy,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

const keywordLinks = [
  ['Feed The Pit', '/'],
  ['Feed The Pit wiki', '/'],
  ['Feed The Pit guide', '/guides'],
  ['Feed The Pit play online', '/play-online'],
  ['Feed The Pit beginner guide', '/guides/beginner-guide'],
  ['Feed The Pit cards', '/cards'],
  ['Feed The Pit monsters', '/monsters'],
  ['Feed The Pit walkthrough guide', '/walkthrough'],
  ['Feed The Pit Act 1', '/guides/act-1-walkthrough'],
  ['Feed The Pit ending', '/guides/ending-guide'],
  ['Feed The Pit achievements', '/guides/achievements'],
  ['Feed The Pit Steam', '/steam'],
  ['Feed The Pit itch.io', '/itch-io'],
  ['Feed The Pit Discord', '/discord'],
  ['Feed The Pit mobile', '/mobile'],
] as const;

const beginnerJourney = [
  {
    title: 'Launch the browser build',
    href: '/play-online',
    body: 'Try the authorized mooncrustgames HTML5 build safely.',
  },
  {
    title: 'Read the Act 1 route',
    href: '/guides/beginner-guide',
    body: 'Learn card logic, monster pressure, and safe item timing.',
  },
  {
    title: 'Understand the cards',
    href: '/cards',
    body: 'Ask better map questions before taking a final guess.',
  },
  {
    title: 'Read the monster',
    href: '/monsters',
    body: 'Watch the mission threat before spending every item.',
  },
  {
    title: 'Choose the right source',
    href: '/steam',
    body: 'Use Steam for Act 1 and future free act updates.',
  },
] as const;

const coreModules = [
  {
    title: 'Play and Version',
    icon: Gamepad2,
    body: 'Start with the authorized browser build if you want instant play, then use Steam for the Curious Fox Sox Act 1 release.',
    links: [
      ['Play online', '/play-online'],
      ['Steam Act 1', '/steam'],
      ['itch.io build', '/itch-io'],
    ],
  },
  {
    title: 'Cards and Investigation',
    icon: Map,
    body: 'Use limited card questions to narrow Carrister Valley before the final route becomes too dangerous.',
    links: [
      ['Cards guide', '/cards'],
      ['Walkthrough', '/walkthrough'],
      ['Beginner guide', '/guides/beginner-guide'],
    ],
  },
  {
    title: 'Monsters and Endings',
    icon: Skull,
    body: 'Read the mission nemesis, protect the last route, and move into Act 1 ending help only when you are ready.',
    links: [
      ['Monsters guide', '/monsters'],
      ['Act 1 walkthrough', '/guides/act-1-walkthrough'],
      ['Ending guide', '/guides/ending-guide'],
    ],
  },
  {
    title: 'Completion and Safety',
    icon: Trophy,
    body: 'Plan achievements, rendering fixes, safe downloads, and official community links without trusting random files.',
    links: [
      ['Achievements', '/guides/achievements'],
      ['Download guide', '/download'],
      ['Rendering fixes', '/guides/rendering-fixes'],
    ],
  },
] as const;

const homeTrailer = {
  title: 'Feed The Pit Act 1 trailer',
  embedUrl: 'https://www.youtube-nocookie.com/embed/tE6LWsWcoJ4?rel=0&hl=en',
  watchUrl: 'https://www.youtube.com/watch?v=tE6LWsWcoJ4',
};

export function FeedHomePage({ locale }: { locale?: Locale }) {
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
        logo: `${siteFacts.domain}${siteFacts.officialCoverImage}`,
      },
      {
        '@type': 'VideoGame',
        name: siteFacts.gameName,
        author: {
          '@type': 'Organization',
          name: siteFacts.creator,
        },
        applicationCategory: 'Game',
        genre: ['Horror', 'Investigation', 'Story Rich', 'Puzzle'],
        gamePlatform: ['Windows', 'Web Browser'],
        url: siteFacts.officialSteamUrl,
        sameAs: [siteFacts.officialSteamUrl, siteFacts.officialItchUrl],
      },
      {
        '@type': 'VideoObject',
        '@id': `${siteFacts.domain}/#official-trailer`,
        name: homeTrailer.title,
        thumbnailUrl: ['https://i.ytimg.com/vi/tE6LWsWcoJ4/hq720.jpg'],
        uploadDate: '2026-06-26',
        url: homeTrailer.watchUrl,
        embedUrl: homeTrailer.embedUrl,
        author: {
          '@type': 'Organization',
          name: siteFacts.creator,
        },
      },
    ],
  };

  return (
    <div className="bg-[#0B0708] text-[#F2E7D0]">
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden border-[#5B3132] border-b">
        <Image
          src="/feedthepit/screenshots/feed-the-pit-cards.jpg"
          alt="Feed The Pit investigation card interface"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0B0708]/82" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[#0B0708]/72" />

        <Container className="relative grid grid-cols-1 items-center gap-8 px-4 py-8 md:py-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:py-12 xl:grid-cols-[minmax(0,1fr)_520px]">
          <div className="min-w-0">
            <h1 className="max-w-4xl font-display text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
              {content.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#E8D8C2] md:text-lg">
              {content.intro}
            </p>
            <div className="mt-6 grid max-w-full grid-cols-1 gap-3 sm:flex sm:flex-wrap">
              <Button
                asChild
                className="h-auto min-w-0 whitespace-normal bg-[#E3483B] text-left text-[#170B0A] leading-5 hover:bg-[#FF7A5C]"
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
                <LocaleLink href="/play-online">
                  <Gamepad2 className="size-4 shrink-0" />
                  {content.playCta}
                </LocaleLink>
              </Button>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-[#E8D8C2]/85">
              {content.scopeNote}
            </p>
            <div className="mt-4">
              <QuickWikiLinks locale={locale} />
            </div>
          </div>

          <aside
            aria-label="Feed The Pit official trailer"
            className="min-w-0 overflow-hidden rounded-lg border border-white/15 bg-[#17100F]/88 shadow-2xl shadow-black/25 backdrop-blur"
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
            <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-lg border border-[#5B3132] bg-[#17100F] p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#E3483B]">
                      Current game status
                    </p>
                    <h2 className="mt-1 font-display text-xl font-bold text-white">
                      Official snapshot
                    </h2>
                  </div>
                  <a
                    href={siteFacts.officialSteamUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[#E8D8C2] text-sm hover:text-[#E3483B]"
                  >
                    Steam <ExternalLink className="size-3.5" />
                  </a>
                </div>
                <div className="mt-4 space-y-2">
                  {gameFacts.slice(0, 3).map((fact) => (
                    <div
                      key={fact.label}
                      className="grid grid-cols-[10px_minmax(0,1fr)] gap-3 rounded-md px-2 py-2"
                    >
                      <span className="mt-2 size-2 rounded-full bg-[#C9B28A]" />
                      <div className="min-w-0">
                        <h3 className="font-semibold text-sm text-white">
                          {fact.label}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-[#E8D8C2] text-xs leading-5">
                          {fact.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#5B3132] bg-[#17100F] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C9B28A]">
                  Start here
                </p>
                <h2 className="mt-1 font-display text-xl font-bold text-white">
                  Your first Feed The Pit run
                </h2>
                <div className="mt-4 space-y-2">
                  {beginnerJourney.map((step, index) => (
                    <LocaleLink
                      key={step.href}
                      href={step.href}
                      className="group grid grid-cols-[30px_minmax(0,1fr)_auto] gap-3 rounded-md border border-transparent px-2 py-2 transition hover:border-[#E3483B]/45 hover:bg-[#251718]"
                    >
                      <span className="flex size-7 items-center justify-center rounded-full border border-[#5B3132] bg-[#0B0708] text-xs font-semibold text-white">
                        {index + 1}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-semibold text-sm text-white group-hover:text-[#E3483B]">
                          {step.title}
                        </span>
                        <span className="mt-0.5 line-clamp-1 block text-[#E8D8C2] text-xs leading-5">
                          {step.body}
                        </span>
                      </span>
                      <ArrowRight className="mt-1 size-4 shrink-0 text-[#E3483B]" />
                    </LocaleLink>
                  ))}
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 gap-8 lg:grid-cols-[340px_minmax(0,1fr)]">
              <div>
                <Badge className="bg-[#E3483B] text-[#170B0A]">
                  Quick routes
                </Badge>
                <h2 className="mt-4 font-display text-3xl font-black text-white">
                  Choose the Feed The Pit page you need next.
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#E8D8C2]">
                  The wiki is shaped around play online, Steam Act 1, cards,
                  monsters, walkthrough, endings, achievements, official links,
                  and safe platform questions.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {keywordLinks.map(([label, href]) => (
                  <Button
                    key={label}
                    asChild
                    variant="outline"
                    className="h-auto whitespace-normal border-[#5B3132] bg-[#17100F] px-3 py-2 text-left text-[#F2E7D0] hover:border-[#E3483B] hover:bg-[#251718]"
                  >
                    <LocaleLink href={href}>{label}</LocaleLink>
                  </Button>
                ))}
              </div>
            </section>

            <section>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <Badge className="bg-[#C9B28A] text-[#170B0A]">
                    Latest guides
                  </Badge>
                  <h2 className="mt-4 font-display text-3xl font-black text-white">
                    Start with these progression decisions
                  </h2>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#5B3132] bg-[#17100F] text-[#F2E7D0] hover:bg-[#251718]"
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
                    className="group overflow-hidden rounded-lg border border-[#5B3132] bg-[#17100F] transition hover:-translate-y-0.5 hover:border-[#E3483B] hover:shadow-lg hover:shadow-[#E3483B]/10"
                  >
                    <div className="relative aspect-video border-[#5B3132] border-b">
                      <Image
                        src={guide.coverImageUrl}
                        alt={`${guide.title} cover`}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-[#E3483B] text-[#170B0A]">
                        {guide.category}
                      </Badge>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-2xl font-bold text-white">
                        {guide.title}
                      </h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#E8D8C2]">
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
                    className="rounded-lg border border-[#5B3132] bg-[#17100F] p-6"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-11 items-center justify-center rounded-md bg-[#0B0708] text-[#E3483B]">
                        <Icon className="size-5" />
                      </div>
                      <h2 className="font-display text-2xl font-bold text-white">
                        {module.title}
                      </h2>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[#E8D8C2]">
                      {module.body}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {module.links.map(([label, href]) => (
                        <Button
                          key={href}
                          asChild
                          variant="outline"
                          size="sm"
                          className="border-[#5B3132] bg-[#0B0708] text-[#F2E7D0] hover:border-[#E3483B] hover:bg-[#251718]"
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
              <div className="rounded-lg border border-[#5B3132] bg-[#17100F] p-6">
                <div className="flex items-center gap-3">
                  <CalendarClock className="size-5 text-[#C9B28A]" />
                  <h2 className="font-display text-2xl font-bold text-white">
                    Player questions covered
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#E8D8C2]">
                  If you are deciding whether to play in the browser, continue
                  on Steam, join Discord, or check mobile safety, use these
                  status and setup pages before hunting for unsafe mirrors.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    ['Play online', '/play-online'],
                    ['Steam Act 1', '/steam'],
                    ['Download guide', '/download'],
                    ['Discord', '/discord'],
                    ['Mobile safety', '/mobile'],
                    ['Disclaimer', '/disclaimer'],
                  ].map(([label, href]) => (
                    <Button
                      key={href}
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-[#5B3132] bg-[#0B0708] text-[#F2E7D0] hover:border-[#C9B28A] hover:bg-[#251718]"
                    >
                      <LocaleLink href={href}>{label}</LocaleLink>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#E3483B]/55 bg-[#2B1518] p-6">
                <div className="flex items-center gap-3">
                  <BadgeAlert className="size-5 text-[#E3483B]" />
                  <h2 className="font-display text-2xl font-bold text-white">
                    Version clarity
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#F0C9B3]">
                  Browser play is the authorized mooncrustgames HTML5 build.
                  Steam is the Curious Fox Sox Act 1 horror release, with Acts 2
                  and 3 planned as free updates.
                </p>
                <Button
                  asChild
                  className="mt-5 bg-[#E3483B] text-[#170B0A] hover:bg-[#FF7A5C]"
                >
                  <LocaleLink href="/steam">Read Steam Act 1 notes</LocaleLink>
                </Button>
              </div>
            </section>

            <FaqSection
              className="border-[#5B3132] bg-[#17100F]"
              items={content.faq}
            />
          </div>

          <WikiRouteSidebar currentPath="/" locale={locale} />
        </div>
      </Container>
    </div>
  );
}
