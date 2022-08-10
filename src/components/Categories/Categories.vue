<template>
  <section class="categories">
    <div class="container">
      <div class="row gy-5">
        <div class="col-lg-3 col-md-12 col-sm-12">
          <div class="offset-2 our-categories-names">
            <h2 class="clothings-hot fw-normal py-3">Clothings Hot</h2>
            <h2 class="shoe-collection">Shoe Collection</h2>
            <h2 class="accessories fw-normal py-3">Accessories</h2>
          </div>
        </div>
        <div class="col-lg-4 col-md-12 col-sm-12 mt-1">
          <div class="categories-hot-deal">
            <img
              class="img-fluid"
              src="../../imgs/xproduct-sale.png.pagespeed.ic.n2J8U5DKGJ.png"
            />
            <div class="steckar p-3 text-capitalize">
              <span>sale of</span>
              <h5>$29.99</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-12 col-sm-12">
          <div class="row deal-of-the-week justify-content-center">
            <span class="text-uppercase w-lg-75 my-3">deal of the week</span>
            <h1 class="mb-5">
              Multi-pocket Chest
              <span class="text-dark d-lg-block"> Bag Black </span>
            </h1>
          </div>
          <div class="row">
            <div class="timer d-flex align-items-center">
              <h1 data-days class="d-inline-block"></h1>
              <h3 class="d-inline-block mx-4">:</h3>
              <h1 data-hours class="d-inline-block"></h1>
              <h3 class="d-inline-block mx-4">:</h3>

              <h1 data-minutes class="d-inline-block"></h1>
              <span class="seconds"></span>
              <h3 class="d-inline-block mx-4">:</h3>

              <h1 data-seconds class="d-inline-block"></h1>
            </div>
            <div class="d-flex align-items-center text-capitalize pt-3">
              <p class="mx-2 d-block">days</p>
              <p class="mx-5 d-block">hours</p>
              <p class="mx-1 d-block">minutes</p>
              <p class="mx-4 d-block">seconds</p>
            </div>
          </div>
          <div class="row shop-now-btn justify-content-around">
            <div class="w-lg-75 my-5">
              <div class="btn text-uppercase py-3 px-5">shop now</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import timezz from "timezz";
export default {
  name: "Categories",
};
$(document).ready(function () {
  timezz(document.querySelector(".timer"), {
    date: "sep 10, 2022 00:00:00",
    stopOnZero: false,
    update(event) {
      document.querySelector(".timer").querySelector(".seconds").innerHTML =
        event.seconds === 1 ? "" : "";
    },
  });
});
</script>

<style lang="scss" scoped>
@import "../../Scss/main.scss";
.categories {
  padding-top: 180px;
  padding-bottom: 180px;
  margin-top: 50px;
  margin-bottom: 50px;
  background-color: #f3f2ee;
  overflow: hidden;
}
.our-categories-names {
  position: relative;
  z-index: 1;
  ::after {
    content: "";
    position: absolute;
    width: 320px;
    height: 270px;
    background-color: white;
    z-index: -1;
    left: -190px;
    top: -30px;
  }
  .clothings-hot,
  .accessories {
    color: #aaa;
  }
}

.categories-hot-deal {
  position: relative;
  z-index: 1;
  .steckar {
    position: absolute;
    z-index: 2;
    border-radius: 50%;
    background-color: $Main-color;
    color: white;
    text-align: center;
    top: -36px;
    right: 100px;
  }
}

.deal-of-the-week {
  span {
    color: $Socend-color;
    word-spacing: 5px;
    font-weight: 600;
  }
}
.shop-now-btn {
  .btn {
    background-color: $Main-color;
    color: #f3f2ee;
    font-size: 15px;
    font-weight: 600;
  }
}

</style>
<!-- 
<div class="timer1">
            Days
            <div data-days></div>
            Hours
            <div data-hours></div>
            Minutes
            <div data-minutes></div>
            <span class="seconds">Seconds</span>
            <div data-seconds></div>
          </div> -->