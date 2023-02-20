import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio',
  define: {
    'process.env': {},
  },
  build: {
    target: 'esnext',
  },
   css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@forward "./src/scss/index";'
      },
    },
  },
  plugins: [vue()],
})
