import { FaqSection } from '@/components/cursedcompanions/faq-section';
import {
  MobileWikiNav,
  WikiRouteSidebar,
} from '@/components/cursedcompanions/wiki-navigation';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getGuideArticleUi,
  getHomeContent,
} from '@/data/cursedcompanions/localized';
import { siteFacts } from '@/data/cursedcompanions/sources';
import type { Guide } from '@/data/cursedcompanions/types';
import { LocaleLink } from '@/i18n/navigation';
import { ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

function toSectionId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function getRelatedRouteLabel(
  route: string,
  routeLabels: Record<string, string>
) {
  return (
    routeLabels[route] ??
    route
      .replace(/^\/+/, '')
      .split('/')
      .filter(Boolean)
      .map((segment) =>
        segment
          .split('-')
          .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
          .join(' ')
      )
      .join(' ')
  );
}

export function GuideArticle({
  guide,
  locale,
  pathname,
}: {
  guide: Guide;
  locale?: Locale;
  pathname: string;
}) {
  const ui = getGuideArticleUi(locale);
  const routeLabels = {
    ...getHomeContent(locale).routeLabels,
    '/disclaimer': 'Disclaimer',
  };
  const canonicalUrl = `${siteFacts.domain}${pathname}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: guide.title,
        description: guide.summary,
        datePublished: guide.publishedAt,
        dateModified: guide.updatedAt,
        image: guide.coverImageUrl.startsWith('http')
          ? guide.coverImageUrl
          : `${siteFacts.domain}${guide.coverImageUrl}`,
        mainEntityOfPage: canonicalUrl,
        isPartOf: {
          '@type': 'WebSite',
          name: siteFacts.siteName,
          url: siteFacts.domain,
        },
        author: {
          '@type': 'Organization',
          name: siteFacts.siteName,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: siteFacts.siteName,
            item: siteFacts.domain,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Guides',
            item: `${siteFacts.domain}/guides`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: guide.title,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };
  const sectionLinks = guide.body.map((section) => ({
    href: `#${toSectionId(section.heading)}`,
    label: section.heading,
  }));
  const nextRoutes = guide.relatedRoutes.slice(0, 4);

  const videoEmbed = guide.video ? (
    <section className="overflow-hidden rounded-lg border border-[#28484A] bg-black">
      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube-nocookie.com/embed/${guide.video.id}?rel=0`}
        title={guide.video.title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <div className="bg-[#061313] px-4 py-3 text-sm leading-6 text-[#C4D7CF]">
        {ui.videoPrefix}{' '}
        <a
          href={guide.video.url}
          target="_blank"
          rel="noreferrer"
          className="text-[#D989FF] underline underline-offset-4"
        >
          {guide.video.title}
        </a>{' '}
        by {guide.video.channel}, {ui.videoSuffix}
      </div>
    </section>
  ) : null;

  return (
    <div className="bg-[#061313] py-10 text-[#F7F2DF]">
      <JsonLd data={jsonLd} />
      <Container className="px-4">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_264px]">
          <article className="min-w-0 space-y-6">
            <header className="rounded-lg border border-[#28484A] bg-[#0C2222] p-5 md:p-7">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#D989FF] text-[#08170E]">
                  {ui.categoryLabels[guide.category]}
                </Badge>
                <Badge
                  variant="outline"
                  className="border-[#D989FF]/60 bg-[#061313]/60 text-[#F7F2DF]"
                >
                  {ui.difficultyLabels[guide.difficulty]}
                </Badge>
                {guide.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-[#D989FF]/40 bg-[#061313]/50 text-[#F7F2DF]"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="mt-4 max-w-4xl font-display text-4xl font-black leading-tight md:text-5xl">
                {guide.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#C4D7CF] md:text-lg">
                {guide.summary}
              </p>

              <div className="mt-5">
                <MobileWikiNav
                  currentPath={pathname}
                  locale={locale}
                  sectionLinks={sectionLinks}
                />
              </div>
            </header>

            <div className="overflow-hidden rounded-lg border border-[#28484A] bg-[#0C2222]">
              <div className="relative aspect-[16/7] min-h-[180px] border-[#28484A] border-b">
                <Image
                  src={guide.coverImageUrl}
                  alt={`${guide.title} cover`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 860px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,25,21,0.02)_0%,rgba(17,25,21,0.58)_100%)]" />
              </div>

              <div className="p-5 md:p-8">
                <div className="space-y-8">
                  {guide.body.map((section, sectionIndex) => (
                    <div key={section.heading} className="space-y-8">
                      <section id={toSectionId(section.heading)}>
                        <h2 className="font-display text-2xl font-bold text-[#F7F2DF]">
                          {section.heading}
                        </h2>
                        <div className="mt-3 space-y-4 text-base leading-8 text-[#C4D7CF]">
                          {section.paragraphs.map((paragraph, index) => (
                            <p key={`${section.heading}-${index}`}>
                              {paragraph}
                            </p>
                          ))}
                        </div>
                        {section.bullets ? (
                          <ul className="mt-4 grid gap-2 text-sm leading-7 text-[#C4D7CF]">
                            {section.bullets.map((bullet, index) => (
                              <li
                                key={`${section.heading}-bullet-${index}`}
                                className="rounded-md border border-[#28484A] bg-[#061313] px-3 py-2"
                              >
                                {bullet}
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </section>
                      {sectionIndex === 0 ? videoEmbed : null}
                    </div>
                  ))}
                </div>

                <section className="mt-10 rounded-lg border border-[#28484A] bg-[#061313] p-5">
                  <div className="flex gap-3">
                    <ShieldCheck className="mt-1 size-5 shrink-0 text-[#7CFF6B]" />
                    <div>
                      <h2 className="font-display text-xl font-bold">
                        {ui.officialTitle}
                      </h2>
                      <p className="mt-2 text-sm leading-7 text-[#C4D7CF]">
                        {ui.officialBody}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#C4D7CF]">
                        <a
                          href={siteFacts.officialSteamUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[#D989FF] underline underline-offset-4"
                        >
                          {ui.officialLinkLabel}
                          <ExternalLink className="size-3" />
                        </a>
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mt-10 rounded-lg border border-[#28484A] bg-[#061313] p-5">
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D989FF]">
                        Next steps
                      </p>
                      <h2 className="mt-1 font-display text-xl font-bold">
                        Keep moving through the wiki
                      </h2>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-[#D989FF]/50 text-[#F7F2DF]"
                    >
                      {nextRoutes.length} recommended
                    </Badge>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {nextRoutes.map((route) => (
                      <Button
                        key={route}
                        asChild
                        variant="outline"
                        className="h-auto min-w-0 justify-between gap-3 whitespace-normal border-[#28484A] bg-[#0C2222] px-3 py-3 text-left text-[#F7F2DF] hover:bg-[#102C2C]"
                      >
                        <LocaleLink href={route}>
                          <span className="min-w-0 break-words">
                            {getRelatedRouteLabel(route, routeLabels)}
                          </span>
                          <ArrowRight className="size-4 shrink-0" />
                        </LocaleLink>
                      </Button>
                    ))}
                  </div>
                </section>

                <section className="mt-10">
                  <FaqSection items={guide.faq} title={ui.faqTitle} />
                </section>
              </div>
            </div>
          </article>

          <WikiRouteSidebar
            currentPath={pathname}
            locale={locale}
            sectionLinks={sectionLinks}
          />
        </div>
      </Container>
    </div>
  );
}
