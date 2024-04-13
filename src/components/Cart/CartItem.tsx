import React, { useEffect, useState } from "react";
import {
  CartContainer,
  CartContent,
  CartItem,
  CartItemFooter,
  CartItemFooterContainer,
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
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useAppDispatch } from "../../app/hook";
import { getUserCart, removeUserCart } from "../../features/cart/cart.slice";
import { Loading } from "../Loading";
import { setToLocalString } from "../../common";
import { CartItemImages } from "./CartItemImage";

export const CartItems = () => {
  const [showCartItems, setShowCartItems] = useState<boolean>(false);
  const { cart, isLoading, isError } = useSelector(
    (state: RootState) => state.cart
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserCart());
    return () => {
      setShowCartItems(false);
    };
  }, [setShowCartItems, dispatch]);

  const handleShowCartItems = () => {
    setShowCartItems(!showCartItems);
  };

  const handleRemoveFromCart = (id: string) => {
    dispatch(removeUserCart(id));
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
            {isLoading ? (
              <Loading />
            ) : (
              <CartItemsContent>
                {cart && cart.items ? (
                  cart.items.map((item, index) => (
                    <CartItem key={index}>
                      <CartItemImages name={item.product.name} />
                      <CartItemProduct>
                        <P>{item.product.name}</P>
                        <P>
                          <Quantity>{item.quantity}</Quantity>
                          <TextLight>X</TextLight>
                          <Price>
                            Rs. {setToLocalString(item.product.price, "fr-FR")}
                          </Price>
                        </P>
                      </CartItemProduct>
                      <FontAwesomeIcon
                        icon={faXmark}
                        onClick={() =>
                          handleRemoveFromCart(String(item.product._id))
                        }
                      />
                    </CartItem>
                  ))
                ) : (
                  <P>Your cart is void.</P>
                )}
              </CartItemsContent>
            )}
            <CartItemFooterContainer>
              {cart && cart.items && (
                <Total>
                  <Text>Subtotal</Text>
                  <Price>Rs. {setToLocalString(cart.total, "fr-FR")}</Price>
                </Total>
              )}
              <Hr />
              <CartItemFooter>
                <CartButton href="/shop/cart">cart</CartButton>
                <CartButton href="/shop/checkout">checkout</CartButton>
              </CartItemFooter>
            </CartItemFooterContainer>
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
