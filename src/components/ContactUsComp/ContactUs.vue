<template>
  <section class="form-contact-us">
    <div class="container">
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
                class="w-100 py-2 px-3 mb-4 form-control"
                placeholder="Name"
              />
            </div>
            <div class="col-lg-6 col-md-12">
              <input
                type="text"
                class="w-100 py-2 px-3 mb-4 form-control"
                placeholder="Email"
              />
            </div>
            <div class="col-12">
              <textarea
                name="Massege"
                class="w-100 p-3 form-control"
                rows="6"
                placeholder="Massage"
              ></textarea>
            </div>
            <div class="col-12">
              <div class="btn btn-dark text-uppercase py-3 px-5 mt-5 fw-bold">
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
export default {
  name: "ContactUs",
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