import React from "react";
import { H2, P, RoomContainer, RoomLeft, RoomRight } from "../../../../Styles";
import { Button, RoomSlide } from "../../../../components";

export const Rooms = () => {
  return (
    <RoomContainer>
      <RoomLeft>
        <H2>50+ Beautiful rooms inspiration</H2>
        <P>
          Our designer already made a lot of beautiful prototipe of rooms that
          inspire you
        </P>
        <Button href="/">Explore More</Button>
      </RoomLeft>
      <RoomRight>
        <RoomSlide />
      </RoomRight>
    </RoomContainer>
  );
};
