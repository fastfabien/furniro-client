import axios from "axios";
import { CartForm } from "../../common";
import authHeader from "../auth.header";

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

const getUserCart = async () => {
  try {
    const response = await axios.get(API_URL, { headers: authHeader() });
    return response.data;
  } catch (err: any) {
    return err.message;
  }
};

const removeUserCart = async (id: string) => {
  try {
    const response = await axios.post(API_URL + `remove/${id}`, {
      headers: authHeader(),
    });
    return response.data;
  } catch (error: any) {
    return error.message;
  }
};

const cartService = { addToCart, getUserCart, removeUserCart };
export default cartService;
