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
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  github: string;
  app: string;
  member: Member[];
};
