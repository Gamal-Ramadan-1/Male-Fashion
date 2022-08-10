<template>
  <section class="latest-news">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <p
            class="text-center text-uppercase m-0 latest-news-paragraph fw-bold"
          >
            latest news
          </p>
          <h1 class="text-center text-capitalize">fashion new trends</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6"></div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Latest-News",
};
</script>

<style lang="scss" scoped>
@import "../../Scss/main.scss";
.latest-news {
  margin-top: 100px;
}
.latest-news-paragraph {
  color: $Socend-color;
}
</style>