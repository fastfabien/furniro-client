import React from "react";
import { Wrapper } from "../../../Styles";
import { Landing, Products, Range, Rooms } from "./section";

export const Home = () => {
  return (
    <>
      <Landing />
      <Wrapper>
        <Range />
        <Products />
      </Wrapper>
      <Rooms />
    </>
  );
};
