import React, { useEffect, useState } from "react";
import { FormRow } from "../../Styles";
import { BillingAddress } from "./BillingAddress";
import { Address, Cart, Order, PayOrder, getCartid } from "../../common";
import { BillingDetails } from "./BillingDetails";
import { stripePayment } from "../../features/payment/payment";
import { createBillingAdress } from "../../features/billingAdress/billingAdress";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

interface BillingFormProps {
  cart: Cart;
}

export const BillingForm = ({ cart }: BillingFormProps) => {
  const [currentActive, setCurrentActive] = useState<HTMLInputElement>();
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {}, [cart, currentActive]);

  const handlePlacePayment = async (e: any) => {
    e.preventDefault();
    const form = e.target;

    let formData: Address = {
      first_name: "",
      last_name: "",
      region: "",
      street: "",
      city: "",
      province: "",
      zip_code: "",
      phone: "",
      email: "",
    };

    if (user) {
      formData["user"] = user._id;
    }

    for (let i = 0; i < form.length; i++) {
      const element = form[i];
      if (element.name in formData) {
        formData[element.name as keyof Address] = element.value;
      }
    }

    const billingAdress = await createBillingAdress(formData);
    const cartId = await getCartid(cart);

    const order: PayOrder = {
      billingAddress: billingAdress,
      total: cart.total,
      cartId: cartId,
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
