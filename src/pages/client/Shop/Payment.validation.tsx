import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../../app/hook";
import { validateStripePayment } from "../../../features/cart/cart.slice";
import { Loading } from "../../../components";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

export const PaymentValidation = () => {
  const { cart, isLoading } = useSelector((state: RootState) => state.cart);
  const dispatch = useAppDispatch();
  const [rendered, setRendered] = useState<boolean>(false);
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const address = searchParams.get("address");

  const navigate = useNavigate();

  useEffect(() => {
    if (!rendered && id && address) {
      dispatch(validateStripePayment({ cartId: id, billingAddress: address }))
        .then((data) => {
          setRendered(true);
          navigate("/thank-you");
        })
        .catch((error) => error.message);
    }
  }, [dispatch, id, address, navigate, rendered]);

  if (isLoading) {
    return <Loading />;
  }

  return null;
};
