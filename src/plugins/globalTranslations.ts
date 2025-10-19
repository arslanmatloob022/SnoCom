import { App } from 'vue'
import { useI18n } from 'vue-i18n'

// Global mixin to provide translation functions to all components
export default {
  install(app: App) {
    app.mixin({
      computed: {
        $t() {
          const { t } = useI18n()
          return t
        },
        $locale() {
          const { locale } = useI18n()
          return locale
        },
        $isRTL() {
          const { locale } = useI18n()
          return locale.value === 'ar'
        },
        $direction() {
          const { locale } = useI18n()
          return locale.value === 'ar' ? 'rtl' : 'ltr'
        }
      },
      methods: {
        $translateText(key: string, fallback?: string) {
          const { t } = useI18n()
          try {
            const translated = t(key)
            return translated !== key ? translated : (fallback || key)
          } catch {
            return fallback || key
          }
        }
      }
    })

    // Global properties
    app.config.globalProperties.$t = (key: string) => {
      const { t } = useI18n()
      return t(key)
    }
  }
}