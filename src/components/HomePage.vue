<template>
  <div>

  
   <Header />
  <div class="ContentWrapper_container">
   



      <MasterBanner />

      <!-- Category Carousel -->
      <!-- <CategoryCarousel @select="handleCategorySelect" /> -->

      <!-- Filters -->

      <!-- offer product grid -->
      <!-- <FilterBar @filter-change="handleFilterChange" /> -->
      
      <!-- Product Grid -->
      <!-- <ProductGrid
      :products="allProducts"
      :filters="activeFilters"
      @product-click="handleProductClick"
      /> -->
      
      <!-- <FoodProducts /> -->
      
      
      <!-- Main Section with For You / Popular Toggle -->
      <MainSection />
      
      <OfferProductbanner />
      <Brandlogos />
     


    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import MasterBanner from "./MasterBanner.vue";
import CategoryCarousel from "./CategoryCarousel.vue";
import FilterBar from "./FilterBar.vue";
import MainSection from "./MainSection.vue";
import ProductGrid from "./ProductGrid.vue";
import Footer from "./Footer.vue";
import OfferProductbanner from "./OfferProductbanner.vue";
import Brandlogos from "./Brandlogos.vue";
import SameCatCard from "./SameCatCard.vue";

export default {
  name: "HomePage",
  components: {
    Header,
    MasterBanner,
    CategoryCarousel,
    OfferProductbanner,
    FilterBar,
    MainSection,
    ProductGrid,
    Brandlogos,
    Footer,
  },
  data() {
    return {
      activeFilters: [],
      featuredProducts: [
        {
          id: 1,
          name: "KFC",
          image:
            "https://images.unsplash.com/photo-1513639776629-7b61b0ac49cb?w=400",
          rating: 4.4,
          priceRange: "$$$",
          tags: "Fast Food, Burgers, Fried Chicken",
          deliveryTime: 34,
          discount: 30,
          freeDelivery: true,
          minPrice: 25,
          takeaway: true,
        },
        {
          id: 2,
          name: "BLaban",
          image:
            "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400",
          rating: 4.5,
          priceRange: "$$$",
          tags: "Arabic Sweets, Egyptian, Desserts",
          deliveryTime: 33,
          discount: 0,
          freeDelivery: false,
          minPrice: 35,
          takeaway: true,
        },
        {
          id: 3,
          name: "McDonald's",
          image:
            "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400",
          rating: 4.4,
          priceRange: "$$$",
          tags: "Breakfast, Fast Food, American, Coffee",
          deliveryTime: 26,
          discount: 50,
          freeDelivery: true,
          minPrice: 20,
          takeaway: true,
        },
        {
          id: 4,
          name: "Jollibee",
          image:
            "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400",
          rating: 4.6,
          priceRange: "$$$",
          tags: "Fast Food, Fried Chicken, Burgers",
          deliveryTime: 40,
          discount: 50,
          freeDelivery: true,
          minPrice: 30,
          takeaway: true,
        },
        {
          id: 5,
          name: "Pizza Hut",
          image:
            "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400",
          rating: 4.2,
          priceRange: "$$",
          tags: "Pizza, Italian, Fast Food",
          deliveryTime: 45,
          discount: 60,
          freeDelivery: false,
          minPrice: 40,
          takeaway: true,
        },
        {
          id: 6,
          name: "Subway",
          image:
            "https://images.unsplash.com/photo-1555072956-7758afb20e8f?w=400",
          rating: 4.3,
          priceRange: "$$",
          tags: "Sandwiches, Healthy, Fast Food",
          deliveryTime: 25,
          discount: 30,
          freeDelivery: true,
          minPrice: 15,
          takeaway: true,
        },
      ],
      allProducts: [],
    };
  },
  mounted() {
    // Duplicate featured products for grid display
    this.allProducts = [
      ...this.featuredProducts,
      ...this.featuredProducts.map((p) => ({ ...p, id: p.id + 100 })),
    ];
  },
  methods: {
    handleCategorySelect(categoryId) {
      console.log("Selected category:", categoryId);
    },
    handleFilterChange(filters) {
      this.activeFilters = filters;
    },
    handleProductClick(product) {
      console.log("Clicked product:", product);
    },
    handleCategoryClick(category) {
      console.log("Clicked category:", category);
    },
    goToFood(type = "button") {
      // window.alert("Navigating to Food Products page!");
      this.$router.push("/food");
    },
  },
};
</script>
