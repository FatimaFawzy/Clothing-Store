import { createStore } from "vuex";
import storeServices from "@/services/storeService.js";
export default createStore({
  state: {
    products: [],
    categories: [],
    product: {},
    feacherdProduct: [],
    categoryProducts: [],
    cart: JSON.parse(localStorage.getItem("cart")) || [],
    loading: false,
  },
  mutations: {
    //set product  state
    setProduct: (state, product) => {
      state.product = product;
    },
    //set products  state
    setProducts: (state, products) => {
      state.products = products;
    },
    //set setcategories  state
    setcategories: (state, categories) => {
      state.categories = categories;
    },
    // set FeacherdProduct
    setFeacherdProduct: (state, feacherdProduct) => {
      state.feacherdProduct = feacherdProduct;
    },
    // set product of Incategory
    setIncategory: (state, products) => {
      state.categoryProducts = products;
    },
    // add product to cart
    addToCart: (state, product) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity++; // increase the  product quentity
        existingItem.totalPrice = existingItem.price * existingItem.quantity; // Update the total price of product
      } else {
        //update cart items
        state.cart.push({
          ...product,
          quantity: 1,
          totalPrice: product.price,
        });
      }
      // store cart to local storage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, productId) => {
      // remove product from cart
      state.cart = state.cart.filter((product) => product.id !== productId);
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    // decrease product quentity in cart
    decreaseQuantity: (state, productId) => {
      const existingItem = state.cart.find((item) => item.id === productId);
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity--; //decrease  the  product quentity
        existingItem.totalPrice = existingItem.price * existingItem.quantity; // Update the total price of product
      } else {
        state.cart = state.cart.filter((product) => product.id !== productId);
      }
      // store cart to local storage
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    // clear cart from product
    clearCart: (state) => {
      state.cart = [];
      // remove cart from local storage
      localStorage.removeItem("cart");
    },
  },
  actions: {
    // make api request to fetch fetchFeacherdProduct
    fetchFeacherdProduct: ({ commit, state }, limit) => {
      state.loading = true;
      storeServices
        .getFeacherdProduct(limit)
        .then((response) => {
          const data = response.data;
          // set data to products state
          commit("setFeacherdProduct", data);
          state.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // make api request to fetch one product  item
    fetchProduct: ({ commit, state }, id) => {
      state.loading = true;
      storeServices
        .getProduct(id)
        .then((response) => {
          const data = response.data;
          // set product item to state
          commit("setProduct", data);
          state.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // make api request to fetch products in category
    feachIncategory: ({ commit, state }, category) => {
      state.loading = true;
      storeServices
        .getIncategory(category)
        .then((response) => {
          const data = response.data;
          // set products of category to its products state
          commit("setIncategory", data);
          state.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // make api request to fetch products
    fetchProducts: ({ commit, state }) => {
      state.loading = true;
      storeServices
        .getProducts()
        .then((response) => {
          const data = response.data;
          commit("setProducts", data);
          state.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // make api request to fetch categories:
    fetchcategories: ({ commit, state }) => {
      state.loading = true;
      storeServices
        .getcategories()
        .then((response) => {
          console.log(response);
          const data = response.data;
          commit("setcategories", data);
          state.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addToCart: ({ commit }, product) => {
      commit("addToCart", product);
    },
    removeFromCart: ({ commit }, productId) => {
      commit("removeFromCart", productId);
    },
    decreaseQuantity: ({ commit }, productId) => {
      commit("decreaseQuantity", productId);
    },
    clearCart: ({ commit }) => {
      commit("clearCart");
    },
  },
  getters: {
    // get cart product
    cartProducts: (state) => {
      return state.cart;
    },
    // get cart total price
    totalPrice: (state) => {
      return state.cart.reduce(
        (total, product) => total + product.totalPrice,
        0
      );
    },
  },
  modules: {},
});
