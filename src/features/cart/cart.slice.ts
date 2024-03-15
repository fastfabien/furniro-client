import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CartForm, CartState } from "../../common";
import cartService from "./cartService";

const initialState: CartState = {
  cart: { user: "", items: [{ product: "", quantity: 0 }] },
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const addToCart = createAsyncThunk(
  "cart/add",
  async (cart: CartForm, thunkAPI) => {
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
        state.cart = { user: "", items: [{ product: "", quantity: 0 }] };
      });
  },
});

export const { reset } = cartSlice.actions;
export default cartSlice.reducer;
