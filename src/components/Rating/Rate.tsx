import React from "react";
import { RateContainer, RateContent } from "../../Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface RateProps {
  starNumber: number;
}

const loopArray = Array.from({ length: 5 }, (_, index) => index);

export const Rate = ({ starNumber }: RateProps) => {
  return (
    <RateContainer>
      {loopArray.map((index) => (
        <RateContent key={index} isactive={index <= starNumber}>
          <FontAwesomeIcon icon={faStar} />
        </RateContent>
      ))}
    </RateContainer>
  );
};
