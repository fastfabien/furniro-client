import React, { useEffect, useState } from "react";
import { FormRow } from "../../Styles";
import { BillingAddress } from "./BillingAddress";
import { Cart, Order } from "../../common";
import { BillingDetails } from "./BillingDetails";
import { stripePayment } from "../../features/payment/payment";

interface BillingFormProps {
  cart: Cart;
}

export const BillingForm = ({ cart }: BillingFormProps) => {
  const [currentActive, setCurrentActive] = useState<HTMLInputElement>();

  useEffect(() => {}, [cart, currentActive]);

  const handlePlacePayment = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    let formData: any[] = [];
    for (let i = 0; i < form.length; i++) {
      const element = form[i];
      formData.push({
        [element.name]: element.value,
      });
    }
    const order: Order = {
      billingAddress: formData,
      total: cart.total,
      product: "Order mandona",
      cartId: "mandona",
    };

    if (currentActive?.name === "stripe") {
      stripePayment(order);
    }
  };

  return (
    <FormRow onSubmit={(e) => handlePlacePayment(e)}>
      <BillingAddress />
      {cart ? (
        <BillingDetails
          currentActive={currentActive}
          setCurrentActive={setCurrentActive}
          items={cart.items}
          total={cart.total}
        />
      ) : (
        "Your cart is void."
      )}
    </FormRow>
  );
};
