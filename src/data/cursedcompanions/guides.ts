import type { Guide, GuideVideo } from './types';

const checkedAt = '2026-07-24';

function youtubeThumbnail(id: string) {
  return `https://i.ytimg.com/vi/${id}/hq720.jpg`;
}

const videos = {
  release: {
    id: 'K5XnfqoBXfU',
    title: 'Cursed Companions - Official Version 1.0 Release Date Trailer',
    channel: 'Crimson Forge Studios',
    url: 'https://www.youtube.com/watch?v=K5XnfqoBXfU',
    thumbnailUrl: youtubeThumbnail('K5XnfqoBXfU'),
    publishedAt: '2026-06',
    checkedAt,
  },
  gameplay: {
    id: 'S6VuGgDA6OM',
    title: 'Cursed Companions Latest Gameplay',
    channel: 'Crimson Forge Studios',
    url: 'https://www.youtube.com/watch?v=S6VuGgDA6OM',
    thumbnailUrl: youtubeThumbnail('S6VuGgDA6OM'),
    publishedAt: '2025-11',
    checkedAt,
  },
  communityGameplay: {
    id: '8w_ZSiVpo2c',
    title: 'Cursed Companions Is Hilariously Weird',
    channel: 'Mr. Fruit',
    url: 'https://www.youtube.com/watch?v=8w_ZSiVpo2c',
    thumbnailUrl: youtubeThumbnail('8w_ZSiVpo2c'),
    publishedAt: '2026-03',
    checkedAt,
  },
  voiceChaos: {
    id: 'WoKeWES4EQI',
    title: 'If You Say These Words... You DIE',
    channel: 'Grizzy',
    url: 'https://www.youtube.com/watch?v=WoKeWES4EQI',
    thumbnailUrl: youtubeThumbnail('WoKeWES4EQI'),
    publishedAt: '2025-12',
    checkedAt,
  },
} satisfies Record<string, GuideVideo>;

export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    path: '/guides/beginner-guide',
    title: 'Cursed Companions Beginner Guide',
    seoTitle: 'Cursed Companions Beginner Guide - First Run Route',
    seoDescription:
      'Start Cursed Companions with a clear route for forbidden words, the Spell Book, treasure targets, equipment, revives, and safe team communication.',
    summary:
      'Your first successful run is built around short callouts, one designated Spell Book reader, an early retreat rule, and treasure discipline—not fearless dungeon depth.',
    category: 'Start',
    difficulty: 'Beginner',
    coverImageUrl: '/cursedcompanions/guides/dungeon-team.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'cursed companions beginner guide',
      'cursed companions gameplay tips',
      'cursed companions how to play',
    ],
    sourceNotes:
      'Built from the official store, press kit, gameplay overview, full-release notes, FAQ, and current player gameplay.',
    video: videos.gameplay,
    tags: ['Beginner', 'First Run', 'Teamwork'],
    relatedRoutes: [
      '/guides/words-list-spells',
      '/monsters',
      '/modes',
      '/guides/respawn-revive',
    ],
    body: [
      {
        heading: 'Treat speech like a shared control scheme',
        paragraphs: [
          'Cursed Companions listens to the whole group. A phrase can help one player while hurting another whose forbidden word appears inside it, so the safest beginner team is not the quietest team; it is the team that knows who is speaking and why. Before opening the portal, read every visible curse aloud once, agree on replacement words for common callouts, and stop using long sentences when the room becomes dangerous.',
          'Pick one person to read the Spell Book during a crisis. Everyone else should report only the information that reader needs: monster name, player condition, direction, and whether a door or trap is involved. Overlapping voices make recognition harder and create more chances to trigger a curse. If the designated reader dies, name the replacement immediately instead of letting four players compete for the same spell.',
        ],
        bullets: [
          'Use names before instructions: “Maya, left door” is clearer than “go over there.”',
          'Replace dangerous filler words with short neutral sounds agreed before the run.',
          'Pause casual conversation while reading a newly added curse or monster phrase.',
        ],
      },
      {
        heading: 'Win the quota before chasing the dungeon',
        paragraphs: [
          'The beginner mistake is treating every open corridor as progress. Your actual job is to bring back enough treasure while keeping enough people alive to control the next room. Mark the return route as you explore, keep one player aware of carried value, and call the retreat before the group is injured, separated, or low on useful equipment. Procedural generation means memorizing a map will not save you; a repeatable navigation habit will.',
          'Do not let one curious player drag the party several rooms beyond the last safe junction. Search in a compact shape, bring treasure back in manageable batches, and use the home island as a planning space rather than a place you visit only after a disaster. Meeting a target with spare time is stronger than finding one more item and losing the whole carry.',
        ],
      },
      {
        heading: 'Buy equipment for the failure you keep repeating',
        paragraphs: [
          'Equipment is valuable when it solves a known problem. A Teleport Stone can protect a deep return, an Ice Wand can create space, and potions can answer specific status or survival pressure. Buying a little of everything leaves the group with no clear plan and makes limited inventory harder to manage.',
          'After each failed day, name one reason the run collapsed. If the team got lost, improve navigation and return tools. If a monster pinned the group, buy control. If voice recognition failed, fix the microphone before spending treasure. The right purchase is the one that changes the next attempt, not the item with the funniest description.',
        ],
      },
      {
        heading: 'Keep dead players in the plan',
        paragraphs: [
          'Death is no longer a pure spectator state. Respawn Dice give the dead player repeated chances to return, while Plan B can revive its carrier automatically. Older team-controlled options such as the Dark Shrine, sarcophagus, and Respawn Egg still matter when available. Call out who is dead, who carries a revive option, and where the living players are moving so a returning player does not reappear into another bad room.',
          'A revive is not permission to repeat the same mistake. When someone returns, give them a ten-second reset: current curses, nearest danger, route home, and which inventory slot matters. That compact handoff prevents the revived player from speaking a newly dangerous word or walking straight back into the trigger that killed them.',
        ],
      },
      {
        heading: 'A clean first-run checklist',
        paragraphs: [
          'Before the portal opens, test speech-to-text captions, read the current forbidden words, name the Spell Book reader, choose a retreat condition, and decide who tracks treasure. Inside the dungeon, keep the party close enough for useful voice chat, announce new monsters before improvising, and return early when the route becomes uncertain.',
          'After the run, change one system at a time. If you change vocabulary, equipment, route discipline, and team roles all at once, you will not know what fixed the problem. Cursed Companions rewards teams that build a small shared language and improve it over several runs.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can you play Cursed Companions solo?',
        answer:
          'Yes. Steam lists single-player support, but the voice and accidental-curse systems are designed to become richer with a group.',
      },
      {
        question: 'What should a new team do before the first portal?',
        answer:
          'Test speech captions, read the current curses, choose one Spell Book reader, set a retreat rule, and decide who tracks carried treasure.',
      },
      {
        question: 'Why do our runs collapse even when we find treasure?',
        answer:
          'Most early failures come from overstaying, splitting the group, overlapping voice calls, or carrying value deeper instead of banking it.',
      },
    ],
  },
  {
    slug: 'words-list-spells',
    path: '/guides/words-list-spells',
    title: 'Cursed Companions Words List and Spell Guide',
    seoTitle: 'Cursed Companions Words List, Spells and Voice Commands',
    seoDescription:
      'Understand Cursed Companions forbidden words, spell phrases, the Spell Book, voice-triggered monsters, captions, and custom language files.',
    summary:
      'There is no single safe phrase list for every run. Read the current Spell Book, scan every new curse, and assign one speaker before using a voice counter.',
    category: 'Voice',
    difficulty: 'Beginner',
    coverImageUrl: '/cursedcompanions/guides/voice-monster.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'cursed companions words list',
      'cursed companions spells',
      'cursed companions voice commands',
    ],
    sourceNotes:
      'Uses official store examples, the current combined Spell Book update, developer FAQ, and language-modding documentation.',
    video: videos.voiceChaos,
    tags: ['Words', 'Spells', 'Voice Commands'],
    relatedRoutes: [
      '/guides/microphone-not-working',
      '/monsters',
      '/guides/beginner-guide',
      '/guides/act-3-monsters-jester',
    ],
    body: [
      {
        heading: 'Why a universal words list would mislead you',
        paragraphs: [
          'Forbidden words change the communication problem from run to run. The official examples include ordinary phrases such as “Okay,” “I think,” and “Sorry,” which are dangerous precisely because players say them without planning. New curses can stack during a run, so a list copied before entering the dungeon cannot replace reading the live game state.',
          'The useful list is the one your team creates at the portal: current forbidden words, safe replacement callouts, the active spell phrase, and any monster-specific response in the Spell Book. Keep it short enough to remember. If a dangerous word appears inside a longer spell, announce the conflict and decide whether another player can perform the action more safely.',
        ],
      },
      {
        heading: 'Use the Spell Book as the current source of truth',
        paragraphs: [
          'The developer combined the old Spell Journal and Dungeon Codex into one Spell Book to reduce inventory pressure and make the learning curve clearer. That book should drive your response to torches, traps, healing, doors, and voice-reactive creatures. Do not rely on an old screenshot when the live phrase can differ by language or update.',
          'Assign one reader before a fight. The reader finds the phrase and repeats it once clearly; nearby players stop talking until the effect resolves. If nothing happens, check the speech-to-text caption before shouting the phrase repeatedly. No caption means recognition is the problem, while a correct caption with no effect points toward the wrong phrase, range, timing, or an in-game bug.',
        ],
      },
      {
        heading: 'Known official phrase examples',
        paragraphs: [
          'Official store copy gives a few stable examples for understanding the system. The Meatgrinder can be repelled with “Who’s your Daddy!” The Bride responds to bad pickup lines and awkward confessions. The torch, healing effects, traps, and other monsters use their current in-game prompts. These examples explain the mechanic; they are not a promise that one printed cheat sheet replaces the Spell Book.',
          'Treat every spoken effect as shared input. A helpful phrase may contain another player’s curse, and a walkie-talkie can carry curse triggers over distance. Before speaking, scan the words that matter to the whole team, not just the player casting the spell.',
        ],
        bullets: [
          'Foul Moth: avoid swearing while it is active.',
          'Meatgrinder: use the current book phrase; the official example is “Who’s your Daddy!”',
          'The Bride: use the prompted confession or pickup-line response.',
          'Big Baby: choose one speaker for its specific spell-word sequence.',
        ],
      },
      {
        heading: 'Build safer replacement callouts',
        paragraphs: [
          'When a common word becomes cursed, replace the job rather than searching for a perfect synonym mid-fight. Use player names, clock directions, room colors, and single-syllable acknowledgements that are not currently dangerous. The best replacement language is boring, consistent, and understood before the next monster arrives.',
          'Avoid clever code phrases that are longer than the original message. Longer phrases create more recognition opportunities and are harder to remember under pressure. A compact team might use names for attention, numbers for doors, “back” for retreat, and a handoff phrase when the Spell Book reader changes.',
        ],
      },
      {
        heading: 'Custom language support needs testing, not guessing',
        paragraphs: [
          'The game officially supports English, Japanese, French, Simplified Chinese, and Spanish, with more languages listed in beta. It also exposes community language-modding support. Custom phrases should be read repeatedly while captions are visible so you can confirm that speech recognition produces the exact text the game expects.',
          'If a translation creates duplicates between curse words, profanity triggers, or spell phrases, change the wording before a real run. A phrase that looks correct in a text file is not useful until the live caption recognizes it reliably for the intended speakers.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is there a complete Cursed Companions words list?',
        answer:
          'The current Spell Book is the reliable source because forbidden words and active prompts can change by run, language, and update.',
      },
      {
        question: 'Can any teammate trigger my forbidden word?',
        answer:
          'Yes. Speech is shared input, so another player saying your cursed word can hurt you.',
      },
      {
        question: 'Why does a spell not work even when teammates hear me?',
        answer:
          'Voice chat and speech recognition are separate. Enable speech-to-text captions to see whether the recognition layer is receiving your words.',
      },
    ],
  },
  {
    slug: 'microphone-not-working',
    path: '/guides/microphone-not-working',
    title: 'Cursed Companions Microphone Not Working Fixes',
    seoTitle: 'Cursed Companions Mic Not Working - Voice Detection Fixes',
    seoDescription:
      'Fix Cursed Companions microphone, voice chat, captions, curse words, spells, echo, SteamOS, and dungeon desync with the official diagnostic order.',
    summary:
      'First separate proximity chat from voice recognition. Captions tell you which layer is failing and prevent random settings changes.',
    category: 'Voice',
    difficulty: 'Intermediate',
    coverImageUrl: '/cursedcompanions/guides/traitor-mode.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'cursed companions microphone not working',
      'cursed companions voice recognition fix',
      'cursed companions curse words not triggering',
    ],
    sourceNotes:
      'Follows the official troubleshooting FAQ and developer Steam Community fixes checked on July 10, 2026.',
    tags: ['Microphone', 'Voice Detection', 'Troubleshooting'],
    relatedRoutes: [
      '/guides/words-list-spells',
      '/steam-deck',
      '/discord',
      '/download',
    ],
    body: [
      {
        heading: 'Identify which voice layer is broken',
        paragraphs: [
          'Cursed Companions uses proximity voice chat and speech recognition for different jobs. Teammates may hear you while spells, cursed doors, and forbidden words fail. That means audio is reaching voice chat but not the recognition layer. The reverse can also happen: captions react while teammates hear nothing.',
          'Turn on Speech-to-text captions in Settings and speak a simple phrase. Green text confirms that the recognition layer is receiving words. No green text means you should fix input selection or restart the audio stack before testing a monster phrase. Correct green text with no game reaction means the phrase, timing, range, or current game state needs attention.',
        ],
      },
      {
        heading: 'Fix recognition before changing hardware',
        paragraphs: [
          'If captions stay blank, fully close the game, choose the intended microphone in Windows, disable unused input devices temporarily, and start the game again. The official FAQ notes that changing Windows sound devices while the game is running can leave the recognition layer without the correct driver even though chat still works.',
          'If ordinary spells work but curse words, cursed doors, the sarcophagus, or similar curse-linked mechanics do not, use Settings → Reset Voice Detection. A previous bug also involved the talk-toggle state, so confirm that Toggle-to-talk is in the state your team expects and avoid pressing its key accidentally during the test.',
        ],
        bullets: [
          'Restart after selecting the Windows default input.',
          'Disable duplicate webcam, monitor, controller, and virtual mics during diagnosis.',
          'Use captions to verify the exact recognized text.',
          'Reset Voice Detection when normal spells work but curse-linked triggers fail.',
        ],
      },
      {
        heading: 'Solve echo at the player who is relaying it',
        paragraphs: [
          'Echo usually comes from another player sending output back into input. Move close to each teammate one at a time to identify whose audio creates the echo, then fix that player’s device routing. Headphones, a different audio jack, or disabling extra microphones can remove the feedback path.',
          'Do not compensate by lowering every player until the team cannot hear spell calls. Fix the loop at its source, then test chat and recognition separately. If the status says Voice Chat: Not Connected, exit and restart before changing more settings.',
        ],
      },
      {
        heading: 'Network and dungeon problems can look like voice problems',
        paragraphs: [
          'Slow monster reactions, delayed phrase effects, or extreme ping can be network issues rather than recognition failure. Join the closest server region and aim for a stable sub-100 ms connection when possible. If the dungeon differs between players or an entrance fails, record the Dungeon Seed from Settings and report it through the official Discord or support email.',
          'When reporting a bug, include whether captions appeared, whether teammates heard you, the exact mechanic that failed, host or client role, server region, and the Dungeon Seed. That evidence is more useful than saying the microphone did not work.',
        ],
      },
      {
        heading: 'Steam Deck and SteamOS are a special case',
        paragraphs: [
          'The developer FAQ says Windows is the supported platform and records a community SteamOS launch argument for voice input. It can help some players, but it is not the same as official Steam Deck support. Use the dedicated Steam Deck page for the exact current caveat and command.',
          'If recognition still fails after the documented workaround, return to Windows or contact the developer with logs. Avoid downloading third-party microphone patches or modified clients from mirrors.',
        ],
      },
    ],
    faq: [
      {
        question: 'Why can friends hear me but spells do not work?',
        answer:
          'Voice chat is connected but speech recognition is not. Enable captions, restart after selecting the correct Windows input, and use Reset Voice Detection.',
      },
      {
        question: 'Where is the Dungeon Seed?',
        answer:
          'Open Settings while the portal is active; the seed appears near the bottom-left area described by the official FAQ.',
      },
      {
        question: 'Does Cursed Companions officially support Steam Deck?',
        answer:
          'No. The developer supports Windows and documents a community SteamOS workaround without promising full Deck support.',
      },
    ],
  },
  {
    slug: 'act-3-monsters-jester',
    path: '/guides/act-3-monsters-jester',
    title: 'Cursed Companions Act III and Jester Guide',
    seoTitle: 'Cursed Companions Act 3 Guide - Jester and New Monsters',
    seoDescription:
      'Prepare for Cursed Companions Act III, the Jester boss, underwater audio, Doorpelganger, Mimic, Oilyphant, Big Baby, water monsters, and new gear.',
    summary:
      'Act III turns communication into the main hazard: underwater audio is weaker, the Jester changes death curses, and new monsters punish visual trust and rushed doors.',
    category: 'Update',
    difficulty: 'Advanced',
    coverImageUrl: '/cursedcompanions/guides/act-3.png',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'cursed companions act 3',
      'cursed companions jester boss',
      'cursed companions version 1.0',
    ],
    sourceNotes:
      'Current to the July 9, 2026 full release and based on the official Act III feature breakdown and release trailer.',
    video: videos.release,
    tags: ['Act III', 'Jester', 'Version 1.0'],
    relatedRoutes: [
      '/monsters',
      '/guides/words-list-spells',
      '/guides/respawn-revive',
      '/release-date',
    ],
    body: [
      {
        heading: 'Act III changes how the team verifies information',
        paragraphs: [
          'The version 1.0 route adds flooded spaces, four outdoor maps, new dungeon rooms, ten more creatures, equipment, cosmetics, and the Jester boss. The important strategic change is not just enemy count. Water reduces visibility and dampens player audio, while several monsters make doors, treasure, and teammate silhouettes less trustworthy.',
          'Before entering a flooded branch, shorten callouts and establish a rally point on dry ground. Do not assume a player heard a sentence through water. Ask for a one-word acknowledgement that is not currently cursed, then move. If the group splits, return to the last dry landmark instead of trying to solve direction through weak audio.',
        ],
      },
      {
        heading: 'Use the upgraded Spell Torch before risk becomes combat',
        paragraphs: [
          'Version 1.0 gives the Spell Torch more jobs: it can defeat Mannequins, open Grumble Chests, and identify dangerous doors. That makes torch checks a route decision rather than a reaction after the room opens. Put the torch with a careful player who is willing to stop at doors instead of the fastest explorer.',
          'The Doorpelganger hides behind an apparently normal door, and the Grumble Chest turns treasure greed into a monster encounter. Check first, call the result, then let the group commit. A two-second scan is cheaper than recovering from a surprise while everyone shouts conflicting phrases.',
        ],
      },
      {
        heading: 'Act III monsters punish assumptions',
        paragraphs: [
          'The Mimic can copy another player, so verify movement, location, and recent behavior rather than trusting appearance alone. The Oilyphant must be fed before it becomes aggressive. Big Baby requires specific spell words, which makes a single clear speaker more valuable than raw damage. Anglershark, Necrofish, and Dungeon Leech occupy the flooded ecosystem where sight and voice are already compromised.',
          'Muffins and Gunther add less conventional interactions: Muffins is the Queen’s pet, while Gunther exchanges collected treasure for gold. Do not treat every new figure as an immediate combat target. Give the team enough time to identify whether the encounter is a threat, trade, device, or route mechanic.',
        ],
      },
      {
        heading: 'Prepare for the Jester by controlling death curses',
        paragraphs: [
          'The Jester uses unique death curses that force the team to rethink communication. Enter the boss with clean voice roles: one caller, one Spell Book reader, and short responses from everyone else. When a new curse appears, pause and read it before resuming damage or movement. The boss is designed to punish a team that keeps talking as though nothing changed.',
          'Do not improvise a complete boss script from an old build or one clip. The full-release encounter is new, and balance can change quickly after launch. Use the stable preparation rules: preserve revives, reduce filler speech, keep the return route known, and update the caller whenever a curse changes who can speak safely.',
        ],
      },
      {
        heading: 'New gear should solve an Act III problem',
        paragraphs: [
          'Jabber Walkie extends communication but can carry curse triggers over distance. Death Wand is indiscriminate enough to threaten friends. Plan B automatically revives its carrier, while Gaslighter acts like an automatic Spell Torch. Ice Wand and Boomer Bomb now freeze monsters rather than merely slowing them.',
          'Choose gear around the route. Gaslighter and a careful torch user help with uncertain doors; Plan B protects the role the team cannot afford to lose; freeze tools create space in water or tight rooms. Avoid distributing dangerous equipment without saying who may use it and under what condition.',
        ],
      },
    ],
    faq: [
      {
        question: 'When did Cursed Companions Act III release?',
        answer: 'Act III launched with version 1.0 on July 9, 2026.',
      },
      {
        question: 'Who is the Act III boss?',
        answer:
          'The Jester is the Act III boss and uses new death-curse pressure that changes how the team communicates.',
      },
      {
        question: 'Can players drown in Act III?',
        answer:
          'The official update says characters cannot drown, but movement, visibility, and audio become more difficult underwater.',
      },
    ],
  },
  {
    slug: 'endless-mode',
    path: '/guides/endless-mode',
    title: 'Cursed Companions Endless Mode Guide',
    seoTitle: 'Cursed Companions Endless Mode - Cycles, Quotas and Saves',
    seoDescription:
      'Survive Cursed Companions Endless Mode with six-day cycle rules, treasure targets, boss skip logic, Queen’s Hand value, saves, Soul Potions, and team priorities.',
    summary:
      'Endless Mode is a six-day resource cycle. Bank value early, protect the saved island state, and fight a boss only when the reward or quota requires it.',
    category: 'Modes',
    difficulty: 'Advanced',
    coverImageUrl: '/cursedcompanions/guides/dungeon-team.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'cursed companions endless mode guide',
      'cursed companions day 28',
      'cursed companions endless tips',
    ],
    sourceNotes:
      'Based on the official Endless Mode rules, save behavior, Soul Potion explanation, achievement milestones, and developer tips.',
    tags: ['Endless Mode', 'Day 28', 'Treasure'],
    relatedRoutes: [
      '/modes',
      '/guides/respawn-revive',
      '/monsters',
      '/guides/beginner-guide',
    ],
    body: [
      {
        heading: 'Read Endless as repeating six-day cycles',
        paragraphs: [
          'Days 1–3 use an initial treasure target. Days 4–6 introduce a larger target, and Day 6 brings a boss from Act I or Act II. Clearing the boss awards a Queen’s Hand worth one-third of the current target. After the Day 6 target is satisfied, the team moves into the next cycle and the pattern repeats on Days 12, 18, and beyond.',
          'That structure means the first three days are not a warm-up you can waste. They are the safest time to bank equipment, useful treasure, and a clean island state. A team that barely meets the early target enters the harder half without reserves. A team that returns early and preserves tools can decide whether the Day 6 boss is worth the risk.',
        ],
      },
      {
        heading: 'Skip a boss when the quota is already solved',
        paragraphs: [
          'The developer’s key Endless tip is that a boss kill is not mandatory when the treasure target has already been met. You can enter and exit the boss day and still progress. That decision trades the Queen’s Hand reward for lower risk, which is often correct when the team is injured, low on control items, or protecting a strong saved run.',
          'Fight when the Queen’s Hand closes the current target, when the group is healthy enough to preserve momentum, or when a cosmetic or achievement goal requires the encounter. Skip when the target is already banked and the boss threatens equipment or player stats you need for later cycles. Endless scoring rewards survival, not pride.',
        ],
      },
      {
        heading: 'Protect the save by closing each day deliberately',
        paragraphs: [
          'The game saves the current day, team abilities, and island equipment when the portal closes at the end of a day. Starting a new Endless run overwrites that save. Before closing, place equipment and treasure where the team understands it, confirm that important tools returned, and avoid starting a new run while someone expects the old state to remain.',
          'Treat the island as a shared inventory. Assign storage zones for revive tools, control items, and quota treasure. The later the cycle, the more expensive it becomes to discover that a critical tool was carried into a failed room or stored where nobody can find it.',
        ],
      },
      {
        heading: 'Match Soul Potions to the right player',
        paragraphs: [
          'Saved player stats become Soul Potions containing health, stamina, curse words, inventory slots, and other upgrades. Any player can drink any potion, so the team must coordinate ownership. Before loading back in, identify whose build and curse state each potion represents.',
          'Do not drink first and sort it out later. A high-value role can lose the stats or inventory capacity the plan depends on, while another player inherits curse words they did not prepare for. Use names, storage position, and a short verbal confirmation before drinking.',
        ],
      },
      {
        heading: 'Plan milestones without sacrificing the run',
        paragraphs: [
          'Official cosmetic milestones include surviving to Days 16 and 28. Those targets are long enough that small habits compound: return routes, assigned voice roles, equipment storage, and conservative boss decisions matter more than one heroic room. When a run becomes unstable, spend a cycle rebuilding rather than forcing the next milestone.',
          'Facilities such as Wayhome Stones, Summoning Staff, Teleportaloo, Teleport Circles, and Healing Baths become increasingly valuable because they were designed around long survival. Invest in the facility that removes the most common late-cycle failure, then protect it as part of the saved island state.',
        ],
      },
    ],
    faq: [
      {
        question: 'How long is one Endless Mode cycle?',
        answer:
          'Six in-game days: one target across Days 1–3, a higher target across Days 4–6, and a boss on Day 6.',
      },
      {
        question: 'Do you have to defeat the Day 6 boss?',
        answer:
          'No. If the current treasure target is already met, the official developer tip says you can enter and exit the boss day and still progress.',
      },
      {
        question: 'What does Endless Mode save?',
        answer:
          'It saves the day, team abilities, and equipment or treasure stored on the island when the portal closes.',
      },
    ],
  },
  {
    slug: 'traitor-mode',
    path: '/guides/traitor-mode',
    title: 'Cursed Companions Traitor Mode Guide',
    seoTitle: 'Cursed Companions Traitor Mode - 16 Player Rules and Tips',
    seoDescription:
      'Play Cursed Companions Traitor Mode with better task routes, voice evidence, emergency meetings, curse discipline, sabotage reads, and 16-player lobby planning.',
    summary:
      'Traitor Mode works when the lobby separates useful evidence from voice chaos. Report actions, locations, and timing—not personality guesses.',
    category: 'Modes',
    difficulty: 'Intermediate',
    coverImageUrl: '/cursedcompanions/guides/traitor-mode.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'cursed companions traitor mode',
      'cursed companions 16 players',
      'cursed companions social deduction',
    ],
    sourceNotes:
      'Uses the official Traitor Mode description, trailer surface, press kit, and voice-system rules.',
    video: videos.communityGameplay,
    tags: ['Traitor Mode', '16 Players', 'Social Deduction'],
    relatedRoutes: [
      '/modes',
      '/how-many-players',
      '/guides/words-list-spells',
      '/discord',
    ],
    body: [
      {
        heading: 'Use evidence that survives a noisy lobby',
        paragraphs: [
          'A 16-player voice lobby creates more statements than anyone can remember. Reliable evidence is concrete: who entered a room, who completed or abandoned a task, where sabotage appeared, who was close enough to act, and whether a player’s path makes sense. “They sound suspicious” is weak because forbidden words and microphone problems can make innocent speech look unnatural.',
          'Keep a simple route and report deviations. If you leave a pair, say where and why. If you find sabotage, name location before accusation. That gives the meeting a timeline instead of a pile of overlapping reactions.',
        ],
      },
      {
        heading: 'Do not let curse triggers become fake guilt',
        paragraphs: [
          'Any player can say someone else’s forbidden word, which means accidental damage is not proof of a Traitor. A Traitor may exploit that ambiguity, but the lobby should ask whether the speaker knew the curse, repeated it after warning, or combined it with a suspicious route. One mistake is chaos; a pattern tied to sabotage is evidence.',
          'Before tasks begin, read high-risk common words and agree on replacements. That reduces accidental triggers and makes deliberate repetition easier to identify. It also keeps meetings readable because players are not constantly apologizing with another dangerous word.',
        ],
      },
      {
        heading: 'Pairing creates accountability but not certainty',
        paragraphs: [
          'Small groups make task routes easier to verify, yet two Traitors can support each other or an innocent partner can miss a sabotage. Rotate who confirms whom and compare routes across meetings. Avoid turning one trusted pair into an unquestioned authority for the whole game.',
          'When a player disappears, ask what task or doorway separated them before voting. Procedural layouts, voice range, and monster pressure can create innocent gaps. The best vote explains opportunity, motive, and timeline together.',
        ],
      },
      {
        heading: 'Run emergency meetings with a speaking order',
        paragraphs: [
          'Meetings are most useful when the reporter gives location and event first, nearby players add short timelines, and accused players respond last. Free-for-all debate rewards the loudest microphone and increases curse risk. A simple order creates comparable statements.',
          'Vote only after repeating the strongest fact in one sentence. If the lobby cannot name that fact, skip or gather more information rather than removing someone on tone alone. Social deduction becomes sharper when every vote has a claim that can be tested next round.',
        ],
      },
      {
        heading: 'Traitors should create doubt, not obvious noise',
        paragraphs: [
          'A successful Traitor blends sabotage into believable movement and uses existing communication pressure instead of shouting cursed words immediately. Obvious voice grief may remove one player but also gives the lobby clear evidence. The stronger play is to separate groups, create conflicting timelines, and appear helpful just long enough to influence a meeting.',
          'Keep play inside the game’s intended systems. Do not abuse external voice tools, disconnects, or harassment. The mode is funniest when betrayal remains readable and the next lobby still wants to play together.',
        ],
      },
    ],
    faq: [
      {
        question: 'How many players can join Traitor Mode?',
        answer: 'The official store lists Traitor Mode for up to 16 players.',
      },
      {
        question: 'Does triggering a curse prove someone is a Traitor?',
        answer:
          'No. Any teammate can trigger another player’s word. Look for repeated, informed triggers tied to suspicious movement or sabotage.',
      },
      {
        question: 'What should a meeting report include?',
        answer:
          'State location, event, nearby players, and timing before giving an accusation.',
      },
    ],
  },
  {
    slug: 'respawn-revive',
    path: '/guides/respawn-revive',
    title: 'Cursed Companions Respawn and Revive Guide',
    seoTitle: 'Cursed Companions Respawn Dice, Plan B and Revives',
    seoDescription:
      'Use Cursed Companions Respawn Dice, Plan B, Respawn Egg, Dark Shrine, sarcophagus, spectate mode, and Soul Potions without losing the team route.',
    summary:
      'Respawn Dice give dead players unlimited roll attempts, while Plan B revives automatically. The team still needs a safe return handoff.',
    category: 'Survival',
    difficulty: 'Intermediate',
    coverImageUrl: '/cursedcompanions/guides/act-3.png',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'cursed companions respawn dice',
      'cursed companions revive',
      'cursed companions plan b treasure',
    ],
    sourceNotes:
      'Based on the official June 2026 respawn mechanics post and full-release item descriptions.',
    tags: ['Respawn Dice', 'Plan B', 'Revive'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/endless-mode',
      '/guides/act-3-monsters-jester',
      '/monsters',
    ],
    body: [
      {
        heading: 'Respawn Dice move agency to the dead player',
        paragraphs: [
          'In spectate mode, a dead player can roll the Respawn Dice for a chance to return next to a companion. The official description says rolls are unlimited, so keep trying while the living team stabilizes the room. A successful return chooses a random living player, or sends you to the home island if no player can be found.',
          'The living team should announce when it is entering a dangerous space because a respawn can place the returning player beside them. If possible, pause in a safe junction while the dead player rolls instead of sprinting through a monster room and turning the revive into another death.',
        ],
      },
      {
        heading: 'Plan B protects one carrier automatically',
        paragraphs: [
          'Plan B is a treasure that consumes itself to revive its carrier automatically. Give it to the role whose loss would break the route: the Spell Book reader, torch checker, navigation lead, or player carrying a critical objective. Passing it around without a clear reason makes its value accidental.',
          'Automatic does not mean safe. Plan B can return the player near a random companion, so the team should still call current danger and movement. After revival, do not speak immediately until someone summarizes new curse words and nearby threats.',
        ],
      },
      {
        heading: 'Older revive devices remain team decisions',
        paragraphs: [
          'The Dark Shrine, sarcophagus, and Respawn Egg give living players ways to bring others back when the run generates those opportunities. Assign one player to operate the device while the rest control the area. If several players shout the required phrase or crowd the object, recognition and survival both become harder.',
          'Choose the revive target by route value and group recovery, not by who complains loudest in spectate. A player with navigation knowledge, useful inventory capacity, or the cleanest curse state may be the best first return.',
        ],
      },
      {
        heading: 'Use a ten-second return handoff',
        paragraphs: [
          'Every revived player needs four facts: current location, nearest threat, newly dangerous words, and direction home. Give those facts before restarting casual chatter or handing over items. The handoff is especially important in Act III water areas where audio can be dampened.',
          'If the revived player appears on the home island, decide whether regrouping is worth the travel. Do not force a weak player to sprint alone through an uncertain procedural route just to rejoin immediately.',
        ],
      },
      {
        heading: 'Endless Mode adds Soul Potion ownership',
        paragraphs: [
          'In Endless Mode, saved stats are restored through Soul Potions. Any player can drink any potion, so a return after loading is partly an identity problem: match health, stamina, inventory slots, and curse state to the intended player before drinking.',
          'Label storage by position and confirm ownership out loud. A mistaken potion can shift the run’s build and curse plan even if every player is technically alive.',
        ],
      },
    ],
    faq: [
      {
        question: 'Are Respawn Dice rolls limited?',
        answer:
          'The official mechanic description says there is no roll limit.',
      },
      {
        question: 'Where do you respawn?',
        answer:
          'You return next to a random living player, or on the home island when no player is available.',
      },
      {
        question: 'What does Plan B do?',
        answer:
          'Plan B sacrifices itself to revive its carrier automatically after death.',
      },
    ],
  },
  {
    slug: 'how-many-players',
    path: '/how-many-players',
    title: 'How Many Players Can Play Cursed Companions?',
    seoTitle: 'Cursed Companions Max Players - Co-op and Traitor Lobbies',
    seoDescription:
      'Cursed Companions supports up to 8 players in normal co-op and up to 16 in Traitor Mode. Compare solo, small-party, and large-lobby play.',
    summary:
      'Normal co-op supports 1–8 players; Traitor Mode supports up to 16. Four to six is a practical first group for learning voice roles.',
    category: 'Platform',
    difficulty: 'Status',
    coverImageUrl: '/cursedcompanions/guides/traitor-mode.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'cursed companions how many players',
      'cursed companions max players',
      'cursed companions 8 player co op',
    ],
    sourceNotes:
      'Player limits come from the current Steam store and official press kit.',
    tags: ['Max Players', 'Co-op', 'Lobby'],
    relatedRoutes: [
      '/modes',
      '/guides/traitor-mode',
      '/guides/beginner-guide',
      '/discord',
    ],
    body: [
      {
        heading: 'The official player limits',
        paragraphs: [
          'Cursed Companions supports single-player and online co-op for up to eight players in the normal game modes. Traitor Mode raises the maximum to sixteen players because it uses a larger social-deduction lobby built around secret sabotage and emergency meetings.',
          'The maximum is not automatically the best learning size. Every extra voice adds more chances to overlap spell phrases or trigger someone else’s forbidden word. A first group of four to six is large enough to make the co-op mechanic funny while still letting players understand who is speaking.',
        ],
      },
      {
        heading: 'Choose group size by the mode',
        paragraphs: [
          'Acts and Challenge Mode benefit from clear roles: navigation, Spell Book reading, torch checks, treasure tracking, and equipment control. A small team may combine roles, while an eight-player team should assign them explicitly. Endless Mode rewards a stable recurring group because storage and saved stats become shared responsibilities.',
          'Traitor Mode needs enough people to create uncertainty, but a full 16-player lobby also needs meeting discipline. Use a speaking order and short evidence reports or the social deduction disappears under voice noise.',
        ],
      },
      {
        heading: 'Solo is supported but changes the game',
        paragraphs: [
          'Steam lists single-player support, so you can explore, learn monster responses, and hunt achievements alone. You remove accidental team curse triggers, but you also lose the shared speech chaos and have fewer people to cover equipment, navigation, and revive jobs.',
          'Use solo play to learn the interface and current Spell Book, then expect communication itself to become a new difficulty layer when friends join.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the Cursed Companions max player count?',
        answer: 'Eight in normal co-op modes and sixteen in Traitor Mode.',
      },
      {
        question: 'Can two people play Cursed Companions?',
        answer:
          'Yes. A two-player party works, though each player must cover more navigation, spell, treasure, and revive responsibility.',
      },
      {
        question: 'Is Cursed Companions multiplayer only?',
        answer: 'No. Steam also lists single-player support.',
      },
    ],
  },
  {
    slug: 'platforms',
    path: '/platforms',
    title: 'Cursed Companions Platforms: PC, PS5, Xbox and Mac',
    seoTitle: 'Cursed Companions Platforms - PC, PS5, Xbox and Mac Status',
    seoDescription:
      'Check Cursed Companions PC, PS5, Xbox, Mac, Linux, Steam Deck, controller, and cross-platform status from current official listings.',
    summary:
      'Windows Steam is the confirmed platform. No official PS5, Xbox, Mac, or native Linux release is listed as of July 10, 2026.',
    category: 'Platform',
    difficulty: 'Status',
    coverImageUrl: '/cursedcompanions/hero.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'cursed companions ps5',
      'cursed companions xbox',
      'cursed companions platforms',
    ],
    sourceNotes:
      'Current platform status comes from Steam app data and the official FAQ; unsupported platforms remain watch items.',
    tags: ['PC', 'PS5', 'Xbox'],
    relatedRoutes: [
      '/download',
      '/steam-deck',
      '/how-many-players',
      '/discord',
    ],
    body: [
      {
        heading: 'Windows Steam is the official release',
        paragraphs: [
          'The current Steam listing supports Windows and does not mark macOS or Linux as native platforms. The official minimum requirement starts at Windows 10, 8 GB RAM, an Intel Core i3-9100, a GTX 1060, broadband internet, and 3 GB of storage.',
          'Use the Steam store for purchase and updates. Third-party download pages cannot add legitimate platform support and create avoidable account or malware risk.',
        ],
      },
      {
        heading: 'PS5 and Xbox remain unannounced',
        paragraphs: [
          'No official PlayStation Store or Microsoft Store release was found during the July 10, 2026 launch check. Search autocomplete shows PS5 interest, but demand is not an announcement. Do not buy a key or download claiming to unlock a console version unless Crimson Forge Studios links it from an official channel.',
          'The official FAQ also says native PlayStation and Xbox controller support is not currently provided, though community layouts may appear in Steam’s controller settings. A community layout is different from a console port.',
        ],
      },
      {
        heading: 'SteamOS can run into the microphone boundary',
        paragraphs: [
          'The developer FAQ documents a community launch-argument workaround for SteamOS voice input but still says Windows is the supported platform. Cursed Companions depends heavily on speech recognition, so rendering the game is not enough; voice chat and captions must both work.',
          'Use the dedicated Steam Deck page before experimenting, and keep expectations conservative after version 1.0 updates.',
        ],
      },
      {
        heading: 'Cross-play is not a current purchase decision',
        paragraphs: [
          'With only the Windows Steam release confirmed, there is no cross-console ecosystem to compare. Invite friends through the supported PC release and use the official Discord if you need a group.',
          'If another platform appears later, verify store ownership, lobby compatibility, microphone behavior, and account progression before calling it cross-play.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Cursed Companions on PS5?',
        answer: 'No official PS5 release is listed as of July 10, 2026.',
      },
      {
        question: 'Is Cursed Companions on Xbox?',
        answer: 'No official Xbox release is listed as of July 10, 2026.',
      },
      {
        question: 'Does Cursed Companions support Mac?',
        answer: 'Steam currently lists Windows only, not macOS.',
      },
    ],
  },
  {
    slug: 'steam-deck',
    path: '/steam-deck',
    title: 'Cursed Companions Steam Deck and SteamOS Guide',
    seoTitle: 'Cursed Companions Steam Deck - Mic Workaround and Status',
    seoDescription:
      'Check Cursed Companions Steam Deck support, the developer-documented SteamOS microphone launch argument, captions, controls, and safe fallback.',
    summary:
      'Steam Deck is not officially supported. A community launch argument may restore voice input, but both captions and voice chat must be tested.',
    category: 'Platform',
    difficulty: 'Status',
    coverImageUrl: '/cursedcompanions/guides/voice-monster.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'cursed companions steam deck',
      'cursed companions steam os microphone',
      'cursed companions proton',
    ],
    sourceNotes:
      'Uses the official FAQ and a developer Steam Community reply. The command is community-contributed, not a support guarantee.',
    tags: ['Steam Deck', 'SteamOS', 'Proton'],
    relatedRoutes: [
      '/guides/microphone-not-working',
      '/platforms',
      '/download',
      '/discord',
    ],
    body: [
      {
        heading: 'Start with the unsupported status',
        paragraphs: [
          'Crimson Forge Studios says Windows is the supported platform and Steam does not list native Linux support. Community reports show that the game may launch through Proton, but the essential voice layers can fail independently. A playable frame rate does not prove the run is functional.',
          'Test speech-to-text captions and proximity chat before entering a real lobby. If either fails, your team may hear you without spells triggering, or spells may react while teammates hear nothing.',
        ],
      },
      {
        heading: 'Try the documented community launch argument',
        paragraphs: [
          'The official FAQ records this community-contributed Steam launch option: `SteamDeck=1 PROTON_ENABLE_WAYLAND=1 PROTON_USE_NTSYNC=1 %command%`. Open Steam properties for the game, paste it into Launch Options, restart the game, then test captions and chat separately.',
          'Because this is not an official support promise, a future Proton, SteamOS, or game update can change the result. Remove the option if it causes new launch problems and do not stack random flags from untrusted download pages.',
        ],
      },
      {
        heading: 'Use captions as the recognition test',
        paragraphs: [
          'Enable Speech-to-text captions and speak a short phrase. Green text confirms recognition input. Then join a safe lobby and ask one teammate whether proximity chat is clear. Only after both pass should you test a harmless torch or spell prompt.',
          'If captions fail, check the selected SteamOS input and restart. If chat fails while captions work, the voice-service connection or output routing needs attention. The microphone guide separates these branches in more detail.',
        ],
      },
      {
        heading: 'Controller layouts do not solve voice support',
        paragraphs: [
          'The official FAQ says native PlayStation and Xbox controller support is not currently available, while Steam community layouts may exist. A layout can map buttons but cannot repair speech recognition, echo, or voice-service connection.',
          'Keep a keyboard available for settings and launch-option work. If the complete voice loop remains unreliable, Windows is the low-risk fallback for a game built around speech.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Cursed Companions Steam Deck Verified?',
        answer:
          'No official Steam Deck support is stated; the developer FAQ describes Windows as supported.',
      },
      {
        question: 'What SteamOS launch option is documented?',
        answer:
          '`SteamDeck=1 PROTON_ENABLE_WAYLAND=1 PROTON_USE_NTSYNC=1 %command%` is recorded as a community workaround in the official FAQ.',
      },
      {
        question: 'How do I know the microphone works?',
        answer:
          'Confirm green speech-to-text captions and then separately confirm that teammates hear proximity chat.',
      },
    ],
  },
  {
    slug: 'download',
    path: '/download',
    title: 'Cursed Companions Download: Official Steam Guide',
    seoTitle: 'Cursed Companions Download - Official Steam and PC Safety',
    seoDescription:
      'Download Cursed Companions safely from Steam, check Windows requirements, avoid fake APKs and cracks, verify files, and protect voice permissions.',
    summary:
      'The official Windows download is on Steam. There is no legitimate Cursed Companions APK, console installer, crack, or separate launcher.',
    category: 'Safety',
    difficulty: 'Status',
    coverImageUrl: '/cursedcompanions/hero.jpg',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'cursed companions download',
      'cursed companions steam',
      'cursed companions pc requirements',
    ],
    sourceNotes:
      'Official distribution and requirements were checked on Steam. No third-party mirror is recommended.',
    tags: ['Download', 'Steam', 'Safety'],
    relatedRoutes: ['/platforms', '/steam-deck', '/codes', '/discord'],
    body: [
      {
        heading: 'Use the Steam app page with ID 3265230',
        paragraphs: [
          'The official release is `store.steampowered.com/app/3265230/Cursed_Companions/`. Confirm the app ID and developer name, Crimson Forge Studios, before purchasing or installing. Steam handles files, updates, achievements, and ownership.',
          'A website offering a standalone PC installer, free key generator, APK, crack, or modified voice client is not the official route. Cursed Companions uses online interaction and code validation, so unsafe shortcuts add account and malware risk without improving support.',
        ],
      },
      {
        heading: 'Check the minimum requirements',
        paragraphs: [
          'Steam lists Windows 10, a 64-bit processor, Intel Core i3-9100, 8 GB RAM, GTX 1060, broadband internet, and 3 GB available storage as minimum requirements. Recommended hardware moves to Windows 11, an i5-9400F, 16 GB RAM, and GTX 1650.',
          'The game’s voice and network layers matter as much as graphics. Make sure Windows microphone permission is enabled and choose the correct input before launch.',
        ],
      },
      {
        heading: 'Verify files before reinstalling from elsewhere',
        paragraphs: [
          'If the portal, dungeon, or launch sequence breaks, use Steam’s installed-file verification first. Then restart after selecting your audio devices. Report persistent problems with logs and the Dungeon Seed instead of replacing official files with a mirror build.',
          'Keep the game and Steam client current during the version 1.0 launch window because bug fixes can arrive quickly after a major release.',
        ],
      },
      {
        heading: 'Codes do not require a special download',
        paragraphs: [
          'Official skin codes are entered through the Redeem Code button on the main menu. A real code does not require a password, survey wall, executable, browser extension, or modified game file.',
          'Use the codes page for the current source-checked code and redemption flow.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where can I download Cursed Companions?',
        answer: 'Use the official Steam page for app ID 3265230.',
      },
      {
        question: 'Is there a Cursed Companions APK?',
        answer:
          'No official Android release is listed, so APK downloads are not official.',
      },
      {
        question: 'How much storage does the game need?',
        answer: 'Steam lists 3 GB of available storage.',
      },
    ],
  },
  {
    slug: 'discord',
    path: '/discord',
    title: 'Cursed Companions Discord and Official Links',
    seoTitle: 'Cursed Companions Discord, Steam and Official Community Links',
    seoDescription:
      'Open the official Cursed Companions Discord, Steam Community, website, X, Instagram, and TikTok for teammates, bug reports, codes, cosmetics, and updates.',
    summary:
      'The official invite is discord.gg/cursedcompanions. Use it for teammate finding, bug reports, launch cosmetics, language work, and developer updates.',
    category: 'Community',
    difficulty: 'Status',
    coverImageUrl: '/cursedcompanions/og-image.png',
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'cursed companions discord',
      'cursed companions official links',
      'cursed companions find players',
    ],
    sourceNotes:
      'Every link is taken from the official website, press kit, or Steam app social metadata.',
    tags: ['Discord', 'Community', 'Official Links'],
    relatedRoutes: [
      '/codes',
      '/how-many-players',
      '/download',
      '/release-date',
    ],
    body: [
      {
        heading: 'Use the permanent official invite',
        paragraphs: [
          'The official Discord invite is `https://discord.gg/cursedcompanions`. The developer links it from Steam and the game website. Check the destination server name before accepting an invite copied from a third-party page.',
          'The server is useful for teammate finding, bug reports, language feedback, community contests, cosmetic announcements, and direct update discussion with the small development team.',
        ],
      },
      {
        heading: 'Send useful bug evidence',
        paragraphs: [
          'For voice issues, report whether speech captions appeared and whether teammates heard proximity chat. For dungeon generation, include the Dungeon Seed from Settings. For network trouble, add host region, approximate ping, host/client role, and the moment the failure began.',
          'Avoid posting account credentials, one-time codes, private logs containing personal data, or payment details in public channels. Use the support path the moderators request.',
        ],
      },
      {
        heading: 'Find a group by mode and region',
        paragraphs: [
          'State your region, preferred mode, lobby size, language, and whether you are learning. A player looking for a four-person Act III run needs a different group from someone organizing a 16-player Traitor lobby or a Day 28 Endless attempt.',
          'Agree on voice expectations before joining. The game requires spoken interaction, so a microphone test and shared language matter more than a generic “looking for players” message.',
        ],
      },
      {
        heading: 'Official social links',
        paragraphs: [
          'Steam Community is the strongest patch and announcement archive. The official website carries the press kit and FAQ. Current official social links also include X at `@CursedCompani0n`, Instagram at `@cursedcompanionsgame`, and TikTok at `@cursed.companions`.',
          'Use social posts as a lead, then verify purchase, platform, code, and update claims against Steam or the official site before acting.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the official Cursed Companions Discord?',
        answer: 'The official invite is https://discord.gg/cursedcompanions.',
      },
      {
        question: 'Can I find teammates there?',
        answer:
          'Yes. Include region, mode, lobby size, language, and experience level in your post.',
      },
      {
        question: 'Where should I report a dungeon bug?',
        answer:
          'Use the official Discord or developer support path and include the Dungeon Seed plus reproduction details.',
      },
    ],
  },
  {
    slug: 'release-date',
    path: '/release-date',
    title: 'Cursed Companions Release Date and Version 1.0 Status',
    seoTitle: 'Cursed Companions Release Date - Version 1.0 and Act III',
    seoDescription:
      'Cursed Companions version 1.0 released July 9, 2026. See Act III, Jester, new monsters, maps, rooms, equipment, cosmetics, achievements, and Steam status.',
    summary:
      'Cursed Companions reached full release on July 9, 2026. Act III and the Jester are live now on Steam.',
    category: 'Update',
    difficulty: 'Status',
    coverImageUrl: videos.release.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'cursed companions release date',
      'cursed companions full release',
      'cursed companions version 1.0',
    ],
    sourceNotes:
      'Release status and content numbers come from the Steam store and official June/July 2026 full-release announcements.',
    video: videos.release,
    tags: ['Release Date', 'Version 1.0', 'Act III'],
    relatedRoutes: [
      '/guides/act-3-monsters-jester',
      '/download',
      '/platforms',
      '/discord',
    ],
    body: [
      {
        heading: 'Version 1.0 is available now',
        paragraphs: [
          'Cursed Companions left Early Access and launched version 1.0 on July 9, 2026. The Windows PC release is live on Steam. Early Access began on November 20, 2025, so older guides and videos may not include the final act or current respawn systems.',
          'When checking advice, look for Act III, Jester, Respawn Dice, Plan B, updated Spell Torch, or July 2026 references. If none appear, treat the source as early-version context rather than a complete current guide.',
        ],
      },
      {
        heading: 'What the full release adds',
        paragraphs: [
          'The developer announced Act III, a Jester boss, ten more creatures to join the 26 released during Early Access, 65 new dungeon rooms, four outdoor maps, seven new equipment pieces, 15 cosmetics, and 31 new achievements. Steam currently shows 184 achievements in total, which can differ from the pre-release announcement count as final content ships.',
          'Act III introduces water areas, new voice and trust problems, Doorpelganger, Mimic, Oilyphant, Big Baby, water creatures, Grumble Chest, Muffins, and Gunther. The version 1.0 guide covers how those additions change team roles.',
        ],
      },
      {
        heading: 'Current purchase and platform status',
        paragraphs: [
          'The base US Steam price is listed as $8.99, with a launch discount scheduled through July 23, 2026. Prices and discounts vary by region and time, so use Steam for the live amount rather than a copied price card.',
          'Windows is the confirmed platform. No official PS5, Xbox, macOS, or native Linux store release was found at launch.',
        ],
      },
      {
        heading: 'Updates continue after full release',
        paragraphs: [
          'The launch post says the team will continue monitoring bugs and plans additional content. That makes the official Steam announcement feed and Discord the right places to verify hotfixes, voice changes, cosmetics, and future features.',
          'This wiki uses checked dates and avoids claiming that a launch fact will never change. Revisit the Act III, codes, platform, and microphone pages after major patches.',
        ],
      },
    ],
    faq: [
      {
        question: 'When was Cursed Companions released?',
        answer:
          'Full release was July 9, 2026; Early Access began November 20, 2025.',
      },
      {
        question: 'Is Act III available?',
        answer: 'Yes. Act III launched with version 1.0.',
      },
      {
        question: 'What platform is Cursed Companions on?',
        answer: 'The current official release is Windows PC through Steam.',
      },
    ],
  },
];

export const featuredGuides = [
  guides[0],
  guides[1],
  guides[3],
  guides[4],
  guides[5],
  guides[6],
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
