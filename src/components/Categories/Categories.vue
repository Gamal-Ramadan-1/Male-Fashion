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
            <img class="img-fluid"
              src="../../imgs/xproduct-sale.png.pagespeed.ic.n2J8U5DKGJ.png"
            />
            <div class="steckar p-3 text-capitalize">
              <span>sale of</span>
              <h5>$29.99</h5>
            </div>
          </div>
        </div>
        <div class="col-lg-5 col-md-12 col-sm-12"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Categories",
};
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

</style>