<template>
  <router-link
    to="#"
    target="_blank"
    rel="noopener noreferrer"
    class="productCard"
    :id="product.id"
  >
    <div
      class="ProductCardVertical_wrapper ProductRecommendations_card"
      data-analytic-label="bestSellingProduct"
      :data-analytic-event-content="product.id"
      data-test-id="bestSellProductCard"
    >
      <!-- Product Image -->
      <div class="CardProductImage_imageWrapper ProductCardVertical_image ProductRecommendations_cardImage relative">
        <img
          :src="product.img"
          :alt="product.name"
          class="absolute inset-0 w-full h-full object-cover"
        />

        <!-- Left badge -->
        <div v-if="product.left" class="CardProductImage_productLeft">
          <p class="Typography_p10">
            Left <span>{{ product.left }}</span>
          </p>
        </div>
      </div>

      <!-- Product Info -->
      <div class="ProductCartVerticalDescription_info">
        <h5 class="Typography_h5 ProductCartVerticalDescription_price">
          {{ product.price }}
        </h5>
        <p class="Typography_p7 ProductCartVerticalDescription_name">
          {{ product.name }}
        </p>
      </div>

      <!-- Add Button -->
      <button
        class="Button_button Button_secondary ProductButton_addButton__y5b_u ProductButton_secondary ProductButton_normal__jOR_t ProductRecommendations_cardButton"
        data-test-id="addBtnProductCard"
        data-analytic-label="productButtonAdd"
      >
        <span class="Button_content">Add</span>
      </button>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>

.ProductRecommendations_card {
    width: 100%;
    background: var(--background-secondary);
}
</style>
