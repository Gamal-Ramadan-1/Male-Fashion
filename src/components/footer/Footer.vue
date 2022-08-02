<template>
  <footer>
    <div class="container">
      <div class="row text-light py-5">
        <div class="col-lg-4 col-md-4 col-sm-12">
          <img src="../../imgs/xfooter-logo.png.pagespeed.ic.itW_wULNzW.webp" />
          <p class="my-4 text-white-50 w-75">
            The customer is at the heart of our unique business model, which
            includes design.
          </p>
          <img src="../../imgs/xpayment.png.pagespeed.ic.baCZTAO1zx.webp" />
        </div>
        <div class="col-lg-2 col-md-4 col-sm-12">
          <div class="shoping">
            <p class="text-uppercase fw-bold">shoping</p>
            <span class="text-white-50 text-capitalize mt-4"
              >clothing store</span
            >
            <span class="text-white-50 text-capitalize mt-2"
              >trending shoes</span
            >
            <span class="text-white-50 text-capitalize mt-2">accessories</span>
            <span class="text-white-50 text-capitalize mt-2">sale</span>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12">
          <div class="shoping">
            <p class="text-uppercase fw-bold">shoping</p>
            <span class="text-white-50 text-capitalize mt-4">contact us</span>
            <span class="text-white-50 text-capitalize mt-2"
              >payment methods</span
            >
            <span class="text-white-50 text-capitalize mt-2">delivary</span>
            <span class="text-white-50 text-capitalize mt-2"
              >return & exchanges</span
            >
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12">
          <p class="text-uppercase fw-bold">newletter</p>
          <p class="text-white-50">
            Be the first to know about new arrivals, look books, sales & promos!
          </p>
          <input type="text" class="w-100 letter" placeholder="your email" />
          <hr class="w-100" />
        </div>
      </div>
    </div>
    <div class="container">
      <hr />
      <div class="row">
        <div class="col-12 text-center">
          <p class="text-white-50">
            Copyright © 20222020 All rights reserved | This template is made
            with
            <span class="text-danger">
              <i class="fa-solid fa-heart h6"></i>
            </span>
            by <span class="text-danger"> Colorlib</span>
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss" scoped>
@import "../../Scss/main.scss";
footer {
  background-color: $Main-color;
}
.shoping span {
  cursor: pointer;
  display: block;
}
.letter {
  padding: 6px;
  background-color: transparent;
  border-style: none;
  outline: none;
  color: white;
}
hr {
  height: 2px;
  background-color: white;
}
</style>