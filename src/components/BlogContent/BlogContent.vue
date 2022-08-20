<template>
  <section class="blog-content">
    <div class="container">
      <div class="row">
        <div
          v-for="info in InfosBlogCard"
          :key="info.id"
          class="col-lg-4 col-md-6 col-sm-12"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <BlogCard
            :src="info.Src"
            :date="info.Date"
            :HeadOfCard="info.HeadOfCard"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import BlogCard from "../Blog-Card/Blog-Card.vue";
export default {
  name: "BlogContent",
  computed: {
    InfosBlogCard() {
      return [
        {
          Src: "imgs/blog-1.jpg.webp",
          Date: "16 February 2020",
          HeadOfCard: "What Curling Irons Are The Best Ones",
        },
        {
          Src: "imgs/blog-2.jpg.webp",
          Date: "21 February 2020",
          HeadOfCard: "Eternity Bands Do Last Forever",
        },
        {
          Src: "imgs/blog-3.jpg.webp",
          Date: "28 February 2020",
          HeadOfCard: "The Health Benefits Of Sunglasses",
        },
        {
          Src: "imgs/blog-4.jpg.webp",
          Date: "16 February 2020",
          HeadOfCard: "The Health Benefits Of Sunglasses",
        },
        {
          Src: "imgs/blog-5.jpg.webp",
          Date: "21 February 2020",
          HeadOfCard: "Wedding Rings A Gift For A Lifetime",
        },
        {
          Src: "imgs/blog-6.jpg.webp",
          Date: "28 February 2020",
          HeadOfCard: "The Different Methods Of Hair Removal",
        },
        {
          Src: "imgs/blog-7.jpg.webp",
          Date: "16 February 2020",
          HeadOfCard: "Hoop Earrings A Style From History",
        },
        {
          Src: "imgs/blog-8.jpg.webp",
          Date: "21 February 2020",
          HeadOfCard: "Lasik Eye Surgery Are You Ready",
        },
        {
          Src: "imgs/blog-9.jpg.webp",
          Date: "28 February 2020",
          HeadOfCard: "Lasik Eye Surgery Are You Ready",
        },
      ];
    },
  },
  components: { BlogCard },
};
</script>

<style lang="scss" scoped>
.blog-content {
  margin-top: 100px;
  margin-bottom: 50px;
}
</style>