import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// @vitejs/plugin-vue is required so Vite can compile the .vue single-file components.
export default defineConfig({
  root: fileURLToPath(new URL('.', import.meta.url)),
  plugins: [vue()],
  server: {
    port: 5175,
    strictPort: true
  }
})
