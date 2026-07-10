import { guides } from '@/data/cursedcompanions/guides';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { buildGuideMetadata, renderGuidePage } from '../guide-page';

const rootGuides = guides.filter(
  (guide) =>
    guide.path.split('/').filter(Boolean).length === 1 &&
    !['/codes', '/modes', '/monsters'].includes(guide.path)
);

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    rootGuides.map((guide) => ({ locale, slug: guide.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  return buildGuideMetadata(slug, locale, `/${slug}`);
}

export default async function RootGuidePage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  return renderGuidePage(slug, `/${slug}`, locale);
}
