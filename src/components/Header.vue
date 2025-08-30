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
          <div @click="()=>{
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
                    alt="map" decoding="async" data-nimg="responsive" src="/public/static/media/map.527f1b44.png"
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
            src="/public/static/media/logo.6da502f3.svg" /><span data-test-id=""
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
          <div class="CatalogDrawer_drawer catalog-drawer" :class="{ 'CatalogDrawer_open': isCatalogOpen }">
            <div class="CatalogDrawer_header">
              <div class="CatalogDrawer_cross"><span data-test-id="" class="Icon_iconWrapper"
                  style="width:16px;height:16px"><svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="Icon_icon">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M11.82 10 18 3.82 16.18 2 10 8.18 3.82 2 2 3.82 8.18 10 2 16.18 3.82 18 10 11.82 16.18 18 18 16.18 11.82 10Z"
                      fill="currentColor"></path>
                  </svg></span></div><a rel="noopener noreferrer" data-analytic-label="logo"
                data-analytic-element-location="header" data-test-id="snoonulogo"
                class="Logo_logo__oq6_b Logo_isFullForm" href="/"><img alt="Snoonu" decoding="async" data-nimg="fill"
                  class="Logo_fullLogo"
                  style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                  src="/public/static/media/logo.6da502f3.svg" /><span data-test-id=""
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
            <div class="CatalogCategoryList_wrapper">
              <div class="CatalogCategoryList_list"><a rel="noopener noreferrer" data-analytic-label="category"
                  data-analytic-event-content="restaurants" data-analytic-element-location="catalog"
                  class="CatalogCategory_category" href="/restaurants?source=catalog">
                  <div class="CatalogCategory_imageWrapper"><img alt="Restaurants" loading="lazy" decoding="async"
                      data-nimg="fill"
                      style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      src="https://images.snoonu.com/service_box_banners/2025-03/afe7a199-d3b4-445b-8efb-fe2834b0a03d_output.png?format=webp" />
                  </div>
                  <p class="Typography_p5 CatalogCategory_label">Restaurants
                  </p>
                </a><a rel="noopener noreferrer" data-analytic-label="category" data-analytic-event-content="snoomart"
                  data-analytic-element-location="catalog" class="CatalogCategory_category"
                  href="/groceries/snoomart?source=catalog">
                  <div class="CatalogCategory_imageWrapper"><img alt="Snoomart" loading="lazy" decoding="async"
                      data-nimg="fill"
                      style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      src="https://images.snoonu.com/service_box_banners/2025-03/60b40baf-4d94-4e18-b195-74c716f220c2_output.png?format=webp" />
                  </div>
                  <p class="Typography_p5 CatalogCategory_label">Snoomart
                  </p>
                </a><a rel="noopener noreferrer" data-analytic-label="category" data-analytic-event-content="groceries"
                  data-analytic-element-location="catalog" class="CatalogCategory_category"
                  href="/groceries?source=catalog">
                  <div class="CatalogCategory_imageWrapper"><img alt="Grocery" loading="lazy" decoding="async"
                      data-nimg="fill"
                      style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      src="https://images.snoonu.com/service_box_banners/2025-03/b7f093a1-8ad9-4f22-b329-58bf6278c195_output.png?format=webp" />
                  </div>
                  <p class="Typography_p5 CatalogCategory_label">Grocery</p>
                </a><a rel="noopener noreferrer" data-analytic-label="category"
                  data-analytic-event-content="flowers-and-gifts" data-analytic-element-location="catalog"
                  class="CatalogCategory_category" href="/flowers-and-gifts?source=catalog">
                  <div class="CatalogCategory_imageWrapper"><img alt="Flowers &amp; Gifts" loading="lazy"
                      decoding="async" data-nimg="fill"
                      style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      src="https://images.snoonu.com/service_box_banners/2025-03/cef79c12-42fa-429e-b7b3-3cdca6aa27e0_output.png?format=webp" />
                  </div>
                  <p class="Typography_p5 CatalogCategory_label">Flowers
                    &amp; Gifts</p>
                </a><a rel="noopener noreferrer" data-analytic-label="category" data-analytic-event-content="pharmacy"
                  data-analytic-element-location="catalog" class="CatalogCategory_category"
                  href="/pharmacy?source=catalog">
                  <div class="CatalogCategory_imageWrapper"><img alt="Pharmacy" loading="lazy" decoding="async"
                      data-nimg="fill"
                      style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      src="https://images.snoonu.com/service_box_banners/2025-02/dc629124-c7f3-4b27-ba76-c37e0c223a53_output.png?format=webp" />
                  </div>
                  <p class="Typography_p5 CatalogCategory_label">Pharmacy
                  </p>
                </a>
                <div class="CatalogCategory_category">
                  <div class="CatalogCategory_imageWrapper"><img alt="Health &amp; Beauty" loading="lazy"
                      decoding="async" data-nimg="fill"
                      style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      src="https://images.snoonu.com/service_box_banners/2024-06/1963e95a-fe6a-4660-b64a-42d33fbdf3df_output.png?format=webp" />
                  </div>
                  <p class="Typography_p5 CatalogCategory_label">Health
                    &amp; Beauty</p><span data-test-id="" class="Icon_iconWrapper CatalogCategory_icon"><svg
                      viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="m7.8 2 9.325 8L7.8 18l-1.675-1.956L13.17 10 6.125 3.956 7.8 2Z" fill="currentColor"></path>
                    </svg></span>
                </div><a rel="noopener noreferrer" data-analytic-label="category" data-analytic-event-content="-2"
                  data-analytic-element-location="catalog" class="CatalogCategory_category"
                  href="/scity?source=catalog">
                  <div class="CatalogCategory_imageWrapper"><img alt="S City" loading="lazy" decoding="async"
                      data-nimg="fill"
                      style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      src="/public/static/images/categories/scity.png" /></div>
                  <p class="Typography_p5 CatalogCategory_label">S City</p>
                </a>
              </div>
              <div class="CatalogCategoryList_list"></div>
              <div class="CatalogCategoryList_titleWrapper">
                <h3 class="Typography_h3 CatalogCategoryList_title">Market
                </h3>
              </div>
              <div class="CatalogCategoryList_list">
                <div class="CatalogCategory_category">
                  <div class="CatalogCategory_imageWrapper"><img alt="Electronics" loading="lazy" decoding="async"
                      data-nimg="fill"
                      style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      src="https://images.snoonu.com/service_box_banners/2025-05/8c0538ec-99b0-4dd0-a7ed-fcef410a129c_output.png?format=webp" />
                  </div>
                  <p class="Typography_p5 CatalogCategory_label">Electronics
                  </p><span data-test-id="" class="Icon_iconWrapper CatalogCategory_icon"><svg viewBox="0 0 21 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="m7.8 2 9.325 8L7.8 18l-1.675-1.956L13.17 10 6.125 3.956 7.8 2Z" fill="currentColor"></path>
                    </svg></span>
                </div>
                <div class="CatalogCategory_category">
                  <div class="CatalogCategory_imageWrapper"><img alt="Toys &amp; Kids" loading="lazy" decoding="async"
                      data-nimg="fill"
                      style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      src="https://images.snoonu.com/image_category/2024-02/133340d0-92d4-431a-a336-c7f6b7c6778f_php3kHX4p.png?format=webp" />
                  </div>
                  <p class="Typography_p5 CatalogCategory_label">Toys &amp;
                    Kids</p><span data-test-id="" class="Icon_iconWrapper CatalogCategory_icon"><svg viewBox="0 0 21 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="m7.8 2 9.325 8L7.8 18l-1.675-1.956L13.17 10 6.125 3.956 7.8 2Z" fill="currentColor"></path>
                    </svg></span>
                </div>
                <div class="CatalogCategory_category">
                  <div class="CatalogCategory_imageWrapper"><img alt="Pets" loading="lazy" decoding="async"
                      data-nimg="fill"
                      style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      src="https://images.snoonu.com/image_category/2024-02/e62061b2-6b3c-4bd5-88d5-2dfbd64280ef_phpJJA71N.png?format=webp" />
                  </div>
                  <p class="Typography_p5 CatalogCategory_label">Pets</p>
                  <span data-test-id="" class="Icon_iconWrapper CatalogCategory_icon"><svg viewBox="0 0 21 20"
                      fill="none" xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="m7.8 2 9.325 8L7.8 18l-1.675-1.956L13.17 10 6.125 3.956 7.8 2Z" fill="currentColor"></path>
                    </svg></span>
                </div>
                <div class="CatalogCategory_category">
                  <div class="CatalogCategory_imageWrapper"><img alt="Home &amp; Garden" loading="lazy" decoding="async"
                      data-nimg="fill"
                      style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      src="https://images.snoonu.com/image_category/2024-04/c069a933-0d63-41cb-83f9-3702a4c087e9_phpXaMBzR.png?format=webp" />
                  </div>
                  <p class="Typography_p5 CatalogCategory_label">Home &amp;
                    Garden</p><span data-test-id="" class="Icon_iconWrapper CatalogCategory_icon"><svg
                      viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="m7.8 2 9.325 8L7.8 18l-1.675-1.956L13.17 10 6.125 3.956 7.8 2Z" fill="currentColor"></path>
                    </svg></span>
                </div>
                <div class="CatalogCategory_category">
                  <div class="CatalogCategory_imageWrapper"><img alt="Stationery &amp; Supplies" loading="lazy"
                      decoding="async" data-nimg="fill"
                      style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      src="https://images.snoonu.com/image_category/2024-04/de34a290-188a-49b6-a39b-980af9f05704_phpSnATBz.png?format=webp" />
                  </div>
                  <p class="Typography_p5 CatalogCategory_label">Stationery
                    &amp; Supplies</p><span data-test-id="" class="Icon_iconWrapper CatalogCategory_icon"><svg
                      viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="m7.8 2 9.325 8L7.8 18l-1.675-1.956L13.17 10 6.125 3.956 7.8 2Z" fill="currentColor"></path>
                    </svg></span>
                </div>
                <div class="CatalogCategory_category">
                  <div class="CatalogCategory_imageWrapper"><img alt="Sports &amp; Outdoors" loading="lazy"
                      decoding="async" data-nimg="fill"
                      style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      src="https://images.snoonu.com/image_category/2024-04/dbf4698b-f937-4f54-b2e8-5b40f86d3fef_php1uIukT.png?format=webp" />
                  </div>
                  <p class="Typography_p5 CatalogCategory_label">Sports
                    &amp; Outdoors</p><span data-test-id="" class="Icon_iconWrapper CatalogCategory_icon"><svg
                      viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="m7.8 2 9.325 8L7.8 18l-1.675-1.956L13.17 10 6.125 3.956 7.8 2Z" fill="currentColor"></path>
                    </svg></span>
                </div>
                <div class="CatalogCategory_category">
                  <div class="CatalogCategory_imageWrapper"><img alt="Fashion &amp; Accessories" loading="lazy"
                      decoding="async" data-nimg="fill"
                      style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
                      src="https://images.snoonu.com/image_category/2024-04/9768712b-5f65-4741-a59c-917ba01bd6a6_phpcgnYzC.png?format=webp" />
                  </div>
                  <p class="Typography_p5 CatalogCategory_label">Fashion
                    &amp; Accessories</p><span data-test-id="" class="Icon_iconWrapper CatalogCategory_icon"><svg
                      viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="m7.8 2 9.325 8L7.8 18l-1.675-1.956L13.17 10 6.125 3.956 7.8 2Z" fill="currentColor"></path>
                    </svg></span>
                </div>
              </div>
            </div><span data-test-id="" class="Icon_iconWrapper CatalogDrawer_icon" style="width:24px;height:24px"><svg
                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M11.82 10 18 3.82 16.18 2 10 8.18 3.82 2 2 3.82 8.18 10 2 16.18 3.82 18 10 11.82 16.18 18 18 16.18 11.82 10Z"
                  fill="currentColor"></path>
              </svg></span>
          </div>
        </div>
      </div>
      <div class="Search_wrapper___mZGv">
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

<script>
import SearchBar from "./SearchBar.vue";
import { ref, onMounted, onBeforeUnmount } from "vue"

const drawer = ref(null)


export default {
  name: "Header",
  components: {
    SearchBar,
  },
  data() {
    return {
      showCatalog: false,
      isCatalogOpen: false,
      showMap:false,
      drawer: null,
      mapContainer:null,
      currentView: "main",
      currentTitle: "Categories",
      currentSubmenu: [],
      mainSections: [
        {
          id: "services",
          title: null,
          items: [
            {
              id: "restaurants",
              name: "Restaurants",
              icon: "🍔",
              bgColor: "#ffebee",
              hasChildren: false,
            },
            {
              id: "snoomart",
              name: "Snoomart",
              icon: "🛒",
              bgColor: "#e8f5e8",
              hasChildren: false,
            },
            {
              id: "grocery",
              name: "Grocery",
              icon: "🥬",
              bgColor: "#e8f5e8",
              hasChildren: false,
            },
            {
              id: "flowers",
              name: "Flowers & Gifts",
              icon: "🌸",
              bgColor: "#fce4ec",
              hasChildren: false,
            },
            {
              id: "pharmacy",
              name: "Pharmacy",
              icon: "💊",
              bgColor: "#e3f2fd",
              hasChildren: false,
            },
            {
              id: "health",
              name: "Health & Beauty",
              icon: "💄",
              bgColor: "#fff3e0",
              hasChildren: true,
            },
            {
              id: "scity",
              name: "S City",
              icon: "🏢",
              bgColor: "#f3e5f5",
              hasChildren: false,
            },
          ],
        },
        {
          id: "market",
          title: "Market",
          items: [
            {
              id: "electronics",
              name: "Electronics",
              icon: "📱",
              bgColor: "#e3f2fd",
              hasChildren: true,
            },
            {
              id: "toys",
              name: "Toys & Kids",
              icon: "🧸",
              bgColor: "#fff3e0",
              hasChildren: true,
            },
            {
              id: "pets",
              name: "Pets",
              icon: "🐕",
              bgColor: "#ffebee",
              hasChildren: true,
            },
            {
              id: "home",
              name: "Home & Garden",
              icon: "🏡",
              bgColor: "#e8f5e8",
              hasChildren: true,
            },
            {
              id: "stationery",
              name: "Stationery & Supplies",
              icon: "📝",
              bgColor: "#f3e5f5",
              hasChildren: true,
            },
            {
              id: "sports",
              name: "Sports & Outdoors",
              icon: "⚽",
              bgColor: "#e0f2f1",
              hasChildren: true,
            },
          ],
        },
      ],
      submenus: {
        health: [
          { id: "perfumes", name: "Perfumes", icon: "🧴", bgColor: "#fff3e0" },
          { id: "makeup", name: "Makeup", icon: "💄", bgColor: "#fce4ec" },
          { id: "facecare", name: "Face Care", icon: "🧴", bgColor: "#fff3e0" },
          { id: "pharmacy2", name: "Pharmacy", icon: "💊", bgColor: "#e3f2fd" },
          {
            id: "eyeglasses",
            name: "Eyeglasses Supplies",
            icon: "👓",
            bgColor: "#ffebee",
          },
          {
            id: "momcare",
            name: "Mom & Baby Care",
            icon: "🍼",
            bgColor: "#fff3e0",
          },
          { id: "bodycare", name: "Body Care", icon: "🧴", bgColor: "#fce4ec" },
          {
            id: "haircare",
            name: "Hair Care & Styling",
            icon: "💇",
            bgColor: "#fff3e0",
          },
          {
            id: "personal",
            name: "Personal Care & Hygiene",
            icon: "🧼",
            bgColor: "#fff3e0",
          },
          {
            id: "vitamins",
            name: "Vitamins & Supplements",
            icon: "💊",
            bgColor: "#fff3e0",
          },
          { id: "mens", name: "Mens Grooming", icon: "🪒", bgColor: "#e3f2fd" },
        ],
        electronics: [
          {
            id: "phones",
            name: "Mobile Phones",
            icon: "📱",
            bgColor: "#e3f2fd",
          },
          {
            id: "laptops",
            name: "Laptops & Computers",
            icon: "💻",
            bgColor: "#e3f2fd",
          },
          {
            id: "headphones",
            name: "Headphones & Audio",
            icon: "🎧",
            bgColor: "#e3f2fd",
          },
        ],
      },
    };
  },
  methods: {

    toggleCatalog() {
      this.showCatalog = !this.showCatalog;
      this.resetToMain();
    },
    closeCatalog() {
      this.showCatalog = false;
      this.resetToMain();
    },
    resetToMain() {
      this.currentView = "main";
      this.currentTitle = "Categories";
      this.currentSubmenu = [];
    },
    handleItemClick(item) {
      if (item.hasChildren && this.submenus[item.id]) {
        this.currentView = "submenu";
        this.currentTitle = item.name;
        this.currentSubmenu = this.submenus[item.id];
      } else {
        console.log("Navigate to:", item.name);
        this.closeCatalog();
      }
    },
    handleSubItemClick(item) {
      console.log("Navigate to subcategory:", item.name);
      this.closeCatalog();
    },
    goBack() {
      this.resetToMain();
    },

    handleClickOutside(event) {
      if (this.$refs.drawer && !this.$refs.drawer.contains(event.target)) {
        if (this.isCatalogOpen) {

          this.isCatalogOpen = false;
        }

      }
      if(this.$refs.mapContainer && !this.$refs.mapContainer.contains(event.target)){
        this.showMap = false;
    }
  }
  },
  mounted() {
    document.addEventListener("click", this.handleClickOutside)
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleClickOutside)
  },

};
</script>
