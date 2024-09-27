"use client";

import React from "react";
import { Typography, Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";
import { usePathname } from "next/navigation";

export const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const pathname = usePathname();
  const isAboutPage = pathname === "/about";

  return (
    <Box
      id="About"
      sx={{
        minHeight: isMobile ? "auto" : "100vh",
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <Box
        sx={{
          width: isMobile ? "100%" : "50%",
          height: isMobile ? (isAboutPage ? "50dvh" : "50vh") : "auto",
          bgcolor: theme.palette.primary.main,
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
          <Image
            src="/headshots/just-ryan2-min.png"
            layout="fill"
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
          padding: isMobile ? "0 10px" : 4,
          overflow: "auto",
          boxSizing: "border-box",
        }}
      >
        <Box>
          <Typography
            component="h2"
            variant="h2"
            sx={{ mb: 4, color: theme.palette.text.primary }}
          >
            Okay here&apos;s my life story
          </Typography>
          <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
            but only because you asked. I was raised a quiet, young boy in the
            humble Midwest, and learned to speak into a microphone in order for
            my voice to be heard. You can hear that voice on Netflix is a Joke
            Radio or my full length special on YouTube, &quot;Maybe They&apos;re
            Dead.&quot;, which at the time of writing this has 146,000 views. Go
            watch it right now and you can make it 146,001.
          </Typography>
          <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
            I am also popular on TikTok and Instagram, where millions of people
            have watched and reacted to clips of my comedy. I was one of nine up
            and coming comedians Netflix included in their comedy
            festival&apos;s &quot;Introducing...&quot; showcase, which you can
            watch on Netflix&apos;s Youtube page.
          </Typography>
          <Typography variant="body1" color="text.primary" sx={{ mb: 2 }}>
            I also joined the likes of Dana Carvey, Doug Stanhope, and Sinbad by
            winning the San Francisco International Comedy Competition in 2021.
            You might also recognize me from a series of comedic Bed, Bath &
            Beyond commercials where I play an apathetic sales associate (my
            lawyers have assured me that my performance had nothing to do with
            Bed, Bath & Beyond&apos;s filing for bankruptcy.
          </Typography>
          <Typography variant="body1" color="text.primary">
            If it sounds like AI wrote this, it&apos;s because I am as smart as
            a computer.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
