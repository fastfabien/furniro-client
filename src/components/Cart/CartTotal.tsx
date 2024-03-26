import React from "react";
import {
  CartTotalContainer,
  CartTotalContent,
  H2,
  P,
  TextBold,
  TextLight,
} from "../../Styles";
import { CartButton } from "../Button";

interface CartTotalProsp {
  subtotal: string;
  total: string;
}

export const CartTotal = ({ subtotal, total }: CartTotalProsp) => {
  return (
    <CartTotalContainer>
      <H2>Cart Totals</H2>
      <CartTotalContent>
        <P>
          Subtotal <TextLight>Rs. {subtotal}</TextLight>
        </P>
        <P>
          Total <TextBold>Rs. {total}</TextBold>
        </P>
      </CartTotalContent>
      <CartButton href="/shop/checkout">Checkout</CartButton>
    </CartTotalContainer>
  );
};
