<template>
  <div class="language-switcher" ref="switcherRef">
    <button 
      @click="toggleDropdown" 
      class="language-button"
      :class="{ active: isOpen }"
    >
      <img :src="currentLanguage.flag" :alt="currentLanguage.name" class="flag-icon" />
      <span class="language-text">{{ currentLanguage.code.toUpperCase() }}</span>
      <svg class="chevron" :class="{ rotated: isOpen }" viewBox="0 0 24 24" fill="none">
        <path d="m12 13.232-6-6L4.232 9 12 16.768 19.768 9 18 7.232l-6 6Z" fill="currentColor"/>
      </svg>
    </button>
    
    <div v-if="isOpen" class="language-dropdown">
      <button 
        v-for="lang in languages" 
        :key="lang.code"
        @click="selectLanguage(lang.code)"
        class="language-option"
        :class="{ selected: currentLocale === lang.code }"
      >
        <img :src="lang.flag" :alt="lang.name" class="flag-icon" />
        <span>{{ lang.name }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useLanguage } from '@/composables/useLanguage'

const { locale, setLanguage } = useLanguage()
const isOpen = ref(false)
const switcherRef = ref<HTMLElement>()

const languages = [
  { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/us.png' },
  { code: 'ar', name: 'العربية', flag: 'https://flagcdn.com/w40/sa.png' },
  { code: 'es', name: 'Español', flag: 'https://flagcdn.com/w40/es.png' },
  { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/w40/fr.png' }
]

const currentLocale = computed(() => locale.value)
const currentLanguage = computed(() => 
  languages.find(lang => lang.code === currentLocale.value) || languages[0]
)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectLanguage = (langCode: string) => {
  setLanguage(langCode)
  isOpen.value = false
}

const handleClickOutside = (event: Event) => {
  if (switcherRef.value && !switcherRef.value.contains(event.target as Node)) {
    isOpen.value = false
  }
}

onMounted(() => {
  const savedLang = localStorage.getItem('selectedLanguage')
  if (savedLang && languages.find(lang => lang.code === savedLang)) {
    selectLanguage(savedLang)
  }
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.language-switcher {
  position: relative;
  display: inline-block;
}

.language-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 14px;
  color: #374151;
}

.language-button:hover,
.language-button.active {
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.flag-icon {
  width: 20px;
  height: 15px;
  object-fit: cover;
  border-radius: 2px;
}

.language-text {
  font-weight: 500;
}

.chevron {
  width: 16px;
  height: 16px;
  transition: transform 0.2s ease;
}

.chevron.rotated {
  transform: rotate(180deg);
}

.language-dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  background: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow: hidden;
}

.language-option {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px 16px;
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s ease;
  font-size: 14px;
  color: #374151;
  text-align: left;
}

.language-option:hover {
  background-color: #f3f4f6;
}

.language-option.selected {
  background-color: #eff6ff;
  color: #3b82f6;
}

.language-option:not(:last-child) {
  border-bottom: 1px solid #f3f4f6;
}
</style>