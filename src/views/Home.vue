<template>
  <Carousel />
  <Bannar />
</template>
<script>
import Carousel from "@/components/CarouselHome/Carousel.vue";
import Bannar from "../components/bannar/Bannar.vue";
export default {
  name: "Home",
  components: { Carousel, Bannar },
};
</script>

<style lang="scss" scoped>
</style>
