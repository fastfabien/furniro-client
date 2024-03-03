import React from "react";
import { SubscribeContainer } from "../../Styles";
import { InputSubscribe } from "./Form";
import { ButtonSubscribe } from "../Button";

export const Subscribe = () => {
  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log("subscribe success!");
  };

  return (
    <SubscribeContainer onSubmit={(e) => handleSubmit(e)}>
      <InputSubscribe label="enter your email address" />
      <ButtonSubscribe>subscribe</ButtonSubscribe>
    </SubscribeContainer>
  );
};
