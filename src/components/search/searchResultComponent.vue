<template>
  <div class="overlay" aria-modal="true" aria-describedby="search product">
    <div class="result">
      <!-- loader while request sent  -->
      <loader-component />

      <div class="empty" v-if="filteredProducts.length == 0">
        <p>NO search Content</p>
      </div>
      <div class="cart-grid">
        <ProductComponent
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>
<script>
import ProductComponent from "@/components/product/productComponent.vue";
import LoaderComponent from "../loadingSpinerComponent.vue";
export default {
  name: "searchResult",
  props: {
    filteredProducts: Object,
  },
  components: {
    ProductComponent,
    LoaderComponent,
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins/respovsiveCart";

.result {
  position: absolute;
  width: 70%;
  padding: 2%;
  top: 5%;
  margin-top: 3%;
  z-index: 3;
  border: 1px solid $primaryColor;
  border-radius: $borderRadius;
  background: white;
  right: 0;
  height: min-content;
  max-height: 80vh;
  overflow-y: scroll;
  overflow-x: hidden;
  box-shadow: $boxShadow;
  @include respovsiveCart(19.33%);
}
.empty {
  margin: auto;
  text-align: center;
}
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
