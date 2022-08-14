<template>
  <div class="blog-item">
    <img :src="require(`@/${src}`)" class="w-100" />
    <div class="item-text">
      <p class="text-capitalize">
        <i class="fa-solid fa-book-open"></i>
        {{ date }}
      </p>
      <h5 class="w-75">{{ HeadOfCard }}</h5>
      <a href="#"><span class="text-uppercase">read more</span></a>
    </div>
  </div>
</template>
<script>
export default {
  name: "Blog-Card",
  props: { src: String, date: String, HeadOfCard: String },
};
</script>

<style lang="scss" scoped>
@import "../../Scss/main.scss";
.blog-item {
  margin-bottom: 50px;
  transition: all 0.4s ease-in-out;

  .item-text {
    background-color: white;
    margin: 0px 30px;
    padding: 20px;
    height: 200px;
    transition: all 0.4s ease-in-out;

    margin-top: -50px;
    position: relative;
    width: 85%;
    p {
      font-size: 15px;
    }
    a {
      position: relative;
      text-decoration: none;
      color: $Main-color;
      font-weight: bolder;
      span::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        background-color: $Main-color;
        transition: all 0.4s ease-in-out;

        bottom: -5px;
      }
    }
  }
}
.blog-item:hover {
  .item-text {
    box-shadow: 2px 2px 15px rgb(206, 202, 202);
    transition: all 0.4s ease-in-out;

    a {
      span::before {
        width: 50%;
        background-color: $Socend-color;
        transition: all 0.4s ease-in-out;
      }
    }
  }
}
</style>