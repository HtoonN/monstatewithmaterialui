import { Box, styled } from "@mui/system";

export const LightBoxContainer = styled(Box)(({ theme }) => ({
  width: "95%",
  height: "95vh",
  position: "fixed",
  top: "2.5%",
  left: "2.5%",
  backgroundColor: "rgba(17, 17, 17, 0.878)",
  zIndex: "100",
  border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {},
}));

export const LightImageBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "98%",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  backgroundColor: "transparent",
}));

export const LightBoxBottonSection = styled(Box)(({ theme }) => ({
  width: "90%",
  height: "10%",
  top: "45%",
  position: "absolute",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

export const LightBoxCloseBotton = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  right: "0",
  top: "0",
  color: "white",
  "&:hover": {
    backgroundColor: "red",
  },
}));

export const LightBoxSection = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100vh",
  backgroundColor: "transparent",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "70vh",
    marginTop: "20px",
  },
}));

export const LightBoxCaption = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "15%",
  overflow: "auto",
  position: "absolute",
  bottom: "0",
  left: "0",
  color: "white",
  padding: "10px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "20%",
  },
}));

export const LightBoxImageCount = styled(Box)(({ theme }) => ({
  width: "20%",
  height: "10%",
  position: "absolute",
  top: "5%",
  left: "6%",
  fontSize: "20px",
  color: "white",
}));

export const ImageBox = styled(Box)(({ theme }) => ({
  margin: "0.5px",
  width: "16.5%",
  height: "30%",
  display: "inline-block",
  position: "relative",

  [theme.breakpoints.down("md")]: {
    width: "19.5%",
    height: "20%",
  },
}));
