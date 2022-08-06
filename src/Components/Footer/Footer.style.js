import { Box, styled } from "@mui/system";

export const FooterContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "40vh",
  backgroundColor: "red",
  padding: "2%",
  [theme.breakpoints.down("md")]: {
    height: "70vh",
  },
}));

export const SocialIcon = styled(Box)(({ theme }) => ({
  wdith: "100%",
  height: "30%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const Contact = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "50%",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  marginTop: "20px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const CopyRightB = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "10%",
  color: "white",
  fontSize: "15px",
  textAlign: "center",
}));
