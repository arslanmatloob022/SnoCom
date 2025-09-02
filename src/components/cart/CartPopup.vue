<script lang="ts" setup>
import { UsePannelsStore } from '@/stores/UsePannelsStore'

const popupRef = ref<HTMLElement | null>(null)
const pannel= UsePannelsStore()


function handleClickOutside(event: MouseEvent) {
console.log("outside  123" )

  if (popupRef.value && !popupRef.value.contains(event.target as Node)) {
    console.log("inside if" )
    if(pannel.cartModalOpen)
  {

      pannel.setCartModal(false)
  }
  }
}

onMounted(() => {
  document.addEventListener("click", handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener("click", handleClickOutside)
})

onMounted(() => {
    console.log("store modal", pannel.cartModalOpen)
})

</script>

<template>

    <div   class="CartButton_fade">
        <div class="">
            <div ref="popupRef" class="Popup_popup CartButton_cart">
                <div  class="MarketplaceCart_cart">
                    <div class="MarketplaceCart_header__C_sTJ">
                        <h3 class="Typography_h3 MarketplaceCart_title">Cart</h3>
                    </div>
                    <div class="MarketplaceCart_productsWrapper">
                        <div></div>
                        <div class=""></div>
                        <div class="MarketplaceCart_cartProducts MarketplaceCart_marketplaceProducts">
                            <div class="MarketplaceCart_merchantHeader___zoUB">
                                <div><a rel="noopener noreferrer" data-analytic-label="merchantLink"
                                        href="/electronics/jawda-top-trading">
                                        <div class="MarketplaceCart_merchant">
                                            <p class="Typography_p6 MarketplaceCart_merchantName">Jawda
                                                Tech Electronics</p><span data-test-id=""
                                                class="Icon_iconWrapper MarketplaceCart_arrow"
                                                style="width: 12px; height: 12px;"><svg viewBox="0 0 21 20" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="m7.8 2 9.325 8L7.8 18l-1.675-1.956L13.17 10 6.125 3.956 7.8 2Z"
                                                        fill="currentColor"></path>
                                                </svg></span>
                                        </div>
                                    </a>
                                    <h3 class="Typography_h3 MarketplaceCart_estimation__JOrC_">Today, within 45
                                        min</h3>
                                </div>
                                <div class="MarketplaceCart_clearCart"><span data-test-id=""
                                        class="Icon_iconWrapper" style="width: 20px; height: 20px;"><svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"
                                            class="Icon_icon">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M13 3.333c0-.92-.746-1.667-1.667-1.667h-2.5c-.92 0-1.666.747-1.666 1.667v.333H3.75a1.25 1.25 0 0 0-.25 2.475v10.025a2.5 2.5 0 0 0 2.5 2.5h8a2.5 2.5 0 0 0 2.5-2.5V6.141a1.25 1.25 0 0 0-.25-2.474H13v-.334Zm-1.9 6.333a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-4Zm-3.2-1a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1Z"
                                                fill="currentColor"></path>
                                        </svg></span></div>
                            </div>
                            <div class="CartProduct_wrapper CartProduct_marketplace"
                                data-test-id="cardOfProductInCart">
                                <div class="">
                                    <div class="CardProductImage_imageWrapper CardProductImage_fromCart">
                                        <span
                                            style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                                alt="" decoding="async" data-nimg="fill"
                                                src="https://images.snoonu.com/brand_product/2025-04/6615518d-1ab1-4bb0-b25b-d83ccb7a1dce_output.png"
                                                style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover; object-position: center center;"></span>
                                        <div class="CardProductImage_discount">
                                            <p class="Typography_p12">Promo</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="CartProduct_info">
                                    <div class=""><a rel="noopener noreferrer" data-analytic-label="New Mini Smartphone"
                                            target="_blank"
                                            href="/product/undefined/64cf86099a3bdcecc8e09ab7?source=cart">
                                            <p data-test-id="productTitleInCart"
                                                class="Typography_p11 CartProduct_name__zlfe_">New Mini
                                                Smartphone</p>
                                        </a>
                                        <p class="Typography_p9 CartProduct_additional">Blue</p>
                                        <div class="CartProduct_specialRequest"><span data-test-id=""
                                                class="Icon_iconWrapper" style="width: 12px; height: 12px;"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" fill="none"
                                                    class="Icon_icon">
                                                    <path
                                                        d="M22.32 11.656a9.311 9.311 0 0 1-1 4.223 9.445 9.445 0 0 1-8.445 5.222 9.31 9.31 0 0 1-4.222-1l-6.334 2.111 2.111-6.333a9.311 9.311 0 0 1-1-4.223 9.444 9.444 0 0 1 5.223-8.444 9.311 9.311 0 0 1 4.222-1h.555a9.422 9.422 0 0 1 8.89 8.889v.555Z"
                                                        fill="currentColor"></path>
                                                </svg></span>
                                            <p class="Typography_p9">Add Special Request</p>
                                        </div>
                                    </div>
                                    <div class="CartProduct_priceWrapper">
                                        <div class="">
                                            <p class="Typography_p4">280 QR</p>
                                        </div>
                                        <div
                                            class="ProductButton_productButton___1dmt ProductButton_secondary ProductButton_small">
                                            <button data-analytic-label="minus"><span data-test-id=""
                                                    class="Icon_iconWrapper ProductButton_icon"><svg
                                                        viewBox="0 0 12 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                                                        <path d="M2.5 6.008h7" stroke="currentColor" stroke-width="2.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg></span></button>
                                            <p class="Typography_p4">3</p><button
                                                data-analytic-label="plus"><span data-test-id=""
                                                    class="Icon_iconWrapper ProductButton_icon"><svg
                                                        width="12" height="13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                                                        <path d="M6 2.258v7.5M2.25 6.008h7.5" stroke="currentColor"
                                                            stroke-width="2.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                    </svg></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="MarketplaceCart_merchantHeader___zoUB">
                                <div><a rel="noopener noreferrer" data-analytic-label="merchantLink"
                                        href="/electronics/boojee-stickers">
                                        <div class="MarketplaceCart_merchant">
                                            <p class="Typography_p6 MarketplaceCart_merchantName">Boojee
                                                Stickers</p><span data-test-id=""
                                                class="Icon_iconWrapper MarketplaceCart_arrow"
                                                style="width: 12px; height: 12px;"><svg viewBox="0 0 21 20" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="m7.8 2 9.325 8L7.8 18l-1.675-1.956L13.17 10 6.125 3.956 7.8 2Z"
                                                        fill="currentColor"></path>
                                                </svg></span>
                                        </div>
                                    </a>
                                    <h3 class="Typography_h3 MarketplaceCart_estimation__JOrC_">Today, within 50
                                        min</h3>
                                </div>
                                <div class="MarketplaceCart_clearCart"><span data-test-id=""
                                        class="Icon_iconWrapper" style="width: 20px; height: 20px;"><svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"
                                            class="Icon_icon">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M13 3.333c0-.92-.746-1.667-1.667-1.667h-2.5c-.92 0-1.666.747-1.666 1.667v.333H3.75a1.25 1.25 0 0 0-.25 2.475v10.025a2.5 2.5 0 0 0 2.5 2.5h8a2.5 2.5 0 0 0 2.5-2.5V6.141a1.25 1.25 0 0 0-.25-2.474H13v-.334Zm-1.9 6.333a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-4Zm-3.2-1a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1Z"
                                                fill="currentColor"></path>
                                        </svg></span></div>
                            </div>
                            <div class="CartProduct_wrapper CartProduct_marketplace"
                                data-test-id="cardOfProductInCart">
                                <div class="">
                                    <div class="CardProductImage_imageWrapper CardProductImage_fromCart">
                                        <span
                                            style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                                alt="" decoding="async" data-nimg="fill"
                                                src="https://images.snoonu.com/product/2024-7/b907203a-d979-4293-8704-0d8bd2938cc5_rimowabag.jpg"
                                                style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover; object-position: center center;"></span>
                                    </div>
                                </div>
                                <div class="CartProduct_info">
                                    <div class=""><a rel="noopener noreferrer" data-analytic-label="Qatar Traveler"
                                            target="_blank"
                                            href="/product/undefined/66842cdbd9250b1a5f99f4e1?source=cart">
                                            <p data-test-id="productTitleInCart"
                                                class="Typography_p11 CartProduct_name__zlfe_">Qatar Traveler</p>
                                        </a>
                                        <p class="Typography_p9 CartProduct_additional">First Class Ticket
                                        </p>
                                        <div class="CartProduct_specialRequest"><span data-test-id=""
                                                class="Icon_iconWrapper" style="width: 12px; height: 12px;"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" fill="none"
                                                    class="Icon_icon">
                                                    <path
                                                        d="M22.32 11.656a9.311 9.311 0 0 1-1 4.223 9.445 9.445 0 0 1-8.445 5.222 9.31 9.31 0 0 1-4.222-1l-6.334 2.111 2.111-6.333a9.311 9.311 0 0 1-1-4.223 9.444 9.444 0 0 1 5.223-8.444 9.311 9.311 0 0 1 4.222-1h.555a9.422 9.422 0 0 1 8.89 8.889v.555Z"
                                                        fill="currentColor"></path>
                                                </svg></span>
                                            <p class="Typography_p9">Add Special Request</p>
                                        </div>
                                    </div>
                                    <div class="CartProduct_priceWrapper">
                                        <div class="">
                                            <p class="Typography_p4">12 QR</p>
                                        </div>
                                        <div
                                            class="ProductButton_productButton___1dmt ProductButton_secondary ProductButton_small">
                                            <button data-analytic-label="minus"><span data-test-id=""
                                                    class="Icon_iconWrapper ProductButton_icon"><svg
                                                        viewBox="0 0 12 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                                                        <path d="M2.5 6.008h7" stroke="currentColor" stroke-width="2.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg></span></button>
                                            <p class="Typography_p4">1</p><button
                                                data-analytic-label="plus"><span data-test-id=""
                                                    class="Icon_iconWrapper ProductButton_icon"><svg
                                                        width="12" height="13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                                                        <path d="M6 2.258v7.5M2.25 6.008h7.5" stroke="currentColor"
                                                            stroke-width="2.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                    </svg></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="MarketplaceCart_merchantHeader___zoUB">
                                <div><a rel="noopener noreferrer" data-analytic-label="merchantLink"
                                        href="/kids-and-stationery/first-step-trading">
                                        <div class="MarketplaceCart_merchant">
                                            <p class="Typography_p6 MarketplaceCart_merchantName">First
                                                Step</p><span data-test-id=""
                                                class="Icon_iconWrapper MarketplaceCart_arrow"
                                                style="width: 12px; height: 12px;"><svg viewBox="0 0 21 20" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="m7.8 2 9.325 8L7.8 18l-1.675-1.956L13.17 10 6.125 3.956 7.8 2Z"
                                                        fill="currentColor"></path>
                                                </svg></span>
                                        </div>
                                    </a>
                                    <h3 class="Typography_h3 MarketplaceCart_estimation__JOrC_">Tomorrow, 9:45 am
                                    </h3>
                                </div>
                                <div class="MarketplaceCart_clearCart"><span data-test-id=""
                                        class="Icon_iconWrapper" style="width: 20px; height: 20px;"><svg
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none"
                                            class="Icon_icon">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M13 3.333c0-.92-.746-1.667-1.667-1.667h-2.5c-.92 0-1.666.747-1.666 1.667v.333H3.75a1.25 1.25 0 0 0-.25 2.475v10.025a2.5 2.5 0 0 0 2.5 2.5h8a2.5 2.5 0 0 0 2.5-2.5V6.141a1.25 1.25 0 0 0-.25-2.474H13v-.334Zm-1.9 6.333a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0v-4Zm-3.2-1a1 1 0 0 0-1 1v4a1 1 0 1 0 2 0v-4a1 1 0 0 0-1-1Z"
                                                fill="currentColor"></path>
                                        </svg></span></div>
                            </div>
                            <div class="CartProduct_wrapper CartProduct_marketplace"
                                data-test-id="cardOfProductInCart">
                                <div class="">
                                    <div class="CardProductImage_imageWrapper CardProductImage_fromCart">
                                        <span
                                            style="box-sizing: border-box; display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px;"><img
                                                alt="" decoding="async" data-nimg="fill"
                                                src="https://images.snoonu.com/brand_product/2025-08/c843d7be-85b3-4f97-bd19-9d8b31e88c39_output.png"
                                                style="position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; object-fit: cover; object-position: center center;"></span>
                                        <div class="CardProductImage_discount">
                                            <p class="Typography_p12">Promo</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="CartProduct_info">
                                    <div class=""><a rel="noopener noreferrer"
                                            data-analytic-label="Marvel Spider-Man Leap Of Faith 3 In 1 Trolley Bag Set 18&quot;"
                                            target="_blank"
                                            href="/product/marvel-spider-man-leap-of-faith-3-in-1-trolley-bag-set-18/68a529ba610f4f3748c93f53?source=cart">
                                            <p data-test-id="productTitleInCart"
                                                class="Typography_p11 CartProduct_name__zlfe_">Marvel Spider-Man
                                                Leap Of Faith 3 In 1 Trolley Bag Set 18"</p>
                                        </a>
                                        <div class="CartProduct_specialRequest"><span data-test-id=""
                                                class="Icon_iconWrapper" style="width: 12px; height: 12px;"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" fill="none"
                                                    class="Icon_icon">
                                                    <path
                                                        d="M22.32 11.656a9.311 9.311 0 0 1-1 4.223 9.445 9.445 0 0 1-8.445 5.222 9.31 9.31 0 0 1-4.222-1l-6.334 2.111 2.111-6.333a9.311 9.311 0 0 1-1-4.223 9.444 9.444 0 0 1 5.223-8.444 9.311 9.311 0 0 1 4.222-1h.555a9.422 9.422 0 0 1 8.89 8.889v.555Z"
                                                        fill="currentColor"></path>
                                                </svg></span>
                                            <p class="Typography_p9">Add Special Request</p>
                                        </div>
                                    </div>
                                    <div class="CartProduct_priceWrapper">
                                        <div class="">
                                            <p class="Typography_p4">249 QR</p>
                                        </div>
                                        <div
                                            class="ProductButton_productButton___1dmt ProductButton_secondary ProductButton_small">
                                            <button data-analytic-label="minus"><span data-test-id=""
                                                    class="Icon_iconWrapper ProductButton_icon"><svg
                                                        viewBox="0 0 12 13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                                                        <path d="M2.5 6.008h7" stroke="currentColor" stroke-width="2.5"
                                                            stroke-linecap="round" stroke-linejoin="round"></path>
                                                    </svg></span></button>
                                            <p class="Typography_p4">2</p><button
                                                data-analytic-label="plus"><span data-test-id=""
                                                    class="Icon_iconWrapper ProductButton_icon"><svg
                                                        width="12" height="13" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg" class="Icon_icon">
                                                        <path d="M6 2.258v7.5M2.25 6.008h7.5" stroke="currentColor"
                                                            stroke-width="2.5" stroke-linecap="round"
                                                            stroke-linejoin="round"></path>
                                                    </svg></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div class="MarketplaceCart_checkoutButtonWrapper__jxF_s">
                        <div class="MarketplaceCart_checkoutButton" data-test-id="checkoutBtn">
                            <h5 class="Typography_h5">541 QR</h5>
                            <h5 class="Typography_h5">Checkout</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>