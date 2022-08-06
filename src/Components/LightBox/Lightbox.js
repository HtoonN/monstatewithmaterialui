import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { motion } from "framer-motion";
import {
  ImageBox,
  LightBoxBottonSection,
  LightBoxCaption,
  LightBoxCloseBotton,
  LightBoxContainer,
  LightBoxImageCount,
  LightBoxSection,
  LightImageBox,
} from "./LightBox.style";
import { lightBoxImages } from "./LightBoxData";

const LightBox = () => {
  const images = lightBoxImages;
  const [photoIndex, setPhotoIndex] = useState(1);
  const [open, setOpen] = useState(false);

  document.onkeydown = checkKey;
  function checkKey(e) {
    e = e || window.event;
    if (open) {
      if (e.keyCode == "37") {
        setPhotoIndex(photoIndex === 0 ? images.length - 1 : photoIndex - 1);
      }
      if (e.keyCode == "39") {
        setPhotoIndex(photoIndex === images.length - 1 ? 0 : photoIndex + 1);
      }
    }
  }

  return (
    <LightBoxSection id="/lightbox">
      <Typography
        variant="h6"
        sx={{
          height: "10%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "red",
          width: "100%",
          color: "white",
        }}
      >
        Gallary of Mon State
      </Typography>

      <Box sx={{ width: "100%", height: "90%", overflow: "auto" }}>
        {images.map((data, index) => {
          return (
            <ImageBox key={index} component="div" sx={{ overflow: "hidden" }}>
              <Box
                component="img"
                src={data.image}
                alt={data.image}
                sx={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  cursor: "pointer",
                  transition: "all 0.4s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.2)",
                  },
                }}
                onClick={() => {
                  setPhotoIndex(index);
                  setOpen(true);
                }}
              />
              <Typography
                sx={{
                  position: "absolute",
                  top: "87%",
                  left: "0",
                  width: "100%",
                  height: "13%",
                  textAlign: "center",
                  backgroundColor: "rgba(255, 251, 251, 0)",
                  color: "rgba(255, 251, 251, 0)",
                  "&:hover": {
                    color: "white",
                    backgroundColor: "rgba(0,0,0,0.5)",
                  },
                }}
              >
                {data.city}
              </Typography>
            </ImageBox>
          );
        })}
      </Box>
      {open && (
        <LightBoxContainer
          component={motion.div}
          initial={{ x: "-100%" }}
          animate={{ x: 0, transition: { duration: 0.5 } }}
        >
          <LightBoxCloseBotton>
            <Button
              sx={{
                backgroundColor: "transparent",
                color: "white",
                "&:hover": {
                  color: "black",
                },
              }}
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon />
            </Button>
          </LightBoxCloseBotton>
          <LightImageBox>
            <Box>
              <Box
                component="img"
                src={images[photoIndex].image}
                alt="this is"
                sx={{ objectFit: "contain", width: "100%", height: "100%" }}
              />
            </Box>
            <LightBoxCaption>{images[photoIndex].caption}</LightBoxCaption>
          </LightImageBox>
          <LightBoxBottonSection>
            <Button
              sx={{ color: "white" }}
              onClick={() => {
                setPhotoIndex(
                  photoIndex === 0 ? images.length - 1 : photoIndex - 1
                );
              }}
            >
              <ChevronLeftIcon />
            </Button>
            <Button
              sx={{ color: "white" }}
              onClick={() => {
                setPhotoIndex(
                  photoIndex === images.length - 1 ? 0 : photoIndex + 1
                );
              }}
            >
              <ChevronRightIcon />
            </Button>
          </LightBoxBottonSection>
          <LightBoxImageCount>
            {photoIndex + 1}/{images.length}
          </LightBoxImageCount>
        </LightBoxContainer>
      )}
    </LightBoxSection>
  );
};

export default LightBox;
