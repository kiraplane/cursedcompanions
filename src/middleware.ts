import createMiddleware from 'next-intl/middleware';
import { type NextRequest, NextResponse } from 'next/server';
import { DEFAULT_LOCALE, LOCALES, routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);
const hasSingleLocale = LOCALES.length === 1;
const defaultLocalePrefix = `/${DEFAULT_LOCALE}`;

const publicRouteRedirects: Array<{ pattern: RegExp; target: string }> = [
  { pattern: /^\/(pricing|ai|ai-prompts)(?:\/.*)?$/, target: '/' },
  { pattern: /^\/blog(?:\/.*)?$/, target: '/guides' },
  { pattern: /^\/docs(?:\/.*)?$/, target: '/' },
  { pattern: /^\/(about|contact)\/?$/, target: '/' },
  {
    pattern: /^\/(auth|dashboard|admin|settings|payment)(?:\/.*)?$/,
    target: '/',
  },
  { pattern: /^\/steam\/?$/, target: '/download' },
  { pattern: /^\/release\/?$/, target: '/release-date' },
  { pattern: /^\/cursed-companions-wiki\/?$/, target: '/' },
  { pattern: /^\/cursed-companions-guide\/?$/, target: '/guides' },
  { pattern: /^\/cursed-companions-monsters-list\/?$/, target: '/monsters' },
  {
    pattern: /^\/cursed-companions-words-list\/?$/,
    target: '/guides/words-list-spells',
  },
  { pattern: /^\/cursed-companions-redeem-codes\/?$/, target: '/codes' },
  {
    pattern: /^\/cursed-companions-max-players\/?$/,
    target: '/how-many-players',
  },
  { pattern: /^\/cursed-companions-ps5\/?$/, target: '/platforms' },
  { pattern: /^\/cursed-companions-xbox\/?$/, target: '/platforms' },
  { pattern: /^\/cursed-companions-steam\/?$/, target: '/download' },
  { pattern: /^\/cursed-companions-apk\/?$/, target: '/download' },
];

export default function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const hostHeader = req.headers.get('host');
  const hostname = hostHeader?.split(':')[0].toLowerCase();
  const forwardedProto = req.headers.get('x-forwarded-proto');
  const productionHosts = new Set([
    'cursedcompanions.wiki',
    'www.cursedcompanions.wiki',
  ]);

  if (
    hostname &&
    productionHosts.has(hostname) &&
    (hostname !== 'www.cursedcompanions.wiki' ||
      forwardedProto === 'http' ||
      nextUrl.protocol === 'http:')
  ) {
    const canonicalUrl = new URL(nextUrl);
    canonicalUrl.protocol = 'https:';
    canonicalUrl.hostname = 'www.cursedcompanions.wiki';
    canonicalUrl.port = '';
    return NextResponse.redirect(canonicalUrl, 308);
  }

  const pathnameWithoutLocale = getPathnameWithoutLocale(
    nextUrl.pathname,
    LOCALES
  );
  const redirect = publicRouteRedirects.find(({ pattern }) =>
    pattern.test(pathnameWithoutLocale)
  );

  if (redirect) {
    return NextResponse.redirect(
      new URL(`${redirect.target}${nextUrl.search}`, nextUrl),
      308
    );
  }

  if (hasSingleLocale) {
    const isDefaultLocalePath =
      nextUrl.pathname === defaultLocalePrefix ||
      nextUrl.pathname.startsWith(`${defaultLocalePrefix}/`);

    if (isDefaultLocalePath) {
      return NextResponse.next();
    }

    const localizedPath =
      nextUrl.pathname === '/'
        ? defaultLocalePrefix
        : `${defaultLocalePrefix}${nextUrl.pathname}`;
    return NextResponse.rewrite(
      new URL(`${localizedPath}${nextUrl.search}`, nextUrl)
    );
  }

  return intlMiddleware(req);
}

function getPathnameWithoutLocale(pathname: string, locales: string[]) {
  return pathname.replace(new RegExp(`^/(${locales.join('|')})/`), '/');
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
