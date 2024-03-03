import axios from "axios";
import { Product } from "./product.slice";

const API_URL = "/api/products/";

const createProduct = async (product: Product) => {
  const response = await axios.post(API_URL, product);
  if (response) {
    return response.data;
  }
};

const productService = { createProduct };
export default productService;
