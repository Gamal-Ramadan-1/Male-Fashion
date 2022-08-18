<template>
  <section class="map">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27625.164105203217!2d31.382714550000003!3d30.061363200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1660840079866!5m2!1sar!2seg"
            width="800"
            height="600"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "MapComponent",
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
.map {
  height: 500px;
  iframe {
    height: 500px;
    width: 100%;
  }
}
</style>