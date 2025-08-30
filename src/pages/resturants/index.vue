<template>
  <div>
    <FoodCard />
  </div>
</template>

<script>
import FoodCard from "./components/FoodCard.vue";
import "./styles/main.css";

export default {
  name: "App",
  components: {
    FoodCard,
  },
};
</script>
