import { ImageObject } from "../features/product/product.slice";

export interface ProductCartItems {
  _id: string;
  name: string;
  couverture: ImageObject;
  price: number;
}

export interface CartItems {
  product: ProductCartItems;
  quantity: number;
}

export interface Cart {
  _id?: string;
  user?: string;
  items: [CartItems];
  total: number;
}

export interface CartForm {
  size: string;
  quantity: number;
  product_id: string;
}

export interface CartState {
  cart: Cart | null;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: any;
}

export interface Order {
  billingAddress: number | any[];
  total: number;
  product: string;
  cartId: string;
}

export interface PayOrder {
  billingAddress: any;
  total: number;
  cartId: string;
}
