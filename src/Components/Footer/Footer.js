import React from "react";
import {
  Contact,
  CopyRightB,
  FooterContainer,
  SocialIcon,
} from "./Footer.style";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import { Box, Link, Typography } from "@mui/material";
import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Pinterest from "@mui/icons-material/Pinterest";
import Place from "@mui/icons-material/Place";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div id="/footer">
      <FooterContainer>
        <SocialIcon>
          <Link
            href="https://www.google.com/search?q=monstatemyanmar&rlz=1C1BNSD_enTH996TH996&oq=monstatemyanmar&aqs=chrome..69i57j0i546l2j69i60l2.12198j0j4&sourceid=chrome&ie=UTF-8"
            target="_blank"
            sx={{
              color: "white",
              margin: "0 20px",
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.4)",
              },
            }}
          >
            <GoogleIcon />
          </Link>
          <Link
            href="https://web.facebook.com/search/top?q=monstate"
            target="_blank"
            sx={{
              color: "white",
              margin: "0 20px",
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.4)",
              },
            }}
          >
            <Facebook />
          </Link>
          <Link
            href="https://www.instagram.com/explore/tags/mawlamyine/"
            target="_blank"
            sx={{
              color: "white",
              margin: "0 20px",
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.4)",
              },
            }}
          >
            <Instagram />
          </Link>
          <Link
            href="https://twitter.com/search?q=Mawlamyine&src=typeahead_click&f=top#myanmarmonstate"
            target="_blank"
            sx={{
              color: "white",
              margin: "0 20px",
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.4)",
              },
            }}
          >
            <TwitterIcon />
          </Link>
          <Link
            href="https://www.pinterest.com/search/pins/?rs=ac&len=2&q=mawlamyine%20myanmar&eq=mawlamyine&etslf=9249&term_meta[]=mawlamyine%7Cautocomplete%7C2&term_meta[]=myanmar%7Cautocomplete%7C2"
            target="_blank"
            sx={{
              color: "white",
              margin: "0 20px",
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.4)",
              },
            }}
          >
            <Pinterest />
          </Link>
          <Link
            href="https://www.google.com/maps/place/Mon+State,+Myanmar+(Burma)/@16.2973368,96.4302233,8z/data=!3m1!4b1!4m5!3m4!1s0x30c2f3ee0e6c1c45:0xcab6a32920b86fb5!8m2!3d16.3003133!4d97.6982272"
            target="_blank"
            sx={{
              color: "white",
              margin: "0 20px",
              transition: "all 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.4)",
              },
            }}
          >
            <Place />
          </Link>
        </SocialIcon>
        <CopyRightB>Copyright © {year}</CopyRightB>
        <Contact>
          <Box
            sx={{
              color: "white",
              textAlign: "center",
              width: "100%",
              margin: "5px",
            }}
          >
            <Typography sx={{ fontSize: "18px" }}>Contact</Typography>
            <Typography sx={{ fontSize: "15px", opacity: "0.5" }}>
              Comment Box
            </Typography>
          </Box>
          <Box
            sx={{
              color: "white",
              textAlign: "center",
              width: "100%",
              margin: "5px",
            }}
          >
            <Typography sx={{ fontSize: "18px" }}>Description</Typography>
            <Typography sx={{ fontSize: "15px" }}>
              This is the sample project
            </Typography>
            <Typography sx={{ fontSize: "15px" }}>
              Photos and Contents are from the Internet
            </Typography>
          </Box>
          <Box
            sx={{
              color: "white",
              textAlign: "center",
              width: "100%",
              margin: "5px",
            }}
          >
            <Typography sx={{ fontSize: "18px" }}>About</Typography>
            <Typography sx={{ fontSize: "15px" }}>
              Sample project for educational purpose
            </Typography>
          </Box>
        </Contact>
      </FooterContainer>
    </div>
  );
};

export default Footer;
