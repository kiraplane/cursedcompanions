'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BookOpen,
  Boxes,
  CalendarClock,
  Compass,
  Database,
  Download,
  Gamepad2,
  Heart,
  ListChecks,
  MessageCircle,
  ShieldAlert,
  Sparkles,
  UsersRound,
  Wrench,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export function useNavbarLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.navbar');

  return [
    {
      title: t('guides.title'),
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
      items: [
        {
          title: 'Guides hub',
          description:
            'All beginner, fishing, walkthrough, and decision guides.',
          href: Routes.Guides,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Beginner guide',
          description:
            'First-week save planning for farming, quests, and residents.',
          href: Routes.BeginnerGuide,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
        {
          title: 'Walkthrough',
          description: 'Route your early days without missing key systems.',
          href: Routes.Walkthrough,
          external: false,
          icon: <Compass className="size-4" />,
        },
        {
          title: 'Fishing guide',
          description: 'Use fishing as a steady resource and routine path.',
          href: Routes.Fishing,
          external: false,
          icon: <Boxes className="size-4" />,
        },
      ],
    },
    {
      title: t('platforms.title'),
      href: Routes.Platforms,
      external: false,
      icon: <Gamepad2 className="size-4" />,
      items: [
        {
          title: 'Platform hub',
          description:
            'Compare Steam, Mac, Switch, Switch 2, and Android paths.',
          href: Routes.Platforms,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Release date',
          description: 'Launch timing and platform availability in one place.',
          href: Routes.ReleaseDate,
          external: false,
          icon: <CalendarClock className="size-4" />,
        },
        {
          title: 'Demo guide',
          description: 'Decide whether the demo is useful for your setup.',
          href: Routes.Demo,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Switch',
          description: 'Nintendo Switch and Switch 2 buying notes.',
          href: Routes.Switch,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Steam Deck',
          description: 'Portable PC comfort checks and settings decisions.',
          href: Routes.SteamDeck,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Download',
          description: 'Safe store paths and download-risk guidance.',
          href: Routes.Download,
          external: false,
          icon: <Download className="size-4" />,
        },
      ],
    },
    {
      title: t('database.title'),
      href: Routes.Database,
      external: false,
      icon: <Database className="size-4" />,
      items: [
        {
          title: 'Database hub',
          description: 'Browse all structured Moonlight Peaks data categories.',
          href: Routes.Database,
          external: false,
          icon: <Database className="size-4" />,
        },
        {
          title: 'Characters',
          description:
            'Residents, families, species, birthdays, and portraits.',
          href: Routes.DatabaseCharacters,
          external: false,
          icon: <UsersRound className="size-4" />,
        },
        {
          title: 'Families',
          description: 'Family groups, known members, and role context.',
          href: Routes.DatabaseFamilies,
          external: false,
          icon: <Heart className="size-4" />,
        },
        {
          title: 'Locations',
          description: 'Town places, farm areas, shops, and route planning.',
          href: Routes.DatabaseLocations,
          external: false,
          icon: <Compass className="size-4" />,
        },
        {
          title: 'Items',
          description:
            'Crops, flowers, tools, resources, animals, and recipes.',
          href: Routes.DatabaseItems,
          external: false,
          icon: <Boxes className="size-4" />,
        },
      ],
    },
    {
      title: t('tools.title'),
      href: Routes.Tools,
      external: false,
      icon: <Wrench className="size-4" />,
      items: [
        {
          title: 'Tools hub',
          description: 'All local trackers and planning calculators.',
          href: Routes.Tools,
          external: false,
          icon: <Wrench className="size-4" />,
        },
        {
          title: 'Platform picker',
          description: 'Answer a few questions and pick the best version.',
          href: Routes.ToolPlatformPicker,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Romance tracker',
          description: 'Shortlist residents and keep private route notes.',
          href: Routes.ToolRomanceTracker,
          external: false,
          icon: <Heart className="size-4" />,
        },
        {
          title: 'Item tracker',
          description: 'Track crops, resources, tools, recipes, and animals.',
          href: Routes.ToolItemTracker,
          external: false,
          icon: <ListChecks className="size-4" />,
        },
        {
          title: 'Farming calculator',
          description: 'Compare crop scenarios with your own save values.',
          href: Routes.ToolFarmingProfitCalculator,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
      ],
    },
    {
      title: t('romance.title'),
      href: Routes.Romance,
      external: false,
      icon: <Heart className="size-4" />,
      items: [
        {
          title: 'Romance guide',
          description:
            'Relationship planning, dateables, and heart-route habits.',
          href: Routes.Romance,
          external: false,
          icon: <Heart className="size-4" />,
        },
        {
          title: 'Characters',
          description: 'Resident overview before picking a route.',
          href: Routes.Characters,
          external: false,
          icon: <UsersRound className="size-4" />,
        },
        {
          title: 'Gift guide',
          description: 'Safe gift strategy while exact favorites settle.',
          href: Routes.Gifts,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
        {
          title: 'Character database',
          description:
            'Filter resident rows with portraits and family context.',
          href: Routes.DatabaseCharacters,
          external: false,
          icon: <Database className="size-4" />,
        },
        {
          title: 'Romance tracker',
          description: 'Save your shortlist locally in the browser.',
          href: Routes.ToolRomanceTracker,
          external: false,
          icon: <ListChecks className="size-4" />,
        },
      ],
    },
    {
      title: 'Farm & Magic',
      href: Routes.Farming,
      external: false,
      icon: <Sparkles className="size-4" />,
      items: [
        {
          title: t('farming.title'),
          description: 'Farm routines, crop planning, and first-week chores.',
          href: Routes.Farming,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
        {
          title: 'Farming calculator',
          description: 'Run crop math with manual prices from your save.',
          href: Routes.ToolFarmingProfitCalculator,
          external: false,
          icon: <Wrench className="size-4" />,
        },
        {
          title: t('magic.title'),
          description:
            'Spells, potions, shapeshifting, and supernatural chores.',
          href: Routes.Magic,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
        {
          title: t('nokturna.title'),
          description: 'Nokturna systems and launch-week planning notes.',
          href: Routes.Nokturna,
          external: false,
          icon: <Boxes className="size-4" />,
        },
        {
          title: 'Item database',
          description: 'Crops, resources, tools, animals, and recipes.',
          href: Routes.DatabaseItems,
          external: false,
          icon: <Database className="size-4" />,
        },
      ],
    },
    {
      title: 'Safety',
      href: Routes.Discord,
      external: false,
      icon: <ShieldAlert className="size-4" />,
      items: [
        {
          title: t('download.title'),
          description: 'Safe download paths and platform links.',
          href: Routes.Download,
          external: false,
          icon: <Download className="size-4" />,
        },
        {
          title: t('discord.title'),
          description: 'Community access and spoiler-aware server advice.',
          href: Routes.Discord,
          external: false,
          icon: <MessageCircle className="size-4" />,
        },
        {
          title: 'Cheats safety',
          description: 'Avoid fake trainers, mod posts, and unsafe APKs.',
          href: Routes.Cheats,
          external: false,
          icon: <ShieldAlert className="size-4" />,
        },
        {
          title: 'Disclaimer',
          description: 'Site scope, affiliation notes, and content limits.',
          href: Routes.Disclaimer,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
      ],
    },
  ];
}
