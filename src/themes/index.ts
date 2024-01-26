import { createTheme } from "@mui/material/styles";

import cyberpunk from "./cyberpunk";

export { cyberpunk };

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});
