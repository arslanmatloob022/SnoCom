<template>
  <div class="category-carousel">
    <div class="category-track" ref="track">
      <div 
        v-for="category in categories" 
        :key="category.id" 
        class="category-item"
        @click="$emit('select', category.id)"
      >
        <img :src="category.image" :alt="category.name" class="category-image">
        <div class="category-name">{{ category.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryCarousel',
  data() {
    return {
      categories: [
        { id: 1, name: 'Snoonu', image: 'https://images.snoonu.com/image_category/2025-08/b41b9d2f-4436-4790-9410-ab4d82190bd3_Subcategory_Promos.png?format=webp' },
        { id: 2, name: 'Sandwich', image: 'https://images.snoonu.com/image_category/2025-08/d999350e-7a58-4449-98f3-7a7631d21c05_Subcategory_MadeinQatar.png?format=webp' },
        { id: 3, name: 'Hot Spots', image: 'https://images.snoonu.com/image_category/2025-08/07c25cdd-d078-40c9-8308-3dc8ad492aa0_Subcategory_Burgers.png?format=webp' },
        { id: 4, name: 'Snacks', image: 'https://images.snoonu.com/image_category/2025-08/3326c765-88b8-49fa-befe-4332a4af49da_Subcategory_FriedChicken.png?format=webp' },
        { id: 5, name: 'Fast Food', image: 'https://images.snoonu.com/image_category/2025-08/926609a5-fde7-442d-94fa-3912bfb64832_Subcategory_Pizza.png?format=webp' },
        { id: 6, name: 'Meals', image: 'https://images.snoonu.com/image_category/2025-08/2bd4239b-26a9-4a9b-bbe1-93038ee0a49f_Subcategory_Healthy.png?format=webp' },
        { id: 7, name: 'Fried Chicken', image: 'https://images.snoonu.com/image_category/2025-08/0967e584-3765-4a3f-88fa-fd7f04db837b_Subcategory_GrilledChicken.png?format=webp' },
        { id: 8, name: 'Burgers', image: 'https://images.snoonu.com/image_category/2025-08/02d47dfb-1d4b-4bfa-99d5-af36ca64ad44_Subcategory_BBQ.png?format=webp' },
        { id: 9, name: 'Grilled', image: 'https://images.snoonu.com/image_category/2025-08/dd7172af-8c45-4dd6-8ed5-a1f3ec8af166_Subcategory_FineDining.png?format=webp' },
        { id: 10, name: 'Chicken', image: 'https://images.snoonu.com/image_category/2025-08/da9178f6-b018-489e-88aa-20a4bc88325b_79bc6b23b4314088a3fcfc9495e9bfb7_Subcategory_Pizza1.png?format=webp' },
        { id: 11, name: 'Juice', image: 'https://images.snoonu.com/image_category/2025-08/b41b9d2f-4436-4790-9410-ab4d82190bd3_Subcategory_Promos.png?format=webp' },
        { id: 12, name: 'Shawarma', image: 'https://images.snoonu.com/image_category/2025-08/d999350e-7a58-4449-98f3-7a7631d21c05_Subcategory_MadeinQatar.png?format=webp' }
      ]
    }
  },
  emits: ['select']
}
</script>