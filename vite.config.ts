import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Layouts from 'vite-plugin-vue-layouts'
import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports, getPascalCaseRouteName } from 'unplugin-vue-router'

export default defineConfig({
  plugins: [
    VueRouter({ getRouteName: getPascalCaseRouteName }),
    Vue(),
    Layouts(),
    Components({ dts: true }),
    AutoImport({
      dts: true,
      vueTemplate: true,
      imports: ['vue', 'pinia', VueRouterAutoImports],
    }),
  ],
server: {
  host: true,
  open: true,
  proxy: {
    '/rest': {
      target: 'https://biparous-nevoid-demi.ngrok-free.dev',
      changeOrigin: true,
    },
  },
},
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
