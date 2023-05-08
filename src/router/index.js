import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ProductView from "@/views/product/ProductsView.vue";
import shoppingCart from "@/views/cart/shoppingCart.vue";
import productDetails from "@/views/product/productDetailsView.vue";
import filterView from "@/views/advanceFilter/filterView.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/product/:category",
    name: "product",
    component: ProductView,
  },
  {
    path: "/shoppingCart",
    name: "shoppingCart",
    component: shoppingCart,
  },

  {
    path: "/productDetails/:id",
    name: "productDetails",
    component: productDetails,
  },
  {
    path: "/filter",
    name: "filter",
    component: filterView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
