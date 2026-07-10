import {
  MobileWikiNav,
  WikiRouteSidebar,
} from '@/components/cursedcompanions/wiki-navigation';
import Container from '@/components/layout/container';
import { siteFacts } from '@/data/cursedcompanions/sources';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Cursed Companions Wiki Disclaimer',
    description:
      'Independent-site, trademark, source, update, code-status, platform, and safety disclaimer for Cursed Companions Wiki.',
    locale,
    pathname: '/disclaimer',
  });
}

export default async function DisclaimerPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return (
    <div className="bg-[#061313] py-10 text-[#F7F2DF]">
      <Container className="px-4">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_264px]">
          <main className="min-w-0 rounded-lg border border-[#28484A] bg-[#0C2222] p-5 md:p-8">
            <h1 className="font-display text-4xl font-black md:text-5xl">
              Disclaimer
            </h1>
            <p className="mt-4 text-sm leading-7 text-[#C4D7CF]">
              Cursed Companions Wiki is an independent guide site and is not
              owned, operated, or endorsed by Crimson Forge Studios or Valve.
              Cursed Companions, its artwork, names, and trademarks belong to
              their respective owners.
            </p>
            <div className="mt-8 space-y-8 text-sm leading-7 text-[#C4D7CF]">
              <section>
                <h2 className="font-display text-2xl font-bold text-[#F7F2DF]">
                  Current information
                </h2>
                <p className="mt-2">
                  Game mechanics, codes, platforms, prices, discounts, and patch
                  behavior can change. Checked dates describe source review, not
                  permanent guarantees or in-game testing of every claim.
                </p>
              </section>
              <section>
                <h2 className="font-display text-2xl font-bold text-[#F7F2DF]">
                  Official transactions and support
                </h2>
                <p className="mt-2">
                  Purchase and download the game through the official Steam
                  page. Use the developer website, FAQ, Steam Community, and
                  official Discord for support, account, code, and bug-report
                  decisions.
                </p>
              </section>
              <section>
                <h2 className="font-display text-2xl font-bold text-[#F7F2DF]">
                  Media and guide sources
                </h2>
                <p className="mt-2">
                  Official press-kit images and embedded videos are used for
                  identification, commentary, and guide context. Written guides
                  are original summaries and decision routes, not transcripts or
                  copied competitor articles.
                </p>
              </section>
              <section>
                <h2 className="font-display text-2xl font-bold text-[#F7F2DF]">
                  Safety
                </h2>
                <p className="mt-2">
                  This site does not provide cracks, modified clients, APK
                  files, cheats, scripts, key generators, or
                  credential-collection code sites. External links should always
                  be checked before use.
                </p>
              </section>
            </div>
            <p className="mt-8 text-xs text-[#AFC8C0]">
              Last reviewed July 10, 2026. Official game page:{' '}
              <a
                href={siteFacts.officialSteamUrl}
                className="text-[#D989FF] underline underline-offset-4"
              >
                Steam app 3265230
              </a>
              .
            </p>
            <div className="mt-6">
              <MobileWikiNav currentPath="/disclaimer" locale={locale} />
            </div>
          </main>
          <WikiRouteSidebar currentPath="/disclaimer" locale={locale} />
        </div>
      </Container>
    </div>
  );
}
