export interface ProjectDetail {
  title: string;
  description: string;
  technologies: string[];
  url: string;
  demoUrl: string;
  bullets: string[];
  image: string;
  logo: string;
  logoName?: string;
  progress: string;
  type: string[];
}

export interface Contribution {
  logo: string;
  title: string;
  role: string;
  date: string;
  description: string;
  technologies: string[];
  link: string;
}
