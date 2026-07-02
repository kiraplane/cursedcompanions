import Container from '@/components/layout/container';
import { siteFacts } from '@/data/feedthepit/sources';
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
    title: 'Disclaimer | Feed The Pit',
    description:
      'Disclaimer for Feed The Pit, an independent guide and play-online site.',
    locale,
    pathname: '/disclaimer',
  });
}

export default function DisclaimerPage() {
  return (
    <div className="bg-[#0B0708] py-12 text-[#F2E7D0]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Disclaimer</h1>
        <p className="leading-8 text-[#E8D8C2]">
          Feed The Pit Wiki is an independent guide site. It is not affiliated
          with, endorsed by, sponsored by, or operated by Curious Fox Sox,
          mooncrustgames, Valve, Steam, itch.io, or any official distribution
          platform.
        </p>
        <p className="leading-8 text-[#E8D8C2]">
          Feed The Pit, its name, art, music, game files, code, and official
          materials belong to Curious Fox Sox, mooncrustgames, and the
          respective rights holders. This site does not redistribute paid Steam
          files, modified clients, APK mirrors, save editors, or unsafe
          downloads.
        </p>
        <p className="leading-8 text-[#E8D8C2]">
          The play-online page self-hosts the mooncrustgames HTML5 browser build
          with permission from the user&apos;s project requirements. The page
          clearly links back to Steam and itch.io sources.
        </p>
        <p className="leading-8 text-[#E8D8C2]">
          For the Curious Fox Sox Act 1 release, use{' '}
          <a
            href={siteFacts.officialSteamUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#E3483B] underline underline-offset-4"
          >
            the official Steam page
          </a>
          . For the mooncrustgames browser page, use{' '}
          <a
            href={siteFacts.officialItchUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#E3483B] underline underline-offset-4"
          >
            the itch.io page
          </a>
          .
        </p>
      </Container>
    </div>
  );
}
