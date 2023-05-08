<template>
  <!-- product page view  -->
  <div class="container">
    <loader-component />
    <div class="products cart-grid">
      <ProductComponent
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductComponent from "@/components/product/productComponent.vue";
import LoaderComponent from "../../components/loadingSpinerComponent.vue";

export default {
  name: "productView",
  data() {
    return {
      category: this.$route.params.category,
    };
  },
  components: {
    ProductComponent,
    LoaderComponent,
  },
  computed: {
    products() {
      // return alll product or by category
      return this.category == "All"
        ? this.$store.state.products
        : this.$store.state.categoryProducts;
    },
  },
  mounted() {
    this.$store.dispatch("feachIncategory", this.category);
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/mixins/respovsiveCart";
@import "@/assets/scss/mixins/responsiveButtonStyle";
@import "@/assets/scss/mixins/responsiveFontSize";
@import "@/assets/scss/mixins/productsParant";

.container {
  @include respovsiveCart(19.33%);
}
.products {
  @include productsParant;
}
ul {
  list-style: none;
  display: flex;
  margin: 23px;
  li {
    margin: auto 10px;
  }
}
.tab {
  @include responsiveButtonStyle;
  @include responsive-font-size(10px, 15px, 320px, 1200px);
}
</style>
