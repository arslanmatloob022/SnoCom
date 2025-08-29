<template>
  <nav
    class="w-full rounded-2xl p-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between"
  >
    <!-- Bottom Row: Search -->
    <div
      class="flex w-full items-center border border-gray-300 rounded-full overflow-hidden mt-2 md:mt-0"
    >
      <!-- Category Selector -->
      <div
        class="bg-gray-100 px-3 py-2 flex items-center gap-1 cursor-pointer whitespace-nowrap"
        style="border-top-left-radius: 30px; border-bottom-left-radius: 30px"
        @click="toggleSelector"
      >
        <span class="text-sm md:text-base">{{ selectedCategory }}</span>
        <i class="fa-solid fa-angle-down"></i>
      </div>

      <!-- Search Input -->
      <input
        v-model="searchQuery"
        type="text"
        class="flex-1 px-3 py-2 outline-none text-sm md:text-base"
        placeholder="Search for stores and products"
        @keyup.enter="handleSearch"
      />

      <!-- Search Button -->
      <button
        @click="handleSearch"
        class="bg-red-500 text-white px-4 py-2 md:px-6 rounded-full hover:bg-red-600 transition-colors"
      >
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchQuery: "",
      selectedCategory: "Everywhere",
      categories: ["Everywhere", "Restaurants", "Grocery", "Pharmacy"],
    };
  },
  methods: {
    toggleSelector() {
      // Toggle category selector dropdown
    },
    handleSearch() {
      this.$emit("search", {
        query: this.searchQuery,
        category: this.selectedCategory,
      });
    },
  },
  emits: ["search"],
};
</script>
