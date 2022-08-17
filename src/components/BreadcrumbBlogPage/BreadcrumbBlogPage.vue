<template>
  <section class="Breadcrumb-Blog">
    <div class="container h-100">
      <div class="row h-100 justify-content-center align-items-center">
        <div class="col-12 text-center text-light text-capitalize">
          <h1 class="display-2 our-blog">our blog</h1>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "BreadcrumbBlogPage",
};
</script>

<style lang="scss" scoped>
@import "@/Scss/main.scss";
.Breadcrumb-Blog {
  background-image: url("@/imgs/breadcrumb-bg.jpg.webp");
  height: 300px;
  background-size: cover;
  clear: both;
  background-position: center;
}

.our-blog {
  font-weight: 500;
}
</style>