<script lang="ts" setup>

const categories = ref([
  { id: 633966, name: "All", active: true },
  { id: 655263, name: "Offer" },
  { id: 841086, name: "Exclusive Meal" },
  { id: 800569, name: "Secret Eats" },
  { id: 633956, name: "Go Crispy Original Meals" },
  { id: 633957, name: "Value Meal" },
  { id: 633958, name: "Xtreme Meal" },
  { id: 633959, name: "Bucket Meal" },
  { id: 633960, name: "Combo Meals" },
  { id: 633961, name: "Sandwich" },
  { id: 633962, name: "Kids Meal" },
  { id: 633963, name: "Sides & Condiments" },
  { id: 633964, name: "Desserts" },
  { id: 633965, name: "Beverage" },
])
</script>

<template>
    <div class="ContentWrapper_container">
        <BreadCrum :crumbs="[
            { name: 'Home Page', href: '/' },
            { name: 'Resturants', href: '/restaurants' },
            { name: 'Go Crispy' }
        ]" />
        <div class="MerchantPromoTag_promotion">
            <div class="MerchantPromoTag_promoTag MerchantPromoTag_normal MerchantPromoTag_percentageOff">
                <p class="Typography_p10">60% Off</p>
            </div>
        </div>

        <div class="_slugantDetailsWrapper">

            <div class="MerchantDetails_wrapper">
                <div class="MerchantDetails_detail">
                    <p class="Typography_p8 MerchantDetails_label">Delivery time</p><span>
                        <p class="Typography_p1">31<!-- --> <!-- -->mins</p>
                    </span>
                </div>
                <div class="MerchantDetails_detail">
                    <p class="Typography_p8 MerchantDetails_label">Rating</p><span>
                        <p class="Typography_p1">4.5</p>
                    </span>
                </div>
                <div class="MerchantDetails_detail">
                    <p class="Typography_p8 MerchantDetails_label">Price range</p><span>
                        <div class="MerchantPriceRange_averagePrice">
                            <p class="Typography_p1 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p class="Typography_p1 MerchantPriceRange_price MerchantPriceRange_priceActive">
                                $</p>
                            <p class="Typography_p1 MerchantPriceRange_price">$</p>
                        </div>
                    </span>
                </div>
                <div class="MerchantDetails_detail">
                    <p class="Typography_p8 MerchantDetails_label">Working hours</p><span>
                        <p class="Typography_p1"><span
                                class="MerchantDetails_status MerchantDetails_open">Open</span><span>Until<!-- -->
                                <!-- -->Tomorrow 2:30 AM</span></p>
                    </span>
                </div>
                <div class="MerchantDetails_detail">
                    <div class="MerchantDetails_showMore">
                        <p class="Typography_p1">Show less</p><span data-test-id=""
                            class="Icon_iconWrapper MerchantDetails_arrowIcon MerchantDetails_reverseArrowIcon"><svg
                                viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                                <path d="m12 13.232-6-6L4.232 9 12 16.768 19.768 9 18 7.232l-6 6Z" fill="currentColor">
                                </path>
                            </svg></span>
                    </div>
                </div>
            </div>
            <div class="SearchInMerchant_wrapper">
                <form class="SearchInMerchant_searchWrapper" action="">
                    <div class="Autocomplete_wrapper"><span data-test-id=""
                            class="Icon_iconWrapper Autocomplete_searchIcon Autocomplete_smallIcon__3ld_I"><svg
                                viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M9 .75a8.25 8.25 0 1 0 4.883 14.9l3.467 3.468 1.768-1.768-3.467-3.467A8.25 8.25 0 0 0 9 .75ZM3.25 9a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0Z"
                                    fill="currentColor"></path>
                            </svg></span><input data-test-id="search-autocomplete"
                            class="Autocomplete_input Autocomplete_small SearchInMerchant_input"
                            placeholder="Search in Go Crispy" autocomplete="off" type="search" name="search" value="">
                        <div class="Autocomplete_rightSection"></div>
                    </div>
                </form>
            </div>

        </div>
        <div class="_slugiption _slugescription">Discover the Go Crispy menu, featuring
            premium crispy tenders that will refine your taste buds! Our signature chicken is prepared in just 7
            minutes, paired with special sauces that elevate every bite. You can pick your location as Go Crispy is
            available in these locations: including Al Gharaffa, Al Wakrah, Um Seneem, and Doha Festival City. Order
            through Snoonu for fast delivery in Qatar!</div>

        <div class="BestSelling_wrapper">
            <h2 class="Typography_h2 BestSelling_title__NuZ2_">Best Selling</h2>
            <div class="BestSelling_group">
                <div>
                    <div data-analytic-label="bestSellingProduct" data-test-id="bestSellProductCard"
                        data-analytic-event-content="10865769" class="ProductCardVertical_wrapper BestSelling_first">
                        <div class="CardProductImage_imageWrapper ProductCardVertical_image"><span
                                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                    alt="Go Snoonu Meal ⓢ" decoding="async" data-nimg="fill"
                                    src="https://images.snoonu.com/menu_item/2025-4/a040a06e-2d23-4897-b39f-1976a6b53bd0_SnoonuMeal.png?format=webp"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover; object-position: center center;"><noscript></noscript></span>
                        </div>
                        <div class="ProductCartVerticalDescription_info">
                            <h5 class="Typography_h5 ProductCartVerticalDescription_price">136 QR</h5>
                            <p class="Typography_p7 ProductCartVerticalDescription_name">Go Snoonu Meal ⓢ
                            </p>
                        </div><button
                            class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary ProductButton_normal__jOR_t"
                            data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                class="Button_content">Add</span></button>
                    </div>
                </div>
                <div>
                    <div data-analytic-label="bestSellingProduct" data-test-id="bestSellProductCard"
                        data-analytic-event-content="8985865" class="ProductCardVertical_wrapper">
                        <div class="CardProductImage_imageWrapper ProductCardVertical_image"><span
                                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                    alt="Go Chicken Meal" decoding="async" data-nimg="fill"
                                    src="https://images.snoonu.com/menu_item/2025-5/4233010c-c243-43cb-833b-36801ca9d9e3_gochickenmeal.png?format=webp"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover; object-position: center center;"><noscript></noscript></span>
                        </div>
                        <div class="ProductCartVerticalDescription_info">
                            <h5 class="Typography_h5 ProductCartVerticalDescription_price">33 QR</h5>
                            <p class="Typography_p7 ProductCartVerticalDescription_name">Go Chicken Meal
                            </p>
                        </div><button
                            class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary ProductButton_normal__jOR_t"
                            data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                class="Button_content">Add</span></button>
                    </div>
                </div>
                <div>
                    <div data-analytic-label="bestSellingProduct" data-test-id="bestSellProductCard"
                        data-analytic-event-content="8985860" class="ProductCardVertical_wrapper">
                        <div class="CardProductImage_imageWrapper ProductCardVertical_image"><span
                                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                    alt="Go Tenders Meal" decoding="async" data-nimg="fill"
                                    src="https://images.snoonu.com/menu_item/2025-5/c1d09988-e04f-4e88-bfae-99916eaae279_gotendermeal.png?format=webp"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover; object-position: center center;"><noscript></noscript></span>
                        </div>
                        <div class="ProductCartVerticalDescription_info">
                            <h5 class="Typography_h5 ProductCartVerticalDescription_price">31 QR</h5>
                            <p class="Typography_p7 ProductCartVerticalDescription_name">Go Tenders Meal
                            </p>
                        </div><button
                            class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary ProductButton_normal__jOR_t"
                            data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                class="Button_content">Add</span></button>
                    </div>
                </div>
                <div>
                    <div data-analytic-label="bestSellingProduct" data-test-id="bestSellProductCard"
                        data-analytic-event-content="8985859" class="ProductCardVertical_wrapper">
                        <div class="CardProductImage_imageWrapper ProductCardVertical_image"><span
                                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                    alt="Mega Meal 4 Pieces" decoding="async" data-nimg="fill"
                                    src="https://images.snoonu.com/menu_item/2025-5/45953ad6-05f2-43f3-b5af-44ccf804949e_megameal4pcs.png?format=webp"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover; object-position: center center;"><noscript></noscript></span>
                        </div>
                        <div class="ProductCartVerticalDescription_info">
                            <h5 class="Typography_h5 ProductCartVerticalDescription_price">42 QR</h5>
                            <p class="Typography_p7 ProductCartVerticalDescription_name">Mega Meal 4
                                Pieces</p>
                        </div><button
                            class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary ProductButton_normal__jOR_t"
                            data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                class="Button_content">Add</span></button>
                    </div>
                </div>
                <div>
                    <div data-analytic-label="bestSellingProduct" data-test-id="bestSellProductCard"
                        data-analytic-event-content="8985895" class="ProductCardVertical_wrapper BestSelling_last">
                        <div class="CardProductImage_imageWrapper ProductCardVertical_image"><span
                                style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                    alt="Festive Bucket" decoding="async" data-nimg="fill"
                                    src="https://images.snoonu.com/menu_item/2025-5/2cf59477-3e8d-4140-9477-c799ec813424_festivelbucket.png?format=webp"
                                    style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover; object-position: center center;"><noscript></noscript></span>
                        </div>
                        <div class="ProductCartVerticalDescription_info">
                            <h5 class="Typography_h5 ProductCartVerticalDescription_price">85 QR</h5>
                            <p class="Typography_p7 ProductCartVerticalDescription_name">Festive Bucket
                            </p>
                        </div><button
                            class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary ProductButton_normal__jOR_t"
                            data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                class="Button_content">Add</span></button>
                    </div>
                </div>
            </div>
        </div>

          <div id="menu" class="Categories_wrapper MenuCategories_wrapper">
    <div
      v-for="cat in categories"
      :key="cat.id"
      data-analytic-label="menuFilter"
      data-analytic-event-action="filter_apply"
      :data-analytic-event-content="cat.id"
      class="Categories_categoryWrapper__3_FRF"
    >
      <p
        class="Typography_p6 Categories_category"
        :class="{ Categories_active: cat.active }"
      >
        {{ cat.name }}
      </p>
    </div>
  </div>




        <div class="Products_wrapper">
            <h2 class="Typography_h2 Products_title">All</h2>
            <div class="Products_group">
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="13437810" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Tender Party Box ⓢ"
                                src="https://images.snoonu.com/menu_item/2025-8/e343b25c-ed04-4871-bc72-14205f26267a_TENDERPARTYBOX.jpg?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Tender Party Box ⓢ" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-8/e343b25c-ed04-4871-bc72-14205f26267a_TENDERPARTYBOX.jpg?format=webp" /></noscript></span>
                        <div class="CardProductImage_discount">
                            <p class="Typography_p10">Promo</p>
                        </div>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Tender Party Box ⓢ</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">12pcs tenders +
                                large coleslaw + large fries + 6 buns + 3 gravy</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <div class="ProductCardHorizontal_pricePromo">
                                <p
                                    class="Typography_p9 ProductCardHorizontal_oldPrice Typography_striked">
                                    138 QR</p>
                                <h5 class="Typography_h5 ProductCardHorizontal_newPrice">69 QR</h5>
                            </div><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="12926307" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Jalapeno Cheddar Cheese Bite 5Pcs"
                                src="https://images.snoonu.com/brand_product/2025-07/726191f1-0221-44cb-b4b2-c27ed75a3f87_output.png?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Jalapeno Cheddar Cheese Bite 5Pcs" loading="lazy" decoding="async"
                                    data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/brand_product/2025-07/726191f1-0221-44cb-b4b2-c27ed75a3f87_output.png?format=webp" /></noscript></span>
                        <div class="CardProductImage_discount">
                            <p class="Typography_p10">Promo</p>
                        </div>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Jalapeno Cheddar Cheese
                                Bite 5Pcs</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">5 pieces of cheddar
                                cheese covered with breadcrumbs and jalapeno</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <div class="ProductCardHorizontal_pricePromo">
                                <p
                                    class="Typography_p9 ProductCardHorizontal_oldPrice Typography_striked">
                                    15 QR</p>
                                <h5 class="Typography_h5 ProductCardHorizontal_newPrice">6 QR</h5>
                            </div><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="10865769" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Go Snoonu Meal ⓢ"
                                src="https://images.snoonu.com/menu_item/2025-4/a040a06e-2d23-4897-b39f-1976a6b53bd0_SnoonuMeal.png?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Go Snoonu Meal ⓢ" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-4/a040a06e-2d23-4897-b39f-1976a6b53bd0_SnoonuMeal.png?format=webp" /></noscript></span>
                        <div class="CardProductImage_discount">
                            <p class="Typography_p10">Promo</p>
                        </div>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Go Snoonu Meal ⓢ</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">6 pieces of
                                chicken, 6 tender pieces, 1 family-size fries, 2 soft drink cans, 1 large coleslaw 12
                                ounces, 3 pieces of bread.</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <div class="ProductCardHorizontal_pricePromo">
                                <p
                                    class="Typography_p9 ProductCardHorizontal_oldPrice Typography_striked">
                                    136 QR</p>
                                <h5 class="Typography_h5 ProductCardHorizontal_newPrice">60 QR</h5>
                            </div><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="10283884" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Jalapeno Cheddar Cheese Bite 10Pcs"
                                src="https://images.snoonu.com/menu_item/2025-5/8717175d-00f0-4165-a551-0f3af5171ef2__0023_jalapenocheese.png?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Jalapeno Cheddar Cheese Bite 10Pcs" loading="lazy" decoding="async"
                                    data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/8717175d-00f0-4165-a551-0f3af5171ef2__0023_jalapenocheese.png?format=webp" /></noscript></span>
                        <div class="CardProductImage_discount">
                            <p class="Typography_p10">Promo</p>
                        </div>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Jalapeno Cheddar Cheese
                                Bite 10Pcs</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">Ten bite-sized
                                pieces of savory delight, Jalapeno Cheddar Cheese Bites feature a creamy cheddar cheese
                                filling with a spicy kick of jalapeno, all in a crispy coating.</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <div class="ProductCardHorizontal_pricePromo">
                                <p
                                    class="Typography_p9 ProductCardHorizontal_oldPrice Typography_striked">
                                    30 QR</p>
                                <h5 class="Typography_h5 ProductCardHorizontal_newPrice">12 QR</h5>
                            </div><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="10283885" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Sweet Corn Tots 20Pcs"
                                src="https://images.snoonu.com/brand_product/2025-01/1e306cf2-9cb6-47ba-a807-022b8350444f_output.png?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Sweet Corn Tots 20Pcs" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/brand_product/2025-01/1e306cf2-9cb6-47ba-a807-022b8350444f_output.png?format=webp" /></noscript></span>
                        <div class="CardProductImage_discount">
                            <p class="Typography_p10">Promo</p>
                        </div>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Sweet Corn Tots 20Pcs
                            </h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">A perfect snack for
                                sharing, Sweet Corn Tots are twenty bite-sized pieces of sweet corn, formed into tots
                                and cooked until golden and crispy.</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <div class="ProductCardHorizontal_pricePromo">
                                <p
                                    class="Typography_p9 ProductCardHorizontal_oldPrice Typography_striked">
                                    28 QR</p>
                                <h5 class="Typography_h5 ProductCardHorizontal_newPrice">11.25 QR</h5>
                            </div><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="9172154" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Mini Smoky Cheese Donuts"
                                src="https://images.snoonu.com/menu_item/2025-5/0f7ed573-b715-40bb-afa9-d26419774766__0024_minismokycheesedonuts.png?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Mini Smoky Cheese Donuts" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/0f7ed573-b715-40bb-afa9-d26419774766__0024_minismokycheesedonuts.png?format=webp" /></noscript></span>
                        <div class="CardProductImage_discount">
                            <p class="Typography_p10">Promo</p>
                        </div>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Mini Smoky Cheese Donuts
                            </h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">A unique and savory
                                treat, Mini Smoky Cheese Donuts are five bite-sized pieces of donuts with a rich, smoky
                                cheese flavor.</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <div class="ProductCardHorizontal_pricePromo">
                                <p
                                    class="Typography_p9 ProductCardHorizontal_oldPrice Typography_striked">
                                    18 QR</p>
                                <h5 class="Typography_h5 ProductCardHorizontal_newPrice">7.25 QR</h5>
                            </div><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="9172249" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Sweet Corn Tots 10Pcs"
                                src="https://images.snoonu.com/menu_item/2024-10/d6004d36-54bc-416b-b0c7-fbf3d7c0ed67_sweetcorncopy.jpg?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Sweet Corn Tots 10Pcs" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2024-10/d6004d36-54bc-416b-b0c7-fbf3d7c0ed67_sweetcorncopy.jpg?format=webp" /></noscript></span>
                        <div class="CardProductImage_discount">
                            <p class="Typography_p10">Promo</p>
                        </div>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Sweet Corn Tots 10Pcs
                            </h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">A perfect shareable
                                snack, the Sweet Corn Box contains ten pieces of delicious, golden-fried corn nuggets.
                            </p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <div class="ProductCardHorizontal_pricePromo">
                                <p
                                    class="Typography_p9 ProductCardHorizontal_oldPrice Typography_striked">
                                    14 QR</p>
                                <h5 class="Typography_h5 ProductCardHorizontal_newPrice">5.75 QR</h5>
                            </div><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="8986104" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Apple Pie"
                                src="https://images.snoonu.com/menu_item/2025-5/606c88af-eb28-4b87-ae39-285a93c5dba2_applepie.png?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Apple Pie" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/606c88af-eb28-4b87-ae39-285a93c5dba2_applepie.png?format=webp" /></noscript></span>
                        <div class="CardProductImage_discount">
                            <p class="Typography_p10">Promo</p>
                        </div>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Apple Pie</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">Delicious Apple
                                Pies With Different Flavors</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <div class="ProductCardHorizontal_pricePromo">
                                <p
                                    class="Typography_p9 ProductCardHorizontal_oldPrice Typography_striked">
                                    7 QR</p>
                                <h5 class="Typography_h5 ProductCardHorizontal_newPrice">3.5 QR</h5>
                            </div><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="8986087" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Rice With Tender"
                                src="https://images.snoonu.com/menu_item/2025-5/44628f74-d090-4ab1-bfe8-785e65dddcf2__0030_ricewithtenders.png?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Rice With Tender" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/44628f74-d090-4ab1-bfe8-785e65dddcf2__0030_ricewithtenders.png?format=webp" /></noscript></span>
                        <div class="CardProductImage_discount">
                            <p class="Typography_p10">Promo</p>
                        </div>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Rice With Tender</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">Rice With A Special
                                Taste With 2 Pcs Of Crispy Tender And Spicy Or Normal Golden Sauce</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <div class="ProductCardHorizontal_pricePromo">
                                <p
                                    class="Typography_p9 ProductCardHorizontal_oldPrice Typography_striked">
                                    17 QR</p>
                                <h5 class="Typography_h5 ProductCardHorizontal_newPrice">12 QR</h5>
                            </div><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="13016781" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Wrap &amp; Mashed Potato Duo Meal"
                                src="https://images.snoonu.com/menu_item/2025-7/6c4f4b76-9dbc-4260-bcad-37084d9eb1a9_wrapmashedpotatoduomeal.png?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Wrap &amp; Mashed Potato Duo Meal" loading="lazy" decoding="async"
                                    data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-7/6c4f4b76-9dbc-4260-bcad-37084d9eb1a9_wrapmashedpotatoduomeal.png?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Wrap &amp; Mashed Potato
                                Duo Meal</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">2 wrap Sandwich + 2
                                mashed potato + 2 softdrinks</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">60 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="12754585" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Yuzu Cloudy Lemonade"
                                src="https://images.snoonu.com/menu_item/2025-7/03afe9a5-ecce-41ab-acbb-688cb32ac75c_DSC00415copy.jpg?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Yuzu Cloudy Lemonade" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-7/03afe9a5-ecce-41ab-acbb-688cb32ac75c_DSC00415copy.jpg?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Yuzu Cloudy Lemonade</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">A uniquely aromatic
                                and zesty citrus beverage, the Yuzu Cloudy Lemonade offers a refreshing taste in a
                                (400ml) serving.</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">12 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="12693840" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Peach Cloudy Lemonade"
                                src="https://images.snoonu.com/menu_item/2025-7/9a9d8914-a5d1-4dba-a7b2-265bd1c87971_DSC00449copy.jpg?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Peach Cloudy Lemonade" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-7/9a9d8914-a5d1-4dba-a7b2-265bd1c87971_DSC00449copy.jpg?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Peach Cloudy Lemonade
                            </h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">The sweet, delicate
                                flavor of ripe peach is captured in this refreshing Peach Cloudy Lemonade, served in a
                                (400ml) glass.</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">12 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="9773090" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Pinoy Meal"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Pinoy Meal" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/947ac917-4897-47f9-bb59-449938e031f8_pinoymeal.png?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Pinoy Meal</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">8Oz. White
                                rice-2pcs Crispy chicken- 4Oz. Gravy sauce- soft drink (250ML)</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">28 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="9773091" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Sulit Chicken Meal"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Sulit Chicken Meal" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/da0ff27b-008a-40ec-a2ed-d980479c6c49_sulitchicknemeal.png?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Sulit Chicken Meal</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">8Oz. White
                                rice-3pcs Crispy chicken- 4Oz. Gravy sauce- French fries- 4 Oz coleslaw soft drink
                                (250ML)</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">38 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="8985861" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Bucket For Two"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Bucket For Two" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/e27536d9-b689-4530-b595-0aea0d410638_bucketfor2.png?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Bucket For Two</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">6 Pieces Of Fresh
                                Crispy Chicken, Spicy Or Regular, With Secret Spices, French Fries, 2 Buns, 2 Coleslaw,
                                2 Soft Drinks 16 Oz.</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">61 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="8985860" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Go Tenders Meal"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Go Tenders Meal" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/c1d09988-e04f-4e88-bfae-99916eaae279_gotendermeal.png?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Go Tenders Meal</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">5 Pcs Crispy
                                Tenders - Fries - 1 Bun - Coleslaw -1 Garlic Dip- Soft Drink (16 Oz)</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">31 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="8985859" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Mega Meal 4 Pieces"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Mega Meal 4 Pieces" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/45953ad6-05f2-43f3-b5af-44ccf804949e_megameal4pcs.png?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Mega Meal 4 Pieces</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">4 Pcs Crispy
                                Chicken - Fries - 1 Bun - 1 Coleslaw - Soft Drink (16 Ozl)</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">42 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="8985862" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Go Xtreme Meal"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Go Xtreme Meal" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/6acfcd10-1fc1-46a6-825c-46ea40780363_goxtrememeal.png?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Go Xtreme Meal</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">5 Pcs Crispy
                                Chicken - Fries - 1 Bun - 1 Coleslaw - Soft Drink (16 Oz)/5</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">48 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="8985865" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Go Chicken Meal"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Go Chicken Meal" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/4233010c-c243-43cb-833b-36801ca9d9e3_gochickenmeal.png?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Go Chicken Meal</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">3 Pcs Crispy
                                Chicken - Fries - 1 Bun - Coleslaw - Soft Drink (16 Oz)/3</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">33 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
            <div class="Products_group">
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="13437810" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Tender Party Box ⓢ"
                                src="https://images.snoonu.com/menu_item/2025-8/e343b25c-ed04-4871-bc72-14205f26267a_TENDERPARTYBOX.jpg?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Tender Party Box ⓢ" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-8/e343b25c-ed04-4871-bc72-14205f26267a_TENDERPARTYBOX.jpg?format=webp" /></noscript></span>
                        <div class="CardProductImage_discount">
                            <p class="Typography_p10">Promo</p>
                        </div>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Tender Party Box ⓢ</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">12pcs tenders +
                                large coleslaw + large fries + 6 buns + 3 gravy</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <div class="ProductCardHorizontal_pricePromo">
                                <p
                                    class="Typography_p9 ProductCardHorizontal_oldPrice Typography_striked">
                                    138 QR</p>
                                <h5 class="Typography_h5 ProductCardHorizontal_newPrice">69 QR</h5>
                            </div><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="12926307" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Jalapeno Cheddar Cheese Bite 5Pcs"
                                src="https://images.snoonu.com/brand_product/2025-07/726191f1-0221-44cb-b4b2-c27ed75a3f87_output.png?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Jalapeno Cheddar Cheese Bite 5Pcs" loading="lazy" decoding="async"
                                    data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/brand_product/2025-07/726191f1-0221-44cb-b4b2-c27ed75a3f87_output.png?format=webp" /></noscript></span>
                        <div class="CardProductImage_discount">
                            <p class="Typography_p10">Promo</p>
                        </div>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Jalapeno Cheddar Cheese
                                Bite 5Pcs</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">5 pieces of cheddar
                                cheese covered with breadcrumbs and jalapeno</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <div class="ProductCardHorizontal_pricePromo">
                                <p
                                    class="Typography_p9 ProductCardHorizontal_oldPrice Typography_striked">
                                    15 QR</p>
                                <h5 class="Typography_h5 ProductCardHorizontal_newPrice">6 QR</h5>
                            </div><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="10865769" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Go Snoonu Meal ⓢ"
                                src="https://images.snoonu.com/menu_item/2025-4/a040a06e-2d23-4897-b39f-1976a6b53bd0_SnoonuMeal.png?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Go Snoonu Meal ⓢ" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-4/a040a06e-2d23-4897-b39f-1976a6b53bd0_SnoonuMeal.png?format=webp" /></noscript></span>
                        <div class="CardProductImage_discount">
                            <p class="Typography_p10">Promo</p>
                        </div>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Go Snoonu Meal ⓢ</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">6 pieces of
                                chicken, 6 tender pieces, 1 family-size fries, 2 soft drink cans, 1 large coleslaw 12
                                ounces, 3 pieces of bread.</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <div class="ProductCardHorizontal_pricePromo">
                                <p
                                    class="Typography_p9 ProductCardHorizontal_oldPrice Typography_striked">
                                    136 QR</p>
                                <h5 class="Typography_h5 ProductCardHorizontal_newPrice">60 QR</h5>
                            </div><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="10283884" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Jalapeno Cheddar Cheese Bite 10Pcs"
                                src="https://images.snoonu.com/menu_item/2025-5/8717175d-00f0-4165-a551-0f3af5171ef2__0023_jalapenocheese.png?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Jalapeno Cheddar Cheese Bite 10Pcs" loading="lazy" decoding="async"
                                    data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/8717175d-00f0-4165-a551-0f3af5171ef2__0023_jalapenocheese.png?format=webp" /></noscript></span>
                        <div class="CardProductImage_discount">
                            <p class="Typography_p10">Promo</p>
                        </div>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Jalapeno Cheddar Cheese
                                Bite 10Pcs</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">Ten bite-sized
                                pieces of savory delight, Jalapeno Cheddar Cheese Bites feature a creamy cheddar cheese
                                filling with a spicy kick of jalapeno, all in a crispy coating.</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <div class="ProductCardHorizontal_pricePromo">
                                <p
                                    class="Typography_p9 ProductCardHorizontal_oldPrice Typography_striked">
                                    30 QR</p>
                                <h5 class="Typography_h5 ProductCardHorizontal_newPrice">12 QR</h5>
                            </div><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="10283885" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Sweet Corn Tots 20Pcs"
                                src="https://images.snoonu.com/brand_product/2025-01/1e306cf2-9cb6-47ba-a807-022b8350444f_output.png?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Sweet Corn Tots 20Pcs" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/brand_product/2025-01/1e306cf2-9cb6-47ba-a807-022b8350444f_output.png?format=webp" /></noscript></span>
                        <div class="CardProductImage_discount">
                            <p class="Typography_p10">Promo</p>
                        </div>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Sweet Corn Tots 20Pcs
                            </h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">A perfect snack for
                                sharing, Sweet Corn Tots are twenty bite-sized pieces of sweet corn, formed into tots
                                and cooked until golden and crispy.</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <div class="ProductCardHorizontal_pricePromo">
                                <p
                                    class="Typography_p9 ProductCardHorizontal_oldPrice Typography_striked">
                                    28 QR</p>
                                <h5 class="Typography_h5 ProductCardHorizontal_newPrice">11.25 QR</h5>
                            </div><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="9172154" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Mini Smoky Cheese Donuts"
                                src="https://images.snoonu.com/menu_item/2025-5/0f7ed573-b715-40bb-afa9-d26419774766__0024_minismokycheesedonuts.png?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Mini Smoky Cheese Donuts" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/0f7ed573-b715-40bb-afa9-d26419774766__0024_minismokycheesedonuts.png?format=webp" /></noscript></span>
                        <div class="CardProductImage_discount">
                            <p class="Typography_p10">Promo</p>
                        </div>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Mini Smoky Cheese Donuts
                            </h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">A unique and savory
                                treat, Mini Smoky Cheese Donuts are five bite-sized pieces of donuts with a rich, smoky
                                cheese flavor.</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <div class="ProductCardHorizontal_pricePromo">
                                <p
                                    class="Typography_p9 ProductCardHorizontal_oldPrice Typography_striked">
                                    18 QR</p>
                                <h5 class="Typography_h5 ProductCardHorizontal_newPrice">7.25 QR</h5>
                            </div><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="9172249" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Sweet Corn Tots 10Pcs"
                                src="https://images.snoonu.com/menu_item/2024-10/d6004d36-54bc-416b-b0c7-fbf3d7c0ed67_sweetcorncopy.jpg?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Sweet Corn Tots 10Pcs" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2024-10/d6004d36-54bc-416b-b0c7-fbf3d7c0ed67_sweetcorncopy.jpg?format=webp" /></noscript></span>
                        <div class="CardProductImage_discount">
                            <p class="Typography_p10">Promo</p>
                        </div>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Sweet Corn Tots 10Pcs
                            </h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">A perfect shareable
                                snack, the Sweet Corn Box contains ten pieces of delicious, golden-fried corn nuggets.
                            </p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <div class="ProductCardHorizontal_pricePromo">
                                <p
                                    class="Typography_p9 ProductCardHorizontal_oldPrice Typography_striked">
                                    14 QR</p>
                                <h5 class="Typography_h5 ProductCardHorizontal_newPrice">5.75 QR</h5>
                            </div><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="8986104" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Apple Pie"
                                src="https://images.snoonu.com/menu_item/2025-5/606c88af-eb28-4b87-ae39-285a93c5dba2_applepie.png?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Apple Pie" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/606c88af-eb28-4b87-ae39-285a93c5dba2_applepie.png?format=webp" /></noscript></span>
                        <div class="CardProductImage_discount">
                            <p class="Typography_p10">Promo</p>
                        </div>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Apple Pie</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">Delicious Apple
                                Pies With Different Flavors</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <div class="ProductCardHorizontal_pricePromo">
                                <p
                                    class="Typography_p9 ProductCardHorizontal_oldPrice Typography_striked">
                                    7 QR</p>
                                <h5 class="Typography_h5 ProductCardHorizontal_newPrice">3.5 QR</h5>
                            </div><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="8986087" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Rice With Tender"
                                src="https://images.snoonu.com/menu_item/2025-5/44628f74-d090-4ab1-bfe8-785e65dddcf2__0030_ricewithtenders.png?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Rice With Tender" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/44628f74-d090-4ab1-bfe8-785e65dddcf2__0030_ricewithtenders.png?format=webp" /></noscript></span>
                        <div class="CardProductImage_discount">
                            <p class="Typography_p10">Promo</p>
                        </div>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Rice With Tender</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">Rice With A Special
                                Taste With 2 Pcs Of Crispy Tender And Spicy Or Normal Golden Sauce</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <div class="ProductCardHorizontal_pricePromo">
                                <p
                                    class="Typography_p9 ProductCardHorizontal_oldPrice Typography_striked">
                                    17 QR</p>
                                <h5 class="Typography_h5 ProductCardHorizontal_newPrice">12 QR</h5>
                            </div><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="13016781" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Wrap &amp; Mashed Potato Duo Meal"
                                src="https://images.snoonu.com/menu_item/2025-7/6c4f4b76-9dbc-4260-bcad-37084d9eb1a9_wrapmashedpotatoduomeal.png?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Wrap &amp; Mashed Potato Duo Meal" loading="lazy" decoding="async"
                                    data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-7/6c4f4b76-9dbc-4260-bcad-37084d9eb1a9_wrapmashedpotatoduomeal.png?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Wrap &amp; Mashed Potato
                                Duo Meal</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">2 wrap Sandwich + 2
                                mashed potato + 2 softdrinks</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">60 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="12754585" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Yuzu Cloudy Lemonade"
                                src="https://images.snoonu.com/menu_item/2025-7/03afe9a5-ecce-41ab-acbb-688cb32ac75c_DSC00415copy.jpg?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Yuzu Cloudy Lemonade" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-7/03afe9a5-ecce-41ab-acbb-688cb32ac75c_DSC00415copy.jpg?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Yuzu Cloudy Lemonade</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">A uniquely aromatic
                                and zesty citrus beverage, the Yuzu Cloudy Lemonade offers a refreshing taste in a
                                (400ml) serving.</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">12 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="12693840" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Peach Cloudy Lemonade"
                                src="https://images.snoonu.com/menu_item/2025-7/9a9d8914-a5d1-4dba-a7b2-265bd1c87971_DSC00449copy.jpg?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Peach Cloudy Lemonade" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-7/9a9d8914-a5d1-4dba-a7b2-265bd1c87971_DSC00449copy.jpg?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Peach Cloudy Lemonade
                            </h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">The sweet, delicate
                                flavor of ripe peach is captured in this refreshing Peach Cloudy Lemonade, served in a
                                (400ml) glass.</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">12 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="9773090" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Pinoy Meal"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Pinoy Meal" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/947ac917-4897-47f9-bb59-449938e031f8_pinoymeal.png?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Pinoy Meal</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">8Oz. White
                                rice-2pcs Crispy chicken- 4Oz. Gravy sauce- soft drink (250ML)</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">28 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="9773091" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Sulit Chicken Meal"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Sulit Chicken Meal" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/da0ff27b-008a-40ec-a2ed-d980479c6c49_sulitchicknemeal.png?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Sulit Chicken Meal</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">8Oz. White
                                rice-3pcs Crispy chicken- 4Oz. Gravy sauce- French fries- 4 Oz coleslaw soft drink
                                (250ML)</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">38 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="8985861" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Bucket For Two"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Bucket For Two" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/e27536d9-b689-4530-b595-0aea0d410638_bucketfor2.png?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Bucket For Two</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">6 Pieces Of Fresh
                                Crispy Chicken, Spicy Or Regular, With Secret Spices, French Fries, 2 Buns, 2 Coleslaw,
                                2 Soft Drinks 16 Oz.</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">61 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="8985860" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Go Tenders Meal"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Go Tenders Meal" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/c1d09988-e04f-4e88-bfae-99916eaae279_gotendermeal.png?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Go Tenders Meal</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">5 Pcs Crispy
                                Tenders - Fries - 1 Bun - Coleslaw -1 Garlic Dip- Soft Drink (16 Oz)</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">31 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="8985859" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Mega Meal 4 Pieces"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Mega Meal 4 Pieces" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/45953ad6-05f2-43f3-b5af-44ccf804949e_megameal4pcs.png?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Mega Meal 4 Pieces</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">4 Pcs Crispy
                                Chicken - Fries - 1 Bun - 1 Coleslaw - Soft Drink (16 Ozl)</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">42 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="8985862" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Go Xtreme Meal"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Go Xtreme Meal" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/6acfcd10-1fc1-46a6-825c-46ea40780363_goxtrememeal.png?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Go Xtreme Meal</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">5 Pcs Crispy
                                Chicken - Fries - 1 Bun - 1 Coleslaw - Soft Drink (16 Oz)/5</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">48 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="8985865" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Go Chicken Meal"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Go Chicken Meal" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/4233010c-c243-43cb-833b-36801ca9d9e3_gochickenmeal.png?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Go Chicken Meal</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">3 Pcs Crispy
                                Chicken - Fries - 1 Bun - Coleslaw - Soft Drink (16 Oz)/3</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">33 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
            <div class="Products_group">
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="13437810" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Tender Party Box ⓢ"
                                src="https://images.snoonu.com/menu_item/2025-8/e343b25c-ed04-4871-bc72-14205f26267a_TENDERPARTYBOX.jpg?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Tender Party Box ⓢ" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-8/e343b25c-ed04-4871-bc72-14205f26267a_TENDERPARTYBOX.jpg?format=webp" /></noscript></span>
                        <div class="CardProductImage_discount">
                            <p class="Typography_p10">Promo</p>
                        </div>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Tender Party Box ⓢ</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">12pcs tenders +
                                large coleslaw + large fries + 6 buns + 3 gravy</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <div class="ProductCardHorizontal_pricePromo">
                                <p
                                    class="Typography_p9 ProductCardHorizontal_oldPrice Typography_striked">
                                    138 QR</p>
                                <h5 class="Typography_h5 ProductCardHorizontal_newPrice">69 QR</h5>
                            </div><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="12926307" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Jalapeno Cheddar Cheese Bite 5Pcs"
                                src="https://images.snoonu.com/brand_product/2025-07/726191f1-0221-44cb-b4b2-c27ed75a3f87_output.png?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Jalapeno Cheddar Cheese Bite 5Pcs" loading="lazy" decoding="async"
                                    data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/brand_product/2025-07/726191f1-0221-44cb-b4b2-c27ed75a3f87_output.png?format=webp" /></noscript></span>
                        <div class="CardProductImage_discount">
                            <p class="Typography_p10">Promo</p>
                        </div>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Jalapeno Cheddar Cheese
                                Bite 5Pcs</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">5 pieces of cheddar
                                cheese covered with breadcrumbs and jalapeno</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <div class="ProductCardHorizontal_pricePromo">
                                <p
                                    class="Typography_p9 ProductCardHorizontal_oldPrice Typography_striked">
                                    15 QR</p>
                                <h5 class="Typography_h5 ProductCardHorizontal_newPrice">6 QR</h5>
                            </div><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="10865769" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Go Snoonu Meal ⓢ"
                                src="https://images.snoonu.com/menu_item/2025-4/a040a06e-2d23-4897-b39f-1976a6b53bd0_SnoonuMeal.png?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Go Snoonu Meal ⓢ" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-4/a040a06e-2d23-4897-b39f-1976a6b53bd0_SnoonuMeal.png?format=webp" /></noscript></span>
                        <div class="CardProductImage_discount">
                            <p class="Typography_p10">Promo</p>
                        </div>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Go Snoonu Meal ⓢ</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">6 pieces of
                                chicken, 6 tender pieces, 1 family-size fries, 2 soft drink cans, 1 large coleslaw 12
                                ounces, 3 pieces of bread.</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <div class="ProductCardHorizontal_pricePromo">
                                <p
                                    class="Typography_p9 ProductCardHorizontal_oldPrice Typography_striked">
                                    136 QR</p>
                                <h5 class="Typography_h5 ProductCardHorizontal_newPrice">60 QR</h5>
                            </div><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="10283884" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Jalapeno Cheddar Cheese Bite 10Pcs"
                                src="https://images.snoonu.com/menu_item/2025-5/8717175d-00f0-4165-a551-0f3af5171ef2__0023_jalapenocheese.png?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Jalapeno Cheddar Cheese Bite 10Pcs" loading="lazy" decoding="async"
                                    data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/8717175d-00f0-4165-a551-0f3af5171ef2__0023_jalapenocheese.png?format=webp" /></noscript></span>
                        <div class="CardProductImage_discount">
                            <p class="Typography_p10">Promo</p>
                        </div>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Jalapeno Cheddar Cheese
                                Bite 10Pcs</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">Ten bite-sized
                                pieces of savory delight, Jalapeno Cheddar Cheese Bites feature a creamy cheddar cheese
                                filling with a spicy kick of jalapeno, all in a crispy coating.</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <div class="ProductCardHorizontal_pricePromo">
                                <p
                                    class="Typography_p9 ProductCardHorizontal_oldPrice Typography_striked">
                                    30 QR</p>
                                <h5 class="Typography_h5 ProductCardHorizontal_newPrice">12 QR</h5>
                            </div><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="10283885" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Sweet Corn Tots 20Pcs"
                                src="https://images.snoonu.com/brand_product/2025-01/1e306cf2-9cb6-47ba-a807-022b8350444f_output.png?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Sweet Corn Tots 20Pcs" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/brand_product/2025-01/1e306cf2-9cb6-47ba-a807-022b8350444f_output.png?format=webp" /></noscript></span>
                        <div class="CardProductImage_discount">
                            <p class="Typography_p10">Promo</p>
                        </div>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Sweet Corn Tots 20Pcs
                            </h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">A perfect snack for
                                sharing, Sweet Corn Tots are twenty bite-sized pieces of sweet corn, formed into tots
                                and cooked until golden and crispy.</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <div class="ProductCardHorizontal_pricePromo">
                                <p
                                    class="Typography_p9 ProductCardHorizontal_oldPrice Typography_striked">
                                    28 QR</p>
                                <h5 class="Typography_h5 ProductCardHorizontal_newPrice">11.25 QR</h5>
                            </div><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="9172154" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Mini Smoky Cheese Donuts"
                                src="https://images.snoonu.com/menu_item/2025-5/0f7ed573-b715-40bb-afa9-d26419774766__0024_minismokycheesedonuts.png?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Mini Smoky Cheese Donuts" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/0f7ed573-b715-40bb-afa9-d26419774766__0024_minismokycheesedonuts.png?format=webp" /></noscript></span>
                        <div class="CardProductImage_discount">
                            <p class="Typography_p10">Promo</p>
                        </div>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Mini Smoky Cheese Donuts
                            </h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">A unique and savory
                                treat, Mini Smoky Cheese Donuts are five bite-sized pieces of donuts with a rich, smoky
                                cheese flavor.</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <div class="ProductCardHorizontal_pricePromo">
                                <p
                                    class="Typography_p9 ProductCardHorizontal_oldPrice Typography_striked">
                                    18 QR</p>
                                <h5 class="Typography_h5 ProductCardHorizontal_newPrice">7.25 QR</h5>
                            </div><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="9172249" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Sweet Corn Tots 10Pcs"
                                src="https://images.snoonu.com/menu_item/2024-10/d6004d36-54bc-416b-b0c7-fbf3d7c0ed67_sweetcorncopy.jpg?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Sweet Corn Tots 10Pcs" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2024-10/d6004d36-54bc-416b-b0c7-fbf3d7c0ed67_sweetcorncopy.jpg?format=webp" /></noscript></span>
                        <div class="CardProductImage_discount">
                            <p class="Typography_p10">Promo</p>
                        </div>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Sweet Corn Tots 10Pcs
                            </h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">A perfect shareable
                                snack, the Sweet Corn Box contains ten pieces of delicious, golden-fried corn nuggets.
                            </p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <div class="ProductCardHorizontal_pricePromo">
                                <p
                                    class="Typography_p9 ProductCardHorizontal_oldPrice Typography_striked">
                                    14 QR</p>
                                <h5 class="Typography_h5 ProductCardHorizontal_newPrice">5.75 QR</h5>
                            </div><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="8986104" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Apple Pie"
                                src="https://images.snoonu.com/menu_item/2025-5/606c88af-eb28-4b87-ae39-285a93c5dba2_applepie.png?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Apple Pie" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/606c88af-eb28-4b87-ae39-285a93c5dba2_applepie.png?format=webp" /></noscript></span>
                        <div class="CardProductImage_discount">
                            <p class="Typography_p10">Promo</p>
                        </div>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Apple Pie</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">Delicious Apple
                                Pies With Different Flavors</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <div class="ProductCardHorizontal_pricePromo">
                                <p
                                    class="Typography_p9 ProductCardHorizontal_oldPrice Typography_striked">
                                    7 QR</p>
                                <h5 class="Typography_h5 ProductCardHorizontal_newPrice">3.5 QR</h5>
                            </div><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="8986087" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Rice With Tender"
                                src="https://images.snoonu.com/menu_item/2025-5/44628f74-d090-4ab1-bfe8-785e65dddcf2__0030_ricewithtenders.png?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Rice With Tender" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/44628f74-d090-4ab1-bfe8-785e65dddcf2__0030_ricewithtenders.png?format=webp" /></noscript></span>
                        <div class="CardProductImage_discount">
                            <p class="Typography_p10">Promo</p>
                        </div>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Rice With Tender</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">Rice With A Special
                                Taste With 2 Pcs Of Crispy Tender And Spicy Or Normal Golden Sauce</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <div class="ProductCardHorizontal_pricePromo">
                                <p
                                    class="Typography_p9 ProductCardHorizontal_oldPrice Typography_striked">
                                    17 QR</p>
                                <h5 class="Typography_h5 ProductCardHorizontal_newPrice">12 QR</h5>
                            </div><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="13016781" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Wrap &amp; Mashed Potato Duo Meal"
                                src="https://images.snoonu.com/menu_item/2025-7/6c4f4b76-9dbc-4260-bcad-37084d9eb1a9_wrapmashedpotatoduomeal.png?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Wrap &amp; Mashed Potato Duo Meal" loading="lazy" decoding="async"
                                    data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-7/6c4f4b76-9dbc-4260-bcad-37084d9eb1a9_wrapmashedpotatoduomeal.png?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Wrap &amp; Mashed Potato
                                Duo Meal</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">2 wrap Sandwich + 2
                                mashed potato + 2 softdrinks</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">60 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="12754585" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Yuzu Cloudy Lemonade"
                                src="https://images.snoonu.com/menu_item/2025-7/03afe9a5-ecce-41ab-acbb-688cb32ac75c_DSC00415copy.jpg?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Yuzu Cloudy Lemonade" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-7/03afe9a5-ecce-41ab-acbb-688cb32ac75c_DSC00415copy.jpg?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Yuzu Cloudy Lemonade</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">A uniquely aromatic
                                and zesty citrus beverage, the Yuzu Cloudy Lemonade offers a refreshing taste in a
                                (400ml) serving.</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">12 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="12693840" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Peach Cloudy Lemonade"
                                src="https://images.snoonu.com/menu_item/2025-7/9a9d8914-a5d1-4dba-a7b2-265bd1c87971_DSC00449copy.jpg?format=webp"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Peach Cloudy Lemonade" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-7/9a9d8914-a5d1-4dba-a7b2-265bd1c87971_DSC00449copy.jpg?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Peach Cloudy Lemonade
                            </h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">The sweet, delicate
                                flavor of ripe peach is captured in this refreshing Peach Cloudy Lemonade, served in a
                                (400ml) glass.</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">12 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="9773090" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Pinoy Meal"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Pinoy Meal" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/947ac917-4897-47f9-bb59-449938e031f8_pinoymeal.png?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Pinoy Meal</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">8Oz. White
                                rice-2pcs Crispy chicken- 4Oz. Gravy sauce- soft drink (250ML)</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">28 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="9773091" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Sulit Chicken Meal"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Sulit Chicken Meal" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/da0ff27b-008a-40ec-a2ed-d980479c6c49_sulitchicknemeal.png?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Sulit Chicken Meal</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">8Oz. White
                                rice-3pcs Crispy chicken- 4Oz. Gravy sauce- French fries- 4 Oz coleslaw soft drink
                                (250ML)</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">38 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="8985861" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Bucket For Two"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Bucket For Two" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/e27536d9-b689-4530-b595-0aea0d410638_bucketfor2.png?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Bucket For Two</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">6 Pieces Of Fresh
                                Crispy Chicken, Spicy Or Regular, With Secret Spices, French Fries, 2 Buns, 2 Coleslaw,
                                2 Soft Drinks 16 Oz.</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">61 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="8985860" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Go Tenders Meal"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Go Tenders Meal" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/c1d09988-e04f-4e88-bfae-99916eaae279_gotendermeal.png?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Go Tenders Meal</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">5 Pcs Crispy
                                Tenders - Fries - 1 Bun - Coleslaw -1 Garlic Dip- Soft Drink (16 Oz)</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">31 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="8985859" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Mega Meal 4 Pieces"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Mega Meal 4 Pieces" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/45953ad6-05f2-43f3-b5af-44ccf804949e_megameal4pcs.png?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Mega Meal 4 Pieces</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">4 Pcs Crispy
                                Chicken - Fries - 1 Bun - 1 Coleslaw - Soft Drink (16 Ozl)</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">42 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="8985862" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Go Xtreme Meal"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Go Xtreme Meal" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/6acfcd10-1fc1-46a6-825c-46ea40780363_goxtrememeal.png?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Go Xtreme Meal</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">5 Pcs Crispy
                                Chicken - Fries - 1 Bun - 1 Coleslaw - Soft Drink (16 Oz)/5</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">48 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div data-analytic-label="productCard" data-test-id="cardOfProduct"
                    data-analytic-event-content="8985865" class="ProductCardHorizontal_wrapper">
                    <div class="CardProductImage_imageWrapper ProductCardHorizontal_image"><span
                            style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0"><img
                                alt="Go Chicken Meal"
                                src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                                decoding="async" data-nimg="fill"
                                style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"><noscript><img
                                    alt="Go Chicken Meal" loading="lazy" decoding="async" data-nimg="fill"
                                    style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center"
                                    src="https://images.snoonu.com/menu_item/2025-5/4233010c-c243-43cb-833b-36801ca9d9e3_gochickenmeal.png?format=webp" /></noscript></span>
                    </div>
                    <div class="ProductCardHorizontal_info">
                        <div>
                            <h5 class="Typography_h5 ProductCardHorizontal_name">Go Chicken Meal</h5>
                            <p class="Typography_p8 ProductCardHorizontal_description">3 Pcs Crispy
                                Chicken - Fries - 1 Bun - Coleslaw - Soft Drink (16 Oz)/3</p>
                        </div>
                        <div class="ProductCardHorizontal_priceWrapper">
                            <h5 class="Typography_h5">33 QR</h5><button
                                class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_primary ProductButton_normal__jOR_t ProductCardHorizontal_productButton"
                                data-test-id="addBtnProductCard" data-analytic-label="productButtonAdd"><span
                                    class="Button_content">Add</span></button>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
            <div id="menu" class="Categories_wrapper MenuCategories_wrapper">
                <div data-analytic-label="menuFilter" data-analytic-event-action="filter_apply"
                    data-analytic-event-content="633966" class="Categories_categoryWrapper__3_FRF">
                    <p class="Typography_p6 Categories_category Categories_active">All</p>
                </div>
                <div data-analytic-label="menuFilter" data-analytic-event-action="filter_apply"
                    data-analytic-event-content="655263" class="Categories_categoryWrapper__3_FRF">
                    <p class="Typography_p6 Categories_category">Offer</p>
                </div>
                <div data-analytic-label="menuFilter" data-analytic-event-action="filter_apply"
                    data-analytic-event-content="841086" class="Categories_categoryWrapper__3_FRF">
                    <p class="Typography_p6 Categories_category">Exclusive Meal</p>
                </div>
                <div data-analytic-label="menuFilter" data-analytic-event-action="filter_apply"
                    data-analytic-event-content="800569" class="Categories_categoryWrapper__3_FRF">
                    <p class="Typography_p6 Categories_category">Secret Eats</p>
                </div>
                <div data-analytic-label="menuFilter" data-analytic-event-action="filter_apply"
                    data-analytic-event-content="633956" class="Categories_categoryWrapper__3_FRF">
                    <p class="Typography_p6 Categories_category">Go Crispy Original Meals</p>
                </div>
                <div data-analytic-label="menuFilter" data-analytic-event-action="filter_apply"
                    data-analytic-event-content="633957" class="Categories_categoryWrapper__3_FRF">
                    <p class="Typography_p6 Categories_category">Value Meal</p>
                </div>
                <div data-analytic-label="menuFilter" data-analytic-event-action="filter_apply"
                    data-analytic-event-content="633958" class="Categories_categoryWrapper__3_FRF">
                    <p class="Typography_p6 Categories_category">Xtreme Meal</p>
                </div>
                <div data-analytic-label="menuFilter" data-analytic-event-action="filter_apply"
                    data-analytic-event-content="633959" class="Categories_categoryWrapper__3_FRF">
                    <p class="Typography_p6 Categories_category">Bucket Meal</p>
                </div>
                <div data-analytic-label="menuFilter" data-analytic-event-action="filter_apply"
                    data-analytic-event-content="633960" class="Categories_categoryWrapper__3_FRF">
                    <p class="Typography_p6 Categories_category">Combo Meals</p>
                </div>
                <div data-analytic-label="menuFilter" data-analytic-event-action="filter_apply"
                    data-analytic-event-content="633961" class="Categories_categoryWrapper__3_FRF">
                    <p class="Typography_p6 Categories_category">Sandwich</p>
                </div>
                <div data-analytic-label="menuFilter" data-analytic-event-action="filter_apply"
                    data-analytic-event-content="633962" class="Categories_categoryWrapper__3_FRF">
                    <p class="Typography_p6 Categories_category">Kids Meal</p>
                </div>
                <div data-analytic-label="menuFilter" data-analytic-event-action="filter_apply"
                    data-analytic-event-content="633963" class="Categories_categoryWrapper__3_FRF">
                    <p class="Typography_p6 Categories_category">Sides &amp; Condiments</p>
                </div>
                <div data-analytic-label="menuFilter" data-analytic-event-action="filter_apply"
                    data-analytic-event-content="633964" class="Categories_categoryWrapper__3_FRF">
                    <p class="Typography_p6 Categories_category">Desserts</p>
                </div>
                <div data-analytic-label="menuFilter" data-analytic-event-action="filter_apply"
                    data-analytic-event-content="633965" class="Categories_categoryWrapper__3_FRF">
                    <p class="Typography_p6 Categories_category">Beverage</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>
