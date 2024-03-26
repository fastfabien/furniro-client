import axios from "axios";
import { Cart, CartForm, CartItems } from "../../common";
import authHeader from "../auth.header";
import { User } from "../auth/authSlice";

const API_URL = "/api/cart/";

const localUser: string | null = localStorage.getItem("user");
let user: User;

const addToCart = async (product: CartForm) => {
  try {
    if (localUser) {
      user = JSON.parse(localUser);
      const response = await axios.post(API_URL, product, {
        headers: authHeader(),
      });
      if (response) {
        localStorage.setItem("cart", JSON.stringify(response.data));
      }
      return response.data;
    } else {
      let currentCart = localStorage.getItem("cart");
      let cart: Cart;
      if (currentCart) {
        console.log("misy");
      } else {
        // cart = {
        //   items: [product],
        //   total: 1000
        // };
        console.log(product);
      }
    }
  } catch (err: any) {
    return err.message;
  }
};

const getUserCart = async () => {
  try {
    if (localUser) {
      const response = await axios.get(API_URL, { headers: authHeader() });
      return response.data;
    } else {
      const cart = localStorage.getItem("cart");
      return cart;
    }
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
