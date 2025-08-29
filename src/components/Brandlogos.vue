<template>
  <div class="py-10 px-4">
    <h2 class="text-2xl md:text-3xl font-bold mb-6">Favourite Brands</h2>

    <!-- Mobile: horizontal scroll | Desktop: grid -->
    <div
      class="flex overflow-x-auto space-x-4 scrollbar-hide sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 sm:gap-6 sm:space-x-0"
    >
      <div
        v-for="(brand, index) in brands"
        :key="index"
        class="flex flex-col items-center bg-white p-4 rounded-lg shadow-md flex-shrink-0 w-36 sm:w-auto"
      >
        <img
          :src="brand.logoUrl"
          alt="brand logo"
          class="w-20 h-20 md:w-24 md:h-24 object-contain mb-3"
        />
        <p class="text-sm md:text-base text-center font-semibold">
          {{ brand.name }}
        </p>
        <p class="text-xs md:text-sm text-center text-gray-500">
          {{ brand.timeAgo }}
        </p>
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
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/sco/d/d3/Starbucks_Corporation_Logo_2011.svg",
          timeAgo: "29 mins",
        },
        {
          name: "PRYM",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
          timeAgo: "53 mins",
        },
        {
          name: "181",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
          timeAgo: "31 mins",
        },
        {
          name: "Raising Cane's",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/sco/d/d3/Starbucks_Corporation_Logo_2011.svg",
          timeAgo: "29 mins",
        },
        {
          name: "PRYM",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
          timeAgo: "53 mins",
        },
        {
          name: "181",
          logoUrl:
            "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
          timeAgo: "31 mins",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Hide scrollbar but keep scrolling */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none; /* IE/Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
