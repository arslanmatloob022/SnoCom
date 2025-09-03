<script lang="ts" setup>
const subcategories = ref([
  {
    "label": "Only on Snoonu",
    "image": "https://images.snoonu.com/image_category/2025-08/f1fe336f-185c-47fb-b0e0-1007fcee0ff1_da5f9127660f4f1899f547b42555d95b_Subcategory_Trending.png?format=webp"
  },
  {
    "label": "Burgers",
    "image": "https://images.snoonu.com/image_category/2025-08/07c25cdd-d078-40c9-8308-3dc8ad492aa0_Subcategory_Burgers.png?format=webp"
  },
  {
    "label": "Home Chefs",
    "image": "https://images.snoonu.com/image_category/2025-08/1a479cfd-adb1-41c8-96c7-a6aa24e330df_NewProject.png?format=webp"
  },
  {
    "label": "Secret Eats",
    "image": "https://images.snoonu.com/image_category/2025-08/98402f9f-9e6c-4087-8e99-78291686b3be_527bffc118654bdcb95dd7422826af03_ad232dab62414cfe9de0b9b8b6642fb1_Subcategory_Promos1.png?format=webp"
  },
  {
    "label": "Fried Chicken",
    "image": "https://images.snoonu.com/image_category/2025-08/3326c765-88b8-49fa-befe-4332a4af49da_Subcategory_FriedChicken.png?format=webp"
  },
  {
    "label": "Pizza",
    "image": "https://images.snoonu.com/image_category/2025-08/926609a5-fde7-442d-94fa-3912bfb64832_Subcategory_Pizza.png?format=webp"
  },
  {
    "label": "Promos",
    "image": "https://images.snoonu.com/image_category/2025-08/2a81b7d5-08ac-4f9b-88bb-2d094c364ef3_ad232dab62414cfe9de0b9b8b6642fb1_Subcategory_Promos.png?format=webp"
  },
  {
    "label": "Shawarma",
    "image": "https://images.snoonu.com/image_category/2025-08/95d314ac-d744-423b-8ca0-472c7c0ea09b_Subcategory_Shawarma.png?format=webp"
  },
  {
    "label": "Grilled Chicken",
    "image": "https://images.snoonu.com/image_category/2025-08/0967e584-3765-4a3f-88fa-fd7f04db837b_Subcategory_GrilledChicken.png?format=webp"
  },
  {
    "label": "Sandwich",
    "image": "https://images.snoonu.com/image_category/2025-08/dc6e4748-f018-4a06-893f-dd958d83bdc0_Subcategory_Sandwiches.png?format=webp"
  },
  {
    "label": "Healthy",
    "image": "https://images.snoonu.com/image_category/2025-08/2bd4239b-26a9-4a9b-bbe1-93038ee0a49f_Subcategory_Healthy.png?format=webp"
  },
  {
    "label": "Fast Food",
    "image": "https://images.snoonu.com/image_category/2025-08/d1bf4f1d-9f9b-4e50-a459-fa88522b5d56_NewProject2.png?format=webp"
  },
  {
    "label": "Arabic",
    "image": "https://images.snoonu.com/image_category/2025-08/a5230a48-a5e9-4ed3-badc-315e120ff6aa_Subcategory_Arabic.png?format=webp"
  }
])
</script>

<template>

    <div class="Carousel_wrapper">
        <div class="Carousel_navButtonWrapper__gL_66">
            <div data-analytic-label="carouselButtonPrev" data-analytic-event-content="subCategories"
                class="NavButton_wrapper NavButton_prev"><span data-test-id=""
                    class="Icon_iconWrapper" style="width: 24px; height: 24px;"><svg viewBox="0 0 13 12"
                        fill="none" xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M7.52 1.2 1.925 6l5.595 4.8 1.005-1.174L4.298 6l4.227-3.626L7.52 1.2Z"
                            fill="currentColor"></path>
                    </svg></span></div>
        </div>
        <div class="Carousel_carousel SubCategories_row">
    <div
      v-for="(item, i) in subcategories"
      :key="i"
      class="FoodSubCategoryCard_fakeWrapper"
    >
      <div class="FoodSubCategoryCard_subCategory">
        <div class="FoodSubCategoryCard_mainImageWrapper">
          <div class="FoodSubCategoryCard_imageWrapper">
            <img
              :src="item.image"
              :alt="item.label"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
        <p class="Typography_p5 FoodSubCategoryCard_label">
          {{ item.label }}
        </p>
      </div>
    </div>
  </div>
        <div class="Carousel_navButtonWrapper__gL_66">
            <div data-analytic-label="carouselButtonNext" data-analytic-event-content="subCategories"
                class="NavButton_wrapper NavButton_next__x_uZ2"><span data-test-id=""
                    class="Icon_iconWrapper" style="width: 24px; height: 24px;"><svg viewBox="0 0 21 20"
                        fill="none" xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="m7.8 2 9.325 8L7.8 18l-1.675-1.956L13.17 10 6.125 3.956 7.8 2Z" fill="currentColor">
                        </path>
                    </svg></span></div>
        </div>
    </div>
</template>
