import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

import Section from "./common/Section";
import Title from "./common/Title";

import { sections } from "../data";
const { about } = sections;

function Footer() {
  const theme = useTheme();
  return (
    <Section id="footer">
      <Title>{about.name}</Title>
      <Stack direction="row" spacing={2} justifyContent="center">
        {Object.entries(about.socials).map(([key, value]) => (
          <Button
            key={key}
            href={value.url}
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <img
              key={key}
              src={value.icon}
              alt={key}
              style={{ width: "30px", height: "30px", margin: "10px" }}
            />
          </Button>
        ))}
      </Stack>
      <Typography variant="body1" align="center" color={theme.text_secondary}>
        {about.rights}
      </Typography>
    </Section>
  );
}

export default Footer;
