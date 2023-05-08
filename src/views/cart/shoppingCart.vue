<template>
  <div class="container-fluid">
    <!-- check if cart is  empty -->
    <div class="empty" v-if="cartTotalPrice === 0">Your cart is empty.</div>

    <div v-else>
      <div class="items">
        <div>
          <span class="price">
            Total Price: <span> ${{ cartTotalPrice }} </span>
          </span>
        </div>
        <button
          class="clear btn"
          @click="clearCart"
          title="clear All products In Cart"
          type="button"
        >
          Clear Cart <font-awesome-icon :icon="['fass', 'eraser']" />
        </button>
      </div>

      <productCart />

      <check-out-modal />
    </div>
  </div>
</template>

<script>
import productCart from "@/components/cart/productCart.vue";
import CheckOutModal from "../../components/cart/checkOutModal.vue";
export default {
  name: "productsCart",

  computed: {
    cartTotalPrice() {
      return this.$store.getters.totalPrice;
    },
  },
  components: {
    productCart,
    CheckOutModal,
  },
  methods: {
    clearCart() {
      this.$store.dispatch("clearCart");
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/mixins/responsiveButtonStyle";
@import "@/assets/scss/mixins/responsiveFontSize";
ul {
  list-style: none;
}
.items {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: flex-end;
  margin: 13px auto;

  @include responsiveButtonStyle;
  @include responsive-font-size(10px, 15px, 320px, 1200px);

  .clear {
    margin: 0;
  }
}
</style>
