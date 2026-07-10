export type SourceType =
  | 'official'
  | 'community'
  | 'youtube'
  | 'competitor'
  | 'serper'
  | 'manual_review';

export type Confidence = 'high' | 'medium' | 'low' | 'watch';

export type SourceStrategy =
  | 'official'
  | 'manual_data'
  | 'user_intent_youtube'
  | 'popular_youtube'
  | 'youtube_explainer'
  | 'community_crosscheck';

export interface DataSource {
  type: SourceType;
  label: string;
  url: string;
  checkedAt: string;
  confidence: Confidence;
  note: string;
}

export interface GameFact {
  label: string;
  value: string;
}

export interface KeywordMatrixItem {
  keyword: string;
  intent: string;
  route: string;
  priority: 'P0' | 'P1' | 'P2' | 'P3';
  status: 'keep' | 'ignore' | 'watch' | 'localize_later';
  evidence: string;
  notes: string;
}

export interface GuideSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface GuideFaq {
  question: string;
  answer: string;
}

export interface GuideVideo {
  id: string;
  title: string;
  channel: string;
  url: string;
  thumbnailUrl: string;
  publishedAt?: string;
  viewCountLabel?: string;
  checkedAt: string;
}

export type GuideCategory =
  | 'Start'
  | 'Voice'
  | 'Monsters'
  | 'Modes'
  | 'Survival'
  | 'Platform'
  | 'Community'
  | 'Safety'
  | 'Update';

export type GuideDifficulty =
  | 'Beginner'
  | 'Intermediate'
  | 'Advanced'
  | 'Status';

export interface Guide {
  slug: string;
  path: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  summary: string;
  category: GuideCategory;
  difficulty: GuideDifficulty;
  coverImageUrl: string;
  publishedAt: string;
  updatedAt: string;
  sourceStrategy: SourceStrategy;
  videoSearchQueries: string[];
  sourceNotes: string;
  video?: GuideVideo;
  tags: string[];
  relatedRoutes: string[];
  body: GuideSection[];
  faq: GuideFaq[];
}

export interface MonsterEntry {
  name: string;
  act: string;
  trigger: string;
  response: string;
  confidence: Confidence;
}

export interface GameModeEntry {
  name: string;
  players: string;
  goal: string;
  route: string;
}

export interface RedeemCode {
  code: string;
  reward: string;
  status: 'officially_published' | 'expired' | 'watch';
  sourceUrl: string;
  publishedAt: string;
  checkedAt: string;
  note: string;
}
