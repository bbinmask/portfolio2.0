export interface ProjectProps {
  id?: number;
  title: string;
  description: string;
  subDescription: string[];
  href: string;
  logo?: string;
  image: string;
  tags: {
    id: number;
    name: string;
    path: string;
  }[];
}

export interface ExperienceProps {
  title: string;
  subTitle: string;
  date: string;
  contents: string[];
}
