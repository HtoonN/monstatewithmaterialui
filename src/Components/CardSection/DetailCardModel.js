import React from "react";
import { DetailCardBox, MaxBox, TextBox } from "./DetailCardModel.style";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { ImagesTabCards } from "./CardSection.style";
import { motion } from "framer-motion";

const DetailCardModel = ({ mdata, mdisplay, displayAnimation }) => {
  const controlDetailBox = () => {
    mdisplay(false);
  };

  return (
    <MaxBox
      component={motion.div}
      initial={{ x: "-100%" }}
      animate={{ x: 0, transition: { duration: 0.5 } }}
    >
      <DetailCardBox onClick={controlDetailBox}>
        <CloseIcon />
      </DetailCardBox>
      <TextBox>
        <ImagesTabCards
          component="img"
          src={mdata.image}
          gutterBottom
          sx={{
            backgroundColor: "transparent",
            width: "100%",
            height: "80%",
          }}
        />
        <Typography
          gutterBottom
          sx={{ width: "100%", textAlign: "left", fontSize: "19px" }}
        >
          {mdata.title}
        </Typography>
        <Typography
          component="h6"
          gutterBottom
          sx={{ width: "100%", textAlign: "left", opacity: ".7" }}
        >
          {mdata.subtitle}
        </Typography>
        <Box sx={{ fontSize: "18px", lineHeight: "40px" }}>{mdata.text}</Box>
      </TextBox>
    </MaxBox>
  );
};

export default DetailCardModel;
