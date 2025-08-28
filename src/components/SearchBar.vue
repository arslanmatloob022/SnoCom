<template>
  <div class="search-wrapper" style="border-radius: 30px;">
    <div class="search-selector" @click="toggleSelector">
      <span class="p3">{{ selectedCategory }}</span>
      <span><i class="fa-solid fa-angle-down"></i></span>
    </div>
    <input 
      v-model="searchQuery" 
      type="text" 
      class="search-input" 
      placeholder="Search for stores and products"
      @keyup.enter="handleSearch"
    >
   <button 
  @click="handleSearch" 
  class="bg-red-500 text-white px-8 py-0 rounded-full"
>
  <i class="fa-solid fa-magnifying-glass"></i>
</button>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  data() {
    return {
      searchQuery: '',
      selectedCategory: 'Everywhere',
      categories: ['Everywhere', 'Restaurants', 'Grocery', 'Pharmacy']
    }
  },
  methods: {
    toggleSelector() {
      // Toggle category selector
    },
    handleSearch() {
      this.$emit('search', {
        query: this.searchQuery,
        category: this.selectedCategory
      })
    }
  },
  emits: ['search']
}
</script>