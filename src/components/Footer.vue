<template>
  <footer class="bg-[#eeeded] py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
        <!-- Footer Columns -->
        <div v-for="(section, index) in footerData" :key="index">
          <h3 class="text-xl font-semibold mb-4 text-black">{{ section.heading }}</h3>
          <ul>
            <li v-for="(item, i) in section.items" :key="i" class="mb-2">
              <a href="#" class="text-black hover:underline">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Sub Footer -->
      <div class="border-t border-gray-500 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between">
        <!-- Social Media Icons -->
        <div class="flex space-x-6 mb-4 md:mb-0">
          <a href="#" class="text-black hover:text-gray-600">
            <!-- Facebook -->
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H8.1v-2.89h2.34V9.41c0-2.3 1.37-3.57 3.47-3.57.99 0 2.02.18 2.02.18v2.23h-1.14c-1.12 0-1.47.7-1.47 1.41v1.7h2.5l-.4 2.89h-2.1v6.99C18.34 21.13 22 17 22 12z"/>
            </svg>
          </a>
          <a href="#" class="text-black hover:text-gray-600">
            <!-- Twitter -->
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.27 4.27 0 001.88-2.37 8.59 8.59 0 01-2.72 1.04 4.26 4.26 0 00-7.29 3.88A12.09 12.09 0 013 5.15a4.26 4.26 0 001.32 5.68 4.21 4.21 0 01-1.93-.53v.05a4.27 4.27 0 003.42 4.18 4.3 4.3 0 01-1.92.07 4.27 4.27 0 003.98 2.96A8.56 8.56 0 012 19.54 12.07 12.07 0 008.29 21c7.55 0 11.68-6.25 11.68-11.68 0-.18-.01-.35-.02-.53A8.36 8.36 0 0022.46 6z"/>
            </svg>
          </a>
          <a href="#" class="text-black hover:text-gray-600">
            <!-- Instagram -->
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7.75 2h8.5A5.76 5.76 0 0122 7.75v8.5A5.76 5.76 0 0116.25 22h-8.5A5.76 5.76 0 012 16.25v-8.5A5.76 5.76 0 017.75 2zm0 2A3.76 3.76 0 004 7.75v8.5A3.76 3.76 0 007.75 20h8.5A3.76 3.76 0 0020 16.25v-8.5A3.76 3.76 0 0016.25 4h-8.5zm4.25 3a5.25 5.25 0 110 10.5A5.25 5.25 0 0112 7zm0 2a3.25 3.25 0 100 6.5A3.25 3.25 0 0012 9zm5.5-.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"/>
            </svg>
          </a>
        </div>

        <!-- Copyright -->
        <p class="text-black text-sm">© 2025 All rights reserved</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      footerData: [
        {
          heading: 'Let us help you',
          items: ['Help', 'My Orders', 'My Favorites', 'Deals & Offers']
        },
        {
          heading: 'Electronics',
          items: ['Mobiles', 'Tablets', 'Wearable Technology', 'More Electronics']
        },
        {
          heading: 'Health & Beauty',
          items: ['Pharmacy', 'Personal Care & Hygiene', 'Vitamins & supplements', 'More Health & Beauty']
        },
        {
          heading: 'Household & Garden',
          items: ['Home Decor', 'Cleaning Supplies', 'Kitchen & Dining', 'More Household & Garden']
        }
      ]
    };
  }
};
</script>
