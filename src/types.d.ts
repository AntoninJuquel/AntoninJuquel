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

type Skill = {
  name: string;
  image: string;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
};

type Experience = {
  role: string;
  company: string;
  date: string;
  description: string;
  skills: string[];
  image: string;
  document?: string;
};

type Education = {
  image: string;
  school: string;
  date: string;
  grade: string;
  description: string;
  degree: string;
  diploma: string;
};

type Certificate = {
  name: string;
  description: string;
  link: string;
  grade: string;
  date: string;
  image: string;
};

type Social = {
  url: string;
  icon: string;
};

type About = {
  firstName: string;
  lastName: string;
  roles: string[];
  description: string;
  image: string;
  socials: Record<string, Social>;
  resume: string;
  rights: string;
};
