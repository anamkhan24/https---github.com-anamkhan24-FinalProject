import axios from "axios";

export const allowUser = async (username, password) => {
  try {
    const response = await axios.post("https://fakestoreapi.com/auth/login", {
      username: username,
      password: password,
    });

    if (response.status === 200) {
      return response.data;
    } else {
      console.log("Login failed");
      return { error: "Login failed" };
    }
  } catch (error) {
    console.error("An error occurred while logging in", error);
    return { error: "An error occurred while logging in" };
  }
};

export const getproducts = () =>
  axios.get("https://fakestoreapi.com/products/categories");

export const getproductListing = () =>
  axios.get("https://fakestoreapi.com/products");

export const getelectronics = () =>
  axios.get("https://fakestoreapi.com/products/category/electronics");

export const getjewelery = () =>
  axios.get("https://fakestoreapi.com/products/category/jewelery");

export const getcarts = () => axios.get("https://fakestoreapi.com/carts");
