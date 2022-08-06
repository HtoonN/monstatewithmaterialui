import { Box, styled } from "@mui/system";

export const CommantSectionBox = styled(Box)(({ theme }) => ({
  wdith: "100%",
  height: "80vh",
  backgroundImage: "url(/image/commantSectionBackgroundImage2.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  padding: "0.5%",

  [theme.breakpoints.down("md")]: {
    height: "100vh",
  },
}));

export const CommantBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "90%",
  backgroundColor: "transparent",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "30px",
  padding: "30px",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    padding: "0px",
  },
}));

export const BoxOne = styled(Box)(({ theme }) => ({
  width: "35%",
  height: "100%",
  margin: "2px",
  padding: "2%",
  textAlign: "justify",
  color: "white",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "10%",
    padding: "0px",
  },
}));

export const BoxTwo = styled(Box)(({ theme }) => ({
  width: "50%",
  height: "100%",
  margin: "2px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-around",
  backgroundColor: "rgba(255, 251, 251, 0.521)",
  borderRadius: "20px",
  padding: "20px",

  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "70%",
    padding: "30px  5px 10px 5px",
  },
}));
