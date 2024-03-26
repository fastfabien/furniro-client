import React from "react";
import {
  CartTableQuantity,
  CartTableRowContainer,
  TextLight,
} from "../../Styles";
import { getBase64, setToLocalString } from "../../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { ImageObject } from "../../features/product/product.slice";

interface CartTableRowProps {
  couverture: ImageObject;
  name: string;
  price: number;
  quantity: number;
}

export const CartTableRow = ({
  couverture,
  name,
  price,
  quantity,
}: CartTableRowProps) => {
  return (
    <CartTableRowContainer>
      <td>
        <img alt="product thumbs" src={getBase64(couverture.data)} />
      </td>
      <td>
        <TextLight>{name}</TextLight>
      </td>
      <td>
        <TextLight>Rs. {setToLocalString(price, "fr-FR")}</TextLight>
      </td>
      <td>
        <CartTableQuantity>{quantity}</CartTableQuantity>
      </td>
      <td>Rs. {setToLocalString(price * quantity, "fr-FR")}</td>
      <td>
        <FontAwesomeIcon icon={faTrash} />
      </td>
    </CartTableRowContainer>
  );
};
