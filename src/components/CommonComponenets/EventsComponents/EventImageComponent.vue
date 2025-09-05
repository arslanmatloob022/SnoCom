<template>
  <div class="ImageSection_imageWrapper">
    <img
      alt="Fällä – Self-Driven Solar-Powered Boat"
      loading="lazy"
      decoding="async"
      data-nimg="fill"
      class="ImageSection_image"
      src="https://images.snoonu.com/snoofun/2025-07/c6d47ba7-cf7e-47c6-9ff7-a3729da0804a_output.png"
      style="
        position: absolute;
        height: 100%;
        width: 100%;
        inset: 0px;
        color: transparent;
      "
    />
  </div>
</template>
<style>
.ImageSection_imageWrapper {
  position: relative;
  width: 315px;
  height: 420px;
  border-radius: 32px;
  overflow: hidden;
  flex-shrink: 0;
}
@media (max-width: 1360px) {
  .ImageSection_imageWrapper {
    width: 225px;
    height: 300px;
  }
}
@media (max-width: 1024px) {
  .ImageSection_imageWrapper {
    width: 400px;
    height: 400px;
  }
}
@media (max-width: 575px) {
  .ImageSection_imageWrapper {
    width: calc(100% + 2 * var(--content-wrapper-side-padding));
    height: 336px;
    margin-left: var(--content-wrapper-side-padding-negative);
    margin-right: var(--content-wrapper-side-padding-negative);
    border-radius: 0;
  }
}
.ImageSection_imageWrapper .ImageSection_image {
  object-fit: cover;
}
</style>
