import React, { useEffect, useState } from "react";
import {
  CartContainer,
  CartContent,
  CartItem,
  CartItemFooter,
  CartItemHeader,
  CartItemImage,
  CartItemProduct,
  CartItemsContent,
  H2,
  Hr,
  NoLinkText,
  P,
  Price,
  Quantity,
  Text,
  TextLight,
  Total,
} from "../../Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faXmark } from "@fortawesome/free-solid-svg-icons";
import img from "../../assets/image/bedroom.png";
import { CartButton } from "../Button";

export const CartItems = () => {
  const [showCartItems, setShowCartItems] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      setShowCartItems(false);
    };
  }, [setShowCartItems]);

  const handleShowCartItems = () => {
    setShowCartItems(!showCartItems);
  };
  return (
    <>
      {showCartItems ? (
        <CartContainer>
          <CartContent>
            <CartItemHeader>
              <H2>Shopping Cart</H2>
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => handleShowCartItems()}
              />
            </CartItemHeader>
            <Hr width="80" />
            <CartItemsContent>
              <CartItem>
                <CartItemImage src={img} alt="Product image" />
                <CartItemProduct>
                  <P>Asgaard sofa</P>
                  <P>
                    <Quantity>1</Quantity>
                    <TextLight>X</TextLight>
                    <Price>Rs. 250,000.00</Price>
                  </P>
                </CartItemProduct>
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={() => handleShowCartItems()}
                />
              </CartItem>
              <CartItem>
                <CartItemImage src={img} alt="Product image" />
                <CartItemProduct>
                  <P>Asgaard sofa</P>
                  <P>
                    <Quantity>1</Quantity>
                    <TextLight>X</TextLight>
                    <Price>Rs. 250,000.00</Price>
                  </P>
                </CartItemProduct>
                <FontAwesomeIcon
                  icon={faXmark}
                  onClick={() => handleShowCartItems()}
                />
              </CartItem>
            </CartItemsContent>
            <Total>
              <Text>Subtotal</Text>
              <Price>Rs. 250,000.00</Price>
            </Total>
            <Hr />
            <CartItemFooter>
              <CartButton href="/shop/cart">cart</CartButton>
              <CartButton href="/shop/checkout">checkout</CartButton>
            </CartItemFooter>
          </CartContent>
        </CartContainer>
      ) : (
        <NoLinkText onClick={() => handleShowCartItems()}>
          <FontAwesomeIcon icon={faCartShopping} />
        </NoLinkText>
      )}
    </>
  );
};
