"use client";
import {
  Typography,
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useMediaQuery,
} from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { useTheme } from "@mui/material/styles";

const ShowsBox = styled(Box)(({ theme }) => ({
  minHeight: "100dvh",
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  backgroundColor: theme.palette.secondary.main,
}));

export type Show = {
  month: string;
  day: string;
  time: string;
  venue: string;
  location: string;
  tickets: string;
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  color: theme.palette.text.primary,
  borderBottom: "1px solid black",
  [theme.breakpoints.down("sm")]: {
    textAlign: "center",
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const FlatButton = styled(Button)(({ theme }) => ({
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none",
  },
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
}));

export const ShowRow = ({ show }: { show: Show }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (isMobile) {
    return (
      <StyledTableRow>
        <StyledTableCell>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Typography align="center">
              {`${show.month} ${show.day}`}
              <br />
              {show.time}
            </Typography>
            <Typography align="center">
              {show.venue}
              <br />
              {show.location}
            </Typography>
            <FlatButton
              href={show.tickets}
              variant="contained"
              sx={{
                color: theme.palette.text.primary,
                backgroundColor: theme.palette.third.main,
              }}
            >
              Get Tickets
            </FlatButton>
          </Box>
        </StyledTableCell>
      </StyledTableRow>
    );
  }

  return (
    <StyledTableRow>
      <StyledTableCell>
        {`${show.month} ${show.day}`}
        <br />
        {show.time}
      </StyledTableCell>
      <StyledTableCell>
        {show.venue}
        <br />
        {show.location}
      </StyledTableCell>
      <StyledTableCell align="right">
        <FlatButton
          href={show.tickets}
          variant="contained"
          sx={{
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.third.main,
          }}
        >
          Get Tickets
        </FlatButton>
      </StyledTableCell>
    </StyledTableRow>
  );
};

export const Shows = ({ shows }: { shows: Show[] }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ShowsBox id="Shows">
      <Typography
        component="h2"
        variant="h2"
        sx={{ mb: 4, color: theme.palette.text.primary, textAlign: "center" }}
      >
        Tour
      </Typography>
      <TableContainer
        component={Paper}
        sx={{
          backgroundColor: "transparent",
          "& .MuiTable-root": {
            borderTop: "1px solid black",
          },
        }}
      >
        <Table
          sx={{ minWidth: isMobile ? "100%" : 650 }}
          aria-label="shows table"
        >
          {!isMobile && (
            <TableHead>
              <TableRow>
                <StyledTableCell>Date</StyledTableCell>
                <StyledTableCell>Venue</StyledTableCell>
                <StyledTableCell align="right">Tickets</StyledTableCell>
              </TableRow>
            </TableHead>
          )}
          <TableBody>
            {shows.map((show, index) => (
              <ShowRow key={index} show={show} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ShowsBox>
  );
};
