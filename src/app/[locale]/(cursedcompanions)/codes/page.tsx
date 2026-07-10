import { FaqSection } from '@/components/cursedcompanions/faq-section';
import {
  MobileWikiNav,
  WikiRouteSidebar,
} from '@/components/cursedcompanions/wiki-navigation';
import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { redeemCodes } from '@/data/cursedcompanions/codes';
import { siteFacts } from '@/data/cursedcompanions/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { Check, Copy, ExternalLink, Gift, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const faq = [
  {
    question: 'What is the Cursed Companions code?',
    answer:
      'Crimson Forge Studios officially published SLAYMYQUEEN for a set of launch-day skins. Its source is official, but this site has not re-tested it in game after every update.',
  },
  {
    question: 'Where do I redeem Cursed Companions codes?',
    answer:
      'Open the game’s Main Menu, choose Redeem Code, enter the code, submit it, then start a session and check the Wardrobe.',
  },
  {
    question: 'Why does a code appear as a Steam Achievement?',
    answer:
      'The official FAQ says successful skin redemption appears as a Steam Achievement before the skin is available in the Wardrobe.',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Cursed Companions Codes and Skin Redeem Guide',
    description:
      'Current Cursed Companions codes with official source, skin rewards, checked date, Main Menu redemption steps, Wardrobe help, and fake code warnings.',
    locale,
    pathname: '/codes',
    image: '/cursedcompanions/og-image.png',
  });
}

export default async function CodesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return (
    <div className="bg-[#061313] py-10 text-[#F7F2DF]">
      <Container className="px-4">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_264px]">
          <main className="min-w-0 space-y-8">
            <header className="rounded-lg border border-[#28484A] bg-[#0C2222] p-5 md:p-7">
              <Badge className="bg-[#7CFF6B] text-[#08170E]">
                Official source checked • July 10, 2026
              </Badge>
              <h1 className="mt-4 font-display text-4xl font-black md:text-6xl">
                Cursed Companions Codes
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-[#C4D7CF]">
                One developer-published skin code is currently documented. We
                label official publication separately from live in-game testing
                so an old launch reward never becomes a fake “active” promise.
              </p>
              <MobileWikiNav currentPath="/codes" locale={locale} />
            </header>

            <section className="space-y-4">
              {redeemCodes.map((item) => (
                <article
                  key={item.code}
                  className="rounded-lg border border-[#7CFF6B]/55 bg-[#0C2222] p-5 md:p-6"
                >
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-[#7CFF6B]">
                        <Gift className="size-5" />
                        <span className="text-sm font-semibold uppercase tracking-[0.16em]">
                          Officially published
                        </span>
                      </div>
                      <code className="mt-3 block break-all font-display text-3xl font-black text-[#F7F2DF] md:text-5xl">
                        {item.code}
                      </code>
                      <p className="mt-3 text-base leading-7 text-[#C4D7CF]">
                        {item.reward}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-[#D989FF] text-[#F7F2DF]"
                    >
                      Checked {item.checkedAt}
                    </Badge>
                  </div>
                  <p className="mt-4 border-[#28484A] border-t pt-4 text-sm leading-7 text-[#AFC8C0]">
                    {item.note}
                  </p>
                  <a
                    href={item.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#D989FF]"
                  >
                    Developer announcement <ExternalLink className="size-4" />
                  </a>
                </article>
              ))}
            </section>

            <section className="rounded-lg border border-[#28484A] bg-[#0C2222] p-5 md:p-6">
              <h2 className="font-display text-3xl font-black">
                How to redeem a skin code
              </h2>
              <ol className="mt-5 grid gap-3 text-sm leading-7 text-[#C4D7CF]">
                {[
                  'Launch the purchased game or the official Steam demo.',
                  'Choose Redeem Code from the Main Menu.',
                  'Enter the code exactly and press Submit.',
                  'Confirm the successful redemption in Steam Achievements.',
                  'Start a game session, visit the Wardrobe, and equip the skin.',
                ].map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-3 rounded-md border border-[#28484A] bg-[#061313] p-3"
                  >
                    <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-md bg-[#FF3D78] font-bold text-white">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </section>

            <section className="grid gap-4 md:grid-cols-2">
              <div className="rounded-lg border border-[#28484A] bg-[#0C2222] p-5">
                <Check className="size-5 text-[#7CFF6B]" />
                <h2 className="mt-3 font-display text-2xl font-bold">
                  If the code submits but no skin appears
                </h2>
                <p className="mt-2 text-sm leading-7 text-[#C4D7CF]">
                  Check the matching Steam Achievement, launch a session, and
                  open the Wardrobe. Restart the game before attempting repeated
                  submissions or contacting support.
                </p>
              </div>
              <div className="rounded-lg border border-[#FF3D78]/55 bg-[#26121D] p-5">
                <ShieldCheck className="size-5 text-[#FF3D78]" />
                <h2 className="mt-3 font-display text-2xl font-bold">
                  A real code never needs your password
                </h2>
                <p className="mt-2 text-sm leading-7 text-[#D8C7CE]">
                  Do not install a generator, complete a survey, share Steam
                  credentials, or download a modified client. Redemption happens
                  inside the official game.
                </p>
              </div>
            </section>

            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-[#7CFF6B] text-[#08170E] hover:bg-[#D989FF]"
              >
                <a
                  href={siteFacts.officialSteamUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open official Steam page
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#28484A] bg-[#0C2222] text-[#F7F2DF] hover:border-[#D989FF]"
              >
                <LocaleLink href="/discord">
                  Official links and Discord
                </LocaleLink>
              </Button>
            </div>

            <FaqSection items={faq} title="Cursed Companions codes FAQ" />
          </main>
          <WikiRouteSidebar currentPath="/codes" locale={locale} />
        </div>
      </Container>
    </div>
  );
}
