<template>
  <Carousel />
  <Bannar />
  <Categories />
  <Product />
  <!-- <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="box-menu">
          <ul>
            <li class="mixitup-control-active" data-filter="*">all</li>
            <li data-filter=".photo">photography</li>
            <li data-filter=".ui">ui / ux</li>
            <li data-filter=".paint">painting</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row box-list g-4">
      <div class="col-lg-4 mix box-item photo ui"></div>
      <div class="col-lg-4 mix box-item ui"></div>
      <div class="col-lg-4 mix box-item photo"></div>
      <div class="col-lg-4 mix box-item paint"></div>
      <div class="col-lg-4 mix box-item paint ui"></div>
      <div class="col-lg-4 mix box-item photo paint"></div>
    </div>
  </div> -->
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
// $(document).ready(function () {
//   var mixer = mixitup(".box-list");
// });
</script>

<style lang="scss" scoped>
</style>
