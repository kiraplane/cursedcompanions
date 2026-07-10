import { Badge } from '@/components/ui/badge';
import { getHomeContent } from '@/data/cursedcompanions/localized';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Compass,
  Gamepad2,
  Menu,
  Mic2,
  RadioTower,
  ShieldCheck,
  Skull,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import type { ReactNode } from 'react';

interface SectionLink {
  href: string;
  label: string;
}

interface WikiNavLink {
  href: string;
  label: string;
}

interface WikiNavGroup {
  title: string;
  icon: typeof BookOpen;
  links: WikiNavLink[];
}

const wikiNavRoutes = [
  {
    title: 'Start Here',
    icon: Gamepad2,
    routes: ['/', '/guides', '/guides/beginner-guide', '/codes'],
  },
  {
    title: 'Voice & Words',
    icon: Mic2,
    routes: ['/guides/words-list-spells', '/guides/microphone-not-working'],
  },
  {
    title: 'Monsters & Survival',
    icon: Skull,
    routes: [
      '/monsters',
      '/guides/act-3-monsters-jester',
      '/guides/respawn-revive',
    ],
  },
  {
    title: 'Modes',
    icon: UsersRound,
    routes: [
      '/modes',
      '/guides/endless-mode',
      '/guides/traitor-mode',
      '/how-many-players',
    ],
  },
  {
    title: 'Version & Platforms',
    icon: Sparkles,
    routes: ['/release-date', '/platforms', '/steam-deck'],
  },
  {
    title: 'Official & Safety',
    icon: ShieldCheck,
    routes: ['/download', '/discord', '/disclaimer'],
  },
] as const;

export function getWikiNavGroups(locale?: Locale): WikiNavGroup[] {
  const routeLabels = getHomeContent(locale).routeLabels;

  return wikiNavRoutes.map((group) => ({
    title: group.title,
    icon: group.icon,
    links: group.routes.map((route) => ({
      href: route,
      label: routeLabels[route] ?? route,
    })),
  }));
}

function isCurrentPath(currentPath: string | undefined, href: string) {
  if (!currentPath) {
    return false;
  }

  return currentPath === href;
}

function WikiNavLinkItem({
  currentPath,
  href,
  label,
}: {
  currentPath?: string;
  href: string;
  label: string;
}) {
  const isActive = isCurrentPath(currentPath, href);

  return (
    <LocaleLink
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'group flex min-w-0 items-center justify-between gap-3 rounded-md border px-3 py-2 text-sm leading-6 transition',
        isActive
          ? 'border-[#D989FF] bg-[#D989FF] font-semibold text-[#08170E]'
          : 'border-[#28484A] bg-[#061313] text-[#C4D7CF] hover:border-[#D989FF] hover:bg-[#102C2C] hover:text-[#F7F2DF]'
      )}
    >
      <span className="min-w-0 break-words">{label}</span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          isActive ? 'text-[#08170E]' : 'text-[#D989FF]'
        )}
      />
    </LocaleLink>
  );
}

export function WikiRouteSidebar({
  children,
  currentPath,
  locale,
  sectionLinks = [],
}: {
  children?: ReactNode;
  currentPath?: string;
  locale?: Locale;
  sectionLinks?: SectionLink[];
}) {
  const groups = getWikiNavGroups(locale);

  return (
    <aside className="sticky top-24 hidden w-[264px] shrink-0 self-start space-y-4 lg:block">
      <div className="space-y-4">
        <div className="rounded-lg border border-[#28484A] bg-[#0C2222] p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D989FF]">
                Wiki Navigation
              </p>
              <h2 className="mt-1 font-display text-xl font-bold">
                Cursed routes
              </h2>
            </div>
            <Compass className="size-5 text-[#7CFF6B]" />
          </div>

          <div className="mt-4 space-y-4">
            {groups.map((group) => {
              const isGroupActive = group.links.some((link) =>
                isCurrentPath(currentPath, link.href)
              );

              return (
                <details
                  key={group.title}
                  open={isGroupActive}
                  className={cn(
                    'group rounded-md border p-3',
                    isGroupActive
                      ? 'border-[#D989FF]/65 bg-[#D989FF]/10'
                      : 'border-[#28484A] bg-[#061313]'
                  )}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-[#F7F2DF] [&::-webkit-details-marker]:hidden">
                    <span className="flex min-w-0 items-center gap-2">
                      <group.icon className="size-4 shrink-0 text-[#D989FF]" />
                      <span className="min-w-0 break-words">{group.title}</span>
                    </span>
                    <span className="ml-auto rounded-full bg-white/8 px-1.5 py-0.5 text-[10px] font-medium text-[#C4D7CF]">
                      {group.links.length}
                    </span>
                    <ChevronDown className="size-4 shrink-0 text-[#7CFF6B] transition group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 grid gap-2">
                    {group.links.map((link) => (
                      <WikiNavLinkItem
                        key={link.href}
                        currentPath={currentPath}
                        href={link.href}
                        label={link.label}
                      />
                    ))}
                  </div>
                </details>
              );
            })}
          </div>
        </div>

        {sectionLinks.length > 0 ? (
          <details className="group rounded-lg border border-[#28484A] bg-[#0C2222] p-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center gap-2">
                <BookOpen className="size-4 text-[#D989FF]" />
                <span className="font-display text-lg font-bold">
                  On this page
                </span>
              </span>
              <ChevronDown className="size-4 shrink-0 text-[#7CFF6B] transition group-open:rotate-180" />
            </summary>
            <div className="mt-3 grid gap-2 border-[#28484A] border-t pt-3">
              {sectionLinks.slice(0, 6).map((section) => (
                <a
                  key={section.href}
                  href={section.href}
                  className="rounded-md border border-[#28484A] bg-[#061313] px-3 py-2 text-sm leading-6 text-[#C4D7CF] transition hover:border-[#D989FF] hover:bg-[#102C2C] hover:text-[#F7F2DF]"
                >
                  {section.label}
                </a>
              ))}
            </div>
          </details>
        ) : null}

        {children}
      </div>
    </aside>
  );
}

export function MobileWikiNav({
  currentPath,
  locale,
  sectionLinks = [],
}: {
  currentPath?: string;
  locale?: Locale;
  sectionLinks?: SectionLink[];
}) {
  const groups = getWikiNavGroups(locale);

  return (
    <details className="group rounded-lg border border-[#28484A] bg-[#0C2222] p-4 lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
        <span className="flex min-w-0 items-center gap-2 font-display text-lg font-bold">
          <Menu className="size-5 shrink-0 text-[#D989FF]" />
          Wiki Menu
        </span>
        <Badge className="bg-[#D989FF] text-[#08170E]">
          {groups.reduce((total, group) => total + group.links.length, 0)} links
        </Badge>
      </summary>

      {sectionLinks.length > 0 ? (
        <div className="mt-4 border-[#28484A] border-t pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7CFF6B]">
            On this page
          </p>
          <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
            {sectionLinks.slice(0, 6).map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="shrink-0 rounded-md border border-[#28484A] bg-[#061313] px-3 py-2 text-sm text-[#C4D7CF]"
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-4 grid gap-4 border-[#28484A] border-t pt-4">
        {groups.map((group) => {
          const isGroupActive = group.links.some((link) =>
            isCurrentPath(currentPath, link.href)
          );

          return (
            <details
              key={group.title}
              open={isGroupActive}
              className="group rounded-md border border-[#28484A] bg-[#061313] p-3"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-[#F7F2DF] [&::-webkit-details-marker]:hidden">
                <span className="flex min-w-0 items-center gap-2">
                  <group.icon className="size-4 shrink-0 text-[#D989FF]" />
                  <span className="min-w-0 break-words">{group.title}</span>
                </span>
                <span className="ml-auto rounded-full bg-white/8 px-1.5 py-0.5 text-[10px] font-medium text-[#C4D7CF]">
                  {group.links.length}
                </span>
                <ChevronDown className="size-4 shrink-0 text-[#7CFF6B] transition group-open:rotate-180" />
              </summary>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {group.links.map((link) => (
                  <WikiNavLinkItem
                    key={link.href}
                    currentPath={currentPath}
                    href={link.href}
                    label={link.label}
                  />
                ))}
              </div>
            </details>
          );
        })}
      </div>
    </details>
  );
}

export function QuickWikiLinks({
  className,
  links,
  locale,
}: {
  className?: string;
  links?: ReadonlyArray<readonly [string, string]>;
  locale?: Locale;
}) {
  const routeLabels = getHomeContent(locale).routeLabels;
  const defaultRoutes = [
    { href: '/guides/beginner-guide', label: 'Beginner', icon: BookOpen },
    { href: '/guides/words-list-spells', label: 'Words', icon: Mic2 },
    { href: '/monsters', label: 'Monsters', icon: Skull },
    { href: '/modes', label: 'Modes', icon: UsersRound },
    { href: '/codes', label: 'Codes', icon: Sparkles },
    { href: '/discord', label: 'Discord', icon: RadioTower },
    { href: '/download', label: 'Download', icon: ShieldCheck },
    { href: '/platforms', label: 'Platforms', icon: Compass },
  ];
  const quickRoutes = links
    ? links.map(([label, href]) => ({ href, label, icon: BookOpen }))
    : defaultRoutes;

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {quickRoutes.map((route) =>
        route.href.startsWith('http') ? (
          <a
            key={route.href}
            href={route.href}
            target="_blank"
            rel="noreferrer"
            aria-label={route.label}
            className="inline-flex h-auto items-center gap-1.5 rounded-md border border-[#28484A] bg-[#061313]/80 px-2.5 py-1.5 text-[#F7F2DF] text-xs transition hover:border-[#D989FF] hover:bg-[#102C2C] sm:text-sm"
          >
            <route.icon className="size-3.5 shrink-0 text-[#D989FF]" />
            {route.label}
          </a>
        ) : (
          <LocaleLink
            key={route.href}
            href={route.href}
            aria-label={routeLabels[route.href] ?? route.label}
            className="inline-flex h-auto items-center gap-1.5 rounded-md border border-[#28484A] bg-[#061313]/80 px-2.5 py-1.5 text-[#F7F2DF] text-xs transition hover:border-[#D989FF] hover:bg-[#102C2C] sm:text-sm"
          >
            <route.icon className="size-3.5 shrink-0 text-[#D989FF]" />
            {route.label}
          </LocaleLink>
        )
      )}
    </div>
  );
}
