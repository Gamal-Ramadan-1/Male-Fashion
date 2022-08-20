<template>
  <div class="bannar">
    <div class="container">
      <div class="row large-screen mb-5">
        <div
          class="col-lg-7 offset-lg-3 bannar-item first-item"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <div class="bannar-img">
            <img src="../../imgs/xbanner-1.jpg.pagespeed.ic.KmE-rIc0aQ.webp" />
          </div>
          <div class="bannar-text">
            <div>
              <h1 class="text-capitalize">
                clothing <span> collections 2030 </span>
              </h1>
              <a href="#" class="position-relative text-capitalize shop-now">
                show now
              </a>
            </div>
          </div>
        </div>
        <div
          class="col-lg-5 bannar-item"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div class="bannar-img">
            <img
              src="../../imgs/xbanner-2.jpg.pagespeed.ic.ISE4yV86cs.webp"
              class="p-0"
            />

            <h1 class="text-capitalize">accessories</h1>
            <a href="#" class="position-relative text-capitalize shop-now">
              show now
            </a>
          </div>
        </div>
        <div
          class="col-lg-7 bannar-item"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div class="bannar-img">
            <img
              src="../../imgs/xbanner-3.jpg.pagespeed.ic.DPyiCAUR1d.webp"
              class="py-5 my-5"
            />
          </div>
          <div class="bannar-text py-5">
            <div>
              <h1 class="text-capitalize mx-5">
                shose spring <span class="d-block"> 2030 </span>
              </h1>
              <a href="#" class="position-relative text-capitalize shop-now">
                show now
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="row gy-5">
        <div class="small-screen">
          <div class="col item-bannar-in-small-screen mb-3">
            <img
              src="../../imgs/xbanner-1.jpg.pagespeed.ic.KmE-rIc0aQ.webp"
              class="w-md-100"
            />
            <h1 class="text-capitalize">clothing collections</h1>
            <a href="#" class="position-relative text-capitalize shop-now">
              show now
            </a>
          </div>
          <div class="col item-bannar-in-small-screen mb-3">
            <img
              src="../../imgs/xbanner-2.jpg.pagespeed.ic.ISE4yV86cs.webp"
              class="w-md-100"
            />
            <h1 class="text-capitalize">accessories</h1>
            <a href="#" class="position-relative text-capitalize shop-now">
              show now
            </a>
          </div>
          <div class="col item-bannar-in-small-screen">
            <img
              src="../../imgs/xbanner-3.jpg.pagespeed.ic.DPyiCAUR1d.webp"
              class="w-md-100"
            />
            <h1 class="text-capitalize">shose spring 2030</h1>
            <a href="#" class="position-relative text-capitalize shop-now">
              show now
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Bannar",
};
</script>
<style lang="scss" scoped>
@import "../../Scss/main.scss";

a {
  text-decoration: none;
  color: black;
}

.bannar {
  margin-top: 100px;
}

.bannar-item {
  position: relative;
}

.first-item {
  padding: 0px 0.5rem;
  margin-top: 0px;
}

.bannar-img {
  float: right;
  img {
    padding: 0px 3rem;
  }
}
.bannar-text {
  position: absolute;
  top: 150px;
  left: 60px;
}

.bannar-text {
  p {
    position: relative;
  }
  span {
    display: block;
  }
}

.item-bannar-in-small-screen {
  text-align: center;
  img {
    width: 75%;
  }
}

.bannar-item a::after {
  transition: all 0.3s ease-in-out;
}

.bannar-item:hover a::after,
.item-bannar-in-small-screen:hover a::after {
  width: 50%;
  background-color: $Socend-color;
  transition: all 0.3s ease-in-out;
}
@media (min-width: 768px) {
  .small-screen {
    display: none;
  }
}
@media (max-width: 769px) {
  .large-screen {
    display: none;
  }
  .small-screen {
    display: inline-block;
  }
}
@media (max-width: 1025px) {
  .large-screen {
    display: none;
  }
  .small-screen {
    display: inline-block;
  }
}

.shop-now::after {
  position: absolute;
  content: "";
  // top: 20px;
  bottom: -3px;
  left: 0px;
  width: 100%;
  height: 3px;
  background-color: $Main-color;
}
</style>