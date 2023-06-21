import axios from "axios";

const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:8000/products");
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch products");
  }
};

export const addUser = async (registerData) => {
    try {
      await axios.post(`http://localhost:8000/LoginSignupContainer`, registerData);

    } catch (error) {
      console.error(error);
    }
  };
  export const addProduct = async (formData) => {
    try {
      await axios.post(`http://localhost:8000/AddProduct`, formData);
    } catch (error) {
      console.error(error);
    }
  };


export { fetchProducts };