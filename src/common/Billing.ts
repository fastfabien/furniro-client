import axios from "axios";
import { Cart } from "./Cart";
const API_URL = "/api/cart/new";

export interface Address {
  user?: string;
  first_name: string;
  last_name: string;
  company_name?: string;
  region: string;
  street: string;
  city: string;
  province: string;
  zip_code: string;
  phone: string;
  email: string;
  additional_information?: string;
}

export const getCartid = async (cart: Cart) => {
  if (cart._id) {
    return cart._id;
  } else {
    try {
      const response = await axios.post(API_URL, cart);
      return response.data;
    } catch (error: any) {
      return error.message;
    }
  }
};
