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
import { useTheme } from "@mui/material/styles";

import Section from "./common/Section";
import Title from "./common/Title";

import { sections } from "../data";
import { useState } from "react";
const { projects } = sections;

const categories = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];

type Props = {
  modalState: ModalState;
  setModalState: (openModal: ModalState) => void;
};

function Projects({ setModalState }: Props) {
  const theme = useTheme();
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const projectsToRender = projects.filter((project) => {
    if (activeCategory === categories[0]) return true;
    return project.category === activeCategory;
  });
  return (
    <Section id="projects">
      <Title>Projects</Title>
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
        {projectsToRender.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.title}>
            <Card
              sx={{
                height: "100%",
                border: "2px solid transparent",
                transition: "all .3s ease-in-out",
                backgroundColor: theme.card,
                ":hover": {
                  border: `2px solid ${theme.primary}`,
                  boxShadow: `${theme.shadow} 0px 4px 24px;`,
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
                    color={theme.text_secondary}
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
        ))}
      </Grid>
    </Section>
  );
}

export default Projects;
