<template>
  <div class="search-wrapper">
    <div class="search-selector" @click="toggleSelector">
      <span class="p3">{{ selectedCategory }}</span>
      <span>▼</span>
    </div>
    <input 
      v-model="searchQuery" 
      type="text" 
      class="search-input" 
      placeholder="Search for stores and products"
      @keyup.enter="handleSearch"
    >
    <button @click="handleSearch" class="search-btn">
      🔍
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