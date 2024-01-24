import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Avatar from "@mui/material/Avatar";
import { useTheme } from "@mui/material/styles";
import Typewriter from "typewriter-effect";

import Section from "./common/Section";
import { sections } from "../data";
const { about } = sections;

function About() {
  const theme = useTheme();
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
            color={theme.text_primary}
            whiteSpace="pre"
          >
            {about.title}
          </Typography>
          <Typography
            variant="h4"
            gutterBottom
            color={theme.text_primary}
            sx={{ display: "flex", gap: ".5rem" }}
          >
            I am a
            <span style={{ color: theme.primary }}>
              <Typewriter
                options={{
                  strings: about.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </Typography>
          <Typography variant="h5" color={theme.text_secondary}>
            {about.description}
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            sx={{
              mt: 2,
              fontSize: 20,
              borderRadius: 5,
              padding: 2,
              textTransform: "none",
            }}
          >
            Check Resume
          </Button>
        </Box>
        <Avatar
          src={about.image}
          alt={about.name}
          sx={{ width: "35%", height: "35%", minWidth: 300, minHeight: 300 }}
        />
      </Stack>
    </Section>
  );
}

export default About;
