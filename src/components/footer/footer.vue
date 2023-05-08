<template>
  <footer>
    <span
      >CopyRight with <font-awesome-icon :icon="['fass', 'heart']" /> by
      Fatima</span
    >
  </footer>
</template>
<script>
export default {
  name: "footbarComponent",
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables";
footer {
  width: 100%;
  background: $mainColor;
  color: rgba(245, 245, 245, 0.874);
  padding: 1%;
}
</style>
