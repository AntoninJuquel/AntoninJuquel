import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@mui/material/styles";

import Section from "./common/Section";
import Title from "./common/Title";

function Contact() {
  const theme = useTheme();
  return (
    <Section id="contact">
      <Title>Contact</Title>
      <Card
        sx={{ bgcolor: theme.card, boxShadow: `${theme.shadow} 0px 4px 24px;` }}
      >
        <CardContent>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            margin="normal"
            fullWidth
            autoComplete="name"
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            type="email"
            autoComplete="email"
          />
          <TextField
            id="subject"
            label="Subject"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            id="message"
            label="Message"
            variant="outlined"
            margin="normal"
            fullWidth
            multiline
            rows={4}
          />
          <Button
            variant="contained"
            sx={{
              marginTop: "10px",
              backgroundColor: theme.button,
              textTransform: "none",
              fontSize: 20,
              borderRadius: 2,
              padding: 1,
              transition: "all .3s ease-in-out",
              ":hover": {
                transform: "scale(1.01)",
              },
            }}
            fullWidth
          >
            Send
          </Button>
        </CardContent>
      </Card>
    </Section>
  );
}

export default Contact;
