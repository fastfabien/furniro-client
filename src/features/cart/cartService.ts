import axios from "axios";
import { Cart, CartForm, CartItems } from "../../common";
import authHeader from "../auth.header";
import { User } from "../auth/authSlice";

const API_URL = "/api/cart/";

const localUser: string | null = localStorage.getItem("user");
let user: User;

const addToCart = async (product: CartForm | CartItems) => {
  try {
    if (localUser) {
      user = JSON.parse(localUser);
      const response = await axios.post(API_URL, product as CartForm, {
        headers: authHeader(),
      });
      if (response) {
        localStorage.setItem("cart", JSON.stringify(response.data));
      }
      return response.data;
    } else {
      let currentCart = localStorage.getItem("cart");
      let newCart: CartItems = product as CartItems;
      let cart: Cart;
      if (currentCart) {
        const cart: Cart = JSON.parse(currentCart);
        const itemIndex = cart.items.findIndex(
          (item) =>
            item.product.name.toString() === newCart.product.name.toString()
        );

        if (itemIndex > -1) {
          cart.items[itemIndex].quantity =
            Number(cart.items[itemIndex].quantity) + Number(newCart.quantity);
          cart.total += newCart.product.price * Number(newCart.quantity);
        } else {
          cart.items.push(newCart);
          cart.total += newCart.product.price * Number(newCart.quantity);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        return cart;
      } else {
        cart = {
          items: [newCart],
          total: newCart.product.price * Number(newCart.quantity),
        };
        localStorage.setItem("cart", JSON.stringify(cart));
        return cart;
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
      if (cart) {
        return JSON.parse(cart);
      }
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
