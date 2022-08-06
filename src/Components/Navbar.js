import { AppBar, Button, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Container, styled } from "@mui/system";
import React from "react";
import { Link } from "react-scroll";

const ContainerStyled = styled(Container)({
  display: "flex",
  alignItems: "center",
});

const StyledToolbar = styled(Toolbar)({
  backgroundColor: "red",
});

const StyledButton = styled(Button)(({ theme }) => ({
  fontWeight: 100,

  borderRadius: theme.shape.borderRadius,
  color: "white",
  margin: " 0 10px",
  border: "1px solid white",
  "&:hover": {
    backgroundColor: "yellow",
    color: "black",
    boxShadow: "0 0 6px 3px brown",
    border: "1px solid yellow",
  },
}));

const LongTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    display: "block",
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const ShortTitle = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "block",
  },
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Test = () => {
  return (
    <AppBar position="sticky" sx={{ mb: 2, zIndex: "50" }} id="/navBar">
      <StyledToolbar>
        <ContainerStyled>
          <LongTitle
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => {
              window.scrollTo({ top: "0", behavior: "smooth" });
            }}
          >
            MON STATE
          </LongTitle>
          <ShortTitle
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            onClick={() => {
              window.scrollTo({ top: "0", behavior: "smooth" });
            }}
          >
            MON
          </ShortTitle>
          <StyledButton>
            <Link to="/lightbox" spy={true} smooth={true} duration={1000}>
              <Typography sx={{ fontSize: "14px" }}> Photos</Typography>
            </Link>
          </StyledButton>
          <StyledButton>
            <Link to="/commentSection" spy={true} smooth={true} duration={1000}>
              <Typography sx={{ fontSize: "14px" }}> Comment</Typography>
            </Link>
          </StyledButton>
        </ContainerStyled>
      </StyledToolbar>
    </AppBar>
  );
};

export default Test;
