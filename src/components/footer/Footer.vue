<template>
  <footer>
    <div class="container">
      <div class="row text-light py-5">
        <div class="col-lg-3 col-md-4 col-sm-12">
          <img src="../../imgs/xfooter-logo.png.pagespeed.ic.itW_wULNzW.webp" />
          <p class="my-4 text-white-50">
            The customer is at the heart of our unique business model, which
            includes design.
          </p>
          <img src="../../imgs/xpayment.png.pagespeed.ic.baCZTAO1zx.webp" />
        </div>
        <div class="col-lg-3 col-md-4 col-sm-12 d-flex justify-content-center">
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
        <div class="col-lg-3 col-md-4 col-sm-12"></div>
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
</style>