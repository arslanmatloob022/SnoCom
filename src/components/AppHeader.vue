<template>
  <header class="Header_header__HSEQ9 Header_show__xvo_7">
    <div class="Subheader_wrapper__w7tir">
      <div class="Subheader_leftSide__V1Icn">
        <div class="LocaleSwitcher_wrapper Subheader_locale__w6Qfp">
          <div class="LocaleSwitcher_locale__HrTe0">
            <p class="Typography_p6">عربى</p>
          </div>
        </div>
        <div
          style="border-radius: 28px"
          class="Skeleton_skeleton__o2Mix LocationLoading_loading__Eo3in Skeleton_animate"
        ></div>
      </div>
      <div class="Subheader_links__xXiT8">
        <a class="Subheader_link__baAF0" href="index.html">
          <p class="Typography_p6">Market</p>
        </a>
        <a
          class="Subheader_link__baAF0 Subheader_activeLink__HNh4K"
          href="restaurants.html"
        >
          <p class="Typography_p6">Restaurants</p>
        </a>
        <a class="Subheader_link__baAF0" href="groceries.html">
          <p class="Typography_p6">Grocery</p>
        </a>
        <a class="Subheader_link__baAF0" href="scity.html">
          <p class="Typography_p6">S City</p>
        </a>
      </div>
    </div>
    <div class="Header_nav__DVSK7">
      <div class="Header_logoWithCatalog__v4fgc">
        <a class="Logo_logo__oq6_b" href="index.html">
          <!-- <img alt="Snoonu" decoding="async" data-nimg="fill" class="Logo_fullLogo__l2rPp"
            style="position:absolute;height:100%;width:100%;left:0;top:0;right:0;bottom:0;color:transparent"
            src="_next/static/media/logo.6da502f3.svg" /> -->
        </a>
        <div class="CatalogMenu_wrapper">
          <button
            class="Button_button Button_secondary__n6j2f Button_small CatalogButton_button__wTnA9"
          >
            <span class="Button_content__X1hfV">
              <span class="Icon_iconWrapper Button_icon">
                <svg
                  width="20"
                  height="20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="Icon_icon__CTVm1"
                >
                  <path
                    d="M0 5h20v2.5H0V5ZM20 15H0v-2.5h20V15Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </span>
              <span class="CatalogButton_text">Catalog</span>
            </span>
          </button>
        </div>
      </div>
      <SearchBar />
      <div class="Header_sideWrapper__3FSV4">
        <div class="LoginButton_wrapper__by23_">
          <button class="Button_button Button_secondary__n6j2f Button_small">
            <span class="Button_content__X1hfV">Login</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import SearchBar from "./SearchBar.vue";

export default {
  name: "AppHeader",
  components: {
    SearchBar,
  },
};
</script>
