import React, { useEffect, useState } from "react";
import {
  BillingBody,
  BillingDetailsContainer,
  BillingDetailsHeader,
  ButtonPayment,
} from "../../Styles";
import { CartItems } from "../../common";
import { BillingOrderDetails } from "./BillingOrderDetails";
import { BillingPayment } from "./BillingPayment";

interface BillingDetailsProps {
  items: CartItems[];
  total: number;
  setCurrentActive: React.Dispatch<
    React.SetStateAction<HTMLInputElement | undefined>
  >;
  currentActive: HTMLInputElement | undefined;
}

export const BillingDetails = ({
  items,
  total,
  setCurrentActive,
  currentActive,
}: BillingDetailsProps) => {
  useEffect(() => {}, [items, total, currentActive]);

  return (
    <BillingDetailsContainer>
      <BillingDetailsHeader>
        <tr>
          <th>product</th>
          <th>subtotal</th>
        </tr>
        <BillingOrderDetails items={items} total={total} />
      </BillingDetailsHeader>
      <BillingBody>
        <BillingPayment
          name="stripe"
          description="Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account."
          setCurrentActive={setCurrentActive}
          currentActive={currentActive}
        />
        <BillingPayment
          name="paypal"
          description="Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account."
          setCurrentActive={setCurrentActive}
          currentActive={currentActive}
        />
      </BillingBody>
      <ButtonPayment type="submit" disabled={currentActive === undefined}>
        place order
      </ButtonPayment>
    </BillingDetailsContainer>
  );
};
