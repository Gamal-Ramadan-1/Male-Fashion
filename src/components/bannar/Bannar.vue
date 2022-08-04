<template>
  <div class="bannar py-5 my-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-7 offset-lg-4 bannar-item">
          <div class="bannar-img">
            <img src="../../imgs/xbanner-1.jpg.pagespeed.ic.KmE-rIc0aQ.webp" />
          </div>
          <div
            class="
              bannar-text
              d-flex
              justify-content-center
              align-items-center
              h-100
            "
          >
            <div>
              <h1 class="text-capitalize">
                clothing <span class="d-block"> collections 2030 </span>
              </h1>
              <p class="text-uppercase show-now position-relative">
                <span class="position-absolute"> shop now </span>
              </p>
            </div>
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

.bannar-img {
  float: right;
}
.bannar-text {
  float: left;
}
.show-now {
  cursor: pointer;
}
.show-now span::before {
  content: "";
  position: absolute;
  bottom: 0px;
  width: 100%;
  height: 2px;
  transition: all 0.5s ease-in-out;
  background-color: $Main-color;
}

.bannar-item:hover .show-now span::before {
  width: 50%;
  transition: all 0.5s ease-in-out;
  background-color: $Socend-color;
}
</style>