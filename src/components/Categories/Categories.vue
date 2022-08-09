<template>
  <section class="categories">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="offset-2 our-categories-names">
            <h2 class="clothings-hot fw-normal py-3">Clothings Hot</h2>
            <h2 class="shoe-collection">Shoe Collection</h2>
            <h2 class="accessories fw-normal py-3">Accessories</h2>
          </div>
        </div>
        <div class="col-lg-4">
          
        </div>
        <div class="col-lg-5"></div>
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
  padding-top: 220px;
  padding-bottom: 220px;
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

</style>