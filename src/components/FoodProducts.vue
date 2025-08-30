<template>
  <div class="food-products-container">
    <!-- Filters -->
    <div class="food-filters">
      <button 
        v-for="filter in filters" 
        :key="filter.id"
        @click="toggleFilter(filter.id)"
        :class="['food-filter-btn', { active: activeFilters.includes(filter.id) }]"
      >
        <span v-if="filter.icon" class="food-filter-icon">{{ filter.icon }}</span>
        {{ filter.name }}
      </button>
    </div>

    <!-- Products Grid -->
    <div class="food-products-grid">
      <div 
        v-for="product in filteredProducts" 
        :key="product.id"
        class="food-product-card"
        @click="$emit('product-click', product)"
      >
        <div class="food-card-image-wrapper">
          <img :src="product.image" :alt="product.name" class="food-card-image">
          <div class="food-card-badges">
            <span v-if="product.discount" class="food-discount-badge">{{ product.discount }}% Off</span>
            <span v-if="product.freeDelivery" class="food-delivery-badge">🚚 Free Delivery</span>
            <span v-if="product.offer" class="food-offer-badge">{{ product.offer }}</span>
          </div>
          <div class="food-delivery-time">🕐 {{ product.deliveryTime }} mins</div>
        </div>
        
        <div class="food-card-content">
          <h3 class="food-card-title">{{ product.name }}</h3>
          <div class="food-card-rating">
            <span class="food-rating-star">⭐</span>
            <span class="food-rating-value">{{ product.rating }}</span>
            <span class="food-price-range">{{ product.priceRange }}</span>
          </div>
          <p class="food-card-tags">{{ product.tags }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FoodProducts',
  emits: ['product-click'],
  data() {
    return {
      activeFilters: [],
      filters: [
        { id: 'free-delivery', name: 'Free Delivery', icon: '🚚' },
        { id: 'under-30', name: 'Under 30 min', icon: '⏱️' },
        { id: 'less-50', name: 'Less than 50 QR', icon: '💰' },
        { id: 'takeaway', name: 'Takeaway', icon: '🥡' }
      ],
      products: [
        {
          id: 1, name: "Rosebella Flowers", image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?w=400",
          rating: 4.5, priceRange: "$$$", tags: "Flowers, Arrangements, Gifts", deliveryTime: 31,
          discount: 20, freeDelivery: true, category: ['free-delivery']
        },
        {
          id: 2, name: "Chef Wahib", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400",
          rating: 4.4, priceRange: "$$$", tags: "Burgers, Shawarma, Grills", deliveryTime: 41,
          discount: 20, freeDelivery: true, category: ['free-delivery']
        },
        {
          id: 3, name: "La Macine Bakery", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400",
          rating: 4.7, priceRange: "$$$", tags: "Bakery, Sweets, Desserts", deliveryTime: 35,
          discount: 50, offer: "Support Local", category: ['takeaway']
        },
        {
          id: 4, name: "Moon Wok", image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400",
          rating: 4.3, priceRange: "$$$", tags: "Asian, Seafood, Pasta, Thai", deliveryTime: 60,
          discount: 50, offer: "Buy 1 + Get 1", category: []
        },
        {
          id: 5, name: "Wok Wok", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400",
          rating: 4.4, priceRange: "$$$", tags: "Chinese, Noodles, Asian", deliveryTime: 59,
          discount: 30, offer: "Buy 1 + Get 1", category: []
        },
        {
          id: 6, name: "Awesome Wings", image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400",
          rating: 4.2, priceRange: "$$$", tags: "Fried Chicken, Burgers, Fast Food", deliveryTime: 48,
          discount: 30, category: []
        },
        {
          id: 7, name: "Wraps and Wings", image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400",
          rating: 4.4, priceRange: "$$$", tags: "Fast Food, Fried Chicken", deliveryTime: 50,
          category: []
        },
        {
          id: 8, name: "Tea Tale", image: "https://images.unsplash.com/photo-1571167530149-c72f2b2c3f44?w=400",
          rating: 4.3, priceRange: "$$$", tags: "Fast Food, Beverages, Pasta", deliveryTime: 32,
          discount: 20, offer: "Buy 1 + Get 1", category: ['under-30']
        },
        {
          id: 9, name: "Pizza Palace", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
          rating: 4.6, priceRange: "$$", tags: "Pizza, Italian, Fast Food", deliveryTime: 25,
          discount: 15, freeDelivery: true, category: ['free-delivery', 'under-30', 'less-50']
        },
        {
          id: 10, name: "Burger House", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400",
          rating: 4.5, priceRange: "$$", tags: "Burgers, Fast Food, American", deliveryTime: 28,
          discount: 25, freeDelivery: true, category: ['free-delivery', 'under-30', 'less-50']
        },
        {
          id: 11, name: "Sushi Master", image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400",
          rating: 4.8, priceRange: "$$$$", tags: "Sushi, Japanese, Seafood", deliveryTime: 45,
          discount: 10, category: []
        },
        {
          id: 12, name: "Taco Fiesta", image: "https://images.unsplash.com/photo-1565299585323-38174c4a6706?w=400",
          rating: 4.3, priceRange: "$$", tags: "Mexican, Tacos, Spicy", deliveryTime: 35,
          freeDelivery: true, category: ['free-delivery']
        },
        {
          id: 13, name: "Pasta Corner", image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400",
          rating: 4.4, priceRange: "$$$", tags: "Italian, Pasta, European", deliveryTime: 40,
          discount: 20, category: []
        },
        {
          id: 14, name: "Curry Express", image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400",
          rating: 4.2, priceRange: "$$", tags: "Indian, Curry, Spicy", deliveryTime: 30,
          freeDelivery: true, category: ['free-delivery', 'under-30']
        },
        {
          id: 15, name: "Sandwich Shop", image: "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=400",
          rating: 4.1, priceRange: "$", tags: "Sandwiches, Healthy, Quick", deliveryTime: 20,
          freeDelivery: true, category: ['free-delivery', 'under-30', 'less-50', 'takeaway']
        },
        {
          id: 16, name: "BBQ Station", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400",
          rating: 4.7, priceRange: "$$$", tags: "BBQ, Grilled, Meat", deliveryTime: 55,
          discount: 15, category: []
        },
        {
          id: 17, name: "Salad Bar", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
          rating: 4.0, priceRange: "$$", tags: "Healthy, Salads, Vegetarian", deliveryTime: 25,
          freeDelivery: true, category: ['free-delivery', 'under-30', 'less-50']
        },
        {
          id: 18, name: "Donut Delight", image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400",
          rating: 4.3, priceRange: "$", tags: "Donuts, Sweets, Coffee", deliveryTime: 15,
          discount: 30, category: ['under-30', 'less-50', 'takeaway']
        },
        {
          id: 19, name: "Seafood Grill", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400",
          rating: 4.6, priceRange: "$$$$", tags: "Seafood, Grilled, Premium", deliveryTime: 50,
          discount: 10, category: []
        },
        {
          id: 20, name: "Chicken Coop", image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400",
          rating: 4.4, priceRange: "$$", tags: "Fried Chicken, Fast Food", deliveryTime: 35,
          freeDelivery: true, category: ['free-delivery']
        },
        {
          id: 21, name: "Noodle House", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400",
          rating: 4.2, priceRange: "$$", tags: "Noodles, Asian, Soup", deliveryTime: 40,
          discount: 25, category: []
        },
        {
          id: 22, name: "Waffle World", image: "https://images.unsplash.com/photo-1562376552-0d160dcec1c6?w=400",
          rating: 4.5, priceRange: "$$", tags: "Waffles, Desserts, Sweet", deliveryTime: 25,
          freeDelivery: true, category: ['free-delivery', 'under-30']
        },
        {
          id: 23, name: "Smoothie Station", image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400",
          rating: 4.1, priceRange: "$", tags: "Smoothies, Healthy, Drinks", deliveryTime: 15,
          category: ['under-30', 'less-50', 'takeaway']
        },
        {
          id: 24, name: "Steak House", image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400",
          rating: 4.8, priceRange: "$$$$", tags: "Steak, Premium, Grilled", deliveryTime: 60,
          discount: 5, category: []
        },
        {
          id: 25, name: "Pancake Paradise", image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
          rating: 4.3, priceRange: "$$", tags: "Pancakes, Breakfast, Sweet", deliveryTime: 30,
          freeDelivery: true, category: ['free-delivery', 'under-30']
        },
        {
          id: 26, name: "Hot Dog Hub", image: "https://images.unsplash.com/photo-1612392062798-2dd3c8d73d99?w=400",
          rating: 4.0, priceRange: "$", tags: "Hot Dogs, Fast Food, Quick", deliveryTime: 20,
          category: ['under-30', 'less-50', 'takeaway']
        },
        {
          id: 27, name: "Ice Cream Corner", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400",
          rating: 4.4, priceRange: "$$", tags: "Ice Cream, Desserts, Cold", deliveryTime: 25,
          freeDelivery: true, category: ['free-delivery', 'under-30']
        },
        {
          id: 28, name: "Kebab King", image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400",
          rating: 4.5, priceRange: "$$", tags: "Kebab, Middle Eastern, Grilled", deliveryTime: 35,
          discount: 20, category: []
        },
        {
          id: 29, name: "Soup Kitchen", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400",
          rating: 4.2, priceRange: "$$", tags: "Soup, Healthy, Warm", deliveryTime: 30,
          freeDelivery: true, category: ['free-delivery', 'under-30']
        },
        {
          id: 30, name: "Bagel Bakery", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400",
          rating: 4.1, priceRange: "$", tags: "Bagels, Breakfast, Fresh", deliveryTime: 25,
          category: ['under-30', 'less-50', 'takeaway']
        }
      ]
    }
  },
  computed: {
    filteredProducts() {
      if (this.activeFilters.length === 0) {
        return this.products
      }
      return this.products.filter(product => 
        this.activeFilters.some(filter => product.category.includes(filter))
      )
    }
  },
  methods: {
    toggleFilter(filterId) {
      const index = this.activeFilters.indexOf(filterId)
      if (index > -1) {
        this.activeFilters.splice(index, 1)
      } else {
        this.activeFilters.push(filterId)
      }
    }
  }
}
</script>

<style scoped>
.food-products-container {
  padding: 20px 0;
}

.food-filters {
  display: flex;
  gap: 12px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.food-filter-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 20px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #495057;
  transition: all 0.2s ease;
}

.food-filter-btn:hover {
  background: #e9ecef;
  border-color: #dee2e6;
}

.food-filter-btn.active {
  background: #e31e24;
  color: white;
  border-color: #e31e24;
}

.food-filter-icon {
  font-size: 16px;
}

.food-products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

.food-product-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #f1f3f4;
}

.food-product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.food-card-image-wrapper {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.food-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.food-product-card:hover .food-card-image {
  transform: scale(1.05);
}

.food-card-badges {
  position: absolute;
  top: 12px;
  left: 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.food-discount-badge {
  background: #e31e24;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

.food-delivery-badge {
  background: #007bff;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

.food-offer-badge {
  background: #28a745;
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
}

.food-delivery-time {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.food-card-content {
  padding: 16px;
}

.food-card-title {
  font-size: 18px;
  font-weight: 600;
  color: #212529;
  margin: 0 0 8px 0;
  line-height: 1.3;
}

.food-card-rating {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.food-rating-star {
  font-size: 16px;
}

.food-rating-value {
  font-weight: 600;
  color: #212529;
  font-size: 14px;
}

.food-price-range {
  color: #6c757d;
  font-size: 14px;
  font-weight: 500;
}

.food-card-tags {
  color: #6c757d;
  font-size: 14px;
  margin: 0;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .food-products-grid {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 16px;
  }
  
  .food-filters {
    gap: 8px;
  }
  
  .food-filter-btn {
    padding: 6px 12px;
    font-size: 13px;
  }
}
</style>