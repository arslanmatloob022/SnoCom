<template>
  <div class="Carousel_wrapper__Z5oJV">
    <div class="Carousel_navButtonWrapper__gL_66">
      <div class="NavButton_wrapper__iJpe4 NavButton_prev" @click="scrollPrev">
        <span class="Icon_iconWrapper">
          <svg viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" class="Icon_icon__CTVm1">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M7.52 1.2 1.925 6l5.595 4.8 1.005-1.174L4.298 6l4.227-3.626L7.52 1.2Z" fill="currentColor">
            </path>
          </svg>
        </span>
      </div>
    </div>
    <div class="Carousel_carousel SubCategories_row__Me86p" ref="carousel">
      <SubCategoryCard 
        v-for="category in categories" 
        :key="category.id" 
        :category="category"
        @select="handleCategorySelect" />
    </div>
  </div>
</template>

<script>
import SubCategoryCard from './SubCategoryCard.vue'

export default {
  name: 'SubCategoriesCarousel',
  components: {
    SubCategoryCard
  },
  data() {
    return {
      categories: [
        { id: 181, label: 'Promos', image: 'https://images.snoonu.com/image_category/2025-08/b41b9d2f-4436-4790-9410-ab4d82190bd3_Subcategory_Promos.png?format=webp' },
        { id: 3644, label: 'Made in Qatar', image: 'https://images.snoonu.com/image_category/2025-08/d999350e-7a58-4449-98f3-7a7631d21c05_Subcategory_MadeinQatar.png?format=webp' },
        { id: 103, label: 'Burgers', image: 'https://images.snoonu.com/image_category/2025-08/07c25cdd-d078-40c9-8308-3dc8ad492aa0_Subcategory_Burgers.png?format=webp' },
        { id: 486, label: 'Fried Chicken', image: 'https://images.snoonu.com/image_category/2025-08/3326c765-88b8-49fa-befe-4332a4af49da_Subcategory_FriedChicken.png?format=webp' },
        { id: 104, label: 'Pizza', image: 'https://images.snoonu.com/image_category/2025-08/926609a5-fde7-442d-94fa-3912bfb64832_Subcategory_Pizza.png?format=webp' },
        { id: 110, label: 'Healthy', image: 'https://images.snoonu.com/image_category/2025-08/2bd4239b-26a9-4a9b-bbe1-93038ee0a49f_Subcategory_Healthy.png?format=webp' },
        { id: 3402, label: 'Grilled Chicken', image: 'https://images.snoonu.com/image_category/2025-08/0967e584-3765-4a3f-88fa-fd7f04db837b_Subcategory_GrilledChicken.png?format=webp' },
        { id: 485, label: 'BBQ', image: 'https://images.snoonu.com/image_category/2025-08/02d47dfb-1d4b-4bfa-99d5-af36ca64ad44_Subcategory_BBQ.png?format=webp' },
        { id: 174, label: 'Fine Dining', image: 'https://images.snoonu.com/image_category/2025-08/dd7172af-8c45-4dd6-8ed5-a1f3ec8af166_Subcategory_FineDining.png?format=webp' },
        { id: 320, label: 'Gathering', image: 'https://images.snoonu.com/image_category/2025-08/da9178f6-b018-489e-88aa-20a4bc88325b_79bc6b23b4314088a3fcfc9495e9bfb7_Subcategory_Pizza1.png?format=webp' }
      ]
    }
  },
  methods: {
    scrollPrev() {
      this.$refs.carousel.scrollBy({ left: -200, behavior: 'smooth' })
    },
    handleCategorySelect(categoryId) {
      this.$emit('category-selected', categoryId)
    }
  },
  emits: ['category-selected']
}
</script>