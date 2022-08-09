<template>
  <Carousel />
  <Bannar />
  <Categories />
  <Product />
</template>
<script>
import Carousel from "@/components/CarouselHome/Carousel.vue";
import Bannar from "../components/bannar/Bannar.vue";
import Categories from "../components/Categories/Categories.vue";
import Product from "../components/product/Product.vue";
export default {
  name: "Home",
  components: { Carousel, Bannar, Categories, Product },
};
</script>

<style lang="scss" scoped>
</style>
