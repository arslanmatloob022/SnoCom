<script lang="ts" setup>
const activeTab = ref("ForYou");
const tabs = [
    {
        name: "ForYou",
        label: "For You",
        activeIcon: "fa-solid fa-star text-white-500",
        inactiveIcon: "fa-regular fa-star text-black-500",
    },
    {
        name: "Popular",
        label: "Popular",
        activeIcon: "fa-solid fa-fire text-white-500",
        inactiveIcon: "fa-solid fa-fire text-black-500",
    },
]
const trendingCategories = ref([
    {
        name: "Toys",
        alt: "Toys",
        href: "/snoonu-market/baby-and-kids/toys?source=top%20subcategories%20block",
        img: "https://images.snoonu.com/market_place_category/2025-2/0713e7e8-14e1-4e87-931f-01c68e4b02be_toys.png?format=webp",
    },
    {
        name: "Food",
        alt: "Food",
        href: "/snoonu-market/pets/food?source=top%20subcategories%20block",
        img: "https://images.snoonu.com/market_place_category/2025-2/78a1b9b7-4161-49a6-9b44-0cf7922a3ac0_food.png?format=webp",
    },
    {
        name: "Makeup",
        alt: "Makeup",
        href: "/snoonu-market/health-and-beauty/makeup?source=top%20subcategories%20block",
        img: "https://images.snoonu.com/market_place_category/2025-2/171fba60-2fd4-4fa3-8644-b2b0051bdd0e_makeup.png?format=webp",
    },
    {
        name: "Perfumes & Fragrance",
        alt: "Perfumes & Fragrance",
        href: "/snoonu-market/health-and-beauty/perfumes?source=top%20subcategories%20block",
        img: "https://images.snoonu.com/market_place_category/2025-2/5110eecf-cec3-4451-9851-f8d771a72a51_perfumes.png?format=webp",
    },
]);

const products = ref([
    {
        id: "67e44bebae5d655aea6f4fd0",
        name: "Bc Time Restore Clay Treatment",
        price: "128 QR",
        rating: 2.9,
        ratingCount: 19,
        img: "https://images.snoonu.com/product/2025-5/c24d7c7a-60d0-451d-95ef-1e4527f99892_claytreatment.jpg?format=webp",
        href: "/product/bc-time-restore-clay-treatment/67e44bebae5d655aea6f4fd0?mpLevel=mp+home+page+feed&mpCategoryLevel=mp+home+page+feed",
    },
    {
        id: "6855f8bfba58056b03647656",
        name: "S24 Ultra leather case No.18840",
        price: "65 QR",
        rating: 4.9,
        ratingCount: 2,
        img: "https://images.snoonu.com/product/2025-6/fa7a5a3e-8190-4a6c-bca5-982f1ae31672_S24Ultraleathercase01.jpg?format=webp",
        href: "/product/s24-ultra-leather-case-no18840/6855f8bfba58056b03647656?mpLevel=mp+home+page+feed&mpCategoryLevel=mp+home+page+feed",
    },
    {
        id: "67c6d8d6ed7210215c5b0fa3",
        name: "ABC Glow Mask",
        price: "235 QR",
        rating: 1.9,
        ratingCount: 11,
        img: "https://images.snoonu.com/product/2024-8/a9325cb3-b411-4145-ab75-2bc21b3fb4de_uf12.jpg",
        href: "/product/abc-glow-mask/67c6d8d6ed7210215c5b0fa3?mpLevel=mp+home+page+feed&mpCategoryLevel=mp+home+page+feed",
    },
    {
        id: "67c6d8d6ed7210215c5b0fa4",
        name: "ABC Glow Mask (alt version)",
        price: "235 QR",
        rating: 2.4,
        ratingCount: 1,
        img: "https://images.snoonu.com/product/2025-3/0eada8c5-09c4-454a-9189-e3393e8aae47_39b1d069cffa415f822b512018b8cfb6.jpg?format=webp",
        href: "/product/abc-glow-mask/67c6d8d6ed7210215c5b0fa3?mpLevel=mp+home+page+feed&mpCategoryLevel=mp+home+page+feed",
    },
    {
        id: "67c6d8d6ed7210215c33a4",
        name: "ABC Glow Mask (alt version)",
        price: "235 QR",
        rating: 3.4,
        ratingCount: 45,
        img: "https://images.snoonu.com/product/2025-6/9d8a4036-b40d-47cc-a8fc-0405a241b308_S24Ultraleathercase03.jpg",
        href: "/product/abc-glow-mask/67c6d8d6ed7210215c5b0fa3?mpLevel=mp+home+page+feed&mpCategoryLevel=mp+home+page+feed",
    },
]);
const setActiveTab = (tabName: string) => {
    activeTab.value = tabName;
};


</script>
<template>

    <div class="MarketplaceContent_container">
        <div class="FeedTabs_tabsContainer">
            <div v-for="tab in tabs" :key="tab.name" class="FeedTabs_feedTab Tab_tab"
                :class="{ Tab_active: activeTab === tab.name }" @click="setActiveTab(tab.name)">
                <i :class="activeTab === tab.name ? tab.activeIcon : tab.inactiveIcon" class="text-sm"></i>
                <h5 class="Typography_h5">{{ tab.label }}</h5>
            </div>
        </div>
        <div class="FeedContent_group">

            <div class="TrendingCategories_container">
                <div class="TrendingCategories_heading"><span data-test-id="" class="Icon_iconWrapper"
                        style="width: 20px; height: 20px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                            fill="none" class="Icon_icon">
                            <path
                                d="M12.389.891a.517.517 0 0 0-.61.099l-9.143 9.458a.48.48 0 0 0-.125.439.502.502 0 0 0 .305.35l3.51 1.395c.73.29 1.158 1.05 1.027 1.825l-.697 4.14a.482.482 0 0 0 .274.517.513.513 0 0 0 .596-.102l9.001-9.186a.474.474 0 0 0 .125-.452.488.488 0 0 0-.321-.347l-3.642-1.265a1.667 1.667 0 0 1-1.075-1.957l1.032-4.373a.48.48 0 0 0-.257-.54Z"
                                fill="currentColor"></path>
                        </svg></span>
                    <p class="Typography_p1">Trendy categories</p>
                </div>
                <div class="TrendingCategories_grid__Q7ua_">
                    <a v-for="(cat, i) in trendingCategories" :key="i" class="TrendingCategories_card" :href="cat.href"
                        rel="noopener noreferrer">
                        <img :alt="cat.alt" loading="lazy" width="48" height="48" decoding="async" data-nimg="1"
                            class="TrendingCategories_image" :src="cat.img" style="color: transparent;" />
                        <p class="Typography_p6">{{ cat.name }}</p>
                        <span class="Icon_iconWrapper TrendingCategories_arrow" style="width: 16px; height: 16px;">
                            <i class="fa fa-arrow-right"></i>
                        </span>
                    </a>
                </div>
            </div>



            <a v-for="(product, i) in products" :key="product.id" class="productCard" :id="product.id"
                :href="product.href" target="_blank" rel="noopener noreferrer" :data-analytic-label="product.name">
                <div class="ProductCardMarketplace_imageWrapper">
                    <div class="ProductImage_wrapper">
                        <div class="ProductImage_imageWrapper">
                            <img :alt="product.name" loading="lazy" decoding="async" data-nimg="fill" :src="product.img"
                                style="position:absolute;height:100%;width:100%;inset:0;color:transparent;" />
                        </div>
                    </div>

                    <!-- Plus button -->
                    <button class="ProductCounter_button ProductCounter_wrapper__yiOb_ ProductCounter_plusWrapper">
                        <span class="Icon_iconWrapper ProductCounter_icon">
                            <i class="fa fa-plus"></i>
                        </span>
                    </button>

                    <!-- Heart -->
                    <div class="HeartIcon_wrapper HeartIcon_heartInActive ProductCardMarketplace_favourite">
                        <i class="fa fa-heart"></i>
                    </div>
                </div>

                <div class="ProductInfo_wrapper___tfgf">
                    <div class="ProductPrice_prices">
                        <p class="Typography_p4">{{ product.price }}</p>
                    </div>
                    <p class="Typography_p14__r_99o ProductInfo_label">
                        {{ product.name }}
                    </p>

                    <!-- Ratings (if available) -->
                    <div v-if="product.rating" class="flex items-center space-x-2">
                        <!-- Rating Number -->
                        <p class="text-sm font-medium text-gray-600">
                            {{ product.rating }}
                        </p>

                        <!-- Stars -->
                        <div class="flex space-x-1">
                            <span v-for="n in 5" :key="n" class="text-sm"
                                :class="n <= Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'">
                                <i class="fa fa-star"></i>
                            </span>
                        </div>

                        <!-- Rating Count -->
                        <p class="text-xs text-gray-500">
                            ({{ product.ratingCount }})
                        </p>
                    </div>
                </div>
            </a>


        </div><button class="Button_button Button_secondary MarketplaceContent_showMoreButton mb-4"
            data-analytic-label=""><span class="Button_content">Show more</span></button>
    </div>
</template>