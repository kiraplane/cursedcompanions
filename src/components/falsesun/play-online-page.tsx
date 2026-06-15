import { FalseSunGameFrame } from '@/components/falsesun/false-sun-game-frame';
import { FaqSection } from '@/components/falsesun/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { contentWarnings, siteFacts } from '@/data/falsesun/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  Download,
  ExternalLink,
  Gamepad2,
  ListChecks,
  ShieldAlert,
} from 'lucide-react';

const gameSrc = siteFacts.browserGameUrl;
const posterSrc = siteFacts.officialHeroImage;

const guideLinks = [
  {
    title: 'All Endings Guide',
    href: '/all-endings',
    body: 'Use save branches to clean up all 20 ending slots after a first run.',
    icon: ListChecks,
  },
  {
    title: 'Ending 20',
    href: '/ending-20',
    body: 'Test the opening farm tutorial fail route without rebuilding late choices.',
    icon: Gamepad2,
  },
  {
    title: 'Save Points',
    href: '/save-points',
    body: 'Make clean saves before tutorial, animal tasks, and route forks.',
    icon: BookOpen,
  },
  {
    title: 'Route Guides',
    href: '/guides',
    body: 'Open Silas, Kyle, mini-games, download, and warning pages from one hub.',
    icon: BookOpen,
  },
];

export function FalseSunPlayOnlinePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${siteFacts.domain}/play-online#webpage`,
        name: 'Play The False Sun Online',
        url: `${siteFacts.domain}/play-online`,
        description:
          'Play The False Sun online, then use route guides for endings, mini-games, and safe downloads.',
        isPartOf: {
          '@id': `${siteFacts.domain}/#website`,
        },
      },
      {
        '@type': 'VideoGame',
        name: siteFacts.gameName,
        author: {
          '@type': 'Person',
          name: siteFacts.creator,
        },
        applicationCategory: 'Game',
        genre: ['Visual Novel', 'Horror', 'Romance'],
        gamePlatform: ['Web Browser', 'Windows', 'macOS', 'Linux', 'Android'],
        url: `${siteFacts.domain}/play-online`,
        sameAs: siteFacts.officialItchUrl,
      },
    ],
  };

  return (
    <div className="bg-[#0A0F0C] text-[#F7E8C9]">
      <JsonLd data={jsonLd} />

      <section className="border-[#493A34] border-b bg-[linear-gradient(135deg,#0A0F0C_0%,#111612_54%,#201418_100%)] py-10 md:py-14">
        <Container className="space-y-6 px-4">
          <header className="max-w-4xl space-y-4">
            <Badge className="bg-[#D9B56A] text-[#15110B]">Play online</Badge>
            <h1 className="font-display text-4xl font-black leading-tight md:text-6xl">
              Play The False Sun Online
            </h1>
            <p className="max-w-3xl text-base leading-8 text-[#D5C5AF] md:text-lg">
              Start the game in your browser, then use the walkthrough pages
              when you are ready to clean up endings, Silas and Kyle branches,
              farm mini-games, or download questions.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-[#D9B56A] text-[#15110B] hover:bg-[#E7C77C]"
              >
                <LocaleLink href="/all-endings">
                  All endings guide
                  <ArrowRight className="size-4" />
                </LocaleLink>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#E7C77C] bg-[#0A0F0C]/50 text-[#F7E8C9] hover:bg-[#1B231D]"
              >
                <LocaleLink href="/content-warnings">Read warnings</LocaleLink>
              </Button>
            </div>
          </header>

          <FalseSunGameFrame
            src={gameSrc}
            posterSrc={posterSrc}
            labels={{
              title: 'The False Sun online game',
              loading: 'Launching The False Sun...',
              start: 'I am 18+ - start game',
              reset: 'Restart game',
              fullscreen: 'Enter fullscreen',
              exitFullscreen: 'Exit fullscreen',
              open: 'Open game in new tab',
            }}
          />
        </Container>
      </section>

      <section className="border-[#493A34] border-b bg-[#111612] py-12">
        <Container className="grid gap-4 px-4 md:grid-cols-3">
          <div className="rounded-lg border border-[#493A34] bg-[#0D1310] p-5">
            <ShieldAlert className="size-7 text-[#D9B56A]" />
            <h2 className="mt-4 font-display text-xl font-bold">
              Mature content
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#C7BAA7]">
              Expect adult themes, disturbing scenes, flashing visuals, sudden
              audio, and route spoilers once you open the guides.
            </p>
          </div>
          <div className="rounded-lg border border-[#493A34] bg-[#0D1310] p-5">
            <Gamepad2 className="size-7 text-[#6EA69A]" />
            <h2 className="mt-4 font-display text-xl font-bold">
              Browser save care
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#C7BAA7]">
              Browser saves can depend on device, browser, and private-mode
              settings. Export saves before clearing site data.
            </p>
          </div>
          <div className="rounded-lg border border-[#493A34] bg-[#0D1310] p-5">
            <Download className="size-7 text-[#D9B56A]" />
            <h2 className="mt-4 font-display text-xl font-bold">
              Official downloads
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#C7BAA7]">
              Use the creator page for Windows, macOS, Linux, and Android
              downloadable builds.
            </p>
            <LocaleLink
              href="/download"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#E7C77C] underline underline-offset-4"
            >
              Download guide
              <ArrowRight className="size-3" />
            </LocaleLink>
            <a
              href={siteFacts.officialItchUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#E7C77C] underline underline-offset-4"
            >
              Oniray on itch.io
              <ExternalLink className="size-3" />
            </a>
          </div>
        </Container>
      </section>

      <section className="border-[#493A34] border-b bg-[#0A0F0C] py-12">
        <Container className="grid gap-8 px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#D9B56A]">
              How to play
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              Read slowly, save often, and watch how choices change the farm
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#C7BAA7]">
              The False Sun is a story-first visual novel. Most of the game is
              about reading dialogue, noticing tone shifts, and choosing how you
              react when a familiar farm starts to feel wrong.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {[
              {
                label: 'Start',
                body: 'Use the play button above, wait for the Ren’Py loading screen, then click or tap inside the game frame to focus it.',
              },
              {
                label: 'Controls',
                body: 'Click, tap, Space, or Enter to advance dialogue. Use the on-screen menu for saving, loading, preferences, and skipping text you have already seen.',
              },
              {
                label: 'Choices',
                body: 'Dialogue choices can push routes toward different endings. Treat nervous, brave, trusting, and resistant answers as route signals.',
              },
              {
                label: 'Saves',
                body: 'Save before major choices, mini-games, and route turns. Browser saves depend on your device and can disappear if site data is cleared.',
              },
              {
                label: 'Language',
                body: 'If the game opens in Russian first, check the settings menu and look for the English language option before downloading another copy.',
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-[#493A34] bg-[#111612] p-5"
              >
                <h3 className="font-display text-xl font-bold">{item.label}</h3>
                <p className="mt-2 text-sm leading-7 text-[#C7BAA7]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="space-y-6 px-4">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#D9B56A]">
              After playing
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              Turn a first run into clean ending progress
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {guideLinks.map((item) => (
              <LocaleLink
                key={item.href}
                href={item.href}
                className="rounded-lg border border-[#493A34] bg-[#111612] p-5 transition hover:border-[#D9B56A]"
              >
                <item.icon className="size-7 text-[#D9B56A]" />
                <h3 className="mt-4 font-display text-xl font-bold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#C7BAA7]">
                  {item.body}
                </p>
              </LocaleLink>
            ))}
          </div>

          <div className="rounded-lg border border-[#6F3A42] bg-[#201418] p-5">
            <h2 className="font-display text-xl font-bold">Content warnings</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {contentWarnings.map((warning) => (
                <Badge
                  key={warning}
                  variant="outline"
                  className="border-[#E7C77C]/50 text-[#F7E8C9]"
                >
                  {warning}
                </Badge>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-[#493A34] border-t bg-[#111612] py-12">
        <Container className="px-4">
          <FaqSection
            items={[
              {
                question: 'Can I play The False Sun online here?',
                answer:
                  'Yes. Press the start button above and the game will load in your browser.',
              },
              {
                question: 'How do I control The False Sun?',
                answer:
                  'Click or tap to advance dialogue, select choices when they appear, and use the in-game menu for saving, loading, preferences, and skip options.',
              },
              {
                question:
                  'Why does the page ask me to confirm before starting?',
                answer:
                  'The False Sun is intended for mature audiences and includes disturbing themes, flashing effects, and sudden or loud audio.',
              },
              {
                question: 'Where should I go after my first playthrough?',
                answer:
                  'Open the all endings guide first, then use Ending 20, Silas route, Kyle route, or mini-games pages for the specific branch you are missing.',
              },
              {
                question: 'What should I do if saves disappear?',
                answer:
                  'Check whether you used private browsing, cleared site data, changed browsers, or switched devices. For important route progress, keep manual save points and avoid clearing browser storage mid-run.',
              },
              {
                question: 'What if The False Sun opens in Russian?',
                answer:
                  'Open the in-game settings menu and look for the English language option. If you are still stuck, check the official itch.io comments for current player troubleshooting.',
              },
              {
                question:
                  'Should I play online or download the official build?',
                answer:
                  'Use play online for a quick first run. Use the official itch.io build if you are doing all-endings cleanup and need more reliable local saves.',
              },
            ]}
          />
        </Container>
      </section>
    </div>
  );
}
