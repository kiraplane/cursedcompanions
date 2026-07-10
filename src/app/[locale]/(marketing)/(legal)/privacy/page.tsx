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
    title: 'Privacy Policy | Cursed Companions Wiki',
    description:
      'Privacy policy for Cursed Companions Wiki, an independent guide site.',
    locale,
    pathname: '/privacy',
  });
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#061313] py-12 text-[#F7F2DF]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Privacy Policy</h1>
        <p className="leading-8 text-[#C4D7CF]">
          Cursed Companions Wiki is an independent guide site. We do not require
          accounts for browsing the wiki, monster list, words and spell guides,
          mode routes, codes, platform status, or official-link pages.
        </p>
        <p className="leading-8 text-[#C4D7CF]">
          Standard analytics or hosting logs may record aggregate traffic data
          such as page views, referrers, device type, and approximate region. We
          use this to improve guides and fix broken pages.
        </p>
        <p className="leading-8 text-[#C4D7CF]">
          Remote media may be loaded from official storefronts or YouTube when a
          page embeds official artwork, store links, screenshots, or guide
          videos.
        </p>
        <p className="leading-8 text-[#C4D7CF]">
          Privacy questions can be sent to hello@cursedcompanions.wiki.
        </p>
      </Container>
    </div>
  );
}
