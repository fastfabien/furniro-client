import axios from "axios";

const API_URL = "/api/products/";

const createProduct = async (product: any) => {
  const response = await axios.post(API_URL, product, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  if (response) {
    return response.data;
  }
};

const productService = { createProduct };
export default productService;
