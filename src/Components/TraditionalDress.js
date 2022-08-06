import { Divider } from "@mui/material";
import React from "react";
import Carousal from "./Carosual/Carousal";
import { TraditionalBox } from "./TraditionalDress.style";

const TraditionalDress = () => {
  return (
    <TraditionalBox>
      <Divider sx={{ fontSize: "25px", color: "whitesmoke", height: "5%" }}>
        TRADITIONAL
      </Divider>
      <Carousal />
    </TraditionalBox>
  );
};

export default TraditionalDress;
