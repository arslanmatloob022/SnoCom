<script setup lang="ts">
const props = defineProps<{
  label?: string;
  image?: string;
}>();
</script>

<template>
  <div class="SubCategoryCard_fakeWrapper">
    <div class="SubCategoryCard_subCategory">
      <span class="subcategory-span"
        ><img
          class="subcategory-img-1"
          :src="props.image"
          decoding="async"
          data-nimg="fill" />
        <img
          class="subcategory-img"
          loading="lazy"
          decoding="async"
          data-nimg="fill"
          :src="props.image"
      /></span>
    </div>
    <p class="Typography_p5">{{ props.label }}</p>
  </div>
</template>
<style scoped>
.SubCategoryCard_fakeWrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
  border-radius: 12px !important;
}
.SubCategoryCard_subCategory {
  position: relative;
  width: 128px;
  height: 128px;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
}
.subcategory-span {
  box-sizing: border-box;
  display: block;
  overflow: hidden;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

.subcategory-img,
.subcategory-img-1 {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  box-sizing: border-box;
  padding: 0;
  border: none;
  border-radius: 20px;
  margin: auto;
  display: block;
  width: 100%;
  height: 100%;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: contain;
  object-position: center;
}

@supports (
  (-webkit-mask-image: paint(smooth-corners)) or
    (mask-image: paint(smooth-corners))
) {
  .SubCategoryCard_subCategory {
    border-radius: 0;
    -webkit-mask-image: none;
    mask-image: none;
    --smooth-corners: 5;
  }
}

@media (max-width: 575px) {
  .SubCategoryCard_subCategory {
    width: 112px;
    height: 112px;
  }
}
</style>
