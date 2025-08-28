<template>
  <div class="category-container">
    <!-- Left side categories -->
    <div class="categories-grid">
      <div 
        v-for="(cat, index) in categories" 
        :key="index" 
        class="category-item"
      >
        <img :src="cat.icon" alt="" class="category-icon" />
        <span class="category-name">{{ cat.name }}</span>
      </div>
    </div>

    <!-- Right side slider (empty for now, since you removed it) -->
  </div>
</template>

<script>
export default {
  name: "CategorySlider",
  data() {
    return {
      categories: [
        { name: "Health & Beauty", icon: "https://img.icons8.com/fluency/48/perfume-bottle.png" },
        { name: "Electronics", icon: "https://img.icons8.com/color/48/laptop.png" },
        { name: "Pets", icon: "https://img.icons8.com/color/48/dog.png" },
        { name: "Toys & Kids", icon: "https://img.icons8.com/color/48/teddy-bear.png" },
        { name: "Fashion & Accessories", icon: "https://img.icons8.com/color/48/handbag.png" },
        { name: "Home & Garden", icon: "https://img.icons8.com/color/48/plant.png" },
        { name: "Sports & Outdoors", icon: "https://img.icons8.com/color/48/soccer-ball.png" },
        { name: "All Services", icon: "https://img.icons8.com/color/48/services.png" },
      ],
      slides: [
        { img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800" },
        { img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800" },
        { img: "https://images.unsplash.com/photo-1600891965050-d7f8e48eacb4?w=800" },
      ],
      activeSlide: 0,
    };
  },
  methods: {
    nextSlide() {
      this.activeSlide = (this.activeSlide + 1) % this.slides.length;
    },
    prevSlide() {
      this.activeSlide = (this.activeSlide - 1 + this.slides.length) % this.slides.length;
    },
  },
};
</script>

<style scoped>
.category-container {
  display: flex;
  gap: 1rem; /* same as Tailwind gap-4 */
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* same as grid-cols-2 */
  gap: 1rem;
  width: 50%; /* same as w-1/2 */
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem; /* same as p-4 */
  border-radius: 0.5rem; /* same as rounded-lg */
  background: white;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1); /* same as shadow */
  cursor: pointer;
  transition: box-shadow 0.2s ease-in-out;
}

.category-item:hover {
  box-shadow: 0 4px 6px rgba(0,0,0,0.15); /* hover:shadow-md */
}

.category-icon {
  width: 3rem;  /* w-12 */
  height: 3rem; /* h-12 */
  margin-bottom: 0.5rem; /* mb-2 */
}

.category-name {
  font-size: 0.875rem; /* text-sm */
  font-weight: 600; /* font-semibold */
}
</style>
