<template>
  <Carousel />
  <Bannar />
  <Product />
  <Categories />
  <Instagram />
</template>
<script>
import Carousel from "@/components/CarouselHome/Carousel.vue";
import Bannar from "../components/bannar/Bannar.vue";
import Categories from "@/components/Categories/Categories.vue";
import Product from "../components/product/Product.vue";
import Instagram from "@/components/Instagram/Instagram.vue";
export default {
  name: "Home",
  components: { Carousel, Bannar, Categories, Product, Instagram },
};
</script>

<style lang="scss" scoped>
</style>
