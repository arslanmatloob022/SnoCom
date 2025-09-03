<script lang="ts" setup>


</script>

<template>
     <div class="ContentWrapper_container">
    <BreadCrum
  :crumbs="[
    { name: 'Home Page', href: '/' },
    { name: 'Resturants' }
  ]"
/>
        <h1 class="Typography_h1">Restaurants &amp; Cafes</h1>

        <p class="Typography_p7 Description_text">Snoonu has what you are looking for in the online food delivery. Everyone's favorite restaurants</p>

        <FamousReturnats/>
        <resturants-list/>
        </div>
</template>
