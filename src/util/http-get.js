import axios from "axios";

export const getProducts = async () => {
  const response = await axios.get(`http://localhost:3000/api/products/`);
  const data = response.data;
  return data;
};
