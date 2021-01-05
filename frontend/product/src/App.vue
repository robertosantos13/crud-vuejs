<template>
  <div class="container">
    <Product />
  </div>
</template>

<script>
import Product from "./components/Product";

export default {
  name: "App",
  components: {
    Product,
  },
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: auto;
}
</style>
