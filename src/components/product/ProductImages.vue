<script lang="ts" setup>
import { ref } from "vue";
const emit = defineEmits(["close"]);

const images = [
    "https://images.snoonu.com/brand_product/2025-04/6615518d-1ab1-4bb0-b25b-d83ccb7a1dce_output.png",
    "https://images.snoonu.com/brand_product/2025-04/43592198-dbce-4cc3-9b7b-7c1d0bd015df_output.png",
    "https://images.snoonu.com/brand_product/2025-04/736d78bc-5096-4a03-b4a9-7e1ec1975242_output.png",
];

const currentIndex = ref(0);

const next = () => {
    currentIndex.value = (currentIndex.value + 1) % images.length;
};

const prev = () => {
    currentIndex.value =
        (currentIndex.value - 1 + images.length) % images.length;
};



const closeModal = () => {
  emit("close");
};
</script>

<template>
 <div style="display: block;">

       <div class="FullModal_fullModal__Zeus_">
        <div class="FullModal_modalContent">
            <div class="GalleryImagesModal_wrapper">
                <!-- Thumbnails -->
                <div class="GalleryCarousel_carousel " >
                    <div v-for="(img, index) in images" :key="index" class="GalleryCarousel_galleryImage"
                        :class="{ GalleryCarousel_activeImage: index === currentIndex }" @click="currentIndex = index">
                        <img :src="img" alt="" />
                    </div>

                    <!-- <div class="GalleryCarousel_galleryImage"><span
                            style="box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;"><span
                                style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;"><img
                                    alt="" aria-hidden="true"
                                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27156%27%20height=%27156%27/%3e"
                                    style="display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;"></span><img
                                alt="" decoding="async" data-nimg="intrinsic"
                                src="https://images.snoonu.com/brand_product/2025-04/6615518d-1ab1-4bb0-b25b-d83ccb7a1dce_output.png"
                                style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover; object-position: center center;"></span>
                    </div> -->
                </div>

                <!-- Main Image Slider -->
                <div class="keen-slider" style="min-width:auto !important; min-height: auto !important;" >
                    <div class="keen-slider">
                        <div class="GalleryImagesModal_imageWrapper">
                            <img :src="images[currentIndex]" :alt="`Image ${currentIndex + 1}`" />
                        </div>
                    </div>

                    <!-- Navigation Arrows -->
                    <div class="SliderNavigators_navigator SliderNavigators_left" @click="prev">
                        <span class="Icon_iconWrapper">
                            <i class="fas fa-chevron-left text-xl text-gray-700"></i>

                        </span>
                    </div>
                    <div class="SliderNavigators_navigator SliderNavigators_right" @click="next">
                        <span class="Icon_iconWrapper">
                            <i class="fas fa-chevron-right text-xl text-gray-700"></i>
                        </span>
                    </div>
                </div>
            </div>

            <!-- Close Button -->
           <span class="Icon_iconWrapper FullModal_cross__0xs_j" @click="closeModal">
    <i class="fas fa-times-circle text-xl text-gray-300 " style="font-size: 28px;"></i>
    
  </span>
        </div>
    </div>

 </div>
</template>

<style scoped>
 @media (max-width: 1080px) {
    .GalleryImagesModal_wrapper {
        display: flex
;
        flex-direction: column-reverse;
        justify-content: space-between;
    }
    .SliderNavigators_navigator{
        display: none;
    ;
    }
    .GalleryCarousel_carousel{

        display: flex;
        height: 200px;
        flex-direction: row;
        align-items: end;
        justify-content:center;
        width: 100%;
        overflow-x: auto;
        overflow-y: hidden;
    }
   
   
}

</style>
