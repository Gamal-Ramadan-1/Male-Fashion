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
      <div class="row my-5">
        <div class="col-lg-4 col-md-6">
          <BlogCard
            src="imgs/blog-1.jpg.webp"
            date="16 february 2022"
            HeadOfCard="What Curling Irons Are The Best Ones"
          />
        </div>
        <div class="col-lg-4 col-md-6">
          <BlogCard
            src="imgs/blog-2.jpg.webp"
            date=" 21 February 2020"
            HeadOfCard="Eternity Bands Do Last Forever"
          />
        </div>
        <div class="col-lg-4 col-md-6">
          <BlogCard
            src="imgs/blog-3.jpg.webp"
            date=" 28 February 2020"
            HeadOfCard="The Health Benefits Of Sunglasses"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import BlogCard from "../Blog-Card/Blog-Card.vue";
export default {
  name: "Latest-News",
  components: { BlogCard },
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