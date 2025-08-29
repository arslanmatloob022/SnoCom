<template>
  <div
    class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6"
  >
    <div
      v-for="product in filteredProducts"
      :key="product.id"
      class="product-card border rounded-lg shadow-sm p-3 cursor-pointer hover:shadow-md transition"
      @click="$emit('product-click', product)"
    >
      <div class="relative">
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-36 sm:h-40 md:h-44 object-cover rounded-md"
        />

        <div
          v-if="product.discount"
          class="absolute top-2 left-2 bg-red-600 text-white px-2 py-0.5 text-[10px] sm:text-xs font-semibold rounded"
        >
          {{ product.discount }}% Off
        </div>

        <div
          class="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-0.5 text-[10px] sm:text-xs rounded"
        >
          🚴 {{ product.deliveryTime }} mins
        </div>
      </div>

      <div class="mt-3">
        <h3 class="font-semibold text-xs sm:text-sm truncate">
          {{ product.name }}
        </h3>
        <div class="flex justify-between text-[10px] sm:text-xs mt-1">
          <span>⭐ {{ product.rating }}</span>
          <span class="text-gray-600">{{ product.priceRange }}</span>
        </div>
        <div class="text-gray-500 text-[10px] sm:text-xs mt-1">
          {{ product.tags }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductGrid",
  props: {
    products: {
      type: Array,
      default: () => [],
    },
    filters: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    filteredProducts() {
      if (this.filters.length === 0) return this.products;

      return this.products.filter((product) => {
        return this.filters.every((filter) => {
          switch (filter) {
            case "delivery":
              return product.freeDelivery;
            case "time":
              return product.deliveryTime <= 30;
            case "price":
              return product.minPrice < 50;
            case "takeaway":
              return product.takeaway;
            default:
              return true;
          }
        });
      });
    },
  },
  emits: ["product-click"],
};
</script>
