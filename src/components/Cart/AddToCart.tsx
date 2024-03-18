import React, { useEffect, useState } from "react";
import { Form } from "../../Styles";
import { Action, SizeSelector } from "../Product";
import { Product } from "../../features/product/product.slice";
import { useAppDispatch } from "../../app/hook";
import { addToCart } from "../../features/cart/cart.slice";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { PopupMessage } from "../PopupMessage";

interface AddToCartProps {
  product: Product;
}

export const AddToCart = ({ product }: AddToCartProps) => {
  const { isLoading, isSuccess } = useSelector(
    (state: RootState) => state.cart
  );
  const [hasError, setHasError] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  useEffect(() => {}, [dispatch, isSuccess]);

  const handleAddToCard = (e: any) => {
    e.preventDefault();

    const formData = e.target;

    let cartValue;

    if (product._id) {
      cartValue = {
        size: "",
        quantity: 0,
        product_id: product._id,
      };
    } else {
      cartValue = {
        size: "",
        quantity: 0,
        product_id: "",
      };
    }

    for (let i = 0; i < formData.length; i++) {
      if (formData[i].checked) {
        cartValue.size = formData[i].value;
      } else if (formData[i].type === "number") {
        cartValue.quantity = formData[i].value;
      }
    }

    dispatch(addToCart(cartValue));
  };

  return (
    <Form onSubmit={(e) => handleAddToCard(e)}>
      {product.size && (
        <SizeSelector product={product.size[0]} isError={hasError} />
      )}
      {product.images && <Action isLoading={isLoading} />}
      {isSuccess ? <PopupMessage /> : ""}
    </Form>
  );
};
