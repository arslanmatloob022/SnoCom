<script lang="ts" setup>
import { ref } from "vue"
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Pagination } from "swiper/modules"
const brands = ref([
  {
    id: 1,
    name: "By Snoonu",
    href: "/electronics/tech-deals",
    img: "https://images.snoonu.com/brand/2024-08/bddecfe7-045a-461f-a1fa-40726ac348c7_output.png?format=webp",
    time: "34 mins",
    analytic: "tech-deals",
  },
  {
    id: 2,
    name: "Falta Electronics",
    href: "/electronics/falta-electronics",
    img: "https://images.snoonu.com/brand/2025-08/d080cd94-2904-4452-900c-647a4ddd3f40_output.png?format=webp",
    time: "25 mins",
    analytic: "falta-electronics",
  },
  {
    id: 3,
    name: "Nology Store",
    href: "/electronics/nology-store",
    img: "https://images.snoonu.com/brand/2024-06/d4b389f5-255f-4ef8-bf42-ea79b7acde9c_output.png?format=webp",
    time: "22 mins",
    analytic: "nology-store",
  },
  {
    id: 4,
    name: "Go Aiwa Store",
    href: "/electronics/go-aiwa-store",
    img: "https://images.snoonu.com/brand/2025-07/4887c0ab-da11-420e-b52e-7d726a8765ca_output.png?format=webp",
    time: "19 mins",
    analytic: "go-aiwa-store",
  },
  {
    id: 5,
    name: "Al Atfayn Mobile Store",
    href: "/electronics/al-atfayn",
    img: "https://images.snoonu.com/brand/2025-01/3613c0c8-3dce-4d2d-a9c0-f79f97e99ef7_output.png?format=webp",
    time: "31 mins",
    analytic: "al-atfayn",
  },
  {
    id: 6,
    name: "Wasel Store",
    href: "/electronics/wasel-store",
    img: "https://images.snoonu.com/brand/2025-07/a37a7f70-3f3f-4363-9d89-4375d10dc1e8_output.png?format=webp",
    time: "31 mins",
    analytic: "wasel-store",
  },
  {
    id: 7,
    name: "Q Star",
    href: "/electronics/q-star-mobile-and-accessories",
    img: "https://images.snoonu.com/brand/2025-04/8a53ffb1-ab00-4d8a-85da-b706c2d0e940_output.png?format=webp",
    time: "25 mins",
    analytic: "q-star-mobile-and-accessories",
  },
  {
    id: 8,
    name: "Jawda Tech Electronics",
    href: "/electronics/jawda-top-trading",
    img: "https://images.snoonu.com/brand/2024-08/5ef5f2c3-fa11-4baf-b041-2ace8e4a1b42_output.png?format=webp",
    time: "28 mins",
    analytic: "jawda-top-trading",
  },
  {
    id: 9,
    name: "Al Ata Shoppy Electronics",
    href: "/electronics/al-ata-shoppy-electronics",
    img: "https://images.snoonu.com/brand/2024-12/aee2cc68-685e-414d-bf95-8e4488fad5f3_output.png?format=webp",
    time: "22 mins",
    analytic: "al-ata-shoppy-electronics",
  },
  {
    id: 10,
    name: "Al Esteshari Mobiles",
    href: "/electronics/al-esteshari-mobiles",
    img: "https://images.snoonu.com/brand/2025-07/b301ac76-e377-4aea-b09b-5d49865ddabd_output.png?format=webp",
    time: "25 mins",
    analytic: "al-esteshari-mobiles",
  },
  {
    id: 11,
    name: "Garey Store",
    href: "/electronics/garey-store",
    img: "https://images.snoonu.com/brand/2024-06/672d2e61-1c33-49ed-9050-59e0c7db126c_output.png?format=webp",
    time: "25 mins",
    analytic: "garey-store",
  },
  {
    id: 1,
    name: "Raising Cane's",
    href: "/restaurants/raising-canes",
    img: "https://images.snoonu.com/brand/2024-11/5578fa87-d70c-4ad3-acba-fc92fbb0ffa1_output.png?format=webp",
    time: "38 mins",
    analytic: "raising-canes",
  },
  {
    id: 2,
    name: "PRYM",
    href: "/restaurants/prym",
    img: "https://images.snoonu.com/brand/2025-08/75de6093-d50d-4f6c-b315-09ff1f2a796c_output.png?format=webp",
    time: "59 mins",
    analytic: "prym",
  },
  {
    id: 3,
    name: "181",
    href: "/restaurants/181",
    img: "https://images.snoonu.com/brand/header_image/2023-06/o6iJA8Wiuy.png?format=webp",
    time: "41 mins",
    analytic: "181",
  }
])
</script>

<template>
  <div>
    <h2 class="Typography_h2">{{ t('navigation.brands') }}</h2>
    <div class="Carousel_wrapper">
      <div class="Carousel_navButtonWrapper__gL_66"></div>

      <div class="Carousel_carousel">
        <Swiper :modules="[Navigation, Pagination]" :slides-per-view="6.2" :space-between="20" navigation pagination
          :breakpoints="{
            320: { slidesPerView: 2.2, spaceBetween: 10 },
            640: { slidesPerView: 4.2, spaceBetween: 15 },
            1024: { slidesPerView: 7.4, spaceBetween: 20 },
            1440: { slidesPerView: 10.4, spaceBetween: 24 }
          }" :centered-slides="false" :centered-slides-bounds="true">
          <SwiperSlide v-for="brand in brands" :key="brand.id">
            <a rel="noopener noreferrer" data-analytic-label="favouriteBrand"
              :data-analytic-event-content="brand.analytic" :href="brand.href">
              <div class="BrandCard_brand">
                <div class="BrandCard_imgWrap">
                  <span
                    style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;">
                    <img :alt="brand.name" decoding="async" data-nimg="fill" :src="brand.img"
                      style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover; object-position: center center;" />
                    <noscript></noscript>
                  </span>
                </div>
                <h5 class="Typography_h5 BrandCard_title">{{ brand.name }}</h5>
                <p class="Typography_p8 BrandCard_label">{{ brand.time }}</p>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>

      <div class="Carousel_navButtonWrapper__gL_66"></div>
    </div>
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
  color: #6b7280;
  /* gray-500 */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  border: 1px solid #f1f5f9;
  /* subtle border */

  /* center the icon */
  display: flex;
  align-items: center;
  justify-content: center;

  /* keep them above images */
  z-index: 10;

  /* shrink icon size */
  --swiper-navigation-size: 16px;
  /* default is 44px */
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
  color: #4b5563;
  /* gray-600 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
}

/* Disabled state */
:deep(.swiper-button-disabled) {

  background-color: #f1f5f9ab;
  /* cursor: default; */
  display: none;
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
