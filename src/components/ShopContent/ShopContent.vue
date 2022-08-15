<template>
  <section class="shop-content">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-12">
          <div class="input-group mb-3">
            <input
              class="form-control px-3"
              placeholder="Search..."
              aria-describedby="basic-addon1"
            />
            <span class="input-group-text" id="basic-addon1">
              <i class="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
          <div class="accordion w-100" id="categories">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button text-uppercase fw-bold"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  categories
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#categories"
              >
                <div class="accordion-body scroll">
                  <span class="d-block my-2"><a href="#"> Men (20)</a></span>
                  <span class="d-block my-2"><a href="#"> Women (20)</a></span>
                  <span class="d-block my-2"><a href="#"> Bags (20)</a></span>
                  <span class="d-block my-2"
                    ><a href="#"> Clothing (20)</a></span
                  >
                  <span class="d-block my-2"><a href="#"> Shoes (20)</a></span>
                  <span class="d-block my-2"
                    ><a href="#"> Accessories (20)</a></span
                  >
                  <span class="d-block my-2"><a href="#"> Kids (20)</a></span>
                  <span class="d-block my-2"><a href="#"> Shoes (20)</a></span>
                  <span class="d-block my-2"><a href="#"> Kids (20)</a></span>
                  <span class="d-block my-2"><a href="#"> Women (20)</a></span>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button text-uppercase fw-bold"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  branding
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse branding show"
                aria-labelledby="headingTwo"
                data-bs-parent="#categories"
              >
                <div class="accordion-body text-capitalize">
                  <span class="d-block my-2"
                    ><a href="#"> louis vuitton</a></span
                  >
                  <span class="d-block my-2"><a href="#"> chanel</a></span>
                  <span class="d-block my-2"><a href="#"> hermes</a></span>
                  <span class="d-block my-2"><a href="#"> gucci</a></span>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button text-uppercase fw-bold"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="true"
                  aria-controls="collapseThree"
                >
                  filter price
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse filter-price show"
                aria-labelledby="headingThree"
                data-bs-parent="#categories"
              >
                <div class="accordion-body">
                  <span class="d-block"><a href="#">$0.00 - $50.00</a></span>
                  <span class="d-block"><a href="#">$50.00 - $100.00</a></span>
                  <span class="d-block"><a href="#">$100.00 - $150.00</a></span>
                  <span class="d-block"><a href="#">$150.00 - $200.00</a></span>
                  <span class="d-block"><a href="#">$200.00 - $250.00</a></span>
                  <span class="d-block"><a href="#">250.00+</a></span>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button
                  class="accordion-button text-uppercase fw-bold"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="true"
                  aria-controls="collapseFour"
                >
                  size
                </button>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse size show"
                aria-labelledby="headingFour"
                data-bs-parent="#categories"
              >
                <div class="accordion-body text-uppercase p-0">
                  <h6 class="fw-bold my-4 py-1">
                    <span class="px-4 py-2 border">xs</span>
                    <span class="mx-2 px-4 py-2 border">s</span>
                    <span class="mx-2 px-4 py-2 border">m</span>
                  </h6>
                  <h6 class="fw-bold my-4 py-1">
                    <span class="px-4 py-2 border">xl</span>
                    <span class="mx-2 px-4 py-2 border">2xl</span>
                  </h6>
                  <h6 class="fw-bold my-4 py-1">
                    <span class="px-4 py-2 border">xxl</span>
                    <span class="mx-2 px-4 py-2 border">3xl</span>
                  </h6>
                  <h6 class="fw-bold my-4 py-1">
                    <span class="px-4 py-2 border">4xl</span>
                  </h6>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFive">
                <button
                  class="accordion-button text-uppercase fw-bold"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="true"
                  aria-controls="collapseFive"
                >
                  colors
                </button>
              </h2>
              <div
                id="collapseFive"
                class="accordion-collapse collapse colors show"
                aria-labelledby="headingFive"
                data-bs-parent="#categories"
              >
                <div class="accordion-body">
                  <div class="my-2">
                    <span class="px-3 py-1 bg-black"></span>
                    <span class="px-3 py-1 mx-2 bg-warning"></span>
                    <span class="px-3 py-1 mx-2 bg-success"></span>
                    <span class="px-3 py-1 mx-2 bg-info"></span>
                    <span class="px-3 py-1 mx-2 bg-danger"></span>
                  </div>
                  <div class="my-4">
                    <span class="px-3 py-1 bg-warning"></span>
                    <span class="px-3 py-1 mx-2 bg-secondary"></span>
                    <span class="px-3 py-1 mx-2 bg-danger"></span>
                    <span class="px-3 py-1 mx-2 bg-light"></span>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSix">
                <button
                  class="accordion-button text-uppercase fw-bold"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="true"
                  aria-controls="collapseSix"
                >
                  tags
                </button>
              </h2>
              <div
                id="collapseSix"
                class="accordion-collapse collapse tags show"
                aria-labelledby="headingSix"
                data-bs-parent="#categories"
              >
                <div class="accordion-body">
                  <div>
                    <a href="#" class="d-inline-block m-2 py-1 px-2"> PRODUCT </a>
                    <a href="#" class="d-inline-block m-2 py-1 px-2"> BAGS </a>
                  </div>
                  <div>
                    <a href="#" class="d-inline-block m-2 py-1 px-2"> SHOES </a>
                    <a href="#" class="d-inline-block m-2 py-1 px-2"> FASHIO </a>
                  </div>
                  <div>
                    <a href="#" class="d-inline-block m-2 py-1 px-2"> CLOTHING </a>
                    <a href="#" class="d-inline-block m-2 py-1 px-2"> HATS </a>
                  </div>
                  <div>
                    <a href="#" class="d-inline-block m-2 py-1 px-2"> ACCESSORIES </a>
                  </div>
                </div>
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
  name: "ShopContent",
};
</script>
<style lang="scss" scoped>
@import "@/Scss/main.scss";
a {
  text-decoration: none;
}
.shop-content {
  padding-top: 100px;
}

::-webkit-scrollbar {
  width: 5px;
  border-radius: 50px;
}

::-webkit-scrollbar-thumb {
  background-color: black;
  border-radius: 50px;
}

::-webkit-scrollbar-track {
  background-color: gray;
  border-radius: 50px;
}

.input-group {
  .form-control {
    padding: 10px;
    border-right-style: none;
    border-radius: 0px;
    ::placeholder {
      color: rgb(191, 190, 190);
    }
  }
  .input-group-text {
    background-color: transparent;
    border-radius: 0px;
    i {
      color: gray;
    }
  }
}
#collapseOne {
  height: 250px;
  overflow: hidden;
}

#collapseOne:hover,
#collapseOne:active {
  overflow: auto;
}

.accordion-item {
  border-style: none;
}

.accordion-button {
  background-color: transparent;
  border-style: none;
  color: black;
}

.scroll,
.branding,
.filter-price {
  span {
    a {
      color: gray;
    }
    a:hover {
      color: black;
    }
  }
}

.size {
  h6 {
    span {
      cursor: pointer;
    }
  }
}

.colors {
  span {
    cursor: pointer;
    height: 100px;
    border-radius: 50%;
  }
}

.tags {
  a {
    background-color: #f1f5f8;
    transition: all 0.2s ease-in-out;
    color: black;
  }
  a:hover {
    background-color: black;
    color: white;
    transition: all 0.2s ease-in-out;
  }
}
</style>