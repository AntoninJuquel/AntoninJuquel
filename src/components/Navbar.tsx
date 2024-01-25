import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import GithubIcon from "@mui/icons-material/GitHub";

import { sections } from "../data";

function Navbar() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { xs: "flex", md: "none" } }}
              onClick={handleClick}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              sx={{
                "& .MuiPaper-root": {
                  background: theme.card,
                  color: theme.text_primary,
                  boxShadow: `${theme.shadow} 0px 4px 24px;`,
                },
              }}
            >
              {Object.keys(sections).map((page) => (
                <a
                  key={page}
                  href={`#${page.toLowerCase()}`}
                  style={{
                    textDecoration: "none",
                    color: theme.text_primary,
                    textTransform: "uppercase",
                  }}
                >
                  <MenuItem key={page} onClick={handleClose}>
                    {page}
                  </MenuItem>
                </a>
              ))}
            </Menu>
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
