<script lang="ts" setup></script>

<template>
  <div class="ContentWrapper_container">
    <BreadCrum
      :crumbs="[{ name: 'Home Page', href: '/' }, { name: 'S City' }]"
    />
    <h1 class="Typography_h1">S &amp; City</h1>

    <p class="Typography_p7 Description_text">
      Snoonu has what you are looking for in the online food delivery.
      Everyone's favorite restaurants
    </p>

    <FamousReturnats />
    <DateFilters />
    <Scity />
    <!-- <resturants-list /> -->
  </div>
</template>
