import { Box, styled } from "@mui/system";

export const CardSectionBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "90vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  backgroundColor: "red",
  marginTop: "16px",
  padding: "10px",
  overflow: "auto",
  flexWrap: "wrap",
  borderRadius: "10px",
}));

export const InnerCardSection = styled(Box)(({ theme }) => ({
  width: "50%",
  height: "100%",
  backgroundColor: "balck",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const ImagesTabCards = styled(Box)(({ theme }) => ({
  width: "60vw",
  height: "70vh",
  backgroundColor: "transparent",
  objectFit: "contain",
  [theme.breakpoints.down("md")]: {
    height: "60vh",
    width: "100%",
  },
}));
