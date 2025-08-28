<template>
  <div class="slider-container">
    <button @click="prevSlide" class="slider-nav slider-prev">‹</button>
    <button @click="nextSlide" class="slider-nav slider-next">›</button>
    
    <div class="slider-wrapper">
      <div 
        class="slider-track" 
        :style="{ transform: `translateX(-${currentSlide * slideWidth}%)` }"
      >
        <div 
          v-for="product in products" 
          :key="product.id" 
          class="product-card"
          :style="{ minWidth: slideWidth + '%' }"
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductSlider',
  props: {
    products: {
      type: Array,
      default: () => []
    },
    slidesToShow: {
      type: Number,
      default: 4
    }
  },
  data() {
    return {
      currentSlide: 0
    }
  },
  computed: {
    slideWidth() {
      return 100 / this.slidesToShow
    },
    maxSlides() {
      return Math.max(0, this.products.length - this.slidesToShow)
    }
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.maxSlides) {
        this.currentSlide++
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--
      }
    }
  }
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