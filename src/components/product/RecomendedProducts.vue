<script lang="ts" setup>
const products = [
  {
    id: "66ed8fb32c6abae9ea0a59dc",
    name: "Apple iPhone 16 Pro Max 512GB - Desert Titanium",
    price: "5,499 QR",
    img: "https://images.snoonu.com/brand_product/2025-03/72f6ae00-9741-4dc3-b8d7-0a95d3e49547_output.png?format=webp",
    link: "/product/apple-iphone-16-pro-max-512gb---desert-titanium/66ed8fb32c6abae9ea0a59dc",
    left: 3
  },
  {
    id: "6759a4ab2b235fe9cace1fe8",
    name: "Apple Airpods 4",
    price: "599 QR",
    img: "https://images.snoonu.com/brand_product/2025-06/5356c81b-3b6a-4cf8-8bb6-dd08327831b2_output.png?format=webp",
    link: "/product/apple-airpods-4/6759a4ab2b235fe9cace1fe8",
    left: null
  },
  {
    id: "66c761d1f168b6de215e086a",
    name: "Apple Type C Wired Earpods",
    price: "109 QR",
    img: "https://images.snoonu.com/brand_product/2024-11/e054c106-7add-403f-913d-c59de96a3adc_output.png?format=webp",
    link: "/product/apple-type-c-wired-earpods/66c761d1f168b6de215e086a",
    left: null
  },
  {
    id: "61703460f20d64b40ff10300",
    name: "Apple iPhone 13 128GB - Midnight",
    price: "1,699 QR",
    img: "https://images.snoonu.com/brand_product/2024-08/1c13ca64-e0b6-4743-820e-8ecbec2a0a55_output.png?format=webp",
    link: "/product/apple-iphone-13-128gb---midnight/61703460f20d64b40ff10300",
    left: null
  },
  {
    id: "63032e773a271863018e3a02",
    name: "PlayStation Gift Card 20 USD - Qatar (Valid For Qatar Account)",
    price: "73 QR",
    img: "https://images.snoonu.com/brand_product/2025-04/9b8e8db6-257f-46fd-aba6-578d7eeb64fa_output.png?format=webp",
    link: "/product/playstation-gift-card-20-usd---qatar/63032e773a271863018e3a02",
    left: null
  },
  
  {
    "id": "653a14c7a05a1ab3a7d71541",
    "name": "iPhone 15 Pro Max MagSafe Compatible Crystal Clear Case EX1027",
    "price": "159 QR",
    "img": "https://images.snoonu.com/brand_product/2024-11/81b84dc8-9b64-4053-8305-ac08b1b577c2_output.png?format=webp",
    "link": "/product/iphone-15-pro-max-magsafe-compatible-crystal-clear-case-ex1027/653a14c7a05a1ab3a7d71541",
    "left": null
  },
  {
    "id": "6759a4ab2b235fe9cace1fee",
    "name": "Apple USB-C Airpods Max - Blue - USB-C",
    "price": "2,249 QR",
    "img": "https://images.snoonu.com/brand_product/2025-06/c6f0dc26-44e7-455d-b49e-8b689b435250_output.png?format=webp",
    "link": "/product/apple-usb-c-airpods-max---blue---usb-c/6759a4ab2b235fe9cace1fee",
    "left": null
  },
  {
    "id": "6810c63c8f1b250ae542582b",
    "name": "SONY PS5 CONSOLE DIGITAL",
    "price": "1,899 QR",
    "img": "https://images.snoonu.com/product/2025-4/0b982732-5c51-419d-ab5c-adcd192da7d5_digi.JPG?format=webp",
    "link": "/product/sony-ps5-console-digital/6810c63c8f1b250ae542582b",
    "left": null
  },
  {
    "id": "63032e773a271863018e39ed",
    "name": "PlayStation Gift Card 10 USD - USA (Valid For USA Account)",
    "price": "37 QR",
    "img": "https://images.snoonu.com/brand_product/2024-09/dd08c85a-d602-49f7-a2d8-b621d006ad42_output.png?format=webp",
    "link": "/product/playstation-gift-card-10-usd---usa/63032e773a271863018e39ed",
    "left": null
  },
  {
    "id": "672cb4262c27f2e7b2da6265",
    "name": "Sony PlayStation 5 Pro Digital Console",
    "price": "2,959 QR",
    "img": "https://images.snoonu.com/brand_product/2025-04/6d8fbd8d-4278-48f5-8e12-f6852fd59e82_output.png?format=webp",
    "link": "/product/sony-playstation-5-pro-digital-console/672cb4262c27f2e7b2da6265",
    "left": null
  },
  {
    "id": "66527892d1610440b9d14e30",
    "name": "Sony Playstation 5 Dualsense Wireless Controller - White",
    "price": "369 QR",
    "img": "https://images.snoonu.com/brand_product/2024-09/3fda706c-4961-4ad4-80f0-08ae06354eea_output.png?format=webp",
    "link": "/product/sony-playstation-5-dualsense-wireless-controller---white/66527892d1610440b9d14e30",
    "left": null
  },
  {
    "id": "66dafcf17409355ca225195e",
    "name": "Sony PlayStation Portal Remote Player For PlayStation 5",
    "price": "849 QR",
    "img": "https://images.snoonu.com/brand_product/2025-07/a0dfdfe0-f74c-4c9d-a240-ce0be7f03f06_output.png?format=webp",
    "link": "/product/sony-playstation-portal-remote-player-for-playstation-5/66dafcf17409355ca225195e",
    "left": 2
  }
];

</script>

<template>
    <div class="ProductRecommendations_wrapper">
        <h2 class="Typography_h2 ProductRecommendations_title">Buy it with</h2>
        <div class="ProductRecommendations_recommendationsWrapper">
            
             <a
      v-for="product in products"
      :key="product.id"
      :href="product.link"
      target="_blank"
      rel="noopener noreferrer"
      class="productCard"
      :id="product.id"
    >
      <div
        class="ProductCardVertical_wrapper ProductRecommendations_card"
        data-analytic-label="bestSellingProduct"
        :data-analytic-event-content="product.id"
        data-test-id="bestSellProductCard"
      >
        <!-- Product Image -->
        <div class="CardProductImage_imageWrapper ProductCardVertical_image ProductRecommendations_cardImage relative">
          <img
            :src="product.img"
            :alt="product.name"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <!-- Left badge -->
          <div v-if="product.left" class="CardProductImage_productLeft">
            <p class="Typography_p10">Left <span>{{ product.left }}</span></p>
          </div>
        </div>

        <!-- Product Info -->
        <div class="ProductCartVerticalDescription_info">
          <h5 class="Typography_h5 ProductCartVerticalDescription_price">
            {{ product.price }}
          </h5>
          <p class="Typography_p7 ProductCartVerticalDescription_name">
            {{ product.name }}
          </p>
        </div>

        <!-- Add Button -->
        <button
          class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary ProductButton_normal__jOR_t ProductRecommendations_cardButton"
          data-test-id="addBtnProductCard"
          data-analytic-label="productButtonAdd"
        >
          <span class="Button_content">Add</span>
        </button>
      </div>
    </a>
            
         
            <div></div>
        </div>
    </div>


</template>

<style>

.ProductCardHorizontal_wrapper {
    background: var(--background-secondary);
    border-radius: 32px;
    display: flex;
    align-items: unset;
    justify-content: flex-start;
    flex-flow: row;
    cursor: pointer
}

@media(max-width: 575px) {
    .ProductCardHorizontal_wrapper {
        background:none
    }
}

.ProductCardHorizontal_wrapper .ProductCardHorizontal_image {
    margin: 8px
}

@media(max-width: 575px) {
    .ProductCardHorizontal_wrapper .ProductCardHorizontal_image {
        margin:0
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
    padding-inline-start:12px;word-break: break-word
}

@media(max-width: 1024px) {
    .ProductCardHorizontal_wrapper .ProductCardHorizontal_info {
        padding:12px;
        -webkit-padding-start: 8px;
        padding-inline-start:8px}
}

@media(max-width: 575px) {
    .ProductCardHorizontal_wrapper .ProductCardHorizontal_info {
        padding:0;
        -webkit-padding-start: 16px;
        padding-inline-start:16px;gap: 12px
    }
}

.ProductCardHorizontal_wrapper .ProductCardHorizontal_info .ProductCardHorizontal_name {
    margin-bottom: 8px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

@supports(-webkit-line-clamp:2) {
    .ProductCardHorizontal_wrapper .ProductCardHorizontal_info .ProductCardHorizontal_name {
        white-space: normal;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical
    }
}

.ProductCardHorizontal_wrapper .ProductCardHorizontal_info .ProductCardHorizontal_description {
    color: var(--text-secondary);
    margin-bottom: 6px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

@supports(-webkit-line-clamp:3) {
    .ProductCardHorizontal_wrapper .ProductCardHorizontal_info .ProductCardHorizontal_description {
        white-space: normal;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical
    }
}

.ProductCardHorizontal_wrapper .ProductCardHorizontal_priceWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row;
    width: 100%
}

.ProductCardHorizontal_wrapper .ProductCardHorizontal_priceWrapper .ProductCardHorizontal_pricePromo {
    display: flex;
    flex-direction: column
}

.ProductCardHorizontal_wrapper .ProductCardHorizontal_priceWrapper .ProductCardHorizontal_pricePromo .ProductCardHorizontal_newPrice {
    color: var(--constant-brand)
}

.ProductCardHorizontal_wrapper .ProductCardHorizontal_priceWrapper .ProductCardHorizontal_pricePromo .ProductCardHorizontal_oldPrice {
    color: var(--text-secondary)
}

@media(max-width: 575px) {
    .ProductCardHorizontal_wrapper .ProductCardHorizontal_productButton {
        min-width:96px;
        height: 44px;
        margin: 0
    }
}

:root[lang=ar] .ProductCardHorizontal_description,:root[lang=ar] .ProductCardHorizontal_name {
    text-align: right
}

:root[lang=ar] .ProductCardHorizontal_imageWrapper {
    flex-shrink: 0;
    width: 176px;
    height: 176px;
    margin: 8px 8px 8px 0;
    position: relative;
    border-radius: 28px;
    background: var(--constant-white);
    overflow: hidden
}

@media(max-width: 575px) {
    :root[lang=ar] .ProductCardHorizontal_imageWrapper {
        width:156px;
        height: 156px
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
    cursor: pointer
}

@media(max-width: 1024px) {
    .ProductCardVertical_wrapper {
        width:156px;
        border-radius: 28px
    }
}

@media(max-width: 575px) {
    .ProductCardVertical_wrapper {
        width:150px
    }
}

.ProductCardVertical_wrapper .ProductCardVertical_image {
    margin: 8px;
    border-radius: 26px 26px 6px 6px
}

@media(max-width: 1024px) {
    .ProductCardVertical_wrapper .ProductCardVertical_image {
        border-radius:24px 24px 6px 6px
    }
}

@media(max-width: 575px) {
    .ProductCardVertical_wrapper .ProductCardVertical_image {
        margin:6px;
        width: 138px;
        height: 138px
    }
}

.ProductCardVertical_wrapper .ProductCardVertical_info {
    padding: 8px 12px 18px
}

@media(max-width: 1024px) {
    .ProductCardVertical_wrapper .ProductCardVertical_info {
        padding-bottom:12px
    }
}

.ProductCardVertical_wrapper .ProductCardVertical_name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

@supports(-webkit-line-clamp:2) {
    .ProductCardVertical_wrapper .ProductCardVertical_name {
        white-space: normal;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical
    }
}

.ProductCardVertical_wrapper .ProductCardVertical_price__T_5WM {
    margin-bottom: 6px
}

@media(max-width: 575px) {
    .ProductCardVertical_wrapper .ProductCardVertical_price__T_5WM {
        margin-bottom:8px
    }
}

.ProductCardVertical_wrapper .ProductCardVertical_pricePromo__O_ab8 {
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    flex-flow: row;
    gap: 4px;
    margin-bottom: 6px
}

.ProductCardVertical_wrapper .ProductCardVertical_pricePromo__O_ab8 .ProductCardVertical_newPrice {
    color: var(--constant-brand)
}

.ProductCardVertical_wrapper .ProductCardVertical_pricePromo__O_ab8 .ProductCardVertical_oldPrice {
    color: var(--text-secondary)
}

:root[lang=ar] .ProductCardVertical_name,:root[lang=ar] .ProductCardVertical_price__T_5WM {
    text-align: right
}

.ProductCounter_wrapper__yiOb_ {
    position: absolute;
    bottom: 12px;
    inset-inline-end: 12px;
    border-radius: 20px
}

.ProductCounter_plusWrapper {
    padding: 10px;
    overflow: hidden;
    background: var(--control-tertiary);
    box-shadow: var(--box-shadow-s)
}

.ProductCounter_plusWrapper .ProductCounter_icon {
    width: 20px;
    height: 20px
}

.ProductCounter_counterWrapper {
    padding: 4px;
    background: var(--control-tertiary);
    box-shadow: var(--box-shadow-m);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row;
    overflow: hidden
}

@media(max-width: 575px) {
    .ProductCounter_counterWrapper {
        inset-inline-start:12px;
        width: calc(100% - 24px)
    }
}

.ProductCounter_counterWrapper .ProductCounter_minus___ywYe,.ProductCounter_counterWrapper .ProductCounter_plus {
    background: var(--control-tertiary);
    padding: 8px;
    border-radius: 16px
}

.ProductCounter_counterWrapper .ProductCounter_minus___ywYe:focus,.ProductCounter_counterWrapper .ProductCounter_plus:focus {
    background: var(--background-secondary)
}

.ProductCounter_counterWrapper .ProductCounter_count {
    min-width: 24px;
    text-align: center
}

@media(max-width: 575px) {
    .ProductCounter_counterWrapper .ProductCounter_count {
        flex:1 1
    }
}

.ProductCounter_counterWrapper .ProductCounter_icon {
    width: 16px;
    height: 16px
}

.ProductCounter_button {
    border: none;
    outline: none;
    cursor: pointer
}

.ProductCounter_button:focus {
    outline: none
}

.ProductImage_wrapper {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 26px;
    overflow: hidden
}

.ProductImage_wrapper:after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,.03);
    border-radius: 26px
}

.ProductImage_imageWrapper {
    position: relative;
    width: 100%;
    height: 100%
}

.ProductRating_wrapper__g_1Nn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row;
    gap: 4px;
    margin-top: 6px
}

.ProductRating_count {
    color: var(--text-secondary)
}

.ProductPrice_wrapper {
    margin-top: 10px
}

.ProductPrice_prices {
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    flex-flow: row;
    gap: 4px;
    margin-bottom: 2px
}

.ProductPrice_prices .ProductPrice_newPrice {
    color: var(--constant-brand)
}

.ProductPrice_prices .ProductPrice_oldPrice {
    color: var(--text-secondary)
}

.ProductPrice_label {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

@supports(-webkit-line-clamp:3) {
    .ProductPrice_label {
        white-space: normal;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical
    }
}

@media(max-width: 1024px) {
    .ProductPrice_label {
        overflow:hidden;
        white-space: nowrap;
        text-overflow: ellipsis
    }

    @supports(-webkit-line-clamp:2) {
        .ProductPrice_label {
            white-space: normal;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical
        }
    }
}

:root[lang=ar] .ProductPrice_wrapper {
    text-align: right
}

.ProductInfo_wrapper___tfgf {
    margin-top: 10px
}

.ProductInfo_prices {
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    flex-flow: row;
    gap: 4px;
    margin-bottom: 2px
}

.ProductInfo_prices .ProductInfo_newPrice {
    color: var(--constant-brand)
}

.ProductInfo_prices .ProductInfo_oldPrice {
    color: var(--text-secondary)
}

.ProductInfo_label {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

@supports(-webkit-line-clamp:2) {
    .ProductInfo_label {
        white-space: normal;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical
    }
}

:root[lang=ar] .ProductInfo_wrapper___tfgf {
    text-align: right
}

.ProductCardMarketplace_imageWrapper {
    position: relative
}

.ProductCardMarketplace_favourite {
    position: absolute;
    top: 12px;
    right: 16px;
    padding: 0
}

.SkeletonProductCard_card__QZRt_ {
    width: 100%;
    height: 192px
}

@media(max-width: 575px) {
    .SkeletonProductCard_card__QZRt_ {
        height:172px
    }
}

.ProductRecommendations_wrapper {
    margin-top: 72px
}

@media(max-width: 1024px) {
    .ProductRecommendations_wrapper {
        margin-top:40px
    }
}

@media(max-width: 575px) {
    .ProductRecommendations_wrapper {
        margin-top:32px
    }
}

.ProductRecommendations_title {
    margin-top: 56px;
    margin-bottom: 24px
}

@media(max-width: 1024px) {
    .ProductRecommendations_title {
        margin-top:40px
    }
}

@media(max-width: 575px) {
    .ProductRecommendations_title {
        margin-top:32px;
        margin-bottom: 16px
    }
}

.ProductRecommendations_recommendationsWrapper {
    display: grid;
    grid-row-gap: 32px;
    grid-column-gap: 20px;
    grid-template-columns: repeat(6,minmax(0,1fr))
}

@media(max-width: 1710px) {
    .ProductRecommendations_recommendationsWrapper {
        grid-row-gap:20px;
        grid-column-gap: 24px;
        grid-template-columns: repeat(6,minmax(0,1fr))
    }
}

@media(max-width: 1024px) {
    .ProductRecommendations_recommendationsWrapper {
        grid-template-columns:repeat(4,minmax(0,1fr));
        grid-row-gap: 16px;
        grid-column-gap: 25px
    }
}

@media(max-width: 575px) {
    .ProductRecommendations_recommendationsWrapper {
        grid-row-gap:16px;
        grid-column-gap: 20px;
        grid-template-columns: repeat(2,minmax(0,1fr))
    }
}

.ProductRecommendations_card {
    width: 100%;
    background: var(--background-secondary)
}

.ProductRecommendations_card .ProductRecommendations_cardImage {
    width: calc(100% - 16px)
}

@media(max-width: 575px) {
    .ProductRecommendations_card .ProductRecommendations_cardImage {
        width:calc(100% - 12px)
    }
}

.ProductRecommendations_card .ProductRecommendations_cardButton {
    background: var(--background-primary)
}

@media(max-width: 1024px) {
    .ProductRecommendations_card .ProductRecommendations_cardButton {
        margin:auto 8px 8px;
        font-size: 14px;
        line-height: 16px
    }
}

@media(max-width: 575px) {
    .ProductRecommendations_card .ProductRecommendations_cardButton {
        margin:auto 6px 6px;
        padding-top: 18px;
        padding-bottom: 18px
    }
}

</style>