import axios from "axios";
import { Address } from "../../common";
const API_URL = "/api/billingAddress/";

const createBillingAdress = async (address: Address) => {
  try {
    const response = await axios.post(API_URL, address);
    return response.data;
  } catch (error: any) {
    console.log(error.message);
  }
};

export { createBillingAdress };
