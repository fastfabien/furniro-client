import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  Cart,
  CartForm,
  CartItems,
  CartState,
  OrderValidation,
} from "../../common";
import cartService from "./cartService";
import { validatePayment } from "../payment/payment";

type ParsedLocalStorageValue = Cart | null;

const localCartUser: string | null = localStorage.getItem("cart");

const localcart: ParsedLocalStorageValue = localCartUser
  ? JSON.parse(localCartUser)
  : null;

const initialState: CartState = {
  cart: localcart,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const addToCart = createAsyncThunk(
  "cart/add",
  async (cart: CartForm | CartItems, thunkAPI) => {
    try {
      return cartService.addToCart(cart);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const validateStripePayment = createAsyncThunk(
  "cart/paymentValidation",
  async (order: OrderValidation, thunkAPI) => {
    try {
      return validatePayment(order);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getUserCart = createAsyncThunk("cart/get", async (_, thunkAPI) => {
  try {
    return cartService.getUserCart();
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

export const removeUserCart = createAsyncThunk(
  "cart/remove",
  async (id: string, thunkAPI) => {
    try {
      return cartService.removeUserCart(id);
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cart = action.payload;
      })
      .addCase(addToCart.rejected, (state: CartState, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getUserCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUserCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cart = action.payload;
      })
      .addCase(getUserCart.rejected, (state: CartState, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(removeUserCart.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(removeUserCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cart = action.payload;
      })
      .addCase(removeUserCart.rejected, (state: CartState, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(validateStripePayment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(validateStripePayment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.cart = null;
      })
      .addCase(validateStripePayment.rejected, (state: CartState, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = cartSlice.actions;
export default cartSlice.reducer;
