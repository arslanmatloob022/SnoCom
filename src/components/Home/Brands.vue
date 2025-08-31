<script lang="ts" setup>
import { ref } from "vue"

const brands = ref([
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
    <h2 class="Typography_h2">Favourite Brands</h2>
    <div class="Carousel_wrapper">
      <div class="Carousel_navButtonWrapper__gL_66"></div>

      <div class="Carousel_carousel">
        <div v-for="brand in brands" :key="brand.id">
          <a
            rel="noopener noreferrer"
            data-analytic-label="favouriteBrand"
            :data-analytic-event-content="brand.analytic"
            :href="brand.href"
          >
            <div class="BrandCard_brand">
              <div class="BrandCard_imgWrap">
                <span
                  style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"
                >
                  <img
                    :alt="brand.name"
                    decoding="async"
                    data-nimg="fill"
                    :src="brand.img"
                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover; object-position: center center;"
                  />
                  <noscript></noscript>
                </span>
              </div>
              <h5 class="Typography_h5 BrandCard_title">{{ brand.name }}</h5>
              <p class="Typography_p8 BrandCard_label">{{ brand.time }}</p>
            </div>
          </a>
        </div>
      </div>

      <div class="Carousel_navButtonWrapper__gL_66"></div>
    </div>
  </div>
</template>
