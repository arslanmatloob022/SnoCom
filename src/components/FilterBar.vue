<template>
  <div class="w-full px-3 py-4">
    <div class="flex flex-wrap gap-3 justify-center sm:justify-start">
      <button
        v-for="filter in filters"
        :key="filter.id"
        @click="toggleFilter(filter.id)"
        :class="[
          'px-4 py-2 rounded-full border text-sm md:text-base font-medium transition-all flex items-center gap-2',
          activeFilters.includes(filter.id)
            ? 'bg-red-500 text-white border-red-500'
            : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100',
        ]"
      >
        <span v-if="filter.icon">{{ filter.icon }}</span>
        {{ filter.name }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterBar",
  data() {
    return {
      activeFilters: [],
      filters: [
        { id: "delivery", name: "Free Delivery", icon: "🚚" },
        { id: "time", name: "Under 30 min", icon: "⏱️" },
        { id: "price", name: "Less than 50 QR", icon: "💰" },
        { id: "takeaway", name: "Takeaway", icon: "🥡" },
      ],
    };
  },
  methods: {
    toggleFilter(filterId) {
      const index = this.activeFilters.indexOf(filterId);
      if (index > -1) {
        this.activeFilters.splice(index, 1);
      } else {
        this.activeFilters.push(filterId);
      }
      this.$emit("filter-change", this.activeFilters);
    },
  },
  emits: ["filter-change"],
};
</script>
