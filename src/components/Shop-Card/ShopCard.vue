<template>
  <div class="box-item">
    <div class="card-content">
      <div class="card-img">
        <img :src="require(`@/${src}`)" class="w-100 h-100" />
        <h6 class="text-capitalize px-3">new</h6>
        <div class="content-hover-in-box text-end">
          <a href="#" class="d-block">
            <i class="fa-solid fa-heart h4 p-2 mx-3 mt-4"></i>
          </a>
          <a href="#" class="d-block">
            <i class="fa-duotone fa-code-compare h4 p-1 mx-3"></i>
          </a>
          <a href="#" class="d-block">
            <i class="fa-brands fa-searchengin h4 p-2 mx-3"></i>
          </a>
        </div>
      </div>
      <div class="card-text">
        <h6>+ add to cart</h6>
        <p class="mt-3 mb-1 text-capitalize">{{ NameCard }}</p>
        <div class="d-block">
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-regular fa-star"></i>
        </div>
        <div class="d-flex justify-content-between align-items-center">
          <h5 class="d-inline-block">{{ price }}</h5>
          <div class="colors">
            <div class="purple d-inline-block mx-1"></div>
            <div class="dark d-inline-block mx-1"></div>
            <div class="brouwn d-inline-block mx-1"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShopCard",
  props: { src: String, NameCard: String, price: String },
};
</script>

<style lang="scss" scoped>
@import "@/Scss/main.scss";
.box-item {
  transition: all 0.3s;
}

a {
  text-decoration: none;
  color: $Main-color;
}
.card-img {
  background-position: center;
  clear: both;
  background-size: cover;
  height: 300px;
  position: relative;
  display: flex;
  justify-content: end;
  align-items: flex-start;
  h6 {
    top: 30px;
    position: absolute;
    background-color: white;
    left: 0px;
  }
}

.content-hover-in-box {
  right: -10px;
  visibility: hidden;
  position: absolute;
  transition: all 0.3s;
  opacity: 0;
  i {
    background-color: white;
    font-size: 20px;
    width: 35px;
  }
}

.colors {
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s;
}

.box-item:hover .colors,
.box-item:hover .card-text h6 {
  visibility: visible;
  opacity: 1;
  transition: all 0.3s;
}

.box-item:hover .content-hover-in-box {
  right: 0px;
  visibility: visible;
  opacity: 1;
  transition: all 0.3s;
  transition-delay: 300ms;
}

.card-text {
  position: relative;
  i {
    font-size: 14px;
    color: rgb(183, 177, 177);
  }
  h6 {
    color: $Socend-color;
    position: absolute;
    text-transform: capitalize;
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    top: -20px;
    cursor: pointer;
    transition: all 0.3s;
  }
}

.box-item:hover .card-text h6 {
  visibility: visible;
  cursor: pointer;
  opacity: 1;
  transition: all 0.3s;
  top: 0px;
}

.box-item:hover .card-text p {
  transition: all 0.3s;

  opacity: 0;
}
.purple,
.brouwn,
.dark {
  background-color: #5e64d1;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  cursor: pointer;
}
.brouwn {
  background-color: #d5a667;
}
.dark {
  background-color: #404a47;
}
</style>