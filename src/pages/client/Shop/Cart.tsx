import React, { useEffect } from "react";
import { CartTable, CartTotal, Loading, PageLayout } from "../../../components";
import { CartPageContainer, Wrapper } from "../../../Styles";
import { setToLocalString } from "../../../common";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { useAppDispatch } from "../../../app/hook";
import { getUserCart } from "../../../features/cart/cart.slice";

export const Cart = () => {
  const { cart, isLoading } = useSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserCart());
  }, [dispatch]);

  return (
    <PageLayout pageName="cart">
      <Wrapper>
        {isLoading ? (
          <Loading />
        ) : (
          <CartPageContainer>
            {cart && cart.items && <CartTable items={cart.items} />}
            {cart && (
              <CartTotal
                total={setToLocalString(cart.total, "fr-FR")}
                subtotal={setToLocalString(cart.total, "fr-FR")}
              />
            )}
          </CartPageContainer>
        )}
      </Wrapper>
    </PageLayout>
  );
};
