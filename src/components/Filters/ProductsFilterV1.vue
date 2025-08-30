<template>
  <div class="flex flex-wrap gap-2 py-4">
    <button
      v-for="filter in filters"
      :key="filter"
      class="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-sm font-medium"
      @click="$emit('apply', filter)"
    >
      {{ filter }}
    </button>
  </div>
</template>

<script setup>
const filters = [
  "Free Delivery",
  "Under 30 min",
  "Less than 50 QR",
  "Takeaway",
];
</script>
