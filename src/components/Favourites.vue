<script lang="ts" setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { UsePannelsStore } from '@/stores/UsePannelsStore'
import { useUserStore } from '@/stores/useUserStore'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const popupRef = ref<HTMLElement | null>(null)
const pannel = UsePannelsStore()
const userSession = useUserStore()


</script>

<template>
    <div class="ContentWrapper_container">
        <h1 class="Typography_h1 Title_title">Favorites</h1>
        <div class="FavouritesCollections_wrapper__xjy_y">
            <div class="CardFavouritesCollection_wrapper"><a rel="noopener noreferrer"
                    data-analytic-label="favouriteCollectionLink" data-analytic-event-content="0"
                    href="/favorites">
                    <div class="CardFavouritesCollection_preview">
                        <div class="CardFavouritesCollection_imageWrapper"><img alt="collection product 0"
                                loading="lazy" decoding="async" data-nimg="fill" class="CardFavouritesCollection_image"
                                src="https://images.snoonu.com/test/griditem_0/0mSVD4l4ZJ.jpg"
                                style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                        </div>
                        <div class="CardFavouritesCollection_imageWrapper"><img alt="collection product 1"
                                loading="lazy" decoding="async" data-nimg="fill" class="CardFavouritesCollection_image"
                                src="https://images.snoonu.com/product/2025-7/80ae3ac2-1861-45bd-91d4-1aa1766894cf_9781788176187.jpg"
                                style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                        </div>
                        <div class="CardFavouritesCollection_imageWrapper"><img alt="collection product 2"
                                loading="lazy" decoding="async" data-nimg="fill" class="CardFavouritesCollection_image"
                                src="https://images.snoonu.com/product/2025-7/0cbb2537-a9a7-49c3-aa87-f92bfbd67d23_9789776709393.jpg"
                                style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                        </div>
                        <div class="CardFavouritesCollection_imageWrapper"><img alt="collection product 3"
                                loading="lazy" decoding="async" data-nimg="fill" class="CardFavouritesCollection_image"
                                src="https://images.snoonu.com/product/2025-7/c6cc30d2-ee2b-492a-8fdc-f46ce98e5ccd_9789778731378.png"
                                style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;">
                        </div>
                    </div>
                    <h5 class="Typography_h5 CardFavouritesCollection_title">All items</h5>
                    <p class="Typography_p6 CardFavouritesCollection_description">4 items</p>
                </a></div>
        </div>
    </div>
</template>

<style>
.EmptyFavourites_wrapper {
    margin: 48px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column
}

.EmptyFavourites_imageWrapper {
    position: relative;
    width: 144px;
    height: 104px
}

.EmptyFavourites_title__AF_UN {
    margin-top: 16px;
    margin-bottom: 8px
}

.EmptyFavourites_description {
    color: var(--text-secondary)
}

.CardFavouritesCollection_wrapper {
    text-align: start;
    width: 300px
}

@media(max-width:1360px) {
    .CardFavouritesCollection_wrapper {
        width: 200px
    }
}

@media(max-width:575px) {
    .CardFavouritesCollection_wrapper {
        width: calc(50% - 8px)
    }
}

.CardFavouritesCollection_preview {
    border-radius: 28px;
    padding: 8px;
    box-shadow: var(--box-shadow-top-54);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px
}

.CardFavouritesCollection_imageWrapper {
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 20px;
    overflow: hidden
}

.CardFavouritesCollection_imageWrapper:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, .04)
}

.CardFavouritesCollection_imageWrapper .CardFavouritesCollection_image {
    object-fit: cover
}

.CardFavouritesCollection_title {
    margin-top: 16px
}

.CardFavouritesCollection_description {
    margin-top: 4px;
    color: var(--text-secondary)
}

.FavouritesCollections_wrapper__xjy_y {
    display: flex;
    flex-wrap: wrap;
    gap: 24px
}

@media(max-width:575px) {
    .FavouritesCollections_wrapper__xjy_y {
        gap: 16px
    }
}

.FavouritesLoading_list {
    display: flex;
    flex-wrap: wrap;
    gap: 24px
}

@media(max-width:575px) {
    .FavouritesLoading_list {
        gap: 16px
    }
}

.FavouritesLoading_wrapper {
    width: 300px
}

@media(max-width:1360px) {
    .FavouritesLoading_wrapper {
        width: 200px
    }
}

@media(max-width:575px) {
    .FavouritesLoading_wrapper {
        width: calc(50% - 8px)
    }
}

.FavouritesLoading_preview {
    border-radius: 28px;
    padding: 8px;
    box-shadow: var(--box-shadow-top-54);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 8px
}

.FavouritesLoading_image {
    position: relative;
    width: 100%;
    aspect-ratio: 1/1;
    border-radius: 28px !important
}

.FavouritesLoading_title {
    width: 60%;
    height: 20px;
    margin-top: 16px
}

@media(max-width:1024px) {
    .FavouritesLoading_title {
        height: 18px
    }
}

.FavouritesLoading_description__Por_y {
    margin-top: 4px;
    width: 30%;
    height: 20px
}

@media(max-width:1024px) {
    .FavouritesLoading_description__Por_y {
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