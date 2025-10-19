import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import i18n from './i18n'
import globalTranslations from './plugins/globalTranslations'
import TranslateWrapper from './components/TranslateWrapper.vue'

import './router/permissions'
import './assets/styles/rtl.css'
import './assets/styles/global-rtl.css'

const app = createApp(App)

// Register global components
app.component('TranslateWrapper', TranslateWrapper)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(globalTranslations)

app.mount('#app')
