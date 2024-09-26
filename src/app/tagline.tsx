"use client";

import React from "react";
import Image from "next/image";
import { Typography, Box, Link } from "@mui/material";
import { styled } from "@mui/system";

const FullHeightBox = styled(Box)(({ theme }) => ({
  height: "100dvh",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  flexDirection: "row",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

const CenteredBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "50%",
  gap: theme.spacing(0.5),

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "50%",
  height: "100%",

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const Tagline: React.FC = () => {
  return (
    <FullHeightBox>
      <CenteredBox>
        <Typography
          variant="h1"
          component="h1"
          marginTop={{ md: "0", xs: "20dvh" }}
          sx={{ color: "white", fontWeight: "bold", textAlign: "center" }}
        >
          Ryan Goodcase
        </Typography>
        <Link
          href="https://www.youtube.com/watch?v=_3KJhf5RaUY&ab_channel=TinyPony"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: (theme) => theme.palette.third.main,
            textDecoration: "none",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          <Typography variant="h4" component="h2">
            WATCH MY SPECIAL
          </Typography>
        </Link>
      </CenteredBox>
      <ImageBox>
        <Box
          height={{ md: "75%", xs: "90%" }}
          sx={{
            position: "absolute",
            bottom: 0,
            width: "100%",
          }}
        >
          <Image
            src="/headshots/just-ryan-min.png"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "contain" }}
            loading="eager"
            alt="Ryan Goodcase"
          />
        </Box>
      </ImageBox>
    </FullHeightBox>
  );
};
