import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mdPlugin, { Mode } from 'vite-plugin-markdown'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/deep-dive/',
  plugins: [vue(), mdPlugin({ mode: [Mode.VUE] })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
