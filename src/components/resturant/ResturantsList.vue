<script lang="ts" setup>
const merchants= ref([
  {
    "name": "BLaban",
    "promo": "50% Off",
    "image": "https://images.snoonu.com/brand/2025-06/ddc64699-b68b-4db4-867f-78ac6dd8d9bd_output.png?format=webp",
    "delivery_time": "29 mins",
    "rating": 4.5,
    "price_range": "$$",
    "tags": ["Arabic Sweets", "Egyptian", "Desserts"],
    "link": "/restaurants/blaban"
  },
  {
    "name": "KFC",
    "promo": "30% Off",
    "image": "https://images.snoonu.com/brand/2025-05/cb7ab35e-cdd2-49f7-b11c-922521d150d7_output.png?format=webp",
    "delivery_time": "33 mins",
    "rating": 4.4,
    "price_range": "$$",
    "tags": ["Fast Food", "Burgers", "Fried Chicken"],
    "link": "/restaurants/kfc"
  },
  {
    "name": "McDonald's",
    "promo": "50% Off",
    "image": "https://images.snoonu.com/2025-09/e8828f4b-f81f-44c5-a289-a90d3cb74423_60ddc6ddac5a758955802a45.jpg?format=webp",
    "delivery_time": "24 mins",
    "rating": 4.4,
    "price_range": "$$",
    "tags": ["Breakfast", "Fast Food", "American", "Coffee", "Sandwiches", "Burgers"],
    "link": "/restaurants/mcdonalds"
  },
  {
    "name": "Jollibee",
    "promo": "40% Off",
    "image": "https://images.snoonu.com/brand/2025-07/c6f471ca-2afc-4612-b339-0148249cd689_output.png?format=webp",
    "delivery_time": "37 mins",
    "rating": 4.6,
    "price_range": "$$",
    "tags": ["Fast Food", "Fried Chicken", "Burgers"],
    "link": "/restaurants/jollibee"
  },
  {
    "name": "Go Crispy",
    "promo": "60% Off",
    "image": "https://images.snoonu.com/brand/2025-08/8b50b9dc-a407-4549-a2ab-f56a43a1c990_output.png?format=webp",
    "delivery_time": "31 mins",
    "rating": 0,
    "price_range": "$$",
    "tags": ["Fast Food"],
    "link": "/restaurants/go-crispy"
  }
]
)
</script>
<template>
<div>
        <div class="FilterPresets_wrapper__sSfR_">
        <div class="FilterPresets_filterWrapper">
            <div data-analytic-label="fastFilter" data-analytic-event-content="1"
                data-analytic-event-action="filter_apply" class="FilterPresets_filter FilterPresets_first"><span
                    data-test-id="" class="Icon_iconWrapper FilterPresets_icon" style="width: 24px; height: 24px;"><svg
                        width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M0 3.34h14.768a9.215 9.215 0 0 1 9.231 9.232c0 5.074-4.12 9.575-9.231 9.575-4.693 0-8.316-2.708-10.338-6.943 0 0 1.614-1.464 4.683-2.197C3.51 11.842.383 7.485 0 3.34Z"
                            fill="#D90202"></path>
                    </svg></span>
                <p class="Typography_p6">Free Delivery</p>
            </div>
        </div>
        <div class="FilterPresets_filterWrapper">
            <div data-analytic-label="fastFilter" data-analytic-event-content="2"
                data-analytic-event-action="filter_apply" class="FilterPresets_filter">
                <p class="Typography_p6">Under 30 min</p>
            </div>
        </div>
        <div class="FilterPresets_filterWrapper">
            <div data-analytic-label="fastFilter" data-analytic-event-content="3"
                data-analytic-event-action="filter_apply" class="FilterPresets_filter">
                <p class="Typography_p6">Less than 50 QR</p>
            </div>
        </div>
        <div class="FilterPresets_filterWrapper">
            <div data-analytic-label="fastFilter" data-analytic-event-content="4"
                data-analytic-event-action="filter_apply" class="FilterPresets_filter FilterPresets_last">
                <p class="Typography_p6">Takeaway</p>
            </div>
        </div>
    </div>

    <div class="Merchants_wrapper">
        <div class="MerchantCard_wrapper"><a rel="noopener noreferrer" data-analytic-label="merchantCard"
                data-test-id="merchantCardInCategory" data-analytic-event-content="blaban" target="_blank"
                href="/restaurants/details">
                <div class="MerchantCard_imageWrapper">
                    <div class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_">
                        <div class="MerchantPromoTag_promoTag MerchantPromoTag_percentageOff">
                            <p class="Typography_p10">50% Off</p>
                        </div>
                    </div><img alt="BLaban" fetchpriority="high" decoding="async" data-nimg="fill"
                        class="MerchantCard_image"
                        style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                        src="https://images.snoonu.com/brand/2025-06/ddc64699-b68b-4db4-867f-78ac6dd8d9bd_output.png?format=webp">
                    <div class="MerchantCard_deliveryTime"><span data-test-id=""
                            class="Icon_iconWrapper MerchantCard_driverIcon"
                            style="width:16px;height:16px"><svg viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                                    fill="currentColor"></path>
                            </svg></span>
                        <p class="Typography_p8">29<!-- --> <!-- -->mins</p>
                    </div>
                </div>
                <div class="MerchantCard_content">
                    <div class="MerchantCard_primaryDetails">
                        <p class="Typography_p1 MerchantCard_name">BLaban</p>
                    </div>
                    <div class="MerchantCard_secondaryDetails__c9r_K">
                        <div class="MerchantCard_rating"><span data-test-id=""
                                class="Icon_iconWrapper MerchantCard_starIcon" style="width:12px"><svg
                                    viewBox="0 0 24 25" fill="none" class="Icon_icon">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 1.88c.38 0 .727.208.889.533L15.7 8.07l6.268.91a.969.969 0 0 1 .782.622.89.89 0 0 1-.23.942l-4.562 4.413 1.079 6.246a.905.905 0 0 1-.404.908 1.03 1.03 0 0 1-1.04.053L12 19.244l-5.592 2.92a1.03 1.03 0 0 1-1.04-.053.905.905 0 0 1-.404-.908l1.078-6.246-4.562-4.413a.89.89 0 0 1-.23-.942.969.969 0 0 1 .783-.623L8.3 8.07l2.811-5.656a.988.988 0 0 1 .89-.533Z"
                                        fill="currentColor"></path>
                                </svg></span>
                            <p class="Typography_p8">4.5</p>
                        </div>
                        <div class="MerchantPriceRange_averagePrice">
                            <p
                                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p
                                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p class="Typography_p8 MerchantPriceRange_price">$</p>
                        </div>
                        <p class="Typography_p8 MerchantCard_tags___u15_">Arabic Sweets, Egyptian, Desserts</p>
                    </div>
                </div>
            </a></div>
        <div class="MerchantCard_wrapper">
            <a rel="noopener noreferrer" data-analytic-label="merchantCard"
                data-test-id="merchantCardInCategory" data-analytic-event-content="kfc" target="_blank"
                href="/restaurants/details">
                <div class="MerchantCard_imageWrapper">
                    <div class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_">
                        <div class="MerchantPromoTag_promoTag MerchantPromoTag_percentageOff">
                            <p class="Typography_p10">30% Off</p>
                        </div>
                    </div><img alt="KFC" fetchpriority="high" decoding="async" data-nimg="fill"
                        class="MerchantCard_image"
                        style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                        src="https://images.snoonu.com/brand/2025-05/cb7ab35e-cdd2-49f7-b11c-922521d150d7_output.png?format=webp">
                    <div class="MerchantCard_deliveryTime"><span data-test-id=""
                            class="Icon_iconWrapper MerchantCard_driverIcon"
                            style="width:16px;height:16px"><svg viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                                    fill="currentColor"></path>
                            </svg></span>
                        <p class="Typography_p8">33<!-- --> <!-- -->mins</p>
                    </div>
                </div>
                <div class="MerchantCard_content">
                    <div class="MerchantCard_primaryDetails">
                        <p class="Typography_p1 MerchantCard_name">KFC</p>
                    </div>
                    <div class="MerchantCard_secondaryDetails__c9r_K">
                        <div class="MerchantCard_rating"><span data-test-id=""
                                class="Icon_iconWrapper MerchantCard_starIcon" style="width:12px"><svg
                                    viewBox="0 0 24 25" fill="none" class="Icon_icon">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 1.88c.38 0 .727.208.889.533L15.7 8.07l6.268.91a.969.969 0 0 1 .782.622.89.89 0 0 1-.23.942l-4.562 4.413 1.079 6.246a.905.905 0 0 1-.404.908 1.03 1.03 0 0 1-1.04.053L12 19.244l-5.592 2.92a1.03 1.03 0 0 1-1.04-.053.905.905 0 0 1-.404-.908l1.078-6.246-4.562-4.413a.89.89 0 0 1-.23-.942.969.969 0 0 1 .783-.623L8.3 8.07l2.811-5.656a.988.988 0 0 1 .89-.533Z"
                                        fill="currentColor"></path>
                                </svg></span>
                            <p class="Typography_p8">4.4</p>
                        </div>
                        <div class="MerchantPriceRange_averagePrice">
                            <p
                                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p
                                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p class="Typography_p8 MerchantPriceRange_price">$</p>
                        </div>
                        <p class="Typography_p8 MerchantCard_tags___u15_">Fast Food, Burgers, Fried Chicken</p>
                    </div>
                </div>
            </a></div>
        <div class="MerchantCard_wrapper"><a rel="noopener noreferrer" data-analytic-label="merchantCard"
                data-test-id="merchantCardInCategory" data-analytic-event-content="mcdonalds" target="_blank"
                href="/restaurants/details">
                <div class="MerchantCard_imageWrapper">
                    <div class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_">
                        <div class="MerchantPromoTag_promoTag MerchantPromoTag_percentageOff">
                            <p class="Typography_p10">50% Off</p>
                        </div>
                    </div><img alt="McDonald's" fetchpriority="high" decoding="async" data-nimg="fill"
                        class="MerchantCard_image"
                        style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                        src="https://images.snoonu.com/2025-09/e8828f4b-f81f-44c5-a289-a90d3cb74423_60ddc6ddac5a758955802a45.jpg?format=webp">
                    <div class="MerchantCard_deliveryTime"><span data-test-id=""
                            class="Icon_iconWrapper MerchantCard_driverIcon"
                            style="width:16px;height:16px"><svg viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                                    fill="currentColor"></path>
                            </svg></span>
                        <p class="Typography_p8">24<!-- --> <!-- -->mins</p>
                    </div>
                </div>
                <div class="MerchantCard_content">
                    <div class="MerchantCard_primaryDetails">
                        <p class="Typography_p1 MerchantCard_name">McDonald's</p>
                    </div>
                    <div class="MerchantCard_secondaryDetails__c9r_K">
                        <div class="MerchantCard_rating"><span data-test-id=""
                                class="Icon_iconWrapper MerchantCard_starIcon" style="width:12px"><svg
                                    viewBox="0 0 24 25" fill="none" class="Icon_icon">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 1.88c.38 0 .727.208.889.533L15.7 8.07l6.268.91a.969.969 0 0 1 .782.622.89.89 0 0 1-.23.942l-4.562 4.413 1.079 6.246a.905.905 0 0 1-.404.908 1.03 1.03 0 0 1-1.04.053L12 19.244l-5.592 2.92a1.03 1.03 0 0 1-1.04-.053.905.905 0 0 1-.404-.908l1.078-6.246-4.562-4.413a.89.89 0 0 1-.23-.942.969.969 0 0 1 .783-.623L8.3 8.07l2.811-5.656a.988.988 0 0 1 .89-.533Z"
                                        fill="currentColor"></path>
                                </svg></span>
                            <p class="Typography_p8">4.4</p>
                        </div>
                        <div class="MerchantPriceRange_averagePrice">
                            <p
                                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p
                                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p class="Typography_p8 MerchantPriceRange_price">$</p>
                        </div>
                        <p class="Typography_p8 MerchantCard_tags___u15_">Breakfast, Fast Food, American, Coffee,
                            Sandwiches, Burgers</p>
                    </div>
                </div>
            </a></div>
        <div class="MerchantCard_wrapper"><a rel="noopener noreferrer" data-analytic-label="merchantCard"
                data-test-id="merchantCardInCategory" data-analytic-event-content="jollibee" target="_blank"
                href="/restaurants/details">
                <div class="MerchantCard_imageWrapper">
                    <div class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_">
                        <div class="MerchantPromoTag_promoTag MerchantPromoTag_percentageOff">
                            <p class="Typography_p10">40% Off</p>
                        </div>
                    </div><img alt="Jollibee" fetchpriority="high" decoding="async" data-nimg="fill"
                        class="MerchantCard_image"
                        style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                        src="https://images.snoonu.com/brand/2025-07/c6f471ca-2afc-4612-b339-0148249cd689_output.png?format=webp">
                    <div class="MerchantCard_deliveryTime"><span data-test-id=""
                            class="Icon_iconWrapper MerchantCard_driverIcon"
                            style="width:16px;height:16px"><svg viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                                    fill="currentColor"></path>
                            </svg></span>
                        <p class="Typography_p8">37<!-- --> <!-- -->mins</p>
                    </div>
                </div>
                <div class="MerchantCard_content">
                    <div class="MerchantCard_primaryDetails">
                        <p class="Typography_p1 MerchantCard_name">Jollibee</p>
                    </div>
                    <div class="MerchantCard_secondaryDetails__c9r_K">
                        <div class="MerchantCard_rating"><span data-test-id=""
                                class="Icon_iconWrapper MerchantCard_starIcon" style="width:12px"><svg
                                    viewBox="0 0 24 25" fill="none" class="Icon_icon">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 1.88c.38 0 .727.208.889.533L15.7 8.07l6.268.91a.969.969 0 0 1 .782.622.89.89 0 0 1-.23.942l-4.562 4.413 1.079 6.246a.905.905 0 0 1-.404.908 1.03 1.03 0 0 1-1.04.053L12 19.244l-5.592 2.92a1.03 1.03 0 0 1-1.04-.053.905.905 0 0 1-.404-.908l1.078-6.246-4.562-4.413a.89.89 0 0 1-.23-.942.969.969 0 0 1 .783-.623L8.3 8.07l2.811-5.656a.988.988 0 0 1 .89-.533Z"
                                        fill="currentColor"></path>
                                </svg></span>
                            <p class="Typography_p8">4.6</p>
                        </div>
                        <div class="MerchantPriceRange_averagePrice">
                            <p
                                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p
                                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p class="Typography_p8 MerchantPriceRange_price">$</p>
                        </div>
                        <p class="Typography_p8 MerchantCard_tags___u15_">Fast Food, Fried Chicken, Burgers</p>
                    </div>
                </div>
            </a></div>
        <div class="MerchantCard_wrapper"><a rel="noopener noreferrer" data-analytic-label="merchantCard"
                data-test-id="merchantCardInCategory" data-analytic-event-content="go-crispy" target="_blank"
                href="/restaurants/details-crispy">
                <div class="MerchantCard_imageWrapper">
                    <div class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_">
                        <div class="MerchantPromoTag_promoTag MerchantPromoTag_percentageOff">
                            <p class="Typography_p10">60% Off</p>
                        </div>
                    </div><img alt="Go Crispy" fetchpriority="high" decoding="async" data-nimg="fill"
                        class="MerchantCard_image"
                        style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                        src="https://images.snoonu.com/brand/2025-08/8b50b9dc-a407-4549-a2ab-f56a43a1c990_output.png?format=webp">
                    <div class="MerchantCard_deliveryTime"><span data-test-id=""
                            class="Icon_iconWrapper MerchantCard_driverIcon"
                            style="width:16px;height:16px"><svg viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                                    fill="currentColor"></path>
                            </svg></span>
                        <p class="Typography_p8">31<!-- --> <!-- -->mins</p>
                    </div>
                </div>
                <div class="MerchantCard_content">
                    <div class="MerchantCard_primaryDetails">
                        <p class="Typography_p1 MerchantCard_name">Go Crispy</p>
                    </div>
                    <div class="MerchantCard_secondaryDetails__c9r_K">
                        <div class="MerchantCard_rating"><span data-test-id=""
                                class="Icon_iconWrapper MerchantCard_starIcon" style="width:12px"><svg
                                    viewBox="0 0 24 25" fill="none" class="Icon_icon">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 1.88c.38 0 .727.208.889.533L15.7 8.07l6.268.91a.969.969 0 0 1 .782.622.89.89 0 0 1-.23.942l-4.562 4.413 1.079 6.246a.905.905 0 0 1-.404.908 1.03 1.03 0 0 1-1.04.053L12 19.244l-5.592 2.92a1.03 1.03 0 0 1-1.04-.053.905.905 0 0 1-.404-.908l1.078-6.246-4.562-4.413a.89.89 0 0 1-.23-.942.969.969 0 0 1 .783-.623L8.3 8.07l2.811-5.656a.988.988 0 0 1 .89-.533Z"
                                        fill="currentColor"></path>
                                </svg></span>
                            <p class="Typography_p8">4.5</p>
                        </div>
                        <div class="MerchantPriceRange_averagePrice">
                            <p
                                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p
                                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p class="Typography_p8 MerchantPriceRange_price">$</p>
                        </div>
                        <p class="Typography_p8 MerchantCard_tags___u15_">Fried Chicken, Sandwiches, Fast Food
                        </p>
                    </div>
                </div>
            </a></div>
        <div class="MerchantCard_wrapper"><a rel="noopener noreferrer" data-analytic-label="merchantCard"
                data-test-id="merchantCardInCategory" data-analytic-event-content="al-kateam" target="_blank"
                href="/restaurants/details-kateam">
                <div class="MerchantCard_imageWrapper">
                    <div class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_"></div><img
                        alt="Al Katem" fetchpriority="high" decoding="async" data-nimg="fill"
                        class="MerchantCard_image"
                        style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                        src="https://images.snoonu.com/brand/2024-05/6753f60f-e8bd-4b0e-8edd-a08e6599ba47_output.png?format=webp">
                    <div class="MerchantCard_deliveryTime"><span data-test-id=""
                            class="Icon_iconWrapper MerchantCard_driverIcon"
                            style="width:16px;height:16px"><svg viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                                    fill="currentColor"></path>
                            </svg></span>
                        <p class="Typography_p8">46<!-- --> <!-- -->mins</p>
                    </div>
                </div>
                <div class="MerchantCard_content">
                    <div class="MerchantCard_primaryDetails">
                        <p class="Typography_p1 MerchantCard_name">Al Katem</p>
                    </div>
                    <div class="MerchantCard_secondaryDetails__c9r_K">
                        <div class="MerchantCard_rating"><span data-test-id=""
                                class="Icon_iconWrapper MerchantCard_starIcon" style="width:12px"><svg
                                    viewBox="0 0 24 25" fill="none" class="Icon_icon">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 1.88c.38 0 .727.208.889.533L15.7 8.07l6.268.91a.969.969 0 0 1 .782.622.89.89 0 0 1-.23.942l-4.562 4.413 1.079 6.246a.905.905 0 0 1-.404.908 1.03 1.03 0 0 1-1.04.053L12 19.244l-5.592 2.92a1.03 1.03 0 0 1-1.04-.053.905.905 0 0 1-.404-.908l1.078-6.246-4.562-4.413a.89.89 0 0 1-.23-.942.969.969 0 0 1 .783-.623L8.3 8.07l2.811-5.656a.988.988 0 0 1 .89-.533Z"
                                        fill="currentColor"></path>
                                </svg></span>
                            <p class="Typography_p8">4.7</p>
                        </div>
                        <div class="MerchantPriceRange_averagePrice">
                            <p
                                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p
                                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p class="Typography_p8 MerchantPriceRange_price">$</p>
                        </div>
                        <p class="Typography_p8 MerchantCard_tags___u15_">Qatari, Arabic, Mandi</p>
                    </div>
                </div>
            </a></div>
        <div class="MerchantCard_wrapper"><a rel="noopener noreferrer" data-analytic-label="merchantCard"
                data-test-id="merchantCardInCategory" data-analytic-event-content="pizza-hut" target="_blank"
                href="/restaurants/details-hut">
                <div class="MerchantCard_imageWrapper">
                    <div class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_"></div><img
                        alt="Pizza Hut" fetchpriority="high" decoding="async" data-nimg="fill"
                        class="MerchantCard_image"
                        style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                        src="https://images.snoonu.com/brand/2024-07/e36a81a1-ade1-4eb1-b59a-64040508decb_output.png?format=webp">
                    <div class="MerchantCard_deliveryTime"><span data-test-id=""
                            class="Icon_iconWrapper MerchantCard_driverIcon"
                            style="width:16px;height:16px"><svg viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                                    fill="currentColor"></path>
                            </svg></span>
                        <p class="Typography_p8">27<!-- --> <!-- -->mins</p>
                    </div>
                </div>
                <div class="MerchantCard_content">
                    <div class="MerchantCard_primaryDetails">
                        <p class="Typography_p1 MerchantCard_name">Pizza Hut</p>
                    </div>
                    <div class="MerchantCard_secondaryDetails__c9r_K">
                        <div class="MerchantCard_rating"><span data-test-id=""
                                class="Icon_iconWrapper MerchantCard_starIcon" style="width:12px"><svg
                                    viewBox="0 0 24 25" fill="none" class="Icon_icon">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 1.88c.38 0 .727.208.889.533L15.7 8.07l6.268.91a.969.969 0 0 1 .782.622.89.89 0 0 1-.23.942l-4.562 4.413 1.079 6.246a.905.905 0 0 1-.404.908 1.03 1.03 0 0 1-1.04.053L12 19.244l-5.592 2.92a1.03 1.03 0 0 1-1.04-.053.905.905 0 0 1-.404-.908l1.078-6.246-4.562-4.413a.89.89 0 0 1-.23-.942.969.969 0 0 1 .783-.623L8.3 8.07l2.811-5.656a.988.988 0 0 1 .89-.533Z"
                                        fill="currentColor"></path>
                                </svg></span>
                            <p class="Typography_p8">4.6</p>
                        </div>
                        <div class="MerchantPriceRange_averagePrice">
                            <p
                                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p
                                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p class="Typography_p8 MerchantPriceRange_price">$</p>
                        </div>
                        <p class="Typography_p8 MerchantCard_tags___u15_">Fast Food, Pizza, American</p>
                    </div>
                </div>
            </a></div>
        <div class="MerchantCard_wrapper"><a rel="noopener noreferrer" data-analytic-label="merchantCard"
                data-test-id="merchantCardInCategory" data-analytic-event-content="papa-johns" target="_blank"
                href="/restaurants/details-johns">
                <div class="MerchantCard_imageWrapper">
                    <div class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_">
                        <div class="MerchantPromoTag_promoTag MerchantPromoTag_percentageOff">
                            <p class="Typography_p10">30% Off</p>
                        </div>
                    </div><img alt="Papa John's" fetchpriority="high" decoding="async" data-nimg="fill"
                        class="MerchantCard_image"
                        style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                        src="https://images.snoonu.com/brand/2024-07/8429a262-599f-412d-98f6-105722b1eed4_output.png?format=webp">
                    <div class="MerchantCard_deliveryTime"><span data-test-id=""
                            class="Icon_iconWrapper MerchantCard_driverIcon"
                            style="width:16px;height:16px"><svg viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                                    fill="currentColor"></path>
                            </svg></span>
                        <p class="Typography_p8">27<!-- --> <!-- -->mins</p>
                    </div>
                </div>
                <div class="MerchantCard_content">
                    <div class="MerchantCard_primaryDetails">
                        <p class="Typography_p1 MerchantCard_name">Papa John's</p>
                    </div>
                    <div class="MerchantCard_secondaryDetails__c9r_K">
                        <div class="MerchantCard_rating"><span data-test-id=""
                                class="Icon_iconWrapper MerchantCard_starIcon" style="width:12px"><svg
                                    viewBox="0 0 24 25" fill="none" class="Icon_icon">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 1.88c.38 0 .727.208.889.533L15.7 8.07l6.268.91a.969.969 0 0 1 .782.622.89.89 0 0 1-.23.942l-4.562 4.413 1.079 6.246a.905.905 0 0 1-.404.908 1.03 1.03 0 0 1-1.04.053L12 19.244l-5.592 2.92a1.03 1.03 0 0 1-1.04-.053.905.905 0 0 1-.404-.908l1.078-6.246-4.562-4.413a.89.89 0 0 1-.23-.942.969.969 0 0 1 .783-.623L8.3 8.07l2.811-5.656a.988.988 0 0 1 .89-.533Z"
                                        fill="currentColor"></path>
                                </svg></span>
                            <p class="Typography_p8">4.6</p>
                        </div>
                        <div class="MerchantPriceRange_averagePrice">
                            <p
                                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p
                                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p class="Typography_p8 MerchantPriceRange_price">$</p>
                        </div>
                        <p class="Typography_p8 MerchantCard_tags___u15_">Fast Food, Pizza, American</p>
                    </div>
                </div>
            </a></div>
        <div class="MerchantCard_wrapper"><a rel="noopener noreferrer" data-analytic-label="merchantCard"
                data-test-id="merchantCardInCategory" data-analytic-event-content="raising-canes" target="_blank"
                href="/restaurants/details-canes">
                <div class="MerchantCard_imageWrapper">
                    <div class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_"></div><img
                        alt="Raising Cane's" fetchpriority="auto" loading="lazy" decoding="async" data-nimg="fill"
                        class="MerchantCard_image"
                        style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                        src="https://images.snoonu.com/brand/2025-08/90fe8a7c-403a-4d04-b559-28449ec8d163_output.png?format=webp">
                    <div class="MerchantCard_deliveryTime"><span data-test-id=""
                            class="Icon_iconWrapper MerchantCard_driverIcon"
                            style="width:16px;height:16px"><svg viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                                    fill="currentColor"></path>
                            </svg></span>
                        <p class="Typography_p8">34<!-- --> <!-- -->mins</p>
                    </div>
                </div>
                <div class="MerchantCard_content">
                    <div class="MerchantCard_primaryDetails">
                        <p class="Typography_p1 MerchantCard_name">Raising Cane's</p>
                    </div>
                    <div class="MerchantCard_secondaryDetails__c9r_K">
                        <div class="MerchantCard_rating"><span data-test-id=""
                                class="Icon_iconWrapper MerchantCard_starIcon" style="width:12px"><svg
                                    viewBox="0 0 24 25" fill="none" class="Icon_icon">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 1.88c.38 0 .727.208.889.533L15.7 8.07l6.268.91a.969.969 0 0 1 .782.622.89.89 0 0 1-.23.942l-4.562 4.413 1.079 6.246a.905.905 0 0 1-.404.908 1.03 1.03 0 0 1-1.04.053L12 19.244l-5.592 2.92a1.03 1.03 0 0 1-1.04-.053.905.905 0 0 1-.404-.908l1.078-6.246-4.562-4.413a.89.89 0 0 1-.23-.942.969.969 0 0 1 .783-.623L8.3 8.07l2.811-5.656a.988.988 0 0 1 .89-.533Z"
                                        fill="currentColor"></path>
                                </svg></span>
                            <p class="Typography_p8">4.3</p>
                        </div>
                        <div class="MerchantPriceRange_averagePrice">
                            <p
                                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p
                                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p class="Typography_p8 MerchantPriceRange_price">$</p>
                        </div>
                        <p class="Typography_p8 MerchantCard_tags___u15_">Fries, Fried Chicken, Sandwiches</p>
                    </div>
                </div>
            </a></div>
        <div class="MerchantCard_wrapper"><a rel="noopener noreferrer" data-analytic-label="merchantCard"
                data-test-id="merchantCardInCategory" data-analytic-event-content="blaze" target="_blank"
                href="/restaurants/details">
                <div class="MerchantCard_imageWrapper">
                    <div class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_">
                        <div class="MerchantPromoTag_promoTag MerchantPromoTag_freeDelivery__K_r4_"><span
                                data-test-id=""
                                class="Icon_iconWrapper MerchantPromoTag_freeDeliveryIcon"><svg
                                    viewBox="0 0 28 14" fill="none" xmlns="http://www.w3.org/2000/svg"
                                    class="Icon_icon">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M15.4 0 0 9.8l13.642-2.397L12.6 14 28 4.2 14.363 6.58 15.4 0Z"
                                        fill="currentColor"></path>
                                </svg></span>
                            <p class="Typography_p10">Free Delivery</p>
                        </div>
                        <div class="MerchantPromoTag_promoTag MerchantPromoTag_percentageOff">
                            <p class="Typography_p10">50% Off</p>
                        </div>
                        <div class="MerchantPromoTag_promoTag MerchantPromoTag_supportLocal">
                            <p class="Typography_p10">Support Local</p>
                        </div>
                    </div><img alt="Blaze Fried Chicken" fetchpriority="auto" loading="lazy" decoding="async"
                        data-nimg="fill" class="MerchantCard_image"
                        style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                        src="https://images.snoonu.com/brand/2025-03/4c99030f-a5ad-41c6-b52f-4bc78f5a0434_output.png?format=webp">
                    <div class="MerchantCard_deliveryTime"><span data-test-id=""
                            class="Icon_iconWrapper MerchantCard_driverIcon"
                            style="width:16px;height:16px"><svg viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                                    fill="currentColor"></path>
                            </svg></span>
                        <p class="Typography_p8">44<!-- --> <!-- -->mins</p>
                    </div>
                </div>
                <div class="MerchantCard_content">
                    <div class="MerchantCard_primaryDetails">
                        <p class="Typography_p1 MerchantCard_name">Blaze Fried Chicken</p>
                    </div>
                    <div class="MerchantCard_secondaryDetails__c9r_K">
                        <div class="MerchantCard_rating"><span data-test-id=""
                                class="Icon_iconWrapper MerchantCard_starIcon" style="width:12px"><svg
                                    viewBox="0 0 24 25" fill="none" class="Icon_icon">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 1.88c.38 0 .727.208.889.533L15.7 8.07l6.268.91a.969.969 0 0 1 .782.622.89.89 0 0 1-.23.942l-4.562 4.413 1.079 6.246a.905.905 0 0 1-.404.908 1.03 1.03 0 0 1-1.04.053L12 19.244l-5.592 2.92a1.03 1.03 0 0 1-1.04-.053.905.905 0 0 1-.404-.908l1.078-6.246-4.562-4.413a.89.89 0 0 1-.23-.942.969.969 0 0 1 .783-.623L8.3 8.07l2.811-5.656a.988.988 0 0 1 .89-.533Z"
                                        fill="currentColor"></path>
                                </svg></span>
                            <p class="Typography_p8">4.5</p>
                        </div>
                        <div class="MerchantPriceRange_averagePrice">
                            <p
                                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p class="Typography_p8 MerchantPriceRange_price">$</p>
                            <p class="Typography_p8 MerchantPriceRange_price">$</p>
                        </div>
                        <p class="Typography_p8 MerchantCard_tags___u15_">Fast Food, Fried Chicken, Burgers</p>
                    </div>
                </div>
            </a></div>
        <div class="MerchantCard_wrapper"><a rel="noopener noreferrer" data-analytic-label="merchantCard"
                data-test-id="merchantCardInCategory" data-analytic-event-content="milk-and-cream" target="_blank"
                href="/restaurants/details-and-cream">
                <div class="MerchantCard_imageWrapper">
                    <div class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_"></div><img
                        alt="Haleeb W Qeshta" fetchpriority="auto" loading="lazy" decoding="async" data-nimg="fill"
                        class="MerchantCard_image"
                        style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                        src="https://images.snoonu.com/brand/2025-09/f5ebe2c9-d4d9-45b6-a072-a2e8da72d49f_output.png?format=webp">
                    <div class="MerchantCard_deliveryTime"><span data-test-id=""
                            class="Icon_iconWrapper MerchantCard_driverIcon"
                            style="width:16px;height:16px"><svg viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                                    fill="currentColor"></path>
                            </svg></span>
                        <p class="Typography_p8">33<!-- --> <!-- -->mins</p>
                    </div>
                </div>
                <div class="MerchantCard_content">
                    <div class="MerchantCard_primaryDetails">
                        <p class="Typography_p1 MerchantCard_name">Haleeb W Qeshta</p>
                    </div>
                    <div class="MerchantCard_secondaryDetails__c9r_K">
                        <div class="MerchantCard_rating"><span data-test-id=""
                                class="Icon_iconWrapper MerchantCard_starIcon" style="width:12px"><svg
                                    viewBox="0 0 24 25" fill="none" class="Icon_icon">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 1.88c.38 0 .727.208.889.533L15.7 8.07l6.268.91a.969.969 0 0 1 .782.622.89.89 0 0 1-.23.942l-4.562 4.413 1.079 6.246a.905.905 0 0 1-.404.908 1.03 1.03 0 0 1-1.04.053L12 19.244l-5.592 2.92a1.03 1.03 0 0 1-1.04-.053.905.905 0 0 1-.404-.908l1.078-6.246-4.562-4.413a.89.89 0 0 1-.23-.942.969.969 0 0 1 .783-.623L8.3 8.07l2.811-5.656a.988.988 0 0 1 .89-.533Z"
                                        fill="currentColor"></path>
                                </svg></span>
                            <p class="Typography_p8">4.6</p>
                        </div>
                        <div class="MerchantPriceRange_averagePrice">
                            <p
                                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p
                                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p class="Typography_p8 MerchantPriceRange_price">$</p>
                        </div>
                        <p class="Typography_p8 MerchantCard_tags___u15_">Desserts, Sandwiches, Arabic Sweets</p>
                    </div>
                </div>
            </a></div>
        <div class="MerchantCard_wrapper"><a rel="noopener noreferrer" data-analytic-label="merchantCard"
                data-test-id="merchantCardInCategory" data-analytic-event-content="tea-time" target="_blank"
                href="/restaurants/details-time">
                <div class="MerchantCard_imageWrapper">
                    <div class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_">
                        <div class="MerchantPromoTag_promoTag MerchantPromoTag_supportLocal">
                            <p class="Typography_p10">Support Local</p>
                        </div>
                    </div><img alt="Tea Time" fetchpriority="auto" loading="lazy" decoding="async" data-nimg="fill"
                        class="MerchantCard_image"
                        style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                        src="https://images.snoonu.com/brand/2025-05/1d4906e6-e4b3-45ba-af3a-b968faa5cc04_output.png?format=webp">
                    <div class="MerchantCard_deliveryTime"><span data-test-id=""
                            class="Icon_iconWrapper MerchantCard_driverIcon"
                            style="width:16px;height:16px"><svg viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                                    fill="currentColor"></path>
                            </svg></span>
                        <p class="Typography_p8">30<!-- --> <!-- -->mins</p>
                    </div>
                </div>
                <div class="MerchantCard_content">
                    <div class="MerchantCard_primaryDetails">
                        <p class="Typography_p1 MerchantCard_name">Tea Time</p>
                    </div>
                    <div class="MerchantCard_secondaryDetails__c9r_K">
                        <div class="MerchantCard_rating"><span data-test-id=""
                                class="Icon_iconWrapper MerchantCard_starIcon" style="width:12px"><svg
                                    viewBox="0 0 24 25" fill="none" class="Icon_icon">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 1.88c.38 0 .727.208.889.533L15.7 8.07l6.268.91a.969.969 0 0 1 .782.622.89.89 0 0 1-.23.942l-4.562 4.413 1.079 6.246a.905.905 0 0 1-.404.908 1.03 1.03 0 0 1-1.04.053L12 19.244l-5.592 2.92a1.03 1.03 0 0 1-1.04-.053.905.905 0 0 1-.404-.908l1.078-6.246-4.562-4.413a.89.89 0 0 1-.23-.942.969.969 0 0 1 .783-.623L8.3 8.07l2.811-5.656a.988.988 0 0 1 .89-.533Z"
                                        fill="currentColor"></path>
                                </svg></span>
                            <p class="Typography_p8">4.7</p>
                        </div>
                        <div class="MerchantPriceRange_averagePrice">
                            <p
                                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p
                                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p class="Typography_p8 MerchantPriceRange_price">$</p>
                        </div>
                        <p class="Typography_p8 MerchantCard_tags___u15_">Fast Food, Sandwiches, Beverages</p>
                    </div>
                </div>
            </a></div>
        <div class="MerchantCard_wrapper"><a rel="noopener noreferrer" data-analytic-label="merchantCard"
                data-test-id="merchantCardInCategory" data-analytic-event-content="pickl" target="_blank"
                href="/restaurants/details">
                <div class="MerchantCard_imageWrapper">
                    <div class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_"></div><img alt="Pickl"
                        fetchpriority="auto" loading="lazy" decoding="async" data-nimg="fill"
                        class="MerchantCard_image"
                        style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                        src="https://images.snoonu.com/brand/2025-04/4cdfa90a-a7d5-4721-a042-103812ed64eb_output.png?format=webp">
                    <div class="MerchantCard_deliveryTime"><span data-test-id=""
                            class="Icon_iconWrapper MerchantCard_driverIcon"
                            style="width:16px;height:16px"><svg viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                                    fill="currentColor"></path>
                            </svg></span>
                        <p class="Typography_p8">27<!-- --> <!-- -->mins</p>
                    </div>
                </div>
                <div class="MerchantCard_content">
                    <div class="MerchantCard_primaryDetails">
                        <p class="Typography_p1 MerchantCard_name">Pickl</p>
                    </div>
                    <div class="MerchantCard_secondaryDetails__c9r_K">
                        <div class="MerchantCard_rating"><span data-test-id=""
                                class="Icon_iconWrapper MerchantCard_starIcon" style="width:12px"><svg
                                    viewBox="0 0 24 25" fill="none" class="Icon_icon">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 1.88c.38 0 .727.208.889.533L15.7 8.07l6.268.91a.969.969 0 0 1 .782.622.89.89 0 0 1-.23.942l-4.562 4.413 1.079 6.246a.905.905 0 0 1-.404.908 1.03 1.03 0 0 1-1.04.053L12 19.244l-5.592 2.92a1.03 1.03 0 0 1-1.04-.053.905.905 0 0 1-.404-.908l1.078-6.246-4.562-4.413a.89.89 0 0 1-.23-.942.969.969 0 0 1 .783-.623L8.3 8.07l2.811-5.656a.988.988 0 0 1 .89-.533Z"
                                        fill="currentColor"></path>
                                </svg></span>
                            <p class="Typography_p8">4.6</p>
                        </div>
                        <div class="MerchantPriceRange_averagePrice">
                            <p
                                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p
                                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p class="Typography_p8 MerchantPriceRange_price">$</p>
                        </div>
                        <p class="Typography_p8 MerchantCard_tags___u15_">Fried Chicken, Burgers, Milkshake,
                            American</p>
                    </div>
                </div>
            </a></div>
        <div class="MerchantCard_wrapper"><a rel="noopener noreferrer" data-analytic-label="merchantCard"
                data-test-id="merchantCardInCategory" data-analytic-event-content="texas-chicken" target="_blank"
                href="/restaurants/details-chicken">
                <div class="MerchantCard_imageWrapper">
                    <div class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_"></div><img
                        alt="Texas Chicken" fetchpriority="auto" loading="lazy" decoding="async" data-nimg="fill"
                        class="MerchantCard_image"
                        style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                        src="https://images.snoonu.com/brand/2024-05/1f697a56-5267-4e46-a2e1-9c67613bb44f_output.png?format=webp">
                    <div class="MerchantCard_deliveryTime"><span data-test-id=""
                            class="Icon_iconWrapper MerchantCard_driverIcon"
                            style="width:16px;height:16px"><svg viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                                    fill="currentColor"></path>
                            </svg></span>
                        <p class="Typography_p8">32<!-- --> <!-- -->mins</p>
                    </div>
                </div>
                <div class="MerchantCard_content">
                    <div class="MerchantCard_primaryDetails">
                        <p class="Typography_p1 MerchantCard_name">Texas Chicken</p>
                    </div>
                    <div class="MerchantCard_secondaryDetails__c9r_K">
                        <div class="MerchantCard_rating"><span data-test-id=""
                                class="Icon_iconWrapper MerchantCard_starIcon" style="width:12px"><svg
                                    viewBox="0 0 24 25" fill="none" class="Icon_icon">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M12 1.88c.38 0 .727.208.889.533L15.7 8.07l6.268.91a.969.969 0 0 1 .782.622.89.89 0 0 1-.23.942l-4.562 4.413 1.079 6.246a.905.905 0 0 1-.404.908 1.03 1.03 0 0 1-1.04.053L12 19.244l-5.592 2.92a1.03 1.03 0 0 1-1.04-.053.905.905 0 0 1-.404-.908l1.078-6.246-4.562-4.413a.89.89 0 0 1-.23-.942.969.969 0 0 1 .783-.623L8.3 8.07l2.811-5.656a.988.988 0 0 1 .89-.533Z"
                                        fill="currentColor"></path>
                                </svg></span>
                            <p class="Typography_p8">4.5</p>
                        </div>
                        <div class="MerchantPriceRange_averagePrice">
                            <p
                                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p
                                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p class="Typography_p8 MerchantPriceRange_price">$</p>
                        </div>
                        <p class="Typography_p8 MerchantCard_tags___u15_">Fast Food, Fried Chicken</p>
                    </div>
                </div>
            </a></div>
        <div></div>
        <div class="SkeletonMerchantCard_card">
            <div style="border-radius:0"
                class="Skeleton_skeleton SkeletonMerchantCard_image Skeleton_animate"></div>
            <div class="SkeletonMerchantCard_content">
                <div style="width:80%;border-radius:4px"
                    class="Skeleton_skeleton SkeletonMerchantCard_name Skeleton_animate"></div>
                <div style="width:50%;border-radius:4px"
                    class="Skeleton_skeleton SkeletonMerchantCard_primaryDetails Skeleton_animate">
                </div>
            </div>
        </div>
    </div>
</div>
</template>