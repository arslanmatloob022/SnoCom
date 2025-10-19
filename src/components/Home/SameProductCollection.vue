<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
const data = ref([
  {
    id: "678a4330bf75d44ad274afee",
    title: "Apple MacBook Air 13 M3 16 GB RAM 512 GB SSD - Midnight",
    price: "5,999 QR",
    rating: 3.4,
    ratingCount: 10,
    href: "/product/apple-macbook-air-13-m3-16-gb-ram-512-gb-ssd---midnight/678a4330bf75d44ad274afee",
    img: "https://images.snoonu.com/brand_product/2025-06/cfa29e7d-2812-4265-a8e6-489e0a55f05b_output.png?format=webp",
  },
  {
    id: "678a4435e71be014c462345f",
    title: "Apple MacBook Air 13 - Space Grey - 512GB - 13 Inch - 16GB",
    price: "5,999 QR",
    rating: 2.4,
    ratingCount: 45,
    href: "/product/apple-macbook-air-13---space-grey---512gb---13-inch---16gb/678a4435e71be014c462345f",
    img: "https://images.snoonu.com/brand_product/2025-01/72e00afe-7ffa-48d8-932e-7dee2b6d6411_output.png?format=webp",
  },
  {
    id: "678a4330bf75d44ad274afee",
    title: "Apple MacBook Air 13 M3 16 GB RAM 512 GB SSD - Midnight",
    price: "5,999 QR",
    rating: 3.4,
    ratingCount: 10,
    href: "/product/apple-macbook-air-13-m3-16-gb-ram-512-gb-ssd---midnight/678a4330bf75d44ad274afee",
    img: "https://images.snoonu.com/brand_product/2025-06/cfa29e7d-2812-4265-a8e6-489e0a55f05b_output.png?format=webp",
  },
  {
    id: "678a4435e71be014c462345f",
    title: "Apple MacBook Air 13 - Space Grey - 512GB - 13 Inch - 16GB",
    price: "5,999 QR",
    rating: 2.4,
    ratingCount: 45,
    href: "/product/apple-macbook-air-13---space-grey---512gb---13-inch---16gb/678a4435e71be014c462345f",
    img: "https://images.snoonu.com/brand_product/2025-01/72e00afe-7ffa-48d8-932e-7dee2b6d6411_output.png?format=webp",
  },
  {
    id: "678a4330bf75d44ad274afee",
    title: "Apple MacBook Air 13 M3 16 GB RAM 512 GB SSD - Midnight",
    price: "5,999 QR",
    rating: 3.4,
    ratingCount: 10,
    href: "/product/apple-macbook-air-13-m3-16-gb-ram-512-gb-ssd---midnight/678a4330bf75d44ad274afee",
    img: "https://images.snoonu.com/brand_product/2025-06/cfa29e7d-2812-4265-a8e6-489e0a55f05b_output.png?format=webp",
  },
  {
    id: "678a4435e71be014c462345f",
    title: "Apple MacBook Air 13 - Space Grey - 512GB - 13 Inch - 16GB",
    price: "5,999 QR",
    rating: 2.4,
    ratingCount: 45,
    href: "/product/apple-macbook-air-13---space-grey---512gb---13-inch---16gb/678a4435e71be014c462345f",
    img: "https://images.snoonu.com/brand_product/2025-01/72e00afe-7ffa-48d8-932e-7dee2b6d6411_output.png?format=webp",
  },
  {
    id: "678a4330bf75d44ad274afee",
    title: "Apple MacBook Air 13 M3 16 GB RAM 512 GB SSD - Midnight",
    price: "5,999 QR",
    rating: 3.4,
    ratingCount: 10,
    href: "/product/apple-macbook-air-13-m3-16-gb-ram-512-gb-ssd---midnight/678a4330bf75d44ad274afee",
    img: "https://images.snoonu.com/brand_product/2025-06/cfa29e7d-2812-4265-a8e6-489e0a55f05b_output.png?format=webp",
  },
  {
    id: "678a4435e71be014c462345f",
    title: "Apple MacBook Air 13 - Space Grey - 512GB - 13 Inch - 16GB",
    price: "5,999 QR",
    rating: 2.4,
    ratingCount: 45,
    href: "/product/apple-macbook-air-13---space-grey---512gb---13-inch---16gb/678a4435e71be014c462345f",
    img: "https://images.snoonu.com/brand_product/2025-01/72e00afe-7ffa-48d8-932e-7dee2b6d6411_output.png?format=webp",
  },
  {
    id: "678a4330bf75d44ad274afee",
    title: "Apple MacBook Air 13 M3 16 GB RAM 512 GB SSD - Midnight",
    price: "5,999 QR",
    rating: 3.4,
    ratingCount: 10,
    href: "/product/apple-macbook-air-13-m3-16-gb-ram-512-gb-ssd---midnight/678a4330bf75d44ad274afee",
    img: "https://images.snoonu.com/brand_product/2025-06/cfa29e7d-2812-4265-a8e6-489e0a55f05b_output.png?format=webp",
  },
  {
    id: "678a4435e71be014c462345f",
    title: "Apple MacBook Air 13 - Space Grey - 512GB - 13 Inch - 16GB",
    price: "5,999 QR",
    rating: 2.4,
    ratingCount: 45,
    href: "/product/apple-macbook-air-13---space-grey---512gb---13-inch---16gb/678a4435e71be014c462345f",
    img: "https://images.snoonu.com/brand_product/2025-01/72e00afe-7ffa-48d8-932e-7dee2b6d6411_output.png?format=webp",
  },
]);
</script>

<template>
  <div
    class="FeedContent_productList FeedContent_fullWidth"
    style="background-color: rgb(255, 238, 230); max-width: 100%"
  >
    <!-- Header -->
    <div
      class="ProductList_header___Cxqp"
      style="color: rgb(140, 12, 0); margin-top: 0px"
    >
      <h2 class="Typography_h2 ProductList_title mt-0">
        Back to School Essentials
      </h2>
      <a href="/selections/tablet-zone" rel="noopener noreferrer">
        <button
          class="Button_button Button_secondary Button_small SeeAll_button"
        >
          <span class="Button_content">See all</span>
        </button>
      </a>
    </div>

    <!-- Swiper Carousel -->
    <Swiper
      :modules="[Navigation, Pagination]"
      :slides-per-view="6.2"
      :space-between="20"
      navigation
      pagination
      :breakpoints="{
        320: { slidesPerView: 2.2, spaceBetween: 10 },
        640: { slidesPerView: 2.2, spaceBetween: 15 },
        1024: { slidesPerView: 6.2, spaceBetween: 20 },
        1440: { slidesPerView: 7.2, spaceBetween: 24 },
      }"
      :centered-slides="false"
      :centered-slides-bounds="true"
    >
      <SwiperSlide v-for="product in data" :key="product.id">
        <a :href="product.href" target="_blank" class="productCard">
          <div class="ProductsCarousel_card">
            <div class="ProductCardMarketplace_imageWrapper">
              <div class="ProductImage_wrapper ProductsCarousel_image___oKiz">
                <img
                  :alt="product.title"
                  :src="product.img"
                  class="w-full object-cover rounded-lg"
                />
              </div>
              <!-- plus button -->
              <button
                class="ProductCounter_button ProductCounter_wrapper__yiOb_ ProductCounter_plusWrapper"
              >
                <i class="fa fa-plus text-gray-500"></i>
              </button>
              <!-- heart icon -->
              <div class="HeartIcon_wrapper ProductCardMarketplace_favourite">
                <i class="fa fa-heart text-gray-500"></i>
              </div>
            </div>

            <div class="ProductInfo_wrapper p-2">
              <div class="ProductPrice_prices">
                <p class="Typography_p4">{{ product.price }}</p>
              </div>
              <p class="Typography_p14__r_99o ProductInfo_label">
                {{ product.title }}
              </p>

              <!-- Ratings -->
              <div
                v-if="product.rating"
                class="flex items-center space-x-2 mt-1"
              >
                <p class="text-sm font-medium text-gray-600">
                  {{ product.rating }}
                </p>
                <div class="flex space-x-1">
                  <span
                    v-for="n in 5"
                    :key="n"
                    class="text-sm"
                    :class="
                      n <= Math.round(product.rating)
                        ? 'text-yellow-400'
                        : 'text-gray-300'
                    "
                  >
                    <i class="fa fa-star"></i>
                  </span>
                </div>
                <p class="text-xs text-gray-500">({{ product.ratingCount }})</p>
              </div>
            </div>
          </div>
        </a>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
:deep(.swiper-pagination) {
  display: none !important;
}
/* Make arrows smaller and circular with white background */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  /* circle size */
  width: 50px;
  height: 50px;
  border-radius: 9999px;
  top: 30%;
  /* look & feel */
  background: #ffffff;
  color: #6b7280; /* gray-500 */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  border: 1px solid #f1f5f9; /* subtle border */

  /* center the icon */
  display: flex;
  align-items: center;
  justify-content: center;

  /* keep them above images */
  z-index: 10;

  /* shrink icon size */
  --swiper-navigation-size: 16px; /* default is 44px */
}

/* Use text color for the pseudo icon */
:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  font-weight: 700;
  color: inherit;
}

/* Hover/active states */
:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  color: #4b5563; /* gray-600 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
}

/* Disabled state */
:deep(.swiper-button-disabled) {
  background-color: #f1f5f9ab;
  /* cursor: default; */
  box-shadow: none;
  cursor: not-allowed !important;
}

/* Optional: adjust position a bit inward from edges */
:deep(.swiper-button-prev) {
  left: 0px;
}
:deep(.swiper-button-next) {
  right: 0px;
}

/* Smaller on small screens */
@media (max-width: 640px) {
  :deep(.swiper-button-next),
  :deep(.swiper-button-prev) {
    width: 30px;
    height: 30px;
    --swiper-navigation-size: 14px;
  }
}
</style>
