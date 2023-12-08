export interface Project {
  title: string;
  src: string;
  color: string;
  url: string;
  status?: string;
}

export interface ProjectModal {
  active: boolean;
  index: number;
}
