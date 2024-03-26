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

const getProducts = async (page: number, limit: number) => {
  try {
    const response = await axios.get(`${API_URL}?page=${page}&limit=${limit}`);
    return response.data;
  } catch (err: any) {
    return err.message;
  }
};

const getProduct = async (id: string | undefined) => {
  try {
    const response = await axios.get(`${API_URL}${id}`);
    return response.data;
  } catch (err: any) {
    return err.message;
  }
};

const searchProduct = async (name: string) => {
  try {
    const response = await axios.get(`${API_URL}?name=${name}`);
    return response.data;
  } catch (err: any) {
    return err.message;
  }
};

const productService = {
  createProduct,
  getProducts,
  getProduct,
  searchProduct,
};
export default productService;
