export interface Skills {
  id: number;
  skill: string;
  category_id: number;
}

export interface Categories {
  id: number;
  category: string;
}

export interface Review {
  name: string;
  source: string;
  sourceLink: string;
  comment: string;
  rating: number;
}

export interface Projects {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  gallery: string[];
  skills: Skills[];
  date: string;
  url: string;
  slug: string;
}