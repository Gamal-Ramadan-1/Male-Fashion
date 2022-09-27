<template>
  <div id="up" v-show="scY > 300" @click="toTop()">
    <i class="fa-solid fa-arrow-up"></i>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scY: 0,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      this.scY = window.scrollY;
    },
    toTop: () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
#up {
  position: fixed;
  right: 10px;
  padding: 10px 17px;
  border-radius: 10px;
  cursor: pointer;
  color: white;
  bottom: 10px;
  z-index: 1000;
  background-image: linear-gradient($Main-color, $Socend-color);
}
</style>