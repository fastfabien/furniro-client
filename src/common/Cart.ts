export interface ProductCartItems {
  name: string;
  couverture: any;
  price: number;
}

export interface CartItems {
  product: ProductCartItems;
  quantity: number;
}

export interface Cart {
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
  cart: Cart;
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: any;
}
