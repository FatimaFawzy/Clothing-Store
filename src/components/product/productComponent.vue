<template>
  <!-- product cart  -->
  <div
    class="product cart"
    :tabindex="0"
    :aria-haspopup="true"
    :aria-expanded="OverlayVisible == product.id"
    :aria-controls="`overlay-${product.id}`"
    @mouseenter="setOverlayVisible(product.id, true, false)"
    @mouseleave="setOverlayVisible(product.id, false, false)"
    @focus="setOverlayVisible(product.id, true, true)"
    @blur="setOverlayVisible(product.id, false, true)"
  >
    <div
      class="overlay"
      :id="`overlay-${product.id}`"
      :class="{ visible: OverlayVisible == product.id }"
    >
      <div>
        <router-link
          class="link btn"
          role="link"
          :tabindex="0"
          :to="{ name: 'productDetails', params: { id: product.id } }"
        >
          View Details
          <span>
            <font-awesome-icon :icon="['fas', 'circle-info']" class="icon"
          /></span>
        </router-link>
      </div>
      <div>
        <button
          class="btn"
          :tabindex="0"
          :aria-disabled="addToCartLabel == 'In Cart'"
          :disabled="addToCartLabel == 'In Cart'"
          @click="addToCart"
          type="button"
        >
          <span>{{ addToCartLabel }}</span>
          <font-awesome-icon :icon="['fas', 'cart-plus']" class="icon" />
        </button>
      </div>
    </div>
    <div class="details">
      <div class="product-image">
        <img :src="product.image" :alt="product.title" />
      </div>
      <div class="product-details">
        <h2 v-if="product.title.length > 18">
          {{ product.title.substr(0, 18) + "..." }}
        </h2>
        <h2 v-else>
          {{ product.title }}
        </h2>
        <span class="price">${{ product.price }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProductComponent",
  data() {
    return {
      visibleId: -1,
    };
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  computed: {
    addToCartLabel() {
      // check product in cart or not  so that change   addToCartLabel
      const inCart = this.$store.getters.cartProducts.find(
        (item) => item.id === this.product.id
      );
      return inCart ? "In Cart" : "Add To Cart";
    },
    OverlayVisible() {
      // over lay of hover area
      return this.visibleId;
    },
  },
  methods: {
    addToCart() {
      // add product to cart
      this.$store.dispatch("addToCart", this.product);
    },
    setOverlayVisible(id, visible, isblur) {
      //  user accessibility  hover erea
      if (visible) {
        this.visibleId = id;
      } else if (isblur) {
        setTimeout(() => {
          this.visibleId = -1;
        }, 1000);
      } else {
        this.visibleId = -1;
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins/overlayStyle";
@import "@/assets/scss/mixins/responsiveButtonStyle";
@import "@/assets/scss/mixins/responsiveFontSize";
@import "@/assets/scss/mixins/responsiveImage";
.product {
  position: relative;
  border: 1px solid #00000063;
  padding: 18px;
  border-radius: 14px;
  box-shadow: 1px 1px 9px 2px #0000002e;

  .product-image {
    img {
      width: 100%;
      aspect-ratio: 1/1;
      @include responsive-image;
    }
  }
  .overlay {
    @include overlayStyle;
    border-radius: $borderRadius;
    visibility: hidden;
    @include responsiveButtonStyle;
    @include responsive-font-size(13px, 20px, 320px, 1200px);
    .visible {
      visibility: visible;
    }
  }
}

.add-to-cart,
.link {
  @include responsiveButtonStyle;
  @include responsive-font-size(10px, 15px, 320px, 1200px);
  text-decoration: none;
  background-color: #ffffff;
  margin: 17px auto;
  color: $mainColor;
}
span {
  margin: auto 9px;
  font-weight: bold;
}
.icon {
  color: whitesmoke;
}
.details {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.price {
  color: $primaryColor;
}

h2 {
  @include responsive-font-size(13px, 20px, 320px, 1200px);
  padding: 7% 0;
}
</style>
