<template>
  <div
    id="carouselExampleControls"
    class="carousel slide"
    data-bs-ride="carousel"
  >
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="hero-img-1">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="content">
                  <p class="text-uppercase summer-collection">
                    summer collection
                  </p>
                  <h2 class="text-capitalize">
                    fall - winter collections 2030
                  </h2>
                  <p class="py-3">
                    A specialist label creating luxury essentials. Ethically
                    crafted with an unwavering commitment to exceptional
                    quality.
                  </p>
                  <div class="btn btn-dark text-uppercase py-3 px-5">
                    <p class="d-inline">shop now</p>
                    <i class="fa-solid fa-right-long text-light mx-2"></i>
                  </div>
                  <div class="carousel-social">
                    <i class="fa-brands fa-facebook-f px-2"></i>
                    <i class="fa-brands fa-twitter px-4"></i>
                    <i class="fa-brands fa-pinterest px-2"></i>
                    <i class="fa-brands fa-instagram px-4"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div class="hero-img-2">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-12 col-sm-12">
                <div class="content">
                  <p class="text-uppercase summer-collection">
                    summer collection
                  </p>
                  <h2 class="text-capitalize">
                    fall - winter collections 2030
                  </h2>
                  <p class="py-3">
                    A specialist label creating luxury essentials. Ethically
                    crafted with an unwavering commitment to exceptional
                    quality.
                  </p>
                  <div class="btn btn-dark text-uppercase py-3 px-5">
                    <p class="d-inline">shop now</p>
                    <i class="fa-solid fa-right-long text-light mx-2"></i>
                  </div>
                  <div class="carousel-social">
                    <i class="fa-brands fa-facebook-f px-2"></i>
                    <i class="fa-brands fa-twitter px-4"></i>
                    <i class="fa-brands fa-pinterest px-2"></i>
                    <i class="fa-brands fa-instagram px-4"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="prev"
    >
      <i class="fa-solid fa-arrow-left-long text-dark" aria-hidden="true"></i>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleControls"
      data-bs-slide="next"
    >
      <i class="fa-solid fa-arrow-right-long text-dark" aria-hidden="true"></i>
    </button>
  </div>
</template>
<script>
export default {
  name: "Carousel",
};
</script>
<style lang="scss" scoped>
@import "../../../Scss/main.scss";

.hero-img-1,
.hero-img-2 {
  background-size: cover;
  clear: both;
  height: 100vh;
  background-position: 55% 50%;
}
.hero-img-1 {
  background-image: url("../../../imgs/hero-1.jpg.webp");
}
.hero-img-2 {
  background-image: url("../../../imgs/hero-2.jpg.webp");
}

.carousel-control-prev,
.carousel-control-next {
  font-size: 30px;
}

.content {
  padding-top: 30%;
  margin-left: 20%;
}
.summer-collection {
  color: $Socend-color;
  font-weight: bold;
}

.content h2 {
  font-size: 50px;
  font-weight: bolder;
}
.carousel-social {
  padding-top: 30%;
}
</style>