import { FaqSection } from '@/components/cursedcompanions/faq-section';
import {
  MobileWikiNav,
  WikiRouteSidebar,
} from '@/components/cursedcompanions/wiki-navigation';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { gameModes } from '@/data/cursedcompanions/modes';
import { siteFacts } from '@/data/cursedcompanions/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { ArrowRight, Clock3, Gamepad2, UsersRound } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const faq = [
  {
    question: 'Which Cursed Companions mode should beginners play?',
    answer:
      'Start with the normal Acts. They teach treasure targets, voice spells, monsters, and boss progression before Endless or Traitor adds more pressure.',
  },
  {
    question: 'Does Endless Mode end?',
    answer:
      'No fixed endpoint is listed. It repeats six-day cycles with rising treasure targets and bosses.',
  },
  {
    question: 'Which mode supports 16 players?',
    answer: 'Traitor Mode supports up to 16 players.',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Cursed Companions Modes - Acts, Challenge, Endless and Traitor',
    description:
      'Compare Cursed Companions Acts I-III, Challenge, Endless, and 16-player Traitor Mode by party size, goals, save rules, bosses, and best starting route.',
    locale,
    pathname: '/modes',
    image: '/cursedcompanions/guides/traitor-mode.jpg',
  });
}

export default async function ModesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Cursed Companions game modes',
    numberOfItems: gameModes.length,
    itemListElement: gameModes.map((mode, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: mode.name,
      url: `${siteFacts.domain}${mode.route}`,
    })),
  };

  return (
    <div className="bg-[#061313] py-10 text-[#F7F2DF]">
      <JsonLd data={itemList} />
      <Container className="px-4">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_264px]">
          <main className="min-w-0 space-y-8">
            <header className="rounded-lg border border-[#28484A] bg-[#0C2222] p-5 md:p-7">
              <Badge className="bg-[#D989FF] text-[#08170E]">Mode hub</Badge>
              <h1 className="mt-4 font-display text-4xl font-black md:text-6xl">
                Cursed Companions Game Modes
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-[#C4D7CF]">
                Learn the voice loop in Acts I–III, test a prepared group in
                Challenge, preserve a long run in Endless, or turn a 16-player
                lobby against itself in Traitor Mode.
              </p>
              <MobileWikiNav currentPath="/modes" locale={locale} />
            </header>

            <section className="grid gap-4 md:grid-cols-2">
              {gameModes.map((mode) => (
                <article
                  key={mode.name}
                  className="rounded-lg border border-[#28484A] bg-[#0C2222] p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <Gamepad2 className="size-5 text-[#7CFF6B]" />
                    <Badge
                      variant="outline"
                      className="border-[#D989FF]/60 text-[#F7F2DF]"
                    >
                      {mode.players} players
                    </Badge>
                  </div>
                  <h2 className="mt-4 font-display text-2xl font-bold">
                    {mode.name}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[#C4D7CF]">
                    {mode.goal}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-4 border-[#28484A] bg-[#061313] text-[#F7F2DF] hover:border-[#7CFF6B] hover:bg-[#102C2C]"
                  >
                    <LocaleLink href={mode.route}>
                      Open route <ArrowRight className="size-4" />
                    </LocaleLink>
                  </Button>
                </article>
              ))}
            </section>

            <section className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-[#28484A] bg-[#0C2222] p-5">
                <Clock3 className="size-5 text-[#FF3D78]" />
                <h2 className="mt-3 font-display text-2xl font-bold">
                  Endless is a resource plan, not a sprint
                </h2>
                <p className="mt-2 text-sm leading-7 text-[#C4D7CF]">
                  Each six-day cycle raises the target and brings a boss. The
                  save keeps the day, abilities, and island equipment, while
                  Soul Potions restore player stats.
                </p>
                <LocaleLink
                  href="/guides/endless-mode"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#D989FF]"
                >
                  Plan the cycle <ArrowRight className="size-4" />
                </LocaleLink>
              </div>
              <div className="rounded-lg border border-[#28484A] bg-[#0C2222] p-5">
                <UsersRound className="size-5 text-[#7CFF6B]" />
                <h2 className="mt-3 font-display text-2xl font-bold">
                  Traitor needs a meeting protocol
                </h2>
                <p className="mt-2 text-sm leading-7 text-[#C4D7CF]">
                  In a 16-player voice lobby, evidence must be short: location,
                  action, timing, and nearby players. A triggered curse alone is
                  not proof of guilt.
                </p>
                <LocaleLink
                  href="/guides/traitor-mode"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#D989FF]"
                >
                  Read Traitor rules <ArrowRight className="size-4" />
                </LocaleLink>
              </div>
            </section>

            <FaqSection items={faq} title="Cursed Companions modes FAQ" />
          </main>
          <WikiRouteSidebar currentPath="/modes" locale={locale} />
        </div>
      </Container>
    </div>
  );
}
