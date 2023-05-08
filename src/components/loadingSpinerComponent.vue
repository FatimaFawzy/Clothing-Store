<template>
  <div class="spinner-container" v-if="$store.state.loading">
    <div class="spinner"></div>
  </div>
</template>
<script>
export default {
  name: "loadingComponent",
};
</script>
<style lang="scss" scoped>
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;

  .spinner {
    border: 3px solid rgba(0, 0, 0, 0.1);
    border-top-color: #000;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 0.8s infinite linear;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
}
</style>
