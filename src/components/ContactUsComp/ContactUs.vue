<template>
  <section class="form-contact-us">
    <div class="container" data-aos="fade-up" data-aos-duration="1500">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 text-contact-us">
          <span class="d-block information text-uppercase fw-bold">
            information</span
          >
          <h1 class="d-block text-capitalize fw-bold display-4 text-dark">
            contact us
          </h1>
          <p class="d-block my-3 w-100">
            As you might expect of a company that began as a high-end interiors
            contractor, we pay strict attention.
          </p>
          <h5 class="d-block text-dark text-capitalize mt-5">america</h5>
          <p class="d-block">
            195 E Parker Square Dr, Parker, CO 801 +43 982-314-0958
          </p>
          <h5 class="d-block text-dark text-capitalize mt-5">france</h5>
          <p class="d-block">
            109 Avenue Léon, 63 Clermont-Ferrand +12 345-423-9893
          </p>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
          <div class="row">
            <div class="col-lg-6 col-md-12">
              <input
                type="text"
                class="w-100 py-2 px-3 form-control username"
                placeholder="Name"
              />
              <p class="success-username text-success m-0">Success..!</p>
              <p class="faild-username text-danger m-0">This is requird...?</p>
            </div>
            <div class="col-lg-6 col-md-12">
              <input
                type="text"
                class="w-100 py-2 px-3 form-control email"
                placeholder="Email"
              />
              <p class="success-email text-success m-0">Success..!</p>
              <p class="faild-email text-danger m-0">This is requird...?</p>
            </div>
            <div class="col-12">
              <textarea
                name="Massege"
                class="w-100 p-3 form-control mt-3"
                rows="6"
                placeholder="Massage"
              ></textarea>
            </div>
            <div class="col-12">
              <div
                class="btn btn-dark text-uppercase py-3 px-5 mt-5 fw-bold"
                @click="SendEmail()"
              >
                send Massege
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { onMounted } from "@vue/runtime-core";

export default {
  name: "ContactUs",
  setup() {
    onMounted(() => {
      $(document).ready(function () {
        $(".success-username").hide();
        $(".success-email").hide();

        $(".faild-email").hide();
        $(".faild-username").hide();
      });
    });
  },
  methods: {
    SendEmail() {
      if ($(".username").val() === " " || $(".username").val() === "") {
        $(".success-username").hide("slow");
        $(".faild-username").show("slow");
      } else {
        $(".faild-username").hide("slow");
        $(".success-username").show("slow");
      }
      if ($(".email").val() === " " || $(".email").val() === "") {
        $(".success-email").hide("slow");
        $(".faild-email").show("slow");
      } else {
        $(".faild-email").hide("slow");
        $(".success-email").show("slow");
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
.form-contact-us {
  padding: 100px 0px;
}
.text-contact-us {
  color: gray;
  .information {
    color: $Socend-color;
  }
  p {
    width: 45%;
  }
}
input,
textarea {
  border-color: rgb(224, 220, 220);
  border-radius: 0px;
}
::placeholder {
  color: rgb(203, 193, 193);
}
</style>