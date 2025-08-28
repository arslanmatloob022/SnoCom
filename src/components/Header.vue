<template>
  <header class="header">
   

    <!-- Main Header -->
    <div class="container">
      <div class="header-nav">

        <div class="flex gap-16 ">
          <img src="https://snoonu.com/_next/static/media/logo.6da502f3.svg" alt="Snoonu" class="logo">
          <button @click="toggleCatalog" class="btn btn-secondary btn-small">
            <span><i class="fa-solid fa-bars"></i></span>
            Catalog
          </button>
        </div>

        <SearchBar />

        <div class="flex gap-16">
          <button class="btn btn-secondary btn-small">Login</button>
          <button class="btn btn-primary btn-small">
            🛒 2,597 QR
          </button>
        </div>
      </div>
    </div>


     <!-- Subheader -->
    <div class="subheader">
      <div class="container">
        <div class="subheader-content">
          <div class="flex gap-16">
            <div class="p3">عربى</div>
            <div class="flex gap-8">
              <span>📍</span>
              <span class="p3">Doha, Qatar</span>
            </div>
          </div>
          <nav class="subheader-links">
            <a href="#" class="subheader-link">Market</a>
            <a href="#" class="subheader-link active">Restaurants</a>
            <a href="#" class="subheader-link">Grocery</a>
            <a href="#" class="subheader-link">S City</a>
          </nav>
        </div>
      </div>
    </div>  

    <!-- Catalog Menu -->
    <div :class="['catalog-overlay', { active: showCatalog }]" @click="closeCatalog"></div>
    <div :class="['catalog-menu', { active: showCatalog }]">
      <div class="catalog-header">
        <button v-if="currentView !== 'main'" @click="goBack" class="catalog-back-btn">
          ← Go back
        </button>
        <h3 class="catalog-title">{{ currentTitle }}</h3>
        <button @click="closeCatalog" class="catalog-close">✕</button>
      </div>
      
      <div class="catalog-content">
        <!-- Main Menu -->
        <div v-if="currentView === 'main'">
          <div v-for="section in mainSections" :key="section.id" class="catalog-section">
            <h4 v-if="section.title" class="catalog-section-title">{{ section.title }}</h4>
            <div 
              v-for="item in section.items" 
              :key="item.id" 
              class="catalog-item"
              @click="handleItemClick(item)"
            >
              <div class="catalog-item-icon" :style="{ backgroundColor: item.bgColor }">
                {{ item.icon }}
              </div>
              <div class="catalog-item-content">
                <p class="catalog-item-name">{{ item.name }}</p>
                <span v-if="item.hasChildren" class="catalog-item-arrow">›</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Submenu -->
        <div v-else-if="currentView === 'submenu'">
          <div 
            v-for="item in currentSubmenu" 
            :key="item.id" 
            class="catalog-item"
            @click="handleSubItemClick(item)"
          >
            <div class="catalog-item-icon" :style="{ backgroundColor: item.bgColor }">
              {{ item.icon }}
            </div>
            <div class="catalog-item-content">
              <p class="catalog-item-name">{{ item.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import SearchBar from './SearchBar.vue'

export default {
  name: 'Header',
  components: {
    SearchBar
  },
  data() {
    return {
      showCatalog: false,
      currentView: 'main',
      currentTitle: 'Categories',
      currentSubmenu: [],
      mainSections: [
        {
          id: 'services',
          title: null,
          items: [
            { id: 'restaurants', name: 'Restaurants', icon: '🍔', bgColor: '#ffebee', hasChildren: false },
            { id: 'snoomart', name: 'Snoomart', icon: '🛒', bgColor: '#e8f5e8', hasChildren: false },
            { id: 'grocery', name: 'Grocery', icon: '🥬', bgColor: '#e8f5e8', hasChildren: false },
            { id: 'flowers', name: 'Flowers & Gifts', icon: '🌸', bgColor: '#fce4ec', hasChildren: false },
            { id: 'pharmacy', name: 'Pharmacy', icon: '💊', bgColor: '#e3f2fd', hasChildren: false },
            { id: 'health', name: 'Health & Beauty', icon: '💄', bgColor: '#fff3e0', hasChildren: true },
            { id: 'scity', name: 'S City', icon: '🏢', bgColor: '#f3e5f5', hasChildren: false }
          ]
        },
        {
          id: 'market',
          title: 'Market',
          items: [
            { id: 'electronics', name: 'Electronics', icon: '📱', bgColor: '#e3f2fd', hasChildren: true },
            { id: 'toys', name: 'Toys & Kids', icon: '🧸', bgColor: '#fff3e0', hasChildren: true },
            { id: 'pets', name: 'Pets', icon: '🐕', bgColor: '#ffebee', hasChildren: true },
            { id: 'home', name: 'Home & Garden', icon: '🏡', bgColor: '#e8f5e8', hasChildren: true },
            { id: 'stationery', name: 'Stationery & Supplies', icon: '📝', bgColor: '#f3e5f5', hasChildren: true },
            { id: 'sports', name: 'Sports & Outdoors', icon: '⚽', bgColor: '#e0f2f1', hasChildren: true }
          ]
        }
      ],
      submenus: {
        health: [
          { id: 'perfumes', name: 'Perfumes', icon: '🧴', bgColor: '#fff3e0' },
          { id: 'makeup', name: 'Makeup', icon: '💄', bgColor: '#fce4ec' },
          { id: 'facecare', name: 'Face Care', icon: '🧴', bgColor: '#fff3e0' },
          { id: 'pharmacy2', name: 'Pharmacy', icon: '💊', bgColor: '#e3f2fd' },
          { id: 'eyeglasses', name: 'Eyeglasses Supplies', icon: '👓', bgColor: '#ffebee' },
          { id: 'momcare', name: 'Mom & Baby Care', icon: '🍼', bgColor: '#fff3e0' },
          { id: 'bodycare', name: 'Body Care', icon: '🧴', bgColor: '#fce4ec' },
          { id: 'haircare', name: 'Hair Care & Styling', icon: '💇', bgColor: '#fff3e0' },
          { id: 'personal', name: 'Personal Care & Hygiene', icon: '🧼', bgColor: '#fff3e0' },
          { id: 'vitamins', name: 'Vitamins & Supplements', icon: '💊', bgColor: '#fff3e0' },
          { id: 'mens', name: 'Mens Grooming', icon: '🪒', bgColor: '#e3f2fd' }
        ],
        electronics: [
          { id: 'phones', name: 'Mobile Phones', icon: '📱', bgColor: '#e3f2fd' },
          { id: 'laptops', name: 'Laptops & Computers', icon: '💻', bgColor: '#e3f2fd' },
          { id: 'headphones', name: 'Headphones & Audio', icon: '🎧', bgColor: '#e3f2fd' }
        ]
      }
    }
  },
  methods: {
    toggleCatalog() {
      this.showCatalog = !this.showCatalog
      this.resetToMain()
    },
    closeCatalog() {
      this.showCatalog = false
      this.resetToMain()
    },
    resetToMain() {
      this.currentView = 'main'
      this.currentTitle = 'Categories'
      this.currentSubmenu = []
    },
    handleItemClick(item) {
      if (item.hasChildren && this.submenus[item.id]) {
        this.currentView = 'submenu'
        this.currentTitle = item.name
        this.currentSubmenu = this.submenus[item.id]
      } else {
        console.log('Navigate to:', item.name)
        this.closeCatalog()
      }
    },
    handleSubItemClick(item) {
      console.log('Navigate to subcategory:', item.name)
      this.closeCatalog()
    },
    goBack() {
      this.resetToMain()
    }
  }
}
</script>