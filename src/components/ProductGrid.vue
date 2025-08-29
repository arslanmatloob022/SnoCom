<template>
  <div class="grid grid-cols-6 gap-6">
    <div 
      v-for="product in filteredProducts" 
      :key="product.id" 
      class="product-card border rounded-lg shadow-sm p-3 cursor-pointer hover:shadow-md transition"
      @click="$emit('product-click', product)"
    >
      <div class="relative">
        <img :src="product.image" :alt="product.name" class="w-full h-40 object-cover rounded-md">
        
        <div 
          v-if="product.discount" 
          class="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 text-xs font-semibold rounded"
        >
          {{ product.discount }}% Off
        </div>
        
        <div 
          class="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 text-xs rounded"
        >
          🚴 {{ product.deliveryTime }} mins
        </div>
      </div>

      <div class="mt-3">
        <h3 class="font-semibold text-sm truncate">{{ product.name }}</h3>
        <div class="flex justify-between text-xs mt-1">
          <span>⭐ {{ product.rating }}</span>
          <span class="text-gray-600">{{ product.priceRange }}</span>
        </div>
        <div class="text-gray-500 text-xs mt-1">{{ product.tags }}</div>
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