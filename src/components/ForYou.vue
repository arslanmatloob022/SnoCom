<template>
  <div class="w-full px-4 py-6">
    <!-- Top Section (Products + Categories) -->
    <div class="flex flex-col md:flex-row md:gap-6">
      <!-- Trendy Categories (Mobile: Top, Desktop: Right Sidebar) -->
      <div
        class="w-full md:w-64 bg-gray-100 rounded-xl shadow p-4 mb-6 md:mb-0 md:order-2"
      >
        <h3 class="text-lg font-bold mb-4">⚡ Trendy categories</h3>
        <div class="flex flex-col gap-3">
          <div
            v-for="category in trendyCategories"
            :key="category.id"
            class="flex items-center p-3 bg-white rounded-lg cursor-pointer hover:bg-gray-50 transition"
          >
            <img
              :src="category.icon"
              :alt="category.name"
              class="w-10 h-10 rounded-md object-cover mr-3"
            />
            <span class="flex-1 text-sm font-medium">{{ category.name }}</span>
            <span class="text-gray-400">›</span>
          </div>
        </div>
      </div>

      <!-- Product Cards Grid -->
      <div class="flex-1">
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          <div
            v-for="product in products"
            :key="product.id"
            class="bg-white rounded-lg shadow hover:shadow-md transition relative"
          >
            <!-- Image -->
            <div
              class="relative bg-gray-200 h-40 flex items-center justify-center rounded-t-lg"
            >
              <img
                :src="product.image"
                :alt="product.name"
                class="max-h-full max-w-full object-contain"
              />
              <!-- Fav Button -->
              <button
                class="absolute top-2 right-2 w-8 h-8 rounded-full bg-white text-gray-400 hover:text-red-500 shadow flex items-center justify-center"
              >
                ❤️
              </button>
              <!-- Add Button -->
              <button
                class="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-white text-gray-800 hover:bg-red-500 hover:text-white shadow flex items-center justify-center font-bold"
              >
                +
              </button>
            </div>

            <!-- Info -->
            <div class="p-3">
              <div class="text-sm font-bold text-gray-800">
                {{ product.price }}
              </div>
              <div class="text-xs text-gray-600 truncate">
                {{ product.name }}
              </div>
              <div class="flex items-center gap-1 text-xs mt-1">
                <span class="font-semibold">{{ product.rating }}</span>
                <span class="text-yellow-400">★</span>
                <span class="text-gray-500">({{ product.reviewCount }})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- School New Hits (Full width below) -->
    <div class="mt-10">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-bold">School New Hits!</h3>
        <button class="text-red-600 text-sm font-medium hover:underline">
          See all
        </button>
      </div>
      <div class="flex gap-4 overflow-x-auto scrollbar-hide pb-3">
        <div
          v-for="item in schoolHits"
          :key="item.id"
          class="min-w-[150px] bg-white rounded-lg shadow p-3 flex-shrink-0"
        >
          <div
            class="bg-gray-200 h-28 flex items-center justify-center rounded-lg relative"
          >
            <img
              :src="item.image"
              :alt="item.name"
              class="max-h-full max-w-full object-contain"
            />
            <button
              class="absolute bottom-2 right-2 w-7 h-7 rounded-full bg-white text-gray-800 hover:bg-red-500 hover:text-white shadow flex items-center justify-center font-bold"
            >
              +
            </button>
          </div>
          <div class="mt-2">
            <div class="text-sm font-bold text-gray-800">{{ item.price }}</div>
            <div class="text-xs text-gray-600 truncate">{{ item.name }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForYou",
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Qatar Traveler",
          price: "0 QR",
          rating: 4.9,
          reviewCount: 10,
          image:
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop",
        },
        {
          id: 2,
          name: "iPhone 16 Pro Max - Desert Titanium - 256GB",
          price: "5,399 QR",
          rating: 5.0,
          reviewCount: 14,
          image:
            "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=200&fit=crop",
        },
        {
          id: 3,
          name: "New Mini Smartphone",
          price: "280 QR",
          rating: 3.9,
          reviewCount: 12,
          image:
            "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop",
        },
        {
          id: 4,
          name: "Apple iPhone 16 - Teal - 128GB",
          price: "3,199 QR",
          rating: 5.0,
          reviewCount: 4,
          image:
            "https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=300&h=200&fit=crop",
        },
        {
          id: 5,
          name: "Nike sneakers",
          price: "149 QR",
          rating: 5.0,
          reviewCount: 14,
          image:
            "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=200&fit=crop",
        },
      ],
      trendyCategories: [
        {
          id: 1,
          name: "Toys",
          icon: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=40&h=40&fit=crop&crop=center",
        },
        {
          id: 2,
          name: "Food",
          icon: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=40&h=40&fit=crop&crop=center",
        },
        {
          id: 3,
          name: "Makeup",
          icon: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=40&h=40&fit=crop&crop=center",
        },
        {
          id: 4,
          name: "Perfumes",
          icon: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=40&h=40&fit=crop&crop=center",
        },
      ],
      schoolHits: [
        {
          id: 1,
          name: 'Kuromi Trolley Bag 14"',
          price: "139 QR",
          image:
            "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=200&h=150&fit=crop",
        },
        {
          id: 2,
          name: 'Kuromi Backpack 16"',
          price: "139 QR",
          image:
            "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=150&fit=crop",
        },
        {
          id: 3,
          name: "Kuromi Lunch Bag",
          price: "49 QR",
          image:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=150&fit=crop",
        },
        {
          id: 4,
          name: 'Kuromi Trolley Bag 16"',
          price: "179 QR",
          image:
            "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=200&h=150&fit=crop",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Hide scrollbar but keep scrolling */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
