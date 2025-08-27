<template>
  <div class="BreadCrumbs_wrapper__U47I_">
    <ol itemScope="" itemType="https://schema.org/BreadcrumbList">
      <li v-for="(crumb, index) in breadcrumbs" :key="index" 
          itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem">
        <a v-if="crumb.href" :href="crumb.href" itemScope="" itemType="https://schema.org/WebPage" 
           itemProp="item" :itemID="crumb.href">
          <span itemProp="name">{{ crumb.name }}</span>
        </a>
        <span v-else itemProp="name">{{ crumb.name }}</span>
        <meta itemProp="position" :content="index + 1" />
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'BreadCrumbs',
  props: {
    breadcrumbs: {
      type: Array,
      default: () => [
        { name: 'Home Page', href: 'index.html' },
        { name: 'Restaurants' }
      ]
    }
  }
}
</script>