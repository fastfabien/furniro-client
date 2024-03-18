import React from "react";
import { ActionContainer } from "../../Styles/components/Action/action";
import { ShopButton } from "../Button";
import { Loading } from "../Loading";

interface ActionProps {
  isLoading: boolean;
}

export const Action = ({ isLoading }: ActionProps) => {
  return (
    <ActionContainer>
      <ShopButton type="number" />
      <ShopButton type="submit">
        add to cart {isLoading && <Loading />}{" "}
      </ShopButton>
    </ActionContainer>
  );
};
