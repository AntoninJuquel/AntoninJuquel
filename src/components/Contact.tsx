import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useTheme } from "@mui/material/styles";

import Section from "./common/Section";
import Title from "./common/Title";

type AlertState = {
  open: boolean;
  severity: "success" | "info" | "warning" | "error";
  message: string;
};

function Contact() {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    severity: "success",
    message: "",
  });
  const form = useRef<HTMLFormElement>(null);

  const handleOpen = (newState: AlertState) =>
    setAlertState({
      ...alertState,
      ...newState,
    });
  const handleClose = () => setAlertState({ ...alertState, open: false });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!form.current) return;
    e.preventDefault();
    try {
      setLoading(true);
      await emailjs.sendForm(
        "service_outlook",
        "template_contact",
        form.current,
        "user_l1Qb3tJvE4nAlYoJdTisr"
      );
      handleOpen({
        open: true,
        severity: "success",
        message: "Email sent successfully!",
      });
      form.current.reset();
    } catch (error) {
      console.log(error);
      handleOpen({
        open: true,
        severity: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section id="contact">
      <Title>Contact</Title>
      <Card
        sx={{ bgcolor: theme.card, boxShadow: `${theme.shadow} 0px 4px 24px;` }}
      >
        <CardContent>
          <form ref={form} onSubmit={handleSubmit}>
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              margin="normal"
              fullWidth
              autoComplete="name"
              placeholder="Your Name"
              name="from_name"
              disabled={loading}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
              type="email"
              autoComplete="email"
              placeholder="Your Email"
              name="from_email"
              disabled={loading}
            />
            <TextField
              id="subject"
              label="Subject"
              variant="outlined"
              margin="normal"
              fullWidth
              placeholder="Subject"
              name="subject"
              disabled={loading}
            />
            <TextField
              id="message"
              label="Message"
              variant="outlined"
              margin="normal"
              fullWidth
              multiline
              placeholder="Message"
              rows={4}
              name="message"
              disabled={loading}
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
              type="submit"
              value="Send"
              disabled={loading}
            >
              Send
            </Button>
          </form>
        </CardContent>
      </Card>
      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={alertState.severity}
          variant="filled"
          sx={{ width: "100%", color: theme.text_primary }}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
    </Section>
  );
}

export default Contact;
