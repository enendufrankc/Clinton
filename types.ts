
export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  achievements: string[];
}

export interface Publication {
  authors: string;
  year: number;
  title: string;
  journal: string;
}

export interface Skill {
  category: string;
  items: string[];
}
