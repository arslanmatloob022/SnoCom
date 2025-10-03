<script setup lang="ts">
const storeList = ref([
  {
    label: "Carrefour",
    image:
      "https://images.snoonu.com/brand/2025-07/18a5968e-356e-4bdd-8b5d-ffd4885845cc_output.png?format=webp",
    rate: 4.7,
    discount: "70% Off",
    exclusive: "Exclusive Offers",
    deliveryTime: 57,
    tags: "Hypermarket, Personal Care, Kitchenware, Smart Home Appliances",
    priceRange: "$$",
  },
  {
    label: "Lulu Hypermarket",
    image:
      "https://images.snoonu.com/brand/2025-07/cf98d86a-84d5-4c7b-8693-3a743c0265a4_output.png?format=webp",
    rate: 4.7,
    discount: "70% Off",
    deliveryTime: 56,
    tags: "Disposables, Snacks, Water",
    priceRange: "$$",
  },
  {
    label: "Al Duha Meat",
    image:
      "https://images.snoonu.com/brand/2025-04/e08cdb6a-05b1-4603-a9f5-fb18bd1ef99f_output.png?format=webp",
    rate: 4.8,
    deliveryTime: 22,
    tags: "Chicken",
    priceRange: "$$",
  },
  {
    label: "Khalid Bin Nasser Trading & Agencies",
    image:
      "https://images.snoonu.com/brand/2025-08/9f9eee54-f811-43a4-85e6-2aa5773a5d00_output.png?format=webp",
    deliveryTime: 22,
    tags: "Groceries, Disposables",
    priceRange: "$$",
  },
  {
    label: "Wooden Bakery Grocery",
    image:
      "https://images.snoonu.com/brand/2025-04/ccea2f7a-ed26-4210-9551-0940f93a23d0_output.png?format=webp",
    rate: 5.0,
    deliveryTime: 16,
    tags: "Bakery, Sweets, Healthy",
    priceRange: "$$",
  },
  {
    label: "Village Market",
    image:
      "https://images.snoonu.com/brand/2025-04/4fbcef1e-45a0-4aeb-b247-810b1df113a3_output.png?format=webp",
    rate: 4.7,
    deliveryTime: 22,
    tags: "Snacks",
    priceRange: "$$",
  },
  {
    label: "Kaboly Roastery",
    image:
      "https://images.snoonu.com/brand/2025-06/f9827269-91e0-41e6-8ebb-4f5cca666d8f_output.png?format=webp",
    rate: 4.7,
    deliveryTime: 19,
    tags: "Dates, Groceries, Coffee",
    priceRange: "$$",
  },
  {
    label: "Marisco Grocery",
    image:
      "https://images.snoonu.com/brand/2025-05/7789892c-9b7d-46b6-a6ba-9d1336aad48f_output.png?format=webp",
    deliveryTime: 19,
    tags: "Groceries, Noodles, Beverages",
    priceRange: "$$",
  },
  {
    label: "Al Abed Roastery",
    image:
      "https://images.snoonu.com/brand/2025-09/72f34385-c65a-41db-aee6-43ba344329f6_output.png?format=webp",
    rate: 4.8,
    deliveryTime: 19,
    tags: "Dry Fruits, Coffee, Healthy",
    priceRange: "$$",
  },
  {
    label: "Dr. Kanafa - Grocery",
    image:
      "https://images.snoonu.com/brand/2025-02/c6063304-0567-42af-886e-29d538e142eb_output.png?format=webp",
    deliveryTime: 28,
    tags: "Desserts, Arabic Sweets",
    priceRange: "$$",
  },
  {
    label: "Meat And Spice",
    image:
      "https://images.snoonu.com/brand/2025-04/9be84ea1-47fc-4956-a433-800780ca37c4_output.png?format=webp",
    rate: 4.6,
    deliveryTime: 19,
    tags: "Chicken, Spices, BBQ, Grills, Poultry",
    priceRange: "$$$",
  },
  {
    label: "Coffee 88",
    image:
      "https://images.snoonu.com/brand/2025-03/79dc639c-54ea-41cd-bfdb-aec88a19610b_output.png?format=webp",
    deliveryTime: 22,
    tags: "Beverages, Coffee",
    priceRange: "$$",
  },
  {
    label: "Al Qusaimi Meat Co.",
    image:
      "https://images.snoonu.com/brand/2024-10/e90d8bbf-a04b-4aa0-96d6-80aff8fe9dae_output.png?format=webp",
    deliveryTime: 19,
    tags: "Meat",
    priceRange: "$$",
  },
  {
    label: "Smart Shopping Center",
    image:
      "https://images.snoonu.com/brand/2025-08/ea71f92a-d7b9-42e3-a711-05cf75fc354f_output.png?format=webp",
    deliveryTime: 22,
    tags: "Groceries, Personal Care, Snacks, Bakery, Beverages",
  },
]);

import MerchantCard from "./MerchantCard.vue";
</script>

<template>
  <div class="Merchants_wrapper">
    <MerchantCard
      v-for="(item, idx) in storeList"
      :key="idx"
      v-bind="item"
      :link="`/groceries/${item.label
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')}`"
    />
    <div class="MerchantCard_wrapper">
      <a
        rel="noopener noreferrer"
        data-analytic-label="merchantCard"
        data-test-id="merchantCardInCategory"
        data-analytic-event-content="carrefour"
        target="_blank"
        href="/groceries/carrefour"
        ><div class="MerchantCard_imageWrapper">
          <div class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_">
            <div
              class="MerchantPromoTag_promoTag MerchantPromoTag_percentageOff"
            >
              <p class="Typography_p10">70% Off</p>
            </div>
            <div
              class="MerchantPromoTag_promoTag MerchantPromoTag_exclusiveOffers"
            >
              <p class="Typography_p10">Exclusive Offers</p>
            </div>
          </div>
          <img
            alt="Carrefour"
            fetchpriority="high"
            decoding="async"
            data-nimg="fill"
            class="MerchantCard_image"
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              color: transparent;
            "
            src="https://images.snoonu.com/brand/2025-07/18a5968e-356e-4bdd-8b5d-ffd4885845cc_output.png?format=webp"
          />
          <div class="MerchantCard_deliveryTime">
            <span
              data-test-id=""
              class="Icon_iconWrapper MerchantCard_driverIcon"
              style="width: 16px; height: 16px"
              ><svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon_icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                  fill="currentColor"
                ></path></svg
            ></span>
            <p class="Typography_p8">
              57<!-- -->
              <!-- -->mins
            </p>
          </div>
        </div>
        <div class="MerchantCard_content">
          <div class="MerchantCard_primaryDetails">
            <p class="Typography_p1 MerchantCard_name">Carrefour</p>
          </div>
          <div class="MerchantCard_secondaryDetails__c9r_K">
            <div class="MerchantCard_rating">
              <span
                data-test-id=""
                class="Icon_iconWrapper MerchantCard_starIcon"
                style="width: 12px"
                ><svg viewBox="0 0 24 25" fill="none" class="Icon_icon">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1.88c.38 0 .727.208.889.533L15.7 8.07l6.268.91a.969.969 0 0 1 .782.622.89.89 0 0 1-.23.942l-4.562 4.413 1.079 6.246a.905.905 0 0 1-.404.908 1.03 1.03 0 0 1-1.04.053L12 19.244l-5.592 2.92a1.03 1.03 0 0 1-1.04-.053.905.905 0 0 1-.404-.908l1.078-6.246-4.562-4.413a.89.89 0 0 1-.23-.942.969.969 0 0 1 .783-.623L8.3 8.07l2.811-5.656a.988.988 0 0 1 .89-.533Z"
                    fill="currentColor"
                  ></path></svg
              ></span>
              <p class="Typography_p8">4.7</p>
            </div>
            <div class="MerchantPriceRange_averagePrice">
              <p
                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive"
              >
                $
              </p>
              <p
                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive"
              >
                $
              </p>
              <p class="Typography_p8 MerchantPriceRange_price">$</p>
            </div>
            <p class="Typography_p8 MerchantCard_tags___u15_">
              Hypermarket, Personal Care, Kitchenware, Smart Home Appliances
            </p>
          </div>
        </div></a
      >
    </div>
    <div class="MerchantCard_wrapper">
      <a
        rel="noopener noreferrer"
        data-analytic-label="merchantCard"
        data-test-id="merchantCardInCategory"
        data-analytic-event-content="lulu-hypermarket"
        target="_blank"
        href="/groceries/lulu-hypermarket"
        ><div class="MerchantCard_imageWrapper">
          <div class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_">
            <div
              class="MerchantPromoTag_promoTag MerchantPromoTag_percentageOff"
            >
              <p class="Typography_p10">70% Off</p>
            </div>
          </div>
          <img
            alt="Lulu Hypermarket"
            fetchpriority="high"
            decoding="async"
            data-nimg="fill"
            class="MerchantCard_image"
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              color: transparent;
            "
            src="https://images.snoonu.com/brand/2025-07/cf98d86a-84d5-4c7b-8693-3a743c0265a4_output.png?format=webp"
          />
          <div class="MerchantCard_deliveryTime">
            <span
              data-test-id=""
              class="Icon_iconWrapper MerchantCard_driverIcon"
              style="width: 16px; height: 16px"
              ><svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon_icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                  fill="currentColor"
                ></path></svg
            ></span>
            <p class="Typography_p8">
              56<!-- -->
              <!-- -->mins
            </p>
          </div>
        </div>
        <div class="MerchantCard_content">
          <div class="MerchantCard_primaryDetails">
            <p class="Typography_p1 MerchantCard_name">Lulu Hypermarket</p>
          </div>
          <div class="MerchantCard_secondaryDetails__c9r_K">
            <div class="MerchantCard_rating">
              <span
                data-test-id=""
                class="Icon_iconWrapper MerchantCard_starIcon"
                style="width: 12px"
                ><svg viewBox="0 0 24 25" fill="none" class="Icon_icon">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1.88c.38 0 .727.208.889.533L15.7 8.07l6.268.91a.969.969 0 0 1 .782.622.89.89 0 0 1-.23.942l-4.562 4.413 1.079 6.246a.905.905 0 0 1-.404.908 1.03 1.03 0 0 1-1.04.053L12 19.244l-5.592 2.92a1.03 1.03 0 0 1-1.04-.053.905.905 0 0 1-.404-.908l1.078-6.246-4.562-4.413a.89.89 0 0 1-.23-.942.969.969 0 0 1 .783-.623L8.3 8.07l2.811-5.656a.988.988 0 0 1 .89-.533Z"
                    fill="currentColor"
                  ></path></svg
              ></span>
              <p class="Typography_p8">4.7</p>
            </div>
            <div class="MerchantPriceRange_averagePrice">
              <p
                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive"
              >
                $
              </p>
              <p
                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive"
              >
                $
              </p>
              <p class="Typography_p8 MerchantPriceRange_price">$</p>
            </div>
            <p class="Typography_p8 MerchantCard_tags___u15_">
              Disposables, Snacks, Water
            </p>
          </div>
        </div></a
      >
    </div>
    <div class="MerchantCard_wrapper">
      <a
        rel="noopener noreferrer"
        data-analytic-label="merchantCard"
        data-test-id="merchantCardInCategory"
        data-analytic-event-content="al-duha-meat"
        target="_blank"
        href="/groceries/al-duha-meat"
        ><div class="MerchantCard_imageWrapper">
          <div
            class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_"
          ></div>
          <img
            alt="Al Duha Meat"
            fetchpriority="high"
            decoding="async"
            data-nimg="fill"
            class="MerchantCard_image"
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              color: transparent;
            "
            src="https://images.snoonu.com/brand/2025-04/e08cdb6a-05b1-4603-a9f5-fb18bd1ef99f_output.png?format=webp"
          />
          <div class="MerchantCard_deliveryTime">
            <span
              data-test-id=""
              class="Icon_iconWrapper MerchantCard_driverIcon"
              style="width: 16px; height: 16px"
              ><svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon_icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                  fill="currentColor"
                ></path></svg
            ></span>
            <p class="Typography_p8">
              22<!-- -->
              <!-- -->mins
            </p>
          </div>
        </div>
        <div class="MerchantCard_content">
          <div class="MerchantCard_primaryDetails">
            <p class="Typography_p1 MerchantCard_name">Al Duha Meat</p>
          </div>
          <div class="MerchantCard_secondaryDetails__c9r_K">
            <div class="MerchantCard_rating">
              <span
                data-test-id=""
                class="Icon_iconWrapper MerchantCard_starIcon"
                style="width: 12px"
                ><svg viewBox="0 0 24 25" fill="none" class="Icon_icon">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1.88c.38 0 .727.208.889.533L15.7 8.07l6.268.91a.969.969 0 0 1 .782.622.89.89 0 0 1-.23.942l-4.562 4.413 1.079 6.246a.905.905 0 0 1-.404.908 1.03 1.03 0 0 1-1.04.053L12 19.244l-5.592 2.92a1.03 1.03 0 0 1-1.04-.053.905.905 0 0 1-.404-.908l1.078-6.246-4.562-4.413a.89.89 0 0 1-.23-.942.969.969 0 0 1 .783-.623L8.3 8.07l2.811-5.656a.988.988 0 0 1 .89-.533Z"
                    fill="currentColor"
                  ></path></svg
              ></span>
              <p class="Typography_p8">4.8</p>
            </div>
            <div class="MerchantPriceRange_averagePrice">
              <p
                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive"
              >
                $
              </p>
              <p
                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive"
              >
                $
              </p>
              <p class="Typography_p8 MerchantPriceRange_price">$</p>
            </div>
            <p class="Typography_p8 MerchantCard_tags___u15_">Chicken</p>
          </div>
        </div></a
      >
    </div>
    <div class="MerchantCard_wrapper">
      <a
        rel="noopener noreferrer"
        data-analytic-label="merchantCard"
        data-test-id="merchantCardInCategory"
        data-analytic-event-content="khalid-bin-nasser-trading-and-agencies"
        target="_blank"
        href="/groceries/khalid-bin-nasser-trading-and-agencies"
        ><div class="MerchantCard_imageWrapper">
          <div
            class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_"
          ></div>
          <img
            alt="Khalid Bin Nasser Trading &amp; Agencies"
            fetchpriority="high"
            decoding="async"
            data-nimg="fill"
            class="MerchantCard_image"
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              color: transparent;
            "
            src="https://images.snoonu.com/brand/2025-08/9f9eee54-f811-43a4-85e6-2aa5773a5d00_output.png?format=webp"
          />
          <div class="MerchantCard_deliveryTime">
            <span
              data-test-id=""
              class="Icon_iconWrapper MerchantCard_driverIcon"
              style="width: 16px; height: 16px"
              ><svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon_icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                  fill="currentColor"
                ></path></svg
            ></span>
            <p class="Typography_p8">
              22<!-- -->
              <!-- -->mins
            </p>
          </div>
        </div>
        <div class="MerchantCard_content">
          <div class="MerchantCard_primaryDetails">
            <p class="Typography_p1 MerchantCard_name">
              Khalid Bin Nasser Trading &amp; Agencies
            </p>
          </div>
          <div class="MerchantCard_secondaryDetails__c9r_K">
            <div class="MerchantPriceRange_averagePrice">
              <p
                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive"
              >
                $
              </p>
              <p
                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive"
              >
                $
              </p>
              <p class="Typography_p8 MerchantPriceRange_price">$</p>
            </div>
            <p class="Typography_p8 MerchantCard_tags___u15_">
              Groceries, Disposables
            </p>
          </div>
        </div></a
      >
    </div>
    <div class="MerchantCard_wrapper">
      <a
        rel="noopener noreferrer"
        data-analytic-label="merchantCard"
        data-test-id="merchantCardInCategory"
        data-analytic-event-content="wooden-bakery-grocery"
        target="_blank"
        href="/groceries/wooden-bakery-grocery"
        ><div class="MerchantCard_imageWrapper">
          <div
            class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_"
          ></div>
          <img
            alt="Wooden Bakery Grocery"
            fetchpriority="high"
            decoding="async"
            data-nimg="fill"
            class="MerchantCard_image"
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              color: transparent;
            "
            src="https://images.snoonu.com/brand/2025-04/ccea2f7a-ed26-4210-9551-0940f93a23d0_output.png?format=webp"
          />
          <div class="MerchantCard_deliveryTime">
            <span
              data-test-id=""
              class="Icon_iconWrapper MerchantCard_driverIcon"
              style="width: 16px; height: 16px"
              ><svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon_icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                  fill="currentColor"
                ></path></svg
            ></span>
            <p class="Typography_p8">
              16<!-- -->
              <!-- -->mins
            </p>
          </div>
        </div>
        <div class="MerchantCard_content">
          <div class="MerchantCard_primaryDetails">
            <p class="Typography_p1 MerchantCard_name">Wooden Bakery Grocery</p>
          </div>
          <div class="MerchantCard_secondaryDetails__c9r_K">
            <div class="MerchantCard_rating">
              <span
                data-test-id=""
                class="Icon_iconWrapper MerchantCard_starIcon"
                style="width: 12px"
                ><svg viewBox="0 0 24 25" fill="none" class="Icon_icon">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1.88c.38 0 .727.208.889.533L15.7 8.07l6.268.91a.969.969 0 0 1 .782.622.89.89 0 0 1-.23.942l-4.562 4.413 1.079 6.246a.905.905 0 0 1-.404.908 1.03 1.03 0 0 1-1.04.053L12 19.244l-5.592 2.92a1.03 1.03 0 0 1-1.04-.053.905.905 0 0 1-.404-.908l1.078-6.246-4.562-4.413a.89.89 0 0 1-.23-.942.969.969 0 0 1 .783-.623L8.3 8.07l2.811-5.656a.988.988 0 0 1 .89-.533Z"
                    fill="currentColor"
                  ></path></svg
              ></span>
              <p class="Typography_p8">5.0</p>
            </div>
            <div class="MerchantPriceRange_averagePrice">
              <p
                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive"
              >
                $
              </p>
              <p class="Typography_p8 MerchantPriceRange_price">$</p>
              <p class="Typography_p8 MerchantPriceRange_price">$</p>
            </div>
            <p class="Typography_p8 MerchantCard_tags___u15_">
              Bakery, Sweets, Healthy
            </p>
          </div>
        </div></a
      >
    </div>
    <div class="MerchantCard_wrapper">
      <a
        rel="noopener noreferrer"
        data-analytic-label="merchantCard"
        data-test-id="merchantCardInCategory"
        data-analytic-event-content="village-market"
        target="_blank"
        href="/groceries/village-market"
        ><div class="MerchantCard_imageWrapper">
          <div
            class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_"
          ></div>
          <img
            alt="Village Market"
            fetchpriority="high"
            decoding="async"
            data-nimg="fill"
            class="MerchantCard_image"
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              color: transparent;
            "
            src="https://images.snoonu.com/brand/2025-04/4fbcef1e-45a0-4aeb-b247-810b1df113a3_output.png?format=webp"
          />
          <div class="MerchantCard_deliveryTime">
            <span
              data-test-id=""
              class="Icon_iconWrapper MerchantCard_driverIcon"
              style="width: 16px; height: 16px"
              ><svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon_icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                  fill="currentColor"
                ></path></svg
            ></span>
            <p class="Typography_p8">
              22<!-- -->
              <!-- -->mins
            </p>
          </div>
        </div>
        <div class="MerchantCard_content">
          <div class="MerchantCard_primaryDetails">
            <p class="Typography_p1 MerchantCard_name">Village Market</p>
          </div>
          <div class="MerchantCard_secondaryDetails__c9r_K">
            <div class="MerchantCard_rating">
              <span
                data-test-id=""
                class="Icon_iconWrapper MerchantCard_starIcon"
                style="width: 12px"
                ><svg viewBox="0 0 24 25" fill="none" class="Icon_icon">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1.88c.38 0 .727.208.889.533L15.7 8.07l6.268.91a.969.969 0 0 1 .782.622.89.89 0 0 1-.23.942l-4.562 4.413 1.079 6.246a.905.905 0 0 1-.404.908 1.03 1.03 0 0 1-1.04.053L12 19.244l-5.592 2.92a1.03 1.03 0 0 1-1.04-.053.905.905 0 0 1-.404-.908l1.078-6.246-4.562-4.413a.89.89 0 0 1-.23-.942.969.969 0 0 1 .783-.623L8.3 8.07l2.811-5.656a.988.988 0 0 1 .89-.533Z"
                    fill="currentColor"
                  ></path></svg
              ></span>
              <p class="Typography_p8">4.7</p>
            </div>
            <div class="MerchantPriceRange_averagePrice">
              <p
                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive"
              >
                $
              </p>
              <p
                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive"
              >
                $
              </p>
              <p class="Typography_p8 MerchantPriceRange_price">$</p>
            </div>
            <p class="Typography_p8 MerchantCard_tags___u15_">Snacks</p>
          </div>
        </div></a
      >
    </div>
    <div class="MerchantCard_wrapper">
      <a
        rel="noopener noreferrer"
        data-analytic-label="merchantCard"
        data-test-id="merchantCardInCategory"
        data-analytic-event-content="kaboly-roastery"
        target="_blank"
        href="/groceries/kaboly-roastery"
        ><div class="MerchantCard_imageWrapper">
          <div
            class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_"
          ></div>
          <img
            alt="Kaboly Roastery"
            fetchpriority="high"
            decoding="async"
            data-nimg="fill"
            class="MerchantCard_image"
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              color: transparent;
            "
            src="https://images.snoonu.com/brand/2025-06/f9827269-91e0-41e6-8ebb-4f5cca666d8f_output.png?format=webp"
          />
          <div class="MerchantCard_deliveryTime">
            <span
              data-test-id=""
              class="Icon_iconWrapper MerchantCard_driverIcon"
              style="width: 16px; height: 16px"
              ><svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon_icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                  fill="currentColor"
                ></path></svg
            ></span>
            <p class="Typography_p8">
              19<!-- -->
              <!-- -->mins
            </p>
          </div>
        </div>
        <div class="MerchantCard_content">
          <div class="MerchantCard_primaryDetails">
            <p class="Typography_p1 MerchantCard_name">Kaboly Roastery</p>
          </div>
          <div class="MerchantCard_secondaryDetails__c9r_K">
            <div class="MerchantCard_rating">
              <span
                data-test-id=""
                class="Icon_iconWrapper MerchantCard_starIcon"
                style="width: 12px"
                ><svg viewBox="0 0 24 25" fill="none" class="Icon_icon">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1.88c.38 0 .727.208.889.533L15.7 8.07l6.268.91a.969.969 0 0 1 .782.622.89.89 0 0 1-.23.942l-4.562 4.413 1.079 6.246a.905.905 0 0 1-.404.908 1.03 1.03 0 0 1-1.04.053L12 19.244l-5.592 2.92a1.03 1.03 0 0 1-1.04-.053.905.905 0 0 1-.404-.908l1.078-6.246-4.562-4.413a.89.89 0 0 1-.23-.942.969.969 0 0 1 .783-.623L8.3 8.07l2.811-5.656a.988.988 0 0 1 .89-.533Z"
                    fill="currentColor"
                  ></path></svg
              ></span>
              <p class="Typography_p8">4.7</p>
            </div>
            <div class="MerchantPriceRange_averagePrice">
              <p
                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive"
              >
                $
              </p>
              <p
                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive"
              >
                $
              </p>
              <p class="Typography_p8 MerchantPriceRange_price">$</p>
            </div>
            <p class="Typography_p8 MerchantCard_tags___u15_">
              Dates, Groceries, Coffee
            </p>
          </div>
        </div></a
      >
    </div>
    <div class="MerchantCard_wrapper">
      <a
        rel="noopener noreferrer"
        data-analytic-label="merchantCard"
        data-test-id="merchantCardInCategory"
        data-analytic-event-content="marisco-grocery"
        target="_blank"
        href="/groceries/marisco-grocery"
        ><div class="MerchantCard_imageWrapper">
          <div
            class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_"
          ></div>
          <img
            alt="Marisco Grocery"
            fetchpriority="high"
            decoding="async"
            data-nimg="fill"
            class="MerchantCard_image"
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              color: transparent;
            "
            src="https://images.snoonu.com/brand/2025-05/7789892c-9b7d-46b6-a6ba-9d1336aad48f_output.png?format=webp"
          />
          <div class="MerchantCard_deliveryTime">
            <span
              data-test-id=""
              class="Icon_iconWrapper MerchantCard_driverIcon"
              style="width: 16px; height: 16px"
              ><svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon_icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                  fill="currentColor"
                ></path></svg
            ></span>
            <p class="Typography_p8">
              19<!-- -->
              <!-- -->mins
            </p>
          </div>
        </div>
        <div class="MerchantCard_content">
          <div class="MerchantCard_primaryDetails">
            <p class="Typography_p1 MerchantCard_name">Marisco Grocery</p>
          </div>
          <div class="MerchantCard_secondaryDetails__c9r_K">
            <div class="MerchantPriceRange_averagePrice">
              <p
                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive"
              >
                $
              </p>
              <p
                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive"
              >
                $
              </p>
              <p class="Typography_p8 MerchantPriceRange_price">$</p>
            </div>
            <p class="Typography_p8 MerchantCard_tags___u15_">
              Groceries, Noodles, Beverages
            </p>
          </div>
        </div></a
      >
    </div>
    <div class="MerchantCard_wrapper">
      <a
        rel="noopener noreferrer"
        data-analytic-label="merchantCard"
        data-test-id="merchantCardInCategory"
        data-analytic-event-content="al-abed-roastery"
        target="_blank"
        href="/groceries/al-abed-roastery"
        ><div class="MerchantCard_imageWrapper">
          <div
            class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_"
          ></div>
          <img
            alt="Al Abed Roastery"
            fetchpriority="auto"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            class="MerchantCard_image"
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              color: transparent;
            "
            src="https://images.snoonu.com/brand/2025-09/72f34385-c65a-41db-aee6-43ba344329f6_output.png?format=webp"
          />
          <div class="MerchantCard_deliveryTime">
            <span
              data-test-id=""
              class="Icon_iconWrapper MerchantCard_driverIcon"
              style="width: 16px; height: 16px"
              ><svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon_icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                  fill="currentColor"
                ></path></svg
            ></span>
            <p class="Typography_p8">
              19<!-- -->
              <!-- -->mins
            </p>
          </div>
        </div>
        <div class="MerchantCard_content">
          <div class="MerchantCard_primaryDetails">
            <p class="Typography_p1 MerchantCard_name">Al Abed Roastery</p>
          </div>
          <div class="MerchantCard_secondaryDetails__c9r_K">
            <div class="MerchantCard_rating">
              <span
                data-test-id=""
                class="Icon_iconWrapper MerchantCard_starIcon"
                style="width: 12px"
                ><svg viewBox="0 0 24 25" fill="none" class="Icon_icon">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1.88c.38 0 .727.208.889.533L15.7 8.07l6.268.91a.969.969 0 0 1 .782.622.89.89 0 0 1-.23.942l-4.562 4.413 1.079 6.246a.905.905 0 0 1-.404.908 1.03 1.03 0 0 1-1.04.053L12 19.244l-5.592 2.92a1.03 1.03 0 0 1-1.04-.053.905.905 0 0 1-.404-.908l1.078-6.246-4.562-4.413a.89.89 0 0 1-.23-.942.969.969 0 0 1 .783-.623L8.3 8.07l2.811-5.656a.988.988 0 0 1 .89-.533Z"
                    fill="currentColor"
                  ></path></svg
              ></span>
              <p class="Typography_p8">4.8</p>
            </div>
            <div class="MerchantPriceRange_averagePrice">
              <p
                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive"
              >
                $
              </p>
              <p
                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive"
              >
                $
              </p>
              <p class="Typography_p8 MerchantPriceRange_price">$</p>
            </div>
            <p class="Typography_p8 MerchantCard_tags___u15_">
              Dry Fruits, Coffee, Healthy
            </p>
          </div>
        </div></a
      >
    </div>
    <div class="MerchantCard_wrapper">
      <a
        rel="noopener noreferrer"
        data-analytic-label="merchantCard"
        data-test-id="merchantCardInCategory"
        data-analytic-event-content="dr-kanafa---ramadan"
        target="_blank"
        href="/groceries/dr-kanafa---ramadan"
        ><div class="MerchantCard_imageWrapper">
          <div
            class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_"
          ></div>
          <img
            alt="Dr. Kanafa - Grocery"
            fetchpriority="auto"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            class="MerchantCard_image"
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              color: transparent;
            "
            src="https://images.snoonu.com/brand/2025-02/c6063304-0567-42af-886e-29d538e142eb_output.png?format=webp"
          />
          <div class="MerchantCard_deliveryTime">
            <span
              data-test-id=""
              class="Icon_iconWrapper MerchantCard_driverIcon"
              style="width: 16px; height: 16px"
              ><svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon_icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                  fill="currentColor"
                ></path></svg
            ></span>
            <p class="Typography_p8">
              28<!-- -->
              <!-- -->mins
            </p>
          </div>
        </div>
        <div class="MerchantCard_content">
          <div class="MerchantCard_primaryDetails">
            <p class="Typography_p1 MerchantCard_name">Dr. Kanafa - Grocery</p>
          </div>
          <div class="MerchantCard_secondaryDetails__c9r_K">
            <div class="MerchantPriceRange_averagePrice">
              <p
                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive"
              >
                $
              </p>
              <p
                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive"
              >
                $
              </p>
              <p class="Typography_p8 MerchantPriceRange_price">$</p>
            </div>
            <p class="Typography_p8 MerchantCard_tags___u15_">
              Desserts, Arabic Sweets
            </p>
          </div>
        </div></a
      >
    </div>
    <div class="MerchantCard_wrapper">
      <a
        rel="noopener noreferrer"
        data-analytic-label="merchantCard"
        data-test-id="merchantCardInCategory"
        data-analytic-event-content="meat-and-spice-for-trading"
        target="_blank"
        href="/groceries/meat-and-spice-for-trading"
        ><div class="MerchantCard_imageWrapper">
          <div
            class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_"
          ></div>
          <img
            alt="Meat And Spice"
            fetchpriority="auto"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            class="MerchantCard_image"
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              color: transparent;
            "
            src="https://images.snoonu.com/brand/2025-04/9be84ea1-47fc-4956-a433-800780ca37c4_output.png?format=webp"
          />
          <div class="MerchantCard_deliveryTime">
            <span
              data-test-id=""
              class="Icon_iconWrapper MerchantCard_driverIcon"
              style="width: 16px; height: 16px"
              ><svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon_icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                  fill="currentColor"
                ></path></svg
            ></span>
            <p class="Typography_p8">
              19<!-- -->
              <!-- -->mins
            </p>
          </div>
        </div>
        <div class="MerchantCard_content">
          <div class="MerchantCard_primaryDetails">
            <p class="Typography_p1 MerchantCard_name">Meat And Spice</p>
          </div>
          <div class="MerchantCard_secondaryDetails__c9r_K">
            <div class="MerchantCard_rating">
              <span
                data-test-id=""
                class="Icon_iconWrapper MerchantCard_starIcon"
                style="width: 12px"
                ><svg viewBox="0 0 24 25" fill="none" class="Icon_icon">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1.88c.38 0 .727.208.889.533L15.7 8.07l6.268.91a.969.969 0 0 1 .782.622.89.89 0 0 1-.23.942l-4.562 4.413 1.079 6.246a.905.905 0 0 1-.404.908 1.03 1.03 0 0 1-1.04.053L12 19.244l-5.592 2.92a1.03 1.03 0 0 1-1.04-.053.905.905 0 0 1-.404-.908l1.078-6.246-4.562-4.413a.89.89 0 0 1-.23-.942.969.969 0 0 1 .783-.623L8.3 8.07l2.811-5.656a.988.988 0 0 1 .89-.533Z"
                    fill="currentColor"
                  ></path></svg
              ></span>
              <p class="Typography_p8">4.6</p>
            </div>
            <div class="MerchantPriceRange_averagePrice">
              <p
                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive"
              >
                $
              </p>
              <p
                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive"
              >
                $
              </p>
              <p
                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive"
              >
                $
              </p>
            </div>
            <p class="Typography_p8 MerchantCard_tags___u15_">
              Chicken, Spices, BBQ, Grills, Poultry
            </p>
          </div>
        </div></a
      >
    </div>
    <div class="MerchantCard_wrapper">
      <a
        rel="noopener noreferrer"
        data-analytic-label="merchantCard"
        data-test-id="merchantCardInCategory"
        data-analytic-event-content="coffee-88"
        target="_blank"
        href="/groceries/coffee-88"
        ><div class="MerchantCard_imageWrapper">
          <div
            class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_"
          ></div>
          <img
            alt="Coffee 88"
            fetchpriority="auto"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            class="MerchantCard_image"
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              color: transparent;
            "
            src="https://images.snoonu.com/brand/2025-03/79dc639c-54ea-41cd-bfdb-aec88a19610b_output.png?format=webp"
          />
          <div class="MerchantCard_deliveryTime">
            <span
              data-test-id=""
              class="Icon_iconWrapper MerchantCard_driverIcon"
              style="width: 16px; height: 16px"
              ><svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon_icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                  fill="currentColor"
                ></path></svg
            ></span>
            <p class="Typography_p8">
              22<!-- -->
              <!-- -->mins
            </p>
          </div>
        </div>
        <div class="MerchantCard_content">
          <div class="MerchantCard_primaryDetails">
            <p class="Typography_p1 MerchantCard_name">Coffee 88</p>
          </div>
          <div class="MerchantCard_secondaryDetails__c9r_K">
            <div class="MerchantPriceRange_averagePrice">
              <p
                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive"
              >
                $
              </p>
              <p
                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive"
              >
                $
              </p>
              <p class="Typography_p8 MerchantPriceRange_price">$</p>
            </div>
            <p class="Typography_p8 MerchantCard_tags___u15_">
              Beverages, Coffee
            </p>
          </div>
        </div></a
      >
    </div>
    <div class="MerchantCard_wrapper">
      <a
        rel="noopener noreferrer"
        data-analytic-label="merchantCard"
        data-test-id="merchantCardInCategory"
        data-analytic-event-content="al-qusaimi-meat-co"
        target="_blank"
        href="/groceries/al-qusaimi-meat-co"
        ><div class="MerchantCard_imageWrapper">
          <div
            class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_"
          ></div>
          <img
            alt="Al Qusaimi Meat Co."
            fetchpriority="auto"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            class="MerchantCard_image"
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              color: transparent;
            "
            src="https://images.snoonu.com/brand/2024-10/e90d8bbf-a04b-4aa0-96d6-80aff8fe9dae_output.png?format=webp"
          />
          <div class="MerchantCard_deliveryTime">
            <span
              data-test-id=""
              class="Icon_iconWrapper MerchantCard_driverIcon"
              style="width: 16px; height: 16px"
              ><svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon_icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                  fill="currentColor"
                ></path></svg
            ></span>
            <p class="Typography_p8">
              19<!-- -->
              <!-- -->mins
            </p>
          </div>
        </div>
        <div class="MerchantCard_content">
          <div class="MerchantCard_primaryDetails">
            <p class="Typography_p1 MerchantCard_name">Al Qusaimi Meat Co.</p>
          </div>
          <div class="MerchantCard_secondaryDetails__c9r_K">
            <div class="MerchantPriceRange_averagePrice">
              <p
                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive"
              >
                $
              </p>
              <p
                class="Typography_p8 MerchantPriceRange_price MerchantPriceRange_priceActive"
              >
                $
              </p>
              <p class="Typography_p8 MerchantPriceRange_price">$</p>
            </div>
            <p class="Typography_p8 MerchantCard_tags___u15_">Meat</p>
          </div>
        </div></a
      >
    </div>
    <div class="MerchantCard_wrapper">
      <a
        rel="noopener noreferrer"
        data-analytic-label="merchantCard"
        data-test-id="merchantCardInCategory"
        data-analytic-event-content="smart-shopping-center"
        target="_blank"
        href="/groceries/smart-shopping-center"
        ><div class="MerchantCard_imageWrapper">
          <div
            class="MerchantPromoTag_promotion MerchantCard_promotion__ahhw_"
          ></div>
          <img
            alt="Smart Shopping Center"
            fetchpriority="auto"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            class="MerchantCard_image"
            style="
              position: absolute;
              height: 100%;
              width: 100%;
              left: 0;
              top: 0;
              right: 0;
              bottom: 0;
              color: transparent;
            "
            src="https://images.snoonu.com/brand/2025-08/ea71f92a-d7b9-42e3-a711-05cf75fc354f_output.png?format=webp"
          />
          <div class="MerchantCard_deliveryTime">
            <span
              data-test-id=""
              class="Icon_iconWrapper MerchantCard_driverIcon"
              style="width: 16px; height: 16px"
              ><svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="Icon_icon"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4.401 9.342a1.52 1.52 0 0 0 1.062.431h.04c.415-.01.796-.183 1.074-.487l3.157-3.445a1.46 1.46 0 0 0-.055-2.035L9 2.974a1.562 1.562 0 0 0-1.098-.43c-.41.01-1.076.486-1.076.486L2.764 5.758a1.457 1.457 0 0 0 .054 2.03l1.583 1.554Zm6.321 2.095 1.451-1.63a8.381 8.381 0 0 0 4.655 1.395h.672c.829 0 1.5-.66 1.5-1.474s-.671-1.474-1.5-1.474h-.672a5.412 5.412 0 0 1-3.767-1.533 1.42 1.42 0 0 0-1.111-.43 1.51 1.51 0 0 0-1.079.502l-3.5 3.93a1.455 1.455 0 0 0 .145 2.078c.05.042.101.082.155.118l.664.434c1.788 1.184 2.659 3.319 2.2 5.388-.197.79.295 1.59 1.1 1.783a1.502 1.502 0 0 0 1.828-1.143c.652-2.943-.402-6-2.741-7.944ZM22 18.079c0-1.357-1.12-2.456-2.5-2.456-1.381 0-2.5 1.1-2.5 2.456 0 1.356 1.119 2.456 2.5 2.456 1.38 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S15 20.52 15 18.08c0-2.443 2.015-4.421 4.5-4.421s4.5 1.979 4.5 4.42Zm-17 0c0-1.357-1.119-2.456-2.5-2.456-1.38 0-2.5 1.1-2.5 2.456 0 1.356 1.12 2.456 2.5 2.456 1.381 0 2.5-1.1 2.5-2.456Zm2 0c0 2.441-2.015 4.42-4.5 4.42S0 20.52 0 18.08c0-2.443 2.015-4.421 4.5-4.421S9 15.637 9 18.078Zm3.125-14.246c0-1.288 1.064-2.333 2.375-2.333 1.312 0 2.375 1.045 2.375 2.333 0 1.288-1.063 2.334-2.375 2.334-1.311 0-2.375-1.046-2.375-2.334Z"
                  fill="currentColor"
                ></path></svg
            ></span>
            <p class="Typography_p8">
              22<!-- -->
              <!-- -->mins
            </p>
          </div>
        </div>
        <div class="MerchantCard_content">
          <div class="MerchantCard_primaryDetails">
            <p class="Typography_p1 MerchantCard_name">Smart Shopping Center</p>
          </div>
          <div class="MerchantCard_secondaryDetails__c9r_K">
            <p class="Typography_p8 MerchantCard_tags___u15_">
              Groceries, Personal Care, Snacks, Bakery, Beverages
            </p>
          </div>
        </div></a
      >
    </div>
    <div></div>
    <div class="SkeletonMerchantCard_card">
      <div
        style="border-radius: 0"
        class="Skeleton_skeleton SkeletonMerchantCard_image Skeleton_animate"
      ></div>
      <div class="SkeletonMerchantCard_content">
        <div
          style="width: 80%; border-radius: 4px"
          class="Skeleton_skeleton SkeletonMerchantCard_name Skeleton_animate"
        ></div>
        <div
          style="width: 50%; border-radius: 4px"
          class="Skeleton_skeleton SkeletonMerchantCard_primaryDetails Skeleton_animate"
        ></div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.ProductCardHorizontal_wrapper {
  background: var(--background-secondary);
  border-radius: 32px;
  display: flex;
  align-items: unset;
  justify-content: flex-start;
  flex-flow: row;
  cursor: pointer;
}

@media (max-width: 575px) {
  .ProductCardHorizontal_wrapper {
    background: none;
  }
}

.ProductCardHorizontal_wrapper .ProductCardHorizontal_image {
  margin: 8px;
}

@media (max-width: 575px) {
  .ProductCardHorizontal_wrapper .ProductCardHorizontal_image {
    margin: 0;
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
  padding-inline-start: 12px;
  word-break: break-word;
}

@media (max-width: 1024px) {
  .ProductCardHorizontal_wrapper .ProductCardHorizontal_info {
    padding: 12px;
    -webkit-padding-start: 8px;
    padding-inline-start: 8px;
  }
}

@media (max-width: 575px) {
  .ProductCardHorizontal_wrapper .ProductCardHorizontal_info {
    padding: 0;
    -webkit-padding-start: 16px;
    padding-inline-start: 16px;
    gap: 12px;
  }
}

.ProductCardHorizontal_wrapper
  .ProductCardHorizontal_info
  .ProductCardHorizontal_name {
  margin-bottom: 8px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@supports (-webkit-line-clamp: 2) {
  .ProductCardHorizontal_wrapper
    .ProductCardHorizontal_info
    .ProductCardHorizontal_name {
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}

.ProductCardHorizontal_wrapper
  .ProductCardHorizontal_info
  .ProductCardHorizontal_description {
  color: var(--text-secondary);
  margin-bottom: 6px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@supports (-webkit-line-clamp: 3) {
  .ProductCardHorizontal_wrapper
    .ProductCardHorizontal_info
    .ProductCardHorizontal_description {
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}

.ProductCardHorizontal_wrapper .ProductCardHorizontal_priceWrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: row;
  width: 100%;
}

.ProductCardHorizontal_wrapper
  .ProductCardHorizontal_priceWrapper
  .ProductCardHorizontal_pricePromo {
  display: flex;
  flex-direction: column;
}

.ProductCardHorizontal_wrapper
  .ProductCardHorizontal_priceWrapper
  .ProductCardHorizontal_pricePromo
  .ProductCardHorizontal_newPrice {
  color: var(--constant-brand);
}

.ProductCardHorizontal_wrapper
  .ProductCardHorizontal_priceWrapper
  .ProductCardHorizontal_pricePromo
  .ProductCardHorizontal_oldPrice {
  color: var(--text-secondary);
}

@media (max-width: 575px) {
  .ProductCardHorizontal_wrapper .ProductCardHorizontal_productButton {
    min-width: 96px;
    height: 44px;
    margin: 0;
  }
}

:root[lang="ar"] .ProductCardHorizontal_description,
:root[lang="ar"] .ProductCardHorizontal_name {
  text-align: right;
}

:root[lang="ar"] .ProductCardHorizontal_imageWrapper {
  flex-shrink: 0;
  width: 176px;
  height: 176px;
  margin: 8px 8px 8px 0;
  position: relative;
  border-radius: 28px;
  background: var(--constant-white);
  overflow: hidden;
}

@media (max-width: 575px) {
  :root[lang="ar"] .ProductCardHorizontal_imageWrapper {
    width: 156px;
    height: 156px;
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
  cursor: pointer;
}

@media (max-width: 1024px) {
  .ProductCardVertical_wrapper {
    width: 156px;
    border-radius: 28px;
  }
}

@media (max-width: 575px) {
  .ProductCardVertical_wrapper {
    width: 150px;
  }
}

.ProductCardVertical_wrapper .ProductCardVertical_image {
  margin: 8px;
  border-radius: 26px 26px 6px 6px;
}

@media (max-width: 1024px) {
  .ProductCardVertical_wrapper .ProductCardVertical_image {
    border-radius: 24px 24px 6px 6px;
  }
}

@media (max-width: 575px) {
  .ProductCardVertical_wrapper .ProductCardVertical_image {
    margin: 6px;
    width: 138px;
    height: 138px;
  }
}

.ProductCardVertical_wrapper .ProductCardVertical_info {
  padding: 8px 12px 18px;
}

@media (max-width: 1024px) {
  .ProductCardVertical_wrapper .ProductCardVertical_info {
    padding-bottom: 12px;
  }
}

.ProductCardVertical_wrapper .ProductCardVertical_name {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@supports (-webkit-line-clamp: 2) {
  .ProductCardVertical_wrapper .ProductCardVertical_name {
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}

.ProductCardVertical_wrapper .ProductCardVertical_price__T_5WM {
  margin-bottom: 6px;
}

@media (max-width: 575px) {
  .ProductCardVertical_wrapper .ProductCardVertical_price__T_5WM {
    margin-bottom: 8px;
  }
}

.ProductCardVertical_wrapper .ProductCardVertical_pricePromo__O_ab8 {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  flex-flow: row;
  gap: 4px;
  margin-bottom: 6px;
}

.ProductCardVertical_wrapper
  .ProductCardVertical_pricePromo__O_ab8
  .ProductCardVertical_newPrice {
  color: var(--constant-brand);
}

.ProductCardVertical_wrapper
  .ProductCardVertical_pricePromo__O_ab8
  .ProductCardVertical_oldPrice {
  color: var(--text-secondary);
}

:root[lang="ar"] .ProductCardVertical_name,
:root[lang="ar"] .ProductCardVertical_price__T_5WM {
  text-align: right;
}

.HeartIcon_wrapper {
  cursor: pointer;
}

.HeartIcon_heartActive svg {
  animation: HeartIcon_heartAnimationActive 0.5s;
}

.HeartIcon_heartInActive svg {
  animation: HeartIcon_heartAnimationInActive 0.5s;
}

@keyframes HeartIcon_heartAnimationActive {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.7);
  }

  to {
    transform: scale(1);
  }
}

@keyframes HeartIcon_heartAnimationInActive {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.7);
  }

  to {
    transform: scale(1);
  }
}

.FavouriteProductIcon_notification__qOLE_ {
  width: 336px;
}

@media (max-width: 1024px) {
  .FavouriteProductIcon_notification__qOLE_ {
    width: 100%;
  }
}

.FavouriteProductIcon_seeAll {
  color: var(--text-invert-primary);
}

.ProductCounter_wrapper__yiOb_ {
  position: absolute;
  bottom: 12px;
  inset-inline-end: 12px;
  border-radius: 20px;
}

.ProductCounter_plusWrapper {
  padding: 10px;
  overflow: hidden;
  background: var(--control-tertiary);
  box-shadow: var(--box-shadow-s);
}

.ProductCounter_plusWrapper .ProductCounter_icon {
  width: 20px;
  height: 20px;
}

.ProductCounter_counterWrapper {
  padding: 4px;
  background: var(--control-tertiary);
  box-shadow: var(--box-shadow-m);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  overflow: hidden;
}

@media (max-width: 575px) {
  .ProductCounter_counterWrapper {
    inset-inline-start: 12px;
    width: calc(100% - 24px);
  }
}

.ProductCounter_counterWrapper .ProductCounter_minus___ywYe,
.ProductCounter_counterWrapper .ProductCounter_plus {
  background: var(--control-tertiary);
  padding: 8px;
  border-radius: 16px;
}

.ProductCounter_counterWrapper .ProductCounter_minus___ywYe:focus,
.ProductCounter_counterWrapper .ProductCounter_plus:focus {
  background: var(--background-secondary);
}

.ProductCounter_counterWrapper .ProductCounter_count {
  min-width: 24px;
  text-align: center;
}

@media (max-width: 575px) {
  .ProductCounter_counterWrapper .ProductCounter_count {
    flex: 1 1;
  }
}

.ProductCounter_counterWrapper .ProductCounter_icon {
  width: 16px;
  height: 16px;
}

.ProductCounter_button {
  border: none;
  outline: none;
  cursor: pointer;
}

.ProductCounter_button:focus {
  outline: none;
}

.ProductImage_wrapper {
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 26px;
  overflow: hidden;
}

.ProductImage_wrapper:after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.03);
  border-radius: 26px;
}

.ProductImage_imageWrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.SimpleStarRating_wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 2px;
}

.SimpleStarRating_starWrapper {
  position: relative;
}

.SimpleStarRating_starFilled {
  position: relative;
  color: var(--constant-top-rated);
  z-index: 2;
}

.SimpleStarRating_starBackground,
.SimpleStarRating_starFilled {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  top: 0;
  left: 0;
  width: 12px;
  height: 12px;
}

.SimpleStarRating_starBackground {
  position: absolute;
  color: var(--border-and-divider-primary);
}

:root[lang="ar"] .SimpleStarRating_starWrapper {
  transform: scaleX(-1);
}

.ProductRating_wrapper__g_1Nn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 4px;
  margin-top: 6px;
}

.ProductRating_count {
  color: var(--text-secondary);
}

.ProductTags_wrapper {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 4px;
}

.ProductTags_discount {
  padding: 3px 4px;
  background: var(--constant-background-coolred);
  color: var(--text-brand);
  border-radius: 20px;
}

.ProductTags_buyOneGetOne {
  height: 20px;
  padding: 3px 8px;
  background: var(--constant-x-get-y);
  border-radius: 20px;
}

.ProductTags_bySnoonu {
  padding: 4px 5px;
  background: var(--constant-background-coolred);
  color: var(--icon-brand);
  border-radius: 20px;
}

.ProductTags_bySnoonu .ProductTags_icon {
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
}

.ProductTags_freeDelivery {
  background: rgba(1, 123, 255, 0.06);
  color: var(--text-free-delivery);
  padding: 3px 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 2px;
  border-radius: 12px;
}

.ProductTags_freeDelivery .ProductTags_freeDeliveryIcon {
  width: 12px;
  height: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
}

:root[lang="ar"] .ProductTags_freeDeliveryIcon {
  transform: scaleX(-1);
}

.ProductPrice_wrapper {
  margin-top: 10px;
}

.ProductPrice_prices {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  flex-flow: row;
  gap: 4px;
  margin-bottom: 2px;
}

.ProductPrice_prices .ProductPrice_newPrice {
  color: var(--constant-brand);
}

.ProductPrice_prices .ProductPrice_oldPrice {
  color: var(--text-secondary);
}

.ProductPrice_label {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@supports (-webkit-line-clamp: 3) {
  .ProductPrice_label {
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}

@media (max-width: 1024px) {
  .ProductPrice_label {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @supports (-webkit-line-clamp: 2) {
    .ProductPrice_label {
      white-space: normal;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}

:root[lang="ar"] .ProductPrice_wrapper {
  text-align: right;
}

.SkeletonVerticalProductCard_card {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column;
  width: 188px;
  background: var(--background-secondary);
  border-radius: 32px;
}

@media (max-width: 1024px) {
  .SkeletonVerticalProductCard_card {
    width: 156px;
    border-radius: 28px;
  }
}

@media (max-width: 575px) {
  .SkeletonVerticalProductCard_card {
    width: 150px;
  }
}

.SkeletonVerticalProductCard_image__vt9_K {
  width: 172px;
  height: 172px;
  margin: 8px;
  border-radius: 26px 26px 6px 6px !important;
  overflow: hidden;
}

@media (max-width: 1024px) {
  .SkeletonVerticalProductCard_image__vt9_K {
    width: 140px;
    height: 140px;
    border-radius: 20px 20px 6px 6px !important;
  }
}

@media (max-width: 575px) {
  .SkeletonVerticalProductCard_image__vt9_K {
    margin: 6px;
    width: 134px;
    height: 134px;
  }
}

.SkeletonVerticalProductCard_info__4y__L {
  width: 100%;
  padding: 8px 12px 18px;
}

@media (max-width: 1024px) {
  .SkeletonVerticalProductCard_info__4y__L {
    padding-bottom: 12px;
  }
}

.SkeletonVerticalProductCard_price {
  width: 60px;
  height: 20px;
  margin-bottom: 6px;
}

.SkeletonVerticalProductCard_name {
  width: 100%;
  height: 24px;
}

.SkeletonVerticalProductCard_button {
  width: calc(100% - 24px);
  height: 52px;
  margin: 0 12px 12px;
}

.ProductInfo_wrapper___tfgf {
  margin-top: 10px;
}

.ProductInfo_prices {
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  flex-flow: row;
  gap: 4px;
  margin-bottom: 2px;
}

.ProductInfo_prices .ProductInfo_newPrice {
  color: var(--constant-brand);
}

.ProductInfo_prices .ProductInfo_oldPrice {
  color: var(--text-secondary);
}

.ProductInfo_label {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@supports (-webkit-line-clamp: 2) {
  .ProductInfo_label {
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}

:root[lang="ar"] .ProductInfo_wrapper___tfgf {
  text-align: right;
}

.SkeletonSearchMerchantCard_wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
}

.SkeletonSearchMerchantCard_image {
  width: 144px;
  height: 72px;
  position: relative;
  -webkit-margin-end: 16px;
  margin-inline-end: 16px;
}

@media (max-width: 1024px) {
  .SkeletonSearchMerchantCard_image {
    width: 120px;
    height: 60px;
    border-radius: 16px !important;
  }
}

@media (max-width: 575px) {
  .SkeletonSearchMerchantCard_image {
    width: 104px;
    height: 52px;
  }
}

.SkeletonSearchMerchantCard_info {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column;
  gap: 4px;
}

.SkeletonSearchMerchantCard_name {
  width: 260px;
  height: 44px;
}

@media (max-width: 1024px) {
  .SkeletonSearchMerchantCard_name {
    height: 36px;
  }
}

@media (max-width: 575px) {
  .SkeletonSearchMerchantCard_name {
    width: 160px;
    height: 28px;
  }
}

.SkeletonSearchMerchantCard_details {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 6px;
}

.SkeletonSearchMerchantCard_time__EB_XU {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 4px;
}

.SkeletonSearchMerchantCard_icon {
  width: 24px;
  height: 24px;
}

@media (max-width: 1024px) {
  .SkeletonSearchMerchantCard_icon {
    width: 20px;
    height: 20px;
  }
}

.SkeletonSearchMerchantCard_timeValue {
  width: 72px;
  height: 20px;
}

.SkeletonSearchMerchantCard_dot {
  width: 4px;
  height: 4px;
}

.SkeletonSearchMerchantCard_cats {
  width: 120px;
  height: 20px;
}

.SkeletonSearchMerchantCard_carousel {
  margin-top: 16px;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  scrollbar-width: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  gap: 16px;
}

.SkeletonSearchMerchantCard_carousel::-webkit-scrollbar {
  display: none;
}

.ProductCardMarketplace_imageWrapper {
  position: relative;
}

.ProductCardMarketplace_favourite {
  position: absolute;
  top: 12px;
  right: 16px;
  padding: 0;
}

.Feedback_wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  color: var(--text-brand);
  cursor: pointer;
}

.Feedback_icon {
  width: 24px;
  height: 24px;
}

:root[lang="ar"] .Feedback_icon {
  transform: scaleX(-1);
}

.Carousel_wrapper {
  position: relative;
}

@media (max-width: 1360px) {
  .Carousel_wrapper {
    margin-right: var(--content-wrapper-side-padding-negative);
    margin-left: var(--content-wrapper-side-padding-negative);
  }

  .Carousel_wrapper .Carousel_navButtonWrapper__gL_66 {
    display: none;
  }
}

.Carousel_carousel {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: smooth;
  scrollbar-width: none;
  gap: 24px;
}

.Carousel_carousel::-webkit-scrollbar {
  display: none;
}

.Carousel_enter__Jz_dI {
  opacity: 0;
  transition: opacity 0.2s ease;
}

.Carousel_enterActive__o_jK8 {
  opacity: 1;
}

.Carousel_exit {
  opacity: 1;
  transition: opacity 0.2s ease;
}

.Carousel_exitActive {
  opacity: 0;
}

@media (max-width: 1360px) {
  :root[lang="en"] .Carousel_carousel > :first-of-type {
    padding-left: var(--content-wrapper-side-padding);
  }

  :root[lang="ar"] .Carousel_carousel > :first-of-type,
  :root[lang="en"] .Carousel_carousel > :last-of-type {
    padding-right: var(--content-wrapper-side-padding);
  }

  :root[lang="ar"] .Carousel_carousel > :last-of-type {
    padding-left: var(--content-wrapper-side-padding);
  }
}

.FeedbackModal_modal {
  width: 448px;
}

.FeedbackModal_wrapper__Sx_nr {
  width: 100%;
}

.FeedbackModal_textarea {
  margin-top: 16px;
  margin-bottom: 24px;
}

@media (max-width: 575px) {
  .FeedbackModal_textarea {
    margin-bottom: 16px;
  }
}

.NavButton_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row;
  border-radius: 24px;
  width: 48px;
  height: 48px;
  background: var(--control-tertiary);
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 2;
  box-shadow: var(--box-shadow-56);
}

.NavButton_wrapper.NavButton_prev {
  left: -32px;
}

.NavButton_wrapper.NavButton_next__x_uZ2 {
  right: -32px;
}

.EmptyResult_wrapper {
  margin-top: 112px;
  margin-bottom: 112px;
  color: var(--text-secondary);
  text-align: center;
}

.EmptyResult_title {
  margin-top: 0;
  margin-bottom: 8px;
}

.EmptyResult_description {
  margin-top: 8px;
  margin-bottom: 8px;
}

@media (max-width: 1024px) {
  .EmptyResult_description {
    margin-bottom: 12px;
  }
}

@media (max-width: 575px) {
  .EmptyResult_description {
    margin-bottom: 8px;
  }
}

:root[lang="ar"] .EmptyResult_title {
  text-align: center;
  margin-bottom: 15px;
}

.SeeAll_wrapper__OQnx_ {
  margin: 0 66px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
}

@media (max-width: 1024px) {
  .SeeAll_wrapper__OQnx_ {
    margin: 0 50px;
  }
}

.SeeAll_link {
  flex-flow: column;
}

.SeeAll_iconWrapper,
.SeeAll_link {
  display: flex;
  align-items: center;
  justify-content: center;
}

.SeeAll_iconWrapper {
  background: var(--constant-white);
  color: var(--icon-primary);
  width: 48px;
  height: 48px;
  margin: 0 4px 8px;
  border-radius: 50%;
  flex-flow: row;
  box-shadow: var(--box-shadow-56);
}

:root[lang="ar"] .SeeAll_iconWrapper {
  transform: scaleX(-1);
}

.SeeAll_button {
  padding: 12px 20px !important;
}

@media (max-width: 575px) {
  .SeeAll_button {
    padding: 8px 16px !important;
  }
}

.SearchMerchant_wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  width: -moz-fit-content;
  width: fit-content;
}

.SearchMerchant_imageWrapper__m92_k {
  width: 144px;
  height: 72px;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  -webkit-margin-end: 16px;
  margin-inline-end: 16px;
  flex-shrink: 0;
}

@media (max-width: 1024px) {
  .SearchMerchant_imageWrapper__m92_k {
    width: 120px;
    height: 60px;
    border-radius: 16px;
  }
}

@media (max-width: 575px) {
  .SearchMerchant_imageWrapper__m92_k {
    width: 104px;
    height: 52px;
  }
}

.SearchMerchant_imageWrapper__m92_k:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.08);
}

.SearchMerchant_info {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-flow: column;
  gap: 4px;
}

.SearchMerchant_name {
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@supports (-webkit-line-clamp: 1) {
  .SearchMerchant_name {
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
}

.SearchMerchant_details {
  gap: 6px;
}

.SearchMerchant_details,
.SearchMerchant_time {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
}

.SearchMerchant_time {
  gap: 4px;
  flex-shrink: 0;
}

.SearchMerchant_icon {
  width: 24px;
  height: 24px;
}

@media (max-width: 1024px) {
  .SearchMerchant_icon {
    width: 20px;
    height: 20px;
  }
}

.SearchMerchant_dot___bcfS {
  color: var(--text-secondary);
}

.SearchMerchant_cats {
  color: var(--text-secondary);
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

@supports (-webkit-line-clamp: 1) {
  .SearchMerchant_cats {
    white-space: normal;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
}

.SearchMerchant_carousel {
  align-items: stretch !important;
  gap: 16px !important;
  margin-top: 16px;
}

@media (max-width: 575px) {
  .SearchMerchant_carousel {
    gap: 8px !important;
  }
}

.SearchMerchant_carouselNavButton {
  display: none;
}

.SearchMerchant_closed__MVI__ {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  color: var(--text-invert-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row;
}

.SearchMerchant_card {
  background: var(--background-secondary);
}

.SearchMerchant_card .SearchMerchant_cardButton__xN_2S {
  background: var(--background-primary);
}

:root[lang="ar"] .SearchMerchant_icon {
  transform: scaleX(-1);
}

.Categories_wrapper {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-flow: row;
  flex-wrap: wrap;
  gap: 8px;
}

@media (max-width: 1360px) {
  .Categories_wrapper {
    margin-left: var(--content-wrapper-side-padding-negative);
    margin-right: var(--content-wrapper-side-padding-negative);
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    scroll-behavior: smooth;
    scrollbar-width: none;
    flex-wrap: nowrap;
    white-space: nowrap;
  }

  .Categories_wrapper::-webkit-scrollbar {
    display: none;
  }
}

@media (max-width: 1360px) {
  .Categories_wrapper
    .Categories_categoryWrapper__3_FRF:first-of-type
    > .Categories_category {
    -webkit-margin-start: var(--content-wrapper-side-padding);
    margin-inline-start: var(--content-wrapper-side-padding);
  }

  .Categories_wrapper
    .Categories_categoryWrapper__3_FRF:last-of-type
    > .Categories_category {
    -webkit-margin-end: var(--content-wrapper-side-padding);
    margin-inline-end: var(--content-wrapper-side-padding);
  }
}

.Categories_category {
  padding: 12px 16px;
  border-radius: 14px;
  background: var(--control-secondary);
  cursor: pointer;
}

.Categories_category.Categories_active {
  background: var(--control-active);
  color: var(--constant-white);
}

.SearchResults_group > div {
  margin-bottom: 40px;
}

.SearchResultsCategories_wrapper {
  margin-top: 0;
  margin-bottom: 40px;
  padding-top: 0;
  padding-bottom: 0;
}

@media (max-width: 575px) {
  .SearchResultsCategories_wrapper {
    margin-bottom: 24px;
  }
}
</style>
