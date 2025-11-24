export interface SkillsCategory {
  [category: string]: string[];
}

export interface Review {
  name: string;
  source: string;
  sourceLink: string;
  comment: string;
  rating: number;
}