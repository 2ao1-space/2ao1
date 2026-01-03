export interface ProjectType {
  title: string;
  thumbnail?: string;
  tagline?: string;
  focus?: string;
  techStack?: string[];
  screens?: string[];
  responsibilities?: string[];
  intent: {
    short?: string;
    details?: string;
  };
  links: {
    live: string;
    repo?: string;
  };
}
