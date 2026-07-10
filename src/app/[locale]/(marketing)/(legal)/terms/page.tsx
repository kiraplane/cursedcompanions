import Container from '@/components/layout/container';
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
    title: 'Terms of Service | Cursed Companions Wiki',
    description:
      'Terms for using Cursed Companions Wiki, an independent Cursed Companions guide site.',
    locale,
    pathname: '/terms',
  });
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#061313] py-12 text-[#F7F2DF]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Terms of Service</h1>
        <p className="leading-8 text-[#C4D7CF]">
          This site provides independent Cursed Companions guides, source notes,
          and official-link guidance. It is not affiliated with, endorsed by,
          sponsored by, or operated by Crimson Forge Studios, Valve, Steam,
          Discord, or YouTube.
        </p>
        <p className="leading-8 text-[#C4D7CF]">
          Monster behavior, spell phrases, codes, patch behavior, prices, and
          platform support can change after updates. Treat guide pages as
          community-oriented guidance and verify important details in the live
          game and official sources.
        </p>
        <p className="leading-8 text-[#C4D7CF]">
          Do not use this site to distribute unauthorized game files, unsafe
          downloads, modified clients, paid game files, cheats, key generators,
          or automation scripts.
        </p>
        <p className="leading-8 text-[#C4D7CF]">
          Questions about these terms can be sent to
          hello@cursedcompanions.wiki.
        </p>
      </Container>
    </div>
  );
}
