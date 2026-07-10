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
    title: 'Cookie Policy | Cursed Companions Wiki',
    description:
      'How Cursed Companions Wiki uses essential cookies, analytics, and similar technologies.',
    locale,
    pathname: '/cookie',
  });
}

export default function CookiePolicyPage() {
  return (
    <div className="bg-[#061313] py-12 text-[#F7F2DF]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Cookie Policy</h1>
        <p className="leading-8 text-[#C4D7CF]">
          Cursed Companions Wiki uses essential cookies and similar technologies
          to keep the site working, remember basic preferences, and understand
          aggregate traffic patterns.
        </p>
        <p className="leading-8 text-[#C4D7CF]">
          Analytics providers may set limited cookies to measure page
          performance, referrers, and general device information. We use this
          aggregate data to improve guide pages and maintain the site.
        </p>
        <p className="leading-8 text-[#C4D7CF]">
          You can block or delete cookies in your browser settings. Some
          features, such as language preferences or consent choices, may not
          work as expected when cookies are disabled.
        </p>
        <p className="leading-8 text-[#C4D7CF]">
          Questions about this policy can be sent to
          hello@cursedcompanions.wiki.
        </p>
      </Container>
    </div>
  );
}
