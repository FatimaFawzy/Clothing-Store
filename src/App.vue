<template>
  <div id="App">
    <NavigationBar></NavigationBar>
    <!-- -->
    <div class="container" :style="{ 'min-height': minheight + 'px' }">
      <router-view :key="$route.fullPath"></router-view>
    </div>
    <footerComponent />
  </div>
</template>
<script>
import NavigationBar from "@/components/navbar/NavigationBar.vue";
import footerComponent from "@/components/footer/footer.vue";

export default {
  name: "App",
  data() {
    return {
      header: "",
    };
  },
  computed: {
    minheight() {
      // return window height to set container  minimum height
      return window.innerHeight - this.header;
    },
  },
  components: { NavigationBar, footerComponent },
  mounted() {
    // get header height
    this.header = document.getElementsByTagName("header")[0].offsetHeight;
    // fetch product to be stored in store so that can use it in all search functionality and navigations
    this.$store.dispatch("fetchProducts");
    // fetch categories to use store it store for component use
    this.$store.dispatch("fetchcategories");
  },
};
</script>

<style lang="scss">
#App {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.empty {
  margin: 10% auto;
  text-align: center;
}
</style>
