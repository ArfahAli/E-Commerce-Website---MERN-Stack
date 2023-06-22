import axios from "axios";
const URL = "https://fa21-bse-080-0eb0725faa4a.herokuapp.com";

export const getProducts = async () => {
  try {
    console.log("API start");
    const response = await axios.get(`${URL}`);
    console.log("API start");
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch products");
  }
};

const fetchProducts = async () => {
  try {
    const response = await axios.get(`${URL}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch products");
  }
};
// const fetchFilteredProducts = async (category) => {
//   try {
//     const response = await axios.post(`${URL}/products/category`, {
//       category: category,
//     });
//     return response.data;
//   } catch (error) {
//     // Handle error
//   }
// };
const getProductById = async (id) => {
  try {
    const item = await axios.get(URL + "/products/" + id);
    console.log(item);
    return item.data;
  } catch (e) {
    console.log(e);
  }
};

export { fetchProducts, getProductById };

export const addUser = async (registerData) => {
  try {
    await axios.post(
      `https://fa21-bse-080-0eb0725faa4a.herokuapp.com/LoginSignupContainer`,
      registerData
    );
  } catch (error) {
    console.error(error);
  }
};
export const addProduct = async (formData) => {
  try {
    await axios.post(
      `https://fa21-bse-080-0eb0725faa4a.herokuapp.com/AddProduct`,
      formData
    );
  } catch (error) {
    console.error(error);
  }
};
