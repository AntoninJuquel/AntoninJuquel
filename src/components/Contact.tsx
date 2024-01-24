import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Section from "./common/Section";
import Title from "./common/Title";

function Contact() {
  return (
    <Section id="contact">
      <Title>Contact</Title>
      <Card>
        <CardContent>
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            margin="normal"
            fullWidth
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
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
            color="secondary"
            style={{ marginTop: "10px", padding: "10px" }}
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
