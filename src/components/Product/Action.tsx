import React from "react";
import { ActionContainer } from "../../Styles/components/Action/action";
import { ShopButton } from "../Button";

interface ActionProps {
  image: any;
  name: string;
  price: number;
}

export const Action = ({ image, name, price }: ActionProps) => {
  return (
    <ActionContainer>
      <ShopButton type="number" />
      <ShopButton type="submit">add to cart</ShopButton>
    </ActionContainer>
  );
};
