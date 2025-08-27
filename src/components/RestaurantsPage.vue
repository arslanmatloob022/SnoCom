<template>
  <div id="">
    <AppBanner />
    <div class="root-container Name_e8ce0c">
      <div class="MainContainer_childWrapper__w37rh">
        <AppHeader />
        <div class="ContentWrapper_container__T9e2i">
          <BreadCrumbs :breadcrumbs="breadcrumbs" />
          <h1 class="Typography_h1__cT2UT">Restaurants &amp; Cafes</h1>
          <p class="Typography_p7__YYX0w Description_text__qN1Uu">
            Snoonu has what you are looking for in the online food delivery.
            Everyone's favorite restaurants
          </p>
          <SubCategoriesCarousel @category-selected="handleCategorySelection" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppBanner from "./AppBanner.vue";
import AppHeader from "./AppHeader.vue";
import BreadCrumbs from "./BreadCrumbs.vue";
import SubCategoriesCarousel from "./SubCategoriesCarousel.vue";

export default {
  name: "RestaurantsPage",
  components: {
    AppBanner,
    AppHeader,
    BreadCrumbs,
    SubCategoriesCarousel,
  },
  data() {
    return {
      breadcrumbs: [
        { name: "Home Page", href: "index.html" },
        { name: "Restaurants" },
      ],
    };
  },
  methods: {
    handleCategorySelection(categoryId) {
      console.log("Selected category:", categoryId);
      // Handle category selection logic
    },
  },
};
</script>

<style>
.bprogress {
  pointer-events: none;
  z-index: 99999;
}

.bprogress .bar {
  background: #d90217;
  position: fixed;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  height: 5px;
}

.bprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px #d90217, 0 0 5px #d90217;
  opacity: 1;
  -webkit-transform: rotate(3deg) translate(0px, -4px);
  -ms-transform: rotate(3deg) translate(0px, -4px);
  transform: rotate(3deg) translate(0px, -4px);
}

.bprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1031;
  top: 15px;
  bottom: auto;
  right: 15px;
  left: auto;
}

.bprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  border: solid 2px transparent;
  border-top-color: #d90217;
  border-left-color: #d90217;
  border-radius: 50%;
  -webkit-animation: bprogress-spinner 400ms linear infinite;
  animation: bprogress-spinner 400ms linear infinite;
}

@keyframes bprogress-spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
