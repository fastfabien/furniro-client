import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import productService from "./productService";

export interface Product {
  name: string;
  description: string;
  price: number;
}

interface ProductState {
  products: Product[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: any;
}

const initialState: ProductState = {
  products: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createProduct = createAsyncThunk(
  "product/create",
  async (product: FormData, thunkAPI) => {
    try {
      return productService.createProduct(product);
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

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(createProduct.rejected, (state: ProductState, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.products = [];
      });
  },
});

export const { reset } = productSlice.actions;

export default productSlice.reducer;
