<template>
  <div>
    <!-- Filter bar -->
    <FoodFilters @apply="applyFilter" />

    <!-- Grid -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5"
    >
      <FoodCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import FoodFilters from "./FoodFilters.vue";
import FoodCard from "./FoodCard.vue";

// Mock 30+ products
const products = ref(
  Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: [
      "Rosebella Flowers",
      "Chef Wahib",
      "La Macine Bakery",
      "Moon Wok",
      "Wok Wok",
      "Awesome Wings",
      "Wraps and Wings",
      "Tea Tale",
    ][i % 8],
    image: `https://picsum.photos/400/300?random=${i}`,
    category: ["Burgers", "Flowers", "Bakery", "Fast Food"][i % 4],
    rating: (Math.random() * (5 - 4) + 4).toFixed(1),
    priceLevel: "$$$",
    deliveryTime: Math.floor(Math.random() * 60) + 20,
    badges: [
      ...(Math.random() > 0.7 ? ["20% Off"] : []),
      ...(Math.random() > 0.5 ? ["Free Delivery"] : []),
      ...(Math.random() > 0.3 ? ["Buy 1 + Get 1"] : []),
    ],
  }))
);

const activeFilter = ref(null);

function applyFilter(filter) {
  activeFilter.value = filter;
}

const filteredProducts = computed(() => {
  if (!activeFilter.value) return products.value;
  return products.value.filter((p) => {
    if (activeFilter.value === "Free Delivery")
      return p.badges.includes("Free Delivery");
    if (activeFilter.value === "Under 30 min") return p.deliveryTime < 30;
    if (activeFilter.value === "Less than 50 QR") return p.priceLevel === "$";
    return true;
  });
});
</script>
