import React from "react";
import { Box } from "@mui/material";
import { Shows } from "./shows";
import { fetchShows } from "@/utils.ts/fetchShows";
import { Navbar } from "../navbar";

const ShowsPage = async () => {
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
        <Shows shows={shows} />
      </Box>
    </Box>
  );
};

export default ShowsPage;
