import { Box, styled } from "@mui/system";

export const CityBoxOne = styled(Box)(({ theme }) => ({
  width: "18%",
  height: "70%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    height: "35%",
    width: "50%",
  },
}));
export const CityBoxTwo = styled(Box)(({ theme }) => ({
  width: "75%",
  height: "90%",
  marginRight: "20px",
  borderRadius: "20px",
  [theme.breakpoints.down("md")]: {
    height: "65%",
    width: "100%",
    marginRight: "0",
  },
}));

export const StyleBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "70vh",
  marginTop: "1px",
  backgroundColor: "red",
  borderRadius: "10px",
  color: "whitesmoke",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    height: "100vh",
  },
}));
