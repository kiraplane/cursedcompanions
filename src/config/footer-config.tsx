'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';

export function useFooterLinks(): NestedMenuItem[] {
  return [
    {
      title: 'Start',
      items: [
        {
          title: 'Beginner Guide',
          href: Routes.BeginnerGuide,
          external: false,
        },
        {
          title: 'Words and Spells',
          href: Routes.WordsAndSpells,
          external: false,
        },
        {
          title: 'Microphone Fixes',
          href: Routes.MicrophoneFix,
          external: false,
        },
        { title: 'All Guides', href: Routes.Guides, external: false },
      ],
    },
    {
      title: 'Survive',
      items: [
        { title: 'Monster List', href: Routes.Monsters, external: false },
        { title: 'Act III and Jester', href: Routes.ActThree, external: false },
        { title: 'Respawn Guide', href: Routes.RespawnGuide, external: false },
      ],
    },
    {
      title: 'Modes',
      items: [
        { title: 'All Modes', href: Routes.Modes, external: false },
        { title: 'Endless Mode', href: Routes.EndlessMode, external: false },
        { title: 'Traitor Mode', href: Routes.TraitorMode, external: false },
        { title: 'Max Players', href: Routes.HowManyPlayers, external: false },
      ],
    },
    {
      title: 'Official Routes',
      items: [
        { title: 'Codes', href: Routes.Codes, external: false },
        { title: 'Download', href: Routes.Download, external: false },
        { title: 'Platforms', href: Routes.Platforms, external: false },
        { title: 'Steam Deck', href: Routes.SteamDeck, external: false },
        { title: 'Discord', href: Routes.Discord, external: false },
      ],
    },
    {
      title: 'Legal',
      items: [
        { title: 'Disclaimer', href: Routes.Disclaimer, external: false },
        { title: 'Privacy', href: Routes.PrivacyPolicy, external: false },
        { title: 'Terms', href: Routes.TermsOfService, external: false },
        { title: 'Cookies', href: Routes.CookiePolicy, external: false },
      ],
    },
  ];
}
