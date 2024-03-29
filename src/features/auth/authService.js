import axios from "axios";
const API_URL = "/api/users/";

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  if (response) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(API_URL + "login", userData);
  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const signOut = async () => {
  localStorage.removeItem("user");
  localStorage.removeItem("cart");
};

const authService = { register, login, signOut };
export default authService;
