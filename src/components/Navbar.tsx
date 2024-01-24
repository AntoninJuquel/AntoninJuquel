import React from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import GithubIcon from "@mui/icons-material/GitHub";

import { sections } from "../data";

function Navbar() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <AppBar
        position="fixed"
        sx={{
          background: theme.bg,
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                position: "absolute",
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: theme.text_primary,
                textDecoration: "none",
              }}
            >
              {sections.about.name}
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                justifyContent: "center",
                display: { xs: "none", md: "flex" },
              }}
            >
              {Object.keys(sections).map((page) => (
                <Button
                  key={page}
                  sx={{ my: 2, color: theme.text_primary, display: "block" }}
                  href={`#${page.toLowerCase()}`}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Button
              variant="outlined"
              startIcon={<GithubIcon />}
              href={sections.about.socials.github.url}
              target="_blank"
              sx={{
                position: "absolute",
                right: 0,
                mx: 2,
              }}
            >
              Github
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}

export default Navbar;
