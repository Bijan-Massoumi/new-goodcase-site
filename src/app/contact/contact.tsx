"use client";

import React from "react";
import { Typography, Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

export const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="Contact"
      sx={{
        minHeight: isMobile ? "auto" : "100dvh",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          width: isMobile ? "100%" : "50%",
          height: isMobile ? "50dvh" : "auto",
          backgroundColor: theme.palette.primary.main,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            layout="fill"
            src="/headshots/just_hat_ryan-min.png"
            sizes="(max-width: 768px) 100vw, 50vw"
            objectFit="contain"
            alt="Ryan Goodcase"
          />
        </Box>
      </Box>
      <Box
        sx={{
          width: isMobile ? "100%" : "50%",
          height: "auto",
          bgcolor: theme.palette.third.main,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          padding: isMobile ? undefined : 4,
          overflow: "auto",
        }}
      >
        <Typography
          component="h2"
          variant="h2"
          sx={{ mb: 4, color: theme.palette.text.primary }}
        >
          Contact Information
        </Typography>
        <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
          <strong>Manager:</strong>
          <br />
          Nick Harris - Avalon Management
          <br />
          nharris@avalon-usa.com
        </Typography>
        <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
          <strong>Booking Agents:</strong>
          <br />
          Peter DeSantis - peter@33andwest.com
          <br />
          JJ Cassiere - jj@33andwest.com
        </Typography>
        <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
          <strong>My Email:</strong>
          <br />
          ryan.goodcase@gmail.com
        </Typography>
      </Box>
    </Box>
  );
};
