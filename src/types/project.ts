export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
    publication?: string;
  };
}
