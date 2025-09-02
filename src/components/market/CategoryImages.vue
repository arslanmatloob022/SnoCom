<script lang="ts" setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Navigation, Pagination } from "swiper/modules"
const banners = ref([
    {
        id: 1,
        name: "Back to School - Electronics",
        href: "/selections/2047?byId=1",
        img: "https://images.snoonu.com/banner/2025-08/bebececc-0f61-4c3e-96a5-c04d1fc35542_output.png?format=webp",
    },
    {
        id: 2,
        name: "Apple Mania",
        href: "/selections/2073?byId=1",
        img: "https://images.snoonu.com/banner/2025-08/d4a8403d-d0d7-443d-acb8-e5ec2e6e741b_output.png?format=webp",
    },
    {
        id: 3,
        name: "Chill Your Way",
        href: "/selections/1998?byId=1",
        img: "https://images.snoonu.com/banner/2025-08/c3ba238d-ccbc-45bd-a965-cb0aa66828c2_output.png?format=webp",
    },
    {
        id: 4,
        name: "Smarter Fitness - Whoop",
        href: "/selections/2051?byId=1",
        img: "https://images.snoonu.com/banner/2025-08/ccf0e332-767a-4df0-adc9-be8cfa4e1f8f_output.png?format=webp",
    },
        {
        id: 5,
        name: "Back to School - Electronics",
        href: "/selections/2047?byId=1",
        img: "https://images.snoonu.com/banner/2025-08/bebececc-0f61-4c3e-96a5-c04d1fc35542_output.png?format=webp",
    },
    {
        id: 6,
        name: "Apple Mania",
        href: "/selections/2073?byId=1",
        img: "https://images.snoonu.com/banner/2025-08/d4a8403d-d0d7-443d-acb8-e5ec2e6e741b_output.png?format=webp",
    },
    {
        id: 7,
        name: "Chill Your Way",
        href: "/selections/1998?byId=1",
        img: "https://images.snoonu.com/banner/2025-08/c3ba238d-ccbc-45bd-a965-cb0aa66828c2_output.png?format=webp",
    },
    {
        id: 8,
        name: "Smarter Fitness - Whoop",
        href: "/selections/2051?byId=1",
        img: "https://images.snoonu.com/banner/2025-08/ccf0e332-767a-4df0-adc9-be8cfa4e1f8f_output.png?format=webp",
    },
   
]);

// carousel state
const currentIndex = ref(0);

</script>

<template>
    <div class="Carousel_wrapper">
        <!-- Prev Button -->
        <!-- <div class="Carousel_navButtonWrapper__gL_66">
      <div
        data-analytic-label="carouselButtonPrev"
        data-analytic-event-content="homeBanners"
        class="NavButton_wrapper NavButton_prev"
        @click="prevSlide"
      >
        ◀
      </div>
    </div> -->

        <!-- Carousel -->


        <div class="Carousel_carousel TimedBannerList_wrapper MarketPlaceBlocks_banners">


            <Swiper :modules="[Navigation, Pagination]" :slides-per-view="6.2" :space-between="20" navigation pagination
                :breakpoints="{
                    320: { slidesPerView: 1.2, spaceBetween: 10 },
                    640: { slidesPerView: 2.2, spaceBetween: 15 },
                    1024: { slidesPerView: 2.8, spaceBetween: 20 },
                    1440: { slidesPerView: 3.8, spaceBetween: 24 }
                }" :centered-slides="false" :centered-slides-bounds="true">
                <SwiperSlide v-for="banner in banners" :key="banner.id">
                    <a :key="banner.id" :href="banner.href">
                        <div class="Banner_imageWrapper">
                            <img :alt="banner.alt" decoding="async"
                                :src="banner.img || 'https://via.placeholder.com/600x200?text=Banner+Not+Available'"
                                style="object-fit: cover; object-position: center center;" />
                        </div>
                    </a>
                </SwiperSlide>
            </Swiper>

        </div>

        <!-- Next Button -->
        <!-- <div class="Carousel_navButtonWrapper__gL_66">
      <div
        data-analytic-label="carouselButtonNext"
        data-analytic-event-content="homeBanners"
        class="NavButton_wrapper NavButton_next__x_uZ2"
        @click="nextSlide"
      >
        ▶
      </div>
    </div> -->
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
    display: none;
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

.TimedBannerList_wrapper {
    margin-top: 86px;
    margin-bottom: 86px
}

@media(max-width:1024px) {
    .TimedBannerList_wrapper {
        margin-top: 48px;
        margin-bottom: 48px
    }
}

@media(max-width:575px) {
    .TimedBannerList_wrapper {
        display: none
    }
}



.MarketPlaceBlocks_banners {
    margin-top: 56px;
    margin-bottom: 56px
}

@media(max-width:1024px) {
    .MarketPlaceBlocks_banners {
        margin-top: 48px;
        margin-bottom: 48px
    }
}

@media(max-width:575px) {
    .MarketPlaceBlocks_banners {
        margin-top: 32px;
        margin-bottom: 32px
    }
}


.Banner_imageWrapper {
    width: 392px;
    height: 153px;
    position: relative;
    border-radius: 40px;
    overflow: hidden
}

@media(max-width:1360px) {
    .Banner_imageWrapper {
        width: 352px;
        height: 137px;
        border-radius: 32px
    }
}

@media(max-width:575px) {
    .Banner_imageWrapper {
        width: 336px;
        height: 131px
    }
}

.Banner_imageWrapper.Banner_fullWidth {
    width: 100%;
    height: 100%;
    border-radius: 0
}
</style>