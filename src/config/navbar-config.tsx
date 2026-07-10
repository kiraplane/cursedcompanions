'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BookOpen,
  Download,
  Gamepad2,
  Gift,
  MessageCircle,
  Mic2,
  ShieldCheck,
  Skull,
  Sparkles,
  UsersRound,
} from 'lucide-react';

export function useNavbarLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Guides',
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
      items: [
        {
          title: 'All guides',
          description: 'Every current Cursed Companions decision route.',
          href: Routes.Guides,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Beginner guide',
          description: 'First-run voice roles, quota, gear, and retreat plan.',
          href: Routes.BeginnerGuide,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Words and spells',
          description: 'Forbidden words, Spell Book, and safe callouts.',
          href: Routes.WordsAndSpells,
          external: false,
          icon: <Mic2 className="size-4" />,
        },
        {
          title: 'Microphone fixes',
          description: 'Separate voice chat from speech recognition failures.',
          href: Routes.MicrophoneFix,
          external: false,
          icon: <Mic2 className="size-4" />,
        },
      ],
    },
    {
      title: 'Monsters',
      href: Routes.Monsters,
      external: false,
      icon: <Skull className="size-4" />,
      items: [
        {
          title: 'Monster list',
          description: 'Verified threats, triggers, and team responses.',
          href: Routes.Monsters,
          external: false,
          icon: <Skull className="size-4" />,
        },
        {
          title: 'Act III and Jester',
          description: 'Water areas, new monsters, gear, and boss callouts.',
          href: Routes.ActThree,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
        {
          title: 'Respawn and revive',
          description: 'Respawn Dice, Plan B, devices, and return handoff.',
          href: Routes.RespawnGuide,
          external: false,
          icon: <ShieldCheck className="size-4" />,
        },
      ],
    },
    {
      title: 'Modes',
      href: Routes.Modes,
      external: false,
      icon: <UsersRound className="size-4" />,
      items: [
        {
          title: 'All modes',
          description: 'Acts, Challenge, Endless, and Traitor compared.',
          href: Routes.Modes,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Endless Mode',
          description: 'Six-day cycles, bosses, saves, and Soul Potions.',
          href: Routes.EndlessMode,
          external: false,
          icon: <Gamepad2 className="size-4" />,
        },
        {
          title: 'Traitor Mode',
          description: '16-player evidence, meetings, and curse discipline.',
          href: Routes.TraitorMode,
          external: false,
          icon: <UsersRound className="size-4" />,
        },
        {
          title: 'Max players',
          description: '8-player co-op and 16-player Traitor limits.',
          href: Routes.HowManyPlayers,
          external: false,
          icon: <UsersRound className="size-4" />,
        },
      ],
    },
    {
      title: 'Codes & Links',
      href: Routes.Codes,
      external: false,
      icon: <Gift className="size-4" />,
      items: [
        {
          title: 'Codes',
          description: 'Officially published skin code and redemption flow.',
          href: Routes.Codes,
          external: false,
          icon: <Gift className="size-4" />,
        },
        {
          title: 'Official download',
          description: 'Steam app, requirements, and unsafe mirror warnings.',
          href: Routes.Download,
          external: false,
          icon: <Download className="size-4" />,
        },
        {
          title: 'Discord',
          description: 'Official community, teammate, and support routes.',
          href: Routes.Discord,
          external: false,
          icon: <MessageCircle className="size-4" />,
        },
        {
          title: 'Version 1.0',
          description: 'Full release, Act III, Steam, and platform status.',
          href: Routes.ReleaseDate,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
      ],
    },
  ];
}
