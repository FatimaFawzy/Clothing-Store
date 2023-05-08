import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://fakestoreapi.com/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
  },
});
export default {
  async getProducts() {
    let products = await apiClient.get("products");
    return products;
  },
  async getProduct(id) {
    let product = await apiClient.get("products/" + id);
    return product;
  },
  async getcategories() {
    let categories = await apiClient.get("products/categories");
    return categories;
  },
  async getFeacherdProduct(limit) {
    let feacherdProduct = await apiClient.get("products?limit=" + limit);
    return feacherdProduct;
  },
  async getIncategory(category) {
    let Products = await apiClient.get("products/category/" + category);
    return Products;
  },
};
