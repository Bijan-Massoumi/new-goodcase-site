"use client";
import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    third: Palette["primary"];
  }
  interface PaletteOptions {
    third?: PaletteOptions["primary"];
  }
}

const theme = createTheme({
  cssVariables: true,
  palette: {
    mode: "dark",
    primary: {
      main: "#2C5478", // From the "Get Tickets" button color
    },
    secondary: {
      main: "#006150", // From the card border color
    },
    third: {
      main: "#DB2500", // New color for the "Watch my special" link
      light: "#FF4500", // Lighter shade for hover effect
    },
    background: {
      default: "#000000", // Black background from App.css
      paper: "#000000", // For cards and other paper elements
    },
    text: {
      primary: "#ffffff", // White text color
      secondary: "#c0c0c0", // Light gray color for secondary text, similar to "7PM" in the image
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)", // As per your initial theme
    h1: {
      fontSize: "50pt", // From Tagline.js
    },
    h3: {
      margin: 0,
      padding: 0,
    },
    body1: {
      fontSize: "20px", // From Header.js nav item font size
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#29ba68", // From ShowDates.js button
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "#1e8c4e", // Slightly darker shade for hover state
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          marginBottom: "3px",
          marginTop: "2px",
          border: "1px solid #4a524d",
        },
      },
    },
  },
});

export default theme;
