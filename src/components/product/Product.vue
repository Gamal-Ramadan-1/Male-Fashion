<template>
  <section class="product">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center text-capitalize box-menu py-4">
          <h4
            class="d-inline-block px-5 mixitup-control-active"
            data-filter="*"
          >
            best sellers
          </h4>
          <h4 class="d-inline-block px-5" data-filter=".new-arrivals">
            new arrivals
          </h4>
          <h4 class="d-inline-block px-5" data-filter=".hot-sales">
            hot sales
          </h4>
        </div>
      </div>
      
    </div>
  </section>
</template>
<script>
export default {
  name: "Product",
};

$(document).ready(function () {
  var mixer = mixitup(".box-list");
});
</script>
<style lang="scss" scoped>
@import "../../Scss/main.scss";
</style>