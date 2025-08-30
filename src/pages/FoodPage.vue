<template>
  <div class="food-page">
    <Header />
    <main class="container">
      <div class="breadcrumbs">
        <router-link to="/" class="breadcrumb-link">Home Page</router-link>
        <span>›</span>
        <RouterLink to="/food">Food Products</RouterLink>
      </div>

      <h1 class="h1">Together We Can</h1>

      <FoodProducts @product-click="handleProductClick" />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import FoodProducts from "../components/FoodProducts.vue";
import { RouterLink } from "vue-router";

export default {
  name: "FoodPage",
  components: {
    Header,
    Footer,
    FoodProducts,
  },
  methods: {
    handleProductClick(product) {
      console.log("Clicked product:", product);
    },
  },
};
</script>
