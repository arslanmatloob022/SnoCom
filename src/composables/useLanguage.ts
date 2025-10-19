import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

export function useLanguage() {
  const { locale } = useI18n()

  const isRTL = computed(() => locale.value === 'ar')
  
  const direction = computed(() => isRTL.value ? 'rtl' : 'ltr')

  const setLanguage = (lang: string) => {
    locale.value = lang
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    localStorage.setItem('selectedLanguage', lang)
  }

  return {
    locale,
    isRTL,
    direction,
    setLanguage
  }
}