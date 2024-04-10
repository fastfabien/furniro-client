import { loadStripe } from "@stripe/stripe-js";
import { Cart, Order, PayOrder } from "../../common";
import axios from "axios";
const API_URL = "/api/create-checkout-session/";
const PUBLISHABLE_KEY = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY!;

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

export { stripePayment };

/*

order: billingAddress, cart, total, orderName


*/
