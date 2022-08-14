<template>
  <Carousel />
  <Bannar />
  <Product />
  <Categories />
  <Instagram />
  <LatestNews />
</template>
<script>
import Carousel from "@/components/CarouselHome/Carousel.vue";
import Bannar from "../components/bannar/Bannar.vue";
import Categories from "@/components/Categories/Categories.vue";
import Product from "../components/product/Product.vue";
import Instagram from "../components/InstagramComp/Instagram.vue";
import LatestNews from "@/components/latest-news/Latest-News.vue";
export default {
  name: "Home",
  components: { Carousel, Bannar, Categories, Product, Instagram, LatestNews },
  
};
</script>

<style lang="scss" scoped>
</style>
