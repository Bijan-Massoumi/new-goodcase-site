import React from "react";
import { Box } from "@mui/material";
import { Tagline } from "./tagline";
import { Navbar } from "./navbar";
import { About } from "./about/about";
import { Shows } from "./shows/shows";
import { fetchShows } from "@/utils.ts/fetchShows";

// Main App Component
const App = async () => {
  const shows = await fetchShows();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100dvh",
        bgcolor: "background.default",
      }}
    >
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Tagline />
        <Shows shows={shows} />
        <About />
      </Box>
    </Box>
  );
};

export default App;
