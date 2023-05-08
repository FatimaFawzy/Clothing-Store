<template>
  <div>
    <form role="search">
      <input
        type="text"
        placeholder="Search products..."
        v-model="searchQuery"
        aria-label="Search products"
      />
      <select
        v-model="categoryFilter"
        aria-label="list of categories"
        role="listbox"
      >
        <option value="" role="option">All Products</option>
        <option
          role="option"
          v-for="category in categories"
          :value="category"
          :key="category.id"
        >
          {{ category }}
        </option>
      </select>
      <input
        type="number"
        placeholder="Min price"
        v-model.number="minPrice"
        aria-label="Minimum price"
      />
      <input
        type="number"
        placeholder="Max price"
        v-model.number="maxPrice"
        aria-label="Maximum price"
      />
    </form>
    <div class="result">
      <div class="empty" v-if="filteredProducts.length == 0">
        <p>NO search Content</p>
      </div>
      <div class="products cart-grid" v-else>
        <ProductComponent
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>
      <loader-component />
    </div>
  </div>
</template>

<script>
import ProductComponent from "@/components/product/productComponent.vue";
import LoaderComponent from "../../components/loadingSpinerComponent.vue";

import { ref, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "filterComponent",
  components: {
    ProductComponent,
    LoaderComponent,
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },

  setup() {
    const products = ref([]);
    const searchQuery = ref("");
    const categoryFilter = ref("");
    const minPrice = ref(null);
    const maxPrice = ref(null);
    const store = useStore();

    const filteredProducts = computed(() => {
      return store.state.products.filter((product) => {
        // Check if the product name, category, or price range matches the search query and filters
        const nameMatches = product.title
          .toLowerCase()
          .includes(searchQuery.value.toLowerCase());
        const categoryMatches =
          categoryFilter.value === "" ||
          product.category === categoryFilter.value;
        const priceMatches =
          (minPrice.value === null || product.price >= minPrice.value) &&
          (maxPrice.value === null || product.price <= maxPrice.value);
        // Return true if all three conditions are true
        return nameMatches && categoryMatches && priceMatches;
      });
    });

    return {
      products,
      searchQuery,
      categoryFilter,
      minPrice,
      maxPrice,
      filteredProducts,
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/mixins/respovsiveCart";
.result {
  margin: 1% 3%;
  @include respovsiveCart(19.33%);
}

.product {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 20px;
}

.product img {
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
}

.product h4 {
  margin-bottom: 10px;
}

.product p {
  font-size: 0.8rem;
}
input,
select {
  margin: 1%;
  border-radius: 8px;
  padding: 6px 37px;
  border: 1px solid #adb5bd;
}
.empty {
  margin: auto;
  text-align: center;
}
</style>
