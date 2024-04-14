import React, { useEffect } from "react";
import { PageLayout } from "../../../components";
import { Wrapper } from "../../../Styles";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { BillingForm } from "../../../components/Checkout/BillingForm";

export const Checkout = () => {
  const { cart, isLoading } = useSelector((state: RootState) => state.cart);

  useEffect(() => {}, [cart]);

  return (
    <PageLayout pageName="checkout">
      <Wrapper>{cart && <BillingForm cart={cart} />}</Wrapper>
    </PageLayout>
  );
};
