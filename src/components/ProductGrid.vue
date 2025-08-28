<template>
  <div class="product-grid">
    <div 
      v-for="product in filteredProducts" 
      :key="product.id" 
      class="product-card"
      @click="$emit('product-click', product)"
    >
      <div class="product-image-wrapper" style="position: relative;">
        <img :src="product.image" :alt="product.name" class="product-image">
        <div v-if="product.discount" class="discount-badge">{{ product.discount }}% Off</div>
        <div class="delivery-time">🚴 {{ product.deliveryTime }} mins</div>
      </div>
      <div class="product-info">
        <h3 class="product-title">{{ product.name }}</h3>
        <div class="product-rating">
          <span>⭐ {{ product.rating }}</span>
          <span class="p4">{{ product.priceRange }}</span>
        </div>
        <div class="product-tags p4">{{ product.tags }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductGrid',
  props: {
    products: {
      type: Array,
      default: () => []
    },
    filters: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    filteredProducts() {
      if (this.filters.length === 0) return this.products
      
      return this.products.filter(product => {
        return this.filters.every(filter => {
          switch (filter) {
            case 'delivery':
              return product.freeDelivery
            case 'time':
              return product.deliveryTime <= 30
            case 'price':
              return product.minPrice < 50
            case 'takeaway':
              return product.takeaway
            default:
              return true
          }
        })
      })
    }
  },
  emits: ['product-click']
}
</script>

<style scoped>
.product-image-wrapper {
  position: relative;
}

.discount-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: #e31e24;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
}

.delivery-time {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
}
</style>