<template>
  <div class="container">
    <h1>Shipping And Payment</h1>
    <form @submit.prevent="submitForm">
      <div class="form_group">
        <label for="shipping-name">Shipping Name:</label>
        <input
          type="text"
          id="shipping-name"
          v-model="formData.shippingName"
          :aria-invalid="validationErrors.shippingName"
          :class="{ 'is-invalid': validationErrors.shippingName }"
          aria-required="true"
        />
        <!-- check validation  -->
        <div
          aria-errormessage="shipping-name"
          class="error-message"
          v-if="validationErrors.shippingName"
        >
          Please enter a valid shipping name.
        </div>
      </div>

      <div class="form_group">
        <label for="shipping-address">Shipping Address:</label>
        <input
          type="text"
          id="shipping-address"
          v-model="formData.shippingAddress"
          aria-required="true"
          :class="{ 'is-invalid': validationErrors.shippingAddress }"
        />
        <!-- check validation  -->
        <div
          aria-errormessage="shipping-address"
          class="error-message"
          :aria-invalid="validationErrors.shippingAddress"
          v-if="validationErrors.shippingAddress"
        >
          Please enter a valid shipping address.
        </div>
      </div>

      <div class="form_group">
        <label for="payment-cart">Payment cart Number:</label>

        <input
          type="text"
          id="payment-cart"
          v-model="formData.paymentcart"
          aria-required="true"
          :aria-invalid="validationErrors.paymentcart"
          :class="{ 'is-invalid': validationErrors.paymentcart }"
        />
        <!-- check validation  -->
        <div
          aria-errormessage="payment-cart"
          class="error-message"
          v-if="validationErrors.paymentcart"
        >
          Please enter a valid payment cart number.
        </div>
      </div>

      <div class="form_group">
        <label for="payment-cvv">CVV:</label>
        <input
          type="text"
          id="payment-cvv"
          v-model="formData.paymentCVV"
          aria-required="true"
          :aria-invalid="validationErrors.paymentCVV"
          :class="{ 'is-invalid': validationErrors.paymentCVV }"
        />
        <!-- check validation  -->
        <div
          aria-errormessage="payment-cvv"
          class="error-message"
          v-if="validationErrors.paymentCVV"
        >
          Please enter a valid CVV.
        </div>
      </div>
      <div class="form_group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          :aria-invalid="validationErrors.email"
          v-model="formData.email"
          aria-required="true"
          :class="{ 'is-invalid': validationErrors.email }"
        />
        <!-- check validation  -->
        <div
          aria-errormessage="email"
          class="error-message"
          v-if="validationErrors.email"
        >
          Please enter a valid email address.
        </div>
      </div>
      <div class="form_group">
        <button type="submit " class="submit btn" title="Submit Order">
          Submit Order
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // initialize form data
      formData: {
        shippingName: "",
        shippingAddress: "",
        paymentcart: "",
        paymentCVV: "",
        email: "",
      },
      validationErrors: {},
    };
  },

  methods: {
    validateForm() {
      const errors = {};
      // ckeck shippingName errors
      if (!this.formData.shippingName) {
        errors.shippingName = true;
      }
      // ckeck shippingAddress errors
      if (!this.formData.shippingAddress) {
        errors.shippingAddress = true;
      }
      // ckeck paymentcart patterrn  errors
      if (!/^\d{16}$/.test(this.formData.paymentcart)) {
        errors.paymentcart = true;
      }
      // ckeck paymentCVV  patterrn errors
      if (!/^\d{3}$/.test(this.formData.paymentCVV)) {
        errors.paymentCVV = true;
      }
      // ckeck email patterrn errors
      if (!/^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(this.formData.email)) {
        errors.email = true;
      }

      this.validationErrors = errors;
      return Object.keys(errors).length === 0;
    },

    submitForm() {
      if (this.validateForm()) {
        alert("Form submitted successfully!");
        // Call API to submit form data
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/mixins/responsiveButtonStyle";
@import "@/assets/scss/mixins/responsiveFontSize";
.is-invalid {
  border-color: red;
}

.error,
.error-message {
  color: red;
  font-size: 12px;
}
h1 {
  margin-bottom: 50px;
  @include responsive-font-size(15px, 25px, 320px, 1200px);
}
.form_group {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  input {
    width: 55%;
    padding: 0.6% 0;
    margin: 1% 0;
    border-radius: 5px;
    border: 1px solid #00000052;
    flex-basis: 60%;
  }

  @include responsiveButtonStyle;
}
.submit {
  margin-top: 30px;
  @include responsive-font-size(10px, 10px, 320px, 1200px);
}
.form-control {
  width: 70% !important;
  display: inline-block;
  margin: 1%;
}

label {
  flex-basis: 30%;
  text-align: left;
  @include responsive-font-size(10px, 15px, 320px, 1200px);
}
</style>
