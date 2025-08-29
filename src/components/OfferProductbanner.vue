<template>
  <div class="bg-[#FFEEE6] p-5 rounded-[20px] mb-[30px]">
    <h2 class="text-3xl font-semibold mb-2 text-red-600">School New Hits!</h2>

    <!-- hide scrollbar but allow scroll -->
    <div class="flex overflow-x-auto space-x-6 py-4 scrollbar-hide">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="min-w-[200px] bg-white rounded-lg shadow-md p-4"
      >
        <img
          :src="item.image"
          alt="Product Image"
          class="w-full h-48 object-cover mb-4 rounded-lg"
        />
        <h3 class="text-lg font-medium mb-2">{{ item.title }}</h3>
        <p class="text-xl font-semibold text-gray-800">{{ item.price }} QR</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          image:
            "https://images.snoonu.com/image_category/2025-08/b41b9d2f-4436-4790-9410-ab4d82190bd3_Subcategory_Promos.png?format=webp",
          title: 'Kuromi Trolley Bag 14"',
          price: 139,
        },
        {
          image:
            "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=400",
          title: 'Kuromi Backpack 16"',
          price: 139,
        },
        {
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
          title: "Kuromi Lunch Bag",
          price: 49,
        },
        {
          image:
            "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=400",
          title: 'Kuromi Trolley Bag 16"',
          price: 179,
        },
        {
          image:
            "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=400",
          title: 'Kuromi Backpack 16"',
          price: 139,
        },
        {
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
          title: "Kuromi Lunch Bag",
          price: 49,
        },
        {
          image:
            "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=400",
          title: 'Kuromi Trolley Bag 16"',
          price: 179,
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
