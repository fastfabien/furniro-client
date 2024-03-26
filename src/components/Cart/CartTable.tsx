import React, { useEffect } from "react";
import { CartTableContainer, CartTableTrHead } from "../../Styles";
import { CartTableRow } from "./CartTableRow";
import { CartItems } from "../../common";

interface CartTableProps {
  items: CartItems[];
}

export const CartTable = ({ items }: CartTableProps) => {
  useEffect(() => {
    console.log(items[0].product);
  }, [items]);
  return (
    <CartTableContainer>
      <CartTableTrHead>
        <th></th>
        <th>product</th>
        <th>price</th>
        <th>quantity</th>
        <th>subtotal</th>
        <th></th>
      </CartTableTrHead>
      {items
        ? items.map((item, index) => (
            <CartTableRow
              key={index}
              couverture={item.product.couverture}
              name={item.product.name}
              price={item.product.price}
              quantity={item.quantity}
            />
          ))
        : "Your cart is void."}
    </CartTableContainer>
  );
};
