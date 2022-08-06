import KeyboardArrowUP from "@mui/icons-material/KeyboardArrowUp";
import { Typography } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

import {
  FloatButton,
  InnerBox,
  MainBox,
  Mon10City,
  StyledLink,
} from "./HeroSection.Styled";
import { Link } from "react-scroll";

const HeroSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.01,
  });

  return (
    <div id="/heroSection">
      <MainBox
        gap={2}
        ref={ref}
        initial={{ y: "-100%" }}
        animate={{ y: 0, transition: { duration: 2 } }}
        component={motion.div}
      >
        <InnerBox>
          <motion.img
            src="/image/mon-state.png"
            alt="mon-state"
            style={{ height: "70%" }}
            initial={{ x: "-100%", opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1.5, delay: 1 },
            }}
          />
        </InnerBox>
        <InnerBox>
          <img src="/image/flag.png" alt="map" />
          <Mon10City>
            <Typography
              varient="h1"
              sx={{
                mb: 2,
                borderBottom: "2px solid white",
                fontSize: "17,5px",
              }}
            >
              CITIES OF MON STATE
            </Typography>

            <li>
              <Link to="/cityDrawer" spy={true} smooth={true}>
                <StyledLink component={RouterLink} to="/mawlamyine">
                  Mawlamyine{" (Capital)"}
                </StyledLink>
              </Link>
            </li>
            <li>
              <Link to="/cityDrawer" spy={true} smooth={true}>
                <StyledLink component={RouterLink} to="/mudon">
                  Mudon
                </StyledLink>
              </Link>
            </li>
            <li>
              <Link to="/cityDrawer" spy={true} smooth={true}>
                <StyledLink component={RouterLink} to="/ye">
                  Ye
                </StyledLink>
              </Link>
            </li>
            <li>
              <Link to="/cityDrawer" spy={true} smooth={true}>
                <StyledLink component={RouterLink} to="/kyaikmaraw">
                  Kyaikmaraw
                </StyledLink>
              </Link>
            </li>
            <li>
              <Link to="/cityDrawer" spy={true} smooth={true}>
                <StyledLink component={RouterLink} to="/thanphyuzayat">
                  Thanphyuzayat
                </StyledLink>
              </Link>
            </li>
            <li>
              <Link to="/cityDrawer" spy={true} smooth={true}>
                <StyledLink component={RouterLink} to="/paung">
                  Paung
                </StyledLink>
              </Link>
            </li>
            <li>
              <Link to="/cityDrawer" spy={true} smooth={true}>
                <StyledLink component={RouterLink} to="/thaton">
                  Thaton
                </StyledLink>
              </Link>
            </li>
            <li>
              <Link to="/cityDrawer" spy={true} smooth={true}>
                <StyledLink component={RouterLink} to="/chaungzon">
                  Chaungzon
                </StyledLink>
              </Link>
            </li>
            <li>
              <Link to="/cityDrawer" spy={true} smooth={true}>
                <StyledLink component={RouterLink} to="/kyaikto">
                  Kyaikto
                </StyledLink>
              </Link>
            </li>
            <li>
              <Link to="/cityDrawer" spy={true} smooth={true}>
                <StyledLink component={RouterLink} to="/bilin">
                  Bilin
                </StyledLink>
              </Link>
            </li>
          </Mon10City>
        </InnerBox>
      </MainBox>
      {!inView && (
        <FloatButton
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          onClick={() => {
            window.scrollTo({ top: "0", behavior: "smooth" });
          }}
        >
          <KeyboardArrowUP fontSize="large" />
        </FloatButton>
      )}
    </div>
  );
};

export default HeroSection;
