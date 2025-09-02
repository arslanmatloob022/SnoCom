<script lang="ts" setup>
import { ref } from "vue";

const subcategories = ref([
  {
    id: 1,
    name: "Mobiles",
    href: "/snoonu-market/electronics/mobiles",
    img: "https://images.snoonu.com/market_place_category/2025-4/d568238c-d133-4616-b274-1f57c6722bfa_Mobiles.png?format=webp",
    analytic: "654cc994b87014cfa2a34ebb",
  },
  {
    id: 2,
    name: "Accessories",
    href: "/snoonu-market/electronics/accessories",
    img: "https://images.snoonu.com/market_place_category/2025-4/ba1ddf54-4714-4466-82f2-4990eb08f996_accessories.png?format=webp",
    analytic: "654ccd58b87014cfa2a4df3d",
  },
  {
    id: 3,
    name: "Wearable Gadgets",
    href: "/snoonu-market/electronics/wearable-gadgets",
    img: "https://images.snoonu.com/market_place_category/2025-4/0629e2c7-5ecf-4c09-b630-693dd465b8c5_WearableGadgets.png?format=webp",
    analytic: "660be1db5b478f0f6af9ef93",
  },
  {
    id: 4,
    name: "Headphones",
    href: "/snoonu-market/electronics/headphones",
    img: "https://images.snoonu.com/market_place_category/2025-4/ff9457cf-5b6a-4722-a627-c81cc6eaeac0_Headphones.png?format=webp",
    analytic: "660be315bd10948afb57b1c7",
  },
  {
    id: 5,
    name: "Home Appliances",
    href: "/snoonu-market/electronics/home-appliances",
    img: "https://images.snoonu.com/market_place_category/2025-4/d919e5e0-f9e9-4451-afbc-e7b6267a3aa5_home_appliances.png?format=webp",
    analytic: "654ccd8227207b4528c30589",
  },
  {
    id: 6,
    name: "Home Entertainment",
    href: "/snoonu-market/electronics/tv-audio",
    img: "https://images.snoonu.com/market_place_category/2025-4/109450a1-78e6-4aac-ba22-09a0193af1d1_tvaudio.png?format=webp",
    analytic: "654cce3ad07d06acd407b8e6",
  },
  {
    id: 7,
    name: "Beauty & Grooming Devices",
    href: "/snoonu-market/electronics/health-beauty-devices",
    img: "https://images.snoonu.com/market_place_category/2025-4/edd742d6-e607-491d-a924-107e87c23221_beauty_devices.png?format=webp",
    analytic: "654ccdad27207b4528c32614",
  },
  {
    id: 8,
    name: "iPads & Tablets",
    href: "/snoonu-market/electronics/tablets",
    img: "https://images.snoonu.com/market_place_category/2025-4/573cfd96-5114-4deb-b067-8862333d1eb6_tablets.png?format=webp",
    analytic: "654ccc66da03c887ffeb32b9",
  },
  {
    id: 9,
    name: "Camera & Photo",
    href: "/snoonu-market/electronics/camera-photo",
    img: "https://images.snoonu.com/market_place_category/2025-4/d6db7333-2994-4a47-ac35-62406040cfbe_cameraphoto.png?format=webp",
    analytic: "654ccd32da03c887ffeb8187",
  },
  {
    id: 10,
    name: "Laptops and Computers",
    href: "/snoonu-market/electronics/laptops-and-computers",
    img: "https://images.snoonu.com/market_place_category/2025-4/7ba2a2f7-86f6-4b53-8f06-1a843f246c4f_laptopsandcomputers.png?format=webp",
    analytic: "654ccd06d07d06acd4072ff2",
  },

]);
</script>

<template>
  <div>
    <h1 class="Typography_h1 Title_title">Electronics</h1>

    <div class="Subcategories_wrapper">
      <div v-for="item in subcategories" :key="item.id">
        <a
          rel="noopener noreferrer"
          data-analytic-label="subcategory"
          :data-analytic-event-content="item.analytic"
          class="Subcategories_category"
          :href="item.href"
        >
          <div class="Subcategories_imageWrapper">
            <span
              style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"
            >
              <img
                :alt="item.name"
                decoding="async"
                data-nimg="fill"
                :src="item.img"
                style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover; object-position: center center;"
              />
            </span>
          </div>
          <h5 class="Typography_h5 Subcategories_label">
            {{ item.name }}
          </h5>
        </a>
      </div>
    </div>
  </div>
</template>

<style></style>
