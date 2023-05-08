<template>
  <header tabindex="0" role="banner">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light"
      role="navigation"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="/">Clothing Store</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="link" :to="{ name: 'home' }">
                <span><font-awesome-icon :icon="['fas', 'house']" /></span>
                Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link
                class="link"
                :to="{ name: 'product', params: { category: 'All' } }"
              >
                <span>
                  <font-awesome-icon
                    :icon="['fas', 'cart-shopping']"
                    class="icon"
                  />
                </span>
                Products
              </router-link>
            </li>

            <li class="nav-item">
              <router-link class="link" :to="{ name: 'shoppingCart' }">
                <span><font-awesome-icon :icon="['fas', 'cart-plus']" /></span>
                Shopping cart
              </router-link>
            </li>
            <li>
              <router-link class="link" :to="{ name: 'filter' }">
                <span>
                  <font-awesome-icon :icon="['fas', 'filter']" />
                </span>
                Filter Product
              </router-link>
            </li>
          </ul>
          <div class="search">
            <searchComponent />
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
import searchComponent from "@/components/search/searchComponent";

export default {
  name: "NavigationBar",
  components: { searchComponent },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins/responsiveFontSize";
.navbar {
  width: 100%;
  top: 0;
  padding: 15px;
  background: $mainColor !important;
  ul {
    list-style: none;
    display: flex;
    text-align: left;
    li {
      margin: auto 10px;
      .link {
        text-decoration: none;
        color: white !important;
        @include responsive-font-size(10px, 15px, 320px, 1200px);
      }
    }
  }
}
.navbar-brand {
  color: $primaryColor;
  font-weight: bold;
  @include responsive-font-size(13px, 20px, 320px, 1200px);
}
.navbar-expand-lg .navbar-collapse {
  justify-content: space-between;
}
.search {
  width: 50%;
  z-index: 2;
}
@media (max-width: 768px) {
  .search {
    width: 100%;
  }
}
</style>
