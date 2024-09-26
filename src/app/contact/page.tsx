import React from "react";
import { Box } from "@mui/material";
import { Navbar } from "../navbar";
import { Contact } from "./contact";

const ContactPage = () => {
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
        <Contact />
      </Box>
    </Box>
  );
};

export default ContactPage;
