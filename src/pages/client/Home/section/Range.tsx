import React from "react";
import {
  H2,
  RangeContainer,
  RangeContent,
  TextLight,
} from "../../../../Styles";

import living from "../../../../assets/image/living.png";
import dinning from "../../../../assets/image/dinning.png";
import bedroom from "../../../../assets/image/bedroom.png";
import { RangeCard } from "../../../../components";

export const Range = () => {
  return (
    <RangeContainer>
      <H2>Browse The Range</H2>
      <TextLight>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </TextLight>
      <RangeContent>
        <RangeCard src={dinning} alt="Dinning" name="Dinning" />
        <RangeCard src={living} alt="Living" name="Living" />
        <RangeCard src={bedroom} alt="Bedroom" name="Bedroom" />
      </RangeContent>
    </RangeContainer>
  );
};
