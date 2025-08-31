<script lang="ts" setup>

const slideInterval = ref(null);
const currentSlide = ref(4);
const slides = ref([
    {
        "id": 1,
        "title": "million-awaits",
        "image": "https://images.snoonu.com/promo_banners/2025-08/9eb3d28c-e3c4-4a87-b5bb-0e5e677c492c_output.png?format=webp"
    },
    {
        "id": 2,
        "title": "Back to School - Electronics",
        "image": "https://images.snoonu.com/banner/2025-08/0c057aab-61e1-478f-95c5-1e0abb585f61_output.png"
    },
    {
        "id": 3,
        "title": "Together We Can ",
        "image": "https://images.snoonu.com/promo_banners/2025-08/9eb3d28c-e3c4-4a87-b5bb-0e5e677c492c_output.png?format=webp"
    },
    {
        "id": 4,
        "title": "Give For Education",
        "image": "https://images.snoonu.com/promo_banners/2025-08/69784d02-9615-463e-8880-9e18343748bc_output.png?format=webp"
    },
    {
        "id": 5,
        "title": "Fight the Flu",
        "image": "https://images.snoonu.com/promo_banners/2025-08/1b623ede-271a-4e48-86c5-415aae378eab_output.png?format=webp"
    },
    {
        "id": 6,
        "title": "Free Delivery (FV x GV)",
        "image": "https://images.snoonu.com/promo_banners/2025-07/10f3cbde-ce8b-41b9-9223-f54538ea4d39_output.png?format=webp"
    },
    {
        "id": 7,
        "title": "Refresh Your Day",
        "image": "https://images.snoonu.com/promo_banners/2025-08/8d43fb39-d666-42b2-b4ba-cf5325b49c2c_output.png?format=webp"
    },
    {
        "id": 8,
        "title": "Matcha Mania",
        "image": "https://images.snoonu.com/promo_banners/2025-07/7371ebac-7ba9-421c-956f-80fb9f18f50d_output.png?format=webp"
    },
    {
        "id": 9,
        "title": "Snoomart x Royal Club",
        "image": "https://images.snoonu.com/promo_banners/2025-08/7ede3e08-6f3d-4944-bc32-6544fe97a17f_output.png?format=webp"
    },
    {
        "id": 10,
        "title": "Unmissable Arrivals",
        "image": "https://images.snoonu.com/promo_banners/2025-07/06ff80c5-fcce-45de-897e-21f5b498f9f3_output.png?format=webp"
    },
    {
        "id": 11,
        "title": "Corporate Offers",
        "image": "https://images.snoonu.com/promo_banners/2025-04/d2f738da-3fa9-4235-9d27-8b4806c499cf_output.png?format=webp"
    },
    {
        "id": 12,
        "title": "Al Furjan",
        "image": "https://images.snoonu.com/promo_banners/2024-10/342e0f8c-7930-49af-9698-1d73737964d5_output.png?format=webp"
    }
])
const categories = ref([
    {
        name: "Restaurants",
        alt: "Restaurants",
        link: "/restaurants",
        img: "/public/static/media/restaurants.279e620f.png",
    },
    {
        name: "Grocery",
        alt: "Grocery",
        link: "/groceries",
        img: "/public/static/media/grocery.d9e25ccc.png",
    },
    {
        name: "Health & Beauty",
        alt: "Health & Beauty",
        link: "/snoonu-market/health-and-beauty",
        img: "https://images.snoonu.com/image_category/2024-04/39bcebfe-ded8-4874-b915-8a7effe38044_php3IduoK.png?format=webp",
    },
    {
        name: "Electronics",
        alt: "Electronics",
        link: "/snoonu-market/electronics",
        img: "https://images.snoonu.com/service_box_banners/2025-05/8c0538ec-99b0-4dd0-a7ed-fcef410a129c_output.png?format=webp",
    },
    {
        name: "Pets",
        alt: "Pets",
        link: "/snoonu-market/pets",
        img: "https://images.snoonu.com/image_category/2024-02/e62061b2-6b3c-4bd5-88d5-2dfbd64280ef_phpJJA71N.png?format=webp",
    },
    {
        name: "Toys & Kids",
        alt: "Toys & Kids",
        link: "/snoonu-market/baby-and-kids",
        img: "https://images.snoonu.com/image_category/2024-02/133340d0-92d4-431a-a336-c7f6b7c6778f_php3kHX4p.png?format=webp",
    },
    {
        name: "Fashion & Accessories",
        alt: "Fashion & Accessories",
        link: "/snoonu-market/clothes-and-accessories",
        img: "https://images.snoonu.com/image_category/2024-04/9768712b-5f65-4741-a59c-917ba01bd6a6_phpcgnYzC.png?format=webp",
    },
    {
        name: "Home & Garden",
        alt: "Home & Garden",
        link: "/snoonu-market/household-and-garden",
        img: "https://images.snoonu.com/image_category/2024-04/c069a933-0d63-41cb-83f9-3702a4c087e9_phpXaMBzR.png?format=webp",
    },
    {
        name: "Sports & Outdoors",
        alt: "Sports & Outdoors",
        link: "/snoonu-market/sport-and-outdoors",
        img: "https://images.snoonu.com/image_category/2024-04/dbf4698b-f937-4f54-b2e8-5b40f86d3fef_php1uIukT.png?format=webp",
    },
    {
        name: "Stationery & Supplies",
        alt: "Stationery & Supplies",
        link: "/snoonu-market/books-and-stationery",
        img: "https://images.snoonu.com/image_category/2024-04/de34a290-188a-49b6-a39b-980af9f05704_phpSnATBz.png?format=webp",
    },
]);

const allServices = ref({
    name: "All Services",
    alt: "All Services",
    img: "https://images.snoonu.com/image_category/2024-04/9…-4741-a59c-917ba01bd6a6_phpcgnYzC.png?format=webp",
});
const startSlideshow = () => {
    slideInterval.value = setInterval(() => {
        console.log("interval")
        currentSlide.value = (currentSlide.value + 1) % slides.value.length;
        console.log("Current slide:", currentSlide.value);
    }, 3000);
};
const stopSlideshow = () => {
    if (slideInterval.value) {
        clearInterval(slideInterval.value);
    }
};

onMounted(() => {
    startSlideshow();
});

onBeforeUnmount(() => {
    stopSlideshow();
});

</script>

<template>
    <div class="">
        <h1 class="Typography_h1 HiddenTitle_title">Snoonu - online shopping with fast
            delivery</h1>
        <div class="HeroSection_wrapper">
            <!-- categories -->
            <div class="Categories_marketWrapper">
                <a v-for="(cat, index) in categories" :key="index" rel="noopener noreferrer"
                    data-analytic-label="category" data-test-id="categoryIcon" :data-analytic-event-content="cat.name"
                    :href="cat.link">
                    <div class="CategoryThumbnail_category">
                        <div class="CategoryThumbnail_imageWrapper">
                            <img :alt="cat.alt" decoding="async" data-nimg="fill"
                                class="CategoryThumbnail_thumbnailImage"
                                style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                                :src="cat.img" />
                        </div>
                        <p class="Typography_p4 CategoryThumbnail_label">{{ cat.name }}</p>
                    </div>
                </a>

                <!-- All Services (last block, not a link) -->
                <div class="AllServices_wrapper">
                    <div class="AllServices_imageWrapper">
                        <img :alt="allServices.alt" decoding="async" data-nimg="fill" class="AllServices_allServicesImg"
                            style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                            :src="allServices.img" />
                    </div>
                    <p class="Typography_p4 AllServices_label">{{ allServices.name }}</p>
                </div>
            </div>
            <div class="TopBanners_wrapper">
                <div class="TopBannersOffers_wrapper">
                    <div
                        class="order-1 md:order-2 w-full relative rounded-[2rem] overflow-hidden  from-indigo-500 to-purple-600 h-[200px] md:h-[360px]">
                        <div class="relative w-full h-full transition-transform duration-700"
                            :style="{ transform: `translateY(-${currentSlide * 100}%)` }">
                            <div v-for="(slide, index) in slides" :key="index" class="w-full h-full">
                                <img :src="slide.image" :alt="slide.title" class="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="TopBannersTimedBanners_wrapper"><a class="TopBannersTimedBanners_imageWrapper"
                        href="/selections/2047?byId=1"><img alt="Back to School - Electronics" loading="lazy"
                            decoding="async" data-nimg="fill" class="TopBannersTimedBanners_image"
                            style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                            src="https://images.snoonu.com/banner/2025-08/0c057aab-61e1-478f-95c5-1e0abb585f61_output.png" /></a><a
                        class="TopBannersTimedBanners_imageWrapper" href="/categories/5363"><img
                            alt="International Dog Day" loading="lazy" decoding="async" data-nimg="fill"
                            class="TopBannersTimedBanners_image"
                            style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;background-color: red;"
                            src="https://images.snoonu.com/banner/2025-08/4cd82334-ffee-479c-a05d-9699ee437aca_output.png" /></a>
                </div>

            </div>
        </div>

    </div>
</template>

<style></style>
