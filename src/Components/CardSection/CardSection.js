import React from "react";
import MultiActionAreaCard from "./Card";
import { CardDATA } from "./CardData";
import { CardSectionBox, InnerCardSection } from "./CardSection.style";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

const CardSection = ({ editModalData, display }) => {
  return (
    <CardSectionBox id="/cardSection">
      <DoubleArrowIcon
        sx={{ position: "absolute", right: "30px", color: "whitesmoke" }}
      />
      {CardDATA.map((data, index) => {
        return (
          <InnerCardSection key={index}>
            <MultiActionAreaCard
              data={data.one}
              openModal={display}
              putDetailToModal={editModalData}
            />
            <MultiActionAreaCard
              data={data.two}
              openModal={display}
              putDetailToModal={editModalData}
            />
          </InnerCardSection>
        );
      })}
    </CardSectionBox>
  );
};

export default CardSection;
