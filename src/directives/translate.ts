import { App, DirectiveBinding } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  install(app: App) {
    app.directive('translate', {
      mounted(el: HTMLElement, binding: DirectiveBinding) {
        const { t } = useI18n()
        const key = binding.value || el.textContent?.trim()
        if (key) {
          el.textContent = t(key)
        }
      },
      updated(el: HTMLElement, binding: DirectiveBinding) {
        const { t } = useI18n()
        const key = binding.value || el.textContent?.trim()
        if (key) {
          el.textContent = t(key)
        }
      }
    })
  }
}