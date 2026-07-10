import type { MonsterEntry } from './types';

export const monsters: MonsterEntry[] = [
  {
    name: 'Foul Moth',
    act: 'Core game',
    trigger: 'Reacts when players swear.',
    response:
      'Keep panic chatter clean and warn the group before risky fights.',
    confidence: 'high',
  },
  {
    name: 'Meatgrinder',
    act: 'Core game',
    trigger: 'Voice-activated confrontation.',
    response:
      'Use the Spell Book response; the official store highlights “Who’s your Daddy!” as its repel phrase.',
    confidence: 'high',
  },
  {
    name: 'The Bride',
    act: 'Core game',
    trigger: 'Responds to spoken interaction.',
    response:
      'Use awkward confessions or bad pickup-line phrases shown by the current Spell Book.',
    confidence: 'high',
  },
  {
    name: 'Antoinette',
    act: 'Core / challenge variants',
    trigger: 'Direct combat and variant status effects.',
    response:
      'Create space, identify the active variant, and prepare the matching cure or movement plan.',
    confidence: 'high',
  },
  {
    name: 'Blight Antoinette',
    act: 'Challenge / Endless',
    trigger:
      'Inflicts blight that can produce Blightwalkers from fallen players.',
    response:
      'Treat infection and revives as a team priority before the room fills.',
    confidence: 'high',
  },
  {
    name: 'Poison Antoinette',
    act: 'Challenge / Endless',
    trigger: 'Inflicts poison damage.',
    response:
      'Use the current spoken cure phrases and keep the healer close enough to be heard.',
    confidence: 'high',
  },
  {
    name: 'Ice Antoinette',
    act: 'Challenge / Endless',
    trigger: 'Reduces movement speed.',
    response:
      'Avoid getting boxed in with faster creatures; keep an exit lane open.',
    confidence: 'high',
  },
  {
    name: 'Doorpelganger',
    act: 'Act III',
    trigger: 'Hides behind doors that look normal.',
    response:
      'Use the upgraded Spell Torch to reveal dangerous-door markings before committing.',
    confidence: 'high',
  },
  {
    name: 'Mimic',
    act: 'Act III',
    trigger: 'Copies the form of another player.',
    response:
      'Verify teammates by position and recent actions instead of trusting the silhouette.',
    confidence: 'high',
  },
  {
    name: 'Oilyphant',
    act: 'Act III',
    trigger: 'Becomes aggressive when it is not fed.',
    response:
      'Keep track of food and solve the demand before the room becomes a chase.',
    confidence: 'high',
  },
  {
    name: 'Big Baby',
    act: 'Act III',
    trigger: 'A giant doll disabled by specific spell words.',
    response:
      'Check the Spell Book and assign one clear speaker so overlapping voices do not delay the phrase.',
    confidence: 'high',
  },
  {
    name: 'Anglershark',
    act: 'Act III water areas',
    trigger: 'Lurks in flooded sections where vision and audio are reduced.',
    response:
      'Enter water as a group, shorten callouts, and preserve a visible retreat path.',
    confidence: 'high',
  },
  {
    name: 'Necrofish',
    act: 'Act III water areas',
    trigger: 'Appears in the flooded dungeon ecosystem.',
    response:
      'Treat murky water as occupied until the team confirms it is clear.',
    confidence: 'high',
  },
  {
    name: 'Dungeon Leech',
    act: 'Act III water areas',
    trigger: 'Appears around flooded dungeon sections.',
    response: 'Move together and check health after every water encounter.',
    confidence: 'high',
  },
  {
    name: 'Grumble Chest',
    act: 'Act III',
    trigger: 'A creature disguised as a treasure opportunity.',
    response:
      'Use the upgraded Spell Torch to destroy it and secure the hidden treasure.',
    confidence: 'high',
  },
  {
    name: 'Jester',
    act: 'Act III boss',
    trigger: 'Uses unique death curses that change team communication.',
    response:
      'Read every new curse, reduce casual chatter, and decide who speaks before each mechanic.',
    confidence: 'high',
  },
];
