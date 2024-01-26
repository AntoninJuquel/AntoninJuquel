import { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";

import Section from "./common/Section";
import Title from "./common/Title";

import { sections } from "../data";
import { useData } from "../hooks/useData";

type Props = {
  modalState: ModalState;
  setModalState: (openModal: ModalState) => void;
};

function Projects({ setModalState }: Props) {
  const theme = useTheme();
  const [categories, setCategories] = useState<string[]>(["All"]);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [projectTags, setProjectTags] = useState<string[]>([]);
  const [projectTitles, setProjectTitles] = useState<string[]>([]);
  const projects = useData<Project[]>(sections.projects);
  useEffect(() => {
    setCategories([
      "All",
      ...new Set(projects.map((project) => project.category)),
    ]);
    setProjectTags([
      ...new Set(projects.map((project) => project.tags).flat()),
    ]);
    setProjectTitles(projects.map((project) => project.title));
  }, [projects]);

  const projectsToRender = projects.filter((project) => {
    const hasFilter = activeFilters.length > 0;
    const hasMatchingTag = project.tags.some((tag) =>
      activeFilters.includes(tag)
    );
    const hasMatchingTitle = activeFilters.includes(project.title);
    const hasMatchingCategory =
      project.category === activeCategory || activeCategory === categories[0];

    if (hasFilter) {
      return (hasMatchingTag || hasMatchingTitle) && hasMatchingCategory;
    } else {
      return hasMatchingCategory;
    }
  });

  return (
    <Section id="projects">
      <Title>Projects</Title>
      <Autocomplete
        multiple
        id="tags-standard"
        options={[...projectTitles, ...projectTags]}
        groupBy={(option) => {
          if (projectTitles.includes(option)) {
            return "Project Titles";
          }
          return "Tags";
        }}
        onChange={(_, value) => {
          setActiveFilters(value);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="standard"
            label="Search"
            placeholder="Project title or tag"
          />
        )}
      />
      <Tabs
        value={activeCategory}
        onChange={(_, value) => setActiveCategory(value)}
        centered
      >
        {categories.map((category) => (
          <Tab key={category} label={category} value={category} />
        ))}
      </Tabs>
      <Grid container spacing={3} mt={4}>
        {projectsToRender.length > 0 ? (
          projectsToRender.map((project) => (
            <Grid item xs={12} sm={6} md={4} key={project.title}>
              <Card
                sx={{
                  height: "100%",
                  border: "2px solid transparent",
                  transition: "all .3s ease-in-out",
                  backgroundColor: theme.palette.background.paper,
                  ":hover": {
                    border: `2px solid ${theme.palette.secondary.main}`,
                    boxShadow: `${theme.palette.secondary.main} 0px 4px 24px;`,
                    transform: "scale(1.05)",
                  },
                }}
              >
                <CardActionArea
                  onClick={() => setModalState({ isOpen: true, project })}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{ objectFit: "contain" }}
                  />
                  <Stack
                    direction="row"
                    sx={{ padding: "1rem" }}
                    flexWrap="wrap"
                    gap={1}
                  >
                    {project.tags.map((tag) => (
                      <Chip key={tag} label={tag} />
                    ))}
                  </Stack>
                  <CardHeader title={project.title} subheader={project.date} />
                  <CardContent>
                    <Typography
                      variant="body2"
                      color={theme.palette.text.secondary}
                      sx={{
                        textOverflow: "ellipsis",
                        maxWidth: "100%",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: "vertical",
                      }}
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        ) : (
          <Typography
            variant="body2"
            color={theme.palette.text.secondary}
            margin="auto"
          >
            No projects found.
          </Typography>
        )}
      </Grid>
    </Section>
  );
}

export default Projects;
