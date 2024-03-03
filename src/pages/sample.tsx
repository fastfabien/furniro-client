import React from "react";
import { SampleContainer } from "../Styles";
import { Input, InputSubscribe } from "../components";

export const Sample = () => {
  return (
    <SampleContainer>
      <Input name="email" type="email" label="email" />
      <Input type="text" name="nom" label="Nom" />
      <InputSubscribe label="Enter your email address" />
    </SampleContainer>
  );
};
