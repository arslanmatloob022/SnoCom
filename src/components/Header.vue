<template>
  <header class="header">
    <!-- Main Heade-->

    <!-- large screen -->
    <div class="hidden md:block w-full pt-2 px-3">
      <div class="grid grid-cols-12 items-center gap-3 px-4">
        <!-- Left (10%) -->

        <div class="col-span-1 flex items-center">
          <img
            src="https://snoonu.com/_next/static/media/logo.6da502f3.svg"
            alt="Snoonu"
            class="logo"
          />
        </div>

        <!-- Center (80%) -->
        <div class="col-span-10 flex items-center justify-between gap-4">
          <button
            @click="toggleCatalog"
            class="btn btn-secondary btn-small"
            style="border-radius: 30px"
          >
            <span style="color: black"><i class="fa-solid fa-bars"></i></span>
            <span style="font-weight: 800; font-size: 17px">Catalog</span>
          </button>

          <SearchBar />
        </div>

        <!-- Right (10%) -->
        <div>
          <button
            class="btn btn-secondary btn-small"
            style="border-radius: 20px; font-weight: 800; color: black"
          >
            Login
          </button>
        </div>
      </div>
    </div>

    <!-- mobile div  -->
    <div class="w-full pt-2 px-3 md:hidden">
      <div class="grid grid-cols-12 items-center gap-4">
        <!-- First Row: Logo, Catalog, Login -->
        <div
          class="col-span-12 flex items-center justify-between md:col-span-12 md:justify-start md:gap-4"
        >
          <!-- Logo -->
          <div class="flex gap-2">
            <div class="flex items-center">
              <img
                src="https://snoonu.com/_next/static/media/logo.6da502f3.svg"
                alt="Snoonu"
                class="h-8 md:h-10"
              />
    <div class="w-full pt-2 px-3">
      <div class="grid grid-cols-12 items-center px-4">
        <!-- Left (10%) -->
        <div class="col-span-1 flex items-center">
          <img
            src="https://snoonu.com/_next/static/media/logo.6da502f3.svg"
            alt="Snoonu"
            class="logo"
          />
        </div>

        <!-- Center (80%) -->
        <div class="col-span-10 flex items-center justify-center gap-4">
          <button
            @click="toggleCatalog"
            class="btn btn-secondary btn-small"
            style="border-radius: 30px"
          >
            <span style="color: black"><i class="fa-solid fa-bars"></i></span>
            <span style="font-weight: 800; font-size: 17px">Catalog</span>
          </button>
          <SearchBar />
        </div>

        <!-- Right (10%) -->
        <div>
          <button
            class="btn btn-secondary btn-small"
            style="border-radius: 20px; font-weight: 800; color: black"
          >
            Login
          </button>
        </div>
      </div>
    </div>

    <!-- Subheader -->
    <div class="subheader">
      <div style="width: 100%; padding: 8px 16px">
        <div class="subheader-content" style="padding: 0 30px">
          <div class="flex gap-16">
            <div class="p2">عربى</div>
            <div class="flex gap-8">
              <span><i class="fa-solid fa-location-dot"></i></span>
              <span class="p2">Doha, Qatar</span>
            </div>

            <!-- Catalog Button -->
            <button
              @click="toggleCatalog"
              class="btn btn-secondary btn-small rounded-full px-3 py-1 text-black font-bold flex items-center gap-2 md:flex md:items-center"
            >
              <i class="fa-solid fa-bars"></i>
              <span class="hidden md:inline font-semibold text-base"
                >Catalog</span
              >
            </button>
          </div>

          <!-- Login Button -->
          <button
            class="btn btn-secondary btn-small text-black font-bold rounded-full px-3 py-1 md:ml-auto"
          >
            Login
          </button>
        </div>

        <!-- Second Row: Search Bar -->
        <div
          class="col-span-12 mt-2 md:mt-0 md:col-span-10 md:flex md:items-center md:justify-between"
        >
          <SearchBar />
        </div>
      </div>
    </div>

    <!-- Subheader -->
    <div class="subheader bg-gray-50">
      <div class="w-full px-4 py-2 md:flex md:items-center md:justify-between">
        <!-- Left: Language & Location -->
        <div class="flex justify-between md:justify-start items-center gap-4">
          <div class="text-sm md:text-base">عربى</div>
          <div class="flex items-center gap-2 text-sm md:text-base">
            <i class="fa-solid fa-location-dot"></i>
            <span>Doha, Qatar</span>
          </div>
          <nav class="flex gap-[26px]">
            <router-link
              to="/"
              class="px-3 py-1 rounded-3xl hover:bg-gray-100"
              active-class="bg-gray-200"
              >Home</router-link
            >
            <router-link
              to="/food"
              class="px-3 py-1 rounded-3xl hover:bg-gray-100"
              active-class="bg-gray-200"
              >Food Products</router-link
            >
          </nav>
        </div>

        <!-- Right: Navigation -->
        <nav class="flex gap-2 md:gap-6 mt-2 md:mt-0 overflow-x-auto">
          <a
            href="#"
            class="px-3 py-1 rounded-3xl hover:bg-gray-100 whitespace-nowrap"
            >Market</a
          >
          <a
            href="#"
            class="px-3 py-1 rounded-3xl bg-gray-200 whitespace-nowrap"
            >Restaurants</a
          >
          <a
            href="#"
            class="px-3 py-1 rounded-3xl hover:bg-gray-100 whitespace-nowrap"
            >Grocery</a
          >
          <a
            href="#"
            class="px-3 py-1 rounded-3xl hover:bg-gray-100 whitespace-nowrap"
            >S City</a
          >
        </nav>
      </div>
    </div>

    <!-- Catalog Menu -->
    <div
      :class="['catalog-overlay', { active: showCatalog }]"
      @click="closeCatalog"
    ></div>
    <div :class="['catalog-menu', { active: showCatalog }]">
      <div class="catalog-header">
        <button
          v-if="currentView !== 'main'"
          @click="goBack"
          class="catalog-back-btn"
        >
          ← Go back
        </button>
        <h3 class="catalog-title">{{ currentTitle }}</h3>
        <button @click="closeCatalog" class="catalog-close">✕</button>
      </div>

      <div class="catalog-content">
        <!-- Main Menu -->
        <div v-if="currentView === 'main'">
          <div
            v-for="section in mainSections"
            :key="section.id"
            class="catalog-section"
          >
            <h4 v-if="section.title" class="catalog-section-title">
              {{ section.title }}
            </h4>
            <div
              v-for="item in section.items"
              :key="item.id"
              class="catalog-item"
              @click="handleItemClick(item)"
            >
              <div
                class="catalog-item-icon"
                :style="{ backgroundColor: item.bgColor }"
              >
                {{ item.icon }}
              </div>
              <div class="catalog-item-content">
                <p class="catalog-item-name">{{ item.name }}</p>
                <span v-if="item.hasChildren" class="catalog-item-arrow"
                  >›</span
                >
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
            <div
              class="catalog-item-icon"
              :style="{ backgroundColor: item.bgColor }"
            >
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
import SearchBar from "./SearchBar.vue";

export default {
  name: "Header",
  components: {
    SearchBar,
  },
  data() {
    return {
      showCatalog: false,
      currentView: "main",
      currentTitle: "Categories",
      currentSubmenu: [],
      mainSections: [
        {
          id: "services",
          title: null,
          items: [
            {
              id: "restaurants",
              name: "Restaurants",
              icon: "🍔",
              bgColor: "#ffebee",
              hasChildren: false,
            },
            {
              id: "snoomart",
              name: "Snoomart",
              icon: "🛒",
              bgColor: "#e8f5e8",
              hasChildren: false,
            },
            {
              id: "grocery",
              name: "Grocery",
              icon: "🥬",
              bgColor: "#e8f5e8",
              hasChildren: false,
            },
            {
              id: "flowers",
              name: "Flowers & Gifts",
              icon: "🌸",
              bgColor: "#fce4ec",
              hasChildren: false,
            },
            {
              id: "pharmacy",
              name: "Pharmacy",
              icon: "💊",
              bgColor: "#e3f2fd",
              hasChildren: false,
            },
            {
              id: "health",
              name: "Health & Beauty",
              icon: "💄",
              bgColor: "#fff3e0",
              hasChildren: true,
            },
            {
              id: "scity",
              name: "S City",
              icon: "🏢",
              bgColor: "#f3e5f5",
              hasChildren: false,
            },
          ],
        },
        {
          id: "market",
          title: "Market",
          items: [
            {
              id: "electronics",
              name: "Electronics",
              icon: "📱",
              bgColor: "#e3f2fd",
              hasChildren: true,
            },
            {
              id: "toys",
              name: "Toys & Kids",
              icon: "🧸",
              bgColor: "#fff3e0",
              hasChildren: true,
            },
            {
              id: "pets",
              name: "Pets",
              icon: "🐕",
              bgColor: "#ffebee",
              hasChildren: true,
            },
            {
              id: "home",
              name: "Home & Garden",
              icon: "🏡",
              bgColor: "#e8f5e8",
              hasChildren: true,
            },
            {
              id: "stationery",
              name: "Stationery & Supplies",
              icon: "📝",
              bgColor: "#f3e5f5",
              hasChildren: true,
            },
            {
              id: "sports",
              name: "Sports & Outdoors",
              icon: "⚽",
              bgColor: "#e0f2f1",
              hasChildren: true,
            },
          ],
        },
      ],
      submenus: {
        health: [
          { id: "perfumes", name: "Perfumes", icon: "🧴", bgColor: "#fff3e0" },
          { id: "makeup", name: "Makeup", icon: "💄", bgColor: "#fce4ec" },
          { id: "facecare", name: "Face Care", icon: "🧴", bgColor: "#fff3e0" },
          { id: "pharmacy2", name: "Pharmacy", icon: "💊", bgColor: "#e3f2fd" },
          {
            id: "eyeglasses",
            name: "Eyeglasses Supplies",
            icon: "👓",
            bgColor: "#ffebee",
          },
          {
            id: "momcare",
            name: "Mom & Baby Care",
            icon: "🍼",
            bgColor: "#fff3e0",
          },
          { id: "bodycare", name: "Body Care", icon: "🧴", bgColor: "#fce4ec" },
          {
            id: "haircare",
            name: "Hair Care & Styling",
            icon: "💇",
            bgColor: "#fff3e0",
          },
          {
            id: "personal",
            name: "Personal Care & Hygiene",
            icon: "🧼",
            bgColor: "#fff3e0",
          },
          {
            id: "vitamins",
            name: "Vitamins & Supplements",
            icon: "💊",
            bgColor: "#fff3e0",
          },
          { id: "mens", name: "Mens Grooming", icon: "🪒", bgColor: "#e3f2fd" },
        ],
        electronics: [
          {
            id: "phones",
            name: "Mobile Phones",
            icon: "📱",
            bgColor: "#e3f2fd",
          },
          {
            id: "laptops",
            name: "Laptops & Computers",
            icon: "💻",
            bgColor: "#e3f2fd",
          },
          {
            id: "headphones",
            name: "Headphones & Audio",
            icon: "🎧",
            bgColor: "#e3f2fd",
          },
        ],
      },
    };
  },
  methods: {
    toggleCatalog() {
      this.showCatalog = !this.showCatalog;
      this.resetToMain();
    },
    closeCatalog() {
      this.showCatalog = false;
      this.resetToMain();
    },
    resetToMain() {
      this.currentView = "main";
      this.currentTitle = "Categories";
      this.currentSubmenu = [];
    },
    handleItemClick(item) {
      if (item.hasChildren && this.submenus[item.id]) {
        this.currentView = "submenu";
        this.currentTitle = item.name;
        this.currentSubmenu = this.submenus[item.id];
      } else {
        console.log("Navigate to:", item.name);
        this.closeCatalog();
      }
    },
    handleSubItemClick(item) {
      console.log("Navigate to subcategory:", item.name);
      this.closeCatalog();
    },
    goBack() {
      this.resetToMain();
    },
  },
};
</script>
