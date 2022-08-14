<template>
  <section class="product">
    <div class="container">
      <div class="row box-menu text-capitalize py-4 flex-nowrap">
        <div class="col text-lg-end">
          <h3
            class="d-inline-block px-lg-5 mixitup-control-active"
            data-filter="*"
            id="best"
            @click="BestSellersColor()"
          >
            best sellers
          </h3>
        </div>
        <div class="col text-lg-center">
          <h3
            class="d-inline-block px-lg-5"
            data-filter=".new-arrivals"
            id="new"
            @click="NewArrivalsColor()"
          >
            new arrivals
          </h3>
        </div>
        <div class="col text-lg-start">
          <h3
            class="d-inline-block px-lg-5"
            data-filter=".hot-sales"
            id="hot"
            @click="HotSalesColor()"
          >
            hot sales
          </h3>
        </div>
      </div>
      <div class="row box-list gy-4 mb-5">
        <div class="col-lg-3 col-md-6 col-sm-12 mix new-arrivals">
          <div class="box-item">
            <ShopCard
              src="imgs/product-1.jpg.webp"
              NameCard="pique biker jacket"
              price="$25.65"
            />
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mix hot-sales">
          <div class="box-item">
            <ShopCard
              src="imgs/product-2.jpg.webp"
              NameCard="pique biker jacket"
              price="$67.25"
            />
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mix new-arrivals">
          <div class="box-item">
            <ShopCard
              src="imgs/product-3.jpg.webp"
              NameCard="multi-pocket chest bag"
              price="$43.48"
            />
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mix hot-sales">
          <div class="box-item">
            <ShopCard
              src="imgs/product-4.jpg.webp"
              NameCard="Diagonal Textured Cap"
              price="$60.9"
            />
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mix new-arrivals">
          <div class="box-item">
            <ShopCard
              src="imgs/product-5.jpg.webp"
              NameCard="Lether Backpack"
              price="$31.37"
            />
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mix hot-sales">
          <div class="box-item">
            <ShopCard
              src="imgs/product-6.jpg.webp"
              NameCard="Ankle Boots"
              price="$98.66"
            />
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mix new-arrivals">
          <div class="box-item">
            <ShopCard
              src="imgs/product-7.jpg.webp"
              NameCard="T-shirt Contrast Pocket"
              price="$49.66"
            />
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-12 mix hot-sales">
          <div class="box-item">
            <ShopCard
              src="imgs/product-8.jpg.webp"
              NameCard="Basic Flowing Scarf"
              price="$26.28"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import ShopCard from "@/components/Shop-Card/ShopCard.vue";
export default {
  name: "Product",
  components: { ShopCard },

  methods: {
    BestSellersColor: function () {
      let BestSellers = document.getElementById("best");
      let NewArrivals = document.getElementById("new");
      let HotSales = document.getElementById("hot");
      BestSellers.style.color = "gray";
      NewArrivals.style.color = "black";
      HotSales.style.color = "black";
    },
    NewArrivalsColor: function () {
      let BestSellers = document.getElementById("best");
      let NewArrivals = document.getElementById("new");
      let HotSales = document.getElementById("hot");
      NewArrivals.style.color = "gray";
      BestSellers.style.color = "black";
      HotSales.style.color = "black";
    },
    HotSalesColor: function () {
      let BestSellers = document.getElementById("best");
      let NewArrivals = document.getElementById("new");
      let HotSales = document.getElementById("hot");
      HotSales.style.color = "gray";
      BestSellers.style.color = "black";
      NewArrivals.style.color = "black";
    },
  },
};
$(document).ready(function () {
  var mixer = mixitup(".box-list");
});
</script>
<style lang="scss" scoped>
@import "../../Scss/main.scss";
a {
  text-decoration: none;
  color: $Main-color;
}
.box-menu {
  h3 {
    cursor: pointer;
  }
}
.box-item {
  transition: all 0.3s;
}


</style>