import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import ar from './locales/ar.json'
import es from './locales/es.json'
import fr from './locales/fr.json'

const messages = {
  en,
  ar,
  es,
  fr
}

// Get saved language or default to English
const savedLanguage = localStorage.getItem('selectedLanguage') || 'en'
const initialLocale = ['en', 'ar', 'es', 'fr'].includes(savedLanguage) ? savedLanguage : 'en'

// Set initial document attributes
document.documentElement.lang = initialLocale
document.documentElement.dir = initialLocale === 'ar' ? 'rtl' : 'ltr'

const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: 'en',
  messages
})

export default i18n