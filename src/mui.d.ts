/* eslint-disable */

import { Theme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    bg: string;
    text_primary: string;
    text_secondary: string;
    primary: string;
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    bg?: string;
    text_primary?: string;
    text_secondary?: string;
    primary?: string;
  }
}