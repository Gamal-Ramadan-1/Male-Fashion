<template>
  <div class="bannar py-5">
    <div class="container">
      <div class="row large-screen">
        <div class="col-lg-7 offset-lg-5 bannar-item first-item">
          <div class="bannar-img">
            <img src="../../imgs/xbanner-1.jpg.pagespeed.ic.KmE-rIc0aQ.webp" />
          </div>
          <div class="bannar-text">
            <div>
              <h1 class="text-capitalize">
                clothing <span> collections 2030 </span>
              </h1>
              <p class="text-uppercase show-now-link">
                <a href="#"> shop now </a>
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-5 bannar-item">
          <div class="bannar-img">
            <img
              src="../../imgs/xbanner-2.jpg.pagespeed.ic.ISE4yV86cs.webp"
              class="p-0"
            />

            <h1 class="text-capitalize">accessories</h1>
            <p class="text-uppercase position-relative show-now-link">
              <a href="#" class="position-absolute"> shop now </a>
            </p>
          </div>
        </div>
        <div class="col-lg-7 bannar-item">
          <div class="bannar-img">
            <img
              src="../../imgs/xbanner-3.jpg.pagespeed.ic.DPyiCAUR1d.webp"
              class="py-5"
            />
          </div>
          <div class="bannar-text py-5">
            <div>
              <h1 class="text-capitalize mx-5">
                shose spring <span class="d-block"> 2030 </span>
              </h1>
              <p class="text-uppercase position-relative show-now-link mx-5">
                <a href="#" class="position-absolute"> shop now </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row small-screen gy-4">
        <div class="col-12 item-bannar-in-small-screen">
          <img src="../../imgs/xbanner-1.jpg.pagespeed.ic.KmE-rIc0aQ.webp" />
          <h1 class="text-capitalize">clothing collections</h1>
          <p class="text-uppercase position-relative show-now-link">
            <a href="#" class="position-absolute"> shop now </a>
          </p>
        </div>
        <div class="col-12 item-bannar-in-small-screen">
          <img
            src="../../imgs/xbanner-2.jpg.pagespeed.ic.ISE4yV86cs.webp"
            class="img-fluid"
          />
          <h1 class="text-capitalize">accessories</h1>
          <p class="text-uppercase position-relative show-now-link">
            <a href="#" class="position-absolute"> shop now </a>
          </p>
        </div>
        <div class="col-12 item-bannar-in-small-screen">
          <img
            src="../../imgs/xbanner-3.jpg.pagespeed.ic.DPyiCAUR1d.webp"
            class="img-fluid"
          />
          <h1 class="text-capitalize">shose spring 2030</h1>
          <p class="text-uppercase position-relative show-now-link">
            <a href="#" class="position-absolute"> shop now </a>
          </p>
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

.bannar-item {
  position: relative;
  margin-bottom: 100px;
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

.show-now-link a {
  text-decoration: none;
  position: absolute;
  color: $Main-color;
}

.show-now-link a::after {
  content: "";
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  transition: all 0.3s ease-in-out;
  height: 1px;
  background-color: black;
}

.bannar-item:hover a::after,
.item-bannar-in-small-screen:hover a::after {
  width: 50%;
  background-color: $Socend-color;
  transition: all 0.3s ease-in-out;
}
@media (min-width: 720px) {
  .small-screen {
    display: none;
  }
}
@media (max-width: 720px) {
  .large-screen {
    display: none;
  }
}
</style>