import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import styled from "@mui/system/styled";
import Link from "@mui/material/Link";
import { Button } from "@mui/material";

export const DList = styled(List)(({ theme }) => ({
  backgroundColor: "red",
  display: "none",
  width: "auto",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "auto",
  },
}));

export const DList2 = styled(List)(({ theme }) => ({
  backgroundColor: "red",
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "12vh",
  overflow: "auto",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const DListItem = styled(ListItem)(({ theme }) => ({
  margin: "0",
  textAlign: "center",
  width: "auto",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "50px",
    padding: "0px 5px",
  },
}));

export const DLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  borderRadius: "10px",
  padding: "0px",
  textAlign: "center",
  color: "white",
  fontSize: "18px",
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    color: "Yellow",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    padding: "10px",

    boxShadow: "0 0 12px 3px brown",
    "&:hover": {
      backgroundColor: "yellow",
      color: "black",
    },
  },
}));

export const DButton = styled(Button)(({ theme }) => ({
  display: "none",
  "&:hover": {
    color: "yellow",
    backgroundColor: "red",
  },
  [theme.breakpoints.down("md")]: {
    padding: "10px",
    width: "100%",
    borderRadius: "5px",
    backgroundColor: "red",
    color: "whitesmoke",
    display: "flex",
    alingItems: "center",
  },
}));
