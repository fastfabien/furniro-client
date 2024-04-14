import { loadStripe } from "@stripe/stripe-js";
import { Cart, Order, OrderValidation, PayOrder } from "../../common";
import axios from "axios";
const API_URL = "/api/create-checkout-session/";
const PUBLISHABLE_KEY = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY!;
const ORDER_URL = "/api/order/";

const stripePayment = async (order: PayOrder) => {
  const stripe = await loadStripe(PUBLISHABLE_KEY);

  try {
    const response = await axios.post(API_URL, order, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const session = await response.data;
    if (stripe) {
      const result = stripe.redirectToCheckout({
        sessionId: session.id,
      });
    }
  } catch (error: any) {}
};

const validatePayment = async (order: OrderValidation) => {
  try {
    const response = await axios.post(ORDER_URL, order);
    localStorage.removeItem("cart");
    return response.data;
  } catch (error: any) {
    return error.message;
  }
};

export { stripePayment, validatePayment };
