import { Typography } from "@mui/material";
import React from "react";
import { CityBoxOne, CityBoxTwo, StyleBox } from "./Cities.Styled";

const Cities = ({ cities }) => {
  return (
    <div id="/cities">
      <StyleBox>
        <CityBoxOne>
          <img
            src={cities.imageLink}
            alt={cities.imageLink}
            style={{ width: "90%", height: "90%", paddingTop: "20px" }}
          />
        </CityBoxOne>
        <CityBoxTwo>
          <Typography
            sx={{
              textAlign: "center",
              fontSize: "26px",
            }}
          >
            {cities.cityName}
          </Typography>
          <Typography
            sx={{
              overflowY: "auto",
              width: "100%",
              height: "87%",
              padding: "20px",
              textAlign: "justify",
              lineHeight: "1.8",
              fontSize: "17px",
            }}
          >
            {cities.bodyText}
          </Typography>
        </CityBoxTwo>
      </StyleBox>
    </div>
  );
};

export default Cities;
