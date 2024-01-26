import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/styles";
import Typewriter from "typewriter-effect";

import Section from "./common/Section";
import { sections } from "../data";
import { useData } from "../hooks/useData";

function About() {
  const theme = useTheme();
  const about = useData<About>(sections.about);

  return (
    <Section id="about">
      <Stack
        direction={{ xs: "column-reverse", sm: "row" }}
        spacing={2}
        alignItems="center"
      >
        <Box>
          <Typography
            variant="h3"
            fontWeight="bold"
            component="h2"
            gutterBottom
            whiteSpace="pre"
            color={theme.palette.text.primary}
          >
            Hi, I am <br />
            {about.lastName} {about.firstName} 👋
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            sx={{ display: "flex", gap: ".5rem" }}
            color={theme.palette.text.primary}
          >
            I am a
            <span style={{ color: theme.palette.secondary.main }}>
              <Typewriter
                options={{
                  strings: about.roles,
                  autoStart: true,
                  loop: true,
                  cursor: "\u25A0",
                }}
              />
            </span>
          </Typography>
          <Typography variant="h5" color={theme.palette.text.secondary}>
            {about.description}
          </Typography>
          <Button
            variant="contained"
            sx={{
              mt: 2,
              fontSize: 20,
              borderRadius: 5,
              padding: 2,
              textTransform: "none",
            }}
            href={about.resume}
          >
            Check Resume
          </Button>
        </Box>
        <Avatar
          src={about.image}
          alt={about.firstName}
          sx={{ width: "35%", height: "35%", minWidth: 300, minHeight: 300 }}
        />
      </Stack>
    </Section>
  );
}

export default About;
