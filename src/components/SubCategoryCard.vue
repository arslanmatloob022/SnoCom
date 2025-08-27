<template>
  <div class="FoodSubCategoryCard_fakeWrapper__wi0Cm" @click="$emit('select', category.id)">
    <div class="FoodSubCategoryCard_subCategory">
      <div class="FoodSubCategoryCard_mainImageWrapper__splY7">
        <div class="FoodSubCategoryCard_imageWrapper">
          <span style="box-sizing:border-box;display:block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:absolute;top:0;left:0;bottom:0;right:0">
            <img :alt="category.label" :src="category.image" decoding="async" data-nimg="fill"
              style="position:absolute;top:0;left:0;bottom:0;right:0;box-sizing:border-box;padding:0;border:none;margin:auto;display:block;width:0;height:0;min-width:100%;max-width:100%;min-height:100%;max-height:100%;object-fit:cover;object-position:center" />
          </span>
        </div>
      </div>
      <p class="Typography_p5 FoodSubCategoryCard_label">{{ category.label }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubCategoryCard',
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  emits: ['select']
}
</script>