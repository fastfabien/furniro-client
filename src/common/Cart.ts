export interface CartItems {
  product: string;
  quantity: number;
}

export interface Cart {
  user?: string;
  items: [CartItems];
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
