<template>
  <div>
    <form role="search">
      <div class="search-container d-flex" aria-haspopup="dialog">
        <input
          class="form-control me-2"
          type="text"
          tabindex="0"
          v-model="searchTerm"
          aria-label="Search "
          placeholder="Search "
        />
        <font-awesome-icon class="icon" :icon="['fas', 'magnifying-glass']" />
      </div>
    </form>
    <!-- search result component  -->
    <div v-if="searchTerm" aria-modal="true" tabindex="0">
      <search-result-component :filteredProducts="filteredProducts" />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import searchResultComponent from "@/components/search/searchResultComponent.vue";
export default {
  name: "searchComponent",
  components: {
    searchResultComponent,
  },
  setup() {
    // for using  state store
    const store = useStore();
    const searchTerm = ref("");
    const searchProducts = () => {
      const filteredProducts = store.state.products.filter((product) => {
        // search  by title
        const nameMatch = product.title
          .toLowerCase()
          .includes(searchTerm.value.toLowerCase());
        // search by category
        const categoryMatch = product.category
          .toLowerCase()
          .includes(searchTerm.value.toLowerCase());
        // search by price range
        const priceMatch =
          product.price >= searchTerm.value &&
          product.price <= searchTerm.value * 1.25;

        return nameMatch || categoryMatch || priceMatch;
      });
      // return matched result
      return filteredProducts;
    };

    return {
      searchTerm,
      searchProducts,
      filteredProducts: computed(() => searchProducts()),
    };
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/mixins/responsiveFontSize";

.search-container {
  position: relative;
  width: 100%;
}

.search-container input[type="text"] {
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  z-index: 2;
}

.search-container .icon {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 0 20px;

  border: none;
  color: #333;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}

.search-container .icon:hover {
  background-color: #ccc;
}

.search-container .icon {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
}
input::placeholder,
.icon {
  @include responsive-font-size(10px, 15px, 320px, 1200px);
}
</style>
