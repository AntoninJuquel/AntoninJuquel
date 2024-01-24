import { createTheme } from "@mui/material/styles";

import dark from "./dark.json";
import light from "./light.json";

export const darkTheme = createTheme({
  ...dark,
  palette: {
    mode: "dark",
  },
});

export const lightTheme = createTheme({
  ...light,
  palette: {
    mode: "light",
  },
});
