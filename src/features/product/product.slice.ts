import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";

export interface Product {
  name: string;
  description: string;
  price: number;
}

export interface PaginationState {
  totalPages: number;
}

interface ProductState {
  products: Product[];
  isError: boolean;
  isSuccess: boolean;
  isLoading: boolean;
  message: any;
  pagination: PaginationState;
}

const initialState: ProductState = {
  products: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  pagination: {
    totalPages: 0,
  },
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

export const getProducts = createAsyncThunk(
  "product/getAll",
  async ({ page, limit }: { page: number; limit: number }, thunkAPI) => {
    try {
      return productService.getProducts(page, limit);
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
      })
      .addCase(getProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.products = action.payload.simplifiedProduct;
        state.pagination = {
          totalPages: action.payload.pagination.totalPages,
        };
      })
      .addCase(getProducts.rejected, (state: ProductState, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.products = [];
      });
  },
});

export const { reset } = productSlice.actions;

export default productSlice.reducer;
