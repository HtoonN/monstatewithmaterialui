import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { CarosualData } from "./CarosualData";
import { CarosualBox, CountImages, ImagesTab } from "./Carosual.Style";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Carousal = () => {
  const [cur, setcur] = useState(0);
  const length = CarosualData.length;

  const leftButton = () => {
    setcur(cur === 0 ? length - 1 : cur - 1);
  };

  const rightButton = () => {
    setcur(cur === length - 1 ? 0 : cur + 1);
  };

  const layout = {
    opacity: 0,
    transition: "all 1s ease-in-out",
    transform: "scale(0)",
  };

  const active = {
    opacity: 1,
    transition: "all 1s ease-in-out",
  };

  return (
    <CarosualBox>
      <Button onClick={leftButton} sx={{ color: "white" }}>
        <ChevronLeftIcon />
      </Button>
      {CarosualData.map((slide, index) => {
        return (
          <Box key={index} sx={index === cur ? active : layout}>
            {cur === index && (
              <ImagesTab component="img" src={slide.image} alt={slide.image} />
            )}
          </Box>
        );
      })}
      <Button onClick={rightButton} sx={{ color: "white" }}>
        <ChevronRightIcon />
      </Button>
      <CountImages>
        {cur + 1}/{length}
      </CountImages>
    </CarosualBox>
  );
};

export default Carousal;
