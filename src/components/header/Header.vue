<template>
  <div id="layout">
    <div class="container-fluid">
      <div class="row justify-content-center">
        <div class="col-3 text-center">
          <div @click="close()" class="btn rounded py-1 px-3" id="close">
            <h4>&times;</h4>
          </div>
        </div>
      </div>
      <div class="row justify-content-center mt-5 pt-5">
        <input
          type="search"
          placeholder="Search here....."
          class="search-input"
        />
      </div>
    </div>
  </div>
  <div class="Free-shipping">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <p class="text-light text-capitalize m-0 py-2">
            Free shipping, 30-day return or refund guarantee.
          </p>
        </div>
        <div class="col-lg-6 d-flex justify-content-end align-items-center">
          <a href="#" class="text-uppercase text-light px-3">sgin in</a>
          <a href="#" class="text-uppercase text-light px-3 mr-5">faqs</a>
          <div class="links-bar">
            <a href="#" class="text-light text-uppercase mx-3 usd-link"
              >usd
              <i class="fa-solid fa-arrow-down text-light mx-2"></i>
            </a>
            <ul
              class="text-dark text-uppercase px-3 text-center usd-links mx-2"
            >
              <li><a href="#" class="text-black"> usd</a></li>
              <li><a href="#" class="text-black"> eur</a></li>
              <li><a href="#" class="text-black"> usd</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav class="navbar navbar-expand-lg navbar-light bg-light py-4">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="../../imgs/download.webp" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-center"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav text-capitalize">
          <li class="nav-item px-2">
            <a class="nav-link fw-bold" href="#"
              ><router-link to="/"
                ><span class="text-dark"> Home </span></router-link
              ></a
            >
          </li>
          <li class="nav-item px-2">
            <a class="nav-link fw-bold" href="#"
              ><router-link to="/Shop"
                ><span class="text-dark"> shop </span></router-link
              ></a
            >
          </li>
          <li class="nav-item px-2">
            <a class="nav-link text-dark fw-bold pages-link" href="#"
              ><div class="position-relative pages">
                <span>pages</span>
                <ul class="p-0 dropdown position-absolute">
                  <li class="text-light px-2 my-1">about us</li>
                  <li class="text-light px-2 my-1">shop details</li>
                  <li class="text-light px-2 my-1">shoping cart</li>
                  <li class="text-light px-2 my-1">chick out</li>
                  <li class="text-light px-2 my-1">blog details</li>
                </ul>
              </div>
            </a>
          </li>
          <li class="nav-item px-2">
            <a class="nav-link fw-bold" href="#"
              ><router-link to="/blog"
                ><span class="text-dark"> blog </span></router-link
              ></a
            >
          </li>
          <li class="nav-item px-2">
            <a class="nav-link fw-bold" href="#"
              ><router-link to="/Contact"
                ><span class="text-dark"> contacts </span></router-link
              ></a
            >
          </li>
        </ul>
      </div>
      <div class="icons-nav">
        <div class="d-flex justify-content-end align-items-center">
          <span class="text-dark"
            ><i @click="open()" class="fa-brands fa-searchengin h4 px-2"></i
          ></span>
          <span class="text-dark"
            ><i
              class="fa-solid fa-heart h4 px-2"
              @click="IncrisedLoves()"
              id="heart-icon"
            ></i
          ></span>
          <span class="text-dark"
            ><i class="fa-solid fa-note-sticky h4 px-2"></i
          ></span>
          <h6 class="fw-bold">
            {{ CountLoves }} <span class="text-danger">loves</span>
          </h6>
        </div>
      </div>
    </div>
  </nav>
  <router-view />
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      CountLoves: 0,
    };
  },
  methods: {
    close: function () {
      let CloseLayout = document.getElementById("layout");
      CloseLayout.style.display = "none";
    },
    open: function () {
      let OpenLayout = document.getElementById("layout");
      OpenLayout.style.display = "inline-block";
    },
    IncrisedLoves: function () {
      this.CountLoves++;

      let colored = document.getElementById("heart-icon");
      colored.style.color = "red";
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../Scss/main.scss";
.Free-shipping {
  background-color: $Main-color;
}
a {
  text-decoration: none;
}
.links-bar {
  position: relative;
}
.links-bar ul {
  display: none;
  position: absolute;
  z-index: 10;
  list-style: none;
  background-color: white;
  box-shadow: 1px 1px 10px black;
  transition: all 2s ease-out;
}
.links-bar:hover .usd-links {
  display: block;
}
.nav-link span {
  position: relative;
}
.nav-link span::before {
  content: "";
  width: 0px;
  transition: all 0.3s ease-in-out;
  margin-bottom: -5px;
  height: 3px;
  position: absolute;
  background-color: $Socend-color;
  bottom: 0px;
}
.nav-link span:hover:before,
.pages .dropdown:hover span::before {
  width: 100%;
  transition: all 0.3s ease-in-out;
}
.dropdown {
  display: none;
  width: 130px;
  top: 27px;
  left: 0px;
  z-index: 100;
  list-style: none;
  background-color: $Main-color;
}

.pages:hover .dropdown {
  display: inline-block;
}

#layout {
  width: 100%;
  position: fixed;
  height: 100vh;
  background-color: black;
  opacity: 0.9;
  display: none;
  z-index: 1000;
}

#close {
  margin-top: 40px;
  background-color: gray;
}
.icons-nav span {
  cursor: pointer;
}

.search-input {
  margin-top: 100px;
  width: 400px;
  border-bottom: 1px solid gray;
  border-top: none;
  border-left: none;
  border-right: none;
  color: white;
  font-size: 40px;

  background-color: transparent;
}

.search-input:focus {
  outline: none;
}
.icons-nav {
  margin-right: 25px;
}
</style>