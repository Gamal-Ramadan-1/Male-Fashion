<template>
  <Up />
  <Header />
  <Footer />
</template>
<script>
import Header from "./components/header/Header.vue";
import Footer from "./components/footer/Footer.vue";
import Up from "./components/UpToTop/Up.vue";
export default {
  name: "App",
  components: { Header, Footer, Up },
};
</script>