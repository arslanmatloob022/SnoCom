<script lang="ts" setup>

</script>

<template>

    <div class="ContentWrapper_container">
        <Categories />
        <CategoryImages/>
        <Brands/>
        <RelatedProducts/>
    </div>
</template>
<style>
.Carousel_wrapper {
    position: relative
}

@media(max-width:1360px) {
    .Carousel_wrapper {
        margin-right: var(--content-wrapper-side-padding-negative);
        margin-left: var(--content-wrapper-side-padding-negative)
    }

    .Carousel_wrapper .Carousel_navButtonWrapper__gL_66 {
        display: none
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
    gap: 24px
}

.Carousel_carousel::-webkit-scrollbar {
    display: none
}

.Carousel_enter__Jz_dI {
    opacity: 0;
    transition: opacity .2s ease
}

.Carousel_enterActive__o_jK8 {
    opacity: 1
}

.Carousel_exit {
    opacity: 1;
    transition: opacity .2s ease
}

.Carousel_exitActive {
    opacity: 0
}

@media(max-width:1360px) {
    :root[lang=en] .Carousel_carousel>:first-of-type {
        padding-left: var(--content-wrapper-side-padding)
    }

    :root[lang=ar] .Carousel_carousel>:first-of-type,
    :root[lang=en] .Carousel_carousel>:last-of-type {
        padding-right: var(--content-wrapper-side-padding)
    }

    :root[lang=ar] .Carousel_carousel>:last-of-type {
        padding-left: var(--content-wrapper-side-padding)
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
    box-shadow: var(--box-shadow-56)
}

.NavButton_wrapper.NavButton_prev {
    left: -32px
}

.NavButton_wrapper.NavButton_next__x_uZ2 {
    right: -32px
}

.ProductCardHorizontal_wrapper {
    background: var(--background-secondary);
    border-radius: 32px;
    display: flex;
    align-items: unset;
    justify-content: flex-start;
    flex-flow: row;
    cursor: pointer
}

@media(max-width:575px) {
    .ProductCardHorizontal_wrapper {
        background: none
    }
}

.ProductCardHorizontal_wrapper .ProductCardHorizontal_image {
    margin: 8px
}

@media(max-width:575px) {
    .ProductCardHorizontal_wrapper .ProductCardHorizontal_image {
        margin: 0
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
    word-break: break-word
}

@media(max-width:1024px) {
    .ProductCardHorizontal_wrapper .ProductCardHorizontal_info {
        padding: 12px;
        -webkit-padding-start: 8px;
        padding-inline-start: 8px
    }
}

@media(max-width:575px) {
    .ProductCardHorizontal_wrapper .ProductCardHorizontal_info {
        padding: 0;
        -webkit-padding-start: 16px;
        padding-inline-start: 16px;
        gap: 12px
    }
}

.ProductCardHorizontal_wrapper .ProductCardHorizontal_info .ProductCardHorizontal_name {
    margin-bottom: 8px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

@supports(-webkit-line-clamp:2) {
    .ProductCardHorizontal_wrapper .ProductCardHorizontal_info .ProductCardHorizontal_name {
        white-space: normal;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical
    }
}

.ProductCardHorizontal_wrapper .ProductCardHorizontal_info .ProductCardHorizontal_description {
    color: var(--text-secondary);
    margin-bottom: 6px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

@supports(-webkit-line-clamp:3) {
    .ProductCardHorizontal_wrapper .ProductCardHorizontal_info .ProductCardHorizontal_description {
        white-space: normal;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical
    }
}

.ProductCardHorizontal_wrapper .ProductCardHorizontal_priceWrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: row;
    width: 100%
}

.ProductCardHorizontal_wrapper .ProductCardHorizontal_priceWrapper .ProductCardHorizontal_pricePromo {
    display: flex;
    flex-direction: column
}

.ProductCardHorizontal_wrapper .ProductCardHorizontal_priceWrapper .ProductCardHorizontal_pricePromo .ProductCardHorizontal_newPrice {
    color: var(--constant-brand)
}

.ProductCardHorizontal_wrapper .ProductCardHorizontal_priceWrapper .ProductCardHorizontal_pricePromo .ProductCardHorizontal_oldPrice {
    color: var(--text-secondary)
}

@media(max-width:575px) {
    .ProductCardHorizontal_wrapper .ProductCardHorizontal_productButton {
        min-width: 96px;
        height: 44px;
        margin: 0
    }
}

:root[lang=ar] .ProductCardHorizontal_description,
:root[lang=ar] .ProductCardHorizontal_name {
    text-align: right
}

:root[lang=ar] .ProductCardHorizontal_imageWrapper {
    flex-shrink: 0;
    width: 176px;
    height: 176px;
    margin: 8px 8px 8px 0;
    position: relative;
    border-radius: 28px;
    background: var(--constant-white);
    overflow: hidden
}

@media(max-width:575px) {
    :root[lang=ar] .ProductCardHorizontal_imageWrapper {
        width: 156px;
        height: 156px
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
    cursor: pointer
}

@media(max-width:1024px) {
    .ProductCardVertical_wrapper {
        width: 156px;
        border-radius: 28px
    }
}

@media(max-width:575px) {
    .ProductCardVertical_wrapper {
        width: 150px
    }
}

.ProductCardVertical_wrapper .ProductCardVertical_image {
    margin: 8px;
    border-radius: 26px 26px 6px 6px
}

@media(max-width:1024px) {
    .ProductCardVertical_wrapper .ProductCardVertical_image {
        border-radius: 24px 24px 6px 6px
    }
}

@media(max-width:575px) {
    .ProductCardVertical_wrapper .ProductCardVertical_image {
        margin: 6px;
        width: 138px;
        height: 138px
    }
}

.ProductCardVertical_wrapper .ProductCardVertical_info {
    padding: 8px 12px 18px
}

@media(max-width:1024px) {
    .ProductCardVertical_wrapper .ProductCardVertical_info {
        padding-bottom: 12px
    }
}

.ProductCardVertical_wrapper .ProductCardVertical_name {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

@supports(-webkit-line-clamp:2) {
    .ProductCardVertical_wrapper .ProductCardVertical_name {
        white-space: normal;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical
    }
}

.ProductCardVertical_wrapper .ProductCardVertical_price__T_5WM {
    margin-bottom: 6px
}

@media(max-width:575px) {
    .ProductCardVertical_wrapper .ProductCardVertical_price__T_5WM {
        margin-bottom: 8px
    }
}

.ProductCardVertical_wrapper .ProductCardVertical_pricePromo__O_ab8 {
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    flex-flow: row;
    gap: 4px;
    margin-bottom: 6px
}

.ProductCardVertical_wrapper .ProductCardVertical_pricePromo__O_ab8 .ProductCardVertical_newPrice {
    color: var(--constant-brand)
}

.ProductCardVertical_wrapper .ProductCardVertical_pricePromo__O_ab8 .ProductCardVertical_oldPrice {
    color: var(--text-secondary)
}

:root[lang=ar] .ProductCardVertical_name,
:root[lang=ar] .ProductCardVertical_price__T_5WM {
    text-align: right
}

.HeartIcon_wrapper {
    cursor: pointer
}

.HeartIcon_heartActive svg {
    animation: HeartIcon_heartAnimationActive .5s
}

.HeartIcon_heartInActive svg {
    animation: HeartIcon_heartAnimationInActive .5s
}

@keyframes HeartIcon_heartAnimationActive {
    0% {
        transform: scale(1)
    }

    50% {
        transform: scale(.7)
    }

    to {
        transform: scale(1)
    }
}

@keyframes HeartIcon_heartAnimationInActive {
    0% {
        transform: scale(1)
    }

    50% {
        transform: scale(.7)
    }

    to {
        transform: scale(1)
    }
}

.FavouriteProductIcon_notification__qOLE_ {
    width: 336px
}

@media(max-width:1024px) {
    .FavouriteProductIcon_notification__qOLE_ {
        width: 100%
    }
}

.FavouriteProductIcon_seeAll {
    color: var(--text-invert-primary)
}

.ProductCounter_wrapper__yiOb_ {
    position: absolute;
    bottom: 12px;
    inset-inline-end: 12px;
    border-radius: 20px
}

.ProductCounter_plusWrapper {
    padding: 10px;
    overflow: hidden;
    background: var(--control-tertiary);
    box-shadow: var(--box-shadow-s)
}

.ProductCounter_plusWrapper .ProductCounter_icon {
    width: 20px;
    height: 20px
}

.ProductCounter_counterWrapper {
    padding: 4px;
    background: var(--control-tertiary);
    box-shadow: var(--box-shadow-m);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row;
    overflow: hidden
}

@media(max-width:575px) {
    .ProductCounter_counterWrapper {
        inset-inline-start: 12px;
        width: calc(100% - 24px)
    }
}

.ProductCounter_counterWrapper .ProductCounter_minus___ywYe,
.ProductCounter_counterWrapper .ProductCounter_plus {
    background: var(--control-tertiary);
    padding: 8px;
    border-radius: 16px
}

.ProductCounter_counterWrapper .ProductCounter_minus___ywYe:focus,
.ProductCounter_counterWrapper .ProductCounter_plus:focus {
    background: var(--background-secondary)
}

.ProductCounter_counterWrapper .ProductCounter_count {
    min-width: 24px;
    text-align: center
}

@media(max-width:575px) {
    .ProductCounter_counterWrapper .ProductCounter_count {
        flex: 1 1
    }
}

.ProductCounter_counterWrapper .ProductCounter_icon {
    width: 16px;
    height: 16px
}

.ProductCounter_button {
    border: none;
    outline: none;
    cursor: pointer
}

.ProductCounter_button:focus {
    outline: none
}

.ProductImage_wrapper {
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 26px;
    overflow: hidden
}

.ProductImage_wrapper:after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .03);
    border-radius: 26px
}

.ProductImage_imageWrapper {
    position: relative;
    width: 100%;
    height: 100%
}

.SimpleStarRating_wrapper {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row;
    gap: 2px
}

.SimpleStarRating_starWrapper {
    position: relative
}

.SimpleStarRating_starFilled {
    position: relative;
    color: var(--constant-top-rated);
    z-index: 2
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
    height: 12px
}

.SimpleStarRating_starBackground {
    position: absolute;
    color: var(--border-and-divider-primary)
}

:root[lang=ar] .SimpleStarRating_starWrapper {
    transform: scaleX(-1)
}

.ProductRating_wrapper__g_1Nn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row;
    gap: 4px;
    margin-top: 6px
}

.ProductRating_count {
    color: var(--text-secondary)
}

.ProductTags_wrapper {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row;
    gap: 4px
}

.ProductTags_discount {
    padding: 3px 4px;
    background: var(--constant-background-coolred);
    color: var(--text-brand);
    border-radius: 20px
}

.ProductTags_buyOneGetOne {
    height: 20px;
    padding: 3px 8px;
    background: var(--constant-x-get-y);
    border-radius: 20px
}

.ProductTags_bySnoonu {
    padding: 4px 5px;
    background: var(--constant-background-coolred);
    color: var(--icon-brand);
    border-radius: 20px
}

.ProductTags_bySnoonu .ProductTags_icon {
    width: 12px;
    height: 12px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row
}

.ProductTags_freeDelivery {
    background: rgba(1, 123, 255, .06);
    color: var(--text-free-delivery);
    padding: 3px 5px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row;
    gap: 2px;
    border-radius: 12px
}

.ProductTags_freeDelivery .ProductTags_freeDeliveryIcon {
    width: 12px;
    height: 12px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: row
}

:root[lang=ar] .ProductTags_freeDeliveryIcon {
    transform: scaleX(-1)
}

.ProductPrice_wrapper {
    margin-top: 10px
}

.ProductPrice_prices {
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    flex-flow: row;
    gap: 4px;
    margin-bottom: 2px
}

.ProductPrice_prices .ProductPrice_newPrice {
    color: var(--constant-brand)
}

.ProductPrice_prices .ProductPrice_oldPrice {
    color: var(--text-secondary)
}

.ProductPrice_label {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

@supports(-webkit-line-clamp:3) {
    .ProductPrice_label {
        white-space: normal;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical
    }
}

@media(max-width:1024px) {
    .ProductPrice_label {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis
    }

    @supports(-webkit-line-clamp:2) {
        .ProductPrice_label {
            white-space: normal;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical
        }
    }
}

:root[lang=ar] .ProductPrice_wrapper {
    text-align: right
}

.ProductInfo_wrapper___tfgf {
    margin-top: 10px
}

.ProductInfo_prices {
    display: flex;
    align-items: baseline;
    justify-content: flex-start;
    flex-flow: row;
    gap: 4px;
    margin-bottom: 2px
}

.ProductInfo_prices .ProductInfo_newPrice {
    color: var(--constant-brand)
}

.ProductInfo_prices .ProductInfo_oldPrice {
    color: var(--text-secondary)
}

.ProductInfo_label {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

@supports(-webkit-line-clamp:2) {
    .ProductInfo_label {
        white-space: normal;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical
    }
}

:root[lang=ar] .ProductInfo_wrapper___tfgf {
    text-align: right
}

.ProductCardMarketplace_imageWrapper {
    position: relative
}

.ProductCardMarketplace_favourite {
    position: absolute;
    top: 12px;
    right: 16px;
    padding: 0
}

.SeeAll_wrapper__OQnx_ {
    margin: 0 66px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column
}

@media(max-width:1024px) {
    .SeeAll_wrapper__OQnx_ {
        margin: 0 50px
    }
}

.SeeAll_link {
    flex-flow: column
}

.SeeAll_iconWrapper,
.SeeAll_link {
    display: flex;
    align-items: center;
    justify-content: center
}

.SeeAll_iconWrapper {
    background: var(--constant-white);
    color: var(--icon-primary);
    width: 48px;
    height: 48px;
    margin: 0 4px 8px;
    border-radius: 50%;
    flex-flow: row;
    box-shadow: var(--box-shadow-56)
}

:root[lang=ar] .SeeAll_iconWrapper {
    transform: scaleX(-1)
}

.SeeAll_button {
    padding: 12px 20px !important
}

@media(max-width:575px) {
    .SeeAll_button {
        padding: 8px 16px !important
    }
}

.ShowMore_wrapper {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: column;
    align-self: flex-start;
    justify-self: center
}

.ShowMore_iconWrapper {
    width: 68px;
    height: 68px;
    border-radius: 20px;
    background: var(--background-secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: row
}

@media(max-width:1024px) {
    .ShowMore_iconWrapper {
        width: 60px;
        height: 60px
    }
}

.ShowMore_label {
    text-align: center;
    margin-top: 4px
}

.Subcategories_wrapper {
    display: grid;
    grid-row-gap: 24px;
    grid-column-gap: 24px;
    grid-template-columns: repeat(10, minmax(0, 1fr))
}

@media(max-width:1710px) {
    .Subcategories_wrapper {
        grid-template-columns: repeat(9, minmax(0, 1fr))
    }
}

@media(max-width:1360px) {
    .Subcategories_wrapper {
        grid-template-columns: repeat(7, minmax(0, 1fr))
    }
}

@media(max-width:1024px) {
    .Subcategories_wrapper {
        margin: 0 auto;
        grid-template-columns: repeat(6, minmax(0, 1fr))
    }
}

@media(max-width:767px) {
    .Subcategories_wrapper {
        grid-template-columns: repeat(5, minmax(0, 1fr))
    }
}

@media(max-width:575px) {
    .Subcategories_wrapper {
        grid-template-columns: repeat(4, minmax(0, 1fr));
        grid-column-gap: 0
    }
}

@media(max-width:355px) {
    .Subcategories_wrapper {
        grid-template-columns: repeat(3, minmax(0, 1fr))
    }
}

.Subcategories_category {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-flow: column;
    cursor: pointer
}

.Subcategories_category .Subcategories_imageWrapper {
    position: relative;
    width: 100%;
    height: 100%;
    aspect-ratio: 1;
    border-radius: 24px;
    overflow: hidden
}

@media(max-width:575px) {
    .Subcategories_category .Subcategories_imageWrapper {
        border-radius: 20px;
        width: 60px;
        height: 60px
    }
}

.Subcategories_category .Subcategories_label {
    text-align: center;
    margin-top: 8px;
    overflow-wrap: anywhere
}

@media(max-width:575px) {
    .Subcategories_category .Subcategories_label {
        margin-top: 4px
    }
}

.Subcategories_showMore {
    display: none
}

@media(max-width:575px) {
    .Subcategories_showMore {
        display: flex
    }
}

.Title_title {
    margin-bottom: 32px
}

@media(max-width:1024px) {
    .Title_title {
        margin-top: 0
    }
}

@media(max-width:575px) {
    .Title_title {
        margin-bottom: 24px
    }
}
</style>