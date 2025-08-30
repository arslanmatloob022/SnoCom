<template>
  <div class="MarketplaceContent_container">
    <div class="FeedTabs_tabsContainer">
      <div v-for="tab in tabs" :key="tab.name" class="FeedTabs_feedTab Tab_tab px-5"
        :class="{ Tab_active: activeTab === tab.name }" @click="setActiveTab(tab.name)">
          <i
    :class="activeTab === tab.name ? tab.activeIcon : tab.inactiveIcon"
    class="text-lg"
  ></i>
        <h5 class="Typography_h5">{{ tab.label }}</h5>
      </div>
    </div>
    <div class="FeedContent_group">

      <div class="TrendingCategories_container">
        <div class="TrendingCategories_heading"><span data-test-id="" class="Icon_iconWrapper"
            style="width: 20px; height: 20px;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"
              class="Icon_icon">
              <path
                d="M12.389.891a.517.517 0 0 0-.61.099l-9.143 9.458a.48.48 0 0 0-.125.439.502.502 0 0 0 .305.35l3.51 1.395c.73.29 1.158 1.05 1.027 1.825l-.697 4.14a.482.482 0 0 0 .274.517.513.513 0 0 0 .596-.102l9.001-9.186a.474.474 0 0 0 .125-.452.488.488 0 0 0-.321-.347l-3.642-1.265a1.667 1.667 0 0 1-1.075-1.957l1.032-4.373a.48.48 0 0 0-.257-.54Z"
                fill="currentColor"></path>
            </svg></span>
          <p class="Typography_p1">Trendy categories</p>
        </div>
        <div class="TrendingCategories_grid__Q7ua_"><a class="TrendingCategories_card"
            data-test-id="open-cat-654ce6936a5d33ee18c99c7f"
            href="/snoonu-market/baby-and-kids/toys?source=top%20subcategories%20block"><img alt="Toys" loading="lazy"
              width="48" height="48" decoding="async" data-nimg="1" class="TrendingCategories_image"
              src="https://images.snoonu.com/market_place_category/2025-2/0713e7e8-14e1-4e87-931f-01c68e4b02be_toys.png?format=webp"
              style="color: transparent;">
            <p class="Typography_p6">Toys</p><span data-test-id="" class="Icon_iconWrapper TrendingCategories_arrow"
              style="width: 16px; height: 16px;"><svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="Icon_icon">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="m7.8 2 9.325 8L7.8 18l-1.675-1.956L13.17 10 6.125 3.956 7.8 2Z" fill="currentColor"></path>
              </svg></span>
          </a><a class="TrendingCategories_card" data-test-id="open-cat-654ce749737d4f77b95d5d2c"
            href="/snoonu-market/pets/food?source=top%20subcategories%20block"><img alt="Food" loading="lazy" width="48"
              height="48" decoding="async" data-nimg="1" class="TrendingCategories_image"
              src="https://images.snoonu.com/market_place_category/2025-2/78a1b9b7-4161-49a6-9b44-0cf7922a3ac0_food.png?format=webp"
              style="color: transparent;">
            <p class="Typography_p6">Food</p><span data-test-id="" class="Icon_iconWrapper TrendingCategories_arrow"
              style="width: 16px; height: 16px;"><svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="Icon_icon">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="m7.8 2 9.325 8L7.8 18l-1.675-1.956L13.17 10 6.125 3.956 7.8 2Z" fill="currentColor"></path>
              </svg></span>
          </a><a class="TrendingCategories_card" data-test-id="open-cat-654cd8e180358f4a18710c66"
            href="/snoonu-market/health-and-beauty/makeup?source=top%20subcategories%20block"><img alt="Makeup"
              loading="lazy" width="48" height="48" decoding="async" data-nimg="1" class="TrendingCategories_image"
              src="https://images.snoonu.com/market_place_category/2025-2/171fba60-2fd4-4fa3-8644-b2b0051bdd0e_makeup.png?format=webp"
              style="color: transparent;">
            <p class="Typography_p6">Makeup</p><span data-test-id="" class="Icon_iconWrapper TrendingCategories_arrow"
              style="width: 16px; height: 16px;"><svg viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="Icon_icon">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="m7.8 2 9.325 8L7.8 18l-1.675-1.956L13.17 10 6.125 3.956 7.8 2Z" fill="currentColor"></path>
              </svg></span>
          </a><a class="TrendingCategories_card" data-test-id="open-cat-654cd90ed07d06acd40c6145"
            href="/snoonu-market/health-and-beauty/perfumes?source=top%20subcategories%20block"><img
              alt="Perfumes &amp; Fragrance" loading="lazy" width="48" height="48" decoding="async" data-nimg="1"
              class="TrendingCategories_image"
              src="https://images.snoonu.com/market_place_category/2025-2/5110eecf-cec3-4451-9851-f8d771a72a51_perfumes.png?format=webp"
              style="color: transparent;">
            <p class="Typography_p6">Perfumes &amp; Fragrance</p><span data-test-id=""
              class="Icon_iconWrapper TrendingCategories_arrow" style="width: 16px; height: 16px;"><svg
                viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="m7.8 2 9.325 8L7.8 18l-1.675-1.956L13.17 10 6.125 3.956 7.8 2Z" fill="currentColor"></path>
              </svg></span>
          </a></div>
      </div>



      <a rel="noopener noreferrer" data-analytic-label="Bc Time Restore Clay Treatment" target="_blank"
        class="productCard" id="67e44bebae5d655aea6f4fd0"
        href="/product/bc-time-restore-clay-treatment/67e44bebae5d655aea6f4fd0?mpLevel=mp+home+page+feed&amp;mpCategoryLevel=mp+home+page+feed">
        <div data-analytic-label="productCardMarketplace" data-test-id="productCardMarketplace"
          data-analytic-event-content="0" class="">
          <div class="ProductCardMarketplace_imageWrapper">
            <div class="ProductImage_wrapper">
              <div class="ProductImage_imageWrapper"><img alt="Bc Time Restore Clay Treatment" loading="lazy"
                  decoding="async" data-nimg="fill"
                  src="https://images.snoonu.com/product/2025-5/c24d7c7a-60d0-451d-95ef-1e4527f99892_claytreatment.jpg?format=webp"
                  style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"></div>
            </div><button class="ProductCounter_button ProductCounter_wrapper__yiOb_ ProductCounter_plusWrapper"><span
                data-test-id="" class="Icon_iconWrapper ProductCounter_icon"><svg xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25" fill="none" class="Icon_icon">
                  <path d="M4.716 11.688h16.5v2.5h-16.5v-2.5Z" fill="currentColor"></path>
                  <path d="M11.716 21.188v-16.5h2.5v16.5h-2.5Z" fill="currentColor"></path>
                </svg></span></button>
            <div class="HeartIcon_wrapper HeartIcon_heartInActive ProductCardMarketplace_favourite"
              data-test-id="favouriteHearIcon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.3448 3C14.949 3 12.8227 4.90959 11.9999 7.08538C11.2046 4.92719 9.05526 3 6.65947 3C3.80719 3 1 5.18019 1 8.63197C1 14.21 6.98837 19.0115 11.9999 21.1499C17.0115 19.0115 22.9999 14.21 22.9999 8.63197C22.9999 5.18019 20.1971 3 17.3448 3Z"
                  fill="black" fill-opacity="0.16"></path>
                <path
                  d="M11.9999 7.08538L11.5308 7.25827L11.9939 8.51498L12.4676 7.26224L11.9999 7.08538ZM11.9999 21.1499L11.8037 21.6098L11.9999 21.6935L12.1962 21.6098L11.9999 21.1499ZM17.3448 3V2.5C14.6862 2.5 12.407 4.59528 11.5323 6.90852L11.9999 7.08538L12.4676 7.26224C13.2384 5.2239 15.2119 3.5 17.3448 3.5V3ZM11.9999 7.08538L12.4691 6.91249C11.6213 4.61173 9.31693 2.5 6.65947 2.5V3V3.5C8.79359 3.5 10.788 5.24265 11.5308 7.25827L11.9999 7.08538ZM6.65947 3V2.5C3.56968 2.5 0.5 4.86693 0.5 8.63197H1H1.5C1.5 5.49345 4.04469 3.5 6.65947 3.5V3ZM1 8.63197H0.5C0.5 11.6035 2.09233 14.3173 4.26368 16.5309C6.43975 18.7494 9.24709 20.5189 11.8037 21.6098L11.9999 21.1499L12.1962 20.69C9.74123 19.6425 7.0486 17.9421 4.97758 15.8307C2.90185 13.7145 1.5 11.2385 1.5 8.63197H1ZM11.9999 21.1499L12.1962 21.6098C14.7528 20.5189 17.5601 18.7494 19.7362 16.5309C21.9076 14.3173 23.4999 11.6035 23.4999 8.63197H22.9999H22.4999C22.4999 11.2385 21.098 13.7145 19.0223 15.8307C16.9513 17.9421 14.2587 19.6425 11.8037 20.69L11.9999 21.1499ZM22.9999 8.63197H23.4999C23.4999 4.8674 20.4351 2.5 17.3448 2.5V3V3.5C19.9591 3.5 22.4999 5.49298 22.4999 8.63197H22.9999Z"
                  fill="#F5F5F5"></path>
              </svg></div>
          </div>
          <div class="ProductInfo_wrapper___tfgf">
            <div class="ProductPrice_prices">
              <p class="Typography_p4">128 QR</p>
            </div>
            <p class="Typography_p14__r_99o ProductInfo_label">Bc Time Restore Clay Treatment</p>
            <div class="ProductTags_wrapper"></div>
          </div>
        </div>
      </a>
      <a rel="noopener noreferrer" data-analytic-label="S24 Ultra leather case No.18840" target="_blank"
        class="productCard" id="6855f8bfba58056b03647656"
        href="/product/s24-ultra-leather-case-no18840/6855f8bfba58056b03647656?mpLevel=mp+home+page+feed&amp;mpCategoryLevel=mp+home+page+feed">
        <div data-analytic-label="productCardMarketplace" data-test-id="productCardMarketplace"
          data-analytic-event-content="0" class="">
          <div class="ProductCardMarketplace_imageWrapper">
            <div class="ProductImage_wrapper">
              <div class="ProductImage_imageWrapper"><img alt="S24 Ultra leather case No.18840" loading="lazy"
                  decoding="async" data-nimg="fill"
                  src="https://images.snoonu.com/product/2025-6/fa7a5a3e-8190-4a6c-bca5-982f1ae31672_S24Ultraleathercase01.jpg?format=webp"
                  style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"></div>
            </div><button class="ProductCounter_button ProductCounter_wrapper__yiOb_ ProductCounter_plusWrapper"><span
                data-test-id="" class="Icon_iconWrapper ProductCounter_icon"><svg xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25" fill="none" class="Icon_icon">
                  <path d="M4.716 11.688h16.5v2.5h-16.5v-2.5Z" fill="currentColor"></path>
                  <path d="M11.716 21.188v-16.5h2.5v16.5h-2.5Z" fill="currentColor"></path>
                </svg></span></button>
            <div class="HeartIcon_wrapper HeartIcon_heartInActive ProductCardMarketplace_favourite"
              data-test-id="favouriteHearIcon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.3448 3C14.949 3 12.8227 4.90959 11.9999 7.08538C11.2046 4.92719 9.05526 3 6.65947 3C3.80719 3 1 5.18019 1 8.63197C1 14.21 6.98837 19.0115 11.9999 21.1499C17.0115 19.0115 22.9999 14.21 22.9999 8.63197C22.9999 5.18019 20.1971 3 17.3448 3Z"
                  fill="black" fill-opacity="0.16"></path>
                <path
                  d="M11.9999 7.08538L11.5308 7.25827L11.9939 8.51498L12.4676 7.26224L11.9999 7.08538ZM11.9999 21.1499L11.8037 21.6098L11.9999 21.6935L12.1962 21.6098L11.9999 21.1499ZM17.3448 3V2.5C14.6862 2.5 12.407 4.59528 11.5323 6.90852L11.9999 7.08538L12.4676 7.26224C13.2384 5.2239 15.2119 3.5 17.3448 3.5V3ZM11.9999 7.08538L12.4691 6.91249C11.6213 4.61173 9.31693 2.5 6.65947 2.5V3V3.5C8.79359 3.5 10.788 5.24265 11.5308 7.25827L11.9999 7.08538ZM6.65947 3V2.5C3.56968 2.5 0.5 4.86693 0.5 8.63197H1H1.5C1.5 5.49345 4.04469 3.5 6.65947 3.5V3ZM1 8.63197H0.5C0.5 11.6035 2.09233 14.3173 4.26368 16.5309C6.43975 18.7494 9.24709 20.5189 11.8037 21.6098L11.9999 21.1499L12.1962 20.69C9.74123 19.6425 7.0486 17.9421 4.97758 15.8307C2.90185 13.7145 1.5 11.2385 1.5 8.63197H1ZM11.9999 21.1499L12.1962 21.6098C14.7528 20.5189 17.5601 18.7494 19.7362 16.5309C21.9076 14.3173 23.4999 11.6035 23.4999 8.63197H22.9999H22.4999C22.4999 11.2385 21.098 13.7145 19.0223 15.8307C16.9513 17.9421 14.2587 19.6425 11.8037 20.69L11.9999 21.1499ZM22.9999 8.63197H23.4999C23.4999 4.8674 20.4351 2.5 17.3448 2.5V3V3.5C19.9591 3.5 22.4999 5.49298 22.4999 8.63197H22.9999Z"
                  fill="#F5F5F5"></path>
              </svg></div>
          </div>
          <div class="ProductInfo_wrapper___tfgf">
            <div class="ProductPrice_prices">
              <p class="Typography_p4">65 QR</p>
            </div>
            <p class="Typography_p14__r_99o ProductInfo_label">S24 Ultra leather case No.18840</p>
            <div class="ProductRating_wrapper__g_1Nn">
              <p class="Typography_p12">4.9</p>
              <div class="SimpleStarRating_wrapper">
                <div class="SimpleStarRating_starWrapper"><span data-test-id=""
                    class="Icon_iconWrapper SimpleStarRating_starFilled" style="clip-path: none;"><svg
                      viewBox="0 0 24 25" fill="none" class="Icon_icon">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 1.88c.38 0 .727.208.889.533L15.7 8.07l6.268.91a.969.969 0 0 1 .782.622.89.89 0 0 1-.23.942l-4.562 4.413 1.079 6.246a.905.905 0 0 1-.404.908 1.03 1.03 0 0 1-1.04.053L12 19.244l-5.592 2.92a1.03 1.03 0 0 1-1.04-.053.905.905 0 0 1-.404-.908l1.078-6.246-4.562-4.413a.89.89 0 0 1-.23-.942.969.969 0 0 1 .783-.623L8.3 8.07l2.811-5.656a.988.988 0 0 1 .89-.533Z"
                        fill="currentColor"></path>
                    </svg></span></div>
                <div class="SimpleStarRating_starWrapper"><span data-test-id=""
                    class="Icon_iconWrapper SimpleStarRating_starFilled" style="clip-path: none;"><svg
                      viewBox="0 0 24 25" fill="none" class="Icon_icon">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 1.88c.38 0 .727.208.889.533L15.7 8.07l6.268.91a.969.969 0 0 1 .782.622.89.89 0 0 1-.23.942l-4.562 4.413 1.079 6.246a.905.905 0 0 1-.404.908 1.03 1.03 0 0 1-1.04.053L12 19.244l-5.592 2.92a1.03 1.03 0 0 1-1.04-.053.905.905 0 0 1-.404-.908l1.078-6.246-4.562-4.413a.89.89 0 0 1-.23-.942.969.969 0 0 1 .783-.623L8.3 8.07l2.811-5.656a.988.988 0 0 1 .89-.533Z"
                        fill="currentColor"></path>
                    </svg></span></div>
                <div class="SimpleStarRating_starWrapper"><span data-test-id=""
                    class="Icon_iconWrapper SimpleStarRating_starFilled" style="clip-path: none;"><svg
                      viewBox="0 0 24 25" fill="none" class="Icon_icon">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 1.88c.38 0 .727.208.889.533L15.7 8.07l6.268.91a.969.969 0 0 1 .782.622.89.89 0 0 1-.23.942l-4.562 4.413 1.079 6.246a.905.905 0 0 1-.404.908 1.03 1.03 0 0 1-1.04.053L12 19.244l-5.592 2.92a1.03 1.03 0 0 1-1.04-.053.905.905 0 0 1-.404-.908l1.078-6.246-4.562-4.413a.89.89 0 0 1-.23-.942.969.969 0 0 1 .783-.623L8.3 8.07l2.811-5.656a.988.988 0 0 1 .89-.533Z"
                        fill="currentColor"></path>
                    </svg></span></div>
                <div class="SimpleStarRating_starWrapper"><span data-test-id=""
                    class="Icon_iconWrapper SimpleStarRating_starFilled" style="clip-path: none;"><svg
                      viewBox="0 0 24 25" fill="none" class="Icon_icon">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M12 1.88c.38 0 .727.208.889.533L15.7 8.07l6.268.91a.969.969 0 0 1 .782.622.89.89 0 0 1-.23.942l-4.562 4.413 1.079 6.246a.905.905 0 0 1-.404.908 1.03 1.03 0 0 1-1.04.053L12 19.244l-5.592 2.92a1.03 1.03 0 0 1-1.04-.053.905.905 0 0 1-.404-.908l1.078-6.246-4.562-4.413a.89.89 0 0 1-.23-.942.969.969 0 0 1 .783-.623L8.3 8.07l2.811-5.656a.988.988 0 0 1 .89-.533Z"
                        fill="currentColor"></path>
                    </svg></span></div>

              </div>
              <p class="Typography_p9 ProductRating_count">(11)</p>
            </div>
          </div>
        </div>
      </a>

      <a rel="noopener noreferrer" data-analytic-label="ABC Glow Mask" target="_blank" class="productCard"
        id="67c6d8d6ed7210215c5b0fa3"
        href="/product/abc-glow-mask/67c6d8d6ed7210215c5b0fa3?mpLevel=mp+home+page+feed&amp;mpCategoryLevel=mp+home+page+feed">
        <div data-analytic-label="productCardMarketplace" data-test-id="productCardMarketplace"
          data-analytic-event-content="0" class="">
          <div class="ProductCardMarketplace_imageWrapper">
            <div class="ProductImage_wrapper">
              <div class="ProductImage_imageWrapper"><img alt="ABC Glow Mask" loading="lazy" decoding="async"
                  data-nimg="fill"
                  src="https://images.snoonu.com/product/2024-8/a9325cb3-b411-4145-ab75-2bc21b3fb4de_uf12.jpg"
                  style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"></div>
            </div><button class="ProductCounter_button ProductCounter_wrapper__yiOb_ ProductCounter_plusWrapper"><span
                data-test-id="" class="Icon_iconWrapper ProductCounter_icon"><svg xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25" fill="none" class="Icon_icon">
                  <path d="M4.716 11.688h16.5v2.5h-16.5v-2.5Z" fill="currentColor"></path>
                  <path d="M11.716 21.188v-16.5h2.5v16.5h-2.5Z" fill="currentColor"></path>
                </svg></span></button>
            <div class="HeartIcon_wrapper HeartIcon_heartInActive ProductCardMarketplace_favourite"
              data-test-id="favouriteHearIcon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.3448 3C14.949 3 12.8227 4.90959 11.9999 7.08538C11.2046 4.92719 9.05526 3 6.65947 3C3.80719 3 1 5.18019 1 8.63197C1 14.21 6.98837 19.0115 11.9999 21.1499C17.0115 19.0115 22.9999 14.21 22.9999 8.63197C22.9999 5.18019 20.1971 3 17.3448 3Z"
                  fill="black" fill-opacity="0.16"></path>
                <path
                  d="M11.9999 7.08538L11.5308 7.25827L11.9939 8.51498L12.4676 7.26224L11.9999 7.08538ZM11.9999 21.1499L11.8037 21.6098L11.9999 21.6935L12.1962 21.6098L11.9999 21.1499ZM17.3448 3V2.5C14.6862 2.5 12.407 4.59528 11.5323 6.90852L11.9999 7.08538L12.4676 7.26224C13.2384 5.2239 15.2119 3.5 17.3448 3.5V3ZM11.9999 7.08538L12.4691 6.91249C11.6213 4.61173 9.31693 2.5 6.65947 2.5V3V3.5C8.79359 3.5 10.788 5.24265 11.5308 7.25827L11.9999 7.08538ZM6.65947 3V2.5C3.56968 2.5 0.5 4.86693 0.5 8.63197H1H1.5C1.5 5.49345 4.04469 3.5 6.65947 3.5V3ZM1 8.63197H0.5C0.5 11.6035 2.09233 14.3173 4.26368 16.5309C6.43975 18.7494 9.24709 20.5189 11.8037 21.6098L11.9999 21.1499L12.1962 20.69C9.74123 19.6425 7.0486 17.9421 4.97758 15.8307C2.90185 13.7145 1.5 11.2385 1.5 8.63197H1ZM11.9999 21.1499L12.1962 21.6098C14.7528 20.5189 17.5601 18.7494 19.7362 16.5309C21.9076 14.3173 23.4999 11.6035 23.4999 8.63197H22.9999H22.4999C22.4999 11.2385 21.098 13.7145 19.0223 15.8307C16.9513 17.9421 14.2587 19.6425 11.8037 20.69L11.9999 21.1499ZM22.9999 8.63197H23.4999C23.4999 4.8674 20.4351 2.5 17.3448 2.5V3V3.5C19.9591 3.5 22.4999 5.49298 22.4999 8.63197H22.9999Z"
                  fill="#F5F5F5"></path>
              </svg></div>
          </div>
          <div class="ProductInfo_wrapper___tfgf">
            <div class="ProductPrice_prices">
              <p class="Typography_p4">235 QR</p>
            </div>
            <p class="Typography_p14__r_99o ProductInfo_label">ABC Glow Mask</p>
            <div class="ProductTags_wrapper"></div>
          </div>
        </div>
      </a>

      <a rel="noopener noreferrer" data-analytic-label="ABC Glow Mask" target="_blank" class="productCard"
        id="67c6d8d6ed7210215c5b0fa3"
        href="/product/abc-glow-mask/67c6d8d6ed7210215c5b0fa3?mpLevel=mp+home+page+feed&amp;mpCategoryLevel=mp+home+page+feed">
        <div data-analytic-label="productCardMarketplace" data-test-id="productCardMarketplace"
          data-analytic-event-content="0" class="">
          <div class="ProductCardMarketplace_imageWrapper">
            <div class="ProductImage_wrapper">
              <div class="ProductImage_imageWrapper"><img alt="ABC Glow Mask" loading="lazy" decoding="async"
                  data-nimg="fill"
                  src="https://images.snoonu.com/product/2025-3/0eada8c5-09c4-454a-9189-e3393e8aae47_39b1d069cffa415f822b512018b8cfb6.jpg?format=webp"
                  style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"></div>
            </div><button class="ProductCounter_button ProductCounter_wrapper__yiOb_ ProductCounter_plusWrapper"><span
                data-test-id="" class="Icon_iconWrapper ProductCounter_icon"><svg xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25" fill="none" class="Icon_icon">
                  <path d="M4.716 11.688h16.5v2.5h-16.5v-2.5Z" fill="currentColor"></path>
                  <path d="M11.716 21.188v-16.5h2.5v16.5h-2.5Z" fill="currentColor"></path>
                </svg></span></button>
            <div class="HeartIcon_wrapper HeartIcon_heartInActive ProductCardMarketplace_favourite"
              data-test-id="favouriteHearIcon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.3448 3C14.949 3 12.8227 4.90959 11.9999 7.08538C11.2046 4.92719 9.05526 3 6.65947 3C3.80719 3 1 5.18019 1 8.63197C1 14.21 6.98837 19.0115 11.9999 21.1499C17.0115 19.0115 22.9999 14.21 22.9999 8.63197C22.9999 5.18019 20.1971 3 17.3448 3Z"
                  fill="black" fill-opacity="0.16"></path>
                <path
                  d="M11.9999 7.08538L11.5308 7.25827L11.9939 8.51498L12.4676 7.26224L11.9999 7.08538ZM11.9999 21.1499L11.8037 21.6098L11.9999 21.6935L12.1962 21.6098L11.9999 21.1499ZM17.3448 3V2.5C14.6862 2.5 12.407 4.59528 11.5323 6.90852L11.9999 7.08538L12.4676 7.26224C13.2384 5.2239 15.2119 3.5 17.3448 3.5V3ZM11.9999 7.08538L12.4691 6.91249C11.6213 4.61173 9.31693 2.5 6.65947 2.5V3V3.5C8.79359 3.5 10.788 5.24265 11.5308 7.25827L11.9999 7.08538ZM6.65947 3V2.5C3.56968 2.5 0.5 4.86693 0.5 8.63197H1H1.5C1.5 5.49345 4.04469 3.5 6.65947 3.5V3ZM1 8.63197H0.5C0.5 11.6035 2.09233 14.3173 4.26368 16.5309C6.43975 18.7494 9.24709 20.5189 11.8037 21.6098L11.9999 21.1499L12.1962 20.69C9.74123 19.6425 7.0486 17.9421 4.97758 15.8307C2.90185 13.7145 1.5 11.2385 1.5 8.63197H1ZM11.9999 21.1499L12.1962 21.6098C14.7528 20.5189 17.5601 18.7494 19.7362 16.5309C21.9076 14.3173 23.4999 11.6035 23.4999 8.63197H22.9999H22.4999C22.4999 11.2385 21.098 13.7145 19.0223 15.8307C16.9513 17.9421 14.2587 19.6425 11.8037 20.69L11.9999 21.1499ZM22.9999 8.63197H23.4999C23.4999 4.8674 20.4351 2.5 17.3448 2.5V3V3.5C19.9591 3.5 22.4999 5.49298 22.4999 8.63197H22.9999Z"
                  fill="#F5F5F5"></path>
              </svg></div>
          </div>
          <div class="ProductInfo_wrapper___tfgf">
            <div class="ProductPrice_prices">
              <p class="Typography_p4">235 QR</p>
            </div>
            <p class="Typography_p14__r_99o ProductInfo_label">ABC Glow Mask</p>
            <div class="ProductTags_wrapper"></div>
          </div>
        </div>
      </a>

      <a rel="noopener noreferrer" data-analytic-label="Mixsoon Heartleaf Toner - 150 ml" target="_blank"
        class="productCard" id="680a3d664726c7cb2abb1430"
        href="/product/mixsoon-heartleaf-toner---150-ml/680a3d664726c7cb2abb1430?mpLevel=mp+home+page+feed&amp;mpCategoryLevel=mp+home+page+feed">
        <div data-analytic-label="productCardMarketplace" data-test-id="productCardMarketplace"
          data-analytic-event-content="0" class="">
          <div class="ProductCardMarketplace_imageWrapper">
            <div class="ProductImage_wrapper">
              <div class="ProductImage_imageWrapper"><img alt="Mixsoon Heartleaf Toner - 150 ml" loading="lazy"
                  decoding="async" data-nimg="fill"
                  src="https://images.snoonu.com/product/2025-4/fb5b4877-d528-43d2-a132-2516c119d4a4_4_5_173260d4423e45bb9141ea1008773c2a.jpg?format=webp"
                  style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"></div>
            </div><button class="ProductCounter_button ProductCounter_wrapper__yiOb_ ProductCounter_plusWrapper"><span
                data-test-id="" class="Icon_iconWrapper ProductCounter_icon"><svg xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 25 25" fill="none" class="Icon_icon">
                  <path d="M4.716 11.688h16.5v2.5h-16.5v-2.5Z" fill="currentColor"></path>
                  <path d="M11.716 21.188v-16.5h2.5v16.5h-2.5Z" fill="currentColor"></path>
                </svg></span></button>
            <div class="HeartIcon_wrapper HeartIcon_heartInActive ProductCardMarketplace_favourite"
              data-test-id="favouriteHearIcon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M17.3448 3C14.949 3 12.8227 4.90959 11.9999 7.08538C11.2046 4.92719 9.05526 3 6.65947 3C3.80719 3 1 5.18019 1 8.63197C1 14.21 6.98837 19.0115 11.9999 21.1499C17.0115 19.0115 22.9999 14.21 22.9999 8.63197C22.9999 5.18019 20.1971 3 17.3448 3Z"
                  fill="black" fill-opacity="0.16"></path>
                <path
                  d="M11.9999 7.08538L11.5308 7.25827L11.9939 8.51498L12.4676 7.26224L11.9999 7.08538ZM11.9999 21.1499L11.8037 21.6098L11.9999 21.6935L12.1962 21.6098L11.9999 21.1499ZM17.3448 3V2.5C14.6862 2.5 12.407 4.59528 11.5323 6.90852L11.9999 7.08538L12.4676 7.26224C13.2384 5.2239 15.2119 3.5 17.3448 3.5V3ZM11.9999 7.08538L12.4691 6.91249C11.6213 4.61173 9.31693 2.5 6.65947 2.5V3V3.5C8.79359 3.5 10.788 5.24265 11.5308 7.25827L11.9999 7.08538ZM6.65947 3V2.5C3.56968 2.5 0.5 4.86693 0.5 8.63197H1H1.5C1.5 5.49345 4.04469 3.5 6.65947 3.5V3ZM1 8.63197H0.5C0.5 11.6035 2.09233 14.3173 4.26368 16.5309C6.43975 18.7494 9.24709 20.5189 11.8037 21.6098L11.9999 21.1499L12.1962 20.69C9.74123 19.6425 7.0486 17.9421 4.97758 15.8307C2.90185 13.7145 1.5 11.2385 1.5 8.63197H1ZM11.9999 21.1499L12.1962 21.6098C14.7528 20.5189 17.5601 18.7494 19.7362 16.5309C21.9076 14.3173 23.4999 11.6035 23.4999 8.63197H22.9999H22.4999C22.4999 11.2385 21.098 13.7145 19.0223 15.8307C16.9513 17.9421 14.2587 19.6425 11.8037 20.69L11.9999 21.1499ZM22.9999 8.63197H23.4999C23.4999 4.8674 20.4351 2.5 17.3448 2.5V3V3.5C19.9591 3.5 22.4999 5.49298 22.4999 8.63197H22.9999Z"
                  fill="#F5F5F5"></path>
              </svg></div>
          </div>
          <div class="ProductInfo_wrapper___tfgf">
            <div class="ProductPrice_prices">
              <p class="Typography_p4">65 QR</p>
            </div>
            <p class="Typography_p14__r_99o ProductInfo_label">Mixsoon Heartleaf Toner - 150 ml</p>
            <div class="ProductTags_wrapper"></div>
          </div>
        </div>
      </a>
    </div><button class="Button_button Button_secondary MarketplaceContent_showMoreButton mb-4"
      data-analytic-label=""><span class="Button_content">Show more</span></button>
  </div>
</template>

<script>
import ForYou from "./ForYou.vue";

export default {
  name: "MainSection",
  components: {
    ForYou,

  },
  data() {
    return {
      activeTab: "Popular",
      tabs: [
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
      ],
    };
  },
  methods: {

    setActiveTab(tabName) {
      this.activeTab = tabName;
    },
  },
};
</script>

<style scoped>
.main-section {
  width: 100%;
  margin: 24px 0;
}

.toggle-section {
  display: flex;
  justify-content: center;
  gap: 0;
  margin-bottom: 24px;
}

.toggle-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border: none;
  background: #f8f9fa;
  color: #666;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
}

.toggle-btn:first-child {
  border-radius: 25px 0 0 25px;
}

.toggle-btn:last-child {
  border-radius: 0 25px 25px 0;
}

.toggle-btn.active {
  background: #000;
  color: white;
  z-index: 1;
}

.toggle-btn:hover:not(.active) {
  background: #e9ecef;
}

.toggle-icon {
  font-size: 16px;
}

.content-area {
  width: 100%;
}

.popular-content {
  text-align: center;
  padding: 40px;
  color: #666;
}

/* Responsive Design */
@media (max-width: 768px) {
  .toggle-btn {
    padding: 10px 20px;
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .toggle-btn {
    padding: 8px 16px;
    font-size: 12px;
  }

  .toggle-icon {
    font-size: 14px;
  }
}
</style>
