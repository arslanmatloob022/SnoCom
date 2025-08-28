<template>
  <div class="master-banner">
    <!-- Left Side - Product Categories -->
    <div class="categories-grid">
      <div
        v-for="category in categories"
        :key="category.id"
        class="category-card"
        @click="$emit('category-click', category)"
      >
        <div class="category-icon">
          <img :src="category.image" :alt="category.name" />
        </div>
        <div class="category-text">
          <h4>{{ category.name }}</h4>
        </div>
      </div>
    </div>

    <!-- Middle - Main Carousel -->
    <div class="main-carousel">
      <div class="carousel-container">
        <div
          class="carousel-slide"
          v-for="(slide, index) in slides"
          :key="index"
          :class="{ active: currentSlide === index }"
          :style="{ transform: `translateY(-${currentSlide * 100}%)` }"
        >
          <img :src="slide.image" :alt="slide.title" />
        </div>
      </div>
    </div>

    <!-- Right Side - Promotional Banners -->
    <div class="promo-banners">
      <div class="promo-card promo-top">
        <img
          src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?w=400&h=200"
          alt="Back to School"
        />
      </div>
      <div class="promo-card promo-bottom">
        <img
          src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=200"
          alt="Happy Dogs Today"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MasterBanner",
  data() {
    return {
      currentSlide: 0,
      slideInterval: null,
      categories: [
        {
          id: 1,
          name: "Health & Beauty",
          image:
            "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=80&h=80",
        },
        {
          id: 2,
          name: "Electronics",
          image:
            "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=80&h=80",
        },
        {
          id: 3,
          name: "Pets",
          image:
            "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=80&h=80",
        },
        {
          id: 4,
          name: "Toys & Kids",
          image:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&h=80",
        },
        {
          id: 5,
          name: "Fashion & Accessories",
          image:
            "https://images.unsplash.com/photo-1445205170230-053b83016050?w=80&h=80",
        },
        {
          id: 6,
          name: "Home & Garden",
          image:
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=80&h=80",
        },
        {
          id: 7,
          name: "Sports & Outdoors",
          image:
            "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=80&h=80",
        },
        {
          id: 8,
          name: "All Services",
          image:
            "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80",
        },
      ],
      slides: [
        {
          id: 1,
          title: "Corporate Offers",
          image:
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=400",
        },
        {
          id: 2,
          title: "Food Delivery",
          image:
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=400",
        },
        {
          id: 3,
          title: "Fresh Meals",
          image:
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=400",
        },
      ],
    };
  },
  mounted() {
    this.startSlideshow();
  },
  beforeUnmount() {
    this.stopSlideshow();
  },
  methods: {
    startSlideshow() {
      this.slideInterval = setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      }, 3000);
    },
    stopSlideshow() {
      if (this.slideInterval) {
        clearInterval(this.slideInterval);
      }
    },
  },
  emits: ["category-click"],
};
</script>

<style scoped>
.master-banner {
  display: grid;
  grid-template-columns: 780px 1fr 400px;
  gap: 16px;
  margin: 32px 0;
  height: 360px;
}

.categories-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: repeat(5, 1fr, 1fr);
  gap: 14px;
  background: #f8f9fa;
  /* padding: 20px; */
  border-radius: 16px;
}

.category-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  background: rgb(228, 227, 227);
  border-radius: 22px;
  cursor: pointer;
  transition: all 0.2s;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.category-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.category-icon {
  width: 90px;
  height: 90px;
  margin-bottom: 6px;
  border-radius: 8px;
  overflow: hidden;
}

.category-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-text h4 {
  font-size: 0.95rem;
  font-weight: 600;
  color: #333;
  line-height: 1.1;
  margin: 0;
}

.main-carousel {
  position: relative;
  border-radius: 20px;
  height: 360px;
  overflow: hidden;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.carousel-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.8s ease-in-out;
}

.carousel-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.promo-banners {
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 360px;
}

.promo-card {
  flex: 1;
  height: 140px;
  border-radius: 16px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
  position: relative;
}

.promo-card:hover {
  transform: scale(1.02);
}

.promo-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.promo-top {
  background: linear-gradient(135deg, #2c5530 0%, #4a7c59 100%);
}

.promo-bottom {
  background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
}

@media (max-width: 1024px) {
  .master-banner {
    grid-template-columns: 240px 1fr 240px;
    gap: 12px;
    height: 200px;
  }
}

@media (max-width: 768px) {
  .master-banner {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto;
    height: auto;
    gap: 16px;
  }

  .main-carousel {
    height: 180px;
  }

  .promo-banners {
    flex-direction: row;
    height: 120px;
  }

  .categories-grid {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    height: auto;
  }
}
</style>
