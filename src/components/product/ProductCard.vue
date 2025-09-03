<script setup lang="ts">
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>



<template>
  <router-link
    :to="`/products/detail/`"
    class="productCard"
    :data-analytic-label="product.name"
  >
    <div class="ProductCardMarketplace_imageWrapper">
      <div class="ProductImage_wrapper">
        <div class="ProductImage_imageWrapper">
          <img
            :alt="product.name"
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            :src="product.img"
            style="position:absolute;height:100%;width:100%;inset:0;color:transparent;"
          />
        </div>
      </div>

      <!-- Plus button -->
      <button class="ProductCounter_button ProductCounter_wrapper__yiOb_ ProductCounter_plusWrapper">
        <span class="Icon_iconWrapper ProductCounter_icon">
          <i class="fa fa-plus"></i>
        </span>
      </button>

      <!-- Heart -->
      <div class="HeartIcon_wrapper HeartIcon_heartInActive ProductCardMarketplace_favourite">
        <i class="fa fa-heart"></i>
      </div>
    </div>

    <div class="ProductInfo_wrapper___tfgf">
      <div class="ProductPrice_prices">
        <p class="Typography_p4">{{ product.price }}</p>
      </div>
      <p class="Typography_p14__r_99o ProductInfo_label">
        {{ product.name }}
      </p>

      <!-- Ratings (if available) -->
      <div v-if="product.rating" class="flex items-center space-x-2">
        <!-- Rating Number -->
        <p class="text-sm font-medium text-gray-600">
          {{ product.rating }}
        </p>

        <!-- Stars -->
        <div class="flex space-x-1">
          <span
            v-for="n in 5"
            :key="n"
            class="text-sm"
            :class="n <= Math.round(product.rating) ? 'text-yellow-400' : 'text-gray-300'"
          >
            <i class="fa fa-star"></i>
          </span>
        </div>

        <!-- Rating Count -->
        <p class="text-xs text-gray-500">
          ({{ product.ratingCount }})
        </p>
      </div>
    </div>
  </router-link>
</template>

