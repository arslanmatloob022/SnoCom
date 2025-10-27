<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<template>
    <div class="">
        <h1 class="Typography_h1 Title_title">Orders</h1>
        <div class="EmptyOrders_wrapper">
            <h2 class="Typography_h2 EmptyOrders_title">No orders history</h2>
            <p class="Typography_p6">When you have orders they will appear on this page</p><button
            @click="router.push('/')"
                class="Button_button Button_secondary Button_small EmptyOrders_button"
                data-analytic-label="goBackFromEmptyOrders"><span class="Button_content" >Go back</span></button>
        </div>
    </div>
</template>


<style>
.EmptyOrders_wrapper {
    margin: 238px 0;
    text-align: center;
    color: var(--text-secondary)
}

@media(max-width:1024px) {
    .EmptyOrders_wrapper {
        margin: 204px 0
    }
}

@media(max-width:575px) {
    .EmptyOrders_wrapper {
        margin: 156px 48px
    }
}

.EmptyOrders_title {
    margin-top: 0;
    margin-bottom: 8px
}

@media(max-width:575px) {
    .EmptyOrders_title {
        margin-bottom: 4px
    }
}

.EmptyOrders_button {
    padding-left: 32px !important;
    padding-right: 32px !important;
    margin-top: 24px
}

:root[lang=ar] .EmptyOrders_title {
    text-align: center
}

@media(max-width:1024px) {
    .OrderDetailsLoading_map___PgAJ {
        border-radius: 24px !important
    }
}

.OrderDetailsLoading_skeleton___a3ux {
    padding: 24px
}

@media(max-width:1024px) {
    .OrderDetailsLoading_skeleton___a3ux {
        padding: 16px 0
    }
}

.OrderDetailsLoading_address {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-flow: column;
    gap: 4px
}

.OrderDetailsLoading_address .OrderDetailsLoading_title {
    height: 24px
}

@media(max-width:575px) {
    .OrderDetailsLoading_address .OrderDetailsLoading_title {
        height: 20px
    }
}

.OrderDetailsLoading_address .OrderDetailsLoading_secondary {
    height: 20px
}

@media(max-width:1024px) {
    .OrderDetailsLoading_address .OrderDetailsLoading_secondary {
        height: 16px
    }
}

.OrderDetailsLoading_order__ShB_y {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row;
    margin-top: 40px
}

@media(max-width:1024px) {
    .OrderDetailsLoading_order__ShB_y {
        margin-top: 16px
    }
}

.OrderDetailsLoading_order__ShB_y .OrderDetailsLoading_title {
    height: 32px
}

@media(max-width:1024px) {
    .OrderDetailsLoading_order__ShB_y .OrderDetailsLoading_title {
        height: 28px
    }
}

@media(max-width:575px) {
    .OrderDetailsLoading_order__ShB_y .OrderDetailsLoading_title {
        height: 24px
    }
}

.OrderDetailsLoading_product {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row;
    margin-top: 12px
}

.OrderDetailsLoading_product .OrderDetailsLoading_image {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row;
    gap: 16px
}

.OrderDetailsLoading_product .OrderDetailsLoading_productPrice {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    gap: 4px
}

.OrderDetailsLoading_prices {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-flow: column;
    margin-top: 12px
}

.OrderDetailsLoading_price {
    padding: 18px 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row;
    border-top: 1px solid var(--border-and-divider-secondary)
}

.OrderDetailsLoading_paid {
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    gap: 10px;
    border-bottom: 1px solid var(--border-and-divider-secondary)
}

.OrderDetailsLoading_cardInfo__0v_rd {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row;
    gap: 8px
}

.OrderDetailsLoading_details {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: column;
    margin-top: 24px
}

.OrderDetailsLoading_detail {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row;
    width: 100%;
    margin-top: 16px
}

.OrderHistoryContainer_wrapper {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
    grid-gap: 24px
}

@media(max-width:1024px) {
    .OrderHistoryContainer_wrapper {
        grid-template-columns: minmax(0, 1fr)
    }
}

.OrderHistoryContainer_detailWrapper {
    position: relative
}

.OrderHistoryContainer_detail {
    position: -webkit-sticky;
    position: sticky;
    top: 120px;
    border-radius: 28px;
    box-shadow: var(--box-shadow-top-54);
    overflow: auto;
    max-height: calc(100vh - 144px)
}

@media(max-width:1024px) {
    .OrderHistoryContainer_detail {
        display: none
    }
}

.SkeletonCardOrder_card {
    box-shadow: var(--box-shadow-56);
    border-radius: 32px;
    display: flex;
    align-items: normal;
    justify-content: normal;
    flex-flow: column;
    margin-bottom: 24px
}

@media(max-width:575px) {
    .SkeletonCardOrder_card {
        border-radius: 28px
    }
}

.SkeletonCardOrder_header {
    padding: 24px
}

@media(max-width:1024px) {
    .SkeletonCardOrder_header {
        padding-bottom: 28px
    }
}

@media(max-width:575px) {
    .SkeletonCardOrder_header {
        padding: 16px 16px 20px
    }
}

.SkeletonCardOrder_info__qu_u_ {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-flow: row
}

.SkeletonCardOrder_name {
    height: 32px
}

@media(max-width:1024px) {
    .SkeletonCardOrder_name {
        height: 28px
    }
}

@media(max-width:575px) {
    .SkeletonCardOrder_name {
        height: 24px
    }
}

.SkeletonCardOrder_price {
    height: 24px
}

@media(max-width:575px) {
    .SkeletonCardOrder_price {
        height: 20px
    }
}

.SkeletonCardOrder_desc {
    width: 20%;
    height: 16px;
    margin-top: 4px;
    display: none
}

@media(max-width:1024px) {
    .SkeletonCardOrder_desc {
        display: block
    }
}

.SkeletonCardOrder_images {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    padding: 0 24px 24px;
    grid-gap: 8px;
    gap: 8px
}

@media(max-width:575px) {
    .SkeletonCardOrder_images {
        grid-template-columns: repeat(5, 1fr);
        padding: 0 16px 16px
    }
}

.SkeletonCardOrder_image__KhIY_ {
    position: relative;
    aspect-ratio: 1;
    border-radius: 20px
}

@media(max-width:575px) {
    .SkeletonCardOrder_image__KhIY_ {
        border-radius: 16px
    }
}

.SkeletonCardOrder_status__c_Fza {
    background: var(--background-inverted);
    margin: 16px;
    padding: 6px;
    border-radius: 28px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row;
    cursor: pointer
}

@media(max-width:575px) {
    .SkeletonCardOrder_status__c_Fza {
        margin: 8px
    }
}

.SkeletonCardOrder_icon {
    width: 40px;
    height: 40px;
    background: var(--constant-gray)
}

.SkeletonCardOrder_title {
    height: 20px;
    margin-left: 8px;
    margin-right: 8px
}

@media(max-width:1024px) {
    .SkeletonCardOrder_title {
        height: 16px
    }
}

.Title_title {
    margin-top: 24px;
    margin-bottom: 24px
}

.MainContainer_childWrapper {
    flex: 1 0 auto;
    position: relative
}

.MainContainer_headerContainer {
    display: flex;
    flex-direction: column
}

.MainContainer_headerContainer>:first-child {
    order: 1
}

@media(max-width:575px) {
    .MainContainer_headerContainer>:first-child {
        order: 0
    }
}
</style>