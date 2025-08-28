<template>
  <div class="py-10 px-4">
    <h2 class="text-2xl font-bold mb-6">Favourite Brands</h2>
    <div class="flex space-x-6 overflow-x-auto">
      <div
        v-for="(brand, index) in brands"
        :key="index"
        class="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg"
      >
        <img
          :src="brand.logoUrl"
          alt="brand logo"
          class="w-24 h-24 object-contain mb-3"
        />
        <p class="text-sm text-center font-semibold">{{ brand.name }}</p>
        <p class="text-xs text-center text-gray-500">{{ brand.timeAgo }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     brands: [
  {
    name: "Raising Cane's",
    logoUrl: "https://upload.wikimedia.org/wikipedia/sco/d/d3/Starbucks_Corporation_Logo_2011.svg",
    timeAgo: "29 mins",
  },
  {
    name: "PRYM",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", // Example reference
    timeAgo: "53 mins",
  },
  {
    name: "181",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg", // Placeholder
    timeAgo: "31 mins",
  },
  {
    name: "Raising Cane's",
    logoUrl: "https://upload.wikimedia.org/wikipedia/sco/d/d3/Starbucks_Corporation_Logo_2011.svg",
    timeAgo: "29 mins",
  },
  {
    name: "PRYM",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg", // Example reference
    timeAgo: "53 mins",
  },
  {
    name: "181",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg", // Placeholder
    timeAgo: "31 mins",
  }
],
    };
  },
};
</script>

<style scoped>
/* You can further customize the component with additional styling */
</style>