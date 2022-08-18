<template>
  <MapComponent />
  <ContactUs />
</template>
<script>
import MapComponent from "../components/Map/MapComponent.vue";
import ContactUs from "@/components/ContactUsComp/ContactUs.vue";
export default {
  name: "Contact",
  components: { MapComponent, ContactUs },
};
</script>
<style lang="scss" scoped>
</style>