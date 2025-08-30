<template>
  <div class="rounded-2xl shadow-md overflow-hidden relative group food-card">
    <!-- Badges -->
    <div class="absolute top-2 left-2 flex flex-wrap gap-1 z-10">
      <span
        v-for="badge in product.badges"
        :key="badge"
        class="px-2 py-1 rounded-full text-xs font-semibold text-white"
        :class="badgeColor(badge)"
      >
        {{ badge }}
      </span>
    </div>

    <!-- Image -->
    <img
      :src="product.image"
      :alt="product.name"
      class="h-40 w-full object-cover group-hover:scale-105 transition-transform"
    />

    <!-- Content -->
    <div class="p-3">
      <h3 class="text-lg font-semibold truncate">{{ product.name }}</h3>
      <p class="text-sm text-gray-500">{{ product.category }}</p>
      <div class="flex items-center gap-2 mt-2 text-sm text-gray-600">
        ⭐ {{ product.rating }} · {{ product.priceLevel }}
      </div>
    </div>

    <!-- Delivery time -->
    <div
      class="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full"
    >
      {{ product.deliveryTime }} mins
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});

// Badge styling isolation
function badgeColor(badge) {
  if (badge.includes("Off")) return "bg-red-500";
  if (badge.includes("Free")) return "bg-blue-500";
  if (badge.includes("Local")) return "bg-orange-500";
  if (badge.includes("Buy")) return "bg-yellow-500 text-black";
  return "bg-gray-500";
}
</script>

<style scoped>
.food-card {
  transition: transform 0.2s;
}
.food-card:hover {
  transform: translateY(-4px);
}
</style>
