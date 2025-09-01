<script lang="ts" setup>
import { useUserStore } from '@/stores/useUserStore'

const store = useUserStore()

const drawer = ref(false)
const mapContainer = ref(false)
const isFocused = ref(false)
const { isLoggedIn, userInfo } = storeToRefs(store)
const showMap = ref(false)
const isCatalogOpen = ref(false)
const isShowingChild = ref(false)
const catalogCategories = ref([
  {
    label: "Restaurants",
    alt: "Restaurants",
    href: "/restaurants?source=catalog",
    img: "https://images.snoonu.com/service_box_banners/2025-03/afe7a199-d3b4-445b-8efb-fe2834b0a03d_output.png?format=webp",
    external: true,
    hasIcon: false,
  },
  {
    label: "Snoomart",
    alt: "Snoomart",
    href: "/groceries/snoomart?source=catalog",
    img: "https://images.snoonu.com/service_box_banners/2025-03/60b40baf-4d94-4e18-b195-74c716f220c2_output.png?format=webp",
    external: true,
    hasIcon: false,
  },
  {
    label: "Grocery",
    alt: "Grocery",
    href: "/groceries?source=catalog",
    img: "https://images.snoonu.com/service_box_banners/2025-03/b7f093a1-8ad9-4f22-b329-58bf6278c195_output.png?format=webp",
    external: true,
    hasIcon: false,
  },
  {
    label: "Flowers & Gifts",
    alt: "Flowers & Gifts",
    href: "/flowers-and-gifts?source=catalog",
    img: "https://images.snoonu.com/service_box_banners/2025-03/cef79c12-42fa-429e-b7b3-3cdca6aa27e0_output.png?format=webp",
    external: true,
    hasIcon: false,
  },
  {
    label: "Pharmacy",
    alt: "Pharmacy",
    href: "/pharmacy?source=catalog",
    img: "https://images.snoonu.com/service_box_banners/2025-02/dc629124-c7f3-4b27-ba76-c37e0c223a53_output.png?format=webp",
    external: true,
    hasIcon: false,
  },
  {
    label: "Health & Beauty",
    alt: "Health & Beauty",
    img: "https://images.snoonu.com/service_box_banners/2024-06/1963e95a-fe6a-4660-b64a-42d33fbdf3df_output.png?format=webp",
    external: false,
    hasIcon: true,
  },
  {
    label: "S City",
    alt: "S City",
    href: "/scity?source=catalog",
    img: "/static/images/categories/scity.png",
    external: true,
    hasIcon: false,
  },
]);

const marketCategories = ref([
  {
    label: "Electronics",
    alt: "Electronics",
    img: "https://images.snoonu.com/service_box_banners/2025-05/8c0538ec-99b0-4dd0-a7ed-fcef410a129c_output.png?format=webp",
    external: false,
    hasIcon: true,
  },
  {
    label: "Toys & Kids",
    alt: "Toys & Kids",
    img: "https://images.snoonu.com/image_category/2024-02/133340d0-92d4-431a-a336-c7f6b7c6778f_php3kHX4p.png?format=webp",
    external: false,
    hasIcon: true,
  },
  {
    label: "Pets",
    alt: "Pets",
    img: "https://images.snoonu.com/image_category/2024-02/e62061b2-6b3c-4bd5-88d5-2dfbd64280ef_phpJJA71N.png?format=webp",
    external: false,
    hasIcon: true,
  },
  {
    label: "Home & Garden",
    alt: "Home & Garden",
    img: "https://images.snoonu.com/image_category/2024-04/c069a933-0d63-41cb-83f9-3702a4c087e9_phpXaMBzR.png?format=webp",
    external: false,
    hasIcon: true,
  },
  {
    label: "Stationery & Supplies",
    alt: "Stationery & Supplies",
    img: "https://images.snoonu.com/image_category/2024-04/de34a290-188a-49b6-a39b-980af9f05704_phpSnATBz.png?format=webp",
    external: false,
    hasIcon: true,
  },
  {
    label: "Sports & Outdoors",
    alt: "Sports & Outdoors",
    img: "https://images.snoonu.com/image_category/2024-04/dbf4698b-f937-4f54-b2e8-5b40f86d3fef_php1uIukT.png?format=webp",
    external: false,
    hasIcon: true,
  },
  {
    label: "Fashion & Accessories",
    alt: "Fashion & Accessories",
    img: "https://images.snoonu.com/image_category/2024-04/9768712b-5f65-4741-a59c-917ba01bd6a6_phpcgnYzC.png?format=webp",
    external: false,
    hasIcon: true,
  },
]);

// const handleClickOutside = (event) => {
//   if (drawer.value && drawer.value.contains(event.target)) {
//     if (isCatalogOpen.value) {
//       isCatalogOpen.value = false;
//     }
//   }
//   if (mapContainer.value && mapContainer.value.contains(event.target)) {
//     // showMap.value = false;
//   }
// };

const handleClickOutside = (event) => {
  console.log("outside clein")
  if (drawer.value && drawer.value.contains(event.target)) {
    drawer.value = false
  }
  if (mapContainer.value && !mapContainer.value.contains(event.target)) {
    // 👆 now it checks "outside" instead of "inside"
    showMap.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside);
});

</script>

<template>
  <header class="Header_header Header_show__xvo_7">
    <div class="Subheader_wrapper">
      <div class="Subheader_leftSide">
        <div class="LocaleSwitcher_wrapper Subheader_locale">
          <div data-analytic-label="locale[ar]" class="LocaleSwitcher_locale">
            <p class="Typography_p6">عربى</p>
          </div>
        </div>
        <!-- <div style="border-radius:28px"
								class="Skeleton_skeleton LocationLoading_loading Skeleton_animate">
							</div> -->

        <div ref="mapContainer" class="LocationBlock_wrapper">
          <div @click="() => {
            showMap = !showMap
          }" class="Selector_wrapper" data-analytic-label="locationSelector" data-test-id="locationBtnOnHeader"><span
              data-test-id="" class="Icon_iconWrapper Selector_icon" style="width: 20px; height: 20px;"><svg
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" fill="none" class="Icon_icon">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M7.06 4.406a8 8 0 0 1 13.656 5.657c0 4.829-3.922 9.212-8 12-4.078-2.788-8-7.171-8-12A8 8 0 0 1 7.06 4.406Zm7.906 5.657a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                  fill="currentColor"></path>
              </svg></span>
            <p class="Typography_p6 Selector_location">Doha, Qatar</p>
          </div>
          <div v-if="showMap" class="Popup_popupEnterDone">
            <div class="Popup_popup LocationBlock_popup">
              <p class="Typography_p1">Select your delivery address</p>
              <p class="Typography_p6 LocationBlock_desc">Availability of shops and products will depend
                on your address</p>
              <div class="LocationBlock_mapWrapper"><span
                  style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative;"><span
                    style="box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 44.4444% 0px 0px;"></span><img
                    alt="map" decoding="async" data-nimg="responsive" src="/static/media/map.527f1b44.png"
                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover; object-position: center center;"><noscript></noscript></span>
              </div>
              <div class="LocationBlock_mapButtons"><button
                  class="Button_button Button_secondary Button_small LocationBlock_skipButton"
                  data-analytic-label="selectLocationSkip"><span class="Button_content">Skip</span></button><button
                  class="Button_button Button_primary Button_small LocationBlock_desktopButton__3j_Su"
                  data-test-id="selectAddressBtn" data-analytic-label="selectLocation"
                  data-analytic-element-location="header"><span class="Button_content"><span data-test-id=""
                      class="Icon_iconWrapper Button_icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25"
                        fill="none" class="Icon_icon">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                          d="m20.014 5.555-15.347 7.27 5.734 1.434c.448.111.798.461.91.909l1.434 5.734 7.27-15.347Zm-.944-2.32A2.45 2.45 0 0 1 22.334 6.5l-7.39 15.6a2.45 2.45 0 0 1-4.591-.455l-1.286-5.142-5.142-1.286a2.45 2.45 0 0 1-.454-4.59l15.6-7.39Z"
                          fill="currentColor"></path>
                      </svg></span>Select Address</span></button><button
                  class="Button_button Button_primary Button_small LocationBlock_mobileButton"
                  data-test-id="selectAddressBtn" data-analytic-label="selectLocation"
                  data-analytic-element-location="header"><span class="Button_content">Select
                    Address</span></button></div>
            </div>
          </div>
        </div>
      </div>
      <div class="Subheader_links"><a class="Subheader_link Subheader_activeLink" href="/">
          <p class="Typography_p6">Market</p>
        </a><a class="Subheader_link" href="/restaurants?source=header">
          <p class="Typography_p6">Restaurants</p>
        </a><a class="Subheader_link" href="/groceries?source=header">
          <p class="Typography_p6">Grocery</p>
        </a><a class="Subheader_link" href="/scity?source=header">
          <p class="Typography_p6">S City</p>
        </a></div>
    </div>
    <div class="Header_nav">
      <div class="Header_logoWithCatalog"><a rel="noopener noreferrer" data-analytic-label="logo"
          data-analytic-element-location="header" data-test-id="snoonulogo" class="Logo_logo__oq6_b" href="/"><img
            alt="Snoonu" decoding="async" data-nimg="fill" class="Logo_fullLogo"
            style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
            src="/static/media/logo.6da502f3.svg" /><span data-test-id=""
            class="Icon_iconWrapper Logo_miniLogo"><svg width="35" height="36" fill="none"
              xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M20.366 32.5c8.12 0 12.979-4.404 12.979-9.953 0-8.582-14.282-7.723-14.282-10.638 0-.972 1.068-1.943 3.199-1.943 3.439 0 6.872 1.889 8.354 3.433L35 7.964C31.857 5.162 27.06 3.5 22.256 3.5H0l.045.26c.978 4.473 3.87 7.237 8.964 8.554-1.247.264-2.578.885-3.523 1.565 1.756 2.958 6.928 5.44 12.716 7.038 3.154.972 6.017 1.582 6.017 3.174 0 1.085-1.186 2.002-3.026 2.002-4.031 0-8.415-2.46-10.194-4.29l-4.803 5.661C9.69 30.724 15.087 32.5 20.36 32.5h.006Z"
                fill="currentColor"></path>
            </svg></span></a>
        <div ref="drawer" class="CatalogMenu_wrapper"><button @click="() => { isCatalogOpen = !isCatalogOpen }"
            class="Button_button Button_secondary Button_small CatalogButton_button"
            data-analytic-label="catalogMenuButton" data-analytic-element-location="header"><span
              class="Button_content"><span data-test-id="" class="Icon_iconWrapper Button_icon"><svg width="20"
                  height="20" fill="none" xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                  <path d="M0 5h20v2.5H0V5ZM20 15H0v-2.5h20V15Z" fill="currentColor">
                  </path>
                </svg></span><span class="CatalogButton_text">Catalog</span></span></button>
          <div v-if="isCatalogOpen" class="CatalogDrawer_overlay"></div>
          <div  v-if="isCatalogOpen" class="CatalogDrawer_drawer catalog-drawer" :class="{ 'CatalogDrawer_open': isCatalogOpen }">
            <span data-test-id="" @click="() => { isCatalogOpen = false }"
              class="Icon_iconWrapper CatalogDrawer_icon CatalogDrawer_open"
              style="width:24px;height:24px"><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="Icon_icon">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M11.82 10 18 3.82 16.18 2 10 8.18 3.82 2 2 3.82 8.18 10 2 16.18 3.82 18 10 11.82 16.18 18 18 16.18 11.82 10Z"
                  fill="currentColor"></path>
              </svg></span>
            <div class="CatalogDrawer_header">
              <div class="CatalogDrawer_cross" @click="() => { isCatalogOpen = false }"><span data-test-id=""
                  class="Icon_iconWrapper" style="width:16px;height:16px"><svg viewBox="0 0 20 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M11.82 10 18 3.82 16.18 2 10 8.18 3.82 2 2 3.82 8.18 10 2 16.18 3.82 18 10 11.82 16.18 18 18 16.18 11.82 10Z"
                      fill="currentColor"></path>
                  </svg></span></div><a rel="noopener noreferrer" data-analytic-label="logo"
                data-analytic-element-location="header" data-test-id="snoonulogo"
                class="Logo_logo__oq6_b Logo_isFullForm" href="/"><img alt="Snoonu" decoding="async" data-nimg="fill"
                  class="Logo_fullLogo"
                  style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                  src="/static/media/logo.6da502f3.svg" /><span data-test-id=""
                  class="Icon_iconWrapper Logo_miniLogo"><svg width="35" height="36" fill="none"
                    xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M20.366 32.5c8.12 0 12.979-4.404 12.979-9.953 0-8.582-14.282-7.723-14.282-10.638 0-.972 1.068-1.943 3.199-1.943 3.439 0 6.872 1.889 8.354 3.433L35 7.964C31.857 5.162 27.06 3.5 22.256 3.5H0l.045.26c.978 4.473 3.87 7.237 8.964 8.554-1.247.264-2.578.885-3.523 1.565 1.756 2.958 6.928 5.44 12.716 7.038 3.154.972 6.017 1.582 6.017 3.174 0 1.085-1.186 2.002-3.026 2.002-4.031 0-8.415-2.46-10.194-4.29l-4.803 5.661C9.69 30.724 15.087 32.5 20.36 32.5h.006Z"
                      fill="currentColor"></path>
                  </svg></span></a>
              <div class="LocaleSwitcher_wrapper CatalogDrawer_languageSwitcher">
                <div data-analytic-label="locale[ar]" class="LocaleSwitcher_locale">
                  <p class="Typography_p6">عربى</p>
                </div>
              </div>
            </div>

            <div v-if="!isShowingChild" class="CatalogCategoryList_wrapper">
              <!-- First List -->
              <div class="CatalogCategoryList_list">
                <template v-for="cat in catalogCategories" :key="cat.label">
                  <a v-if="cat.external" class="CatalogCategory_category" :href="cat.href" target="_blank"
                    rel="noopener noreferrer">
                    <div class="CatalogCategory_imageWrapper">
                      <img :alt="cat.alt" :src="cat.img" />
                    </div>
                    <p class="Typography_p5 CatalogCategory_label">{{ cat.label }}</p>
                  </a>

                  <div v-else class="CatalogCategory_category" @click="isShowingChild = true">
                    <div class="CatalogCategory_imageWrapper">
                      <img :alt="cat.alt" :src="cat.img" />
                    </div>
                    <p class="Typography_p5 CatalogCategory_label">{{ cat.label }}</p>
                    <span v-if="cat.hasIcon" class="Icon_iconWrapper CatalogCategory_icon">
                      <i
                        class="fas fa-chevron-right text-gray-500 bg-white rounded-full p-1 shadow-sm hover:text-gray-700"></i>

                      <!-- <FontAwesomeIcon :icon="faChevronRight" /> -->
                    </span>
                  </div>
                </template>
              </div>

              <!-- Market Title -->
              <div class="CatalogCategoryList_titleWrapper">
                <h3 class="Typography_h3 CatalogCategoryList_title">Market</h3>
              </div>

              <!-- Market List -->
              <div class="CatalogCategoryList_list">
                <div v-for="cat in marketCategories" :key="cat.label" class="CatalogCategory_category"
                  @click="isShowingChild = true">
                  <div class="CatalogCategory_imageWrapper">
                    <img :alt="cat.alt" :src="cat.img" />
                  </div>
                  <p class="Typography_p5 CatalogCategory_label">{{ cat.label }}</p>
                  <span v-if="cat.hasIcon" class="Icon_iconWrapper CatalogCategory_icon">
                    <i
                      class="fas fa-chevron-right text-gray-500 bg-white rounded-full p-1 shadow-sm hover:text-gray-700"></i>

                  </span>
                </div>
              </div>
            </div>


            <div v-if="isShowingChild" class="CatalogMarketplaceCategory_wrapper">
              <div class="CatalogMarketplaceCategory_back"><span data-test-id=""
                  class="Icon_iconWrapper CatalogMarketplaceCategory_backIcon CatalogMarketplaceCategory_backIconGray"><svg
                    viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="m1 10 9.325-8L12 3.956 6.412 8.75H19v2.5H6.412L12 16.044 10.325 18 1 10Z" fill="currentColor">
                    </path>
                  </svg></span>
                <p class="Typography_p6" @click="() => { isShowingChild = false }">Go back</p>
              </div>
              <div class="CatalogMarketplaceCategory_headerMobile">
                <div class="CatalogMarketplaceCategory_backMobile__yU_Tw"><span data-test-id=""
                    class="Icon_iconWrapper CatalogMarketplaceCategory_backIcon"><svg viewBox="0 0 20 20" fill="none"
                      xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="m1 10 9.325-8L12 3.956 6.412 8.75H19v2.5H6.412L12 16.044 10.325 18 1 10Z"
                        fill="currentColor"></path>
                    </svg></span></div><a rel="noopener noreferrer" data-analytic-label="logo"
                  data-analytic-element-location="header" data-test-id="snoonulogo"
                  class="Logo_logo__oq6_b Logo_isFullForm" href="/"><img alt="Snoonu" decoding="async" data-nimg="fill"
                    class="Logo_fullLogo" src="/static/media/logo.6da502f3.svg"
                    style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"><span
                    data-test-id="" class="Icon_iconWrapper Logo_miniLogo"><svg width="35" height="36" fill="none"
                      xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M20.366 32.5c8.12 0 12.979-4.404 12.979-9.953 0-8.582-14.282-7.723-14.282-10.638 0-.972 1.068-1.943 3.199-1.943 3.439 0 6.872 1.889 8.354 3.433L35 7.964C31.857 5.162 27.06 3.5 22.256 3.5H0l.045.26c.978 4.473 3.87 7.237 8.964 8.554-1.247.264-2.578.885-3.523 1.565 1.756 2.958 6.928 5.44 12.716 7.038 3.154.972 6.017 1.582 6.017 3.174 0 1.085-1.186 2.002-3.026 2.002-4.031 0-8.415-2.46-10.194-4.29l-4.803 5.661C9.69 30.724 15.087 32.5 20.36 32.5h.006Z"
                        fill="currentColor"></path>
                    </svg></span></a>
                <div class="LocaleSwitcher_wrapper CatalogMarketplaceCategory_languageSwitcher">
                  <div data-analytic-label="locale[ar]" class="LocaleSwitcher_locale">
                    <p class="Typography_p6">عربى</p>
                  </div>
                </div>
              </div><a rel="noopener noreferrer" data-analytic-label="category" class="CatalogMarketplaceCategory_title"
                href="/snoonu-market/electronics?source=catalog">
                <h3 class="Typography_h3">Electronics</h3><span data-test-id=""
                  class="Icon_iconWrapper CatalogMarketplaceCategory_rightIcon"><svg viewBox="0 0 21 20" fill="none"
                    xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="m7.8 2 9.325 8L7.8 18l-1.675-1.956L13.17 10 6.125 3.956 7.8 2Z" fill="currentColor"></path>
                  </svg></span>
              </a>
              <div class="CatalogMarketplaceCategory_list"><a rel="noopener noreferrer" data-analytic-label="category"
                  data-analytic-event-content="Mobiles" data-analytic-element-location="catalog"
                  class="CatalogMarketplaceCategory_category" href="/snoonu-market/electronics/mobiles?source=catalog">
                  <div class="CatalogMarketplaceCategory_imageWrapper___jHu5"><img alt="Mobiles" loading="lazy"
                      decoding="async" data-nimg="fill"
                      src="https://images.snoonu.com/market_place_category/2025-4/d568238c-d133-4616-b274-1f57c6722bfa_Mobiles.png?format=webp"
                      style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"></div>
                  <p class="Typography_p5 CatalogMarketplaceCategory_label">Mobiles</p>
                </a><a rel="noopener noreferrer" data-analytic-label="category"
                  data-analytic-event-content="Digital Cards" data-analytic-element-location="catalog"
                  class="CatalogMarketplaceCategory_category"
                  href="/snoonu-market/electronics/digital-cards?source=catalog">
                  <div class="CatalogMarketplaceCategory_imageWrapper___jHu5"><img alt="Digital Cards" loading="lazy"
                      decoding="async" data-nimg="fill"
                      src="https://images.snoonu.com/market_place_category/2025-4/0beadaa9-8a6f-4ee6-9e6d-0ff3c2d09093_ecards.png?format=webp"
                      style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"></div>
                  <p class="Typography_p5 CatalogMarketplaceCategory_label">Digital Cards</p>
                </a><a rel="noopener noreferrer" data-analytic-label="category"
                  data-analytic-event-content="Accessories" data-analytic-element-location="catalog"
                  class="CatalogMarketplaceCategory_category"
                  href="/snoonu-market/electronics/accessories?source=catalog">
                  <div class="CatalogMarketplaceCategory_imageWrapper___jHu5"><img alt="Accessories" loading="lazy"
                      decoding="async" data-nimg="fill"
                      src="https://images.snoonu.com/market_place_category/2025-4/ba1ddf54-4714-4466-82f2-4990eb08f996_accessories.png?format=webp"
                      style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"></div>
                  <p class="Typography_p5 CatalogMarketplaceCategory_label">Accessories</p>
                </a><a rel="noopener noreferrer" data-analytic-label="category"
                  data-analytic-event-content="Wearable Gadgets" data-analytic-element-location="catalog"
                  class="CatalogMarketplaceCategory_category"
                  href="/snoonu-market/electronics/wearable-gadgets?source=catalog">
                  <div class="CatalogMarketplaceCategory_imageWrapper___jHu5"><img alt="Wearable Gadgets" loading="lazy"
                      decoding="async" data-nimg="fill"
                      src="https://images.snoonu.com/market_place_category/2025-4/0629e2c7-5ecf-4c09-b630-693dd465b8c5_WearableGadgets.png?format=webp"
                      style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"></div>
                  <p class="Typography_p5 CatalogMarketplaceCategory_label">Wearable Gadgets</p>
                </a><a rel="noopener noreferrer" data-analytic-label="category" data-analytic-event-content="Headphones"
                  data-analytic-element-location="catalog" class="CatalogMarketplaceCategory_category"
                  href="/snoonu-market/electronics/headphones?source=catalog">
                  <div class="CatalogMarketplaceCategory_imageWrapper___jHu5"><img alt="Headphones" loading="lazy"
                      decoding="async" data-nimg="fill"
                      src="https://images.snoonu.com/market_place_category/2025-4/ff9457cf-5b6a-4722-a627-c81cc6eaeac0_Headphones.png?format=webp"
                      style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"></div>
                  <p class="Typography_p5 CatalogMarketplaceCategory_label">Headphones</p>
                </a><a rel="noopener noreferrer" data-analytic-label="category"
                  data-analytic-event-content="Video Games" data-analytic-element-location="catalog"
                  class="CatalogMarketplaceCategory_category"
                  href="/snoonu-market/electronics/video-games?source=catalog">
                  <div class="CatalogMarketplaceCategory_imageWrapper___jHu5"><img alt="Video Games" loading="lazy"
                      decoding="async" data-nimg="fill"
                      src="https://images.snoonu.com/market_place_category/2025-4/b0086852-8843-414c-8487-bbf939aaf182_videogames.png?format=webp"
                      style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"></div>
                  <p class="Typography_p5 CatalogMarketplaceCategory_label">Video Games</p>
                </a><a rel="noopener noreferrer" data-analytic-label="category"
                  data-analytic-event-content="Home Appliances" data-analytic-element-location="catalog"
                  class="CatalogMarketplaceCategory_category"
                  href="/snoonu-market/electronics/home-appliances?source=catalog">
                  <div class="CatalogMarketplaceCategory_imageWrapper___jHu5"><img alt="Home Appliances" loading="lazy"
                      decoding="async" data-nimg="fill"
                      src="https://images.snoonu.com/market_place_category/2025-4/d919e5e0-f9e9-4451-afbc-e7b6267a3aa5_home_appliances.png?format=webp"
                      style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"></div>
                  <p class="Typography_p5 CatalogMarketplaceCategory_label">Home Appliances</p>
                </a><a rel="noopener noreferrer" data-analytic-label="category"
                  data-analytic-event-content="Home Entertainment" data-analytic-element-location="catalog"
                  class="CatalogMarketplaceCategory_category" href="/snoonu-market/electronics/tv-audio?source=catalog">
                  <div class="CatalogMarketplaceCategory_imageWrapper___jHu5"><img alt="Home Entertainment"
                      loading="lazy" decoding="async" data-nimg="fill"
                      src="https://images.snoonu.com/market_place_category/2025-4/109450a1-78e6-4aac-ba22-09a0193af1d1_tvaudio.png?format=webp"
                      style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"></div>
                  <p class="Typography_p5 CatalogMarketplaceCategory_label">Home Entertainment</p>
                </a><a rel="noopener noreferrer" data-analytic-label="category"
                  data-analytic-event-content="Beauty &amp; Grooming Devices" data-analytic-element-location="catalog"
                  class="CatalogMarketplaceCategory_category"
                  href="/snoonu-market/electronics/health-beauty-devices?source=catalog">
                  <div class="CatalogMarketplaceCategory_imageWrapper___jHu5"><img alt="Beauty &amp; Grooming Devices"
                      loading="lazy" decoding="async" data-nimg="fill"
                      src="https://images.snoonu.com/market_place_category/2025-4/edd742d6-e607-491d-a924-107e87c23221_beauty_devices.png?format=webp"
                      style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"></div>
                  <p class="Typography_p5 CatalogMarketplaceCategory_label">Beauty &amp; Grooming Devices
                  </p>
                </a><a rel="noopener noreferrer" data-analytic-label="category"
                  data-analytic-event-content="iPads &amp; Tablets" data-analytic-element-location="catalog"
                  class="CatalogMarketplaceCategory_category" href="/snoonu-market/electronics/tablets?source=catalog">
                  <div class="CatalogMarketplaceCategory_imageWrapper___jHu5"><img alt="iPads &amp; Tablets"
                      loading="lazy" decoding="async" data-nimg="fill"
                      src="https://images.snoonu.com/market_place_category/2025-4/573cfd96-5114-4deb-b067-8862333d1eb6_tablets.png?format=webp"
                      style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"></div>
                  <p class="Typography_p5 CatalogMarketplaceCategory_label">iPads &amp; Tablets</p>
                </a><a rel="noopener noreferrer" data-analytic-label="category"
                  data-analytic-event-content="Camera &amp; Photo" data-analytic-element-location="catalog"
                  class="CatalogMarketplaceCategory_category"
                  href="/snoonu-market/electronics/camera-photo?source=catalog">
                  <div class="CatalogMarketplaceCategory_imageWrapper___jHu5"><img alt="Camera &amp; Photo"
                      loading="lazy" decoding="async" data-nimg="fill"
                      src="https://images.snoonu.com/market_place_category/2025-4/d6db7333-2994-4a47-ac35-62406040cfbe_cameraphoto.png?format=webp"
                      style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"></div>
                  <p class="Typography_p5 CatalogMarketplaceCategory_label">Camera &amp; Photo</p>
                </a><a rel="noopener noreferrer" data-analytic-label="category"
                  data-analytic-event-content="Laptops and Computers" data-analytic-element-location="catalog"
                  class="CatalogMarketplaceCategory_category"
                  href="/snoonu-market/electronics/laptops-and-computers?source=catalog">
                  <div class="CatalogMarketplaceCategory_imageWrapper___jHu5"><img alt="Laptops and Computers"
                      loading="lazy" decoding="async" data-nimg="fill"
                      src="https://images.snoonu.com/market_place_category/2025-4/7ba2a2f7-86f6-4b53-8f06-1a843f246c4f_laptopsandcomputers.png?format=webp"
                      style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"></div>
                  <p class="Typography_p5 CatalogMarketplaceCategory_label">Laptops and Computers</p>
                </a><a rel="noopener noreferrer" data-analytic-label="category"
                  data-analytic-event-content="Office Electronics" data-analytic-element-location="catalog"
                  class="CatalogMarketplaceCategory_category"
                  href="/snoonu-market/electronics/office-electronics?source=catalog">
                  <div class="CatalogMarketplaceCategory_imageWrapper___jHu5"><img alt="Office Electronics"
                      loading="lazy" decoding="async" data-nimg="fill"
                      src="https://images.snoonu.com/market_place_category/2025-4/c032fa3c-0a1a-4601-af97-9c686898861e_officeelectronics.png?format=webp"
                      style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"></div>
                  <p class="Typography_p5 CatalogMarketplaceCategory_label">Office Electronics</p>
                </a></div>
            </div>


            <span data-test-id="" class="Icon_iconWrapper CatalogDrawer_icon" style="width:24px;height:24px"><svg
                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M11.82 10 18 3.82 16.18 2 10 8.18 3.82 2 2 3.82 8.18 10 2 16.18 3.82 18 10 11.82 16.18 18 18 16.18 11.82 10Z"
                  fill="currentColor"></path>
              </svg></span>
          </div>
        </div>
      </div>
       <div :class="['Search_wrapper___mZGv', { Search_focused: isFocused }]">
        <form class="Search_searchWrapper__Fa_4X">
          <div class="SearchSelector_wrapper__P_w2s">
            <div class="SearchSelector_selector">
              <p class="Typography_p8 SearchSelector_label">Market</p><span data-test-id=""
                class="Icon_iconWrapper SearchSelector_chevronDown" style="width:16px;height:16px"><svg
                  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                  <path d="m12 13.232-6-6L4.232 9 12 16.768 19.768 9 18 7.232l-6 6Z" fill="currentColor"></path>
                </svg></span>
            </div>
          </div>
          <div class="Autocomplete_wrapper"><input data-test-id="searchField"

             @focus="isFocused = true"
          @blur="isFocused = false"
              class="Autocomplete_input Autocomplete_small Search_input__djH_7"
              placeholder="Search for stores and products" autoComplete="off" type="search" name="search" value="" />
            <div class="Autocomplete_rightSection"><button data-test-id="searchFieldBtn"
                class="SearchButton_button"><span data-test-id="" class="Icon_iconWrapper SearchButton_searchIcon"
                  style="width:20px;height:20px"><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="Icon_icon">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M9 .75a8.25 8.25 0 1 0 4.883 14.9l3.467 3.468 1.768-1.768-3.467-3.467A8.25 8.25 0 0 0 9 .75ZM3.25 9a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0Z"
                      fill="currentColor"></path>
                  </svg></span></button></div>
          </div>
        </form>
      </div>
      <div class="Header_sideWrapper">
        <div class="LoginButton_wrapper__by23_"><button class="Button_button Button_secondary Button_small"
            data-test-id="loginBtn" data-analytic-label="loginButton" data-analytic-element-location="header"><span
              class="Button_content">Login</span></button></div>
      </div>
    </div>
  </header>
</template>
