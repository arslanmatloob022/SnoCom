<template>
  <div class="for-you-section">
    <!-- Main Content Area -->
    <div class="top-section">
      <div class="main-content">
        <!-- Product Cards List -->
        <div class="for-you-product-cards-grid">
          <div
            v-for="product in products"
            :key="product.id"
            class="for-you-product-card"
          >
            <div class="product-image-container">
              <img
                :src="product.image"
                :alt="product.name"
                class="product-image"
              />
              <button class="favorite-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                    fill="currentColor"
                  />
                </svg>
              </button>
              <button class="add-btn">+</button>
            </div>
            <div class="product-info">
              <div class="product-price">{{ product.price }}</div>
              <div class="product-name">{{ product.name }}</div>
              <div class="product-rating">
                <span class="rating-value">{{ product.rating }}</span>
                <div class="stars">
                  <span
                    v-for="i in 5"
                    :key="i"
                    class="star"
                    :class="{ filled: i <= Math.floor(product.rating) }"
                    >★</span
                  >
                </div>
                <span class="rating-count">({{ product.reviewCount }})</span>
              </div>
              <div v-if="product.originalPrice" class="original-price">
                {{ product.originalPrice }}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Trendy Categories Sidebar -->
      <div class="trendy-categories">
        <div class="section-header">
          <h3 class="section-title">⚡ Trendy categories</h3>
        </div>
        <div class="categories-list">
          <div
            v-for="category in trendyCategories"
            :key="category.id"
            class="category-item"
          >
            <img
              :src="category.icon"
              :alt="category.name"
              class="category-icon"
            />
            <span class="category-name">{{ category.name }}</span>
            <span class="category-arrow">›</span>
          </div>
        </div>
      </div>
    </div>

    <!-- School New Hits Slider - Full Width -->
    <div class="school-hits-section">
      <div class="section-header">
        <h3 class="section-title">School New Hits!</h3>
        <button class="see-all-btn">See all</button>
      </div>
      <div class="slider-container">
        <button
          class="slider-nav slider-prev"
          @click="slideLeft"
          :disabled="currentSlide === 0"
        >
          ‹
        </button>
        <div class="slider-wrapper" ref="sliderWrapper">
          <div
            class="slider-track"
            :style="{
              transform: `translateX(-${currentSlide * slideWidth}px)`,
            }"
          >
            <div v-for="item in schoolHits" :key="item.id" class="slider-item">
              <div class="for-you-product-card school-card">
                <div class="product-image-container">
                  <img
                    :src="item.image"
                    :alt="item.name"
                    class="product-image"
                  />
                  <button class="add-btn">+</button>
                </div>
                <div class="product-info">
                  <div class="product-price">{{ item.price }}</div>
                  <div class="product-name">{{ item.name }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="slider-nav slider-next"
          @click="slideRight"
          :disabled="currentSlide >= maxSlide"
        >
          ›
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ForYou",
  data() {
    return {
      currentSlide: 0,
      slideWidth: 200,
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
        {
          id: 5,
          name: "Kuromi Pencil Case",
          price: "25 QR",
          image:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=150&fit=crop",
        },
        {
          id: 6,
          name: 'Spider-Man Trolley Bag 18"',
          price: "189 QR",
          image:
            "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=200&h=150&fit=crop",
        },
        {
          id: 7,
          name: 'Spider-Man Trolley Bag 16"',
          price: "169 QR",
          image:
            "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=200&h=150&fit=crop",
        },
      ],
    };
  },
  computed: {
    maxSlide() {
      return Math.max(0, this.schoolHits.length - 5);
    },
  },
  methods: {
    slideLeft() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    },
    slideRight() {
      if (this.currentSlide < this.maxSlide) {
        this.currentSlide++;
      }
    },
  },
};
</script>

<style scoped>
.for-you-section {
  /* display: flex; */
  gap: 24px;
  width: 100%;
  padding: 0;
}
.top-section {
  display: flex;
}

.main-content {
  flex: 1;
}

/* Product Cards Grid */
.for-you-product-cards-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
  margin-bottom: 2px;
}

.for-you-product-card {
  /* background: white; */
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s;
  position: relative;
}

.for-you-product-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.product-image-container {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  padding: 16px;
  border-radius: 16px;
  height: 160px;
}

.product-image {
  width: 74%;
  height: 100%;
  object-fit: cover;
}

.favorite-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #ccc;
  transition: all 0.2s;
}

.favorite-btn:hover {
  color: #e31e24;
  background: white;
}

.add-btn {
  position: absolute;
  bottom: 8px;
  right: 8px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s;
}

.add-btn:hover {
  background: #e31e24;
  color: white;
}

.product-info {
  padding: 12px;
}

.product-price {
  font-size: 16px;
  font-weight: 700;
  color: #333;
  margin-bottom: 4px;
}

.product-name {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
}

.rating-value {
  font-weight: 600;
  color: #333;
}

.stars {
  display: flex;
  gap: 1px;
}

.star {
  color: #ddd;
  font-size: 12px;
}

.star.filled {
  color: #ffc107;
}

.rating-count {
  color: #666;
}

.original-price {
  text-decoration: line-through;
  color: #999;
  font-size: 12px;
  margin-top: 4px;
}

/* Trendy Categories */
.trendy-categories {
  flex: 0 0 260px;
  margin: 0 0 12px 16px;
  border-radius: 12px;
  background-color: #ebebeb;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.section-title {
  font-size: 18px;
  font-weight: 700;
  padding-top: 12px;
  padding-left: 10px;
  color: #333;
  margin: 0;
}

.categories-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px;
}

.category-item {
  display: flex;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  background-color: #fff;
  transition: background-color 0.2s;
  border-radius: 14px;
}

.category-item:hover {
  background-color: #f8f9fa;
}

.category-icon {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  object-fit: cover;
  margin-right: 12px;
}

.category-name {
  flex: 1;
  font-size: 14px;
  font-weight: 500;
  color: #333;
}

.category-arrow {
  color: #999;
  font-size: 16px;
}

/* School New Hits Slider */
.school-hits-section {
  width: 100%;
  margin-top: 32px;
  margin-bottom: 32px;
}

.see-all-btn {
  background: none;
  border: none;
  color: #e31e24;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 4px 0;
}

.see-all-btn:hover {
  text-decoration: underline;
}

.slider-container {
  position: relative;
  background: white;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.slider-wrapper {
  overflow: hidden;
  margin: 0 40px;
}

.slider-track {
  display: flex;
  gap: 16px;
  transition: transform 0.3s ease;
}

.slider-item {
  flex: 0 0 180px;
}

.school-card {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}

.school-card .product-image-container {
  height: 120px;
}

.school-card .product-info {
  padding: 8px;
}

.school-card .product-price {
  font-size: 14px;
}

.school-card .product-name {
  font-size: 12px;
  margin-bottom: 0;
}

.slider-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #e9ecef;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #333;
  transition: all 0.2s;
  z-index: 10;
}

.slider-nav:hover:not(:disabled) {
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.slider-nav:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.slider-prev {
  left: 8px;
}

.slider-next {
  right: 8px;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .for-you-product-cards-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .trendy-categories {
    flex: 0 0 250px;
  }
}

@media (max-width: 768px) {
  .for-you-section {
    flex-direction: column;
  }

  .trendy-categories {
    flex: none;
    order: -1;
  }

  .for-you-product-cards-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .slider-item {
    flex: 0 0 150px;
  }

  .slider-wrapper {
    margin: 0 32px;
  }
}

@media (max-width: 480px) {
  .for-you-product-cards-grid {
    grid-template-columns: 1fr;
  }
}
</style>
