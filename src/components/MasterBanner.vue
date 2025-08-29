<template>
  <div class="flex flex-col md:flex-row gap-5">
    <!-- Middle - Main Carousel -->
    <div
      class="order-1 md:order-2 w-full md:w-[35%] relative rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 h-[200px] md:h-[360px]"
    >
      <div class="relative w-full h-full">
        <div
          v-for="(slide, index) in slides"
          :key="index"
          class="absolute top-0 left-0 w-full h-full transition-transform duration-700"
          :style="{ transform: `translateY(-${currentSlide * 100}%)` }"
        >
          <img
            :src="slide.image"
            :alt="slide.title"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>

    <!-- Left Side - Product Categories -->

    <div
      class="order-2 md:order-1 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-gray-50 rounded-2xl p-4 w-full md:w-[40%] h-auto md:h-[360px]"
    >
      <div
        v-for="category in categories"
        :key="category.id"
        class="flex flex-col items-center justify-start p-3 bg-white rounded-xl shadow-sm hover:shadow-md hover:-translate-y-1 transition cursor-pointer"
        @click="$emit('category-click', category)"
      >
        <!-- Image Box -->
        <div
          class="w-20 h-20 flex items-center justify-center mb-3 overflow-hidden rounded-xl bg-gray-100"
        >
          <img
            :src="category.image"
            :alt="category.name"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Title -->
        <h4
          class="text-sm font-medium text-gray-800 text-center truncate w-full"
        >
          {{ category.name }}
        </h4>
      </div>
    </div>

    <!-- Right Side - Promotional Banners -->
    <div
      class="hidden md:flex order-3 flex-col gap-4 h-[350px] w-[25%] promo-banners"
    >
      <div
        class="flex-1 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition"
      >
        <img
          src="https://images.unsplash.com/photo-1427751840561-9852520f8ce8?w=400&h=200"
          alt="Back to School"
          class="w-full h-full object-cover"
        />
      </div>
      <div
        class="flex-1 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition"
      >
        <img
          src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=200"
          alt="Happy Dogs Today"
          class="w-full h-full object-cover"
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
