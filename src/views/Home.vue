<template>
  <Carousel />
  <Bannar />
  <Categories />
</template>
<script>
import Carousel from "@/components/CarouselHome/Carousel.vue";
import Bannar from "../components/bannar/Bannar.vue";
import Categories from "../components/Categories/Categories.vue";
export default {
  name: "Home",
  components: { Carousel, Bannar, Categories },
};
</script>

<style lang="scss" scoped>
</style>
