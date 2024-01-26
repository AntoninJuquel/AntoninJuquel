import about from "./about.json";
import skills from "./skills.json";
import experiences from "./experiences.json";
import projects from "./projects.json";
import educations from "./educations.json";

export const sections = {
  about: {
    url: "",
    data: about,
  },
  skills: {
    url: "https://raw.githubusercontent.com/AntoninJuquel/AntoninJuquel/main/src/data/skills.json",
    data: skills,
  },
  experiences: {
    url: "https://raw.githubusercontent.com/AntoninJuquel/AntoninJuquel/main/src/data/experiences.json",
    data: experiences,
  },
  projects: {
    url: "https://raw.githubusercontent.com/AntoninJuquel/AntoninJuquel/main/src/data/projects.json",
    data: projects,
  },
  educations: {
    url: "https://raw.githubusercontent.com/AntoninJuquel/AntoninJuquel/main/src/data/educations.json",
    data: educations,
  },
};
