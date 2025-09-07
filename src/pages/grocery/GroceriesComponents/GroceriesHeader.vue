<script setup>
import GroceryCard from "./GroceryCard.vue";
import { ref } from "vue";
const groceryList = ref([
  //   {
  //     label: "Trending",
  //     image: "/_next/static/media/no_product.bd9ee755.jpg",
  //   },
  {
    label: "Free Delivery",
    image:
      "https://images.snoonu.com/image_category/2025-05/e976d820-beb0-4a5f-9624-8d6e8e46e019_c1d2d2d28a51475fb960f925a069ff75_Subcategory_Promotions.png?format=webp",
  },
  {
    label: "Hypermarket ",
    image:
      "https://images.snoonu.com/image_category/2025-03/4a5cc48b-f243-4061-8042-c2887d940d65_Hypermarkets.png?format=webp",
  },
  {
    label: "Grocery Stores",
    image:
      "https://images.snoonu.com/image_category/2025-03/c25c1380-a5cf-4624-91d1-6dfde8794870_NewonSnoonu.png?format=webp",
  },
  {
    label: "Coffee",
    image:
      "https://images.snoonu.com/image_category/2025-03/a4a98433-4026-4d4a-86e7-afc66b64ed78_Subcategory_new1.jpg?format=webp",
  },
  {
    label: "Dates & Nuts",
    image:
      "https://images.snoonu.com/image_category/2025-03/39e89939-6257-4346-bd21-8caafb5713a7_Subcategory_new2.jpg?format=webp",
  },
  {
    label: "Healthy",
    image:
      "https://images.snoonu.com/image_category/2025-03/01c44cb0-654a-4dd6-9dee-4d259f31667d_Subcategory_new4.jpg?format=webp",
  },
  {
    label: "Honey",
    image:
      "https://images.snoonu.com/image_category/2025-03/2ffc4ef2-6b1a-4ecc-8cdb-f3a12ff75e66_Honey.png?format=webp",
  },
  {
    label: "Fruits & Vegs",
    image:
      "https://images.snoonu.com/image_category/2025-03/60dedf02-14e7-40c9-aae4-980b47ba84dc_Subcategory_new3.jpg?format=webp",
  },
  {
    label: "Meat & Poultry",
    image:
      "https://images.snoonu.com/image_category/2025-03/432e1657-dd7c-4e63-9950-4a4a75b5a2b5_MeatPoultry.png?format=webp",
  },
  {
    label: "Sweets & Bakery",
    image:
      "https://images.snoonu.com/image_category/2025-03/f54dea6f-5bfd-46c9-b2b1-5f35f2301504_Subcategory_new.jpg?format=webp",
  },
  {
    label: "Local Markets",
    image:
      "https://images.snoonu.com/image_category/2025-03/4381b943-5eb3-48bc-b53e-fc043f40cb48_LocalMarkets.png?format=webp",
  },
  {
    label: "Disposables",
    image:
      "https://images.snoonu.com/image_category/2025-03/1168a8f9-4d9e-4c5d-bf26-5b31d2959dcd_Disposables.png?format=webp",
  },
]);
</script>
<template>
  <div class="Carousel_wrapper">
    <div class="Carousel_navButtonWrapper__gL_66">
      <div
        data-analytic-label="carouselButtonPrev"
        data-analytic-event-content="subCategories"
        class="NavButton_wrapper NavButton_prev"
      >
        <span
          data-test-id=""
          class="Icon_iconWrapper"
          style="width: 24px; height: 24px"
          ><svg
            viewBox="0 0 13 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="Icon_icon"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.52 1.2 1.925 6l5.595 4.8 1.005-1.174L4.298 6l4.227-3.626L7.52 1.2Z"
              fill="currentColor"
            ></path></svg
        ></span>
      </div>
    </div>
    <div class="Carousel_carousel SubCategories_row">
      <GroceryCard
        v-for="(item, idx) in groceryList"
        :key="idx"
        :label="item.label"
        :image="item.image"
      />
    </div>
    <div class="Carousel_navButtonWrapper__gL_66">
      <div
        data-analytic-label="carouselButtonNext"
        data-analytic-event-content="subCategories"
        class="NavButton_wrapper NavButton_next__x_uZ2"
      >
        <span
          data-test-id=""
          class="Icon_iconWrapper"
          style="width: 24px; height: 24px"
          ><svg
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="Icon_icon"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="m7.8 2 9.325 8L7.8 18l-1.675-1.956L13.17 10 6.125 3.956 7.8 2Z"
              fill="currentColor"
            ></path></svg
        ></span>
      </div>
    </div>
  </div>
</template>
<style scoped>
.ProductCardHorizontal_wrapper {
  background: var(--background-secondary);
  border-radius: 32px;
  display: flex;
  align-items: unset;
  justify-content: flex-start;
  flex-flow: row;
  cursor: pointer;
}

@media (max-width: 575px) {
  .ProductCardHorizontal_wrapper {
    background: none;
  }
}

.ProductCardHorizontal_wrapper .ProductCardHorizontal_image {
  margin: 8px;
}

@media (max-width: 575px) {
  .ProductCardHorizontal_wrapper .ProductCardHorizontal_image {
    margin: 0;
  }
}

.ProductCardHorizontal_wrapper .ProductCardHorizontal_info {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-flow: column;
  flex-grow: 1;
  padding: 16px;
  -webkit-padding-start: 12px;
  padding-inline-start: 12px;
  word-break: break-word;
}

@media (max-width: 1024px) {
  .ProductCardHorizontal_wrapper .ProductCardHorizontal_info {
    padding: 12px;
    -webkit-padding-start: 8px;
    padding-inline-start: 8px;
  }
}

@media (max-width: 575px) {
  .ProductCardHorizontal_wrapper .ProductCardHorizontal_info {
    padding: 0;
    -webkit-padding-start: 16px;
    padding-inline-start: 16px;
    gap: 12px;
  }
}

.ProductCardHorizontal_wrapper
  .ProductCardHorizontal_info
  .ProductCardHorizontal_name {
  margin-bottom: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@supports (-webkit-line-clamp: 2) {
  .ProductCardHorizontal_wrapper
    .ProductCardHorizontal_info
    .ProductCardHorizontal_name {
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}

.ProductCardHorizontal_wrapper
  .ProductCardHorizontal_info
  .ProductCardHorizontal_description {
  color: var(--text-secondary);
  margin-bottom: 6px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@supports (-webkit-line-clamp: 3) {
  .ProductCardHorizontal_wrapper
    .ProductCardHorizontal_info
    .ProductCardHorizontal_description {
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}

.ProductCardHorizontal_wrapper .ProductCardHorizontal_priceWrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row;
  width: 100%;
}

.ProductCardHorizontal_wrapper
  .ProductCardHorizontal_priceWrapper
  .ProductCardHorizontal_pricePromo {
  display: flex;
  flex-direction: column;
}

.ProductCardHorizontal_wrapper
  .ProductCardHorizontal_priceWrapper
  .ProductCardHorizontal_pricePromo
  .ProductCardHorizontal_newPrice {
  color: var(--constant-brand);
}

.ProductCardHorizontal_wrapper
  .ProductCardHorizontal_priceWrapper
  .ProductCardHorizontal_pricePromo
  .ProductCardHorizontal_oldPrice {
  color: var(--text-secondary);
}

@media (max-width: 575px) {
  .ProductCardHorizontal_wrapper .ProductCardHorizontal_productButton {
    min-width: 96px;
    height: 44px;
    margin: 0;
  }
}

:root[lang="ar"] .ProductCardHorizontal_description,
:root[lang="ar"] .ProductCardHorizontal_name {
  text-align: right;
}

:root[lang="ar"] .ProductCardHorizontal_imageWrapper {
  flex-shrink: 0;
  width: 176px;
  height: 176px;
  margin: 8px 8px 8px 0;
  position: relative;
  border-radius: 28px;
  background: var(--constant-white);
  overflow: hidden;
}

@media (max-width: 575px) {
  :root[lang="ar"] .ProductCardHorizontal_imageWrapper {
    width: 156px;
    height: 156px;
  }
}

.ProductCardVertical_wrapper {
  width: 188px;
  height: 100%;
  background: var(--constant-white);
  border-radius: 32px;
  overflow: hidden;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

@media (max-width: 1024px) {
  .ProductCardVertical_wrapper {
    width: 156px;
    border-radius: 28px;
  }
}

@media (max-width: 575px) {
  .ProductCardVertical_wrapper {
    width: 150px;
  }
}

.ProductCardVertical_wrapper .ProductCardVertical_image {
  margin: 8px;
  border-radius: 26px 26px 6px 6px;
}

@media (max-width: 1024px) {
  .ProductCardVertical_wrapper .ProductCardVertical_image {
    border-radius: 24px 24px 6px 6px;
  }
}

@media (max-width: 575px) {
  .ProductCardVertical_wrapper .ProductCardVertical_image {
    margin: 6px;
    width: 138px;
    height: 138px;
  }
}

.ProductCardVertical_wrapper .ProductCardVertical_info {
  padding: 8px 12px 18px;
}

@media (max-width: 1024px) {
  .ProductCardVertical_wrapper .ProductCardVertical_info {
    padding-bottom: 12px;
  }
}

.ProductCardVertical_wrapper .ProductCardVertical_name {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@supports (-webkit-line-clamp: 2) {
  .ProductCardVertical_wrapper .ProductCardVertical_name {
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}

.ProductCardVertical_wrapper .ProductCardVertical_price__T_5WM {
  margin-bottom: 6px;
}

@media (max-width: 575px) {
  .ProductCardVertical_wrapper .ProductCardVertical_price__T_5WM {
    margin-bottom: 8px;
  }
}

.ProductCardVertical_wrapper .ProductCardVertical_pricePromo__O_ab8 {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  flex-flow: row;
  gap: 4px;
  margin-bottom: 6px;
}

.ProductCardVertical_wrapper
  .ProductCardVertical_pricePromo__O_ab8
  .ProductCardVertical_newPrice {
  color: var(--constant-brand);
}

.ProductCardVertical_wrapper
  .ProductCardVertical_pricePromo__O_ab8
  .ProductCardVertical_oldPrice {
  color: var(--text-secondary);
}

:root[lang="ar"] .ProductCardVertical_name,
:root[lang="ar"] .ProductCardVertical_price__T_5WM {
  text-align: right;
}

.HeartIcon_wrapper {
  cursor: pointer;
}

.HeartIcon_heartActive svg {
  animation: HeartIcon_heartAnimationActive 0.5s;
}

.HeartIcon_heartInActive svg {
  animation: HeartIcon_heartAnimationInActive 0.5s;
}

@keyframes HeartIcon_heartAnimationActive {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.7);
  }

  to {
    transform: scale(1);
  }
}

@keyframes HeartIcon_heartAnimationInActive {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.7);
  }

  to {
    transform: scale(1);
  }
}

.FavouriteProductIcon_notification__qOLE_ {
  width: 336px;
}

@media (max-width: 1024px) {
  .FavouriteProductIcon_notification__qOLE_ {
    width: 100%;
  }
}

.FavouriteProductIcon_seeAll {
  color: var(--text-invert-primary);
}

.ProductCounter_wrapper__yiOb_ {
  position: absolute;
  bottom: 12px;
  inset-inline-end: 12px;
  border-radius: 20px;
}

.ProductCounter_plusWrapper {
  padding: 10px;
  overflow: hidden;
  background: var(--control-tertiary);
  box-shadow: var(--box-shadow-s);
}

.ProductCounter_plusWrapper .ProductCounter_icon {
  width: 20px;
  height: 20px;
}

.ProductCounter_counterWrapper {
  padding: 4px;
  background: var(--control-tertiary);
  box-shadow: var(--box-shadow-m);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  overflow: hidden;
}

@media (max-width: 575px) {
  .ProductCounter_counterWrapper {
    inset-inline-start: 12px;
    width: calc(100% - 24px);
  }
}

.ProductCounter_counterWrapper .ProductCounter_minus___ywYe,
.ProductCounter_counterWrapper .ProductCounter_plus {
  background: var(--control-tertiary);
  padding: 8px;
  border-radius: 16px;
}

.ProductCounter_counterWrapper .ProductCounter_minus___ywYe:focus,
.ProductCounter_counterWrapper .ProductCounter_plus:focus {
  background: var(--background-secondary);
}

.ProductCounter_counterWrapper .ProductCounter_count {
  min-width: 24px;
  text-align: center;
}

@media (max-width: 575px) {
  .ProductCounter_counterWrapper .ProductCounter_count {
    flex: 1 1;
  }
}

.ProductCounter_counterWrapper .ProductCounter_icon {
  width: 16px;
  height: 16px;
}

.ProductCounter_button {
  border: none;
  outline: none;
  cursor: pointer;
}

.ProductCounter_button:focus {
  outline: none;
}

.ProductImage_wrapper {
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 26px;
  overflow: hidden;
}

.ProductImage_wrapper:after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 26px;
}

.ProductImage_imageWrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.SimpleStarRating_wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 2px;
}

.SimpleStarRating_starWrapper {
  position: relative;
}

.SimpleStarRating_starFilled {
  position: relative;
  color: var(--constant-top-rated);
  z-index: 2;
}

.SimpleStarRating_starBackground,
.SimpleStarRating_starFilled {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  top: 0;
  left: 0;
  width: 12px;
  height: 12px;
}

.SimpleStarRating_starBackground {
  position: absolute;
  color: var(--border-and-divider-primary);
}

:root[lang="ar"] .SimpleStarRating_starWrapper {
  transform: scaleX(-1);
}

.ProductRating_wrapper__g_1Nn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 4px;
  margin-top: 6px;
}

.ProductRating_count {
  color: var(--text-secondary);
}

.ProductTags_wrapper {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 4px;
}

.ProductTags_discount {
  padding: 3px 4px;
  background: var(--constant-background-coolred);
  color: var(--text-brand);
  border-radius: 20px;
}

.ProductTags_buyOneGetOne {
  height: 20px;
  padding: 3px 8px;
  background: var(--constant-x-get-y);
  border-radius: 20px;
}

.ProductTags_bySnoonu {
  padding: 4px 5px;
  background: var(--constant-background-coolred);
  color: var(--icon-brand);
  border-radius: 20px;
}

.ProductTags_bySnoonu .ProductTags_icon {
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
}

.ProductTags_freeDelivery {
  background: rgba(1, 123, 255, 0.06);
  color: var(--text-free-delivery);
  padding: 3px 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 2px;
  border-radius: 12px;
}

.ProductTags_freeDelivery .ProductTags_freeDeliveryIcon {
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
}

:root[lang="ar"] .ProductTags_freeDeliveryIcon {
  transform: scaleX(-1);
}

.ProductPrice_wrapper {
  margin-top: 10px;
}

.ProductPrice_prices {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  flex-flow: row;
  gap: 4px;
  margin-bottom: 2px;
}

.ProductPrice_prices .ProductPrice_newPrice {
  color: var(--constant-brand);
}

.ProductPrice_prices .ProductPrice_oldPrice {
  color: var(--text-secondary);
}

.ProductPrice_label {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@supports (-webkit-line-clamp: 3) {
  .ProductPrice_label {
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}

@media (max-width: 1024px) {
  .ProductPrice_label {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @supports (-webkit-line-clamp: 2) {
    .ProductPrice_label {
      white-space: normal;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}

:root[lang="ar"] .ProductPrice_wrapper {
  text-align: right;
}

.SkeletonVerticalProductCard_card {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column;
  width: 188px;
  background: var(--background-secondary);
  border-radius: 32px;
}

@media (max-width: 1024px) {
  .SkeletonVerticalProductCard_card {
    width: 156px;
    border-radius: 28px;
  }
}

@media (max-width: 575px) {
  .SkeletonVerticalProductCard_card {
    width: 150px;
  }
}

.SkeletonVerticalProductCard_image__vt9_K {
  width: 172px;
  height: 172px;
  margin: 8px;
  border-radius: 26px 26px 6px 6px !important;
  overflow: hidden;
}

@media (max-width: 1024px) {
  .SkeletonVerticalProductCard_image__vt9_K {
    width: 140px;
    height: 140px;
    border-radius: 20px 20px 6px 6px !important;
  }
}

@media (max-width: 575px) {
  .SkeletonVerticalProductCard_image__vt9_K {
    margin: 6px;
    width: 134px;
    height: 134px;
  }
}

.SkeletonVerticalProductCard_info__4y__L {
  width: 100%;
  padding: 8px 12px 18px;
}

@media (max-width: 1024px) {
  .SkeletonVerticalProductCard_info__4y__L {
    padding-bottom: 12px;
  }
}

.SkeletonVerticalProductCard_price {
  width: 60px;
  height: 20px;
  margin-bottom: 6px;
}

.SkeletonVerticalProductCard_name {
  width: 100%;
  height: 24px;
}

.SkeletonVerticalProductCard_button {
  width: calc(100% - 24px);
  height: 52px;
  margin: 0 12px 12px;
}

.ProductInfo_wrapper___tfgf {
  margin-top: 10px;
}

.ProductInfo_prices {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  flex-flow: row;
  gap: 4px;
  margin-bottom: 2px;
}

.ProductInfo_prices .ProductInfo_newPrice {
  color: var(--constant-brand);
}

.ProductInfo_prices .ProductInfo_oldPrice {
  color: var(--text-secondary);
}

.ProductInfo_label {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@supports (-webkit-line-clamp: 2) {
  .ProductInfo_label {
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}

:root[lang="ar"] .ProductInfo_wrapper___tfgf {
  text-align: right;
}

.SkeletonSearchMerchantCard_wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
}

.SkeletonSearchMerchantCard_image {
  width: 144px;
  height: 72px;
  position: relative;
  -webkit-margin-end: 16px;
  margin-inline-end: 16px;
}

@media (max-width: 1024px) {
  .SkeletonSearchMerchantCard_image {
    width: 120px;
    height: 60px;
    border-radius: 16px !important;
  }
}

@media (max-width: 575px) {
  .SkeletonSearchMerchantCard_image {
    width: 104px;
    height: 52px;
  }
}

.SkeletonSearchMerchantCard_info {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column;
  gap: 4px;
}

.SkeletonSearchMerchantCard_name {
  width: 260px;
  height: 44px;
}

@media (max-width: 1024px) {
  .SkeletonSearchMerchantCard_name {
    height: 36px;
  }
}

@media (max-width: 575px) {
  .SkeletonSearchMerchantCard_name {
    width: 160px;
    height: 28px;
  }
}

.SkeletonSearchMerchantCard_details {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 6px;
}

.SkeletonSearchMerchantCard_time__EB_XU {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 4px;
}

.SkeletonSearchMerchantCard_icon {
  width: 24px;
  height: 24px;
}

@media (max-width: 1024px) {
  .SkeletonSearchMerchantCard_icon {
    width: 20px;
    height: 20px;
  }
}

.SkeletonSearchMerchantCard_timeValue {
  width: 72px;
  height: 20px;
}

.SkeletonSearchMerchantCard_dot {
  width: 4px;
  height: 4px;
}

.SkeletonSearchMerchantCard_cats {
  width: 120px;
  height: 20px;
}

.SkeletonSearchMerchantCard_carousel {
  margin-top: 16px;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  scrollbar-width: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 16px;
}

.SkeletonSearchMerchantCard_carousel::-webkit-scrollbar {
  display: none;
}

.ProductCardMarketplace_imageWrapper {
  position: relative;
}

.ProductCardMarketplace_favourite {
  position: absolute;
  top: 12px;
  right: 16px;
  padding: 0;
}

.Feedback_wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  color: var(--text-brand);
  cursor: pointer;
}

.Feedback_icon {
  width: 24px;
  height: 24px;
}

:root[lang="ar"] .Feedback_icon {
  transform: scaleX(-1);
}

.Carousel_wrapper {
  position: relative;
}

@media (max-width: 1360px) {
  .Carousel_wrapper {
    margin-right: var(--content-wrapper-side-padding-negative);
    margin-left: var(--content-wrapper-side-padding-negative);
  }

  .Carousel_wrapper .Carousel_navButtonWrapper__gL_66 {
    display: none;
  }
}

.Carousel_carousel {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  scrollbar-width: none;
  gap: 24px;
}

.Carousel_carousel::-webkit-scrollbar {
  display: none;
}

.Carousel_enter__Jz_dI {
  opacity: 0;
  transition: opacity 0.2s ease;
}

.Carousel_enterActive__o_jK8 {
  opacity: 1;
}

.Carousel_exit {
  opacity: 1;
  transition: opacity 0.2s ease;
}

.Carousel_exitActive {
  opacity: 0;
}

@media (max-width: 1360px) {
  :root[lang="en"] .Carousel_carousel > :first-of-type {
    padding-left: var(--content-wrapper-side-padding);
  }

  :root[lang="ar"] .Carousel_carousel > :first-of-type,
  :root[lang="en"] .Carousel_carousel > :last-of-type {
    padding-right: var(--content-wrapper-side-padding);
  }

  :root[lang="ar"] .Carousel_carousel > :last-of-type {
    padding-left: var(--content-wrapper-side-padding);
  }
}

.FeedbackModal_modal {
  width: 448px;
}

.FeedbackModal_wrapper__Sx_nr {
  width: 100%;
}

.FeedbackModal_textarea {
  margin-top: 16px;
  margin-bottom: 24px;
}

@media (max-width: 575px) {
  .FeedbackModal_textarea {
    margin-bottom: 16px;
  }
}

.NavButton_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row;
  border-radius: 24px;
  width: 48px;
  height: 48px;
  background: var(--control-tertiary);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 2;
  box-shadow: var(--box-shadow-56);
}

.NavButton_wrapper.NavButton_prev {
  left: -32px;
}

.NavButton_wrapper.NavButton_next__x_uZ2 {
  right: -32px;
}

.EmptyResult_wrapper {
  margin-top: 112px;
  margin-bottom: 112px;
  color: var(--text-secondary);
  text-align: center;
}

.EmptyResult_title {
  margin-top: 0;
  margin-bottom: 8px;
}

.EmptyResult_description {
  margin-top: 8px;
  margin-bottom: 8px;
}

@media (max-width: 1024px) {
  .EmptyResult_description {
    margin-bottom: 12px;
  }
}

@media (max-width: 575px) {
  .EmptyResult_description {
    margin-bottom: 8px;
  }
}

:root[lang="ar"] .EmptyResult_title {
  text-align: center;
  margin-bottom: 15px;
}

.SeeAll_wrapper__OQnx_ {
  margin: 0 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}

@media (max-width: 1024px) {
  .SeeAll_wrapper__OQnx_ {
    margin: 0 50px;
  }
}

.SeeAll_link {
  flex-flow: column;
}

.SeeAll_iconWrapper,
.SeeAll_link {
  display: flex;
  align-items: center;
  justify-content: center;
}

.SeeAll_iconWrapper {
  background: var(--constant-white);
  color: var(--icon-primary);
  width: 48px;
  height: 48px;
  margin: 0 4px 8px;
  border-radius: 50%;
  flex-flow: row;
  box-shadow: var(--box-shadow-56);
}

:root[lang="ar"] .SeeAll_iconWrapper {
  transform: scaleX(-1);
}

.SeeAll_button {
  padding: 12px 20px !important;
}

@media (max-width: 575px) {
  .SeeAll_button {
    padding: 8px 16px !important;
  }
}

.SearchMerchant_wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  width: -moz-fit-content;
  width: fit-content;
}

.SearchMerchant_imageWrapper__m92_k {
  width: 144px;
  height: 72px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  -webkit-margin-end: 16px;
  margin-inline-end: 16px;
  flex-shrink: 0;
}

@media (max-width: 1024px) {
  .SearchMerchant_imageWrapper__m92_k {
    width: 120px;
    height: 60px;
    border-radius: 16px;
  }
}

@media (max-width: 575px) {
  .SearchMerchant_imageWrapper__m92_k {
    width: 104px;
    height: 52px;
  }
}

.SearchMerchant_imageWrapper__m92_k:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.08);
}

.SearchMerchant_info {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column;
  gap: 4px;
}

.SearchMerchant_name {
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@supports (-webkit-line-clamp: 1) {
  .SearchMerchant_name {
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
}

.SearchMerchant_details {
  gap: 6px;
}

.SearchMerchant_details,
.SearchMerchant_time {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
}

.SearchMerchant_time {
  gap: 4px;
  flex-shrink: 0;
}

.SearchMerchant_icon {
  width: 24px;
  height: 24px;
}

@media (max-width: 1024px) {
  .SearchMerchant_icon {
    width: 20px;
    height: 20px;
  }
}

.SearchMerchant_dot___bcfS {
  color: var(--text-secondary);
}

.SearchMerchant_cats {
  color: var(--text-secondary);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@supports (-webkit-line-clamp: 1) {
  .SearchMerchant_cats {
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
}

.SearchMerchant_carousel {
  align-items: stretch !important;
  gap: 16px !important;
  margin-top: 16px;
}

@media (max-width: 575px) {
  .SearchMerchant_carousel {
    gap: 8px !important;
  }
}

.SearchMerchant_carouselNavButton {
  display: none;
}

.SearchMerchant_closed__MVI__ {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  color: var(--text-invert-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row;
}

.SearchMerchant_card {
  background: var(--background-secondary);
}

.SearchMerchant_card .SearchMerchant_cardButton__xN_2S {
  background: var(--background-primary);
}

:root[lang="ar"] .SearchMerchant_icon {
  transform: scaleX(-1);
}

.Categories_wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  flex-wrap: wrap;
  gap: 8px;
}

@media (max-width: 1360px) {
  .Categories_wrapper {
    margin-left: var(--content-wrapper-side-padding-negative);
    margin-right: var(--content-wrapper-side-padding-negative);
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    scrollbar-width: none;
    flex-wrap: nowrap;
    white-space: nowrap;
  }

  .Categories_wrapper::-webkit-scrollbar {
    display: none;
  }
}

@media (max-width: 1360px) {
  .Categories_wrapper
    .Categories_categoryWrapper__3_FRF:first-of-type
    > .Categories_category {
    -webkit-margin-start: var(--content-wrapper-side-padding);
    margin-inline-start: var(--content-wrapper-side-padding);
  }

  .Categories_wrapper
    .Categories_categoryWrapper__3_FRF:last-of-type
    > .Categories_category {
    -webkit-margin-end: var(--content-wrapper-side-padding);
    margin-inline-end: var(--content-wrapper-side-padding);
  }
}

.Categories_category {
  padding: 12px 16px;
  border-radius: 14px;
  background: var(--control-secondary);
  cursor: pointer;
}

.Categories_category.Categories_active {
  background: var(--control-active);
  color: var(--constant-white);
}

.SearchResults_group > div {
  margin-bottom: 40px;
}

.SearchResultsCategories_wrapper {
  margin-top: 0;
  margin-bottom: 40px;
  padding-top: 0;
  padding-bottom: 0;
}

@media (max-width: 575px) {
  .SearchResultsCategories_wrapper {
    margin-bottom: 24px;
  }
}
</style>
