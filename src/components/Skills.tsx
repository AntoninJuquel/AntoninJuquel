import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";

import Title from "./common/Title";
import Section from "./common/Section";
import { sections } from "../data";
const { skills } = sections;

function Skills() {
  const theme = useTheme();
  return (
    <Section id="skills">
      <Title>Skills</Title>
      <Grid container justifyContent="center" spacing={2} rowSpacing={5}>
        {skills.map((skill) => (
          <Grid
            item
            key={skill.title}
            lg={4}
            sx={{
              transition: "all .3s ease-in-out",
              ":hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <Box
              border={`1px solid ${theme.primary}`}
              boxShadow={`${theme.shadow} 0px 4px 24px;`}
              borderRadius={3}
              textAlign="center"
              paddingX={theme.spacing(1)}
              paddingY={theme.spacing(5)}
              height="100%"
            >
              <Typography
                variant="h5"
                gutterBottom
                color={theme.text_secondary}
                mb={5}
                fontWeight="bold"
              >
                {skill.title}
              </Typography>
              <Grid container justifyContent="center" spacing={2}>
                {skill.skills.map((item) => (
                  <Grid item key={item.name}>
                    <Box
                      display="flex"
                      justifyContent="center"
                      alignContent="center"
                      alignItems="center"
                      border={`1px solid ${theme.text_secondary}`}
                      borderRadius={2}
                      padding={theme.spacing(1)}
                      gap={theme.spacing(1)}
                      sx={{
                        transition: "all .3s ease-in-out",
                        ":hover": {
                          transform: "scale(1.15)",
                        },
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: "24px", height: "24px" }}
                      />
                      <Typography variant="body1" color={theme.text_secondary}>
                        {item.name}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Section>
  );
}

export default Skills;
