<template>
  <div class="filters">
    <button 
      v-for="filter in filters" 
      :key="filter.id"
      :class="['filter-btn', { active: activeFilters.includes(filter.id) }]"
      @click="toggleFilter(filter.id)"
    >
      <span v-if="filter.icon">{{ filter.icon }}</span>
      {{ filter.name }}
    </button>
  </div>
</template>

<script>
export default {
  name: 'FilterBar',
  data() {
    return {
      activeFilters: [],
      filters: [
        { id: 'delivery', name: 'Free Delivery', icon: '🚚' },
        { id: 'time', name: 'Under 30 min', icon: '⏱️' },
        { id: 'price', name: 'Less than 50 QR', icon: '💰' },
        { id: 'takeaway', name: 'Takeaway', icon: '🥡' }
      ]
    }
  },
  methods: {
    toggleFilter(filterId) {
      const index = this.activeFilters.indexOf(filterId)
      if (index > -1) {
        this.activeFilters.splice(index, 1)
      } else {
        this.activeFilters.push(filterId)
      }
      this.$emit('filter-change', this.activeFilters)
    }
  },
  emits: ['filter-change']
}
</script>