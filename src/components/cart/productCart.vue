<template>
  <div class="">
    <div>
      <div v-for="product in cartproducts" :key="product.id">
        <div class="cart">
          <div class="cart-image cart-product">
            <img :src="product.image" :alt="product.title" />
          </div>
          <div class="cart-content cart-product">
            <div>
              <div class="titleHeader">
                <h2>{{ product.title }}</h2>
              </div>
              <span class="price">${{ product.price }}</span>
              <p class="desc">{{ product.description }}</p>

              <!-- actions of remove ,increase or decreas -->
              <div class="actions">
                <span> Quantity:</span>
                <!-- action of increase product quentity  -->
                <button
                  class="plus"
                  @click="addtoCart(product)"
                  title="increase product quentity "
                  type="button"
                >
                  <font-awesome-icon :icon="['fas', 'plus']" />
                </button>
                <span> {{ product.quantity }}</span>
                <!-- action of decrease product quentity  -->

                <button
                  class="plus"
                  @click="decreaseQuantity(product.id)"
                  title="decrease product quentity "
                  type="button"
                >
                  <font-awesome-icon :icon="['fas', 'minus']" />
                </button>
              </div>
              <div>
                <span>Total Price: ${{ product.totalPrice }}</span>
              </div>
            </div>
          </div>
          <div class="actions">
            <!-- action of remove  product   -->
            <button
              class="trash"
              @click="removeFromCart(product.id)"
              title="remove product from cart"
              type="button"
            >
              <font-awesome-icon :icon="['fas', 'trash']" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "productCart",

  computed: {
    cartproducts() {
      return this.$store.getters.cartProducts;
    },
  },
  methods: {
    removeFromCart(id) {
      // remove product from cart
      this.$store.dispatch("removeFromCart", id);
    },
    addtoCart(product) {
      // add product to cart or increase is quentity
      this.$store.dispatch("addToCart", product);
    },
    decreaseQuantity(id) {
      // decrease product quentity in cart
      this.$store.dispatch("decreaseQuantity", id);
    },
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/scss/mixins/responsiveFontSize";
@import "@/assets/scss/variables";
.cart {
  display: flex;
  flex-wrap: wrap;
  text-align: left;
  margin: 19px auto;
  box-shadow: 1px 1px 3px 0px #41464b;
  border-radius: 1rem;
  padding: 2%;
  width: 80%;
  justify-content: space-evenly;
  align-items: center;

  .cart-image {
    flex-basis: 100%;
    margin: $cart-margin-bottom;
    // adjust the cart styles for larger screens
    @media (min-width: 768px) {
      flex-basis: calc(30% - #{$cart-margin-bottom});
    }
    // adjust the cart styles for even larger screens
    @media (min-width: 1024px) {
      flex-basis: calc(#{25%} - #{$cart-margin-bottom});
    }
  }
  .cart-content {
    flex-basis: 100%;
    margin: $cart-margin-bottom;
    // adjust the cart styles for larger screens
    @media (min-width: 768px) {
      flex-basis: calc(30% - #{$cart-margin-bottom});
    }

    // adjust the cart styles for even larger screens
    @media (min-width: 1024px) {
      flex-basis: calc(#{50%} - #{$cart-margin-bottom});
    }
  }
}

.cart-content {
  h2 {
    @include responsive-font-size(12px, 27px, 320px, 1200px);
    color: $h2_color;
  }
  .desc {
    @include responsive-font-size(10px, 19px, 320px, 1200px);
  }
}
.cart-image {
  img {
    width: 100%;
  }
}
.actions {
  align-self: flex-end;
  button {
    border: none;
    background: none;
    color: $primaryColor;
    @include responsive-font-size(12px, 19px, 320px, 1200px);
  }
  .trash {
    color: #930f0f;
  }

  .titleHeader {
    display: flex;
    justify-content: space-between;
  }
}
.price {
  color: $primaryColor;
}
span {
  padding: 1%;
  @include responsive-font-size(10px, 15px, 320px, 1200px);
}
</style>
