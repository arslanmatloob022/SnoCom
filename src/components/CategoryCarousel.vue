<template>
  <div class="w-full py-10 px-2">
    <!-- Scrollable Row -->
    <div
      ref="track"
      class="flex gap-6 overflow-x-auto scrollbar-hide justify-center md:justify-start"
    >
      <div
        v-for="category in categories"
        :key="category.id"
        @click="$emit('select', category.id)"
        class="flex-shrink-0 w-24 md:w-28 lg:w-32 cursor-pointer text-center group"
      >
        <img
          :src="category.image"
          :alt="category.name"
          class="w-20 h-20 md:w-24 md:h-24 mx-auto rounded-xl object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div
          class="mt-2 text-xs md:text-sm font-medium text-gray-700 group-hover:text-red-500"
        >
          {{ category.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryCarousel",
  data() {
    return {
      categories: [
        {
          id: 1,
          name: "Snoonu",
          image:
            "https://images.snoonu.com/image_category/2025-08/b41b9d2f-4436-4790-9410-ab4d82190bd3_Subcategory_Promos.png?format=webp",
        },
        {
          id: 2,
          name: "Sandwich",
          image:
            "https://images.snoonu.com/image_category/2025-08/d999350e-7a58-4449-98f3-7a7631d21c05_Subcategory_MadeinQatar.png?format=webp",
        },
        {
          id: 3,
          name: "Hot Spots",
          image:
            "https://images.snoonu.com/image_category/2025-08/07c25cdd-d078-40c9-8308-3dc8ad492aa0_Subcategory_Burgers.png?format=webp",
        },
        {
          id: 4,
          name: "Snacks",
          image:
            "https://images.snoonu.com/image_category/2025-08/3326c765-88b8-49fa-befe-4332a4af49da_Subcategory_FriedChicken.png?format=webp",
        },
        {
          id: 5,
          name: "Fast Food",
          image:
            "https://images.snoonu.com/image_category/2025-08/926609a5-fde7-442d-94fa-3912bfb64832_Subcategory_Pizza.png?format=webp",
        },
        {
          id: 6,
          name: "Meals",
          image:
            "https://images.snoonu.com/image_category/2025-08/2bd4239b-26a9-4a9b-bbe1-93038ee0a49f_Subcategory_Healthy.png?format=webp",
        },
        {
          id: 7,
          name: "Fried Chicken",
          image:
            "https://images.snoonu.com/image_category/2025-08/0967e584-3765-4a3f-88fa-fd7f04db837b_Subcategory_GrilledChicken.png?format=webp",
        },
        {
          id: 8,
          name: "Burgers",
          image:
            "https://images.snoonu.com/image_category/2025-08/02d47dfb-1d4b-4bfa-99d5-af36ca64ad44_Subcategory_BBQ.png?format=webp",
        },
        {
          id: 9,
          name: "Grilled",
          image:
            "https://images.snoonu.com/image_category/2025-08/dd7172af-8c45-4dd6-8ed5-a1f3ec8af166_Subcategory_FineDining.png?format=webp",
        },
        {
          id: 10,
          name: "Chicken",
          image:
            "https://images.snoonu.com/image_category/2025-08/da9178f6-b018-489e-88aa-20a4bc88325b_79bc6b23b4314088a3fcfc9495e9bfb7_Subcategory_Pizza1.png?format=webp",
        },
        {
          id: 11,
          name: "Juice",
          image:
            "https://images.snoonu.com/image_category/2025-08/b41b9d2f-4436-4790-9410-ab4d82190bd3_Subcategory_Promos.png?format=webp",
        },
        {
          id: 12,
          name: "Shawarma",
          image:
            "https://images.snoonu.com/image_category/2025-08/d999350e-7a58-4449-98f3-7a7631d21c05_Subcategory_MadeinQatar.png?format=webp",
        },
      ],
    };
  },
  emits: ["select"],
};
</script>

<style>
/* Hide ugly browser scrollbar */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none; /* IE & Edge */
  scrollbar-width: none; /* Firefox */
}
</style>
