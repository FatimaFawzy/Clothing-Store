<template>
  <div class="home">
    <!-- home banner -->
    <banner-component />

    <!-- list of categories  -->
    <section role="region">
      <h2>Products Categories</h2>
      <div class="categories">
        <!-- for loading  -->
        <loader-component />
        <div class="cart-grid">
          <div class="cart" v-for="category in categories" :key="category">
            <router-link
              class="links"
              :to="{ name: 'product', params: { category: category } }"
              >{{ category }}</router-link
            >
          </div>
        </div>
      </div>
    </section>

    <!-- feacherd product -->
    <section role="region">
      <h2>Feacherd Products</h2>
      <div class="feacherd-products">
        <loader-component />
        <div class="cart-grid">
          <ProductComponent
            v-for="product in feacherdProduct"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import bannerComponent from "../components/bannar/bannerComponent.vue";
import LoaderComponent from "../components/loadingSpinerComponent.vue";
import ProductComponent from "@/components/product/productComponent.vue";

export default {
  name: "HomeView",
  computed: {
    categories() {
      return this.$store.state.categories;
    },

    feacherdProduct() {
      return this.$store.state.feacherdProduct;
    },
  },
  components: {
    bannerComponent,
    LoaderComponent,
    ProductComponent,
  },
  mounted() {
    this.$store.dispatch("fetchFeacherdProduct", 8);
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/mixins/respovsiveCart";
@import "@/assets/scss/mixins/responsiveFontSize";
@import "@/assets/scss/variables";

.categories {
  @include respovsiveCart(22.33%);
  padding: 40px;
  .cart-grid {
    justify-content: space-around;
    margin: 0;
  }

  width: 100%;
  .cart {
    border: 1px solid #6c757dcc;
    border-radius: $borderRadius;
    background-color: $primaryColor;
    .links {
      color: white;
      @include responsive-font-size(13px, 20px, 320px, 1200px);
      font-weight: bold;
      text-decoration: none;
    }
  }
}
.feacherd-products {
  @include respovsiveCart(20.33%);
  overflow: hidden;
  padding: 40px;
  .cart-grid {
    justify-content: center;
  }
}
section {
  margin: 3% 0;
}
</style>
