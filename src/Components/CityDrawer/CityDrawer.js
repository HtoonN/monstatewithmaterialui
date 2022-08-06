import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Menu from "@mui/icons-material/Menu";
import { DButton, DLink, DList, DList2, DListItem } from "./CityDrawer.styled";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);
  let location = useLocation();

  const [ref, inView] = useInView({
    threshold: 0.3,
  });
  const initial = { opacity: 0, x: -100 };
  const transition = { duration: 1 };
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
      });
      return;
    }

    animation.start({
      opacity: 0,
      x: -100,
      transition: {
        duration: 1,
      },
    });
  }, [inView, animation]);

  const list = () => (
    <Box>
      <DList>
        <DListItem>
          <DLink
            component={RouterLink}
            to="/mawlamyine"
            sx={{
              backgroundColor:
                location.pathname === "/mawlamyine" || location.pathname === "/"
                  ? "yellow"
                  : " ",
              color:
                location.pathname === "/mawlamyine" || location.pathname === "/"
                  ? "black"
                  : "white",
            }}
            onClick={() => {
              setState(false);
            }}
          >
            Mawlamyine
          </DLink>
        </DListItem>
        <DListItem>
          <DLink
            component={RouterLink}
            to="/mudon"
            sx={{
              backgroundColor: location.pathname === "/mudon" ? "yellow" : " ",
              color: location.pathname === "/mudon" ? "black" : "white",
            }}
            onClick={() => {
              setState(false);
            }}
          >
            Mudon
          </DLink>
        </DListItem>
        <DListItem>
          <DLink
            component={RouterLink}
            to="/ye"
            sx={{
              backgroundColor: location.pathname === "/ye" ? "yellow" : " ",
              color: location.pathname === "/ye" ? "black" : "white",
            }}
            onClick={() => {
              setState(false);
            }}
          >
            Ye
          </DLink>
        </DListItem>
        <DListItem>
          <DLink
            component={RouterLink}
            to="/kyaikmaraw"
            sx={{
              backgroundColor:
                location.pathname === "/kyaikmaraw" ? "yellow" : " ",
              color: location.pathname === "/kyaikmaraw" ? "black" : "white",
            }}
            onClick={() => {
              setState(false);
            }}
          >
            Kyaikmaraw
          </DLink>
        </DListItem>
        <DListItem>
          <DLink
            component={RouterLink}
            to="/chaungzon"
            sx={{
              backgroundColor:
                location.pathname === "/chaungzon" ? "yellow" : " ",
              color: location.pathname === "/chaungzon" ? "black" : "white",
            }}
            onClick={() => {
              setState(false);
            }}
          >
            Chaungzone
          </DLink>
        </DListItem>
        <DListItem>
          <DLink
            component={RouterLink}
            to="/thanphyuzayat"
            sx={{
              backgroundColor:
                location.pathname === "/thanphyuzayat" ? "yellow" : " ",
              color: location.pathname === "/thanphyuzayat" ? "black" : "white",
            }}
            onClick={() => {
              setState(false);
            }}
          >
            Thanphyuzayat
          </DLink>
        </DListItem>
        <DListItem>
          <DLink
            component={RouterLink}
            to="/paung"
            sx={{
              backgroundColor: location.pathname === "/paung" ? "yellow" : " ",
              color: location.pathname === "/paung" ? "black" : "white",
            }}
            onClick={() => {
              setState(false);
            }}
          >
            Paung
          </DLink>
        </DListItem>
        <DListItem>
          <DLink
            component={RouterLink}
            to="/thaton"
            sx={{
              backgroundColor: location.pathname === "/thaton" ? "yellow" : " ",
              color: location.pathname === "/thaton" ? "black" : "white",
            }}
            onClick={() => {
              setState(false);
            }}
          >
            Thaton
          </DLink>
        </DListItem>

        <DListItem>
          <DLink
            component={RouterLink}
            to="/kyaikto"
            sx={{
              backgroundColor:
                location.pathname === "/kyaikto" ? "yellow" : " ",
              color: location.pathname === "/kyaikto" ? "black" : "white",
            }}
            onClick={() => {
              setState(false);
            }}
          >
            Kyaikto
          </DLink>
        </DListItem>
        <DListItem>
          <DLink
            component={RouterLink}
            to="/bilin"
            sx={{
              backgroundColor: location.pathname === "/bilin" ? "yellow" : " ",
              color: location.pathname === "/bilin" ? "black" : "white",
            }}
            onClick={() => {
              setState(false);
            }}
          >
            Bilin
          </DLink>
        </DListItem>
      </DList>
    </Box>
  );

  return (
    <Box
      sx={{ marginTop: "16px", textAlign: "center" }}
      id="/cityDrawer"
      ref={ref}
    >
      <DList2
        sx={{ borderRadius: "5px" }}
        component={motion.div}
        initial={initial}
        animate={animation}
        transition={transition}
      >
        <DListItem>
          <DLink
            component={RouterLink}
            to="/mawlamyine"
            sx={{
              color:
                location.pathname === "/mawlamyine" || location.pathname === "/"
                  ? "yellow"
                  : "white",
            }}
          >
            Mawlamyine
          </DLink>
        </DListItem>
        <DListItem>
          <DLink
            component={RouterLink}
            to="/mudon"
            sx={{
              color: location.pathname === "/mudon" ? "yellow" : "white",
            }}
          >
            Mudon
          </DLink>
        </DListItem>
        <DListItem>
          <DLink
            component={RouterLink}
            to="/ye"
            sx={{
              color: location.pathname === "/ye" ? "yellow" : "white",
            }}
          >
            Ye
          </DLink>
        </DListItem>
        <DListItem>
          <DLink
            component={RouterLink}
            to="/kyaikmaraw"
            sx={{
              color: location.pathname === "/kyaikmaraw" ? "yellow" : "white",
            }}
          >
            Kyaikmaraw
          </DLink>
        </DListItem>
        <DListItem>
          <DLink
            component={RouterLink}
            to="/chaungzon"
            sx={{
              color: location.pathname === "/chaungzon" ? "yellow" : "white",
            }}
          >
            Chaungzone
          </DLink>
        </DListItem>
        <DListItem>
          <DLink
            component={RouterLink}
            to="/thanphyuzayat"
            sx={{
              color:
                location.pathname === "/thanphyuzayat" ? "yellow" : "white",
            }}
          >
            Thanphyuzayat
          </DLink>
        </DListItem>
        <DListItem>
          <DLink
            component={RouterLink}
            to="/paung"
            sx={{
              color: location.pathname === "/paung" ? "yellow" : "white",
            }}
          >
            Paung
          </DLink>
        </DListItem>
        <DListItem>
          <DLink
            component={RouterLink}
            to="/thaton "
            sx={{
              color: location.pathname === "/thaton" ? "yellow" : "white",
            }}
          >
            Thaton
          </DLink>
        </DListItem>

        <DListItem>
          <DLink
            component={RouterLink}
            to="/kyaikto"
            sx={{
              color: location.pathname === "/kyaikto" ? "yellow" : "white",
            }}
          >
            Kyaikto
          </DLink>
        </DListItem>
        <DListItem>
          <DLink
            component={RouterLink}
            to="/bilin"
            sx={{
              color: location.pathname === "/bilin" ? "yellow" : "white",
            }}
          >
            Bilin
          </DLink>
        </DListItem>
      </DList2>
      <DButton
        component={motion.button}
        initial={initial}
        animate={animation}
        transition={transition}
        ref={ref}
        onClick={() => {
          setState(true);
        }}
      >
        <Menu sx={{ marginRight: "10px" }} />
        Select Cities
      </DButton>
      <Drawer
        anchor="top"
        open={state}
        onClose={() => {
          setState(false);
        }}
      >
        {list()}
      </Drawer>
    </Box>
  );
}
