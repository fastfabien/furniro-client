import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productService from "./productService";

interface ImageObject {
  type: string;
  data: any[]; // Ou tout autre type approprié pour les données d'image
}

export interface Product {
  _id?: string;
  sku: string;
  name: string;
  description: string;
  price: number;
  images?: ImageObject[];
  short_description?: string;
  size?: any;
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
  product: Product;
}

const initialState: ProductState = {
  products: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
  product: {
    name: "",
    description: "",
    price: 0,
    sku: "",
  },
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

export const getProduct = createAsyncThunk(
  "product/getOne",
  async (id: string | undefined, thunkAPI) => {
    try {
      return productService.getProduct(id);
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
      })
      .addCase(getProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.product = action.payload;
      })
      .addCase(getProduct.rejected, (state: ProductState, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.product = {
          name: "",
          description: "",
          price: 0,
          sku: "",
        };
      });
  },
});

export const { reset } = productSlice.actions;

export default productSlice.reducer;
