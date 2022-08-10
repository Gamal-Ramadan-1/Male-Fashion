<template>
  <section class="instagram">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 col-md-12">
          <div class="instagram-imgs row mb-2 gy-md-0 g-5">
            <div class="col-lg-4 col-md-6 col-sm-8 instagram-img-1"></div>
            <div class="col-lg-4 col-md-6 col-sm-8 instagram-img-2"></div>
            <div class="col-lg-4 col-md-6 col-sm-8 instagram-img-3"></div>
            <div class="col-lg-4 col-md-6 col-sm-8 instagram-img-4"></div>
            <div class="col-lg-4 col-md-6 col-sm-8 instagram-img-5"></div>
            <div class="col-lg-4 col-md-6 col-sm-8 instagram-img-6"></div>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="instagram-text"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Instagram",
};
</script>
<style lang="scss" scoped>
@import "../../Scss/main.scss";

.instagram {
  .container {
    padding-top: 100px;
  }
}

.instagram-imgs {
  .instagram-img-1 {
    background-image: url("../../imgs/instagram-1.jpg.webp");
    background-size: cover;
    clear: both;
    height: 270px;
    background-position: bottom;
  }
  .instagram-img-2 {
    background-image: url("../../imgs/instagram-2.jpg.webp");
    background-size: cover;
    clear: both;
    height: 270px;
    background-position: bottom;
  }
  .instagram-img-3 {
    background-image: url("../../imgs/instagram-3.jpg.webp");
    background-size: cover;
    clear: both;
    height: 270px;
    background-position: bottom;
  }
  .instagram-img-4 {
    background-image: url("../../imgs/instagram-4.jpg.webp");
    height: 270px;
    background-position: bottom;
    background-size: cover;
    clear: both;
  }
  .instagram-img-5 {
    background-image: url("../../imgs/instagram-5.jpg.webp");
    background-size: cover;
    clear: both;
    height: 270px;
    background-position: bottom;
  }
  .instagram-img-6 {
    background-image: url("../../imgs/instagram-6.jpg.webp");
    background-size: cover;
    clear: both;
    height: 270px;
    background-position: bottom;
  }
}
</style>