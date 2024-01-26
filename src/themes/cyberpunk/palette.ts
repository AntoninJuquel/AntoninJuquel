import createPalette from "@mui/material/styles/createPalette";

export default createPalette({
  primary: {
    light: "#8E82FF", // Lighter shade of purple
    main: "#6D5DFF", // Main purple color
    dark: "#4B3DFF", // Darker shade of purple
    contrastText: "#FFFFFF",
  },
  secondary: {
    light: "#FF76A7", // Lighter shade of pink
    main: "#FF5286", // Main pink color
    dark: "#FF2856", // Darker shade of pink
    contrastText: "#FFFFFF",
  },
  error: {
    light: "#FF5252", // Lighter shade of red
    main: "#FF2E2E", // Main red color
    dark: "#FF0000", // Darker shade of red
    contrastText: "#FFFFFF",
  },
  warning: {
    light: "#FFD740", // Lighter shade of yellow
    main: "#FFC400", // Main yellow color
    dark: "#FFAB00", // Darker shade of yellow
    contrastText: "#FFFFFF",
  },
  info: {
    light: "#64B5F6", // Lighter shade of blue
    main: "#2196F3", // Main blue color
    dark: "#1565C0", // Darker shade of blue
    contrastText: "#FFFFFF",
  },
  success: {
    light: "#81C784", // Lighter shade of green
    main: "#4CAF50", // Main green color
    dark: "#388E3C", // Darker shade of green
    contrastText: "#FFFFFF",
  },
  mode: "dark",
  tonalOffset: 0.2,
  contrastThreshold: 3,
  common: {
    black: "#000000", // Black
    white: "#FFFFFF", // White
  },
  grey: {
    "50": "#FAFAFA",
    "100": "#F5F5F5",
    "200": "#EEEEEE",
    "300": "#E0E0E0",
    "400": "#BDBDBD",
    "500": "#9E9E9E",
    "600": "#757575",
    "700": "#616161",
    "800": "#424242",
    "900": "#212121",
    A100: "#D5D5D5",
    A200: "#AAAAAA",
    A400: "#303030",
    A700: "#616161",
  },
  text: {
    primary: "#FFFFFF", // White text
    secondary: "#9E9E9E", // Grey text
    disabled: "#757575", // Light grey text for disabled elements
  },
  divider: "#BDBDBD", // Grey divider color
  background: {
    paper: "#121212", // Dark grey paper background
    default: "#121212", // Dark grey default background
  },
});
