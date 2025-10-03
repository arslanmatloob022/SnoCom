<script lang="ts" setup>
import BreadCrum from '../support/BreadCrum.vue';


const showImages = ref(false);
interface ProductOption {
    id: string;
    name: string;
    price?: string;
}

interface Product {
    title: string;
    rating: number;
    ratingCount: number;
    price: string;
    optionsLabel: string;
    selectedOption: string;
    options: ProductOption[];
    description: string;
}

const product = ref<Product>({
    title: "New Mini Smartphone",
    rating: 3.9,
    ratingCount: 12,
    price: "280 QR",
    optionsLabel: "Your Choice Of Color",
    selectedOption: "Blue",
    options: [
        { id: "6686f57fee1acec3f0a980f2", name: "Pink" },
        { id: "6686f57fee1acec3f0a980f3", name: "Blue" },
        { id: "67194b4ee77646ff8bbcd67b", name: "Titanium" },
    ],
    description: `
    Main Category: Electronics  
    Sub Category: Mini Phones  

    ‣ Soyes introduces the sleek and compact Xs13 Android mini phone.  
    ‣ It boasts a 1GB RAM and 8GB ROM for storage.  
    ‣ Featuring a 2.5-inch HD screen with a 240x432 pixel resolution.  
    ‣ Powered by a quad-core MTK6580 processor running Android 6.0.  
    ‣ Equipped with a 1580mAh battery for lasting performance.  
    ‣ The phone sports a 5.0MP rear camera and a 0.3MP front camera.  
    ‣ Dual SIM card support for added convenience.
  `,
});

const selectOption = (option: string) => {
    product.value.selectedOption = option;
};
const closeImages = () => {
    showImages.value = false;
};

const images = [
  "https://images.snoonu.com/brand_product/2025-04/6615518d-1ab1-4bb0-b25b-d83ccb7a1dce_output.png",
  "https://images.snoonu.com/brand_product/2025-04/43592198-dbce-4cc3-9b7b-7c1d0bd015df_output.png",
  "https://images.snoonu.com/brand_product/2025-04/736d78bc-5096-4a03-b4a9-7e1ec1975242_output.png",
];

const activeIndex = ref(0);

const setActive = (index: number) => {
  activeIndex.value = index;
};
</script>


<template>
    <ProductImages v-if="showImages" @close="closeImages" />



    <div class="ProductDetail_wrapper">
        <div class="Gallery_wrapper">
            
<div class="ProductSlider_wrapper">
    <!-- Main Image -->
    <div class="keen-slider flex justify-center">
   <div
    class="keen-slider relative overflow-hidden"
    style="min-width:400px; max-width:400px;"
  >
    <transition
      name="slide"
      mode="out-in"
    >
      <div
        :key="activeIndex"
        class="ProductSlider_imageWrapper Gallery_image relative w-full h-[400px]"
      >
        <img
        @click="()=>{showImages = true}"
          :alt="`Product Image ${activeIndex + 1}`"
          :src="images[activeIndex]"
          class="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </transition>
  </div>
    </div>

    <!-- Thumbnails -->
    <div class="ProductSlider_gallery flex gap-2 mt-4">
      <div
        v-for="(thumb, index) in images"
        :key="index"
        data-test-id="slider-preview-images"
        class="ProductSlider_galleryImage cursor-pointer"
        :class="{ ProductSlider_activeImage: activeIndex === index }"
        @click="setActive(index)"
      >
        <img
        
          :src="thumb"
          class="w-20  object-cover border rounded-md"
          :alt="`Thumbnail ${index + 1}`"
        />
      </div>
    </div>
  </div>
        </div>
        <div class="MainInfo_wrapper">
            <div class="Tags_wrapper"></div>

            <!-- Title -->
            <h1 class="Title_h3 MainInfo_title">{{ product.title }}</h1>

            <!-- Rating -->
            <div class="RatingInfo_wrapper">
                <p class="Typography_p10">{{ product.rating }}</p>
                <div class="SimpleStarRating_wrapper">
                    ⭐️⭐️⭐️⭐️☆ <!-- You can make this dynamic later -->
                </div>
                <p class="Typography_p8 RatingInfo_ratingCount">
                    {{ product.ratingCount }}
                </p>
            </div>

            <!-- Price -->
            <div class="PriceMobile_price">
                <h5 class="Typography_h5 PriceMobile_unLoggedInPrice">
                    {{ product.price }}
                </h5>
            </div>

            <!-- Options -->
            <form class="Additional_wrapper">
                <div class="Additional_addon___R9kj">
                    <div class="AdditionalChipGroup_desc">
                        <p class="Typography_p6 AdditionalChipGroup_name">
                            {{ product.optionsLabel }}:
                        </p>
                        <p class="Typography_p6">{{ product.selectedOption }}</p>
                    </div>

                    <div class="AdditionalChipGroup_group" role="radiogroup">
                        <div v-for="option in product.options" :key="option.id" class="Chip_wrapper___tdyO">
                            <input :id="option.id" class="Chip_input" type="radio" :name="product.optionsLabel"
                                :value="option.name" :checked="product.selectedOption === option.name"
                                @change="selectOption(option.name)" />
                            <label :for="option.id" class="Chip_label AdditionalChipGroup_chip__KWdD_"
                                :class="{ Chip_selected: product.selectedOption === option.name }">
                                <p class="Typography_p6 AdditionalChipGroup_optionName">
                                    {{ option.name }}
                                </p>
                                <p class="Typography_p11 AdditionalChipGroup_price">
                                    {{ option.price || '' }}
                                </p>
                            </label>
                        </div>
                    </div>
                </div>
            </form>

            <!-- Description -->
            <div class="Description_wrapper MainInfo_description">
                <div>
                    <p class="Typography_p7 whitespace-pre-line">
                        {{ product.description }}
                    </p>
                </div>
            </div>
        </div>
        <div class="AddToCart_wrapper__kiYu_">
            <div class="DiscountInfoBox_container">
                <div class="text">
                    <p class="Typography_p5 DiscountInfoBox_deal">You're missing a deal</p>
                    <p class="Typography_p8 DiscountInfoBox_discount">Log in to see the discount</p>
                </div>
                <div class="image"><span data-test-id="" class="Icon_iconWrapper">
                        <div class="bg-red-600 rounded-full p-2 inline-flex items-center justify-center">
                            <i class="fas fa-percent text-white text-sm"></i>
                        </div>


                    </span></div>
            </div>
            <div class="AddToCart_header">
                <div class="AddToCart_price">
                    <div class="Price_price__z_kVp">
                        <h3 class="Typography_h3">280 QR</h3>
                    </div>
                    <div class="HeartIcon_wrapper HeartIcon_heartInActive AddToCart_favourite__w_QC_"
                        data-test-id="favouriteHearIcon"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.5371 3.90095C16.5608 2.99223 15.2742 2.4911 13.9406 2.50012C12.3935 2.50012 11.0939 3.14095 9.9975 4.45262C8.90113 3.14095 7.60149 2.50012 6.05441 2.50012C4.72083 2.4911 3.43421 2.99223 2.45789 3.90095C1.39568 4.90095 0.833333 6.26762 0.833333 7.85845C0.833333 9.82679 1.87055 11.8451 3.83252 13.6968C5.37126 15.1493 7.47652 16.4776 9.60844 17.341L10 17.5001L10.3916 17.341C12.5235 16.4776 14.6287 15.1493 16.1675 13.6968C18.1269 11.8451 19.1667 9.82679 19.1667 7.85845C19.1617 6.26762 18.5993 4.89929 17.5371 3.90095ZM9.9975 15.2676C6.41514 13.7093 2.9161 10.7368 2.9161 7.85845C2.9161 5.59345 4.54232 4.56179 6.05274 4.56179C8.01971 4.56179 9.08775 6.00012 9.99334 7.76679V7.76012L9.9975 7.76679C10.9056 6.00262 11.9711 4.56179 13.9364 4.56179C15.4468 4.56179 17.0731 5.59345 17.0731 7.85845C17.0772 10.7368 13.579 13.7093 9.9975 15.2676Z"
                                fill="black"></path>
                        </svg></div>
                </div>
                <div class="AddToCart_actions"><button class="Button_button Button_primary Button_wide"
                        data-test-id="addToCart" data-analytic-label="addToCart" form="additionalForm"><span
                            class="Button_content">Add to
                            Cart</span></button><button
                        class="Button_button Button_primary Button_wide AddToCart_buyNow" data-test-id="buyNow"
                        data-analytic-label="buyNow"><span class="Button_content">Buy
                            Now</span></button></div>
            </div>
            <div class="AddToCart_description">
                <p class="Typography_p6 AddToCart_delivery">Delivery by Snoonu</p>
                <p class="Typography_p6">Delivery at 8:30 pm</p>
                <div class="AddToCart_merchant"><span data-test-id="" class="Icon_iconWrapper AddToCart_icon"><svg
                            width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M12.944 1.333H3.056c-.375 0-.717.2-.886.518L.518 4.964a1.565 1.565 0 0 0 .104 1.642c.679.97 2.177.97 2.856 0l.27-.384a.353.353 0 0 1 .57 0l.048.067c.785 1.12 2.516 1.12 3.3 0l.048-.067a.353.353 0 0 1 .572 0l.047.067c.785 1.12 2.516 1.12 3.3 0l.048-.067a.353.353 0 0 1 .571 0l.27.384c.68.97 2.177.97 2.856 0 .344-.49.383-1.117.104-1.642L13.83 1.851a.998.998 0 0 0-.886-.518ZM1.74 8.602c0-.08.071-.143.152-.135a3.722 3.722 0 0 0 2.099-.416.373.373 0 0 1 .35 0 3.725 3.725 0 0 0 3.483 0 .373.373 0 0 1 .35 0 3.725 3.725 0 0 0 3.484 0 .373.373 0 0 1 .349 0 3.723 3.723 0 0 0 2.242.4.138.138 0 0 1 .158.134v4.056c0 1.122-.873 2.031-1.95 2.031H3.69c-1.077 0-1.949-.91-1.949-2.031v-4.04Z"
                                fill="#B4B4B4"></path>
                        </svg></span><a rel="noopener noreferrer" data-analytic-label="merchantLink"
                        class="AddToCart_merchantLink" href="/electronics">
                        <p class="Typography_p6 AddToCart_merchantName">Jawda Tech Electronics</p>
                    </a></div>
            </div>
            <div class="Description_wrapper AddToCart_descriptionMobile">
                <div>
                    <p class="Typography_p7">Main Category: Electronics
                        Sub Category: Mini Phones

                        ‣ Soyes introduces the sleek and compact Xs13 Android mini phone.

                        ‣ It boasts a 1GB RAM and 8GB ROM for storage.

                        ‣ Featuring a 2.5-inch HD screen with a 240x432 pixel resolution.

                        ‣ Powered by a quad-core MTK6580 processor running Android 6.0.

                        ‣ Equipped with a 1580mAh battery for lasting performance.

                        ‣ The phone sports a 5.0MP rear camera and a 0.3MP front camera.

                        ‣ Dual SIM card support for added convenience.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
  
}

.slide-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-enter-to {
  transform: translateX(0);
  opacity: 1;
}

.slide-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}


.HeartIcon_wrapper {
    cursor: pointer
}

.HeartIcon_heartActive svg {
    animation: HeartIcon_heartAnimationActive .5s
}

.HeartIcon_heartInActive svg {
    animation: HeartIcon_heartAnimationInActive .5s
}

@keyframes HeartIcon_heartAnimationActive {
    0% {
        transform: scale(1)
    }

    50% {
        transform: scale(.7)
    }

    to {
        transform: scale(1)
    }
}

@keyframes HeartIcon_heartAnimationInActive {
    0% {
        transform: scale(1)
    }

    50% {
        transform: scale(.7)
    }

    to {
        transform: scale(1)
    }
}

.FavouriteProductIcon_notification__qOLE_ {
    width: 336px
}

@media(max-width: 1024px) {
    .FavouriteProductIcon_notification__qOLE_ {
        width:100%
    }
}

.FavouriteProductIcon_seeAll {
    color: var(--text-invert-primary)
}

.Description_wrapper {
    margin-top: 20px;
    text-align: initial;
    max-width: 600px;
    order: 6
}

@media(max-width: 1360px) {
    .Description_wrapper {
        max-width:none
    }
}

@media(max-width: 1024px) {
    .Description_wrapper {
        margin-top:24px
    }
}

.AddToCart_wrapper__kiYu_ {
    display: flex;
    flex-direction: column;
    gap: 12px
}

.AddToCart_outOfStock {
    align-self: flex-start;
    padding: 32px;
    background: var(--background-secondary);
    border-radius: 32px
}

@media(max-width: 1024px) {
    .AddToCart_outOfStock {
        display:none
    }
}

.AddToCart_outOfStock .AddToCart_desc,.AddToCart_outOfStock .AddToCart_title__gSC_U {
    color: var(--text-secondary)
}

.AddToCart_outOfStock .AddToCart_desc {
    margin-top: 8px
}

.AddToCart_header {
    padding: 16px;
    border-radius: 32px;
    box-shadow: var(--box-shadow-36);
    position: relative;
    background: var(--background-primary);
    z-index: 1
}

@media(max-width: 1024px) {
    .AddToCart_header {
        display:none
    }
}

.AddToCart_price {
    flex-flow: row;
    margin-bottom: 12px;
    -webkit-margin-start: 8px;
    margin-inline-start:8px}

.AddToCart_actions,.AddToCart_price {
    display: flex;
    align-items: center;
    justify-content: flex-start
}

.AddToCart_actions {
    flex-flow: column;
    gap: 8px
}

.AddToCart_actions .AddToCart_buyNow,.AddToCart_actions .AddToCart_buyNow:hover {
    background: var(--background-inverted)
}

.AddToCart_description {
    background: var(--background-secondary);
    padding: 56px 24px 24px;
    margin-top: -40px;
    border-radius: 0 0 32px 32px;
    text-align: initial
}

@media(max-width: 1024px) {
    .AddToCart_description {
        padding:24px;
        margin-top: 0;
        border-radius: 24px
    }
}

.AddToCart_delivery {
    color: var(--text-secondary);
    margin-bottom: 4px
}

.AddToCart_merchant {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row;
    gap: 8px;
    margin-top: 20px
}

.AddToCart_icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0
}

.AddToCart_merchantLink {
    position: relative
}

.AddToCart_merchantLink:before {
    content: "";
    display: block;
    background: var(--border-and-divider-primary);
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: -1px;
    inset-inline-start: 0
}

.AddToCart_merchantName {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

@supports(-webkit-line-clamp:1) {
    .AddToCart_merchantName {
        white-space: normal;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical
    }
}

.AddToCart_rating {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row;
    gap: 4px;
    -webkit-margin-start: 8px;
    margin-inline-start:8px;position: relative
}

.AddToCart_rating:before {
    content: "";
    display: block;
    background: var(--border-and-divider-primary);
    position: absolute;
    width: 1px;
    height: 12px;
    top: 5px;
    inset-inline-start: -8px
}

.AddToCart_starIcon {
    color: var(--constant-top-rated)
}

.AddToCart_descriptionMobile {
    display: none
}

@media(max-width: 1024px) {
    .AddToCart_descriptionMobile {
        display:block
    }
}

.AddToCart_notification {
    width: 343px
}

.AddToCart_successNotification svg {
    color: var(--constant-white)
}

.AddToCart_favourite__w_QC_ {
    display: inline-flex;
    background: var(--background-secondary);
    padding: 14px;
    border-radius: 50%;
    -webkit-margin-start: auto;
    margin-inline-start:auto}

.DiscountInfoBox_container {
    display: flex;
    padding: 20px 16px 20px 20px;
    gap: 12px;
    border-radius: 24px;
    background: var(--constant-white,#fff);
    box-shadow: 0 0 80px 0 rgba(0,0,0,.06);
    justify-content: space-between;
    cursor: pointer
}

.DiscountInfoBox_text {
    display: flex;
    flex-direction: column;
    gap: 2px
}

.DiscountInfoBox_deal {
    color: var(--text-brand)
}

.DiscountInfoBox_discount {
    color: var(--text-secondary)
}

.Price_price__z_kVp {
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    flex-flow: row;
    gap: 8px
}

.Price_price__z_kVp .Price_oldPrice {
    color: var(--text-secondary)
}

.Price_price__z_kVp .Price_newPrice {
    color: var(--text-discount-badge-constant)
}

.AddToCartBar_wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: var(--background-primary);
    box-shadow: var(--box-shadow-56-blur);
    z-index: 12;
    padding: 16px;
    display: none
}

@media(max-width: 1024px) {
    .AddToCartBar_wrapper {
        display:flex
    }
}

.AddToCartBar_wrapper .AddToCartBar_button {
    padding-left: 20px;
    padding-right: 20px
}

.AddToCartBar_wrapper .AddToCartBar_buyNowButton {
    background: var(--background-inverted);
    -webkit-margin-start: 16px;
    margin-inline-start:16px;-webkit-margin-end: 8px;
    margin-inline-end:8px}

.AddToCartBar_wrapper .AddToCartBar_buyNowButton:hover {
    background: var(--background-inverted)
}

@media(max-width: 575px) {
    .AddToCartBar_wrapper .AddToCartBar_buyNowButton {
        -webkit-margin-end:4px;
        margin-inline-end:4px}
}

.AddToCartBar_wrapper .AddToCartBar_price {
    -webkit-margin-end: auto;
    margin-inline-end:auto;flex-shrink: 0
}

.AddToCartBar_wrapper .AddToCartBar_cart {
    -webkit-margin-start: 16px;
    margin-inline-start:16px;background: var(--background-secondary);
    border-radius: 28px;
    padding: 20px;
    display: none
}

@media(max-width: 575px) {
    .AddToCartBar_wrapper .AddToCartBar_cart {
        display:block;
        -webkit-margin-start: 4px;
        margin-inline-start:4px}
}

.AddToCartBar_outOfStock__98i_i {
    position: fixed;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-flow: column;
    left: 0;
    bottom: 0;
    width: 100%;
    background: var(--background-primary);
    box-shadow: var(--box-shadow-56-blur);
    z-index: 12;
    padding: 20px 16px;
    display: none
}

@media(max-width: 1024px) {
    .AddToCartBar_outOfStock__98i_i {
        display:flex
    }
}

.AddToCartBar_outOfStock__98i_i .AddToCartBar_desc,.AddToCartBar_outOfStock__98i_i .AddToCartBar_title__nfO__ {
    color: var(--text-secondary)
}

.AddToCartBar_outOfStock__98i_i .AddToCartBar_desc {
    margin-top: 8px
}

.Gallery_wrapper {
    overflow: hidden;
    position: relative
}

@media(max-width: 575px) {
    .Gallery_wrapper {
        width:100vw;
        position: relative;
        -webkit-margin-start: -50vw;
        margin-inline-start:-50vw;inset-inline-start: 50%
    }
}

.Gallery_wrapper .Gallery_favourite {
    position: absolute;
    inset-inline-end: 12px;
    top: 12px;
    z-index: 2;
    padding: 10px;
    display: none
}

@media(max-width: 1024px) {
    .Gallery_wrapper .Gallery_favourite {
        display:flex
    }
}

.Gallery_imagePlaceholder {
    width: 400px;
    height: 400px;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
    border-radius: 40px;
    filter: brightness(.96)
}

@media(max-width: 1024px) {
    .Gallery_imagePlaceholder {
        width:280px;
        height: 280px
    }
}

@media(max-width: 575px) {
    .Gallery_imagePlaceholder {
        height:360px;
        width: 100%
    }
}

.Gallery_image {
    aspect-ratio: 1;
    width: 100%;
    height: auto;
    margin: auto;
    max-width: 400px
}

@media(max-width: 575px) {
    .Gallery_image {
        border-radius:unset;
        max-width: unset
    }
}

.Additional_wrapper {
    margin-top: 16px;
    order: 5
}

@media(max-width: 575px) {
    .Additional_wrapper {
        margin-top:24px
    }
}

.Additional_wrapper:empty {
    margin-top: 0
}

.Additional_addon___R9kj+.Additional_addon___R9kj {
    margin-top: 20px
}

@media(max-width: 1024px) {
    .Additional_addon___R9kj+.Additional_addon___R9kj {
        margin-top:24px
    }
}

.AdditionalCheckboxGroup_name {
    text-transform: capitalize
}

.AdditionalCheckboxGroup_additional {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row;
    border-bottom: 1px solid var(--constant-background-grey)
}

.Chip_wrapper___tdyO {
    position: relative;
    display: inline-flex
}

.Chip_label {
    padding: 12px 16px;
    color: var(--text-primary);
    background: var(--background-secondary);
    border-radius: 24px;
    cursor: pointer
}

@media(max-width: 575px) {
    .Chip_label {
        padding:10px 12px
    }
}

.Chip_selected {
    background: var(--control-active);
    color: var(--text-invert-primary)
}

.Chip_input {
    width: 0;
    height: 0;
    padding: 0;
    opacity: 0;
    margin: 0
}

.AdditionalChipGroup_desc {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-flow: row;
    gap: 4px
}

.AdditionalChipGroup_name {
    text-transform: capitalize;
    color: var(--text-secondary);
    flex-shrink: 0
}

.AdditionalChipGroup_group {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-flow: wrap;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 12px
}

.AdditionalChipGroup_chip__KWdD_ {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row;
    gap: 4px;
    overflow: hidden
}

.AdditionalChipGroup_optionName {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

@supports(-webkit-line-clamp:1) {
    .AdditionalChipGroup_optionName {
        white-space: normal;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical
    }
}

.AdditionalChipGroup_price {
    flex-shrink: 0
}

.MainInfo_wrapper {
    display: flex;
    flex-direction: column
}

.MainInfo_title {
    order: 1
}

@media(max-width: 1024px) {
    .MainInfo_description {
        display:none
    }
}

:root[lang=ar] .MainInfo_title {
    text-align: right
}

.PriceMobile_price {
    margin-top: 8px;
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    flex-flow: row;
    gap: 4px;
    color: var(--text-secondary);
    display: none;
    order: 4
}

.PriceMobile_price .PriceMobile_discountedPrice {
    color: var(--constant-brand)
}

@media(max-width: 1024px) {
    .PriceMobile_price {
        display:flex
    }
}

.PriceMobile_unLoggedInPrice {
    color: var(--text-primary)
}

.SimpleStarRating_wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row;
    gap: 2px
}

.SimpleStarRating_starWrapper {
    position: relative
}

.SimpleStarRating_starFilled {
    position: relative;
    color: var(--constant-top-rated);
    z-index: 2
}

.SimpleStarRating_starBackground,.SimpleStarRating_starFilled {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row;
    top: 0;
    left: 0;
    width: 12px;
    height: 12px
}

.SimpleStarRating_starBackground {
    position: absolute;
    color: var(--border-and-divider-primary)
}

:root[lang=ar] .SimpleStarRating_starWrapper {
    transform: scaleX(-1)
}

.RatingInfo_wrapper {
    margin-top: 6px;
    display: flex;
    align-items: center;
    gap: 4px;
    order: 3
}

.RatingInfo_ratingCount {
    color: var(--text-secondary)
}

.ProductTags_wrapper {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row;
    gap: 4px
}

.ProductTags_discount {
    padding: 3px 4px;
    background: var(--constant-background-coolred);
    color: var(--text-brand);
    border-radius: 20px
}

.ProductTags_buyOneGetOne {
    height: 20px;
    padding: 3px 8px;
    background: var(--constant-x-get-y);
    border-radius: 20px
}

.ProductTags_bySnoonu {
    padding: 4px 5px;
    background: var(--constant-background-coolred);
    color: var(--icon-brand);
    border-radius: 20px
}

.ProductTags_bySnoonu .ProductTags_icon {
    width: 12px;
    height: 12px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row
}

.ProductTags_freeDelivery {
    background: rgba(1,123,255,.06);
    color: var(--text-free-delivery);
    padding: 3px 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row;
    gap: 2px;
    border-radius: 12px
}

.ProductTags_freeDelivery .ProductTags_freeDeliveryIcon {
    width: 12px;
    height: 12px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row
}

:root[lang=ar] .ProductTags_freeDeliveryIcon {
    transform: scaleX(-1)
}

.Tag_tag {
    display: inline-block;
    border-radius: 16px;
    padding: 8px 12px
}

.Tag_red {
    background: var(--constant-brand);
    color: var(--text-invert-primary)
}

.Tag_gray {
    background: var(--constant-x-left);
    color: var(--text-invert-primary)
}

.Tags_wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row;
    gap: 4px;
    margin-bottom: 8px;
    order: 1
}

.Tags_wrapper:empty {
    margin-bottom: 0
}

@media(max-width: 575px) {
    .Tags_wrapper {
        margin-top:6px;
        margin-bottom: 0;
        order: 4
    }
}

.Title_h3 {
    font-size: 22px;
    line-height: 26px;
    font-weight: 700;
    order: 2
}

@media(max-width: 1024px) {
    .Title_h3 {
        font-size:24px;
        line-height: 28px
    }
}

@media(max-width: 575px) {
    .Title_h3 {
        font-size:18px;
        line-height: 22px
    }
}

.ProductDetail_wrapper {
    display: grid;
    grid-template-columns: 400px 1fr 320px;
    grid-gap: 32px;
    margin-top: 24px
}

@media(max-width: 1360px) {
    .ProductDetail_wrapper {
        grid-template-columns:1fr 1fr 1fr
    }
}

@media(max-width: 1024px) {
    .ProductDetail_wrapper {
        grid-gap:24px;
        grid-template-columns: 1fr
    }
}

@media(max-width: 575px) {
    .ProductDetail_wrapper {
        margin-top:16px
    }
}

.OutOfCoverage_container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--background-toast);
    color: var(--background-primary);
    border-radius: 24px;
    padding: 16px;
    gap: 16px;
    cursor: pointer
}

.OutOfCoverage_text {
    text-align: start
}

:root[lang=ar] .OutOfCoverage_locationError {
    transform: scaleX(-1)
}

</style>