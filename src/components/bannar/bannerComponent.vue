<template>
  <div class="banner">
    <div class="overlay">
      <!-- link to product page  -->
      <router-link
        class="shoplink"
        :to="{ name: 'product', params: { category: 'All' } }"
      >
        Shop Now
        <span
          ><font-awesome-icon :icon="['fas', 'cart-plus']" class="icon"
        /></span>
      </router-link>
    </div>
    <div class="banner-img">
      <img src="@/assets/images/banner.jpg" alt="banner image" />
    </div>
  </div>
</template>
<script>
export default {
  name: "bannerComponent",
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/mixins/responsiveFontSize";
@import "@/assets/scss/mixins/overlayStyle";
@import "@/assets/scss/variables";

.banner {
  position: relative;
  .banner-img {
    img {
      width: 100%;
      aspect-ratio: 2.3/1;
    }
  }
  .overlay {
    @include overlayStyle;
    .shoplink {
      text-decoration: none;
      color: white;
      @include responsive-font-size(15px, 25px, 320px, 1200px);
      background: $primaryColor;
      padding: 0px 18px;
      border-radius: $borderRadius;
    }
  }
}
</style>
