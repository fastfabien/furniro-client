import React from "react";
import {
  P,
  RoomCardContainer,
  RoomCardContent,
  RoomCardLeft,
  TextBold,
} from "../../Styles";
import { RoomCardProps } from "../../common";
import { Button } from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

export const RoomCard = ({
  id,
  img,
  name,
  description,
  href,
  isactive,
}: RoomCardProps) => {
  return (
    <RoomCardContainer img={img} isactive={isactive}>
      {isactive && (
        <RoomCardContent>
          <RoomCardLeft>
            <P>
              {id} -- {name}
            </P>
            <TextBold>{description}</TextBold>
          </RoomCardLeft>
          <Button href={href}>
            <FontAwesomeIcon icon={faArrowRightLong} />
          </Button>
        </RoomCardContent>
      )}
    </RoomCardContainer>
  );
};
