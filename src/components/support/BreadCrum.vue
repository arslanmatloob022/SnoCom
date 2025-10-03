<!-- Breadcrumb.vue -->
<template>
  <div class="BreadCrumbs_wrapper__U47I_">
    <ol itemtype="https://schema.org/BreadcrumbList" class="flex items-center">
      <li
        v-for="(crumb, index) in crumbs"
        :key="index"
        itemprop="itemListElement"
        itemtype="https://schema.org/ListItem"
        class="flex items-center"
      >
        <template v-if="crumb.href">
          <router-link
          style="margin-right: -2px;"
            :to="crumb.href"
            itemtype="https://schema.org/WebPage"
            itemprop="item"
            :itemid="crumb.href"
          >
            <span itemprop="name">{{ crumb.name }}</span>
          </router-link>
        </template>
        <template v-else>
          <span itemprop="name">{{ crumb.name }}</span>
        </template>
        <!-- <meta itemprop="position" :content="index + 1" /> -->
        <!-- <span class="mr-2"> &gt; </span> -->

        <i  v-if="index < crumbs.length - 1" class="fa-solid fa-angle-right mr-2"></i>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  crumbs: Array<{
    name: string;
    href?: string;
  }>;
}>();
</script>
