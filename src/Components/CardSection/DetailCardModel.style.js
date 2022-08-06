import { Box, Paper } from "@mui/material";
import { styled } from "@mui/system";

export const DetailCardBox = styled(Box)(({ theme }) => ({
  width: "50px",
  height: "50px",
  backgroundColor: "rgba(223, 229, 235, 0.342)",
  color: "black",
  borderRadius: "25px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "10px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgba(223, 229, 235, 0.842)",
  },
}));

export const MaxBox = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  position: "fixed",
  top: "0",
  left: "0",
  backgroundColor: "rgba(0, 0, 0, 0.632)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  zIndex: "100",
  [theme.breakpoints.down("md")]: {},
}));

export const TextBox = styled(Paper)(({ theme }) => ({
  width: "80vw",
  height: "90vh",
  boxShadow: "0 0 18px 3px black",
  overflow: "auto",
  padding: " 5px 20px 20px 20px",
  fontSize: "22px",
  lineHeight: "30px",
  textAlign: "justify",
  backgroundColor: "red",
  color: "white",

  [theme.breakpoints.down("md")]: {
    height: "90vh",
    width: "100%",
    boxShadow: "0 0 0 0",
    backgroundColor: " red",
    color: "white",
  },
}));
