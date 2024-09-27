import React from "react";
import { About } from "./about";
import { Box } from "@mui/material";
import { Navbar } from "../navbar";

const AboutPage = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <Navbar />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <About />
      </Box>
    </Box>
  );
};

export default AboutPage;
