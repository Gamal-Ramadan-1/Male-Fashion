<template>
  <section class="breadcrumb-option">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3 class="text-capitalize">shop</h3>
          <p>
            <router-link to="/"
              ><span class="text-dark mx-1">Home </span></router-link
            >
            <router-view />

            <span class="text-capitalize"> > shop </span>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "BreadcrumbOption",
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
a {
  text-decoration: none;
}
.breadcrumb-option {
    padding-top: 30px;
    padding-bottom: 30px;
  background-color: #f3f2ee;
  p {
    span {
      color: gray;
      text-decoration: none;
    }
  }
}
</style>