<template>
  <div class="container">
    <button
      class="Checkout btn"
      aria-haspopup="dialog"
      @click="showModal = true"
      type="button"
    >
      Checkout
    </button>
    <div
      class="modal-overlay"
      v-show="showModal"
      aria-modal="true"
      aria-describedby="Shippping and payment information"
      @click.self="showModal = false"
    >
      <div class="checkout-modal" :class="{ 'modal-fade': fade }">
        <div class="header" @click="showModal = false" role="button">
          <font-awesome-icon
            :icon="['fas', 'xmark']"
            tabindex="0"
            title="colde modal"
          />
        </div>

        <checkoutForm />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import checkoutForm from "./checkoutForm.vue";
export default {
  name: "checkOutModal",
  setup() {
    const showModal = ref(false);
    const fade = ref(false);
    // toggle modal fade when open
    function toggleFade() {
      fade.value = true;
      setTimeout(() => {
        fade.value = false;
      }, 300);
    }

    return {
      showModal,
      fade,
      toggleFade,
    };
  },
  components: {
    checkoutForm,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/mixins/responsiveFontSize";
@import "@/assets/scss/mixins/responsiveButtonStyle";
.container {
  @include responsiveButtonStyle;
  @include responsive-font-size(10px, 15px, 320px, 1200px);
}
.modal-overlay {
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

.checkout-modal {
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  width: 80%;
  .header {
    color: #da1010;
    text-align: right;
  }
}

.modal-fade {
  transition: opacity 0.3s;
  opacity: 0;
}
</style>
