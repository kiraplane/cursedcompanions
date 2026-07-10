import type { GameModeEntry } from './types';

export const gameModes: GameModeEntry[] = [
  {
    name: 'Acts I–III',
    players: '1–8',
    goal: 'Clear authored act progression, meet treasure targets, and defeat each act boss.',
    route: '/guides/beginner-guide',
  },
  {
    name: 'Challenge Mode',
    players: '1–8',
    goal: 'Face tougher combinations and advanced monster variants with a prepared team.',
    route: '/monsters',
  },
  {
    name: 'Endless Mode',
    players: '1–8',
    goal: 'Survive repeating six-day cycles, rising treasure targets, and recurring bosses.',
    route: '/guides/endless-mode',
  },
  {
    name: 'Traitor Mode',
    players: 'Up to 16',
    goal: 'Complete tasks or identify secret Traitors before sabotage breaks the group.',
    route: '/guides/traitor-mode',
  },
];
