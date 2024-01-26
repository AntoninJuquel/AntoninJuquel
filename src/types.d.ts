type ModalState = {
  isOpen: boolean;
  project: Project | null;
};

type Member = {
  name: string;
  img: string;
  linkedin: string;
  github: string;
};

type Project = {
  image: string;
  title: string;
  tags: string[];
  date: string;
  category: string;
  description: string;
  source: string;

  members?: Member[];
  video?: string;
  screenshots?: string[];
  application?: string;
  report?: string;
  readme?: string;
};
