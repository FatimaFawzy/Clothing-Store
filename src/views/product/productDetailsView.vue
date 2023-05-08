<template>
  <div class="product">
    <div class="product-image">
      <img :src="product.image" :alt="product.title" />
    </div>
    <div class="product-info">
      <h5>{{ product.title }}</h5>
      <p class="category">{{ product.category }}</p>
      <p>{{ product.description }}</p>

      <p>
        <span class="price">Price </span>
        <span>${{ product.price }} </span>
      </p>
      <div class="addtocart">
        <add-to-cart-button :productId="product.id" />
      </div>
    </div>
  </div>
</template>
<script>
import addToCartButton from "@/components/cart/addToCartButton.vue";
export default {
  components: { addToCartButton },
  name: "productDetailsView",

  computed: {
    id() {
      return this.$route.params.id;
    },
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("fetchProduct", this.id);
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables";
.product {
  display: flex;
  align-items: center;
  margin: auto 4%;
  padding: 2%;
}
img {
  width: 100%;
}
.product-info {
  display: inline-flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  padding: 2%;
}
.category,
.price {
  color: $primaryColor;
}
h5 {
  font-weight: bold;
  line-height: 7;
}
.product-image {
  width: 35%;
}
</style>
