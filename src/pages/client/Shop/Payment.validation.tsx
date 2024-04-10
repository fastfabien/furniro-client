import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import { useAppDispatch } from "../../../app/hook";
import { validateStripePayment } from "../../../features/cart/cart.slice";
import { Loading } from "../../../components";
import { useNavigate, useSearchParams } from "react-router-dom";

export const PaymentValidation = () => {
  const dispatch = useAppDispatch();
  const [alreadyRendered, setAlreadyRendered] = useState<boolean>(false);

  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const address = searchParams.get("address");

  const navigate = useNavigate();

  useEffect(() => {
    if (id && address && !alreadyRendered) {
      dispatch(validateStripePayment({ cartId: id, billingAddress: address }));
      setAlreadyRendered(true);
      navigate("/thank-you");
    }
  }, [dispatch, id, address, navigate, alreadyRendered]);

  return <Loading />;
};
