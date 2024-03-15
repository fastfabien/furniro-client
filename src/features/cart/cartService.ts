import axios from "axios";
import { CartForm } from "../../common";
import authHeader from "../auth.header";

const user: string | null = localStorage.getItem("user");

const API_URL = "/api/cart/";

const addToCart = async (product: CartForm) => {
  try {
    const response = await axios.post(API_URL, product, {
      headers: authHeader(),
    });
    return response.data;
  } catch (err: any) {
    return err.message;
  }
};

const cartService = { addToCart };
export default cartService;
