import React, { useEffect, useState } from "react";
import {
  CartTableQuantity,
  CartTableRowContainer,
  TextLight,
} from "../../Styles";
import { getImageSrc, setToLocalString } from "../../common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface CartTableRowProps {
  name: string;
  price: number;
  quantity: number;
}

export const CartTableRow = ({ name, price, quantity }: CartTableRowProps) => {
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    getImageSrc(setImageSrc, name);
  }, [name, price, quantity]);

  return (
    <CartTableRowContainer>
      <td>
        <img alt="product thumbs" src={imageSrc} />
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
