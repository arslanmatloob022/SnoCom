<script lang="ts" setup>
import GroceriesGallery from "./GroceriesComponents/GroceriesGallery.vue";
import groceriesHeader from "./GroceriesComponents/GroceriesHeader.vue";
import GroceryFilter from "./GroceriesComponents/GroceryFilter.vue";
</script>

<template>
  <div class="ContentWrapper_container">
    <BreadCrum
      :crumbs="[{ name: 'Home Page', href: '/' }, { name: 'Groceries' }]"
    />
    <h1 class="Typography_h1">Groceries</h1>

    <p class="Typography_p7 Description_text">
      Your favorite nearest grocery store is at your fingertips. Order fresh
      vegetables, meat, dairy products, and much more online with the Snoonu
      delivery.
    </p>
    <groceriesHeader />

    <!-- <FamousReturnats /> -->
    <!-- <GroceriesHeader /> -->
    <!-- <DateFilters /> -->
    <GroceryFilter />
    <!-- <Scity /> -->
    <GroceriesGallery />
    <!-- <resturants-list /> -->
  </div>
</template>
