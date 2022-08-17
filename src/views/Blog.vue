<template>
  <BreadcrumbBlogPage />
  <BlogContent />
</template>
<script>
import BreadcrumbBlogPage from "@/components/BreadcrumbBlogPage/BreadcrumbBlogPage.vue";
import BlogContent from "@/components/BlogContent/BlogContent.vue";
export default {
  name: "Blog",
  components: { BreadcrumbBlogPage, BlogContent },
};
</script>
<style lang="scss" scoped>
</style>