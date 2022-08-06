import { Fab, Link } from "@mui/material";
import { Box, styled } from "@mui/system";

export const MainBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "red",
  borderRadius: "10px",
  boxShadow: "0 0 6px 3px whitesmoke",
  [theme.breakpoints.down("md")]: {
    display: "block",
    height: "200vh",
  },
}));

export const InnerBox = styled(Box)(({ theme }) => ({
  width: "45%",
  height: "95%",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
}));

export const Mon10City = styled(Box)({
  color: "white",
  width: "100%",
  height: "70%",
  fontSize: "19px",
  overflow: "hide",
  listStyleType: "none",
  lineHeight: "1.8",
});

export const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "yellow",
  fontSize: "17px",
  "&:hover": {
    color: "white",
  },
});

export const FloatButton = styled(Fab)(({ theme }) => ({
  position: "fixed",
  left: "90%",
  top: "90vh",
  zIndex: "60",
  [theme.breakpoints.down("md")]: {
    left: "85%",
    top: "90%",
  },
}));
