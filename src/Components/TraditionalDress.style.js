import { styled, Box } from "@mui/system";

export const TraditionalBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "90vh",
  backgroundColor: "red",
  boxShadow: "0 0 6px 3px whitesmoke",
  marginTop: "16px",
  borderRadius: "10px",
  padding: "20px 20px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  alignItems: "center",

  [theme.breakpoints.down("md")]: {
    height: "70vh",
  },
}));
