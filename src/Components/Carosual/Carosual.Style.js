import { Box, styled } from "@mui/system";

export const CarosualBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    height: "60vh",
    width: "100vw",
  },
}));

export const ImagesTab = styled(Box)(({ theme }) => ({
  width: "60vw",
  height: "70vh",
  backgroundColor: "transparent",
  objectFit: "contain",
  [theme.breakpoints.down("md")]: {
    height: "60vh",
    width: "70vw",
  },
}));

export const CountImages = styled(Box)({
  color: "white",
  position: "absolute",
  top: "95%",
  width: "70px",
  height: "40px",
  borderRadius: "10px",
  fontSize: "20px",
  textAlign: "center",
  marginTop: "10px",
});
