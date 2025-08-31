<script lang="ts" setup>
import { ref } from "vue"

// Footer link sections
const footerSections = ref([
  {
    title: "Let us help you",
    links: [
      { label: "Help", href: "" },
      { label: "My Orders", href: "" },
      { label: "My Favorites", href: "" },
      { label: "Deals & Offers", href: "/deals" },
    ]
  },
  {
    title: "Electronics",
    links: [
      { label: "Mobiles", href: "/snoonu-market/electronics/mobiles" },
      { label: "Tablets", href: "/snoonu-market/electronics/tablets" },
      { label: "Wearable Technology", href: "/snoonu-market/electronics/wearable-gadgets" },
      { label: "More Electronics", href: "/snoonu-market/electronics" },
    ]
  },
  {
    title: "Health & Beauty",
    links: [
      { label: "Pharmacy", href: "/snoonu-market/health-and-beauty/pharmacy" },
      { label: "Personal Care & Hygiene", href: "/snoonu-market/health-and-beauty/personal-care-hygiene" },
      { label: "Vitamins & Supplements", href: "/snoonu-market/health-and-beauty/vitamins-supplements" },
      { label: "More Health & Beauty", href: "/snoonu-market/health-and-beauty" },
    ]
  },
  {
    title: "Pets",
    links: [
      { label: "Pet Food", href: "/snoonu-market/pets/pet-food" },
      { label: "Pet Accessories", href: "/snoonu-market/pets/pet-accessories" },
      { label: "Pet Care", href: "/snoonu-market/pets/pet-care" },
      { label: "More Pets", href: "/snoonu-market/pets" },
    ]
  },
  {
    title: "Clothes & Accessories",
    links: [
      { label: "Men", href: "/snoonu-market/clothes-and-accessories/men" },
      { label: "Women", href: "/snoonu-market/clothes-and-accessories/women" },
      { label: "Kids", href: "/snoonu-market/clothes-and-accessories/kids" },
      { label: "More Clothes & Accessories", href: "/snoonu-market/clothes-and-accessories" },
    ]
  },
  {
    title: "Sports & Outdoors",
    links: [
      { label: "Fitness Equipment", href: "/snoonu-market/sports-and-outdoors/fitness-equipment" },
      { label: "Sportswear", href: "/snoonu-market/sports-and-outdoors/sportswear" },
      { label: "Camping & Hiking", href: "/snoonu-market/sports-and-outdoors/camping-hiking" },
      { label: "More Sports & Outdoors", href: "/snoonu-market/sports-and-outdoors" },
    ]
  },
  {
    title: "Home & Kitchen",
    links: [
      { label: "Appliances", href: "/snoonu-market/home-and-kitchen/appliances" },
      { label: "Furniture", href: "/snoonu-market/home-and-kitchen/furniture" },
      { label: "Kitchenware", href: "/snoonu-market/home-and-kitchen/kitchenware" },
      { label: "More Home & Kitchen", href: "/snoonu-market/home-and-kitchen" },
    ]
  },
  {
    title: "Toys & Games",
    links: [
      { label: "Action Figures", href: "/snoonu-market/toys-and-games/action-figures" },
      { label: "Educational Toys", href: "/snoonu-market/toys-and-games/educational-toys" },
      { label: "Board Games", href: "/snoonu-market/toys-and-games/board-games" },
      { label: "More Toys & Games", href: "/snoonu-market/toys-and-games" },
    ]
  }
])


// Legal links
const legalLinks = ref([
  { label: "Sitemap", href: "/sitemap", target: "_self" },
  { label: "Become a Partner", href: "https://join.snoonu.com/en#contact-form", target: "_blank" },
  { label: "Terms & Services", href: "/terms", target: "_self" },
  { label: "Privacy Policy", href: "/privacy", target: "_self" },
])

// Social links
const socialLinks = ref([
  { name: "instagram", href: "https://www.instagram.com/snoonu", icon: "fab fa-instagram" },
  { name: "facebook", href: "https://www.facebook.com/snoonu.qa", icon: "fab fa-facebook-f" },
  { name: "twitter", href: "https://twitter.com/snoonu_qa", icon: "fab fa-twitter" },
]);



const appStores = ref([
  {
    name: "AppGallery",
    href: "https://appgallery.huawei.com/app/C105119593",
    img: "	https://snoonu.com/_next/static/media/appGallery.7c233d60.svg",
    alt: "Snoonu in AppGallery"
  },
  {
    name: "App Store",
    href: "https://apps.apple.com/qa/app/snoonu-%D8%B3%D9%86%D9%88%D9%86%D9%88-food-shopping/id1457458384",
    img: "	https://snoonu.com/_next/static/media/appStore.d144cd17.svg",
    alt: "Snoonu in App Store"
  },
  {
    name: "Google Play",
    href: "https://play.google.com/store/apps/details?id=com.snoonu.customerapp",
    img: "	https://snoonu.com/_next/static/media/googlePlay.0c329634.svg",
    alt: "Snoonu in Google Play"
  }
]);

const snoonuServices = ref([
  {
    name: "S Laundry",
    description: "Fast & Clean",
    href: "https://snoonu.onelink.me/U3EL/w3j5xt1n",
    img: "	https://snoonu.com/_next/static/media/laundary.fa407b25.png",
    alt: "S Laundry"
  },
  {
    name: "S City",
    description: "Events & Tickets",
    href: "/scity?source=footer",
    img: "	https://snoonu.com/_next/static/media/s-city.421e9dc1.png",
    alt: "S City"
  },
  {
    name: "Snoosend",
    description: "On-Spot Delivery",
    href: "https://snoonu.onelink.me/U3EL/udzfy8ji",
    img: "	https://snoonu.com/_next/static/media/snoosend.bcf70373.png",
    alt: "Snoosend"
  },
  {
    name: "Prime",
    description: "Fine Dining",
    href: "https://snoonu.onelink.me/U3EL/pg1refdk",
    img: "	https://snoonu.com/_next/static/media/prime.cbfa8192.png",
    alt: "Prime"
  },
  {
    name: "Takeaway",
    description: "Discover Qatar",
    href: "https://snoonu.onelink.me/U3EL/jfz589dq",
    img: "	https://snoonu.com/_next/static/media/takeaway.88873d50.png",
    alt: "Takeaway"
  }
]);
</script>

<template>
  <footer class="Footer_wrapper">
    <div class="BackToTop_container__UP_jh">
      <p class="Typography_p8">Back to top</p>
    </div>

    <!-- Main Footer Links -->
    <div class="Footer_container__W_Eon">
      <div class="FooterLinks_grid">
        <div v-for="section in footerSections" :key="section.title">
          <p class="Typography_p12">{{ section.title }}</p>
          <p v-for="link in section.links" :key="link.label" class="Typography_p9">
            <a rel="noopener noreferrer" :href="link.href">{{ link.label }}</a>
          </p>
        </div>
      </div>
    </div>

    <div class="Footer_divider"></div>
    <div class="Footer_container__W_Eon">

      <div class="Footer_moreServices">
        <p class="Typography_p10">More Services in Snoonu app</p>

        <div class="Footer_servicesContainer">
          <!-- App Stores -->
          <div class="Footer_appStores">
            <a v-for="store in appStores" :key="store.name" :href="store.href" target="_blank" rel="noopener noreferrer"
              data-analytic-label="applicationStoreButton" :data-analytic-event-content="store.name"
              data-analytic-element-location="footer">
              <div class="Footer_imageWrapper">
                <img :src="store.img" :alt="store.alt" />
              </div>
            </a>
          </div>

          <!-- Snoonu Services -->
          <div class="Footer_services">
            <a v-for="service in snoonuServices" :key="service.name" :href="service.href" target="_blank"
              rel="noopener noreferrer" data-analytic-element-location="footer">
              <div class="Footer_serviceItem">
                <div class="Footer_imageWrapper">
                  <img :src="service.img" :alt="service.alt" />
                </div>
                <div class="Footer_content">
                  <p class="Typography_p12">{{ service.name }}</p>
                  <p class="Typography_p9">{{ service.description }}</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    <!-- Bottom Section -->
    <div class="Footer_container__W_Eon pt-0" >
      <div class="Footer_bottomHalfContainer">
        <div class="Footer_legalLinks">
          <p class="Typography_p9 Footer_copyright">© 2025 Snoonu</p>
          <a v-for="link in legalLinks" :key="link.label" :href="link.href" :target="link.target"
            rel="noopener noreferrer" data-analytic-label="legalLink" class="Typography_p9">
            {{ link.label }}
          </a>
        </div>

        <!-- Social links -->
        <div class="Footer_socialLinks">
          <a v-for="social in socialLinks" :key="social.name" :href="social.href" target="_blank"
            rel="noopener noreferrer" data-analytic-label="socialButton" data-analytic-element-location="footer"
            :data-analytic-event-content="social.name">
            <div class="Footer_link__J_xuo">
              <i :class="social.icon"></i>
              <!-- <span>{{ social.name }}</span> -->
            </div>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
