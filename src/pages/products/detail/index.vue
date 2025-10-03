<script lang="ts" setup>
import ProductDetail from '@/components/product/ProductDetail.vue';

</script>

<template>
     <div class="ContentWrapper_container">
    <BreadCrum
  :crumbs="[
    { name: 'Home Page', href: '/' },
    { name: 'Electronics', href: '/market/electronics' },
    { name: 'New Mini Smartphone' }
  ]"
/>
         <ProductDetail />
         <RecomendedProducts/>
        </div>
</template>
