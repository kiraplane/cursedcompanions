import { FaqSection } from '@/components/cursedcompanions/faq-section';
import {
  MobileWikiNav,
  WikiRouteSidebar,
} from '@/components/cursedcompanions/wiki-navigation';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { routeLabels } from '@/data/cursedcompanions/localized';
import { monsters } from '@/data/cursedcompanions/monsters';
import { siteFacts } from '@/data/cursedcompanions/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { ArrowRight, ShieldAlert, Skull } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const faq = [
  {
    question: 'How many monsters are in Cursed Companions?',
    answer:
      'The full-release announcement says Act III adds 10 creatures to the 26 released in Early Access. This page lists publicly verified named threats rather than pretending to mirror the entire live codex.',
  },
  {
    question: 'Which monsters react to voice?',
    answer:
      'The Foul Moth, Meatgrinder, Bride, Big Baby, and other Spell Book encounters use spoken input. Always check the live phrase and current curses before speaking.',
  },
  {
    question: 'Who is the Act III boss?',
    answer:
      'The Jester is the Act III boss and introduces unique death curses that change safe communication.',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Cursed Companions Monsters List and Counter Guide',
    description:
      'A current Cursed Companions monster list with voice triggers, counters, Act III threats, Jester, Doorpelganger, Mimic, water monsters, and Spell Torch checks.',
    locale,
    pathname: '/monsters',
    image: '/cursedcompanions/guides/voice-monster.jpg',
  });
}

export default async function MonstersPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Cursed Companions verified monster list',
    numberOfItems: monsters.length,
    itemListElement: monsters.map((monster, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: monster.name,
      url: `${siteFacts.domain}/monsters#${monster.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')}`,
    })),
  };

  return (
    <div className="bg-[#061313] py-10 text-[#F7F2DF]">
      <JsonLd data={itemList} />
      <Container className="px-4">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_264px]">
          <main className="min-w-0 space-y-8">
            <header className="rounded-lg border border-[#28484A] bg-[#0C2222] p-5 md:p-7">
              <Badge className="bg-[#FF3D78] text-white">Version 1.0</Badge>
              <h1 className="mt-4 font-display text-4xl font-black md:text-6xl">
                Cursed Companions Monsters List
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-[#C4D7CF]">
                Learn what each verified creature asks from the team: silence,
                spell words, torch checks, food, visual verification, water
                discipline, or a complete change to death-curse callouts.
              </p>
              <MobileWikiNav currentPath="/monsters" locale={locale} />
            </header>

            <section className="rounded-lg border border-[#7CFF6B]/50 bg-[#102C2C] p-5">
              <div className="flex gap-3">
                <ShieldAlert className="mt-1 size-5 shrink-0 text-[#7CFF6B]" />
                <div>
                  <h2 className="font-display text-2xl font-bold">
                    Read the Spell Book before using a memorized counter
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[#C4D7CF]">
                    Voice phrases can change with language or game updates, and
                    one helpful phrase can contain another player’s forbidden
                    word. This list explains the decision; the live book owns
                    the exact prompt.
                  </p>
                </div>
              </div>
            </section>

            <section className="overflow-hidden rounded-lg border border-[#28484A] bg-[#0C2222]">
              <div className="border-[#28484A] border-b p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D989FF]">
                  Verified public entries
                </p>
                <h2 className="mt-2 font-display text-3xl font-black">
                  Monster response table
                </h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px] text-left text-sm">
                  <thead className="bg-[#061313] text-[#7CFF6B]">
                    <tr>
                      <th className="px-4 py-3">Monster</th>
                      <th className="px-4 py-3">Where</th>
                      <th className="px-4 py-3">Threat</th>
                      <th className="px-4 py-3">Team response</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monsters.map((monster) => (
                      <tr
                        id={monster.name
                          .toLowerCase()
                          .replace(/[^a-z0-9]+/g, '-')}
                        key={monster.name}
                        className="border-[#28484A] border-t align-top"
                      >
                        <td className="px-4 py-4 font-semibold text-[#F7F2DF]">
                          {monster.name}
                        </td>
                        <td className="px-4 py-4 text-[#AFC8C0]">
                          {monster.act}
                        </td>
                        <td className="px-4 py-4 leading-6 text-[#C4D7CF]">
                          {monster.trigger}
                        </td>
                        <td className="px-4 py-4 leading-6 text-[#C4D7CF]">
                          {monster.response}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-[#28484A] bg-[#0C2222] p-5">
                <Skull className="size-5 text-[#FF3D78]" />
                <h2 className="mt-3 font-display text-2xl font-bold">
                  Act III: verify doors, players, and water
                </h2>
                <p className="mt-2 text-sm leading-7 text-[#C4D7CF]">
                  Doorpelganger punishes rushed doors, Mimic punishes visual
                  trust, and flooded areas reduce the quality of the team’s two
                  most important tools: sight and voice.
                </p>
                <Button
                  asChild
                  className="mt-4 bg-[#FF3D78] text-white hover:bg-[#D989FF]"
                >
                  <LocaleLink href="/guides/act-3-monsters-jester">
                    Read the Act III route <ArrowRight className="size-4" />
                  </LocaleLink>
                </Button>
              </div>
              <div className="rounded-lg border border-[#28484A] bg-[#0C2222] p-5">
                <ShieldAlert className="size-5 text-[#7CFF6B]" />
                <h2 className="mt-3 font-display text-2xl font-bold">
                  The Jester changes who can speak safely
                </h2>
                <p className="mt-2 text-sm leading-7 text-[#C4D7CF]">
                  Enter the boss with one caller and one Spell Book reader.
                  Pause whenever a death curse changes, then reassign the voice
                  role before continuing the mechanic.
                </p>
                <LocaleLink
                  href="/guides/words-list-spells"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#D989FF]"
                >
                  Build safer callouts <ArrowRight className="size-4" />
                </LocaleLink>
              </div>
            </section>

            <FaqSection items={faq} title="Cursed Companions monster FAQ" />
          </main>

          <WikiRouteSidebar currentPath="/monsters" locale={locale} />
        </div>
      </Container>
    </div>
  );
}
