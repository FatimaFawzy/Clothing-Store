<template>
  <button
    type="button"
    class="add-to-cart"
    :disabled="addToCartLabel == 'In Cart'"
    @click="addToCart"
  >
    <span>{{ addToCartLabel }}</span>
    <font-awesome-icon :icon="['fas', 'cart-shopping']" class="icon" />
  </button>
</template>
<script>
export default {
  name: "addToCartButton",
  props: {
    productId: {
      type: Number,
      required: true,
    },
  },
  computed: {
    addToCartLabel() {
      // change addToCartLabel when product removed or added to cart
      const inCart = this.$store.getters.cartProducts.find(
        (item) => item.id === this.productId
      );
      return inCart ? "In Cart" : "Add To Cart";
    },
  },
  methods: {
    addToCart() {
      //  add product to cart
      this.$store.dispatch("addToCart", this.productId);
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/mixins/responsiveButtonStyle";
@import "@/assets/scss/mixins/responsiveFontSize";
@import "@/assets/scss/variables";
.add-to-cart,
.link {
  @include responsiveButtonStyle;
  @include responsive-font-size(10px, 15px, 320px, 1200px);
  text-decoration: none;
  background-color: #ffffff;
  margin: 17px auto;
  color: $mainColor;
}
</style>
