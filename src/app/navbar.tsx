"use client";

import React, { useState } from "react";
import {
  Container,
  AppBar,
  Toolbar,
  Button,
  Box,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import { useRouter } from "next/navigation";

const StyledNav = styled(AppBar)(({ theme }) => ({
  backgroundColor: "transparent",
  boxShadow: "none",
  zIndex: 1000,
  transition: "background-color 0.3s ease",
  "&.menu-open": {
    background: `linear-gradient(to bottom, ${theme.palette.third.main}, ${theme.palette.third.light})`,
  },
}));

const StyledNavButton = styled(Button)(({ theme }) => ({
  color: "white",
  backgroundColor: "transparent",
  fontWeight: "bold",
  fontSize: "18px",
  margin: "0 10px",
  "&:hover": {
    backgroundColor: theme.palette.secondary.main,
  },
}));

const LogoText = styled(Typography)(() => ({
  color: "white",
  fontWeight: "bold",
  fontSize: "24px",
  flexGrow: 1,
  cursor: "pointer",
}));

const MobileMenu = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: "7vh",
  left: 0,
  width: "100%",
  height: "93vh",
  background: `linear-gradient(to bottom, ${theme.palette.third.main}, ${theme.palette.third.light})`,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 999,
}));

const MobileMenuButton = styled(StyledNavButton)({
  fontSize: "24px",
  margin: "15px 0",
});

const Socials = () => (
  <Box
    flex={1}
    flexGrow={0}
    flexBasis={"30px"}
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: 2,
      marginBottom: 2,
    }}
  >
    <Button
      href="https://www.youtube.com/channel/UCFxfyJKXtWwN7GzcTO4C38w"
      sx={{
        backgroundColor: "transparent",
        color: (theme) => theme.palette.text.primary,
        "&:hover": {
          backgroundColor: "transparent",
          color: (theme) => theme.palette.text.secondary,
        },
      }}
    >
      <YouTubeIcon sx={{ fontSize: 30 }} />
    </Button>
    <Button
      href="https://www.instagram.com/ryangoodcase/"
      sx={{
        backgroundColor: "transparent",
        color: (theme) => theme.palette.text.primary,
        "&:hover": {
          backgroundColor: "transparent",
          color: (theme) => theme.palette.text.secondary,
        },
      }}
    >
      <InstagramIcon sx={{ fontSize: 30 }} />
    </Button>
    <Button
      href="https://twitter.com/ryangoodcase"
      sx={{
        backgroundColor: "transparent",
        color: (theme) => theme.palette.text.primary,
        "&:hover": {
          backgroundColor: "transparent",
          color: (theme) => theme.palette.text.secondary,
        },
      }}
    >
      <TwitterIcon sx={{ fontSize: 30 }} />
    </Button>
  </Box>
);

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const router = useRouter();

  const handleNavigation = (path: string) => {
    router.push(path);
    setMenuOpen(false);
  };

  return (
    <>
      <StyledNav
        position="fixed"
        className={menuOpen ? "menu-open" : ""}
        sx={{
          height: "7vh",
          backgroundColor: menuOpen
            ? `linear-gradient(to bottom, ${theme.palette.third.main}, ${theme.palette.third.light})`
            : "transparent",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            sx={{
              justifyContent: "space-between",
              height: "100%",
              alignItems: "center",
            }}
          >
            <Link href="/" passHref style={{ textDecoration: "none" }}>
              <LogoText variant="h6">Ryan Goodcase</LogoText>
            </Link>
            {!isMobile ? (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <StyledNavButton onClick={() => handleNavigation("/shows")}>
                  Shows
                </StyledNavButton>
                <StyledNavButton onClick={() => handleNavigation("/about")}>
                  About
                </StyledNavButton>
                <StyledNavButton onClick={() => handleNavigation("/contact")}>
                  Contact
                </StyledNavButton>
              </Box>
            ) : (
              <IconButton
                onClick={() => setMenuOpen(!menuOpen)}
                sx={{
                  color: "white",
                  "&:hover": {
                    backgroundColor: theme.palette.secondary.main,
                  },
                }}
              >
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
              </IconButton>
            )}
          </Toolbar>
        </Container>
      </StyledNav>
      <Box sx={{ display: isMobile && menuOpen ? "flex" : "none" }}>
        <MobileMenu>
          <Box
            flex={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <MobileMenuButton onClick={() => handleNavigation("/shows")}>
              Shows
            </MobileMenuButton>
            <MobileMenuButton onClick={() => handleNavigation("/about")}>
              About
            </MobileMenuButton>
            <MobileMenuButton onClick={() => handleNavigation("/contact")}>
              Contact
            </MobileMenuButton>
          </Box>
          <Socials />
        </MobileMenu>
      </Box>
    </>
  );
};
