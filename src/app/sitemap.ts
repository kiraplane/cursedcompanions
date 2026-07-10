import { guides } from '@/data/cursedcompanions/guides';
import { Routes } from '@/routes';
import type { MetadataRoute } from 'next';
import { routing } from '../i18n/routing';
import { getCanonicalBaseUrl } from '../lib/urls/urls';

const coreRoutes = [
  Routes.Root,
  Routes.Guides,
  Routes.Monsters,
  Routes.Modes,
  Routes.Codes,
  Routes.PrivacyPolicy,
  Routes.TermsOfService,
  Routes.CookiePolicy,
  Routes.Disclaimer,
];

const allRoutes = [
  ...new Set([...coreRoutes, ...guides.map((guide) => guide.path)]),
];
const stableLastModified = new Date('2026-07-10T00:00:00.000Z');
const priorityRoutes = new Set([
  Routes.Root,
  Routes.Guides,
  Routes.Monsters,
  Routes.Codes,
  Routes.BeginnerGuide,
  Routes.WordsAndSpells,
  Routes.MicrophoneFix,
  Routes.ActThree,
]);

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = getCanonicalBaseUrl();

  return routing.locales.flatMap((locale) =>
    allRoutes.map((route) => {
      const localizedRoute =
        locale === routing.defaultLocale ? route : `/${locale}${route}`;

      return {
        url: `${baseUrl}${localizedRoute}`,
        lastModified: stableLastModified,
        changeFrequency:
          route === Routes.Root ||
          route === Routes.Guides ||
          route === Routes.Codes ||
          route === Routes.Monsters
            ? ('daily' as const)
            : ('weekly' as const),
        priority:
          route === Routes.Root
            ? 1
            : priorityRoutes.has(route as Routes)
              ? 0.9
              : 0.8,
      };
    })
  );
}
