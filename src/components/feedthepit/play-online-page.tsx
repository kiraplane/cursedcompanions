import { FaqSection } from '@/components/feedthepit/faq-section';
import { FeedGameFrame } from '@/components/feedthepit/feed-game-frame';
import { MobileWikiNav } from '@/components/feedthepit/wiki-navigation';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getPlayOnlineContent } from '@/data/feedthepit/localized';
import { siteFacts } from '@/data/feedthepit/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  Boxes,
  ExternalLink,
  Gamepad2,
  ShieldAlert,
  Skull,
  Sparkles,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

const gameSrc = siteFacts.browserGameUrl;
const posterSrc = siteFacts.officialHeroImage;

const guideIcons = {
  cards: Boxes,
  book: BookOpen,
  monster: Skull,
} as const;

export function FeedPlayOnlinePage({ locale }: { locale?: Locale }) {
  const content = getPlayOnlineContent(locale);
  const videoWatchUrl = `https://www.youtube.com/watch?v=${content.media.video.id}`;
  const videoEmbedUrl = `https://www.youtube-nocookie.com/embed/${content.media.video.id}`;
  const videoThumbnailUrl = `https://i.ytimg.com/vi/${content.media.video.id}/hq720.jpg`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${siteFacts.domain}/play-online#webpage`,
        name: content.title,
        url: `${siteFacts.domain}/play-online`,
        description: content.metadataDescription,
        isPartOf: {
          '@id': `${siteFacts.domain}/#website`,
        },
      },
      {
        '@type': 'VideoGame',
        name: siteFacts.gameName,
        author: {
          '@type': 'Organization',
          name: siteFacts.creator,
        },
        applicationCategory: 'Game',
        genre: ['Incremental', 'Puzzle', 'Strategy', 'Idle'],
        gamePlatform: ['Web Browser', 'Windows'],
        url: `${siteFacts.domain}/play-online`,
        sameAs: [siteFacts.officialSteamUrl, siteFacts.officialItchUrl],
      },
      {
        '@type': 'HowTo',
        '@id': `${siteFacts.domain}/play-online#how-to-play`,
        name: content.howTitle,
        description: content.howBody,
        step: content.howCards.map((step, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: step.label,
          text: step.body,
        })),
      },
      {
        '@type': 'VideoObject',
        '@id': `${siteFacts.domain}/play-online#official-trailer`,
        name: content.media.video.title,
        description: content.media.body,
        thumbnailUrl: [videoThumbnailUrl],
        uploadDate: '2026-06-23',
        url: videoWatchUrl,
        embedUrl: videoEmbedUrl,
        author: {
          '@type': 'Organization',
          name: siteFacts.creator,
        },
      },
    ],
  };

  return (
    <div className="bg-[#0B0708] text-[#F2E7D0]">
      <JsonLd data={jsonLd} />

      <section className="border-[#5B3132] border-b bg-[linear-gradient(135deg,#0B0708_0%,#17100F_54%,#2B1518_100%)] py-10 md:py-14">
        <Container className="space-y-6 px-4">
          <header className="max-w-4xl space-y-4">
            <Badge className="bg-[#E3483B] text-[#170B0A]">
              {content.badge}
            </Badge>
            <h1 className="font-display text-4xl font-black leading-tight md:text-6xl">
              {content.title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-[#E8D8C2] md:text-lg">
              {content.intro}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-[#E3483B] text-[#170B0A] hover:bg-[#FF7A5C]"
              >
                <LocaleLink href="/guides/beginner-guide">
                  {content.beginnerButton}
                  <ArrowRight className="size-4" />
                </LocaleLink>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#E3483B] bg-[#0B0708]/50 text-[#F2E7D0] hover:bg-[#251718]"
              >
                <LocaleLink href="/steam">{content.steamButton}</LocaleLink>
              </Button>
            </div>
            <MobileWikiNav currentPath="/play-online" locale={locale} />
          </header>

          <FeedGameFrame
            src={gameSrc}
            posterSrc={posterSrc}
            labels={{
              title: content.frameLabels.title,
              loading: content.frameLabels.loading,
              start: content.frameLabels.start,
              reset: content.frameLabels.reset,
              fullscreen: content.frameLabels.fullscreen,
              exitFullscreen: content.frameLabels.exitFullscreen,
              open: content.frameLabels.open,
            }}
          />
        </Container>
      </section>

      <section className="border-[#5B3132] border-b bg-[#17100F] py-12">
        <Container className="grid gap-4 px-4 md:grid-cols-3">
          <div className="rounded-lg border border-[#5B3132] bg-[#0B0708] p-5">
            <Gamepad2 className="size-7 text-[#E3483B]" />
            <h2 className="mt-4 font-display text-xl font-bold">
              {content.infoCards[0]?.title}
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#E8D8C2]">
              {content.infoCards[0]?.body}
            </p>
          </div>
          <div className="rounded-lg border border-[#5B3132] bg-[#0B0708] p-5">
            <Sparkles className="size-7 text-[#C9B28A]" />
            <h2 className="mt-4 font-display text-xl font-bold">
              {content.infoCards[1]?.title}
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#E8D8C2]">
              {content.infoCards[1]?.body}
            </p>
          </div>
          <div className="rounded-lg border border-[#5B3132] bg-[#0B0708] p-5">
            <ShieldAlert className="size-7 text-[#E3483B]" />
            <h2 className="mt-4 font-display text-xl font-bold">
              {content.infoCards[2]?.title}
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#E8D8C2]">
              {content.infoCards[2]?.body}
            </p>
            <LocaleLink
              href="/download"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#E3483B] underline underline-offset-4"
            >
              {content.downloadGuide}
              <ArrowRight className="size-3" />
            </LocaleLink>
            <a
              href={siteFacts.officialItchUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#E3483B] underline underline-offset-4"
            >
              {content.officialItch}
              <ExternalLink className="size-3" />
            </a>
          </div>
        </Container>
      </section>

      <section className="border-[#5B3132] border-b bg-[#0B0708] py-12">
        <Container className="grid gap-8 px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#E3483B]">
              {content.howEyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              {content.howTitle}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#E8D8C2]">
              {content.howBody}
            </p>
          </div>

          <ol className="grid gap-3 sm:grid-cols-2">
            {content.howCards.map((item, index) => (
              <li
                key={item.label}
                className="rounded-lg border border-[#5B3132] bg-[#17100F] p-5"
              >
                <div className="flex size-9 items-center justify-center rounded-lg bg-[#E3483B] text-sm font-black text-[#170B0A]">
                  {index + 1}
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#E8D8C2]">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section
        id="official-media"
        className="border-[#5B3132] border-b bg-[#17100F] py-12"
      >
        <Container className="space-y-8 px-4">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#E3483B]">
              {content.media.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              {content.media.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#E8D8C2]">
              {content.media.body}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <figure className="space-y-3">
              <div className="overflow-hidden rounded-lg border border-[#5B3132] bg-[#0B0708] shadow-2xl shadow-black/25">
                <iframe
                  src={videoEmbedUrl}
                  title={content.media.video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="aspect-video w-full"
                />
              </div>
              <figcaption className="text-sm leading-7 text-[#E8D8C2]">
                {content.media.video.caption}
              </figcaption>
            </figure>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {content.media.screenshots.map((image) => (
                <figure
                  key={image.src}
                  className="overflow-hidden rounded-lg border border-[#5B3132] bg-[#0B0708]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={338}
                    sizes="(min-width: 1024px) 32vw, (min-width: 640px) 33vw, 100vw"
                    className="aspect-video w-full object-cover"
                  />
                  <figcaption className="p-4 text-sm leading-6 text-[#E8D8C2]">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="space-y-6 px-4">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#E3483B]">
              {content.afterEyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              {content.afterTitle}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {content.guideLinks.map((item) => {
              const Icon = guideIcons[item.icon];

              return (
                <LocaleLink
                  key={item.href}
                  href={item.href}
                  className="rounded-lg border border-[#5B3132] bg-[#17100F] p-5 transition hover:border-[#E3483B]"
                >
                  <Icon className="size-7 text-[#E3483B]" />
                  <h3 className="mt-4 font-display text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#E8D8C2]">
                    {item.body}
                  </p>
                </LocaleLink>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-[#5B3132] border-t bg-[#17100F] py-12">
        <Container className="px-4">
          <FaqSection items={content.faq} />
        </Container>
      </section>
    </div>
  );
}
